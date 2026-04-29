import { Link } from 'react-router-dom';

export default function TipsHero() {
  return (
    <section className="tips-hero">
      <div className="tips-hero-inner">
        <div>
          <p className="hero-eyebrow">✳ Tips & Mẹo · thực chiến · cập nhật hàng tuần</p>
          <h1 className="hero-h1">Tips nhỏ,<br /><em>impact lớn.</em></h1>
          <p className="hero-desc">
            Mỗi tip là 1 mẹo thực dụng — đọc xong làm được ngay. Không lý thuyết, không vòng vo. Vibecode · Workflow · Deploy · AI Tools.
          </p>
          <div className="hero-cta">
            <Link to="#tips-grid" className="btn-primary">Đọc tips mới nhất →</Link>
            <Link to="#submit-tip" className="btn-ghost">Submit tip của bạn</Link>
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
    </section>
  );
}
