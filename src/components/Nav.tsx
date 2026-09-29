import { useEffect, useState, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';

const GLOSSARY_PATH = '/tu-dien-thuat-ngu';

export default function Nav() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isGlossaryRoute = location.pathname === GLOSSARY_PATH || location.pathname.startsWith(`${GLOSSARY_PATH}/`);
  const isVibecodeActive =
    !isGlossaryRoute &&
    (location.pathname === '/vibecode' ||
      location.pathname.startsWith('/vibecode/') ||
      location.pathname.startsWith('/lesson') ||
      location.pathname.includes('/bai-'));
  const isActive = (path: string) => location.pathname === path;

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
    <header className="sticky top-0 z-50 bg-[#F6F5F1]/90 backdrop-blur-md border-b border-[#E6E4DE] transition-colors">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-3.5 md:py-4 flex items-center justify-between gap-4">
        {/* Brand Logo with Orange Dot */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 font-semibold text-[17px] tracking-[-0.02em] text-[#141414] no-underline shrink-0"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E8772E] shrink-0" />
          <span>markAI</span>
        </Link>

        {/* Center Floating Pill Nav (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 text-[14px] bg-white border border-[#E6E4DE] rounded-full p-1 shadow-xs">
          <Link
            to="/vibecode"
            className={`px-3.5 py-1.5 rounded-full no-underline transition-all ${
              isVibecodeActive
                ? 'bg-[#141414] text-white font-medium'
                : 'text-[#55534F] hover:bg-[#F1EFEA] hover:text-[#141414]'
            }`}
          >
            Vibecode
          </Link>
          <Link
            to={GLOSSARY_PATH}
            className={`px-3.5 py-1.5 rounded-full no-underline transition-all ${
              isGlossaryRoute
                ? 'bg-[#141414] text-white font-medium'
                : 'text-[#55534F] hover:bg-[#F1EFEA] hover:text-[#141414]'
            }`}
          >
            Từ điển
          </Link>
          <Link
            to="/blog"
            className={`px-3.5 py-1.5 rounded-full no-underline transition-all ${
              isActive('/blog')
                ? 'bg-[#141414] text-white font-medium'
                : 'text-[#55534F] hover:bg-[#F1EFEA] hover:text-[#141414]'
            }`}
          >
            Blog
          </Link>
          <Link
            to="/tips"
            className={`px-3.5 py-1.5 rounded-full no-underline transition-all ${
              isActive('/tips')
                ? 'bg-[#141414] text-white font-medium'
                : 'text-[#55534F] hover:bg-[#F1EFEA] hover:text-[#141414]'
            }`}
          >
            Tips
          </Link>
          <span className="px-3.5 py-1.5 text-[#B8B6B0] text-[13px] select-none whitespace-nowrap">
            Sắp ra: Analytics · Image · Video
          </span>
        </nav>

        {/* Right Badge & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[12px] text-[#55534F] hidden sm:inline-block">
            Miễn phí 100%
          </span>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="lg:hidden flex items-center gap-2 px-3 py-1.5 border border-[#DAD8D2] rounded-full font-mono text-[11px] tracking-wide uppercase text-[#141414] bg-white hover:bg-[#F1EFEA] transition-colors"
          >
            {isMobileMenuOpen ? 'Đóng' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E6E4DE] bg-[#F6F5F1] px-5 py-4">
          <div className="flex flex-col gap-2">
            <Link
              to="/vibecode"
              className={`px-4 py-2.5 rounded-full text-[14px] no-underline transition-all flex items-center justify-between ${
                isVibecodeActive
                  ? 'bg-[#141414] text-white font-medium'
                  : 'text-[#141414] bg-white border border-[#E6E4DE]'
              }`}
            >
              <span>Vibecode</span>
              <span className="font-mono text-[11px] text-[#E8772E]">Live</span>
            </Link>
            <Link
              to={GLOSSARY_PATH}
              className={`px-4 py-2.5 rounded-full text-[14px] no-underline transition-all flex items-center justify-between ${
                isGlossaryRoute
                  ? 'bg-[#141414] text-white font-medium'
                  : 'text-[#141414] bg-white border border-[#E6E4DE]'
              }`}
            >
              <span>Từ điển chuyên ngành</span>
              <span className="text-[#8A8883]">→</span>
            </Link>
            <Link
              to="/blog"
              className={`px-4 py-2.5 rounded-full text-[14px] no-underline transition-all flex items-center justify-between ${
                isActive('/blog')
                  ? 'bg-[#141414] text-white font-medium'
                  : 'text-[#141414] bg-white border border-[#E6E4DE]'
              }`}
            >
              <span>Blog</span>
              <span className="text-[#8A8883]">→</span>
            </Link>
            <Link
              to="/tips"
              className={`px-4 py-2.5 rounded-full text-[14px] no-underline transition-all flex items-center justify-between ${
                isActive('/tips')
                  ? 'bg-[#141414] text-white font-medium'
                  : 'text-[#141414] bg-white border border-[#E6E4DE]'
              }`}
            >
              <span>Tips &amp; Mẹo</span>
              <span className="text-[#8A8883]">→</span>
            </Link>
            <div className="px-4 py-3 rounded-2xl bg-[#F1EFEA] border border-[#DAD8D2] font-mono text-[11px] text-[#8A8883] mt-2">
              Sắp ra: Analytics · Image · Video
            </div>
            <div className="px-4 py-2 text-center font-mono text-[11px] text-[#55534F]">
              Miễn phí 100% · Không quảng cáo · Không email gate
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
