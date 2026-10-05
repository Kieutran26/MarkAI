const fs = require('fs');

const filename = 'giao dien moi/Vibecode Bai 01.html';
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
  fs.writeFileSync('scratch/unpacked_vibecode_bai_01.html', template, 'utf8');
  console.log('Wrote scratch/unpacked_vibecode_bai_01.html, length:', template.length);
}
