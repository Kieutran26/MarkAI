const fs = require('fs');
const content = fs.readFileSync('d:\\MarkAI-1\\src\\lib\\glossary.ts', 'utf8');
const lines = content.split('\n');
const keys = [];
let inNotes = false;
for (let line of lines) {
    if (line.includes('const deepDiveNotes')) inNotes = true;
    if (inNotes) {
        const match = line.match(/^\s*['"]?([\w-]+)['"]?\s*:\s*\[/);
        if (match) {
            keys.push(match[1]);
        }
    }
    if (inNotes && line.includes('};')) {
        // We might have nested objects, but deepDiveNotes is simple Record<string, string[]>
        // So we stop at the first }; after the opening {
        if (line.trim() === '};') inNotes = false;
    }
}

const counts = {};
keys.forEach(k => counts[k] = (counts[k] || 0) + 1);
const dups = Object.keys(counts).filter(k => counts[k] > 1);

console.log('Duplicates found:', dups);
if (dups.length > 0) {
    dups.forEach(k => {
        console.log(`Key "${k}" appears ${counts[k]} times`);
    });
}
