import React from 'react';
import { annotateTechnicalHtml, annotateTechnicalText } from '../../../lib/technical-terms';

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
      <div className="headline-mono" dangerouslySetInnerHTML={{ __html: annotateTechnicalText(label) }} />

      <div className="flow-row">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className={`step-box ${index === 1 ? 'accent-box' : ''}`}>
              <div className="step-eyebrow">Bước {step.label}</div>
              <h4 className={`step-title ${index === 1 ? 'is-accent' : ''}`} dangerouslySetInnerHTML={{ __html: annotateTechnicalText(step.title) }} />
              <p className="step-desc" dangerouslySetInnerHTML={{ __html: annotateTechnicalText(step.desc) }} />
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
        <span
          className="no-step-text"
          dangerouslySetInnerHTML={{ __html: annotateTechnicalHtml(`<strong>${aside.title}.</strong> ${aside.desc}`) }}
        />
      </div>
    </section>
  );
}
