import React from 'react';
import { Link } from 'react-router-dom';
import type { Lesson } from '../../lib/lessons';

interface LessonOverviewHeroProps {
  lesson: Lesson;
}

export default function LessonOverviewHero({ lesson }: LessonOverviewHeroProps) {
  const lessonNum = lesson.id.toString().padStart(2, '0');
  const firstSubSlug = lesson.subLessons[0]?.id
    ? `bai-${lesson.subLessons[0].id.replace('.', '-')}`
    : 'bai-1-1';

  const titleParts = lesson.titleEm && lesson.title.includes(lesson.titleEm)
    ? [
        lesson.title.slice(0, lesson.title.indexOf(lesson.titleEm)),
        lesson.titleEm,
        lesson.title.slice(lesson.title.indexOf(lesson.titleEm) + lesson.titleEm.length),
      ]
    : [lesson.title, '', ''];

  const infoRows = [
    { k: 'Thời gian đọc', v: lesson.duration, c: '#141414' },
    { k: 'Số bài nhỏ', v: `${lesson.subLessonCount || lesson.subLessons.length} bài`, c: '#141414' },
    { k: 'Độ khó', v: lesson.difficulty || 'Zero · không cần nền tảng', c: '#E8772E' },
    {
      k: 'Tiếp theo',
      v: lesson.nextLesson
        ? `Bài ${(lesson.id + 1).toString().padStart(2, '0')} · ${lesson.nextLesson.title.split('—')[0].trim()}`
        : '— Kết thúc lộ trình',
      c: '#141414',
    },
  ];

  return (
    <section data-screen-label="Lesson hero" className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-[72px] grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
      {/* Left Main */}
      <div className="min-w-0">
        {/* Badges */}
        <div className="flex gap-1.5 flex-wrap font-[family-name:var(--mono)] text-[11px]">
          <span className="px-2.5 py-1 rounded-full bg-[#E8772E] text-white whitespace-nowrap font-medium">
            {lesson.badge}
          </span>
          <span className="px-2.5 py-1 rounded-full border border-[#DAD8D2] text-[#55534F] bg-white/60 whitespace-nowrap">
            {lesson.duration}
          </span>
          <span className="px-2.5 py-1 rounded-full border border-[#DAD8D2] text-[#55534F] bg-white/60 whitespace-nowrap">
            {lesson.subLessonCount || lesson.subLessons.length} bài nhỏ
          </span>
        </div>

        {/* Lesson number meta */}
        <div className="mt-8 font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">
          Bài · {lessonNum} / 10
        </div>

        {/* Title */}
        <h1 className="mt-3.5 text-[clamp(40px,5.2vw,72px)] leading-[1.02] tracking-[-0.05em] font-semibold text-[#141414] text-balance">
          {titleParts[0]}
          {titleParts[1] && (
            <span className="font-light italic text-[#E8772E]">
              {titleParts[1]}
            </span>
          )}
          {titleParts[2]}
        </h1>

        {/* Description */}
        <p className="mt-6 text-[18px] leading-[1.6] text-[#3A3935] max-w-[560px]">
          {lesson.desc}
        </p>

        {/* Tags */}
        <div className="mt-6 flex gap-1.5 flex-wrap">
          {lesson.tags.map((t, idx) => (
            <span
              key={idx}
              className="font-[family-name:var(--mono)] text-[11px] px-2.5 py-1 rounded-full border border-[#DAD8D2] text-[#55534F] bg-white/40 whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right Sidebar Info Card */}
      <aside className="bg-white border border-[#E6E4DE] rounded-[20px] p-6 shadow-sm">
        <div className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883] mb-2 uppercase tracking-[0.04em]">
          Thông tin bài học
        </div>
        <div>
          {infoRows.map((row, i) => (
            <div
              key={i}
              className="flex justify-between items-center gap-4 py-3 border-b border-[#F1EFEA] text-[14px]"
            >
              <span className="text-[#8A8883] whitespace-nowrap">{row.k}</span>
              <span
                className="text-right font-medium truncate max-w-[200px]"
                style={{ color: row.c }}
              >
                {row.v}
              </span>
            </div>
          ))}
        </div>

        <Link
          to={`/vibecode/${lesson.slug}/${firstSubSlug}`}
          className="mt-5 flex justify-between items-center bg-[#141414] text-white px-5 py-3.5 rounded-full text-[14px] font-medium hover:bg-[#E8772E] transition-all shadow-sm active:scale-[0.98]"
        >
          <span>Bắt đầu từ bài {lesson.subLessons[0]?.id || '1.1'}</span>
          <span>→</span>
        </Link>
      </aside>
    </section>
  );
}
