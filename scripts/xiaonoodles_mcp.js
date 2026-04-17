const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');

const skillConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'skill.json'), 'utf8'));
const BASE_URL = skillConfig.mcp_server.url;

function httpPost(urlPath, body, headers) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(urlPath, BASE_URL);
    const transport = parsed.protocol === 'https:' ? https : http;
    const payload = JSON.stringify(body);
    const req = transport.request({
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      path: parsed.pathname + parsed.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream, application/json',
        'Content-Length': Buffer.byteLength(payload),
        ...headers
      }
    }, (res) => {
      const sessionId = res.headers['mcp-session-id'];
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ data, sessionId, statusCode: res.statusCode }));
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

function parseSseMessages(raw) {
  const messages = [];
  const parts = raw.split('\n\n');
  for (const part of parts) {
    if (!part.trim()) continue;
    const lines = part.split('\n');
    let eventType = null;
    let data = null;
    for (const line of lines) {
      if (line.startsWith('event:')) eventType = line.substring(6).trim();
      if (line.startsWith('data:')) data = line.substring(5).trim();
    }
    if (eventType === 'message' && data) {
      try { messages.push(JSON.parse(data)); } catch (e) { /* ignore */ }
    }
  }
  return messages;
}

async function callMcpTool(toolName, args) {
  // Step 1: Initialize session
  const initRes = await httpPost('/mcp', {
    jsonrpc: '2.0', id: 1, method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'meetfun-client', version: '1.0.2' }
    }
  });
  const sessionId = initRes.sessionId;
  if (!sessionId) throw new Error('No Mcp-Session-Id returned');

  const headers = { 'Mcp-Session-Id': sessionId };

  // Step 2: Send initialized notification
  await httpPost('/mcp', {
    jsonrpc: '2.0', method: 'notifications/initialized'
  }, headers);

  // Step 3: Call the tool
  const callRes = await httpPost('/mcp', {
    jsonrpc: '2.0', id: 2, method: 'tools/call',
    params: { name: toolName, arguments: args }
  }, headers);

  const messages = parseSseMessages(callRes.data);
  for (const msg of messages) {
    if (msg.id === 2) {
      if (msg.error) throw new Error(msg.error.message || JSON.stringify(msg.error));
      const text = msg.result?.content?.[0]?.text;
      return text || JSON.stringify(msg);
    }
  }

  throw new Error('No response received for tool call');
}

async function main() {
  const toolName = process.argv[2];
  if (!toolName) {
    console.log('用法: node scripts/xiaonoodles_mcp.js <toolName> [jsonArgs]');
    console.log('');
    console.log('示例 (PowerShell):');
    console.log('  node scripts/xiaonoodles_mcp.js queryStoresByAddress \'{\\"address\\":\\"广州市海珠区新港东路\\"}\'');
    console.log('');
    console.log('示例 (cmd):');
    console.log('  node scripts/xiaonoodles_mcp.js queryStoresByAddress "{\\"address\\":\\"广州市海珠区新港东路\\"}"');
    console.log('');
    console.log('示例 (bash / macOS / Linux):');
    console.log("  node scripts/xiaonoodles_mcp.js queryStoresByAddress '{\"address\":\"广州市海珠区新港东路\"}'");
    console.log('');
    console.log('  node scripts/xiaonoodles_mcp.js getPromoQr');
    console.log('');
    console.log('示例 JSON:');
    console.log('  queryStoresByAddress  {"address":"广州市海珠区新港东路"}');
    console.log('  sendCoupon            {"userId":"u_001","couponType":"new_user"}');
    process.exit(1);
  }

  let args = {};
  const rawArgsStr = process.argv[3];
  if (rawArgsStr) {
    // 1. 合并多余的 argv（某些 shell 会把 JSON 拆成多个参数）
    let argsStr = process.argv.slice(3).join(' ');
    // 2. 去掉外层可能残留的单/双引号
    argsStr = argsStr.replace(/^['"]|['"]$/g, '');

    // 3. 优先尝试直接解析
    try {
      args = JSON.parse(argsStr);
    } catch (_) {
      // 4. PowerShell 会吞双引号，尝试修复 {key:value} -> {"key":"value"}
      try {
        const fixed = argsStr
          .replace(/([{,])\s*([^"{},:\s]+)\s*:/g, '$1"$2":')
          .replace(/:\s*([^"{},\]\[\s][^,}\]]*)/g, ':"$1"');
        args = JSON.parse(fixed);
      } catch (__) {
        console.error('参数解析失败: ' + argsStr);
        console.error('请确保传入合法的 JSON，注意不同 shell 的引号转义方式');
        process.exit(1);
      }
    }
  }
  const result = await callMcpTool(toolName, args);
  console.log(result);
  process.exit(0);
}

main().catch(e => { console.error('错误:', e.message); process.exit(1); });
