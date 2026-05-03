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
    nextSlug: null,
    prevTitle: 'Case thực tế: ChatGPT viết content sai vì prompt',
    nextTitle: 'Bài 03 · Cài đặt môi trường',
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


