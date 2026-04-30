type PullQuoteProps = {
  key?: string | number;
  text: string;
  emText?: string;
};

export default function PullQuote({ text, emText }: PullQuoteProps) {
  return (
    <div className="pull-quote">
      <p className="font-serif text-[1.3rem] leading-[1.4] text-ink m-0 not-italic">
        &ldquo;{text}&rdquo;
        {emText && (
          <> <em className="text-accent">{emText}</em></>
        )}
      </p>
    </div>
  );
}
