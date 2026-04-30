import React from 'react';
import { Link } from 'react-router-dom';
import VibecodeShowcase from './VibecodeShowcase';

export default function VibecodeHero() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="page-shell pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left Column */}
        <div>
          <p className="font-[family-name:var(--mono)] text-[11px] text-[var(--muted)] tracking-widest uppercase flex items-center gap-2 mb-4">
            <span className="text-[var(--accent)]">✳</span> Vibecode Web · Lộ trình từ zero · 2026
          </p>
          
          <h1 className="font-[family-name:var(--serif)] text-[clamp(2.8rem,5.5vw,4.8rem)] leading-[1.05] tracking-tight mb-6">
            Tự build web<br />
            không cần <span className="strike">lập trình.</span><br />
            Chỉ cần <em className="text-[var(--accent)] italic">ý tưởng.</em>
          </h1>
          
          <p className="font-[family-name:var(--sans)] text-[15px] text-[var(--ink2)] leading-[1.7] max-w-prose mb-8">
            10 bài học thực chiến — từ tư duy đến deploy thật. Không cần nền tảng code. Không slide. Không lý thuyết suông. Học xong hôm nay, dùng được ngay hôm nay.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <Link to="/vibecode/vibecode-la-gi" className="btn-primary">
              Bắt đầu bài 01 →
            </Link>
            <a href="#lo-trinh" className="btn-ghost">
              Xem lộ trình
            </a>
          </div>
          
          <p className="font-[family-name:var(--mono)] text-[11px] text-[var(--muted)]">
            ✳ miễn phí · không cần email · không tracking
          </p>
        </div>
        
        {/* Right Column - Illustrative Showcase */}
        <div className="hidden md:block w-full">
          <VibecodeShowcase />
        </div>
      </div>
    </section>
  );
}
