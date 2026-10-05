const fs = require('fs');

const filename = 'giao dien moi/Ve du an.html';
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
  fs.writeFileSync('scratch/unpacked_ve_du_an.html', template, 'utf8');
  console.log('Wrote scratch/unpacked_ve_du_an.html, length:', template.length);
} else {
  fs.writeFileSync('scratch/unpacked_ve_du_an.html', content, 'utf8');
  console.log('Saved raw content to scratch/unpacked_ve_du_an.html, length:', content.length);
}
