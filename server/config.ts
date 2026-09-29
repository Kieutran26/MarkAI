const parseNumber = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

export const serverConfig = {
  port: parseNumber(process.env.PORT, 3001),
  databaseUrl: process.env.DATABASE_URL ?? '',
  adminSessionCookieName: process.env.ADMIN_SESSION_COOKIE_NAME ?? 'markai_admin_session',
  adminSessionTtlHours: parseNumber(process.env.ADMIN_SESSION_TTL_HOURS, 168),
  isProduction: process.env.NODE_ENV === 'production',
};

export function assertDatabaseUrl(strict = false) {
  if (!serverConfig.databaseUrl) {
    const msg = 'DATABASE_URL is not set. Database features are disabled. Please set DATABASE_URL in .env if you need database access.';
    if (strict) {
      throw new Error(msg);
    }
    console.warn(`\n⚠️  [Server] ${msg}\n`);
  }
}

