import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { getLessonBySlug, getNextLesson, getPrevLesson, getRemainingLessons, getLessonSlug } from '../lib/lessons';
import { fetchPublicLesson, type PublicLessonPayload } from '../lib/public-lesson-api';
import { mapPublicLessonToOverviewModules } from '../lib/public-lesson-mapper';
import LessonOverviewHero from '../components/lesson/LessonOverviewHero';
import SubLessonList from '../components/lesson/SubLessonList';
import WhatYoullLearn from '../components/lesson/WhatYoullLearn';
import LessonNextUp from '../components/lesson/LessonNextUp';

export default function LessonOverview() {
  const params = useParams();
  const navigate = useNavigate();
  const lessonSlug = params.lessonSlug || '';
  const fallbackLesson = getLessonBySlug(lessonSlug);
  const [dbLesson, setDbLesson] = useState<PublicLessonPayload['lesson'] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchPublicLesson(lessonSlug)
      .then((payload) => {
        if (!cancelled) setDbLesson(payload.lesson);
      })
      .catch(() => {
        if (!cancelled) setDbLesson(null);
      });
    return () => {
      cancelled = true;
    };
  }, [lessonSlug]);

  if (!fallbackLesson && !dbLesson) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F6F5F1]">
        <div className="text-center px-4">
          <h1 className="font-semibold text-2xl mb-4 text-[#141414]">Bài học không tồn tại</h1>
          <p className="text-[#8A8883] mb-6">Slug: {lessonSlug}</p>
          <button
            onClick={() => navigate('/vibecode')}
            className="bg-[#141414] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#E8772E] transition-colors"
          >
            Quay lại lộ trình
          </button>
        </div>
      </div>
    );
  }

  const lesson = fallbackLesson ?? null;
  const currentId = lesson?.id ?? dbLesson?.sortOrder ?? 1;
  const nextLesson = getNextLesson(currentId);
  const prevLesson = getPrevLesson(currentId);
  const remainingLessons = getRemainingLessons(currentId);
  const whatYoullLearn = getWhatYoullLearn(currentId);
  const overviewModules = useMemo(
    () => (dbLesson ? mapPublicLessonToOverviewModules({ lesson: dbLesson }) : null),
    [dbLesson]
  );
  const shouldPreferCanonicalModules =
    lessonSlug === 'tu-ngu-chuyen-nganh' && Boolean(lesson?.subLessons?.length);
  const displayedModules = shouldPreferCanonicalModules
    ? lesson?.subLessons ?? []
    : overviewModules ?? lesson?.subLessons ?? [];

  const currentNumStr = currentId.toString().padStart(2, '0');

  return (
    <div className="bg-[#F6F5F1] text-[#141414] min-h-screen">
      {/* 1. Top Breadcrumbs Bar */}
      <div className="border-b border-[#DAD8D2]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-3.5 flex justify-between items-center gap-4 flex-wrap font-[family-name:var(--mono)] text-[12px]">
          <span className="flex items-center gap-2.5 text-[#8A8883] flex-wrap">
            <Link to="/" className="text-[#8A8883] hover:text-[#141414] transition-colors">
              markAI
            </Link>
            <span>/</span>
            <Link to="/vibecode" className="text-[#8A8883] hover:text-[#141414] transition-colors">
              Vibecode Web
            </Link>
            <span>/</span>
            <span className="text-[#141414] font-medium">Bài {currentNumStr}</span>
          </span>

          <div className="flex items-center gap-2">
            {prevLesson ? (
              <Link
                to={`/vibecode/${getLessonSlug(prevLesson.id)}`}
                className="px-3.5 py-1.5 rounded-full border border-[#E6E4DE] text-[#55534F] bg-white hover:border-[#141414] hover:text-[#141414] transition-all whitespace-nowrap"
              >
                ← Bài {prevLesson.id.toString().padStart(2, '0')}
              </Link>
            ) : (
              <span className="px-3.5 py-1.5 rounded-full border border-[#E6E4DE] text-[#C9C7C0] bg-white/50 cursor-not-allowed whitespace-nowrap">
                ← Trước
              </span>
            )}

            {nextLesson ? (
              <Link
                to={`/vibecode/${getLessonSlug(nextLesson.id)}`}
                className="px-3.5 py-1.5 rounded-full bg-[#141414] text-white hover:bg-[#E8772E] transition-all whitespace-nowrap"
              >
                Bài {nextLesson.id.toString().padStart(2, '0')} →
              </Link>
            ) : (
              <span className="px-3.5 py-1.5 rounded-full border border-[#E6E4DE] text-[#C9C7C0] bg-white/50 cursor-not-allowed whitespace-nowrap">
                Kết thúc →
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      {lesson ? <LessonOverviewHero lesson={lesson} /> : <DbLessonHero lesson={dbLesson} />}

      {/* 3. Segmented Route Progress Indicator */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-12 sm:pt-14">
        <div className="flex items-center gap-4 sm:gap-5 font-[family-name:var(--mono)] text-[11px] text-[#8A8883]">
          <span className="whitespace-nowrap">Lộ trình · {currentId}/10</span>
          <div className="flex-1 grid grid-cols-10 gap-1 sm:gap-1.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="h-[4px] rounded-full transition-colors"
                style={{
                  background:
                    i + 1 === currentId
                      ? '#E8772E'
                      : i + 1 < currentId
                      ? '#141414'
                      : '#E6E4DE',
                }}
              />
            ))}
          </div>
          <span className="text-[#E8772E] whitespace-nowrap font-medium">Bài {currentNumStr}</span>
        </div>
      </section>

      {/* 4. Contents List (Checklist style with progress) */}
      <SubLessonList subLessons={displayedModules} lessonSlug={lessonSlug} />

      {/* 5. What You'll Learn (Bento Grid) */}
      <WhatYoullLearn items={whatYoullLearn} lessonId={currentId} />

      {/* 6. Next Up Section (Dark Banner with Remaining List) */}
      {lesson ? (
        <LessonNextUp
          currentLesson={lesson}
          nextLesson={nextLesson}
          remainingLessons={remainingLessons}
        />
      ) : dbLesson ? (
        <LessonNextUp
          currentLesson={{ id: currentId, title: dbLesson.title, slug: lessonSlug } as any}
          nextLesson={nextLesson}
          remainingLessons={remainingLessons}
        />
      ) : null}
    </div>
  );
}

function DbLessonHero({ lesson }: { lesson: PublicLessonPayload['lesson'] | null }) {
  if (!lesson) return null;
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-12 items-start">
      <div className="min-w-0">
        <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">
          Bài · {String(lesson.sortOrder).padStart(2, '0')} / 10
        </div>
        <h1 className="mt-3.5 text-[clamp(36px,5vw,68px)] leading-[1.04] tracking-[-0.05em] font-semibold text-[#141414]">
          {lesson.title}
        </h1>
        <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.65] text-[#3A3935] max-w-[580px]">
          {lesson.summary || 'Đang hiển thị lesson từ database.'}
        </p>
      </div>
      <aside className="bg-white border border-[#E6E4DE] rounded-[20px] p-6 shadow-sm">
        <div className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883] mb-2 uppercase">
          Thông tin bài học
        </div>
        <div className="flex justify-between items-center py-3 border-b border-[#F1EFEA] text-[14px]">
          <span className="text-[#8A8883]">Số phần</span>
          <span className="font-medium text-[#141414]">{lesson.modules.length} bài nhỏ</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-[#F1EFEA] text-[14px]">
          <span className="text-[#8A8883]">Thời lượng</span>
          <span className="font-medium text-[#141414]">~{lesson.estimatedMinutes} phút</span>
        </div>
      </aside>
    </section>
  );
}

function getWhatYoullLearn(lessonId: number) {
  const data: Record<number, { icon?: ReactNode; title: string; desc: string }[]> = {
    1: [
      {
        title: 'Vibecode là gì',
        desc: 'Định nghĩa rõ ràng, không dùng từ kỹ thuật. Giải thích được cho đồng nghiệp nghe.',
      },
      {
        title: 'Tại sao nó phù hợp với bạn',
        desc: 'Tại sao Marketer cần vibecode hơn bất kỳ ai khác.',
      },
      {
        title: 'Vibecode so với học code',
        desc: 'Khác nhau ở đâu, phù hợp với ai.',
      },
      {
        title: 'Use case thực tế',
        desc: 'Xem những thứ Marketer khác đã tự build.',
      },
      {
        title: 'Bạn cần gì để bắt đầu',
        desc: 'Danh sách cần/không cần trước khi bước vào bài 2.',
      },
    ],
    2: [
      {
        title: 'AI, model, prompt',
        desc: 'Hiểu 3 khái niệm gốc để biết mình đang nói chuyện với cái gì.',
      },
      {
        title: 'Input vs output',
        desc: 'Biết vì sao kết quả dở thường bắt nguồn từ brief dở.',
      },
      {
        title: 'Tại sao marketer nên hiểu tech',
        desc: 'Đủ để không lệ thuộc và biết cách kiểm soát AI.',
      },
      {
        title: 'Case prompt sai',
        desc: 'Thấy rõ AI không sai ngẫu nhiên, mà sai vì thiếu ngữ cảnh.',
      },
      {
        title: 'Trang từ điển thuật ngữ',
        desc: 'Có sẵn một nơi riêng để tra cứu lại khi cần prompt hoặc sửa lỗi.',
      },
    ],
    3: [
      {
        title: 'Node.js & VS Code',
        desc: 'Hiểu vì sao cần cài và cách kiểm tra môi trường chạy code.',
      },
      {
        title: 'Git & GitHub',
        desc: 'Cỗ máy thời gian và nơi lưu trữ code an toàn trên cloud.',
      },
      {
        title: 'Vercel & Supabase',
        desc: 'Deploy web một click và kết nối database cloud miễn phí.',
      },
      {
        title: 'AI IDE',
        desc: 'Cursor, Claude Code, Trae, Antigravity — chọn công cụ phù hợp với túi tiền.',
      },
      {
        title: 'Quy trình nhờ AI cài hộ',
        desc: 'Không cần thuộc lòng câu lệnh — để AI chỉ dẫn từng bước theo hệ điều hành.',
      },
    ],
    4: [
      {
        title: 'Quy trình dựng UI đúng',
        desc: 'Dựng giao diện trước — chốt visual — rồi mới code tính năng vào sau.',
      },
      {
        title: 'Nguồn tìm reference',
        desc: 'Mobbin, Dribbble, Pinterest, Dark.design — không bắt đầu từ trang giấy trắng.',
      },
      {
        title: 'DESIGN.md',
        desc: 'Biến cảm hứng thành context cụ thể (màu, font, spacing, component) cho AI.',
      },
      {
        title: '8 công cụ tạo UI nhanh',
        desc: 'AI Studio, Stitch, Base44, Lovable, Figma Make, Claude Design, v0, Replit.',
      },
      {
        title: 'Đưa vào AI IDE',
        desc: 'Dùng code đã tạo để tiếp tục phát triển tính năng và chuẩn bị deploy.',
      },
    ],
  };

  return data[lessonId] || data[1];
}
