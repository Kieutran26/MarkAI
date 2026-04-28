import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Feedback() {
  return (
    <div className="max-w-[800px] mx-auto px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge badge-accent mb-6 inline-block font-mono tracking-widest uppercase">CONTRIBUTE</span>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-8">
          Bạn muốn <em className="text-accent italic">module</em> tiếp theo là gì?
        </h1>
        
        <p className="font-sans text-ink2 mb-12 text-lg">
          Lộ trình của markAI được xây dựng dựa trên nhu cầu thực tế của các bạn. Hãy cho chúng tôi biết bạn đang gặp khó khăn ở đâu nhé.
        </p>

        <form className="space-y-8 bg-bg2 p-8 sm:p-12 border border-border shadow-sm">
          <div className="space-y-2">
            <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Họ tên của bạn</label>
            <input 
              type="text" 
              placeholder="Nguyễn Văn A" 
              className="w-full bg-white border border-border p-4 font-sans text-[15px] focus:border-accent outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Email liên hệ</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full bg-white border border-border p-4 font-sans text-[15px] focus:border-accent outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Chủ đề mong muốn (Ví dụ: SEO AI, Automation...)</label>
            <input 
              type="text" 
              placeholder="Nhập chủ đề bạn muốn học..." 
              className="w-full bg-white border border-border p-4 font-sans text-[15px] focus:border-accent outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Tại sao bạn cần module này?</label>
            <textarea 
              rows={4}
              placeholder="Chia sẻ thêm về vấn đề bạn đang gặp phải..." 
              className="w-full bg-white border border-border p-4 font-sans text-[15px] focus:border-accent outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-accent text-white font-mono text-[12px] uppercase tracking-[0.1em] py-5 px-8 hover:bg-ink transition-all flex items-center justify-center gap-2 group">
            Gửi góp ý ngay
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
