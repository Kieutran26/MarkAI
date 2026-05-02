import { Link } from 'react-router-dom';
import { ctaLessons } from '../../lib/glossary';

export default function GlossaryCta() {
  return (
    <section className="border-y border-border bg-bg2">
      <div className="page-shell grid gap-12 py-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.07em] text-muted">✳ Tiếp theo trong lộ trình</p>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.15]">Biết từ ngữ rồi —<br /><em className="text-accent italic">giờ bắt đầu cài đặt.</em></h2>
          <p className="glossary-body mt-3 text-[14px] leading-[1.7] text-ink2">Tiếp tục Bài 03 để cài Node.js, VS Code, Cursor, Git, và Claude Code. Hướng dẫn từng bước, không bỏ sót gì.</p>
        </div>
        <div className="flex flex-col border border-border">
          {ctaLessons.map((lesson) => (
            <Link key={lesson.num} to={lesson.to} className="group flex items-center gap-4 border-b border-border px-5 py-[0.9rem] text-inherit no-underline transition-colors hover:bg-bg3 last:border-b-0">
              <span className="min-w-6 font-mono text-[10px] text-muted">{lesson.num}</span>
              <span className="glossary-body flex-1 text-[13px] leading-[1.5] text-ink2">{lesson.title}</span>
              <span className="font-mono text-[12px] text-muted transition-all group-hover:translate-x-1 group-hover:text-accent">{lesson.arrow}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
