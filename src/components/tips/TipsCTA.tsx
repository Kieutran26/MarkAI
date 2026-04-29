import { Link } from 'react-router-dom';

export default function TipsCTA() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <p className="section-label" style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem' }}>
          <span style={{ color: 'var(--accent)' }}>✳</span> học thực chiến
        </p>
        <h2 className="cta-h2">Đọc tips xong, thử <em>vibecode luôn đi.</em></h2>
        <p className="cta-desc">
          Lộ trình 10 bài từ zero — từ cài Cursor đến deploy web hoàn chỉnh. Hoàn toàn miễn phí.
        </p>
        <div className="cta-buttons">
          <Link to="/vibecode" className="btn-primary">Bắt đầu Vibecode →</Link>
          <Link to="/prompts" className="btn-ghost">Xem Prompt Library</Link>
        </div>
        <p className="cta-note">✳ hoàn toàn miễn phí · không cần email · không cần đăng ký</p>
      </div>
    </section>
  );
}
