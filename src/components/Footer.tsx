import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 px-5 md:px-8 py-12 lg:py-16 border-b border-border">
          {/* Col 1: Logo + tagline */}
          <div>
            <div className="font-mono text-[16px] font-medium tracking-tight mb-4">
              mark<span className="text-accent">AI</span>.vn
            </div>
            <p className="font-sans text-[13px] text-muted leading-[1.6] max-w-[220px]">
              Học AI ứng dụng dành riêng cho dân Marketing Việt Nam. Miễn phí 100% · mãi mãi.
            </p>
          </div>

          {/* Col 2: Vibecode */}
          <div>
            <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">VIBECODE</div>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li><Link to="/vibecode/bai-01-vibecode-la-gi" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Bài 01 — Vibecode là gì?</Link></li>
              <li><Link to="/vibecode/bai-02-tu-ngu-code" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Bài 02 — Từ ngữ code</Link></li>
              <li><Link to="/vibecode/bai-03-cai-gi-vao-may" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Bài 03 — Cài gì vào máy?</Link></li>
              <li><Link to="/vibecode" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Xem tất cả 10 bài →</Link></li>
            </ul>
          </div>

          {/* Col 3: Khám phá */}
          <div>
            <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">KHÁM PHÁ</div>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li><Link to="/blog" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Blog</Link></li>
              <li><Link to="/tips" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Tips & Mẹo</Link></li>
              <li><Link to="/prompts" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Prompt Library</Link></li>
              <li><span className="font-sans text-[13px] text-muted opacity-50 cursor-default">Analytics (sắp ra)</span></li>
            </ul>
          </div>

          {/* Col 4: markAI */}
          <div>
            <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">MARKAI</div>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li><Link to="/about" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Về dự án này</Link></li>
              <li><Link to="/feedback" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Góp ý module</Link></li>
              <li><Link to="/report" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Báo lỗi</Link></li>
              <li><Link to="/contact" className="font-sans text-[13px] text-ink2 hover:text-ink transition-colors no-underline">Liên hệ tác giả</Link></li>
            </ul>
          </div>
        </div>

        <div className="px-5 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
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
