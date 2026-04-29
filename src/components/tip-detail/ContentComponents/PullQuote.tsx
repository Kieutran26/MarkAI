interface PullQuoteProps {
  content: string;
  source?: string;
}

export default function PullQuote({ content, source }: PullQuoteProps) {
  return (
    <div
      style={{
        padding: '1.5rem 2rem',
        borderLeft: '2px solid var(--ink)',
        marginBottom: '1.5rem',
        background: 'var(--bg2)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.15rem',
          lineHeight: 1.5,
          color: 'var(--ink)',
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {source && (
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            color: 'var(--muted)',
            marginTop: '0.6rem',
            letterSpacing: '0.04em',
          }}
        >
          {source}
        </div>
      )}
    </div>
  );
}
