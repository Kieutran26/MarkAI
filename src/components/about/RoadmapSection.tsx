import React from 'react';

export default function RoadmapSection() {
  const roadmapItems = [
    {
      status: 'Đang live',
      phase: '● Bây giờ · đang live',
      isLive: true,
      title: 'Vibecode Web',
      metric: '10 bài',
      desc: 'Từ zero đến deploy web hoàn chỉnh. Cursor, Claude Code, Next.js, Vercel — không cần biết code trước.',
      tags: ['Cursor', 'Claude Code', 'Next.js', 'Vercel'],
    },
    {
      status: 'Đang live',
      phase: '● Bây giờ · đang live',
      isLive: true,
      title: 'Prompt Library',
      metric: '150+',
      desc: 'Thư viện prompt cho dân Marketing. Đã test thực tế, có biến thay thế, dùng được ngay với Claude · ChatGPT · Cursor.',
      tags: ['Claude', 'ChatGPT', 'Cursor'],
    },
    {
      status: 'Sắp ra',
      phase: '○ Sắp tới · đang phát triển',
      isLive: false,
      title: 'Analytics với AI',
      metric: '—',
      desc: 'Đọc GA4, tạo báo cáo tự động, phân tích data Marketing với AI. Không cần biết SQL hay Python.',
      tags: ['GA4', 'Looker', 'Claude'],
    },
    {
      status: 'Sắp ra',
      phase: '○ Sắp tới · đang phát triển',
      isLive: false,
      title: 'Generate Image — Visual Campaign',
      metric: '—',
      desc: 'Tạo visual cho campaign Marketing bằng AI. Midjourney, Flux, Firefly — từ brief đến asset hoàn chỉnh.',
      tags: ['Midjourney', 'Flux', 'Firefly'],
    },
  ];

  return (
    <section
      id="lo-trinh"
      data-screen-label="Roadmap"
      className="max-w-[1280px] mx-auto px-6 sm:px-8 py-24 sm:py-32"
    >
      <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-5">
        (04) Lộ trình
      </div>
      <h2 className="m-0 text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
        Đang build gì,{' '}
        <span className="font-light italic text-[#E8772E]">
          sắp ra gì.
        </span>
      </h2>

      {/* Connected 4-Column Timeline */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
        {roadmapItems.map((r, i) => (
          <div key={i} className="flex flex-col">
            {/* Status Phase Label */}
            <div
              className={`flex items-center gap-2 font-[family-name:var(--mono)] text-[11px] pb-3.5 min-h-[30px] ${
                r.isLive ? 'text-[#E8772E] font-medium' : 'text-[#8A8883]'
              }`}
            >
              {r.phase}
            </div>

            {/* Timeline Segment Bar */}
            <div
              className={`h-[4px] rounded-full ${
                r.isLive
                  ? 'bg-[#E8772E]'
                  : 'bg-[repeating-linear-gradient(90deg,#CFCDC6_0_8px,transparent_8px_14px)]'
              }`}
            />

            {/* Content Body */}
            <div className="pt-7 pr-4 flex flex-col gap-4 flex-1">
              <span
                className={`text-[44px] sm:text-[48px] font-light tracking-[-0.06em] leading-[0.9] ${
                  r.isLive ? 'text-[#E8772E]' : 'text-[#C9C7C0]'
                }`}
              >
                {r.metric}
              </span>

              <h3
                className={`m-0 text-[20px] font-semibold tracking-[-0.025em] leading-[1.25] ${
                  r.isLive ? 'text-[#141414]' : 'text-[#55534F]'
                }`}
              >
                {r.title}
              </h3>

              <p className="m-0 text-[14px] leading-[1.6] text-[#6B6B6B] flex-1">
                {r.desc}
              </p>

              {/* Tags */}
              <div className="mt-auto pt-2 flex gap-1.5 flex-wrap">
                {r.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="font-[family-name:var(--mono)] text-[10px] px-2.5 py-1 rounded-full border border-[#DAD8D2] text-[#55534F] bg-white/40 whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
