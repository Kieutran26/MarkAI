import { Pool } from 'pg';
import { assertDatabaseUrl, serverConfig } from './config';

assertDatabaseUrl();

export const pool = new Pool({
  connectionString: serverConfig.databaseUrl,
  max: 10,
  ssl: serverConfig.databaseUrl.includes('sslmode=require')
    ? { rejectUnauthorized: false }
    : undefined,
});

export async function closePool() {
  await pool.end();
}
