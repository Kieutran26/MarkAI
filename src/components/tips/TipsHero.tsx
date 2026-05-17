import { Link } from 'react-router-dom';

type TipsHeroProps = {
  onSubmitButtonClick: () => void;
};

export default function TipsHero({ onSubmitButtonClick }: TipsHeroProps) {
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
            <button
              onClick={(e) => {
                e.preventDefault();
                onSubmitButtonClick();
              }}
              className="btn-ghost"
            >
              Submit tip của bạn
            </button>
          </div>
          <p className="hero-note">✳ miễn phí · cập nhật hàng tuần</p>
        </div>
        <div className="tips-stats-grid">
          <div className="tips-stat">
            <div className="tips-stat-num">60+</div>
            <div className="tips-stat-label">Tips đã publish</div>
          </div>
          <div className="tips-stat">
            <div className="tips-stat-num">5</div>
            <div className="tips-stat-label">Danh mục chủ đề</div>
          </div>
          <div className="tips-stat">
            <div className="tips-stat-num">Mỗi tuần</div>
            <div className="tips-stat-label">Tips mới thêm vào</div>
          </div>
          <div className="tips-stat">
            <div className="tips-stat-num">2 phút</div>
            <div className="tips-stat-label">Đọc xong 1 tip</div>
          </div>
        </div>
      </div>
    </section>
  );
}
