import { useState, useEffect, useCallback, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Tip } from '../../lib/types';
import { shouldShowFullTipLink } from '../../lib/tips-data';

interface TipPopupProps {
  isOpen: boolean;
  tip: Tip | null;
  shortTips: Tip[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (tip: Tip, index: number) => void;
}

export default function TipPopup({
  isOpen,
  tip,
  shortTips,
  currentIndex,
  onClose,
  onNavigate,
}: TipPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 200);
      document.body.style.overflow = '';

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(shortTips[currentIndex - 1], currentIndex - 1);
    }
  }, [currentIndex, shortTips, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < shortTips.length - 1) {
      onNavigate(shortTips[currentIndex + 1], currentIndex + 1);
    }
  }, [currentIndex, shortTips, onNavigate]);

  if (!isVisible || !tip) return null;

  return (
    <div
      className={`popup-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 500,
        background: 'rgba(13,13,13,.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
        transition: 'opacity 0.18s',
      }}
    >
      <div
        style={{
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          width: '100%',
          maxWidth: '580px',
          transform: isOpen ? 'translateY(0)' : 'translateY(14px)',
          transition: 'transform 0.2s',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.9rem 1.4rem',
            borderBottom: '1px solid var(--border)',
            background: 'var(--bg2)',
          }}
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[10px] text-muted">{tip.id}</span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                background: 'var(--ink)',
                color: 'var(--bg)',
                padding: '2px 8px',
                letterSpacing: '0.04em',
              }}
            >
              {tip.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '15px',
              color: 'var(--muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.15s',
              padding: '2px 6px',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <div style={{ padding: '2rem 1.8rem' }}>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.35rem',
              lineHeight: 1.3,
              marginBottom: '1.2rem',
            }}
          >
            {tip.title}
          </div>
          <div
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'var(--ink2)',
              marginBottom: '1.1rem',
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: tip.popupContent?.content || '' }} />
          </div>
          {tip.popupContent?.code && (
            <pre
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                background: 'var(--ink)',
                color: 'var(--code-value)',
                padding: '0.9rem 1rem',
                display: 'block',
                marginBottom: '1.1rem',
                lineHeight: 1.65,
                border: '1px solid var(--surface-3)',
                overflowX: 'auto',
              }}
            >
              {tip.popupContent.code}
            </pre>
          )}
          {tip.popupContent?.insight && (
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                borderLeft: '2px solid var(--accent)',
                padding: '0.6rem 0.9rem',
                lineHeight: 1.65,
                color: 'var(--ink2)',
                background: 'var(--bg2)',
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: tip.popupContent.insight }} />
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.9rem 1.8rem',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '0.8rem',
          }}
        >
          <span
            className="font-mono text-[10px] text-muted"
            style={{ letterSpacing: '0.03em' }}
          >
            {tip.categoryLabel} · {tip.date} · {tip.readTime}
          </span>
          <div className="flex gap-2 items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex <= 0}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--muted)',
                background: 'none',
                border: '1px solid var(--border)',
                padding: '5px 12px',
                cursor: currentIndex <= 0 ? 'not-allowed' : 'pointer',
                transition: 'color 0.15s, border-color 0.15s',
                opacity: currentIndex <= 0 ? 0.3 : 1,
              }}
            >
              ← Trước
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= shortTips.length - 1}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--muted)',
                background: 'none',
                border: '1px solid var(--border)',
                padding: '5px 12px',
                cursor: currentIndex >= shortTips.length - 1 ? 'not-allowed' : 'pointer',
                transition: 'color 0.15s, border-color 0.15s',
                opacity: currentIndex >= shortTips.length - 1 ? 0.3 : 1,
              }}
            >
              Tiếp →
            </button>
            {shouldShowFullTipLink(tip) && (
              <Link
                to={`/tips/${tip.slug}`}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '11px',
                  color: 'var(--bg)',
                  background: 'var(--ink)',
                  border: 'none',
                  padding: '6px 14px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'background 0.15s',
                }}
              >
                Bài đầy đủ →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
