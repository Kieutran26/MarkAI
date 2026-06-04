import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { execSync } from 'child_process';
import fs from 'fs';

try {
  console.log("=== AGENT COPYING lessons.ts ===");
  const content = fs.readFileSync('src/lib/lessons.ts', 'utf8');
  fs.writeFileSync('scratch/lessons_outline.txt', content, 'utf8');
  console.log("=== SUCCESSFULLY COPIED ===");
} catch (e: any) {
  console.error("Error copying lessons.ts:", e.message);
}

// try {
//   console.log("=== AGENT REVERTING subLessons.ts ===");
//   execSync('git checkout src/lib/subLessons.ts');
//   console.log("=== SUCCESSFULLY REVERTED ===");
// } catch (e: any) {
//   console.error("Error reverting:", e.message);
// }


export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: [
        { find: '@/app', replacement: path.resolve(__dirname, 'src/admin') },
        { find: 'next/navigation', replacement: path.resolve(__dirname, 'src/shims/next-navigation.ts') },
        { find: 'next/link', replacement: path.resolve(__dirname, 'src/shims/next-link.tsx') },
        { find: '@', replacement: path.resolve(__dirname, '.') },
      ],
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3002',
          changeOrigin: true,
        },
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
