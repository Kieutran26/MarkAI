import { useEffect, useState, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isGlossaryRoute = location.pathname === '/vibecode/tu-ngu-chuyen-nganh/tu-dien-thuat-ngu';
  const isVibecodeActive =
    !isGlossaryRoute &&
    (location.pathname === '/vibecode' ||
      location.pathname.startsWith('/vibecode/') ||
      location.pathname.startsWith('/lesson') ||
      location.pathname.includes('/bai-'));
  const isActive = (path: string) => location.pathname === path;
  const navItems = [
    { label: 'Vibecode', path: '/vibecode', active: isVibecodeActive },
    { label: 'Từ ngữ IT', path: '/vibecode/tu-ngu-chuyen-nganh/tu-dien-thuat-ngu', active: isGlossaryRoute },
    { label: 'Blog', path: '/blog', active: isActive('/blog') },
    { label: 'Tips', path: '/tips', active: isActive('/tips') },
    { label: 'Prompts', path: '/prompts', active: isActive('/prompts') },
  ];
  const getNavItemClass = (active: boolean) =>
    `font-mono text-[12px] px-4 h-[52px] flex items-center border-l border-border transition-colors no-underline ${
      active
        ? 'bg-accent text-white font-medium'
        : 'text-ink hover:bg-bg2'
    }`;
  const getMobileNavItemClass = (active: boolean) =>
    `font-mono text-[12px] px-5 py-4 flex items-center justify-between border-t border-border transition-colors no-underline ${
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="page-gutter sticky top-0 z-50 bg-bg border-b border-border">
      <div className="h-[52px] flex items-center justify-between">
        <Link
          to="/"
          aria-label="V\u1ec1 trang ch\u1ee7 markAI"
          title="V\u1ec1 trang ch\u1ee7"
          onClick={handleLogoClick}
          className="shrink-0 font-mono text-[15px] font-medium tracking-tight no-underline text-ink"
        >
          mark<span className="text-accent">AI</span>
        </Link>

        <ul className="hidden md:flex items-center h-full">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={getNavItemClass(item.active)}>
                {item.label}
              </Link>
            </li>
          ))}
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

        <div className="flex items-center h-full">
          <div className="nav-free-wrap hidden md:flex font-mono text-[12px] items-center h-full">
            <span className="nav-free font-medium">{'Mi\u1ec5n ph\u00ed 100%'}</span>
          </div>
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? '\u0110\u00f3ng menu' : 'M\u1edf menu'}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden h-[52px] px-4 border-l border-border font-mono text-[11px] tracking-[0.08em] uppercase text-ink"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border mx-[calc(var(--page-gutter-mobile)*-1)] bg-bg">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={getMobileNavItemClass(item.active)}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">{'\u2192'}</span>
              </Link>
            ))}
            <div className="px-5 py-4 border-t border-border font-mono text-[11px] text-muted uppercase tracking-[0.06em] bg-bg2">
              {'Mi\u1ec5n ph\u00ed 100% \u00b7 Kh\u00f4ng c\u1ea7n email'}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
