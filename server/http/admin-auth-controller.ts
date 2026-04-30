import type { IncomingMessage, ServerResponse } from 'node:http';
import { serverConfig } from '../config';
import { getCookieValue } from '../lib/cookies';
import { clearSessionCookie, serializeSessionCookie } from '../lib/session';
import {
  authenticateAdmin,
  createAdminSession,
  deleteAdminSession,
  getAdminSession,
} from '../services/admin-auth-service';

type MutableHeaders = Record<string, string | string[] | undefined>;

export type AdminRequest = IncomingMessage & {
  body?: unknown;
  headers: MutableHeaders;
  method?: string;
};

export type AdminResponse = ServerResponse & {
  status: (code: number) => AdminResponse;
  json: (payload: unknown) => void;
};

function readSessionToken(cookieHeader: string | undefined) {
  return getCookieValue(cookieHeader, serverConfig.adminSessionCookieName);
}

async function readJsonBody(req: AdminRequest) {
  if (typeof req.body === 'object' && req.body !== null) {
    return req.body as Record<string, unknown>;
  }

  if (typeof req.body === 'string') {
    return JSON.parse(req.body) as Record<string, unknown>;
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString('utf8').trim();
  return rawBody ? (JSON.parse(rawBody) as Record<string, unknown>) : {};
}

function getIpAddress(req: AdminRequest) {
  const forwardedFor = req.headers['x-forwarded-for'];
  if (Array.isArray(forwardedFor)) {
    return forwardedFor[0] ?? null;
  }

  return forwardedFor?.split(',')[0]?.trim() || req.socket?.remoteAddress || null;
}

export async function handleAdminSession(req: AdminRequest, res: AdminResponse) {
  try {
    const sessionToken = readSessionToken(
      typeof req.headers.cookie === 'string' ? req.headers.cookie : undefined,
    );

    if (!sessionToken) {
      return res.status(401).json({ authenticated: false });
    }

    const adminUser = await getAdminSession(sessionToken);
    if (!adminUser) {
      res.setHeader('Set-Cookie', clearSessionCookie());
      return res.status(401).json({ authenticated: false });
    }

    return res.status(200).json({ authenticated: true, user: adminUser });
  } catch (error) {
    console.error('Failed to load admin session', error);
    return res.status(500).json({ message: 'Khong tai duoc phien dang nhap admin.' });
  }
}

export async function handleAdminLogin(req: AdminRequest, res: AdminResponse) {
  try {
    const body = await readJsonBody(req);
    const username = typeof body.username === 'string' ? body.username.trim() : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!username || !password) {
      return res.status(400).json({ message: 'Can username va password.' });
    }

    const adminUser = await authenticateAdmin(username, password);
    if (!adminUser) {
      return res.status(401).json({ message: 'Sai tai khoan hoac mat khau.' });
    }

    const { sessionToken, expiresAt } = await createAdminSession(
      adminUser.id,
      getIpAddress(req),
      req.headers['user-agent'] ?? null,
    );

    res.setHeader('Set-Cookie', serializeSessionCookie(sessionToken, expiresAt));
    return res.status(200).json({ authenticated: true, user: adminUser });
  } catch (error) {
    console.error('Failed to login admin', error);
    return res.status(500).json({ message: 'Khong dang nhap duoc admin luc nay.' });
  }
}

export async function handleAdminLogout(req: AdminRequest, res: AdminResponse) {
  try {
    const sessionToken = readSessionToken(
      typeof req.headers.cookie === 'string' ? req.headers.cookie : undefined,
    );

    await deleteAdminSession(sessionToken);
    res.setHeader('Set-Cookie', clearSessionCookie());
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to logout admin', error);
    return res.status(500).json({ message: 'Khong dang xuat duoc admin luc nay.' });
  }
}
