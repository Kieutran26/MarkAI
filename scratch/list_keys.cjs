const fs = require('fs');
const content = fs.readFileSync('d:\\MarkAI-1\\src\\lib\\glossary.ts', 'utf8');
const lines = content.split('\n');
const keys = [];
let inNotes = false;
for (let line of lines) {
    if (line.includes('const deepDiveNotes')) inNotes = true;
    if (inNotes) {
        const match = line.match(/^\s*['"]?([\w-]+)['"]?:\s*\[/);
        if (match) keys.push(match[1]);
    }
    if (inNotes && line.includes('};')) inNotes = false;
}
console.log(JSON.stringify(keys));
