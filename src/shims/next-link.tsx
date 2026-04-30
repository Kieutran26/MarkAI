import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const ADMIN_PREFIX = '/admin';

type NextLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
};

function withAdminPrefix(href: string) {
  if (!href.startsWith('/')) {
    return href;
  }

  return href.startsWith(ADMIN_PREFIX) ? href : `${ADMIN_PREFIX}${href}`;
}

export default function Link({ href, children, ...props }: NextLinkProps) {
  return (
    <RouterLink to={withAdminPrefix(href)} {...props}>
      {children}
    </RouterLink>
  );
}
