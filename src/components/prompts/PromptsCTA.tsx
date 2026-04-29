export default function PromptsCTA() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <p className="section-label" style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem' }}>
          <span style={{ color: 'var(--accent)' }}>✳</span> học thực chiến
        </p>
        <h2 className="cta-h2">Có prompt rồi, giờ <em>vibecode thôi.</em></h2>
        <p className="cta-desc">
          Lộ trình 10 bài từ zero — từ cài Cursor đến deploy web hoàn chỉnh. Prompt trong library đều đã được test trong lộ trình này.
        </p>
        <div className="cta-buttons">
          <a href="#" className="btn-primary">Bắt đầu Vibecode →</a>
          <a href="#" className="btn-ghost">Đọc Tips & Mẹo</a>
        </div>
        <p className="cta-note">✳ hoàn toàn miễn phí · không cần email · không cần đăng ký</p>
      </div>
    </section>
  );
}
