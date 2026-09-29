import { spawn } from 'node:child_process';

const isWindows = process.platform === 'win32';
const shellCmd = isWindows ? process.env.ComSpec || 'cmd.exe' : 'sh';
const shellFlag = isWindows ? '/c' : '-c';

const webChild = spawn(shellCmd, [shellFlag, 'npm run dev:web'], { stdio: 'inherit' });
const serverChild = spawn(shellCmd, [shellFlag, 'npm run dev:server'], { stdio: 'inherit' });
const children = [webChild, serverChild];

let shuttingDown = false;

const shutdown = (code = 0) => {
  if (shuttingDown) return;
  shuttingDown = true;

  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGTERM');
    }
  }

  setTimeout(() => process.exit(code), 200);
};

webChild.on('exit', (code) => {
  shutdown(code ?? 0);
});

serverChild.on('exit', (code) => {
  if (code !== 0 && !shuttingDown) {
    console.warn('\n[dev:server] Admin API server stopped (DATABASE_URL may not be configured). Public web app continues running.\n');
  }
});

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

// --- AUTO-WATCHER FOR LESSON MARKDOWN ---
import fs from 'node:fs';
import { exec } from 'node:child_process';

let watchTimeout = null;
fs.watch('.', (eventType, filename) => {
  if (filename && filename.endsWith('.md') && filename.startsWith('Bài 4')) {
    if (watchTimeout) clearTimeout(watchTimeout);
    watchTimeout = setTimeout(() => {
      console.log(`\n[Watcher] File ${filename} changed. Auto-uploading content to database...`);
      const proc = exec('npx tsx scripts/upload-vibecode-lesson-4.ts');
      
      proc.stdout.on('data', (data) => process.stdout.write(`[Watcher] ${data}`));
      proc.stderr.on('data', (data) => process.stderr.write(`[Watcher ERROR] ${data}`));
      
      proc.on('close', (code) => {
        if (code === 0) {
          console.log(`[Watcher] Successfully uploaded changes to database!\n`);
        } else {
          console.error(`[Watcher] Upload script failed with exit code ${code}\n`);
        }
      });
    }, 500);
  }
});
