import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VibecodeCase } from '../../lib/vibecodeCases';

interface CaseDetailModalProps {
  item: VibecodeCase | null;
  onClose: () => void;
}

export default function CaseDetailModal({ item, onClose }: CaseDetailModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dimmed Backdrop with subtle blur */}
      <div
        className="fixed inset-0 bg-[#141414]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card - Flat */}
      <div className="relative w-full max-w-3xl bg-[#F6F5F1] text-[#141414] rounded-3xl border border-[#CFCDC6] overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col animate-in fade-in duration-150">
        {/* Top Header Bar */}
        <div className="bg-white border-b border-[#E6E4DE] px-6 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--mono)] text-[12px] bg-[#E8772E] text-white px-2.5 py-0.5 rounded font-bold">
              {item.number}
            </span>
            <span className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">
              {item.categoryLabel}
            </span>
            <span className="text-[12px] text-[#CFCDC6]">·</span>
            <span className="font-[family-name:var(--mono)] text-[12px] text-[#55534F]">
              ⏱ {item.timeEstimate}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#E6E4DE] hover:border-[#141414] bg-white text-[#55534F] hover:text-[#141414] flex items-center justify-center transition-colors text-[14px]"
            aria-label="Đóng modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Title Area */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-[#141414] text-white">
                {item.difficulty}
              </span>
              {item.badge && (
                <span className="px-2.5 py-0.5 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-[#FDEEE3] text-[#C85F1C]">
                  {item.badge}
                </span>
              )}
            </div>

            <h2 className="text-[24px] sm:text-[30px] font-semibold leading-[1.2] tracking-[-0.035em] text-[#141414] m-0">
              {item.title}
            </h2>

            <p className="mt-2 text-[15px] sm:text-[16px] text-[#55534F] leading-relaxed">
              {item.subtitle}
            </p>
          </div>

          {/* Tools Required */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#E6E4DE]">
            <span className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883] uppercase tracking-wider">
              Công cụ thực hiện:
            </span>
            {item.tools.map((t, idx) => (
              <span
                key={idx}
                className="bg-white border border-[#E6E4DE] text-[#141414] text-[12px] font-medium px-2.5 py-0.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#E6E4DE] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2 font-bold text-[12px] text-[#E8772E] tracking-wider uppercase font-[family-name:var(--mono)]">
                <span>⚠️</span> Vấn đề thực tế
              </div>
              <p className="text-[14px] leading-relaxed text-[#55534F] m-0">
                {item.problem}
              </p>
            </div>

            <div className="bg-white border border-[#E6E4DE] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2 font-bold text-[12px] text-[#141414] tracking-wider uppercase font-[family-name:var(--mono)]">
                <span>💡</span> Giải pháp Vibecode
              </div>
              <p className="text-[14px] leading-relaxed text-[#55534F] m-0">
                {item.solution}
              </p>
            </div>
          </div>

          {/* Output Deliverable */}
          <div className="p-4 bg-white border-l-2 border-[#E8772E] rounded-r-2xl border-y border-r border-[#E6E4DE]">
            <span className="font-[family-name:var(--mono)] text-[11px] text-[#E8772E] uppercase font-bold tracking-wider block mb-1">
              🎯 Sản phẩm làm ra:
            </span>
            <span className="text-[15px] font-semibold text-[#141414]">
              {item.deliverable}
            </span>
          </div>

          {/* Step-by-Step Blueprint */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[18px] text-[#141414] tracking-tight m-0">
                Lộ trình 3 bước thực hiện nhanh
              </h3>
              <span className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">
                {item.steps.length} bước
              </span>
            </div>

            <div className="space-y-4">
              {item.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E6E4DE] rounded-2xl p-5 relative"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#141414] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-[15px] text-[#141414]">
                        {st.step}
                      </div>
                      <p className="mt-1 text-[14px] text-[#55534F] leading-relaxed m-0">
                        {st.action}
                      </p>

                      {st.promptPreview && (
                        <div className="mt-3.5 bg-[#FAF9F6] border border-[#E6E4DE] rounded-xl p-3.5 relative">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-[family-name:var(--mono)] text-[11px] font-bold text-[#E8772E] uppercase">
                              Prompt mẫu copy dùng ngay:
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy(st.promptPreview!, idx)}
                              className="px-2.5 py-1 bg-[#141414] text-white text-[11px] font-medium rounded-full hover:bg-[#E8772E] transition-colors cursor-pointer"
                            >
                              {copiedIndex === idx ? '✓ Đã sao chép!' : 'Sao chép prompt'}
                            </button>
                          </div>
                          <p className="font-[family-name:var(--mono)] text-[12px] text-[#141414] leading-relaxed select-all m-0 bg-white p-2.5 rounded-lg border border-[#EAE8E1]">
                            "{st.promptPreview}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaway Note */}
          <div className="bg-white border-l-2 border-[#141414] p-4 rounded-r-2xl border-y border-r border-[#E6E4DE]">
            <span className="font-bold text-[12px] text-[#141414] block uppercase font-[family-name:var(--mono)] tracking-wider mb-1">
              Bài học rút ra
            </span>
            <p className="text-[14px] text-[#55534F] leading-relaxed m-0">
              {item.keyTakeaway}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-white border-t border-[#E6E4DE] px-6 sm:px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full text-[13px] font-medium text-[#55534F] hover:text-[#141414] border border-[#E6E4DE] hover:border-[#141414] transition-colors"
          >
            Đóng lại
          </button>

          <Link
            to={item.targetSlug}
            onClick={onClose}
            className="bg-[#141414] hover:bg-[#E8772E] text-white px-6 py-2.5 rounded-full text-[13px] font-medium transition-colors"
          >
            Vào bài học chi tiết của case này →
          </Link>
        </div>
      </div>
    </div>
  );
}
