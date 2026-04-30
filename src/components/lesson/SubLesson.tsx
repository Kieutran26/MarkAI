import { Link } from 'react-router-dom';
import type { SubLesson } from '../../lib/lessons';

interface SubLessonProps {
  key?: string | number;
  subLesson: SubLesson;
  lessonId: number;
  isFirst: boolean;
  isLast: boolean;
  prevSubLesson?: SubLesson | null;
  nextSubLesson?: SubLesson | null;
}

export default function SubLessonComponent({ 
  subLesson, 
  lessonId, 
  isFirst, 
  isLast,
  prevSubLesson,
  nextSubLesson 
}: SubLessonProps) {
  
  const renderContent = () => {
    // Render paragraphs
    const renderParagraphs = () => {
      if (!subLesson.paragraphs) return null;
      return subLesson.paragraphs.map((para, idx) => (
        <p 
          key={idx} 
          dangerouslySetInnerHTML={{ __html: para }}
          className="mb-5"
        />
      ));
    };

    const renderExtraParagraphs = () => {
      if (!subLesson.paragraphs_extra) return null;
      return subLesson.paragraphs_extra.map((para, idx) => (
        <p
          key={`extra-${idx}`}
          dangerouslySetInnerHTML={{ __html: para }}
          className="mb-5"
        />
      ));
    };

    // Render insight block
    const renderInsight = () => {
      if (!subLesson.insight) return null;
      return (
        <div 
          className="insight mb-6" 
          dangerouslySetInnerHTML={{ __html: subLesson.insight }}
        />
      );
    };

    // Render use case list
    const renderUseCases = () => {
      if (!subLesson.useCases) return null;
      return (
        <div className="use-case-list mb-6">
          {subLesson.useCases.map((useCase, idx) => (
            <div key={idx} className="use-case-item">
              <span className="use-case-icon">✳</span>
              <div>
                <div className="use-case-title">{useCase.title}</div>
                <div className="use-case-desc">{useCase.desc}</div>
              </div>
            </div>
          ))}
        </div>
      );
    };

    // Render compare table
    const renderCompareTable = () => {
      if (!subLesson.compareHeaders || !subLesson.compareRows) return null;
      return (
        <div className="compare-table mb-6">
          <div className="compare-row header">
            <div className="compare-cell">{subLesson.compareHeaders[0]}</div>
            <div className="compare-cell">{subLesson.compareHeaders[1]}</div>
          </div>
          {subLesson.compareRows.map((row, idx) => (
            <div key={idx} className="compare-row">
              <div 
                className="compare-cell"
                dangerouslySetInnerHTML={{ __html: row[0] }}
              />
              <div 
                className="compare-cell"
                dangerouslySetInnerHTML={{ __html: row[1] }}
              />
            </div>
          ))}
        </div>
      );
    };

    // Render content grid
    const renderContentGrid = () => {
      if (!subLesson.gridItems) return null;
      return (
        <div className="content-grid mb-6">
          {subLesson.gridItems.map((item, idx) => (
            <div key={idx} className="content-grid-item">
              <div className="content-grid-label">{item.label}</div>
              <div className="content-grid-title font-serif text-[1.05rem] mb-2">{item.title}</div>
              <div className="content-grid-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      );
    };

    // Render based on content type
    switch (subLesson.contentType) {
      case 'text':
        return (
          <>
            {renderParagraphs()}
            {renderExtraParagraphs()}
            {renderInsight()}
          </>
        );
      
      case 'usecases':
        return (
          <>
            {renderParagraphs()}
            {renderExtraParagraphs()}
            {renderUseCases()}
          </>
        );
      
      case 'compare':
        return (
          <>
            {renderCompareTable()}
            {subLesson.paragraphs && renderParagraphs()}
            {renderExtraParagraphs()}
            {renderInsight()}
          </>
        );
      
      case 'grid':
        return (
          <>
            {renderContentGrid()}
            {subLesson.paragraphs && renderParagraphs()}
            {renderExtraParagraphs()}
            {renderInsight()}
          </>
        );
      
      case 'mixed':
        return (
          <>
            {subLesson.paragraphs && renderParagraphs()}
            {renderExtraParagraphs()}
            {renderContentGrid()}
            {renderCompareTable()}
            {renderUseCases()}
            {renderInsight()}
          </>
        );
      
      default:
        return (
          <>
            {renderParagraphs()}
            {renderInsight()}
          </>
        );
    }
  };

  return (
    <section className="sub-lesson" id={`sub-${subLesson.id}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="sub-lesson-eyebrow">
          <span className="num text-accent">{subLesson.id}</span>
          <span>·</span>
          <span>{subLesson.eyebrow}</span>
        </div>
        <h2 className="font-serif text-[1.7rem] leading-[1.2] mb-4">
          {subLesson.title.includes('—') ? (
            <>
              {subLesson.title.split('—')[0].trim()}
              <em className="text-accent italic"> — {subLesson.title.split('—')[1]?.trim()}</em>
            </>
          ) : (
            subLesson.title
          )}
        </h2>
        <p className="font-sans text-[14px] text-ink2 leading-[1.7] max-w-[540px]">
          {subLesson.desc}
        </p>
      </div>

      {/* Content */}
      <div className="content-body">
        {renderContent()}
      </div>

      {/* Sub Navigation */}
      {!isLast && (
        <div className="sub-nav">
          {isFirst && !prevSubLesson ? (
            <div className="opacity-40 pointer-events-none font-mono text-[11px] text-muted">
              ← Không có bài trước
            </div>
          ) : prevSubLesson ? (
            <Link to={`#sub-${prevSubLesson.id}`} className="hover:text-accent">
              ← {prevSubLesson.id} · {prevSubLesson.title.split('—')[0].trim()}
            </Link>
          ) : (
            <div />
          )}
          
          <span className="sub-nav-mid">
            BÀI {lessonId.toString().padStart(2, '0')} · {subLesson.id} / {lessonId + ''} phần
          </span>
          
          {nextSubLesson ? (
            <Link to={`#sub-${nextSubLesson.id}`} className="hover:text-accent">
              {nextSubLesson.id} · {nextSubLesson.title.split('—')[0].trim()} →
            </Link>
          ) : (
            <Link 
              to={`/vibecode/`} 
              className="hover:text-accent"
            >
              Hết bài này →
            </Link>
          )}
        </div>
      )}
    </section>
  );
}
