type CompareTableProps = {
  key?: string | number;
  headers: [string, string];
  rows: {
    left: string;
    leftStyle: 'cross' | 'check' | 'normal';
    right: string;
    rightStyle: 'cross' | 'check' | 'normal';
  }[];
};

export default function CompareTable({ headers, rows }: CompareTableProps) {
  const getCellClass = (style: 'cross' | 'check' | 'normal') => {
    switch (style) {
      case 'cross':
        return 'line-through text-muted';
      case 'check':
        return 'text-[var(--success)]';
      default:
        return 'text-ink2';
    }
  };

  return (
    <div className="compare-table">
      {/* Header row */}
      <div className="compare-row header">
        <div className="compare-cell font-mono text-[10px] text-muted tracking-wide uppercase">
          {headers[0]}
        </div>
        <div className="compare-cell font-mono text-[10px] text-muted tracking-wide uppercase">
          {headers[1]}
        </div>
      </div>
      {/* Data rows */}
      {rows.map((row, index) => (
        <div key={index} className="compare-row">
          <div className={`compare-cell text-[13px] ${getCellClass(row.leftStyle)}`}>
            {row.left}
          </div>
          <div className={`compare-cell text-[13px] ${getCellClass(row.rightStyle)}`}>
            {row.right}
          </div>
        </div>
      ))}
    </div>
  );
}
