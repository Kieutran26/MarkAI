import { useParams, Link } from 'react-router-dom';
import { getLessonBySlug, getNextLesson, getRemainingLessons } from '../lib/lessons';
import LessonOverviewHero from '../components/lesson/LessonOverviewHero';
import SubLessonList from '../components/lesson/SubLessonList';
import WhatYoullLearn from '../components/lesson/WhatYoullLearn';
import LessonNextUp from '../components/lesson/LessonNextUp';

export default function LessonOverview() {
  const params = useParams();
  const lessonSlug = params.lessonSlug || '';
  const lesson = getLessonBySlug(lessonSlug);

  if (!lesson) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Bài học không tồn tại</h1>
          <p className="text-muted mb-6">Slug: {lessonSlug}</p>
          <Link to="/vibecode" className="btn-primary">
            Quay lại lộ trình
          </Link>
        </div>
      </div>
    );
  }

  const nextLesson = getNextLesson(lesson.id);
  const remainingLessons = getRemainingLessons(lesson.id);

  const whatYoullLearn = getWhatYoullLearn(lesson.id);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-wrap">
        <div className="breadcrumb">
          <Link to="/">markAI</Link>
          <span>/</span>
          <Link to="/vibecode">Vibecode Web</Link>
          <span>/</span>
          <span>Bài {lesson.id.toString().padStart(2, '0')}</span>
        </div>
      </div>

      {/* Hero */}
      <LessonOverviewHero lesson={lesson} />

      {/* Progress Bar */}
      <ProgressBar currentLesson={lesson.id} />

      {/* Sub Lesson List */}
      <SubLessonList subLessons={lesson.subLessons} lessonSlug={lessonSlug} />

      {/* What You'll Learn */}
      <WhatYoullLearn items={whatYoullLearn} lessonId={lesson.id} />

      {/* Next Lesson */}
      <LessonNextUp
        currentLesson={lesson}
        nextLesson={nextLesson}
        remainingLessons={remainingLessons}
      />
    </div>
  );
}

function ProgressBar({ currentLesson }: { currentLesson: number }) {
  return (
    <div className="progress-bar-wrap">
      <div className="progress-bar-inner">
        <span className="progress-label">LỘ TRÌNH · {currentLesson}/10</span>
        <div className="progress-steps">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`progress-step ${
                i + 1 < currentLesson ? 'done' : i + 1 === currentLesson ? 'active' : ''
              }`}
            />
          ))}
        </div>
        <span className="progress-label text-accent">BÀI {currentLesson.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
}

function getWhatYoullLearn(lessonId: number) {
  const data: Record<number, { icon: string; title: string; desc: string }[]> = {
    1: [
      { icon: '✳ 01', title: 'Vibecode là gì', desc: 'Định nghĩa rõ ràng, không dùng từ kỹ thuật. Giải thích được cho đồng nghiệp nghe.' },
      { icon: '✳ 02', title: 'Tại sao nó phù hợp với bạn', desc: 'Tại sao Marketer cần vibecode hơn bất kỳ ai khác — và tại sao bây giờ là lúc bắt đầu.' },
      { icon: '✳ 03', title: 'Vibecode so với học code', desc: 'Khác nhau ở đâu, phù hợp với ai — để bạn chắc chắn đang đi đúng đường.' },
      { icon: '✳ 04', title: 'Use case thực tế', desc: 'Xem những thứ Marketer khác đã tự build — landing page, tool nội bộ, chatbot, dashboard.' },
      { icon: '✳ 05', title: 'Bạn cần gì để bắt đầu', desc: 'Danh sách cần/không cần — xác nhận bạn đã sẵn sàng trước khi bước vào bài 2.' },
      { icon: '✳ Kết quả', title: 'Sẵn sàng cho bài 02', desc: 'Sau bài này, bạn đã có đủ tư duy để tiếp tục cài đặt môi trường và bắt đầu vibecode thật sự.' },
    ],
    2: [
      { icon: '✳ 01', title: 'File & Thư mục', desc: 'Hiểu cách máy tính tổ chức dữ liệu — folder, root, path, extension.' },
      { icon: '✳ 02', title: 'Frontend vs Backend', desc: 'Phân biệt 3 từ hay gặp khi AI nói về "phía nào" của ứng dụng.' },
      { icon: '✳ 03', title: 'Từ ngữ UI/Layout', desc: 'Padding, margin, flex, grid, responsive — đủ để đọc hiểu khi AI mô tả.' },
      { icon: '✳ 04', title: 'Từ ngữ về code', desc: 'Function, component, props, state — những từ khiến người mới sợ, thực ra dễ hiểu.' },
      { icon: '✳ 05', title: 'Từ ngữ về môi trường', desc: 'Localhost, port, env, build, production — những từ hay xuất hiện khi chạy project.' },
      { icon: '✳ Kết quả', title: 'Sẵn sàng cho bài 03', desc: 'Sau bài này, bạn có thể đọc hiểu khi AI nói chuyện về code.' },
    ],
    3: [
      { icon: '✳ 01', title: 'Tổng quan setup', desc: 'Bức tranh lớn trước — biết mình sẽ cài gì và tại sao.' },
      { icon: '✳ 02', title: 'Node.js', desc: 'Tại sao cần và cách cài đặt Node.js.' },
      { icon: '✳ 03', title: 'VS Code', desc: 'Code editor chuẩn và những extension cần thiết.' },
      { icon: '✳ 04', title: 'Cursor', desc: 'VS Code + AI — chính là tool vibecode chính.' },
      { icon: '✳ 05', title: 'Git & GitHub', desc: 'Kết nối với GitHub lần đầu để backup code.' },
      { icon: '✳ Kết quả', title: 'Sẵn sàng vibecode', desc: 'Sau bài này, bạn có đủ môi trường để bắt đầu vibecode.' },
    ],
  };

  return data[lessonId] || data[1];
}
