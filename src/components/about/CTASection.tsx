import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <div className="cta-section">
      <div className="cta-inner">
        <p className="section-label flex justify-center gap-[.4rem]">
          <span style={{ color: 'var(--accent)' }}>✳</span> bắt đầu ngay
        </p>
        <h2 className="cta-h2">
          Đọc xong rồi,<br /><em>học thôi.</em>
        </h2>
        <p className="cta-desc">
          Lộ trình Vibecode Web 10 bài — từ zero đến có web deploy. Không cần biết code, không cần đăng ký, không cần trả tiền.
        </p>
        <div className="cta-btns">
          <Link to="/vibecode" className="btn-primary">Bắt đầu Vibecode →</Link>
          <Link to="/prompts" className="btn-ghost">Xem Prompt Library</Link>
        </div>
        <p className="cta-note">✳ hoàn toàn miễn phí · mãi mãi</p>
      </div>
    </div>
  );
}
