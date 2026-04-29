'use client';

import { useState, useEffect, useCallback, type MouseEvent } from 'react';
import { Prompt } from '../../lib/prompts-types';

interface PromptPopupProps {
  isOpen: boolean;
  prompt: Prompt | null;
  promptIds: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (prompt: Prompt, index: number) => void;
}

export default function PromptPopup({
  isOpen,
  prompt,
  promptIds,
  currentIndex,
  onClose,
  onNavigate,
}: PromptPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

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
      onNavigate(promptIds[currentIndex - 1] as any, currentIndex - 1);
    }
  }, [currentIndex, promptIds, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < promptIds.length - 1) {
      onNavigate(promptIds[currentIndex + 1] as any, currentIndex + 1);
    }
  }, [currentIndex, promptIds, onNavigate]);

  const handleCopyPrompt = useCallback(() => {
    if (prompt) {
      navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [prompt]);

  const renderPromptWithSyntax = (text: string) => {
    return text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\[([^\]]+)\]/g, '<span class="val">[$1]</span>')
      .replace(/(Act as|Tech stack:|Task:|Requirements:|Rules:|Format:|Please provide|Keep it)/g, '<span class="kw">$1</span>');
  };

  if (!isVisible || !prompt) return null;

  return (
    <div
      className={`popup-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="popup-box">
        <div className="popup-header">
          <div className="popup-header-left">
            <span className="popup-num">{prompt.num}</span>
            {prompt.hot && <span className="popup-hot-badge">HOT</span>}
            {prompt.isNew && <span className="popup-tool-badge">MỚI</span>}
            <span className="popup-cat-badge">{prompt.categoryLabel}</span>
            {prompt.tools.map((tool) => (
              <span key={tool} className="popup-tool-badge">{tool}</span>
            ))}
          </div>
          <button className="popup-close" onClick={onClose}>✕</button>
        </div>

        <div className="popup-body">
          <div className="popup-title">{prompt.title}</div>
          <div className="popup-desc">{prompt.desc}</div>

          <div className="popup-prompt-block">
            <div className="popup-prompt-block-header">
              <span className="popup-prompt-lang">Prompt</span>
              <button className="popup-copy-btn" onClick={handleCopyPrompt}>
                {copied ? 'Đã copy ✓' : 'Copy'}
              </button>
            </div>
            <pre
              className="popup-prompt-text"
              dangerouslySetInnerHTML={{ __html: renderPromptWithSyntax(prompt.prompt) }}
            />
          </div>

          {prompt.vars && prompt.vars.length > 0 && (
            <div className="popup-vars">
              <div className="popup-vars-label">✳ Biến cần thay thế</div>
              {prompt.vars.map((v, idx) => (
                <div key={idx} className="popup-var-row">
                  <span className="popup-var-name">{v.name}</span>
                  <span className="popup-var-desc">{v.desc}</span>
                </div>
              ))}
            </div>
          )}

          {prompt.insight && (
            <div
              className="popup-insight"
              dangerouslySetInnerHTML={{ __html: prompt.insight }}
            />
          )}
        </div>

        <div className="popup-footer">
          <span className="popup-meta">{prompt.meta}</span>
          <div className="popup-actions">
            <button
              className="popup-nav-btn"
              onClick={handlePrev}
              disabled={currentIndex <= 0}
            >
              ← Trước
            </button>
            <button
              className="popup-nav-btn"
              onClick={handleNext}
              disabled={currentIndex >= promptIds.length - 1}
            >
              Tiếp →
            </button>
            <button className="btn-primary" style={{ fontSize: '11px', padding: '6px 14px' }} onClick={handleCopyPrompt}>
              {copied ? 'Đã copy ✓' : 'Copy prompt →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
