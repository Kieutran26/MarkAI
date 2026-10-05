import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { pool, closePool } from '../server/db';

async function runSqlFile(filePath: string) {
  const fullPath = path.resolve(filePath);
  console.log(`Running SQL migration: ${filePath}...`);
  const sql = fs.readFileSync(fullPath, 'utf8');
  await pool.query(sql);
  console.log(`  -> Done: ${filePath}`);
}

async function main() {
  try {
    console.log('=== INITIALIZING NEON DATABASE SCHEMA ===');

    // 1. Run base schema
    await runSqlFile('supabase/migrations/20260430_vibecode_mvp_schema.sql');

    // 2. Run modules refactor
    await runSqlFile('supabase/migrations/20260430_vibecode_modules_refactor.sql');

    // 3. Run feedback submissions
    await runSqlFile('supabase/migrations/20260513_feedback_submissions.sql');

    // 4. Ensure tip_suggestions table
    await pool.query(`
      create table if not exists public.tip_suggestions (
        id uuid primary key default gen_random_uuid(),
        content text not null,
        category text not null,
        nickname text,
        status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
        created_at timestamptz not null default timezone('utc', now())
      );
    `);
    console.log('  -> Done: tip_suggestions table');

    // 5. Ensure prompt_suggestions table
    await pool.query(`
      create table if not exists public.prompt_suggestions (
        id uuid primary key default gen_random_uuid(),
        title text not null,
        prompt text not null,
        category text not null,
        tool text not null,
        nickname text,
        status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
        created_at timestamptz not null default timezone('utc', now())
      );
    `);
    console.log('  -> Done: prompt_suggestions table');

    console.log('=== DATABASE SCHEMA INITIALIZED SUCCESSFULLY ===');
  } catch (err: any) {
    console.error('Failed to initialize database:', err);
    process.exit(1);
  } finally {
    await closePool();
    process.exit(0);
  }
}

main();
