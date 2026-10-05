import React from 'react';
import { Link } from 'react-router-dom';
import VibecodeHero from '../components/vibecode/VibecodeHero';
import StatsBar from '../components/vibecode/StatsBar';
import PathHeader from '../components/vibecode/PathHeader';
import LessonList from '../components/vibecode/LessonList';
import WhyFree from '../components/vibecode/WhyFree';

export default function VibecodePage() {
  return (
    <div className="font-[family-name:var(--sans)] text-[#141414] min-h-screen flex flex-col bg-[#F6F5F1] overflow-x-hidden">
      <main className="flex-1 pb-16 sm:pb-24">
        {/* 1. Hero Section */}
        <VibecodeHero />

        {/* 2. Stats Bar */}
        <StatsBar />

        {/* 3. Overview (01) */}
        <PathHeader />

        {/* 4. 10 Lessons Stepper & Carousel (02) */}
        <LessonList />

        {/* 5. Philosophy (03) */}
        <WhyFree />

        {/* 6. CTA Banner */}
        <section className="px-4 sm:px-6 mt-8 sm:mt-12">
          <div className="max-w-[1280px] mx-auto bg-[#E8772E] text-[#141414] rounded-[28px] p-8 sm:p-14 lg:p-16 shadow-lg">
            <h2 className="m-0 text-[clamp(40px,7.5vw,104px)] leading-[0.96] tracking-[-0.06em] font-semibold flex flex-col">
              <span>Thôi nào,</span>
              <span className="sm:pl-[clamp(0px,10vw,160px)] font-light italic text-[#FFFFFF]">
                bắt đầu bài 01 đi.
              </span>
            </h2>

            <div className="mt-12 sm:mt-16 pt-8 border-t-[1.5px] border-[#141414] flex justify-between gap-8 items-center flex-wrap">
              <p className="m-0 text-[16px] sm:text-[17px] leading-[1.6] max-w-[520px] font-normal text-[#141414]">
                20 phút. Không cần cài gì. Đọc xong biết ngay vibecode có phù hợp với bạn không.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  to="/vibecode/vibecode-la-gi"
                  className="bg-[#141414] text-white px-[26px] py-[16px] rounded-full text-[14px] font-medium whitespace-nowrap hover:bg-white hover:text-[#141414] transition-all active:scale-[0.98] shadow-sm"
                >
                  Bắt đầu bài 01 →
                </Link>
                <a
                  href="#lo-trinh"
                  className="px-[22px] py-[16px] rounded-full text-[14px] font-medium border-[1.5px] border-[#141414] text-[#141414] whitespace-nowrap hover:bg-[#141414] hover:text-white transition-all active:scale-[0.98]"
                >
                  Xem lại lộ trình
                </a>
              </div>
            </div>

            <div className="mt-10 flex gap-4 sm:gap-8 flex-wrap font-[family-name:var(--mono)] text-[12px] text-[#141414]/90 font-medium">
              <span>01 — Hoàn toàn miễn phí</span>
              <span>02 — Vào học ngay</span>
              <span>03 — Cập nhật liên tục</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
