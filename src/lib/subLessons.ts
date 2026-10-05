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
  },
                                                      // ========== BÀI 04 ==========
{
    "id": "4.1",
    "slug": "bai-4-1-mo-dau",
    "lessonSlug": "dung-giao-dien-web-nhanh-voi-ai",
    "lessonId": 4,
    "lessonTitle": "Bài 4: Dựng giao diện web nhanh với AI",
    "lessonTitleEm": "với AI",
    "prevSlug": null,
    "nextSlug": "bai-4-2-buoc-1-tim-web-co-giao-dien-minh-thich",
    "prevTitle": null,
    "nextTitle": "Bước 1 — Tìm web có giao diện mình thích",
    "eyebrow": "Quy trình",
    "title": "Mở đầu",
    "titleEm": "",
    "desc": "Một sai lầm hay gặp khi mới vibecode: <strongnhảy vào code tính năng luôn mà chưa có giao diện</strong.",
    "duration": "~5 phút",
    "totalSubs": 6,
    "currentIndex": 1,
    "content": [
      {
        "type": "p",
        "text": "Một sai lầm hay gặp khi mới vibecode: <strong>nhảy vào code tính năng luôn mà chưa có giao diện</strong>."
      },
      {
        "type": "infographic",
        "label": "Workflow đúng khi dựng UI bằng AI",
        "steps": [
          {
            "label": "01",
            "title": "Dựng giao diện trước",
            "desc": "Chốt layout, visual direction, màu, font, spacing và cảm giác tổng thể trước khi code logic."
          },
          {
            "label": "02",
            "title": "Hoàn thiện visual",
            "desc": "Sửa hero, card, CTA, responsive và trạng thái rỗng cho đến khi nhìn đủ ổn để demo."
          },
          {
            "label": "03",
            "title": "Gắn tính năng sau",
            "desc": "Khi khung UI đã ổn định, mới thêm form, database, auth, API hoặc logic phức tạp."
          }
        ],
        "aside": {
          "label": "Đừng làm ngược",
          "title": "Code tính năng trước dễ làm UI vá víu",
          "desc": "Mỗi lần sửa giao diện có thể kéo theo lỗi layout, state hoặc flow đang chạy."
        }
      },
      {
        "type": "p",
        "text": "Kết quả là app chạy được nhưng trông xấu, layout vỡ, mỗi lần chỉnh UI lại phá tính năng đang chạy. Mất thời gian gấp đôi."
      },
      {
        "type": "p",
        "text": "Cách làm đúng hơn: <strong>dựng giao diện trước — hoàn thiện visual — rồi mới code tính năng vào sau</strong>"
      },
      {
        "type": "p",
        "text": "Bài này giới thiệu các tool mình thường dùng nhất:"
      },
      {
        "type": "html",
        "html": "<section class=\"tool-showcase\" aria-label=\"Các công cụ dựng giao diện web nhanh\">\n  <style>\n.tool-showcase {\n  margin: 2rem 0;\n}\n.tool-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n  margin-top: 1.5rem;\n}\n.tool-card {\n  background: var(--bg);\n  border: 1px solid var(--border);\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  min-height: 260px;\n}\n.tool-card:hover {\n  transform: translate(-3px, -3px);\n  box-shadow: 6px 6px 0px var(--accent);\n  border-color: var(--accent);\n}\n.tool-card:hover .tool-logo-wrapper {\n  border-color: var(--accent);\n  transform: scale(1.05);\n}\n.tool-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.2rem;\n}\n.tool-logo-wrapper {\n  width: 52px;\n  height: 52px;\n  border: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #000;\n  flex-shrink: 0;\n  padding: 6px;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.tool-logo {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  image-rendering: -webkit-optimize-contrast;\n}\n.tool-info {\n  display: flex;\n  flex-direction: column;\n}\n.tool-name {\n  font-family: var(--display);\n  font-size: 16px;\n  font-weight: 800;\n  color: #000000 !important;\n  line-height: 1.2;\n}\n.tool-desc {\n  font-family: var(--sans);\n  font-size: 13.5px;\n  color: var(--ink2);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  flex-grow: 1;\n}\n.tool-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px dashed var(--border);\n  padding-top: 1rem;\n  margin-top: auto;\n}\n.tool-badge {\n  font-family: var(--mono);\n  font-size: 9px;\n  padding: 3px 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 500;\n}\n.badge-free {\n  background: color-mix(in srgb, #16a34a 8%, var(--bg));\n  color: #16a34a;\n  border: 1px solid color-mix(in srgb, #16a34a 24%, var(--border));\n}\n.badge-limits {\n  background: color-mix(in srgb, var(--accent) 8%, var(--bg));\n  color: var(--accent);\n  border: 1px solid color-mix(in srgb, var(--accent) 24%, var(--border));\n}\n.badge-paid {\n  background: color-mix(in srgb, #dc2626 8%, var(--bg));\n  color: #dc2626;\n  border: 1px solid color-mix(in srgb, #dc2626 24%, var(--border));\n}\n.tool-strength {\n  font-family: var(--mono);\n  font-size: 10px;\n  color: var(--muted);\n  letter-spacing: 0.04em;\n}\n@media (max-width: 480px) {\n  .tool-grid {\n    grid-template-columns: 1fr;\n    gap: 0.85rem;\n  }\n  .tool-card {\n    min-height: auto;\n    padding: 1.1rem;\n  }\n  .tool-logo-wrapper {\n    width: 44px;\n    height: 44px;\n    padding: 4px;\n  }\n  .tool-name {\n    font-size: 15px;\n  }\n  .tool-desc {\n    font-size: 13px;\n    margin-bottom: 1rem;\n  }\n}\n  </style>\n  <div class=\"tool-grid\">\n<!-- Card 1: Google AI Studio -->\n<article class=\"tool-card\">\n  <div>\n    <div class=\"tool-header\">\n      <div class=\"tool-logo-wrapper\">\n        <img class=\"tool-logo\" src=\"/aistudio.png\" alt=\"Google AI Studio Logo\" />\n      </div>\n      <div class=\"tool-info\">\n        <h4 class=\"tool-name\">Google AI Studio</h4>\n        <span class=\"tool-strength\">Model mạnh nhất</span>\n      </div>\n    </div>\n    <p class=\"tool-desc\">Prompt → code nhanh, model mạnh nhất, không giới hạn. Thích hợp để code prototype nhanh chóng.</p>\n  </div>\n  <div class=\"tool-footer\">\n    <span class=\"tool-badge badge-free\">Hoàn toàn FREE</span>\n  </div>\n</article>\n\n<!-- Card 2: Stitch -->\n<article class=\"tool-card\">\n  <div>\n    <div class=\"tool-header\">\n      <div class=\"tool-logo-wrapper\">\n        <img class=\"tool-logo\" src=\"/Google-Stitch-Logo.png\" alt=\"Stitch Logo\" />\n      </div>\n      <div class=\"tool-info\">\n        <h4 class=\"tool-name\">Stitch</h4>\n        <span class=\"tool-strength\">Nhái giao diện nhanh</span>\n      </div>\n    </div>\n    <p class=\"tool-desc\">Upload ảnh tham khảo → AI nhái theo. Hoặc ghi Prompt, giao diện sinh ra rất đẹp và hiện đại.</p>\n  </div>\n  <div class=\"tool-footer\">\n    <span class=\"tool-badge badge-free\">FREE (Beta)</span>\n  </div>\n</article>\n\n<!-- Card 3: Base44 -->\n<article class=\"tool-card\">\n  <div>\n    <div class=\"tool-header\">\n      <div class=\"tool-logo-wrapper\" style=\"background: #111;\">\n        <img class=\"tool-logo\" src=\"/base44.png\" alt=\"Base44 Logo\" />\n      </div>\n      <div class=\"tool-info\">\n        <h4 class=\"tool-name\">Base44</h4>\n        <span class=\"tool-strength\">Ưu tiên dùng nhất</span>\n      </div>\n    </div>\n    <p class=\"tool-desc\">Giao diện cực kỳ đẹp, hiện đại. Mình ưu tiên dùng công cụ này nhất cho các dự án vibecode.</p>\n  </div>\n  <div class=\"tool-footer\">\n    <span class=\"tool-badge badge-limits\">FREE giới hạn</span>\n  </div>\n</article>\n\n<!-- Card 4: Lovable -->\n<article class=\"tool-card\">\n  <div>\n    <div class=\"tool-header\">\n      <div class=\"tool-logo-wrapper\" style=\"background: #000;\">\n        <img class=\"tool-logo\" src=\"/lovable-logo.avif\" alt=\"Lovable Logo\" />\n      </div>\n      <div class=\"tool-info\">\n        <h4 class=\"tool-name\">Lovable</h4>\n        <span class=\"tool-strength\">Tích hợp Database</span>\n      </div>\n    </div>\n    <p class=\"tool-desc\">Giao diện đẹp, tự động tạo database + login ngay từ đầu. Tuy nhiên rất dễ hết credit miễn phí.</p>\n  </div>\n  <div class=\"tool-footer\">\n    <span class=\"tool-badge badge-limits\">FREE giới hạn</span>\n  </div>\n</article>\n\n<!-- Card 5: Figma Make -->\n<article class=\"tool-card\">\n  <div>\n    <div class=\"tool-header\">\n      <div class=\"tool-logo-wrapper\">\n        <img class=\"tool-logo\" src=\"/figma-make-logo.png\" alt=\"Figma Make Logo\" />\n      </div>\n      <div class=\"tool-info\">\n        <h4 class=\"tool-name\">Figma Make</h4>\n        <span class=\"tool-strength\">Figma sang Web</span>\n      </div>\n    </div>\n    <p class=\"tool-desc\">Tạo web cực đẹp trực tiếp từ bản thiết kế Figma của bạn, giữ nguyên các specs và layout chuẩn.</p>\n  </div>\n  <div class=\"tool-footer\">\n    <span class=\"tool-badge badge-limits\">FREE giới hạn</span>\n  </div>\n</article>\n\n<!-- Card 6: Claude Design -->\n<article class=\"tool-card\">\n  <div>\n    <div class=\"tool-header\">\n      <div class=\"tool-logo-wrapper\">\n        <img class=\"tool-logo\" src=\"/claude-design.png\" alt=\"Claude Design Logo\" />\n      </div>\n      <div class=\"tool-info\">\n        <h4 class=\"tool-name\">Claude Design</h4>\n        <span class=\"tool-strength\">Cực kỳ thông minh</span>\n      </div>\n    </div>\n    <p class=\"tool-desc\">Rất đẹp và cực kỳ mạnh mẽ. Tuy nhiên chi phí sử dụng đắt, yêu cầu có tài khoản Claude Pro trở lên.</p>\n  </div>\n  <div class=\"tool-footer\">\n    <span class=\"tool-badge badge-paid\">Claude Pro</span>\n  </div>\n</article>\n\n<!-- Card 7: v0.dev -->\n<article class=\"tool-card\">\n  <div>\n    <div class=\"tool-header\">\n      <div class=\"tool-logo-wrapper\" style=\"background: #000;\">\n        <img class=\"tool-logo\" src=\"/v0.png\" alt=\"v0.dev Logo\" />\n      </div>\n      <div class=\"tool-info\">\n        <h4 class=\"tool-name\">v0.dev</h4>\n        <span class=\"tool-strength\">Tạo UI React tốt nhất</span>\n      </div>\n    </div>\n    <p class=\"tool-desc\">Sinh UI components cực nhanh từ text hoặc ảnh chụp. Sử dụng thư viện Shadcn UI và Tailwind CSS.</p>\n  </div>\n  <div class=\"tool-footer\">\n    <span class=\"tool-badge badge-limits\">FREE giới hạn</span>\n  </div>\n</article>\n\n<!-- Card 8: Replit -->\n<article class=\"tool-card\">\n  <div>\n    <div class=\"tool-header\">\n      <div class=\"tool-logo-wrapper\" style=\"background: #0f172a;\">\n        <img class=\"tool-logo\" src=\"/replit.png\" alt=\"Replit Logo\" />\n      </div>\n      <div class=\"tool-info\">\n        <h4 class=\"tool-name\">Replit</h4>\n        <span class=\"tool-strength\">Môi trường toàn diện</span>\n      </div>\n    </div>\n    <p class=\"tool-desc\">Tạo web app hoàn chỉnh tương tự Lovable hay Base44, hỗ trợ đầy đủ editor và hosting trực tuyến.</p>\n  </div>\n  <div class=\"tool-footer\">\n    <span class=\"tool-badge badge-limits\">FREE giới hạn</span>\n  </div>\n</article>\n  </div>\n</section>"
      },
      {
        "type": "html",
        "html": "<section class=\"compare-table-section\" aria-label=\"So sánh nhanh các công cụ\">\n  <style>\n.compare-table-section {\n  margin: 2.5rem 0;\n}\n.compare-title {\n  font-family: var(--sans);\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ink);\n  margin: 0 0 1.5rem 0;\n  letter-spacing: -0.02em;\n}\n.compare-table-wrapper {\n  overflow-x: auto;\n  margin-bottom: 2rem;\n}\n.compare-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.compare-table th {\n  font-family: var(--mono);\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  text-align: left;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border);\n}\n.compare-table td {\n  padding: 1.25rem 1rem;\n  border-bottom: 1px solid var(--border);\n  vertical-align: middle;\n  font-family: var(--sans);\n  font-size: 14.5px;\n  line-height: 1.6;\n  color: var(--ink);\n}\n.compare-table tr:last-child td {\n  border-bottom: none;\n}\n.col-tool {\n  font-weight: 700;\n  width: 22%;\n}\n.col-strength {\n  color: var(--ink2);\n  width: 53%;\n}\n.col-free {\n  width: 25%;\n}\n.free-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n  color: var(--success);\n}\n.check-icon {\n  flex-shrink: 0;\n}\n.compare-note {\n  background: var(--bg2);\n  border-left: 2px solid var(--accent);\n  padding: 1.2rem 1.5rem;\n  margin-top: 1.5rem;\n}\n.compare-note p {\n  margin: 0;\n  font-family: var(--mono);\n  font-size: 12.5px;\n  line-height: 1.7;\n  color: var(--ink2);\n}\n\n@media (max-width: 768px) {\n  .compare-table thead {\n    display: none;\n  }\n  .compare-table tr {\n    display: block;\n    padding: 1rem 0;\n    border-bottom: 1px solid var(--border);\n  }\n  .compare-table td {\n    display: block;\n    padding: 0.25rem 0;\n    width: 100% !important;\n    border-bottom: none;\n  }\n  .col-tool {\n    font-size: 16px;\n    margin-bottom: 0.25rem;\n  }\n  .col-free {\n    margin-top: 0.25rem;\n  }\n}\n  </style>\n\n  <h3 class=\"compare-title\">So sánh nhanh trước khi đi vào từng tool</h3>\n\n  <div class=\"compare-table-wrapper\">\n<table class=\"compare-table\">\n  <thead>\n    <tr>\n      <th>Tool</th>\n      <th>Mạnh ở</th>\n      <th>Free?</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"col-tool\">Google AI Studio</td>\n      <td class=\"col-strength\">Prompt → code nhanh, model mạnh nhất, không giới hạn</td>\n      <td class=\"col-free\">\n        <div class=\"free-status\">\n          <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\">\n            <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"var(--success)\" stroke=\"var(--success)\"></rect>\n            <path d=\"M9 12l2 2 4-4\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          </svg>\n          <span>Hoàn toàn</span>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"col-tool\">Stitch</td>\n      <td class=\"col-strength\">Upload ảnh tham khảo → AI nhái theo. Hoặc ghi Prompt, giao diện khá đẹp</td>\n      <td class=\"col-free\">\n        <div class=\"free-status\">\n          <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\">\n            <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"var(--success)\" stroke=\"var(--success)\"></rect>\n            <path d=\"M9 12l2 2 4-4\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          </svg>\n          <span>(beta)</span>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"col-tool\">Base44</td>\n      <td class=\"col-strength\">Giao diện đẹp, mình ưu tiên dùng này nhất</td>\n      <td class=\"col-free\">\n        <div class=\"free-status\">\n          <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\">\n            <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"var(--success)\" stroke=\"var(--success)\"></rect>\n            <path d=\"M9 12l2 2 4-4\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          </svg>\n          <span>Giới hạn</span>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"col-tool\">Lovable</td>\n      <td class=\"col-strength\">Giao diện đẹp, mình cũng ưu tiên này nhưng loveable rất dễ hết credit</td>\n      <td class=\"col-free\">\n        <div class=\"free-status\">\n          <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\">\n            <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"var(--success)\" stroke=\"var(--success)\"></rect>\n            <path d=\"M9 12l2 2 4-4\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          </svg>\n          <span>Giới hạn</span>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"col-tool\">Figma Make</td>\n      <td class=\"col-strength\">Tạo cũng rất đẹp, bạn nào có giao diện từ file Figma thì Figma Make tạo thẳng web thì thiết kế đó luôn</td>\n      <td class=\"col-free\">\n        <div class=\"free-status\">\n          <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\">\n            <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"var(--success)\" stroke=\"var(--success)\"></rect>\n            <path d=\"M9 12l2 2 4-4\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          </svg>\n          <span>Giới hạn</span>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"col-tool\">Claude Design</td>\n      <td class=\"col-strength\">Rất đẹp và rất mạnh, nhưng mình ko ưu tiên dùng vì…đắt</td>\n      <td class=\"col-free\">\n        <div class=\"free-status\">\n          <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\">\n            <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"var(--success)\" stroke=\"var(--success)\"></rect>\n            <path d=\"M9 12l2 2 4-4\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          </svg>\n          <span>đắt, phải có tài khoản Claude Pro trở lên mới có</span>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"col-tool\">Replit</td>\n      <td class=\"col-strength\">Khá đẹp, là web toàn diện như Loveable hay Base44</td>\n      <td class=\"col-free\">\n        <div class=\"free-status\">\n          <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\">\n            <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"var(--success)\" stroke=\"var(--success)\"></rect>\n            <path d=\"M9 12l2 2 4-4\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          </svg>\n          <span>Giới hạn</span>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  </div>\n\n  <div class=\"compare-note\">\n<p>* <strong>Lưu ý:</strong> Hướng dẫn chi tiết từng tool – cách dùng từng bước, tip, lỗi hay gặp – mình sẽ làm trong các bài blog riêng, mỗi tool một bài.</p>\n  </div>\n</section>"
      },
      {
        "type": "html",
        "html": "<section class=\"problem-solution-section\" aria-label=\"Vấn đề và giải pháp thiết kế\">\n  <style>\n.problem-solution-section {\n  margin: 2.5rem 0;\n}\n.sec-title {\n  font-family: var(--sans);\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ink);\n  margin: 0 0 0.5rem 0;\n  letter-spacing: -0.02em;\n}\n.sec-subtitle {\n  font-family: var(--sans);\n  font-size: 14.5px;\n  color: var(--ink2);\n  margin-bottom: 1.5rem;\n  line-height: 1.6;\n}\n.outcomes-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  margin-bottom: 1.5rem;\n}\n.outcome-card {\n  background: var(--bg2);\n  border: 1px solid var(--border);\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.card-badge {\n  display: inline-block;\n  align-self: flex-start;\n  font-family: var(--mono);\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 3px 8px;\n  border: 1px solid var(--border);\n  margin-bottom: 1rem;\n}\n.badge-generic {\n  background: color-mix(in srgb, var(--accent) 8%, var(--bg2));\n  color: var(--accent);\n  border-color: color-mix(in srgb, var(--accent) 30%, var(--border));\n}\n.badge-mismatch {\n  background: color-mix(in srgb, #ef4444 8%, var(--bg2));\n  color: #ef4444;\n  border-color: color-mix(in srgb, #ef4444 30%, var(--border));\n}\n.card-title {\n  font-family: var(--sans);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--ink);\n  margin: 0 0 0.75rem 0;\n  line-height: 1.3;\n}\n.card-desc {\n  font-family: var(--sans);\n  font-size: 13.5px;\n  color: var(--ink2);\n  line-height: 1.5;\n  margin: 0;\n}\n.insight-callout {\n  border: 1px solid var(--border);\n  background: var(--bg);\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.insight-title {\n  font-family: var(--display);\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--accent);\n  margin-bottom: 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.insight-text {\n  font-family: var(--sans);\n  font-size: 14.5px;\n  line-height: 1.6;\n  color: var(--ink);\n  margin: 0;\n}\n.solution-hero {\n  background: var(--ink);\n  color: var(--bg);\n  border: 1px solid var(--border);\n  padding: 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 4px 4px 0px var(--accent);\n}\n.solution-content {\n  flex: 1;\n}\n.solution-label {\n  font-family: var(--mono);\n  font-size: 10px;\n  color: var(--accent);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.solution-title {\n  font-family: var(--sans);\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 0.75rem 0;\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n.solution-desc {\n  font-family: var(--sans);\n  font-size: 13.5px;\n  color: color-mix(in srgb, var(--bg) 80%, transparent);\n  line-height: 1.55;\n  margin: 0;\n}\n.solution-visual {\n  font-family: var(--mono);\n  font-size: 12px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 0.75rem 1.25rem;\n  border-radius: 4px;\n  color: var(--accent);\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n\n@media (max-width: 640px) {\n  .outcomes-grid {\n    grid-template-columns: 1fr;\n    gap: 0.85rem;\n  }\n  .solution-hero {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.25rem;\n    padding: 1.5rem;\n  }\n  .solution-visual {\n    align-self: stretch;\n    justify-content: center;\n  }\n}\n  </style>\n\n  <h3 class=\"sec-title\">Vấn đề thật: AI code UI đúng ý khó hơn tưởng tượng</h3>\n  <p class=\"sec-subtitle\">Khi bạn nhờ AI trong Cursor hay Claude Code viết giao diện từ đầu, thường ra một trong hai kết quả:</p>\n\n  <div class=\"outcomes-grid\">\n<div class=\"outcome-card\">\n  <span class=\"card-badge badge-generic\">Kết quả 1</span>\n  <h4 class=\"card-title\">UI generic, thiếu bản sắc</h4>\n  <p class=\"card-desc\">Giao diện trông na ná mọi app AI khác — màu xanh hoặc gradient mặc định, font hệ thống, layout cứng nhắc và thiếu tinh tế.</p>\n</div>\n<div class=\"outcome-card\">\n  <span class=\"card-badge badge-mismatch\">Kết quả 2</span>\n  <h4 class=\"card-title\">Lệch pha so với hình dung</h4>\n  <p class=\"card-desc\">Giao diện không giống thứ bạn mong muốn. Vì bạn mô tả bằng chữ (prompt), AI sẽ tự hiểu và thiết kế theo cách của riêng nó.</p>\n</div>\n  </div>\n\n  <div class=\"insight-callout\">\n<div class=\"insight-title\">\n  <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\n    <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n    <line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line>\n    <line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>\n  </svg>\n  <span>Bản chất cốt lõi</span>\n</div>\n<p class=\"insight-text\">Vấn đề không phải do AI dở. Bản chất là <strong>AI cần context cụ thể về design</strong> (mã màu chính xác, font chữ, quy chuẩn spacing, quy tắc component) thay vì chỉ nhận những câu lệnh mô tả chung chung.</p>\n  </div>\n\n  <div class=\"solution-hero\">\n<div class=\"solution-content\">\n  <span class=\"solution-label\">Chìa khóa giải quyết</span>\n  <h4 class=\"solution-title\">Đó là lý do DESIGN.md ra đời</h4>\n  <p class=\"solution-desc\">DESIGN.md đóng vai trò như một bản đặc tả thiết kế giúp đồng bộ hóa ngôn ngữ visual giữa bạn và AI, hướng dẫn AI code chính xác style mong muốn.</p>\n</div>\n<div class=\"solution-visual\">\n  <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\n    <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n    <polyline points=\"14 2 14 8 20 8\"></polyline>\n    <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n    <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n    <polyline points=\"10 9 9 9 8 9\"></polyline>\n  </svg>\n  <span>DESIGN.md</span>\n</div>\n  </div>\n</section>"
      }
    ]
  },
  {
    "id": "4.2",
    "slug": "bai-4-2-buoc-1-tim-web-co-giao-dien-minh-thich",
    "lessonSlug": "dung-giao-dien-web-nhanh-voi-ai",
    "lessonId": 4,
    "lessonTitle": "Bài 4: Dựng giao diện web nhanh với AI",
    "lessonTitleEm": "với AI",
    "prevSlug": "bai-4-1-mo-dau",
    "nextSlug": "bai-4-3-buoc-2-lay-design-md-tu-web-do",
    "prevTitle": "Mở đầu",
    "nextTitle": "Bước 2 — Lấy DESIGN.md từ web đó",
    "eyebrow": "Tìm tham khảo",
    "title": "Bước 1 — Tìm web có giao diện mình thích",
    "titleEm": "",
    "desc": "Chưa có ý tưởng giao diện? Đừng bắt đầu từ tờ giấy trắng. Tìm một web trông đúng thứ mình muốn làm — rồi nhái theo.",
    "duration": "~5 phút",
    "totalSubs": 6,
    "currentIndex": 2,
    "content": [
      {
        "type": "p",
        "text": "Chưa có ý tưởng giao diện? Đừng bắt đầu từ tờ giấy trắng. Tìm một web trông đúng thứ mình muốn làm — rồi nhái theo."
      },
      {
        "type": "infographic",
        "label": "Tìm reference trước khi prompt",
        "steps": [
          {
            "label": "01",
            "title": "Chọn web gần mục tiêu",
            "desc": "Tìm một trang có mood, cấu trúc hoặc ngành giống thứ bạn muốn build."
          },
          {
            "label": "02",
            "title": "Ghi lại pattern",
            "desc": "Nhìn nav, hero, card, bảng giá, form, spacing, màu và cách trang dẫn mắt người xem."
          },
          {
            "label": "03",
            "title": "Dùng làm brief",
            "desc": "Đưa reference đó vào AI để giảm đoán mò và tăng khả năng ra UI đúng ý."
          }
        ],
        "aside": {
          "label": "Không bắt đầu trắng",
          "title": "Reference giúp AI hiểu gu thiết kế nhanh hơn",
          "desc": "Bạn không cần tự nghĩ từ đầu; chọn cái gần đúng rồi chỉnh theo nhu cầu của mình."
        }
      },
      {
        "type": "html",
        "html": "<section class=\"reference-showcase\" aria-label=\"Nguồn tìm tham khảo thiết kế\">\n  <style>\n.reference-showcase {\n  margin: 3rem 0;\n  padding: 1.5rem;\n  background: var(--bg);\n  border: 2px solid var(--border);\n  box-shadow: 6px 6px 0px var(--border);\n}\n.ref-title {\n  font-family: var(--sans);\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--ink);\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.ref-title::after {\n  content: \"\";\n  flex-grow: 1;\n  height: 2px;\n  background: var(--border);\n  margin-left: 0.5rem;\n}\n.ref-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.25rem;\n}\n.ref-card {\n  background: var(--bg2);\n  border: 2px solid var(--border);\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.15s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.15s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  min-height: 220px;\n  box-shadow: 4px 4px 0px var(--border);\n}\n.ref-card:hover {\n  transform: translate(-4px, -4px);\n  box-shadow: 8px 8px 0px var(--accent);\n  border-color: var(--accent);\n}\n.ref-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.ref-icon-wrapper {\n  width: 36px;\n  height: 36px;\n  background: var(--bg);\n  border: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--ink);\n  transition: border-color 0.15s, color 0.15s, background-color 0.15s;\n}\n.ref-card:hover .ref-icon-wrapper {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: color-mix(in srgb, var(--accent) 8%, var(--bg));\n}\n.ref-badge {\n  font-family: var(--mono);\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 3px 8px;\n  background: var(--bg);\n  border: 1px solid var(--border);\n  color: var(--ink2);\n}\n.ref-card:hover .ref-badge {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.ref-name {\n  font-family: var(--sans);\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--ink);\n  margin: 0 0 0.5rem 0;\n}\n.ref-name a {\n  color: inherit;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.ref-name a:hover {\n  color: var(--accent);\n}\n.ref-desc {\n  font-family: var(--sans);\n  font-size: 13px;\n  color: var(--ink2);\n  line-height: 1.5;\n  margin: 0 0 1rem 0;\n  flex-grow: 1;\n}\n.ref-card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px dashed var(--border);\n  padding-top: 0.75rem;\n  margin-top: auto;\n}\n.ref-link-text {\n  font-family: var(--mono);\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--muted);\n  letter-spacing: 0.05em;\n}\n.ref-card:hover .ref-link-text {\n  color: var(--accent);\n}\n.ref-arrow {\n  font-family: var(--mono);\n  font-size: 14px;\n  color: var(--muted);\n  transition: transform 0.15s ease, color 0.15s ease;\n}\n.ref-card:hover .ref-arrow {\n  color: var(--accent);\n  transform: translateX(4px);\n}\n\n@media (max-width: 480px) {\n  .ref-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .ref-card {\n    min-height: auto;\n    padding: 1rem;\n  }\n}\n  </style>\n\n  <h4 class=\"ref-title\">Nguồn tìm tham khảo</h4>\n  <div class=\"ref-grid\">\n<!-- Card 1: Mobbin -->\n<article class=\"ref-card\">\n  <div>\n    <div class=\"ref-card-header\">\n      <div class=\"ref-icon-wrapper\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect>\n          <line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>\n        </svg>\n      </div>\n      <span class=\"ref-badge\">Thực tế · App/Web</span>\n    </div>\n    <h5 class=\"ref-name\">\n      <a href=\"https://mobbin.com/\" target=\"_blank\" rel=\"noreferrer\">Mobbin.com</a>\n    </h5>\n    <p class=\"ref-desc\">Thư viện screenshot UI/UX thực tế từ hàng nghìn app và web. Cực tốt để tìm kiếm theo pattern hoặc industry.</p>\n  </div>\n  <div class=\"ref-card-footer\">\n    <span class=\"ref-link-text\">Truy cập</span>\n    <span class=\"ref-arrow\">→</span>\n  </div>\n</article>\n\n<!-- Card 2: Dribbble -->\n<article class=\"ref-card\">\n  <div>\n    <div class=\"ref-card-header\">\n      <div class=\"ref-icon-wrapper\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n          <path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72\"></path>\n          <path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10\"></path>\n          <path d=\"M2 12h20\"></path>\n        </svg>\n      </div>\n      <span class=\"ref-badge\">Visual Concept</span>\n    </div>\n    <h5 class=\"ref-name\">\n      <a href=\"https://dribbble.com/\" target=\"_blank\" rel=\"noreferrer\">Dribbble.com</a>\n    </h5>\n    <p class=\"ref-desc\">Nơi chia sẻ các concept UI phong phú từ các designer trên toàn thế giới, cực kỳ nhiều phong cách nghệ thuật đa dạng.</p>\n  </div>\n  <div class=\"ref-card-footer\">\n    <span class=\"ref-link-text\">Truy cập</span>\n    <span class=\"ref-arrow\">→</span>\n  </div>\n</article>\n\n<!-- Card 3: Pinterest -->\n<article class=\"ref-card\">\n  <div>\n    <div class=\"ref-card-header\">\n      <div class=\"ref-icon-wrapper\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <path d=\"M12 2a10 10 0 0 0-3.3 19.4c-.1-.9-.2-2.3 0-3.3l1.3-5.5s-.3-.7-.3-1.7c0-1.6.9-2.8 2-2.8 1 0 1.5.8 1.5 1.7 0 1-.6 2.5-.9 3.9-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.9-2.3 3.9-5.6 0-3-2.1-5-5.1-5-3.5 0-5.6 2.6-5.6 5.4 0 1 .4 2.2.9 2.8.1.1.1.2 0 .6l-.3 1.2c-.1.3-.3.4-.6.3-2.1-1-3.4-4-3.4-6.5C3 7.8 7.3 3 12.5 3c4.2 0 7.4 3 7.4 7 0 4.2-2.6 7.5-6.3 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1.1-1.1 2.5-1.6 3.4A10 10 0 1 0 12 2z\"></path>\n        </svg>\n      </div>\n      <span class=\"ref-badge\">Ý tưởng · Mood</span>\n    </div>\n    <h5 class=\"ref-name\">\n      <a href=\"https://pinterest.com/\" target=\"_blank\" rel=\"noreferrer\">Pinterest.com</a>\n    </h5>\n    <p class=\"ref-desc\">Tìm kiếm với từ khóa kiểu \"minimal web design\", \"SaaS landing page\", \"dark dashboard UI\" để ra moodboard nhanh.</p>\n  </div>\n  <div class=\"ref-card-footer\">\n    <span class=\"ref-link-text\">Truy cập</span>\n    <span class=\"ref-arrow\">→</span>\n  </div>\n</article>\n\n<!-- Card 4: Behance -->\n<article class=\"ref-card\">\n  <div>\n    <div class=\"ref-card-header\">\n      <div class=\"ref-icon-wrapper\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <path d=\"M12 12H3V8h9v4z\"></path>\n          <path d=\"M12 16H3v-2h9v2z\"></path>\n          <path d=\"M18 10h4v2h-4v-2z\"></path>\n          <path d=\"M21 7h-2.5C17 7 16 8.5 16 10s1 3 2.5 3H21\"></path>\n        </svg>\n      </div>\n      <span class=\"ref-badge\">Case Studies</span>\n    </div>\n    <h5 class=\"ref-name\">\n      <a href=\"https://behance.net/\" target=\"_blank\" rel=\"noreferrer\">Behance.net</a>\n    </h5>\n    <p class=\"ref-desc\">Các portfolio thiết kế chuyên sâu từ các studio lớn, thường đi kèm phân tích breakdown quá trình thiết kế chi tiết.</p>\n  </div>\n  <div class=\"ref-card-footer\">\n    <span class=\"ref-link-text\">Truy cập</span>\n    <span class=\"ref-arrow\">→</span>\n  </div>\n</article>\n\n<!-- Card 5: Dark.design -->\n<article class=\"ref-card\">\n  <div>\n    <div class=\"ref-card-header\">\n      <div class=\"ref-icon-wrapper\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>\n        </svg>\n      </div>\n      <span class=\"ref-badge\">Dark Mode UI</span>\n    </div>\n    <h5 class=\"ref-name\">\n      <a href=\"https://dark.design/\" target=\"_blank\" rel=\"noreferrer\">Dark.design</a>\n    </h5>\n    <p class=\"ref-desc\">Nếu bạn muốn thiết kế giao diện tối (Dark Mode), đây là thư viện tổng hợp các web có dark UI xuất sắc nhất.</p>\n  </div>\n  <div class=\"ref-card-footer\">\n    <span class=\"ref-link-text\">Truy cập</span>\n    <span class=\"ref-arrow\">→</span>\n  </div>\n</article>\n  </div>\n</section>"
      }
    ]
  },
  {
    "id": "4.3",
    "slug": "bai-4-3-buoc-2-lay-design-md-tu-web-do",
    "lessonSlug": "dung-giao-dien-web-nhanh-voi-ai",
    "lessonId": 4,
    "lessonTitle": "Bài 4: Dựng giao diện web nhanh với AI",
    "lessonTitleEm": "với AI",
    "prevSlug": "bai-4-2-buoc-1-tim-web-co-giao-dien-minh-thich",
    "nextSlug": "bai-4-4-cach-lay-design-md",
    "prevTitle": "Bước 1 — Tìm web có giao diện mình thích",
    "nextTitle": "Cách lấy DESIGN.md",
    "eyebrow": "Design System",
    "title": "Bước 2 — Lấy DESIGN.md từ web đó",
    "titleEm": "",
    "desc": "<codeDESIGN.md</code là một file văn bản (markdown) chứa <strongtoàn bộ design system của một website</strong — màu sắc, font, spacing, cách component trông như thế nào — được viết dưới dạng mà AI coding agent đọc hiểu đ",
    "duration": "~5 phút",
    "totalSubs": 6,
    "currentIndex": 3,
    "content": [
      {
        "type": "p",
        "text": "<code>DESIGN.md</code> là một file văn bản (markdown) chứa <strong>toàn bộ design system của một website</strong> — màu sắc, font, spacing, cách component trông như thế nào — được viết dưới dạng mà AI coding agent đọc hiểu được."
      },
      {
        "type": "infographic",
        "label": "DESIGN.md biến visual thành context",
        "steps": [
          {
            "label": "01",
            "title": "Web mẫu",
            "desc": "Bạn chọn một website có style muốn học theo."
          },
          {
            "label": "02",
            "title": "DESIGN.md",
            "desc": "Tool extract màu, font, spacing, component rules thành một file markdown."
          },
          {
            "label": "03",
            "title": "AI code theo spec",
            "desc": "AI đọc file này để tạo UI nhất quán hơn thay vì tự bịa style."
          }
        ],
        "aside": {
          "label": "Context cụ thể",
          "title": "DESIGN.md mạnh hơn câu mô tả chung chung",
          "desc": "AI có token thiết kế cụ thể: mã màu, font, border, spacing và component behavior."
        }
      },
      {
        "type": "p",
        "text": "Ví dụ một đoạn trong <code>DESIGN.md</code> của Linear (tool quản lý task nổi tiếng):"
      },
      {
        "type": "html",
        "html": "<section class=\"design-spec-showcase\" aria-label=\"Ví dụ DESIGN.md và UI kết quả\">\n  <style>\n.design-spec-showcase {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  gap: 1.5rem;\n  margin: 2.5rem 0;\n}\n.spec-code-panel {\n  background: var(--bg);\n  border: 2px solid var(--border);\n  box-shadow: 4px 4px 0px var(--border);\n  display: flex;\n  flex-direction: column;\n}\n.editor-header {\n  background: var(--bg2);\n  border-bottom: 2px solid var(--border);\n  padding: 0.5rem 0.75rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.editor-controls {\n  display: flex;\n  gap: 5px;\n}\n.editor-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid var(--border);\n}\n.editor-dot.red { background: #ff5f56; }\n.editor-dot.yellow { background: #ffbd2e; }\n.editor-dot.green { background: #27c93f; }\n\n.editor-tabs {\n  display: flex;\n  margin-left: 1rem;\n}\n.editor-tab {\n  background: var(--bg);\n  border: 2px solid var(--border);\n  border-bottom: none;\n  padding: 3px 12px;\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--ink);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n  top: 9px;\n}\n.editor-content {\n  background: var(--bg) !important;\n  border-left: none !important;\n  padding: 1.25rem !important;\n  margin: 0 !important;\n  overflow-x: auto;\n  font-family: var(--mono);\n  font-size: 13px;\n  line-height: 1.6;\n  color: var(--ink);\n}\n.code-h { color: #0f172a; font-weight: 700; }\n.code-prop { color: #334155; }\n.code-val { color: #b91c1c; font-weight: 500; }\n\n.spec-preview-panel {\n  display: flex;\n  flex-direction: column;\n}\n.preview-window {\n  background: #0f0f0f;\n  border: 2px solid var(--border);\n  box-shadow: 4px 4px 0px var(--border);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 320px;\n}\n.preview-header {\n  background: var(--bg2);\n  border-bottom: 2px solid var(--border);\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.preview-address {\n  flex-grow: 1;\n  background: var(--bg);\n  border: 1px solid var(--border);\n  font-family: var(--mono);\n  font-size: 10px;\n  padding: 2px 8px;\n  color: var(--ink2);\n}\n.preview-body {\n  padding: 1.25rem;\n  background: #0F0F0F;\n  color: #FFFFFF;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  font-family: 'Inter', system-ui, sans-serif;\n}\n.mock-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #2A2A2A;\n  padding-bottom: 0.5rem;\n}\n.mock-logo {\n  font-weight: 700;\n  font-size: 13px;\n  color: #FFFFFF;\n  letter-spacing: -0.02em;\n}\n.mock-nav-items {\n  display: flex;\n  gap: 12px;\n}\n.mock-nav-item {\n  font-family: var(--mono);\n  font-size: 10px;\n  text-transform: uppercase;\n  color: #8A8A8A;\n  letter-spacing: 0.05em;\n}\n.mock-nav-item.active {\n  color: #FFFFFF;\n}\n.mock-card {\n  background: #1A1A1A;\n  border: 1px solid #2A2A2A;\n  border-radius: 0px;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.mock-card-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #FFFFFF;\n  margin: 0;\n}\n.mock-card-desc {\n  font-size: 11px;\n  color: #8A8A8A;\n  line-height: 1.5;\n  margin: 0;\n}\n.mock-btn {\n  background: #5B6AE8;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 0px;\n  padding: 6px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  align-self: flex-start;\n  transition: background-color 0.15s;\n  box-shadow: none;\n}\n.mock-btn:hover {\n  background: #6c7bf5;\n}\n\n@media (max-width: 768px) {\n  .design-spec-showcase {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n  </style>\n\n  <div class=\"spec-code-panel\">\n<div class=\"editor-header\">\n  <div class=\"editor-controls\">\n    <span class=\"editor-dot red\"></span>\n    <span class=\"editor-dot yellow\"></span>\n    <span class=\"editor-dot green\"></span>\n  </div>\n  <div class=\"editor-tabs\">\n    <div class=\"editor-tab\">\n      <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline></svg>\n      DESIGN.md\n    </div>\n  </div>\n</div>\n<pre class=\"editor-content\"><code><span class=\"code-h\">## Colors</span>\n- Background: <span class=\"code-val\">#0F0F0F</span>\n- Surface: <span class=\"code-val\">#1A1A1A</span>\n- Border: <span class=\"code-val\">#2A2A2A</span>\n- Text primary: <span class=\"code-val\">#FFFFFF</span>\n- Text muted: <span class=\"code-val\">#8A8A8A</span>\n- Accent: <span class=\"code-val\">#5B6AE8</span>\n\n<span class=\"code-h\">## Typography</span>\n- Font family: <span class=\"code-val\">Inter</span>\n- Heading: <span class=\"code-val\">600 weight, tight tracking</span>\n- Body: <span class=\"code-val\">400 weight, 1.6 line-height</span>\n\n<span class=\"code-h\">## Components</span>\n- Cards: <span class=\"code-val\">no border-radius, 1px border, #2A2A2A</span>\n- Buttons: <span class=\"code-val\">flat, no shadow, hover shifts background 10% lighter</span>\n- Nav items: <span class=\"code-val\">uppercase, DM Mono, 12px</span></code></pre>\n  </div>\n\n  <div class=\"spec-preview-panel\">\n<div class=\"preview-window\">\n  <div class=\"preview-header\">\n    <div class=\"editor-controls\">\n      <span class=\"editor-dot\" style=\"background: #ccc; border: 1px solid var(--border);\"></span>\n      <span class=\"editor-dot\" style=\"background: #ccc; border: 1px solid var(--border);\"></span>\n      <span class=\"editor-dot\" style=\"background: #ccc; border: 1px solid var(--border);\"></span>\n    </div>\n    <div class=\"preview-address\">linear.app/demo-preview</div>\n  </div>\n  <div class=\"preview-body\">\n    <nav class=\"mock-nav\">\n      <span class=\"mock-logo\">L I N E A R</span>\n      <div class=\"mock-nav-items\">\n        <span class=\"mock-nav-item active\">Issues</span>\n        <span class=\"mock-nav-item\">Cycles</span>\n        <span class=\"mock-nav-item\">Views</span>\n      </div>\n    </nav>\n    <div class=\"mock-card\">\n      <h5 class=\"mock-card-title\">LIN-104 Update workspace styling</h5>\n      <p class=\"mock-card-desc\">Redesign the spec preview blocks to use modern brutalist borders and active state highlights.</p>\n      <button class=\"mock-btn\" type=\"button\">Mark Complete</button>\n    </div>\n  </div>\n</div>\n  </div>\n</section>"
      },
      {
        "type": "p",
        "text": "Khi bạn đưa file này vào bất kì một AI IDE nào như Claude Code, Antigravity, Cursor và nói <em>\"Dùng DESIGN.md này để code giao diện\"</em> — AI có đủ thông tin để ra UI trông giống hệt trang gốc, thay vì tự bịa style."
      }
    ]
  },
  {
    "id": "4.4",
    "slug": "bai-4-4-cach-lay-design-md",
    "lessonSlug": "dung-giao-dien-web-nhanh-voi-ai",
    "lessonId": 4,
    "lessonTitle": "Bài 4: Dựng giao diện web nhanh với AI",
    "lessonTitleEm": "với AI",
    "prevSlug": "bai-4-3-buoc-2-lay-design-md-tu-web-do",
    "nextSlug": "bai-4-5-buoc-3-quang-design-md-vao-tool-ai-code-luon",
    "prevTitle": "Bước 2 — Lấy DESIGN.md từ web đó",
    "nextTitle": "Bước 3 — Quăng DESIGN.md vào tool AI, code luôn",
    "eyebrow": "Công cụ",
    "title": "Cách lấy DESIGN.md",
    "titleEm": "",
    "desc": "Cách lấy DESIGN.md",
    "duration": "~5 phút",
    "totalSubs": 6,
    "currentIndex": 4,
    "content": [
      {
        "type": "infographic",
        "label": "3 đường lấy DESIGN.md",
        "steps": [
          {
            "label": "01",
            "title": "Extension Chrome",
            "desc": "Dùng khi muốn extract trực tiếp từ bất kỳ website nào đang mở."
          },
          {
            "label": "02",
            "title": "Kho DESIGN.md có sẵn",
            "desc": "Dùng khi cần nhanh: lấy style từ các web nổi tiếng đã được cộng đồng curate."
          },
          {
            "label": "03",
            "title": "Nhập URL để generate",
            "desc": "Dùng khi không muốn cài extension nhưng vẫn cần tạo DESIGN.md từ một URL cụ thể."
          }
        ],
        "aside": {
          "label": "Chọn nhanh",
          "title": "Không cần dùng cả ba cách",
          "desc": "Chọn cách ít ma sát nhất trong tình huống hiện tại, rồi đưa file đó vào AI IDE hoặc tool tạo web."
        }
      },
      {
        "type": "html",
        "html": "<section class=\"design-acquisition-section\" aria-label=\"Cách lấy DESIGN.md và so sánh\">\n  <style>\n  .design-acquisition-section {\ndisplay: flex;\nflex-direction: column;\ngap: 2rem;\nmargin: 2rem 0;\nfont-family: var(--sans);\n  }\n  \n  /* Cards Grid */\n  .acquisition-grid {\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 1.25rem;\n  }\n  \n  .acquisition-card {\nbackground: var(--bg2);\nborder: 1px solid var(--border);\npadding: 1.5rem;\ndisplay: flex;\nflex-direction: column;\nposition: relative;\ntransition: all 0.2s ease;\n  }\n  \n  .acquisition-card:hover {\nborder-color: var(--accent);\nbackground: var(--bg3);\n  }\n  \n  .acq-badge {\ndisplay: inline-block;\nalign-self: flex-start;\nfont-family: var(--mono);\nfont-size: 9px;\nfont-weight: 700;\ntext-transform: uppercase;\nletter-spacing: 0.08em;\npadding: 2px 8px;\nborder: 1px solid var(--border);\nmargin-bottom: 1rem;\nbackground: color-mix(in srgb, var(--accent) 8%, var(--bg2));\ncolor: var(--accent);\n  }\n  \n  .acq-icon {\ncolor: var(--accent);\nmargin-bottom: 0.75rem;\ndisplay: inline-flex;\nalign-items: center;\n  }\n  \n  .acq-title {\nfont-family: var(--sans);\nfont-size: 15px;\nfont-weight: 700;\ncolor: var(--ink);\nmargin: 0 0 0.5rem 0;\nline-height: 1.3;\n  }\n  \n  .acq-desc {\nfont-family: var(--sans);\nfont-size: 13px;\ncolor: var(--ink2);\nline-height: 1.55;\nmargin-bottom: 1rem;\n  }\n  \n  .acq-link-btn {\ndisplay: inline-flex;\nalign-items: center;\ngap: 6px;\nbackground: var(--bg);\ncolor: var(--ink);\nborder: 1px solid var(--border);\npadding: 6px 12px;\nfont-family: var(--mono);\nfont-size: 11px;\nfont-weight: 600;\ntext-decoration: none;\nmargin-bottom: 0.75rem;\nalign-self: flex-start;\ntransition: all 0.15s;\n  }\n  .acq-link-btn:hover {\nbackground: var(--ink);\ncolor: var(--bg);\nborder-color: var(--ink);\n  }\n  \n  .acq-steps {\nmargin: 0;\npadding: 0 0 0 1.1rem;\nfont-family: var(--sans);\nfont-size: 13px;\ncolor: var(--ink2);\nline-height: 1.5;\n  }\n  .acq-steps li {\nmargin-bottom: 0.4rem;\n  }\n  .acq-steps li:last-child {\nmargin-bottom: 0;\n  }\n  \n  .acq-note {\nmargin-top: auto;\nfont-family: var(--mono);\nfont-size: 11.5px;\nbackground: var(--bg);\nborder-left: 2px solid var(--accent);\npadding: 8px 12px;\ncolor: var(--ink2);\nline-height: 1.4;\n  }\n\n  .acq-links-list {\ndisplay: flex;\nflex-direction: column;\ngap: 6px;\nmargin-bottom: 0.75rem;\n  }\n  .acq-sub-link {\ndisplay: inline-flex;\nalign-items: center;\ngap: 4px;\nfont-size: 13px;\nfont-weight: 600;\ncolor: var(--ink);\ntext-decoration: underline;\n  }\n  .acq-sub-link:hover {\ncolor: var(--accent);\n  }\n\n  /* Comparison native styles matching the web */\n  .native-compare-wrapper {\nmargin-top: 1.5rem;\n  }\n  .native-compare-title {\nfont-family: var(--sans);\nfont-size: 1.25rem;\nfont-weight: 700;\nmargin: 0 0 1rem 0;\ncolor: var(--ink);\n  }\n  .native-compare-table {\nborder: 1px solid var(--border);\nwidth: 100%;\nbackground: var(--bg);\nborder-collapse: collapse;\n  }\n  .native-compare-row {\ndisplay: grid;\ngrid-template-columns: 1fr 1fr;\nborder-bottom: 1px solid var(--border);\n  }\n  .native-compare-row:last-child {\nborder-bottom: none;\n  }\n  .native-compare-row.header {\nbackground: var(--bg2);\nborder-bottom: 2px solid var(--border);\n  }\n  .native-compare-cell {\npadding: 1rem 1.5rem;\nborder-right: 1px solid var(--border);\nfont-family: var(--sans);\nfont-size: 13.5px;\nline-height: 1.6;\ncolor: var(--ink2);\ndisplay: flex;\nalign-items: center;\ngap: 8px;\n  }\n  .native-compare-cell:last-child {\nborder-right: none;\n  }\n  .native-compare-row.header .native-compare-cell {\nfont-family: var(--mono);\nfont-size: 10px;\ncolor: var(--muted);\nletter-spacing: 0.08em;\ntext-transform: uppercase;\npadding-top: 0.8rem;\npadding-bottom: 0.8rem;\n  }\n  .cell-cross {\ncolor: var(--muted);\ntext-decoration: line-through;\nopacity: 0.7;\n  }\n  .cell-check {\ncolor: var(--ink);\nfont-weight: 400;\n  }\n  .cell-check strong {\ncolor: var(--accent);\nfont-weight: 700;\n  }\n  \n  @media (max-width: 768px) {\n.acquisition-grid {\n  grid-template-columns: 1fr;\n}\n.native-compare-row {\n  grid-template-columns: 1fr;\n}\n.native-compare-cell {\n  border-right: none;\n  border-bottom: 1px solid var(--border);\n}\n.native-compare-cell:last-child {\n  border-bottom: none;\n}\n.native-compare-row.header {\n  display: none;\n}\n  }\n  </style>\n  \n  <div class=\"acquisition-grid\">\n<!-- CÁCH 1 -->\n<div class=\"acquisition-card\">\n  <span class=\"acq-badge\">Cách 01</span>\n  <div class=\"acq-icon\">\n    <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line></svg>\n  </div>\n  <h4 class=\"acq-title\">Extension Chrome</h4>\n  <p class=\"acq-desc\">Lấy DESIGN.md trực tiếp từ bất kỳ website nào đang mở trên Chrome.</p>\n  \n  <a href=\"https://chromewebstore.google.com/detail/designmd-style-extractor/ogpdnchdjiibhobphelbbkemnnemkfma\" target=\"_blank\" rel=\"noreferrer\" class=\"acq-link-btn\">\n    <span>Cài Extension</span>\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline></svg>\n  </a>\n  \n  <ol class=\"acq-steps\">\n    <li>Bật Extension tại trang web bạn chọn để sinh file <code>DESIGN.md</code> ngay.</li>\n    <li>Copy specs lưu vào file <code>DESIGN.md</code> ở thư mục gốc project.</li>\n  </ol>\n</div>\n\n<!-- CÁCH 2 -->\n<div class=\"acquisition-card\">\n  <span class=\"acq-badge\">Cách 02</span>\n  <div class=\"acq-icon\">\n    <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>\n  </div>\n  <h4 class=\"acq-title\">Kho DESIGN.md có sẵn</h4>\n  <p class=\"acq-desc\">Lấy style specs đã được curator cộng đồng chuẩn hóa từ các thương hiệu lớn.</p>\n  \n  <div class=\"acq-links-list\">\n    <a href=\"https://getdesign.md/\" target=\"_blank\" rel=\"noreferrer\" class=\"acq-sub-link\">\n      <span>getdesign.md</span>\n      <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline></svg>\n    </a>\n    <a href=\"https://designmd.co/\" target=\"_blank\" rel=\"noreferrer\" class=\"acq-sub-link\">\n      <span>designmd.co</span>\n      <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline></svg>\n    </a>\n  </div>\n  \n  <div class=\"acq-note\">\n    <strong>Lưu ý:</strong> Specs do cộng đồng trích xuất từ visual thực tế của Linear, Stripe, Notion... dùng làm điểm bắt đầu lý tưởng.\n  </div>\n</div>\n\n<!-- CÁCH 3 -->\n<div class=\"acquisition-card\">\n  <span class=\"acq-badge\">Cách 03</span>\n  <div class=\"acq-icon\">\n    <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path></svg>\n  </div>\n  <h4 class=\"acq-title\">Crawl từ URL bất kỳ</h4>\n  <p class=\"acq-desc\">Nhập địa chỉ URL để AI tự động phân tích CSS & visual và tạo DESIGN.md.</p>\n  \n  <a href=\"https://designmd.me/\" target=\"_blank\" rel=\"noreferrer\" class=\"acq-link-btn\">\n    <span>designmd.me</span>\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline></svg>\n  </a>\n  \n  <p class=\"acq-desc\" style=\"margin-bottom: 0;\">Dán link trang web bạn thích vào ô nhập, đợi vài giây để nhận file specs tương ứng.</p>\n</div>\n  </div>\n\n  <div class=\"native-compare-wrapper\">\n<h3 class=\"native-compare-title\">Tại sao DESIGN.md mạnh hơn mô tả thông thường?</h3>\n\n<div class=\"native-compare-table\">\n  <div class=\"native-compare-row header\">\n    <div class=\"native-compare-cell\">Cách mô tả cũ (Mơ hồ)</div>\n    <div class=\"native-compare-cell\">Dùng DESIGN.md (Chuẩn xác)</div>\n  </div>\n  \n  <div class=\"native-compare-row\">\n    <div class=\"native-compare-cell\">\n      <span class=\"cell-cross\">❌ \"Làm giao diện tối, trông minimal\"</span>\n    </div>\n    <div class=\"native-compare-cell\">\n      <span class=\"cell-check\">✅ AI có <strong>hex code</strong> chính xác, <strong>font name</strong>, <strong>spacing value</strong></span>\n    </div>\n  </div>\n  \n  <div class=\"native-compare-row\">\n    <div class=\"native-compare-cell\">\n      <span class=\"cell-cross\">❌ AI đoán style → thường bị sai lệch</span>\n    </div>\n    <div class=\"native-compare-cell\">\n      <span class=\"cell-check\">✅ AI đọc đặc tả specs → triển khai ra đúng</span>\n    </div>\n  </div>\n  \n  <div class=\"native-compare-row\">\n    <div class=\"native-compare-cell\">\n      <span class=\"cell-cross\">❌ Mỗi component mới lại phải mô tả lại style</span>\n    </div>\n    <div class=\"native-compare-cell\">\n      <span class=\"cell-check\">✅ File <code>DESIGN.md</code> dùng chung cho toàn bộ project</span>\n    </div>\n  </div>\n  \n  <div class=\"native-compare-row\">\n    <div class=\"native-compare-cell\">\n      <span class=\"cell-cross\">❌ Khó duy trì sự nhất quán (consistency)</span>\n    </div>\n    <div class=\"native-compare-cell\">\n      <span class=\"cell-check\">✅ Mọi component lớn nhỏ đều theo cùng một nguồn</span>\n    </div>\n  </div>\n</div>\n  </div>\n</section>"
      }
    ]
  },
  {
    "id": "4.5",
    "slug": "bai-4-5-buoc-3-quang-design-md-vao-tool-ai-code-luon",
    "lessonSlug": "dung-giao-dien-web-nhanh-voi-ai",
    "lessonId": 4,
    "lessonTitle": "Bài 4: Dựng giao diện web nhanh với AI",
    "lessonTitleEm": "với AI",
    "prevSlug": "bai-4-4-cach-lay-design-md",
    "nextSlug": "bai-4-6-buoc-4-tai-code-ve-dung-ai-ide-hoan-thien-tiep",
    "prevTitle": "Cách lấy DESIGN.md",
    "nextTitle": "Bước 4 — Tải code về, dùng AI IDE hoàn thiện tiếp",
    "eyebrow": "Tạo giao diện",
    "title": "Bước 3 — Quăng DESIGN.md vào tool AI, code luôn",
    "titleEm": "",
    "desc": "Đây là bước quan trọng nhất. Thay vì dùng các AI IDE viết từng dòng code, bạn quăng DESIGN.md thẳng vào các tool AI để nó <strongcode giao diện và tính năng cùng một lúc</strong.",
    "duration": "~5 phút",
    "totalSubs": 6,
    "currentIndex": 5,
    "content": [
      {
        "type": "p",
        "text": "Đây là bước quan trọng nhất. Thay vì dùng các AI IDE viết từng dòng code, bạn quăng DESIGN.md thẳng vào các tool AI để nó <strong>code giao diện và tính năng cùng một lúc</strong>."
      },
      {
        "type": "infographic",
        "label": "Quăng DESIGN.md vào tool AI",
        "steps": [
          {
            "label": "01",
            "title": "Paste DESIGN.md",
            "desc": "Đưa toàn bộ design system vào đầu prompt để AI có style guide rõ ràng."
          },
          {
            "label": "02",
            "title": "Mô tả app cần build",
            "desc": "Nói rõ loại web, section cần có, dữ liệu mẫu, CTA và trạng thái responsive."
          },
          {
            "label": "03",
            "title": "Lặp để sửa UI",
            "desc": "Xem output, yêu cầu sửa màu, spacing, section, copy hoặc behavior cho đến khi dùng được."
          }
        ],
        "aside": {
          "label": "Tool chỉ là phương tiện",
          "title": "Brief tốt mới quyết định output",
          "desc": "Google AI Studio, Base44, Lovable hay v0 đều tốt hơn khi nhận context thiết kế đủ rõ."
        }
      },
      {
        "type": "p",
        "text": "Đây là cách mình hay làm:"
      },
      {
        "type": "html",
        "html": "<section class=\"ai-tools-list-section\" aria-label=\"Các công cụ AI dựng giao diện\">\n  <style>\n  .ai-tools-list-section {\ndisplay: flex;\nflex-direction: column;\ngap: 2rem;\nmargin: 2rem 0;\nfont-family: var(--sans);\n  }\n  \n  .tool-item-card {\nbackground: var(--bg2);\nborder: 1px solid var(--border);\ndisplay: flex;\nflex-direction: column;\nposition: relative;\ntransition: all 0.2s ease;\n  }\n  \n  .tool-item-card:hover {\nborder-color: var(--accent);\nbackground: var(--bg3);\n  }\n  \n  .tool-item-header {\nborder-bottom: 1px solid var(--border);\npadding: 1.25rem 1.5rem;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nflex-wrap: wrap;\ngap: 0.75rem;\n  }\n  \n  .tool-item-title-grp {\ndisplay: flex;\nalign-items: center;\ngap: 0.75rem;\n  }\n  \n  .tool-item-title {\nfont-family: var(--sans);\nfont-size: 20px;\nfont-weight: 900;\nmargin: 0;\ncolor: #000000 !important;\n  }\n  \n  .tool-item-badge {\nfont-family: var(--mono);\nfont-size: 9px;\nfont-weight: 700;\npadding: 2px 8px;\nborder: 1px solid var(--border);\ntext-transform: uppercase;\nletter-spacing: 0.08em;\n  }\n  \n  .tool-item-badge.free {\nbackground: color-mix(in srgb, #16a34a 8%, var(--bg2));\ncolor: #16a34a;\nborder-color: color-mix(in srgb, #16a34a 20%, var(--border));\n  }\n  \n  .tool-item-badge.paid {\nbackground: color-mix(in srgb, var(--accent) 8%, var(--bg2));\ncolor: var(--accent);\nborder-color: color-mix(in srgb, var(--accent) 20%, var(--border));\n  }\n  \n  .tool-item-badge.recommended {\nbackground: var(--ink);\ncolor: var(--bg);\nborder-color: var(--ink);\n  }\n  \n  .tool-item-body {\npadding: 1.5rem;\ndisplay: flex;\nflex-direction: column;\ngap: 1.25rem;\n  }\n  \n  .tool-item-intro {\nfont-family: var(--sans);\nfont-size: 14px;\nline-height: 1.6;\ncolor: var(--ink2);\nmargin: 0;\n  }\n  \n  /* Steps styling */\n  .tool-item-steps {\ndisplay: flex;\nflex-direction: column;\ngap: 0.75rem;\npadding: 0;\nmargin: 0;\nlist-style: none;\n  }\n  \n  .tool-item-step {\ndisplay: flex;\ngap: 0.75rem;\nalign-items: flex-start;\n  }\n  \n  .tool-item-step-num {\nfont-family: var(--mono);\nfont-size: 11px;\nfont-weight: 700;\ncolor: var(--accent);\nmargin-top: 2px;\nflex-shrink: 0;\n  }\n  \n  .tool-item-step-content {\nfont-family: var(--sans);\nfont-size: 13.5px;\nline-height: 1.55;\ncolor: var(--ink2);\n  }\n  \n  /* Prompt spec styling */\n  .tool-prompt-box {\nbackground: var(--bg);\nborder: 1px dashed var(--border);\npadding: 1.25rem;\nfont-family: var(--mono);\nfont-size: 12.5px;\nline-height: 1.6;\ncolor: var(--ink2);\nposition: relative;\n  }\n  \n  .tool-prompt-label {\nposition: absolute;\ntop: -10px;\nright: 1rem;\nbackground: var(--bg2);\nborder: 1px solid var(--border);\ncolor: var(--muted);\nfont-size: 9px;\nfont-weight: 700;\npadding: 1px 6px;\ntext-transform: uppercase;\nletter-spacing: 0.05em;\n  }\n  \n  .tool-prompt-text {\nfont-style: italic;\ncolor: var(--ink);\n  }\n  \n  /* Callouts matching index.css */\n  .tool-item-callout {\nborder: 1px solid var(--border);\nbackground: var(--bg);\npadding: 1.25rem;\ndisplay: flex;\nflex-direction: column;\ngap: 0.5rem;\n  }\n  \n  .tool-item-callout.tip {\nborder-left: 3px solid #16a34a;\n  }\n  .tool-item-callout.warning {\nborder-left: 3px solid var(--accent);\n  }\n  \n  .callout-lbl {\nfont-family: var(--mono);\nfont-weight: 700;\nfont-size: 10px;\nletter-spacing: 0.08em;\ntext-transform: uppercase;\n  }\n  \n  .tool-item-callout.tip .callout-lbl {\ncolor: #16a34a;\n  }\n  .tool-item-callout.warning .callout-lbl {\ncolor: var(--accent);\n  }\n  \n  .callout-body {\nfont-family: var(--sans);\nfont-size: 13px;\nline-height: 1.5;\ncolor: var(--ink2);\nmargin: 0;\n  }\n\n  .tool-item-footer {\nfont-size: 12px;\ncolor: var(--muted);\nborder-top: 1px solid var(--border);\npadding-top: 1rem;\nfont-style: italic;\n  }\n\n  /* Redesigned other tools card */\n  .other-tools-card {\nbackground: var(--bg2);\nborder: 1px dashed var(--border);\npadding: 1.75rem;\ndisplay: flex;\nflex-direction: column;\ngap: 1.25rem;\nposition: relative;\nmargin-top: 1rem;\n  }\n  \n  .other-tools-title {\nfont-family: var(--sans);\nfont-size: 22px;\nfont-weight: 900;\ncolor: #000000 !important;\nmargin: 0;\ntext-transform: none !important;\nletter-spacing: normal !important;\n  }\n  \n  .other-tools-tags {\ndisplay: flex;\nflex-wrap: wrap;\ngap: 0.5rem;\nmargin: 0.25rem 0;\n  }\n  \n  .other-tools-tag {\nfont-family: var(--mono);\nfont-size: 11px;\nfont-weight: 600;\ncolor: var(--ink);\nbackground: var(--bg);\nborder: 1px solid var(--border);\npadding: 3px 10px;\ntransition: all 0.2s ease;\n  }\n  \n  .other-tools-tag:hover {\nborder-color: var(--accent);\ncolor: var(--accent);\nbackground: color-mix(in srgb, var(--accent) 8%, var(--bg));\n  }\n  \n  .other-tools-desc {\nfont-family: var(--sans);\nfont-size: 13.5px;\nline-height: 1.6;\ncolor: var(--ink2);\nmargin: 0;\n  }\n  \n  .other-tools-footer {\nfont-family: var(--sans);\nfont-size: 12.5px;\ncolor: var(--muted);\nborder-top: 1px dashed var(--border);\npadding-top: 1rem;\ndisplay: flex;\nalign-items: center;\ngap: 0.5rem;\nline-height: 1.5;\n  }\n\n  @media (max-width: 768px) {\n.tool-item-header {\n  flex-direction: column;\n  align-items: flex-start;\n}\n  }\n  </style>\n\n  <!-- GOOGLE AI STUDIO -->\n  <div class=\"tool-item-card\">\n<div class=\"tool-item-header\">\n  <div class=\"tool-item-title-grp\">\n    <h4 class=\"tool-item-title\" style=\"font-size:20px;font-weight:900;color:#000000;margin:0;text-transform:none;letter-spacing:normal;\">Google AI Studio</h4>\n  </div>\n  <span class=\"tool-item-badge free\">Miễn phí · Ưu tiên dùng</span>\n</div>\n<div class=\"tool-item-body\">\n  <p class=\"tool-item-intro\">Sử dụng model Gemini Pro / Flash cho tốc độ xử lý cực nhanh, context window siêu lớn phù hợp cho specs dài.</p>\n  \n  <ul class=\"tool-item-steps\">\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">01.</span>\n      <div class=\"tool-item-step-content\">Truy cập <a href=\"https://aistudio.google.com/\" target=\"_blank\" rel=\"noreferrer\" style=\"font-weight:600; text-decoration:underline;\">aistudio.google.com</a> → tạo chat mới với Gemini 2.5 Pro hoặc Flash.</div>\n    </li>\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">02.</span>\n      <div class=\"tool-item-step-content\">Copy toàn bộ nội dung file <code>DESIGN.md</code> → paste vào ô chat ở đầu prompt.</div>\n    </li>\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">03.</span>\n      <div class=\"tool-item-step-content\">Mô tả chi tiết cấu trúc website bạn muốn tạo:</div>\n    </li>\n  </ul>\n\n  <div class=\"tool-prompt-box\">\n    <span class=\"tool-prompt-label\">Prompt mẫu</span>\n    <span class=\"tool-prompt-text\">\"Đây là DESIGN.md của web tôi muốn làm theo: [paste nội dung]. Dùng design system này để tạo một landing page hoàn chỉnh cho nền tảng học AI cho marketer Việt Nam. Gồm: nav sticky, hero section có headline + subtitle + 2 CTA, section features 3 cột, footer.\"</span>\n  </div>\n\n  <ul class=\"tool-item-steps\">\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">04.</span>\n      <div class=\"tool-item-step-content\">Google AI Studio có kết nối với Github, bạn chỉ cần liên kết để lưu code và clone về máy.</div>\n    </li>\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">05.</span>\n      <div class=\"tool-item-step-content\">Dùng AI IDE để tiếp tục tinh chỉnh: <em>\"Thêm section pricing 3 tier. Đổi hero background sang tối.\"</em></div>\n    </li>\n  </ul>\n</div>\n  </div>\n\n  <!-- LOVABLE -->\n  <div class=\"tool-item-card\">\n<div class=\"tool-item-header\">\n  <div class=\"tool-item-title-grp\">\n    <h4 class=\"tool-item-title\" style=\"font-size:20px;font-weight:900;color:#000000;margin:0;text-transform:none;letter-spacing:normal;\">Lovable.dev</h4>\n  </div>\n  <span class=\"tool-item-badge paid\">Có phí · Hỗ trợ Database & Auth</span>\n</div>\n<div class=\"tool-item-body\">\n  <p class=\"tool-item-intro\">Phù hợp khi ứng dụng của bạn cần tính năng đăng nhập và lưu trữ dữ liệu với Supabase ngay từ đầu.</p>\n  \n  <ul class=\"tool-item-steps\">\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">01.</span>\n      <div class=\"tool-item-step-content\">Vào <a href=\"https://lovable.dev/\" target=\"_blank\" rel=\"noreferrer\" style=\"font-weight:600; text-decoration:underline;\">lovable.dev</a> → tạo project mới.</div>\n    </li>\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">02.</span>\n      <div class=\"tool-item-step-content\">Tại ô prompt đầu tiên, paste DESIGN.md vào rồi mô tả ý tưởng ứng dụng.</div>\n    </li>\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">03.</span>\n      <div class=\"tool-item-step-content\">Lovable tự build toàn bộ — giao diện theo đúng specs, tích hợp sẵn backend Supabase.</div>\n    </li>\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">04.</span>\n      <div class=\"tool-item-step-content\">Khi xong → bấm **Connect GitHub** để Lovable tự động push mã nguồn lên repository.</div>\n    </li>\n  </ul>\n\n  <div class=\"tool-item-callout tip\">\n    <span class=\"callout-lbl\">💡 Mẹo nhỏ</span>\n    <p class=\"callout-body\">Tận dụng lượng credit miễn phí ban đầu để tinh chỉnh UI và các tương tác trước khi nâng cấp gói trả phí.</p>\n  </div>\n</div>\n  </div>\n\n  <!-- BASE44 -->\n  <div class=\"tool-item-card\">\n<div class=\"tool-item-header\">\n  <div class=\"tool-item-title-grp\">\n    <h4 class=\"tool-item-title\" style=\"font-size:20px;font-weight:900;color:#000000;margin:0;text-transform:none;letter-spacing:normal;\">Base44.com</h4>\n  </div>\n  <span class=\"tool-item-badge recommended\">Khuyên dùng · Nhanh nhất</span>\n</div>\n<div class=\"tool-item-body\">\n  <p class=\"tool-item-intro\">Công cụ sinh giao diện tức thì, tối giản hóa quy trình và cho ra sản phẩm chạy trực tuyến ngay lập tức.</p>\n  \n  <ul class=\"tool-item-steps\">\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">01.</span>\n      <div class=\"tool-item-step-content\">Truy cập <a href=\"https://base44.com/\" target=\"_blank\" rel=\"noreferrer\" style=\"font-weight:600; text-decoration:underline;\">base44.com</a> → tạo app mới.</div>\n    </li>\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">02.</span>\n      <div class=\"tool-item-step-content\">Paste DESIGN.md vào rồi nhập mô tả cấu trúc website.</div>\n    </li>\n    <li class=\"tool-item-step\">\n      <span class=\"tool-item-step-num\">03.</span>\n      <div class=\"tool-item-step-content\">App được khởi tạo ngay lập tức, sẵn sàng để chia sẻ hoặc xem trước trực tuyến.</div>\n    </li>\n  </ul>\n\n  <div class=\"tool-item-callout warning\">\n    <span class=\"callout-lbl\">⚠️ Nhược điểm & Giải pháp</span>\n    <div class=\"callout-body\">\n      Base44 chỉ cho phép kết nối GitHub với tài khoản trả phí. Mẹo nhỏ là dùng <strong>Codex + Plugin Base44</strong>:\n      <ol style=\"margin-top: 6px; padding-left: 1.1rem; list-style-type: decimal;\">\n        <li>Tạo một folder rỗng hoàn chỉnh trên máy tính của bạn.</li>\n        <li>Kết nối tài khoản của bạn thông qua Codex và gửi prompt:</li>\n      </ol>\n      <div class=\"tool-prompt-box\" style=\"margin-top: 8px;\">\n        <span class=\"tool-prompt-label\">Prompt Codex</span>\n        <code>@Base44 Hãy đăng nhập vào tài khoản [gmailcuaban] và tải toàn bộ code của project về folder hiện tại cho tôi.</code>\n      </div>\n    </div>\n  </div>\n</div>\n  </div>\n\n  <!-- CÁC TOOL KHÁC -->\n  <div class=\"other-tools-card\">\n<h4 class=\"other-tools-title\" style=\"font-size:22px;font-weight:900;color:#000000;margin:0;text-transform:none;letter-spacing:normal;\">Các công cụ AI khác</h4>\n\n<div class=\"other-tools-tags\">\n  <span class=\"other-tools-tag\">v0.dev</span>\n  <span class=\"other-tools-tag\">Replit</span>\n  <span class=\"other-tools-tag\">Claude Design</span>\n  <span class=\"other-tools-tag\">Figma Make</span>\n</div>\n\n<p class=\"other-tools-desc\">\n  Quy trình áp dụng hoàn toàn tương tự: <strong>quăng file DESIGN.md vào context → mô tả cấu trúc website mong muốn → để AI tự động dựng code.</strong> Chúng đều hoạt động tốt nhất khi nhận diện được specifications thiết kế rõ ràng.\n</p>\n\n<div class=\"other-tools-footer\">\n  <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" style=\"flex-shrink: 0; color: var(--accent);\">\n    <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n    <line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line>\n    <line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>\n  </svg>\n  <span>Hướng dẫn chi tiết từng công cụ, tip, lỗi thường gặp sẽ được cập nhật liên tục trong các bài viết riêng trên <strong>markAI</strong>.</span>\n</div>\n  </div>\n</section>"
      }
    ]
  },
  {
    "id": "4.6",
    "slug": "bai-4-6-buoc-4-tai-code-ve-dung-ai-ide-hoan-thien-tiep",
    "lessonSlug": "dung-giao-dien-web-nhanh-voi-ai",
    "lessonId": 4,
    "lessonTitle": "Bài 4: Dựng giao diện web nhanh với AI",
    "lessonTitleEm": "với AI",
    "prevSlug": "bai-4-5-buoc-3-quang-design-md-vao-tool-ai-code-luon",
    "nextSlug": null,
    "prevTitle": "Bước 3 — Quăng DESIGN.md vào tool AI, code luôn",
    "nextTitle": null,
    "eyebrow": "Hoàn thiện",
    "title": "Bước 4 — Tải code về, dùng AI IDE hoàn thiện tiếp",
    "titleEm": "",
    "desc": "Sau khi giao diện đã đúng ý bạn và các tính năng cũng đã hoàn thiện 1 phần hoặc bạn hết credit =))), tải code về máy để tiếp tục làm việc với AI IDE.",
    "duration": "~5 phút",
    "totalSubs": 6,
    "currentIndex": 6,
    "content": [
      {
        "type": "p",
        "text": "Sau khi giao diện đã đúng ý bạn và các tính năng cũng đã hoàn thiện 1 phần hoặc bạn hết credit =))), tải code về máy để tiếp tục làm việc với AI IDE."
      },
      {
        "type": "infographic",
        "label": "Từ UI generator về AI IDE",
        "steps": [
          {
            "label": "01",
            "title": "Tải code về máy",
            "desc": "Lấy project từ tool AI hoặc GitHub về một folder local rõ ràng."
          },
          {
            "label": "02",
            "title": "Chạy và kiểm tra",
            "desc": "Cài dependency, build, chạy dev server để nhìn UI thật trong browser."
          },
          {
            "label": "03",
            "title": "Hoàn thiện trong AI IDE",
            "desc": "Dùng Cursor, Claude Code hoặc Codex để polish UI, thêm tính năng và chuẩn bị deploy."
          }
        ],
        "aside": {
          "label": "Giữ DESIGN.md",
          "title": "File design vẫn dùng tiếp sau khi tải code",
          "desc": "Đặt ở root project để AI giữ style nhất quán khi thêm component hoặc sửa layout mới."
        }
      },
      {
        "type": "p",
        "text": "<strong>Mở trong AIIDE:</strong>"
      },
      {
        "type": "html",
        "html": "<pre><code class=\"language-markdown\">pnpm install\npnpm run build\npnpm run dev</code></pre>"
      },
      {
        "type": "p",
        "text": "Bây giờ app đang chạy trên máy local. Bắt đầu dùng AI IDE để hoàn thiện những thứ còn dang dở:"
      },
      {
        "type": "html",
        "html": "<ol><li>Chỉnh lại UI chi tiết cho sát DESIGN.md hơn</li><li>Thêm tính năng phức tạp hơn</li><li>Fix lỗi, tối ưu performance</li><li>Chuẩn bị deploy</li></ol>"
      },
      {
        "type": "p",
        "text": "Ở bước này, DESIGN.md vẫn còn dùng được — đặt file trong thư mục gốc project, dùng <code>@DESIGN.md</code> trong IDE chat để AI giữ đúng style khi thêm component mới."
      }
    ]
  },
];
export function getSubLessonBySlug(lessonSlug: string, subSlug: string): SubLessonFull | undefined {
  const exact = subLessons.find(sl => sl.lessonSlug === lessonSlug && sl.slug === subSlug);
  if (exact) return exact;
  // Prefix match: short slug (e.g. "bai-4-6") matches long slug (e.g. "bai-4-6-buoc-4-...")
  return subLessons.find(sl => sl.lessonSlug === lessonSlug && (sl.slug.startsWith(subSlug + '-') || subSlug.startsWith(sl.slug + '-')));
}

export function getSubLessonsByLesson(lessonSlug: string): SubLessonFull[] {
  return subLessons.filter(sl => sl.lessonSlug === lessonSlug);
}

export function getAllSubLessonSlugs(): { lessonSlug: string; subSlug: string }[] {
  return subLessons.map(sl => ({ lessonSlug: sl.lessonSlug, subSlug: sl.slug }));
}


