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
