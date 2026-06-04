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
  | { type: 'grid2'; items: { label: string; title: string; desc: string }[] }
  | { type: 'vibe-cards'; items: { icon: string; title: string }[] };

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
    titleEm: '',
    desc: 'Hiểu vibecode theo cách dễ nhất: bạn có ý tưởng, bạn mô tả cho AI, AI viết code và ra sản phẩm. Không cần học code trước khi bắt đầu.',
    duration: '~4 phút',
    totalSubs: 4,
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
    nextTitle: 'Những điều marketer có thể làm ngay khi biết AI',
    eyebrow: 'Tại sao quan trọng',
    title: 'Tại sao Marketer lại cần biết vibecode?',
    titleEm: '',
    desc: 'Không phải vì AI sẽ thay bạn — mà vì người biết dùng AI sẽ đi nhanh hơn người không biết.',
    duration: '~5 phút',
    totalSubs: 4,
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
    nextTitle: 'Bạn cần biết gì — và những thứ KHÔNG cần biết',
    eyebrow: 'So sánh',
    title: 'Những điều marketer có thể làm ngay khi biết AI',
    titleEm: '',
    desc: 'Biết AI không chỉ để hiểu xu hướng. Nó giúp marketer tự build, đọc insight nhanh hơn, và sản xuất nhiều hơn ngay trong công việc hằng ngày.',
    duration: '~4 phút',
    totalSubs: 4,
    currentIndex: 3,
    content: [
      { type: 'h3', text: 'Tự build tool mà không cần dev' },
      {
        type: 'html',
        html: `
          <section class="visual-ai-diagram" aria-label="Tự build tool mà không cần dev">
            <div class="visual-ai-diagram-grid">
              <div class="visual-ai-diagram-item">Landing page A/B testing</div>
              <div class="visual-ai-diagram-item">Quiz phân loại lead</div>
              <div class="visual-ai-diagram-item">Chatbot</div>
              <div class="visual-ai-diagram-item">Form thu thập dữ liệu tùy chỉnh.</div>
            </div>
            <div class="visual-ai-diagram-hub">
              <p>Tất cả đều có thể <strong>build bằng AI</strong> — không cần viết 1 dòng code, không cần chờ dev.</p>
            </div>
            <div class="visual-ai-diagram-outcome">
              <p>Điều này không chỉ tiết kiệm thời gian. Nó cho phép bạn <strong>thử nghiệm nhiều hơn</strong> vì chi phí thử nghiệm đã giảm xuống gần bằng 0.</p>
            </div>
          </section>
        `,
      },
      { type: 'divider' },
      { type: 'h3', text: 'Phân tích insight nhanh hơn gấp bội' },
      {
        type: 'html',
        html: `
          <section class="visual-insight-flow" aria-label="Phân tích insight nhanh hơn gấp bội">
            <div class="visual-insight-flow-step">
              <p>Bạn có một file CSV 5.000 dòng data campaign. Trước đây, bạn cần <strong>2 tiếng</strong> để pivot table, viết công thức, vẽ chart, rồi mới đọc được kết quả.</p>
            </div>
            <div class="visual-insight-flow-arrow" aria-hidden="true"></div>
            <div class="visual-insight-flow-step visual-insight-flow-step-accent">
              <p>Giờ bạn upload lên AI, hỏi: <em>"Segment nào có CPL thấp nhất và conversion rate cao nhất trong 30 ngày qua?"</em> — và có insight trong 30 giây.</p>
            </div>
            <div class="visual-insight-flow-outcome">
              <p><strong>Data → insight → action.</strong> Vòng lặp đó giờ diễn ra trong một buổi sáng thay vì cả tuần.</p>
            </div>
          </section>
        `,
      },
      { type: 'divider' },
      { type: 'h3', text: 'Sản xuất content theo scale lớn hơn' },
      {
        type: 'html',
        html: `
          <section class="visual-content-scale" aria-label="Sản xuất content theo scale lớn hơn">
            <div class="visual-content-scale-grid">
              <div class="visual-content-scale-item">10 headline cho một campaign.</div>
              <div class="visual-content-scale-item">5 version email theo từng segment.</div>
              <div class="visual-content-scale-item">20 caption cho một tháng social.</div>
              <div class="visual-content-scale-item">Script video cho 4 tuần.</div>
            </div>
            <div class="visual-content-scale-focus">
              <p>Không phải AI làm thay bạn — AI làm phần <strong>thực thi</strong> để bạn tập trung vào phần chiến lược: đúng message, đúng người, đúng thời điểm.</p>
            </div>
          </section>
        `,
      }
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
    nextSlug: null,
    prevTitle: 'Những điều marketer có thể làm ngay khi biết AI',
    nextTitle: 'Bài 02 · Từ điển chuyên ngành',
    eyebrow: 'Chuẩn bị',
    title: 'Bạn cần biết gì',
    titleEm: '',
    desc: 'Danh sách này sẽ giúp bạn ngừng lo lắng và bắt đầu.',
    duration: '~5 phút',
    totalSubs: 4,
    currentIndex: 4,
    content: [
      { type: 'h3', text: 'Bạn cần biết mình muốn làm gì' },
      { type: 'p', text: 'Đây là <strong>nguyên liệu quan trọng nhất</strong> — và bạn đã có rồi, chỉ là chưa nhận ra.' },
      { type: 'p', text: 'AI không thiếu khả năng. AI thiếu <strong>hướng dẫn.</strong> Và người cung cấp hướng dẫn đó chính là bạn.' },
      { type: 'p', text: 'Bạn không cần biết code hoạt động như thế nào. Bạn chỉ cần biết mình muốn gì. Ví dụ:' },
      {
        type: 'html',
        html: `
          <section class="vibe-checklist" aria-label="Ví dụ ý tưởng cụ thể">
            <div class="vibe-checklist-item">
              <span class="vibe-checklist-icon">✓</span>
              <span>"Tôi muốn một trang thu thập email của khách hàng tiềm năng"</span>
            </div>
            <div class="vibe-checklist-item">
              <span class="vibe-checklist-icon">✓</span>
              <span>"Tôi muốn một quiz giúp khách hàng chọn đúng sản phẩm phù hợp"</span>
            </div>
            <div class="vibe-checklist-item">
              <span class="vibe-checklist-icon">✓</span>
              <span>"Tôi muốn một dashboard theo dõi hiệu quả campaign theo tuần"</span>
            </div>
            <div class="vibe-checklist-summary">
              <p>Ý tưởng <strong>càng cụ thể</strong>, AI <strong>càng làm đúng</strong>. Đó là tất cả những gì bạn cần ở bước này.</p>
            </div>
          </section>
        `,
      },
      { type: 'divider' },
      { type: 'h3', text: 'Khả năng mô tả rõ ràng bằng tiếng Việt hoặc tiếng Anh' },
      { type: 'p', text: 'Vibe Coding thực chất là <strong>nghệ thuật giao tiếp với AI.</strong>' },
      { type: 'p', text: 'Bạn không cần giỏi tiếng Anh. Bạn không cần dùng thuật ngữ kỹ thuật. Bạn chỉ cần <strong>diễn đạt được ý mình muốn</strong> — như đang giải thích cho một người bạn thông minh nghe.' },
      {
        type: 'html',
        html: `
          <section class="vibe-compare" aria-label="So sánh cách diễn đạt">
            <div class="vibe-compare-bad">
              <div class="vibe-compare-label">✗ Thay vì</div>
              <p>"Tạo cho tôi một biểu mẫu tạo khách hàng tiềm năng"</p>
            </div>
            <div class="vibe-compare-arrow">→</div>
            <div class="vibe-compare-good">
              <div class="vibe-compare-label">✓ Bạn hoàn toàn có thể nói</div>
              <p>"Làm cho tôi một form đăng ký, có ô điền tên và email, khi bấm gửi thì hiện thông báo cảm ơn"</p>
            </div>
          </section>
        `,
      },
      { type: 'insight', label: 'Lưu ý', text: 'AI hiểu cả hai. Kỹ năng bạn cần rèn là mô tả càng chi tiết càng tốt — màu sắc, bố cục, tính năng, cảm giác bạn muốn tạo ra. Cái đó, bạn hoàn toàn làm được ngay hôm nay.' },
      { type: 'divider' },
      { type: 'h3', text: 'Máy tính đủ dùng là được' },
      { type: 'p', text: 'Bạn không cần máy xịn. Chỉ cần:' },
      {
        type: 'vibe-cards',
        items: [
          { icon: 'laptop', title: 'Laptop bình thường' },
          { icon: 'brain', title: 'RAM từ 8GB trở lên' },
          { icon: 'wifi', title: 'Có internet ổn định' }
        ]
      },
      { type: 'insight', label: 'Tại sao?', text: 'Vì hầu hết AI chạy trên web không cần cài đặt nặng.' },
      { type: 'divider' },
      { type: 'h3', text: 'Kiên nhẫn với lỗi — AI đôi khi sai' },
      { type: 'p', text: 'Đây là điều nhiều người mới hay bị "vỡ mộng".' },
      { type: 'p', text: '<strong>AI không hoàn hảo. AI sẽ sai. Và đó là bình thường.</strong>' },
      {
        type: 'html',
        html: `
          <section class="vibe-warning" aria-label="Những điều AI có thể sai">
            <div class="vibe-warning-grid">
              <div class="vibe-warning-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Đôi khi trả lời sai</div>
              <div class="vibe-warning-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Đôi khi cần sửa 2–3 lần mới ra đúng</div>
              <div class="vibe-warning-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Tạo ra thứ bạn chưa muốn</div>
              <div class="vibe-warning-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Đôi khi viết chưa hay</div>
              <div class="vibe-warning-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Đôi khi hiểu nhầm ý bạn</div>
            </div>
          </section>
        `,
      },
      { type: 'p', text: 'Nhưng đây chính là lúc kỹ năng giao tiếp phát huy tác dụng. Thay vì bỏ cuộc, bạn chỉ cần nói tiếp: <em>"Phần này chưa đúng, tôi muốn nó trông như thế này..."</em>' },
      {
        type: 'html',
        html: `
          <section class="vibe-loop" aria-label="Vòng lặp Vibe Coding">
            <div class="vibe-loop-step">
              <span class="vibe-loop-num">1</span>
              <span>Sửa lại prompt</span>
            </div>
            <div class="vibe-loop-arrow">→</div>
            <div class="vibe-loop-step">
              <span class="vibe-loop-num">2</span>
              <span>Hướng dẫn lại AI</span>
            </div>
            <div class="vibe-loop-arrow">→</div>
            <div class="vibe-loop-step vibe-loop-step-active">
              <span class="vibe-loop-num">3</span>
              <span>Refine dần</span>
            </div>
          </section>
        `,
      },
      { type: 'insight', label: 'Quan trọng', text: 'Vibe Coding không phải là ra lệnh một lần và xong. Nó là một cuộc hội thoại — <strong>bạn dẫn dắt, AI thực thi, bạn phản hồi, AI cải thiện</strong>. Người kiên nhẫn với vòng lặp đó sẽ làm được những thứ <strong>rất ấn tượng.</strong>' },
      { type: 'divider' },
      { type: 'h3', text: 'Một vài tài khoản cơ bản — tất cả đều miễn phí' },
      {
        type: 'html',
        html: `
          <section class="vibe-tools" aria-label="Bộ công cụ miễn phí">
            <div class="vibe-tool-item">
              <div class="vibe-tool-badge">AI Coder</div>
              <div class="vibe-tool-title">Claude / Codex / Antigravity</div>
              <div class="vibe-tool-desc">AI giúp bạn viết code, giải thích lỗi, và build sản phẩm bằng ngôn ngữ tự nhiên. Đây là "người bạn thông minh" trong bộ ba này.</div>
            </div>
            <div class="vibe-tool-item">
              <div class="vibe-tool-badge">Code Storage</div>
              <div class="vibe-tool-title">GitHub</div>
              <div class="vibe-tool-desc">Nơi lưu trữ code của bạn trên cloud. Bạn không cần hiểu sâu về nó ngay từ đầu — chỉ cần có tài khoản và để AI hướng dẫn từng bước.</div>
            </div>
            <div class="vibe-tool-item">
              <div class="vibe-tool-badge">Deploy</div>
              <div class="vibe-tool-title">Vercel / Netlify</div>
              <div class="vibe-tool-desc">Nơi đưa sản phẩm của bạn lên internet. Bạn build xong, Vercel deploy lên thành một link thật, chia sẻ được với bất kỳ ai. Nhanh, đơn giản, và miễn phí cho cá nhân.</div>
            </div>
          </section>
        `,
      },
      { type: 'p', text: 'Ba tài khoản. Không tốn một đồng. Đủ để bạn build và publish sản phẩm đầu tiên của mình.' },
      { type: 'insight', label: 'Đừng lo', text: 'Nếu bạn chưa biết dùng chúng — ta sẽ đi từng bước trong khóa.' }
    ]
  },
  {
    id: '2.1',
    slug: 'bai-2-1',
    lessonSlug: 'tu-ngu-chuyen-nganh',
    lessonId: 2,
    lessonTitle: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    lessonTitleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    prevSlug: null,
    nextSlug: 'bai-2-2',
    prevTitle: null,
    nextTitle: 'Input vs Output',
    eyebrow: 'Khái niệm gốc',
    title: 'AI, Model, Prompt là gì?',
    titleEm: '',
    desc: 'Ba từ này xuất hiện khắp nơi. Nhưng ít ai giải thích đúng theo kiểu marketer có thể dùng ngay.',
    duration: '~7 phút',
    totalSubs: 5,
    currentIndex: 1,
    content: [
      { type: 'p', text: 'Ba từ này xuất hiện khắp nơi. Nhưng ít ai giải thích đúng theo kiểu marketer có thể dùng ngay.' },
      { type: 'divider' },
      { type: 'h3', text: 'AI' },
      { type: 'p', text: '<strong>AI</strong> — Artificial Intelligence. Đừng nghĩ robot hay phim viễn tưởng. Trong bối cảnh bạn đang dùng hàng ngày, AI là một phần mềm <strong>có khả năng xử lý ngôn ngữ, hình ảnh, dữ liệu — và trả lời theo cách giống con người.</strong>' },
      { type: 'divider' },
      { type: 'h3', text: 'Model' },
      { type: 'p', text: '<strong>Model</strong> — Là "bộ não" cụ thể bên trong AI đó.' },
      { type: 'html', html: '<section class="model-map" aria-label="Sơ đồ model AI"><div class="model-map-core"><div class="model-map-core-label">AI</div><div class="model-map-core-title">Mỗi tool AI có một model bên trong</div><div class="model-map-core-desc">Model là bộ não quyết định cách nó hiểu và trả lời.</div></div><div class="model-map-branches"><article class="model-map-node"><div class="model-map-node-brand">ChatGPT</div><div class="model-map-node-model">GPT-4o</div></article><article class="model-map-node"><div class="model-map-node-brand">Claude</div><div class="model-map-node-model">Sonnet 4.6 <span>hoặc</span> Opus 4.7</div></article><article class="model-map-node"><div class="model-map-node-brand">Gemini</div><div class="model-map-node-model">Gemini 3.1 Pro <span>hoặc</span> 3.1 Flash</div></article></div></section>' },
      { type: 'p', text: 'Cùng một câu hỏi, model khác nhau cho kết quả khác nhau — vì mỗi model được huấn luyện trên dữ liệu khác nhau, theo cách khác nhau.' },
      { type: 'divider' },
      { type: 'h3', text: 'Prompt' },
      { type: 'p', text: '<strong>Prompt</strong> — Là thứ bạn gõ vào để ra lệnh cho AI. Không phải "câu hỏi" theo nghĩa thông thường. <strong>Prompt là một chỉ dẫn.</strong> Bạn viết prompt càng rõ, AI hiểu càng đúng, output ra càng gần với điều bạn thực sự cần.' },
      { type: 'html', html: '<section class="vibe-compare" aria-label="Prompt tệ và prompt tốt"><div class="vibe-compare-bad"><div class="vibe-compare-label">Prompt tệ</div><p>“Viết content bán hàng”</p></div><div class="vibe-compare-arrow">→</div><div class="vibe-compare-good"><div class="vibe-compare-label">Prompt tốt</div><p>“Viết bài quảng cáo Facebook bán mỹ phẩm, target nữ 25-35 tuổi, giọng văn trẻ trung, có CTA rõ ràng”</p></div></section>' },
      { type: 'insight', label: 'Điểm chốt', text: 'AI KHÔNG thông minh hơn prompt của bạn. Prompt tốt = kết quả tốt.' }
    ]
  },
  {
    id: '2.2',
    slug: 'bai-2-2',
    lessonSlug: 'tu-ngu-chuyen-nganh',
    lessonId: 2,
    lessonTitle: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    lessonTitleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    prevSlug: 'bai-2-1',
    nextSlug: 'bai-2-3',
    prevTitle: 'AI, Model, Prompt là gì?',
    nextTitle: 'Tại sao marketer cần hiểu tech?',
    eyebrow: 'Input và Output',
    title: 'Input vs Output',
    titleEm: '',
    desc: 'Đây là cặp khái niệm cơ bản nhất — và quan trọng hơn bạn nghĩ.',
    duration: '~6 phút',
    totalSubs: 5,
    currentIndex: 2,
    content: [
      { type: 'p', text: 'Đây là cặp khái niệm cơ bản nhất — và quan trọng hơn bạn nghĩ.' },
      { type: 'divider' },
      { type: 'h3', text: 'Input là gì?' },
      { type: 'p', text: '<strong>Input</strong> là thứ bạn đưa vào cho AI:' },
      { type: 'html', html: '<section class="input-map" aria-label="Sơ đồ input cho AI"><div class="input-map-items"><span>Văn bản</span><span>Hình ảnh</span><span>File</span><span>Link</span><span>Dữ liệu</span></div><div class="input-map-note"><strong>Prompt</strong> cũng là một dạng input.</div></section>' },
      { type: 'h3', text: 'Output là gì?' },
      { type: 'p', text: '<strong>Output</strong> là thứ AI trả về:' },
      { type: 'html', html: '<section class="output-map" aria-label="Sơ đồ output từ AI"><div class="output-map-items"><span>Bài viết</span><span>Đoạn code</span><span>Bản tóm tắt</span><span>Danh sách ý tưởng</span><span>Hình ảnh</span><span>To do list</span><span>Plans</span></div></section>' },
      { type: 'divider' },
      { type: 'p', text: '<strong>Vấn đề:</strong> Hầu hết mọi người chỉ chăm chăm nhìn vào output mà không chịu đầu tư vào input. Khi output ra sai, họ nghĩ AI dở. Thực ra, input của họ mới là vấn đề.' },
      { type: 'p', text: 'Một marketer giỏi dùng AI không phải người biết nhiều tool nhất. Là người biết cách kiểm soát input để lấy được output mình cần.' },
      { type: 'html', html: '<section class="vibe-compare" aria-label="Input kém và input tốt"><div class="vibe-compare-bad"><div class="vibe-compare-label">Input kém</div><p>“Viết content”</p><p>→ Output: chung chung, nhạt, không dùng được</p></div><div class="vibe-compare-arrow">→</div><div class="vibe-compare-good"><div class="vibe-compare-label">Input tốt</div><p>“Viết 3 mẫu quảng cáo Facebook bán khoá học AI cho marketer, giọng văn đơn giản, tập trung vào pain point “không biết dùng AI”</p><p>→ Output: rõ ràng, có target, dùng được ngay</p></div></section>' },
      { type: 'insight', label: 'Điểm chốt', text: 'Input tốt thì output mới rõ ràng, có target và dùng được ngay.' }
    ]
  },
  {
    id: '2.3',
    slug: 'bai-2-3',
    lessonSlug: 'tu-ngu-chuyen-nganh',
    lessonId: 2,
    lessonTitle: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    lessonTitleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    prevSlug: 'bai-2-2',
    nextSlug: 'bai-2-4',
    prevTitle: 'Input vs Output',
    nextTitle: 'Case thực tế: ChatGPT viết content sai vì prompt',
    eyebrow: 'Tech mindset',
    title: 'Tại sao marketer cần hiểu tech?',
    titleEm: '',
    desc: 'Không phải để thành dân kỹ thuật. Mà vì: AI đang thay đổi cách công việc marketing được thực thi.',
    duration: '~7 phút',
    totalSubs: 5,
    currentIndex: 3,
    content: [
      { type: 'p', text: 'AI đang thay đổi cách công việc marketing được thực thi — và nếu bạn không hiểu nó hoạt động như thế nào, bạn sẽ dùng nó sai, hoặc không dùng được hết tiềm năng của nó.' },
      { type: 'compare', headers: ['Nếu bạn không hiểu', 'Nếu bạn hiểu'], rows: [
        { left: 'Bạn không biết hỏi gì', leftStyle: 'cross', right: 'Bạn sẽ viết prompt tốt hơn', rightStyle: 'check' },
        { left: 'Bạn không sửa được output', leftStyle: 'cross', right: 'Bạn kiểm soát AI tốt hơn', rightStyle: 'check' },
        { left: 'Bạn phụ thuộc vào AI', leftStyle: 'cross', right: 'Bạn tăng năng suất x3–x10', rightStyle: 'accent' }
      ]},
      {
        type: 'infographic',
        label: 'Hiểu tech để làm gì',
        steps: [
          {
            label: '01',
            title: 'Hiểu model',
            desc: 'Biết vì sao <strong>cùng một prompt</strong> trên ChatGPT và Claude lại cho <strong>kết quả khác nhau</strong>.',
          },
          {
            label: '02',
            title: 'Hiểu input/output',
            desc: 'Biết cách <strong>cấu trúc brief cho AI</strong> thay vì chỉ hỏi đại rồi chờ may mắn.',
          },
          {
            label: '03',
            title: 'Hiểu giới hạn AI',
            desc: 'Không <strong>phụ thuộc mù quáng vào output</strong>, biết lúc nào nên tin, sửa, hoặc làm lại.',
          },
        ],
        aside: {
          label: 'Kết quả',
          title: 'Biết đủ để không lệ thuộc',
          desc: 'Bạn làm việc với AI như một <strong>đồng nghiệp thực thụ</strong>, không phải như một cái máy thần kỳ chỉ biết bấm nút.',
        },
      },
      { type: 'insight', label: 'Điểm chốt', text: 'Khác biệt KHÔNG phải do AI. Khác biệt do cách dùng AI.' }
    ]
  },
  {
    id: '2.4',
    slug: 'bai-2-4',
    lessonSlug: 'tu-ngu-chuyen-nganh',
    lessonId: 2,
    lessonTitle: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    lessonTitleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    prevSlug: 'bai-2-3',
    nextSlug: 'bai-2-5',
    prevTitle: 'Tại sao marketer cần hiểu tech?',
    nextTitle: 'Từ điển chuyên ngành',
    eyebrow: 'Case study',
    title: 'Case thực tế: ChatGPT viết content sai vì prompt',
    titleEm: '',
    desc: 'Tình huống này xảy ra với hầu hết marketer khi mới dùng AI.',
    duration: '~8 phút',
    totalSubs: 5,
    currentIndex: 4,
    content: [
      { type: 'p', text: 'Tình huống này xảy ra với hầu hết marketer khi mới dùng AI.' },
      { type: 'p', text: 'Một bạn marketing cần viết caption Facebook cho sản phẩm sữa dưỡng thể mới ra của brand. Bạn gõ vào ChatGPT:' },
      { type: 'html', html: '<section class="prompt-case-flow" aria-label="Case prompt sai và prompt đúng"><article class="prompt-case-card prompt-case-card-bad"><div class="prompt-case-label">Prompt thiếu</div><div class="prompt-case-quote">“Viết caption Facebook cho sản phẩm sữa dưỡng thể mới.”</div><div class="prompt-case-text"><p><strong>Tone:</strong> AI tự đoán</p><p><strong>USP:</strong> không có</p><p><strong>CTA:</strong> không có</p></div></article><div class="prompt-case-arrow" aria-hidden="true">→</div><article class="prompt-case-card prompt-case-card-good"><div class="prompt-case-label">Prompt đủ</div><div class="prompt-case-quote">“Viết 3 caption Facebook cho sản phẩm sữa dưỡng thể [tên sản phẩm].”</div><div class="prompt-case-text"><p><strong>Target:</strong> nữ 22–35 tuổi</p><p><strong>Tone:</strong> gần gũi, không hoa mỹ</p><p><strong>USP:</strong> rẻ hơn Vaseline 30%</p><p><strong>CTA:</strong> dẫn link Shopee</p><p><strong>Giới hạn:</strong> dưới 100 chữ</p></div></article><div class="prompt-case-result"><div class="prompt-case-result-title">AI hiểu sai khi thiếu context</div><div class="prompt-case-result-grid"><div><strong>Tone sai</strong><p>Viết như brand cao cấp thay vì bình dân.</p></div><div><strong>Message sai</strong><p>Nhấn vào thành phần tự nhiên thay vì USP giá rẻ hơn 30%.</p></div><div><strong>CTA sai</strong><p>Kêu gọi khám phá thay vì đẩy link mua trực tiếp.</p></div></div><div class="prompt-case-result-note">Vấn đề không phải ChatGPT dở. Vấn đề là prompt thiếu thông tin cần thiết để AI hiểu đúng yêu cầu.</div></div></section>' },
      { type: 'p', text: 'Output từ prompt thứ hai khác hoàn toàn, và có thể dùng được ngay hoặc chỉ cần chỉnh nhẹ.' }
    ]
  },
  {
    id: '2.5',
    slug: 'bai-2-5',
    lessonSlug: 'tu-ngu-chuyen-nganh',
    lessonId: 2,
    lessonTitle: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    lessonTitleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    prevSlug: 'bai-2-4',
    nextSlug: 'bai-3-1',
    prevTitle: 'Case thực tế: ChatGPT viết content sai vì prompt',
    nextTitle: 'Node.js — nền tảng để chạy code',
    eyebrow: 'Từ điển thuật ngữ',
    title: 'Từ điển chuyên ngành',
    titleEm: '',
    desc: 'Vì danh sách từ ngữ khá dài — và mỗi từ đều được giải thích kèm ví dụ thực tế — mình đã tách phần này thành một trang riêng biệt để bạn dễ tra cứu lại bất cứ lúc nào.',
    duration: '~6 phút',
    totalSubs: 5,
    currentIndex: 5,
    content: [
      { type: 'p', text: 'Khi làm việc với AI và công cụ kỹ thuật, bạn sẽ liên tục gặp các từ như API, token, deploy, frontend, repository, environment variable... Nếu không biết những từ này nghĩa là gì, bạn sẽ rơi vào một trong hai trạng thái: hoặc bỏ qua hoàn toàn, để AI tự xử lý, hoặc phải dừng lại tra Google mỗi lần gặp — làm gián đoạn luồng làm việc.' },
      { type: 'p', text: 'Hiểu từ ngữ chuyên ngành không phải để bạn nói chuyện được với dev. Mục đích thực tế hơn: để bạn prompt đúng hơn, đọc hiểu được lỗi khi AI báo lỗi, và đặc biệt bạn cần biết mình cần làm gì.' },
      { type: 'html', html: '<section class="mini-example-flow" aria-label="Ví dụ về spacing"><div class="mini-example-step">Có một chỗ bị lệch</div><div class="mini-example-arrow" aria-hidden="true"></div><div class="mini-example-step">Bạn biết chỗ lệch đó gọi là spacing</div><div class="mini-example-arrow" aria-hidden="true"></div><div class="mini-example-step">Bạn nhờ AI sửa lỗi</div><div class="mini-example-arrow" aria-hidden="true"></div><div class="mini-example-step mini-example-step-accent">AI sẽ hiểu ý bạn và sửa nhanh hơn.</div></section>' },
      { type: 'p', text: 'Vì danh sách từ ngữ khá dài — và mỗi từ đều được giải thích kèm ví dụ thực tế — mình đã tách phần này thành một trang riêng biệt để bạn dễ tra cứu lại bất cứ lúc nào, không cần cuộn qua toàn bộ bài học.' },
      { type: 'html', html: '<div style="border:1px solid var(--border); padding:1.1rem; margin:1.4rem 0; background:var(--bg2)"><p style="margin:0 0 .8rem 0; font-family:var(--sans); font-size:14px; line-height:1.7; color:var(--ink2)">Bấm vào nút bên dưới để xem toàn bộ từ điển thuật ngữ.</p><a class="glossary-cta-link" href="/tu-dien-thuat-ngu" style="display:inline-flex; align-items:center; gap:6px; padding:11px 18px; text-decoration:none; font-family:var(--mono); font-size:12px; letter-spacing:.02em">Xem toàn bộ từ điển thuật ngữ →</a></div>' }
    ]
  },
  {
    id: '3.1',
    slug: 'bai-3-1',
    lessonSlug: 'cai-dat-moi-truong',
    lessonId: 3,
    lessonTitle: 'Cài gì vào máy để bắt đầu vibecode?',
    lessonTitleEm: 'Cài gì vào máy?',
    prevSlug: 'bai-2-5',
    nextSlug: 'bai-3-2',
    prevTitle: 'Từ điển chuyên ngành',
    nextTitle: 'VS Code — editor chính để viết code',
    eyebrow: 'Node.js',
    title: 'Node.js — nền tảng để chạy code',
    titleEm: '',
    desc: 'Node.js là môi trường để máy bạn hiểu và chạy được JavaScript — ngôn ngữ mà hầu hết web app dùng.',
    duration: '~5 phút',
    totalSubs: 8,
    currentIndex: 1,
    content: [
      { type: 'p', text: '<strong>Node.js</strong> là môi trường để máy bạn hiểu và chạy được JavaScript — ngôn ngữ mà hầu hết web app dùng.' },
      { type: 'p', text: 'Bạn không cần biết Node là gì. Chỉ cần cài nó vào là xong.' },
      { type: 'p', text: '<strong>Cài ở đâu:</strong> <a href="https://nodejs.org/" target="_blank" rel="noreferrer">nodejs.org</a>' },
      { type: 'html', html: '<div class="my-4 border border-[var(--border)]"><img src="/node_download.png" alt="Download Node.js" class="w-full" /></div>' },
      { type: 'html', html: '<div class="my-4 border border-[var(--border)]"><img src="/node_install.png" alt="Install Node.js" class="w-full" /></div>' },
      {
        type: 'infographic',
        label: 'Node.js — luồng cài đặt',
        steps: [
          { label: '01', title: 'Tải bản LTS', desc: 'Vào nodejs.org và chọn bản Recommended for most users.' },
          { label: '02', title: 'Cài mặc định', desc: 'Chạy file vừa tải, giữ các lựa chọn mặc định là đủ.' },
          { label: '03', title: 'Kiểm tra version', desc: 'Mở Terminal hoặc Command Prompt và gõ <code>node -v</code>.' }
        ],
        aside: {
          label: 'Học sâu',
          title: 'Không cần hiểu Node.js ngay lúc này',
          desc: 'Mục tiêu chỉ là để máy chạy được các tool web trước khi vibecode.'
        }
      },
      { type: 'p', text: '→ tải bản <strong>LTS</strong> (cái có chữ "Recommended for most users")' },
      { type: 'p', text: '<strong>Kiểm tra sau khi cài:</strong> Mở Terminal (Mac) hoặc Command Prompt (Windows), gõ:' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>node -v</code></pre>' },
      { type: 'p', text: 'Nếu ra số version kiểu <code>v20.x.x</code> là thành công.' },
      { type: 'insight', label: 'Lưu ý', text: 'Chọn bản LTS, không chọn Current. Bản Current hay lỗi hơn với các tool khác.' }
    ]
  },
  {
    id: '3.2',
    slug: 'bai-3-2',
    lessonSlug: 'cai-dat-moi-truong',
    lessonId: 3,
    lessonTitle: 'Cài gì vào máy để bắt đầu vibecode?',
    lessonTitleEm: 'Cài gì vào máy?',
    prevSlug: 'bai-3-1',
    nextSlug: 'bai-3-3',
    prevTitle: 'Node.js — nền tảng để chạy code',
    nextTitle: 'Git — để lưu lịch sử và deploy',
    eyebrow: 'VS Code',
    title: 'VS Code — editor chính để viết code',
    titleEm: '',
    desc: 'VS Code là code editor phổ biến nhất thế giới, miễn phí, của Microsoft. Đây là nơi bạn sẽ mở project, đọc và chỉnh code.',
    duration: '~8 phút',
    totalSubs: 8,
    currentIndex: 2,
    content: [
      { type: 'p', text: '<strong>VS Code</strong> (Visual Studio Code) là code editor phổ biến nhất thế giới, miễn phí, của Microsoft. Đây là nơi bạn sẽ mở project, đọc và chỉnh code trong suốt quá trình vibecode.' },
      { type: 'p', text: '<strong>Cài ở đâu:</strong> <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">code.visualstudio.com</a> → tải về, cài theo mặc định.' },
      {
        type: 'infographic',
        label: 'VS Code — 3 thói quen dùng đúng',
        steps: [
          { label: '01', title: 'Open Folder', desc: 'Mở cả thư mục project, không mở từng file lẻ.' },
          { label: '02', title: 'Terminal trong editor', desc: 'Chạy <code>pnpm install</code>, <code>pnpm run dev</code>, <code>git push</code> ngay trong VS Code.' },
          { label: '03', title: 'Source Control', desc: 'Xem file AI vừa sửa, commit, rồi Sync Changes lên GitHub.' }
        ],
        aside: {
          label: 'Nhớ hết UI',
          title: 'Không cần học toàn bộ VS Code',
          desc: 'Chỉ cần Explorer, Terminal, Extensions và Source Control là đủ để bắt đầu.'
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'Các thanh làm việc khi dùng VS Code' },
      { type: 'h4', text: 'Màn hình Welcome — nhìn thấy gì khi mở VS Code lần đầu' },
      { type: 'p', text: 'Khi mở VS Code lên, bạn sẽ thấy màn hình này. Không cần dùng hết — chỉ cần biết mấy cái thực sự dùng tới.' },
      { type: 'html', html: '<div class="my-4 border border-[var(--border)]"><img src="/vscode_welcome.png" alt="VS Code Welcome Screen" class="w-full" /></div>' },
      { type: 'p', text: '<strong>Phần Start — bên trái:</strong>' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Mục</th>
      <th class="border-r border-[var(--border)] p-2.5 text-left">Dùng không?</th>
      <th class="p-2.5 text-left">Để làm gì</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)] text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">New File...</td>
      <td class="border-r border-[var(--border)] p-2.5">Ít dùng</td>
      <td class="p-2.5">Tạo một file mới lẻ — thường không cần khi vibecode</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Open File...</td>
      <td class="border-r border-[var(--border)] p-2.5">Ít dùng</td>
      <td class="p-2.5">Mở một file đơn lẻ — tránh dùng cách này</td>
    </tr>
    <tr class="border-b border-[var(--border)] bg-[rgba(232,140,46,0.04)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-[var(--accent)]">Open Folder...</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Dùng nhiều nhất</td>
      <td class="p-2.5 font-medium">Mở cả thư mục project — đây là cách đúng</td>
    </tr>
    <tr class="border-b border-[var(--border)] bg-[rgba(232,140,46,0.02)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-[var(--accent)]">Clone Git Repository...</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Dùng khi cần</td>
      <td class="p-2.5">Kéo project từ GitHub về máy để chỉnh sửa — chỉ cần link repo là clone được, không cần tải zip hay bất kỳ file nào thủ công</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5">Connect to...</td>
      <td class="border-r border-[var(--border)] p-2.5">Không cần</td>
      <td class="p-2.5">Kết nối remote server — không liên quan lúc này</td>
    </tr>
    <tr class="text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5">Generate New Workspace...</td>
      <td class="border-r border-[var(--border)] p-2.5">Không cần</td>
      <td class="p-2.5">Tính năng nâng cao — bỏ qua</td>
    </tr>
  </tbody>
</table>` },
      { type: 'insight', label: 'Thói quen đúng', text: 'Mỗi lần mở VS Code → nhấn <strong>Open Folder</strong> → chọn thư mục project. Không mở file lẻ.' },
      { type: 'p', text: '<strong>Phần Recent — bên trái dưới:</strong>' },
      { type: 'p', text: 'Danh sách các project bạn đã mở gần đây. Lần sau muốn mở lại project cũ — nhấn thẳng vào tên ở đây, không cần tìm lại trong máy. Nhấn vào tên là VS Code mở thẳng project đó.' },
      { type: 'divider' },
      { type: 'h4', text: 'Thanh menu trên cùng — cần biết cái nào' },
      { type: 'p', text: 'Khi đã mở project, bạn sẽ thấy thanh menu chạy ngang trên cùng. Nhìn có vẻ nhiều nhưng khi vibecode chỉ dùng vài cái.' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Mục</th>
      <th class="border-r border-[var(--border)] p-2.5 text-left">Dùng không?</th>
      <th class="p-2.5 text-left">Để làm gì</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-[var(--accent)]">File</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Thỉnh thoảng</td>
      <td class="p-2.5">Mở folder, lưu file, đóng project</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5">Edit</td>
      <td class="border-r border-[var(--border)] p-2.5">Ít dùng</td>
      <td class="p-2.5">Copy, paste, undo — dùng phím tắt sẽ nhanh hơn</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5">Selection</td>
      <td class="border-r border-[var(--border)] p-2.5">Không cần</td>
      <td class="p-2.5">Chọn vùng code nâng cao — bỏ qua</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-[var(--accent)]">View</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Thỉnh thoảng</td>
      <td class="p-2.5">Bật/tắt Terminal, Explorer, Extensions</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5">Go</td>
      <td class="border-r border-[var(--border)] p-2.5">Không cần</td>
      <td class="p-2.5">Nhảy đến dòng code — dùng khi đã quen hơn</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5">Run</td>
      <td class="border-r border-[var(--border)] p-2.5">Ít dùng</td>
      <td class="p-2.5">Chạy/debug code — vibecode thường dùng Terminal thay</td>
    </tr>
    <tr class="border-b border-[var(--border)] bg-[rgba(232,140,46,0.04)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-[var(--accent)]">Terminal</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Dùng nhiều</td>
      <td class="p-2.5 font-medium">Mở Terminal tích hợp ngay trong VS Code</td>
    </tr>
    <tr class="text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5">Help</td>
      <td class="border-r border-[var(--border)] p-2.5">Không cần</td>
      <td class="p-2.5">Tài liệu và thông tin VS Code</td>
    </tr>
  </tbody>
</table>` },
      { type: 'p', text: '<strong>Phần giữa thanh — ô tên project:</strong>' },
      { type: 'p', text: 'Ô chữ ở giữa đang hiển thị tên project đang mở. Nhấn vào đây cũng có thể tìm file nhanh trong project bằng cách gõ tên file.' },
      { type: 'insight', label: 'Mẹo', text: 'Phím tắt tìm file nhanh hơn: <code>Ctrl+P</code> (Windows) / <code>Cmd+P</code> (Mac) → gõ tên file cần mở.' },
      { type: 'p', text: '<strong>Các icon bên phải:</strong>' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Icon</th>
      <th class="p-2.5 text-left">Để làm gì</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Icon chat / comment</td>
      <td class="p-2.5">Mở GitHub Copilot hoặc AI chat đang cài</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-[var(--accent)]">Update (nút xanh)</td>
      <td class="p-2.5">VS Code đang có bản cập nhật — nhấn để cập nhật khi rảnh, không ảnh hưởng việc đang làm</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5">Các icon layout góc phải</td>
      <td class="p-2.5">Thay đổi cách chia màn hình — ít dùng</td>
    </tr>
  </tbody>
</table>` },
      { type: 'insight', label: 'Thói quen dùng menu', text: 'Gần như chỉ cần <code>Terminal</code> → <code>New Terminal</code> để mở terminal. Còn lại dùng phím tắt sẽ nhanh hơn nhiều.' },
      { type: 'p', text: '<strong>3 phím tắt đáng nhớ nhất từ menu:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>Ctrl + `        Mở / đóng Terminal\nCtrl + P        Tìm và mở file nhanh\nCtrl + Shift + X    Mở Extensions</code></pre>' },
      { type: 'p', text: 'Mac thay <code>Ctrl</code> bằng <code>Cmd</code>.' },
      { type: 'divider' },
      { type: 'h4', text: 'Thanh icon bên trái — Activity Bar' },
      { type: 'p', text: 'Đây là thanh điều hướng chính của VS Code. Mỗi icon mở ra một panel khác nhau ở cột trái. Khi vibecode chỉ cần biết vài cái.' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Icon</th>
      <th class="border-r border-[var(--border)] p-2.5 text-left">Tên</th>
      <th class="border-r border-[var(--border)] p-2.5 text-left">Dùng không?</th>
      <th class="p-2.5 text-left">Để làm gì</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)] bg-[rgba(232,140,46,0.04)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">📄 Icon file</td>
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Explorer</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Dùng nhiều nhất</td>
      <td class="p-2.5 font-medium">Xem cây thư mục project — mở file từ đây</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5">🔍 Icon kính lúp</td>
      <td class="border-r border-[var(--border)] p-2.5">Search</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Thỉnh thoảng</td>
      <td class="p-2.5">Tìm kiếm chữ trong toàn bộ project</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5">🔀 Icon nhánh</td>
      <td class="border-r border-[var(--border)] p-2.5">Source Control</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Dùng khi cần</td>
      <td class="p-2.5">Quản lý Git — xem file nào đã thay đổi</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5">🐛 Icon chạy/debug</td>
      <td class="border-r border-[var(--border)] p-2.5">Run & Debug</td>
      <td class="border-r border-[var(--border)] p-2.5">Không cần</td>
      <td class="p-2.5">Debug code nâng cao — bỏ qua lúc này</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5">🧩 Icon 4 ô vuông</td>
      <td class="border-r border-[var(--border)] p-2.5">Extensions</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Dùng khi cài tool</td>
      <td class="p-2.5">Tìm và cài extension AI — có badge số 1 nghĩa là đang có extension cần cập nhật</td>
    </tr>
  </tbody>
</table>` },
      { type: 'p', text: '<strong>Phần dưới cùng:</strong>' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Icon</th>
      <th class="p-2.5 text-left">Để làm gì</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">👤 Icon người</td>
      <td class="p-2.5">Tài khoản đang đăng nhập VS Code — đồng bộ settings</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5 font-bold">⚙️ Icon bánh răng</td>
      <td class="p-2.5">Settings và cấu hình VS Code — ít khi cần đụng</td>
    </tr>
  </tbody>
</table>` },
      { type: 'insight', label: 'Extensions', text: 'Badge số 1 trên icon Extensions nghĩa là có extension đang chờ cập nhật. Nhấn vào → tìm extension đó → nhấn Update. Không ảnh hưởng việc đang làm nếu bỏ qua.' },
      { type: 'p', text: '<strong>Thói quen khi vibecode — chỉ cần nhớ 3 icon:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>📄 Explorer        → mở file, xem cấu trúc project\n🧩 Extensions      → cài thêm tool AI\n✳️ AI Extension    → chat với AI để viết / sửa code</code></pre>' },
      { type: 'p', text: 'Còn lại nhấn vào khi nào cần thì biết — không cần nhớ hết ngay.' },
      { type: 'divider' },
      { type: 'h4', text: 'Thanh dưới cùng — Status Bar' },
      { type: 'p', text: 'Thanh chạy ngang dưới đáy VS Code. Hiển thị toàn bộ trạng thái hiện tại của project và file đang mở — nhìn vào đây biết ngay mọi thứ đang ổn hay không.' },
      { type: 'p', text: '<strong>Phần bên trái:</strong>' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Thành phần</th>
      <th class="p-2.5 text-left">Ý nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">&gt;&lt; Icon</td>
      <td class="p-2.5">Trạng thái kết nối — local hay remote</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">🔀 Tên nhánh Git</td>
      <td class="p-2.5">Branch Git đang làm việc — khi vibecode thường là main</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">🔄 Icon sync</td>
      <td class="p-2.5">Đồng bộ Git — nhấn để pull/push nhanh</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-red-600">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">⊗ Số lỗi</td>
      <td class="p-2.5">Số lỗi trong code — <strong>phải giữ ở 0</strong></td>
    </tr>
    <tr class="border-b border-[var(--border)] text-amber-500">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">⚠️ Số cảnh báo</td>
      <td class="p-2.5">Số warning trong code — cố giữ thấp nhất có thể</td>
    </tr>
  </tbody>
</table>` },
      { type: 'p', text: '<strong>Phần bên phải — thông tin file đang mở:</strong>' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Thành phần</th>
      <th class="p-2.5 text-left">Ý nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">👤 Git blame</td>
      <td class="p-2.5">Người cuối cùng sửa dòng code đang đứng — và sửa khi nào. Khi vibecode một mình thì thường là tên bạn</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Ln, Col</td>
      <td class="p-2.5">Con trỏ đang đứng ở dòng, cột — hữu ích khi AI báo lỗi ở dòng cụ thể</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Spaces</td>
      <td class="p-2.5">Kiểu indent đang dùng — 2 spaces là chuẩn cho hầu hết web project</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Encoding</td>
      <td class="p-2.5">Bảng mã ký tự — giữ nguyên UTF-8, không cần đổi</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Line ending</td>
      <td class="p-2.5">Kiểu xuống dòng — CRLF là Windows, LF là Mac/Linux</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Ngôn ngữ file</td>
      <td class="p-2.5">Loại file đang mở — VS Code tự nhận diện. Ảnh hưởng đến syntax highlight và gợi ý code</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Icon người + màn hình</td>
      <td class="p-2.5">Tài khoản đang kết nối</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Go Live</td>
      <td class="p-2.5">Bật Live Server — xem web tĩnh trực tiếp trên trình duyệt</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5 font-bold">🔔 Icon chuông</td>
      <td class="p-2.5">Thông báo từ VS Code</td>
    </tr>
  </tbody>
</table>` },
      { type: 'insight', label: 'Git Blame', text: 'Git blame — ABC (5 months ago) nghĩa là dòng code con trỏ đang đứng được người dùng “ABC” sửa lần cuối cách đây 5 tháng. Khi AI sửa code và push lên, chỗ này sẽ hiện tên GitHub của bạn và thời gian vừa commit.' },
      { type: 'p', text: '<strong>Quan trọng nhất cần nhìn khi vibecode:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>⊗ 0  ⚠ 0           → code không có lỗi\nLn XX, Col XX        → biết con trỏ đang ở đâu khi AI báo lỗi dòng cụ thể\n{ } Tên ngôn ngữ     → biết file đang mở là loại gì</code></pre>' },
      { type: 'insight', label: 'Lỗi code', text: 'Khi số lỗi tăng lên khác 0: Nhấn thẳng vào ⊗ số → VS Code mở panel Problems liệt kê toàn bộ lỗi đang có. Copy nội dung lỗi đó → paste vào chat AI → nhờ sửa. Không cần tự đọc hiểu lỗi.' },
      { type: 'divider' },
      { type: 'h3', text: 'Làm việc thực tế trong VS Code' },
      { type: 'h4', text: 'Làm việc với Terminal trong VS Code' },
      { type: 'p', text: 'Không cần mở Terminal riêng bên ngoài. VS Code có Terminal tích hợp sẵn — mở ra là đang đứng đúng thư mục project, không cần <code>cd</code> thêm gì.' },
      { type: 'p', text: '<strong>Mở Terminal:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>Ctrl + `        (Windows)\nCmd + `         (Mac)</code></pre>' },
      { type: 'p', text: 'Hoặc vào menu <code>Terminal</code> → <code>New Terminal</code>.' },
      { type: 'p', text: '<strong>Dùng pnpm thay cho npm — tại sao?</strong>' },
      { type: 'p', text: 'Khi vibecode với AI, bạn sẽ thấy AI hay gõ lệnh bắt đầu bằng <code>npm</code>. Dùng được — nhưng nên đổi sang <strong>pnpm</strong> từ đầu.' },
      {
        type: 'compare',
        headers: ['npm', 'pnpm'],
        rows: [
          { left: 'Chậm hơn', leftStyle: 'cross', right: 'Nhanh hơn đáng kể', rightStyle: 'check' },
          { left: 'Tốn dung lượng — mỗi project copy riêng', leftStyle: 'cross', right: 'Tiết kiệm — dùng chung một chỗ lưu', rightStyle: 'check' },
          { left: 'Số project nhiều lên -> ổ cứng đầy nhanh', leftStyle: 'cross', right: 'Không bị vấn đề này', rightStyle: 'check' },
          { left: 'Dùng ổn với Next.js, Vercel', leftStyle: 'normal', right: 'Ổn, Vercel hỗ trợ tốt', rightStyle: 'accent' }
        ]
      },
      { type: 'p', text: 'Nói đơn giản: <code>npm</code> giống như mỗi lần mua đồ là mua cả bộ mới. <code>pnpm</code> giống như mua một lần, dùng chung cho nhiều chỗ — nhanh hơn, đỡ tốn hơn.' },
      { type: 'p', text: '<strong>Cài pnpm một lần duy nhất trong terminal:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>npm install -g pnpm</code></pre>' },
      { type: 'p', text: 'Sau đó mọi lệnh <code>npm</code> đều thay bằng <code>pnpm</code> là xong.' },
      { type: 'p', text: '<strong>Các lệnh Terminal dùng nhiều nhất</strong>' },
      { type: 'p', text: '• <strong>Cài dependencies — chạy khi mở project mới về lần đầu:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>pnpm install</code></pre>' },
      { type: 'p', text: 'Lệnh này đọc file <code>package.json</code> và tự tải về tất cả thư viện cần thiết.' },
      { type: 'p', text: '• <strong>Chạy web trên máy để xem thử:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>pnpm run dev</code></pre>' },
      { type: 'p', text: 'Sau lệnh này, mở trình duyệt vào <code>http://localhost:3000</code> để xem web đang chạy.' },
      { type: 'p', text: '• <strong>Build project để kiểm tra trước khi deploy:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>pnpm run build</code></pre>' },
      { type: 'p', text: 'Dùng khi: Trước khi <code>git push</code> lên Vercel để chắc chắn code không bị lỗi khi build, hoặc khi Vercel báo lỗi deploy.' },
      { type: 'insight', label: 'Khác biệt', text: '<code>dev</code> chạy để xem thử trên máy, chấp nhận một số lỗi nhỏ vẫn chạy được. <code>build</code> thì nghiêm hơn — lỗi nhỏ nào cũng báo và dừng lại. Nếu build pass thì deploy lên Vercel gần như chắc chắn không lỗi.' },
      { type: 'p', text: '• <strong>Dừng server:</strong> <code>Ctrl + C</code>' },
      { type: 'p', text: '• <strong>Thêm một package mới vào project:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>pnpm add tên-package</code></pre>' },
      { type: 'p', text: '• <strong>Xoá thư mục node_modules và cài lại từ đầu:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>rm -rf node_modules\npnpm install</code></pre>' },
      { type: 'p', text: '• <strong>Xem các script có thể chạy trong project:</strong> <code>pnpm run</code>' },
      { type: 'p', text: '• <strong>Các lệnh Git dùng khi vibecode:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>git add .\ngit commit -m "mô tả ngắn vừa làm gì"\ngit push</code></pre>' },
      { type: 'p', text: '• <strong>Kéo code mới nhất từ GitHub về máy:</strong> <code>git pull</code>' },
      { type: 'p', text: '• <strong>Mở nhiều Terminal cùng lúc:</strong> Nhấn icon <code>+</code> trong góc phải của panel Terminal để mở thêm tab mới.' },
      { type: 'insight', label: 'Tóm tắt phím tắt', text: 'Thật ra, khi mình làm việc mình không cần nhớ tất cả, mình chỉ nhớ 3 lệnh đầu thôi, còn những lệnh khác nếu bạn ko dám chắc bạn cứ hỏi AI vì AI hiểu codebase hơn bạn.' },
      { type: 'divider' },
      { type: 'h4', text: 'Panel Source Control — commit không cần gõ lệnh Git' },
      { type: 'p', text: 'Ngoài cách dùng lệnh Git trong Terminal, VS Code có sẵn <strong>Source Control</strong> — giao diện trực quan để làm việc với Git, không cần nhớ lệnh.' },
      { type: 'p', text: 'Mở bằng cách nhấn icon nhánh cây ở Activity Bar, hoặc <code>Ctrl+Shift+G</code> (Windows) / <code>Cmd+Shift+G</code> (Mac).' },
      { type: 'p', text: '<strong>Giao diện Source Control:</strong>' },
      { type: 'p', text: '• <strong>Phần CHANGES:</strong> Khi AI sửa code, tất cả file bị thay đổi sẽ hiện ra ở đây. Nhấn vào từng file để xem cụ thể dòng nào bị sửa.' },
      { type: 'p', text: '• <strong>Ô Message:</strong> Gõ mô tả ngắn hoặc nhấn icon ✨ để AI tự động sinh commit message.' },
      { type: 'p', text: '• <strong>Nút Commit & Sync Changes:</strong> Nhấn Commit để lưu thay đổi. Nút Commit sẽ đổi thành <code>↑↓ Sync Changes</code> — nhấn vào để đẩy code lên GitHub và kéo code mới về cùng một lúc.' },
      { type: 'insight', label: 'Sync Changes', text: 'Khi vibecode một mình: Nhấn Sync Changes ngay sau Commit là đủ — không cần làm thêm gì. Vercel sẽ tự nhận và deploy.' },
      { type: 'p', text: '<strong>Khi không muốn giữ thay đổi của một file:</strong> Chuột phải vào file trong danh sách CHANGES:' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Lựa chọn</th>
      <th class="p-2.5 text-left">Dùng để làm gì</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Open Changes</td>
      <td class="p-2.5">Xem chi tiết dòng nào bị sửa so với bản cũ</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Open File / Open File (HEAD)</td>
      <td class="p-2.5">Mở file đang thay đổi hoặc mở bản gốc để so sánh</td>
    </tr>
    <tr class="border-b border-[var(--border)] bg-[rgba(232,140,46,0.04)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-red-600">Discard Changes</td>
      <td class="p-2.5">⚠️ Huỷ toàn bộ thay đổi của file này, khôi phục về bản cũ</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Stage Changes</td>
      <td class="p-2.5">Đánh dấu file này sẽ được commit</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Add to .gitignore</td>
      <td class="p-2.5">Bảo Git bỏ qua file này mãi mãi</td>
    </tr>
  </tbody>
</table>` },
      { type: 'insight', label: 'Cảnh báo', text: '⚠️ <strong>Discard Changes không thể hoàn tác</strong> — một khi đã discard là mất thay đổi đó vĩnh viễn.' },
      { type: 'p', text: '• <strong>Phần GRAPH — dưới cùng:</strong> Hiển thị lịch sử commit dạng đồ thị. Chuột phải vào commit trong GRAPH sẽ hiện menu:' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Lựa chọn</th>
      <th class="p-2.5 text-left">Để làm gì</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Open Changes / Open on GitHub</td>
      <td class="p-2.5">Xem thay đổi hoặc mở commit này trên GitHub</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Checkout</td>
      <td class="p-2.5">Quay về đúng trạng thái code tại commit đó</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Compare with Remote / Compare with...</td>
      <td class="p-2.5">So sánh code trên máy với code trên GitHub hoặc commit khác</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-[var(--accent)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Add to Chat</td>
      <td class="p-2.5">Đưa commit này vào chat AI trong VS Code để hỏi về thay đổi</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-[var(--accent)]">Explain Changes</td>
      <td class="p-2.5">Nhờ AI giải thích commit này thay đổi gì</td>
    </tr>
  </tbody>
</table>` },
      { type: 'p', text: '<strong>Hai cách làm việc với Git — chọn cái nào?</strong>' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Tính năng</th>
      <th class="border-r border-[var(--border)] p-2.5 text-left">Terminal</th>
      <th class="p-2.5 text-left">Source Control</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Cách dùng</td>
      <td class="border-r border-[var(--border)] p-2.5">Gõ lệnh</td>
      <td class="p-2.5">Nhấn nút, gõ message</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Tốc độ</td>
      <td class="border-r border-[var(--border)] p-2.5">Nhanh khi quen</td>
      <td class="p-2.5">Trực quan hơn khi mới</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Xem thay đổi</td>
      <td class="border-r border-[var(--border)] p-2.5">Không thấy ngay</td>
      <td class="p-2.5 text-[#16a34a] font-medium">Thấy rõ từng dòng bị sửa</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Commit message</td>
      <td class="border-r border-[var(--border)] p-2.5">Tự gõ</td>
      <td class="p-2.5 text-[#16a34a]">Có thể để AI tự sinh</td>
    </tr>
  </tbody>
</table>` },
      { type: 'divider' },
      { type: 'h3', text: 'Biết thêm để vibecode trơn tru hơn' },
      { type: 'h4', text: 'Explorer panel — cấu trúc thư mục project' },
      { type: 'p', text: 'Khi mở project lên, cột Explorer bên trái sẽ hiện cây thư mục. Nhìn lần đầu có vẻ nhiều — nhưng khi vibecode chỉ cần biết vài folder và file thực sự hay đụng vào.' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Tên folder/file</th>
      <th class="border-r border-[var(--border)] p-2.5 text-left">Đụng vào không?</th>
      <th class="p-2.5 text-left">Là gì</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">app/</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Thường xuyên</td>
      <td class="p-2.5">Chứa toàn bộ trang web — mỗi folder con là một route/URL</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">components/</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Thường xuyên</td>
      <td class="p-2.5">Chứa các component dùng đi dùng lại — button, header, card...</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">public/</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Thỉnh thoảng</td>
      <td class="p-2.5">Chứa ảnh, font, file tĩnh — đặt ảnh vào đây để dùng trong web</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5">node_modules/</td>
      <td class="border-r border-[var(--border)] p-2.5 text-red-600">❌ Không bao giờ</td>
      <td class="p-2.5">Thư viện đã cài — không đụng, không xoá thủ công</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">.env.local</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">✅ Khi cần</td>
      <td class="p-2.5">Chứa API key, database URL</td>
    </tr>
    <tr class="border-b border-[var(--border)] text-[var(--muted)]">
      <td class="border-r border-[var(--border)] p-2.5">package.json / next.config.js</td>
      <td class="border-r border-[var(--border)] p-2.5">Hiếm khi</td>
      <td class="p-2.5">Cấu hình Next.js và danh sách thư viện — AI tự cập nhật khi cần</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5 text-[var(--muted)]">.gitignore</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[var(--muted)]">Hiếm khi</td>
      <td class="p-2.5 text-[var(--muted)]">Danh sách file không đẩy lên GitHub</td>
    </tr>
  </tbody>
</table>` },
      { type: 'p', text: '<strong>Bên trong app/ trông như thế nào:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>app/\n├── page.tsx          ← Trang chủ — URL: /\n├── layout.tsx        ← Layout bọc ngoài toàn bộ trang\n├── globals.css       ← CSS toàn cục\n├── about/\n│   └── page.tsx      ← Trang About — URL: /about\n└── blog/\n    └── page.tsx      ← Trang Blog — URL: /blog</code></pre>' },
      { type: 'insight', label: 'Quy tắc', text: 'Thấy file trong app/ hoặc components/ → có thể nhờ AI sửa. Thấy node_modules/ → không đụng vào bằng bất kỳ cách nào.' },
      { type: 'p', text: '• <strong>Xử lý khi AI bị kẹt hoặc code lỗi liên tục:</strong>' },
      { type: 'p', text: '<strong>Bước 1 — Đọc lỗi đúng chỗ:</strong> Mở panel Problems. Copy: <code>Tên file + số dòng + nội dung lỗi</code>.' },
      { type: 'p', text: '<strong>Bước 2 — Copy lỗi đúng cách:</strong> Trong Terminal, copy toàn bộ đoạn đỏ paste thẳng vào chat AI.' },
      { type: 'p', text: '<strong>Bước 3 — Nếu AI vẫn không fix được sau 3 lần:</strong> Thử các cách sau: Chạy <code>rm -rf node_modules</code> rồi <code>pnpm install</code>; Restart dev server; Hỏi lại từ đầu; Discard Changes.' },
      { type: 'insight', label: 'Dừng lại', text: 'AI đã sửa hơn 5 lần mà lỗi vẫn không hết, hoặc số lỗi trong Problems tăng lên thay vì giảm → mở chat AI mới.' },
      { type: 'p', text: '• <strong>File .env (hoặc .env.local) — biến môi trường:</strong>' },
      { type: 'p', text: 'Chứa các thông tin nhạy cảm mà code cần để chạy — API key, database URL, secret key...' },
      { type: 'p', text: '<strong>3 quy tắc bắt buộc phải nhớ:</strong>' },
      { type: 'p', text: '1. Không bao giờ commit file này lên GitHub.' },
      { type: 'p', text: '2. Vercel cần config riêng trong Settings → Environment Variables.' },
      { type: 'p', text: '3. Biến bắt đầu bằng <code>NEXT_PUBLIC_</code> mới dùng được ở frontend.' },
      { type: 'p', text: '• <strong>Phím tắt hay dùng nhất khi vibecode:</strong>' },
      { type: 'p', text: '<code>Ctrl/Cmd + P</code> (Tìm file nhanh), <code>Ctrl/Cmd + `</code> (Terminal), <code>Ctrl/Cmd + Z</code> (Undo), <code>Ctrl/Cmd + Shift + G</code> (Source Control).' }
    ]
  },
  {
    id: '3.3',
    slug: 'bai-3-3',
    lessonSlug: 'cai-dat-moi-truong',
    lessonId: 3,
    lessonTitle: 'Cài gì vào máy để bắt đầu vibecode?',
    lessonTitleEm: 'Cài gì vào máy?',
    prevSlug: 'bai-3-2',
    nextSlug: 'bai-3-4',
    prevTitle: 'VS Code — editor chính để viết code',
    nextTitle: 'GitHub — nơi lưu code trên cloud',
    eyebrow: 'Git',
    title: 'Git — để lưu lịch sử và deploy',
    titleEm: '',
    desc: 'Hình dung Git như một cỗ máy thời gian cho code.',
    duration: '~5 phút',
    totalSubs: 8,
    currentIndex: 3,
    content: [
      { type: 'p', text: 'Hình dung <strong>Git</strong> như một cỗ máy thời gian cho code.' },
      { type: 'p', text: 'Mỗi lần bạn nhấn commit, Git chụp lại toàn bộ trạng thái project tại thời điểm đó. Nếu AI làm hỏng mọi thứ sau đó — bạn có thể quay về đúng cái snapshot đó, không mất gì.' },
      { type: 'p', text: 'Không có Git, mỗi lần AI sửa code mà hỏng là không có cách nào lấy lại bản cũ.' },
      { type: 'p', text: '<strong>3 khái niệm cần biết — không cần hiểu sâu hơn:</strong>' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Khái niệm</th>
      <th class="p-2.5 text-left">Hiểu đơn giản là</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Repository (repo)</td>
      <td class="p-2.5">Một project được Git theo dõi — như một thư mục có cỗ máy thời gian</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Commit</td>
      <td class="p-2.5">Một checkpoint — "lưu game" tại thời điểm này</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Branch</td>
      <td class="p-2.5">Một phiên bản song song của project — khi mới bắt đầu cứ dùng <code>main</code>, chưa cần quan tâm</td>
    </tr>
  </tbody>
</table>` },
      { type: 'divider' },
      { type: 'h3', text: 'Tạo repo GitHub mới từ đầu' },
      { type: 'p', text: 'Khi bắt đầu project mới hoàn toàn — chưa có gì trên GitHub.' },
      { type: 'p', text: '<strong>Bước 1 — Tạo repo trên GitHub:</strong>' },
      { type: 'p', text: 'Vào <a href="https://github.com" target="_blank" rel="noreferrer">github.com</a> → nhấn nút <code>+</code> góc trên phải → <code>New repository</code>' },
      { type: 'p', text: 'Điền thông tin: Repository name (Ví dụ: <code>landing-page-summer</code>), Public / Private (chọn Private), KHÔNG tick vào <code>Add a README file</code>.' },
      { type: 'p', text: 'Nhấn <strong>Create repository</strong>' },
      { type: 'p', text: '<strong>Bước 2 — Kết nối project trên máy với GitHub:</strong>' },
      { type: 'p', text: 'GitHub sẽ hiện sẵn các lệnh — copy và chạy lần lượt trong Terminal VS Code:' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>git init\ngit add .\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin https://github.com/tênuser/tên-repo.git\ngit push -u origin main</code></pre>' },
      { type: 'p', text: 'Chạy xong → refresh GitHub → code đã lên.' },
      { type: 'insight', label: 'Lưu ý', text: 'Chỉ cần làm bước này một lần duy nhất cho mỗi project. Từ đó về sau chỉ cần <code>git push</code> là đủ.' },
      { type: 'divider' },
      { type: 'h3', text: 'Clone project từ GitHub về máy' },
      { type: 'p', text: 'Dùng khi: muốn dùng template có sẵn, bắt đầu từ repo của người khác, hoặc kéo project của mình về máy mới.' },
      { type: 'p', text: '• <strong>Cách 1 — Dùng VS Code (dễ hơn):</strong> Mở VS Code → Welcome screen → nhấn <strong>Clone Git Repository</strong> → paste link repo → nhấn <strong>Clone</strong>.' },
      { type: 'p', text: '• <strong>Cách 2 — Dùng Terminal:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>git clone https://github.com/tênuser/tên-repo.git</code></pre>' },
      { type: 'p', text: 'Sau khi clone về, nhớ chạy ngay:' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>cd tên-repo\npnpm install</code></pre>' },
      { type: 'insight', label: 'Phân biệt', text: 'Clone khác Download ZIP ở chỗ nào? — Clone giữ nguyên toàn bộ lịch sử Git, kết nối sẵn với GitHub để push/pull về sau. Download ZIP chỉ lấy code tại thời điểm đó, không có lịch sử, không push được.' },
      { type: 'divider' },
      { type: 'h3', text: 'Workflow hàng ngày — commit và push' },
      { type: 'p', text: 'Sau khi project đã kết nối GitHub, workflow lặp đi lặp lại mỗi ngày chỉ gồm:' },
      {
        type: 'infographic',
        label: 'Git — vòng lặp an toàn khi vibecode',
        steps: [
          { label: '01', title: 'AI sửa code', desc: 'Bạn yêu cầu AI làm một phần nhỏ, rồi xem lại thay đổi.' },
          { label: '02', title: 'Commit checkpoint', desc: 'Khi chạy ổn, lưu lại bằng commit để có điểm quay về.' },
          { label: '03', title: 'Push lên GitHub', desc: 'Đẩy code lên cloud để Vercel deploy và tránh mất code local.' }
        ],
        aside: {
          label: 'Gom nhiều',
          title: 'Đừng đợi làm xong cả bài mới commit',
          desc: 'Commit nhỏ giúp rollback dễ hơn khi AI làm hỏng ở bước sau.'
        }
      },
      { type: 'p', text: '• <strong>Dùng Terminal:</strong> <code>git add .</code> → <code>git commit -m "mô tả ngắn"</code> → <code>git push</code>' },
      { type: 'p', text: '• <strong>Dùng Source Control:</strong> Gõ message → nhấn Commit → nhấn Sync Changes' },
      { type: 'insight', label: 'Commit thường xuyên', text: 'Mỗi lần AI hoàn thành một tính năng nhỏ mà chạy ổn → commit ngay. Đừng gom nhiều thay đổi vào một commit — khó rollback hơn sau này.' },
      { type: 'divider' },
      { type: 'h3', text: 'Rollback — quay về commit cũ khi AI làm hỏng project' },
      { type: 'p', text: 'Tình huống: AI sửa xong, mọi thứ vỡ hết. Cách nhanh nhất là quay về commit trước đó còn chạy tốt.' },
      { type: 'p', text: '<strong>Bước 1 — Tìm commit muốn quay về:</strong> Mở Source Control → GRAPH → tìm commit còn chạy tốt → chuột phải → Open Changes. Hoặc dùng Terminal: <code>git log --oneline</code>.' },
      { type: 'p', text: '<strong>Bước 2 — Quay về commit đó:</strong> Copy mã commit (7 ký tự đầu) → chạy lệnh:' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>git revert a1b2c3d</code></pre>' },
      { type: 'p', text: 'Lệnh này tạo một commit mới để hoàn tác commit đó — an toàn hơn, không mất lịch sử.' },
      { type: 'p', text: 'Hoặc nếu muốn xoá hẳn commit gần nhất và về trước đó:' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>git reset --hard HEAD~1</code></pre>' },
      { type: 'insight', label: 'Cảnh báo', text: '⚠️ <code>git reset --hard</code> không thể hoàn tác — code sau commit đó sẽ mất hoàn toàn. Chỉ dùng khi chắc chắn muốn bỏ hẳn thay đổi vừa làm.' },
      { type: 'divider' },
      { type: 'h3', text: 'Xử lý conflict — khi code bị xung đột' },
      { type: 'p', text: 'Conflict xảy ra khi cùng một file bị sửa ở hai nơi khác nhau — ví dụ bạn sửa trên máy trong khi GitHub có bản mới hơn chưa pull về.' },
      { type: 'p', text: '<strong>Dấu hiệu bị conflict:</strong> Terminal báo lỗi khi push: <code>! [rejected] main -> main (fetch first)</code>.' },
      { type: 'p', text: '<strong>Cách xử lý:</strong>' },
      { type: 'p', text: '1. Pull về trước: <code>git pull</code>' },
      { type: 'p', text: '2. VS Code tự phát hiện conflict và highlight: Mở file bị conflict → chọn Accept Current Change, Accept Incoming Change, hoặc Accept Both Changes.' },
      { type: 'p', text: '3. Nhờ AI giải quyết: copy toàn bộ đoạn conflict paste vào chat AI, mô tả bạn đang muốn giữ tính năng nào.' },
      { type: 'p', text: '4. Commit lại sau khi resolve: <code>git add .</code> → <code>git commit -m "resolve conflict"</code> → <code>git push</code>.' },
      { type: 'insight', label: 'Mẹo tránh conflict', text: 'Luôn <code>git pull</code> trước khi bắt đầu làm việc mỗi ngày — dù ít khi xảy ra conflict khi chỉ có một mình.' }
    ]
  },
  {
    id: '3.4',
    slug: 'bai-3-4',
    lessonSlug: 'cai-dat-moi-truong',
    lessonId: 3,
    lessonTitle: 'Cài gì vào máy để bắt đầu vibecode?',
    lessonTitleEm: 'Cài gì vào máy?',
    prevSlug: 'bai-3-3',
    nextSlug: 'bai-3-5',
    prevTitle: 'Git — để lưu lịch sử và deploy',
    nextTitle: 'Vercel — nơi deploy web lên internet',
    eyebrow: 'GitHub',
    title: 'GitHub — nơi lưu code trên cloud',
    titleEm: '',
    desc: 'GitHub là nơi bạn lưu bản sao code lên internet — để Vercel lấy về deploy, để không mất code khi máy hỏng.',
    duration: '~5 phút',
    totalSubs: 8,
    currentIndex: 4,
    content: [
      { type: 'p', text: 'Hay bị nhầm: <strong>Git</strong> và <strong>GitHub</strong> là hai thứ khác nhau.' },
      {
        type: 'compare',
        headers: ['Git', 'GitHub'],
        rows: [
          { left: 'Công cụ cài trên máy', leftStyle: 'normal', right: 'Website lưu code trên cloud', rightStyle: 'check' },
          { left: 'Tạo checkpoint, lưu lịch sử', leftStyle: 'normal', right: 'Lưu trữ, chia sẻ, deploy', rightStyle: 'check' },
          { left: 'Dùng Git không cần GitHub', leftStyle: 'normal', right: 'Cần Git để đẩy code lên GitHub', rightStyle: 'accent' }
        ]
      },
      { type: 'p', text: 'Hiểu đơn giản: Git là cỗ máy thời gian chạy trên máy bạn. GitHub là nơi bạn lưu bản sao của cỗ máy đó lên internet — để Vercel lấy về deploy, để không mất code khi máy hỏng, để làm việc được trên nhiều máy.' },
      { type: 'divider' },
      { type: 'h3', text: 'Giao diện GitHub — tab nào cần quan tâm' },
      { type: 'p', text: 'Khi mở một repo trên GitHub, sẽ thấy hàng tab chạy ngang. Không cần dùng hết.' },
      { type: 'p', text: '• <strong>Tab Code — dùng nhiều nhất:</strong> Đây là màn hình chính khi vào repo. Hiển thị toàn bộ file và folder của project — giống Explorer trong VS Code nhưng trên web.' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Phần</th>
      <th class="p-2.5 text-left">Để làm gì</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Danh sách file/folder</td>
      <td class="p-2.5">Nhấn vào để xem nội dung file trực tiếp trên web</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Commit history</td>
      <td class="p-2.5">Xem toàn bộ lịch sử thay đổi của project (góc phải, hiện số commit)</td>
    </tr>
    <tr class="border-b border-[var(--border)] bg-[rgba(232,140,46,0.04)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-[var(--accent)]">Nút Code màu xanh</td>
      <td class="p-2.5">Copy link clone hoặc download ZIP</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5">Branch selector</td>
      <td class="p-2.5">Chuyển giữa các branch (góc trái trên)</td>
    </tr>
  </tbody>
</table>` },
      { type: 'p', text: '• <strong>Tab Issues:</strong> Nơi ghi todo, track bug, đặt câu hỏi về project. Dùng như một danh sách việc cần làm — kể cả khi làm một mình.' },
      { type: 'p', text: '• <strong>Tab Actions:</strong> Hiển thị lịch sử deploy — mỗi lần push code, GitHub Actions chạy các bước tự động. Khi Vercel báo lỗi deploy, vào đây xem log.' },
      { type: 'p', text: '• <strong>Tab Settings:</strong> Cài đặt repo — đổi tên, chuyển public/private, xoá repo, quản lý quyền truy cập.' },
      { type: 'insight', label: 'Lưu ý', text: 'Các tab còn lại — Pull requests, Security, Insights — chưa cần quan tâm khi vibecode một mình. Dùng khi làm việc nhóm hoặc khi project lớn hơn.' },
      { type: 'divider' },
      { type: 'h3', text: 'Làm việc với GitHub trực tiếp trên web' },
      { type: 'p', text: 'Không phải lúc nào cũng cần mở VS Code. Một số việc làm thẳng trên GitHub nhanh hơn.' },
      { type: 'p', text: '• <strong>Sửa file nhỏ trực tiếp:</strong> Mở file bất kỳ → nhấn icon bút chì góc ý nghĩa → sửa thẳng trên web → nhấn Commit changes → gõ message → xong.' },
      { type: 'p', text: '• <strong>Upload ảnh vào public/:</strong> Vào folder <code>public/</code> trong repo → nhấn Add file → Upload files → kéo thả ảnh vào → Commit changes.' },
      { type: 'p', text: '• <strong>Xem lịch sử thay đổi của một file cụ thể:</strong> Mở file bất kỳ → nhấn History góc phải trên → xem từng commit đã đụng vào file đó, ai sửa, sửa gì, khi nào.' },
      { type: 'p', text: '• <strong>Xem nội dung một commit cụ thể:</strong> Vào tab Code → nhấn số commit góc phải → chọn commit bất kỳ → xem toàn bộ thay đổi.' },
      { type: 'divider' },
      { type: 'h3', text: 'Kết nối GitHub với Vercel' },
      { type: 'p', text: 'Đây là bước làm một lần duy nhất — sau đó mỗi lần push code là Vercel tự deploy, không cần làm thêm gì.' },
      {
        type: 'infographic',
        label: 'GitHub → Vercel — kết nối một lần',
        steps: [
          { label: '01', title: 'GitHub giữ code', desc: 'Repo là bản code cloud mà Vercel có thể đọc được.' },
          { label: '02', title: 'Vercel import repo', desc: 'Bạn chọn repo, thêm biến môi trường nếu cần, rồi deploy.' },
          { label: '03', title: 'Push là tự deploy', desc: 'Mỗi commit mới lên GitHub sẽ kích hoạt Vercel build lại web.' }
        ],
        aside: {
          label: 'Deploy tay',
          title: 'Không cần upload file thủ công',
          desc: 'Sau khi nối xong, GitHub là nguồn dữ liệu và Vercel tự lấy code mới.'
        }
      },
      { type: 'p', text: '• <strong>Bước 1 — Đăng nhập Vercel bằng GitHub:</strong> Vào vercel.com → Sign up → chọn Continue with GitHub.' },
      { type: 'p', text: '• <strong>Bước 2 — Import repo:</strong> Trong Vercel dashboard → nhấn Add New Project → chọn repo muốn deploy từ danh sách → nhấn Import.' },
      { type: 'p', text: '• <strong>Bước 3 — Cấu hình trước khi deploy:</strong> Vercel tự nhận Next.js. Thêm Environment Variables nếu project có file <code>.env.local</code>.' },
      { type: 'p', text: '• <strong>Bước 4 — Deploy:</strong> Nhấn Deploy → Vercel build và đưa web lên internet trong 1-2 phút → nhận URL dạng <code>tên-project.vercel.app</code>.' },
      { type: 'insight', label: 'Webhook', text: 'Khi kết nối, Vercel cài một webhook vào repo GitHub. Mỗi lần có commit mới được push lên → GitHub gửi tín hiệu cho Vercel → Vercel tự kéo code về và build lại.' },
      { type: 'divider' },
      { type: 'h3', text: 'GitHub template và fork' },
      { type: 'p', text: 'Không phải project nào cũng bắt đầu từ trang trắng. Dùng template hoặc fork repo có sẵn để tiết kiệm thời gian setup.' },
      { type: 'p', text: '• <strong>Template — dùng khi repo cho phép:</strong> Nhấn Use this template → Create a new repository → đặt tên → Create repository. Kết quả: bạn có một repo mới hoàn toàn của mình, code giống hệt template, lịch sử Git bắt đầu lại từ đầu.' },
      { type: 'p', text: '• <strong>Fork — dùng khi muốn giữ kết nối với repo gốc:</strong> Nhấn Fork góc trên phải → GitHub tạo bản copy vào tài khoản của bạn.' },
      { type: 'p', text: 'Sau khi có repo từ template, chạy các lệnh sau để bắt đầu:' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>git clone https://github.com/bạn/tên-repo.git\ncd tên-repo\npnpm install\npnpm run dev</code></pre>' }
    ]
  },
  {
    id: '3.5',
    slug: 'bai-3-5',
    lessonSlug: 'cai-dat-moi-truong',
    lessonId: 3,
    lessonTitle: 'Cài gì vào máy để bắt đầu vibecode?',
    lessonTitleEm: 'Cài gì vào máy?',
    prevSlug: 'bai-3-4',
    nextSlug: 'bai-3-6',
    prevTitle: 'GitHub — nơi lưu code trên cloud',
    nextTitle: 'Supabase — database cho web app',
    eyebrow: 'Vercel',
    title: 'Vercel — nơi deploy web lên internet',
    titleEm: '',
    desc: 'Vercel đưa web của bạn lên internet để ai cũng truy cập được — miễn phí, tự động, nhanh chóng.',
    duration: '~6 phút',
    totalSubs: 8,
    currentIndex: 5,
    content: [
      { type: 'p', text: 'Khi bạn chạy <code>pnpm run dev</code> trên máy, web chỉ chạy được trên máy bạn. <strong>Vercel</strong> là dịch vụ đưa web đó lên internet để ai cũng truy cập được.' },
      { type: 'p', text: 'Hiểu đơn giản: Code trên máy → push lên GitHub → Vercel lấy về → build → đưa lên internet.' },
      {
        type: 'infographic',
        label: 'Vercel — đường đi từ máy tới web live',
        steps: [
          { label: '01', title: 'Code local', desc: 'Bạn sửa web và chạy thử bằng <code>pnpm run dev</code> trên máy.' },
          { label: '02', title: 'Push GitHub', desc: 'Code mới được đẩy lên repo để Vercel nhận biết thay đổi.' },
          { label: '03', title: 'Build & publish', desc: 'Vercel build production và xuất bản thành URL truy cập công khai.' }
        ],
        aside: {
          label: 'Thuê server',
          title: 'Không cần quản lý hosting truyền thống',
          desc: 'Bạn tập trung vào code và nội dung, Vercel lo hạ tầng deploy.'
        }
      },
      { type: 'p', text: 'Bạn không cần biết server là gì, không cần thuê hosting, không cần config nginx hay bất kỳ thứ gì phức tạp. Vercel làm hết — bạn chỉ cần push code.' },
      {
        type: 'compare',
        headers: ['Vercel', 'Hosting truyền thống'],
        rows: [
          { left: 'Kết nối GitHub, nhấn Deploy', leftStyle: 'check', right: 'Config server, FTP upload, cài dependencies thủ công', rightStyle: 'cross' },
          { left: 'Push code là xong', leftStyle: 'check', right: 'Upload lại thủ công', rightStyle: 'cross' },
          { left: 'Tối ưu sẵn — Vercel làm ra Next.js', leftStyle: 'check', right: 'Phải tự config', rightStyle: 'cross' },
          { left: 'Free tier đủ dùng cho project cá nhân', leftStyle: 'check', right: 'Thường tính phí từ đầu', rightStyle: 'cross' },
          { left: 'HTTPS tự động', leftStyle: 'check', right: 'Phải tự cài SSL', rightStyle: 'cross' }
        ]
      },
      { type: 'divider' },
      { type: 'h3', text: 'Giao diện Vercel — tab nào cần quan tâm' },
      { type: 'p', text: 'Sau khi đăng nhập và import project, dashboard Vercel trông như thế này:' },
      { type: 'p', text: '• <strong>Trang Overview — màn hình chính:</strong> Hiển thị tất cả project đang deploy. Mỗi project hiện: URL đang live, trạng thái deploy gần nhất, thời gian deploy lần cuối, branch đang được deploy.' },
      { type: 'p', text: '• <strong>Tab Deployments:</strong> Lịch sử toàn bộ lần deploy — mỗi lần push code là một dòng ở đây.' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Trạng thái</th>
      <th class="p-2.5 text-left">Ý nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)] bg-[rgba(22,163,74,0.04)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-[#16a34a]">Ready</td>
      <td class="p-2.5 font-medium">Deploy thành công, web đang live</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-amber-500">Building</td>
      <td class="p-2.5">Đang build — chờ 30-60 giây</td>
    </tr>
    <tr class="border-b border-[var(--border)] bg-[rgba(239,68,68,0.04)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-red-600">Error</td>
      <td class="p-2.5 text-red-600 font-medium">Build thất bại — nhấn vào xem log lỗi</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5">Preview URL</td>
      <td class="p-2.5">URL riêng cho lần deploy đó — không phải URL chính</td>
    </tr>
  </tbody>
</table>` },
      { type: 'insight', label: 'Lỗi deploy', text: 'Khi Vercel báo lỗi deploy → nhấn vào lần deploy đó → xem <strong>Build Logs</strong> → tìm dòng màu đỏ — đó là nguyên nhân lỗi. Copy dòng đó paste vào chat AI để nhờ sửa.' },
      { type: 'p', text: '• <strong>Tab Settings:</strong> Nơi cấu hình project (General, Domains, Environment Variables, Git, Build & Output).' },
      { type: 'p', text: '• <strong>Tab Analytics:</strong> Xem lượng truy cập web — bao nhiêu người vào, từ đâu, trang nào được xem nhiều nhất.' },
      { type: 'p', text: '• <strong>Tab Logs:</strong> Xem log realtime khi web đang chạy — hữu ích khi debug lỗi phía server.' },
      { type: 'divider' },
      { type: 'h3', text: 'Environment Variables — cấu hình biến môi trường trên Vercel' },
      { type: 'p', text: 'File <code>.env.local</code> trên máy không được đẩy lên GitHub — nên Vercel không tự biết các biến đó. Phải thêm thủ công vào settings.' },
      { type: 'p', text: 'Cách thêm: Vào project → Settings → Environment Variables. Điền từng biến:' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>Key:    NEXT_PUBLIC_SUPABASE_URL\nValue:  https://xxxxx.supabase.co</code></pre>' },
      { type: 'p', text: 'Nhấn Save → Vercel lưu lại và dùng biến đó khi build.' },
      { type: 'p', text: '<strong>Chọn Environment phù hợp:</strong>' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Environment</th>
      <th class="p-2.5 text-left">Khi nào dùng</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Production</td>
      <td class="p-2.5">URL chính — domain thật của web</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Preview</td>
      <td class="p-2.5">Mỗi lần tạo Pull Request — URL preview riêng</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Development</td>
      <td class="p-2.5">Khi dùng Vercel CLI trên máy</td>
    </tr>
  </tbody>
</table>` },
      { type: 'insight', label: 'Lưu ý', text: 'Sau khi thêm hoặc sửa Environment Variables, phải <strong>Redeploy</strong> thì biến mới có hiệu lực — Vercel không tự build lại khi chỉ đổi biến. Cách redeploy thủ công: Vào tab Deployments → tìm lần deploy gần nhất → nhấn dấu ... → Redeploy.' },
      { type: 'divider' },
      { type: 'h3', text: 'Gắn tên miền riêng vào Vercel' },
      { type: 'p', text: 'Mặc định Vercel cho URL dạng <code>tên-project.vercel.app</code>. Khi muốn dùng domain riêng như <code>markai.vn</code> thì làm thêm bước này.' },
      { type: 'p', text: '• <strong>Bước 1 — Thêm domain vào Vercel:</strong> Vào project → Settings → Domains → gõ tên miền vào ô → nhấn Add. Vercel sẽ hiện thông tin DNS cần cấu hình (A record với value <code>76.76.21.21</code> hoặc CNAME record với value <code>cname.vercel-dns.com</code>).' },
      { type: 'p', text: '• <strong>Bước 2 — Cấu hình DNS ở nơi mua domain:</strong> Vào trang quản lý domain (Namecheap, GoDaddy, tenten.vn...) → tìm phần DNS Records → thêm record theo thông tin Vercel đưa ra.' },
      { type: 'p', text: '• <strong>Bước 3 — Chờ propagate:</strong> DNS cần 5 phút đến 48 giờ để cập nhật toàn cầu — thường chỉ mất 5-15 phút.' },
      { type: 'insight', label: 'DNS Status', text: 'Vercel hiển thị trạng thái từng domain — <code>Valid</code> là đã kết nối xong, <code>Invalid</code> là chưa đúng DNS, <code>Pending</code> là đang chờ propagate.' },
      { type: 'divider' },
      { type: 'h3', text: 'Preview Deployments — xem thử trước khi đưa lên production' },
      { type: 'p', text: 'Mỗi lần tạo Pull Request hoặc push lên branch khác <code>main</code>, Vercel tự tạo một Preview URL riêng — một phiên bản web chạy độc lập với bản production.' },
      { type: 'p', text: 'Dùng khi: muốn test tính năng mới, muốn cho người khác xem thử trước khi publish, hoặc so sánh bản mới với bản đang live.' },
      { type: 'insight', label: 'Vibecode một mình', text: 'Khi vibecode một mình và chưa cần workflow phức tạp — cứ push thẳng lên main, không cần dùng Preview. Biết là có để dùng khi cần.' },
      { type: 'divider' },
      { type: 'h3', text: 'Xử lý các lỗi deploy hay gặp' },
      { type: 'p', text: '• <strong>Lỗi 1 — Build failed ngay sau khi push:</strong> Chạy <code>pnpm run build</code> trên máy trước khi push — nếu lỗi thì fix trên máy.' },
      { type: 'p', text: '• <strong>Lỗi 2 — Web deploy thành công nhưng tính năng không chạy:</strong> Kiểm tra lại Environment Variables trên Vercel.' },
      { type: 'p', text: '• <strong>Lỗi 3 — Deploy thành công nhưng web hiện trang trắng:</strong> Vào tab Logs trên Vercel xem log, hoặc mở F12 Console để xem lỗi.' },
      { type: 'p', text: '• <strong>Lỗi 4 — Vercel không tự deploy khi push:</strong> Webhook bị đứt. Vào Settings → Git kiểm tra kết nối GitHub, Disconnect rồi Connect lại.' }
    ]
  },
  {
    id: '3.6',
    slug: 'bai-3-6',
    lessonSlug: 'cai-dat-moi-truong',
    lessonId: 3,
    lessonTitle: 'Cài gì vào máy để bắt đầu vibecode?',
    lessonTitleEm: 'Cài gì vào máy?',
    prevSlug: 'bai-3-5',
    nextSlug: 'bai-3-7',
    prevTitle: 'Vercel — nơi deploy web lên internet',
    nextTitle: 'AI IDE — tuỳ chọn, có phí nếu muốn dùng nhiều',
    eyebrow: 'Supabase',
    title: 'Supabase — database cho web app',
    titleEm: '',
    desc: 'Supabase là database trên cloud để lưu dữ liệu web app — miễn phí để bắt đầu, quản lý qua giao diện web.',
    duration: '~7 phút',
    totalSubs: 8,
    currentIndex: 6,
    content: [
      { type: 'p', text: 'Khi web app cần lưu dữ liệu — form ai đó vừa submit, danh sách bài viết, thông tin người dùng đăng ký — tất cả phải được lưu ở đâu đó. Đó là việc của database.' },
      { type: 'p', text: '<strong>Supabase</strong> là database trên cloud — miễn phí để bắt đầu, không cần cài gì trên máy, quản lý qua giao diện web.' },
      { type: 'p', text: 'Hiểu đơn giản: User điền form trên web → Code gửi dữ liệu lên Supabase → Supabase lưu vào database → Bạn vào Supabase xem dữ liệu (như xem Google Sheets).' },
      {
        type: 'infographic',
        label: 'Supabase — luồng dữ liệu cơ bản',
        steps: [
          { label: '01', title: 'User nhập dữ liệu', desc: 'Người dùng điền form, đăng ký tài khoản, hoặc upload file.' },
          { label: '02', title: 'Frontend gửi request', desc: 'Code dùng Supabase client để gửi dữ liệu lên project Supabase.' },
          { label: '03', title: 'Database lưu lại', desc: 'Bạn mở Table Editor để xem, lọc, sửa hoặc export dữ liệu.' }
        ],
        aside: {
          label: 'Tự dựng backend',
          title: 'Không cần tự code server từ đầu',
          desc: 'Supabase gom database, auth, storage và policy vào một dashboard.'
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'Tại sao dùng Supabase thay vì các lựa chọn khác' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Tính năng</th>
      <th class="border-r border-[var(--border)] p-2.5 text-left">Supabase</th>
      <th class="border-r border-[var(--border)] p-2.5 text-left">Firebase</th>
      <th class="p-2.5 text-left">MySQL tự host</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Free tier</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">Đủ dùng cho project nhỏ</td>
      <td class="border-r border-[var(--border)] p-2.5">Có nhưng giới hạn hơn</td>
      <td class="p-2.5 text-red-600">Phải trả tiền server</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Giao diện</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a]">Spreadsheet trực quan</td>
      <td class="border-r border-[var(--border)] p-2.5">Phức tạp hơn</td>
      <td class="p-2.5">Phải dùng tool riêng</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Tích hợp Next.js</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a]">SDK dễ dùng, có sẵn</td>
      <td class="border-r border-[var(--border)] p-2.5">Cần config nhiều</td>
      <td class="p-2.5">Tự setup</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">SQL</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a]">SQL chuẩn (Postgres)</td>
      <td class="border-r border-[var(--border)] p-2.5 text-red-600">Không dùng SQL</td>
      <td class="p-2.5">SQL chuẩn</td>
    </tr>
    <tr>
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Auth có sẵn</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-bold">✅ Có sẵn</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-bold">✅ Có sẵn</td>
      <td class="p-2.5 text-red-600">❌ Tự làm</td>
    </tr>
  </tbody>
</table>` },
      { type: 'divider' },
      { type: 'h3', text: 'Tạo project Supabase đầu tiên' },
      { type: 'p', text: '• <strong>Bước 1 — Đăng nhập:</strong> Vào <a href="https://supabase.com/" target="_blank" rel="noreferrer">supabase.com</a> → đăng nhập bằng GitHub.' },
      { type: 'p', text: '• <strong>Bước 2 — Tạo project mới:</strong> Nhấn New project → điền thông tin (Name, Database Password, Region: Southeast Asia Singapore, Free plan) → Nhấn Create new project.' },
      { type: 'p', text: '• <strong>Bước 3 — Lấy API keys:</strong> Vào Project Settings → API. Lấy URL và Anon key về bỏ vào file <code>.env.local</code>.' },
      { type: 'insight', label: 'API Keys', text: 'Anon key là key công khai — dùng ở frontend được, không cần giấu. Service role key thì phải giấu kỹ, không bao giờ để ở frontend hay commit lên GitHub.' },
      { type: 'divider' },
      { type: 'h3', text: 'Giao diện Supabase — tab nào cần quan tâm' },
      { type: 'p', text: '• <strong>Table Editor — dùng nhiều nhất:</strong> Giao diện nhìn như Google Sheets. Dùng để xem, thêm, sửa, xoá dữ liệu.' },
      { type: 'p', text: '• <strong>SQL Editor:</strong> Gõ câu lệnh SQL trực tiếp. Không cần biết SQL sâu — AI viết câu lệnh, bạn paste vào chạy thôi.' },
      { type: 'p', text: '• <strong>Authentication:</strong> Quản lý user đăng ký — xem danh sách tài khoản, cấu hình email/Google login.' },
      { type: 'p', text: '• <strong>Storage:</strong> Lưu file — ảnh upload từ user, file PDF... Giống S3 nhưng tích hợp sẵn với Supabase.' },
      { type: 'p', text: '• <strong>Database → Tables:</strong> Xem cấu trúc toàn bộ database.' },
      { type: 'p', text: '• <strong>Logs:</strong> Xem log realtime khi debug query.' },
      { type: 'divider' },
      { type: 'h3', text: 'Tạo table — nơi lưu dữ liệu' },
      { type: 'p', text: 'Table giống như một sheet trong Google Sheets — mỗi table lưu một loại dữ liệu.' },
      { type: 'p', text: '• <strong>Cách 1 — Dùng Table Editor:</strong> Nhấn New table → điền tên (ví dụ: contacts), bật Enable Row Level Security (RLS) → Thêm columns (name, email, message với type text).' },
      { type: 'p', text: '• <strong>Cách 2 — Dùng SQL Editor:</strong> Paste script do AI viết vào SQL Editor và nhấn Run:' },
      { type: 'html', html: `<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>create table contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  name text not null,
  email text not null,
  message text
);</code></pre>` },
      { type: 'insight', label: 'Vibecode', text: 'Khi vibecode, thường nhờ AI tạo câu SQL luôn — paste vào SQL Editor, chạy, xong. Không cần tự viết SQL.' },
      { type: 'divider' },
      { type: 'h3', text: 'Kết nối Supabase vào project' },
      { type: 'p', text: '<strong>Bước 1 — Cài Supabase client:</strong>' },
      { type: 'html', html: '<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>pnpm add @supabase/supabase-js</code></pre>' },
      { type: 'p', text: '<strong>Bước 2 — Tạo file kết nối <code>lib/supabase.ts</code>:</strong>' },
      { type: 'html', html: `<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>import { createClient } from '@supabase/supabase-js'\n\nconst supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!\nconst supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!\n\nexport const supabase = createClient(supabaseUrl, supabaseKey)</code></pre>` },
      { type: 'p', text: '<strong>Bước 3 — Thêm env vars vào Vercel settings → Redeploy.</strong>' },
      { type: 'divider' },
      { type: 'h3', text: 'Row Level Security — bắt buộc phải biết' },
      { type: 'p', text: '<strong>RLS (Row Level Security)</strong> là lớp bảo mật của Supabase — kiểm soát ai được đọc, ai được ghi dữ liệu vào table.' },
      { type: 'p', text: 'Mặc định khi RLS bật — <strong>không ai đọc ghi được gì cả</strong>. Phải tạo Policy để cấp quyền.' },
      { type: 'p', text: '<strong>Tại sao quan trọng:</strong> Nếu tắt RLS, bất kỳ ai có anon key đều đọc được toàn bộ database.' },
      { type: 'p', text: '<strong>Tạo Policy cho phép insert công khai (cho contacts table):</strong>' },
      { type: 'html', html: `<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>create policy "Allow public insert"
on contacts for insert
to anon
with check (true);</code></pre>` },
      { type: 'divider' },
      { type: 'h3', text: 'Authentication — đăng nhập không cần tự code' },
      { type: 'p', text: 'Supabase có sẵn hệ thống xác thực. Đăng ký/đăng nhập bằng email/password hoặc OAuth providers.' },
      { type: 'html', html: `<pre class="bg-[var(--bg2)] p-4 font-mono text-sm my-4 border border-[var(--border)]"><code>// Đăng ký bằng email
const { error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'mật-khẩu'
})

// Đăng nhập
const { error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'mật-khẩu'
})</code></pre>` },
      { type: 'divider' },
      { type: 'h3', text: 'Storage — lưu file và ảnh' },
      { type: 'p', text: 'Dùng khi web cần cho user upload ảnh, lưu file PDF. Tạo bucket public/private trong Storage tab, upload file, và lấy URL.' },
      { type: 'divider' },
      { type: 'h3', text: 'Xử lý lỗi hay gặp với Supabase' },
      { type: 'p', text: '• <strong>Insert lỗi:</strong> Kiểm tra lại Policy của table (đã bật RLS nhưng chưa tạo Policy cho phép insert).' },
      { type: 'p', text: '• <strong>Lỗi supabaseUrl is required:</strong> Biến môi trường chưa được load. Kiểm tra file <code>.env.local</code> hoặc env vars trên Vercel.' },
      { type: 'p', text: '• <strong>Data trả về null:</strong> Kiểm tra Policy — table có RLS bật nhưng chưa có Policy cho SELECT. Thêm Policy cho phép đọc.' }
    ]
  },
  {
    id: '3.7',
    slug: 'bai-3-7',
    lessonSlug: 'cai-dat-moi-truong',
    lessonId: 3,
    lessonTitle: 'Cài gì vào máy để bắt đầu vibecode?',
    lessonTitleEm: 'Cài gì vào máy?',
    prevSlug: 'bai-3-6',
    nextSlug: 'bai-3-8',
    prevTitle: 'Supabase — database cho web app',
    nextTitle: 'Cách làm việc',
    eyebrow: 'AI IDE',
    title: 'AI IDE — tuỳ chọn, có phí nếu muốn dùng nhiều',
    titleEm: '',
    desc: 'Tìm hiểu về các AI IDE như Cursor, Windsurf, Trae, Antigravity giúp code trực tiếp trong editor, không cần copy paste.',
    duration: '~5 phút',
    totalSubs: 8,
    currentIndex: 7,
    content: [
      { type: 'p', text: 'Khi dùng ChatGPT hay Claude trên web, bạn phải copy paste liên tục giữa web và VS Code. <strong>AI IDE</strong> giải quyết vấn đề đó: AI nằm thẳng trong editor, đọc được project, tự sửa file, tự chạy lệnh.' },
      {
        type: 'infographic',
        label: 'AI IDE — vòng làm việc thực tế',
        steps: [
          { label: '01', title: 'Mô tả task', desc: 'Bạn nói rõ trang/file/tính năng cần sửa và tiêu chí hoàn thành.' },
          { label: '02', title: 'AI sửa trực tiếp', desc: 'AI đọc project, chỉnh nhiều file, chạy lệnh kiểm tra nếu cần.' },
          { label: '03', title: 'Bạn review diff', desc: 'Xem thay đổi, chạy thử, rồi commit khi kết quả đúng.' }
        ],
        aside: {
          label: 'Copy paste',
          title: 'Không cần chuyển qua lại giữa chat web và editor',
          desc: 'AI IDE giảm thao tác thủ công và hiểu context project tốt hơn.'
        }
      },
      {
        type: 'compare',
        headers: ['Chat AI bên ngoài', 'AI IDE'],
        rows: [
          { left: 'Copy code → paste vào chat → copy lại', leftStyle: 'cross', right: 'Chat trực tiếp trong editor', rightStyle: 'check' },
          { left: 'Không — chỉ thấy đoạn bạn paste', leftStyle: 'cross', right: 'Có — đọc được toàn bộ file', rightStyle: 'check' },
          { left: 'Bạn tự paste vào đúng chỗ', leftStyle: 'cross', right: 'AI tự sửa thẳng vào file', rightStyle: 'check' },
          { left: 'Bạn tự chạy Terminal', leftStyle: 'cross', right: 'AI tự chạy được', rightStyle: 'check' },
          { left: 'Chậm hơn', leftStyle: 'cross', right: 'Nhanh hơn đáng kể', rightStyle: 'check' }
        ]
      },
      { type: 'divider' },
      { type: 'h3', text: 'Hai loại AI IDE' },
      { type: 'p', text: '• <strong>Loại 1 — Extension cài vào VS Code:</strong> Claude Code, Kiro, Cline, GitHub Copilot.' },
      { type: 'p', text: '• <strong>Loại 2 — App editor riêng:</strong> Cursor, Windsurf, Trae, Antigravity. Đây là editor độc lập, giao diện giống VS Code nhưng tích hợp AI sâu và hỗ trợ nhiều model.' },
      { type: 'divider' },
      { type: 'h3', text: 'Free tier thực tế — dùng được bao nhiêu' },
      { type: 'html', html: `<table class="w-full border-collapse border border-[var(--border)] my-6 text-[13px] font-sans">
  <thead>
    <tr class="bg-[var(--bg2)] font-mono text-[11px] text-[var(--muted)] uppercase border-b border-[var(--border)]">
      <th class="border-r border-[var(--border)] p-2.5 text-left">Tool</th>
      <th class="border-r border-[var(--border)] p-2.5 text-left">Free tier</th>
      <th class="p-2.5 text-left">Muốn dùng nhiều</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Claude Code</td>
      <td class="border-r border-[var(--border)] p-2.5">Giới hạn số request</td>
      <td class="p-2.5">Trả theo usage</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Kiro</td>
      <td class="border-r border-[var(--border)] p-2.5">Free trong giai đoạn preview</td>
      <td class="p-2.5">Chưa rõ giá sau</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Cline</td>
      <td class="border-r border-[var(--border)] p-2.5">Miễn phí — tự mang API key</td>
      <td class="p-2.5">Trả tiền theo model dùng</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">GitHub Copilot</td>
      <td class="border-r border-[var(--border)] p-2.5">Cơ bản miễn phí</td>
      <td class="p-2.5">$10/tháng cho Pro</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Cursor</td>
      <td class="border-r border-[var(--border)] p-2.5">2 tuần Pro trial</td>
      <td class="p-2.5">$20/tháng</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Windsurf</td>
      <td class="border-r border-[var(--border)] p-2.5">Giới hạn số lần dùng</td>
      <td class="p-2.5">$15/tháng</td>
    </tr>
    <tr class="border-b border-[var(--border)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold">Trae</td>
      <td class="border-r border-[var(--border)] p-2.5">Miễn phí hoàn toàn hiện tại</td>
      <td class="p-2.5">Chưa có thông báo tính phí</td>
    </tr>
    <tr class="bg-[rgba(232,140,46,0.04)]">
      <td class="border-r border-[var(--border)] p-2.5 font-bold text-[var(--accent)]">Antigravity</td>
      <td class="border-r border-[var(--border)] p-2.5 text-[#16a34a] font-medium">Có free tier</td>
      <td class="p-2.5">Phí thấp hơn các tool khác</td>
    </tr>
  </tbody>
</table>` },
      { type: 'insight', label: 'Thực tế', text: 'Free tier của hầu hết tool hết trong vài ngày dùng tích cực. Nếu vibecode nghiêm túc, tính đến việc trả phí một tool thay vì nhảy qua lại giữa nhiều tool miễn phí.' },
      { type: 'divider' },
      { type: 'h3', text: 'Nên bắt đầu với tool nào' },
      { type: 'p', text: 'Nếu chưa có điều kiện trả phí hoặc chỉ muốn làm quen trước — <strong>Antigravity</strong> là lựa chọn ổn nhất hiện tại. Giao diện y chang VS Code, đủ tính năng để bắt đầu vibecode, không cần lo về chi phí ngay từ đầu.' },
      { type: 'p', text: 'Sau này khi đã quen workflow vibecode, có thể chuyển sang tool khác hoặc tối ưu chi phí bằng cách dùng <strong>9router</strong> để routing giữa nhiều model với giá tốt hơn.' },
      { type: 'divider' },
      { type: 'h3', text: 'Mẹo dùng AI IDE hiệu quả hơn' },
      { type: 'p', text: '• <strong>Prompt cụ thể:</strong> Thay vì "thêm form liên hệ", hãy nói "thêm form liên hệ vào trang /contact, gồm các trường name, email, message, khi submit lưu vào table contacts trong Supabase, hiện thông báo thành công sau khi gửi".' },
      { type: 'p', text: '• <strong>Làm từng bước nhỏ:</strong> Chia tính năng lớn thành từng bước nhỏ → commit sau mỗi bước xong.' },
      { type: 'p', text: '• <strong>Xem lại trước khi Accept:</strong> Đọc lướt qua diff để biết AI vừa làm gì trước khi đồng ý.' },
      { type: 'p', text: '• <strong>Khi AI bị lặp lỗi:</strong> Mở conversation mới, mô tả lại vấn đề từ đầu.' },
      { type: 'p', text: '• <strong>Dùng một tool thôi:</strong> Không cài nhiều AI IDE cùng lúc.' }
    ]
  },
  {
    id: '3.8',
    slug: 'bai-3-8',
    lessonSlug: 'cai-dat-moi-truong',
    lessonId: 3,
    lessonTitle: 'Cài gì vào máy để bắt đầu vibecode?',
    lessonTitleEm: 'Cài gì vào máy?',
    prevSlug: 'bai-3-7',
    nextSlug: 'bai-4-1',
    prevTitle: 'AI IDE — tuỳ chọn, có phí nếu muốn dùng nhiều',
    nextTitle: 'Làm quen VS Code & Cursor — giao diện & phím tắt',
    eyebrow: 'Workflow',
    title: 'Cách làm việc',
    titleEm: '',
    desc: 'Bài 3 chỉ giúp bạn biết cần cài gì; phần cài chi tiết có thể hỏi AI hoặc để Codex xử lý giúp.',
    duration: '~2 phút',
    totalSubs: 8,
    currentIndex: 8,
    content: [
      { type: 'p', text: 'Thật ra nội dung bài 3 này chỉ cho các bạn biết <strong>cần cài gì vào máy</strong> thôi.' },
      { type: 'p', text: 'Còn cách cài chi tiết thì bạn không cần tự nhớ từng bước. Bạn chỉ cần hỏi AI là nó sẽ chỉ bạn cách cài rất cụ thể theo đúng máy bạn đang dùng: Windows, Mac, hay Linux.' },
      {
        type: 'infographic',
        label: 'Cách làm việc — biết cần gì, để AI chỉ cách cài',
        steps: [
          { label: '01', title: 'Biết tên công cụ', desc: 'Ví dụ: Node.js, VS Code, Git, GitHub, Vercel, Supabase.' },
          { label: '02', title: 'Hỏi AI cách cài', desc: 'Nói rõ bạn đang dùng Windows hay Mac để AI hướng dẫn đúng từng bước.' },
          { label: '03', title: 'Nhờ AI kiểm tra', desc: 'Sau khi cài, gửi lỗi hoặc version check cho AI để nó xác nhận giúp.' }
        ],
        aside: {
          label: 'Tự nhớ',
          title: 'Không cần thuộc quy trình cài đặt',
          desc: 'Mục tiêu là biết mình cần tool nào và biết nhờ AI hỗ trợ đúng lúc.'
        }
      },
      { type: 'p', text: 'Bạn chỉ cần ghi <code>@tên tool</code> và nói rõ yêu cầu của bạn là Codex sẽ làm cho bạn hết. Ví dụ:' },
      { type: 'html', html: '<div class="my-4 border border-[var(--border)] bg-[var(--bg2)]"><img src="/codex-tool-mention-example.png" alt="Ví dụ ghi @ tên tool và nói rõ yêu cầu trong Codex" class="w-full" /></div>' },
      { type: 'insight', label: 'Tóm lại', text: 'Bạn không cần biến mình thành người chuyên cài tool. Bạn chỉ cần biết tool nào cần có, sau đó hỏi AI hoặc để Codex hỗ trợ từng bước.' }
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


