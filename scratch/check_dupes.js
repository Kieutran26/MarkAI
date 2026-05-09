
const fs = require('fs');
const content = fs.readFileSync('d:/MarkAI-1/src/lib/glossary.ts', 'utf8');

// Simple regex to find keys in objects like:  key: [
const matches = content.match(/^\s+['"]?([a-zA-Z0-9-]+)['"]?:\s*\[/gm);
if (matches) {
    const keys = matches.map(m => m.match(/([a-zA-Z0-9-]+)/)[1]);
    const counts = {};
    keys.forEach(k => counts[k] = (counts[k] || 0) + 1);
    const dupes = Object.keys(counts).filter(k => counts[k] > 1);
    console.log('Duplicates found:', dupes);
    dupes.forEach(k => {
        console.log(`Key "${k}" appears ${counts[k]} times.`);
    });
} else {
    console.log('No matches found.');
}
