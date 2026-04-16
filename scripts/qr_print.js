const QRCode = require('qrcode');

/**
 * Print a QR code to the terminal
 * @param {string} text - The URL or text to encode
 * @param {Object} opts - Optional: { small: boolean } - use small mode for half-height characters
 */
async function printQR(text, opts = {}) {
  const { small = true } = opts;
  const code = await QRCode.toString(text, {
    type: 'terminal',
    small,
    errorCorrectionLevel: 'L',
  });
  console.log(code);
}

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('用法: node qr_print.js <url-or-text>');
    console.error('示例: node qr_print.js "https://example.com"');
    process.exit(1);
  }
  const text = args.join(' ');
  printQR(text, { small: true });
}

module.exports = { printQR };
