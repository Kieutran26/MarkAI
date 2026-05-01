import type { ContentBlock } from './subLessons';

type StoredDbBlock = {
  title: string | null;
  contentJson: Record<string, unknown>;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isStructuredContentBlock(value: unknown): value is ContentBlock {
  return isRecord(value) && typeof value.type === 'string';
}

export function getContentBlocksFromContentJson(contentJson: Record<string, unknown>): ContentBlock[] {
  const structuredBlocks = contentJson.blocks;
  if (Array.isArray(structuredBlocks) && structuredBlocks.every(isStructuredContentBlock)) {
    return structuredBlocks;
  }

  if (typeof contentJson.html === 'string' && contentJson.html.trim()) {
    return [{ type: 'html', html: contentJson.html }];
  }

  return [];
}

export function getContentBlocksFromStoredBlocks(blocks: StoredDbBlock[]): ContentBlock[] {
  return blocks.flatMap((block) => getContentBlocksFromContentJson(block.contentJson ?? {}));
}

export function summarizeContentBlocks(content: ContentBlock[]) {
  for (const block of content) {
    const text = extractTextFromBlock(block);
    if (text) {
      return truncateText(text, 160);
    }
  }

  return 'Dang hien thi noi dung lay tu database.';
}

function extractTextFromBlock(block: ContentBlock) {
  switch (block.type) {
    case 'p':
    case 'h3':
    case 'h4':
      return stripHtml(block.text);
    case 'html':
      return stripHtml(block.html);
    case 'insight':
      return `${stripHtml(block.label)} ${stripHtml(block.text)}`.trim();
    case 'infographic':
      return `${stripHtml(block.label)} ${block.steps.map((step) => `${step.title} ${step.desc}`).join(' ')} ${stripHtml(block.aside.title)} ${stripHtml(block.aside.desc)}`.trim();
    case 'usecases':
      return block.items.map((item) => `${item.title} ${item.desc}`).join(' ');
    case 'grid2':
      return block.items.map((item) => `${item.label} ${item.title} ${item.desc}`).join(' ');
    case 'compare':
      return block.rows.map((row) => `${row.left} ${row.right}`).join(' ');
    case 'divider':
      return '';
    default:
      return '';
  }
}

function stripHtml(value: string) {
  return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function truncateText(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trim()}…`;
}
