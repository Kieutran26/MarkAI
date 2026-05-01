import InsightBlock from './InsightBlock';
import CompareTable from './CompareTable';
import UseCaseList from './UseCaseList';
import Grid2Col from './Grid2Col';
import InfographicFlow from './InfographicFlow';
import type { ContentBlock } from '../../../lib/subLessons';
import { annotateTechnicalHtml, annotateTechnicalText } from '../../../lib/technical-terms';

interface ContentBodyProps {
  content: ContentBlock[];
}

export default function ContentBody({ content }: ContentBodyProps) {
  return (
    <div className="content-body">
      {content.map((block, index) => {
        switch (block.type) {
          case 'html':
            return (
              <div
                key={index}
                className="content-html"
                dangerouslySetInnerHTML={{ __html: annotateTechnicalHtml(block.html) }}
              />
            );

          case 'p':
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: annotateTechnicalHtml(block.text) }}
              />
            );

          case 'h3':
            return (
              <h3
                key={index}
                id={block.id}
                dangerouslySetInnerHTML={{
                  __html: annotateTechnicalHtml(
                    block.em
                      ? `${block.text.split(block.em)[0]}<em class="text-accent italic">${block.em}</em>${block.text.split(block.em)[1] ?? ''}`
                      : annotateTechnicalText(block.text),
                  ),
                }}
              />
            );

          case 'h4':
            return <h4 key={index} id={block.id} dangerouslySetInnerHTML={{ __html: annotateTechnicalText(block.text) }} />;

          case 'insight':
            return (
              <InsightBlock
                key={index}
                label={block.label}
                text={block.text}
              />
            );

          case 'infographic':
            return (
              <InfographicFlow
                key={index}
                label={block.label}
                steps={block.steps}
                aside={block.aside}
              />
            );

          case 'divider':
            return <div key={index} className="content-divider" />;

          case 'compare':
            return (
              <CompareTable
                key={index}
                headers={block.headers}
                rows={block.rows}
              />
            );

          case 'usecases':
            return (
              <UseCaseList
                key={index}
                eyebrow={block.eyebrow}
                items={block.items}
              />
            );

          case 'grid2':
            return (
              <Grid2Col
                key={index}
                items={block.items}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
