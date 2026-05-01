import React from 'react';

interface InfographicFlowProps {
  label: string;
  steps: {
    label: string;
    title: string;
    desc: string;
  }[];
  aside: {
    label: string;
    title: string;
    desc: string;
  };
}

export default function InfographicFlow({ label, steps, aside }: InfographicFlowProps) {
  return (
    <section className="infographic-arrow-flow" aria-label={label}>
      <div className="headline-mono">{label}</div>
      
      <div className="flow-row">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className={`step-box ${index === 1 ? 'accent-box' : ''}`}>
              <div className="step-eyebrow">Bước {step.label}</div>
              <h4 className={`step-title ${index === 1 ? 'is-accent' : ''}`}>{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="arrow-col">
                <div className="arrow-h-line"></div>
                <div className="arrow-h-head"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="no-step-bar">
        <span className="x-badge">✕ {aside.label}</span>
        <span className="no-step-text">
          <strong>{aside.title}.</strong> {aside.desc}
        </span>
      </div>
    </section>
  );
}
