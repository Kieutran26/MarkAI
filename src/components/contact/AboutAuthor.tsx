export default function AboutAuthor() {
  return (
    <div className="about-section">
      <div className="about-inner">
        <div>
          <p className="about-label"><span>✳</span> về tác giả</p>
          <h2 className="about-h2">
            Người bạn đang<br /><em>nhắn tin cho.</em>
          </h2>
          <p className="about-p">
            markAI.vn được build và maintain bởi một người — không có team, không có công ty. Tất cả nội dung, code, design và vận hành đều do một người thực hiện.
          </p>
          <p className="about-p">
            Lý do dự án tồn tại: <strong>tôi là dân Marketing, tôi muốn học AI, và tôi không tìm được nơi phù hợp.</strong> Thay vì chờ đợi, tôi build.
          </p>
          <p className="about-p">
            Mỗi tin nhắn bạn gửi đến tôi đọc thật. Không có AI tóm tắt, không có intern filter. Đây là lý do phản hồi hơi chậm — nhưng luôn thật.
          </p>
        </div>
        <div>
          <div className="about-card">
            <div className="about-card-header">✳ Tác giả markAI.vn</div>
            <div className="about-card-body">
              <div className="about-card-name">markAI Builder</div>
              <div className="about-card-role">BUILDER · MARKETER · VIBE-CODER</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 300, color: '#888', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                Dân Marketing chuyển sang vibecode. Build markAI.vn ban đêm sau giờ làm việc. Không có background kỹ thuật — tất cả học bằng cách làm thật.
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#555', display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                <span>✳ Email: hello@markai.vn</span>
                <span>✳ Phản hồi: 1-3 ngày</span>
                <span>✳ Timezone: GMT+7 (Hồ Chí Minh)</span>
              </div>
              <div className="about-stat-row">
                <div className="about-stat">
                  <div className="about-stat-num">100%</div>
                  <div className="about-stat-label">Tin nhắn được đọc</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-num">1-3</div>
                  <div className="about-stat-label">Ngày phản hồi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
