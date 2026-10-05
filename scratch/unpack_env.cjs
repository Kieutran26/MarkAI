const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../giao dien moi/Tu dien - Environment.html');
const content = fs.readFileSync(srcPath, 'utf8');
const match = content.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);

if (match) {
  const jsonStr = match[1].trim();
  const rawHtml = JSON.parse(jsonStr);
  const outPath = path.join(__dirname, 'unpacked_tu_dien_environment.html');
  fs.writeFileSync(outPath, rawHtml, 'utf8');
  console.log('Successfully unpacked to', outPath, 'size:', rawHtml.length);
} else {
  console.log('No template found');
}
