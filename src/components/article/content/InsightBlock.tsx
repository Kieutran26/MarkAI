type InsightBlockProps = {
  label: string;
  text: string;
};

export default function InsightBlock({ label, text }: InsightBlockProps) {
  return (
    <div className="insight-block">
      ✳ <strong>{label}:</strong> {text}
    </div>
  );
}
