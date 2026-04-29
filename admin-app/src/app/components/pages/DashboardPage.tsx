'use client'

import Badge from '@/app/components/Badge'
import { lessonsData, blogData, activityData } from '@/app/data/content'

interface DashboardPageProps {
  onNavigate: (pageId: string) => void
  onOpenModal: (modalId: string) => void
}

export default function DashboardPage({ onNavigate, onOpenModal }: DashboardPageProps) {
  return (
    <div className="page active" id="page-overview">
      {/* Stats Grid */}
      <div className="overview-grid">
        <div className="stat-card">
          <div className="stat-num">7</div>
          <div className="stat-label">Bài học Vibecode</div>
          <div className="stat-delta">✓ 7/7 published</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">150</div>
          <div className="stat-label">Prompts thư viện</div>
          <div className="stat-delta" style={{ color: 'var(--muted)' }}>+ 12 draft chờ duyệt</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">6</div>
          <div className="stat-label">Blog bài viết</div>
          <div className="stat-delta">✓ Tất cả live</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">8</div>
          <div className="stat-label">Module trong roadmap</div>
          <div className="stat-delta" style={{ color: '#d97706' }}>1 available · 7 sắp ra</div>
        </div>
      </div>

      {/* Alert Bar */}
      <div className="alert-bar">
        <span className="alert-bar-text">
          ✳ 3 tính năng sắp ra: Analytics · Generate Image · Motion Video — chưa có landing page.{' '}
          <span 
            style={{ textDecoration: 'underline', cursor: 'pointer' }} 
            onClick={() => onNavigate('modules')}
          >
            Quản lý →
          </span>
        </span>
      </div>

      <div className="two-col">
        <div className="two-col-main">
          {/* Vibecode Lessons */}
          <div className="section-block">
            <div className="section-header">
              <span className="section-header-title">
                <strong>Lộ trình Vibecode</strong> · 7 bài học
              </span>
              <div className="section-header-spacer" />
              <button className="section-header-action" onClick={() => onNavigate('lessons')}>
                Quản lý đầy đủ →
              </button>
            </div>
            <div className="step-editor-list">
              {lessonsData.slice(0, 3).map((lesson) => (
                <div key={lesson.num} className="step-editor-row">
                  <div className="step-editor-num">
                    <span className="step-num-label">BÀI</span>
                    <span className="step-num-big" style={{ color: lesson.isAccent ? 'var(--accent)' : 'var(--ink)' }}>
                      {lesson.num}
                    </span>
                  </div>
                  <div className="step-editor-body">
                    <div className="step-editor-title">{lesson.title}</div>
                    <div className="step-editor-meta">
                      <Badge variant={lesson.badgeColor as 'accent' | 'dark'}>{lesson.badge}</Badge>
                      <Badge variant="outline">{lesson.duration}</Badge>
                      <Badge variant="green">{lesson.status}</Badge>
                      <span className="td-muted">{lesson.tags}</span>
                    </div>
                  </div>
                  <div className="step-editor-actions">
                    <button className="step-action-btn edit" onClick={() => onOpenModal('edit-step')}>Sửa</button>
                    <button className="step-action-btn">Ẩn</button>
                  </div>
                </div>
              ))}
              
              {/* Collapsed rows */}
              <div className="step-editor-row" style={{ opacity: 0.7 }}>
                <div className="step-editor-num">
                  <span className="step-num-label">BÀI</span>
                  <span className="step-num-big">04–07</span>
                </div>
                <div className="step-editor-body">
                  <div className="step-editor-title" style={{ fontSize: '.85rem', color: 'var(--muted)' }}>
                    Bài 04 · 05 · 06 · 07 đã publish đầy đủ
                  </div>
                  <div className="step-editor-meta">
                    <Badge variant="green">All Published</Badge>
                  </div>
                </div>
                <div className="step-editor-actions">
                  <button className="step-action-btn edit" onClick={() => onNavigate('lessons')}>Xem tất cả</button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Preview */}
          <div className="section-block">
            <div className="section-header">
              <span className="section-header-title">
                <strong>Blog</strong> · 6 bài mới nhất
              </span>
              <div className="section-header-spacer" />
              <button className="section-header-action" onClick={() => onNavigate('blog')}>
                Quản lý →
              </button>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Tiêu đề</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Ngày</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {blogData.slice(0, 3).map((post, i) => (
                    <tr key={i}>
                      <td className="td-serif">{post.title}</td>
                      <td><Badge variant="dark">{post.category}</Badge></td>
                      <td>
                        <Badge variant={post.status === 'Live' ? 'green' : 'yellow'}>{post.status}</Badge>
                      </td>
                      <td className="td-muted">{post.date}</td>
                      <td>
                        <div className="row-actions">
                          <button className="row-btn primary" onClick={() => onOpenModal('edit-blog')}>Sửa</button>
                          <button className="row-btn danger">Xóa</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="two-col-side">
          <div className="section-header" style={{ borderBottom: '1px solid var(--border)' }}>
            <span className="section-header-title">
              <strong>Hoạt động gần đây</strong>
            </span>
          </div>
          <div className="activity-feed">
            {activityData.map((activity, i) => (
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
      </div>
    </div>
  )
}
