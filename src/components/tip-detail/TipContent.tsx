import { TipSection } from '../../lib/types';
import TipInsightBlock from '../tip-detail-components/TipInsightBlock';
import TipCodeBlock from '../tip-detail-components/TipCodeBlock';
import TipStepList from '../tip-detail-components/TipStepList';
import TipCompareTable from '../tip-detail-components/TipCompareTable';
import TipPullQuote from '../tip-detail-components/TipPullQuote';

interface TipContentProps {
  sections: TipSection[];
}

export default function TipContent({ sections }: TipContentProps) {
  const renderSection = (section: TipSection, idx: number) => {
    switch (section.type) {
      case 'paragraph':
        return (
          <p
            key={idx}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'var(--ink2)',
              marginBottom: '1.5rem',
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: section.content || '' }} />
          </p>
        );

      case 'h3':
        return (
          <h3
            key={idx}
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.3rem',
              lineHeight: 1.3,
              margin: '2.5rem 0 1rem',
              color: 'var(--ink)',
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: section.content || '' }} />
          </h3>
        );

      case 'insight':
        return section.content ? (
          <TipInsightBlock key={idx} content={section.content} />
        ) : null;

      case 'code':
        return section.code ? (
          <TipCodeBlock key={idx} code={section.code} language={section.language} />
        ) : null;

      case 'step-list':
        return section.steps ? (
          <TipStepList key={idx} steps={section.steps} />
        ) : null;

      case 'compare-table':
        return section.headers && section.rows ? (
          <TipCompareTable key={idx} headers={section.headers} rows={section.rows} />
        ) : null;

      case 'pull-quote':
        return (
          <TipPullQuote
            key={idx}
            content={section.content || ''}
            source={section.source}
          />
        );

      case 'divider':
        return (
          <hr
            key={idx}
            style={{
              border: 'none',
              borderBottom: '1px solid var(--border)',
              margin: '2.5rem 0',
            }}
          />
        );

      default:
        return null;
    }
  };

  return <div>{sections.map(renderSection)}</div>;
}
