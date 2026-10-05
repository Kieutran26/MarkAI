import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Bai11InteractiveContentProps {
  lessonSlug: string;
}

export default function Bai11InteractiveContent({ lessonSlug }: Bai11InteractiveContentProps) {
  const [flowI, setFlowI] = useState(0);
  const [done, setDone] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(`markai_read_${lessonSlug}`);
      if (stored) {
        const arr = JSON.parse(stored);
        return Array.isArray(arr) && arr.includes('1.1');
      }
      return false;
    } catch {
      return false;
    }
  });

  // Cycle the 3 flow cards
  useEffect(() => {
    const timer = setInterval(() => {
      setFlowI((prev) => (prev + 1) % 3);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const toggleDone = () => {
    setDone((prev) => {
      const next = !prev;
      try {
        const stored = localStorage.getItem(`markai_read_${lessonSlug}`);
        let arr: string[] = stored ? JSON.parse(stored) : [];
        if (next) {
          if (!arr.includes('1.1')) arr.push('1.1');
        } else {
          arr = arr.filter((x) => x !== '1.1');
        }
        localStorage.setItem(`markai_read_${lessonSlug}`, JSON.stringify(arr));
      } catch {}
      return next;
    });
  };

  const flowCards = [
    {
      n: '01',
      t: 'Ý tưởng',
      d: 'Bạn có hướng đi, nhu cầu, hoặc một thứ muốn làm nhanh.',
      arrow: '→',
    },
    {
      n: '02',
      t: 'Mô tả',
      d: 'Bạn viết ra mong muốn bằng ngôn ngữ bình thường để AI hiểu.',
      arrow: '→',
    },
    {
      n: '03',
      t: 'Sản phẩm',
      d: 'AI biến mô tả thành trang web, tool, flow hoặc prototype thật.',
      arrow: '✓',
    },
  ];

  const steps = [
    {
      n: '01',
      who: 'Bạn làm',
      t: 'Gõ vào Cursor hoặc Claude Code',
      d: '',
      q: 'Tạo cho tôi landing page giới thiệu sản phẩm mới, có countdown 3 ngày, form đăng ký email, nền màu trắng, responsive trên điện thoại.',
      dot: '#fff',
      dotFg: '#141414',
      dotBd: '#141414',
      line: '#DAD8D2',
      tagBg: '#F1EFEA',
      tagFg: '#55534F',
    },
    {
      n: '02',
      who: 'AI làm',
      t: 'AI đọc mô tả và bắt đầu viết',
      d: 'Trong vài phút, AI tạo ra toàn bộ file code — HTML, CSS, logic countdown, form validation. Bạn không cần viết một dòng nào.',
      q: '',
      dot: '#E8772E',
      dotFg: '#fff',
      dotBd: '#E8772E',
      line: '#DAD8D2',
      tagBg: '#FCE9DC',
      tagFg: '#C25E1F',
    },
    {
      n: '03',
      who: 'Bạn làm',
      t: 'Xem kết quả và điều chỉnh',
      d: 'AI sửa ngay.',
      q: 'Màu nút CTA hơi nhạt quá, đổi sang đỏ đậm hơn. Và thêm phần testimonial 3 người vào bên dưới.',
      dot: '#fff',
      dotFg: '#141414',
      dotBd: '#141414',
      line: '#DAD8D2',
      tagBg: '#F1EFEA',
      tagFg: '#55534F',
    },
    {
      n: '04',
      who: 'Xong',
      t: 'Deploy lên internet',
      d: 'Khi ưng ý, bạn deploy lên Vercel — một trang web thật, có link chia sẻ được. Mất thêm khoảng 5 phút.',
      q: '',
      dot: '#141414',
      dotFg: '#fff',
      dotBd: '#141414',
      line: 'transparent',
      tagBg: '#F1EFEA',
      tagFg: '#55534F',
    },
  ];

  const compareRows = [
    { old: 'Viết brief → chờ estimate → chờ sprint', nw: 'Mô tả → AI code → xem kết quả ngay' },
    { old: 'Muốn sửa nhỏ phải mở ticket mới', nw: 'Muốn sửa → gõ thêm → AI sửa liền' },
    { old: 'Phụ thuộc lịch của team kỹ thuật', nw: 'Tự chủ hoàn toàn — làm khi nào cũng được' },
    { old: 'Landing page mất 2 tuần', nw: 'Landing page mất 2–4 giờ' },
  ];

  return (
    <article className="flex-[1_1_560px] min-w-0 max-w-[720px] py-16 sm:py-20 lg:py-24">
      {/* Section 01 */}
      <section id="s1" className="scroll-mt-24">
        <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">01</div>
        <h2 className="mt-2.5 text-[30px] sm:text-[34px] leading-[1.15] tracking-[-0.04em] font-semibold text-[#141414]">
          Giải thích đơn giản nhất
        </h2>
        <p className="mt-5 text-[17px] leading-[1.75] text-[#3A3935]">
          Vibecode là cách bạn dùng <strong className="text-[#141414] font-semibold">AI để viết code thay mình</strong>. Bạn mô tả điều mình muốn bằng tiếng Việt bình thường — AI hiểu và tạo ra code. Bạn không cần đọc được code đó, không cần hiểu nó hoạt động thế nào bên trong.
        </p>

        {/* Interactive Flow Box */}
        <div className="mt-9 bg-white border border-[#E6E4DE] rounded-[20px] p-6 sm:p-7 shadow-sm">
          <div className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883] uppercase tracking-wider">
            Vibecode — quy trình
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {flowCards.map((f, i) => {
              const active = i === flowI;
              return (
                <div
                  key={i}
                  onClick={() => setFlowI(i)}
                  className={`rounded-[14px] p-5 border transition-all duration-300 cursor-pointer ${
                    active
                      ? 'bg-[#E8772E] text-white border-[#E8772E] shadow-sm'
                      : 'bg-[#F6F5F1] text-[#141414] border-[#E6E4DE] hover:border-[#CFCDC6]'
                  }`}
                >
                  <div
                    className={`flex justify-between font-[family-name:var(--mono)] text-[11px] ${
                      active ? 'text-white' : 'text-[#8A8883]'
                    }`}
                  >
                    <span>{f.n}</span>
                    <span>{f.arrow}</span>
                  </div>
                  <div className="mt-7 text-[19px] sm:text-[20px] font-semibold tracking-[-0.03em]">
                    {f.t}
                  </div>
                  <div
                    className={`mt-1.5 text-[13px] leading-[1.55] ${
                      active ? 'text-[#FFF1E6]' : 'text-[#6B6B6B]'
                    }`}
                  >
                    {f.d}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex gap-3 items-baseline text-[14px] leading-[1.6] text-[#55534F] flex-wrap">
            <span className="font-[family-name:var(--mono)] text-[11px] px-2 py-0.5 rounded-full bg-[#F1EFEA] text-[#8A8883] line-through whitespace-nowrap">
              Học code
            </span>
            <span className="flex-[1_1_280px]">
              <strong className="text-[#141414] font-semibold">Không có bước "học code" ở giữa.</strong> Bạn chạy theo ý tưởng và kết quả. AI lo phần kỹ thuật thay bạn.
            </span>
          </div>
        </div>

        {/* Short Definition Box */}
        <div className="mt-8 py-7 border-t border-[#141414] border-b border-[#DAD8D2] grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-5 items-baseline">
          <span className="font-[family-name:var(--mono)] text-[11px] text-[#E8772E]">
            Định nghĩa ngắn
          </span>
          <p className="m-0 text-[20px] sm:text-[22px] leading-[1.45] tracking-[-0.02em] font-medium text-[#141414]">
            Vibecode = bạn có ý tưởng, AI viết code, bạn ra sản phẩm. Không cần biết code ở giữa.
          </p>
        </div>

        <p className="mt-8 text-[17px] leading-[1.75] text-[#3A3935]">
          Hiểu đơn giản hơn: giống như bạn thuê{' '}
          <strong className="text-[#141414] font-semibold">
            một lập trình viên làm việc 24/7, không ngủ, không tính phí theo giờ
          </strong>
          , và{' '}
          <strong className="text-[#141414] font-semibold">
            luôn sẵn sàng sửa lại ngay lập tức khi bạn đổi ý
          </strong>
          . Chỉ khác là "lập trình viên" đó là AI.
        </p>
      </section>

      {/* Section 02 */}
      <section id="s2" className="scroll-mt-24 mt-20 sm:mt-24">
        <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">02</div>
        <h2 className="mt-2.5 text-[30px] sm:text-[34px] leading-[1.15] tracking-[-0.04em] font-semibold text-[#141414]">
          Quy trình thực tế trông như thế nào?
        </h2>
        <p className="mt-5 text-[17px] leading-[1.75] text-[#3A3935]">
          Thay vì ngồi học cú pháp Python hay JavaScript, bạn ngồi{' '}
          <strong className="text-[#141414] font-semibold">mô tả</strong> điều mình muốn — giống như
          đang giải thích cho một người khác nghe. AI nhận lấy mô tả đó và tự viết code.
        </p>

        {/* Steps Timeline */}
        <div className="mt-9 flex flex-col">
          {steps.map((s, idx) => (
            <div key={idx} className="grid grid-cols-[56px_1fr] gap-4 sm:gap-5">
              <div className="flex flex-col items-center">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center font-[family-name:var(--mono)] text-[12px] shrink-0"
                  style={{
                    background: s.dot,
                    color: s.dotFg,
                    border: `1px solid ${s.dotBd}`,
                  }}
                >
                  {s.n}
                </span>
                <span className="flex-1 w-[1px]" style={{ background: s.line }} />
              </div>
              <div className="pt-1.5 pb-9">
                <span
                  className="font-[family-name:var(--mono)] text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{ background: s.tagBg, color: s.tagFg }}
                >
                  {s.who}
                </span>
                <h3 className="mt-3 text-[19px] sm:text-[20px] font-semibold tracking-[-0.025em] text-[#141414]">
                  {s.t}
                </h3>
                {s.d && <p className="mt-2 text-[15px] leading-[1.65] text-[#55534F]">{s.d}</p>}
                {s.q && (
                  <div className="mt-3.5 bg-[#141414] text-[#EDEBE6] rounded-[14px] p-4 sm:p-5 font-[family-name:var(--mono)] text-[13px] leading-[1.7]">
                    <span className="text-[#E8772E] font-bold">› </span>"{s.q}"
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 03 */}
      <section id="s3" className="scroll-mt-24 mt-16 sm:mt-20">
        <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">03</div>
        <h2 className="mt-2.5 text-[30px] sm:text-[34px] leading-[1.15] tracking-[-0.04em] font-semibold text-[#141414]">
          Tại sao gọi là <span className="font-light italic text-[#E8772E]">"vibe"?</span>
        </h2>
        <p className="mt-5 text-[17px] leading-[1.75] text-[#3A3935]">
          Từ "vibe" ở đây có nghĩa là bạn đang làm việc theo{' '}
          <strong className="text-[#141414] font-semibold">intuition và cảm giác</strong> — không theo
          quy trình kỹ thuật cứng nhắc. Bạn thử, nhìn kết quả, không thích thì sửa, thích thì giữ
          lại. Lặp đi lặp lại cho đến khi đúng ý.
        </p>
        <p className="mt-4 text-[17px] leading-[1.75] text-[#3A3935]">
          Khác hoàn toàn với lập trình truyền thống — nơi bạn phải hiểu chính xác từng dòng code làm gì
          trước khi viết ra. Vibecode cho phép bạn{' '}
          <strong className="text-[#141414] font-semibold">"cảm" trước, hiểu sau</strong> — hoặc không
          cần hiểu gì cũng được.
        </p>

        {/* Key Point Box */}
        <div className="mt-8 py-7 border-t border-[#141414] border-b border-[#DAD8D2] grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-5 items-baseline">
          <span className="font-[family-name:var(--mono)] text-[11px] text-[#E8772E]">
            Điểm mấu chốt
          </span>
          <p className="m-0 text-[20px] sm:text-[22px] leading-[1.45] tracking-[-0.02em] font-medium text-[#141414]">
            Vibecode không yêu cầu bạn hiểu code. Nó yêu cầu bạn biết mình muốn gì — và đủ kiên nhẫn để mô tả rõ điều đó cho AI.
          </p>
        </div>
      </section>

      {/* Section 04 */}
      <section id="s4" className="scroll-mt-24 mt-20 sm:mt-24">
        <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">04</div>
        <h2 className="mt-2.5 text-[30px] sm:text-[34px] leading-[1.15] tracking-[-0.04em] font-semibold text-[#141414]">
          Vibecode so với cách làm cũ
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Old way */}
          <div className="border border-[#DAD8D2] rounded-[20px] p-6 bg-white/40">
            <div className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883] uppercase tracking-wider mb-2">
              Cách cũ — chờ dev
            </div>
            <div className="divide-y divide-[#E6E4DE]">
              {compareRows.map((c, i) => (
                <div
                  key={i}
                  className="py-3.5 text-[15px] leading-[1.5] text-[#A8A6A0] line-through decoration-[#CFCDC6]"
                >
                  {c.old}
                </div>
              ))}
            </div>
          </div>

          {/* Vibecode way */}
          <div className="bg-[#141414] text-[#F6F5F1] rounded-[20px] p-6 shadow-md">
            <div className="font-[family-name:var(--mono)] text-[11px] text-[#E8772E] uppercase tracking-wider mb-2">
              Vibecode — tự làm
            </div>
            <div className="divide-y divide-[#2A2927]">
              {compareRows.map((c, i) => (
                <div key={i} className="py-3.5 text-[15px] leading-[1.5] font-medium text-[#F6F5F1]">
                  {c.nw}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 05 */}
      <section id="s5" className="scroll-mt-24 mt-20 sm:mt-24">
        <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">05</div>
        <h2 className="mt-2.5 text-[30px] sm:text-[34px] leading-[1.15] tracking-[-0.04em] font-semibold text-[#141414]">
          3 thứ Vibe Coding đang phá vỡ
        </h2>

        <div className="mt-8 grid grid-cols-[48px_1fr] gap-y-8 gap-x-4">
          <span className="text-[32px] font-light tracking-[-0.05em] leading-[1.1] text-[#E8772E]">
            1.
          </span>
          <div>
            <h3 className="m-0 text-[20px] font-semibold tracking-[-0.025em] text-[#141414]">
              Rào cản kỹ thuật biến mất
            </h3>
            <p className="mt-3 text-[17px] leading-[1.75] text-[#3A3935]">
              Trước đây, để ra một landing page tùy chỉnh, một quiz phân loại lead, hay một chatbot chăm sóc khách hàng —{' '}
              <strong className="text-[#141414] font-semibold">bạn cần dev</strong>. Bạn cần viết brief, chờ estimate, chờ dev làm, chờ review, chờ fix bug.
            </p>
            <p className="mt-4 text-[17px] leading-[1.75] text-[#3A3935]">
              Giờ thì không.{' '}
              <strong className="text-[#141414] font-semibold">
                Bất kỳ ai có đủ tư duy sản phẩm và biết giao tiếp với AI — đều có thể tự làm.
              </strong>{' '}
              Rào cản kỹ thuật không còn là lợi thế cạnh tranh nữa.
            </p>
          </div>

          <span className="text-[32px] font-light tracking-[-0.05em] leading-[1.1] text-[#E8772E]">
            2.
          </span>
          <div>
            <h3 className="m-0 text-[20px] font-semibold tracking-[-0.025em] text-[#141414]">
              Chi phí làm sản phẩm giảm mạnh
            </h3>
            <p className="mt-3 text-[17px] leading-[1.75] text-[#3A3935]">
              1 marketer biết AI giờ có thể làm được việc của cả một team nhỏ. Không phải vì họ làm thay mọi người — mà vì AI làm phần lớn công việc thực thi, còn họ tập trung vào phần quan trọng nhất:{' '}
              <strong className="text-[#141414] font-semibold">
                tư duy chiến lược và ra quyết định
              </strong>
              .
            </p>
          </div>
        </div>

        {/* Orange Summary Card with Toggle Button */}
        <div className="mt-12 bg-[#E8772E] text-[#141414] rounded-[20px] p-8 shadow-sm">
          <div className="font-[family-name:var(--mono)] text-[11px] uppercase tracking-wider text-[#141414]/75">
            Tóm lại bài 1.1
          </div>
          <p className="mt-3.5 text-[22px] sm:text-[24px] leading-[1.4] tracking-[-0.025em] font-medium text-[#141414] text-balance">
            Vibecode = AI viết code theo mô tả của bạn. Bạn không cần học code. Bạn cần biết mình muốn gì và mô tả rõ ràng. Phần còn lại AI lo.
          </p>

          <button
            type="button"
            onClick={toggleDone}
            className={`mt-6 inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-[14px] font-medium transition-all shadow-sm active:scale-95 cursor-pointer ${
              done
                ? 'bg-white text-[#141414] hover:bg-[#F6F5F1]'
                : 'bg-[#141414] text-white hover:bg-black'
            }`}
          >
            {done ? '✓ Đã đọc xong 1.1' : 'Đánh dấu đã đọc'}
          </button>
        </div>
      </section>

      {/* Prev / Next Navigation Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Previous (Disabled for 1.1) */}
        <div className="border border-[#E6E4DE] rounded-[20px] p-6 text-[#B8B6B0] bg-white/40">
          <div className="font-[family-name:var(--mono)] text-[11px]">← Phần trước</div>
          <div className="mt-7 text-[16px]">Không có phần trước</div>
        </div>

        {/* Next Sub-lesson */}
        <Link
          to={`/vibecode/${lessonSlug}/bai-1-2`}
          className="bg-[#141414] text-[#F6F5F1] rounded-[20px] p-6 block hover:bg-[#E8772E] transition-all group shadow-sm active:scale-[0.98]"
        >
          <div className="flex justify-between font-[family-name:var(--mono)] text-[11px] opacity-75">
            <span>Phần tiếp theo</span>
            <span>1.2 · ~5 phút</span>
          </div>
          <div className="mt-7 flex justify-between items-center gap-4 text-[18px] sm:text-[19px] font-semibold tracking-[-0.02em] leading-[1.3]">
            <span>Tại sao Marketer lại cần biết vibecode?</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>
      </div>
    </article>
  );
}
