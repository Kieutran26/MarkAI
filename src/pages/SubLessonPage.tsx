import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LessonTopbar from '../components/reader/LessonTopbar';
import ReaderSidebar from '../components/reader/ReaderSidebar';
import ReaderShell from '../components/reader/ReaderShell';
import ContentHeader from '../components/reader/ContentHeader';
import ContentBody from '../components/reader/content/ContentBody';
import ContentFooter from '../components/reader/ContentFooter';
import { fetchPublicLesson } from '../lib/public-lesson-api';
import { findSubLessonFromSlug, mapPublicLessonToSubLessons } from '../lib/public-lesson-mapper';
import { prepareReaderContent } from '../lib/reader-outline';
import { getSubLessonBySlug, type SubLessonFull } from '../lib/subLessons';

export default function SubLessonPage() {
  const params = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dbSubLessons, setDbSubLessons] = useState<SubLessonFull[] | null>(null);
  const [activeTocId, setActiveTocId] = useState<string | null>(null);

  const lessonSlug = params.lessonSlug || '';
  const subSlug = params.subSlug || '';
  const fallbackSubLesson = getSubLessonBySlug(lessonSlug, subSlug);
  const dbSubLesson = dbSubLessons ? findSubLessonFromSlug(dbSubLessons, subSlug) : null;
  const subLesson = dbSubLesson ?? fallbackSubLesson;
  const shouldPreferCanonicalSubLessons = lessonSlug === 'tu-ngu-chuyen-nganh';
  const displayedSubLessons = shouldPreferCanonicalSubLessons ? undefined : dbSubLessons ?? undefined;
  const prepared = useMemo(
    () => prepareReaderContent(subLesson?.content ?? []),
    [subLesson?.content],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setSidebarOpen(false);
  }, [lessonSlug, subSlug]);

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

  useEffect(() => {
    setDbSubLessons(null);
  }, [lessonSlug]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [sidebarOpen]);

  useEffect(() => {
    const ids = prepared.tocItems.map((item) => item.id);

    if (!ids.length) {
      setActiveTocId(null);
      return;
    }

    setActiveTocId(ids[0]);

    const headings = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) {
          setActiveTocId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-96px 0px -55% 0px',
        threshold: [0, 0.2, 0.6, 1],
      },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [prepared.tocItems]);

  if (!subLesson) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Bai hoc khong ton tai</h1>
          <p className="text-muted mb-6">Slug: {lessonSlug}/{subSlug}</p>
          <Link to="/vibecode" className="btn-primary">
            Quay lai lo trinh
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ReaderShell
      topbar={<LessonTopbar subLesson={subLesson} lessonSlug={lessonSlug} />}
      sidebar={(
        <ReaderSidebar
          subLesson={subLesson}
          lessonSlug={lessonSlug}
          subLessons={displayedSubLessons}
          onClose={() => setSidebarOpen(false)}
          isOpen={sidebarOpen}
        />
      )}
      header={<ContentHeader subLesson={subLesson} />}
      content={<ContentBody content={prepared.content} />}
      footer={<ContentFooter subLesson={subLesson} lessonSlug={lessonSlug} />}
      tocItems={prepared.tocItems}
      activeTocId={activeTocId}
      sidebarOpen={sidebarOpen}
      onSidebarClose={() => setSidebarOpen(false)}
      mobileToggle={(
        <button className="sidebar-toggle" onClick={() => setSidebarOpen((open) => !open)}>
          {sidebarOpen ? 'X Dong' : 'Muc luc'}
        </button>
      )}
    />
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
  return /Ã.|Â.|Ä.|Æ.|áº|á»|â€”|â€œ|â€|â€˜|â€™/.test(value);
}
