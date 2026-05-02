import { useEffect, useMemo, useState } from 'react';
import '../components/glossary/glossary.css';
import AlphaSidebar from '../components/glossary/AlphaSidebar';
import FilterBar from '../components/glossary/FilterBar';
import GlossaryContent from '../components/glossary/GlossaryContent';
import GlossaryCta from '../components/glossary/GlossaryCta';
import GlossaryHero from '../components/glossary/GlossaryHero';
import QuickRef from '../components/glossary/QuickRef';
import { terms, type GlossaryTerm, type TermGroup } from '../lib/glossary';

export default function VibecodeGlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState<TermGroup | 'all'>('all');
  const [sortAZ, setSortAZ] = useState(true);
  const [activeLetter, setActiveLetter] = useState('A');

  useEffect(() => {
    document.title = 'Từ ngữ chuyên ngành IT cho Marketer · markAI.vn';
  }, []);

  const filteredTerms = useMemo(() => terms.filter((term) => {
    const query = searchQuery.trim().toLowerCase();
    const haystack = `${term.name} ${term.nameEn} ${term.definition} ${term.example}`.toLowerCase();
    return (!query || haystack.includes(query)) && (activeGroup === 'all' || term.groups.includes(activeGroup));
  }), [searchQuery, activeGroup]);

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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLetter(entry.target.id.replace('letter-', ''));
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [grouped]);

  const getTermName = (id: string) => terms.find((term) => term.id === id)?.name ?? id.toUpperCase();

  return (
    <div className="glossary-page bg-[var(--bg)] text-ink">
      <GlossaryHero searchQuery={searchQuery} onSearchChange={setSearchQuery} filteredCount={filteredTerms.length} activeGroup={activeGroup} onGroupChange={setActiveGroup} />
      <FilterBar activeGroup={activeGroup} onGroupChange={setActiveGroup} sortAZ={sortAZ} onToggleSort={() => setSortAZ((value) => !value)} />

      <div className="page-shell !px-0">
        <div className="grid min-h-[80vh] lg:grid-cols-[220px_1fr]">
          <AlphaSidebar groupedLetters={grouped.map((item) => ({ letter: item.letter, count: item.terms.length }))} activeLetter={activeLetter} />
          <GlossaryContent grouped={grouped} getTermName={getTermName} />
        </div>
      </div>

      <QuickRef />
      <GlossaryCta />
    </div>
  );
}
