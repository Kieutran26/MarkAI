export type PostCategory =
  | 'Vibecode'
  | 'Workflow'
  | 'Tool Review'
  | 'Case Study'
  | 'Analytics'
  | 'Deploy';

export type TocSection = {
  id: string;
  label: string;
  title: string;
};

export type ContentBlock =
  | { type: 'h2'; id: string; text: string; emText?: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; html: string }
  | { type: 'insight'; label: string; text: string }
  | { type: 'divider' }
  | { type: 'pullquote'; text: string; emText?: string }
  | { type: 'image'; label: string; caption: string }
  | { type: 'codeblock'; filename: string; code: string }
  | { type: 'steplist'; steps: { title: string; desc: string }[] }
  | { type: 'compare'; headers: [string, string]; rows: { left: string; leftStyle: 'cross' | 'check' | 'normal'; right: string; rightStyle: 'cross' | 'check' | 'normal' }[] };

export type Post = {
  slug: string;
  title: string;
  titleEm?: string;
  category: PostCategory;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  featured?: boolean;
  seriesId?: string;
  prevSlug: string | null;
  nextSlug: string | null;
  prevTitle: string | null;
  nextTitle: string | null;
  prevCategory: string | null;
  nextCategory: string | null;
  toc: TocSection[];
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: 'build-landing-page-cursor-2-tieng',
    title: 'Tôi đã build landing page cho campaign trong 2 tiếng bằng Cursor — đây là những gì xảy ra',
    titleEm: '2 tiếng bằng Cursor',
    category: 'Vibecode',
    excerpt: 'Không có nền tảng code. Không có dev hỗ trợ. Chỉ có Cursor, Claude, và một brief campaign cần chạy gấp. Đây là toàn bộ quá trình từ ý tưởng đến link live — bao gồm cả những chỗ AI làm vỡ mọi thứ.',
    date: '28 Tháng 4, 2026',
    readTime: '8 phút đọc',
    author: 'markAI Team',
    tags: ['Cursor', 'Claude Code', 'Landing page', 'Vibecode', 'Case thực tế'],
    featured: true,
    seriesId: 'vibecode-zero',
    prevSlug: null,
    nextSlug: '5-loi-cursor-lan-dau',
    prevTitle: null,
    nextTitle: '5 lỗi Marketer hay gặp khi dùng Cursor lần đầu — và cách fix',
    prevCategory: null,
    nextCategory: 'Vibecode',
    toc: [
      { id: 'section-1', label: '01', title: 'Bối cảnh — brief đến tay lúc 9 giờ sáng' },
      { id: 'section-2', label: '02', title: 'Bắt đầu với Cursor — prompt đầu tiên' },
      { id: 'section-3', label: '03', title: 'Lần AI làm vỡ hết mọi thứ' },
      { id: 'section-4', label: '04', title: 'Cách tôi fix và tiếp tục' },
      { id: 'section-5', label: '05', title: 'Kết quả sau 2 tiếng' },
      { id: 'section-6', label: '06', title: 'Bài học rút ra' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'Bối cảnh — brief đến tay lúc 9 giờ sáng' },
      { type: 'p', html: 'Campaign ra mắt sản phẩm mới. Deadline: cuối ngày hôm nay. Không có dev. Không có designer. Chỉ có tôi, một brief 2 trang, và đống Figma mockup mà tôi không thể tự code được.' },
      { type: 'p', html: 'Trước đó tôi đã thử vibecode được khoảng 3 tuần — chủ yếu là làm các trang nhỏ, test giao diện. Nhưng lần này là <strong>lần đầu tiên tôi phải dùng nó cho một thứ thật sự quan trọng</strong>, với deadline thật, với người dùng thật.' },
      { type: 'insight', label: 'Setup của tôi', text: 'Cursor (bản free), Claude Sonnet 3.5 (API key riêng), Next.js 15 + Tailwind. Không có template. Bắt đầu từ trang trắng.' },
      { type: 'p', html: 'Tôi có brief với các thông tin sau: tên sản phẩm, 3 tính năng chính, ảnh mockup sản phẩm, màu brand, và một câu tagline. Thế là đủ để bắt đầu.' },
      { type: 'h2', id: 'section-2', text: 'Bắt đầu với Cursor —', emText: 'prompt đầu tiên' },
      { type: 'p', html: 'Tôi không viết prompt dài dòng. Tôi paste brief vào và viết prompt theo cấu trúc mà tôi đã học được sau 3 tuần vibecode:' },
      { type: 'codeblock', filename: 'Prompt gốc tôi dùng', code: '<span class="cc"># Landing page campaign — [Tên sản phẩm]</span>\n\n<span class="ck">Stack:</span> <span class="cv">Next.js 15, Tailwind CSS, TypeScript</span>\n<span class="ck">File:</span>  <span class="cv">app/campaign/page.tsx</span>\n\n<span class="ck">Sections (theo thứ tự):</span>\n<span class="cv">1. Hero — headline, tagline, CTA chính, ảnh mockup</span>\n<span class="cv">2. Features — 3 tính năng, mỗi cái có icon + title + desc</span>\n<span class="cv">3. Social proof — 2 quote ngắn từ beta user (placeholder OK)</span>\n<span class="cv">4. CTA cuối — form email đăng ký, không cần backend</span>\n\n<span class="ck">Design:</span>\n<span class="cv">- Brand color: #B6F500 (dùng cho CTA button, accent)</span>\n<span class="cv">- Font: Inter, clean, không serif</span>\n<span class="cv">- Mobile responsive</span>\n<span class="cv">- Không dùng thư viện UI ngoài Tailwind</span>' },
      { type: 'p', html: 'Cursor tạo ra trang đầu tiên trong khoảng 90 giây. Trông không tệ — cấu trúc đúng, layout hợp lý. Nhưng hero section quá generic và màu sắc chưa đúng.' },
      { type: 'image', label: 'Screenshot · Hero section · Version 1', caption: 'Bản đầu tiên AI tạo ra — cấu trúc đúng nhưng hero chưa đủ mạnh' },
      { type: 'p', html: 'Tôi tiếp tục sửa theo từng phần — mỗi lần chỉ một yêu cầu nhỏ. Đây là điều tôi học được: <strong>đừng yêu cầu AI sửa nhiều thứ cùng lúc</strong>. Một yêu cầu, một thay đổi, kiểm tra ngay.' },
      { type: 'h2', id: 'section-3', text: 'Lần AI làm vỡ hết mọi thứ' },
      { type: 'p', html: 'Khoảng 10:30, mọi thứ đang đi tốt. Tôi nhờ AI thêm animation cho hero section — fade in từ dưới lên khi scroll. Đây là lúc mọi thứ bắt đầu sai.' },
      { type: 'pullquote', text: 'Terminal đỏ hết. Không biết lỗi ở đâu. Không hiểu error message nói gì.', emText: 'Đây là khoảnh khắc mà 80% người mới bỏ cuộc.' },
      { type: 'p', html: 'AI thêm một thư viện animation mà tôi chưa cài. Rồi nó cố fix bằng cách thêm code nữa. Rồi lại fix. Sau 4 lần fix, terminal vẫn đỏ và codebase đã trở nên rối hơn lúc ban đầu.' },
      { type: 'steplist', steps: [
        { title: 'Dừng lại — đừng tiếp tục prompt thêm', desc: 'Khi AI loop fix mãi không xong, tiếp tục prompt là sai. Dừng lại và đánh giá tình huống.' },
        { title: 'Ctrl+Z về checkpoint cuối còn chạy được', desc: 'Hoặc dùng git checkout về commit trước đó nếu bạn đã commit. Tôi chưa commit nên phải undo thủ công.' },
        { title: 'Paste đúng error message — không tóm tắt', desc: 'Copy nguyên văn error từ terminal, paste vào Cursor chat. Đừng tự diễn giải — AI cần thấy lỗi gốc.' },
        { title: 'Đơn giản hoá yêu cầu nếu cần', desc: 'Thay vì animation phức tạp, tôi yêu cầu AI làm transition đơn giản hơn bằng Tailwind thuần. Không cần thư viện ngoài.' },
      ]},
      { type: 'h2', id: 'section-4', text: 'Cách tôi fix và tiếp tục' },
      { type: 'p', html: 'Sau khi undo và có codebase sạch trở lại, tôi prompt lại với yêu cầu đơn giản hơn nhiều:' },
      { type: 'codeblock', filename: 'Prompt fix — đơn giản hoá yêu cầu', code: '<span class="cc"># Bỏ animation library</span>\n<span class="cv">Thay bằng Tailwind transition đơn giản:</span>\n<span class="cv">- Hero fade in: opacity-0 → opacity-100, duration-500</span>\n<span class="cv">- Chỉ dùng class Tailwind sẵn có, không import thêm gì</span>' },
      { type: 'p', html: 'Lần này chạy được ngay. Hiệu ứng không fancy bằng nhưng <strong>đủ tốt</strong> — và quan trọng là không vỡ nữa.' },
      { type: 'insight', label: 'Bài học', text: 'Khi AI loop fix, vấn đề thường là yêu cầu quá phức tạp — không phải AI dốt. Đơn giản hoá yêu cầu thường giải quyết được.' },
      { type: 'compare', headers: ['Cách tôi làm sai', 'Cách đúng'], rows: [
        { left: 'Yêu cầu nhiều thay đổi cùng lúc', leftStyle: 'cross', right: 'Một yêu cầu, một lần', rightStyle: 'check' },
        { left: 'Tiếp tục prompt khi AI loop fix', leftStyle: 'cross', right: 'Dừng, undo, đơn giản hoá', rightStyle: 'check' },
        { left: 'Tóm tắt lỗi cho AI', leftStyle: 'cross', right: 'Paste nguyên văn error message', rightStyle: 'check' },
        { left: 'Dùng thư viện ngoài khi không cần', leftStyle: 'cross', right: 'Tailwind thuần trước, thêm sau nếu cần', rightStyle: 'check' },
      ]},
      { type: 'h2', id: 'section-5', text: 'Kết quả sau 2 tiếng' },
      { type: 'p', html: 'Lúc 11:20 tôi có một landing page hoàn chỉnh, live trên Vercel, với custom domain của công ty. Không hoàn hảo — một vài chi tiết nhỏ tôi biết là chưa đúng với Figma gốc. Nhưng <strong>nó chạy được, trông ổn, và đủ để campaign ra đúng giờ</strong>.' },
      { type: 'image', label: 'Screenshot · Final version · Live', caption: 'Bản cuối cùng sau 2 tiếng — hero, features, CTA form đều hoạt động' },
      { type: 'p', html: 'Kết quả campaign: 340 lượt đăng ký email trong ngày đầu tiên. Không phải do landing page đặc biệt — mà vì campaign ra đúng lúc, đúng người. Landing page chỉ cần "đủ tốt" thôi.' },
      { type: 'h2', id: 'section-6', text: 'Bài học rút ra' },
      { type: 'p', html: 'Sau lần này, tôi hiểu vibecode hơn rất nhiều so với 3 tuần thử nghiệm trước đó. Đây là những điều tôi sẽ làm khác nếu làm lại:' },
      { type: 'steplist', steps: [
        { title: 'Commit sau mỗi phần hoàn chỉnh', desc: 'Git commit sau khi hero xong, features xong, CTA xong. Để có thể rollback nhanh khi AI làm vỡ.' },
        { title: 'Có CLAUDE.md từ đầu', desc: 'File mô tả project, stack, và những thứ AI không được làm. Giúp AI không tự ý thêm thư viện ngoài.' },
        { title: 'Yêu cầu nhỏ hơn tôi nghĩ là cần', desc: 'Khi tôi nghĩ "yêu cầu này nhỏ thôi", thực ra với AI nó có thể phức tạp. Chia nhỏ hơn nữa.' },
      ]},
      { type: 'insight', label: 'Tóm lại', text: 'Vibecode không phải magic — nó là công cụ. Và như mọi công cụ, bạn phải học cách dùng đúng. 2 tiếng để có landing page live là real, nhưng chỉ vì tôi đã mắc lỗi trước đó và biết cách xử lý.' },
    ],
  },
  {
    slug: '5-loi-cursor-lan-dau',
    title: '5 lỗi Marketer hay gặp khi dùng Cursor lần đầu — và cách fix',
    category: 'Vibecode',
    excerpt: 'AI code sai không phải lỗi của AI. Đây là những lỗi prompt phổ biến nhất và cách sửa trong vòng 5 phút.',
    date: '22 Tháng 4, 2026',
    readTime: '6 phút đọc',
    author: 'markAI Team',
    tags: ['Cursor', 'Vibecode', 'Prompt'],
    prevSlug: 'build-landing-page-cursor-2-tieng',
    nextSlug: 'claude-md-la-gi',
    prevTitle: 'Tôi đã build landing page cho campaign trong 2 tiếng bằng Cursor',
    nextTitle: 'CLAUDE.md là gì và tại sao bạn nên tạo nó ngay hôm nay',
    prevCategory: 'Vibecode',
    nextCategory: 'Workflow',
    toc: [
      { id: 'section-1', label: '01', title: 'Lỗi 1: Prompt quá chung chung' },
      { id: 'section-2', label: '02', title: 'Lỗi 2: Không chỉ định stack' },
      { id: 'section-3', label: '03', title: 'Lỗi 3: Thay đổi quá nhiều cùng lúc' },
      { id: 'section-4', label: '04', title: 'Lỗi 4: Không kiểm tra từng bước' },
      { id: 'section-5', label: '05', title: 'Lỗi 5: Không có checkpoint' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'Lỗi 1: Prompt quá chung chung' },
      { type: 'p', html: 'Prompt như "tạo landing page đẹp" không đủ thông tin cho AI hiểu bạn muốn gì.' },
      { type: 'insight', label: 'Fix', text: 'Luôn include: stack (Next.js, Tailwind), file path cụ thể, sections cần có, và design constraints.' },
      { type: 'h2', id: 'section-2', text: 'Lỗi 2: Không chỉ định stack' },
      { type: 'p', html: 'Khi không nói rõ dùng framework nào, AI có thể chọn sai hoặc không optimize được.' },
      { type: 'h2', id: 'section-3', text: 'Lỗi 3: Thay đổi quá nhiều cùng lúc' },
      { type: 'p', html: 'Mỗi lần chỉ nên yêu cầu một thay đổi. Nhiều quá thì AI không debug được.' },
      { type: 'h2', id: 'section-4', text: 'Lỗi 4: Không kiểm tra từng bước' },
      { type: 'p', html: 'Sau mỗi thay đổi, chạy dev server và test trước khi tiếp tục.' },
      { type: 'h2', id: 'section-5', text: 'Lỗi 5: Không có checkpoint' },
      { type: 'p', html: 'Luôn commit git sau mỗi feature hoàn chỉnh để có thể rollback khi cần.' },
    ],
  },
  {
    slug: 'claude-md-la-gi',
    title: 'CLAUDE.md là gì và tại sao bạn nên tạo nó ngay hôm nay',
    category: 'Workflow',
    excerpt: 'Một file text đơn giản có thể khiến AI hiểu bạn mà không cần giải thích lại từ đầu mỗi lần. Đây là cách viết nó.',
    date: '18 Tháng 4, 2026',
    readTime: '5 phút đọc',
    author: 'markAI Team',
    tags: ['Claude Code', 'Workflow', 'Prompt'],
    prevSlug: '5-loi-cursor-lan-dau',
    nextSlug: 'v0-vs-bolt',
    prevTitle: '5 lỗi Marketer hay gặp khi dùng Cursor lần đầu — và cách fix',
    nextTitle: 'v0.dev vs Bolt.new — dùng cái nào khi nào?',
    prevCategory: 'Vibecode',
    nextCategory: 'Tool Review',
    toc: [
      { id: 'section-1', label: '01', title: 'CLAUDE.md là gì?' },
      { id: 'section-2', label: '02', title: 'Tại sao cần nó?' },
      { id: 'section-3', label: '03', title: 'Cấu trúc file mẫu' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'CLAUDE.md là gì?' },
      { type: 'p', html: 'CLAUDE.md là file text đặt ở root của project, chứa thông tin về project, stack, conventions, và những thứ AI cần biết.' },
      { type: 'h2', id: 'section-2', text: 'Tại sao cần nó?' },
      { type: 'p', html: 'Thay vì giải thích lại từ đầu mỗi lần, AI sẽ tự đọc file này và hiểu context của bạn.' },
      { type: 'h2', id: 'section-3', text: 'Cấu trúc file mẫu' },
      { type: 'codeblock', filename: 'CLAUDE.md', code: '<span class="ck"># Project Context</span>\n\n<span class="ck">Stack:</span> <span class="cv">Next.js 15, Tailwind CSS, TypeScript</span>\n<span class="ck">Design:</span> <span class="cv">Brutalist, no border-radius, accent #B6F500</span>\n\n<span class="ck">## Quy tắc quan trọng</span>\n<span class="cv">- Không dùng thư viện UI ngoài Tailwind</span>\n<span class="cv">- Luôn commit sau mỗi feature</span>\n<span class="cv">- Test sau mỗi thay đổi</span>' },
    ],
  },
  {
    slug: 'v0-vs-bolt',
    title: 'v0.dev vs Bolt.new — dùng cái nào khi nào?',
    category: 'Tool Review',
    excerpt: 'Cả hai đều dùng AI để tạo UI từ mô tả. Nhưng chúng phục vụ mục đích khác nhau hoàn toàn. Bảng so sánh thực tế.',
    date: '14 Tháng 4, 2026',
    readTime: '7 phút đọc',
    author: 'markAI Team',
    tags: ['v0.dev', 'Bolt.new', 'Tool Review'],
    prevSlug: 'claude-md-la-gi',
    nextSlug: 'brief-generator-case-study',
    prevTitle: 'CLAUDE.md là gì và tại sao bạn nên tạo nó ngay hôm nay',
    nextTitle: 'Cách một Brand Manager tự build công cụ brief generator — không cần xin dev',
    prevCategory: 'Workflow',
    nextCategory: 'Case Study',
    toc: [
      { id: 'section-1', label: '01', title: 'Tổng quan' },
      { id: 'section-2', label: '02', title: 'So sánh chi tiết' },
      { id: 'section-3', label: '03', title: 'Khi nào dùng cái nào' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'Tổng quan' },
      { type: 'p', html: 'v0.dev và Bolt.new đều là công cụ AI code generation, nhưng với những use case khác nhau.' },
      { type: 'h2', id: 'section-2', text: 'So sánh chi tiết' },
      { type: 'compare', headers: ['v0.dev', 'Bolt.new'], rows: [
        { left: 'Tốt cho UI components', leftStyle: 'check', right: 'Tốt cho full-stack apps', rightStyle: 'check' },
        { left: 'Shadcn/ui focused', leftStyle: 'check', right: 'Next.js + Node.js backend', rightStyle: 'check' },
        { left: 'Export code được', leftStyle: 'check', right: 'Deploy nhanh lên Vercel', rightStyle: 'check' },
      ]},
      { type: 'h2', id: 'section-3', text: 'Khi nào dùng cái nào' },
      { type: 'p', html: 'Dùng <strong>v0.dev</strong> khi bạn cần UI components đẹp và muốn export code. Dùng <strong>Bolt.new</strong> khi cần prototype nhanh full-stack.' },
    ],
  },
  {
    slug: 'brief-generator-case-study',
    title: 'Cách một Brand Manager tự build công cụ brief generator — không cần xin dev',
    category: 'Case Study',
    excerpt: 'Từ Excel có 47 cột đến một tool web điền form và xuất brief tự động. Mất 1 buổi chiều, tiết kiệm 3 tiếng mỗi tuần.',
    date: '10 Tháng 4, 2026',
    readTime: '9 phút đọc',
    author: 'markAI Team',
    tags: ['Case Study', 'Tool', 'Automation'],
    prevSlug: 'v0-vs-bolt',
    nextSlug: 'mcp-la-gi',
    prevTitle: 'v0.dev vs Bolt.new — dùng cái nào khi nào?',
    nextTitle: 'MCP là gì? Giải thích cho người chưa biết gì về code',
    prevCategory: 'Tool Review',
    nextCategory: 'Vibecode',
    toc: [
      { id: 'section-1', label: '01', title: 'Bối cảnh' },
      { id: 'section-2', label: '02', title: 'Quá trình build' },
      { id: 'section-3', label: '03', title: 'Kết quả' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'Bối cảnh' },
      { type: 'p', html: 'Một Brand Manager phải điền Excel với 47 cột mỗi khi viết brief. Mất 3 tiếng mỗi tuần chỉ để format.' },
      { type: 'h2', id: 'section-2', text: 'Quá trình build' },
      { type: 'p', html: 'Dùng Cursor để tạo form web với các trường cần thiết. AI generate code từ brief đơn giản trong 30 phút.' },
      { type: 'h2', id: 'section-3', text: 'Kết quả' },
      { type: 'p', html: 'Tool hoàn thành trong 4 tiếng. Giờ chỉ mất 20 phút để tạo brief với export ra PDF và Excel.' },
    ],
  },
  {
    slug: 'mcp-la-gi',
    title: 'MCP là gì? Giải thích cho người chưa biết gì về code',
    category: 'Vibecode',
    excerpt: 'Model Context Protocol — nghe phức tạp nhưng thực ra là cách AI kết nối trực tiếp với tool của bạn. Supabase, Vercel, Notion — không cần copy-paste nữa.',
    date: '7 Tháng 4, 2026',
    readTime: '5 phút đọc',
    author: 'markAI Team',
    tags: ['MCP', 'Vibecode', 'AI'],
    prevSlug: 'brief-generator-case-study',
    nextSlug: 'posthog-vs-google-analytics',
    prevTitle: 'Cách một Brand Manager tự build công cụ brief generator — không cần xin dev',
    nextTitle: 'PostHog vs Google Analytics — chọn gì cho web vừa deploy xong?',
    prevCategory: 'Case Study',
    nextCategory: 'Analytics',
    toc: [
      { id: 'section-1', label: '01', title: 'MCP là gì?' },
      { id: 'section-2', label: '02', title: 'Dùng được với những tool nào?' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'MCP là gì?' },
      { type: 'p', html: 'MCP (Model Context Protocol) cho phép AI truy cập trực tiếp vào các tool của bạn thay vì phải copy-paste thông tin.' },
      { type: 'h2', id: 'section-2', text: 'Dùng được với những tool nào?' },
      { type: 'p', html: 'Supabase, Vercel, Notion, GitHub, Slack... Nếu tool có API, AI có thể kết nối.' },
    ],
  },
  {
    slug: 'posthog-vs-google-analytics',
    title: 'PostHog vs Google Analytics — chọn gì cho web vừa deploy xong?',
    category: 'Analytics',
    excerpt: 'Nếu bạn chỉ vừa deploy web lần đầu và không biết dùng gì để track user, đây là bài so sánh thực tế nhất.',
    date: '3 Tháng 4, 2026',
    readTime: '6 phút đọc',
    author: 'markAI Team',
    tags: ['Analytics', 'PostHog', 'GA4'],
    prevSlug: 'mcp-la-gi',
    nextSlug: 'custom-domain-vercel',
    prevTitle: 'MCP là gì? Giải thích cho người chưa biết gì về code',
    nextTitle: 'Custom domain trên Vercel — từ mua domain đến gắn xong trong 15 phút',
    prevCategory: 'Vibecode',
    nextCategory: 'Deploy',
    toc: [
      { id: 'section-1', label: '01', title: 'Khi nào dùng GA4' },
      { id: 'section-2', label: '02', title: 'Khi nào dùng PostHog' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'Khi nào dùng GA4' },
      { type: 'p', html: 'Google Analytics phù hợp khi bạn cần SEO insights, traffic sources, và integration với Google Ads.' },
      { type: 'h2', id: 'section-2', text: 'Khi nào dùng PostHog' },
      { type: 'p', html: 'PostHog tốt hơn cho product analytics, session recording, feature flags, và A/B testing.' },
    ],
  },
  {
    slug: 'custom-domain-vercel',
    title: 'Custom domain trên Vercel — từ mua domain đến gắn xong trong 15 phút',
    category: 'Deploy',
    excerpt: 'Hướng dẫn step-by-step để có domain riêng cho web của bạn, không cần biết nhiều về DNS.',
    date: '29 Tháng 3, 2026',
    readTime: '5 phút đọc',
    author: 'markAI Team',
    tags: ['Vercel', 'Deploy', 'Domain'],
    prevSlug: 'posthog-vs-google-analytics',
    nextSlug: 'prompt-template-vibecode',
    prevTitle: 'PostHog vs Google Analytics — chọn gì cho web vừa deploy xong?',
    nextTitle: 'Prompt template cho từng loại task vibecode — copy và dùng ngay',
    prevCategory: 'Analytics',
    nextCategory: 'Workflow',
    toc: [
      { id: 'section-1', label: '01', title: 'Mua domain' },
      { id: 'section-2', label: '02', title: 'Cấu hình DNS' },
      { id: 'section-3', label: '03', title: 'Gắn vào Vercel' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'Mua domain' },
      { type: 'p', html: 'Mua domain từ Namecheap, Cloudflare, hoặc Google Domains. Giá từ $10/năm.' },
      { type: 'h2', id: 'section-2', text: 'Cấu hình DNS' },
      { type: 'p', html: 'Thêm record A hoặc CNAME trỏ về Vercel. Cloudflare khuyến nghị vì có free CDN.' },
      { type: 'h2', id: 'section-3', text: 'Gắn vào Vercel' },
      { type: 'p', html: 'Trong Vercel dashboard, vào Settings > Domains, thêm domain của bạn và verify.' },
    ],
  },
  {
    slug: 'prompt-template-vibecode',
    title: 'Prompt template cho từng loại task vibecode — copy và dùng ngay',
    category: 'Workflow',
    excerpt: '15 prompt đã test thực tế, phân loại theo task type. Copy, paste, và dùng với Cursor hoặc Claude Code.',
    date: '25 Tháng 3, 2026',
    readTime: '6 phút đọc',
    author: 'markAI Team',
    tags: ['Prompt', 'Template', 'Workflow'],
    prevSlug: 'custom-domain-vercel',
    nextSlug: 'shadcn-ui-la-gi',
    prevTitle: 'Custom domain trên Vercel — từ mua domain đến gắn xong trong 15 phút',
    nextTitle: 'Shadcn/ui là gì? Tại sao mọi người dùng Vibecode đều cài nó đầu tiên',
    prevCategory: 'Deploy',
    nextCategory: 'Tool Review',
    toc: [
      { id: 'section-1', label: '01', title: 'Landing page template' },
      { id: 'section-2', label: '02', title: 'Dashboard template' },
      { id: 'section-3', label: '03', title: 'Form template' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'Landing page template' },
      { type: 'codeblock', filename: 'prompt.txt', code: '<span class="cc"># Tạo landing page</span>\n<span class="ck">Stack:</span> <span class="cv">Next.js 15, Tailwind CSS</span>\n<span class="ck">File:</span> <span class="cv">app/page.tsx</span>\n<span class="ck">Sections:</span> <span class="cv">Hero, Features, CTA</span>' },
      { type: 'h2', id: 'section-2', text: 'Dashboard template' },
      { type: 'codeblock', filename: 'prompt.txt', code: '<span class="cc"># Tạo dashboard</span>\n<span class="ck">Stack:</span> <span class="cv">React, Tailwind, Recharts</span>\n<span class="ck">Components:</span> <span class="cv">Sidebar, Stats cards, Table</span>' },
      { type: 'h2', id: 'section-3', text: 'Form template' },
      { type: 'codeblock', filename: 'prompt.txt', code: '<span class="cc"># Tạo form</span>\n<span class="ck">Fields:</span> <span class="cv">name, email, message</span>\n<span class="ck">Validation:</span> <span class="cv">required, email format</span>\n<span class="ck">Style:</span> <span class="cv">minimal, accessible</span>' },
    ],
  },
  {
    slug: 'shadcn-ui-la-gi',
    title: 'Shadcn/ui là gì? Tại sao mọi người dùng Vibecode đều cài nó đầu tiên',
    category: 'Tool Review',
    excerpt: 'Shadcn/ui không phải thư viện UI thông thường. Đây là bộ component copy-paste được, tùy chỉnh hoàn toàn.',
    date: '20 Tháng 3, 2026',
    readTime: '4 phút đọc',
    author: 'markAI Team',
    tags: ['Shadcn/ui', 'UI', 'Tool Review'],
    prevSlug: 'prompt-template-vibecode',
    nextSlug: 'media-plan-tracker',
    prevTitle: 'Prompt template cho từng loại task vibecode — copy và dùng ngay',
    nextTitle: 'Media plan tracker tự động — từ Google Sheet lên web app trong 1 ngày',
    prevCategory: 'Workflow',
    nextCategory: 'Case Study',
    toc: [
      { id: 'section-1', label: '01', title: 'Shadcn/ui là gì?' },
      { id: 'section-2', label: '02', title: 'Tại sao nên dùng?' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'Shadcn/ui là gì?' },
      { type: 'p', html: 'Shadcn/ui là collection của các component React, được copy vào project của bạn thay vì install như package.' },
      { type: 'h2', id: 'section-2', text: 'Tại sao nên dùng?' },
      { type: 'p', html: 'Bạn sở hữu hoàn toàn code, tùy chỉnh được không giới hạn, và có sẵn design system nhất quán.' },
    ],
  },
  {
    slug: 'media-plan-tracker',
    title: 'Media plan tracker tự động — từ Google Sheet lên web app trong 1 ngày',
    category: 'Case Study',
    excerpt: 'Tự động hóa việc theo dõi media plan từ sheet thủ công sang dashboard web với real-time updates.',
    date: '15 Tháng 3, 2026',
    readTime: '11 phút đọc',
    author: 'markAI Team',
    tags: ['Case Study', 'Automation', 'Dashboard'],
    prevSlug: 'shadcn-ui-la-gi',
    nextSlug: 'git-cho-nguoi-khong-biet-code',
    prevTitle: 'Shadcn/ui là gì? Tại sao mọi người dùng Vibecode đều cài nó đầu tiên',
    nextTitle: 'Git cho người không biết code — 5 lệnh đủ để sống sót',
    prevCategory: 'Tool Review',
    nextCategory: 'Vibecode',
    toc: [
      { id: 'section-1', label: '01', title: 'Bối cảnh' },
      { id: 'section-2', label: '02', title: 'Tech stack' },
      { id: 'section-3', label: '03', title: 'Kết quả' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'Bối cảnh' },
      { type: 'p', html: 'Media team đang dùng Google Sheet với 200+ rows để track các campaign. Khó visualize và collaborate.' },
      { type: 'h2', id: 'section-2', text: 'Tech stack' },
      { type: 'p', html: 'Next.js + Supabase cho database + real-time sync. Frontend dùng Recharts cho visualization.' },
      { type: 'h2', id: 'section-3', text: 'Kết quả' },
      { type: 'p', html: 'Dashboard hoàn thành trong 8 tiếng. Team có thể track 50+ campaigns cùng lúc với real-time updates.' },
    ],
  },
  {
    slug: 'git-cho-nguoi-khong-biet-code',
    title: 'Git cho người không biết code — 5 lệnh đủ để sống sót',
    category: 'Vibecode',
    excerpt: 'Git không khó. Chỉ cần 5 lệnh cơ bản là đủ để dùng vibecode an toàn mà không làm mất code.',
    date: '10 Tháng 3, 2026',
    readTime: '5 phút đọc',
    author: 'markAI Team',
    tags: ['Git', 'Vibecode', 'Basics'],
    prevSlug: 'media-plan-tracker',
    nextSlug: 'posthog-dashboard-10-phut',
    prevTitle: 'Media plan tracker tự động — từ Google Sheet lên web app trong 1 ngày',
    nextTitle: 'Đọc hiểu dashboard PostHog trong 10 phút — không cần biết data',
    prevCategory: 'Case Study',
    nextCategory: 'Analytics',
    toc: [
      { id: 'section-1', label: '01', title: 'git init' },
      { id: 'section-2', label: '02', title: 'git add / git commit' },
      { id: 'section-3', label: '03', title: 'git checkout' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'git init' },
      { type: 'p', html: 'Khởi tạo project Git. Chỉ làm một lần khi bắt đầu.' },
      { type: 'h2', id: 'section-2', text: 'git add / git commit' },
      { type: 'p', html: 'Lưu checkpoint. Làm thường xuyên sau mỗi feature hoàn chỉnh.' },
      { type: 'h2', id: 'section-3', text: 'git checkout' },
      { type: 'p', html: 'Quay về checkpoint trước đó. Dùng khi AI làm vỡ code và cần rollback.' },
    ],
  },
  {
    slug: 'posthog-dashboard-10-phut',
    title: 'Đọc hiểu dashboard PostHog trong 10 phút — không cần biết data',
    category: 'Analytics',
    excerpt: 'PostHog có nhiều metrics. Đây là cách đọc những con số quan trọng nhất cho người mới.',
    date: '5 Tháng 3, 2026',
    readTime: '7 phút đọc',
    author: 'markAI Team',
    tags: ['PostHog', 'Analytics', 'Dashboard'],
    prevSlug: 'git-cho-nguoi-khong-biet-code',
    nextSlug: null,
    prevTitle: 'Git cho người không biết code — 5 lệnh đủ để sống sót',
    nextTitle: null,
    prevCategory: 'Vibecode',
    nextCategory: null,
    toc: [
      { id: 'section-1', label: '01', title: 'Các metrics quan trọng' },
      { id: 'section-2', label: '02', title: 'Cách đọc funnel' },
    ],
    content: [
      { type: 'h2', id: 'section-1', text: 'Các metrics quan trọng' },
      { type: 'p', html: 'Unique visitors, pageviews, bounce rate, session duration. Đây là 4 metrics cơ bản cần theo dõi.' },
      { type: 'h2', id: 'section-2', text: 'Cách đọc funnel' },
      { type: 'p', html: 'Funnel cho thấy user drop off ở đâu. Nếu 100% users rời ở step 2, có vấn đề ở step đó.' },
    ],
  },
];

export const featuredPost = posts.find(p => p.featured) || posts[0];

export const getPostsByCategory = (category: PostCategory | 'Tất cả') => {
  if (category === 'Tất cả') return posts;
  return posts.filter(p => p.category === category);
};

export const getRelatedPosts = (currentSlug: string, category: PostCategory, limit = 3) => {
  return posts
    .filter(p => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
};

export const getPostBySlug = (slug: string) => {
  return posts.find(p => p.slug === slug);
};
