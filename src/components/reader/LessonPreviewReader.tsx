import { Link } from 'react-router-dom';
import ContentBody from './content/ContentBody';
import ContentHeader from './ContentHeader';
import { getContentBlocksFromContentJson, summarizeContentBlocks } from '../../lib/reader-content';
import type { ContentBlock, SubLessonFull } from '../../lib/subLessons';

type PreviewBlock = {
  id: string;
  title: string | null;
  contentJson: Record<string, unknown>;
  sortOrder: number;
};

type PreviewLesson = {
  slug: string;
  title: string;
  summary: string | null;
  estimatedMinutes: number;
  blocks: PreviewBlock[];
};

export default function LessonPreviewReader({
  lesson,
  previewToken,
  activeBlockIndex,
}: {
  lesson: PreviewLesson;
  previewToken: string;
  activeBlockIndex: number;
}) {
  const subLessons = mapBlocksToSubLessons(lesson);
  const activeSubLesson = subLessons[activeBlockIndex] ?? subLessons[0];

  if (!activeSubLesson) {
    return <div className="lesson-preview-state">Lesson nay chua co block de preview.</div>;
  }

  return (
    <div className="reader-page">
      <PreviewTopbar current={activeSubLesson} lessonSlug={lesson.slug} previewToken={previewToken} />
      <div className="reader-layout">
        <PreviewSidebar current={activeSubLesson} lessonSlug={lesson.slug} previewToken={previewToken} subLessons={subLessons} />
        <div className="reader-content">
          <ContentHeader subLesson={activeSubLesson} />
          <ContentBody content={activeSubLesson.content} />
          <PreviewFooter current={activeSubLesson} lessonSlug={lesson.slug} previewToken={previewToken} />
        </div>
      </div>
    </div>
  );
}

function PreviewTopbar({ current, lessonSlug, previewToken }: { current: SubLessonFull; lessonSlug: string; previewToken: string }) {
  const prevHref = current.prevSlug ? getPreviewHref(previewToken, current.currentIndex - 1) : null;
  const nextHref = current.nextSlug ? getPreviewHref(previewToken, current.currentIndex + 1) : null;

  return (
    <div className="topbar">
      <Link to={`/vibecode/${lessonSlug}`} className="topbar-back">← Bai {current.lessonId.toString().padStart(2, '0')}</Link>
      <div className="topbar-context">
        <span className="topbar-badge">Bai {current.lessonId.toString().padStart(2, '0')}</span>
        <span className="topbar-sep">/</span>
        <span className="topbar-title">{current.lessonTitle}</span>
      </div>
      <div className="topbar-progress">
        <div className="topbar-dots">
          {Array.from({ length: current.totalSubs }).map((_, index) => (
            <div key={index} className={`topbar-dot ${index < current.currentIndex - 1 ? 'done' : index === current.currentIndex - 1 ? 'active' : ''}`} />
          ))}
        </div>
        <span className="topbar-prog-text">{current.currentIndex} / {current.totalSubs}</span>
      </div>
      <div className="topbar-nav">
        {prevHref ? <Link to={prevHref} className="topbar-nav-btn">← Truoc</Link> : <span className="topbar-nav-btn disabled opacity-35">← Truoc</span>}
        {nextHref ? <Link to={nextHref} className="topbar-nav-btn next-active">Den bai {current.lessonId}.{current.currentIndex + 1} →</Link> : <span className="topbar-nav-btn disabled opacity-35">Het bai nay</span>}
      </div>
    </div>
  );
}

function PreviewSidebar({ current, lessonSlug, previewToken, subLessons }: { current: SubLessonFull; lessonSlug: string; previewToken: string; subLessons: SubLessonFull[] }) {
  return (
    <aside className="reader-sidebar" id="reader-sidebar">
      <div className="sidebar-lesson-header">
        <p className="slh-label">Bai {current.lessonId.toString().padStart(2, '0')} · {current.totalSubs} phan</p>
        <p className="slh-title">{current.lessonTitle}</p>
      </div>
      <p className="sidebar-section-label">Cac phan trong bai nay</p>
      {subLessons.map((subLesson, index) => {
        const isActive = subLesson.id === current.id;
        const isDone = index < current.currentIndex - 1;
        return (
          <Link key={subLesson.id} to={getPreviewHref(previewToken, index + 1)} className={`sidebar-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}>
            <span className="si-num">{subLesson.id}</span>
            <div className="si-body">
              <span className="si-title">{subLesson.title.split('—')[0].trim()}</span>
              <span className="si-time">{subLesson.duration}</span>
            </div>
            {isDone ? <span className="si-check">✓</span> : null}
          </Link>
        );
      })}
      <div className="sidebar-next-lesson">
        <p className="snl-label">Day la preview tu Neon</p>
        <Link to={`/vibecode/${lessonSlug}`} className="snl-item">
          <span className="snl-num">→</span>
          <span>So voi trang public hien tai</span>
        </Link>
      </div>
    </aside>
  );
}

function PreviewFooter({ current, lessonSlug, previewToken }: { current: SubLessonFull; lessonSlug: string; previewToken: string }) {
  const prevHref = current.prevSlug ? getPreviewHref(previewToken, current.currentIndex - 1) : null;
  const nextHref = current.nextSlug ? getPreviewHref(previewToken, current.currentIndex + 1) : null;

  return (
    <div className="content-footer">
      {prevHref ? (
        <Link to={prevHref} className="cf-btn">
          <span className="cf-dir">← Phan truoc</span>
          <span className="cf-title">{current.prevTitle ?? 'Phan truoc'}</span>
          <span className="cf-sub">{current.lessonId}.{current.currentIndex - 1} · {current.duration}</span>
        </Link>
      ) : (
        <div className="cf-btn disabled opacity-35 pointer-events-none">
          <span className="cf-dir">← Phan truoc</span>
          <span className="cf-title">—</span>
          <span className="cf-sub">Khong co phan truoc</span>
        </div>
      )}
      {nextHref ? (
        <Link to={nextHref} className="cf-btn cf-btn-next">
          <span className="cf-dir">Phan tiep theo →</span>
          <span className="cf-title">{current.nextTitle ?? 'Phan tiep theo'}</span>
          <span className="cf-sub">{current.lessonId}.{current.currentIndex + 1} · {current.duration}</span>
        </Link>
      ) : (
        <Link to={`/vibecode/${lessonSlug}`} className="cf-btn cf-btn-next">
          <span className="cf-dir">So voi public →</span>
          <span className="cf-title">Mo bai lesson public hien tai</span>
          <span className="cf-sub">Doi chieu layout dang live</span>
        </Link>
      )}
    </div>
  );
}

function mapBlocksToSubLessons(lesson: PreviewLesson): SubLessonFull[] {
  const totalSubs = lesson.blocks.length;
  const minutesPerBlock = Math.max(1, Math.round((lesson.estimatedMinutes || totalSubs || 1) / Math.max(totalSubs, 1)));

  return lesson.blocks.map((block, index) => {
    const title = (block.title || `Phan ${index + 1}`).trim();
    const content = getContentBlocksFromContentJson(block.contentJson ?? {});

    return {
      id: `${inferLessonNumber(lesson.slug)}.${index + 1}`,
      slug: `preview-block-${index + 1}`,
      lessonSlug: lesson.slug,
      lessonId: inferLessonNumber(lesson.slug),
      lessonTitle: lesson.title,
      lessonTitleEm: '',
      prevSlug: index > 0 ? `preview-block-${index}` : null,
      nextSlug: index < totalSubs - 1 ? `preview-block-${index + 2}` : null,
      prevTitle: index > 0 ? lesson.blocks[index - 1]?.title || `Phan ${index}` : null,
      nextTitle: index < totalSubs - 1 ? lesson.blocks[index + 1]?.title || `Phan ${index + 2}` : null,
      eyebrow: title,
      title,
      titleEm: '',
      desc: summarizeContentBlocks(content),
      duration: `~${minutesPerBlock} phut`,
      totalSubs,
      currentIndex: index + 1,
      content: content.length ? content : [{ type: 'html', html: '' } satisfies ContentBlock],
    };
  });
}

function inferLessonNumber(slug: string) {
  const orderedSlugs = ['vibecode-la-gi', 'tu-ngu-chuyen-nganh', 'cai-dat-moi-truong', 'lam-quen-vscode-cursor', 'lam-quen-claude-code', 'cong-cu-website-huu-ich', 'cach-prompt-cho-ai', 'khi-ai-code-sai', 'tao-skills-va-workflow', 'deploy-va-tracking'];
  const index = orderedSlugs.indexOf(slug);
  return index >= 0 ? index + 1 : 1;
}

function getPreviewHref(previewToken: string, block: number) {
  return `/vibecode/preview/${previewToken}?block=${block}`;
}
