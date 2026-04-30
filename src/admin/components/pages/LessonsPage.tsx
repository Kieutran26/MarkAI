'use client'

import { useAdminUi } from '@/app/components/AdminUiProvider'
import Badge from '@/app/components/Badge'
import { lessonsData } from '@/app/data/content'

export default function LessonsPage() {
  const { openAdminModal } = useAdminUi()

  return (
    <div className="page" id="page-lessons">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Bai hoc Vibecode</strong> · Lo trinh 7 buoc
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => openAdminModal('new-lesson')}>
            + Them bai moi
          </button>
        </div>
      </div>

      <div className="step-editor-list">
        {lessonsData.map((lesson) => (
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
                {lesson.specialBadge && (
                  <Badge variant="blue" style={{ background: lesson.specialBadgeColor }}>
                    {lesson.specialBadge}
                  </Badge>
                )}
                <Badge variant="green">{lesson.status}</Badge>
                <span className="td-muted">{lesson.tags}</span>
              </div>
            </div>
            <div className="step-editor-actions">
              <button className="step-action-btn edit" onClick={() => openAdminModal('edit-step')}>Sua</button>
              <button className="step-action-btn">Sap xep</button>
              <button className="step-action-btn">An</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
