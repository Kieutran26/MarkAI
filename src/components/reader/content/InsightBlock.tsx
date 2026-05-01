import { annotateTechnicalHtml } from '../../../lib/technical-terms';

interface InsightBlockProps {
  key?: string | number;
  label: string;
  text: string;
}

export default function InsightBlock({ label, text }: InsightBlockProps) {
  return (
    <div
      className="insight-block"
      dangerouslySetInnerHTML={{
        __html: annotateTechnicalHtml(`✳ <strong>${label}:</strong> ${text}`),
      }}
    />
  );
}
