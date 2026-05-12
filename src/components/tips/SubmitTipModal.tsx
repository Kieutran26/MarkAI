import { useState, useEffect, useCallback, type MouseEvent } from 'react';

interface SubmitTipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubmitTipModal({ isOpen, onClose }: SubmitTipModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [nickname, setNickname] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || !category) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/tips/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, category, nickname }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setContent('');
          setCategory('');
          setNickname('');
          onClose();
        }, 2000);
      } else {
        alert('Có lỗi xảy ra, vui lòng thử lại sau.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Có lỗi kết nối, vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`popup-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(13,13,13,.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
        transition: 'opacity 0.2s',
      }}
    >
      <div
        className="modal-container"
        style={{
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          width: '100%',
          maxWidth: '500px',
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid var(--border)',
            background: 'var(--bg2)',
          }}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] bg-ink text-bg px-2 py-0.5 tracking-tighter">SUGGESTION</span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-tight">Submit tip của bạn</span>
          </div>
          <button
            onClick={onClose}
            className="hover:text-ink transition-colors"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '20px',
              color: 'var(--muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <div style={{ padding: '1.5rem' }}>
          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-serif text-xl mb-2">Cảm ơn bạn!</h3>
              <p className="font-sans text-sm text-ink2">Tip của bạn đã được gửi đi và chờ review.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="font-mono text-[10px] text-muted uppercase mb-1.5 block">Nội dung tip</label>
                <textarea
                  className="w-full bg-bg2 border border-border p-3 font-sans text-sm focus:border-ink outline-none transition-colors resize-none"
                  placeholder="Mô tả tip hoặc dán link Docs/Notion nếu nội dung dài..."
                  rows={4}
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <p className="font-mono text-[11px] mt-2 flex items-start gap-1.5 leading-relaxed bg-accent/5 p-2 border-l-2 border-accent">
                  <span className="text-accent">✳</span>
                  <span className="text-ink font-medium">Tips dài? Hãy dán link Google Docs/Notion để mình dễ review nhé. Nhớ mở Public nữa nha.</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] text-muted uppercase mb-1.5 block">Danh mục</label>
                  <select
                    className="w-full bg-bg2 border border-border p-2 font-sans text-[13px] focus:border-ink outline-none transition-colors appearance-none"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath stroke='%23888' stroke-width='1.2' d='m1 1 4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                    }}
                  >
                    <option value="">Chọn...</option>
                    <option>Vibecode</option>
                    <option>Workflow</option>
                    <option>Deploy</option>
                    <option>AI Tools</option>
                    <option>Prompt</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] text-muted uppercase mb-1.5 block">Nickname</label>
                  <input
                    type="text"
                    className="w-full bg-bg2 border border-border p-2 font-sans text-[13px] focus:border-ink outline-none transition-colors"
                    placeholder="Để trống = ẩn danh"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 disabled:opacity-50 font-mono text-[12px] font-bold"
                >
                  {isSubmitting ? 'ĐANG GỬI...' : 'SUBMIT TIP →'}
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 opacity-60">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                  <p className="font-mono text-[10px] text-muted">
                    Tips được chọn sẽ credit tên bạn.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
