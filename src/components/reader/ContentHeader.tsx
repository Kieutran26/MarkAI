import type { SubLessonFull } from '../../lib/subLessons';

interface ContentHeaderProps {
  subLesson: SubLessonFull;
}

export default function ContentHeader({ subLesson }: ContentHeaderProps) {
  const { id, eyebrow, title, titleEm, desc, duration, lessonId, totalSubs, currentIndex } = subLesson;

  return (
    <div className="content-header">
      {/* Eyebrow */}
      <div className="ch-eyebrow">
        <span className="ch-num">{id}</span>
        <span>·</span>
        <span>{eyebrow}</span>
      </div>

      {/* Title */}
      <h1 className="ch-title">
        {title.split('—')[0].trim()}
        {titleEm && <em className="text-accent italic"> — {titleEm}</em>}
      </h1>

      {/* Description */}
      <p className="ch-desc">{desc}</p>

      {/* Meta Tags */}
      <div className="ch-meta">
        <span className="ch-tag">{duration} đọc</span>
        <span className="ch-tag">Bài {lessonId.toString().padStart(2, '0')} / 10</span>
        <span className="ch-tag">Mục {currentIndex} / {totalSubs}</span>
      </div>
    </div>
  );
}
