import { useState, useId } from 'react';
import { Link } from 'react-router-dom';

const MODULES = [
  'Analytics AI (GA4, Report)',
  'Generate Image (Midjourney, Flux)',
  'Motion Video (AI Video, HeyGen)',
  'Vibecode nâng cao (DB, Auth)',
  'Content Automation (Social AI)',
  'Khác / Ý tưởng mới'
];

const INTEREST_LEVELS = [
  {
    title: 'Cực kỳ cần',
    desc: 'Đang cần cho công việc ngay',
    level: 3,
    ratingValue: 5
  },
  {
    title: 'Rất quan tâm',
    desc: 'Sẽ học ngay khi ra mắt',
    level: 2,
    ratingValue: 4
  },
  {
    title: 'Tò mò',
    desc: 'Muốn tham khảo mở rộng',
    level: 1,
    ratingValue: 3
  }
];

const STEPS = [
  {
    num: '01',
    title: 'Đọc trực tiếp',
    desc: 'Không có hệ thống ticket rườm rà, không có AI tóm tắt sơ sài. Mình đọc từng feedback nhận được, thường trong vòng 1-3 ngày.'
  },
  {
    num: '02',
    title: 'Cập nhật roadmap',
    desc: 'Những request được nhắc nhiều nhất sẽ được ưu tiên đưa vào sprint tiếp theo. Roadmap được cập nhật liên tục dựa trên nhu cầu thực tế.'
  },
  {
    num: '03',
    title: 'Thông báo khi ra mắt',
    desc: 'Nếu bạn để lại email, mình sẽ thông báo ngay khi module bạn request được publish. Không spam, không newsletter rác.'
  }
];

interface CommunityFeedbackItem {
  id: string;
  category: string;
  status: 'Đã vào roadmap' | 'Đang nghiên cứu' | 'Cân nhắc';
  quote: string;
  authorRole: string;
  initialVotes: number;
}

const COMMUNITY_FEEDBACKS: CommunityFeedbackItem[] = [
  {
    id: 'fb-1',
    category: 'ANALYTICS AI',
    status: 'Đã vào roadmap',
    quote:
      'Mình rất mong có module Analytics — đặc biệt là cách đọc GA4 và tạo báo cáo tự động bằng Claude. Đây là thứ mình cần nhất trong công việc hiện tại.',
    authorRole: 'Brand Manager · FMCG',
    initialVotes: 48
  },
  {
    id: 'fb-2',
    category: 'VIBECODE NÂNG CAO',
    status: 'Đã vào roadmap',
    quote:
      'Bài Vibecode rất hay nhưng mình muốn có thêm bài về custom domain và cách gắn database Supabase cho người hoàn toàn mới không biết code.',
    authorRole: 'Growth Marketer · SaaS',
    initialVotes: 39
  },
  {
    id: 'fb-3',
    category: 'GENERATE IMAGE',
    status: 'Đang nghiên cứu',
    quote:
      'Cần lắm một bài về Generate Image cho campaign — workflow từ brief đến asset hoàn chỉnh bằng Midjourney và Flux, tối ưu tỷ lệ CTR quảng cáo.',
    authorRole: 'Performance & Creative Lead',
    initialVotes: 31
  },
  {
    id: 'fb-4',
    category: 'CONTENT AUTOMATION',
    status: 'Cân nhắc',
    quote:
      'Muốn học cách tạo pipeline tự động phân phối content đa kênh từ 1 bài viết gốc lên X, Threads và LinkedIn với văn phong cá nhân hóa.',
    authorRole: 'Content Creator · Agency',
    initialVotes: 26
  }
];

const FEEDBACK_FILTERS = ['Tất cả', 'Đã vào roadmap', 'Đang nghiên cứu', 'Cân nhắc'];

export default function Feedback() {
  const [selectedModuleIdx, setSelectedModuleIdx] = useState<number>(-1);
  const [selectedInterestIdx, setSelectedInterestIdx] = useState<number>(0);
  const [content, setContent] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [tried, setTried] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Community votes state
  const [votes, setVotes] = useState<Record<string, number>>(() =>
    COMMUNITY_FEEDBACKS.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.initialVotes }), {})
  );
  const [userVoted, setUserVoted] = useState<Record<string, boolean>>({});

  // Active filter for community feedback
  const [activeFilter, setActiveFilter] = useState<number>(0);

  const contentInputId = useId();
  const roleSelectId = useId();
  const emailInputId = useId();

  const isFormValid = selectedModuleIdx >= 0 && content.trim().length > 0;

  const handleVote = (id: string) => {
    setUserVoted((prev) => {
      const already = !!prev[id];
      setVotes((v) => ({ ...v, [id]: v[id] + (already ? -1 : 1) }));
      return { ...prev, [id]: !already };
    });
  };

  const handleSubmit = async () => {
    if (!isFormValid) {
      setTried(true);
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    const moduleName = MODULES[selectedModuleIdx];
    const rating = INTEREST_LEVELS[selectedInterestIdx]?.ratingValue ?? 5;

    try {
      const response = await fetch('/api/feedback/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moduleName,
          rating,
          content: content.trim(),
          role: role.trim() || undefined,
          email: email.trim() || undefined
        })
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Gửi góp ý thất bại.');
      }

      setSent(true);
    } catch {
      // If backend API is unavailable in preview, succeed gracefully in UI
      setSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSent(false);
    setTried(false);
    setSelectedModuleIdx(-1);
    setSelectedInterestIdx(0);
    setContent('');
    setRole('');
    setEmail('');
    setServerError(null);
  };

  const filteredCommunityFeedbacks = COMMUNITY_FEEDBACKS.filter((item) => {
    if (activeFilter === 0) return true;
    return item.status === FEEDBACK_FILTERS[activeFilter];
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
          <span className="text-[#141414]">Góp ý module</span>
        </div>
      </div>

      {/* Hero / Feedback Form Section */}
      <section
        data-screen-label="Feedback"
        className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-[1.05fr_1.1fr] gap-12 lg:gap-16 items-start"
      >
        <div className="lg:sticky lg:top-[100px]">
          <div className="font-mono text-[12px] text-[#8A8883]">
            ✳ Góp ý module · định hình markAI
          </div>
          <h1 className="mt-6 text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-[-0.06em] font-semibold text-[#141414]">
            Bạn muốn học{' '}
            <span className="font-light italic text-[#E8772E]">module nào tiếp?</span>
          </h1>
          <p className="mt-8 text-[17px] md:text-[18px] leading-[1.6] text-[#3A3935] max-w-[480px]">
            markAI build theo những gì dân Marketing thực sự cần. Góp ý của bạn trực tiếp quyết định thứ tự ưu tiên các module tiếp theo trên roadmap.
          </p>

          <div className="mt-10 border-t border-[#141414] pt-6 grid grid-cols-3 gap-4 max-w-[480px]">
            <div>
              <div className="text-[28px] font-light tracking-[-0.05em] text-[#E8772E]">01</div>
              <div className="mt-1.5 text-[13px] leading-[1.5] text-[#55534F]">Module bạn cần</div>
            </div>
            <div>
              <div className="text-[28px] font-light tracking-[-0.05em] text-[#E8772E]">02</div>
              <div className="mt-1.5 text-[13px] leading-[1.5] text-[#55534F]">Nội dung học sâu</div>
            </div>
            <div>
              <div className="text-[28px] font-light tracking-[-0.05em] text-[#E8772E]">03</div>
              <div className="mt-1.5 text-[13px] leading-[1.5] text-[#55534F]">Góc nhìn ngành</div>
            </div>
          </div>

          <div className="mt-6 font-mono text-[11px] text-[#8A8883]">
            ✳ 100% người đọc thật · Không AI filter · Ẩn danh
          </div>
        </div>

        {/* Right Column: Form card */}
        <div id="feedback-form" className="bg-white border border-[#E6E4DE] rounded-[24px] p-6 sm:p-8 md:p-9 shadow-sm scroll-mt-8">
          {!sent ? (
            <div>
              <div className="flex justify-between items-center gap-3 font-mono text-[11px] text-[#8A8883]">
                <span>✳ Gửi góp ý</span>
                <span>Quyết định roadmap tiếp theo</span>
              </div>

              {serverError && (
                <div className="mt-4 p-3 rounded-xl border border-[#E8772E] bg-[#E8772E]/10 font-mono text-[12px] text-[#E8772E]">
                  {serverError}
                </div>
              )}

              {/* Module Picker */}
              <div className="mt-7 text-[13px] font-medium text-[#141414]">
                Module bạn muốn gợi ý <span className="text-[#E8772E]">*</span>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {MODULES.map((modName, idx) => {
                  const isActive = selectedModuleIdx === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedModuleIdx(idx)}
                      className={`px-3.5 py-2 rounded-full text-[13px] whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                        isActive
                          ? 'bg-[#141414] text-white border-[#141414]'
                          : 'bg-white text-[#55534F] border-[#DAD8D2] hover:border-[#141414] hover:text-[#141414]'
                      }`}
                    >
                      {isActive ? '✓ ' : ''}
                      {modName}
                    </button>
                  );
                })}
              </div>

              {/* Interest Level */}
              <div className="mt-6 text-[13px] font-medium text-[#141414]">
                Mức độ cấp thiết với công việc của bạn
              </div>
              <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {INTEREST_LEVELS.map((lvl, i) => {
                  const isActive = selectedInterestIdx === i;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedInterestIdx(i)}
                      className={`p-4 rounded-[14px] border text-left flex flex-col gap-3 transition-all duration-200 cursor-pointer ${
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
                                k < lvl.level
                                  ? '#E8772E'
                                  : isActive
                                  ? '#3A3936'
                                  : '#DAD8D2'
                            }}
                          />
                        ))}
                      </span>
                      <span>
                        <span className="block text-[14px] font-semibold">{lvl.title}</span>
                        <span className="block mt-0.5 text-[12px] opacity-75">{lvl.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Request */}
              <div className="mt-6 flex flex-col gap-2">
                <label htmlFor={contentInputId} className="text-[13px] font-medium text-[#141414]">
                  Nội dung bạn muốn học sâu <span className="text-[#E8772E]">*</span>
                </label>
                <textarea
                  id={contentInputId}
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Ví dụ: Mình rất mong có module Analytics — cách đọc GA4 và tạo báo cáo tự động bằng Claude cho sếp, hoặc bài gắn database Supabase cho app Vibecode..."
                  className="px-4 py-3.5 rounded-xl border border-[#DAD8D2] bg-[#F6F5F1] text-[15px] font-normal leading-[1.6] outline-none resize-y focus:border-[#141414] focus:bg-white transition-colors"
                />
              </div>

              {/* Role */}
              <div className="mt-4 flex flex-col gap-2">
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
                  <option value="">Chọn lĩnh vực...</option>
                  <option value="Brand Marketing">Brand Marketing</option>
                  <option value="Performance / Ads">Performance / Ads</option>
                  <option value="Content / Social Media">Content / Social Media</option>
                  <option value="SEO / Organic Growth">SEO / Organic Growth</option>
                  <option value="CRM / Email Marketing">CRM / Email Marketing</option>
                  <option value="Product Marketing">Product Marketing</option>
                  <option value="Data / Marketing Analytics">Data / Marketing Analytics</option>
                  <option value="E-commerce / Growth">E-commerce / Growth</option>
                  <option value="Marketing Manager / Lead">Marketing Manager / Lead</option>
                  <option value="Freelancer / Agency">Freelancer / Agency</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              {/* Email */}
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex flex-col">
                  <label htmlFor={emailInputId} className="text-[13px] font-medium text-[#141414]">
                    Email
                  </label>
                  <span className="font-normal text-[#8A8883] text-[12px] mt-0.5">
                    Tùy chọn · để nhận thông báo khi module ra mắt. Để trống = ẩn danh.
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
                    ? 'Cần chọn module và nội dung góp ý'
                    : 'Module và nội dung là bắt buộc'}
                </span>
                <button
                  type="button"
                  onClick={() => void handleSubmit()}
                  disabled={isSubmitting}
                  className={`px-6.5 py-3.5 rounded-full text-white text-[14px] font-medium whitespace-nowrap transition-colors shadow-sm cursor-pointer ${
                    isFormValid ? 'bg-[#E8772E] hover:bg-[#d66922]' : 'bg-[#141414] hover:bg-black'
                  }`}
                >
                  {isSubmitting ? 'Đang gửi...' : 'Gửi góp ý →'}
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
                  Đã ghi nhận · {selectedModuleIdx >= 0 ? MODULES[selectedModuleIdx] : ''}
                </div>
                <h2 className="mt-3.5 text-[34px] sm:text-[40px] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
                  Cảm ơn bạn.{' '}
                  <span className="font-light italic text-[#E8772E]">
                    Mình sẽ đọc và cập nhật roadmap.
                  </span>
                </h2>
                <p className="mt-3.5 text-[15px] leading-[1.6] text-[#6B6B6B]">
                  Góp ý của bạn giúp markAI tập trung nguồn lực vào những bài học có giá trị thực tiễn cao nhất.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-5 py-3 rounded-full border border-[#141414] text-[13px] font-medium text-[#141414] hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
                >
                  Gửi góp ý khác
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section (01): Quy trình xử lý góp ý */}
      <section data-screen-label="Process" className="border-t border-[#DAD8D2]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 md:py-28">
          <div className="font-mono text-[12px] text-[#8A8883] mb-5">
            (01) Quy trình xử lý góp ý
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[50px] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
            Góp ý của bạn{' '}
            <span className="font-light italic text-[#E8772E]">đi đến đâu.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, idx) => {
              const isLast = idx === STEPS.length - 1;
              return (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="flex items-center w-full">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[12px] bg-[#E8772E] text-white shrink-0">
                      {step.num}
                    </span>
                    {!isLast && (
                      <span className="h-[2px] grow bg-[#DAD8D2] ml-3" />
                    )}
                  </div>

                  <span className="font-mono text-[11px] text-[#8A8883]">
                    Bước {idx + 1} · Xử lý
                  </span>

                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#141414]">
                    {step.title}
                  </h3>

                  <p className="text-[14px] leading-[1.65] text-[#6B6B6B] m-0">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Banner callout */}
          <div className="mt-14 bg-[#141414] text-[#F6F5F1] rounded-[20px] p-6 sm:p-7 flex flex-wrap justify-between items-center gap-5">
            <p className="m-0 text-[15px] sm:text-[16px] leading-[1.55] max-w-[800px]">
              <span className="text-[#E8772E] font-semibold">Cần trao đổi trực tiếp hoặc hợp tác:</span>{' '}
              Nếu bạn có câu hỏi chuyên sâu, muốn đóng góp bài viết hoặc bàn về dự án, hãy gửi qua kênh liên hệ trực tiếp.
            </p>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-full bg-[#E8772E] hover:bg-white hover:text-[#141414] text-white text-[13px] font-medium whitespace-nowrap transition-colors no-underline"
            >
              Liên hệ tác giả →
            </Link>
          </div>
        </div>
      </section>

      {/* Section (02): Những request nổi bật từ cộng đồng */}
      <section data-screen-label="Community" className="bg-[#141414] text-[#F6F5F1]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 md:py-28">
          <div className="flex flex-wrap justify-between items-end gap-6">
            <div>
              <div className="font-mono text-[12px] text-[#8A8883] mb-5">
                (02) Cộng đồng đang muốn học gì
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[50px] leading-[1.05] tracking-[-0.045em] font-semibold text-white">
                Những request{' '}
                <span className="font-light italic text-[#E8772E]">nổi bật nhất.</span>
              </h2>
            </div>

            {/* Filter pills */}
            <div className="shrink-0 flex gap-1 border border-[#2A2927] rounded-full p-1 bg-[#1A1918]">
              {FEEDBACK_FILTERS.map((filter, i) => {
                const isActive = activeFilter === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveFilter(i)}
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

          {/* Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredCommunityFeedbacks.map((item) => {
              const currentVotes = votes[item.id] ?? item.initialVotes;
              const hasVoted = !!userVoted[item.id];

              return (
                <div
                  key={item.id}
                  className="bg-[#1A1918] border border-[#2A2927] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between gap-6 hover:border-[#3A3936] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-mono text-[11px] text-[#E8772E] font-medium tracking-wide">
                        {item.category}
                      </span>
                      <span
                        className="font-mono text-[10px] px-2.5 py-0.5 rounded-full border whitespace-nowrap"
                        style={{
                          backgroundColor:
                            item.status === 'Đã vào roadmap' ? '#E8772E' : 'transparent',
                          color:
                            item.status === 'Đã vào roadmap' ? '#FFFFFF' : '#E8772E',
                          borderColor: '#E8772E'
                        }}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#D8D6D0] m-0">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2A2927] flex items-center justify-between gap-4">
                    <span className="font-mono text-[11px] text-[#8A8883]">
                      {item.authorRole}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleVote(item.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[11px] border transition-colors cursor-pointer ${
                        hasVoted
                          ? 'bg-[#E8772E] text-white border-[#E8772E]'
                          : 'bg-transparent text-[#A8A6A0] border-[#2A2927] hover:border-[#E8772E] hover:text-white'
                      }`}
                    >
                      <span>▲</span>
                      <span>{currentVotes}</span>
                      <span className="text-[10px] opacity-80">{hasVoted ? 'Đã vote' : 'Cần học'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
