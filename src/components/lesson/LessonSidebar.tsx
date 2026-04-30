import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Lesson } from '../../lib/lessons';

interface LessonSidebarProps {
  lesson: Lesson;
}

export default function LessonSidebar({ lesson }: LessonSidebarProps) {
  const [activeId, setActiveId] = useState<string>(`sub-${lesson.subLessons[0]?.id ?? ''}`);
  
  // Slug mapping
  const getSlug = (id: number) => {
    const slugMap: Record<number, string> = {
      1: 'vibecode-la-gi',
      2: 'tu-ngu-chuyen-nganh',
      3: 'cai-dat-moi-truong',
      4: 'lam-quen-vscode-cursor',
      5: 'lam-quen-claude-code',
      6: 'cong-cu-website-huu-ich',
      7: 'cach-prompt-cho-ai',
      8: 'khi-ai-code-sai',
      9: 'tao-skills-va-workflow',
      10: 'deploy-va-tracking'
    };
    return slugMap[id];
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.sub-lesson');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const nextLessonSlug = lesson.nextLesson ? getSlug(lesson.nextLesson.id) : null;
  const nextLessonId = lesson.nextLesson ? lesson.nextLesson.id : null;

  return (
    <aside className="lesson-sidebar">
      {/* Header */}
      <div className="sidebar-header">
        Bài {lesson.id.toString().padStart(2, '0')} · {lesson.subLessonCount} phần
      </div>

      {/* Current Lesson Sections */}
      <div className="sidebar-section-label">Nội dung bài này</div>
      
      {lesson.subLessons.map((subLesson, idx) => (
        <Link
          key={subLesson.id}
          to={`#sub-${subLesson.id}`}
          className={`sidebar-item ${activeId === `sub-${subLesson.id}` ? 'active' : ''}`}
        >
          <span className="sidebar-item-num">{subLesson.id}</span>
          <span className="sidebar-item-text">{subLesson.title.split('—')[0].trim()}</span>
          {idx === 0 && (
            <span className="sidebar-item-done">✓</span>
          )}
        </Link>
      ))}

      {/* Next Lesson Preview */}
      {nextLessonSlug && nextLessonId && (
        <>
          <div className="sidebar-section-label" style={{ marginTop: '0.5rem' }}>
            Bài tiếp theo
          </div>
          <Link 
            to={`/vibecode/${nextLessonSlug}`} 
            className="sidebar-item"
            style={{ opacity: 0.6 }}
          >
            <span className="sidebar-item-num" style={{ color: 'var(--muted)' }}>
              {nextLessonId.toString().padStart(2, '0')}
            </span>
            <span className="sidebar-item-text">{lesson.nextLesson?.title}</span>
          </Link>
        </>
      )}
    </aside>
  );
}
