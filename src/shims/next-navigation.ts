import { useLocation, useNavigate } from 'react-router-dom';

const ADMIN_PREFIX = '/admin';

function withAdminPrefix(href: string) {
  if (!href.startsWith('/')) {
    return href;
  }

  return href.startsWith(ADMIN_PREFIX) ? href : `${ADMIN_PREFIX}${href}`;
}

export function useRouter() {
  const navigate = useNavigate();

  return {
    push: (href: string) => navigate(withAdminPrefix(href)),
    replace: (href: string) => navigate(withAdminPrefix(href), { replace: true }),
  };
}

export function usePathname() {
  const { pathname } = useLocation();

  if (pathname === ADMIN_PREFIX) {
    return '/';
  }

  if (pathname.startsWith(`${ADMIN_PREFIX}/`)) {
    return pathname.slice(ADMIN_PREFIX.length);
  }

  return pathname;
}
