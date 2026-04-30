import { createHash, randomBytes } from 'node:crypto';
import { serverConfig } from '../config';

export function createSessionToken() {
  return randomBytes(32).toString('hex');
}

export function hashSessionToken(token: string) {
  return createHash('sha256').update(token).digest('hex');
}

export function createSessionExpiry() {
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + serverConfig.adminSessionTtlHours);
  return expiresAt;
}

export function serializeSessionCookie(token: string, expiresAt: Date) {
  const parts = [
    `${serverConfig.adminSessionCookieName}=${token}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Expires=${expiresAt.toUTCString()}`,
  ];

  if (serverConfig.isProduction) {
    parts.push('Secure');
  }

  return parts.join('; ');
}

export function clearSessionCookie() {
  const parts = [
    `${serverConfig.adminSessionCookieName}=`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Expires=Thu, 01 Jan 1970 00:00:00 GMT',
  ];

  if (serverConfig.isProduction) {
    parts.push('Secure');
  }

  return parts.join('; ');
}
