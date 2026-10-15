import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  VIBECODE_CASES,
  CASE_CATEGORIES,
  CaseCategory,
  VibecodeCase
} from '../../lib/vibecodeCases';
import CaseDetailModal from './CaseDetailModal';

export default function VibecodePlaybook() {
  const [activeCategory, setActiveCategory] = useState<CaseCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<VibecodeCase | null>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: VIBECODE_CASES.length };
    VIBECODE_CASES.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered cases
  const filteredCases = useMemo(() => {
    return VIBECODE_CASES.filter((c) => {
      // Category match
      if (activeCategory !== 'all' && c.category !== activeCategory) {
        return false;
      }
      // Difficulty match
      if (difficultyFilter !== 'all' && c.difficulty !== difficultyFilter) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inTitle = c.title.toLowerCase().includes(query);
        const inSubtitle = c.subtitle.toLowerCase().includes(query);
        const inProblem = c.problem.toLowerCase().includes(query);
        const inTools = c.tools.some((t) => t.toLowerCase().includes(query));
        const inDeliverable = c.deliverable.toLowerCase().includes(query);
        return inTitle || inSubtitle || inProblem || inTools || inDeliverable;
      }
      return true;
    });
  }, [activeCategory, difficultyFilter, searchQuery]);

  return (
    <section id="case-playbook" className="pt-16 sm:pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#DAD8D2]">
          <div>
            <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-3 flex items-center gap-2">
              <span>(02) Vibecode Playbook</span>
              <span>·</span>
              <span className="text-[#E8772E]">Học theo bài toán thực tế</span>
            </div>

            <h2 className="m-0 text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
              Học theo tình huống.{' '}
              <span className="font-light italic text-[#E8772E]">
                Làm xong trong 20 phút.
              </span>
            </h2>

            <p className="mt-4 text-[16px] sm:text-[17px] text-[#55534F] max-w-[620px] leading-relaxed">
              Không cần học lý thuyết tuần tự từ bài 01 đến 10. Marketer đang cần giải quyết vấn đề gì, bấm vào đúng case đó để lấy blueprint, copy prompt và làm ra sản phẩm thật.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">
              Số lượng:
            </span>
            <span className="font-[family-name:var(--mono)] text-[13px] font-semibold text-[#141414] bg-white px-3 py-1.5 rounded-full border border-[#E6E4DE]">
              {filteredCases.length} / {VIBECODE_CASES.length} cases
            </span>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="mt-8 space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CASE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#141414] text-white'
                      : 'bg-white text-[#55534F] border border-[#E6E4DE] hover:border-[#141414] hover:text-[#141414]'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.shortName}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-[family-name:var(--mono)] ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#F1EFEA] text-[#8A8883]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub Filters: Search & Difficulty */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[14px] text-[#8A8883]">
                🔍
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm case: landing page, form, calculator, fix bug, domain..."
                className="w-full pl-9 pr-8 py-2 bg-white border border-[#E6E4DE] rounded-full text-[13px] text-[#141414] placeholder-[#A6A49F] focus:outline-none focus:border-[#141414] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] text-[#8A8883] hover:text-[#141414]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Level Pills */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto overflow-x-auto">
              <span className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883] uppercase mr-1">
                Độ khó:
              </span>
              {['all', 'Zero Code', 'Cơ bản', 'Nâng cao'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setDifficultyFilter(lvl)}
                  className={`px-3 py-1 rounded-full text-[12px] font-medium transition-colors cursor-pointer ${
                    difficultyFilter === lvl
                      ? 'bg-[#141414] text-white'
                      : 'bg-white text-[#55534F] border border-[#E6E4DE] hover:border-[#141414]'
                  }`}
                >
                  {lvl === 'all' ? 'Tất cả' : lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Cards Grid - Completely Flat (Không có hiệu ứng nổi) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E6E4DE] hover:border-[#141414] p-6 flex flex-col justify-between transition-colors duration-150 group"
            >
              <div>
                {/* Card Top Meta: No shadow, clean flat design */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--mono)] text-[11px] font-bold text-[#E8772E]">
                      {item.number}
                    </span>
                    <span className="text-[#CFCDC6]">·</span>
                    <span className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883]">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="font-[family-name:var(--mono)] text-[11px] text-[#55534F] font-medium">
                      ⏱ {item.timeEstimate}
                    </span>
                  </div>
                </div>

                {/* Badge if present */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#141414] text-white">
                    {item.difficulty}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#FDEEE3] text-[#C85F1C]">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-[18px] leading-[1.3] text-[#141414] group-hover:text-[#E8772E] transition-colors m-0">
                  {item.title}
                </h3>

                {/* Subtitle / Problem */}
                <p className="mt-2 text-[14px] leading-relaxed text-[#55534F] line-clamp-2">
                  {item.subtitle}
                </p>

                {/* Output Deliverable - Flat Callout */}
                <div className="mt-4 p-3.5 bg-[#FAF9F6] border-l-2 border-[#E8772E] rounded-r-xl border-y border-r border-[#E6E4DE] text-[12.5px] text-[#141414] leading-snug">
                  <span className="font-[family-name:var(--mono)] text-[10px] text-[#E8772E] uppercase font-bold block mb-0.5">
                    Sản phẩm làm ra:
                  </span>
                  {item.deliverable}
                </div>

                {/* Tools Stack Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-[family-name:var(--mono)] text-[11px] font-medium text-[#716F68] bg-[#F6F5F1] px-2 py-0.5 rounded border border-[#EAE8E1]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions - Flat */}
              <div className="mt-6 pt-4 border-t border-[#F1EFEA] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCase(item)}
                  className="text-[12.5px] font-medium text-[#55534F] hover:text-[#141414] underline underline-offset-4 cursor-pointer transition-colors"
                >
                  Blueprint & Prompt
                </button>

                <Link
                  to={item.targetSlug}
                  className="bg-[#141414] hover:bg-[#E8772E] text-white px-4 py-1.5 rounded-full text-[12.5px] font-medium transition-colors flex items-center gap-1 shrink-0"
                >
                  Làm case này →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCases.length === 0 && (
          <div className="mt-12 text-center py-16 bg-white rounded-2xl border border-[#E6E4DE]">
            <div className="text-[32px] mb-3">🔍</div>
            <h4 className="font-semibold text-[17px] text-[#141414]">
              Không tìm thấy case nào phù hợp
            </h4>
            <p className="mt-1 text-[14px] text-[#6B6B6B]">
              Hãy thử tìm với từ khóa khác hoặc đặt lại bộ lọc.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setDifficultyFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#141414] text-white rounded-full text-[13px] font-medium hover:bg-[#E8772E] transition-colors cursor-pointer"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}
      </div>

      {/* Case Detail Modal - Flat design */}
      <CaseDetailModal
        item={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </section>
  );
}
