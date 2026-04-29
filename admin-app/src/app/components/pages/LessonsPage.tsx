'use client'

import Badge from '@/app/components/Badge'
import { lessonsData } from '@/app/data/content'

interface LessonsPageProps {
  onOpenModal: (modalId: string) => void
}

export default function LessonsPage({ onOpenModal }: LessonsPageProps) {
  return (
    <div className="page" id="page-lessons">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Bài học Vibecode</strong> · Lộ trình 7 bước
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => onOpenModal('new-lesson')}>
            + Thêm bài mới
          </button>
        </div>
      </div>

      <div className="step-editor-list">
        {lessonsData.map((lesson) => (
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
              <button className="step-action-btn edit" onClick={() => onOpenModal('edit-step')}>Sửa</button>
              <button className="step-action-btn">Sắp xếp</button>
              <button className="step-action-btn">Ẩn</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
