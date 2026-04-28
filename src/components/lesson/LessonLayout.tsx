import LessonHero from './LessonHero';
import LessonSidebar from './LessonSidebar';
import SubLessonComponent from './SubLesson';
import NextUp from './NextUp';
import { lessons, getRemainingLessons } from '../../lib/lessons';
import type { Lesson } from '../../lib/lessons';

interface LessonLayoutProps {
  lesson: Lesson;
}

export default function LessonLayout({ lesson }: LessonLayoutProps) {
  const progress = lesson.id;
  const remainingLessons = getRemainingLessons(lesson.id);
  const nextLesson = remainingLessons[0];

  return (
    <>
      {/* Hero Section */}
      <LessonHero lesson={lesson} progress={progress} />

      {/* Progress Bar */}
      <div className="progress-bar-wrap">
        <div className="progress-bar-inner">
          <span className="progress-label">LỘ TRÌNH · {lesson.id}/10</span>
          <div className="progress-steps">
            {Array.from({ length: 10 }).map((_, idx) => {
              const stepNum = idx + 1;
              let stepClass = 'progress-step';
              if (stepNum < lesson.id) {
                stepClass += ' done';
              } else if (stepNum === lesson.id) {
                stepClass += ' active';
              }
              return <div key={idx} className={stepClass} />;
            })}
          </div>
          <span className="progress-label" style={{ color: 'var(--accent)' }}>
            BÀI {lesson.id.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="lesson-layout">
        {/* Sidebar */}
        <LessonSidebar lesson={lesson} />

        {/* Content */}
        <main className="lesson-content">
          {lesson.subLessons.map((subLesson, idx) => (
            <SubLessonComponent
              key={subLesson.id}
              subLesson={subLesson}
              lessonId={lesson.id}
              isFirst={idx === 0}
              isLast={idx === lesson.subLessons.length - 1}
              prevSubLesson={idx > 0 ? lesson.subLessons[idx - 1] : null}
              nextSubLesson={idx < lesson.subLessons.length - 1 ? lesson.subLessons[idx + 1] : null}
            />
          ))}
        </main>
      </div>

      {/* Next Up Section */}
      <NextUp 
        currentLesson={lesson}
        nextLesson={nextLesson}
        remainingLessons={remainingLessons}
      />
    </>
  );
}
