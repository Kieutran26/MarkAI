export default function RoadmapSection() {
  const roadmapItems = [
    {
      status: 'live',
      statusText: 'ĐANG LIVE',
      title: 'Vibecode Web — 10 bài',
      desc: 'Từ zero đến deploy web hoàn chỉnh. Cursor, Claude Code, Next.js, Vercel — không cần biết code trước.',
      tags: ['Cursor', 'Claude Code', 'Next.js', 'Vercel']
    },
    {
      status: 'live',
      statusText: 'ĐANG LIVE',
      title: 'Prompt Library — 150+',
      desc: 'Thư viện prompt cho dân Marketing. Đã test thực tế, có biến thay thế, dùng được ngay với Claude · ChatGPT · Cursor.',
      tags: ['Claude', 'ChatGPT', 'Cursor']
    },
    {
      status: 'soon',
      statusText: 'SẮP RA',
      title: 'Analytics với AI',
      desc: 'Đọc GA4, tạo báo cáo tự động, phân tích data Marketing với AI. Không cần biết SQL hay Python.',
      tags: ['GA4', 'Looker', 'Claude']
    },
    {
      status: 'soon',
      statusText: 'SẮP RA',
      title: 'Generate Image — Visual Campaign',
      desc: 'Tạo visual cho campaign Marketing bằng AI. Midjourney, Flux, Firefly — từ brief đến asset hoàn chỉnh.',
      tags: ['Midjourney', 'Flux', 'Firefly']
    }
  ];

  return (
    <div className="roadmap-section">
      <div className="roadmap-inner">
        <div className="roadmap-header">
          <p className="section-label"><span>✳</span> 03 · lộ trình</p>
          <h2 className="section-h2 font-serif text-[42px] leading-[1.02]">
            Đang build gì,<br /><em>sắp ra gì.</em>
          </h2>
        </div>
        <div className="roadmap-grid">
          {roadmapItems.map((item, index) => (
            <div key={index} className="roadmap-item">
              <span className={`roadmap-item-status ${item.status === 'live' ? 'status-live' : 'status-soon'}`}>
                {item.statusText}
              </span>
              <div className="roadmap-item-title">{item.title}</div>
              <div className="roadmap-item-desc">{item.desc}</div>
              <div className="roadmap-item-tags">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
