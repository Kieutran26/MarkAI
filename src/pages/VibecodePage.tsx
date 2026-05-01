import React from 'react';
import { Link } from 'react-router-dom';
import VibecodeHero from '../components/vibecode/VibecodeHero';
import StatsBar from '../components/vibecode/StatsBar';
import PathHeader from '../components/vibecode/PathHeader';
import LessonList from '../components/vibecode/LessonList';
import PromptTeaser from '../components/vibecode/PromptTeaser';
import WhyFree from '../components/vibecode/WhyFree';

export default function VibecodePage() {
  return (
    <div className="font-[family-name:var(--sans)] text-[var(--ink)] min-h-screen flex flex-col bg-[var(--bg)]">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <VibecodeHero />
        
        {/* 2. Stats Bar */}
        <StatsBar />
        
        {/* 3. Path Header (dark section) */}
        <PathHeader />
        
        {/* 4. Lesson List - 10 lessons */}
        <LessonList />
        
        {/* 5. Prompt Teaser (dark section) */}
        <PromptTeaser />
        
        {/* 6. Why Free */}
        <WhyFree />
        
        {/* 7. CTA Final */}
        <section className="cta-section">
          <div className="cta-inner">
            <h2 className="cta-h2">
              Thôi nào, <em>bắt đầu bài 01 đi.</em>
            </h2>
            <p className="cta-desc">
              20 phút. Không cần cài gì. Đọc xong biết ngay vibecode có phù hợp với bạn không.
            </p>
            <div className="cta-btns">
              <Link to="/vibecode/vibecode-la-gi" className="btn-primary">
                Bắt đầu bài 01 →
              </Link>
              <a href="#lo-trinh" className="btn-ghost">
                Xem lại lộ trình
              </a>
            </div>
            <p className="cta-note">
              ✳ hoàn toàn miễn phí · vào học ngay · cập nhật liên tục
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
