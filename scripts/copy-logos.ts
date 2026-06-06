import fs from 'node:fs';
import path from 'node:path';

const logos = [
  'Google-Stitch-Logo.png',
  'aistudio.png',
  'base44.png',
  'claude-design.png',
  'figma-make-logo.png',
  'lovable-logo.avif',
  'replit.png',
  'v0.png'
];

const srcDir = process.cwd();
const destDir = path.join(process.cwd(), 'public');

for (const logo of logos) {
  const srcPath = path.join(srcDir, logo);
  const destPath = path.join(destDir, logo);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${logo} to public/`);
  } else {
    console.error(`File not found: ${srcPath}`);
  }
}
