import type { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const isVibecodeActive =
    location.pathname === '/vibecode' ||
    location.pathname.startsWith('/vibecode/') ||
    location.pathname.startsWith('/lesson') ||
    location.pathname.includes('/bai-');
  const isActive = (path: string) => location.pathname === path;
  const getNavItemClass = (active: boolean) =>
    `font-mono text-[12px] px-4 h-[52px] flex items-center border-l border-border transition-colors no-underline ${
      active
        ? 'bg-accent text-white font-medium'
        : 'text-ink hover:bg-bg2'
    }`;

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== '/') {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="page-gutter sticky top-0 z-50 h-[52px] bg-bg border-b border-border flex items-center justify-between">
      <Link
        to="/"
        aria-label="Về trang chủ markAI"
        title="Về trang chủ"
        onClick={handleLogoClick}
        className="shrink-0 font-mono text-[15px] font-medium tracking-tight no-underline text-ink"
      >
        mark<span className="text-accent">AI</span>
      </Link>
      <ul className="hidden md:flex items-center h-full">
        <li>
          <Link
            to="/vibecode"
            className={getNavItemClass(isVibecodeActive)}
          >
            Vibecode
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={getNavItemClass(isActive('/blog'))}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/tips"
            className={getNavItemClass(isActive('/tips'))}
          >
            Tips
          </Link>
        </li>
        <li>
          <Link
            to="/prompts"
            className={getNavItemClass(isActive('/prompts'))}
          >
            Prompts
          </Link>
        </li>
        <li>
          <span className="font-mono text-[12px] text-muted px-4 h-[52px] flex items-center border-l border-border opacity-40 cursor-default">Analytics</span>
        </li>
        <li>
          <span className="font-mono text-[12px] text-muted px-4 h-[52px] flex items-center border-l border-border opacity-40 cursor-default">Image</span>
        </li>
        <li>
          <span className="font-mono text-[12px] text-muted px-4 h-[52px] flex items-center border-l border-border opacity-40 cursor-default">Video</span>
        </li>
      </ul>
      <div className="nav-free-wrap font-mono text-[12px] flex items-center h-full">
        <span className="nav-free font-medium">Miễn phí 100%</span>
      </div>
    </nav>
  );
}
