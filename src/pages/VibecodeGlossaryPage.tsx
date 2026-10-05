import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../components/glossary/glossary.css';
import AlphaSidebar from '../components/glossary/AlphaSidebar';
import GlossaryContent from '../components/glossary/GlossaryContent';
import GlossaryHero from '../components/glossary/GlossaryHero';
import GlossarySuggestBanner from '../components/glossary/GlossarySuggestBanner';
import GlossaryTermModal from '../components/glossary/GlossaryTermModal';

import { terms, type GlossaryTerm } from '../lib/glossary';
import {
  DICTIONARY_TERMS,
  type DictionaryCategoryKey,
  type DictionaryTermItem,
} from '../lib/tuDienTerms';

export default function VibecodeGlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<DictionaryCategoryKey | 'all'>('all');
  const [activeLetter, setActiveLetter] = useState('A');
  const [scrolled, setScrolled] = useState(false);
  const [activeModalTerm, setActiveModalTerm] = useState<GlossaryTerm | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Từ điển chuyên ngành cho Marketer · markAI.vn';
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<DictionaryCategoryKey | 'all', number> = {
      all: DICTIONARY_TERMS.length,
      code: 0,
      design: 0,
      infra: 0,
      data: 0,
      ai: 0,
      workflow: 0,
    };
    DICTIONARY_TERMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered terms
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return DICTIONARY_TERMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.def.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Group terms by initial letter
  const groups = useMemo(() => {
    const bucket: Record<string, DictionaryTermItem[]> = {};
    filteredItems.forEach((item) => {
      const key = item.letter;
      (bucket[key] = bucket[key] || []).push(item);
    });
    const keys = Object.keys(bucket).sort();
    return keys.map((letter) => ({ letter, items: bucket[letter] }));
  }, [filteredItems]);

  const letters = useMemo(() => {
    return groups.map((g) => ({ letter: g.letter, count: g.items.length }));
  }, [groups]);

  // Sync active letter with initial group
  useEffect(() => {
    if (groups.length > 0 && !groups.some((g) => g.letter === activeLetter)) {
      setActiveLetter(groups[0].letter);
    }
  }, [groups, activeLetter]);

  // Scroll spy for sticky A-Z sidebar and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const root = contentRef.current;
      if (!root) return;
      const els = root.querySelectorAll<HTMLElement>('[id^="L-"]');
      let current = '';
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < 160) {
          current = el.id.slice(2);
        }
      });

      const isScrolled = window.scrollY > 300;
      setScrolled(isScrolled);
      if (current) {
        setActiveLetter(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredItems]);

  const handleLetterClick = (letter: string) => {
    const el = document.getElementById(`L-${letter}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveLetter(letter);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTerm = (item: DictionaryTermItem) => {
    const query = item.term.trim().toLowerCase();
    const existing = terms.find(
      (t) => t.name.toLowerCase() === query || t.id.toLowerCase() === query
    );

    if (existing) {
      setActiveModalTerm(existing);
    } else {
      setActiveModalTerm({
        id: item.term.toLowerCase().replace(/\s+/g, '-'),
        name: item.term,
        nameEn: item.categoryName,
        letter: item.letter,
        groups: [item.category],
        definition: item.def,
        example: `Thuật ngữ thuộc nhóm ${item.categoryName}. Dành riêng cho dân Marketing khi làm việc với AI và dev.`,
        related: [],
      });
    }
  };

  const getTermName = (id: string) => {
    const found = terms.find((t) => t.id === id);
    if (found) return found.name;
    const foundDict = DICTIONARY_TERMS.find(
      (t) => t.term.toLowerCase().replace(/\s+/g, '-') === id
    );
    return foundDict ? foundDict.term : id.toUpperCase();
  };

  const handleNextTerm = () => {
    if (!activeModalTerm || filteredItems.length === 0) return;
    const currentIndex = filteredItems.findIndex(
      (t) => t.term.toLowerCase() === activeModalTerm.name.toLowerCase()
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    handleOpenTerm(filteredItems[nextIndex]);
  };

  return (
    <div className="glossary-page min-h-screen bg-[#F6F5F1] text-[#141414] overflow-x-clip font-sans">
      {/* Hero Section */}
      <GlossaryHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filteredCount={filteredItems.length}
        totalCount={DICTIONARY_TERMS.length}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categoryCounts={categoryCounts}
      />

      {/* Main Glossary Section */}
      <section
        data-screen-label="Glossary"
        className="mt-16 border-t border-[#DAD8D2] pl-0 pr-6 pb-32 lg:pr-8 grid grid-cols-[56px_minmax(0,1fr)] gap-5 lg:gap-10"
      >
        <AlphaSidebar
          letters={letters}
          activeLetter={activeLetter}
          onLetterClick={handleLetterClick}
        />
        <GlossaryContent
          groups={groups}
          searchQuery={searchQuery}
          onOpenTerm={handleOpenTerm}
          contentRef={contentRef}
        />
      </section>

      {/* Suggest Section */}
      <GlossarySuggestBanner />

      {/* Floating Back to Top Button */}
      <button
        type="button"
        aria-label="Lên đầu trang"
        onClick={handleScrollToTop}
        className={`fixed bottom-6 right-6 z-30 cursor-pointer rounded-full bg-[#141414] px-4 py-3 font-sans text-[13px] font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#E8772E] border-none ${
          scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        Lên đầu ↑
      </button>

      {/* Rich Term Modal */}
      <GlossaryTermModal
        term={activeModalTerm}
        isOpen={Boolean(activeModalTerm)}
        onClose={() => setActiveModalTerm(null)}
        onNext={handleNextTerm}
        getTermName={getTermName}
      />
    </div>
  );
}
