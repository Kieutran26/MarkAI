const fs = require('fs');

const filename = 'giao dien moi/Tu dien chuyen nganh.html';
const content = fs.readFileSync(filename, 'utf8');
const manifestMatch = content.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);
const templateMatch = content.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);

console.log('Manifest found:', !!manifestMatch);
console.log('Template found:', !!templateMatch);

if (templateMatch) {
  let template = JSON.parse(templateMatch[1]);
  if (manifestMatch) {
    const manifest = JSON.parse(manifestMatch[1]);
    for (const [id, res] of Object.entries(manifest)) {
      if (res && res.text) {
        template = template.split(id).join(res.text);
      }
    }
  }
  fs.writeFileSync('scratch/unpacked_tu_dien.html', template, 'utf8');
  console.log('Wrote scratch/unpacked_tu_dien.html, length:', template.length);
} else {
  fs.writeFileSync('scratch/unpacked_tu_dien.html', content, 'utf8');
  console.log('Saved raw content to scratch/unpacked_tu_dien.html, length:', content.length);
}
