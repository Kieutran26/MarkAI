import { Pool } from 'pg';
import { assertDatabaseUrl, serverConfig } from './config';

assertDatabaseUrl(false);

const realPool = serverConfig.databaseUrl
  ? new Pool({
      connectionString: serverConfig.databaseUrl,
      max: 10,
      ssl: serverConfig.databaseUrl.includes('sslmode=require')
        ? { rejectUnauthorized: false }
        : undefined,
    })
  : null;

export const pool: Pool = (realPool ??
  new Proxy({} as Pool, {
    get(_target, prop) {
      if (prop === 'query') {
        return async () => {
          throw new Error('DATABASE_URL is not set in .env. Database operations are currently disabled.');
        };
      }
      if (prop === 'end') {
        return async () => {};
      }
      if (prop === 'on') {
        return () => pool;
      }
      return undefined;
    },
  })) as Pool;

export async function closePool() {
  if (realPool) {
    await realPool.end();
  }
}
