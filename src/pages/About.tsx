import React from 'react';
import { Link } from 'react-router-dom';
import StatsBar from '../components/about/StatsBar';
import PhilosophySection from '../components/about/PhilosophySection';
import StorySection from '../components/about/StorySection';
import WhyFreeSection from '../components/about/WhyFreeSection';
import RoadmapSection from '../components/about/RoadmapSection';
import CTASection from '../components/about/CTASection';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#141414]">
      {/* 1. About Hero Section */}
      <section
        data-screen-label="About hero"
        className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-20 sm:pt-24 pb-16 sm:pb-20"
      >
        <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">
          ✳ Về dự án · markAI.vn · 2026
        </div>

        <h1 className="mt-6 text-[clamp(44px,8vw,120px)] leading-[0.95] tracking-[-0.06em] font-semibold max-w-[1100px] text-balance">
          Tại sao markAI{' '}
          <span className="font-light italic text-[#E8772E]">
            tồn tại miễn phí.
          </span>
        </h1>

        <div className="mt-10 sm:mt-12 flex justify-between items-end gap-8 flex-wrap">
          <p className="m-0 text-[18px] sm:text-[19px] leading-[1.6] text-[#3A3935] max-w-[560px] text-balance">
            markAI.vn là nền tảng học AI ứng dụng dành riêng cho dân Marketing Việt Nam. Không slide, không lý thuyết suông — học xong là dùng được ngay. Và mãi mãi miễn phí.
          </p>

          <div className="flex flex-col gap-3 items-start">
            <div className="flex gap-2.5 flex-wrap">
              <Link
                to="/vibecode"
                className="px-6 py-3.5 rounded-full bg-[#141414] text-white text-[14px] font-medium whitespace-nowrap hover:bg-[#E8772E] transition-all shadow-sm active:scale-95"
              >
                Bắt đầu học ngay →
              </Link>
              <a
                href="#lo-trinh"
                className="px-6 py-3.5 rounded-full border border-[#141414] text-[#141414] text-[14px] font-medium whitespace-nowrap hover:bg-[#141414] hover:text-white transition-all shadow-sm active:scale-95"
              >
                Xem lộ trình
              </a>
            </div>
            <span className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883]">
              ✳ miễn phí · cập nhật liên tục
            </span>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <StatsBar />

      {/* 3. (01) Philosophy */}
      <PhilosophySection />

      {/* 4. (02) Story */}
      <StorySection />

      {/* 5. (03) Why Free (with Cam kết 4 Không receipt) */}
      <WhyFreeSection />

      {/* 6. (04) Roadmap */}
      <RoadmapSection />

      {/* 7. CTA Banner */}
      <CTASection />
    </div>
  );
}
