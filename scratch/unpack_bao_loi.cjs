const fs = require('fs');

const content = fs.readFileSync('giao dien moi/Bao loi.html', 'utf8');
const match = content.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);
if (match) {
  try {
    const raw = JSON.parse(match[1]);
    fs.writeFileSync('scratch/unpacked_bao_loi.html', raw, 'utf8');
    console.log('Successfully unpacked to scratch/unpacked_bao_loi.html, length:', raw.length);
  } catch (e) {
    console.error('JSON parse error:', e);
  }
} else {
  console.log('No template tag found, saving direct content');
  fs.writeFileSync('scratch/unpacked_bao_loi.html', content, 'utf8');
}
