import { useState, useId } from 'react';
import { Link } from 'react-router-dom';

const TOPICS = [
  'Góp ý nội dung',
  'Hỏi về dự án',
  'Hợp tác / Chia sẻ',
  'Câu hỏi kỹ thuật',
  'Chỉ muốn nói xin chào',
  'Khác'
];

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'Tôi có thể xin content markAI về dùng cho dự án của mình không?',
    a: 'Được, nhưng cần ghi nguồn rõ ràng. Prompt trong library và nội dung bài học — bạn có thể dùng tự do cho học tập và làm việc cá nhân, miễn là không đăng lại dưới tên mình hoặc bán lại.'
  },
  {
    q: 'Tôi muốn contribute vào markAI — viết bài, tạo prompt, hoặc code — được không?',
    a: 'Được. Chọn chủ đề "Hợp tác / Chia sẻ" ở form phía trên và mô tả bạn muốn đóng góp gì — mình sẽ phản hồi qua email.'
  },
  {
    q: 'Tôi muốn học thêm ngoài những gì markAI có — bạn có thể gợi ý không?',
    a: 'Có thể. Gửi tin nhắn với chủ đề "Câu hỏi kỹ thuật" và cho mình biết bạn đang muốn học gì.'
  },
  {
    q: 'markAI sẽ luôn miễn phí chứ? Không có nguy cơ đột ngột đóng cửa?',
    a: 'Cam kết miễn phí không thay đổi. Dự án chạy bằng thời gian cá nhân — không có investor yêu cầu monetize.'
  },
  {
    q: 'markAI có nhận tài trợ hoặc đặt quảng cáo không?',
    a: 'Không. markAI không nhận tài trợ, không bán quảng cáo, không có affiliate link. Đây là cam kết dài hạn — không phải chiến lược phase đầu. Dự án chạy bằng thời gian cá nhân.'
  }
];

export default function Contact() {
  const [selectedTopic, setSelectedTopic] = useState<number>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [role, setRole] = useState('');
  const [sent, setSent] = useState(false);
  const [tried, setTried] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const nameInputId = useId();
  const emailInputId = useId();
  const messageInputId = useId();
  const roleSelectId = useId();

  const isFormValid =
    name.trim().length > 0 &&
    /\S+@\S+\.\S+/.test(email) &&
    msg.trim().length > 0;

  const handleSend = () => {
    if (isFormValid) {
      setSent(true);
    } else {
      setTried(true);
    }
  };

  const handleReset = () => {
    setSent(false);
    setTried(false);
    setMsg('');
  };

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#141414] font-sans antialiased overflow-x-hidden selection:bg-[#E8772E] selection:text-white">
      {/* Sub-header / Breadcrumb */}
      <div className="border-b border-[#DAD8D2]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-3.5 flex items-center gap-2.5 font-mono text-[12px] text-[#8A8883]">
          <Link to="/" className="text-[#8A8883] hover:text-[#141414] transition-colors no-underline">
            markAI.vn
          </Link>
          <span>/</span>
          <span className="text-[#141414]">Liên hệ tác giả</span>
        </div>
      </div>

      {/* Hero / Contact Section */}
      <section
        data-screen-label="Contact"
        className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start"
      >
        <div>
          <div className="font-mono text-[12px] text-[#8A8883]">✳ Liên hệ tác giả · markAI.vn</div>
          <h1 className="mt-6 text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-[-0.06em] font-semibold text-[#141414]">
            Nói chuyện{' '}
            <span className="font-light italic text-[#E8772E]">trực tiếp.</span>
          </h1>
          <p className="mt-8 text-[17px] md:text-[18px] leading-[1.6] text-[#3A3935] max-w-[480px]">
            markAI do một người build. Tin nhắn đến thẳng người tạo ra dự án — phản hồi trong 1-3 ngày. Báo lỗi khẩn? Dùng trang{' '}
            <Link to="/report" className="text-[#E8772E] hover:underline">
              Báo lỗi
            </Link>
            .
          </p>

          <div className="mt-12 font-mono text-[11px] text-[#8A8883] mb-3">Cách liên hệ</div>
          <div className="border-t border-[#141414]">
            <a
              href="mailto:hello@markai.vn"
              className="grid grid-cols-[44px_minmax(0,1fr)_auto] gap-4 items-center py-4.5 border-b border-[#DAD8D2] hover:text-[#E8772E] group transition-colors no-underline text-[#141414]"
            >
              <span className="w-11 h-11 rounded-full border border-[#DAD8D2] flex items-center justify-center font-mono text-[14px] bg-white group-hover:border-[#E8772E] transition-colors">
                @
              </span>
              <span>
                <span className="flex items-center gap-2 text-[16px] font-semibold tracking-[-0.02em]">
                  Email
                  <span className="font-mono text-[10px] font-normal px-2 py-0.5 rounded-full bg-[#E8772E] text-white">
                    Tốt nhất
                  </span>
                </span>
                <span className="block mt-0.5 text-[13px] text-[#6B6B6B]">hello@markai.vn</span>
              </span>
              <span className="font-mono text-[11px] text-[#8A8883] whitespace-nowrap">1-3 ngày</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[44px_minmax(0,1fr)_auto] gap-4 items-center py-4.5 border-b border-[#DAD8D2] hover:text-[#E8772E] group transition-colors no-underline text-[#141414]"
            >
              <span className="w-11 h-11 rounded-full border border-[#DAD8D2] flex items-center justify-center font-mono text-[14px] bg-white group-hover:border-[#E8772E] transition-colors">
                in
              </span>
              <span>
                <span className="flex items-center gap-2 text-[16px] font-semibold tracking-[-0.02em]">
                  LinkedIn
                </span>
                <span className="block mt-0.5 text-[13px] text-[#6B6B6B]">
                  markAI.vn (thỉnh thoảng check)
                </span>
              </span>
              <span className="font-mono text-[11px] text-[#8A8883] whitespace-nowrap">3-7 ngày</span>
            </a>
          </div>

          <p className="mt-5 text-[13px] leading-[1.6] text-[#8A8883] max-w-[480px]">
            Không nhận sales, quảng cáo hay partnership trả phí.
          </p>
        </div>

        {/* Right Form Card */}
        <div className="bg-white border border-[#E6E4DE] rounded-[24px] p-6 sm:p-8 md:p-9 shadow-sm">
          {!sent ? (
            <div>
              <div className="font-mono text-[11px] text-[#8A8883]">✳ Gửi tin nhắn</div>
              <div className="mt-7 text-[13px] font-medium text-[#141414]">
                Chủ đề liên hệ <span className="text-[#E8772E]">*</span>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {TOPICS.map((topicText, idx) => {
                  const isActive = selectedTopic === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedTopic(idx)}
                      className={`px-3.5 py-2 rounded-full text-[13px] whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                        isActive
                          ? 'bg-[#141414] text-white border-[#141414]'
                          : 'bg-white text-[#55534F] border-[#DAD8D2] hover:border-[#141414] hover:text-[#141414]'
                      }`}
                    >
                      {topicText}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor={nameInputId} className="text-[13px] font-medium text-[#141414]">
                    Tên bạn
                  </label>
                  <input
                    id={nameInputId}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên hoặc nickname..."
                    className="px-4 py-3.5 rounded-xl border border-[#DAD8D2] bg-[#F6F5F1] text-[15px] font-normal outline-none focus:border-[#141414] focus:bg-white transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor={emailInputId} className="text-[13px] font-medium text-[#141414]">
                    Email
                  </label>
                  <input
                    id={emailInputId}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="px-4 py-3.5 rounded-xl border border-[#DAD8D2] bg-[#F6F5F1] text-[15px] font-normal outline-none focus:border-[#141414] focus:bg-white transition-colors"
                  />
                </div>
              </div>
              <div className="mt-1.5 text-[12px] text-[#8A8883]">
                Email chỉ để mình phản hồi lại — không dùng cho mục đích khác.
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor={messageInputId} className="text-[13px] font-medium text-[#141414]">
                  Tin nhắn
                </label>
                <textarea
                  id={messageInputId}
                  rows={5}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Viết gì cũng được — không có template, không có form cứng nhắc..."
                  className="px-4 py-3.5 rounded-xl border border-[#DAD8D2] bg-[#F6F5F1] text-[15px] font-normal leading-[1.6] outline-none resize-y focus:border-[#141414] focus:bg-white transition-colors"
                />
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor={roleSelectId} className="text-[13px] font-medium text-[#141414]">
                    Bạn đang làm ở lĩnh vực nào?
                  </label>
                  <span className="font-normal text-[#8A8883] text-[12px]">Không bắt buộc</span>
                </div>
                <select
                  id={roleSelectId}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="px-4 py-3.5 rounded-xl border border-[#DAD8D2] bg-[#F6F5F1] text-[15px] font-normal outline-none focus:border-[#141414] focus:bg-white transition-colors cursor-pointer"
                >
                  <option value="">Không cần điền nếu không muốn</option>
                  <option value="Brand / Marketing">Brand / Marketing</option>
                  <option value="Performance / Ads">Performance / Ads</option>
                  <option value="Content / Social">Content / Social</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <span
                  className="font-mono text-[11px] transition-colors"
                  style={{ color: tried && !isFormValid ? '#E8772E' : '#8A8883' }}
                >
                  {tried && !isFormValid
                    ? 'Cần tên, email hợp lệ và tin nhắn'
                    : 'Tên, email và tin nhắn là bắt buộc'}
                </span>
                <button
                  type="button"
                  onClick={handleSend}
                  className={`px-6 py-3.5 rounded-full text-white text-[14px] font-medium whitespace-nowrap transition-colors shadow-sm cursor-pointer ${
                    isFormValid ? 'bg-[#E8772E] hover:bg-[#d66922]' : 'bg-[#141414] hover:bg-black'
                  }`}
                >
                  Gửi tin nhắn →
                </button>
              </div>
            </div>
          ) : (
            <div className="min-h-[480px] flex flex-col justify-between gap-10 py-4">
              <span className="w-16 h-16 rounded-full bg-[#E8772E] text-white flex items-center justify-center text-[26px]">
                ✓
              </span>
              <div>
                <div className="font-mono text-[11px] text-[#8A8883]">
                  Đã gửi · {TOPICS[selectedTopic]}
                </div>
                <h2 className="mt-3.5 text-[34px] sm:text-[40px] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
                  Cảm ơn {name.trim() || 'bạn'}.{' '}
                  <span className="font-light italic text-[#E8772E]">Mình sẽ đọc.</span>
                </h2>
                <p className="mt-3.5 text-[15px] leading-[1.6] text-[#6B6B6B]">
                  Mình sẽ trả lời qua email bạn để lại.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-5 py-3 rounded-full border border-[#141414] text-[13px] font-medium text-[#141414] hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
                >
                  Gửi tin nhắn khác
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section (01): About Author */}
      <section data-screen-label="Author" className="bg-[#141414] text-[#F6F5F1]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 md:py-28 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-end">
          <div>
            <div className="font-mono text-[12px] text-[#8A8883] mb-5">(01) Về tác giả</div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] leading-[1] tracking-[-0.05em] font-semibold text-white">
              Người bạn đang{' '}
              <span className="font-light italic text-[#E8772E]">nhắn tin cho.</span>
            </h2>
          </div>
          <div className="flex gap-5 items-start">
            <span className="w-14 h-14 rounded-full bg-[#E8772E] shrink-0" />
            <div>
              <div className="text-[22px] font-semibold tracking-[-0.03em] text-white">
                markAI Builder
              </div>
              <div className="mt-1 font-mono text-[11px] text-[#E8772E]">
                Builder · Marketer · Vibe-coder · GMT+7
              </div>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#A8A6A0]">
                Dân Marketing muốn học AI nhưng không tìm được nơi phù hợp — nên tự build markAI.vn, ban đêm sau giờ làm.{' '}
                <strong className="text-[#F6F5F1] font-semibold">Mỗi tin nhắn đều được đọc thật</strong>, không AI tóm tắt, không intern filter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section (02): FAQ */}
      <section
        data-screen-label="FAQ"
        className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start"
      >
        <div>
          <div className="font-mono text-[12px] text-[#8A8883] mb-5">(02) Câu hỏi thường gặp</div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[50px] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
            Trước khi nhắn tin,{' '}
            <span className="font-light italic text-[#E8772E]">kiểm tra đây.</span>
          </h2>
        </div>

        <div className="border-t border-[#141414] w-full">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            const num = String(idx + 1).padStart(2, '0');
            return (
              <div key={idx} className="border-b border-[#DAD8D2]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left py-6 grid grid-cols-[40px_minmax(0,1fr)_32px] gap-4 items-center cursor-pointer transition-colors"
                >
                  <span
                    className="font-mono text-[12px] transition-colors"
                    style={{ color: isOpen ? '#E8772E' : '#8A8883' }}
                  >
                    {num}
                  </span>
                  <span
                    className="text-[17px] sm:text-[18px] font-semibold tracking-[-0.02em] leading-[1.35] transition-colors"
                    style={{ color: isOpen ? '#E8772E' : '#141414' }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[16px] transition-all duration-300 border"
                    style={{
                      background: isOpen ? '#E8772E' : 'transparent',
                      color: isOpen ? '#FFFFFF' : '#141414',
                      borderColor: isOpen ? '#E8772E' : '#CFCDC6',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-14 pr-4 sm:pr-12 text-[15px] leading-[1.7] text-[#55534F] max-w-[760px] m-0">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
