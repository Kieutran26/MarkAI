export default function Prompts() {
  const prompts = [
    {
      title: "Master Prompt: Full Homepage",
      tool: "Claude / Cursor",
      use: "Dùng để dựng toàn bộ trang chủ từ một bản thiết kế thô.",
      code: "# MASTER PROMPT — HOMEPAGE\nTạo website dựa trên Design System: #f7f5f0, Instrument Serif, DM Mono.\nLayout: Grid 1200px, No border-radius, No shadows..."
    },
    {
      title: "Setup Cursor Rules for React",
      tool: "Cursor Rule",
      use: "Ép AI luôn code theo chuẩn ES6, React 19 và Tailwind V4.",
      code: "You are an expert Frontend Developer.\nStrict rules:\n- ESM only\n- Tailwind utility classes only\n- No inline styles"
    },
    {
      title: "Landing Page Copywriter",
      tool: "Claude 3.5 Sonnet",
      use: "Viết content cho website Marketing với phong cách tối giản.",
      code: "Viết 1 Headline (serif) và 1 Sub-headline (sans) cho dịch vụ AI Marketing.\nPhong cách: Chân thực, không sáo rỗng, tập trung vào kết quả..."
    },
    {
      title: "Vercel Deploy Troubleshooter",
      tool: "Terminal / AI",
      use: "Fix lỗi deploy khi push code từ GitHub lên Vercel.",
      code: "Phân tích log build sau đây và đưa ra câu lệnh fix ngay lập tức:\n[PASTE LOG HERE]"
    }
  ];

  return (
    <div className="py-16 px-5 max-w-[1200px] mx-auto min-h-screen">
      <div className="mb-12">
        <p className="section-label"><span>✳</span> prompt library</p>
        <h2 className="section-heading text-[clamp(2rem,4.5vw,3.5rem)] mb-4">Prompt sẵn dùng — <em className="text-accent italic">lấy về xài liền.</em></h2>
        <p className="font-sans text-[15px] text-ink2 max-w-[600px]">
          Tổng hợp các prompt "vàng" đã được tinh chỉnh để làm việc mượt mà nhất với các công cụ AI coding hiện nay.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {prompts.map((p, i) => (
          <div key={i} className="border border-border p-8 bg-bg relative">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-serif text-[1.4rem] text-ink mb-2">{p.title}</h3>
                <div className="badge badge-accent mb-2 mr-2">{p.tool}</div>
              </div>
              <button className="btn-ghost !py-1.5 !px-3 !text-[10px] uppercase">Copy Prompt</button>
            </div>
            <p className="font-sans text-[14px] text-ink2 mb-6 italic leading-relaxed">
              ✳ {p.use}
            </p>
            <div className="bg-[#0a0a0a] p-6 font-mono text-[12px] text-[#98c379] leading-relaxed relative overflow-x-auto whitespace-pre">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
              {p.code}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
