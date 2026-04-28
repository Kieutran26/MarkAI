// Types
export type SubLesson = {
  id: string;           // "1.1", "1.2"...
  title: string;
  eyebrow: string;      // "Định nghĩa", "Tại sao quan trọng"...
  desc: string;         // 1 câu mô tả ngắn
  contentType: 'text' | 'compare' | 'grid' | 'usecases' | 'mixed';
  // Content blocks
  paragraphs?: string[];
  insight?: string;
  compareHeaders?: [string, string];
  compareRows?: Array<[string, string]>;
  gridItems?: Array<{ label: string; title: string; desc: string }>;
  useCases?: Array<{ title: string; desc: string }>;
};

export type Lesson = {
  id: number;           // 1-10
  slug: string;         // "vibecode-la-gi", "tu-ngu-chuyen-nganh"...
  badge: string;        // "BẮT ĐẦU ĐÂY", "SETUP", "NGÔN NGỮ"...
  badgeType: 'accent' | 'dark' | 'green';
  duration: string;     // "~20 phút"
  subLessonCount: number;
  title: string;
  titleEm: string;      // phần in nghiêng accent
  desc: string;
  tags: string[];
  difficulty: string;
  nextLesson: { id: number; title: string } | null;
  prevLesson: { id: number; title: string } | null;
  subLessons: SubLesson[];
};

// Lesson Data
export const lessons: Lesson[] = [
  // ========== BÀI 01 ==========
  {
    id: 1,
    slug: 'vibecode-la-gi',
    badge: 'BẮT ĐẦU ĐÂY',
    badgeType: 'accent',
    duration: '~20 phút',
    subLessonCount: 5,
    title: 'Vibecode là gì? Khó không? Giúp gì cho Marketer?',
    titleEm: 'Marketer?',
    desc: 'Hiểu tư duy vibecode từ góc nhìn dân Marketing — không cần biết code, không cần nền tảng kỹ thuật, chỉ cần biết mình muốn làm gì.',
    tags: ['tư duy', 'use case', 'marketer', 'vibecode', 'AI'],
    difficulty: 'Zero · không cần nền tảng',
    prevLesson: null,
    nextLesson: { id: 2, title: 'Từ ngữ chuyên ngành' },
    subLessons: [
      {
        id: '1.1',
        title: 'Vibecode là gì — định nghĩa không-tech',
        eyebrow: 'Định nghĩa',
        desc: 'Giải thích bằng ngôn ngữ người làm Marketing, không dùng thuật ngữ kỹ thuật.',
        contentType: 'text',
        paragraphs: [
          'Vibecode là cách bạn dùng <strong>AI để viết code thay mình</strong>. Bạn mô tả điều mình muốn bằng tiếng Việt bình thường — AI hiểu và tạo ra code. Bạn không cần đọc được code đó, không cần hiểu nó hoạt động thế nào.',
          'Tên gọi "vibe" xuất phát từ cách làm việc: bạn chạy theo <strong>cảm giác và ý tưởng</strong>, AI lo phần kỹ thuật. Ý tưởng → mô tả → sản phẩm. Đơn giản vậy thôi.',
          'Hiểu đơn giản hơn: giống như bạn thuê một lập trình viên làm việc 24/7, không ngủ, không tính phí theo giờ, và luôn sẵn sàng sửa lại ngay lập tức khi bạn đổi ý.'
        ],
        insight: '✳ Định nghĩa ngắn: Vibecode = bạn có ý tưởng, AI viết code, bạn ra sản phẩm. Không cần biết code ở giữa.'
      },
      {
        id: '1.2',
        title: 'Tại sao Marketer lại cần biết vibecode?',
        eyebrow: 'Tại sao quan trọng',
        desc: 'Không phải vì bạn cần trở thành developer — mà vì bạn sẽ không cần chờ developer nữa.',
        contentType: 'usecases',
        paragraphs: [
          'Trước đây, khi một Marketer có ý tưởng cho một landing page, một công cụ tính toán, hay một dashboard báo cáo — họ phải <strong>chờ team kỹ thuật</strong>. Chờ thiết kế. Chờ estimate. Chờ sprint. Chờ QA. Có khi vài tuần.',
          'Vibecode phá vỡ cái vòng chờ đó. Bạn có thể tự tạo ra bản prototype trong <strong>vài giờ</strong>, test nhanh, điều chỉnh ngay — không phụ thuộc vào lịch của ai khác.'
        ],
        useCases: [
          { title: 'Tự build landing page campaign', desc: 'Thay vì xin dev làm rồi chờ 2 tuần, bạn tự ra trang trong 1 buổi sáng với đúng copy và design bạn muốn.' },
          { title: 'Tạo tool nội bộ cho team', desc: 'Bảng tính media plan tự động, tracker content calendar, dashboard báo cáo tuần — không cần sheet Excel phức tạp.' },
          { title: 'Prototype ý tưởng trước khi thuyết phục', desc: 'Thay vì slide mô tả concept, bạn demo trực tiếp một trang web thật — thuyết phục hơn gấp 10 lần.' },
          { title: 'Tích hợp AI vào workflow Marketing', desc: 'Chatbot hỏi đáp sản phẩm, form thu thập lead tự phân loại, auto-reply theo ngữ cảnh — tất cả tự build được.' }
        ]
      },
      {
        id: '1.3',
        title: 'Vibecode khác học code truyền thống thế nào?',
        eyebrow: 'So sánh',
        desc: 'Hai cách tiếp cận hoàn toàn khác nhau — không phải cái nào tốt hơn, mà là cái nào phù hợp hơn với bạn.',
        contentType: 'compare',
        compareHeaders: ['Học code truyền thống', 'Vibecode'],
        compareRows: [
          ['Học syntax Python, JS... từ đầu', 'Mô tả bằng tiếng Việt, AI tự viết'],
          ['6–12 tháng mới build được thứ gì đó', 'Tuần đầu đã có sản phẩm thật'],
          ['Hiểu code sâu, debug từng dòng', 'Paste lỗi cho AI, nó tự sửa'],
          ['Cần nền tảng toán, logic lập trình', 'Chỉ cần biết mình muốn gì'],
          ['Phù hợp muốn làm nghề developer', 'Phù hợp Marketer muốn tự chủ hơn']
        ],
        insight: '✳ Lưu ý: Vibecode không thay thế developer giỏi. Nhưng nó cho phép bạn — người không phải developer — tự làm được những thứ trước đây phải cần họ.'
      },
      {
        id: '1.4',
        title: 'Những thứ Marketer đã build được bằng vibecode',
        eyebrow: 'Case thực tế',
        desc: 'Không phải ví dụ giả định — đây là những thứ người làm Marketing thực sự đã tạo ra.',
        contentType: 'grid',
        gridItems: [
          { label: 'Landing page', title: 'Trang campaign có countdown timer', desc: 'Build trong 3 giờ, đổi copy realtime theo A/B test, không cần xin dev chỉnh thêm.' },
          { label: 'Tool nội bộ', title: 'Brief generator tự động', desc: 'Điền thông tin campaign vào form, tool tự xuất brief chuẩn format gửi agency.' },
          { label: 'Dashboard', title: 'Tracker KPI tuần tự cập nhật', desc: 'Kéo data từ Google Sheet, hiển thị dạng bảng và biểu đồ, share link cho team.' },
          { label: 'Chatbot', title: 'FAQ bot cho fanpage', desc: 'Trả lời tự động các câu hỏi sản phẩm thường gặp, phân loại lead cơ bản.' }
        ],
        paragraphs: [
          'Điểm chung của tất cả: người làm ra chúng <strong>không biết code</strong> trước khi học vibecode. Một số làm xong trong ngày đầu tiên thử.'
        ]
      },
      {
        id: '1.5',
        title: 'Bạn cần biết gì — và những thứ KHÔNG cần biết',
        eyebrow: 'Chuẩn bị',
        desc: 'Danh sách này sẽ giúp bạn ngừng lo lắng và bắt đầu.',
        contentType: 'compare',
        compareHeaders: ['✳ Bạn CẦN có', '✗ Bạn KHÔNG cần'],
        compareRows: [
          ['Ý tưởng rõ về thứ mình muốn làm', 'Biết code Python, JavaScript, HTML'],
          ['Khả năng mô tả bằng tiếng Việt/Anh rõ ràng', 'Hiểu database, server, API là gì'],
          ['Máy tính đủ dùng (4GB RAM trở lên)', 'Bằng IT hay chứng chỉ lập trình'],
          ['Kiên nhẫn với lỗi — AI đôi khi sai', 'Hiểu terminal, command line từ trước'],
          ['Tài khoản Claude, GitHub, Vercel (đều free)', 'Trả tiền cho bất kỳ tool nào để bắt đầu']
        ],
        insight: '✳ Tóm lại: Nếu bạn biết dùng Google Docs và gõ được câu mô tả rõ ràng — bạn đã đủ điều kiện. Bài 02 bắt đầu từ đây.'
      }
    ]
  },

  // ========== BÀI 02 ==========
  {
    id: 2,
    slug: 'tu-ngu-chuyen-nganh',
    badge: 'NGÔN NGỮ',
    badgeType: 'dark',
    duration: '~40 phút',
    subLessonCount: 6,
    title: 'Từ ngữ chuyên ngành code & design — kèm GIF mô phỏng',
    titleEm: 'kèm GIF mô phỏng',
    desc: 'Hiểu các từ kỹ thuật hay gặp khi làm việc với AI — từ padding, flexbox đến repo, commit. Không cần nhớ hết, chỉ cần đủ để không bị mù khi AI nói chuyện.',
    tags: ['spacing', 'flexbox', 'grid', 'radius', 'responsive', 'component'],
    difficulty: 'Cơ bản · đọc hiểu',
    prevLesson: { id: 1, title: 'Vibecode là gì?' },
    nextLesson: { id: 3, title: 'Cài đặt môi trường' },
    subLessons: [
      {
        id: '2.1',
        title: 'Các khái niệm về file & thư mục',
        eyebrow: 'File & Thư mục',
        desc: 'Hiểu cách máy tính tổ chức dữ liệu — folder, root, path, extension.',
        contentType: 'text',
        paragraphs: [
          'Trước khi code, bạn cần hiểu cách máy tính tổ chức dữ liệu. Mọi thứ trên máy tính đều nằm trong <strong>file</strong> (tệp), và các file được sắp xếp trong <strong>thư mục (folder/directory)</strong>.',
          '<strong>Root</strong> là thư mục gốc — nơi bắt đầu của mọi đường dẫn. Trên Windows là ổ C:\\, trên Mac là /. Khi AI nói "project root", nó có nghĩa là thư mục chính của dự án.',
          '<strong>Path</strong> (đường dẫn) là chuỗi ký tự cho biết vị trí của file. Ví dụ: <code>C:\\Users\\Khoa\\Documents\\project</code>. Dấu gạch chéo ngược (\\) cho Windows, dấu xuôi (/) cho Mac/Linux.',
          '<strong>Extension</strong> (phần mở rộng) là phần sau dấu chấm trong tên file: <code>.html</code>, <code>.css</code>, <code>.js</code>, <code>.png</code>. Máy tính dùng extension để biết file thuộc loại nào.'
        ],
        insight: '✳ Mẹo: Khi AI nói "tạo file trong folder src/components", bạn cứ hình dung như tạo file mới trong thư mục đó trên máy. AI sẽ tự tạo nếu chưa có.'
      },
      {
        id: '2.2',
        title: 'Frontend vs Backend vs Fullstack — hiểu đủ dùng',
        eyebrow: 'Frontend vs Backend',
        desc: 'Phân biệt 3 từ hay gặp khi AI nói về "phía nào" của ứng dụng.',
        contentType: 'compare',
        compareHeaders: ['Frontend (Phía người dùng)', 'Backend (Phía server)'],
        compareRows: [
          ['Giao diện bạn nhìn thấy', 'Xử lý bên trong, không hiện'],
          ['HTML, CSS, JavaScript', 'Python, Node.js, Go, Java...'],
          ['Chạy trên trình duyệt', 'Chạy trên server (máy chủ)'],
          ['AI có thể tự build', 'Cần cân nhắc hơn với vibecode'],
          ['Tốt nhất cho Marketer', 'Dùng khi cần database, auth...']
        ],
        insight: '✳ Với vibecode, bạn chủ yếu làm Frontend. Backend phức tạp hơn, nhưng có cách giải quyết: dùng các dịch vụ có sẵn (Supabase, Firebase) thay vì tự viết.'
      },
      {
        id: '2.3',
        title: 'Từ ngữ UI/layout hay gặp',
        eyebrow: 'UI/Layout',
        desc: 'Padding, margin, flex, grid, responsive — đủ để đọc hiểu khi AI mô tả.',
        contentType: 'grid',
        gridItems: [
          { label: 'Box Model', title: 'Padding vs Margin vs Border', desc: 'Padding: khoảng cách bên trong. Margin: khoảng cách bên ngoài. Border: đường viền bao quanh.' },
          { label: 'Flexbox', title: 'Sắp xếp items trên 1 hàng/cột', desc: 'Dùng khi muốn items nằm cạnh nhau, căn chỉnh giữa, phân bố đều.' },
          { label: 'Grid', title: 'Lưới 2 chiều (hàng + cột)', desc: 'Dùng khi cần layout phức tạp hơn, nhiều cột, nhiều hàng.' },
          { label: 'Responsive', title: 'Hiển thị đúng trên mọi màn hình', desc: 'Tự động điều chỉnh layout khi thu nhỏ/zoom trình duyệt.' }
        ],
        paragraphs: [
          '<strong>Spacing</strong> là khoảng cách giữa các elements. Khi AI nói "thêm padding 16px", nó có nghĩa là thêm khoảng trắng bên trong element đó 16 pixel.',
          '<strong>Border-radius</strong> là độ bo cong của góc. Border-radius: 0 = góc vuông. Border-radius: 50% = hình tròn.'
        ],
        insight: '✳ Khi AI hỏi "dùng flex hay grid?", trả lời: "flex nếu 1 hàng/cột, grid nếu cần nhiều hàng+cột phức tạp".'
      },
      {
        id: '2.4',
        title: 'Từ ngữ về code hay gặp khi AI nói chuyện',
        eyebrow: 'Code & Component',
        desc: 'Function, component, props, state — những từ khiến người mới sợ, thực ra dễ hiểu.',
        contentType: 'text',
        paragraphs: [
          '<strong>Component</strong> là một "khối" giao diện có thể tái sử dụng. Ví dụ: nút bấm (Button), ô nhập liệu (Input), thẻ sản phẩm (Card). Mỗi component có thể được dùng nhiều lần trong trang.',
          '<strong>Props</strong> (properties) là cách truyền dữ liệu vào component. Giống như điền thông số kỹ thuật khi mua máy — props cho component biết nó nên hiển thị gì.',
          '<strong>State</strong> là dữ liệu thay đổi được trong ứng dụng. Khi bạn click nút, state thay đổi → giao diện cập nhật theo.',
          '<strong>Function</strong> (hàm) là một khối code thực hiện một tác vụ cụ thể. Viết một lần, gọi nhiều lần khi cần.'
        ],
        insight: '✳ Khi AI nói "tách component này ra", nó muốn bạn tạo một phần giao diện riêng để dùng lại được — như một bộ phận máy có thể tháo lắp.'
      },
      {
        id: '2.5',
        title: 'Từ ngữ về môi trường',
        eyebrow: 'Môi trường & Deploy',
        desc: 'Localhost, port, env, build, production — những từ hay xuất hiện khi chạy project.',
        contentType: 'compare',
        compareHeaders: ['Môi trường phát triển', 'Môi trường production'],
        compareRows: [
          ['Localhost (máy của bạn)', 'Live website (ai cũng truy cập được)'],
          ['Port 3000, 5173...', 'Port 80, 443 (HTTP/HTTPS)'],
          ['Chạy bằng npm run dev', 'Chạy bằng deploy lên server'],
          ['Lỗi hiện chi tiết', 'Lỗi ẩn với người dùng'],
          ['Không cần optimize', 'Cần tối ưu performance']
        ],
        paragraphs: [
          '<strong>Build</strong> là quá trình chuyển code thành file chạy được. Khi AI nói "build failed", có lỗi trong code cần sửa trước khi deploy.',
          '<strong>Environment variables (.env)</strong> là các biến lưu cấu hình riêng: API keys, database URL, secrets. Không push lên GitHub vì bảo mật.'
        ],
        insight: '✳ Khi mới bắt đầu, bạn chỉ cần biết localhost là "phiên bản đang chạy trên máy mình". Khi hài lòng, deploy để người khác truy cập được.'
      },
      {
        id: '2.6',
        title: 'Từ ngữ về Git',
        eyebrow: 'Git cơ bản',
        desc: 'Repo, commit, push, branch, merge — hệ thống "lưu tiến độ" cho code.',
        contentType: 'text',
        paragraphs: [
          '<strong>Git</strong> là công cụ theo dõi thay đổi trong code. Giống như Google Docs có lịch sử phiên bản, Git lưu lại mọi thay đổi để bạn có thể quay lại nếu cần.',
          '<strong>Repository (repo)</strong> là nơi lưu trữ dự án. Khi push code lên GitHub, bạn đang đưa repo lên "đám mây" để backup và chia sẻ.',
          '<strong>Commit</strong> là một "checkpoint" — lưu lại trạng thái code tại thời điểm đó. Nên commit mỗi khi hoàn thành một tính năng nhỏ.',
          '<strong>Branch</strong> là "nhánh" phát triển song song. Ví dụ: branch "feature/landing-page" để thử landing page mới, không ảnh hưởng code chính.',
          '<strong>Push/Pull</strong> là đẩy code lên (push) hoặc kéo code về (pull) từ remote repository (GitHub).'
        ],
        insight: '✳ Với vibecode, workflow đơn giản: tạo repo → commit thường xuyên → push lên GitHub → kết nối Vercel để deploy tự động.'
      }
    ]
  },

  // ========== BÀI 03 ==========
  {
    id: 3,
    slug: 'cai-dat-moi-truong',
    badge: 'SETUP',
    badgeType: 'dark',
    duration: '~30 phút',
    subLessonCount: 6,
    title: 'Cài gì vào máy để bắt đầu vibecode?',
    titleEm: 'Cài gì vào máy?',
    desc: 'Cài Node.js, VS Code, Cursor, Git, Claude Code theo đúng thứ tự — bắt đầu từ con số 0.',
    tags: ['Node.js', 'Cursor', 'VS Code', 'Git', 'terminal'],
    difficulty: 'Setup · 30 phút',
    prevLesson: { id: 2, title: 'Từ ngữ chuyên ngành' },
    nextLesson: { id: 4, title: 'Làm quen VS Code & Cursor' },
    subLessons: [
      {
        id: '3.1',
        title: 'Cần cài gì, theo thứ tự nào',
        eyebrow: 'Tổng quan',
        desc: 'Bức tranh lớn trước — biết mình sẽ cài gì và tại sao.',
        contentType: 'grid',
        gridItems: [
          { label: '1', title: 'Node.js', desc: 'Nền tảng chạy JavaScript — cần thiết cho mọi framework hiện đại.' },
          { label: '2', title: 'VS Code', desc: 'Code editor chuẩn — nơi bạn đọc và viết code.' },
          { label: '3', title: 'Cursor', desc: 'VS Code + AI — chính là tool vibecode chính.' },
          { label: '4', title: 'Git', desc: 'Hệ thống version control — lưu tiến độ, backup code.' },
          { label: '5', title: 'Claude Code', desc: 'AI agent chạy trên terminal — dùng khi Cursor không đủ.' }
        ],
        paragraphs: [
          'Tất cả đều miễn phí. Không cần mua license hay trả phí. Chỉ cần tài khoản GitHub (cũng miễn phí) để lưu trữ code trên đám mây.'
        ],
        insight: '✳ Thứ tự cài: Node.js → VS Code → Cursor → Git → Claude Code. Bỏ qua bất kỳ bước nào, bạn sẽ gặp lỗi ở bước tiếp theo.'
      },
      {
        id: '3.2',
        title: 'Cài Node.js — tại sao cần, cài thế nào',
        eyebrow: 'Node.js',
        desc: 'Node.js là "máy" chạy JavaScript trên máy tính — không phải trình duyệt.',
        contentType: 'text',
        paragraphs: [
          'JavaScript vốn chỉ chạy trên trình duyệt (Chrome, Firefox). Node.js cho phép JavaScript chạy trên server, tức là trên máy tính của bạn — mở ra khả năng build ứng dụng thực sự.',
          'Để cài Node.js, vào <strong>nodejs.org</strong>, tải bản LTS (Long Term Support) cho máy tính của bạn. Trình cài đặt sẽ tự động cài luôn <strong>npm</strong> (Node Package Manager) — công cụ quản lý thư viện code.',
          'Sau khi cài xong, mở Terminal (Command Prompt trên Windows), gõ: <code>node --version</code> và <code>npm --version</code>. Nếu thấy số version hiện ra → cài thành công.'
        ],
        insight: '✳ Nếu thấy lỗi "command not found", restart máy và thử lại. Nếu vẫn không được, kiểm tra PATH trong system settings.'
      },
      {
        id: '3.3',
        title: 'Cài VS Code — extension nào cần gắn ngay',
        eyebrow: 'VS Code',
        desc: 'VS Code là "sân khấu" — nơi bạn làm việc với code.',
        contentType: 'text',
        paragraphs: [
          'VS Code (Visual Studio Code) là code editor miễn phí của Microsoft. Nó nhẹ, nhanh, và có hệ sinh thái extension phong phú.',
          'Tải tại <strong>code.visualstudio.com</strong>. Sau khi cài, mở VS Code, vào <strong>Extensions</strong> (Ctrl+Shift+X), cài những extension sau:',
          '<strong>1. Tailwind CSS IntelliSense</strong> — gợi ý class Tailwind khi gõ.<br><strong>2. ES7+ React/Redux/React-Native snippets</strong> — code snippet nhanh.<br><strong>3. Prettier - Code formatter</strong> — format code tự động cho đẹp.<br><strong>4. Auto Rename Tag</strong> — đổi tag HTML này, tag kia tự đổi theo.'
        ],
        insight: '✳ VS Code dùng để đọc code, chỉnh sửa thủ công. Tool vibecode chính là Cursor — phiên bản AI-powered của VS Code.'
      },
      {
        id: '3.4',
        title: 'Cài Cursor — lấy bản free, setting đầu tiên',
        eyebrow: 'Cursor',
        desc: 'Cursor là VS Code có AI tích hợp — chính là tool vibecode chính.',
        contentType: 'text',
        paragraphs: [
          'Cursor (cursor.com) là VS Code fork với AI models tích hợp. Bản free đủ dùng cho cá nhân — giới hạn 100 lần AI request mỗi tháng.',
          'Sau khi cài Cursor, mở lên. Đăng nhập bằng Google hoặc GitHub. Vào <strong>Settings → Features → AI</strong>, chọn model: Claude (mặc định) hoặc GPT-4 tuỳ preference.',
          '<strong>Keyboard shortcut quan trọng trong Cursor:</strong><br>• <code>Ctrl/Cmd + L</code>: Mở Chat panel<br>• <code>Ctrl/Cmd + K</code>: Mở Composer (viết nhiều file cùng lúc)<br>• <code>Tab</code>: Accept suggestion của AI'
        ],
        insight: '✳ Bản Free đủ để học và làm project cá nhân. Nếu cần nhiều hơn, Cursor Pro có $20/tháng — nhưng không bắt buộc.'
      },
      {
        id: '3.5',
        title: 'Cài Git — kết nối với GitHub lần đầu',
        eyebrow: 'Git & GitHub',
        desc: 'Git lưu tiến độ, GitHub lưu trữ cloud — cả hai đều miễn phí.',
        contentType: 'text',
        paragraphs: [
          'Git là công cụ command-line. Cài từ <strong>git-scm.com</strong> (Windows) hoặc đã có sẵn trên Mac. Sau khi cài, mở Terminal, gõ <code>git --version</code> để verify.',
          'Tiếp theo, kết nối Git với GitHub. Tạo tài khoản tại <strong>github.com</strong> (miễn phí). Sau đó, generate SSH key và thêm vào GitHub để không phải nhập password mỗi lần push.',
          '<strong>Các lệnh Git cơ bản:</strong><br>• <code>git init</code>: Bắt đầu theo dõi project<br>• <code>git add .</code>: Thêm thay đổi vào staging<br>• <code>git commit -m "message"</code>: Lưu checkpoint<br>• <code>git push</code>: Đẩy lên GitHub'
        ],
        insight: '✳ GitHub là "Google Drive cho code". Lưu code ở đây = backup + có thể share + kết nối Vercel để deploy tự động.'
      },
      {
        id: '3.6',
        title: 'Cài Claude Code — yêu cầu, cách cài, chạy thử',
        eyebrow: 'Claude Code',
        desc: 'Claude Code là AI agent chạy trên terminal — dùng khi Cursor không đủ.',
        contentType: 'text',
        paragraphs: [
          'Claude Code khác Cursor: Cursor là code editor với AI assistant. Claude Code là AI agent tự động làm việc trên project — có thể đọc nhiều file, chạy lệnh, sửa code liên tục.',
          '<strong>Cài đặt:</strong> Cần có Node.js và npm trước. Sau đó chạy lệnh: <code>npm install -g @anthropic-ai/claude-code</code>',
          'Sau khi cài, vào thư mục project, gõ <code>claude</code> để khởi động. Lần đầu sẽ yêu cầu API key — lấy từ console.anthropic.com.',
          '<strong>Khi nào dùng Claude Code thay Cursor:</strong><br>• Khi cần làm nhiều thứ liên tục, không cần nhìn code<br>• Khi muốn AI tự đưa ra quyết định<br>• Khi project lớn, cần phân tích nhiều file'
        ],
        insight: '✳ Claude Code là tool mạnh hơn nhưng cần thời gian làm quen. Bắt đầu với Cursor trước, sau đó thử Claude Code khi đã quen workflow.'
      }
    ]
  },

  // ========== BÀI 04 ==========
  {
    id: 4,
    slug: 'lam-quen-vscode-cursor',
    badge: 'CÔNG CỤ',
    badgeType: 'dark',
    duration: '~35 phút',
    subLessonCount: 6,
    title: 'Làm quen VS Code & Cursor — giao diện, phím tắt, cách đọc file',
    titleEm: 'giao diện & phím tắt',
    desc: 'Đi sâu vào VS Code và Cursor — hiểu giao diện, thư mục, terminal, và 10 phím tắt cần thiết.',
    tags: ['VS Code', 'Cursor', 'terminal', 'phím tắt', 'file tree'],
    difficulty: 'Công cụ · thực hành',
    prevLesson: { id: 3, title: 'Cài đặt môi trường' },
    nextLesson: { id: 5, title: 'Làm quen Claude Code' },
    subLessons: [
      {
        id: '4.1',
        title: 'Giao diện VS Code — Explorer, Terminal, Extensions',
        eyebrow: 'Giao diện VS Code',
        desc: 'Các panel chính: Explorer, Terminal, Extensions, Command Palette.',
        contentType: 'text',
        paragraphs: [
          'VS Code có 5 panel chính bạn cần biết:',
          '<strong>1. Activity Bar</strong> (thanh bên trái): Các icon để toggle panel. Explorer, Search, Source Control (Git), Extensions, Debug.',
          '<strong>2. Explorer</strong>: Hiển thị cây thư mục của project. Click vào file để mở trong editor.',
          '<strong>3. Editor</strong>: Vùng chính để đọc và sửa code. Có thể mở nhiều tabs.',
          '<strong>4. Terminal</strong>: Mở bằng <code>Ctrl+`</code>. Nơi chạy lệnh npm, git, v.v.',
          '<strong>5. Command Palette</strong>: Mở bằng <code>Ctrl+Shift+P</code>. Gõ tên lệnh để thực thi — không cần nhớ shortcut.'
        ],
        insight: '✳ Mẹo: Ctrl+P (Quick Open) để mở file nhanh bằng tên, không cần click trong Explorer.'
      },
      {
        id: '4.2',
        title: 'Cấu trúc project Next.js — file nào làm gì',
        eyebrow: 'Đọc cấu trúc thư mục',
        desc: 'Hiểu cấu trúc một project Next.js — package.json, app folder, components.',
        contentType: 'grid',
        gridItems: [
          { label: 'package.json', title: 'Quản lý dependencies', desc: 'Khai báo thư viện cần cài (React, Next.js, Tailwind...).' },
          { label: 'app/', title: 'Router & Pages', desc: 'Next.js App Router — mỗi folder là một route/page.' },
          { label: 'components/', title: 'UI components', desc: 'Các khối giao diện có thể tái sử dụng.' },
          { label: 'public/', title: 'Static assets', desc: 'Hình ảnh, font, file tĩnh copy nguyên sang deploy.' }
        ],
        paragraphs: [
          '<strong>app/</strong> là folder chính của Next.js 13+. Mỗi <code>page.tsx</code> là một trang. <code>layout.tsx</code> là layout chung cho các trang con.',
          '<strong>components/</strong> chứa các React components. Nên đặt tên theo PascalCase: <code>LessonCard.tsx</code>, <code>NavBar.tsx</code>.'
        ],
        insight: '✳ Khi AI tạo file mới, nó thường tạo đúng vị trí. Bạn chỉ cần hiểu: "folder này chứa gì" là đủ.'
      },
      {
        id: '4.3',
        title: 'Terminal tích hợp — mở, chạy lệnh, không sợ màn hình đen',
        eyebrow: 'Terminal tích hợp',
        desc: 'Terminal không đáng sợ — đây là nơi chạy lệnh, cài package, start server.',
        contentType: 'text',
        paragraphs: [
          'Terminal (hay Command Line Interface - CLI) là "màn hình đen" đáng sợ với người mới. Thực ra nó chỉ là nơi gõ lệnh text thay vì click chuột.',
          '<strong>Các lệnh cơ bản cần biết:</strong><br>• <code>cd folder-name</code>: Di chuyển vào thư mục<br>• <code>ls</code> (Mac) / <code>dir</code> (Windows): Liệt kê file trong thư mục<br>• <code>cd ..</code>: Di chuyển ra thư mục cha<br>• <code>npm install</code>: Cài dependencies<br>• <code>npm run dev</code>: Chạy development server'
        ],
        paragraphs_extra: [
          '<strong>Đừng sợ lỗi trong terminal</strong>. Lỗi là bình thường — đọc thông báo, paste cho AI, nhờ nó fix.'
        ],
        insight: '✳ Khi terminal "chạy mãi không dừng", đó là vì server đang hoạt động. Mở trình duyệt xem kết quả. Nhấn Ctrl+C để dừng.'
      },
      {
        id: '4.4',
        title: 'Cursor khác VS Code ở chỗ nào',
        eyebrow: 'Giao diện Cursor',
        desc: 'Cursor là VS Code + AI — thêm Chat, Composer, và inline suggestions.',
        contentType: 'compare',
        compareHeaders: ['VS Code', 'Cursor'],
        compareRows: [
          ['Code editor thuần', 'Code editor + AI tích hợp'],
          ['Cần extension cho AI', 'AI có sẵn (Claude/GPT-4)'],
          ['Tự viết code hoàn toàn', 'AI viết code, bạn review & accept'],
          ['Miễn phí hoàn toàn', 'Free tier có giới hạn'],
          ['Tốt cho developer chuyên', 'Tốt cho người muốn AI hỗ trợ']
        ],
        insight: '✳ Cursor = VS Code nhưng thêm "co-pilot". Nếu đã quen VS Code, chuyển sang Cursor không mất gì — giao diện y hệt, thêm AI bên cạnh.'
      },
      {
        id: '4.5',
        title: 'Chat vs Composer trong Cursor — dùng cái nào khi nào',
        eyebrow: 'Chat vs Composer',
        desc: 'Hai AI panel của Cursor phục vụ hai mục đích khác nhau.',
        contentType: 'text',
        paragraphs: [
          '<strong>Chat (<code>Ctrl+L</code>)</strong>: Hỏi đáp, giải thích code, debug. Dùng khi bạn cần hiểu một đoạn code hoặc muốn AI giải thích lỗi.',
          '<strong>Composer (<code>Ctrl+K</code>)</strong>: Tạo hoặc sửa nhiều file cùng lúc. Dùng khi bạn muốn AI tạo tính năng mới — nó sẽ tạo/sửa nhiều file một lượt.',
          '<strong>Inline Chat</strong>: AI nhắc trong code. Dùng <code>Ctrl+I</code> để hỏi ngay tại dòng đang đọc.',
          '<strong>Khi nào dùng:</strong><br>• Cần hiểu code → Chat<br>• Cần tạo/sửa tính năng → Composer<br>• Cần sửa nhanh 1-2 dòng → Inline Chat'
        ],
        insight: '✳ Composer là "vibecode mode" — bạn mô tả gì cần làm, AI tạo code trong nhiều file. Chat là "hỏi đáp mode" — hỏi gì đáp nấy.'
      },
      {
        id: '4.6',
        title: '10 phím tắt hay dùng nhất',
        eyebrow: 'Phím tắt',
        desc: '10 phím tắt đủ để sống — không cần nhớ tất cả.',
        contentType: 'grid',
        gridItems: [
          { label: '1', title: 'Ctrl/Cmd + `', desc: 'Mở/tắt terminal' },
          { label: '2', title: 'Ctrl/Cmd + P', desc: 'Quick Open — mở file nhanh' },
          { label: '3', title: 'Ctrl/Cmd + Shift + P', desc: 'Command Palette' },
          { label: '4', title: 'Ctrl/Cmd + L', desc: 'Mở Cursor Chat' },
          { label: '5', title: 'Ctrl/Cmd + K', desc: 'Mở Cursor Composer' },
          { label: '6', title: 'Ctrl/Cmd + S', desc: 'Lưu file (rất quan trọng!)' },
          { label: '7', title: 'Ctrl/Cmd + D', desc: 'Chọn word tiếp theo giống vậy' },
          { label: '8', title: 'Alt + Click', desc: 'Multi-cursor — sửa nhiều chỗ' }
        ],
        insight: '✳ Không cần nhớ tất cả. Bắt đầu với 3 cái: Ctrl+S (lưu), Ctrl+P (mở file), Ctrl+L (chat). Thêm dần khi quen.'
      }
    ]
  },

  // ========== BÀI 05 ==========
  {
    id: 5,
    slug: 'lam-quen-claude-code',
    badge: 'CLAUDE CODE',
    badgeType: 'dark',
    duration: '~30 phút',
    subLessonCount: 5,
    title: 'Làm quen Claude Code — cách hoạt động, lệnh cơ bản, khi nào dùng',
    titleEm: 'cách hoạt động & lệnh',
    desc: 'Claude Code khác Cursor ở chỗ nào, lệnh nào hay dùng, và khi nào kết hợp cả hai.',
    tags: ['Claude Code', 'terminal', 'CLI', 'workflow'],
    difficulty: 'CLI · thực hành',
    prevLesson: { id: 4, title: 'Làm quen VS Code & Cursor' },
    nextLesson: { id: 6, title: 'Công cụ & website hữu ích' },
    subLessons: [
      {
        id: '5.1',
        title: 'Claude Code là gì — khác Cursor ở điểm nào',
        eyebrow: 'Claude Code là gì',
        desc: 'Claude Code là AI agent chạy trên terminal — tự động hóa nhiều bước liên tục.',
        contentType: 'text',
        paragraphs: [
          'Cursor là code editor với AI assistant — bạn vẫn thao tác, AI gợi ý. Claude Code là AI agent — nó tự động làm việc liên tục, đọc file, chạy lệnh, sửa code, không cần bạn tương tác liên tục.',
          '<strong>So sánh:</strong><br>• Cursor: Bạn ←→ AI ←→ Code (hỏi - đáp - sửa từng bước)<br>• Claude Code: Bạn → AI → làm nhiều bước liên tục → kết quả',
          'Claude Code phù hợp khi: cần làm nhiều việc liên tục (tạo component, sửa nhiều file, chạy test), cần AI phân tích toàn bộ codebase.'
        ],
        insight: '✳ Dùng Claude Code khi muốn "AI tự làm" — đưa task, nó thực hiện. Dùng Cursor khi muốn "AI hỗ trợ" — làm cùng, kiểm soát từng bước.'
      },
      {
        id: '5.2',
        title: 'Vào project, gõ lệnh đầu tiên, nhìn AI hoạt động',
        eyebrow: 'Chạy lần đầu',
        desc: 'Cách khởi động Claude Code trong project — terminal, AI response, cách ra lệnh.',
        contentType: 'text',
        paragraphs: [
          '<strong>Bước 1:</strong> Mở terminal, <code>cd</code> vào thư mục project của bạn.',
          '<strong>Bước 2:</strong> Gõ <code>claude</code> và Enter. Claude Code khởi động, hiện thị thông tin project.',
          '<strong>Bước 3:</strong> Gõ mô tả task của bạn, ví dụ: "Tạo component Button với 3 variants: primary, secondary, ghost."',
          '<strong>Bước 4:</strong> AI phân tích, đọc files hiện có, tạo code. Bạn review, approve hoặc yêu cầu chỉnh sửa.',
          'AI sẽ hỏi xác nhận trước khi làm những thay đổi lớn (tạo file mới, xóa file). Nhấn <code>y</code> để đồng ý, <code>n</code> để từ chối.'
        ],
        insight: '✳ Lần đầu chạy, Claude Code có thể hỏi vài câu hỏi để hiểu project. Trả lời càng rõ, AI làm càng đúng ý.'
      },
      {
        id: '5.3',
        title: 'Lệnh hay dùng — plan, edit, run, review',
        eyebrow: 'Lệnh hay dùng',
        desc: 'Các commands đặc biệt trong Claude Code để kiểm soát AI.',
        contentType: 'grid',
        gridItems: [
          { label: '/plan', title: 'Lên kế hoạch trước', desc: 'AI phân tích và đề xuất các bước cần làm. Dùng trước task lớn.' },
          { label: '/review', title: 'Review code hiện có', desc: 'AI đọc và phân tích code, đưa ra gợi ý cải thiện.' },
          { label: '/test', title: 'Viết unit tests', desc: 'AI tạo tests cho code hiện có.' },
          { label: '/refactor', title: 'Refactor code', desc: 'Cải thiện structure, đặt tên, loại bỏ duplication.' }
        ],
        paragraphs: [
          'Ngoài commands đặc biệt, bạn có thể gõ tự nhiên. Claude Code hiểu ngữ cảnh và tự đưa ra hành động phù hợp.',
          '<strong>Mẹo:</strong> Gõ <code>/help</code> để xem tất cả commands có sẵn.'
        ],
        insight: '✳ /plan rất hữu ích cho task lớn — xem AI định làm gì trước khi nó làm, tránh waste effort.'
      },
      {
        id: '5.4',
        title: 'Khi nào dùng Claude Code vs Cursor',
        eyebrow: 'Khi nào dùng',
        desc: 'Không phải cái nào tốt hơn — mỗi cái cho situation khác nhau.',
        contentType: 'compare',
        compareHeaders: ['Dùng Cursor khi', 'Dùng Claude Code khi'],
        compareRows: [
          ['Cần kiểm soát từng bước', 'Cần AI tự động làm nhiều thứ'],
          ['Task nhỏ, nhanh', 'Task lớn, nhiều bước'],
          ['Muốn nhìn code trước khi apply', 'Cần phân tích toàn bộ codebase'],
          ['Mới bắt đầu, chưa quen CLI', 'Đã quen terminal workflow'],
          ['Làm việc với 1-2 files', 'Sửa nhiều files cùng lúc']
        ],
        insight: '✳ Thực tế: Cursor cho 80% task thông thường. Claude Code cho 20% task phức tạp. Dùng cả hai, không cần chọn 1.'
      },
      {
        id: '5.5',
        title: 'Claude Code + Cursor — workflow thực tế',
        eyebrow: 'Kết hợp',
        desc: 'Cách kết hợp cả hai tool trong một dự án thực tế.',
        contentType: 'text',
        paragraphs: [
          '<strong>Workflow đề xuất cho Marketer vibecoder:</strong>',
          '<strong>1. Bắt đầu project mới:</strong> Dùng Cursor Composer để tạo project structure — nhanh, trực quan.',
          '<strong>2. Thêm tính năng nhỏ:</strong> Dùng Cursor Chat hoặc Inline Chat — nhanh, gần code.',
          '<strong>3. Refactor lớn:</strong> Dùng Claude Code với /refactor — phân tích sâu, cải thiện nhiều files.',
          '<strong>4. Debug phức tạp:</strong> Dùng Claude Code — nó đọc nhiều files, trace lỗi tốt hơn.',
          '<strong>5. Review code:</strong> Dùng Claude Code /review — phân tích toàn diện hơn.'
        ],
        insight: '✳ Không có workflow "đúng" duy nhất. Thử nhiều cách, tìm cách nào phù hợp với bạn nhất. Quan trọng: luôn review code trước khi commit.'
      }
    ]
  },

  // ========== BÀI 06 ==========
  {
    id: 6,
    slug: 'cong-cu-website-huu-ich',
    badge: 'TOOLS',
    badgeType: 'dark',
    duration: '~25 phút',
    subLessonCount: 6,
    title: 'Công cụ & website hữu ích để vibecode ra web hoàn chỉnh',
    titleEm: 'công cụ hữu ích',
    desc: 'v0.dev, Bolt.new, Vercel, Shadcn/ui, 21st.dev — mỗi tool phục vụ mục đích khác nhau.',
    tags: ['v0.dev', 'Bolt', 'Vercel', 'Shadcn', '21st.dev'],
    difficulty: 'Tools · tham khảo',
    prevLesson: { id: 5, title: 'Làm quen Claude Code' },
    nextLesson: { id: 7, title: 'Cách prompt cho AI' },
    subLessons: [
      {
        id: '6.1',
        title: 'v0.dev — sinh UI từ mô tả text',
        eyebrow: 'v0.dev',
        desc: 'Vercel AI sinh UI component — copy/paste vào Cursor.',
        contentType: 'text',
        paragraphs: [
          'v0.dev là tool của Vercel dùng AI sinh UI components. Bạn mô tả component bằng text, AI sinh ra code React với Tailwind CSS.',
          '<strong>Cách dùng:</strong><br>1. Vào v0.dev, đăng nhập (miễn phí)<br>2. Gõ mô tả component: "A pricing card with 3 tiers, highlighted middle tier"<br>3. AI sinh ra code, bạn copy vào project',
          '<strong>Khi nào dùng:</strong> Khi cần component cụ thể (pricing table, hero section, navbar) và muốn có base code để customize.',
          '<strong>Hạn chế:</strong> Đôi khi code chưa tối ưu, cần AI khác review và sửa.'
        ],
        insight: '✳ v0.dev tốt cho "lấy ý tưởng" — sinh nhiều variants, chọn cái gần nhất, rồi dùng Cursor refine.'
      },
      {
        id: '6.2',
        title: 'Bolt.new — tạo app nhanh từ prompt',
        eyebrow: 'Bolt.new',
        desc: 'StackBlitz AI sinh entire app — dùng khi nào thay Cursor.',
        contentType: 'text',
        paragraphs: [
          'Bolt.new là tool của StackBlitz dùng AI tạo entire application. Khác với Cursor (code editor), Bolt.new là "cloud IDE" — chạy trên trình duyệt, không cần cài gì.',
          '<strong>Cách dùng:</strong><br>1. Vào bolt.new<br>2. Gõ prompt mô tả app muốn tạo<br>3. AI tạo app hoàn chỉnh, có thể preview ngay<br>4. Export code về máy hoặc push lên GitHub'
        ],
        paragraphs_extra: [
          '<strong>Khi nào dùng Bolt thay Cursor:</strong><br>• Cần prototype nhanh, không muốn setup local<br>• Muốn share link cho người khác xem ngay<br>• Cần AI handle deployment luôn'
        ],
        insight: '✳ Bolt.new tốt cho POC (proof of concept). Khi concept thành công, chuyển code sang Cursor để develop tiếp.'
      },
      {
        id: '6.3',
        title: 'Vercel — deploy miễn phí, kết nối GitHub, domain tự động',
        eyebrow: 'Vercel',
        desc: 'Hosting platform miễn phí cho Next.js và Vite — kết nối GitHub để deploy tự động.',
        contentType: 'text',
        paragraphs: [
          'Vercel là nền tảng hosting tốt nhất cho Next.js và Vite apps. Miễn phí cho personal projects, auto-deploy khi push code lên GitHub.',
          '<strong>Cách deploy lần đầu:</strong><br>1. Đăng ký vercel.com bằng GitHub<br>2. Click "Import Project"<br>3. Chọn repo từ GitHub<br>4. Vercel tự nhận framework (Next.js/Vite)<br>5. Click Deploy → có link ngay!'
        ],
        paragraphs_extra: [
          '<strong>Tính năng hay:</strong><br>• Auto-deploy khi push lên main branch<br>• Preview URL cho mỗi PR<br>• Built-in analytics<br>• Custom domain miễn phí'
        ],
        insight: '✳ Vercel + GitHub = deploy tự động. Mỗi lần push code, website tự cập nhật. Không cần làm gì thêm.'
      },
      {
        id: '6.4',
        title: 'Shadcn/ui — thư viện component copy-paste',
        eyebrow: 'Shadcn/ui',
        desc: 'Component library copy-paste — không phải npm package.',
        contentType: 'text',
        paragraphs: [
          'Shadcn/ui không phải "thư viện" theo nghĩa truyền thống (cài qua npm). Đây là collection components bạn COPY vào project — sở hữu code hoàn toàn, có thể customize tùy ý.',
          '<strong>Cách cài:</strong><br><code>npx shadcn@latest init</code> — init config<br><code>npx shadcn@latest add button</code> — thêm component Button vào project',
          '<strong>Components có sẵn:</strong> Button, Card, Dialog, Dropdown, Form, Input, Table, Tabs, Avatar, Calendar...',
          '<strong>Ưu điểm:</strong> Code thuộc về bạn, customize thoải mái, không có "version lock", accessible by default (ARIA compliant).'
        ],
        insight: '✳ Shadcn/ui là "component as code" — bạn copy để hiểu, customize theo nhu cầu. Không phải library bạn import và dùng blind.'
      },
      {
        id: '6.5',
        title: '21st.dev & MagicPatterns — lấy component đẹp sẵn',
        eyebrow: '21st.dev & MagicPatterns',
        desc: 'UI component marketplace — tìm component đẹp, ghép vào project.',
        contentType: 'grid',
        gridItems: [
          { label: '21st.dev', title: 'Tailwind component library', desc: 'Tìm component free/paid, copy code, dùng trong Cursor.' },
          { label: 'MagicPatterns', title: 'UI pattern generator', desc: 'Sinh patterns (backgrounds, borders, grids) bằng AI.' },
          { label: 'ui.shadcn.com', title: 'Shadcn components gallery', desc: 'Xem trước tất cả shadcn components.' },
          { label: 'Tailwind CSS', title: 'Official showcase', desc: 'Examples từ Tailwind team.' }
        ],
        paragraphs: [
          'Các nguồn này cung cấp "inspiration" và "starting point" — không thay thế việc hiểu code và customize cho phù hợp.'
        ],
        insight: '✳ Dùng để "lấy ý tưởng" và "bắt đầu nhanh". Đừng copy blind — đọc code, hiểu cách nó hoạt động.'
      },
      {
        id: '6.6',
        title: 'Dùng tool nào cho việc gì — bảng quyết định nhanh',
        eyebrow: 'So sánh',
        desc: 'Tool nào cho task nào — summary nhanh để không phân vân.',
        contentType: 'compare',
        compareHeaders: ['Bạn cần...', 'Dùng tool...'],
        compareRows: [
          ['Tạo component cụ thể', 'v0.dev, Shadcn/ui'],
          ['Prototype nhanh entire app', 'Bolt.new'],
          ['Host và deploy website', 'Vercel'],
          ['Code trong Cursor', 'Cursor Composer'],
          ['Làm nhiều thứ tự động', 'Claude Code'],
          ['Tìm component đẹp sẵn', '21st.dev, MagicPatterns']
        ],
        insight: '✳ Tool không quan trọng bằng outcome. Dùng tool nào cũng được — miễn là ra được sản phẩm bạn muốn.'
      }
    ]
  },

  // ========== BÀI 07 ==========
  {
    id: 7,
    slug: 'cach-prompt-cho-ai',
    badge: 'PROMPT',
    badgeType: 'dark',
    duration: '~35 phút',
    subLessonCount: 6,
    title: 'Cách prompt cho AI hiểu để code đúng ý bạn',
    titleEm: 'prompt hiệu quả',
    desc: 'Lỗi thường đến từ prompt, không phải từ AI. Cấu trúc prompt tốt = code đúng hơn.',
    tags: ['prompt', 'Cursor AI', 'Claude Code', 'template'],
    difficulty: 'Prompt · thực hành',
    prevLesson: { id: 6, title: 'Công cụ & website hữu ích' },
    nextLesson: { id: 8, title: 'Khi AI code sai' },
    subLessons: [
      {
        id: '7.1',
        title: 'Lỗi thường đến từ prompt, không phải từ AI',
        eyebrow: 'Tại sao AI code sai',
        desc: '80% "AI code sai" thực ra là prompt không rõ ràng.',
        contentType: 'text',
        paragraphs: [
          'Khi AI sinh code không đúng ý, phản xạ đầu tiên thường là "AI ngu". Nhưng thực tế: AI rất thông minh, vấn đề là prompt của bạn chưa đủ rõ.',
          '<strong>Các lỗi prompt phổ biến:</strong><br>• Mô tả chung chung: "làm cái button đẹp" (đẹp là gì?)<br>• Thiếu context: không cho biết project đang dùng framework gì<br>• Quên ràng buộc: không nói kích thước, màu sắc, responsive<br>• Prompt quá dài: thay vì nhiều task nhỏ, gộp thành 1 prompt dài'
        ],
        insight: '✳ Trước khi nói "AI sai", hãy đọc lại prompt của bạn. Bạn đã mô tả đủ rõ chưa? Có thiếu thông tin gì không?'
      },
      {
        id: '7.2',
        title: 'Cấu trúc prompt tốt — Context + Yêu cầu + Ràng buộc',
        eyebrow: 'Cấu trúc prompt tốt',
        desc: 'Công thức 3 phần: cho AI biết bối cảnh, cần làm gì, và giới hạn ra sao.',
        contentType: 'text',
        paragraphs: [
          '<strong>1. Context (Bối cảnh):</strong> Cho AI biết project của bạn dùng gì.<br>Ví dụ: "Dự án Next.js 14 với Tailwind CSS. Component này nằm trong folder app/"',
          '<strong>2. Yêu cầu (Request):</strong> Mô tả chính xác bạn muốn gì.<br>Ví dụ: "Tạo một Button component với 3 variants: primary (bg accent), secondary (border), ghost (transparent)"',
          '<strong>3. Ràng buộc (Constraints):</strong> Giới hạn hoặc yêu cầu đặc biệt.<br>Ví dụ: "Không dùng border-radius. Font: DM Sans. Responsive trên mobile."'
        ],
        insight: '✳ Prompt càng rõ → AI hiểu càng đúng → code càng gần ý bạn. Đừng tiết kiệm chữ — mô tả dư hơn thiếu.'
      },
      {
        id: '7.3',
        title: 'Cách mô tả giao diện cho AI không bị hiểu nhầm',
        eyebrow: 'Mô tả UI',
        desc: 'Dùng từ ngữ cụ thể thay vì mơ hồ. "Đẹp" không có nghĩa với AI.',
        contentType: 'text',
        paragraphs: [
          'AI không có "mắt thẩm mỹ" — nó hiểu theo từng từ. Khi bạn nói "làm button đẹp", AI không biết "đẹp" là gì.',
          '<strong>Mô tả CỤ THỂ thay vì MƠ HỒ:</strong><br>• Sai: "làm button đẹp"<br>• Đúng: "button với bg màu cam-đỏ (#E8410A), chữ trắng, font mono 12px, padding 12px 24px"',
          '<strong>Đoạn này rất quan trọng vì:</strong> Nếu bạn không nói rõ, AI sẽ tự quyết định theo "default" của nó — có thể không phải thứ bạn muốn.'
        ],
        paragraphs_extra: [
          '<strong>Tip:</strong> Khi mô tả layout, dùng từ ngữ vị trí: "2 columns", "left sidebar", "hero full-width", "footer cách bottom 0".'
        ],
        insight: '✳ Treat AI như một developer mới — bạn cần hướng dẫn từng bước, không thể nói "cậu tự hiểu ý tôi".'
      },
      {
        id: '7.4',
        title: 'Dùng prompt có sẵn — đừng tự viết từ đầu',
        eyebrow: 'Prompt Library',
        desc: 'Cộng đồng đã viết rất nhiều prompt tốt — học từ họ và customize.',
        contentType: 'grid',
        gridItems: [
          { label: 'Cursor Rules', title: 'Prompt files cho project', desc: 'Lưu trong .cursor/rules/ — apply cho mọi conversation.' },
          { label: 'CLAUDE.md', title: 'Project-wide instructions', desc: 'Hướng dẫn AI hiểu tech stack, style, conventions của project.' },
          { label: 'PromptViet', title: 'Vietnamese prompt templates', desc: 'Template prompt tiếng Việt cho các task phổ biến.' },
          { label: 'Awesome Cursor', title: 'Cursor rules collection', desc: 'GitHub repo tổng hợp rules cộng đồng.' }
        ],
        paragraphs: [
          'Đừng tự viết prompt từ đầu khi đã có prompt tốt cho use case tương tự. Copy → paste → customize cho phù hợp.'
        ],
        insight: '✳ PromptViet và Awesome Cursor là 2 nguồn bắt đầu tốt. Tìm prompt gần nhất với task của bạn, rồi modify.'
      },
      {
        id: '7.5',
        title: 'Prompt theo từng tình huống — thêm, sửa, refactor',
        eyebrow: 'Prompt theo tình huống',
        desc: 'Mỗi loại task (thêm tính năng, sửa UI, refactor) cần cách prompt khác nhau.',
        contentType: 'text',
        paragraphs: [
          '<strong>1. Thêm tính năng mới:</strong><br>"Thêm feature X vào component Y. Feature gồm: [mô tả]. Design: [link hoặc mô tả]. Tech: [framework]. Không thay đổi code hiện có."',
          '<strong>2. Sửa giao diện:</strong><br>"Sửa component X: [thứ cần sửa]. Từ: [current]. Thành: [desired]. Giữ nguyên logic, chỉ sửa UI."',
          '<strong>3. Refactor code:</strong><br>"Refactor component X: cải thiện [readability/performance/maintainability]. Giữ nguyên functionality."',
          '<strong>4. Debug lỗi:</strong><br>"Có lỗi ở [location]. Lỗi: [mô tả/error message]. Mong đợi: [behavior]. Thực tế: [bug]."'
        ],
        insight: '✳ Prompt cho debug cần rõ: location + error message + expected vs actual. 3 thứ đó giúp AI trace bug nhanh hơn.'
      },
      {
        id: '7.6',
        title: '15 prompt hay dùng nhất — lấy về xài liền',
        eyebrow: 'Copy & điều chỉnh',
        desc: 'Danh sách 15 prompt templates cho các task thường gặp.',
        contentType: 'grid',
        gridItems: [
          { label: '1', title: 'Tạo component mới', desc: '"Create [component] with [features]. Use [styling]. No border-radius."' },
          { label: '2', title: 'Thêm responsive', desc: '"Add responsive breakpoints for mobile/tablet/desktop."' },
          { label: '3', title: 'Fix bug', desc: '"Fix [issue] in [file]. Error: [message]."' },
          { label: '4', title: 'Sửa UI', desc: '"Change [element] from [current] to [desired]."' },
          { label: '5', title: 'Tạo layout', desc: '"Create layout with [structure]. Use CSS Grid/Flexbox."' },
          { label: '6', title: 'Add animation', desc: '"Add [type] animation to [element]. Duration: [time]."' },
          { label: '7', title: 'Extract component', desc: '"Extract [section] into a reusable component."' },
          { label: '8', title: 'Add dark mode', desc: '"Add dark mode toggle. Colors: [light] / [dark]."' }
        ],
        insight: '✳ Copy những prompt này, customize cho phù hợp với project của bạn. Càng dùng nhiều, bạn càng tạo được "personal prompt library".'
      }
    ]
  },

  // ========== BÀI 08 ==========
  {
    id: 8,
    slug: 'khi-ai-code-sai',
    badge: 'DEBUG',
    badgeType: 'dark',
    duration: '~30 phút',
    subLessonCount: 6,
    title: 'Khi AI code sai — cách đọc lỗi & prompt vá lỗi',
    titleEm: 'đọc lỗi & vá lỗi',
    desc: 'Lỗi là bình thường. Biết đọc error message và prompt cho AI fix là kỹ năng quan trọng.',
    tags: ['debug', 'lỗi', 'error', 'fix', 'undo'],
    difficulty: 'Debug · thực hành',
    prevLesson: { id: 7, title: 'Cách prompt cho AI' },
    nextLesson: { id: 9, title: 'Tạo Skills & Workflow' },
    subLessons: [
      {
        id: '8.1',
        title: 'Đừng hoảng — phân biệt lỗi nhỏ vs lỗi cần undo',
        eyebrow: 'Đừng hoảng',
        desc: 'Lỗi nhỏ sửa được. Lỗi lớn cần git reset. Biết phân biệt để không waste time.',
        contentType: 'text',
        paragraphs: [
          'Khi thấy màn hình đỏ đầy lỗi, bước đầu tiên: <strong>BÌNH TĨNH</strong>. Hầu hết lỗi đều sửa được — không có "lỗi không sửa được", chỉ có "chưa biết cách sửa".',
          '<strong>Phân loại lỗi:</strong><br>• <strong>Lỗi nhỏ</strong>: Typo, thiếu import, sai tên biến. AI tự fix được.<br>• <strong>Lỗi vừa</strong>: Logic sai, import lỗi, dependency conflict. Cần chỉnh tay hoặc prompt AI.<br>• <strong>Lỗi lớn</strong>: AI generate lung tung, code không chạy được. Cần undo.'
        ],
        paragraphs_extra: [
          '<strong>Mẹo:</strong> Nếu commit trước khi có lỗi, bạn luôn có thể quay lại. Đây là lý do cần commit thường xuyên.'
        ],
        insight: '✳ "It\'s just a bug, not a feature" — mọi lỗi đều có nguyên nhân và đều sửa được. Thở sâu, đọc lỗi, prompt AI.'
      },
      {
        id: '8.2',
        title: 'Tìm dòng quan trọng trong đống chữ đỏ',
        eyebrow: 'Đọc error message',
        desc: 'Error message có pattern — học cách đọc nhanh để tìm nguyên nhân.',
        contentType: 'text',
        paragraphs: [
          'Error message thường có cấu trúc: <strong>Error Type → Location → Message → Suggestion</strong>.',
          '<strong>Cách đọc nhanh:</strong><br>1. Đọc dòng đầu tiên — đó là "tên" lỗi (SyntaxError, TypeError, ReferenceError...)<br>2. Tìm dòng có đường dẫn file (src/components/Button.tsx:15)<br>3. Đọc phần mô tả — giải thích lỗi gì<br>4. Bỏ qua stack trace (danh sách call chain) trừ khi cần debug sâu'
        ],
        paragraphs_extra: [
          '<strong>Lỗi hay gặp nhất:</strong><br>• <code>Cannot find module</code>: Thiếu cài package hoặc sai import path<br>• <code>is not a function</code>: Gọi sai method hoặc import sai<br>• <code>Unexpected token</code>: Syntax error — thiếu }, ), ;'
        ],
        insight: '✳ Khi không hiểu lỗi: copy toàn bộ error → paste cho Claude/Cursor → "Explain this error and how to fix."'
      },
      {
        id: '8.3',
        title: 'Module not found, port in use, build fail — cách xử lý',
        eyebrow: 'Lỗi phổ biến',
        desc: '5 lỗi hay gặp nhất khi vibecode — nguyên nhân và cách fix.',
        contentType: 'grid',
        gridItems: [
          { label: 'Cannot find module', title: 'Thiếu import/package', desc: 'Chạy npm install. Hoặc kiểm tra import path đúng không.' },
          { label: 'Port 3000 is in use', title: 'Port bị chiếm', desc: 'Chạy lệnh kill port: npx kill-port 3000 hoặc dùng port khác.' },
          { label: 'Build failed', title: 'Build lỗi', desc: 'Đọc error trong terminal, thường là syntax error hoặc type error.' },
          { label: 'Hydration error', title: 'SSR mismatch', desc: 'Code client/server không khớp. Thường do random values hoặc Date.' },
          { label: 'CORS error', title: 'Cross-origin blocked', desc: 'API không cho phép request từ origin khác. Thêm proxy hoặc header.' }
        ],
        insight: '✳ Google search error message luôn là bước đầu tiên khi không biết lỗi gì. Copy paste nguyên dòng lỗi + tên framework.'
      },
      {
        id: '8.4',
        title: 'Cách paste lỗi cho AI fix — đúng cách',
        eyebrow: 'Prompt vá lỗi',
        desc: 'Paste error cho AI fix cũng cần kỹ thuật — không phải cứ copy-paste là xong.',
        contentType: 'text',
        paragraphs: [
          '<strong>Cách đÚNG paste lỗi:</strong><br>1. Copy full error message (không cắt ngắn)<br>2. Cho biết đang ở file nào<br>3. Mô tả mong đợi vs thực tế<br>4. Gợi ý hướng fix (nếu có ý)'
        ],
        paragraphs_extra: [
          '<strong>Prompt mẫu:</strong><br>"Có lỗi khi chạy npm run dev. Error: [paste full error]. File: src/pages/index.tsx. Mong đợi: hiển thị homepage. Thực tế: crash. Đã thử: [cách bạn đã thử].'
        ],
        insight: '✳ AI làm việc tốt hơn khi có context. Error + file + expected vs actual = đủ info để debug.'
      },
      {
        id: '8.5',
        title: 'Khi nào nên undo, khi nào hỏi cộng đồng',
        eyebrow: 'Khi AI bó tay',
        desc: 'Biết giới hạn của AI — khi nào cần human help.',
        contentType: 'text',
        paragraphs: [
          '<strong>Khi nào nên UNDO:</strong><br>• AI generate quá nhiều file không cần thiết<br>• AI làm rối code hiện có<br>• Không biết code đang ở trạng thái nào<br>• Muốn quay lại phiên bản đang chạy được'
        ],
        paragraphs_extra: [
          '<strong>Khi nào hỏi CỘNG ĐỒNG:</strong><br>• Lỗi hiếm gặp, không tìm thấy trên Google<br>• Cần architecture advice<br>• Lỗi liên quan đến specific library version<br>• Stuck quá 30 phút không resolve'
        ],
        insight: '✳ Undo = Ctrl+Z hoặc git reset. Không có gì xấu khi undo. "Fresh start" đôi khi nhanh hơn fix lỗi.'
      },
      {
        id: '8.6',
        title: 'Dùng git stash và git reset khi mọi thứ vỡ',
        eyebrow: 'Git cứu project',
        desc: 'Git commands để rollback về trạng thái đang chạy được.',
        contentType: 'text',
        paragraphs: [
          '<strong>Git Reset (quay về commit trước):</strong><br><code>git reset --hard HEAD~1</code> — quay về 1 commit trước<br><code>git reset --hard [commit-hash]</code> — quay về commit cụ thể'
        ],
        paragraphs_extra: [
          '<strong>Git Stash (tạm lưu thay đổi):</strong><br><code>git stash</code> — lưu tạm thay đổi chưa commit<br><code>git stash pop</code> — lấy lại thay đổi đã stash'
        ],
        insight: '✳ Commit thường xuyên = có checkpoint để quay về. Không commit = không có gì để reset. Commit = BẮT BUỘC.'
      }
    ]
  },

  // ========== BÀI 09 ==========
  {
    id: 9,
    slug: 'tao-skills-va-workflow',
    badge: 'WORKFLOW',
    badgeType: 'dark',
    duration: '~45 phút',
    subLessonCount: 5,
    title: 'Tạo Skills & Workflow cá nhân — cộng đồng đang share gì nhiều nhất?',
    titleEm: 'Skills & Workflow cá nhân',
    desc: 'Cursor Rules, CLAUDE.md, MCP — cách tạo "hướng dẫn sử dụng" cho AI hiểu project của bạn.',
    tags: ['Cursor Rules', 'CLAUDE.md', 'MCP', 'workflow', 'community'],
    difficulty: 'Nâng cao · workflow',
    prevLesson: { id: 8, title: 'Khi AI code sai' },
    nextLesson: { id: 10, title: 'Deploy + Tracking' },
    subLessons: [
      {
        id: '9.1',
        title: 'Cursor Rules — là gì, viết rule đầu tiên',
        eyebrow: 'Cursor Rules',
        desc: 'Rules là file hướng dẫn AI hoạt động đúng cách trong project của bạn.',
        contentType: 'text',
        paragraphs: [
          'Cursor Rules là files trong folder <code>.cursor/rules/</code> chứa instructions cho AI. Khi bạn bắt đầu chat mới, AI đọc rules trước — hiểu context, style, constraints của project.',
          '<strong>Cách tạo rule đầu tiên:</strong><br>1. Tạo folder <code>.cursor/rules/</code> trong project root<br>2. Tạo file <code>my-project.mdc</code><br>3. Viết instructions: tech stack, coding style, conventions, dos and donts'
        ],
        paragraphs_extra: [
          '<strong>Rule template cơ bản:</strong><br>---<br># Project Name<br>## Tech Stack<br>Next.js 14, TypeScript, Tailwind CSS<br>## Style<br>Font: DM Sans. Colors: neutral tones. No border-radius.<br>## Conventions<br>Components go in src/components/. Name: PascalCase.'
        ],
        insight: '✳ Rules giúp AI "nhớ" project — không cần lặp lại context mỗi conversation. Càng chi tiết, AI càng đúng.'
      },
      {
        id: '9.2',
        title: 'CLAUDE.md — file hướng dẫn AI viết đúng style',
        eyebrow: 'CLAUDE.md',
        desc: 'CLAUDE.md là project-level instructions — dùng cho Claude Code và các AI tools khác.',
        contentType: 'text',
        paragraphs: [
          'CLAUDE.md đặt ở project root, chứa high-level instructions về project: mục đích, tech stack, cách làm việc, conventions, guidelines.',
          '<strong>Nội dung nên có:</strong><br>• Project overview và mục tiêu<br>• Tech stack (framework, styling, libraries)<br>• Project structure<br>• Design system (colors, fonts, spacing)<br>• Coding conventions<br>• Common workflows'
        ],
        paragraphs_extra: [
          '<strong>Example CLAUDE.md:</strong><br># My Project\n## Overview\nLanding page builder cho Marketer\n## Tech Stack\nNext.js 14, TypeScript, Tailwind CSS v4\n## Design\n- Font: Instrument Serif (headings), DM Sans (body)\n- Colors: bg #f7f5f0, accent #E8410A\n- No border-radius, no box-shadow'
        ],
        insight: '✳ CLAUDE.md là "playbook" cho AI. Đọc trước khi bắt đầu project mới = AI hiểu bối cảnh ngay.'
      },
      {
        id: '9.3',
        title: 'MCP — kết nối AI với Supabase, Vercel, Notion',
        eyebrow: 'MCP',
        desc: 'Model Context Protocol — cách AI truy cập external tools trực tiếp.',
        contentType: 'text',
        paragraphs: [
          'MCP (Model Context Protocol) cho phép AI "dùng" external tools như thể bạn đang dùng — query database, deploy, đọc docs — mà không cần copy-paste.',
          '<strong>Các MCP servers phổ biến:</strong><br>• <strong>Supabase MCP</strong>: Query PostgreSQL, manage database<br>• <strong>Vercel MCP</strong>: Deploy, check analytics, manage projects<br>• <strong>Notion MCP</strong>: Đọc/ghi Notion pages<br>• <strong>Filesystem MCP</strong>: Đọc/ghi files trong project'
        ],
        paragraphs_extra: [
          '<strong>Setup MCP:</strong><br>1. Cài Cursor MCP hoặc Claude Code MCP<br>2. Thêm server config vào settings<br>3. Connect với API keys<br>4. AI tự động có quyền dùng tools'
        ],
        insight: '✳ MCP = "AI có thể dùng apps như bạn". Giảm drudge work: AI tự query data, tự deploy, không cần hỏi.'
      },
      {
        id: '9.4',
        title: 'Từ ý tưởng đến code hoàn chỉnh trong 1 buổi',
        eyebrow: 'Workflow thực tế',
        desc: 'Workflow 8 bước từ concept đến deployed website.',
        contentType: 'text',
        paragraphs: [
          '<strong>Workflow 8 bước:</strong><br><strong>1. Concept</strong>: Viết mô tả ý tưởng (1-2 đoạn)<br><strong>2. Spec</strong>: Dùng AI lên spec chi tiết (layout, features, design)<br><strong>3. Scaffold</strong>: Tạo project với Cursor Composer<br><strong>4. Core features</strong>: Build từng feature với AI support<br><strong>5. Polish</strong>: Thêm animations, responsive, edge cases<br><strong>6. Test</strong>: Manual test trên localhost<br><strong>7. Deploy</strong>: Push GitHub → Vercel auto-deploy<br><strong>8. Share</strong>: Gửi link cho stakeholders'
        ],
        insight: '✳ 1 buổi (4-6 tiếng) = từ concept đến deployed. Không phải mọi project đều fit, nhưng POC thì hoàn toàn được.'
      },
      {
        id: '9.5',
        title: 'Cursor Rules & CLAUDE.md cộng đồng đang share',
        eyebrow: 'Community picks',
        desc: 'Nguồn tham khảo tốt nhất từ cộng đồng — không cần tự viết từ đầu.',
        contentType: 'grid',
        gridItems: [
          { label: 'Cursor Rules', title: 'Awesome Cursor Rules', desc: 'GitHub repo tổng hợp rules cộng đồng. Search theo framework.' },
          { label: 'CLAUDE.md', title: 'CLAUDE.md collection', desc: 'Examples từ nhiều projects thực tế.' },
          { label: 'Twitter', title: '#vibecode hashtag', desc: 'Marketer/developers share workflow và rules của họ.' },
          { label: 'Reddit', title: 'r/vibecode, r/cursor', desc: 'Discussions về best practices và tips.' }
        ],
        insight: '✳ Bắt đầu từ examples → customize cho phù hợp → refine theo thời gian. Không cần perfect từ đầu.'
      }
    ]
  },

  // ========== BÀI 10 ==========
  {
    id: 10,
    slug: 'deploy-va-tracking',
    badge: 'DEPLOY',
    badgeType: 'dark',
    duration: '~50 phút',
    subLessonCount: 5,
    title: 'Deploy + gắn PostHog & Google Search Console',
    titleEm: 'Deploy + Tracking',
    desc: 'Từ localhost đến live website — Vercel, domain, PostHog analytics, Search Console SEO.',
    tags: ['Vercel', 'GitHub', 'PostHog', 'Google Search Console', 'domain'],
    difficulty: 'Deploy · hoàn thiện',
    badgeExtra: 'ĐÍCH ĐẾN',
    badgeExtraType: 'green' as const,
    prevLesson: { id: 9, title: 'Tạo Skills & Workflow' },
    nextLesson: null,
    subLessons: [
      {
        id: '10.1',
        title: 'Từng bước deploy lần đầu — từ terminal đến link live',
        eyebrow: 'Deploy Vercel',
        desc: 'Deploy Next.js app lên Vercel — từ chưa có gì đến có link public.',
        contentType: 'text',
        paragraphs: [
          '<strong>Deploy lần đầu với Vercel CLI:</strong><br>1. <code>npm i -g vercel</code> — cài Vercel CLI<br>2. <code>vercel</code> trong project folder<br>3. Login/Connect GitHub account<br>4. Chọn project settings (framework: Next.js)<br>5. Deploy! → nhận URL'
        ],
        paragraphs_extra: [
          '<strong>Deploy qua GitHub (recommended):</strong><br>1. Push code lên GitHub repo<br>2. Import repo trong Vercel dashboard<br>3. Vercel tự detect framework<br>4. Click Deploy → done'
        ],
        insight: '✳ Vercel + GitHub = auto-deploy. Mỗi push lên main = website tự update. Không cần làm gì sau lần đầu.'
      },
      {
        id: '10.2',
        title: 'Kết nối domain riêng vào Vercel — mất 5 phút',
        eyebrow: 'Gắn domain',
        desc: 'Mua domain và gắn vào Vercel — website có URL chuyên nghiệp.',
        contentType: 'text',
        paragraphs: [
          '<strong>Mua domain:</strong> Namecheap, GoDaddy, hoặc Mắt Bão (.vn). Giá domain .com ~$10/năm.',
          '<strong>Gắn vào Vercel:</strong><br>1. Vercel Dashboard → Project → Settings → Domains<br>2. Nhập domain (ví dụ: mysite.com)<br>3. Vercel cung cấp DNS records<br>4. Thêm records vào domain provider (thường là A record hoặc CNAME)<br>5. Verify → done!'
        ],
        paragraphs_extra: [
          '<strong>Đợi DNS propagate:</strong> Có thể mất 24-48 giờ để DNS thay đổi có hiệu lực toàn cầu. Thường chỉ 5-30 phút.'
        ],
        insight: '✳ Domain riêng = professional. Thay vì vercel.app link, bạn có mysite.com. Đáng để đầu tư $10/năm.'
      },
      {
        id: '10.3',
        title: 'Cài và cấu hình PostHog — theo dõi người dùng làm gì',
        eyebrow: 'PostHog',
        desc: 'PostHog là analytics tool cho product — track clicks, sessions, funnels.',
        contentType: 'text',
        paragraphs: [
          'PostHog cho biết: người dùng làm gì trên website, họ đến từ đâu, họ thoát ở đâu.',
          '<strong>Cài PostHog (self-hosted free hoặc cloud free tier):</strong><br>1. Đăng ký pos thog.com<br>2. Tạo project → nhận API key<br>3. Cài package: <code>npm install posthog-js</code><br>4. Thêm vào code (file layout hoặc _app): <code>posthog.init(\'YOUR_API_KEY\', { api_host: \'https://app.posthog.com\' })</code>'
        ],
        paragraphs_extra: [
          '<strong>Track events quan trọng:</strong><br>• Page views<br>• CTA clicks (Get Started, Buy Now)<br>• Form submissions<br>• Scroll depth<br>• Feature usage'
        ],
        insight: '✳ Analytics giúp bạn biết: người ta có dùng cái bạn build không? Họ thích gì? Họ bỏ ở đâu? Không có analytics = cảm tính.'
      },
      {
        id: '10.4',
        title: 'Gắn Google Search Console — theo dõi SEO từ ngày đầu',
        eyebrow: 'Search Console',
        desc: 'Google Search Console cho biết: website xuất hiện trên Google chưa? Từ khóa gì? Click rate bao nhiêu?',
        contentType: 'text',
        paragraphs: [
          'Search Console (search.google.com/search-console) là công cụ SEO miễn phí của Google.',
          '<strong>Setup:</strong><br>1. Đăng nhập Search Console<br>2. Thêm property (URL prefix hoặc domain)<br>3. Verify ownership (nhiều cách: upload HTML file, add DNS record, Vercel automatic)<br>4. Submit sitemap (nếu có)'
        ],
        paragraphs_extra: [
          '<strong>Theo dõi:</strong><br>• Performance: impressions, clicks, CTR, position<br>• Pages: crawl errors, indexing status<br>• Enhancements: Core Web Vitals scores'
        ],
        insight: '✳ Submit sitemap.xml giúp Google index nhanh hơn. Next.js có built-in sitemap generation — tìm cách enable trong docs.'
      },
      {
        id: '10.5',
        title: 'Checklist trước khi share link cho người khác',
        eyebrow: 'Checklist',
        desc: '8 bước để website sẵn sàng công khai — tránh xấu hổ.',
        contentType: 'grid',
        gridItems: [
          { label: '1', title: 'Chạy dev server', desc: 'Kiểm tra không có lỗi console.' },
          { label: '2', title: 'Test trên mobile', desc: 'Responsive đúng chưa? Font có đọc được không?' },
          { label: '3', title: 'Check 404 pages', desc: 'Broken links, missing assets?' },
          { label: '4', title: 'Verify meta tags', desc: 'Title, description, OG image có hiện không?' },
          { label: '5', title: 'Test forms', desc: 'Form submit hoạt động chưa? Validation đúng không?' },
          { label: '6', title: 'Check analytics', desc: 'PostHog/Search Console tracking đúng chưa?' },
          { label: '7', title: 'Review content', desc: 'Copy có lỗi chính tả? Hình ảnh có đúng không?' },
          { label: '8', title: 'Share test', desc: 'Gửi link cho 1-2 người test trước.' }
        ],
        insight: '✳ Checklist này mất 15-30 phút. Nó tránh được "ôi không quên chỉnh cái đó" sau khi đã share. Làm từ đầu = professional hơn.'
      }
    ]
  }
];

// Helper functions
export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find(lesson => lesson.slug === slug);
}

export function getLessonById(id: number): Lesson | undefined {
  return lessons.find(lesson => lesson.id === id);
}

export function getAllSlugs(): string[] {
  return lessons.map(lesson => lesson.slug);
}

export function getNextLesson(currentId: number): Lesson | undefined {
  return lessons.find(lesson => lesson.id === currentId + 1);
}

export function getPrevLesson(currentId: number): Lesson | undefined {
  return lessons.find(lesson => lesson.id === currentId - 1);
}

export function getRemainingLessons(currentId: number): Lesson[] {
  return lessons.filter(lesson => lesson.id > currentId);
}
