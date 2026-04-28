import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const lessonData: Record<string, any> = {
  "1": {
    title: "Vibecode là gì? Khó không? Giúp gì cho Marketer?",
    badge: "Bài 01 · Bắt đầu",
    content: `
      ## 1. vibecode là gì?
      vibecode không phải là một ngôn ngữ lập trình mới. nó là một **tư duy làm việc** mới. 
      thay vì tự viết từng dòng mã bằng tay (coding), bạn "ra lệnh" cho AI viết mã dựa trên ý tưởng của mình.
      
      ## 2. tại sao marketer cần học?
      - tự dựng landing page trong 1 buổi sáng thay vì chờ dev 1 tuần.
      - tự gắn tracking, analytics mà không cần kiến thức it sâu rộng.
      - hiểu bản chất "dưới nắp capo" của các website mình đang làm marketing.

      ## 3. mục tiêu bài học
      1.1 Vibecode là gì — định nghĩa không-tech
      1.2 Tại sao Marketer lại cần biết vibecode
      1.3 Vibecode khác học code truyền thống thế nào
      1.4 Những thứ Marketer đã build được bằng vibecode (case thực tế)
      1.5 Bạn cần biết gì trước khi bắt đầu — và những thứ bạn KHÔNG cần biết
    `,
    time: "20 phút",
    tags: ["tư duy", "marketing", "ai"]
  },
  "2": {
    title: "Từ ngữ chuyên ngành code & design",
    badge: "Bài 02 · Concept",
    content: `
      ## Nội dung chính:
      2.1 Các khái niệm về file & thư mục (folder, root, path, extension)
      2.2 Frontend vs Backend vs Fullstack — hiểu đủ dùng
      2.3 Từ ngữ UI/layout hay gặp (padding, margin, flex, grid, responsive)
      2.4 Từ ngữ về code hay gặp khi AI nói chuyện (function, component, props, state)
      2.5 Từ ngữ về môi trường & deploy (localhost, port, env, build, production)
      2.6 Từ ngữ về Git (repo, commit, push, branch, merge)
    `,
    time: "40 phút",
    tags: ["concept", "design", "terminology"]
  },
  "3": {
    title: "Cài gì vào máy để bắt đầu",
    badge: "Bài 03 · Setup",
    content: `
      ## Nội dung chính:
      3.1 Tổng quan — cần cài gì, theo thứ tự nào
      3.2 Cài Node.js — tại sao cần, cài thế nào, kiểm tra thành công
      3.3 Cài VS Code — cài extension gì ngay từ đầu
      3.4 Cài Cursor — cách lấy bản free, setting đầu tiên
      3.5 Cài Git — kết nối với GitHub lần đầu
      3.6 Cài Claude Code — yêu cầu, cách cài, chạy thử lần đầu
    `,
    time: "30 phút",
    tags: ["setup", "install", "environment"]
  },
  "4": {
    title: "Làm quen VS Code & Cursor",
    badge: "Bài 04 · Interface",
    content: `
      ## Nội dung chính:
      4.1 Giao diện VS Code — Explorer, Terminal, Extensions, mở project
      4.2 Đọc cấu trúc thư mục một project Next.js — file nào làm gì
      4.3 Terminal tích hợp — mở, chạy lệnh cơ bản, không sợ màn hình đen
      4.4 Giao diện Cursor — khác VS Code ở chỗ nào
      4.5 Chat vs Composer trong Cursor — dùng cái nào khi nào
      4.6 Phím tắt hay dùng nhất — 10 cái đủ sống
    `,
    time: "25 phút",
    tags: ["vscode", "cursor", "shortcuts"]
  },
  "5": {
    title: "Làm quen Claude Code",
    badge: "Bài 05 · AI Agent",
    content: `
      ## Nội dung chính:
      5.1 Claude Code là gì — khác Cursor ở điểm nào
      5.2 Chạy Claude Code lần đầu — vào project, gõ lệnh đầu tiên
      5.3 Các lệnh hay dùng nhất (plan, edit, run, review)
      5.4 Khi nào dùng Claude Code, khi nào dùng Cursor
      5.5 Claude Code + Cursor kết hợp — workflow thực tế
    `,
    time: "35 phút",
    tags: ["claude code", "agent", "automation"]
  },
  "6": {
    title: "Công cụ & website hữu ích",
    badge: "Bài 06 · Eco",
    content: `
      ## Nội dung chính:
      6.1 v0.dev — sinh UI từ mô tả, copy vào Cursor
      6.2 Bolt.new — tạo app nhanh từ prompt, khi nào nên dùng
      6.3 Vercel — deploy miễn phí, kết nối GitHub
      6.4 Shadcn/ui — thư viện component, copy-paste vào project
      6.5 21st.dev & Magicpatterns — lấy component đẹp sẵn
      6.6 So sánh nhanh — dùng tool nào cho việc gì
    `,
    time: "25 phút",
    tags: ["v0.dev", "vercel", "shadcn"]
  },
  "7": {
    title: "Cách prompt cho AI hiểu để code đúng ý",
    badge: "Bài 07 · Prompt",
    content: `
      ## Nội dung chính:
      7.1 Tại sao AI code sai — lỗi thường đến từ prompt, không phải AI
      7.2 Cấu trúc một prompt code tốt — context, yêu cầu, ràng buộc
      7.3 Cách mô tả UI cho AI không bị hiểu nhầm
      7.4 Dùng Prompt Library sẵn có — đừng tự viết từ đầu
      7.5 Prompt theo từng tình huống — thêm tính năng, sửa giao diện, refactor
      7.6 Những câu prompt hay dùng nhất — copy & điều chỉnh
    `,
    time: "30 phút",
    tags: ["prompting", "logic", "structure"]
  },
  "8": {
    title: "Khi AI code sai — đọc lỗi & vá lỗi",
    badge: "Bài 08 · Debug",
    content: `
      ## Nội dung chính:
      8.1 Đừng hoảng — phân biệt lỗi nhỏ vs lỗi cần undo
      8.2 Đọc error message — tìm dòng quan trọng trong đống chữ đỏ
      8.3 Các lỗi phổ biến nhất & cách xử lý (module not found, port in use, build fail, hydration error)
      8.4 Prompt vá lỗi — cách paste lỗi cho AI fix đúng cách
      8.5 Khi AI fix mãi không xong — khi nào nên undo, khi nào nên hỏi cộng đồng
      8.6 Dùng Git để "cứu" project khi mọi thứ vỡ
    `,
    time: "45 phút",
    tags: ["debug", "error", "fixing"]
  },
  "9": {
    title: "Tạo Skills & Workflow cá nhân",
    badge: "Bài 09 · Workflow",
    content: `
      ## Nội dung chính:
      9.1 Cursor Rules là gì — viết rule đầu tiên cho project của bạn
      9.2 CLAUDE.md — file hướng dẫn AI viết theo đúng style của bạn
      9.3 MCP là gì — kết nối AI với Supabase, Vercel, Notion
      9.4 Workflow thực tế — từ ý tưởng đến code trong 1 buổi
      9.5 Những Cursor Rules & CLAUDE.md cộng đồng đang share nhiều nhất
    `,
    time: "45 phút",
    tags: ["rules", "mcp", "workflow"]
  },
  "10": {
    title: "Deploy + Tracking",
    badge: "Bài 10 · Launch",
    content: `
      ## Nội dung chính:
      10.1 Deploy lên Vercel lần đầu — từng bước không bỏ sót
      10.2 Gắn domain riêng vào Vercel
      10.3 Cài PostHog — theo dõi người dùng làm gì trên web
      10.4 Gắn Google Search Console — theo dõi SEO từ ngày đầu
      10.5 Checklist trước khi share link cho người khác
    `,
    time: "50 phút",
    tags: ["deploy", "tracking", "seo"]
  }
};

export default function Lesson() {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      localStorage.setItem('lesson_progress', id);
    }
    // Scroll to top on lesson change
    window.scrollTo(0, 0);
  }, [id]);

  const lesson = lessonData[id || "1"] || {
    title: "Bài học đang cập nhật",
    badge: `Bài ${id}`,
    content: "Nội dung bài học này đang được chuẩn bị. Vui lòng quay lại sau.",
    time: "??",
    tags: []
  };

  const currentId = parseInt(id || "1");

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
        {/* Main Content */}
        <div className="p-8 md:p-16 border-r border-border min-h-screen bg-white">
          <Link to="/vibecode" className="font-mono text-[11px] text-muted hover:text-accent transition-colors no-underline block mb-8">
            ← Quay lại lộ trình Vibecode
          </Link>
          <div className="mb-12">
            <span className="badge badge-accent mb-6 inline-block uppercase tracking-widest">{lesson.badge}</span>
            <h1 className="font-serif text-[2.8rem] leading-[1.1] mb-6 text-ink">
              {lesson.title}
            </h1>
            <div className="flex gap-4 items-center">
              <span className="font-mono text-[11px] text-muted">{lesson.time} thực hành</span>
              <div className="flex gap-2">
                {lesson.tags.map((tag: string) => (
                  <span key={tag} className="step-tag text-[9px] uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="prose prose-neutral max-w-none font-sans text-ink2 leading-[1.8] text-[16px]">
            <div className="whitespace-pre-line bg-bg2/30 p-8 border border-border">
              {lesson.content}
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-border flex justify-between items-center">
            {currentId > 1 ? (
              <Link to={`/lesson/${currentId - 1}`} className="btn-ghost">← Bài trước</Link>
            ) : <div />}
            {currentId < 10 ? (
              <Link to={`/lesson/${currentId + 1}`} className="btn-primary no-underline text-white">Bài tiếp theo →</Link>
            ) : (
              <div className="font-mono text-[12px] text-[#28CA41] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#28CA41] animate-ping"></span>
                ✳ Bạn đã hoàn thành lộ trình!
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block p-8 bg-bg">
          <div className="sticky top-24">
            <h3 className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">Lộ trình 10 bài</h3>
            <ul className="flex flex-col gap-1 list-none p-0">
              {Object.keys(lessonData).map((key) => {
                const i = parseInt(key);
                return (
                  <li key={i}>
                    <Link 
                      to={`/lesson/${i}`} 
                      className={`block p-3 font-mono text-[11px] border border-transparent transition-all no-underline leading-tight ${id === i.toString() ? 'bg-white border-border text-accent translate-x-2 shadow-sm' : 'text-muted hover:text-ink hover:translate-x-1'}`}
                    >
                      <div className="opacity-50 mb-1">BÀI 0{i}</div>
                      <div className="uppercase tracking-tighter">{lessonData[key].title.split(' — ')[1].substring(0, 30)}...</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-12 p-6 bg-ink text-bg">
              <div className="font-mono text-[10px] text-accent tracking-widest mb-4">GÓP Ý?</div>
              <p className="font-sans text-[12px] leading-relaxed mb-4 text-[#888]">
                Bạn thấy bài học khó hiểu? Hãy báo cho markAI nhé.
              </p>
              <Link to="/feedback" className="btn-ghost-inv !py-2 !px-4 !text-[10px] w-full text-center block no-underline border border-white/20">Gửi góp ý →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
