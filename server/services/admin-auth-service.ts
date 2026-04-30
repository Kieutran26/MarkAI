import { pool } from '../db';
import { verifyPassword } from '../lib/password';
import { createSessionExpiry, createSessionToken, hashSessionToken } from '../lib/session';

export type AdminSessionUser = {
  id: string;
  username: string;
  displayName: string;
  email: string | null;
};

type AdminIdentityRow = {
  user_id: string;
  username: string;
  password_hash: string;
  display_name: string | null;
  email: string | null;
};

export async function authenticateAdmin(username: string, password: string) {
  const result = await pool.query<AdminIdentityRow>(
    `select
        u.id as user_id,
        ai.username,
        ai.password_hash,
        u.display_name,
        u.email
      from public.auth_identities ai
      join public.users u on u.id = ai.user_id and u.status = 'active'
      join public.user_roles ur on ur.user_id = u.id
      join public.roles r on r.id = ur.role_id and r.code = 'admin'
      where ai.provider = 'password'
        and lower(ai.username) = lower($1)
      limit 1`,
    [username],
  );

  const identity = result.rows[0];
  if (!identity) {
    return null;
  }

  const isValidPassword = await verifyPassword(password, identity.password_hash);
  if (!isValidPassword) {
    return null;
  }

  await pool.query(
    `update public.auth_identities
      set last_login_at = timezone('utc', now())
      where user_id = $1 and provider = 'password'`,
    [identity.user_id],
  );

  return {
    id: identity.user_id,
    username: identity.username,
    displayName: identity.display_name?.trim() || identity.username,
    email: identity.email,
  } satisfies AdminSessionUser;
}

export async function createAdminSession(userId: string, ipAddress: string | null, userAgent: string | null) {
  const sessionToken = createSessionToken();
  const sessionTokenHash = hashSessionToken(sessionToken);
  const expiresAt = createSessionExpiry();

  await pool.query(
    `insert into public.admin_sessions (user_id, session_token_hash, ip_address, user_agent, expires_at)
      values ($1, $2, $3, $4, $5)`,
    [userId, sessionTokenHash, ipAddress, userAgent, expiresAt.toISOString()],
  );

  return { sessionToken, expiresAt };
}

export async function getAdminSession(sessionToken: string) {
  const sessionTokenHash = hashSessionToken(sessionToken);
  const result = await pool.query<{
    session_id: string;
    user_id: string;
    username: string;
    display_name: string | null;
    email: string | null;
  }>(
    `select
        s.id as session_id,
        u.id as user_id,
        ai.username,
        u.display_name,
        u.email
      from public.admin_sessions s
      join public.users u on u.id = s.user_id and u.status = 'active'
      join public.auth_identities ai on ai.user_id = u.id and ai.provider = 'password'
      join public.user_roles ur on ur.user_id = u.id
      join public.roles r on r.id = ur.role_id and r.code = 'admin'
      where s.session_token_hash = $1
        and s.expires_at > timezone('utc', now())
      limit 1`,
    [sessionTokenHash],
  );

  const session = result.rows[0];
  if (!session) {
    return null;
  }

  await pool.query(
    `update public.admin_sessions
      set last_activity_at = timezone('utc', now())
      where id = $1`,
    [session.session_id],
  );

  return {
    id: session.user_id,
    username: session.username,
    displayName: session.display_name?.trim() || session.username,
    email: session.email,
  } satisfies AdminSessionUser;
}

export async function deleteAdminSession(sessionToken: string | null) {
  if (!sessionToken) {
    return;
  }

  await pool.query('delete from public.admin_sessions where session_token_hash = $1', [
    hashSessionToken(sessionToken),
  ]);
}
