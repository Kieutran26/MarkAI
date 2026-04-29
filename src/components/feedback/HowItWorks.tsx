export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Mình đọc trực tiếp',
      desc: 'Không có hệ thống ticket, không có AI tóm tắt. Mình đọc từng feedback theo thứ tự nhận được — thường trong vòng 1-3 ngày.'
    },
    {
      num: '02',
      title: 'Cập nhật roadmap',
      desc: 'Những request được nhắc nhiều nhất sẽ được ưu tiên. Roadmap trên trang "Về dự án" được cập nhật mỗi tháng dựa trên feedback thực tế.'
    },
    {
      num: '03',
      title: 'Thông báo khi có',
      desc: 'Nếu bạn để lại email, mình sẽ thông báo khi module bạn request được publish. Không có newsletter, không spam — chỉ thông báo đúng việc.'
    }
  ];

  return (
    <div className="how-section">
      <div className="how-inner">
        <p className="section-label"><span>✳</span> quy trình xử lý góp ý</p>
        <h2 className="section-h2">
          Góp ý của bạn đi <em>đến đâu.</em>
        </h2>
        <div className="how-grid">
          {steps.map((step) => (
            <div key={step.num} className="how-item">
              <div className="how-num">{step.num}</div>
              <div className="how-title">{step.title}</div>
              <div className="how-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
