import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SubLessonTopbar from '../components/sublesson/SubLessonTopbar';
import SubLessonHero from '../components/sublesson/SubLessonHero';
import SubLessonAside, { type TocEntry } from '../components/sublesson/SubLessonAside';
import SubLessonNextBanner from '../components/sublesson/SubLessonNextBanner';
import Bai11InteractiveContent from '../components/sublesson/Bai11InteractiveContent';
import SubLessonNavCards from '../components/sublesson/SubLessonNavCards';
import ContentBody from '../components/reader/content/ContentBody';
import { fetchPublicLesson } from '../lib/public-lesson-api';
import { findSubLessonFromSlug, mapPublicLessonToSubLessons } from '../lib/public-lesson-mapper';
import { prepareReaderContent } from '../lib/reader-outline';
import { getSubLessonBySlug, getSubLessonsByLesson, type SubLessonFull } from '../lib/subLessons';

export default function SubLessonPage() {
  const params = useParams();
  const [dbSubLessons, setDbSubLessons] = useState<SubLessonFull[] | null>(null);
  const [activeTocId, setActiveTocId] = useState<string | null>('s1');
  const [progress, setProgress] = useState(0);

  const lessonSlug = params.lessonSlug || '';
  const subSlug = params.subSlug || '';
  const fallbackSubLesson = getSubLessonBySlug(lessonSlug, subSlug);
  const dbSubLesson = dbSubLessons ? findSubLessonFromSlug(dbSubLessons, subSlug) : null;
  const subLesson = dbSubLesson ?? fallbackSubLesson;
  const shouldPreferCanonicalSubLessons = lessonSlug === 'tu-ngu-chuyen-nganh';
  const displayedSubLessons = shouldPreferCanonicalSubLessons ? undefined : dbSubLessons ?? undefined;
  const allSubLessons = displayedSubLessons ?? getSubLessonsByLesson(lessonSlug);

  const isBai11 = subLesson?.id === '1.1';

  const prepared = useMemo(
    () => prepareReaderContent(subLesson?.content ?? []),
    [subLesson?.content],
  );

  const bai11Toc: TocEntry[] = useMemo(
    () => [
      { id: 's1', n: '01', t: 'Giải thích đơn giản nhất' },
      { id: 's2', n: '02', t: 'Quy trình thực tế trông như thế nào?' },
      { id: 's3', n: '03', t: 'Tại sao gọi là "vibe"?' },
      { id: 's4', n: '04', t: 'Vibecode so với cách làm cũ' },
      { id: 's5', n: '05', t: '3 thứ Vibe Coding đang phá vỡ' },
    ],
    [],
  );

  const tocList: TocEntry[] = useMemo(() => {
    if (isBai11) return bai11Toc;
    return prepared.tocItems.map((item, idx) => ({
      id: item.id,
      n: String(idx + 1).padStart(2, '0'),
      t: item.label,
    }));
  }, [isBai11, bai11Toc, prepared.tocItems]);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonSlug, subSlug]);

  // Fetch db sublessons
  useEffect(() => {
    let cancelled = false;

    fetchPublicLesson(lessonSlug)
      .then((payload) => {
        if (cancelled) return;
        const mapped = mapPublicLessonToSubLessons(payload);
        setDbSubLessons(mapped.length && !hasBrokenVietnamese(mapped) ? mapped : null);
      })
      .catch(() => {
        if (!cancelled) setDbSubLessons(null);
      });

    return () => {
      cancelled = true;
    };
  }, [lessonSlug]);

  // Scroll progress & active TOC tracking
  useEffect(() => {
    const ids = isBai11
      ? ['s1', 's2', 's3', 's4', 's5']
      : prepared.tocItems.map((item) => item.id);

    const onScroll = () => {
      // 1. Reading progress
      const article = document.querySelector('article');
      if (article) {
        const r = article.getBoundingClientRect();
        const p = Math.min(100, Math.max(0, ((window.innerHeight * 0.4 - r.top) / r.height) * 100));
        setProgress(p);
      }

      // 2. Active TOC item
      if (ids.length) {
        let current = ids[0];
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top < 180) {
            current = id;
          }
        }
        setActiveTocId(current);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [isBai11, prepared.tocItems]);

  if (!subLesson) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F6F5F1]">
        <div className="text-center px-4">
          <h1 className="font-semibold text-2xl mb-4 text-[#141414]">Bài học không tồn tại</h1>
          <p className="text-[#8A8883] mb-6">Slug: {lessonSlug}/{subSlug}</p>
          <Link
            to="/vibecode"
            className="inline-block bg-[#141414] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#E8772E] transition-colors"
          >
            Quay lại lộ trình
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#141414]">
      {/* 1. Sticky Topbar with Realtime Reading Progress Line */}
      <SubLessonTopbar
        subLesson={subLesson}
        lessonSlug={lessonSlug}
        progressPercent={progress}
      />

      {/* 2. Hero Section */}
      <SubLessonHero subLesson={subLesson} />

      {/* 3. Main Reading Area (Article + Sticky Aside) */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-wrap gap-x-12 lg:gap-x-20 items-start">
        {isBai11 ? (
          <Bai11InteractiveContent lessonSlug={lessonSlug} />
        ) : (
          <article className="flex-[1_1_560px] min-w-0 max-w-[720px] py-16 sm:py-20 lg:py-24">
            <ContentBody content={prepared.content} />
            <SubLessonNavCards subLesson={subLesson} lessonSlug={lessonSlug} />
          </article>
        )}

        <SubLessonAside
          toc={tocList}
          activeId={activeTocId || ''}
          lessonSlug={lessonSlug}
          currentSubLessonId={subLesson.id}
          subLessons={allSubLessons}
          lessonId={subLesson.lessonId}
        />
      </div>

      {/* 4. Next Course Lessons Footer Banner */}
      <SubLessonNextBanner currentLessonId={subLesson.lessonId} />
    </div>
  );
}

function hasBrokenVietnamese(subLessons: SubLessonFull[]) {
  return subLessons.some((subLesson) => {
    const textParts = [
      subLesson.lessonTitle,
      subLesson.prevTitle,
      subLesson.nextTitle,
      subLesson.eyebrow,
      subLesson.title,
      subLesson.desc,
      subLesson.duration,
      ...subLesson.content.flatMap((block) => {
        switch (block.type) {
          case 'p':
          case 'h3':
          case 'h4':
            return [block.text];
          case 'html':
            return [block.html];
          case 'insight':
            return [block.label, block.text];
          case 'compare':
            return [block.headers[0], block.headers[1], ...block.rows.flatMap((row) => [row.left, row.right])];
          case 'usecases':
            return block.items.flatMap((item) => [item.title, item.desc]);
          case 'grid2':
            return block.items.flatMap((item) => [item.label, item.title, item.desc]);
          case 'divider':
            return [];
          default:
            return [];
        }
      }),
    ].filter((value): value is string => Boolean(value));

    return textParts.some(containsMojibake);
  });
}

function containsMojibake(value: string) {
  return /Ã.|Â.|Ä.|Æ.|áº|á»|â€”|â€œ|â€ |â€˜|â€™/.test(value);
}
