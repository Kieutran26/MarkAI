import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLessonBySlug, getNextLesson, getRemainingLessons, getLessonSlug } from '../lib/lessons';
import { fetchPublicLesson, type PublicLessonPayload } from '../lib/public-lesson-api';
import { mapPublicLessonToOverviewModules } from '../lib/public-lesson-mapper';
import LessonOverviewHero from '../components/lesson/LessonOverviewHero';
import SubLessonList from '../components/lesson/SubLessonList';
import WhatYoullLearn from '../components/lesson/WhatYoullLearn';
import LessonNextUp from '../components/lesson/LessonNextUp';

export default function LessonOverview() {
  const params = useParams();
  const lessonSlug = params.lessonSlug || '';
  const fallbackLesson = getLessonBySlug(lessonSlug);
  const [dbLesson, setDbLesson] = useState<PublicLessonPayload['lesson'] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchPublicLesson(lessonSlug)
      .then((payload) => {
        if (!cancelled) setDbLesson(payload.lesson);
      })
      .catch(() => {
        if (!cancelled) setDbLesson(null);
      });
    return () => {
      cancelled = true;
    };
  }, [lessonSlug]);

  if (!fallbackLesson && !dbLesson) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Bài học không tồn tại</h1>
          <p className="text-muted mb-6">Slug: {lessonSlug}</p>
          <Link to="/vibecode" className="btn-primary">Quay lại lộ trình</Link>
        </div>
      </div>
    );
  }

  const lesson = fallbackLesson ?? null;
  const nextLesson = lesson ? getNextLesson(lesson.id) : null;
  const remainingLessons = lesson ? getRemainingLessons(lesson.id) : [];
  const whatYoullLearn = lesson ? getWhatYoullLearn(lesson.id) : getWhatYoullLearn(dbLesson?.sortOrder ?? 1);
  const overviewModules = useMemo(() => (dbLesson ? mapPublicLessonToOverviewModules({ lesson: dbLesson }) : null), [dbLesson]);

  return (
    <div>
      <div className="breadcrumb-wrap">
        <div className="breadcrumb-content">
          <div className="breadcrumb">
            <Link to="/">markAI</Link>
            <span>/</span>
            <Link to="/vibecode">Vibecode Web</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>Bài {(lesson?.id ?? dbLesson?.sortOrder ?? 1).toString().padStart(2, '0')}</span>
          </div>

          <div className="nav-lesson-top">
            <span className="nav-item-top disabled">← Trước</span>
            {nextLesson ? (
              <Link to={`/vibecode/${getLessonSlug(nextLesson.id)}`} className="nav-item-top nav-item-top-black">
                Bài {nextLesson.id.toString().padStart(2, '0')} →
              </Link>
            ) : (
              <span className="nav-item-top disabled">Kết thúc →</span>
            )}
          </div>
        </div>
      </div>

      {lesson ? <LessonOverviewHero lesson={lesson} /> : <DbLessonHero lesson={dbLesson} />}
      <ProgressBar currentLesson={lesson?.id ?? dbLesson?.sortOrder ?? 1} />
      <SubLessonList subLessons={overviewModules ?? lesson?.subLessons ?? []} lessonSlug={lessonSlug} />
      <WhatYoullLearn items={whatYoullLearn} lessonId={lesson?.id ?? dbLesson?.sortOrder ?? 1} />
      {lesson ? (
        <LessonNextUp currentLesson={lesson} nextLesson={nextLesson} remainingLessons={remainingLessons} />
      ) : null}
    </div>
  );
}

function DbLessonHero({ lesson }: { lesson: PublicLessonPayload['lesson'] | null }) {
  if (!lesson) return null;
  return (
    <section className="lesson-hero-wrap">
      <div className="lesson-hero-grid">
        <div className="lesson-hero-main">
          <span className="lesson-hero-kicker">Bài {String(lesson.sortOrder).padStart(2, '0')}</span>
          <h1 className="lesson-hero-title">{lesson.title}</h1>
          <p className="lesson-hero-desc">{lesson.summary || 'Đang hiển thị lesson từ database.'}</p>
        </div>
        <div className="lesson-hero-side">
          <div className="lesson-hero-meta-card"><span>Phần</span><strong>{lesson.modules.length}</strong></div>
          <div className="lesson-hero-meta-card"><span>Thời lượng</span><strong>~{lesson.estimatedMinutes} phút</strong></div>
        </div>
      </div>
    </section>
  );
}

function ProgressBar({ currentLesson }: { currentLesson: number }) {
  return (
    <div className="progress-bar-wrap">
      <div className="progress-bar-inner">
        <span className="progress-label">LỘ TRÌNH · {currentLesson}/10</span>
        <div className="progress-steps">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`progress-step ${i + 1 < currentLesson ? 'done' : i + 1 === currentLesson ? 'active' : ''}`} />
          ))}
        </div>
        <span className="progress-label text-accent">BÀI {currentLesson.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
}

function getWhatYoullLearn(lessonId: number) {
  const data: Record<number, { icon: string; title: string; desc: string }[]> = {
    1: [
      { icon: '✳ 01', title: 'Vibecode là gì', desc: 'Định nghĩa rõ ràng, không dùng từ kỹ thuật. Giải thích được cho đồng nghiệp nghe.' },
      { icon: '✳ 02', title: 'Tại sao nó phù hợp với bạn', desc: 'Tại sao Marketer cần vibecode hơn bất kỳ ai khác.' },
      { icon: '✳ 03', title: 'Vibecode so với học code', desc: 'Khác nhau ở đâu, phù hợp với ai.' },
      { icon: '✳ 04', title: 'Use case thực tế', desc: 'Xem những thứ Marketer khác đã tự build.' },
      { icon: '✳ 05', title: 'Bạn cần gì để bắt đầu', desc: 'Danh sách cần/không cần trước khi bước vào bài 2.' },
    ],
  };
  return data[lessonId] || data[1];
}
