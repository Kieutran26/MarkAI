interface InsightBlockProps {
  content: string;
}

export default function InsightBlock({ content }: InsightBlockProps) {
  return (
    <div
      style={{
        fontFamily: 'var(--mono)',
        fontSize: '12px',
        borderLeft: '2px solid var(--accent)',
        padding: '0.8rem 0.9rem',
        lineHeight: 1.65,
        color: 'var(--ink2)',
        marginBottom: '1.5rem',
        background: 'var(--bg2)',
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
