export type AdminUser = {
  id: string;
  username: string;
  displayName: string;
  email: string | null;
};

async function readJson<T>(response: Response): Promise<T> {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = (payload as { message?: string }).message ?? 'Co loi xay ra.';
    throw new Error(message);
  }

  return payload as T;
}

export async function fetchAdminSession() {
  const response = await fetch('/api/admin/auth/session', {
    credentials: 'include',
  });

  return readJson<{ authenticated: true; user: AdminUser }>(response);
}

export async function loginAdmin(username: string, password: string) {
  const response = await fetch('/api/admin/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  });

  return readJson<{ authenticated: true; user: AdminUser }>(response);
}

export async function logoutAdmin() {
  const response = await fetch('/api/admin/auth/logout', {
    method: 'POST',
    credentials: 'include',
  });

  return readJson<{ success: true }>(response);
}
