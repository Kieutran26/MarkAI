import { lessons } from './lessons';

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string; em?: string }
  | { type: 'h4'; text: string }
  | { type: 'insight'; label: string; text: string }
  | { type: 'divider' }
  | { type: 'compare'; headers: [string, string]; rows: { left: string; leftStyle: 'cross' | 'check' | 'accent' | 'normal'; right: string; rightStyle: 'cross' | 'check' | 'accent' | 'normal' }[] }
  | { type: 'usecases'; items: { icon: string; title: string; desc: string }[] }
  | { type: 'grid2'; items: { label: string; title: string; desc: string }[] };

export type SubLessonFull = {
  id: string;
  slug: string;
  lessonSlug: string;
  lessonId: number;
  lessonTitle: string;
  lessonTitleEm: string;
  prevSlug: string | null;
  nextSlug: string | null;
  prevTitle: string | null;
  nextTitle: string | null;
  eyebrow: string;
  title: string;
  titleEm: string;
  desc: string;
  duration: string;
  totalSubs: number;
  currentIndex: number;
  content: ContentBlock[];
};

export const subLessons: SubLessonFull[] = [
  // ========== BÀI 01 ==========
  {
    id: '1.1',
    slug: 'bai-1-1',
    lessonSlug: 'vibecode-la-gi',
    lessonId: 1,
    lessonTitle: 'Vibecode là gì? Khó không? Giúp gì cho Marketer?',
    lessonTitleEm: 'Marketer?',
    prevSlug: null,
    nextSlug: 'bai-1-2',
    prevTitle: null,
    nextTitle: 'Tại sao Marketer lại cần biết vibecode?',
    eyebrow: 'Định nghĩa',
    title: 'Vibecode là gì — định nghĩa không-tech',
    titleEm: 'định nghĩa không-tech',
    desc: 'Giải thích bằng ngôn ngữ người làm Marketing. Không dùng thuật ngữ kỹ thuật, không cần nền tảng lập trình để hiểu bài này.',
    duration: '~4 phút',
    totalSubs: 5,
    currentIndex: 1,
    content: [
      { type: 'h3', text: 'Giải thích đơn giản nhất' },
      { type: 'p', text: 'Vibecode là cách bạn dùng <strong>AI để viết code thay mình</strong>. Bạn mô tả điều mình muốn bằng tiếng Việt bình thường — AI hiểu và tạo ra code. Bạn không cần đọc được code đó, không cần hiểu nó hoạt động thế nào bên trong.' },
      { type: 'p', text: 'Tên gọi "vibe" xuất phát từ cách làm việc: bạn chạy theo <strong>cảm giác và ý tưởng</strong>, AI lo phần kỹ thuật. Ý tưởng → mô tả → sản phẩm. Không có bước "học code" ở giữa.' },
      { type: 'insight', label: 'Định nghĩa ngắn', text: 'Vibecode = bạn có ý tưởng, AI viết code, bạn ra sản phẩm. Không cần biết code ở giữa.' },
      { type: 'p', text: 'Hiểu đơn giản hơn: giống như bạn thuê một lập trình viên làm việc 24/7, không ngủ, không tính phí theo giờ, và luôn sẵn sàng sửa lại ngay lập tức khi bạn đổi ý. Chỉ khác là "lập trình viên" đó là AI.' },
      { type: 'divider' },
      { type: 'h3', text: 'Quy trình thực tế trông như thế nào?' },
      { type: 'p', text: 'Thay vì ngồi học cú pháp Python hay JavaScript, bạn ngồi <strong>mô tả</strong> điều mình muốn — giống như đang giải thích cho một người khác nghe. AI nhận lấy mô tả đó và tự viết code.' },
      { type: 'usecases', items: [
        { icon: '01', title: 'Bạn gõ vào Cursor hoặc Claude Code', desc: '"Tạo cho tôi landing page giới thiệu sản phẩm mới, có countdown 3 ngày, form đăng ký email, nền màu trắng, responsive trên điện thoại."' },
        { icon: '02', title: 'AI đọc mô tả và bắt đầu viết', desc: 'Trong vài phút, AI tạo ra toàn bộ file code cho trang đó — HTML, CSS, logic countdown, form validation. Bạn không cần viết một dòng nào.' },
        { icon: '03', title: 'Bạn xem kết quả và điều chỉnh', desc: '"Màu nút CTA hơi nhạt quá, đổi sang đỏ đậm hơn. Và thêm phần testimonial 3 người vào bên dưới." — AI sửa ngay.' },
        { icon: '04', title: 'Deploy lên internet', desc: 'Khi ưng ý, bạn deploy lên Vercel — một trang web thật, có link chia sẻ được. Mất thêm khoảng 5 phút.' }
      ]},
      { type: 'divider' },
      { type: 'h3', text: 'Tại sao gọi là "vibe"?', em: '"vibe"?' },
      { type: 'p', text: 'Từ "vibe" ở đây có nghĩa là bạn đang làm việc theo <strong>intuition và cảm giác</strong> — không theo quy trình kỹ thuật cứng nhắc. Bạn thử, nhìn kết quả, không thích thì sửa, thích thì giữ lại. Lặp đi lặp lại cho đến khi đúng ý.' },
      { type: 'p', text: 'Khác hoàn toàn với lập trình truyền thống — nơi bạn phải hiểu chính xác từng dòng code làm gì trước khi viết ra. Vibecode cho phép bạn <strong>"cảm" trước, hiểu sau</strong> — hoặc không cần hiểu gì cũng được.' },
      { type: 'insight', label: 'Điểm mấu chốt', text: 'Vibecode không yêu cầu bạn hiểu code. Nó yêu cầu bạn biết <em>mình muốn gì</em> — và đủ kiên nhẫn để mô tả rõ điều đó cho AI.' },
      { type: 'divider' },
      { type: 'h3', text: 'Vibecode so với cách làm cũ' },
      { type: 'compare', headers: ['Cách cũ — chờ dev', 'Vibecode — tự làm'], rows: [
        { left: 'Viết brief → chờ estimate → chờ sprint', leftStyle: 'cross', right: 'Mô tả → AI code → xem kết quả ngay', rightStyle: 'check' },
        { left: 'Muốn sửa nhỏ phải mở ticket mới', leftStyle: 'cross', right: 'Muốn sửa → gõ thêm → AI sửa liền', rightStyle: 'check' },
        { left: 'Phụ thuộc lịch của team kỹ thuật', leftStyle: 'cross', right: 'Tự chủ hoàn toàn — làm khi nào cũng được', rightStyle: 'accent' },
        { left: 'Landing page mất 2 tuần', leftStyle: 'cross', right: 'Landing page mất 2–4 giờ', rightStyle: 'check' }
      ]},
      { type: 'divider' },
      { type: 'h3', text: 'Một điều quan trọng cần hiểu ngay từ đầu' },
      { type: 'p', text: 'Vibecode <strong>không thay thế developer giỏi</strong>. Nếu bạn cần build một hệ thống phức tạp, scale lớn, bảo mật cao — vẫn cần developer thật sự.' },
      { type: 'p', text: 'Nhưng vibecode cho phép bạn — người không phải developer — tự làm được <strong>một lớp việc rất rộng</strong> mà trước đây bắt buộc phải nhờ người khác: landing page, tool nội bộ đơn giản, prototype, dashboard, chatbot cơ bản...' },
      { type: 'p', text: 'Với Marketer, đó là đủ để thay đổi cách làm việc hoàn toàn.' },
      { type: 'insight', label: 'Tóm lại bài 1.1', text: 'Vibecode = AI viết code theo mô tả của bạn. Bạn không cần học code. Bạn cần biết mình muốn gì và mô tả rõ ràng. Phần còn lại AI lo.' }
    ]
  },
  {
    id: '1.2',
    slug: 'bai-1-2',
    lessonSlug: 'vibecode-la-gi',
    lessonId: 1,
    lessonTitle: 'Vibecode là gì? Khó không? Giúp gì cho Marketer?',
    lessonTitleEm: 'Marketer?',
    prevSlug: 'bai-1-1',
    nextSlug: 'bai-1-3',
    prevTitle: 'Vibecode là gì — định nghĩa không-tech',
    nextTitle: 'Vibecode khác học code truyền thống thế nào?',
    eyebrow: 'Tại sao quan trọng',
    title: 'Tại sao Marketer lại cần biết vibecode?',
    titleEm: '',
    desc: 'Không phải vì bạn cần trở thành developer — mà vì bạn sẽ không cần chờ developer nữa.',
    duration: '~5 phút',
    totalSubs: 5,
    currentIndex: 2,
    content: [
      { type: 'h3', text: 'Trước đây Marketer phải chờ' },
      { type: 'p', text: 'Khi một Marketer có ý tưởng cho landing page, công cụ tính toán, hay dashboard báo cáo — họ phải <strong>chờ team kỹ thuật</strong>. Chờ thiết kế. Chờ estimate. Chờ sprint. Chờ QA. Có khi vài tuần.' },
      { type: 'p', text: 'Vibecode phá vỡ cái vòng chờ đó. Bạn có thể tự tạo ra bản prototype trong <strong>vài giờ</strong>, test nhanh, điều chỉnh ngay — không phụ thuộc vào lịch của ai khác.' },
      { type: 'usecases', items: [
        { icon: '01', title: 'Tự build landing page campaign', desc: 'Thay vì xin dev làm rồi chờ 2 tuần, bạn tự ra trang trong 1 buổi sáng với đúng copy và design bạn muốn.' },
        { icon: '02', title: 'Tạo tool nội bộ cho team', desc: 'Bảng tính media plan tự động, tracker content calendar, dashboard báo cáo tuần — không cần sheet Excel phức tạp.' },
        { icon: '03', title: 'Prototype ý tưởng trước khi thuyết phục', desc: 'Thay vì slide mô tả concept, bạn demo trực tiếp một trang web thật — thuyết phục hơn gấp 10 lần.' },
        { icon: '04', title: 'Tích hợp AI vào workflow Marketing', desc: 'Chatbot hỏi đáp sản phẩm, form thu thập lead tự phân loại, auto-reply theo ngữ cảnh — tất cả tự build được.' }
      ]},
      { type: 'divider' },
      { type: 'h3', text: 'Thay đổi cách bạn làm việc' },
      { type: 'p', text: 'Vibecode không chỉ giúp bạn làm nhanh hơn. Nó <strong>thay đổi cách bạn tiếp cận vấn đề</strong>. Thay vì "có ý tưởng rồi nhờ dev", bạn bắt đầu nghĩ "mình có thể tự làm được".' },
      { type: 'p', text: 'Điểm mấu chốt: bạn không cần học code để bắt đầu. Bạn cần biết mình muốn gì — và đủ kiên nhẫn để mô tả rõ điều đó.' }
    ]
  },
  {
    id: '1.3',
    slug: 'bai-1-3',
    lessonSlug: 'vibecode-la-gi',
    lessonId: 1,
    lessonTitle: 'Vibecode là gì? Khó không? Giúp gì cho Marketer?',
    lessonTitleEm: 'Marketer?',
    prevSlug: 'bai-1-2',
    nextSlug: 'bai-1-4',
    prevTitle: 'Tại sao Marketer lại cần biết vibecode?',
    nextTitle: 'Những thứ Marketer đã build được bằng vibecode',
    eyebrow: 'So sánh',
    title: 'Vibecode khác học code truyền thống thế nào?',
    titleEm: '',
    desc: 'Hai cách tiếp cận hoàn toàn khác nhau — không phải cái nào tốt hơn, mà là cái nào phù hợp hơn với bạn.',
    duration: '~4 phút',
    totalSubs: 5,
    currentIndex: 3,
    content: [
      { type: 'h3', text: 'Học code truyền thống vs Vibecode' },
      { type: 'compare', headers: ['Học code truyền thống', 'Vibecode'], rows: [
        { left: 'Học syntax Python, JS... từ đầu', leftStyle: 'cross', right: 'Mô tả bằng tiếng Việt, AI tự viết', rightStyle: 'check' },
        { left: '6–12 tháng mới build được thứ gì đó', leftStyle: 'cross', right: 'Tuần đầu đã có sản phẩm thật', rightStyle: 'check' },
        { left: 'Hiểu code sâu, debug từng dòng', leftStyle: 'cross', right: 'Paste lỗi cho AI, nó tự sửa', rightStyle: 'check' },
        { left: 'Cần nền tảng toán, logic lập trình', leftStyle: 'cross', right: 'Chỉ cần biết mình muốn gì', rightStyle: 'check' },
        { left: 'Phù hợp muốn làm nghề developer', leftStyle: 'cross', right: 'Phù hợp Marketer muốn tự chủ hơn', rightStyle: 'accent' }
      ]},
      { type: 'insight', label: 'Lưu ý', text: 'Vibecode không thay thế developer giỏi. Nhưng nó cho phép bạn — người không phải developer — tự làm được những thứ trước đây phải cần họ.' }
    ]
  },
  {
    id: '1.4',
    slug: 'bai-1-4',
    lessonSlug: 'vibecode-la-gi',
    lessonId: 1,
    lessonTitle: 'Vibecode là gì? Khó không? Giúp gì cho Marketer?',
    lessonTitleEm: 'Marketer?',
    prevSlug: 'bai-1-3',
    nextSlug: 'bai-1-5',
    prevTitle: 'Vibecode khác học code truyền thống thế nào?',
    nextTitle: 'Bạn cần biết gì — và những thứ KHÔNG cần biết',
    eyebrow: 'Case thực tế',
    title: 'Những thứ Marketer đã build được bằng vibecode',
    titleEm: '',
    desc: 'Không phải ví dụ giả định — đây là những thứ người làm Marketing thực sự đã tạo ra.',
    duration: '~4 phút',
    totalSubs: 5,
    currentIndex: 4,
    content: [
      { type: 'h3', text: 'Case thực tế từ Marketer' },
      { type: 'grid2', items: [
        { label: 'Landing page', title: 'Trang campaign có countdown timer', desc: 'Build trong 3 giờ, đổi copy realtime theo A/B test, không cần xin dev chỉnh thêm.' },
        { label: 'Tool nội bộ', title: 'Brief generator tự động', desc: 'Điền thông tin campaign vào form, tool tự xuất brief chuẩn format gửi agency.' },
        { label: 'Dashboard', title: 'Tracker KPI tuần tự cập nhật', desc: 'Kéo data từ Google Sheet, hiển thị dạng bảng và biểu đồ, share link cho team.' },
        { label: 'Chatbot', title: 'FAQ bot cho fanpage', desc: 'Trả lời tự động các câu hỏi sản phẩm thường gặp, phân loại lead cơ bản.' }
      ]},
      { type: 'p', text: 'Điểm chung của tất cả: người làm ra chúng <strong>không biết code</strong> trước khi học vibecode. Một số làm xong trong ngày đầu tiên thử.' },
      { type: 'insight', label: 'Bottom line', text: 'Nếu bạn biết dùng Google Docs và gõ được câu mô tả rõ ràng — bạn đã đủ điều kiện.' }
    ]
  },
  {
    id: '1.5',
    slug: 'bai-1-5',
    lessonSlug: 'vibecode-la-gi',
    lessonId: 1,
    lessonTitle: 'Vibecode là gì? Khó không? Giúp gì cho Marketer?',
    lessonTitleEm: 'Marketer?',
    prevSlug: 'bai-1-4',
    nextSlug: null,
    prevTitle: 'Những thứ Marketer đã build được bằng vibecode',
    nextTitle: 'Bài 02 · Từ ngữ chuyên ngành',
    eyebrow: 'Chuẩn bị',
    title: 'Bạn cần biết gì — và những thứ KHÔNG cần biết',
    titleEm: '',
    desc: 'Danh sách này sẽ giúp bạn ngừng lo lắng và bắt đầu.',
    duration: '~3 phút',
    totalSubs: 5,
    currentIndex: 5,
    content: [
      { type: 'h3', text: 'Bạn CẦN có vs KHÔNG cần' },
      { type: 'compare', headers: ['✳ Bạn CẦN có', '✗ Bạn KHÔNG cần'], rows: [
        { left: 'Ý tưởng rõ về thứ mình muốn làm', leftStyle: 'check', right: 'Biết code Python, JavaScript, HTML', rightStyle: 'cross' },
        { left: 'Khả năng mô tả bằng tiếng Việt/Anh rõ ràng', leftStyle: 'check', right: 'Hiểu database, server, API là gì', rightStyle: 'cross' },
        { left: 'Máy tính đủ dùng (4GB RAM trở lên)', leftStyle: 'check', right: 'Bằng IT hay chứng chỉ lập trình', rightStyle: 'cross' },
        { left: 'Kiên nhẫn với lỗi — AI đôi khi sai', leftStyle: 'check', right: 'Hiểu terminal, command line từ trước', rightStyle: 'cross' },
        { left: 'Tài khoản Claude, GitHub, Vercel (đều free)', leftStyle: 'check', right: 'Trả tiền cho bất kỳ tool nào để bắt đầu', rightStyle: 'cross' }
      ]},
      { type: 'insight', label: 'Tóm lại', text: 'Nếu bạn biết dùng Google Docs và gõ được câu mô tả rõ ràng — bạn đã đủ điều kiện. Bài 02 bắt đầu từ đây.' }
    ]
  }
];

export function getSubLessonBySlug(lessonSlug: string, subSlug: string): SubLessonFull | undefined {
  return subLessons.find(sl => sl.lessonSlug === lessonSlug && sl.slug === subSlug);
}

export function getSubLessonsByLesson(lessonSlug: string): SubLessonFull[] {
  return subLessons.filter(sl => sl.lessonSlug === lessonSlug);
}

export function getAllSubLessonSlugs(): { lessonSlug: string; subSlug: string }[] {
  return subLessons.map(sl => ({ lessonSlug: sl.lessonSlug, subSlug: sl.slug }));
}
