import { quickRefItems } from '../../lib/glossary';

export default function QuickRef() {
  return (
    <section className="border-y border-[#1a1a1a] bg-[var(--ink)]">
      <div className="page-shell py-14">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.07em] text-[#555]">✳ <span className="text-accent">Cheat sheet</span> · dùng ngay không cần nhớ</p>
        <h2 className="max-w-[760px] font-serif text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.15] text-[var(--bg)]">Khi AI hoặc dev nói những từ này,<br /><em className="text-accent italic">đây là ý họ muốn nói.</em></h2>
        <div className="glossary-quickref mt-8 grid border border-[#2a2a2a] md:grid-cols-2 xl:grid-cols-4">
          {quickRefItems.map(([term, definition]) => (
            <div key={term} className="glossary-quickref-card border-b border-r border-[#2a2a2a] p-6">
              <p className="mb-2 font-mono text-[11px] text-accent">{term}</p>
              <p className="glossary-body text-[12px] leading-[1.6] text-[#888]">{definition}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
