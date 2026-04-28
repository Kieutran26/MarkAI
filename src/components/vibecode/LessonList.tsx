import React from 'react';
import { Link } from 'react-router-dom';
import { lessons } from '../../lib/lessons';

export default function LessonList() {
  const getBadgeClass = (type: 'accent' | 'dark' | 'green' | undefined) => {
    switch (type) {
      case 'accent': return 'badge badge-accent';
      case 'dark': return 'badge badge-dark';
      case 'green': return 'badge badge-green';
      default: return 'badge badge-dark';
    }
  };

  return (
    <div className="border-b border-[var(--border)]">
      <div 
        className="max-w-[1200px] mx-auto border-l border-r border-[var(--border)]"
      >
        {lessons.map((lesson, index) => (
          <Link
            key={lesson.id}
            to={`/vibecode/${lesson.slug}`}
            className="path-step"
            aria-label={`Bài ${lesson.id}: ${lesson.title}`}
          >
            {/* Number Column */}
            <div className="path-step-num">
              <span className="step-label">BÀI</span>
              <span className="step-num-big">{lesson.id.toString().padStart(2, '0')}</span>
            </div>
            
            {/* Content Column */}
            <div className="path-step-body">
              <div className="step-badges">
                <span className={getBadgeClass(lesson.badgeType)}>
                  {lesson.badge}
                </span>
                {(lesson as any).badgeExtra && (
                  <span className={getBadgeClass((lesson as any).badgeExtraType)}>
                    {(lesson as any).badgeExtra}
                  </span>
                )}
                <span className="badge badge-outline">{lesson.duration}</span>
                <span className="step-sub-count">{lesson.subLessonCount} bài nhỏ</span>
              </div>
              <div className="step-title font-[family-name:var(--serif)] text-[1.15rem] leading-[1.3]">
                {lesson.title}
              </div>
              <div className="step-desc font-[family-name:var(--sans)] text-[13px] font-light text-[var(--ink2)]">
                {lesson.desc}
              </div>
              <div className="step-tags">
                {lesson.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="step-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Arrow Column */}
            <div className="step-arrow">
              →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
