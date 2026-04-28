import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    { cat: "WORKFLOW", title: "Setup Cursor Rule chuẩn cho UI Brutalist", desc: "Cách cấu hình file rule để AI luôn export ra đúng chuẩn không border-radius...", date: "24·04·2026", min: "5 phút" },
    { cat: "TOOL REVIEW", title: "Claude Code vs Cursor: Chọn cái nào?", desc: "Phân tích ưu nhược điểm của 2 công cụ AI code mạnh nhất hiện nay cho người...", date: "20·04·2026", min: "8 phút" },
    { cat: "CASE STUDY", title: "Thiết kế markAI.vn bằng AI trong 4 tiếng", desc: "Hành trình từ Master Prompt đến website hoàn chỉnh với đầy đủ design system...", date: "15·04·2026", min: "12 phút" },
    { cat: "DEPLOY", title: "Đưa web lên Vercel miễn phí 100%", desc: "Hướng dẫn từng bước mua tên miền rẻ và trỏ về Vercel mà không tốn phí duy trì server...", date: "10·04·2026", min: "4 phút" },
    { cat: "VIBECODE", title: "Layout Grid vs Flexbox: Dùng sao cho đúng?", desc: "Hiểu bản chất để prompt chính xác bố cục bạn muốn thay vì mày mò từng CSS class...", date: "05·04·2026", min: "6 phút" },
    { cat: "ANALYTICS", title: "Gắn PostHog để xem user rớt ở đâu", desc: "Thay thế Google Analytics bằng PostHog để có session replay và heatmap chi tiết...", date: "01·04·2026", min: "7 phút" }
  ];

  return (
    <div className="py-16 px-5 max-w-[1200px] mx-auto min-h-screen">
      <div className="mb-12">
        <p className="section-label"><span>✳</span> blog & articles</p>
        <h2 className="section-heading text-[clamp(2rem,4.5vw,3.5rem)] mb-4">Đọc · Hiểu · <em className="text-accent italic">Áp dụng.</em></h2>
        <p className="font-sans text-[15px] text-ink2 max-w-[600px]">
          Chia sẻ kiến thức, kinh nghiệm thực chiến và các bài hướng dẫn chi tiết về AI Marketing, Vibecode và quy trình làm việc hiện đại.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:border-t sm:border-l border-border">
        {posts.map((post, idx) => (
          <Link to="#" key={idx} className="group block p-8 border-r border-b border-border hover:bg-bg2 transition-colors relative min-h-[260px] flex flex-col no-underline active:bg-bg3">
            <div className="mb-4"><span className="badge badge-dark">{post.cat}</span></div>
            <h3 className="font-serif text-[1.4rem] text-ink mb-3 leading-[1.3] line-clamp-2">{post.title}</h3>
            <p className="font-sans text-[14px] text-ink2 leading-[1.6] line-clamp-3 mb-6 flex-1">
              {post.desc}
            </p>
            <div className="font-mono text-[11px] text-muted">
              {post.min} đọc · {post.date}
            </div>
            <div className="absolute bottom-8 right-8 font-mono text-[16px] text-muted group-hover:text-accent group-hover:translate-x-[4px] transition-all">
              →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
