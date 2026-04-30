import { Link } from 'react-router-dom';
import ContentBody from './content/ContentBody';
import ContentHeader from './ContentHeader';
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
        <PreviewSidebar
          current={activeSubLesson}
          lessonSlug={lesson.slug}
          previewToken={previewToken}
          subLessons={subLessons}
        />
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
      <Link to={`/vibecode/${lessonSlug}`} className="topbar-back">← Bài {current.lessonId.toString().padStart(2, '0')}</Link>
      <div className="topbar-context">
        <span className="topbar-badge">Bài {current.lessonId.toString().padStart(2, '0')}</span>
        <span className="topbar-sep">/</span>
        <span className="topbar-title">{current.lessonTitle}</span>
      </div>
      <div className="topbar-progress">
        <div className="topbar-dots">
          {Array.from({ length: current.totalSubs }).map((_, i) => (
            <div key={i} className={`topbar-dot ${i < current.currentIndex - 1 ? 'done' : i === current.currentIndex - 1 ? 'active' : ''}`} />
          ))}
        </div>
        <span className="topbar-prog-text">{current.currentIndex} / {current.totalSubs}</span>
      </div>
      <div className="topbar-nav">
        {prevHref ? <Link to={prevHref} className="topbar-nav-btn">← Trước</Link> : <span className="topbar-nav-btn disabled opacity-35">← Trước</span>}
        {nextHref ? <Link to={nextHref} className="topbar-nav-btn next-active">Đến bài {current.lessonId}.{current.currentIndex + 1} →</Link> : <span className="topbar-nav-btn disabled opacity-35">Hết bài này</span>}
      </div>
    </div>
  );
}

function PreviewSidebar({ current, lessonSlug, previewToken, subLessons }: { current: SubLessonFull; lessonSlug: string; previewToken: string; subLessons: SubLessonFull[] }) {
  return (
    <aside className="reader-sidebar" id="reader-sidebar">
      <div className="sidebar-lesson-header">
        <p className="slh-label">Bài {current.lessonId.toString().padStart(2, '0')} · {current.totalSubs} phần</p>
        <p className="slh-title">{current.lessonTitle}</p>
      </div>
      <p className="sidebar-section-label">Các phần trong bài này</p>
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
        <p className="snl-label">Đây là preview từ Neon</p>
        <Link to={`/vibecode/${lessonSlug}`} className="snl-item">
          <span className="snl-num">→</span>
          <span>So với trang public hiện tại</span>
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
          <span className="cf-dir">← Phần trước</span>
          <span className="cf-title">{current.prevTitle ?? 'Phần trước'}</span>
          <span className="cf-sub">{current.lessonId}.{current.currentIndex - 1} · {current.duration}</span>
        </Link>
      ) : (
        <div className="cf-btn disabled opacity-35 pointer-events-none">
          <span className="cf-dir">← Phần trước</span>
          <span className="cf-title">—</span>
          <span className="cf-sub">Không có phần trước</span>
        </div>
      )}
      {nextHref ? (
        <Link to={nextHref} className="cf-btn cf-btn-next">
          <span className="cf-dir">Phần tiếp theo →</span>
          <span className="cf-title">{current.nextTitle ?? 'Phần tiếp theo'}</span>
          <span className="cf-sub">{current.lessonId}.{current.currentIndex + 1} · {current.duration}</span>
        </Link>
      ) : (
        <Link to={`/vibecode/${lessonSlug}`} className="cf-btn cf-btn-next">
          <span className="cf-dir">So với public →</span>
          <span className="cf-title">Mở bài lesson public hiện tại</span>
          <span className="cf-sub">Đối chiếu layout đang live</span>
        </Link>
      )}
    </div>
  );
}

function mapBlocksToSubLessons(lesson: PreviewLesson): SubLessonFull[] {
  const totalSubs = lesson.blocks.length;
  const minutesPerBlock = Math.max(1, Math.round((lesson.estimatedMinutes || totalSubs || 1) / Math.max(totalSubs, 1)));

  return lesson.blocks.map((block, index) => {
    const title = (block.title || `Phần ${index + 1}`).trim();
    return {
      id: `${inferLessonNumber(lesson.slug)}.${index + 1}`,
      slug: `preview-block-${index + 1}`,
      lessonSlug: lesson.slug,
      lessonId: inferLessonNumber(lesson.slug),
      lessonTitle: lesson.title,
      lessonTitleEm: '',
      prevSlug: index > 0 ? `preview-block-${index}` : null,
      nextSlug: index < totalSubs - 1 ? `preview-block-${index + 2}` : null,
      prevTitle: index > 0 ? lesson.blocks[index - 1]?.title || `Phần ${index}` : null,
      nextTitle: index < totalSubs - 1 ? lesson.blocks[index + 1]?.title || `Phần ${index + 2}` : null,
      eyebrow: title,
      title,
      titleEm: '',
      desc: summarizeHtml(block.contentJson.html),
      duration: `~${minutesPerBlock} phút`,
      totalSubs,
      currentIndex: index + 1,
      content: [{ type: 'html', html: typeof block.contentJson.html === 'string' ? block.contentJson.html : '' } satisfies ContentBlock],
    };
  });
}

function inferLessonNumber(slug: string) {
  const orderedSlugs = ['vibecode-la-gi', 'tu-ngu-chuyen-nganh', 'cai-dat-moi-truong', 'lam-quen-vscode-cursor', 'lam-quen-claude-code', 'cong-cu-website-huu-ich', 'cach-prompt-cho-ai', 'khi-ai-code-sai', 'tao-skills-va-workflow', 'deploy-va-tracking'];
  const index = orderedSlugs.indexOf(slug);
  return index >= 0 ? index + 1 : 1;
}

function summarizeHtml(value: unknown) {
  if (typeof value !== 'string') return 'Đang preview nội dung block từ admin.';
  const plain = value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return plain ? `${plain.slice(0, 160)}${plain.length > 160 ? '…' : ''}` : 'Đang preview nội dung block từ admin.';
}

function getPreviewHref(previewToken: string, block: number) {
  return `/vibecode/preview/${previewToken}?block=${block}`;
}
