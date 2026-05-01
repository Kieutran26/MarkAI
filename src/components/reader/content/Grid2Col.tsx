import { annotateTechnicalText } from '../../../lib/technical-terms';

interface Grid2ColProps {
  key?: string | number;
  items: {
    label: string;
    title: string;
    desc: string;
  }[];
}

export default function Grid2Col({ items }: Grid2ColProps) {
  return (
    <div className="grid-2col">
      {items.map((item, index) => (
        <div key={index} className="grid2-cell">
          <div className="grid2-label" dangerouslySetInnerHTML={{ __html: annotateTechnicalText(item.label) }} />
          <div className="grid2-title" dangerouslySetInnerHTML={{ __html: annotateTechnicalText(item.title) }} />
          <div className="grid2-desc" dangerouslySetInnerHTML={{ __html: annotateTechnicalText(item.desc) }} />
        </div>
      ))}
    </div>
  );
}
