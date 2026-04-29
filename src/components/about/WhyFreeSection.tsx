export default function WhyFreeSection() {
  const reasons = [
    {
      title: 'Không quảng cáo.',
      desc: 'Không có banner, không có affiliate link, không có sponsor ảnh hưởng đến nội dung.'
    },
    {
      title: 'Không tracking.',
      desc: 'Không Google Analytics, không Facebook Pixel, không retargeting. Bạn học mà không bị theo dõi.'
    },
    {
      title: 'Không paywall.',
      desc: 'Mọi bài học, prompt, tips — tất cả đều public. Không có "premium tier", không có phần khoá.'
    },
    {
      title: 'Mãi mãi.',
      desc: 'Cam kết này không thay đổi. Dự án này chạy bằng thời gian cá nhân — không có investor yêu cầu monetize.'
    }
  ];

  return (
    <div className="why-section">
      <div className="why-inner">
        <div>
          <p className="why-label"><span>✳</span> 02 · tại sao miễn phí</p>
          <h2 className="why-h2">
            Không phải chiến lược.<br /><em>Là quan điểm.</em>
          </h2>
          <p className="why-desc">
            markAI không miễn phí vì cần traffic. Miễn phí vì đây là quan điểm: kiến thức AI không nên là thứ người có tiền mới tiếp cận được.
          </p>
        </div>
        <div className="why-list">
          {reasons.map((item, index) => (
            <div key={index} className="why-item">
              <span className="why-icon">✳</span>
              <div className="why-item-text">
                <strong>{item.title}</strong> {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
