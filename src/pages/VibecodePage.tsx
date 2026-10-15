import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VibecodeHero from '../components/vibecode/VibecodeHero';
import StatsBar from '../components/vibecode/StatsBar';
import VibecodePlaybook from '../components/vibecode/VibecodePlaybook';
import PathHeader from '../components/vibecode/PathHeader';
import LessonList from '../components/vibecode/LessonList';
import WhyFree from '../components/vibecode/WhyFree';

export default function VibecodePage() {
  const [learningMode, setLearningMode] = useState<'cases' | 'sequential'>('cases');

  return (
    <div className="font-[family-name:var(--sans)] text-[#141414] min-h-screen flex flex-col bg-[#F6F5F1] overflow-x-hidden">
      <main className="flex-1 pb-16 sm:pb-24">
        {/* 1. Hero Section */}
        <VibecodeHero />

        {/* 2. Stats Bar */}
        <StatsBar />

        {/* 3. Learning Mode Switcher Bar */}
        <section className="max-w-[1280px] mx-auto px-6 sm:px-8 mt-14 sm:mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#DAD8D2]">
            <div>
              <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-3">
                (01) Phương thức học
              </div>
              <h3 className="m-0 text-[clamp(24px,3vw,36px)] leading-[1.1] font-semibold text-[#141414] tracking-[-0.035em]">
                {learningMode === 'cases' ? (
                  <span>
                    Playbook thực chiến.{' '}
                    <span className="font-light italic text-[#E8772E]">
                      Học theo tình huống.
                    </span>
                  </span>
                ) : (
                  <span>
                    Giáo trình 10 bài.{' '}
                    <span className="font-light italic text-[#E8772E]">
                      Tuần tự từ số 0.
                    </span>
                  </span>
                )}
              </h3>
            </div>

            {/* Pill Switcher matching markAI Landing */}
            <div className="flex bg-white border border-[#E6E4DE] rounded-full p-1 gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setLearningMode('cases')}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  learningMode === 'cases'
                    ? 'bg-[#141414] text-white'
                    : 'text-[#6B6B6B] hover:text-[#141414]'
                }`}
              >
                <span>⚡ Playbook Theo Case</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    learningMode === 'cases'
                      ? 'bg-[#E8772E] text-white font-bold'
                      : 'bg-[#F1EFEA] text-[#8A8883]'
                  }`}
                >
                  18 cases
                </span>
              </button>

              <button
                type="button"
                onClick={() => setLearningMode('sequential')}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  learningMode === 'sequential'
                    ? 'bg-[#141414] text-white'
                    : 'text-[#6B6B6B] hover:text-[#141414]'
                }`}
              >
                <span>📚 10 Bài Tuần Tự</span>
              </button>
            </div>
          </div>
        </section>

        {/* 4. Main Learning Area */}
        {learningMode === 'cases' ? (
          <div>
            <VibecodePlaybook />

            {/* Subtle Switch Link to Sequential */}
            <div className="max-w-[1280px] mx-auto px-6 sm:px-8 mb-20">
              <div className="bg-white border border-[#E6E4DE] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="font-[family-name:var(--mono)] text-[12px] text-[#E8772E] font-medium block mb-1">
                    Học nền tảng bài bản
                  </span>
                  <h4 className="text-[20px] sm:text-[22px] font-semibold text-[#141414] tracking-[-0.025em] m-0">
                    Muốn tìm hiểu toàn bộ 10 bài học từ số 0 đến deploy?
                  </h4>
                  <p className="text-[15px] text-[#6B6B6B] mt-2 mb-0 max-w-[620px] leading-relaxed">
                    Xem trọn bộ giáo trình nền tảng: cài đặt môi trường, từ ngữ chuyên ngành dev, dòng lệnh Claude Code, và kết nối database.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setLearningMode('sequential');
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-[#141414] hover:bg-[#E8772E] text-white rounded-full text-[13.5px] font-medium whitespace-nowrap transition-colors shrink-0 cursor-pointer"
                >
                  Chuyển sang 10 bài tuần tự →
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Quick Switch Banner back to Cases */}
            <div className="max-w-[1280px] mx-auto px-6 sm:px-8 mt-10">
              <div className="bg-white border border-[#E6E4DE] rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
                <div className="text-[14.5px] text-[#141414]">
                  💡 <strong>Bạn đang cần làm gấp 1 tính năng cụ thể?</strong> (như Landing page, Form Google Sheets, Quiz...)
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setLearningMode('cases');
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="text-[13.5px] font-semibold text-[#E8772E] hover:underline cursor-pointer"
                >
                  Mở kho 18+ Case thực chiến làm ngay →
                </button>
              </div>
            </div>

            {/* Overview (01) */}
            <PathHeader />

            {/* 10 Lessons Stepper & Carousel (02) */}
            <LessonList />
          </div>
        )}

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
