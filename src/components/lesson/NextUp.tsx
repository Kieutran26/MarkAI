import { Link } from 'react-router-dom';
import type { Lesson } from '../../lib/lessons';

interface NextUpProps {
  currentLesson: Lesson;
  nextLesson?: Lesson;
  remainingLessons: Lesson[];
}

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

export default function NextUp({ currentLesson, nextLesson, remainingLessons }: NextUpProps) {
  // If this is the last lesson, show completion message
  if (!nextLesson && remainingLessons.length === 0) {
    return (
      <section className="next-up-section">
        <div className="next-up-inner">
          <div className="next-up-left">
            <p className="next-up-label">✳ Hoàn thành lộ trình!</p>
            <h3 className="next-up-title font-serif text-[1.5rem] leading-[1.2] mb-4" style={{ color: 'var(--bg)' }}>
              Bạn đã hoàn thành<br />
              <em className="text-accent italic">Vibecode Web!</em>
            </h3>
            <p className="next-up-desc">
              10 bài học từ zero đến deploy. Giờ bạn đã có thể tự build web app cho riêng mình.
            </p>
            <Link to="/vibecode" className="btn-accent mt-6">
              Quay lại lộ trình →
            </Link>
          </div>
          <div className="next-up-right">
            <p className="next-up-label">✳ Bắt đầu project của riêng bạn</p>
            <div className="next-up-lessons">
              <div className="next-up-lesson">
                <span className="nul-num">✦</span>
                <span className="nul-title">Chọn ý tưởng phù hợp với công việc</span>
              </div>
              <div className="next-up-lesson">
                <span className="nul-num">✦</span>
                <span className="nul-title">Dùng Cursor + Claude Code để build</span>
              </div>
              <div className="next-up-lesson">
                <span className="nul-num">✦</span>
                <span className="nul-title">Deploy lên Vercel</span>
              </div>
              <div className="next-up-lesson">
                <span className="nul-num">✦</span>
                <span className="nul-title">Gắn PostHog để tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!nextLesson) return null;

  const nextSlug = getSlug(nextLesson.id);

  return (
    <section className="next-up-section">
      <div className="next-up-inner">
        {/* Left - Next Lesson */}
        <div className="next-up-left">
          <p className="next-up-label">✳ Tiếp theo trong lộ trình</p>
          <h3 className="next-up-title">
            Bài {nextLesson.id.toString().padStart(2, '0')} — {nextLesson.title.split('—')[0].trim()}
          </h3>
          <p className="next-up-desc">
            {nextLesson.desc}
          </p>
          <Link to={`/vibecode/${nextSlug}`} className="btn-accent">
            Học bài {nextLesson.id.toString().padStart(2, '0')} →
          </Link>
        </div>

        {/* Right - Remaining Lessons */}
        <div className="next-up-right">
          <p className="next-up-label">✳ Các bài còn lại trong lộ trình</p>
          <div className="next-up-lessons">
            {remainingLessons.slice(0, 4).map((lesson) => {
              const lessonSlug = getSlug(lesson.id);
              return (
                <Link 
                  key={lesson.id} 
                  to={`/vibecode/${lessonSlug}`}
                  className="next-up-lesson"
                >
                  <span className="nul-num">
                    {lesson.id.toString().padStart(2, '0')}
                  </span>
                  <span className="nul-title">
                    {lesson.title.split('—')[0].trim()}
                  </span>
                  <span className="nul-arrow">→</span>
                </Link>
              );
            })}
            {remainingLessons.length > 4 && (
              <div className="next-up-lesson">
                <span className="nul-num">...</span>
                <span className="nul-title">
                  Còn {remainingLessons.length - 4} bài nữa
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
