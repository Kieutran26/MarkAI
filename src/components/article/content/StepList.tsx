type StepListProps = {
  key?: string | number;
  steps: { title: string; desc: string }[];
};

export default function StepList({ steps }: StepListProps) {
  return (
    <div className="step-list">
      {steps.map((step, index) => (
        <div key={index} className="step-item">
          <div className="step-num">
            <span className="font-serif text-[1.3rem] text-muted">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="step-body p-5">
            <div className="font-sans text-[14px] font-normal text-ink mb-1">
              {step.title}
            </div>
            <div className="font-sans text-[13px] font-light text-ink2 leading-[1.6]">
              {step.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
