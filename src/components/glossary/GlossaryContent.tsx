import type { GlossaryTerm } from '../../lib/glossary';
import GroupSection from './GroupSection';

interface GlossaryContentProps {
  grouped: Array<{ letter: string; terms: GlossaryTerm[] }>;
  onOpenTerm: (term: GlossaryTerm) => void;
}

export default function GlossaryContent({ grouped, onOpenTerm }: GlossaryContentProps) {
  return (
    <div id="glossary-content">
      {grouped.length ? (
        grouped.map((group) => (
          <GroupSection key={group.letter} letter={group.letter} terms={group.terms} onOpenTerm={onOpenTerm} />
        ))
      ) : (
        <div className="px-[1.2rem] py-16 text-center md:px-8">
          <h2 className="font-serif text-[1.4rem]">Không tìm thấy từ ngữ này</h2>
          <p className="glossary-body mt-2 text-[14px] leading-[1.7] text-ink2">
            Thử từ khóa khác, hoặc quay lại nhóm <span className="text-accent">Tất cả</span> để xem toàn bộ glossary.
          </p>
        </div>
      )}
    </div>
  );
}
