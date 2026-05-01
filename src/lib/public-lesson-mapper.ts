import type { PublicLessonPayload } from './public-lesson-api';
import { getContentBlocksFromStoredBlocks, summarizeContentBlocks } from './reader-content';
import type { ContentBlock, SubLessonFull } from './subLessons';

export type PublicOverviewModule = {
  id: string;
  slug: string;
  moduleCode: string;
  title: string;
  summary: string;
  estimatedMinutes: number;
};

export function mapPublicLessonToSubLessons(payload: PublicLessonPayload): SubLessonFull[] {
  const lessonNumber = payload.lesson.sortOrder || inferLessonNumber(payload.lesson.slug);
  const totalSubs = payload.lesson.modules.length;

  return payload.lesson.modules.map((module, index) => {
    const content = getContentBlocksFromStoredBlocks(module.blocks);

    return {
      id: module.moduleCode || `${lessonNumber}.${index + 1}`,
      slug: module.slug,
      lessonSlug: payload.lesson.slug,
      lessonId: lessonNumber,
      lessonTitle: payload.lesson.title,
      lessonTitleEm: '',
      prevSlug: index > 0 ? payload.lesson.modules[index - 1]?.slug ?? null : null,
      nextSlug: index < totalSubs - 1 ? payload.lesson.modules[index + 1]?.slug ?? null : null,
      prevTitle: index > 0 ? payload.lesson.modules[index - 1]?.title ?? null : null,
      nextTitle: index < totalSubs - 1 ? payload.lesson.modules[index + 1]?.title ?? null : null,
      eyebrow: module.moduleCode || `Muc ${index + 1}`,
      title: module.title,
      titleEm: '',
      desc: module.summary || summarizeBlocks(module.blocks),
      duration: `~${Math.max(1, module.estimatedMinutes || 1)} phut`,
      totalSubs,
      currentIndex: index + 1,
      content: content.length ? content : [{ type: 'html', html: '' } satisfies ContentBlock],
    };
  });
}

export function mapPublicLessonToOverviewModules(payload: PublicLessonPayload): PublicOverviewModule[] {
  return payload.lesson.modules.map((module) => ({
    id: module.id,
    slug: module.slug,
    moduleCode: module.moduleCode,
    title: module.title,
    summary: module.summary || summarizeBlocks(module.blocks),
    estimatedMinutes: Math.max(1, module.estimatedMinutes || 1),
  }));
}

export function findSubLessonFromSlug(subLessons: SubLessonFull[], subSlug: string) {
  return subLessons.find((item) => item.slug === subSlug) ?? null;
}

function summarizeBlocks(blocks: Array<{ contentJson: Record<string, unknown> }>) {
  const content = getContentBlocksFromStoredBlocks(blocks.map((block) => ({ title: null, contentJson: block.contentJson })));
  return summarizeContentBlocks(content);
}

function inferLessonNumber(slug: string) {
  const orderedSlugs = [
    'vibecode-la-gi',
    'tu-ngu-chuyen-nganh',
    'cai-dat-moi-truong',
    'lam-quen-vscode-cursor',
    'lam-quen-claude-code',
    'cong-cu-website-huu-ich',
    'cach-prompt-cho-ai',
    'khi-ai-code-sai',
    'tao-skills-va-workflow',
    'deploy-va-tracking',
  ];
  const index = orderedSlugs.indexOf(slug);
  return index >= 0 ? index + 1 : 1;
}
