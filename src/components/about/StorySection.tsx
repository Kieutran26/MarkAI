import React, { useState } from 'react';

export default function StorySection() {
  const [stepIdx, setStepIdx] = useState(0);

  const stories = [
    {
      tab: 'Bối cảnh',
      big: '2024',
      d: 'Năm 2024, AI bắt đầu xuất hiện khắp nơi trong các team Marketing. Nhưng phần lớn tài nguyên học AI đều dành cho dân tech - developer, data scientist, kỹ sư phần mềm.',
      isQuote: false,
    },
    {
      tab: 'Vấn đề',
      big: '×',
      d: 'Dân Marketing muốn học thì phải vào các khóa học chung, nghe những khái niệm không liên quan đến công việc hàng ngày, hoặc tự mày mò từ đầu bằng tiếng Anh.',
      isQuote: false,
    },
    {
      tab: 'Câu hỏi',
      big: '?',
      d: '"Tại sao không có nơi nào dạy AI đúng cho Marketing, đúng ngôn ngữ, đúng bối cảnh Việt Nam?"',
      isQuote: true,
    },
    {
      tab: 'markAI ra đời',
      big: '✳',
      d: 'markAI.vn ra đời từ câu hỏi đó. Một nơi duy nhất - dành riêng cho dân Marketing Việt Nam muốn học AI ứng dụng thực chiến, không phải AI lý thuyết.',
      isQuote: false,
    },
  ];

  const current = stories[stepIdx];
  const isLast = stepIdx === stories.length - 1;

  const nextStep = () => {
    setStepIdx((prev) => (prev + 1) % stories.length);
  };

  return (
    <section data-screen-label="Story" className="max-w-[1280px] mx-auto px-6 sm:px-8 pb-28 sm:pb-32">
      <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-5">
        (02) Câu chuyện
      </div>
      <h2 className="m-0 text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
        markAI ra đời{' '}
        <span className="font-light italic text-[#E8772E]">
          từ một câu hỏi.
        </span>
      </h2>

      {/* 4 Step Progress Tabs */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3">
        {stories.map((s, i) => {
          const isPassedOrCurrent = i <= stepIdx;
          const isCurrent = i === stepIdx;

          return (
            <button
              key={i}
              type="button"
              onClick={() => setStepIdx(i)}
              className="text-left flex flex-col gap-3 cursor-pointer group"
            >
              <span
                className={`h-[4px] rounded-full transition-colors duration-300 block ${
                  isPassedOrCurrent ? 'bg-[#E8772E]' : 'bg-[#DAD8D2]'
                }`}
              />
              <span
                className={`font-[family-name:var(--mono)] text-[11px] transition-colors ${
                  isCurrent ? 'text-[#E8772E] font-medium' : 'text-[#8A8883]'
                }`}
              >
                0{i + 1}
              </span>
              <span
                className={`text-[16px] sm:text-[17px] tracking-[-0.02em] transition-colors ${
                  isCurrent ? 'font-semibold text-[#141414]' : 'font-normal text-[#8A8883] group-hover:text-[#141414]'
                }`}
              >
                {s.tab}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Story Display Card */}
      <div
        className={`mt-8 rounded-[24px] p-8 sm:p-12 min-h-[300px] flex flex-wrap gap-8 sm:gap-12 items-end transition-all duration-400 shadow-sm ${
          isLast
            ? 'bg-[#E8772E] text-[#141414]'
            : 'bg-[#141414] text-[#F6F5F1]'
        }`}
      >
        <span
          className={`shrink-0 min-w-[140px] sm:min-w-[160px] text-[clamp(72px,8vw,112px)] font-light tracking-[-0.07em] leading-[0.8] ${
            isLast ? 'text-white' : 'text-[#E8772E]'
          }`}
        >
          {current.big}
        </span>
        <p
          className={`flex-[1_1_360px] m-0 max-w-[680px] leading-[1.45] tracking-[-0.02em] text-balance ${
            current.isQuote
              ? 'text-[clamp(24px,2.8vw,34px)] font-semibold'
              : 'text-[clamp(18px,1.8vw,22px)] font-normal'
          }`}
        >
          {current.d}
        </p>
      </div>

      {/* Bottom Status bar */}
      <div className="mt-5 flex justify-between items-center gap-4 flex-wrap">
        <div className="flex gap-3 items-baseline text-[14px] leading-[1.6] text-[#55534F]">
          <span className="font-[family-name:var(--mono)] text-[11px] px-2.5 py-1 rounded-full bg-[#141414] text-white whitespace-nowrap">
            Hiện tại
          </span>
          <span>
            Lộ trình Vibecode Web (10 bài) đang live. Analytics, Generate Image và Motion Video đang trong quá trình phát triển.
          </span>
        </div>

        <button
          type="button"
          onClick={nextStep}
          className="px-4.5 py-2.5 rounded-full border border-[#141414] text-[13px] font-medium whitespace-nowrap hover:bg-[#141414] hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
        >
          {isLast ? '↺ Đọc lại' : 'Tiếp →'}
        </button>
      </div>
    </section>
  );
}
