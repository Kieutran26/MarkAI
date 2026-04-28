import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users, Zap, Calendar, ShieldCheck } from 'lucide-react';
import TerminalAnimation from '../components/TerminalAnimation';
import Counter from '../components/Counter';

const Hero = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-[1200px] mx-auto px-5 md:px-8 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
  >
    <div>
      <p className="font-mono text-[11px] uppercase text-muted tracking-widest mb-4">
        ✳ AI cho dân Marketing · hoàn toàn miễn phí · 2026
      </p>
      <h1 className="font-serif text-[clamp(2.8rem,5.5vw,4.8rem)] leading-[1.05] tracking-tight mb-6 text-ink">
        Học AI không cần biết <span className="strike">lập trình.</span>
      </h1>
      <p className="font-sans text-[15px] leading-[1.7] text-ink2 mb-8 max-w-prose">
        Lộ trình từ zero: Vibecode web, Analytics, Generate Image, Motion Video. Thực chiến · tiếng Việt · không hàn lâm · dùng được ngay.
      </p>
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <Link to="/vibecode" className="btn-primary no-underline text-white">
          Bắt đầu Vibecode →
        </Link>
        <Link to="/blog" className="btn-ghost no-underline text-ink">
          Đọc blog mới nhất
        </Link>
      </div>
      <p className="font-mono text-[11px] text-muted">
        ✳ miễn phí · không cần email · không tracking
      </p>
    </div>
    <div className="hidden md:block">
      <TerminalAnimation />
    </div>
  </motion.div>
);

const StatsBar = () => {
  const stats = [
    { value: 10, label: "bài học vibecode" },
    { value: 4, label: "hướng dẫn AI sắp ra" },
    { value: 100, suffix: "%", label: "miễn phí mãi mãi" },
    { value: 0, label: "yêu cầu kiến thức code" },
  ];

  return (
    <div className="border-t border-b border-border">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex-1 min-w-[120px] p-8 border-b sm:border-b-0 sm:border-r border-border last:border-r-0 last:border-b-0"
          >
            <div className="font-serif text-[2.4rem] leading-none mb-1 text-ink">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-mono text-[11px] text-muted tracking-wide">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Vibecode = () => {
  const steps = [
    {
      num: "01", badge: "BẮT ĐẦU ĐÂY", badgeClass: "badge-accent", time: "~20 phút",
      title: "Vibecode là gì? Khó không? Giúp gì cho Marketer?",
      desc: "Khái niệm cơ bản, tư duy làm web bằng AI không cần code và những use case thực tế.",
      tags: ["tư duy", "use case", "marketer"]
    },
    {
      num: "02", badge: "CONCEPT", badgeClass: "badge-dark", time: "~40 phút",
      title: "Từ ngữ chuyên ngành code & design — mỗi từ kèm GIF motion",
      desc: "Hiểu nhanh padding, margin, flexbox, grid để ra lệnh cho AI chính xác qua hình ảnh minh họa động.",
      tags: ["spacing", "flexbox", "grid", "responsive"]
    },
    {
      num: "03", badge: "SETUP", badgeClass: "badge-dark", time: "~30 phút",
      title: "Cài gì vào máy để bắt đầu (Node, Cursor, VS Code, Git)",
      desc: "Hướng dẫn cài đặt môi trường, Cursor, Node.js đầy đủ cho người mới bắt đầu.",
      tags: ["Node.js", "Cursor", "Git", "terminal"]
    },
    {
      num: "04", badge: "INTERFACE", badgeClass: "badge-dark", time: "~25 phút",
      title: "Làm quen với VS Code & Cursor — giao diện, phím tắt, cách đọc file",
      desc: "Làm chủ công cụ làm việc chính, phím tắt quan trọng và cách quản lý file project.",
      tags: ["shortcut", "explorer", "editor"]
    },
    {
      num: "05", badge: "AI AGENT", badgeClass: "badge-dark", time: "~35 phút",
      title: "Làm quen với Claude Code — cách hoạt động, lệnh cơ bản, khi nào dùng",
      desc: "Sử dụng đệ tử đắc lực nhất hiện nay để tự động hóa việc viết code và fix lỗi thần tốc.",
      tags: ["Claude Code", "terminal", "automation"]
    },
    {
      num: "06", badge: "TOOLS", badgeClass: "badge-dark", time: "~25 phút",
      title: "Công cụ & website hữu ích (v0.dev, Vercel, Bolt)",
      desc: "Tổng hợp các bộ công cụ không thể thiếu để biến ý tưởng thành interface hoàn chỉnh cực nhanh.",
      tags: ["v0.dev", "Vercel", "Bolt"]
    },
    {
      num: "07", badge: "PROMPT", badgeClass: "badge-dark", time: "~30 phút",
      title: "Cách prompt cho AI hiểu để code đúng ý bạn",
      desc: "Kỹ thuật viết yêu cầu (prompt) chi tiết, logic để AI không hiểu lầm ý tưởng của bạn.",
      tags: ["logic", "structure", "clarity"]
    },
    {
      num: "08", badge: "DEBUG", badgeClass: "badge-dark", time: "~45 phút",
      title: "Khi AI code sai — cách đọc lỗi & prompt vá lỗi",
      desc: "Không hoảng hốt khi gặp lỗi. Cách đọc thông báo lỗi và yêu cầu AI sửa chữa đúng chỗ.",
      tags: ["error handling", "debugging", "fix"]
    },
    {
      num: "09", badge: "WORKFLOW", badgeClass: "badge-dark", time: "~45 phút",
      title: "Tạo Skills & Workflow — Cursor Rules, CLAUDE.md, MCP",
      desc: "Xây dựng hệ thống rule cá nhân, sử dụng MCP và workflow mượt mà cho project lớn.",
      tags: ["Cursor Rules", "CLAUDE.md", "MCP"]
    },
    {
      num: "10", badge: "DEPLOY", badgeClass: "badge-dark", time: "~50 phút",
      title: "Deploy + gắn PostHog & Google Search Console",
      desc: "Đưa website lên mạng internet, gắn tracking và khai báo Google webmaster hoàn chỉnh.",
      tags: ["Vercel", "PostHog", "SEO", "domain"]
    }
  ];

  const modules = [
    { title: "Vibecode ra Web", desc: "10 bài · đang học", available: true, check: true },
    { title: "Vibecode ra App", desc: "React Native · Expo", available: false, badge: "Sắp ra" },
    { title: "Vibecode ra Chatbot", desc: "Claude API · Telegram Bot", available: false, badge: "Sắp ra" },
    { title: "Vibecode ra Tool nội bộ", desc: "Dashboard · Tracker", available: false, badge: "Sắp ra" },
    { title: "Analytics với AI", desc: "GA4 · Looker · Claude", available: false, badge: "Sắp ra" },
    { title: "Generate Image", desc: "Midjourney · Flux · Firefly", available: false, badge: "Sắp ra" },
    { title: "Motion Video", desc: "Kling · Runway · HeyGen", available: false, badge: "Sắp ra" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="vibecode" className="border-t border-border">
      <div className="py-20 px-5 flex flex-col items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] w-full flex flex-col items-start text-left mx-auto"
        >
          <span className="badge badge-accent mb-6 inline-block font-mono tracking-widest uppercase">VIBECODE WEB ⚡</span>
          <h2 className="section-heading text-[clamp(2.5rem,5.5vw,4rem)] tracking-tight mb-4 text-ink">
            Từ <em className="text-accent italic">zero</em> đến có web trong 1 buổi sáng.
          </h2>
          <p className="font-sans text-[16px] text-muted mb-0 max-w-prose">
            Lộ trình 10 bước — từ tư duy đến deploy thực tế cho người không chuyên.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 pb-24">
        <div className="relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12 relative z-10"
          >
            {steps.map((step, idx) => {
              const isLastInRow = (idx + 1) % 3 === 0;
              const isLastItem = idx === steps.length - 1;

              return (
                <motion.div key={idx} variants={itemVariants} className="relative">
                  <Link 
                    to={idx === 0 ? '/vibecode/vibecode-la-gi' : `/lesson/${idx + 1}`} 
                    className="group relative flex flex-col bg-bg border border-border p-8 no-underline text-ink hover:bg-bg2 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-accent h-full"
                  >
                    {/* Step Marker */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] text-muted tracking-widest leading-none mb-1">BÀI</span>
                        <span className="font-serif text-[2.4rem] text-ink group-hover:text-accent transition-colors leading-none italic">{step.num}</span>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`badge ${step.badgeClass} !px-2 !py-0.5 !text-[9px]`}>{step.badge}</span>
                        <span className="badge badge-outline !px-2 !py-0.5 !text-[9px]">{step.time}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-serif text-[1.25rem] mb-3 leading-tight group-hover:text-accent transition-colors">{step.title}</h3>
                      <p className="font-sans text-[13px] text-ink2 leading-[1.6] mb-4 opacity-80">
                        {step.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {step.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="step-tag !text-[9px] !px-2 !py-0.5">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                      <span className="font-mono text-[10px] text-muted uppercase tracking-tighter">Bắt đầu ngay</span>
                      <span className="text-muted group-hover:text-accent transition-transform group-hover:translate-x-1">→</span>
                    </div>

                    {/* Horizontal Connector - Desktop Only */}
                    {!isLastInRow && !isLastItem && (
                      <div className="hidden md:block absolute top-1/2 -right-12 w-12 h-px border-t border-dashed border-border -translate-y-1/2 z-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg border border-border rounded-full p-1 shadow-sm text-border group-hover:text-accent group-hover:border-accent transition-colors">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                      </div>
                    )}

                    {/* Vertical Connector - Desktop Only (When row ends) */}
                    {isLastInRow && !isLastItem && (
                      <div className="hidden md:block absolute -bottom-12 left-1/2 w-px h-12 border-l border-dashed border-border -translate-x-1/2 z-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg border border-border rounded-full p-1 shadow-sm text-border group-hover:text-accent group-hover:border-accent transition-colors">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                        </div>
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
            
            {/* Empty placeholders for grid balance */}
            <motion.div variants={itemVariants} className="hidden md:flex bg-bg2/30 border border-dashed border-border p-8 items-center justify-center text-center opacity-40">
               <div className="font-mono text-[11px] text-muted italic">Các module chuyên sâu (Automation, AI Agent) đang được biên soạn...</div>
            </motion.div>
            <motion.div variants={itemVariants} className="hidden md:flex bg-bg2/30 border border-dashed border-border p-8 items-center justify-center text-center opacity-40">
               <div className="font-mono text-[11px] text-muted italic">Cập nhật nội dung mới mỗi tuần ✳</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-bg2 py-16 px-5 border-t border-b border-border mt-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            <span>✳</span> lộ trình module
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-8"
          >
            Web chỉ là bắt đầu. <em className="text-accent italic">Còn nhiều hơn nữa.</em>
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:border-t sm:border-l border-border"
          >
            {modules.map((mod, idx) => (
              <Link 
                key={idx} 
                to={mod.available ? "/vibecode" : "#"}
                className={`block p-8 border-r border-b border-border relative transition-all duration-300 no-underline ${
                  mod.available 
                    ? 'opacity-100 bg-white ring-1 ring-inset ring-accent/10 hover:bg-bg cursor-pointer shadow-[4px_4px_0px_0px_rgba(232,65,10,0.05)]' 
                    : 'opacity-70 bg-bg2/50 cursor-default grayscale-[0.5]'
                }`}
              >
                {mod.badge && <span className="badge-soon !bg-muted/10 !text-muted opacity-80">{mod.badge}</span>}
                <div className="flex items-start gap-2 mb-1 mt-2">
                  <div className={`mt-1 font-serif text-[1.1rem] ${mod.available ? 'text-ink font-semibold' : 'text-muted'}`}>
                    {mod.check && <span className="text-accent">✓ </span>}
                    {mod.title}
                  </div>
                </div>
                <div className={`font-mono text-[11px] ${mod.available ? 'text-ink2' : 'text-muted'}`}>{mod.desc}</div>
                {mod.available && (
                   <div className="mt-4 flex items-center text-accent font-mono text-[10px] uppercase tracking-wider">
                     Xem lộ trình <span className="ml-1">→</span>
                   </div>
                )}
              </Link>
            ))}
            <Link 
              to="/feedback"
              className="block p-8 border-r border-b border-border relative hover:bg-bg3 transition-colors cursor-pointer bg-bg3 no-underline"
            >
              <div className="font-serif text-[1.1rem] text-ink mb-1 mt-2">Bạn muốn module gì tiếp theo?</div>
              <div className="font-mono text-[11px] text-accent mt-2 flex items-center">Góp ý <span className="ml-1">→</span></div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



const CTA = () => (
  <section className="bg-bg2 py-24 px-5 border-b border-border flex flex-col items-center text-center">
    <h2 className="section-heading mb-6 max-w-2xl">
      Thôi nào, <em className="text-accent italic">bắt đầu bài 01 đi.</em>
    </h2>
    <p className="font-sans text-[15px] text-ink2 mb-8 max-w-md mx-auto">
      Mở laptop lên, pha ly cafe và hoàn thành website đầu tiên của bạn trong vòng 2 tiếng tới. Tất cả đã sẵn sàng.
    </p>
    <div className="flex flex-wrap gap-4 justify-center mb-6">
      <Link to="/lesson/1" className="btn-primary no-underline text-white !px-8 !py-3 !text-[13px]">Bắt đầu Bài 01 →</Link>
    </div>
    <p className="font-mono text-[11px] text-muted">
      ✳ hoàn toàn miễn phí · không cần email · không cần đăng ký
    </p>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Vibecode />
      <CTA />
    </>
  );
}
