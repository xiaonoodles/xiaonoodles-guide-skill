# 遇见小面智能小助手 Skill

遇见小面的专属 AI 服务助手技能，覆盖「找店 → 领券 → 推荐菜品」完整服务链路。基于 MCP（Model Context Protocol）协议，通过 Streamable HTTP 与后端通信。

## 功能概览

| 场景 | 说明 | MCP 工具 |
|------|------|----------|
| 门店查询 | 根据用户地址查询周边 3 公里内门店，返回地址、营业时间、电话、服务方式等 | `queryStoresByAddress` |
| 优惠券发放 | 获取 Skills 渠道专属优惠券链接，支持终端二维码展示 | `getPromoQr` |
| 菜谱推荐 | 按门店 + 就餐方式（堂食/外卖/自提）查询菜单，含价格、促销、售罄状态 | `queryStoreMenu` |

## 触发场景

| 用户可能会说 | 触发场景 |
|-------------|---------|
| "XX附近有什么遇见小面" / "附近吃面" / "找餐厅" | 门店查询 |
| "有什么优惠" / "优惠券" / "活动" | 优惠券发放 |
| "看看菜单" / "有什么菜" / "推荐菜品" | 菜谱推荐 |
| 首次进入对话 | 品牌欢迎语 |

## MCP 调用方式

通过 Node.js 脚本 `scripts/xiaonoodles_mcp.js` 调用：

```bash
node scripts/xiaonoodles_mcp.js <toolName> '<argsJson>'
```

### 示例

```bash
# 查询门店
node scripts/xiaonoodles_mcp.js queryStoresByAddress '{"address":"广州市海珠区新港东路"}'

# 获取优惠券
node scripts/xiaonoodles_mcp.js getPromoQr

# 查询菜谱（堂食）
node scripts/xiaonoodles_mcp.js queryStoreMenu '{"storeId":"1762960520600616960","sellChannelType":"DINEIN"}'
```

### 终端二维码打印

优惠券链接可通过 `scripts/qr_print.js` 在终端渲染为 ASCII 二维码，方便用户扫码领取：

```bash
node scripts/qr_print.js "https://xiaomian.pro/coupon/abc123"
```

## 工具参数说明

### queryStoresByAddress

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| address | string | 是 | 中文地址，如"广州市海珠区新港东路环球贸易中心" |

### getPromoQr

无需参数，直接调用即可。

### queryStoreMenu

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| storeId | string | 是 | 门店 ID |
| sellChannelType | string | 是 | `DINEIN`（堂食）/ `MINIAPP`（外卖）/ `TAKESELF`（自提） |

## 文件结构

```
xiaonoodles-guide-skill/
├── skill.json                        # 技能元数据（名称、版本、MCP 配置、工具定义）
├── SKILL.md                          # 技能执行指令（触发条件、执行步骤、话术规范）
├── README.md                         # 本文件
├── scripts/
│   ├── xiaonoodles_mcp.js            # MCP 调用脚本（初始化会话 → 调用工具 → 解析 SSE 响应）
│   └── qr_print.js                   # 终端二维码打印工具（依赖 qrcode-terminal）
├── references/
│   ├── brand-intro.md                # 品牌调性、语气风格、话术规范
│   ├── query_stores.md               # 门店查询场景说明与展示模板
│   ├── query_store_menu.md           # 菜谱查询场景说明与数据结构
│   └── send_coupons.md               # 优惠券发放场景说明与推送模板
└── .gitignore
```

## 技术细节

- MCP 端点：`[https://mcp.xiaomian.pro:8081/mcp](https://mcp.xiaomian.pro/mcp)`
- 传输协议：Streamable HTTPS（SSE）
- 会话管理：首次 `initialize` 请求返回 `Mcp-Session-Id` 响应头，后续请求需携带
- MCP 协议版本：`2024-11-05`
- 运行依赖：Node.js、qrcode-terminal（二维码打印）

## 品牌信息

遇见小面于 2014 年在广州创立，以重庆小面切入市场，招牌产品包括红碗豌杂面、金碗酸辣粉、抄手家族、小锅冒菜等。全球门店超 500 家，覆盖北京、上海、广州、深圳、香港、新加坡等城市。2025 年 12 月在港交所主板上市（股票代码：02408.HK），为"中式面馆第一股"。
