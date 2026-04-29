import type { ContentBlock } from '../../lib/posts';
import InsightBlock from './content/InsightBlock';
import StepList from './content/StepList';
import CompareTable from './content/CompareTable';
import CodeBlock from './content/CodeBlock';
import PullQuote from './content/PullQuote';
import ArticleImage from './content/ArticleImage';

type ArticleContentProps = {
  content: ContentBlock[];
};

export default function ArticleContent({ content }: ArticleContentProps) {
  let isFirstH2 = true;

  return (
    <article className="article-content">
      {content.map((block, index) => {
        switch (block.type) {
          case 'h2':
            const isFirst = isFirstH2;
            if (isFirstH2) isFirstH2 = false;
            return (
              <h2
                key={index}
                id={block.id}
                className={`font-serif text-[1.6rem] leading-[1.2] ${
                  isFirst ? 'mt-0 pt-0 border-t-0' : 'mt-12 pt-12 border-t border-border'
                } mb-4`}
              >
                {block.text}
                {block.emText && (
                  <> — <em className="text-accent">{block.emText}</em></>
                )}
              </h2>
            );

          case 'h3':
            return (
              <h3 key={index} className="font-serif text-[1.2rem] leading-[1.3] mt-10 mb-3">
                {block.text}
              </h3>
            );

          case 'p':
            return (
              <p
                key={index}
                className="font-sans text-[15px] font-light text-ink2 leading-[1.85] mb-5 [&_strong]:font-medium [&_strong]:text-ink [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-1"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );

          case 'insight':
            return (
              <InsightBlock key={index} label={block.label} text={block.text} />
            );

          case 'divider':
            return <div key={index} className="content-divider" />;

          case 'pullquote':
            return (
              <PullQuote key={index} text={block.text} emText={block.emText} />
            );

          case 'image':
            return (
              <ArticleImage key={index} label={block.label} caption={block.caption} />
            );

          case 'codeblock':
            return <CodeBlock key={index} filename={block.filename} code={block.code} />;

          case 'steplist':
            return <StepList key={index} steps={block.steps} />;

          case 'compare':
            return <CompareTable key={index} headers={block.headers} rows={block.rows} />;

          default:
            return null;
        }
      })}
    </article>
  );
}
