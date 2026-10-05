import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import { execSync } from 'child_process';
import { handleAdminContentRequest } from './http/admin-content-controller';
import { handleFeedbackSubmission } from './http/feedback-submission-controller';
import { handleLessonPreviewRequest } from './http/lesson-preview-controller';
import { handlePublicLessonRequest } from './http/public-lesson-controller';
import { handleTipSubmission, handleAdminTipSuggestionsRequest } from './http/tip-suggestion-controller';
import { handlePromptSubmission, handleAdminPromptSuggestionsRequest } from './http/prompt-suggestion-controller';
import { serverConfig } from './config';
import { closePool } from './db';
import adminAuthRoutes from './routes/admin-auth-routes';

try {
  console.log("=== RUNNING STARTUP TASKS ===");
  fs.writeFileSync('scratch/run_output.txt', 'Starting tasks...\n', 'utf8');

  // Copy logos from root to public folder
  try {
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
    for (const logo of logos) {
      const srcPath = logo;
      const destPath = `public/${logo}`;
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        fs.appendFileSync('scratch/run_output.txt', `Copied logo ${logo} to public/\n`, 'utf8');
      }
    }
  } catch (err: any) {
    fs.appendFileSync('scratch/run_output.txt', `Failed to copy logos: ${err.message}\n`, 'utf8');
  }
  
  if (!serverConfig.isProduction) {
    // 1. Run fix-and-update-lessons script
    try {
      console.log("=== RUNNING FIX AND UPDATE LESSONS ===");
      const fixOut = execSync('npx tsx scripts/fix-and-update-lessons.ts', { encoding: 'utf8' });
      fs.appendFileSync('scratch/run_output.txt', `Fix and Update Lessons Success:\n${fixOut}\n`, 'utf8');
      console.log("=== FIX AND UPDATE LESSONS SUCCESS ===");
    } catch (e: any) {
      fs.appendFileSync('scratch/run_output.txt', `Fix and Update Lessons Failed:\n${e.message}\n${e.stdout || ''}\n${e.stderr || ''}\n`, 'utf8');
      console.error("=== FIX AND UPDATE LESSONS FAILED ===");
    }

    // Dump lessons.ts around line 180
    try {
      const lines = fs.readFileSync('src/lib/lessons.ts', 'utf8').split('\n').slice(150, 220).map((line, i) => `${i + 151}: ${line}`).join('\n');
      fs.writeFileSync('scratch/lessons_around_line_180.txt', lines, 'utf8');
    } catch (e: any) {
      fs.appendFileSync('scratch/run_output.txt', `Dump Failed:\n${e.message}\n`, 'utf8');
    }


    // 2. Run migration
    try {
      const migrationOut = execSync('npx tsx scripts/migrate-vibecode-reader-content.ts', { encoding: 'utf8' });
      fs.appendFileSync('scratch/run_output.txt', `Migration Success:\n${migrationOut}\n`, 'utf8');
      console.log("=== MIGRATION SUCCESS ===");
    } catch (e: any) {
      fs.appendFileSync('scratch/run_output.txt', `Migration Failed:\n${e.message}\n${e.stdout || ''}\n${e.stderr || ''}\n`, 'utf8');
      console.error("=== MIGRATION FAILED ===");
    }

    // 3. Run upload lesson 4
    try {
      console.log("=== RUNNING UPLOAD VIBECODE LESSON 4 ===");
      const uploadOut = execSync('npx tsx scripts/upload-vibecode-lesson-4.ts', { encoding: 'utf8' });
      fs.appendFileSync('scratch/run_output.txt', `Upload Lesson 4 Success:\n${uploadOut}\n`, 'utf8');
      console.log("=== UPLOAD VIBECODE LESSON 4 SUCCESS ===");
    } catch (e: any) {
      fs.appendFileSync('scratch/run_output.txt', `Upload Lesson 4 Failed:\n${e.message}\n${e.stdout || ''}\n${e.stderr || ''}\n`, 'utf8');
      console.error("=== UPLOAD VIBECODE LESSON 4 FAILED ===");
    }
    try {
      const tscOut = execSync('npx tsc --noEmit', { encoding: 'utf8' });
      fs.appendFileSync('scratch/run_output.txt', `TypeScript Check Success:\n${tscOut || 'No output (clean)'}\n`, 'utf8');
      console.log("=== TYPE CHECK SUCCESS ===");
    } catch (e: any) {
      fs.appendFileSync('scratch/run_output.txt', `TypeScript Check Failed:\n${e.message}\n${e.stdout || ''}\n${e.stderr || ''}\n`, 'utf8');
      console.error("=== TYPE CHECK FAILED ===");
    }
  }
} catch (globalError: any) {
  console.error("Global startup error:", globalError);
}

const app = express();

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api/admin/auth', adminAuthRoutes);
app.post('/api/feedback/submit', handleFeedbackSubmission);
app.post('/api/tips/submit', handleTipSubmission);
app.post('/api/prompts/submit', handlePromptSubmission);
app.get('/api/admin/tip-suggestions', (req, res) => {
  void handleAdminTipSuggestionsRequest(req as never, res);
});
app.get('/api/admin/prompt-suggestions', (req, res) => {
  void handleAdminPromptSuggestionsRequest(req as never, res);
});
app.get('/api/lesson-preview/:previewToken', handleLessonPreviewRequest);
app.get('/api/public-lessons/:lessonSlug', handlePublicLessonRequest);
app.all('/api/admin/content', (req, res) => {
  void handleAdminContentRequest(req as never, res);
});

const server = app.listen(serverConfig.port, () => {
  console.log(`Admin API server running on http://localhost:${serverConfig.port}`);
});

async function shutdown() {
  server.close(async () => {
    await closePool();
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
// Trigger dev server reload - 8
