import { lessons } from './lessons';

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string; em?: string; id?: string }
  | { type: 'h4'; text: string; id?: string }
  | { type: 'html'; html: string }
  | { type: 'insight'; label: string; text: string }
  | { type: 'infographic'; label: string; steps: { label: string; title: string; desc: string }[]; aside: { label: string; title: string; desc: string } }
  | { type: 'divider' }
  | { type: 'compare'; headers: [string, string]; rows: { left: string; leftStyle: 'cross' | 'check' | 'accent' | 'normal'; right: string; rightStyle: 'cross' | 'check' | 'accent' | 'normal' }[] }
  | {
      type: 'usecases';
      eyebrow?: string;
      items: {
        icon: string;
        title: string;
        desc: string;
        tag?: string;
        variant?: 'quote' | 'body';
      }[];
    }
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
    title: 'Vibecode là gì',
    titleEm: 'giải thích cho người không biết code',
    desc: 'Hiểu vibecode theo cách dễ nhất: bạn có ý tưởng, bạn mô tả cho AI, AI viết code và ra sản phẩm. Không cần học code trước khi bắt đầu.',
    duration: '~4 phút',
    totalSubs: 5,
    currentIndex: 1,
    content: [
      { type: 'h3', text: 'Giải thích đơn giản nhất' },
      { type: 'p', text: 'Vibecode là cách bạn dùng <strong>AI để viết code thay mình</strong>. Bạn mô tả điều mình muốn bằng tiếng Việt bình thường — AI hiểu và tạo ra code. Bạn không cần đọc được code đó, không cần hiểu nó hoạt động thế nào bên trong.' },
      {
        type: 'infographic',
        label: 'Vibecode — Quy trình',
        steps: [
          { label: '01', title: 'Ý tưởng', desc: 'Bạn có hướng đi, nhu cầu, hoặc một thứ muốn làm nhanh.' },
          { label: '02', title: 'Mô tả', desc: 'Bạn viết ra mong muốn bằng ngôn ngữ bình thường để AI hiểu.' },
          { label: '03', title: 'Sản phẩm', desc: 'AI biến mô tả thành trang web, tool, flow hoặc prototype thật.' }
        ],
        aside: {
          label: 'Không cần',
          title: 'Không có bước "học code" ở giữa',
          desc: 'Bạn chạy theo ý tưởng và kết quả. AI lo phần kỹ thuật thay bạn.'
        }
      },
      { type: 'insight', label: 'Định nghĩa ngắn', text: 'Vibecode = bạn có ý tưởng, AI viết code, bạn ra sản phẩm. Không cần biết code ở giữa.' },
      { type: 'p', text: 'Hiểu đơn giản hơn: giống như bạn thuê <strong>một lập trình viên làm việc 24/7</strong>, <strong>không ngủ</strong>, <strong>không tính phí theo giờ</strong>, và <strong>luôn sẵn sàng sửa lại ngay lập tức khi bạn đổi ý</strong>. Chỉ khác là <strong>"lập trình viên" đó là AI</strong>.' },
      { type: 'divider' },
      { type: 'h3', text: 'Quy trình thực tế trông như thế nào?' },
      { type: 'p', text: 'Thay vì ngồi học cú pháp Python hay JavaScript, bạn ngồi <strong>mô tả</strong> điều mình muốn — giống như đang giải thích cho một người khác nghe. AI nhận lấy mô tả đó và tự viết code.' },
      { type: 'usecases', eyebrow: 'Vibecode hoạt động như thế nào', items: [
        { icon: '01', tag: 'Bạn làm', title: 'Gõ vào Cursor hoặc Claude Code', desc: '"Tạo cho tôi landing page giới thiệu sản phẩm mới, có countdown 3 ngày, form đăng ký email, nền màu trắng, responsive trên điện thoại."', variant: 'quote' },
        { icon: '02', tag: 'AI làm', title: 'AI đọc mô tả và bắt đầu viết', desc: 'Trong vài phút, AI tạo ra toàn bộ file code — HTML, CSS, logic countdown, form validation. Bạn không cần viết một dòng nào.', variant: 'body' },
        { icon: '03', tag: 'Bạn làm', title: 'Xem kết quả và điều chỉnh', desc: '"Màu nút CTA hơi nhạt quá, đổi sang đỏ đậm hơn. Và thêm phần testimonial 3 người vào bên dưới." — AI sửa ngay.', variant: 'quote' },
        { icon: '04', tag: 'Xong', title: 'Deploy lên internet', desc: 'Khi ưng ý, bạn deploy lên Vercel — một trang web thật, có link chia sẻ được. Mất thêm khoảng 5 phút.', variant: 'body' }
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
      { type: 'h3', text: '3 thứ Vibe Coding đang phá vỡ' },
      {
        type: 'html',
        html: `
          <p><strong>1. Rào cản kỹ thuật biến mất</strong></p>
          <p>Trước đây, để ra một landing page tùy chỉnh, một quiz phân loại lead, hay một chatbot chăm sóc khách hàng — <strong>bạn cần dev</strong>. Bạn cần viết brief, chờ estimate, chờ dev làm, chờ review, chờ fix bug.</p>
          <p>Giờ thì không. <strong>Bất kỳ ai có đủ tư duy sản phẩm và biết giao tiếp với AI — đều có thể tự làm</strong>. Rào cản kỹ thuật không còn là lợi thế cạnh tranh nữa.</p>
          <p><strong>2. Chi phí làm sản phẩm giảm mạnh</strong></p>
          <p>1 marketer biết AI giờ có thể làm được việc của cả một team nhỏ. Không phải vì họ làm thay mọi người — mà vì AI làm phần lớn công việc thực thi, còn họ tập trung vào phần quan trọng nhất: <strong>tư duy chiến lược và ra quyết định.</strong></p>
        `,
      },
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
    desc: 'Không phải vì AI sẽ thay bạn — mà vì người biết dùng AI sẽ đi nhanh hơn người không biết.',
    duration: '~5 phút',
    totalSubs: 5,
    currentIndex: 2,
    content: [
      { type: 'p', text: 'Không phải AI sẽ thay thế marketer. Nhưng <strong>marketer biết dùng AI sẽ thay thế marketer không biết.</strong>' },
      { type: 'divider' },
      { type: 'h3', text: 'Vì cuộc chơi đã đổi rồi' },
      {
        type: 'compare',
        headers: ['Before', 'After'],
        rows: [
          {
            left: 'Chỉ cần <strong>viết content ổn</strong>',
            leftStyle: 'normal',
            right: 'Ai cũng có thể dùng AI để <strong>viết bài</strong>',
            rightStyle: 'check',
          },
          {
            left: 'Chỉ cần <strong>chạy ads biết chút</strong> là đã có lợi thế',
            leftStyle: 'normal',
            right: 'Ai cũng có thể dùng AI để <strong>lên idea</strong> và <strong>làm chiến dịch</strong>',
            rightStyle: 'check',
          }
        ],
      },
      { type: 'insight', label: 'Kết luận', text: 'Nếu bạn không biết AI, bạn không phải là “chậm hơn một chút” đâu, mà là <strong>tụt lại hẳn phía sau luôn</strong>.' },
      { type: 'h3', text: 'Vì tốc độ bây giờ quan trọng hơn giỏi' },
      { type: 'p', text: 'Marketing hiện tại không phải là ai hay nhất thắng. Mà là <strong>ai nhanh hơn người đó thắng</strong>.' },
      {
        type: 'infographic',
        label: 'Ví dụ tốc độ thực thi',
        steps: [
          {
            label: '01',
            title: 'Bạn làm thủ công',
            desc: 'Mất <strong>2 tiếng</strong> để viết <strong>1 bài</strong>.',
          },
          {
            label: '02',
            title: 'Người khác dùng AI',
            desc: 'Mất <strong>20 phút</strong> để tạo <strong>10 bài</strong>.',
          }
        ],
        aside: {
          label: 'Kết quả',
          title: 'Test nhiều hơn sẽ thắng',
          desc: 'Chưa cần biết bài ai hay hơn. Chỉ cần họ test nhiều hơn bạn, họ có nhiều cơ hội thắng hơn.',
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'Vì giờ 1 người có thể làm việc của cả team' },
      {
        type: 'infographic',
        label: 'Từ team nhỏ sang một người + AI',
        steps: [
          {
            label: '01',
            title: 'Content',
            desc: 'Trước đây cần riêng một người lo <strong>nội dung</strong>.',
          },
          {
            label: '02',
            title: 'Designer',
            desc: 'Cần thêm người phụ trách <strong>thiết kế</strong> và hình ảnh.',
          },
          {
            label: '03',
            title: 'Ads',
            desc: 'Và cần người chạy <strong>quảng cáo</strong> để tối ưu chiến dịch.',
          }
        ],
        aside: {
          label: 'Bây giờ',
          title: 'Một mình bạn + AI',
          desc: 'Có thể làm gần hết quy trình. Không phải vì bạn giỏi hơn, mà vì bạn đang dùng đúng công cụ.',
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'AI không thay bạn, nhưng người biết dùng AI thì có' },
      { type: 'p', text: 'Nhiều người sợ AI sẽ lấy job. Nhưng thực tế không phải vậy.' },
      {
        type: 'infographic',
        label: 'Nỗi sợ và thực tế',
        steps: [
          {
            label: '01',
            title: 'AI không tự thay bạn',
            desc: 'AI không tự nghĩ chiến lược, không hiểu khách hàng sâu như bạn.',
          },
          {
            label: '02',
            title: 'Người biết dùng AI sẽ nhanh hơn',
            desc: 'Một người biết dùng AI có thể làm nhanh hơn bạn <strong>5–10 lần</strong>.',
          }
        ],
        aside: {
          label: 'Điểm quyết định',
          title: 'Người nhanh hơn thường được chọn',
          desc: 'Trong công việc, tốc độ tạo ra kết quả thường quyết định ai là người có lợi thế.',
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'Vì ai cũng đang bắt đầu dùng rồi' },
      { type: 'p', text: 'Cái nguy hiểm nhất là: Bạn nghĩ “chắc chưa nhiều người dùng đâu”.' },
      {
        type: 'infographic',
        label: 'Tín hiệu ngoài thị trường',
        steps: [
          {
            label: '01',
            title: 'Đối thủ đang dùng',
            desc: 'Người cạnh tranh trực tiếp với bạn đã bắt đầu tận dụng AI.',
          },
          {
            label: '02',
            title: 'Freelancer đang dùng',
            desc: 'Những người làm dịch vụ một mình cũng đã dùng AI để tăng tốc.',
          },
          {
            label: '03',
            title: 'Agency đang dùng',
            desc: 'Các team lớn hơn cũng đang đưa AI vào quy trình làm việc hằng ngày.',
          }
        ],
        aside: {
          label: 'Kết luận',
          title: 'Bạn không đứng yên',
          desc: 'Nên nếu bạn không dùng, bạn không đứng yên đâu — bạn đang <strong>tụt lại</strong>.',
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'Vì đây là thời điểm dễ bứt lên nhất' },
      {
        type: 'infographic',
        label: 'Các làn sóng cơ hội',
        steps: [
          {
            label: '01',
            title: 'Facebook Ads',
            desc: 'Ai biết Facebook Ads sớm thì <strong>đi trước</strong>.',
          },
          {
            label: '02',
            title: 'TikTok',
            desc: 'Ai làm TikTok sớm thì <strong>lên nhanh</strong>.',
          },
          {
            label: '03',
            title: 'AI',
            desc: 'Còn bây giờ, làn sóng cơ hội nằm ở <strong>AI</strong>.',
          }
        ],
        aside: {
          label: 'Nếu bắt đầu sớm',
          title: 'Bạn có lợi thế trước',
          desc: 'Bạn học nhanh hơn người khác, build lợi thế trước và kiếm tiền sớm hơn.',
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'Kết lại một câu thôi:' },
      { type: 'insight', label: 'Thông điệp chính', text: 'Bạn không cần giỏi AI ngay từ đầu<br /><br /><strong>Nhưng bạn cần bắt đầu ngay bây giờ</strong>' }
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
