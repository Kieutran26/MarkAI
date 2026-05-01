import { annotateTechnicalHtml, annotateTechnicalText } from '../../../lib/technical-terms';

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
  const leftHeader = headers[0].trim().toLowerCase();
  const rightHeader = headers[1].trim().toLowerCase();
  const isMythReality =
    (leftHeader === 'myth' || leftHeader === 'nỗi sợ') &&
    (rightHeader === 'reality' || rightHeader === 'thực tế');

  const getStyleClass = (style: 'cross' | 'check' | 'accent' | 'normal') => {
    switch (style) {
      case 'cross': return 'cell-cross';
      case 'check': return 'cell-check';
      case 'accent': return 'cell-accent';
      default: return '';
    }
  };

  return (
    <div className={`compare-table${isMythReality ? ' compare-table-myth-reality' : ''}`}>
      <div className="compare-row compare-header">
        <div className={`compare-cell${isMythReality ? ' myth-cell' : ''}`} dangerouslySetInnerHTML={{ __html: annotateTechnicalText(headers[0]) }} />
        <div className={`compare-cell${isMythReality ? ' reality-cell' : ''}`} dangerouslySetInnerHTML={{ __html: annotateTechnicalText(headers[1]) }} />
      </div>

      {rows.map((row, index) => (
        <div key={index} className="compare-row">
          <div className={`compare-cell${isMythReality ? ' myth-cell' : ''}`}>
            <span className={getStyleClass(row.leftStyle)} dangerouslySetInnerHTML={{ __html: annotateTechnicalHtml(row.left) }} />
          </div>
          <div className={`compare-cell${isMythReality ? ' reality-cell' : ''}`}>
            <span className={getStyleClass(row.rightStyle)} dangerouslySetInnerHTML={{ __html: annotateTechnicalHtml(row.right) }} />
          </div>
        </div>
      ))}
    </div>
  );
}
