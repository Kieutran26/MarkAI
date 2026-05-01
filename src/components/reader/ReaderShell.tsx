import type { ReactNode } from 'react';
import ReaderTableOfContents from './ReaderTableOfContents';
import type { TocItem } from '../../lib/reader-outline';

interface ReaderShellProps {
  topbar: ReactNode;
  sidebar: ReactNode;
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  tocItems: TocItem[];
  activeTocId: string | null;
  sidebarOpen?: boolean;
  onSidebarClose?: () => void;
  mobileToggle?: ReactNode;
}

export default function ReaderShell({
  topbar,
  sidebar,
  header,
  content,
  footer,
  tocItems,
  activeTocId,
  sidebarOpen = false,
  onSidebarClose,
  mobileToggle,
}: ReaderShellProps) {
  return (
    <div className="reader-page">
      {topbar}
      <div className="reader-layout">
        {sidebar}
        {sidebarOpen && onSidebarClose ? <div className="sidebar-overlay" onClick={onSidebarClose} /> : null}
        <div className="reader-content">
          {header}
          <div className="reader-article-grid">
            {content}
            <ReaderTableOfContents tocItems={tocItems} activeTocId={activeTocId} />
          </div>
          {footer}
        </div>
      </div>
      {mobileToggle}
    </div>
  );
}
