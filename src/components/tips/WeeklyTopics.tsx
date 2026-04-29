export default function WeeklyTopics() {
  const topics = [
    {
      badge: 'VIBECODE',
      count: 24,
      title: 'Vibecode: từ mở Cursor đến deploy web',
      desc: 'Tips thực chiến cho người mới bắt đầu vibecode — từ setup máy đến push code lên GitHub lần đầu.',
      meta: 'Cursor · Claude Code · v0.dev · Vercel',
    },
    {
      badge: 'WORKFLOW',
      count: 12,
      title: 'Workflow: làm ít hơn, ra nhiều hơn',
      desc: 'Cách tổ chức Cursor Rules, CLAUDE.md và MCP để AI hiểu đúng ý bạn — không cần nhắc lại mỗi lần.',
      meta: 'Cursor Rules · CLAUDE.md · MCP · Workflow',
    },
    {
      badge: 'DEPLOY',
      count: 8,
      title: 'Deploy: web lên live trong 10 phút',
      desc: 'Từ push GitHub đến domain custom — deploy Vercel, gắn analytics, cấu hình Search Console.',
      meta: 'Vercel · GitHub · PostHog · Google Search Console',
    },
    {
      badge: 'AI TOOLS',
      count: 10,
      title: 'AI Tools: chọn đúng tool cho đúng việc',
      desc: 'So sánh thực tế: khi nào dùng v0.dev, khi nào dùng Bolt, khi nào dùng Claude Code trực tiếp.',
      meta: 'v0.dev · Bolt · Claude Code · Cursor · Shadcn',
    },
  ];

  return (
    <section className="weekly-section">
      <div className="weekly-inner">
        <p className="section-label"><span>✳</span> 03 · theo chủ đề</p>
        <h2 className="section-heading">Đọc theo <em>chủ đề bạn cần.</em></h2>
        <div className="weekly-grid">
          {topics.map((topic, idx) => (
            <div key={idx} className="weekly-card">
              <div className="weekly-card-header">
                <span className="weekly-badge">{topic.badge}</span>
                <span className="font-mono text-[10px] text-muted">{topic.count} tips</span>
              </div>
              <div className="weekly-title">{topic.title}</div>
              <div className="weekly-desc">{topic.desc}</div>
              <div className="weekly-meta">{topic.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
