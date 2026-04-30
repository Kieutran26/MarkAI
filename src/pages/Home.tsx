import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import TerminalAnimation from '../components/TerminalAnimation';

const Hero = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="page-shell pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
  >
    <div>
      <p className="font-mono text-[11px] uppercase text-muted tracking-widest mb-4">
        ✳ AI cho dân Marketing · hoàn toàn miễn phí · 2026
      </p>
      <h1 className="font-serif text-[clamp(2.8rem,5.5vw,4.8rem)] leading-[1.05] tracking-tight mb-6 text-ink">
        <span className="text-accent">FOMO AI</span> thì nhiều. <br />
        Dùng được thì <span className="strike">ít.</span>
      </h1>
      <p className="font-sans text-[15px] leading-[1.7] text-ink2 mb-8 max-w-prose">
        Tool thì không thiếu. Biết dùng đúng cách mới là chuyện khác. markAI dạy bạn dùng AI tới nơi tới chốn — từ Vibecode web, Analytics, Generate Image đến Content Automation.
      </p>
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <Link to="/vibecode" className="btn-primary no-underline text-white">
          Bắt đầu Vibecode →
        </Link>
        <Link to="/blog" className="btn-ghost no-underline text-ink">
          Đọc blog mới nhất
        </Link>
      </div>
      <p className="font-mono text-[11px] text-muted">
        ✳ miễn phí · không cần email · không tracking
      </p>
    </div>
    <div className="hidden md:block">
      <TerminalAnimation />
    </div>
  </motion.div>
);

// ─── STATS BAR (unchanged) ───────────────────────────────────────────────────
const StatsBar = () => {
  const stats = [
    { value: '5+', label: 'Lộ trình học' },
    { value: '150+', label: 'Prompt sẵn dùng' },
    { value: '100%', label: 'Miễn phí mãi mãi' },
    { value: '0', label: 'Yêu cầu biết code' },
  ];
  return (
    <div className="border-t border-b border-border">
      <div className="page-shell flex flex-col sm:flex-row">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex-1 min-w-[120px] p-8 border-b sm:border-b-0 sm:border-r border-border last:border-r-0 last:border-b-0"
          >
            <div className="font-serif text-[2.4rem] leading-none mb-1 text-ink">{stat.value}</div>
            <div className="font-mono text-[11px] text-muted tracking-wide">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};



// ─── LEARNING PATHS ──────────────────────────────────────────────────────────
const learningPaths = [
  {
    id: 'web',
    icon: 'WEB',
    name: 'Vibecode Web',
    sub: 'Next.js · Cursor · Vercel',
    status: 'live',
    statusLabel: 'Live',
    lessons: [
      { num: '01', title: 'Vibecode là gì?' },
      { num: '02', title: 'Từ ngữ code & design' },
      { num: '03', title: 'Cài đặt môi trường' },
      { num: '04', title: 'VS Code & Cursor' },
      { num: '05', title: 'Claude Code' },
      { num: '06', title: 'Công cụ hữu ích' },
      { num: '07', title: 'Cách prompt cho AI' },
      { num: '08', title: 'Debug & fix lỗi' },
      { num: '09', title: 'Skills & Workflow' },
      { num: '10', title: 'Deploy + Tracking' },
    ],
    count: '10 bài · đang học',
    cta: 'Học ngay',
    ctaLink: '/vibecode',
  },
  {
    id: 'analytics',
    icon: 'DATA',
    name: 'Analytics AI',
    sub: 'GA4 · Looker · Báo cáo tự động',
    status: 'soon',
    statusLabel: 'Sắp ra',
    topics: [
      'Cài đặt GA4 nâng cao',
      'Looker Studio dashboard',
      'Claude phân tích data tự động',
      'Báo cáo tuần tự động',
      'UTM tracking chuẩn',
      'Funnel analysis',
    ],
    count: 'Analytics · đang soạn',
    cta: 'Góp ý chủ đề',
    ctaLink: '/feedback',
  },
  {
    id: 'image',
    icon: 'IMG',
    name: 'Generate Image',
    sub: 'Midjourney · Flux · Firefly',
    status: 'soon',
    statusLabel: 'Sắp ra',
    topics: [
      'Prompt chiến lược cho từng tool',
      'Style reference & consistency',
      'Batch generation workflow',
      'API integration',
      'Image cho campaign thực tế',
      'A/B test creative assets',
    ],
    count: 'Image · đang soạn',
    cta: 'Góp ý chủ đề',
    ctaLink: '/feedback',
  },
  {
    id: 'video',
    icon: 'VID',
    name: 'Video thực chiến',
    sub: 'Kling · Runway · HeyGen',
    status: 'soon',
    statusLabel: 'Sắp ra',
    topics: [
      'AI video generation workflow',
      'Kling cho product video',
      'Runway cho motion graphics',
      'HeyGen cho avatar & spokesperson',
      'Video repurposing strategy',
      'Subtitle & caption automation',
    ],
    count: 'Video · đang soạn',
    cta: 'Góp ý chủ đề',
    ctaLink: '/feedback',
  },
];

const iconStyle = (isLive: boolean) => ({
  width: 40,
  height: 40,
  background: isLive ? 'var(--accent)' : 'var(--bg2)',
  border: `1px solid ${isLive ? 'var(--accent)' : 'var(--border)'}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--mono)',
  fontSize: '10px',
  textTransform: 'uppercase' as const,
  color: isLive ? 'white' : 'var(--ink2)',
});

const learningPathCardClass = (index: number) => {
  const classes = ['flex', 'flex-col', 'border-border'];

  if (index < learningPaths.length - 1) {
    classes.push('border-b', 'xl:border-b-0', 'xl:border-r');
  }

  if (index === 0 || index === 2) {
    classes.push('md:border-r');
  }

  return classes.join(' ');
};

const blogColumnCardClass = (index: number, total: number) =>
  `flex flex-col gap-2 transition-colors ${index < total - 1 ? 'border-b border-border' : ''}`;

const LearningPaths = () => (
  <section id="paths">
    {/* Section header */}
    <div className="page-shell border-b border-border py-10">
      <p className="section-label"><span>✳</span> lộ trình học</p>
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <h2 className="section-heading">
          Từ lý thuyết đến thực chiến. <em>Tất cả miễn phí.</em>
        </h2>
        <Link to="/vibecode" className="btn-primary no-underline text-white">
          Xem tất cả lộ trình →
        </Link>
      </div>
    </div>

    {/* Paths grid */}
    <div className="page-shell grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-b border-border">
      {learningPaths.map((path, idx) => (
        <motion.div
          key={path.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.08 }}
          className={learningPathCardClass(idx)}
        >
          {/* Path header */}
          <div style={{ padding: '28px 28px 20px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={iconStyle(path.status === 'live')}>{path.icon}</div>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '9px',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.08em',
                padding: '3px 8px',
                border: `1px solid ${path.status === 'live' ? 'var(--accent)' : 'var(--border)'}`,
                color: path.status === 'live' ? 'var(--accent)' : 'var(--muted)',
                background: path.status === 'live' ? 'rgba(232, 140, 46, 0.06)' : 'transparent',
              }}>
                {path.statusLabel}
              </span>
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, color: 'var(--ink)', marginBottom: 6, letterSpacing: '-0.02em' }}>
              {path.name}
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', lineHeight: 1.5 }}>
              {path.sub}
            </div>
          </div>

          {/* Path body */}
          {path.status === 'live' ? (
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', flex: 1 }}>
              {path.lessons.map((lesson) => (
                <li key={lesson.num}>
                  <Link
                    to={path.ctaLink}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '14px 28px',
                      borderBottom: '1px solid var(--border)',
                      fontSize: 13,
                      color: 'var(--ink2)',
                      textDecoration: 'none',
                      transition: 'background 0.12s',
                    }}
                    className="group"
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '')}
                  >
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', minWidth: 20 }}>
                      {lesson.num}
                    </span>
                    <span style={{ flex: 1, lineHeight: 1.4 }}>{lesson.title}</span>
                    <ArrowRight size={10} className="text-muted transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ display: 'block', width: 12, height: 1, background: 'var(--border)' }} />
                Sẽ có
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
                {path.topics.map((topic, tIdx) => (
                  <div key={tIdx} style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '11px',
                    color: 'var(--muted)',
                    padding: '8px 12px',
                    border: '1px dashed var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border)', flexShrink: 0 }} />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Path footer */}
          <div style={{ padding: '20px 28px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase' as const, letterSpacing: '0.04em' }}>
              {path.count}
            </span>
            <Link
              to={path.ctaLink}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: path.status === 'live' ? 'var(--ink)' : 'var(--muted)',
                textDecoration: 'none',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.04em',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                transition: 'color 0.15s',
              }}
              className="group"
            >
              {path.cta}
              <ArrowRight size={10} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── TOOLS & RESOURCES ────────────────────────────────────────────────────────
const featuredPrompts = [
  {
    category: 'VIBECODE',
    title: 'Tạo landing page từ brief',
    preview: '"Tạo landing page cho [sản phẩm]. Header có nav + CTA. Hero section với headline, subheadline, form thu lead..."',
    note: 'Hero, CTA, form thu lead',
  },
  {
    category: 'ANALYTICS',
    title: 'Phân tích báo cáo tuần',
    preview: '"Đây là data GA4 tuần này [paste data]. Phân tích: điểm nào tốt, điểm nào cần cải thiện, 3 action items..."',
    note: 'GA4, summary, action items',
  },
  {
    category: 'COPY',
    title: 'Viết email sequence',
    preview: '"Viết 5-email nurture sequence cho [audience]. Email 1: welcome. Email 2: value prop. Email 3: social proof..."',
    note: 'Welcome, value prop, proof',
  },
];

const tools = [
  { tag: 'Blog', title: 'Blog markAI', sub: 'Case study · Xu hướng AI · Review', href: '/blog', stat: 'Bài dài, có context' },
  { tag: 'Tips', title: 'Tips & Mẹo', sub: '100+ thủ thuật AI thực chiến', href: '/tips', stat: 'Ngắn, làm ngay' },
  { tag: 'Prompts', title: 'Prompt Library', sub: '150+ prompt đã test · copy & dùng', href: '/prompts', stat: 'Copy, sửa, chạy' },
];

const ToolsResources = () => (
  <section>
    <div className="page-shell border-b border-border py-10">
      <p className="section-label"><span>✳</span> công cụ & tài nguyên</p>
      <h2 className="section-heading">
        Không chỉ học. <em>Mà dùng được luôn.</em>
      </h2>
    </div>

    <div className="page-shell grid grid-cols-1 border-b border-border lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
      <div className="border-b border-border lg:border-b-0 lg:border-r">
        <div>
          <div className="px-5 py-10 md:px-8 lg:px-[60px] lg:py-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-[30rem]">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    ✳ prompt library
                  </p>
                  <h3 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[0.95] tracking-[-0.03em] text-ink">
                    150+ prompt
                    <br />
                    sẵn dùng ngay
                  </h3>
                </div>
                <Link to="/prompts" className="btn-primary w-fit no-underline text-white">
                  Xem tất cả →
                </Link>
              </div>

              <p className="max-w-[36rem] font-sans text-[15px] leading-[1.75] text-ink2">
                Không cần ngồi viết từ số 0. Thư viện này gom những prompt để làm landing page, báo cáo, email, research và các việc Marketer cần chạy hàng ngày.
              </p>

              <div className="grid grid-cols-2 border border-border sm:grid-cols-4">
                {[
                  { value: '150+', label: 'prompt đã test' },
                  { value: '12', label: 'nhóm use case' },
                  { value: '<5p', label: 'copy ra dùng' },
                  { value: '0', label: 'cần viết từ đầu' },
                ].map((item, idx) => (
                  <div
                    key={item.label}
                    className={`p-4 ${idx < 2 ? 'border-b sm:border-b-0' : ''} ${idx < 3 ? 'border-r' : ''} border-border`}
                  >
                    <div className="mb-1 font-serif text-[1.8rem] leading-none text-ink">{item.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">{item.label}</div>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-border bg-bg2 p-5 md:p-6"
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="border border-accent bg-[rgba(232,140,46,0.08)] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-accent">
                    {featuredPrompts[0].category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                    Copy → sửa → publish
                  </span>
                </div>
                <div className="mb-3 font-serif text-[1.9rem] leading-[1.02] tracking-[-0.03em] text-ink">
                  {featuredPrompts[0].title}
                </div>
                <div className="border-l-2 border-accent pl-4 font-sans text-[14px] italic leading-[1.7] text-ink2">
                  {featuredPrompts[0].preview}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="border-b border-border px-5 py-6 md:px-8 lg:px-10">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">đi tắt vào phần cần dùng</p>
          <div className="max-w-[24rem] font-sans text-[14px] leading-[1.7] text-ink2">
            Mỗi ngày có thể đọc sâu, lướt nhanh hoặc copy prompt ra dùng ngay. Cùng một giọng, không tách rời khỏi hệ markAI.
          </div>
        </div>

        {tools.map((tool, idx) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
          >
            <Link
              to={tool.href}
              className="group flex items-start gap-4 border-b border-border px-5 py-6 no-underline transition-colors hover:bg-bg2 md:px-8 lg:px-10"
            >
              <span className="min-w-11 font-serif text-[1.35rem] leading-none text-accent">
                0{idx + 1}
              </span>
              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                    {tool.tag}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                    {tool.stat}
                  </span>
                </div>
                <div className="mb-1 font-serif text-[1.65rem] leading-[1.05] tracking-[-0.02em] text-ink">
                  {tool.title}
                </div>
                <div className="font-sans text-[14px] leading-[1.65] text-ink2">
                  {tool.sub}
                </div>
              </div>
              <ArrowRight size={14} className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── BLOG & TIPS ─────────────────────────────────────────────────────────────
const blogPosts = [
  {
    id: 'featured',
    tag: 'CASE STUDY',
    title: 'Marketer không biết code tự build dashboard báo cáo với AI — case study thực tế',
    date: '15/04/2026',
    readTime: '8 phút',
    slug: '#',
    isFeatured: true,
  },
  {
    tag: 'VIBECODE',
    title: '5 lỗi thường gặp khi dùng Cursor cho người mới',
    date: '12/04/2026',
    readTime: '5 phút',
    slug: '#',
    isFeatured: false,
  },
  {
    tag: 'ANALYTICS',
    title: 'GA4 vs UA: những thay đổi Marketer cần nắm trong 2026',
    date: '08/04/2026',
    readTime: '7 phút',
    slug: '#',
    isFeatured: false,
  },
  {
    tag: 'AI TOOLS',
    title: 'Top 10 AI tools dân Marketing nên thử trong Q2/2026',
    date: '01/04/2026',
    readTime: '6 phút',
    slug: '#',
    isFeatured: false,
  },
];

const BlogSection = () => (
  <section>
    <div className="page-shell border-b border-border py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <p className="section-label"><span>✳</span> blog & tips</p>
          <h2 className="section-heading">
            Viết thực tế. <em>Không hype.</em>
          </h2>
        </div>
        <Link to="/blog" className="btn-primary no-underline text-white">
          Đọc tất cả →
        </Link>
      </div>
    </div>

    <div className="page-shell grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] border-t border-border">
      {/* Featured post */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-border"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          transition: 'background 0.12s',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '')}
      >
        <div style={{
          aspectRatio: '16/9',
          background: 'var(--surface-2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--surface-3)',
        }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--surface-3)', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
            case study thumbnail
          </span>
        </div>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '9px',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.08em',
          padding: '3px 8px',
          background: 'var(--accent)',
          color: 'white',
          alignSelf: 'flex-start',
        }}>
          {blogPosts[0].tag}
        </span>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, color: 'var(--ink)', lineHeight: 1.25, letterSpacing: '-0.01em', flex: 1 }}>
          {blogPosts[0].title}
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginTop: 'auto' }}>
          {blogPosts[0].date} · {blogPosts[0].readTime}
        </div>
      </motion.div>

      {/* Blog list col 1 */}
      <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-border">
        {[blogPosts[1], blogPosts[2]].map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className={blogColumnCardClass(idx, 2)}
            style={{
              padding: '24px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'background 0.12s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '')}
          >
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '9px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              padding: '2px 6px',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              alignSelf: 'flex-start',
            }}>
              {post.tag}
            </span>
            <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4 }}>
              {post.title}
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase' as const }}>
              {post.date} · {post.readTime}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blog list col 2 */}
      <div className="flex flex-col">
        {[blogPosts[3]].map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className={blogColumnCardClass(idx, 1)}
            style={{
              padding: '24px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'background 0.12s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '')}
          >
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '9px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              padding: '2px 6px',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              alignSelf: 'flex-start',
            }}>
              {post.tag}
            </span>
            <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4 }}>
              {post.title}
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase' as const }}>
              {post.date} · {post.readTime}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
const CTASection = () => (
  <section className="page-shell border-b border-border py-24 flex flex-col items-center text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading mb-6 max-w-2xl" style={{ textAlign: 'center' }}>
        Không cần đăng ký.<br />
        <em>Không cần email.</em><br />
        Không giới hạn.
      </h2>
      <p className="font-sans text-[15px] text-ink2 mb-8 max-w-md mx-auto leading-[1.65]">
        Chọn lộ trình phù hợp và bắt đầu ngay. Tất cả đều miễn phí. Mãi mãi. Vibecode, Analytics, Image, Automation — chọn thứ bạn cần.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <Link to="/vibecode" className="btn-primary no-underline text-white !px-8 !py-3 !text-[13px]">
          Vibecode Web — Bắt đầu ngay →
        </Link>
        <Link to="/prompts" className="btn-ghost no-underline !px-8 !py-3 !text-[13px]">
          Xem 150+ Prompt
        </Link>
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase' as const, letterSpacing: '0.06em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
        <span>✓ 100% miễn phí</span>
        <span style={{ width: 3, height: 3, background: 'var(--muted)', borderRadius: '50%', display: 'inline-block' }} />
        <span>✓ Không cần biết code</span>
        <span style={{ width: 3, height: 3, background: 'var(--muted)', borderRadius: '50%', display: 'inline-block' }} />
        <span>✓ 5 lộ trình học</span>
        <span style={{ width: 3, height: 3, background: 'var(--muted)', borderRadius: '50%', display: 'inline-block' }} />
        <span>✓ Cập nhật liên tục</span>
      </div>
    </motion.div>
  </section>
);

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LearningPaths />
      <ToolsResources />
      <BlogSection />
      <CTASection />
    </>
  );
}
