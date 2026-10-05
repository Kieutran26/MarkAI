import React, { useState } from 'react';

export default function PhilosophySection() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const philosophyItems = [
    {
      n: '01',
      t: 'Học xong dùng được ngay.',
      d: 'Không có bài học nào kết thúc bằng "hiểu khái niệm" – tất cả đều kết thúc bằng sản phẩm thật.',
    },
    {
      n: '02',
      t: 'Không hàn lâm.',
      d: 'Không có thuật ngữ kỹ thuật nào xuất hiện mà không được giải thích bằng tiếng Việt dễ hiểu.',
    },
    {
      n: '03',
      t: 'Kiến thức AI không nên có giá.',
      d: 'Người làm Marketing xứng đáng có cùng quyền tiếp cận AI như dân tech.',
    },
    {
      n: '04',
      t: 'Cập nhật liên tục.',
      d: 'AI thay đổi từng tháng – nội dung markAI cũng vậy. Không có bài học nào bị để mốc.',
    },
  ];

  const current = philosophyItems[selectedIdx];

  return (
    <section data-screen-label="Philosophy" className="max-w-[1280px] mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-5">
        (01) Triết lý
      </div>
      <h2 className="m-0 text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
        Triết lý <span className="font-light italic text-[#E8772E]">của markAI</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {/* Left List */}
        <div className="border-t border-[#141414]">
          {philosophyItems.map((p, i) => {
            const isSelected = i === selectedIdx;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedIdx(i)}
                onMouseEnter={() => setSelectedIdx(i)}
                className="w-full text-left grid grid-cols-[48px_1fr_24px] gap-3 items-center py-6 sm:py-6.5 border-b border-[#DAD8D2] transition-colors cursor-pointer group"
              >
                <span
                  className={`font-[family-name:var(--mono)] text-[12px] transition-colors ${
                    isSelected ? 'text-[#E8772E] font-medium' : 'text-[#A8A6A0]'
                  }`}
                >
                  {p.n}
                </span>
                <span
                  className={`text-[clamp(19px,2.2vw,25px)] font-semibold tracking-[-0.03em] leading-[1.25] transition-colors ${
                    isSelected ? 'text-[#141414]' : 'text-[#A8A6A0] group-hover:text-[#141414]'
                  }`}
                >
                  {p.t}
                </span>
                <span
                  className={`text-[#E8772E] text-right font-medium text-[16px] transition-opacity ${
                    isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Feature Card */}
        <div className="bg-[#141414] text-[#F6F5F1] rounded-[24px] p-8 sm:p-11 flex flex-col justify-between gap-12 min-h-[380px] shadow-lg">
          <span className="text-[clamp(96px,12vw,160px)] font-light tracking-[-0.07em] leading-[0.8] text-[#E8772E]">
            {current.n}
          </span>
          <div>
            <h3 className="m-0 text-[clamp(24px,2.6vw,32px)] font-semibold tracking-[-0.035em] leading-[1.2]">
              {current.t}
            </h3>
            <p className="mt-3.5 text-[16px] leading-[1.65] text-[#A8A6A0] max-w-[440px]">
              {current.d}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
