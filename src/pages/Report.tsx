import { useState, useId } from 'react';
import { Link } from 'react-router-dom';

const SEVERITY_OPTIONS = [
  {
    title: 'Nghiêm trọng',
    desc: 'Không dùng được',
    level: 3
  },
  {
    title: 'Trung bình',
    desc: 'Dùng được nhưng sai',
    level: 2
  },
  {
    title: 'Nhỏ',
    desc: 'Typo / giao diện',
    level: 1
  }
];

const PAGES_OPTIONS = [
  'Vibecode — trang học',
  'Từ điển chuyên ngành',
  'Trang khác / Không rõ'
];

interface QuickFixItem {
  title: string;
  desc: string;
  hasKeys?: boolean;
}

const QUICK_FIXES: QuickFixItem[] = [
  {
    title: 'Hard refresh trang',
    desc: 'Nhiều lỗi hiển thị được fix bằng hard refresh.',
    hasKeys: true
  },
  {
    title: 'Xóa cache trình duyệt',
    desc: 'Nếu trang load sai nội dung hoặc CSS bị vỡ, thử xóa cache. Settings → Privacy → Clear browsing data.'
  },
  {
    title: 'Thử trình duyệt khác',
    desc: 'Một số lỗi chỉ xảy ra trên trình duyệt cụ thể. Thử Chrome nếu đang dùng Safari, hoặc ngược lại.'
  },
  {
    title: 'Tắt extension',
    desc: 'Một số extension (ad blocker, dark mode) có thể ảnh hưởng đến cách trang hiển thị. Thử tắt tạm và reload.'
  }
];

interface BugLogItem {
  status: 'Fixed' | 'Đang xem' | 'Đã biết';
  title: string;
  desc: string;
  date: string;
}

const BUG_LOG: BugLogItem[] = [
  {
    status: 'Fixed',
    title: 'Trang /vibecode/bai-01',
    desc: 'load chậm trên mobile Safari — ảnh GIF quá nặng. Đã compress và lazy load.',
    date: '27-04-2026'
  },
  {
    status: 'Fixed',
    title: 'Filter bar Tips & Mẹo',
    desc: 'bị sticky overlap với nav trên iOS. Đã fix z-index và safe-area-inset.',
    date: '24-04-2026'
  },
  {
    status: 'Đang xem',
    title: 'Popup prompt',
    desc: 'đôi khi không đóng được bằng Escape trên Firefox. Đang investigate.',
    date: '22-04-2026'
  },
  {
    status: 'Đã biết',
    title: 'Font IBM Plex Mono',
    desc: 'render nhẹ hơn trên Windows Chrome so với Mac — do font hinting khác biệt. Đây là known issue của Google Fonts.',
    date: '15-04-2026'
  }
];

const LOG_FILTERS = ['Tất cả', 'Fixed', 'Đang xem', 'Đã biết'];

export default function Report() {
  const [selectedSev, setSelectedSev] = useState<number>(-1);
  const [selectedPages, setSelectedPages] = useState<number[]>([]);
  const [desc, setDesc] = useState('');
  const [action, setAction] = useState('');
  const [browser, setBrowser] = useState('');
  const [device, setDevice] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [tried, setTried] = useState(false);

  // Quick fix checked steps
  const [fixedSteps, setFixedSteps] = useState<number[]>([]);

  // Bug log active filter
  const [activeLogFilter, setActiveLogFilter] = useState<number>(0);

  const descInputId = useId();
  const actionInputId = useId();
  const browserSelectId = useId();
  const deviceSelectId = useId();
  const emailInputId = useId();

  const isFormValid =
    selectedSev >= 0 &&
    selectedPages.length > 0 &&
    desc.trim().length > 0;

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
    setDesc('');
    setSelectedSev(-1);
    setSelectedPages([]);
    setAction('');
    setBrowser('');
    setDevice('');
    setEmail('');
  };

  const togglePage = (idx: number) => {
    setSelectedPages((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleQuickFix = (idx: number) => {
    setFixedSteps((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const filteredLog = BUG_LOG.map((item) => {
    const isVisible =
      activeLogFilter === 0 || LOG_FILTERS[activeLogFilter] === item.status;
    return { ...item, isVisible };
  });

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#141414] font-sans antialiased overflow-x-hidden selection:bg-[#E8772E] selection:text-white">
      {/* Sub-header / Breadcrumb */}
      <div className="border-b border-[#DAD8D2]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-3.5 flex items-center gap-2.5 font-mono text-[12px] text-[#8A8883]">
          <Link to="/" className="text-[#8A8883] hover:text-[#141414] transition-colors no-underline">
            markAI.vn
          </Link>
          <span>/</span>
          <span className="text-[#141414]">Báo lỗi</span>
        </div>
      </div>

      {/* Hero / Report Section */}
      <section
        data-screen-label="Report"
        className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-[1.05fr_1.1fr] gap-12 lg:gap-16 items-start"
      >
        <div className="lg:sticky lg:top-[100px]">
          <div className="font-mono text-[12px] text-[#8A8883]">
            ✳ Báo lỗi · giúp mình fix nhanh hơn
          </div>
          <h1 className="mt-6 text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-[-0.06em] font-semibold text-[#141414]">
            Gặp lỗi?{' '}
            <span className="font-light italic text-[#E8772E]">Báo ngay đây.</span>
          </h1>
          <p className="mt-8 text-[17px] md:text-[18px] leading-[1.6] text-[#3A3935] max-w-[480px]">
            Mọi bug report đều được đọc và xử lý. Càng mô tả cụ thể, mình càng fix nhanh. Thường trong vòng 24-48h với lỗi nghiêm trọng.
          </p>

          <div className="mt-10 border-t border-[#141414] pt-6 grid grid-cols-3 gap-4 max-w-[480px]">
            <div>
              <div className="text-[28px] font-light tracking-[-0.05em] text-[#E8772E]">01</div>
              <div className="mt-1.5 text-[13px] leading-[1.5] text-[#55534F]">Lỗi ở trang nào</div>
            </div>
            <div>
              <div className="text-[28px] font-light tracking-[-0.05em] text-[#E8772E]">02</div>
              <div className="mt-1.5 text-[13px] leading-[1.5] text-[#55534F]">Bạn đang làm gì lúc đó</div>
            </div>
            <div>
              <div className="text-[28px] font-light tracking-[-0.05em] text-[#E8772E]">03</div>
              <div className="mt-1.5 text-[13px] leading-[1.5] text-[#55534F]">Trình duyệt &amp; thiết bị</div>
            </div>
          </div>

          <div className="mt-6 font-mono text-[11px] text-[#8A8883]">
            ✳ Gửi nhanh · có thể ẩn danh
          </div>
        </div>

        {/* Right Column: Form card */}
        <div id="report-form" className="bg-white border border-[#E6E4DE] rounded-[24px] p-6 sm:p-8 md:p-9 shadow-sm scroll-mt-8">
          {!sent ? (
            <div>
              <div className="flex justify-between items-center gap-3 font-mono text-[11px] text-[#8A8883]">
                <span>✳ Báo lỗi</span>
                <span>Fix thường trong 24-48h</span>
              </div>

              {/* Severity */}
              <div className="mt-7 text-[13px] font-medium text-[#141414]">
                Mức độ nghiêm trọng <span className="text-[#E8772E]">*</span>
              </div>
              <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SEVERITY_OPTIONS.map((opt, i) => {
                  const isActive = selectedSev === i;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedSev(i)}
                      className={`p-4 rounded-[14px] border text-left flex flex-col gap-3.5 transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#141414] text-white border-[#141414]'
                          : 'bg-[#F6F5F1] text-[#141414] border-[#E6E4DE] hover:border-[#141414]'
                      }`}
                    >
                      <span className="flex gap-1 items-center">
                        {[0, 1, 2].map((k) => (
                          <span
                            key={k}
                            className="w-3.5 h-1.5 rounded-xs transition-colors"
                            style={{
                              backgroundColor:
                                k < opt.level
                                  ? '#E8772E'
                                  : isActive
                                  ? '#3A3936'
                                  : '#DAD8D2'
                            }}
                          />
                        ))}
                      </span>
                      <span>
                        <span className="block text-[14px] font-semibold">{opt.title}</span>
                        <span className="block mt-0.5 text-[12px] opacity-75">{opt.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Page Picker */}
              <div className="mt-6 text-[13px] font-medium text-[#141414]">
                Lỗi xảy ra ở trang nào? <span className="text-[#E8772E]">*</span>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {PAGES_OPTIONS.map((pageText, idx) => {
                  const isSelected = selectedPages.includes(idx);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => togglePage(idx)}
                      className={`px-3.5 py-2 rounded-full text-[13px] whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                        isSelected
                          ? 'bg-[#141414] text-white border-[#141414]'
                          : 'bg-white text-[#55534F] border-[#DAD8D2] hover:border-[#141414] hover:text-[#141414]'
                      }`}
                    >
                      {isSelected ? '✓ ' : ''}
                      {pageText}
                    </button>
                  );
                })}
              </div>

              {/* Error Description */}
              <div className="mt-6 flex flex-col gap-2">
                <label htmlFor={descInputId} className="text-[13px] font-medium text-[#141414]">
                  Mô tả lỗi <span className="text-[#E8772E]">*</span>
                </label>
                <textarea
                  id={descInputId}
                  rows={4}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Ví dụ: Khi click vào bài Vibecode 03, trang hiển thị trắng. Thử refresh nhiều lần vẫn vậy..."
                  className="px-4 py-3.5 rounded-xl border border-[#DAD8D2] bg-[#F6F5F1] text-[15px] font-normal leading-[1.6] outline-none resize-y focus:border-[#141414] focus:bg-white transition-colors"
                />
              </div>

              {/* User Action */}
              <div className="mt-4 flex flex-col gap-2">
                <label htmlFor={actionInputId} className="text-[13px] font-medium text-[#141414]">
                  Bạn đang làm gì khi lỗi xảy ra?
                </label>
                <input
                  id={actionInputId}
                  type="text"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  placeholder="Ví dụ: Đang click vào bài học 03, đang copy prompt..."
                  className="px-4 py-3.5 rounded-xl border border-[#DAD8D2] bg-[#F6F5F1] text-[15px] font-normal outline-none focus:border-[#141414] focus:bg-white transition-colors"
                />
              </div>

              {/* Browser & Device */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label htmlFor={browserSelectId} className="text-[13px] font-medium text-[#141414]">
                    Trình duyệt
                  </label>
                  <select
                    id={browserSelectId}
                    value={browser}
                    onChange={(e) => setBrowser(e.target.value)}
                    className="px-4 py-3.5 rounded-xl border border-[#DAD8D2] bg-[#F6F5F1] text-[15px] font-normal outline-none focus:border-[#141414] focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="">Chọn...</option>
                    <option value="Chrome">Chrome</option>
                    <option value="Safari">Safari</option>
                    <option value="Firefox">Firefox</option>
                    <option value="Edge">Edge</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor={deviceSelectId} className="text-[13px] font-medium text-[#141414]">
                    Thiết bị
                  </label>
                  <select
                    id={deviceSelectId}
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                    className="px-4 py-3.5 rounded-xl border border-[#DAD8D2] bg-[#F6F5F1] text-[15px] font-normal outline-none focus:border-[#141414] focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="">Chọn...</option>
                    <option value="Máy tính">Máy tính</option>
                    <option value="Điện thoại">Điện thoại</option>
                    <option value="Tablet">Tablet</option>
                  </select>
                </div>
              </div>

              {/* Email */}
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex flex-col">
                  <label htmlFor={emailInputId} className="text-[13px] font-medium text-[#141414]">
                    Email
                  </label>
                  <span className="font-normal text-[#8A8883] text-[12px] mt-0.5">
                    Tùy chọn · để nhận thông báo khi fix xong. Để trống = ẩn danh.
                  </span>
                </div>
                <input
                  id={emailInputId}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="px-4 py-3.5 rounded-xl border border-[#DAD8D2] bg-[#F6F5F1] text-[15px] font-normal outline-none focus:border-[#141414] focus:bg-white transition-colors"
                />
              </div>

              {/* Submit footer */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <span
                  className="font-mono text-[11px] transition-colors"
                  style={{ color: tried && !isFormValid ? '#E8772E' : '#8A8883' }}
                >
                  {tried && !isFormValid
                    ? 'Cần mức độ, trang và mô tả lỗi'
                    : 'Mức độ, trang và mô tả là bắt buộc'}
                </span>
                <button
                  type="button"
                  onClick={handleSend}
                  className={`px-6.5 py-3.5 rounded-full text-white text-[14px] font-medium whitespace-nowrap transition-colors shadow-sm cursor-pointer ${
                    isFormValid ? 'bg-[#E8772E] hover:bg-[#d66922]' : 'bg-[#141414] hover:bg-black'
                  }`}
                >
                  Gửi báo lỗi →
                </button>
              </div>
            </div>
          ) : (
            <div className="min-h-[500px] flex flex-col justify-between gap-10 py-4">
              <span className="w-16 h-16 rounded-full bg-[#E8772E] text-white flex items-center justify-center text-[26px]">
                ✓
              </span>
              <div>
                <div className="font-mono text-[11px] text-[#8A8883]">
                  Đã gửi · {selectedSev >= 0 ? SEVERITY_OPTIONS[selectedSev].title : ''}
                </div>
                <h2 className="mt-3.5 text-[34px] sm:text-[40px] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
                  Đã nhận.{' '}
                  <span className="font-light italic text-[#E8772E]">Cảm ơn bạn.</span>
                </h2>
                <p className="mt-3.5 text-[15px] leading-[1.6] text-[#6B6B6B]">
                  Lỗi sẽ xuất hiện trong bug log bên dưới khi được xử lý.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-5 py-3 rounded-full border border-[#141414] text-[13px] font-medium text-[#141414] hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
                >
                  Báo lỗi khác
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section (01): Quick fix */}
      <section data-screen-label="Quick fix" className="border-t border-[#DAD8D2]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 md:py-28">
          <div className="font-mono text-[12px] text-[#8A8883] mb-5">
            (01) Trước khi báo lỗi
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[50px] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
            Tự fix nhanh{' '}
            <span className="font-light italic text-[#E8772E]">một số lỗi phổ biến.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {QUICK_FIXES.map((fix, idx) => {
              const isDone = fixedSteps.includes(idx);
              const num = String(idx + 1).padStart(2, '0');
              const isLast = idx === QUICK_FIXES.length - 1;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleQuickFix(idx)}
                  className="text-left flex flex-col gap-4.5 group cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center w-full">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] text-white shrink-0 transition-colors border"
                      style={{
                        backgroundColor: isDone ? '#E8772E' : '#F6F5F1',
                        borderColor: isDone ? '#E8772E' : '#CFCDC6',
                        color: isDone ? '#FFFFFF' : 'transparent'
                      }}
                    >
                      ✓
                    </span>
                    {!isLast && (
                      <span
                        className="h-[2px] grow transition-colors"
                        style={{
                          backgroundColor: isDone ? '#E8772E' : '#DAD8D2'
                        }}
                      />
                    )}
                  </div>

                  <span className="font-mono text-[11px] text-[#8A8883]">
                    {num} · {isDone ? 'đã thử' : 'bấm khi đã thử'}
                  </span>

                  <h3
                    className="text-[19px] font-semibold tracking-[-0.02em] transition-colors"
                    style={{ color: isDone ? '#8A8883' : '#141414' }}
                  >
                    {fix.title}
                  </h3>

                  <p className="text-[14px] leading-[1.6] text-[#6B6B6B] m-0">
                    {fix.desc}
                  </p>

                  {fix.hasKeys && (
                    <div className="flex flex-col gap-1.5 text-[12px] text-[#55534F] mt-1">
                      <span className="flex items-center gap-2">
                        Mac{' '}
                        <code className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-[#141414] text-white">
                          Cmd + Shift + R
                        </code>
                      </span>
                      <span className="flex items-center gap-2">
                        Win{' '}
                        <code className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-[#141414] text-white">
                          Ctrl + Shift + R
                        </code>
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick fix banner callout */}
          <div className="mt-12 bg-[#141414] text-[#F6F5F1] rounded-[20px] p-6 sm:p-7 flex flex-wrap justify-between items-center gap-5">
            <p className="m-0 text-[15px] sm:text-[16px] leading-[1.55] max-w-[800px]">
              <span className="text-[#E8772E] font-semibold">Nếu vẫn lỗi:</span> lúc đó hãy gửi bug report. Mình sẽ dễ tái hiện và xử lý nhanh hơn vì đã loại bớt các lỗi trình duyệt phổ biến.
            </p>
            <a
              href="#report-form"
              className="px-5 py-3 rounded-full bg-[#E8772E] hover:bg-white hover:text-[#141414] text-white text-[13px] font-medium whitespace-nowrap transition-colors no-underline"
            >
              Lên form ↑
            </a>
          </div>
        </div>
      </section>

      {/* Section (02): Bug log */}
      <section data-screen-label="Bug log" className="bg-[#141414] text-[#F6F5F1]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 md:py-28">
          <div className="flex flex-wrap justify-between items-end gap-6">
            <div>
              <div className="font-mono text-[12px] text-[#8A8883] mb-5">
                (02) Bug log · đã và đang xử lý
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[50px] leading-[1.05] tracking-[-0.045em] font-semibold text-white">
                Lỗi đang{' '}
                <span className="font-light italic text-[#E8772E]">được theo dõi.</span>
              </h2>
            </div>

            {/* Filter pills */}
            <div className="shrink-0 flex gap-1 border border-[#2A2927] rounded-full p-1 bg-[#1A1918]">
              {LOG_FILTERS.map((filter, i) => {
                const isActive = activeLogFilter === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveLogFilter(i)}
                    className={`px-3.5 py-2 rounded-full text-[12px] whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#F6F5F1] text-[#141414] font-medium'
                        : 'bg-transparent text-[#A8A6A0] hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* List of bugs */}
          <div className="mt-10 border-t border-[#F6F5F1]">
            {filteredLog.map((bug, idx) => {
              const opacity = bug.isVisible ? 1 : 0.2;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-[110px_1fr_auto] gap-3 sm:gap-5 items-baseline py-5.5 border-b border-[#2A2927] transition-opacity duration-300"
                  style={{ opacity }}
                >
                  <span
                    className="justify-self-start font-mono text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap border"
                    style={{
                      backgroundColor: bug.status === 'Fixed' ? '#E8772E' : 'transparent',
                      color:
                        bug.status === 'Fixed'
                          ? '#FFFFFF'
                          : bug.status === 'Đang xem'
                          ? '#E8772E'
                          : '#8A8883',
                      borderColor:
                        bug.status === 'Fixed'
                          ? '#E8772E'
                          : bug.status === 'Đang xem'
                          ? '#E8772E'
                          : '#3A3936'
                    }}
                  >
                    {bug.status}
                  </span>
                  <p className="m-0 text-[15px] leading-[1.55] text-[#A8A6A0]">
                    <strong className="text-[#F6F5F1] font-semibold">{bug.title}</strong>{' '}
                    {bug.desc}
                  </p>
                  <span className="font-mono text-[11px] text-[#6E6C67] whitespace-nowrap">
                    {bug.date}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
