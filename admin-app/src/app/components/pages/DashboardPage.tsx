'use client'

import { useAdminUi } from '@/app/components/AdminUiProvider'
import Badge from '@/app/components/Badge'
import { activityData, blogData, lessonsData } from '@/app/data/content'

export default function DashboardPage() {
  const { navigateTo, openAdminModal } = useAdminUi()

  return (
    <div className="page active" id="page-overview">
      <div className="overview-grid">
        <div className="stat-card">
          <div className="stat-num">7</div>
          <div className="stat-label">Bai hoc Vibecode</div>
          <div className="stat-delta">✓ 7/7 published</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">150</div>
          <div className="stat-label">Prompts thu vien</div>
          <div className="stat-delta" style={{ color: 'var(--muted)' }}>+ 12 draft cho duyet</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">6</div>
          <div className="stat-label">Blog bai viet</div>
          <div className="stat-delta">✓ Tat ca live</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">8</div>
          <div className="stat-label">Module trong roadmap</div>
          <div className="stat-delta" style={{ color: 'var(--accent)' }}>1 available · 7 sap ra</div>
        </div>
      </div>

      <div className="alert-bar">
        <span className="alert-bar-text">
          ✳ 3 tinh nang sap ra: Analytics · Generate Image · Motion Video — chua co landing page.{' '}
          <span
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => navigateTo('/modules')}
          >
            Quan ly →
          </span>
        </span>
      </div>

      <div className="two-col">
        <div className="two-col-main">
          <div className="section-block">
            <div className="section-header">
              <span className="section-header-title">
                <strong>Lo trinh Vibecode</strong> · 7 bai hoc
              </span>
              <div className="section-header-spacer" />
              <button className="section-header-action" onClick={() => navigateTo('/lessons')}>
                Quan ly day du →
              </button>
            </div>
            <div className="step-editor-list">
              {lessonsData.slice(0, 3).map((lesson) => (
                <div key={lesson.num} className="step-editor-row">
                  <div className="step-editor-num">
                    <span className="step-num-label">BAI</span>
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
                    <button className="step-action-btn edit" onClick={() => openAdminModal('edit-step')}>Sua</button>
                    <button className="step-action-btn">An</button>
                  </div>
                </div>
              ))}

              <div className="step-editor-row" style={{ opacity: 0.7 }}>
                <div className="step-editor-num">
                  <span className="step-num-label">BAI</span>
                  <span className="step-num-big">04-07</span>
                </div>
                <div className="step-editor-body">
                  <div className="step-editor-title" style={{ fontSize: '.85rem', color: 'var(--muted)' }}>
                    Bai 04 · 05 · 06 · 07 da publish day du
                  </div>
                  <div className="step-editor-meta">
                    <Badge variant="green">All Published</Badge>
                  </div>
                </div>
                <div className="step-editor-actions">
                  <button className="step-action-btn edit" onClick={() => navigateTo('/lessons')}>Xem tat ca</button>
                </div>
              </div>
            </div>
          </div>

          <div className="section-block">
            <div className="section-header">
              <span className="section-header-title">
                <strong>Blog</strong> · 6 bai moi nhat
              </span>
              <div className="section-header-spacer" />
              <button className="section-header-action" onClick={() => navigateTo('/blog')}>
                Quan ly →
              </button>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Tieu de</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Ngay</th>
                    <th>Thao tac</th>
                  </tr>
                </thead>
                <tbody>
                  {blogData.slice(0, 3).map((post, index) => (
                    <tr key={index}>
                      <td className="td-serif">{post.title}</td>
                      <td><Badge variant="dark">{post.category}</Badge></td>
                      <td>
                        <Badge variant={post.status === 'Live' ? 'green' : 'yellow'}>{post.status}</Badge>
                      </td>
                      <td className="td-muted">{post.date}</td>
                      <td>
                        <div className="row-actions">
                          <button className="row-btn primary" onClick={() => openAdminModal('edit-blog')}>Sua</button>
                          <button className="row-btn danger">Xoa</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="two-col-side">
          <div className="section-header" style={{ borderBottom: '1px solid var(--border)' }}>
            <span className="section-header-title">
              <strong>Hoat dong gan day</strong>
            </span>
          </div>
          <div className="activity-feed">
            {activityData.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-dot ${activity.dot}`} />
                <div className="activity-text" dangerouslySetInnerHTML={{ __html: activity.text }} />
                <div className="activity-time">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
