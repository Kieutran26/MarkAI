import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle2, ChevronRight, BookOpen, Clock, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { lessons } from '../lib/lessons';

// Map chapter index to slug
const slugMap = lessons.reduce((acc, lesson) => {
  acc[lesson.id] = lesson.slug;
  return acc;
}, {} as Record<number, string>);

interface Lesson {
  id: string;
  title: string;
  sub: string;
  tag: string;
}

interface Chapter {
  title: string;
  subtitle: string;
  progress: string;
  lessons: Lesson[];
}

const curriculum: Chapter[] = [
  {
    title: "Vibecode là gì? Khó không? Giúp gì cho Marketer?",
    subtitle: "Introduction to Vibecode for Marketers",
    progress: "0/5",
    lessons: [
      { id: "1.1", title: "Vibecode là gì — định nghĩa không-tech", sub: "Non-tech definition", tag: "CƠ BẢN" },
      { id: "1.2", title: "Tại sao Marketer lại cần biết vibecode", sub: "Why marketers need it", tag: "CƠ BẢN" },
      { id: "1.3", title: "Những điều marketer có thể làm ngay khi biết AI", sub: "Immediate AI wins", tag: "ỨNG DỤNG" },
      { id: "1.4", title: "Bạn cần biết gì", sub: "Prerequisites", tag: "CƠ BẢN" },
      { id: "1.5", title: "Bạn cần biết gì trước khi bắt đầu", sub: "Prerequisites", tag: "CƠ BẢN" }
    ]
  },
  {
    title: "AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?",
    subtitle: "AI Fundamentals for Marketers",
    progress: "0/5",
    lessons: [
      { id: "2.1", title: "AI, Model, Prompt là gì?", sub: "Khái niệm gốc", tag: "CƠ BẢN" },
      { id: "2.2", title: "Input vs Output", sub: "Cặp khái niệm nền tảng", tag: "CƠ BẢN" },
      { id: "2.3", title: "Tại sao marketer cần hiểu tech?", sub: "Mindset làm việc với AI", tag: "MINDSET" },
      { id: "2.4", title: "Case thực tế: ChatGPT viết content sai vì prompt", sub: "Case study thực chiến", tag: "CASE" },
      { id: "2.5", title: "Từ điển chuyên ngành", sub: "Trang tra cứu riêng", tag: "GLOSSARY" }
    ]
  },
  {
    title: "Cài gì vào máy để bắt đầu",
    subtitle: "Setting up your Development Environment",
    progress: "0/6",
    lessons: [
      { id: "3.1", title: "Tổng quan — cần cài gì, theo thứ tự nào", sub: "Installation order", tag: "SETUP" },
      { id: "3.2", title: "Cài Node.js", sub: "The engine", tag: "SETUP" },
      { id: "3.3", title: "Cài VS Code", sub: "The editor", tag: "SETUP" },
      { id: "3.4", title: "Cài Cursor", sub: "The AI Code Editor", tag: "SETUP" },
      { id: "3.5", title: "Cài Git", sub: "Version Control", tag: "SETUP" },
      { id: "3.6", title: "Cài Claude Code", sub: "The Agent CLI", tag: "SETUP" }
    ]
  },
  {
    title: "Làm quen VS Code & Cursor",
    subtitle: "Mastering the AI Editor Interface",
    progress: "0/6",
    lessons: [
      { id: "4.1", title: "Giao diện VS Code & Explorer", sub: "Interface overview", tag: "BASIC" },
      { id: "4.2", title: "Đọc cấu trúc thư mục Next.js", sub: "Project structure", tag: "ANALYSIS" },
      { id: "4.3", title: "Terminal tích hợp", sub: "Integrated Terminal", tag: "COMMANDS" },
      { id: "4.4", title: "Giao diện Cursor vs VS Code", sub: "The diff", tag: "CONCEPT" },
      { id: "4.5", title: "Chat vs Composer trong Cursor", sub: "Workflow modes", tag: "TIP" },
      { id: "4.6", title: "Phím tắt hay dùng nhất", sub: "Hotkeys for speed", tag: "SPEED" }
    ]
  },
  {
    title: "Làm quen Claude Code",
    subtitle: "Interacting with AI Agents",
    progress: "0/5",
    lessons: [
      { id: "5.1", title: "Claude Code là gì", sub: "Agent vs Editor", tag: "CONCEPT" },
      { id: "5.2", title: "Chạy Claude Code lần đầu", sub: "Initialization", tag: "PRACTICE" },
      { id: "5.3", title: "Các lệnh hay dùng nhất", sub: "Plan, Edit, Run", tag: "COMMANDS" },
      { id: "5.4", title: "Khi nào dùng Claude, khi nào dùng Cursor", sub: "Tool selection", tag: "WORKFLOW" },
      { id: "5.5", title: "Claude Code + Cursor kết hợp", sub: "Hybrid workflow", tag: "PRO" }
    ]
  },
  {
    title: "Công cụ & website hữu ích",
    subtitle: "The AI Development Ecosystem",
    progress: "0/6",
    lessons: [
      { id: "6.1", title: "v0.dev — sinh UI từ mô tả", sub: "Generative UI", tag: "DESIGN" },
      { id: "6.2", title: "Bolt.new — tạo app nhanh", sub: "Rapid prototyping", tag: "TOOL" },
      { id: "6.3", title: "Vercel — deploy miễn phí", sub: "Hosting & CI/CD", tag: "DEPLOY" },
      { id: "6.4", title: "Shadcn/ui — thư viện component", sub: "Copy-paste UI", tag: "BUILD" },
      { id: "6.5", title: "21st.dev & Magicpatterns", sub: "UI Repositories", tag: "RESOURCES" },
      { id: "6.6", title: "So sánh nhanh các tool", sub: "Summary", tag: "SUMMARY" }
    ]
  },
  {
    title: "Cách prompt cho AI hiểu để code đúng ý",
    subtitle: "Advanced Prompt Engineering for Code",
    progress: "0/6",
    lessons: [
      { id: "7.1", title: "Tại sao AI code sai", sub: "Root causes", tag: "ANALYSIS" },
      { id: "7.2", title: "Cấu trúc một prompt code tốt", sub: "Context & Constraints", tag: "LOGIC" },
      { id: "7.3", title: "Cách mô tả UI cho AI", sub: "UI Description", tag: "DESIGN" },
      { id: "7.4", title: "Dùng Prompt Library sẵn có", sub: "Skip the cold start", tag: "SPEED" },
      { id: "7.5", title: "Prompt theo từng tình huống", sub: "Feature vs Refactor", tag: "PRACTICE" },
      { id: "7.6", title: "Những câu prompt hay dùng", sub: "Cheat sheet", tag: "SPEED" }
    ]
  },
  {
    title: "Khi AI code sai — đọc lỗi & vá lỗi",
    subtitle: "Debugging and Troubleshooting",
    progress: "0/6",
    lessons: [
      { id: "8.1", title: "Đừng hoảng — quy trình xử lý", sub: "Workflow", tag: "TIP" },
      { id: "8.2", title: "Đọc error message chuyên sâu", sub: "Error analysis", tag: "DEBUG" },
      { id: "8.3", title: "Các lỗi phổ biến nhất", sub: "Hydration, Imports, etc.", tag: "FIX" },
      { id: "8.4", title: "Prompt vá lỗi", sub: "Debugging prompts", tag: "PRACTICE" },
      { id: "8.5", title: "Khi AI fix mãi không xong", sub: "When to stop", tag: "TIP" },
      { id: "8.6", title: "Dùng Git để cứu project", sub: "Rollbacks", tag: "SAFETY" }
    ]
  },
  {
    title: "Tạo Skills & Workflow cá nhân",
    subtitle: "Personalizing your AI Workflow",
    progress: "0/5",
    lessons: [
      { id: "9.1", title: "Cursor Rules là gì", sub: "Project context", tag: "PRO" },
      { id: "9.2", title: "CLAUDE.md", sub: "Agent instructions", tag: "PRO" },
      { id: "9.3", title: "MCP là gì", sub: "Extending AI", tag: "ADVANCED" },
      { id: "9.4", title: "Workflow thực tế từ ý tưởng", sub: "Zero to Hero", tag: "SUMMARY" },
      { id: "9.5", title: "Cộng đồng Cursor Rules", sub: "Resources", tag: "COMMUNITY" }
    ]
  },
  {
    title: "Deploy + Tracking",
    subtitle: "Launching and Measuring",
    progress: "0/5",
    lessons: [
      { id: "10.1", title: "Deploy lên Vercel lần đầu", sub: "Go live", tag: "LAUNCH" },
      { id: "10.2", title: "Gắn domain riêng", sub: "Custom domain", tag: "SETUP" },
      { id: "10.3", title: "Cài PostHog", sub: "User analytics", tag: "TRACKING" },
      { id: "10.4", title: "Gắn Google Search Console", sub: "SEO setup", tag: "SEO" },
      { id: "10.5", title: "Checklist trước khi share", sub: "Final check", tag: "QUALITY" }
    ]
  }
];

interface CurriculumChapterProps {
  chapter: Chapter;
  index: number;
  isCurrentLesson: boolean;
}

const CurriculumChapter: React.FC<CurriculumChapterProps> = ({ chapter, index, isCurrentLesson }) => {
  const [isOpen, setIsOpen] = useState(index === 0 || isCurrentLesson);
  const chapterNumber = (index + 1).toString().padStart(2, '0');

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'CƠ BẢN': return 'text-green-600 bg-green-50/50 border-green-100';
      case 'ỨNG DỤNG': return 'text-blue-600 bg-blue-50/50 border-blue-100';
      case 'DESIGN': return 'text-purple-600 bg-purple-50/50 border-purple-100';
      case 'GIT': return 'text-gray-600 bg-gray-50 border-gray-200';
      case 'AI CODE': return 'text-accent bg-accent/5 border-accent/10';
      case 'LAUNCH': return 'text-accent bg-accent/5 border-accent/10';
      default: return 'text-muted bg-bg2/50 border-border';
    }
  }

  return (
    <div className={`border border-border bg-bg overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-sm ring-1 ring-accent/5' : 'hover:bg-bg2/20'}`}>
      {/* Chapter Header */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 sm:p-6 flex items-center gap-5 cursor-pointer group select-none"
      >
        <div className="font-serif text-[1.8rem] leading-none text-ink/40 group-hover:text-accent transition-colors shrink-0 w-8">
          {chapterNumber}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted opacity-60">CHƯƠNG {(index + 1)}</span>
          </div>
          <h3 className="font-serif text-[1.1rem] sm:text-[1.3rem] text-ink group-hover:text-accent transition-colors leading-tight">
            {chapter.title}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-muted whitespace-nowrap">{chapter.progress}</span>
          <button className={`w-6 h-6 flex items-center justify-center transition-all ${isOpen ? 'text-accent rotate-180' : 'text-muted'}`}>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lessons List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="border-t border-border bg-bg/20">
              {chapter.lessons.map((lesson, lIdx) => (
                <Link 
                  key={lIdx}
                  to={`/vibecode/${slugMap[index + 1]}`}
                  className="group/lesson flex items-center gap-4 py-4 px-6 sm:px-8 border-b border-border/40 last:border-0 hover:bg-bg transition-all no-underline"
                >
                  <div className="font-mono text-[10px] text-muted group-hover/lesson:text-accent w-8 shrink-0">
                    {lesson.id}
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-serif text-[1.05rem] text-ink group-hover/lesson:text-accent transition-colors">
                      {lesson.title}
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <span className={`px-2 py-0.5 border font-mono text-[9px] transition-colors ${getTagColor(lesson.tag)}`}>
                      {lesson.tag}
                    </span>
                  </div>
                  
                  <ChevronRight className="w-3 h-3 text-border group-hover/lesson:text-accent group-hover/lesson:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function VibecodeCourse() {
  const [lastLesson, setLastLesson] = useState<number | null>(null);

  useEffect(() => {
    const progress = localStorage.getItem('lesson_progress');
    if (progress) {
      setLastLesson(parseInt(progress));
    }
  }, []);

  const totalLessons = curriculum.reduce((acc, curr) => acc + curr.lessons.length, 0);
  const totalChapters = curriculum.length;
  // Estimate completed lessons based on lastLesson (chapter index)
  const completedCount = lastLesson ? curriculum.slice(0, lastLesson - 1).reduce((acc, curr) => acc + curr.lessons.length, 0) + 1 : 0;
  const lessonsCompleted = Math.min(totalLessons, completedCount);
  const progressPercent = Math.round((lessonsCompleted / totalLessons) * 100);
  const remainingLessons = totalLessons - lessonsCompleted;

  return (
    <div className="bg-bg min-h-screen">
      {/* Header Section */}
      <section className="border-b border-border bg-bg pt-24 pb-12 px-0">
        <div className="page-shell-course">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-10"
          >
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-6 opacity-60">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Vibecode Academy</span>
                <span className="w-1 h-1 rounded-full bg-border mt-1.5"></span>
                <span className="font-mono text-[10px] uppercase tracking-widest">Marketer Dev Path</span>
              </div>
              
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-2 text-ink">
                Vibecode Web <br />
                <em className="text-accent italic">Bắt đầu từ số không.</em>
              </h1>
            </div>

            {/* Tiếp tục Card in Header */}
            <div className="w-full md:w-[380px] shrink-0">
              <div className="bg-ink text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-serif text-[1.4rem] mb-6 text-white/90 italic">Tiếp tục?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <div className="font-mono text-[9px] uppercase text-white/40 tracking-[0.2em] mb-1">Đang học</div>
                        <div className="font-serif text-[1.1rem] line-clamp-1">{lastLesson ? curriculum[lastLesson-1].title : 'Bài 01: Giới thiệu'}</div>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/vibecode/${slugMap[lastLesson || 1]}`}
                      className="w-full bg-accent text-white no-underline py-4 font-mono text-[11px] uppercase tracking-widest hover:bg-bg hover:text-accent transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent/20"
                    >
                      {lastLesson ? 'Học tiếp ngay' : 'Bắt đầu ngay'} <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-bg/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 px-0">
        <div className="page-shell-course">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
            
            {/* Left: Curriculum */}
            <div className="flex flex-col gap-8">
              <div className="flex items-end justify-between border-b border-border pb-4">
                <h2 className="font-serif text-[1.6rem] text-ink">Nội dung lộ trình</h2>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="font-mono text-[10px] text-muted uppercase">Cập nhật 2026</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                {curriculum.map((item, idx) => (
                  <CurriculumChapter 
                    key={idx} 
                    chapter={item} 
                    index={idx} 
                    isCurrentLesson={lastLesson === idx + 1}
                  />
                ))}
              </div>
            </div>

            {/* Right: Sticky Sidebar (Minimal) */}
            <aside className="lg:sticky lg:top-24 flex flex-col gap-6">
              {/* Stats Sidebar Block */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-bg border border-border p-4 shadow-sm group hover:border-accent transition-colors">
                  <div className="font-mono text-[8px] uppercase text-muted mb-1 tracking-wider font-bold">Bài đã học</div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-[1.2rem] text-ink leading-none">{lessonsCompleted}</span>
                    <span className="font-mono text-[9px] text-muted">/{totalLessons}</span>
                  </div>
                </div>
                
                <div className="bg-bg border border-border p-4 shadow-sm group hover:border-accent transition-colors">
                  <div className="font-mono text-[8px] uppercase text-muted mb-1 tracking-wider font-bold">% Xong</div>
                  <div className="font-serif text-[1.2rem] text-ink leading-none">{progressPercent}%</div>
                </div>

                <div className="bg-bg border border-border p-4 shadow-sm group hover:border-accent transition-colors">
                  <div className="font-mono text-[8px] uppercase text-muted mb-1 tracking-wider font-bold">Số chương</div>
                  <div className="font-serif text-[1.2rem] text-ink leading-none">{totalChapters}</div>
                </div>

                <div className="bg-bg border border-border p-4 shadow-sm group hover:border-accent transition-colors">
                  <div className="font-mono text-[8px] uppercase text-muted mb-1 tracking-wider font-serif italic text-accent capitalize">Còn lại</div>
                  <div className="font-serif text-[1.2rem] text-accent leading-none">{remainingLessons}</div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-0 border-t border-border bg-bg">
        <div className="page-shell-narrow text-center">
          <h2 className="font-serif text-[2rem] mb-6 italic">Mọi thứ bạn cần để làm chủ website.</h2>
          <Link to="/vibecode/vibecode-la-gi" className="inline-block border border-ink px-10 py-4 font-mono text-[11px] uppercase tracking-widest hover:bg-ink hover:text-white transition-all no-underline">
            Ghi danh miễn phí
          </Link>
        </div>
      </section>
    </div>
  );
}

