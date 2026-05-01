import type { TocItem } from '../../lib/reader-outline';

interface ReaderTableOfContentsProps {
  tocItems: TocItem[];
  activeTocId: string | null;
}

export default function ReaderTableOfContents({ tocItems, activeTocId }: ReaderTableOfContentsProps) {
  if (!tocItems.length) return null;

  return (
    <aside className="reader-toc" aria-label="Table of contents">
      <p className="reader-toc-label">Table of contents</p>
      <div className="reader-toc-list">
        {tocItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`reader-toc-link level-${item.level} ${activeTocId === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
