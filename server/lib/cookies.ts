export function getCookieValue(cookieHeader: string | undefined, cookieName: string) {
  if (!cookieHeader) {
    return null;
  }

  const cookies = cookieHeader.split(';');
  for (const cookie of cookies) {
    const [name, ...rest] = cookie.trim().split('=');
    if (name === cookieName) {
      return decodeURIComponent(rest.join('='));
    }
  }

  return null;
}
