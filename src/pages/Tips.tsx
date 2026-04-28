export default function Tips() {
  const categories = ["ALL", "VIBECODE", "DESIGN", "WORKFLOW", "DEPLOY", "PROMPT"];
  const tips = [
    { num: "01", text: "Luôn định nghĩa rõ CSS Variables trước khi bảo AI viết component.", cat: "VIBECODE" },
    { num: "02", text: "Dùng 'Clamp' cho typography để text scale đẹp trên mọi màn hình.", cat: "DESIGN" },
    { num: "03", text: "Chia nhỏ file prompt thay vì viết 1 file dài 2000 dòng.", cat: "WORKFLOW" },
    { num: "04", text: "Luôn kiểm tra contrast ratio nếu dùng style Brutalist.", cat: "DESIGN" },
    { num: "05", text: "Sử dụng SVGs thay cho PNGs để icon luôn sắc nét và nhanh.", cat: "DESIGN" },
    { num: "06", text: "Gắn domain càng sớm càng tốt để Google bắt đầu index.", cat: "DEPLOY" },
    { num: "07", text: "Dùng Cursor Rule để ép AI luôn export code theo chuẩn ES6+.", cat: "WORKFLOW" },
    { num: "08", text: "Tạo file reset CSS tối giản để tránh các style mặc định của trình duyệt.", cat: "VIBECODE" },
    { num: "09", text: "Prompt AI viết component lẻ (Header, Footer) thay vì nguyên trang.", cat: "PROMPT" },
    { num: "10", text: "Luôn dùng server timestamp cho dữ liệu để tránh lệch múi giờ.", cat: "VIBECODE" },
    { num: "11", text: "Sử dụng Vercel Analytics để có các chỉ số cơ bản mà không cần setup.", cat: "DEPLOY" },
    { num: "12", text: "Mô tả tone of voice trong prompt để AI viết content tự nhiên hơn.", cat: "PROMPT" }
  ];

  return (
    <div className="py-16 px-5 max-w-[1200px] mx-auto min-h-screen">
      <div className="mb-12">
        <p className="section-label"><span>✳</span> quick tips</p>
        <h2 className="section-heading text-[clamp(2rem,4.5vw,3.5rem)] mb-4">Tips nhỏ, <em className="text-accent italic">impact lớn.</em></h2>
        <p className="font-sans text-[15px] text-ink2 max-w-[600px]">
          Những mẹo nhỏ nhưng cực kỳ hữu ích giúp bạn tối ưu quy trình vibecode và làm việc với AI hiệu quả hơn mỗi ngày.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-8">
        {categories.map((cat, i) => (
          <button key={i} className={`badge ${i === 0 ? 'badge-dark' : 'badge-outline hover:bg-bg2'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:border-t sm:border-l border-border">
        {tips.map((tip, idx) => (
          <div key={idx} className="p-8 border-r border-b border-border relative pt-14 group hover:bg-bg2 transition-colors">
            <div className="absolute top-8 left-8 font-mono text-[10px] text-muted tracking-wide">TIP · {tip.num}</div>
            <p className="font-serif text-[1.2rem] leading-[1.4] text-ink mb-6">{tip.text}</p>
            <div className="font-mono text-[10px] text-muted lowercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent"></span>
              {tip.cat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
