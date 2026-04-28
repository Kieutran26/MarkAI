import React from 'react';
import { Link } from 'react-router-dom';

export default function VibecodeHero() {
  return (
    <section className="border-b border-[var(--border)]">
      <div 
        className="max-w-[1200px] mx-auto px-5 pt-[5rem] pb-0 grid gap-16 grid-cols-1 lg:grid-cols-[1fr_420px] items-end"
        style={{ gridTemplateColumns: '1fr 420px' }}
      >
        {/* Left Column */}
        <div>
          <p className="font-[family-name:var(--mono)] text-[11px] text-[var(--muted)] tracking-[0.08em] uppercase flex items-center gap-2 mb-6">
            <span className="text-[var(--accent)]">✳</span> Vibecode Web · Lộ trình từ zero · 2026
          </p>
          
          <h1 className="font-[family-name:var(--serif)] text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1.08] tracking-[-0.02em] mb-6">
            Tự build web<br />
            không cần <span className="strike">lập trình.</span><br />
            Chỉ cần <em className="text-[var(--accent)] italic">ý tưởng.</em>
          </h1>
          
          <p className="font-[family-name:var(--sans)] text-[15px] font-light text-[var(--ink2)] leading-[1.75] max-w-[500px] mb-8">
            10 bài học thực chiến — từ tư duy đến deploy thật. Không cần nền tảng code. Không slide. Không lý thuyết suông. Học xong hôm nay, dùng được ngay hôm nay.
          </p>
          
          <div className="flex gap-4 flex-wrap mb-5">
            <Link to="/vibecode/vibecode-la-gi" className="btn-primary">
              Bắt đầu bài 01 →
            </Link>
            <a href="#lo-trinh" className="btn-ghost">
              Xem lộ trình
            </a>
          </div>
          
          <p className="font-[family-name:var(--mono)] text-[11px] text-[var(--muted)] tracking-[0.02em]">
            ✳ miễn phí · không cần email · không tracking
          </p>
        </div>
        
        {/* Right Column - Terminal Mockup */}
        <div className="self-end">
          <div className="hero-terminal">
            {/* Title Bar */}
            <div className="term-bar">
              <span className="term-dot r"></span>
              <span className="term-dot y"></span>
              <span className="term-dot g"></span>
              <span className="term-url">markai.vn/vibecode</span>
            </div>
            
            {/* Terminal Body */}
            <div className="py-6 px-6 font-[family-name:var(--mono)] text-[12.5px] leading-[1.7]">
              <div className="mb-1">
                <span className="text-[var(--accent)]">❯</span>{' '}
                <span className="text-[#ccc]">cursor .</span>
              </div>
              <div className="text-[#555] italic mb-3"># Mở project trong Cursor</div>
              
              <div className="mb-1">
                <span className="text-[var(--accent)]">❯</span>{' '}
                <span className="text-[#ccc]">Tạo landing page giới thiệu sản phẩm mới,</span>
              </div>
              <div className="pl-5 text-[#ccc] mb-1">nền trắng, có countdown 3 ngày,</div>
              <div className="pl-5 text-[#ccc] mb-3">form đăng ký email, responsive mobile.</div>
              
              <div className="text-[#28CA41] mb-1">✓ Đang tạo landing-page.tsx...</div>
              <div className="text-[#888] mb-3">  — Hero section với countdown timer</div>
              <div className="text-[#888] mb-1">  — Form email với validation</div>
              <div className="text-[#888] mb-3">  — Mobile responsive layout</div>
              
              <div>
                <span className="text-[var(--accent)]">❯</span>{' '}
                <span className="term-cursor"></span>
              </div>
            </div>
            
            {/* Insight Block */}
            <div className="border-l-2 border-[var(--accent)] mx-6 mb-6 px-4 py-3 font-[family-name:var(--mono)] text-[11px] text-[#888] leading-[1.6]">
              <span className="text-[var(--bg)] font-bold">✳ Kết quả:</span> Landing page hoàn chỉnh<br />
              trong 23 phút · 0 dòng code tự viết
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
