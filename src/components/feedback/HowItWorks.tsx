export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Mình đọc trực tiếp',
      desc: 'Không có hệ thống ticket, không có AI tóm tắt. Mình đọc từng feedback theo thứ tự nhận được, thường trong vòng 1-3 ngày.'
    },
    {
      num: '02',
      title: 'Cập nhật roadmap',
      desc: 'Những request được nhắc nhiều nhất sẽ được ưu tiên. Roadmap trên trang "Về dự án" được cập nhật mỗi tháng dựa trên feedback thực tế.'
    },
    {
      num: '03',
      title: 'Thông báo khi có',
      desc: 'Nếu bạn để lại email, mình sẽ thông báo khi module bạn request được publish. Không có newsletter, không spam, chỉ thông báo đúng việc.'
    }
  ];

  return (
    <div className="how-section">
      <div className="how-inner">
        <p className="section-label"><span>✳</span> quy trình xử lý góp ý</p>
        <h2 className="section-h2">
          Góp ý của bạn đi <em>đến đâu.</em>
        </h2>
        <div className="how-diagram" aria-label="Sơ đồ xử lý góp ý">
          <div className="how-diagram-grid">
            {steps.map((step, index) => (
              <article key={step.num} className="how-diagram-item">
                <div className="how-diagram-item-top">
                  <div className="how-num">{step.num}</div>
                  <div className="how-line-label">bước xử lý</div>
                </div>
                <div className="how-title">{step.title}</div>
                <div className="how-desc">{step.desc}</div>
                {index < steps.length - 1 ? (
                  <div className="how-card-arrow" aria-hidden="true">→</div>
                ) : null}
              </article>
            ))}
          </div>
          <div className="how-diagram-outcome">
            <p>
              <strong>Kết quả:</strong> bạn không gửi góp ý vào một form "để đó". Nếu đủ nhiều người cần cùng một thứ, nó đi vào roadmap và được thông báo khi publish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
