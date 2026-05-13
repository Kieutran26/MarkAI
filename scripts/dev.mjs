import { spawn } from 'node:child_process';

const isWindows = process.platform === 'win32';
const shellCmd = isWindows ? process.env.ComSpec || 'cmd.exe' : 'sh';
const shellFlag = isWindows ? '/c' : '-c';

const children = [
  spawn(shellCmd, [shellFlag, 'npm run dev:web'], { stdio: 'inherit' }),
  spawn(shellCmd, [shellFlag, 'npm run dev:server'], { stdio: 'inherit' }),
];

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

for (const child of children) {
  child.on('exit', (code) => {
    shutdown(code ?? 0);
  });
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));
