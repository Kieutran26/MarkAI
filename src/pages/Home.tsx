import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface TrackLesson {
  n: string;
  t: string;
  d: string;
}

interface Track {
  code: string;
  status: string;
  live?: boolean;
  name: string;
  tools: string;
  foot: string;
  cta: string;
  ctaLink: string;
  lessons: TrackLesson[];
}

export default function Home() {
  // ─── HERO ANIMATION TICKER STATE ──────────────────────────────────────────
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => (t >= 200 ? 0 : t + 1));
    }, 45);
    return () => clearInterval(timer);
  }, []);

  // ─── (02) WHY MARKAI TOGGLE ───────────────────────────────────────────────
  const [isAfter, setIsAfter] = useState(true);

  // ─── (03) LEARNING TRACKS TABS ────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(0);
  const [switchCount, setSwitchCount] = useState(0);

  const tracks: Track[] = [
    {
      code: 'WEB',
      status: 'Live',
      live: true,
      name: 'Vibecode Web',
      tools: 'Next.js · Cursor · Vercel',
      foot: '10 bài · Đang học',
      cta: 'Học ngay',
      ctaLink: '/vibecode',
      lessons: [
        'Vibecode là gì?',
        'Từ điển chuyên ngành',
        'Cài đặt môi trường',
        'VS Code & Cursor',
        'Claude Code',
        'Công cụ hữu ích',
        'Cách prompt cho AI',
        'Debug & fix lỗi',
        'Skills & Workflow',
        'Deploy + Tracking',
      ].map((t, i) => ({
        n: String(i + 1).padStart(2, '0'),
        t,
        d: `${(0.08 + i * 0.035).toFixed(3)}s`,
      })),
    },
    {
      code: 'DATA',
      status: 'Sắp ra',
      name: 'Analytics AI',
      tools: 'GA4 · Looker · Báo cáo tự động',
      foot: 'Analytics · Đang soạn',
      cta: 'Góp ý chủ đề',
      ctaLink: '/feedback',
      lessons: [
        'Cài đặt GA4 nâng cao',
        'Looker Studio dashboard',
        'Claude phân tích data tự động',
        'Báo cáo tuần tự động',
        'UTM tracking chuẩn',
        'Funnel analysis',
      ].map((t, i) => ({
        n: String(i + 1).padStart(2, '0'),
        t,
        d: `${(0.08 + i * 0.035).toFixed(3)}s`,
      })),
    },
    {
      code: 'IMG',
      status: 'Sắp ra',
      name: 'Generate Image',
      tools: 'Midjourney · Flux · Firefly',
      foot: 'Image · Đang soạn',
      cta: 'Góp ý chủ đề',
      ctaLink: '/feedback',
      lessons: [
        'Prompt chiến lược cho từng tool',
        'Style reference & consistency',
        'Batch generation workflow',
        'API integration',
        'Image cho campaign thực tế',
        'A/B test creative assets',
      ].map((t, i) => ({
        n: String(i + 1).padStart(2, '0'),
        t,
        d: `${(0.08 + i * 0.035).toFixed(3)}s`,
      })),
    },
    {
      code: 'VID',
      status: 'Sắp ra',
      name: 'Video thực chiến',
      tools: 'Kling · Runway · HeyGen',
      foot: 'Video · Đang soạn',
      cta: 'Góp ý chủ đề',
      ctaLink: '/feedback',
      lessons: [
        'AI video generation workflow',
        'Kling cho product video',
        'Runway cho motion graphics',
        'HeyGen cho avatar & spokesperson',
        'Video repurposing strategy',
        'Subtitle & caption automation',
      ].map((t, i) => ({
        n: String(i + 1).padStart(2, '0'),
        t,
        d: `${(0.08 + i * 0.035).toFixed(3)}s`,
      })),
    },
  ];

  const currentTrack = tracks[activeTab];

  // Reasons Comparison Rows
  const reasonsData = [
    {
      n: '01',
      a: 'AI courses toàn tiếng Anh, dạy cho developer',
      b: 'markAI viết bằng tiếng Việt, dạy cho người không biết code.',
    },
    {
      n: '02',
      a: 'Học xong không biết áp dụng vào đâu',
      b: 'Mỗi bài kết thúc = 1 sản phẩm thật, deploy được ngay.',
    },
    {
      n: '03',
      a: 'Khoá học "miễn phí" nhưng upsell liên tục',
      b: 'markAI miễn phí thật. Không paywall. Không email gate.',
    },
    {
      n: '04',
      a: 'Nội dung rời rạc, không lộ trình',
      b: '4 module, mỗi module có lộ trình từ zero đến deploy.',
    },
  ];

  // Helper for Hero Showcase animation
  const showHeroItem = (threshold: number) => ({
    opacity: tick >= threshold ? 1 : 0,
    transform: tick >= threshold ? 'translateY(0px)' : 'translateY(10px)',
    transition: 'opacity 0.5s ease, transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1)',
  });

  const barHeights = [34, 48, 42, 62, 76, 94];
  const progressBarWidth = `${Math.min(100, (tick / 170) * 100)}%`;

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#141414] overflow-x-hidden selection:bg-[#E8772E]/20">
      {/* ─── HERO SECTION ────────────────────────────────────────────────────── */}
      <section
        data-screen-label="Hero"
        className="max-w-[1280px] mx-auto pt-16 md:pt-24 pb-0 px-6 md:px-8 flex flex-col items-center text-center"
      >
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 border border-[#DAD8D2] bg-white/70 rounded-full px-4 py-2 font-mono text-[12px] text-[#55534F] max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8772E] shrink-0" />
          <span className="text-balance">AI cho dân Marketing · Hoàn toàn miễn phí · 2026</span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 md:mt-10 font-semibold tracking-[-0.055em] leading-[0.98] text-[clamp(44px,8.2vw,120px)] text-balance">
          FOMO AI thì nhiều.
        </h1>

        <div className="flex items-center justify-center gap-[0.22em] flex-wrap font-light tracking-[-0.055em] leading-[1.05] text-[clamp(44px,8.2vw,120px)] text-[#A8A6A0] mt-1">
          <span>Dùng được thì</span>
          <span className="inline-flex items-center justify-center w-[1.15em] h-[1.15em] rounded-full bg-[#E8772E] text-white font-semibold text-[0.62em] tracking-[-0.03em] -rotate-8 shadow-sm">
            ít.
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-[17px] md:text-[18px] leading-[1.65] text-[#3A3935] max-w-[620px] text-pretty">
          Tool thì không thiếu. Biết dùng đúng cách mới là chuyện khác. markAI dạy bạn dùng AI tới nơi tới chốn — từ Vibecode web, Analytics, Generate Image đến Content Automation.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3.5 mt-8 flex-wrap justify-center">
          <Link
            to="/vibecode"
            className="bg-[#141414] text-white px-6 py-3.5 rounded-full text-[14px] font-medium whitespace-nowrap hover:bg-[#E8772E] transition-all no-underline shadow-sm"
          >
            Bắt đầu Vibecode →
          </Link>
          <Link
            to="/blog"
            className="px-6 py-3.5 rounded-full text-[14px] font-medium border border-[#CFCDC6] bg-white text-[#141414] whitespace-nowrap hover:border-[#141414] transition-all no-underline"
          >
            Đọc blog mới nhất
          </Link>
        </div>

        {/* Interactive Showcase Box */}
        <div className="mt-16 md:mt-20 w-full max-w-[960px] text-left bg-white border border-[#E6E4DE] rounded-[24px] p-5 md:p-7 shadow-xs">
          {/* Progress Indicator */}
          <div className="relative h-[2px] bg-[#EEECE7] rounded-full my-2 mb-6 overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#E8772E] rounded-full transition-[width] duration-200 linear"
              style={{ width: progressBarWidth }}
            />
          </div>

          {/* 3 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Card 01: Prompt */}
            <div className="bg-[#F6F5F1] rounded-[16px] p-4 md:p-5 h-[260px] flex flex-col gap-3 border border-[#E6E4DE]">
              <span
                className="font-mono text-[11px] transition-colors duration-400 font-medium"
                style={{ color: '#E8772E' }}
              >
                01 Prompt
              </span>
              <div className="flex-1 flex flex-col justify-center gap-2.5">
                {/* User Prompt Mock */}
                <div
                  className="self-start bg-[#EAE8E3] rounded-[14px] rounded-bl-[4px] p-3 flex flex-col gap-1.5"
                  style={showHeroItem(4)}
                >
                  <span className="block h-1.5 rounded-full w-[120px] bg-[#CFCDC6]" />
                  <span className="block h-1.5 rounded-full w-[78px] bg-[#CFCDC6]" />
                </div>
                {/* AI Reply Mock */}
                <div
                  className="self-end bg-[#141414] rounded-[14px] rounded-br-[4px] p-3 flex flex-col gap-1.5"
                  style={showHeroItem(18)}
                >
                  <span className="block h-1.5 rounded-full w-[104px] bg-[#55534F]" />
                  <span className="block h-1.5 rounded-full w-[64px] bg-[#55534F]" />
                </div>
                {/* Input Pill Mock */}
                <div
                  className="mt-1 bg-white border border-[#F2B78E] rounded-full p-2 pl-3.5 flex items-center gap-2.5 shadow-xs"
                  style={showHeroItem(32)}
                >
                  <span className="flex-1 flex gap-1.5 items-center">
                    <span className="block h-1.5 rounded-full w-[34%] bg-[#F5C9A8]" />
                    <span className="block h-1.5 rounded-full w-[22%] bg-[#F5C9A8]" />
                    <span className="block h-1.5 rounded-full w-[18%] bg-[#F5C9A8]" />
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#E8772E] text-white text-[12px] flex items-center justify-center font-bold">
                    ↑
                  </span>
                </div>
              </div>
            </div>

            {/* Card 02: Build */}
            <div className="bg-[#F6F5F1] rounded-[16px] p-4 md:p-5 h-[260px] flex flex-col gap-3 border border-[#E6E4DE]">
              <span
                className="font-mono text-[11px] transition-colors duration-400 font-medium"
                style={{ color: tick >= 50 ? '#E8772E' : '#A8A6A0' }}
              >
                02 Build
              </span>
              <div className="flex-1 bg-white border border-[#E6E4DE] rounded-[10px] overflow-hidden flex flex-col shadow-xs">
                {/* Window Bar */}
                <div className="flex gap-1 px-2.5 py-2 border-b border-[#EEECE7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4E2DC]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4E2DC]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4E2DC]" />
                </div>
                <div className="p-2.5 flex flex-col gap-2 flex-1 justify-between">
                  {/* Mock Navbar */}
                  <div
                    className="flex justify-between items-center"
                    style={showHeroItem(55)}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E27D96]" />
                    <span className="flex gap-1.5">
                      <span className="block h-1.5 rounded-full w-4 bg-[#E4E2DC]" />
                      <span className="block h-1.5 rounded-full w-4 bg-[#E4E2DC]" />
                      <span className="block h-1.5 rounded-full w-4 bg-[#E4E2DC]" />
                    </span>
                  </div>
                  {/* Mock Hero Banner */}
                  <div
                    className="bg-[#F9E1E6] rounded-[8px] p-2.5 flex flex-col gap-1.5"
                    style={showHeroItem(66)}
                  >
                    <span className="block h-2 rounded-full w-[70%] bg-[#E8A5B5]" />
                    <span className="block h-1.5 rounded-full w-[48%] bg-[#F0C2CD]" />
                    <span
                      className="block mt-1 h-3.5 w-12 rounded-full bg-[#E27D96]"
                      style={showHeroItem(78)}
                    />
                  </div>
                  {/* Mock Card Grids */}
                  <div className="grid grid-cols-3 gap-1.5 flex-1 min-h-[30px]">
                    <span className="bg-[#FBEDF0] rounded-[6px]" style={showHeroItem(88)} />
                    <span className="bg-[#FBEDF0] rounded-[6px]" style={showHeroItem(96)} />
                    <span className="bg-[#FBEDF0] rounded-[6px]" style={showHeroItem(104)} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 03: Launch */}
            <div className="bg-[#F6F5F1] rounded-[16px] p-4 md:p-5 h-[260px] flex flex-col gap-3 border border-[#E6E4DE]">
              <div className="flex justify-between items-center">
                <span
                  className="font-mono text-[11px] transition-colors duration-400 font-medium"
                  style={{ color: tick >= 125 ? '#E8772E' : '#A8A6A0' }}
                >
                  03 Launch
                </span>
                <span
                  className="flex items-center gap-1.5 font-mono text-[11px] text-[#3F7A3A] bg-[#F1F7EF] border border-[#CFE3CB] rounded-full px-2 py-0.5"
                  style={showHeroItem(168)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5E9E57]" />
                  Live
                </span>
              </div>
              {/* Dynamic Bar Chart */}
              <div className="flex-1 flex items-end gap-2 border-b border-[#DAD8D2] pb-0.5">
                {barHeights.map((h, i) => {
                  const isActive = tick >= 128 + i * 5;
                  const isLast = i === barHeights.length - 1;
                  return (
                    <span
                      key={i}
                      className="flex-1 rounded-t-[5px] transition-[height] duration-700 cubic-bezier(0.2, 0.7, 0.2, 1)"
                      style={{
                        height: isActive ? `${h}%` : '4%',
                        background: isLast ? '#E8772E' : '#141414',
                      }}
                    />
                  );
                })}
              </div>
              {/* Metric Stat */}
              <div className="flex items-baseline gap-2" style={showHeroItem(160)}>
                <span className="text-[30px] font-semibold tracking-[-0.04em] leading-none">
                  −80%
                </span>
                <span className="text-[13px] text-[#6B6B6B]">
                  thời gian triển khai
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS SECTION ───────────────────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto pt-24 md:pt-32 px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          <div className="border-l border-[#DAD8D2] pl-6 py-2 mb-6">
            <div className="text-[clamp(48px,5.5vw,84px)] font-light tracking-[-0.05em] leading-none text-[#141414]">
              5+
            </div>
            <div className="mt-3 text-[14px] text-[#6B6B6B]">Lộ trình học</div>
          </div>
          <div className="border-l border-[#DAD8D2] pl-6 py-2 mb-6">
            <div className="text-[clamp(48px,5.5vw,84px)] font-light tracking-[-0.05em] leading-none text-[#141414]">
              150+
            </div>
            <div className="mt-3 text-[14px] text-[#6B6B6B]">Prompt sẵn dùng</div>
          </div>
          <div className="border-l border-[#DAD8D2] pl-6 py-2 mb-6">
            <div className="text-[clamp(48px,5.5vw,84px)] font-light tracking-[-0.05em] leading-none text-[#141414]">
              100%
            </div>
            <div className="mt-3 text-[14px] text-[#6B6B6B]">Miễn phí mãi mãi</div>
          </div>
          <div className="border-l border-[#DAD8D2] pl-6 py-2 mb-6">
            <div className="text-[clamp(48px,5.5vw,84px)] font-light tracking-[-0.05em] leading-none text-[#E8772E]">
              0
            </div>
            <div className="mt-3 text-[14px] text-[#6B6B6B]">Yêu cầu biết code</div>
          </div>
        </div>
      </section>

      {/* ─── (01) MARKAI LÀ GÌ ───────────────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto pt-24 md:pt-32 px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <div className="font-mono text-[12px] text-[#8A8883] mb-5 uppercase tracking-wider">
            (01) markAI là gì
          </div>
          <h2 className="text-[clamp(34px,4.2vw,56px)] leading-[1.04] tracking-[-0.045em] font-semibold text-balance">
            Nền tảng học AI{' '}
            <span className="font-light italic text-[#E8772E]">thực chiến</span>{' '}
            cho dân Marketing.
          </h2>
          <p className="mt-7 text-[16px] md:text-[17px] leading-[1.65] text-[#55534F] max-w-[460px] text-pretty">
            markAI không dạy lý thuyết AI. markAI dạy bạn dùng AI để làm việc thật: tạo website, phân tích dữ liệu, sinh ảnh, dựng video — tất cả bằng tiếng Việt, từ zero, không cần biết code.
          </p>
        </div>

        <div className="flex flex-col">
          {[
            {
              n: '01',
              t: 'Lộ trình rõ ràng',
              d: 'Từ bài 01 đến bài cuối, không cần biết gì trước. Mỗi bài dưới 30 phút, có bài tập thực hành.',
            },
            {
              n: '02',
              t: 'Tiếng Việt 100%',
              d: 'Không thuật ngữ hàn lâm, không tiếng Anh lơ lửng. Viết cho dân Marketing, không phải developer.',
            },
            {
              n: '03',
              t: 'Dùng được ngay',
              d: 'Mỗi bài học kết thúc bằng một sản phẩm thật: website, dashboard, hình ảnh, video clip.',
            },
          ].map((pillar) => (
            <div
              key={pillar.n}
              className="grid grid-cols-[64px_1fr] sm:grid-cols-[72px_1fr] gap-4 py-7 border-t border-[#DAD8D2] first:border-t-0 lg:first:border-t"
            >
              <div className="text-[36px] sm:text-[40px] font-light tracking-[-0.04em] leading-none text-[#C9C7C0]">
                {pillar.n}
              </div>
              <div>
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] mb-2 text-[#141414]">
                  {pillar.t}
                </h3>
                <p className="text-[15px] leading-[1.65] text-[#6B6B6B]">
                  {pillar.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── (02) TẠI SAO MARKAI RA ĐỜI ─────────────────────────────────────── */}
      <section
        data-screen-label="02 Why"
        className="max-w-[1280px] mx-auto pt-24 md:pt-32 px-6 md:px-8"
      >
        <div className="flex justify-between items-end gap-6 flex-wrap">
          <div>
            <div className="font-mono text-[12px] text-[#8A8883] mb-5 uppercase tracking-wider">
              (02) Tại sao markAI ra đời
            </div>
            <h2 className="text-[clamp(34px,4.2vw,56px)] leading-[1.04] tracking-[-0.045em] font-semibold">
              Vì dân Marketing{' '}
              <span className="font-light italic text-[#E8772E]">bị bỏ lại.</span>
            </h2>
          </div>

          {/* Toggle pill */}
          <div className="flex bg-white border border-[#E6E4DE] rounded-full p-1 shadow-2xs">
            <button
              type="button"
              onClick={() => setIsAfter(false)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                !isAfter
                  ? 'bg-[#141414] text-white shadow-xs'
                  : 'text-[#6B6B6B] hover:text-[#141414]'
              }`}
            >
              Thị trường
            </button>
            <button
              type="button"
              onClick={() => setIsAfter(true)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                isAfter
                  ? 'bg-[#E8772E] text-white shadow-xs'
                  : 'text-[#6B6B6B] hover:text-[#141414]'
              }`}
            >
              Với markAI
            </button>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="mt-10 border-t border-[#141414]">
          {reasonsData.map((r) => {
            const isChecked = isAfter;
            return (
              <div
                key={r.n}
                className="grid grid-cols-[48px_1fr_28px] sm:grid-cols-[56px_1fr_32px] gap-4 items-center py-5 border-b border-[#DAD8D2] transition-colors"
              >
                <span
                  className="font-mono text-[12px] transition-colors"
                  style={{ color: isChecked ? '#E8772E' : '#A8A6A0' }}
                >
                  {r.n}
                </span>
                <span
                  className={`text-[clamp(16px,1.6vw,21px)] tracking-[-0.02em] leading-[1.38] transition-all ${
                    isChecked
                      ? 'font-medium text-[#141414] no-underline'
                      : 'font-light text-[#8A8883] line-through decoration-[#E8772E] decoration-[1.5px]'
                  }`}
                >
                  {isChecked ? r.b : r.a}
                </span>
                <span
                  className={`text-[16px] text-right font-bold transition-colors ${
                    isChecked ? 'text-[#E8772E]' : 'text-[#A8A6A0]'
                  }`}
                >
                  {isChecked ? '✓' : '×'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Truth Quote */}
        <p className="mt-9 text-[clamp(16px,1.6vw,20px)] leading-[1.55] tracking-[-0.015em] font-light max-w-[720px] text-[#3A3935]">
          <span className="text-[#E8772E] font-medium mr-1.5">Sự thật:</span>
          AI không thay thế marketer. Nhưng{' '}
          <span className="font-semibold text-[#141414]">marketer biết dùng AI</span>{' '}
          sẽ thay thế marketer không biết.
        </p>
      </section>

      {/* ─── (03) LỘ TRÌNH HỌC ───────────────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto pt-24 md:pt-32 pb-24 px-6 md:px-8">
        <div className="flex justify-between items-end gap-6 flex-wrap">
          <div>
            <div className="font-mono text-[12px] text-[#8A8883] mb-5 uppercase tracking-wider">
              (03) Lộ trình học
            </div>
            <h2 className="text-[clamp(34px,4.2vw,56px)] leading-[1.04] tracking-[-0.045em] font-semibold">
              Từ lý thuyết đến thực chiến.
              <br />
              <span className="font-light italic text-[#E8772E]">
                Tất cả miễn phí.
              </span>
            </h2>
          </div>
          <Link
            to="/vibecode"
            className="text-[14px] font-medium border-b border-current pb-0.5 hover:text-[#E8772E] transition-colors no-underline"
          >
            Xem tất cả lộ trình →
          </Link>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 md:gap-10 items-start">
          {/* Left: Tracks Tabs */}
          <div className="flex flex-col">
            {tracks.map((t, i) => {
              const isSelected = i === activeTab;
              return (
                <button
                  key={t.code}
                  type="button"
                  onClick={() => {
                    if (i !== activeTab) {
                      setActiveTab(i);
                      setSwitchCount((c) => c + 1);
                    }
                  }}
                  className="w-full text-left bg-transparent border-0 cursor-pointer flex items-baseline justify-between gap-4 py-5 border-t border-[#DAD8D2] transition-colors group"
                >
                  <span className="flex items-baseline gap-4 sm:gap-5">
                    <span
                      className="flex items-center font-mono text-[12px] transition-colors duration-350"
                      style={{ color: isSelected ? '#E8772E' : '#B8B6B0' }}
                    >
                      <span
                        className="inline-block h-[2px] bg-[#E8772E] transition-all duration-400"
                        style={{
                          width: isSelected ? '20px' : '0px',
                          marginRight: isSelected ? '8px' : '0px',
                        }}
                      />
                      {t.code}
                    </span>
                    <span
                      className={`text-[clamp(26px,3vw,40px)] tracking-[-0.04em] transition-all duration-400 ${
                        isSelected
                          ? 'font-semibold text-[#141414] translate-x-1.5'
                          : 'font-light text-[#A8A6A0] group-hover:text-[#141414]'
                      }`}
                    >
                      {t.name}
                    </span>
                  </span>
                  <span
                    className={`font-mono text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                      t.live
                        ? 'bg-[#FDEEE3] text-[#C85F1C] font-medium'
                        : 'bg-transparent text-[#A8A6A0]'
                    }`}
                  >
                    {t.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Track Card */}
          <div className="bg-white border border-[#E6E4DE] rounded-[20px] p-6 md:p-8 shadow-xs">
            <div className="flex justify-between gap-4 flex-wrap items-baseline">
              <h3
                key={`title-${switchCount}`}
                className="text-[24px] font-semibold tracking-[-0.02em] text-[#141414] animate-[tabInA_0.45s_cubic-bezier(0.2,0.7,0.2,1)_both]"
              >
                {currentTrack.name}
              </h3>
              <span
                key={`tools-${switchCount}`}
                className="text-[13px] text-[#8A8883] animate-[tabInA_0.45s_cubic-bezier(0.2,0.7,0.2,1)_0.05s_both]"
              >
                {currentTrack.tools}
              </span>
            </div>

            {/* Lessons Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 column-gap-6 border-t border-[#F1EFEA]">
              {currentTrack.lessons.map((l) => (
                <div
                  key={`${currentTrack.code}-${l.n}`}
                  className="flex gap-3 py-3 border-b border-[#F1EFEA] text-[14px]"
                  style={{
                    color: currentTrack.live ? '#141414' : '#8A8883',
                    animation: `tabInA 0.45s cubic-bezier(0.2, 0.7, 0.2, 1) ${l.d} both`,
                  }}
                >
                  <span className="font-mono text-[11px] text-[#B8B6B0] pt-0.5 shrink-0">
                    {l.n}
                  </span>
                  <span className="line-clamp-1">{l.t}</span>
                </div>
              ))}
            </div>

            {/* Card Footer */}
            <div className="mt-6 pt-2 flex justify-between items-center gap-4">
              <span
                key={`foot-${switchCount}`}
                className="text-[13px] text-[#8A8883] animate-[tabInA_0.45s_cubic-bezier(0.2,0.7,0.2,1)_0.3s_both]"
              >
                {currentTrack.foot}
              </span>
              <Link
                to={currentTrack.ctaLink}
                className="bg-[#141414] text-white px-4 py-2.5 rounded-full text-[13px] font-medium hover:bg-[#E8772E] transition-colors no-underline shadow-xs"
              >
                {currentTrack.cta} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION (FULL ORANGE CARD) ─────────────────────────────────── */}
      <section data-screen-label="CTA" className="px-4 md:px-8 pb-20">
        <div className="max-w-[1280px] mx-auto bg-[#E8772E] text-[#141414] rounded-[28px] p-8 md:p-16 lg:p-20 shadow-md">
          {/* Giant Stepped Headline */}
          <h2 className="font-semibold tracking-[-0.06em] leading-[0.96] text-[clamp(40px,7.8vw,100px)] flex flex-col">
            <span>Chọn lộ trình.</span>
            <span className="pl-0 sm:pl-[clamp(0px,10vw,140px)] font-light italic text-white">
              Bắt đầu thực chiến.
            </span>
            <span className="pl-0 sm:pl-[clamp(0px,22vw,280px)]">
              Không giới hạn.
            </span>
          </h2>

          {/* Description & Action Row */}
          <div className="mt-12 md:mt-16 pt-8 border-t-[1.5px] border-[#141414] flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
            <p className="text-[16px] md:text-[17px] leading-[1.65] max-w-[520px] text-[#141414]">
              Chọn lộ trình phù hợp và bắt đầu ngay. Tất cả đều miễn phí. Mãi mãi. Vibecode, Analytics, Image, Automation — chọn thứ bạn cần.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/vibecode"
                className="bg-[#141414] text-white px-6 py-4 rounded-full text-[14px] font-medium whitespace-nowrap hover:bg-white hover:text-[#141414] transition-all no-underline shadow-sm"
              >
                Vibecode Web — Bắt đầu ngay →
              </Link>
              <Link
                to="/tips"
                className="px-6 py-4 rounded-full text-[14px] font-medium border-[1.5px] border-[#141414] text-[#141414] whitespace-nowrap hover:bg-[#141414] hover:text-white transition-all no-underline"
              >
                Xem Tips &amp; Mẹo
              </Link>
            </div>
          </div>

          {/* 4 Points Footer */}
          <div className="mt-10 flex justify-between gap-4 flex-wrap font-mono text-[12px] text-[#141414] border-t border-[#141414]/20 pt-6">
            <span>01 — 100% miễn phí</span>
            <span>02 — Không cần biết code</span>
            <span>03 — 5 lộ trình học</span>
            <span>04 — Cập nhật liên tục</span>
          </div>
        </div>
      </section>
    </div>
  );
}
