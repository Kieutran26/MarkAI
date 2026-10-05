import React from 'react';
import type { DictionaryCategoryKey } from '../../lib/tuDienTerms';
import { DICTIONARY_CATEGORIES } from '../../lib/tuDienTerms';

interface GlossaryHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filteredCount: number;
  totalCount: number;
  activeCategory: DictionaryCategoryKey | 'all';
  onCategoryChange: (category: DictionaryCategoryKey | 'all') => void;
  categoryCounts: Record<DictionaryCategoryKey | 'all', number>;
}

export default function GlossaryHero({
  searchQuery,
  onSearchChange,
  filteredCount,
  totalCount,
  activeCategory,
  onCategoryChange,
  categoryCounts,
}: GlossaryHeroProps) {
  const categoriesList: Array<{ key: DictionaryCategoryKey | 'all'; name: string; dot: string }> = [
    { key: 'all', name: 'Tất cả', dot: '#CFCDC6' },
    { key: 'code', name: DICTIONARY_CATEGORIES.code.name, dot: DICTIONARY_CATEGORIES.code.dot },
    { key: 'design', name: DICTIONARY_CATEGORIES.design.name, dot: DICTIONARY_CATEGORIES.design.dot },
    { key: 'infra', name: DICTIONARY_CATEGORIES.infra.name, dot: DICTIONARY_CATEGORIES.infra.dot },
    { key: 'data', name: DICTIONARY_CATEGORIES.data.name, dot: DICTIONARY_CATEGORIES.data.dot },
    { key: 'ai', name: DICTIONARY_CATEGORIES.ai.name, dot: DICTIONARY_CATEGORIES.ai.dot },
    { key: 'workflow', name: DICTIONARY_CATEGORIES.workflow.name, dot: DICTIONARY_CATEGORIES.workflow.dot },
  ];

  return (
    <section data-screen-label="Hero" className="mx-auto max-w-[1280px] px-6 pt-16 lg:px-8 lg:pt-20">
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] text-[#8A8883]">
        <span>Từ điển chuyên ngành</span>
        <span>Tiếng Việt · cho dân Marketing</span>
        <span>2026</span>
      </div>

      <div className="mt-12 grid grid-cols-1 items-end gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <h1 className="m-0 font-sans text-[clamp(42px,6vw,84px)] font-semibold leading-[1.02] tracking-[-0.055em] text-[#141414] text-balance">
          Từ điển chuyên ngành mà dân Marketer{' '}
          <span className="font-light italic text-[#E8772E]">phải biết.</span>
        </h1>

        <div className="grid grid-cols-3 border-t border-[#141414] pt-4">
          <div className="pr-4">
            <div className="font-sans text-[clamp(32px,3.5vw,52px)] font-light leading-none tracking-[-0.05em] text-[#141414]">
              {totalCount}
            </div>
            <div className="mt-2 font-sans text-[13px] text-[#6B6B6B]">Thuật ngữ</div>
          </div>
          <div className="pr-4">
            <div className="font-sans text-[clamp(32px,3.5vw,52px)] font-light leading-none tracking-[-0.05em] text-[#141414]">
              6
            </div>
            <div className="mt-2 font-sans text-[13px] text-[#6B6B6B]">Nhóm chủ đề</div>
          </div>
          <div>
            <div className="font-sans text-[clamp(32px,3.5vw,52px)] font-light leading-none tracking-[-0.05em] text-[#E8772E]">
              100%
            </div>
            <div className="mt-2 font-sans text-[13px] text-[#6B6B6B]">Tiếng Việt</div>
          </div>
        </div>
      </div>

      <p className="mt-8 max-w-[620px] font-sans text-[17px] leading-[1.6] text-[#3A3935] text-pretty">
        Những thuật ngữ bạn sẽ gặp khi làm web với AI, khi nói chuyện với designer hay developer — giải thích ngắn, bằng tiếng Việt, theo góc nhìn Marketing.
      </p>

      {/* Pill Search Input */}
      <div className="mt-10 flex max-w-[720px] items-center gap-3.5 rounded-full border border-[#E6E4DE] bg-white px-5 py-2 transition-colors focus-within:border-[#141414]">
        <span className="font-mono text-[13px] font-medium text-[#E8772E]">tìm</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Gõ thuật ngữ, ví dụ: padding, deploy, prompt…"
          className="min-w-0 flex-1 border-none bg-transparent py-2 font-sans text-[15px] text-[#141414] outline-none placeholder:text-[#8A8883]"
        />
        <span className="shrink-0 font-mono text-[12px] text-[#8A8883]">
          {filteredCount} / {totalCount}
        </span>
      </div>

      {/* Categories Pills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {categoriesList.map((cat) => {
          const isActive = activeCategory === cat.key;
          const count = categoryCounts[cat.key] ?? 0;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => onCategoryChange(cat.key)}
              className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-[9px] font-sans text-[14px] font-medium transition-all ${
                isActive
                  ? 'border-[#141414] bg-[#141414] text-white'
                  : 'border-[#E6E4DE] bg-white text-[#141414] hover:border-[#141414]'
              }`}
            >
              <span
                className="h-[7px] w-[7px] shrink-0 rounded-full"
                style={{ backgroundColor: cat.dot }}
              />
              <span>{cat.name}</span>
              <span className="font-mono text-[11px] opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
