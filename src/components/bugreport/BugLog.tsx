export default function BugLog() {
  const bugs = [
    {
      status: 'fixed',
      statusText: 'FIXED',
      desc: (
        <>
          <strong>Trang /vibecode/bai-01</strong> load chậm trên mobile Safari — ảnh GIF quá nặng. Đã compress và lazy load.
        </>
      ),
      date: '27·04·2026'
    },
    {
      status: 'fixed',
      statusText: 'FIXED',
      desc: (
        <>
          <strong>Filter bar Tips & Mẹo</strong> bị sticky overlap với nav trên iOS. Đã fix z-index và safe-area-inset.
        </>
      ),
      date: '24·04·2026'
    },
    {
      status: 'investigating',
      statusText: 'ĐANG XEM',
      desc: (
        <>
          <strong>Popup prompt</strong> đôi khi không đóng được bằng Escape trên Firefox. Đang investigate.
        </>
      ),
      date: '22·04·2026'
    },
    {
      status: 'known',
      statusText: 'ĐÃ BIẾT',
      desc: (
        <>
          <strong>Font DM Mono</strong> render nhẹ hơn trên Windows Chrome so với Mac — do font hinting khác biệt. Đây là known issue của Google Fonts.
        </>
      ),
      date: '15·04·2026'
    }
  ];

  return (
    <div className="buglog-section">
      <div className="buglog-inner">
        <p className="buglog-label"><span>✳</span> bug log · đã và đang xử lý</p>
        <h2 className="buglog-h2">
          Lỗi đang <em>được theo dõi.</em>
        </h2>
        <div className="buglog-list">
          {bugs.map((bug, index) => (
            <div key={index} className="buglog-item">
              <span className={`buglog-status status-${bug.status}`}>{bug.statusText}</span>
              <div className="buglog-desc">{bug.desc}</div>
              <span className="buglog-date">{bug.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
