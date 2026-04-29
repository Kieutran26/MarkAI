interface InsightBlockProps {
  label: string;
  text: string;
}

export default function InsightBlock({ label, text }: InsightBlockProps) {
  return (
    <div
      className="insight-block"
      dangerouslySetInnerHTML={{
        __html: `✳ <strong>${label}:</strong> ${text}`
      }}
    />
  );
}
