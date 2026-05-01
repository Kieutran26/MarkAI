import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 py-12 lg:py-16 border-b border-border">
          {/* Col 1: Logo + tagline */}
          <div>
            <div className="font-mono text-[16px] font-medium tracking-tight mb-4">
              mark<span className="text-accent">AI</span>.vn
            </div>
            <p className="font-sans text-[13px] text-muted leading-[1.6] max-w-[220px]">
              Học AI ứng dụng dành riêng cho dân Marketing Việt Nam. Miễn phí 100% · mãi mãi.
            </p>
            <p className="font-mono text-[10px] text-muted mt-4 tracking-wide">
              ✳ FOMO thì nhiều · Dùng được thì ít
            </p>
          </div>

          {/* Col 2: Lộ trình học */}
          <div>
            <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">Lộ trình học</div>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li><Link to="/vibecode" className="font-sans text-[13px] text-ink2 hover:text-accent transition-colors no-underline flex items-center gap-2"><span className="text-accent text-[10px]">●</span> Vibecode Web <span className="font-mono text-[10px] text-accent">Live</span></Link></li>
              <li><Link to="/vibecode" className="font-sans text-[13px] text-ink2 hover:text-accent transition-colors no-underline flex items-center gap-2"><span className="text-muted text-[10px]">○</span> Vibecode App <span className="font-mono text-[10px] text-muted">Sắp ra</span></Link></li>
              <li><span className="font-sans text-[13px] text-muted opacity-60 flex items-center gap-2"><span className="text-muted text-[10px]">○</span> Analytics AI <span className="font-mono text-[10px] text-muted">Sắp ra</span></span></li>
              <li><span className="font-sans text-[13px] text-muted opacity-60 flex items-center gap-2"><span className="text-muted text-[10px]">○</span> Generate Image <span className="font-mono text-[10px] text-muted">Sắp ra</span></span></li>
              <li><span className="font-sans text-[13px] text-muted opacity-60 flex items-center gap-2"><span className="text-muted text-[10px]">○</span> Motion Video <span className="font-mono text-[10px] text-muted">Sắp ra</span></span></li>
              <li className="pt-3 mt-2"><Link to="/feedback" className="font-mono text-[10px] bg-[#000] text-white px-4 py-2 hover:bg-accent transition-colors no-underline inline-block uppercase tracking-wider">+ Góp ý module mới</Link></li>
            </ul>
          </div>

          {/* Col 3: Khám phá */}
          <div>
            <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">Khám phá</div>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li><Link to="/blog" className="font-sans text-[13px] text-ink2 hover:text-accent transition-colors no-underline">Blog</Link></li>
              <li><Link to="/tips" className="font-sans text-[13px] text-ink2 hover:text-accent transition-colors no-underline">Tips & Mẹo</Link></li>
              <li><Link to="/prompts" className="font-sans text-[13px] text-ink2 hover:text-accent transition-colors no-underline">Prompt Library</Link></li>
              <li><span className="font-sans text-[13px] text-muted opacity-50 cursor-default">Analytics (sắp ra)</span></li>
              <li><span className="font-sans text-[13px] text-muted opacity-50 cursor-default">Image (sắp ra)</span></li>
              <li><span className="font-sans text-[13px] text-muted opacity-50 cursor-default">Video (sắp ra)</span></li>
            </ul>
          </div>

          {/* Col 4: markAI */}
          <div>
            <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">MARKAI</div>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li><Link to="/about" className="font-sans text-[13px] text-ink2 hover:text-accent transition-colors no-underline">Về dự án này</Link></li>
              <li><Link to="/feedback" className="font-sans text-[13px] text-ink2 hover:text-accent transition-colors no-underline">Góp ý module</Link></li>
              <li><Link to="/report" className="font-sans text-[13px] text-ink2 hover:text-accent transition-colors no-underline">Báo lỗi</Link></li>
              <li><Link to="/contact" className="font-sans text-[13px] text-ink2 hover:text-accent transition-colors no-underline">Liên hệ tác giả</Link></li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[11px] text-muted">
            © 2026 markAI.vn · Miễn phí 100% · Không quảng cáo · Không tracking
          </div>
          <div className="font-mono text-[11px] text-muted">
            Dành riêng cho dân Marketing Việt Nam ✳
          </div>
        </div>
      </div>
    </footer>
  );
}
