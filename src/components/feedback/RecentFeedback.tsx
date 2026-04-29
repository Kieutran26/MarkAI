export default function RecentFeedback() {
  const feedbacks = [
    {
      module: 'ANALYTICS',
      text: '"Mình rất mong có module Analytics — đặc biệt là cách đọc GA4 và tạo báo cáo tự động bằng Claude. Đây là thứ mình cần nhất trong công việc hiện tại."',
      rating: '★★★★★'
    },
    {
      module: 'VIBECODE',
      text: '"Bài Vibecode rất hay nhưng mình muốn có thêm bài về custom domain và cách gắn Supabase cho người hoàn toàn mới."',
      rating: '★★★★☆'
    },
    {
      module: 'GEN IMAGE',
      text: '"Cần lắm một bài về Generate Image cho campaign — workflow từ brief đến asset hoàn chỉnh. Mình đang mày mò Midjourney một mình mà không có hướng dẫn tiếng Việt."',
      rating: '★★★★★'
    },
    {
      module: 'PROMPT LIB',
      text: '"Thư viện prompt rất hữu ích! Mình muốn có thêm prompt cho email Marketing và phân tích competitor — 2 thứ mình dùng hàng ngày."',
      rating: '★★★★★'
    }
  ];

  return (
    <div className="recent-section">
      <div className="recent-inner">
        <p className="recent-label"><span>✳</span> góp ý gần đây</p>
        <h2 className="recent-h2">
          Người khác đang<br /><em>muốn học gì.</em>
        </h2>
        <div className="recent-list">
          {feedbacks.map((item, index) => (
            <div key={index} className="recent-item">
              <span className="recent-module">{item.module}</span>
              <div className="recent-text">
                <strong dangerouslySetInnerHTML={{ __html: item.text.replace(/"/g, '&quot;').replace(/<strong>/g, '<strong>').replace(/<\/strong>/g, '</strong>') }} />
              </div>
              <span className="recent-rating">{item.rating}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
