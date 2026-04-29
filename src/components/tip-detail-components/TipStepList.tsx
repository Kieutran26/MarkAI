import type { TipStep } from '../../lib/types';

interface TipStepListProps {
  key?: string | number;
  steps: TipStep[];
}

export default function TipStepList({ steps }: TipStepListProps) {
  return (
    <div
      style={{
        border: '1px solid var(--border)',
        marginBottom: '1.5rem',
      }}
    >
      {steps.map((step, idx) => (
        <div
          key={idx}
          style={{
            display: 'grid',
            gridTemplateColumns: '48px 1fr',
            borderBottom: idx < steps.length - 1 ? '1px solid var(--border)' : 'none',
          }}
        >
          <div
            style={{
              borderRight: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '1.2rem 0',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--accent)',
                fontWeight: 500,
              }}
            >
              {step.num}
            </span>
          </div>
          <div style={{ padding: '1.2rem 1.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                color: 'var(--ink)',
                fontWeight: 500,
                marginBottom: '0.4rem',
                letterSpacing: '0.02em',
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: step.title }} />
            </div>
            <div
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '14px',
                fontWeight: 300,
                color: 'var(--ink2)',
                lineHeight: 1.65,
              }}
            >
              {step.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
