import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { getLessonBySlug, getNextLesson, getPrevLesson, getRemainingLessons, getLessonSlug } from '../lib/lessons';
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
          <h1 className="font-serif text-2xl mb-4">BÃ i há»c khÃ´ng tá»“n táº¡i</h1>
          <p className="text-muted mb-6">Slug: {lessonSlug}</p>
          <Link to="/vibecode" className="btn-primary">Quay láº¡i lá»™ trÃ¬nh</Link>
        </div>
      </div>
    );
  }

  const lesson = fallbackLesson ?? null;
  const currentId = lesson?.id ?? dbLesson?.sortOrder ?? 1;
  const nextLesson = getNextLesson(currentId);
  const prevLesson = getPrevLesson(currentId);
  const remainingLessons = getRemainingLessons(currentId);
  const whatYoullLearn = getWhatYoullLearn(currentId);
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
            <span style={{ color: 'var(--ink)' }}>BÃ i {currentId.toString().padStart(2, '0')}</span>
          </div>

          <div className="nav-lesson-top">
            {prevLesson ? (
              <Link to={`/vibecode/${getLessonSlug(prevLesson.id)}`} className="nav-item-top">
                â† BÃ i {prevLesson.id.toString().padStart(2, '0')}
              </Link>
            ) : (
              <span className="nav-item-top disabled">â† TrÆ°á»›c</span>
            )}
            {nextLesson ? (
              <Link to={`/vibecode/${getLessonSlug(nextLesson.id)}`} className="nav-item-top nav-item-top-black">
                BÃ i {nextLesson.id.toString().padStart(2, '0')} â†’
              </Link>
            ) : (
              <span className="nav-item-top disabled">Káº¿t thÃºc â†’</span>
            )}
          </div>
        </div>
      </div>

      {lesson ? <LessonOverviewHero lesson={lesson} /> : <DbLessonHero lesson={dbLesson} />}
      <ProgressBar currentLesson={currentId} />
      <SubLessonList subLessons={overviewModules ?? lesson?.subLessons ?? []} lessonSlug={lessonSlug} />
      <WhatYoullLearn items={whatYoullLearn} lessonId={currentId} />
      {lesson ? (
        <LessonNextUp currentLesson={lesson} nextLesson={nextLesson} remainingLessons={remainingLessons} />
      ) : dbLesson ? (
        <LessonNextUp 
          currentLesson={{ id: currentId, title: dbLesson.title, slug: lessonSlug } as any} 
          nextLesson={nextLesson} 
          remainingLessons={remainingLessons} 
        />
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
          <span className="lesson-hero-kicker">BÃ i {String(lesson.sortOrder).padStart(2, '0')}</span>
          <h1 className="lesson-hero-title">{lesson.title}</h1>
          <p className="lesson-hero-desc">{lesson.summary || 'Äang hiá»ƒn thá»‹ lesson tá»« database.'}</p>
        </div>
        <div className="lesson-hero-side">
          <div className="lesson-hero-meta-card"><span>Pháº§n</span><strong>{lesson.modules.length}</strong></div>
          <div className="lesson-hero-meta-card"><span>Thá»i lÆ°á»£ng</span><strong>~{lesson.estimatedMinutes} phÃºt</strong></div>
        </div>
      </div>
    </section>
  );
}

function ProgressBar({ currentLesson }: { currentLesson: number }) {
  return (
    <div className="progress-bar-wrap">
      <div className="progress-bar-inner">
        <span className="progress-label">Lá»˜ TRÃŒNH Â· {currentLesson}/10</span>
        <div className="progress-steps">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`progress-step ${i + 1 < currentLesson ? 'done' : i + 1 === currentLesson ? 'active' : ''}`} />
          ))}
        </div>
        <span className="progress-label text-accent">BÃ€I {currentLesson.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
}

function getWhatYoullLearn(lessonId: number) {
  const data: Record<number, { icon: ReactNode; title: string; desc: string }[]> = {
    1: [
      { icon: <Sparkles className="w-4 h-4 text-accent" />, title: 'Vibecode lÃ  gÃ¬', desc: 'Äá»‹nh nghÄ©a rÃµ rÃ ng, khÃ´ng dÃ¹ng tá»« ká»¹ thuáº­t. Giáº£i thÃ­ch Ä‘Æ°á»£c cho Ä‘á»“ng nghiá»‡p nghe.' },
      { icon: <Sparkles className="w-4 h-4 text-accent" />, title: 'Táº¡i sao nÃ³ phÃ¹ há»£p vá»›i báº¡n', desc: 'Táº¡i sao Marketer cáº§n vibecode hÆ¡n báº¥t ká»³ ai khÃ¡c.' },
      { icon: <Sparkles className="w-4 h-4 text-accent" />, title: 'Vibecode so vá»›i há»c code', desc: 'KhÃ¡c nhau á»Ÿ Ä‘Ã¢u, phÃ¹ há»£p vá»›i ai.' },
      { icon: <Sparkles className="w-4 h-4 text-accent" />, title: 'Use case thá»±c táº¿', desc: 'Xem nhá»¯ng thá»© Marketer khÃ¡c Ä‘Ã£ tá»± build.' },
      { icon: <Sparkles className="w-4 h-4 text-accent" />, title: 'Báº¡n cáº§n gÃ¬ Ä‘á»ƒ báº¯t Ä‘áº§u', desc: 'Danh sÃ¡ch cáº§n/khÃ´ng cáº§n trÆ°á»›c khi bÆ°á»›c vÃ o bÃ i 2.' },
    ],
    2: [
      { icon: <Sparkles className="w-4 h-4 text-accent" />, title: 'AI, model, prompt', desc: 'Hiểu 3 khái niệm gốc để biết mình đang nói chuyện với cái gì.' },
      { icon: <Sparkles className="w-4 h-4 text-accent" />, title: 'Input vs output', desc: 'Biết vì sao kết quả dở thường bắt nguồn từ brief dở.' },
      { icon: <Sparkles className="w-4 h-4 text-accent" />, title: 'Tại sao marketer nên hiểu tech', desc: 'Đủ để không lệ thuộc và biết cách kiểm soát AI.' },
      { icon: <Sparkles className="w-4 h-4 text-accent" />, title: 'Case prompt sai', desc: 'Thấy rõ AI không sai ngẫu nhiên, mà sai vì thiếu ngữ cảnh.' },
      { icon: <Sparkles className="w-4 h-4 text-accent" />, title: 'Trang từ điển thuật ngữ', desc: 'Có sẵn một nơi riêng để tra cứu lại khi cần prompt hoặc sửa lỗi.' },
    ],
  };
  return data[lessonId] || data[1];
}
