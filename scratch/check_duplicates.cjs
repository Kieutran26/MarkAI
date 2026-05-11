const fs = require('fs');
const content = fs.readFileSync('d:\\MarkAI-1\\src\\lib\\glossary.ts', 'utf8');

const match = content.match(/const deepDiveNotes: Record<string, string\[]> = ({[\s\S]*?});/);
if (match) {
    const objectStr = match[1];
    const keys = [];
    const lines = objectStr.split('\n');
    for (let line of lines) {
        const keyMatch = line.match(/^\s*['"]?([\w-]+)['"]?:\s*\[/);
        if (keyMatch) {
            keys.push(keyMatch[1]);
        }
    }
    
    const duplicates = keys.filter((item, index) => keys.indexOf(item) !== index);
    console.log('Duplicates:', duplicates);
} else {
    console.log('Could not find deepDiveNotes object');
}
