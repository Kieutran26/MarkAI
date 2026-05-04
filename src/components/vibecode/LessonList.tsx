import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { lessons } from '../../lib/lessons';

export default function LessonList() {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="page-shell py-24">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-24 gap-x-12 relative">
            {lessons.map((lesson, index) => (
              <div key={lesson.id} className="relative group/card cursor-pointer">
                <Link 
                  to={`/vibecode/${lesson.slug}`}
                  className="h-full border border-[var(--border)] bg-[var(--bg)]/40 group-hover/card:bg-[#f7f5f0] group-hover/card:border-[var(--accent)] transition-all p-7 flex flex-col no-underline text-inherit"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="font-[family-name:var(--mono)] text-[10px] text-[var(--muted)] tracking-widest uppercase mb-1">Bài</div>
                      <div className="font-[family-name:var(--serif)] text-[3.2rem] text-[var(--ink)] leading-none italic">{String(index + 1).padStart(2, '0')}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-2 py-0.5 font-[family-name:var(--mono)] text-[9px] uppercase tracking-wider ${lesson.badgeType === 'accent' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--ink)] text-white'}`}>
                        {lesson.badge}
                      </span>
                      <span className="border border-[var(--border)]/60 bg-white/50 px-2 py-0.5 font-[family-name:var(--mono)] text-[9px] text-[var(--muted)] uppercase tracking-wider">
                        {lesson.duration}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-[family-name:var(--serif)] text-[1.25rem] text-[var(--ink)] leading-tight mb-4">
                    {lesson.title}
                  </h3>
                  
                  <p className="font-[family-name:var(--sans)] text-[13px] text-[var(--muted)] leading-relaxed mb-8 flex-1 line-clamp-3">
                    {lesson.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {(lesson.tags || []).map((tag, tIdx) => (
                      <span key={tIdx} className="border border-[var(--border)]/60 bg-[var(--bg)]/50 px-2 py-1 font-[family-name:var(--mono)] text-[9px] text-[var(--muted)] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-auto border-t border-[var(--border)] overflow-hidden">
                    <div className="absolute inset-0 bg-[var(--accent)] -translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-out" />
                    <div className="relative z-10 flex items-center justify-between py-4 px-4">
                      <span className="font-[family-name:var(--mono)] text-[10px] text-[var(--muted)] uppercase tracking-widest group-hover/card:text-[var(--ink)] transition-colors">Bắt đầu ngay</span>
                      <ArrowRight className="w-4 h-4 text-[var(--muted)] group-hover/card:text-[var(--ink)] group-hover/card:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>

                {/* Right Arrow Connector Line */}
                {index % 3 !== 2 && index < lessons.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 left-full w-12 -translate-y-1/2 items-center justify-center z-0">
                    <div className="w-full border-t border-dashed border-[var(--border)] group-hover/card:border-[var(--accent)] transition-colors" />
                    <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 bg-white border border-[var(--border)] group-hover/card:bg-[var(--accent)] group-hover/card:border-[var(--accent)] group-hover/card:text-[var(--ink)] transition-all flex items-center justify-center text-[var(--border)] rounded-full">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
                
                {/* Down Arrow Connector Line (End of Row to Start of Next Row) */}
                {index % 3 === 2 && index < lessons.length - 1 && (
                  <div className="hidden lg:flex absolute top-full right-1/2 w-[calc(200%+6rem)] h-24 items-center justify-center z-0 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 600 100" fill="none" className="overflow-visible">
                      <path 
                        d="M600,0 C600,50 0,50 0,100" 
                        stroke="var(--border)" 
                        strokeWidth="1" 
                        strokeDasharray="4 4"
                        className="group-hover/card:stroke-[var(--accent)] transition-colors"
                      />
                      <g className="translate-y-[50px] translate-x-[300px]">
                        <circle r="14" fill="white" stroke="var(--border)" className="group-hover/card:fill-[var(--accent)] group-hover/card:stroke-[var(--accent)] transition-all" />
                        <path 
                          d="M-4,-2 L0,2 L4,-2" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="text-[var(--border)] group-hover/card:text-[var(--ink)]"
                        />
                      </g>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
