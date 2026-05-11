import { useEffect, useMemo, useState } from 'react';
import '../components/glossary/glossary.css';
import AlphaSidebar from '../components/glossary/AlphaSidebar';
import FilterBar from '../components/glossary/FilterBar';
import GlossaryContent from '../components/glossary/GlossaryContent';
import GlossaryCta from '../components/glossary/GlossaryCta';
import GlossaryHero from '../components/glossary/GlossaryHero';
import GlossaryTermModal from '../components/glossary/GlossaryTermModal';

import { terms, type GlossaryTerm, type TermGroup } from '../lib/glossary';

export default function VibecodeGlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState<TermGroup | 'all'>('all');
  const [sortAZ, setSortAZ] = useState(true);
  const [activeLetter, setActiveLetter] = useState('A');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeModalTerm, setActiveModalTerm] = useState<GlossaryTerm | null>(null);

  useEffect(() => {
    document.title = 'Từ điển chuyên ngành cho Marketer · markAI.vn';
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 640);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTerms = useMemo(
    () =>
      terms.filter((term) => {
        const query = searchQuery.trim().toLowerCase();
        const haystack = `${term.name} ${term.nameEn} ${term.definition} ${term.example}`.toLowerCase();
        return (!query || haystack.includes(query)) && (activeGroup === 'all' || term.groups.includes(activeGroup));
      }),
    [searchQuery, activeGroup],
  );

  const grouped = useMemo(() => {
    const bucket = filteredTerms.reduce<Record<string, GlossaryTerm[]>>((acc, term) => ((acc[term.letter] ??= []).push(term), acc), {});
    const keys = Object.keys(bucket).sort();
    if (!sortAZ) keys.reverse();
    return keys.map((letter) => ({ letter, terms: bucket[letter] }));
  }, [filteredTerms, sortAZ]);

  useEffect(() => {
    setActiveLetter(grouped[0]?.letter ?? '');
  }, [grouped]);

  useEffect(() => {
    const sections = document.querySelectorAll('.group-section[id]');
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLetter(entry.target.id.replace('letter-', ''));
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [grouped]);

  const getTermName = (id: string) => terms.find((term) => term.id === id)?.name ?? id.toUpperCase();

  const handleNextTerm = () => {
    if (!activeModalTerm) return;
    const currentIndex = filteredTerms.findIndex((t) => t.id === activeModalTerm.id);
    if (currentIndex === -1) return;
    const nextTerm = filteredTerms[(currentIndex + 1) % filteredTerms.length];
    setActiveModalTerm(nextTerm);
  };

  return (
    <div className="glossary-page bg-[var(--bg)] text-ink">
      <GlossaryHero searchQuery={searchQuery} onSearchChange={setSearchQuery} filteredCount={filteredTerms.length} activeGroup={activeGroup} onGroupChange={setActiveGroup} />
      <FilterBar activeGroup={activeGroup} onGroupChange={setActiveGroup} sortAZ={sortAZ} onToggleSort={() => setSortAZ((value) => !value)} />

      <div className="glossary-grid-shell grid min-h-[80vh] lg:grid-cols-[108px_1fr] xl:grid-cols-[120px_1fr]">
        <AlphaSidebar groupedLetters={grouped.map((item) => ({ letter: item.letter, count: item.terms.length }))} activeLetter={activeLetter} />
        <GlossaryContent grouped={grouped} onOpenTerm={setActiveModalTerm} />
      </div>


      <GlossaryCta />

      <button
        type="button"
        aria-label="Lên đầu trang"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`glossary-back-to-top ${showBackToTop ? 'is-visible' : ''}`}
      >
        <span>Lên đầu</span>
        <span aria-hidden="true">↑</span>
      </button>

      <GlossaryTermModal
        term={activeModalTerm}
        isOpen={Boolean(activeModalTerm)}
        getTermName={getTermName}
        onClose={() => setActiveModalTerm(null)}
        onNext={handleNextTerm}
      />
    </div>
  );
}

