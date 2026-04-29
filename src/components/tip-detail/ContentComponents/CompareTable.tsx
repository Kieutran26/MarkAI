interface CompareTableProps {
  headers: string[];
  rows: string[][];
}

export default function CompareTable({ headers, rows }: CompareTableProps) {
  return (
    <table
      style={{
        width: '100%',
        border: '1px solid var(--border)',
        borderCollapse: 'collapse',
        marginBottom: '1.5rem',
      }}
    >
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th
              key={idx}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                padding: '0.8rem 1.2rem',
                background: 'var(--bg2)',
                borderBottom: '1px solid var(--border)',
                borderRight: idx < headers.length - 1 ? '1px solid var(--border)' : 'none',
                textAlign: 'left',
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <td
                key={cellIdx}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'var(--ink2)',
                  padding: '0.9rem 1.2rem',
                  borderBottom: rowIdx < rows.length - 1 ? '1px solid var(--border)' : 'none',
                  borderRight: cellIdx < row.length - 1 ? '1px solid var(--border)' : 'none',
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    fontFamily: cellIdx === 0 ? 'var(--mono)' : 'var(--sans)',
                    fontSize: cellIdx === 0 ? '12px' : '13px',
                    color: cellIdx === 0 ? 'var(--ink)' : 'var(--ink2)',
                    fontWeight: cellIdx === 0 ? 500 : 300,
                  }}
                >
                  {cell}
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
