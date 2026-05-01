import { annotateTechnicalText } from '../../../lib/technical-terms';

interface CompareTableProps {
  key?: string | number;
  headers: [string, string];
  rows: {
    left: string;
    leftStyle: 'cross' | 'check' | 'accent' | 'normal';
    right: string;
    rightStyle: 'cross' | 'check' | 'accent' | 'normal';
  }[];
}

export default function CompareTable({ headers, rows }: CompareTableProps) {
  const getStyleClass = (style: 'cross' | 'check' | 'accent' | 'normal') => {
    switch (style) {
      case 'cross': return 'cell-cross';
      case 'check': return 'cell-check';
      case 'accent': return 'cell-accent';
      default: return '';
    }
  };

  return (
    <div className="compare-table">
      {/* Header Row */}
      <div className="compare-row compare-header">
        <div className="compare-cell" dangerouslySetInnerHTML={{ __html: annotateTechnicalText(headers[0]) }} />
        <div className="compare-cell" dangerouslySetInnerHTML={{ __html: annotateTechnicalText(headers[1]) }} />
      </div>

      {/* Data Rows */}
      {rows.map((row, index) => (
        <div key={index} className="compare-row">
          <div className="compare-cell">
            <span className={getStyleClass(row.leftStyle)} dangerouslySetInnerHTML={{ __html: annotateTechnicalText(row.left) }} />
          </div>
          <div className="compare-cell">
            <span className={getStyleClass(row.rightStyle)} dangerouslySetInnerHTML={{ __html: annotateTechnicalText(row.right) }} />
          </div>
        </div>
      ))}
    </div>
  );
}
