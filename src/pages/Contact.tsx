import { motion } from 'motion/react';
import { Mail, Globe, Facebook, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const socials = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@markai.vn", link: "mailto:hello@markai.vn" },
    { icon: <Globe className="w-5 h-5" />, label: "Website", value: "vibecode.vn", link: "https://vibecode.vn" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", value: "fb.com/markai", link: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "Linkedin", value: "linkedin.com/in/markai", link: "#" }
  ];

  return (
    <div className="max-w-[800px] mx-auto px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge badge-accent mb-6 inline-block font-mono tracking-widest uppercase">LIÊN HỆ</span>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-12">
          Kết nối với <em className="text-accent italic">tác giả</em> dự án.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <p className="font-sans text-ink2 text-lg leading-relaxed">
              Bạn có ý tưởng hợp tác, muốn mời diễn giả cho Workshop AI, hoặc đơn giản là muốn nói "chào"? Đừng ngại ngần liên hệ với mình qua các kênh sau.
            </p>

            <div className="space-y-4">
              {socials.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  className="flex items-center gap-4 p-4 border border-border bg-bg2 hover:bg-white hover:border-accent hover:shadow-lg transition-all group no-underline"
                >
                  <div className="w-10 h-10 bg-accent/5 text-accent rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-wider">{item.label}</div>
                    <div className="font-sans text-[15px] text-ink font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-ink p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <MessageSquare className="w-12 h-12 text-accent mb-6 opacity-50" />
              <h3 className="font-serif text-[1.5rem] mb-4">Chat trực tiếp?</h3>
              <p className="font-sans text-[14px] text-white/70 mb-8 leading-relaxed">
                Nếu bạn cần hỗ trợ nhanh về các bài học Vibecode, hãy tham gia cộng đồng của chúng tôi trên Facebook Group hoặc Discord.
              </p>
              <button className="w-full bg-accent hover:bg-white hover:text-accent text-white font-mono text-[11px] uppercase tracking-widest py-4 px-6 transition-all duration-300">
                Tham gia cộng đồng
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 w-40 h-40 border border-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
