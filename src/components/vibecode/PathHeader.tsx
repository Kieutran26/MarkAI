import React from 'react';

export default function PathHeader() {
  const specs = [
    { k: 'Tổng thời gian', v: '~6 tiếng đọc', c: '#141414' },
    { k: 'Số bài lớn', v: '10 bài', c: '#141414' },
    { k: 'Số bài nhỏ', v: '52 bài nhỏ', c: '#141414' },
    { k: 'Hình thức', v: 'Text · không video', c: '#141414' },
    { k: 'Yêu cầu', v: 'Không cần nền tảng code', c: '#E8772E' },
  ];

  return (
    <section
      id="lo-trinh"
      className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-24 sm:pt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end"
    >
      <div>
        <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-5">
          (01) Tổng quan
        </div>
        <h2 className="m-0 text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
          Từ <span className="font-light italic text-[#E8772E]">zero</span> đến có web trong 1 buổi sáng.
        </h2>
        <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.65] text-[#55534F] max-w-[460px]">
          10 bài — từ tư duy đến deploy thực tế. Mỗi bài chia nhỏ thành 5–6 phần, đọc từng phần trong 5–10 phút.
        </p>
      </div>

      <div className="border-t border-[#141414]">
        {specs.map((s, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-4 py-4 border-b border-[#DAD8D2] text-[15px]"
          >
            <span className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] pt-0.5">
              {s.k}
            </span>
            <span
              className="font-medium text-right"
              style={{ color: s.c }}
            >
              {s.v}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
