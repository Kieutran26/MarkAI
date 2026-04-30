import { useState, useEffect } from 'react';

interface Tip {
  id: number;
  title: string;
  content?: string;
  category: string;
  date: string;
  isHot?: boolean;
  isNew?: boolean;
  insight?: string;
}

interface TopicCard {
  category: string;
  count: number;
  title: string;
  desc: string;
  tags: string[];
}

const tipsData: Tip[] = [
  {
    id: 60,
    title: 'CLAUDE.md — cách để AI nhớ toàn bộ context dự án của bạn',
    content: 'Dùng CLAUDE.md để "nhớ" toàn bộ context dự án — không cần giải thích lại mỗi lần mở chat mới.',
    category: 'VIBECODE',
    date: '27·04·2026',
    isHot: true,
    insight: 'Đặt file này ở root project, Claude sẽ đọc tự động mỗi session.'
  },
  {
    id: 59,
    title: 'Đừng xóa hết khi AI code sai — hỏi lý do trước đã',
    content: 'Khi AI code sai, đừng xóa hết và bắt đầu lại. Thay vào đó: screenshot lỗi → paste vào chat → hỏi "tại sao lỗi này xảy ra?"',
    category: 'WORKFLOW',
    date: '25·04·2026'
  },
  {
    id: 58,
    title: 'Vercel deploy Next.js: không cần config, kéo repo vào là chạy',
    content: 'Vercel tự detect framework — không cần config gì thêm với Next.js. Chỉ cần kéo repo vào là xong.',
    category: 'DEPLOY',
    date: '23·04·2026',
    isNew: true
  },
  {
    id: 57,
    title: 'v0.dev vs Bolt: dùng cái nào khi nào?',
    content: 'v0.dev xuất code Tailwind sạch hơn Bolt — dùng v0 để làm UI, Bolt để prototype nhanh toàn app.',
    category: 'AI TOOLS',
    date: '21·04·2026'
  },
  {
    id: 56,
    title: 'Prompt "Act as a senior dev" — tại sao nó cho output tốt hơn?',
    content: 'Bắt đầu prompt bằng "Act as a senior frontend dev reviewing my code" — output sẽ cụ thể và có critique thật, không chỉ khen.',
    category: 'PROMPT',
    date: '18·04·2026'
  },
  {
    id: 55,
    title: 'Cursor Rules bằng tiếng Việt — AI vẫn hiểu và follow đúng',
    content: 'Cursor Rules viết bằng tiếng Việt được — AI vẫn hiểu và follow đúng. Không cần dịch sang tiếng Anh.',
    category: 'VIBECODE',
    date: '16·04·2026'
  },
  {
    id: 54,
    title: '"module not found" — nguyên nhân số 1 và cách fix trong 10 giây',
    content: 'Khi bị lỗi "module not found" — 90% do quên chạy npm install sau khi thêm package.',
    category: 'VIBECODE',
    date: '14·04·2026'
  },
  {
    id: 53,
    title: 'Cách đặt câu hỏi cho AI để không bị câu trả lời chung chung',
    content: 'Cách đặt câu hỏi cho AI để không bị câu trả lời chung chung.',
    category: 'PROMPT',
    date: '11·04·2026'
  }
];

const featuredTips: Tip[] = [
  { id: 60, title: 'CLAUDE.md là "brain" của dự án — đặt đúng chỗ, AI sẽ nhớ hết context.', category: 'Vibecode', date: '27·04·2026' },
  { id: 54, title: 'Khi bị lỗi "module not found" — 90% do quên chạy npm install sau khi thêm package.', category: 'Vibecode', date: '14·04·2026' },
  { id: 48, title: 'PostHog free tier là đủ để track 1 landing page — không cần trả phí gì cả.', category: 'Deploy', date: '02·04·2026' },
  { id: 42, title: 'Đặt tên biến bằng tiếng Việt trong code cũng không sao — miễn là bạn đọc được và AI hiểu.', category: 'Workflow', date: '21·03·2026' },
  { id: 38, title: 'Dùng Cursor "Composer" mode thay vì "Chat" khi muốn sửa nhiều file cùng lúc.', category: 'Vibecode', date: '14·03·2026' }
];

const topics: TopicCard[] = [
  {
    category: 'VIBECODE',
    count: 24,
    title: 'Vibecode: từ mở Cursor đến deploy web',
    desc: 'Tips thực chiến cho người mới bắt đầu vibecode — từ setup máy đến push code lên GitHub lần đầu.',
    tags: ['Cursor', 'Claude Code', 'v0.dev', 'Vercel']
  },
  {
    category: 'WORKFLOW',
    count: 12,
    title: 'Workflow: làm ít hơn, ra nhiều hơn',
    desc: 'Cách tổ chức Cursor Rules, CLAUDE.md và MCP để AI hiểu đúng ý bạn — không cần nhắc lại mỗi lần.',
    tags: ['Cursor Rules', 'CLAUDE.md', 'MCP', 'Workflow']
  },
  {
    category: 'DEPLOY',
    count: 8,
    title: 'Deploy: web lên live trong 10 phút',
    desc: 'Từ push GitHub đến domain custom — deploy Vercel, gắn analytics, cấu hình Search Console.',
    tags: ['Vercel', 'GitHub', 'PostHog', 'Google Search Console']
  },
  {
    category: 'AI TOOLS',
    count: 10,
    title: 'AI Tools: chọn đúng tool cho đúng việc',
    desc: 'So sánh thực tế: khi nào dùng v0.dev, khi nào dùng Bolt, khi nào dùng Claude Code trực tiếp.',
    tags: ['v0.dev', 'Bolt', 'Claude Code', 'Cursor', 'Shadcn']
  }
];

const filters = [
  { label: 'Tất cả', count: 60 },
  { label: 'Vibecode', count: 24 },
  { label: 'Workflow', count: 12 },
  { label: 'Deploy', count: 8 },
  { label: 'AI Tools', count: 10 },
  { label: 'Prompt', count: 6 }
];

export default function Tips() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const handleSubmit = () => {
    alert('Cảm ơn! Tip của bạn đã được gửi.');
  };

  return (
    <div>
      {/* HERO */}
      <div className="tips-hero">
        <div className="tips-hero-inner">
          <div className="hero-left">
            <p className="hero-eyebrow">✳ Tips & Mẹo · thực chiến · cập nhật hàng tuần</p>
            <h1 className="hero-h1">Tips nhỏ,<br /><em>impact lớn.</em></h1>
            <p className="hero-desc">Mỗi tip là 1 mẹo thực dụng — đọc xong làm được ngay. Không lý thuyết, không vòng vo. Vibecode · Workflow · Deploy · AI Tools.</p>
            <div className="hero-cta">
              <a href="#tips-grid" className="btn-primary">Đọc tips mới nhất →</a>
              <a href="#submit-tip" className="btn-ghost">Submit tip của bạn</a>
            </div>
            <p className="hero-note">✳ miễn phí · không cần email · không tracking</p>
          </div>
          <div className="hero-right">
            <div className="hero-stat-row">
              <div className="hero-stat">
                <div className="hero-stat-num">60+</div>
                <div className="hero-stat-label">Tips đã publish</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">5</div>
                <div className="hero-stat-label">Danh mục chủ đề</div>
              </div>
            </div>
            <div className="hero-stat-row">
              <div className="hero-stat" style={{ borderBottom: 'none' }}>
                <div className="hero-stat-num">Mỗi tuần</div>
                <div className="hero-stat-label">Tips mới thêm vào</div>
              </div>
              <div className="hero-stat" style={{ borderBottom: 'none' }}>
                <div className="hero-stat-num">2 phút</div>
                <div className="hero-stat-label">Đọc xong 1 tip</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="filter-bar-inner">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeFilter === filter.label ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.label)}
            >
              {filter.label} <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* TIPS GRID */}
      <div className="tips-grid-section" id="tips-grid">
        <div className="tips-grid-inner">
          <div className="tips-grid-header">
            <div>
              <p className="section-label"><span>✳</span> 01 · hot tips tuần này</p>
              <h2 className="section-heading">Tips <em>đang hot.</em></h2>
            </div>
            <span className="tips-grid-header-right">Xem tất cả tips →</span>
          </div>
          <div className="tips-grid">
            {tipsData.map((tip) => (
              <div key={tip.id} className={`tip-card ${tip.isHot ? 'hot-card' : ''}`}>
                <div className="tip-card-top">
                  <span className="tip-num">TIP · {tip.id}</span>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    {tip.isHot && <span className="badge badge-accent">HOT</span>}
                    {tip.isNew && <span className="badge badge-outline">MỚI</span>}
                    <span className="tip-category">{tip.category}</span>
                  </div>
                </div>
                <div className="tip-text">
                  {tip.id === 60 ? (
                    <>Dùng <code style={{ fontFamily: 'var(--mono)', fontSize: '0.9em', background: 'var(--bg3)', padding: '1px 5px' }}>CLAUDE.md</code> để "nhớ" toàn bộ context dự án — không cần giải thích lại mỗi lần mở chat mới.</>
                  ) : (
                    tip.content
                  )}
                </div>
                {tip.insight && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <div className="insight">✳ {tip.insight}</div>
                  </div>
                )}
                <div className="tip-meta">{tip.category} · {tip.date}</div>
                <span className="tip-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED TIPS - DARK SECTION */}
      <div className="featured-section">
        <div className="featured-inner">
          <div>
            <p className="featured-label"><span>✳</span> 02 · tip của tuần</p>
            <h2 className="featured-h2">Tips được chọn lọc —<br /><em>đáng bookmark ngay.</em></h2>
            <p className="featured-desc">Mỗi tuần mình chọn ra 1 tip "must-know" — loại tip mà biết sớm 1 ngày là tiết kiệm cả buổi làm việc.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#" className="btn-accent">Xem tất cả tips →</a>
              <a href="#submit-tip" className="btn-ghost-inv">Submit tip của bạn</a>
            </div>
          </div>
          <div className="featured-right">
            {featuredTips.map((tip, idx) => (
              <div key={tip.id} className={`featured-tip-row ${idx === featuredTips.length - 1 ? 'no-border' : ''}`}>
                <div className="featured-tip-num">TIP · {tip.id}</div>
                <div>
                  <div className="featured-tip-text">
                    {tip.id === 54 ? (
                      <>Khi bị lỗi "module not found" — 90% do quên chạy <code style={{ fontFamily: 'var(--mono)', fontSize: '0.85em', color: 'var(--code-value)' }}>npm install</code> sau khi thêm package.</>
                    ) : (
                      tip.title
                    )}
                  </div>
                  <div className="featured-tip-cat">{tip.category} · {tip.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WEEKLY TOPICS */}
      <div className="weekly-section">
        <div className="weekly-inner">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0' }}>
            <div>
              <p className="section-label"><span>✳</span> 03 · theo chủ đề</p>
              <h2 className="section-heading">Đọc theo <em>chủ đề bạn cần.</em></h2>
            </div>
          </div>
          <div className="weekly-grid">
            {topics.map((topic, idx) => (
              <div key={topic.category} className="weekly-card" style={idx >= 2 ? { borderBottom: 'none' } : {}}>
                <div className="weekly-card-header">
                  <span className="weekly-badge">{topic.category}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)' }}>{topic.count} tips</span>
                </div>
                <div className="weekly-title">{topic.title}</div>
                <div className="weekly-desc">{topic.desc}</div>
                <div className="weekly-meta">{topic.tags.join(' · ')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ALL TIPS LIST */}
      <div className="all-tips-section">
        <div className="all-tips-inner">
          <div className="all-tips-header">
            <div>
              <p className="section-label"><span>✳</span> 04 · tất cả tips</p>
              <h2 className="section-heading">Đọc hết — <em>đừng bỏ sót.</em></h2>
            </div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)' }}>60 tips</span>
          </div>

          {tipsData.map((tip) => (
            <a key={tip.id} href="#" className="tip-row">
              <div className="tip-row-num">
                <span className="tip-row-num-text">TIP</span>
                <span className="tip-row-num-big">{tip.id}</span>
              </div>
              <div className="tip-row-body">
                <div className="tip-row-title">{tip.title}</div>
                <div className="tip-row-meta">{tip.category.toUpperCase()} · {tip.date} · 2 phút đọc</div>
              </div>
              <div className="tip-row-arrow">→</div>
            </a>
          ))}

          {/* Load more */}
          <div style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
            <a href="#" className="btn-ghost">Xem thêm 52 tips →</a>
          </div>
        </div>
      </div>

      {/* SUBMIT TIP */}
      <div className="submit-section" id="submit-tip">
        <div className="submit-inner">
          <div className="submit-left">
            <p className="section-label"><span>✳</span> 05 · cộng đồng</p>
            <h2 className="section-heading">Bạn có tip hay?<br /><em>Share với cộng đồng.</em></h2>
            <p className="section-sub" style={{ marginTop: '1rem' }}>Tips tốt nhất thường đến từ người đang làm thực tế — không phải từ tutorial. Nếu bạn có mẹo gì hữu ích, submit vào đây để mình review và publish.</p>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div className="insight">✳ Tips được chọn sẽ credit tên bạn — dù chỉ là nickname.</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', marginTop: '0.4rem', letterSpacing: '.03em' }}>✳ Không cần đăng ký · không cần tài khoản · không tracking</div>
            </div>
          </div>
          <div className="submit-right">
            <div className="submit-form">
              <div className="submit-form-header">
                <div className="submit-form-title">✳ Submit tip mới</div>
              </div>
              <div className="submit-form-body">
                <div className="form-field">
                  <label className="form-label">Nội dung tip</label>
                  <textarea className="form-textarea" placeholder="Tip của bạn — ngắn gọn, thực dụng, dùng được ngay..." rows={4}></textarea>
                </div>
                <div className="form-field">
                  <label className="form-label">Danh mục</label>
                  <select className="form-select">
                    <option value="">Chọn danh mục...</option>
                    <option>Vibecode</option>
                    <option>Workflow</option>
                    <option>Deploy</option>
                    <option>AI Tools</option>
                    <option>Prompt</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label">Tên / Nickname (tùy chọn)</label>
                  <input type="text" className="form-input" placeholder="Để trống nếu muốn ẩn danh" />
                </div>
                <button className="btn-primary form-submit" onClick={handleSubmit}>Submit tip →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-inner">
          <p className="section-label" style={{ justifyContent: 'center', display: 'flex', gap: '.4rem' }}><span style={{ color: 'var(--accent)' }}>✳</span> học thực chiến</p>
          <h2 className="cta-h2">Đọc tips xong, thử <em>vibecode luôn đi.</em></h2>
          <p className="cta-desc">Lộ trình 10 bài từ zero — từ cài Cursor đến deploy web hoàn chỉnh. Hoàn toàn miễn phí.</p>
          <div className="cta-buttons">
            <a href="/vibecode" className="btn-primary">Bắt đầu Vibecode →</a>
            <a href="/prompts" className="btn-ghost">Xem Prompt Library</a>
          </div>
          <p className="cta-note">✳ hoàn toàn miễn phí · không cần email · không cần đăng ký</p>
        </div>
      </div>
    </div>
  );
}
