export default function TipsBeforeReport() {
  const tips = [
    {
      num: '01',
      title: 'Hard refresh trang',
      desc: 'Nhiều lỗi hiển thị được fix bằng hard refresh. Mac: ',
      code: 'Cmd + Shift + R',
      code2: '. Windows: ',
      code3: 'Ctrl + Shift + R',
      code4: '.'
    },
    {
      num: '02',
      title: 'Xóa cache trình duyệt',
      desc: 'Nếu trang load sai nội dung hoặc CSS bị vỡ, thử xóa cache. Settings → Privacy → Clear browsing data.',
      code: '',
      code2: '',
      code3: '',
      code4: ''
    },
    {
      num: '03',
      title: 'Thử trình duyệt khác',
      desc: 'Một số lỗi chỉ xảy ra trên trình duyệt cụ thể. Thử Chrome nếu đang dùng Safari, hoặc ngược lại.',
      code: '',
      code2: '',
      code3: '',
      code4: ''
    },
    {
      num: '04',
      title: 'Tắt extension',
      desc: 'Một số extension (ad blocker, dark mode) có thể ảnh hưởng đến cách trang hiển thị. Thử tắt tạm và reload.',
      code: '',
      code2: '',
      code3: '',
      code4: ''
    }
  ];

  return (
    <div className="tips-section">
      <div className="tips-inner">
        <p className="section-label"><span>✳</span> trước khi báo lỗi — thử những thứ này</p>
        <h2 className="section-h2">
          Tự <em>fix nhanh</em> một số lỗi phổ biến.
        </h2>
        <div className="tips-grid">
          {tips.map((tip) => (
            <div key={tip.num} className="tips-item">
              <div className="tips-item-num">{tip.num}</div>
              <div className="tips-item-title">{tip.title}</div>
              <div className="tips-item-desc">
                {tip.desc}
                {tip.code && <span className="tips-item-code">{tip.code}</span>}
                {tip.code2 && tip.code2}
                {tip.code3 && <span className="tips-item-code">{tip.code3}</span>}
                {tip.code4 && tip.code4}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
