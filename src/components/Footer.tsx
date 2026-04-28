import { Link } from 'react-router-dom';
import { lessons } from '../lib/lessons';

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto">
      <div className="py-16 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div>
          <div className="font-mono text-[15px] font-medium tracking-tight mb-4">
            mark<span className="text-accent">AI</span>.vn
          </div>
          <p className="font-sans text-[13px] text-ink2 leading-[1.6] max-w-[200px]">
            Website cộng đồng dạy AI ứng dụng thực chiến cho dân Marketing Việt Nam.
          </p>
        </div>
        <div>
          <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">VIBECODE</div>
          <ul className="flex flex-col gap-3 list-none p-0">
            {lessons.slice(0, 7).map((lesson) => (
              <li key={lesson.id}>
                <Link 
                  to={`/vibecode/${lesson.slug}`} 
                  className="font-mono text-[12px] text-ink2 hover:text-accent transition-colors no-underline"
                >
                  Bài {lesson.id.toString().padStart(2, '0')} · {lesson.title.split('—')[0].trim().slice(0, 20)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">KHÁM PHÁ</div>
          <ul className="flex flex-col gap-3 list-none p-0">
            <li><Link to="/blog" className="font-mono text-[12px] text-ink2 hover:text-accent transition-colors no-underline">Blog</Link></li>
            <li><Link to="/tips" className="font-mono text-[12px] text-ink2 hover:text-accent transition-colors no-underline">Tips & Mẹo</Link></li>
            <li><Link to="/prompts" className="font-mono text-[12px] text-ink2 hover:text-accent transition-colors no-underline">Prompt Library</Link></li>
            <li className="pt-2"><span className="font-mono text-[12px] text-muted opacity-50 cursor-default">Analytics (soon)</span></li>
            <li><span className="font-mono text-[12px] text-muted opacity-50 cursor-default">Image Gen (soon)</span></li>
            <li><span className="font-mono text-[12px] text-muted opacity-50 cursor-default">Motion Video (soon)</span></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">MARKAI</div>
          <ul className="flex flex-col gap-3 list-none p-0">
            <li><Link to="/about" className="font-mono text-[12px] text-ink2 hover:text-accent transition-colors no-underline">Về dự án này</Link></li>
            <li><Link to="/feedback" className="font-mono text-[12px] text-ink2 hover:text-accent transition-colors no-underline">Góp ý module</Link></li>
            <li><Link to="/report" className="font-mono text-[12px] text-ink2 hover:text-accent transition-colors no-underline">Báo lỗi</Link></li>
            <li><Link to="/contact" className="font-mono text-[12px] text-ink2 hover:text-accent transition-colors no-underline">Liên hệ tác giả</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 px-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[11px] text-muted">© 2026 markAI.vn — Thiết kế phục vụ nội dung.</div>
        <div className="font-mono text-[11px] text-muted flex gap-4">
          <span>✳ Built with Vibecode</span>
          <span>✳ Hosted on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
