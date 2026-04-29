import { Link } from 'react-router-dom';

export default function TeamSection() {
  return (
    <div className="team-section">
      <div className="team-inner">
        <p className="section-label"><span>✳</span> 04 · tác giả</p>
        <h2 className="section-h2">
          Người build <em>dự án này.</em>
        </h2>
        <div className="team-grid">
          <div className="team-photo">
            <div className="team-avatar"><span className="team-avatar-text">M</span></div>
            <div className="team-name">markAI Team</div>
            <div className="team-role">Builder · markAI.vn</div>
            <div className="team-social">
              <Link to="/contact">✳ Liên hệ tác giả →</Link>
              <Link to="/feedback">✳ Góp ý module →</Link>
              <Link to="/report">✳ Báo lỗi →</Link>
            </div>
          </div>
          <div className="team-bio">
            <p className="team-bio-p">
              markAI.vn được build và maintain bởi một người — không có team, không có công ty đứng sau. Tất cả nội dung, code và design đều do một người thực hiện.
            </p>
            <p className="team-bio-p">
              Dự án này sinh ra vì <strong>tôi là dân Marketing và cũng muốn học AI</strong> — nhưng không tìm được nơi phù hợp. Thay vì chờ đợi, tôi quyết định tự build.
            </p>
            <p className="team-bio-p">
              Nếu bạn thấy nội dung này hữu ích, cách tốt nhất để ủng hộ là <strong>chia sẻ với đồng nghiệp</strong> và gửi góp ý để mình làm tốt hơn.
            </p>
            <div className="insight" style={{ marginTop: '1.2rem' }}>
              <strong>✳ Tất cả góp ý đều được đọc.</strong> Mình đọc từng email, từng feedback. Không có bot, không có template trả lời.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
