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
        <div className="compare-cell">{headers[0]}</div>
        <div className="compare-cell">{headers[1]}</div>
      </div>

      {/* Data Rows */}
      {rows.map((row, index) => (
        <div key={index} className="compare-row">
          <div className="compare-cell">
            <span className={getStyleClass(row.leftStyle)}>{row.left}</span>
          </div>
          <div className="compare-cell">
            <span className={getStyleClass(row.rightStyle)}>{row.right}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
