export type CaseDifficulty = 'Zero Code' | 'Cơ bản' | 'Nâng cao';

export type CaseCategory =
  | 'all'
  | 'landing-page'
  | 'lead-form'
  | 'mini-tools'
  | 'prompt-workflow'
  | 'debug-errors'
  | 'deploy-tracking';

export interface CaseCategoryMeta {
  id: CaseCategory;
  name: string;
  shortName: string;
  icon: string;
  desc: string;
}

export interface CaseStep {
  step: string;
  action: string;
  promptPreview?: string;
}

export interface VibecodeCase {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: CaseCategory;
  categoryLabel: string;
  difficulty: CaseDifficulty;
  timeEstimate: string;
  targetSlug: string;
  tools: string[];
  badge?: string;
  problem: string;
  solution: string;
  deliverable: string;
  steps: CaseStep[];
  keyTakeaway: string;
}

export const CASE_CATEGORIES: CaseCategoryMeta[] = [
  {
    id: 'all',
    name: 'Tất cả Case Thực Chiến',
    shortName: 'Tất cả',
    icon: '⚡',
    desc: 'Toàn bộ các tình huống giải quyết bài toán marketing bằng code và AI.'
  },
  {
    id: 'landing-page',
    name: 'Landing Page & Web Bán Hàng',
    shortName: 'Landing Page',
    icon: '🚀',
    desc: 'Tự dựng trang bán hàng, bio link, portfolio mà không cần đợi dev.'
  },
  {
    id: 'lead-form',
    name: 'Thu Thập Lead & Form Tự Động',
    shortName: 'Form & Lead',
    icon: '📥',
    desc: 'Form thu thập email, đẩy data về Google Sheets, popup đếm ngược.'
  },
  {
    id: 'mini-tools',
    name: 'Mini Tool & Calculator Tương Tác',
    shortName: 'Mini Tool & Quiz',
    icon: '🧮',
    desc: 'Tool tính ROI, bài trắc nghiệm phân loại khách hàng, widget giữ chân.'
  },
  {
    id: 'prompt-workflow',
    name: 'Kỹ Thuật Prompt & Điều Khiển AI',
    shortName: 'Prompt & Workflow',
    icon: '💬',
    desc: 'Prompt khuôn mẫu 1-hit, file rules, chia việc cho Claude Code & Cursor.'
  },
  {
    id: 'debug-errors',
    name: 'Cấp Cứu Khi AI Báo Lỗi (Fix Bug)',
    shortName: 'Sửa Lỗi & Fix Bug',
    icon: '🚑',
    desc: 'Khắc phục khi vỡ giao diện mobile, trắng màn hình, hoặc AI lặp lỗi.'
  },
  {
    id: 'deploy-tracking',
    name: 'Deploy, Tên Miền & Đo Lường',
    shortName: 'Deploy & Tracking',
    icon: '🌐',
    desc: 'Đưa web lên Vercel miễn phí, gắn tên miền riêng và cài đặt GA4/Pixel.'
  }
];

export const VIBECODE_CASES: VibecodeCase[] = [
  // ========== NHÓM 1: LANDING PAGE & WEB BÁN HÀNG ==========
  {
    id: 'case-01',
    slug: 'landing-page-countdown-30-phut',
    number: 'CASE 01',
    title: 'Dựng Landing Page bán hàng có Countdown trong 30 phút',
    subtitle: 'Giải quyết bài toán cần web gấp cho đợt Flash Sale mà dev bận 2 tuần.',
    category: 'landing-page',
    categoryLabel: 'Landing Page',
    difficulty: 'Zero Code',
    timeEstimate: '~25 phút',
    targetSlug: '/vibecode/dung-giao-dien-web-nhanh-voi-ai/bai-4-5',
    tools: ['v0.dev', 'Cursor', 'Vercel'],
    badge: 'PHỔ BIẾN NHẤT',
    problem: 'Bạn cần một trang landing page có đồng hồ đếm ngược gấp cho đợt Flash Sale cuối tuần, nếu gửi ticket cho team kỹ thuật thì phải đợi 2 tuần.',
    solution: 'Dùng v0.dev sinh toàn bộ cấu trúc giao diện từ mô tả text, sau đó tải code về Cursor để tinh chỉnh thời gian và deploy lên Vercel trong 5 phút.',
    deliverable: '1 trang web bán hàng hoàn chỉnh chạy thật trên internet, responsive mượt trên điện thoại, đồng hồ đếm ngược nhảy từng giây.',
    steps: [
      {
        step: 'Bước 1: Sinh khung UI trên v0.dev',
        action: 'Gõ prompt mô tả cấu trúc: Hero section + Đồng hồ đếm ngược 48h + Bảng 3 gói giá + Nút Mua Ngay.',
        promptPreview: 'Create a modern, high-converting flash sale landing page with a live 48-hour countdown timer, 3 pricing tiers with the middle one highlighted as Best Value, customer reviews slider, and bold orange CTA buttons.'
      },
      {
        step: 'Bước 2: Tải code về máy và mở bằng Cursor',
        action: 'Tải file zip từ v0, giải nén và mở bằng Cursor Composer để sửa text, giá tiền và hình ảnh sản phẩm của bạn.'
      },
      {
        step: 'Bước 3: Deploy lên Vercel',
        action: 'Đẩy lên GitHub hoặc dùng lệnh Vercel CLI để có link web chính thức .vercel.app chia sẻ cho khách.'
      }
    ],
    keyTakeaway: 'Bạn không cần viết từng dòng CSS — chỉ cần biết ghép các khối component từ AI và thay nội dung của thương hiệu.'
  },
  {
    id: 'case-02',
    slug: 'clone-giao-dien-va-tuy-bien-brand',
    number: 'CASE 02',
    title: 'Nhái phong cách 1 web quốc tế đẹp & biến thành của mình',
    subtitle: 'Không cần biết vẽ Figma vẫn có website sang trọng chuẩn quốc tế.',
    category: 'landing-page',
    categoryLabel: 'Landing Page',
    difficulty: 'Cơ bản',
    timeEstimate: '~20 phút',
    targetSlug: '/vibecode/dung-giao-dien-web-nhanh-voi-ai/bai-4-3',
    tools: ['DESIGN.md', 'Cursor', 'Tailwind CSS'],
    badge: 'THỰC CHIẾN',
    problem: 'Bạn thấy một trang web nước ngoài có layout và typography cực đẹp, muốn áp dụng cho thương hiệu mình nhưng không có file Figma và không rành CSS.',
    solution: 'Trích xuất bảng màu, font chữ, spacing thành file DESIGN.md, sau đó nạp cho Cursor để dựng lại cấu trúc tương tự với nội dung tiếng Việt của bạn.',
    deliverable: 'Website có gu thẩm mỹ cao cấp, màu sắc và font chuẩn bộ nhận diện thương hiệu của bạn mà không tốn tiền thuê UI designer.',
    steps: [
      {
        step: 'Bước 1: Chụp ảnh và trích xuất Style',
        action: 'Dùng công cụ inspect hoặc prompt AI phân tích cấu trúc giao diện mẫu thành tài liệu DESIGN.md.',
        promptPreview: 'Phân tích giao diện trang web này và tạo file DESIGN.md gồm: Bảng màu Hex (chính, phụ, nền), Font chữ, Spacing, Bo góc (Border Radius), và Style đổ bóng.'
      },
      {
        step: 'Bước 2: Đưa DESIGN.md vào Cursor làm ngữ cảnh',
        action: 'Gắn file DESIGN.md vào prompt của Cursor để AI tự động tuân thủ bảng màu và không dùng mã màu linh tinh.'
      },
      {
        step: 'Bước 3: Ráp nội dung tiếng Việt và hình ảnh của bạn',
        action: 'Thay thế các đoạn text tiếng Anh mẫu bằng thông điệp marketing và hình ảnh sản phẩm của bạn.'
      }
    ],
    keyTakeaway: 'Muốn AI code đẹp, bí quyết không nằm ở câu chữ dài dòng mà nằm ở việc cung cấp file DESIGN.md chuẩn.'
  },
  {
    id: 'case-03',
    slug: 'trang-bio-link-da-nang-thay-the-linktree',
    number: 'CASE 03',
    title: 'Xây trang Bio Link đa năng thay thế Linktree ($10/tháng)',
    subtitle: 'Tiết kiệm chi phí phần mềm hàng năm và gắn mã tracking tùy biến 100%.',
    category: 'landing-page',
    categoryLabel: 'Landing Page',
    difficulty: 'Zero Code',
    timeEstimate: '~15 phút',
    targetSlug: '/vibecode/dung-giao-dien-web-nhanh-voi-ai/bai-4-1',
    tools: ['Cursor', 'Vercel', 'Tailwind'],
    badge: 'TIẾT KIỆM TIỀN',
    problem: 'Linktree bản miễn phí thì gắn logo xấu xí, không cho gắn Facebook Pixel và không gắn được tên miền riêng; bản trả phí thì $10/tháng.',
    solution: 'Tự vibecode một trang Bio Link chỉ gồm 1 file HTML/React nhẹ tênh, gắn avatar phát sáng, danh sách link mạng xã hội và nhúng sẵn Pixel.',
    deliverable: 'Trang Bio Link chạy siêu tốc (dưới 0.3s), không dính logo của bên thứ ba, gắn được domain riêng cá nhân hoàn toàn miễn phí.',
    steps: [
      {
        step: 'Bước 1: Prompt tạo trang Bio Link cá nhân',
        action: 'Yêu cầu Cursor tạo 1 trang profile đơn giản tối ưu cho điện thoại di động.',
        promptPreview: 'Tạo cho tôi một trang Bio Link mobile-first hiện đại: Nền tối sang trọng, Avatar tròn viền neon, Tên & Tiêu đề, 5 nút liên kết có hiệu ứng hover nảy nhẹ, và footer mạng xã hội.'
      },
      {
        step: 'Bước 2: Thêm liên kết mạng xã hội & bio của bạn',
        action: 'Điền link Shopee, TikTok, YouTube, Podcast và tài liệu miễn phí của bạn vào danh sách link.'
      },
      {
        step: 'Bước 3: Deploy lên tên miền cá nhân',
        action: 'Đưa lên Vercel và gắn subdomain như bio.tenban.com hoặc link.brand.vn.'
      }
    ],
    keyTakeaway: 'Những trang đơn giản như Bio Link bạn hoàn toàn có thể tự làm trong 15 phút thay vì trả tiền mua SaaS trọn đời.'
  },

  // ========== NHÓM 2: THU THẬP LEAD & FORM TỰ ĐỘNG ==========
  {
    id: 'case-04',
    slug: 'form-nhan-lead-tu-dong-ve-google-sheets',
    number: 'CASE 04',
    title: 'Form đăng ký nhận Ebook tự động đổ Data về Google Sheets',
    subtitle: 'Thu thập họ tên, email, số điện thoại và lưu ngay vào Google Sheets không tốn 1 đồng.',
    category: 'lead-form',
    categoryLabel: 'Form & Lead',
    difficulty: 'Cơ bản',
    timeEstimate: '~20 phút',
    targetSlug: '/vibecode/cong-cu-website-huu-ich/bai-6-1',
    tools: ['Google Apps Script', 'Google Sheets', 'Cursor'],
    badge: 'MARKETER NÊN HỌC',
    problem: 'Muốn làm chiến dịch tặng Ebook thu thập thông tin khách hàng, nhưng Typeform giới hạn 10 câu trả lời/tháng, mua gói trả phí thì lãng phí.',
    solution: 'Tạo form đăng ký bằng HTML/React và kết nối trực tiếp với 1 script Google Apps Script miễn phí để ghi dòng mới vào Google Sheets ngay tức thì.',
    deliverable: 'Form đăng ký mượt mà, khách bấm gửi là thông tin xuất hiện ngay trên trang tính Google Sheets của team bạn.',
    steps: [
      {
        step: 'Bước 1: Chuẩn bị bảng Google Sheets và lấy Web App URL',
        action: 'Mở Google Sheets, vào Extensions > Apps Script, dán đoạn mã xử lý POST do AI viết và Deploy as Web App.'
      },
      {
        step: 'Bước 2: Yêu cầu AI viết Form thu thập kèm fetch API',
        action: 'Bảo Cursor tạo Form với các trường Tên, Email, SĐT và gửi dữ liệu về Web App URL.',
        promptPreview: 'Tạo một form nhận Ebook bằng React gồm: Họ tên, Email, Số điện thoại. Khi người dùng submit, gửi POST request dạng form-data đến Google Apps Script URL sau: [URL của bạn]. Hiển thị trạng thái Loading và thông báo thành công đẹp mắt.'
      },
      {
        step: 'Bước 3: Test gửi thử dữ liệu và kiểm tra Sheet',
        action: 'Điền thử thông tin kiểm tra xem dòng mới có xuất hiện ngay trong Google Sheets hay không.'
      }
    ],
    keyTakeaway: 'Google Sheets kết hợp với Apps Script là giải pháp Database miễn phí, quen thuộc và mạnh mẽ nhất cho marketer thu thập lead.'
  },
  {
    id: 'case-05',
    slug: 'popup-exit-intent-dem-nguoc-tang-chuyen-doi',
    number: 'CASE 05',
    title: 'Tạo Popup Exit-Intent đếm ngược giữ chân khách rời trang',
    subtitle: 'Bắt chuyển động chuột khi khách định tắt tab để tặng mã giảm giá 10%.',
    category: 'lead-form',
    categoryLabel: 'Form & Lead',
    difficulty: 'Cơ bản',
    timeEstimate: '~15 phút',
    targetSlug: '/vibecode/cong-cu-website-huu-ich/bai-6-4',
    tools: ['Cursor', 'JavaScript', 'LocalStorage'],
    badge: 'TĂNG CONVERSION',
    problem: '70% khách hàng ghé thăm trang web rồi lẳng lặng rời đi mà không thực hiện bất kỳ hành động nào, làm lãng phí chi phí chạy quảng cáo.',
    solution: 'Cài đặt logic Exit-Intent: khi con trỏ chuột di chuyển nhanh lên phía trên trình duyệt (chuẩn bị bấm nút X), kích hoạt 1 popup giảm giá đặc biệt.',
    deliverable: 'Popup bắt mắt tặng voucher 10%, có đếm ngược 10 phút để tạo tính khẩn cấp, ghi nhớ LocalStorage để không hiện lại nếu khách đã đóng.',
    steps: [
      {
        step: 'Bước 1: Viết hook phát hiện hành vi rời trang',
        action: 'Yêu cầu Cursor tạo custom hook lắng nghe sự kiện `mouseleave` ở đỉnh trình duyệt.',
        promptPreview: 'Tạo một popup Exit-Intent trong React: Khi người dùng rê chuột lên mép trên màn hình để đóng tab, popup hiện lên với thông điệp: "Đừng đi vội! Nhận voucher giảm 10% ngay". Kèm 1 ô nhập email và đồng hồ đếm ngược 10 phút. Nếu người dùng bấm đóng popup, lưu vào localStorage để không hiện lại trong 24 giờ.'
      },
      {
        step: 'Bước 2: Ráp vào trang hiện tại',
        action: 'Thêm component Popup vào cuối trang web của bạn.'
      },
      {
        step: 'Bước 3: Kiểm tra thử nghiệm',
        action: 'Di chuột ra khỏi cửa sổ và xem hiệu ứng xuất hiện của popup.'
      }
    ],
    keyTakeaway: 'Một đoạn script nhỏ do AI viết có thể giúp bạn vớt lại từ 5% đến 15% khách hàng đang chuẩn bị rời khỏi phễu bán hàng.'
  },
  {
    id: 'case-06',
    slug: 'ban-lead-ve-telegram-slack-tuc-thi',
    number: 'CASE 06',
    title: 'Bắn thông báo Lead mới về Telegram / Slack tức thì trong 1 giây',
    subtitle: 'Giúp đội ngũ Sales chốt đơn trong "5 phút vàng" ngay khi khách vừa điền form.',
    category: 'lead-form',
    categoryLabel: 'Form & Lead',
    difficulty: 'Cơ bản',
    timeEstimate: '~20 phút',
    targetSlug: '/vibecode/cong-cu-website-huu-ich/bai-6-6',
    tools: ['Telegram Bot API', 'Webhook', 'Cursor'],
    badge: 'TỰ ĐỘNG HÓA',
    problem: 'Khách điền form lúc 10h sáng nhưng đến chiều kiểm tra mail mới thấy, lúc đó khách đã mua của đối thủ hoặc không còn nhớ mình là ai.',
    solution: 'Kết nối Form với Telegram Bot API hoàn toàn miễn phí, mỗi khi có khách đăng ký, điện thoại của bạn và team sales nổ chuông báo tin nhắn ngay lập tức.',
    deliverable: 'Bot Telegram tự động gửi tin nhắn định dạng rõ ràng: Tên khách, SĐT, Email, Nguồn chiến dịch và Thời gian gửi.',
    steps: [
      {
        step: 'Bước 1: Tạo Bot Telegram qua @BotFather',
        action: 'Mở Telegram, chat với @BotFather để tạo bot mới và lấy BOT_TOKEN và CHAT_ID nhóm của bạn.'
      },
      {
        step: 'Bước 2: Yêu cầu AI tích hợp hàm gửi tin nhắn vào Form',
        action: 'Bảo Cursor thêm hàm gửi request tới API Telegram khi form submit thành công.',
        promptPreview: 'Sau khi lưu form thành công, hãy gửi một tin nhắn thông báo về Telegram bot bằng Telegram SendMessage API với định dạng: 🚨 CÓ LEAD MỚI! \n- Họ tên: {name} \n- SĐT: {phone} \n- Email: {email} \n- Link trang: {url}'
      },
      {
        step: 'Bước 3: Bấm gửi thử và kiểm tra chuông Telegram',
        action: 'Điền form mẫu trên web và đón nhận tin nhắn thông báo về điện thoại.'
      }
    ],
    keyTakeaway: 'Thời gian phản hồi quyết định tỷ lệ chốt sale. Tích hợp bot thông báo Telegram miễn phí nhanh gấp 10 lần việc chờ email.'
  },

  // ========== NHÓM 3: MINI TOOL & INTERACTIVE CALCULATOR ==========
  {
    id: 'case-07',
    slug: 'tool-tinh-roi-ngan-sach-quang-cao',
    number: 'CASE 07',
    title: 'Tạo công cụ tính ROI & Ngân sách Quảng cáo cho khách tự bấm số',
    subtitle: 'Biến bảng tính Excel khô khan thành công cụ tương tác giữ chân người dùng cực lâu.',
    category: 'mini-tools',
    categoryLabel: 'Mini Tool & Quiz',
    difficulty: 'Cơ bản',
    timeEstimate: '~25 phút',
    targetSlug: '/vibecode/cong-cu-website-huu-ich/bai-6-2',
    tools: ['React State', 'Tailwind', 'Cursor'],
    badge: 'HÚT TRAFFIC SEO',
    problem: 'Khách hàng luôn thắc mắc "Bỏ 20 triệu chạy ads thì thu về bao nhiêu đơn?", gửi file Excel thì khách lười tải, viết bài phân tích dài dòng thì khách không đọc.',
    solution: 'Vibecode một mini-tool tính ROI tương tác trực quan: có các thanh trượt kéo chọn Ngân sách, Giá bán sản phẩm, Tỷ lệ chuyển đổi -> Tự tính Doanh thu dự kiến và Lợi nhuận ròng.',
    deliverable: 'Công cụ tính toán mượt mà, hiển thị số liệu trực quan, có nút "Nhận file kế hoạch chi tiết" để thu thập lead.',
    steps: [
      {
        step: 'Bước 1: Xác định công thức tính toán',
        action: 'Liệt kê các biến số: Ngân sách, CPC trung bình, Tỷ lệ chốt, Giá trị đơn trung bình (AOV).'
      },
      {
        step: 'Bước 2: Prompt AI dựng giao diện Slider và kết quả realtime',
        action: 'Nhờ Cursor viết component tương tác tính toán theo công thức.',
        promptPreview: 'Tạo cho tôi một công cụ Web Calculator tính ROI Marketing: Người dùng kéo thanh trượt chọn Ngân sách (từ 5tr đến 100tr) và Tỷ lệ chuyển đổi (1% - 10%). Tự động tính: Số Click, Số Đơn hàng, Doanh thu và ROI. Thiết kế theo phong cách hiện đại với thẻ màu cam nổi bật kết quả.'
      },
      {
        step: 'Bước 3: Thêm nút tải báo cáo hoặc copy kết quả',
        action: 'Thêm nút CTA để khách nhập email nếu muốn nhận bản phân tích chi tiết cho ngành hàng của họ.'
      }
    ],
    keyTakeaway: 'Free Tool là chiến lược Marketing (Engineering as Marketing) mang lại tỷ lệ giữ chân và backlink tự nhiên cao nhất hiện nay.'
  },
  {
    id: 'case-08',
    slug: 'quiz-trac-nghiem-phan-loai-khach-hang',
    number: 'CASE 08',
    title: 'Xây dựng Quiz / Trắc nghiệm phân loại khách hàng để lọc Lead xịn',
    subtitle: 'Tăng tương tác gấp 5 lần so với bài viết thông thường và phân khúc lead chuẩn xác.',
    category: 'mini-tools',
    categoryLabel: 'Mini Tool & Quiz',
    difficulty: 'Cơ bản',
    timeEstimate: '~25 phút',
    targetSlug: '/vibecode/cong-cu-website-huu-ich/bai-6-5',
    tools: ['v0.dev', 'Cursor', 'JavaScript State'],
    badge: 'VIRAL LEAD MAGNET',
    problem: 'Form đăng ký bình thường nhận về rất nhiều thông tin rác hoặc khách không đúng chân dung, team sales mất nhiều công gọi mà không chốt được.',
    solution: 'Tạo một bộ câu hỏi trắc nghiệm 4-5 câu (Quiz), người dùng chọn đáp án theo tình trạng của mình và nhận được đánh giá cá nhân hóa kèm giải pháp tương ứng.',
    deliverable: 'Ứng dụng Quiz tương tác từng bước (step-by-step), có thanh tiến trình, hiển thị kết quả phân loại và lưu tag chân dung vào database.',
    steps: [
      {
        step: 'Bước 1: Soạn 4 câu hỏi phân loại',
        action: 'Ví dụ: Quy mô ngân sách hàng tháng? Kênh quảng cáo chính đang chạy? Khó khăn lớn nhất gặp phải?'
      },
      {
        step: 'Bước 2: Yêu cầu AI dựng flow Quiz đa bước',
        action: 'Nhờ Cursor tạo wizard form mượt mà có hiệu ứng chuyển cảnh.',
        promptPreview: 'Tạo một mini-app Quiz đánh giá sức khỏe Marketing gồm 4 câu hỏi trắc nghiệm. Mỗi lần chọn xong tự động chuyển sang câu tiếp theo có animation mượt mà. Ở màn hình cuối, hiển thị Điểm số đánh giá và form điền email để nhận gợi ý lộ trình cải thiện.'
      },
      {
        step: 'Bước 3: Kết nối gửi kết quả về email hoặc Google Sheets',
        action: 'Lưu đáp án của khách cùng với email để team sales nắm rõ nhu cầu trước khi gọi điện tư vấn.'
      }
    ],
    keyTakeaway: 'Khách hàng rất thích làm trắc nghiệm về bản thân họ. Quiz vừa thu hút tương tác vừa giúp bạn phân loại khách hàng tự động.'
  },
  {
    id: 'case-09',
    slug: 'widget-faq-accordion-co-o-tim-kiem-nhanh',
    number: 'CASE 09',
    title: 'Widget FAQ có ô tìm kiếm tức thì & mở Accordion thông minh',
    subtitle: 'Giải đáp thắc mắc khách hàng ngay trên trang, giảm 40% câu hỏi trùng lặp cho CSKH.',
    category: 'mini-tools',
    categoryLabel: 'Mini Tool & Quiz',
    difficulty: 'Zero Code',
    timeEstimate: '~15 phút',
    targetSlug: '/vibecode/cong-cu-website-huu-ich/bai-6-4',
    tools: ['Shadcn/ui', 'Cursor', 'Tailwind'],
    badge: 'TIỆN ÍCH UI',
    problem: 'Khách hàng có nhiều câu hỏi về chính sách hoàn tiền, thời gian giao hàng, bảo hành... nhưng phải kéo một danh sách dài dằng dặc để tìm câu trả lời.',
    solution: 'Tạo một widget FAQ dạng Accordion (bấm vào mới xổ ra) đi kèm ô tìm kiếm thời gian thực — gõ từ khóa tới đâu là lọc câu hỏi liên quan tới đó.',
    deliverable: 'Khối câu hỏi thường gặp gọn gàng, người dùng tìm kiếm câu trả lời trong 1 giây, nâng cao trải nghiệm mua hàng.',
    steps: [
      {
        step: 'Bước 1: Chuẩn bị danh sách 10 câu hỏi và câu trả lời thường gặp',
        action: 'Tổng hợp từ tin nhắn fanpage hoặc các câu hỏi khách hàng hay thắc mắc nhất.'
      },
      {
        step: 'Bước 2: Prompt AI viết component FAQ với bộ lọc tìm kiếm',
        action: 'Yêu cầu Cursor tạo component Accordion kết hợp `input search`.',
        promptPreview: 'Tạo cho tôi một component FAQ Accordion bằng React và Tailwind CSS. Có một ô input tìm kiếm ở trên cùng, khi người dùng gõ từ khóa thì tự động lọc những câu hỏi hoặc câu trả lời có chứa từ khóa đó. Mặc định mở câu đầu tiên, các câu khác bấm vào thì mở ra.'
      },
      {
        step: 'Bước 3: Chèn vào trang bán hàng của bạn',
        action: 'Đặt component này ngay trước phần Form đăng ký hoặc chân trang để giải tỏa thắc mắc trước khi khách chốt đơn.'
      }
    ],
    keyTakeaway: 'Trải nghiệm tìm kiếm nhanh chóng tạo niềm tin mạnh mẽ cho khách hàng và giảm đáng kể tải công việc cho bộ phận chăm sóc khách hàng.'
  },

  // ========== NHÓM 4: KỸ THUẬT PROMPT & ĐIỀU KHIỂN AI ==========
  {
    id: 'case-10',
    slug: 'viet-prompt-khuon-mau-code-1-lan-an-ngay',
    number: 'CASE 10',
    title: 'Prompt khuôn mẫu (Template) để AI code 1 phát ăn ngay',
    subtitle: 'Không còn cảnh AI sinh code thừa thãi, đoán mò hoặc làm sai hoàn toàn ý bạn.',
    category: 'prompt-workflow',
    categoryLabel: 'Prompt & Workflow',
    difficulty: 'Cơ bản',
    timeEstimate: '~15 phút',
    targetSlug: '/vibecode/cach-prompt-cho-ai/bai-7-1',
    tools: ['Prompt Engineering', 'Cursor Composer', 'Claude'],
    badge: 'BẮT BUỘC PHẢI BIẾT',
    problem: 'Bạn gõ prompt cụt lủn: "Tạo trang web bán hàng", AI trả về một giao diện generic xấu xí, dùng thư viện không mong muốn và thiếu tính năng quan trọng.',
    solution: 'Áp dụng công thức prompt 4 thành phần: [Vai trò chuyên gia] + [Bối cảnh & Mục tiêu] + [Đặc tả tính năng chi tiết] + [Ràng buộc kỹ thuật & Thẩm mỹ].',
    deliverable: 'Bộ prompt mẫu chuẩn chỉ cần điền vào chỗ trống để AI viết code chính xác 95% ngay từ lượt tương tác đầu tiên.',
    steps: [
      {
        step: 'Bước 1: Nắm vững cấu trúc prompt 4 phần',
        action: 'Học cách thiết lập Vai trò (Senior Frontend Dev) + Bối cảnh (Sản phẩm B2B) + Output mong muốn.'
      },
      {
        step: 'Bước 2: Thực hành biến prompt ngắn thành prompt chuẩn',
        action: 'So sánh kết quả giữa câu lệnh đại khái và câu lệnh có ràng buộc kỹ thuật.',
        promptPreview: 'Đóng vai Senior Frontend Engineer chuyên về React và Tailwind CSS. Hãy tạo cho tôi một section Testimonial gồm 3 thẻ đánh giá của khách hàng. Yêu cầu: Nền màu #F6F5F1, viền mỏng 1px #CFCDC6, avatar tròn 48px, có 5 sao đánh giá màu vàng, trích dẫn in nghiêng font serif. Không cài thêm thư viện npm nào khác, chỉ dùng icon SVG thuần.'
      },
      {
        step: 'Bước 3: Lưu lại kho template prompt cá nhân',
        action: 'Tạo file ghi chú lưu sẵn các mẫu prompt cho Hero, Form, Card, Slider để dùng lại trong mọi dự án sau này.'
      }
    ],
    keyTakeaway: 'Chất lượng code của AI hoàn toàn phản ánh độ rõ ràng của Input từ bạn. Prompt chuẩn tiết kiệm cho bạn 80% thời gian sửa lỗi.'
  },
  {
    id: 'case-11',
    slug: 'tao-file-cursorrules-agent-md-nho-brand-guideline',
    number: 'CASE 11',
    title: 'Tạo file .cursorrules để AI tự nhớ toàn bộ Brand Guide & Rules',
    subtitle: 'Biến AI thành nhân viên trung thành luôn thuộc lòng màu sắc, font chữ và phong cách của brand.',
    category: 'prompt-workflow',
    categoryLabel: 'Prompt & Workflow',
    difficulty: 'Cơ bản',
    timeEstimate: '~15 phút',
    targetSlug: '/vibecode/tao-skills-va-workflow/bai-9-1',
    tools: ['.cursorrules', 'AGENT.md', 'Cursor'],
    badge: 'TIẾT KIỆM THỜI GIAN',
    problem: 'Mỗi lần mở khung chat mới, bạn lại phải gõ lại từ đầu: "Nhớ dùng Tailwind nhé", "Màu chính là cam #E8772E nhé", "Viết tiếng Việt nhé" rất mất thời gian.',
    solution: 'Tạo một file tĩnh mang tên `.cursorrules` hoặc `AGENT.md` trong thư mục gốc dự án. Mọi lần AI viết code đều tự động đọc file này trước tiên.',
    deliverable: 'File cấu hình luật chơi chuẩn chỉnh, AI luôn dùng đúng mã màu của brand, đúng font chữ và không bao giờ tự ý cài thư viện lung tung.',
    steps: [
      {
        step: 'Bước 1: Tạo file .cursorrules ở thư mục gốc',
        action: 'Mở Cursor, tạo file mới tên `.cursorrules` ngang hàng với `package.json`.'
      },
      {
        step: 'Bước 2: Viết các quy tắc bắt buộc vào file',
        action: 'Khai báo Tech Stack, Color Palette, Typography và Coding Rules.',
        promptPreview: '# PROJECT GUIDELINES\n- Tech Stack: React, Vite, Tailwind CSS, Lucide Icons.\n- Brand Colors: Primary #E8772E (Orange), Dark #141414, Background #F6F5F1, Warm Card #FFF5ED.\n- Fonts: Sans for UI, Serif for italics emphasis, Mono for metadata/tags.\n- Language: All UI text must be in Vietnamese.'
      },
      {
        step: 'Bước 3: Thử nghiệm ra lệnh không cần nhắc lại màu',
        action: 'Gõ: "Tạo 1 nút CTA", AI sẽ tự động áp dụng mã màu `#E8772E` và bo góc đúng chuẩn đã khai báo.'
      }
    ],
    keyTakeaway: 'Cài đặt Context một lần duy nhất — gặt hái sự đồng nhất trên toàn bộ website mà không cần phải giám sát từng dòng code.'
  },
  {
    id: 'case-12',
    slug: 'task-decomposition-cho-claude-code',
    number: 'CASE 12',
    title: 'Chia nhỏ tác vụ (Task Decomposition) cho Claude Code tự làm việc',
    subtitle: 'Cách giao việc cho AI Agent xử lý các tác vụ phức tạp gồm nhiều file cùng lúc.',
    category: 'prompt-workflow',
    categoryLabel: 'Prompt & Workflow',
    difficulty: 'Nâng cao',
    timeEstimate: '~25 phút',
    targetSlug: '/vibecode/lam-quen-claude-code/bai-5-3',
    tools: ['Claude Code', 'Terminal', 'CLI'],
    badge: 'AI AGENT NÂNG CAO',
    problem: 'Khi bạn giao một việc quá lớn cho AI (ví dụ: "Làm cả hệ thống thanh toán"), AI thường bị quá tải, sinh code dở dang hoặc quên các file liên quan.',
    solution: 'Sử dụng kỹ thuật chia nhỏ tác vụ và lệnh `/plan` trong Claude Code: để AI lập bản kế hoạch trước, bạn duyệt từng bước rồi mới để AI tự động thực thi.',
    deliverable: 'Khả năng điều khiển Claude Code tự động sửa hàng loạt file, chạy kiểm tra và bàn giao tính năng hoàn chỉnh mà bạn không cần can thiệp liên tục.',
    steps: [
      {
        step: 'Bước 1: Khởi động Claude Code và dùng lệnh /plan',
        action: 'Mở terminal, gõ `claude` và bắt đầu yêu cầu bằng lệnh lập kế hoạch trước.',
        promptPreview: '/plan Tôi muốn thêm tính năng lọc bài viết theo chuyên mục và tìm kiếm theo từ khóa. Hãy phân tích cấu trúc hiện tại và lên kế hoạch các file cần sửa trước khi làm.'
      },
      {
        step: 'Bước 2: Đọc bản kế hoạch và bấm Approve',
        action: 'Xem qua danh sách các file AI dự kiến tạo mới hoặc chỉnh sửa. Bấm `y` để đồng ý cho AI bắt đầu làm từng bước.'
      },
      {
        step: 'Bước 3: Để AI tự chạy và kiểm tra kết quả',
        action: 'AI sẽ tự động đọc file, tạo code, chạy test và báo cáo khi hoàn tất.'
      }
    ],
    keyTakeaway: 'Học cách làm việc như một Product Manager: Bạn là người duyệt plan và định hướng, AI là đội ngũ kỹ thuật thực thi từng bước.'
  },

  // ========== NHÓM 5: CẤP CỨU KHI AI BÁO LỖI (FIX BUG) ==========
  {
    id: 'case-13',
    slug: 'sua-giao-dien-vo-tren-mobile-responsive',
    number: 'CASE 13',
    title: 'Xử lý khi AI code giao diện bị vỡ, tràn chữ trên Mobile',
    subtitle: 'Cách prompt ép AI sửa responsive chuẩn mobile-first mà không làm hỏng bản desktop.',
    category: 'debug-errors',
    categoryLabel: 'Sửa Lỗi & Fix Bug',
    difficulty: 'Cơ bản',
    timeEstimate: '~15 phút',
    targetSlug: '/vibecode/khi-ai-code-sai/bai-8-1',
    tools: ['Chrome DevTools', 'Cursor Chat', 'Tailwind Breakpoints'],
    badge: 'LỖI HAY GẶP NHẤT',
    problem: 'Xem trên máy tính thì rất đẹp, nhưng mở trên điện thoại thì thanh menu bị đè, chữ bị tràn ra ngoài màn hình và xuất hiện thanh cuộn ngang khó chịu.',
    solution: 'Bật chế độ Mobile Inspector trên Chrome (F12), khoanh vùng phần tử bị tràn và copy class CSS đưa cho AI với cú pháp ép responsive `sm:`, `md:`, `overflow-hidden`.',
    deliverable: 'Giao diện hiển thị hoàn hảo trên cả iPhone, Android và Desktop, không bao giờ bị tràn thanh cuộn ngang.',
    steps: [
      {
        step: 'Bước 1: Mở F12 kiểm tra kích thước mobile',
        action: 'Bấm phím F12 trên bàn phím, chọn biểu tượng điện thoại và chọn kích thước iPhone hoặc Pixel.'
      },
      {
        step: 'Bước 2: Copy tên component hoặc class bị lỗi gửi cho AI',
        action: 'Chỉ định chính xác vị trí bị vỡ thay vì bảo chung chung "sửa cho anh".',
        promptPreview: 'Component HeroHeader đang bị tràn chiều ngang trên màn hình điện thoại (dưới 400px), gây ra hiện tượng horizontal scroll. Hãy sửa lại bằng Tailwind: dùng `max-w-full overflow-hidden`, đổi `grid-cols-2` thành `grid-cols-1 md:grid-cols-2` và giảm `text-[48px]` xuống `text-[32px] sm:text-[48px]`.'
      },
      {
        step: 'Bước 3: Áp dụng code và kiểm tra lại trên thiết bị thật',
        action: 'Lưu code và refresh trình duyệt để kiểm tra thanh cuộn ngang đã biến mất.'
      }
    ],
    keyTakeaway: 'Hơn 70% traffic marketing đến từ điện thoại. Luôn luôn kiểm tra mobile trước khi cho website lên sóng.'
  },
  {
    id: 'case-14',
    slug: 'cap-cuu-khi-ai-sua-cho-nay-hong-cho-khac',
    number: 'CASE 14',
    title: 'Cấp cứu khi "AI sửa chỗ này lại làm hỏng chỗ khác"',
    subtitle: 'Kỹ thuật dùng Git Timeline và khoanh vùng code để không bao giờ bị mất tính năng cũ.',
    category: 'debug-errors',
    categoryLabel: 'Sửa Lỗi & Fix Bug',
    difficulty: 'Cơ bản',
    timeEstimate: '~15 phút',
    targetSlug: '/vibecode/khi-ai-code-sai/bai-8-2',
    tools: ['VS Code Timeline', 'Git Diff', 'Cursor'],
    badge: 'BẢO HIỂM DỰ ÁN',
    problem: 'Bạn nhờ AI thêm một hiệu ứng đổi màu nút, nó làm xong thì mất luôn cả đoạn form thu thập lead phía dưới, hỏi lại thì AI xin lỗi và sinh code linh tinh hơn.',
    solution: 'Dừng việc cãi nhau với AI lại! Dùng tính năng Timeline hoặc Git Diff trong Cursor để xem lại phiên bản 10 phút trước và khôi phục đoạn code bị mất trong 5 giây.',
    deliverable: 'Lấy lại code ổn định ngay lập tức, biết cách giới hạn phạm vi để AI chỉ sửa đúng 5 dòng code cần thiết mà không đụng vào phần còn lại.',
    steps: [
      {
        step: 'Bước 1: Mở tab Timeline trong VS Code / Cursor',
        action: 'Bấm chuột phải vào file bị hỏng, chọn Open Timeline để xem các mốc lưu tự động trong quá khứ.'
      },
      {
        step: 'Bước 2: So sánh và khôi phục đoạn code bị mất',
        action: 'Bấm vào mốc thời gian trước khi AI sửa, copy đoạn code ngon lành và dán trả lại.'
      },
      {
        step: 'Bước 3: Dùng inline chat (Ctrl+K) chỉ định phạm vi',
        action: 'Bôi đen đúng 3 dòng cần sửa thay vì nạp cả file 500 dòng vào khung chat.',
        promptPreview: 'Chỉ sửa 3 dòng code đang được bôi đen này: Đổi màu nút sang #E8772E khi hover. TUYỆT ĐỐI không thay đổi bất kỳ dòng code nào khác ngoài đoạn bôi đen.'
      }
    ],
    keyTakeaway: 'Đừng để AI viết lại cả file lớn khi chỉ cần sửa 1 chi tiết nhỏ. Bôi đen vùng cần sửa (Scoped Prompting) là chìa khóa chống phá hoại code.'
  },
  {
    id: 'case-15',
    slug: 'fix-loi-man-hinh-trang-xoa-hoac-loi-do-terminal',
    number: 'CASE 15',
    title: 'Fix lỗi "Màn hình trắng xóa" hoặc Terminal báo lỗi đỏ',
    subtitle: 'Đọc hiểu thông báo lỗi trong 10 giây và paste cho AI sửa đúng trọng tâm.',
    category: 'debug-errors',
    categoryLabel: 'Sửa Lỗi & Fix Bug',
    difficulty: 'Cơ bản',
    timeEstimate: '~10 phút',
    targetSlug: '/vibecode/khi-ai-code-sai/bai-8-3',
    tools: ['Console Log', 'Terminal Error', 'Cursor Composer'],
    badge: 'TỰ TIN SỬA LỖI',
    problem: 'Vừa bấm Save file xong, trang web biến mất chỉ còn một màn hình trắng trơn hoặc Terminal hiện lên một tràng chữ đỏ lòm đáng sợ.',
    solution: 'Không cần hoảng sợ! Mở F12 > Console, tìm dòng chữ đỏ đầu tiên (thường là lỗi thiếu dấu ngoặc, biến chưa định nghĩa `is not defined` hoặc import sai), copy nguyên văn ném cho AI.',
    deliverable: 'Trang web hoạt động trở lại bình thường trong 1-2 phút, hiểu bản chất vì sao lỗi xảy ra.',
    steps: [
      {
        step: 'Bước 1: Mở F12 Console hoặc nhìn cửa sổ Terminal',
        action: 'Tìm dòng lỗi đầu tiên bắt đầu bằng `Uncaught ReferenceError`, `SyntaxError` hoặc `Module not found`.'
      },
      {
        step: 'Bước 2: Copy thông báo lỗi và gửi cho AI kèm bối cảnh',
        action: 'Gửi chính xác đoạn lỗi cho Cursor.',
        promptPreview: 'Tôi vừa gặp lỗi trắng màn hình sau khi lưu file. Console trình duyệt báo lỗi sau: [DÁN ĐOẠN LỖI ĐỎ VÀO ĐÂY]. Hãy phân tích nguyên nhân và sửa lại file tương ứng.'
      },
      {
        step: 'Bước 3: Bấm Apply và kiểm tra lại trang',
        action: 'Xem AI giải thích và áp dụng bản vá lỗi.'
      }
    ],
    keyTakeaway: 'Màn hình trắng không có nghĩa là hỏng dự án. 99% lỗi trắng màn hình chỉ là do thiếu một dấu ngoặc hoặc import sai tên component.'
  },

  // ========== NHÓM 6: DEPLOY, TÊN MIỀN & ĐO LƯỜNG (TRACKING) ==========
  {
    id: 'case-16',
    slug: 'deploy-web-len-vercel-mien-phi-trong-3-phut',
    number: 'CASE 16',
    title: 'Đưa website lên Vercel miễn phí & tự động cập nhật khi sửa code',
    subtitle: 'Biến dự án trên máy tính thành đường link chính thức có bảo mật SSL HTTPS.',
    category: 'deploy-tracking',
    categoryLabel: 'Deploy & Tracking',
    difficulty: 'Zero Code',
    timeEstimate: '~15 phút',
    targetSlug: '/vibecode/deploy-va-tracking/bai-10-1',
    tools: ['Vercel', 'GitHub', 'Deploy Cloud'],
    badge: 'BẮT ĐẦU ĐÂY',
    problem: 'Bạn đã làm xong một landing page rất đẹp trên máy tính, nhưng không biết cách nào để gửi đường link cho sếp, đồng nghiệp và khách hàng xem thử.',
    solution: 'Đẩy code lên tài khoản GitHub và liên kết với Vercel (nền tảng hosting miễn phí số 1 thế giới). Nhận ngay đường link có đuôi `.vercel.app` an toàn tuyệt đối.',
    deliverable: 'Đường link website chính thức truy cập được từ bất kỳ đâu trên thế giới, mỗi lần bạn sửa code trên máy là web tự động cập nhật trong 30 giây.',
    steps: [
      {
        step: 'Bước 1: Tạo tài khoản Vercel bằng tài khoản GitHub',
        action: 'Truy cập vercel.com và bấm Sign Up with GitHub hoàn toàn miễn phí.'
      },
      {
        step: 'Bước 2: Bấm Import Git Repository',
        action: 'Chọn repository dự án website của bạn và bấm Deploy.'
      },
      {
        step: 'Bước 3: Nhận đường link web và ăn mừng',
        action: 'Vercel xây dựng website trong 1 phút và chúc mừng bạn với pháo hoa ảo cùng đường link live.'
      }
    ],
    keyTakeaway: 'Thời của việc thuê hosting cPanel phức tạp đã qua. Vercel + GitHub là bộ đôi vàng giúp mọi marketer đưa sản phẩm lên mạng trong chớp mắt.'
  },
  {
    id: 'case-17',
    slug: 'gan-ten-mien-rieng-domain-vn-com-vao-web',
    number: 'CASE 17',
    title: 'Gắn Tên Miền Riêng (Domain .vn / .com) cho web vừa tạo',
    subtitle: 'Xóa đuôi .vercel.app để biến website thành địa chỉ thương hiệu chuyên nghiệp.',
    category: 'deploy-tracking',
    categoryLabel: 'Deploy & Tracking',
    difficulty: 'Cơ bản',
    timeEstimate: '~15 phút',
    targetSlug: '/vibecode/deploy-va-tracking/bai-10-2',
    tools: ['Vercel Domains', 'Cloudflare / DNS', 'Tên Miền Riêng'],
    badge: 'CHUYÊN NGHIỆP HÓA',
    problem: 'Khách hàng ngần ngại khi thấy website có đuôi `yourbrand.vercel.app`, bạn muốn web chạy trên tên miền chính thức của công ty như `campaign.yourbrand.vn`.',
    solution: 'Thêm tên miền vào Vercel Settings > Domains, sau đó vào trang quản lý DNS tên miền tạo 1 bản ghi CNAME trỏ về `cname.vercel-dns.com`.',
    deliverable: 'Website hoạt động chuyên nghiệp dưới tên miền chính thức của thương hiệu, tự động có chứng chỉ bảo mật ổ khóa xanh HTTPS.',
    steps: [
      {
        step: 'Bước 1: Vào Vercel Project > Settings > Domains',
        action: 'Gõ tên miền bạn muốn gắn, ví dụ `khuyenmai.brand.vn` hoặc `tenban.com` và bấm Add.'
      },
      {
        step: 'Bước 2: Đăng nhập trang quản trị DNS tên miền',
        action: 'Mở trang nhà cung cấp tên miền (PA Vietnam, Mắt Bão, Cloudflare, Namecheap...).'
      },
      {
        step: 'Bước 3: Thêm bản ghi CNAME hoặc A Record',
        action: 'Thêm bản ghi CNAME với Type: `CNAME`, Name: `khuyenmai`, Target: `cname.vercel-dns.com`. Vercel sẽ tự động xác minh trong vài phút.'
      }
    ],
    keyTakeaway: 'Chỉ mất 5 phút cấu hình DNS một lần, bạn có thể tạo hàng trăm subdomain miễn phí cho từng chiến dịch marketing.'
  },
  {
    id: 'case-18',
    slug: 'cai-gtm-ga4-meta-pixel-do-luong-chuyen-doi',
    number: 'CASE 18',
    title: 'Gắn Google Tag Manager, GA4 & Meta Pixel đo lường chuyển đổi',
    subtitle: 'Nắm rõ có bao nhiêu người vào web, họ bấm vào nút nào và tối ưu chi phí quảng cáo.',
    category: 'deploy-tracking',
    categoryLabel: 'Deploy & Tracking',
    difficulty: 'Cơ bản',
    timeEstimate: '~20 phút',
    targetSlug: '/vibecode/deploy-va-tracking/bai-10-3',
    tools: ['Google Tag Manager', 'GA4', 'Meta Pixel', 'Cursor'],
    badge: 'BẮT BUỘC CHO ADS',
    problem: 'Chạy quảng cáo Facebook hay Google nhưng không đo được có bao nhiêu người thực sự điền form hoặc bấm nút Mua Hàng, dẫn đến lãng phí ngân sách.',
    solution: 'Nhờ AI chèn mã container GTM vào thẻ `<head>` của trang web, và cài đặt sự kiện `onClick` ghi nhận event `Lead` hoặc `Purchase` mỗi khi khách bấm nút.',
    deliverable: 'Hệ thống đo lường chuyển đổi hoàn chỉnh, số liệu đổ về Google Analytics 4 và Trình quản lý quảng cáo Facebook Ads chuẩn xác.',
    steps: [
      {
        step: 'Bước 1: Lấy mã container Google Tag Manager (GTM-XXXX)',
        action: 'Đăng nhập tagmanager.google.com và copy đoạn mã script được cung cấp.'
      },
      {
        step: 'Bước 2: Nhờ AI chèn mã vào file index.html hoặc layout',
        action: 'Bảo Cursor dán script vào đúng vị trí thẻ `<head>` và `<body>`.',
        promptPreview: 'Hãy chèn đoạn mã Google Tag Manager sau đây vào thẻ <head> của file index.html: [DÁN MÃ GTM VÀO ĐÂY]. Và đồng thời thêm sự kiện `gtag("event", "generate_lead")` vào hàm onClick của nút Gửi Form.'
      },
      {
        step: 'Bước 3: Dùng GTM Preview Mode để kiểm tra sự kiện',
        action: 'Mở chế độ Preview trên GTM, bấm nút thử trên web và xem tag có kích hoạt (Fired) hay không.'
      }
    ],
    keyTakeaway: 'Marketing không đo lường được là marketing mù quáng. Gắn tracking ngay từ ngày đầu giúp thuật toán quảng cáo học đúng tệp khách mua hàng.'
  }
];
