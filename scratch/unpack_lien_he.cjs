const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../giao dien moi/Lien he.html');
const content = fs.readFileSync(srcPath, 'utf8');

const match = content.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);
if (match) {
  const jsonStr = match[1].trim();
  const rawHtml = JSON.parse(jsonStr);
  const outPath = path.join(__dirname, 'unpacked_lien_he.html');
  fs.writeFileSync(outPath, rawHtml, 'utf8');
  console.log('Successfully unpacked to', outPath, 'size:', rawHtml.length);
} else {
  const matchData = content.match(/<script id="__bundler_data"[^>]*>([\s\S]*?)<\/script>/);
  if (matchData) {
    const data = JSON.parse(matchData[1]);
    const entryFile = data.files[data.entry];
    const outPath = path.join(__dirname, 'unpacked_lien_he.html');
    fs.writeFileSync(outPath, entryFile.content || '', 'utf8');
    console.log('Successfully unpacked from data to', outPath, 'size:', (entryFile.content || '').length);
  } else {
    const outPath = path.join(__dirname, 'unpacked_lien_he.html');
    fs.writeFileSync(outPath, content, 'utf8');
    console.log('Saved raw content to', outPath, 'size:', content.length);
  }
}
