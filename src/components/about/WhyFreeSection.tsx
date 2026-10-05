import React from 'react';

export default function WhyFreeSection() {
  const receiptItems = [
    {
      n: '01',
      t: 'Không quảng cáo.',
      d: 'Không banner, không affiliate link, không có sponsor ảnh hưởng đến nội dung.',
      v: '0',
      vc: '#141414',
    },
    {
      n: '02',
      t: 'Không tracking.',
      d: 'Không Google Analytics, không Facebook Pixel, không retargeting. Bạn học mà không bị theo dõi.',
      v: '0',
      vc: '#141414',
    },
    {
      n: '03',
      t: 'Không paywall.',
      d: 'Mọi bài học, prompt, tips — tất cả đều public. Không có "premium tier", không có phần khoá.',
      v: '0',
      vc: '#141414',
    },
    {
      n: '04',
      t: 'Mãi mãi.',
      d: 'Cam kết này không thay đổi. Dự án này chạy bằng thời gian cá nhân — không có investor yêu cầu monetize.',
      v: '∞',
      vc: '#E8772E',
    },
  ];

  return (
    <section data-screen-label="Why free" className="bg-[#141414] text-[#F6F5F1]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-28 sm:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Manifesto Statement */}
        <div>
          <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-5">
            (03) Tại sao miễn phí
          </div>
          <h2 className="m-0 text-[clamp(36px,5.5vw,76px)] leading-[1.0] tracking-[-0.05em] font-semibold text-balance">
            Không phải chiến lược.{' '}
            <span className="font-light italic text-[#E8772E]">
              Là quan điểm.
            </span>
          </h2>
          <p className="mt-7 text-[17px] leading-[1.7] text-[#A8A6A0] max-w-[480px]">
            markAI không miễn phí vì cần traffic. Miễn phí vì đây là quan điểm: kiến thức AI không nên là thứ người ta có tiền mới tiếp cận được.
          </p>
        </div>

        {/* Right Column: Interactive Paper Receipt */}
        <div className="max-w-[460px] w-full mx-auto lg:justify-self-center bg-[#F6F5F1] text-[#141414] rounded-[8px] p-7 sm:p-8 font-[family-name:var(--mono)] text-[13px] shadow-2xl transition-transform hover:rotate-0 duration-300 rotate-1 sm:rotate-[1.5deg]">
          <div className="flex justify-between items-center gap-3">
            <span className="font-semibold text-[14px]">markAI.vn</span>
            <span className="text-[#8A8883] text-[12px]">Cam kết 4 Không</span>
          </div>

          <div className="my-4 border-t border-dashed border-[#A8A6A0]" />

          <div className="divide-y divide-dashed divide-[#DAD8D2]">
            {receiptItems.map((r, i) => (
              <div key={i} className="py-3.5">
                <div className="flex justify-between items-baseline gap-4 font-semibold text-[13.5px]">
                  <span>
                    {r.n} {r.t}
                  </span>
                  <span style={{ color: r.vc }} className="font-mono text-[15px]">
                    {r.v}
                  </span>
                </div>
                <div className="mt-1.5 font-sans text-[12px] leading-[1.5] text-[#6B6B6B]">
                  {r.d}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-dashed border-[#A8A6A0] flex justify-between items-baseline">
            <span className="font-semibold text-[14px]">Tổng</span>
            <span className="font-sans text-[44px] font-semibold tracking-[-0.05em] text-[#E8772E] leading-none">
              0đ
            </span>
          </div>

          <div className="mt-3.5 text-[10px] text-[#8A8883] tracking-[0.06em] uppercase text-center font-mono">
            ✳ Học thật · giá trị thật · tự do thật
          </div>
        </div>
      </div>
    </section>
  );
}
