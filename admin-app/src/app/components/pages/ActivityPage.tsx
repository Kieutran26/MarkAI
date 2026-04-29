'use client'

import { activityData } from '@/app/data/content'

export default function ActivityPage() {
  const fullActivity = [
    { dot: 'accent', text: 'Deploy production lên <strong>Vercel</strong> — build #42 thành công', time: 'Hôm nay 14:32' },
    { dot: 'green', text: 'Publish bài blog <strong>"Vibecode từ A–Z cho người chưa biết code"</strong>', time: 'Hôm nay 09:15' },
    { dot: '', text: 'Thêm 12 prompts mới vào thư viện (status: draft, chờ duyệt)', time: 'Hôm qua 16:20' },
    { dot: 'yellow', text: 'Cập nhật nội dung <strong>Bài 05 — Prompt</strong>: bổ sung ví dụ thực tế', time: 'Hôm qua 11:05' },
    { dot: 'green', text: 'Thêm <strong>Tip #12</strong> — "Dùng Cursor Tab để autocomplete nhanh hơn"', time: '2 ngày trước' },
    { dot: 'accent', text: 'Cập nhật Ticker — thêm 2 dòng mới về Analytics & Image', time: '4 ngày trước' },
    { dot: '', text: 'Tạo draft blog <strong>"Cursor vs VS Code — cái nào dành cho Marketer?"</strong>', time: '5 ngày trước' },
    { dot: 'green', text: 'Hoàn thành & publish <strong>Bài 07 — Deploy + PostHog + Google Search Console</strong>', time: '1 tuần trước' },
    { dot: 'green', text: 'Hoàn thành & publish <strong>Bài 06 — Skills & Workflow</strong>', time: '1 tuần trước' },
    { dot: 'accent', text: 'Deploy đầu tiên markai.vn lên Vercel thành công', time: '2 tuần trước' },
  ]

  return (
    <div className="page" id="page-activity">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Lịch sử hoạt động</strong>
          </span>
        </div>
      </div>
      <div className="activity-feed">
        {fullActivity.map((activity, i) => (
          <div key={i} className="activity-item">
            <div className={`activity-dot ${activity.dot}`} />
            <div 
              className="activity-text" 
              dangerouslySetInnerHTML={{ __html: activity.text }} 
            />
            <div className="activity-time">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
