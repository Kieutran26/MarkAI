import { motion } from 'motion/react';
import { AlertCircle, ChevronRight } from 'lucide-react';

export default function Report() {
  return (
    <div className="max-w-[800px] mx-auto px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge badge-accent mb-6 inline-block font-mono tracking-widest uppercase">BUG REPORT</span>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-8">
          Phát hiện <em className="text-accent italic">"biến cố"</em> trên hệ thống?
        </h1>
        
        <p className="font-sans text-ink2 mb-12 text-lg">
          Chúng tôi luôn cố gắng hoàn thiện, nhưng đôi khi vẫn có những lỗi nhỏ xảy ra. Rất cảm ơn bạn đã dành thời gian báo lại để markAI ngày càng tốt hơn.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 border border-border bg-bg2 flex flex-col gap-4">
            <div className="w-10 h-10 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-[13px] font-bold uppercase mb-2">Lỗi bài học</h3>
              <p className="text-[13px] text-muted leading-relaxed">Video không load, code mẫu bị lỗi, hoặc link tài liệu bị hỏng.</p>
            </div>
          </div>
          <div className="p-6 border border-border bg-bg2 flex flex-col gap-4">
            <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-[13px] font-bold uppercase mb-2">Lỗi tính năng</h3>
              <p className="text-[13px] text-muted leading-relaxed">Website hiển thị sai trên mobile, hoặc các nút bấm không hoạt động.</p>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Vị trí gặp lỗi</label>
              <select className="w-full bg-white border border-border p-4 font-sans text-[15px] focus:border-accent outline-none appearance-none">
                <option>Trang chủ</option>
                <option>Bài học (Lesson)</option>
                <option>Prompt Library</option>
                <option>Blog/Tips</option>
                <option>Khác</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Mức độ nghiêm trọng</label>
              <select className="w-full bg-white border border-border p-4 font-sans text-[15px] focus:border-accent outline-none appearance-none">
                <option>Thấp (Góp ý nhỏ)</option>
                <option>Trung bình (Ảnh hưởng trải nghiệm)</option>
                <option>Cao (Không thể sử dụng)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Mô tả chi tiết lỗi</label>
            <textarea 
              rows={5}
              placeholder="Vui lòng mô tả cách chúng tôi có thể tái hiện lỗi này..." 
              className="w-full bg-white border border-border p-4 font-sans text-[15px] focus:border-accent outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <button type="submit" className="bg-ink text-white font-mono text-[12px] uppercase tracking-[0.1em] py-5 px-12 hover:bg-accent transition-all flex items-center gap-2 group">
            Gửi báo cáo lỗi
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
