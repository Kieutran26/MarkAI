import React from 'react';

export default function WhyFree() {
  const values = [
    {
      k: 'Dành riêng',
      t: 'Cho dân Marketing Việt Nam',
      d: 'Không học chung với dân tech. Ví dụ, use case, và ngôn ngữ — tất cả từ góc nhìn Marketing.',
    },
    {
      k: 'Thực chiến',
      t: 'Học xong dùng được ngay',
      d: 'Không slide. Không lý thuyết suông. Mỗi bài kết thúc bằng thứ gì đó bạn có thể làm được luôn.',
    },
    {
      k: 'Cập nhật',
      t: 'Mỗi tuần có nội dung mới',
      d: 'AI thay đổi nhanh. markAI cập nhật theo — tool mới, kỹ thuật mới, prompt mới liên tục.',
    },
    {
      k: 'Sạch',
      t: 'Không quảng cáo · Không tracking',
      d: 'Không retargeting. Không bán data. Không email spam. Học xong, đi làm — không bị làm phiền.',
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-5">
        (03) Triết lý markAI
      </div>
      <h2 className="m-0 text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
        Không phải freemium.{' '}
        <span className="font-light italic text-[#E8772E]">Miễn phí thật.</span>
      </h2>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {values.map((p, index) => (
          <div key={index} className="border-t border-[#141414] pt-5">
            <div className="font-[family-name:var(--mono)] text-[12px] text-[#E8772E] font-medium">
              {p.k}
            </div>
            <h3 className="my-3 text-[18px] sm:text-[19px] font-semibold tracking-[-0.02em] text-[#141414]">
              {p.t}
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.65] text-[#6B6B6B]">
              {p.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
