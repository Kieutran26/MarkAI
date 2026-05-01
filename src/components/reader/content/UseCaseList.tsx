import { annotateTechnicalText } from '../../../lib/technical-terms';

interface UseCaseListProps {
  key?: string | number;
  eyebrow?: string;
  items: {
    icon: string;
    title: string;
    desc: string;
    tag?: string;
    variant?: 'quote' | 'body';
  }[];
}

export default function UseCaseList({ eyebrow, items }: UseCaseListProps) {
  return (
    <div className="use-case-list">
      {eyebrow ? <div className="use-case-eyebrow" dangerouslySetInnerHTML={{ __html: annotateTechnicalText(eyebrow) }} /> : null}

      {items.map((item, index) => (
        <div key={index} className="use-case-item">
          <div className="uc-num-col">
            <span className="uc-icon">{item.icon}</span>
          </div>

          <div className="uc-line-col" aria-hidden="true">
            <div className="uc-dot" />
            <div className="uc-line" />
          </div>

          <div className="uc-content">
            {item.tag ? <div className="uc-tag" dangerouslySetInnerHTML={{ __html: annotateTechnicalText(item.tag) }} /> : null}
            <div className="uc-title" dangerouslySetInnerHTML={{ __html: annotateTechnicalText(item.title) }} />
            <div
              className={item.variant === 'quote' ? 'uc-quote' : 'uc-desc'}
              dangerouslySetInnerHTML={{ __html: annotateTechnicalText(item.desc) }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
