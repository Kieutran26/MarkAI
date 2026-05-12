import 'dotenv/config'
import { closePool, pool } from '../server/db'

async function ensureSchema() {
  await pool.query(`
    create table if not exists public.tip_suggestions (
      id uuid primary key default gen_random_uuid(),
      content text not null,
      category text not null,
      nickname text,
      status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
      created_at timestamptz not null default timezone('utc', now())
    );
  `)
  console.log('Table tip_suggestions created or already exists.')
}

async function main() {
  try {
    await ensureSchema()
  } catch (error) {
    console.error('Error creating table:', error)
  } finally {
    await closePool()
  }
}

main()
