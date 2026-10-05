import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section data-screen-label="CTA" className="px-4 sm:px-6 pb-20 sm:pb-28">
      <div className="max-w-[1280px] mx-auto bg-[#E8772E] text-[#141414] rounded-[28px] p-8 sm:p-14 lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-end shadow-xl">
        <div>
          <div className="font-[family-name:var(--mono)] text-[12px] mb-5 tracking-wide text-[#141414]/80">
            ✳ Bắt đầu ngay
          </div>
          <h2 className="m-0 text-[clamp(40px,6vw,84px)] leading-[0.98] tracking-[-0.055em] font-semibold text-balance">
            Đọc xong rồi,{' '}
            <span className="font-light italic text-white">
              học thôi.
            </span>
          </h2>
        </div>

        <div>
          <p className="m-0 text-[17px] leading-[1.65] max-w-[440px]">
            Lộ trình Vibecode Web 10 bài — từ zero đến có web deploy. Không cần biết code, học theo từng bước, và hoàn toàn miễn phí.
          </p>

          <div className="mt-7 flex items-center gap-4 flex-wrap">
            <Link
              to="/vibecode"
              className="px-6.5 py-4 rounded-full bg-[#141414] text-white text-[14px] font-medium whitespace-nowrap hover:bg-white hover:text-[#141414] transition-all shadow-md active:scale-95"
            >
              Bắt đầu Vibecode →
            </Link>
            <span className="font-[family-name:var(--mono)] text-[11px] text-[#141414]/80">
              hoàn toàn miễn phí · mãi mãi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
