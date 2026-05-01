import type { ContentBlock } from './subLessons';

export type TocItem = {
  id: string;
  label: string;
  level: 2 | 3 | 4;
};

export function prepareReaderContent(content: ContentBlock[]) {
  const tocItems: TocItem[] = [];
  let headingIndex = 0;

  const nextId = (label: string) => {
    headingIndex += 1;
    return `${slugifyHeading(label) || 'section'}-${headingIndex}`;
  };

  const blocks = content.map((block) => {
    if (block.type === 'h3' || block.type === 'h4') {
      const id = nextId(block.text);
      tocItems.push({
        id,
        label: stripInlineHtml(block.text),
        level: block.type === 'h3' ? 3 : 4,
      });
      return { ...block, id };
    }

    if (block.type !== 'html' || typeof DOMParser === 'undefined') {
      return block;
    }

    const doc = new DOMParser().parseFromString(block.html, 'text/html');
    doc.querySelectorAll('h2, h3').forEach((heading) => {
      const label = stripInlineHtml(heading.textContent || '');
      if (!label) return;
      const id = nextId(label);
      heading.id = id;
      tocItems.push({
        id,
        label,
        level: heading.tagName === 'H2' ? 2 : 3,
      });
    });

    return { ...block, html: doc.body.innerHTML };
  });

  return { content: blocks, tocItems };
}

function stripInlineHtml(value: string) {
  return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function slugifyHeading(value: string) {
  return stripInlineHtml(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
