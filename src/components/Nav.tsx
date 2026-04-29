import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const isVibecodeActive = location.pathname === '/vibecode' || 
    location.pathname.startsWith('/vibecode/') || 
    location.pathname.startsWith('/lesson') ||
    location.pathname.includes('/bai-');
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 h-[52px] bg-bg border-b border-border flex items-center justify-between px-4 md:px-8">
      <Link to="/" className="font-mono text-[15px] font-medium tracking-tight no-underline text-ink">
        mark<span className="text-accent">AI</span>
      </Link>
      <ul className="hidden md:flex items-center h-full">
        <li>
          <Link 
            to="/vibecode" 
            className={`font-mono text-[12px] px-4 h-[52px] flex items-center border-l border-border hover:bg-bg2 hover:text-ink transition-colors no-underline ${isVibecodeActive ? 'text-accent font-medium' : 'text-muted'}`}
          >
            Vibecode
          </Link>
        </li>
        <li>
          <Link 
            to="/blog" 
            className={`font-mono text-[12px] px-4 h-[52px] flex items-center border-l border-border hover:bg-bg2 hover:text-ink transition-colors no-underline ${isActive('/blog') ? 'text-accent font-medium' : 'text-muted'}`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link 
            to="/tips" 
            className={`font-mono text-[12px] px-4 h-[52px] flex items-center border-l border-border hover:bg-bg2 hover:text-ink transition-colors no-underline ${isActive('/tips') ? 'text-accent font-medium' : 'text-muted'}`}
          >
            Tips
          </Link>
        </li>
        <li>
          <Link 
            to="/prompts" 
            className={`font-mono text-[12px] px-4 h-[52px] flex items-center border-l border-border hover:bg-bg2 hover:text-ink transition-colors no-underline ${isActive('/prompts') ? 'text-accent font-medium' : 'text-muted'}`}
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
      <div className="font-mono text-accent text-[12px] flex items-center h-full md:border-l border-border md:pl-4">
        <span className="nav-free font-medium">Miễn phí 100%</span>
      </div>
    </nav>
  );
}
