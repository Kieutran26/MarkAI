import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTermViewMode, type GlossaryTerm, type TermGroup } from '../../lib/glossary';

interface GlossaryTermModalProps {
  term: GlossaryTerm | null;
  isOpen: boolean;
  getTermName: (id: string) => string;
  onClose: () => void;
  onNext?: () => void;
}

const badgeClasses: Record<TermGroup, string> = {
  code: 'bg-[var(--ink)] text-[var(--bg)]',
  design: 'bg-[var(--glossary-design)] text-white',
  infra: 'bg-[var(--glossary-infra)] text-white',
  data: 'bg-[var(--glossary-data)] text-white',
  ai: 'bg-[var(--accent)] text-white',
  workflow: 'bg-[var(--ink2)] text-[var(--bg)]',
};

const badgeLabels: Record<TermGroup, string> = {
  code: 'Code',
  design: 'Design',
  infra: 'Hạ tầng',
  data: 'Data',
  ai: 'AI',
  workflow: 'Workflow',
};

export default function GlossaryTermModal({ term, isOpen, getTermName, onClose, onNext }: GlossaryTermModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !term) return null;

  const viewMode = getTermViewMode(term);

  return (
    <div className="glossary-modal-overlay" role="dialog" aria-modal="true" aria-labelledby={`glossary-modal-${term.id}`} onClick={(event) => event.target === event.currentTarget && onClose()}>
      <div className="glossary-modal-box border border-ink bg-[var(--bg)]">
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Xem nhanh</p>
            <h2 id={`glossary-modal-${term.id}`} className="mt-2 font-serif text-[2rem] leading-[0.95]">{term.name}</h2>
            <p className="mt-2 font-mono text-[11px] tracking-[0.03em] text-muted">{term.nameEn}</p>
          </div>
          <button type="button" onClick={onClose} className="font-mono text-[12px] text-muted transition-colors hover:text-ink">Đóng ✕</button>
        </div>

        <div className="space-y-5 px-5 py-5">
          <div className="flex flex-wrap gap-[0.35rem]">
            {term.groups.map((group) => (
              <span key={group} className={`px-[7px] py-[2px] font-mono text-[9px] uppercase tracking-[0.04em] ${badgeClasses[group]}`}>
                {badgeLabels[group]}
              </span>
            ))}
          </div>

          <p 
            className="glossary-body text-[15px] leading-[1.8] text-ink2"
            dangerouslySetInnerHTML={{ __html: term.definition }}
          />

          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Ví dụ thực tế</p>
            <div 
              className="border-l-2 border-l-accent bg-bg2 px-4 py-3 font-mono text-[12px] leading-[1.75] text-ink2"
              dangerouslySetInnerHTML={{ __html: term.example }}
            />
          </div>

          {term.related?.length ? (
            <div className="flex flex-wrap items-center gap-[0.45rem]">
              <span className="font-mono text-[10px] tracking-[0.04em] text-muted">Liên quan</span>
              {term.related.map((relatedId) => (
                <a key={relatedId} href={`#term-${relatedId}`} onClick={onClose} className="border border-border bg-[var(--bg)] px-2 py-[2px] font-mono text-[10px] text-muted transition-colors hover:border-ink hover:text-ink">
                  {getTermName(relatedId)}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
            {viewMode === 'modal' ? 'Thuật ngữ cơ bản' : 'Term ngắn gọn nên mở popup'}
          </span>
          {viewMode === 'modal' && onNext ? (
            <button
              onClick={onNext}
              className="inline-flex items-center border border-[var(--ink)] bg-[var(--ink)] px-[10px] py-[7px] font-mono text-[10px] uppercase tracking-[0.04em] text-[var(--bg)] no-underline transition-colors hover:border-accent hover:bg-accent hover:text-[var(--ink)] active:border-accent active:bg-accent active:text-[var(--ink)]"
            >
              Sang từ tiếp theo →
            </button>
          ) : (
            <Link
              to={`/tu-dien-thuat-ngu/${term.id}`}
              className="inline-flex items-center border border-[var(--ink)] bg-[var(--ink)] px-[10px] py-[7px] font-mono text-[10px] uppercase tracking-[0.04em] text-[var(--bg)] no-underline transition-colors hover:border-accent hover:bg-accent hover:text-[var(--ink)] active:border-accent active:bg-accent active:text-[var(--ink)]"
            >
              Mở trang riêng →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

