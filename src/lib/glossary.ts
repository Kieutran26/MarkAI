export type TermGroup = 'code' | 'design' | 'infra' | 'data' | 'ai' | 'workflow';

export type GlossaryTerm = {
  id: string;
  name: string;
  nameEn: string;
  letter: string;
  groups: TermGroup[];
  definition: string;
  example: string;
  related?: string[];
  demo?: {
    kind?: 'image' | 'interactive';
    src: string;
    alt?: string;
    caption?: string;
  };
  practice?: {
    kind?: 'image' | 'interactive';
    src: string;
    alt?: string;
    caption?: string;
  };
};

export type TermViewMode = 'modal' | 'page';

const rawTerms: GlossaryTerm[] = [
  { id: 'align', name: 'Align', nameEn: 'Căn lề / Alignment', letter: 'A', groups: ['design', 'code'], definition: 'Cách sắp xếp vị trí của các phần tử (text, hình khối, component) theo các trục ngang hoặc dọc. Căn lề tốt giúp tạo ra sự trật tự, cân bằng và dẫn dắt mắt người dùng một cách hiệu quả.', example: 'Prompt: "Căn giữa tiêu đề và đoạn văn, nút bấm căn lề phải. Trên mobile thì tất cả đều căn lề trái để dễ đọc hơn."', related: ['flexbox', 'grid', 'spacing', 'hierarchy'], demo: { kind: 'interactive', src: 'gif-align-demo.html', alt: 'Mô phỏng các kiểu căn lề: Horizontal, Vertical, Flex Distribution và Layout Alignment' }, practice: { kind: 'interactive', src: 'gif-align-practice.html', alt: 'Thực hành các thuộc tính căn lề Flexbox' } },
  { id: 'api', name: 'API', nameEn: 'API / API Key', letter: 'A', groups: ['infra', 'code'], definition: 'Với marketer mới học AI, API thường được hiểu thực tế là API key: một mã bí mật lấy từ nền tảng AI để app của bạn được phép gọi model. Nếu lộ key, người khác có thể dùng ké quota và làm bạn mất tiền.', example: 'Mình muốn dùng model AI trong app chat nội bộ. Cần vào platform lấy API key, lưu vào file .env, rồi mới gọi AI được. API key không nên dán thẳng lên giao diện hay đưa lên GitHub.', related: ['endpoint', 'webhook', 'request'], demo: { kind: 'interactive', src: 'gif-api-demo.html', alt: 'Mô phỏng cách lấy API key từ nền tảng AI rồi copy về app' }, practice: { kind: 'interactive', src: 'gif-api-practice.html', alt: 'Thực hành luồng API Request-Response' } },
  { id: 'array', name: 'Array', nameEn: 'Mảng / Danh sách', letter: 'A', groups: ['code'], definition: 'Danh sách các item được xếp theo thứ tự. Giống như một cột Excel — mỗi ô là một item. Array trong code thường trông như này: ["Hà Nội", "TP.HCM", "Đà Nẵng"].', example: 'AI trả về "danh sách categories" — đó thường là một array mà code của bạn sẽ loop qua để hiển thị từng cái.', related: ['loop', 'database'], demo: { kind: 'interactive', src: 'gif-array-demo.html', alt: 'Mô phỏng 4 khía cạnh của Array: Basics, Accessing, Operations và Matrix' }, practice: { kind: 'interactive', src: 'gif-array-practice.html', alt: 'Thực hành các phương thức biến đổi mảng' } },
  {
    id: 'asset',
    name: 'Asset',
    nameEn: 'Tài nguyên thiết kế',
    letter: 'A',
    groups: ['design'],
    definition: 'Tất cả các tài liệu số (digital files) được sử dụng để xây dựng giao diện. Bao gồm hình ảnh (logo, background), icon (SVG), font chữ, video, và audio. Trong Vibecode, việc quản lý asset đúng cách giúp web chạy nhanh và hiển thị sắc nét.',
    example: "Designer gửi cho bạn folder 'Marketing-Assets' chứa logo dạng SVG và ảnh hero dạng WebP. Prompt: Sử dụng logo từ /public/assets/logo.svg và tối ưu ảnh hero để web load nhanh hơn.",
    demo: { kind: 'interactive', src: 'gif-asset-demo.html' },
    practice: { kind: 'interactive', src: 'gif-asset-practice.html', alt: 'Thực hành phân loại các loại Asset phổ biến' }
  },
  { id: 'auth', name: 'Auth', nameEn: 'Authentication / Đăng nhập', letter: 'A', groups: ['infra'], definition: 'Auth là lớp kiểm tra danh tính người dùng trước khi cho vào hệ thống. Hiểu đơn giản: web cần biết bạn là ai, đăng nhập bằng cách nào, và có được phép vào khu vực đó không. Với marketer làm tool nội bộ, auth thường đi kèm Google login, email admin, session đăng nhập, và rule như “chỉ email công ty mới được vào”.', example: 'Prompt: "Thêm đăng nhập bằng Google cho tool này, chỉ email @company.com mới vào được dashboard, nếu đã có session cũ thì cho vào nhanh hơn." Đây là cách dùng auth rất thực tế.', related: ['session', 'token'], demo: { kind: 'interactive', src: 'gif-auth-demo.html', alt: 'Mô phỏng auth theo 4 trạng thái: chưa login, đúng team, sai domain, còn session' }, practice: { kind: 'interactive', src: 'gif-auth-practice.html', alt: 'Thực hành các quy trình đăng nhập và bảo mật' } },
  { id: 'async', name: 'Async / Await', nameEn: 'Bất đồng bộ', letter: 'A', groups: ['code'], definition: 'Cách xử lý tác vụ mất thời gian mà không làm đơ cả trang. Giống như đặt cà phê mang đi — bạn không đứng chờ, bạn làm việc khác, cà phê xong thì nhận.', example: 'Khi form submit, trang không bị đơ mà hiện loading spinner — đó là async đang chạy ngầm để gửi data lên server.' },
  { id: 'border', name: 'Border', nameEn: 'Viền / Đường kẻ bao quanh', letter: 'B', groups: ['design', 'code'], definition: 'Đường viền bao quanh một element. Gồm 3 thuộc tính: style (kiểu đường), width (độ dày), và color (màu). Border là công cụ quan trọng để phân tách các khối nội dung và tạo điểm nhấn thị giác.', example: 'Prompt: "Thêm viền 1px màu xám nhạt cho các card sản phẩm, riêng card đang được chọn thì đổi viền sang màu cam 2px để làm nổi bật."', related: ['padding', 'radius', 'card'], demo: { kind: 'interactive', src: 'gif-border-demo.html', alt: 'Mô phỏng 4 thuộc tính border: style, width, color và sides' } },
  { id: 'breakpoint', name: 'Breakpoint', nameEn: 'Điểm ngắt layout', letter: 'B', groups: ['design', 'code'], definition: 'Điểm dừng kỹ thuật mà tại đó giao diện web tự động thay đổi cấu trúc (layout) để phù hợp với kích thước màn hình. Ví dụ: từ 4 cột trên Desktop nhảy sang 1 cột trên Mobile. Hiểu về breakpoint giúp marketer feedback chính xác vùng màn hình bị lỗi thay vì nói "màn hình nhỏ" chung chung.', example: 'Prompt: "Ở breakpoint mobile (dưới 768px), hãy ẩn bớt các cột không quan trọng và chuyển menu sang dạng hamburger để giao diện gọn hơn."', related: ['responsive', 'mobile-first', 'layout'], demo: { kind: 'interactive', src: 'gif-breakpoint-demo.html', alt: 'Mô phỏng 4 mốc breakpoint phổ biến: Mobile, Tablet, Laptop, Desktop' } },
  { id: 'backend', name: 'Backend', nameEn: 'Phần sau / Server', letter: 'B', groups: ['infra', 'code'], definition: 'Phần người dùng không thấy — nơi data được lưu, xử lý, và bảo mật. Nếu frontend là mặt tiền cửa hàng, backend là kho hàng và văn phòng phía sau.', example: '"Form đăng ký của tôi lưu data ở đâu?" → Supabase là backend.', related: ['frontend', 'database'], demo: { kind: 'interactive', src: 'gif-backend-demo.html', alt: 'Mô phỏng 4 tầng backend: API, DB, Auth, Jobs' } },
  { id: 'build', name: 'Build', nameEn: 'Đóng gói / Compile', letter: 'B', groups: ['infra'], definition: 'Quá trình biến code thô thành file tối ưu để đưa lên internet. Giống như in ấn trước khi phát hành tài liệu.', example: '"Build failed" = quá trình đóng gói bị lỗi trước khi deploy. Thường do code bị lỗi syntax hoặc thiếu package.', related: ['deploy', 'environment'] },
  { id: 'boolean', name: 'Boolean', nameEn: 'True / False', letter: 'B', groups: ['code'], definition: 'Kiểu dữ liệu "Nhị phân" — chỉ có 2 trạng thái duy nhất: Đúng (True) hoặc Sai (False). Hãy nghĩ về nó như một công tắc đèn (Bật/Tắt) hoặc một người gác cổng (Cho qua/Chặn lại). Trong Vibecode, AI dùng Boolean để đưa ra các quyết định logic: Hiện hay Ẩn? Gửi hay Hủy?', example: 'Prompt: "Nếu khách hàng đã đăng nhập (isLoggedIn: true), hãy hiện nút Mua hàng. Nếu chưa (isLoggedIn: false), hãy hiện nút Đăng ký".', related: ['state', 'toggle', 'checkbox'], demo: { kind: 'interactive', src: 'gif-boolean-demo.html', alt: 'Mô phỏng 4 khía cạnh của Boolean: Bật/Tắt, UI Toggles, Logic AND/OR và Interface Impact' } },
  {
    id: 'branch',
    name: 'Branch',
    nameEn: 'Nhánh code / Luồng làm việc song song',
    letter: 'B',
    groups: ['workflow'],
    definition: 'Một "vùng làm việc song song" tách ra từ luồng chính (main). Branch cho phép bạn thoải mái thử nghiệm tính năng mới, sửa lỗi, hoặc thay đổi giao diện mà không sợ làm hỏng trang web đang chạy (Production). Hãy coi nó như một "Vũ trụ song song" — nơi bạn có thể làm mọi thứ mà không ảnh hưởng đến thế giới thực cho đến khi bạn sẵn sàng.',
    example: 'Bạn muốn làm landing page cho chiến dịch Tết nhưng sợ sửa code sẽ làm hỏng trang chủ. Bạn tạo branch "tet-2026" để làm việc riêng trên đó. Khi mọi thứ đã hoàn hảo, bạn mới gộp (merge) nó vào trang chính.',
    related: ['git', 'commit', 'pull-request', 'merge', 'repository'],
    demo: {
      kind: 'interactive',
      src: 'gif-branch-demo.html',
      alt: 'Mô phỏng Branch: Luồng song song, an toàn thử sai và quy trình merge'
    },
    practice: {
      kind: 'interactive',
      src: 'gif-branch-practice.html',
      alt: 'Thực hành Branch: Chuyển đổi giữa các nhánh và quan sát sự thay đổi của file hệ thống'
    }
  },
  { id: 'button', name: 'Button', nameEn: 'Nút bấm / Button', letter: 'B', groups: ['design', 'code'], definition: '"Lệnh" thực thi hành động trong giao diện. Hiểu về Button không phải là học code, mà là học cách "ra lệnh" cho AI tạo ra các nút bấm có ý nghĩa: nút nào là chính (Primary), nút nào là phụ (Secondary), và khi nào thì dùng nút mờ (Ghost) để dẫn dắt hành vi người dùng.', example: 'Prompt: "Thêm một nút Đăng ký nổi bật nhất (Primary), bên cạnh là nút Tìm hiểu thêm mờ hơn (Outline) và một nút Hủy gần như vô hình (Ghost) bên dưới cùng."', related: ['variant', 'state', 'hover', 'primary-color'], demo: { kind: 'interactive', src: 'gif-button-demo.html', alt: 'Mô phỏng 4 khía cạnh của Button: Variants, Sizes, Icons và States' } },
  { id: 'button-group', name: 'Button Group', nameEn: 'Nhóm nút bấm', letter: 'B', groups: ['design', 'code'], definition: 'Gom các nút có tính năng tương tự vào một "bộ sưu tập" duy nhất. Thay vì để các nút rời rạc chiếm chỗ, Button Group giúp giao diện gọn gàng, chuyên nghiệp và giúp người dùng hiểu ngay các nút này thuộc về một nhóm chức năng chung (như bộ công cụ soạn thảo).', example: 'Prompt: "Tạo một button group gồm 3 nút: Ngày, Tuần, Tháng để lọc báo cáo, mặc định chọn Ngày."', related: ['button', 'segmented-button', 'split-buttons', 'variant'], demo: { kind: 'interactive', src: 'gif-buttongroup-demo.html', alt: 'Mô phỏng 4 loại button group: Segmented, Toggle, Icon và Mixed Action' }, practice: { kind: 'interactive', src: 'gif-buttongroup-practice.html', alt: 'Thực hành chiến lược sử dụng Button Group trong các tình huống thực tế' } },
  { id: 'breadcrumb', name: 'Breadcrumb', nameEn: 'Đường dẫn liên kết', letter: 'B', groups: ['design', 'code'], definition: 'Một dãy các liên kết giúp người dùng xác định vị trí hiện tại của mình trong cấu trúc website và dễ dàng quay lại các cấp cao hơn. Giống như Hansel & Gretel rải vụn bánh để tìm đường về nhà, breadcrumb giúp người dùng (và cả Google) hiểu được cấu trúc phân cấp của trang web để di chuyển không bị lạc.', example: 'Trang "MacBook Pro 14" có breadcrumb: Home > Laptops > MacBook Pro 14. Marketer dùng breadcrumb để tăng UX và giúp Google hiểu cấu trúc trang tốt hơn (SEO).', related: ['url', 'hierarchy', 'navigation'], demo: { kind: 'interactive', src: 'gif-breadcrumb-demo.html', alt: 'Mô phỏng các loại breadcrumb: Hierarchy, Location, Multi-level và Collapsed' }, practice: { kind: 'interactive', src: 'gif-breadcrumb-practice.html', alt: 'Thực hành sắp xếp thứ tự phân cấp Breadcrumb' } },
  {
    id: 'cache',
    name: 'Cache',
    nameEn: 'Bộ nhớ đệm',
    letter: 'C',
    groups: ['infra'],
    definition: 'Lưu tạm dữ liệu vào một nơi "gần" bạn nhất để lần sau truy cập nhanh hơn. Thay vì mỗi lần cần thông tin lại phải hỏi Server (mất vài giây), trình duyệt sẽ lấy ngay trong "túi áo" (Cache) chỉ trong vài phần nghìn giây.',
    example: 'Bạn vừa sửa giá sản phẩm nhưng khách hàng vẫn thấy giá cũ? Đó là do trình duyệt của họ đang lấy bản lưu cũ từ Cache. Chỉ cần bảo họ "xóa cache" hoặc đợi vài phút là sẽ thấy bản mới.',
    related: ['performance', 'latency', 'server'],
    demo: { kind: 'interactive', src: 'gif-cache-demo.html', alt: 'Mô phỏng 4 khía cạnh của Cache: Hit/Miss, TTL, Browser Cache và Edge CDN' },
    practice: { kind: 'interactive', src: 'gif-cache-practice.html', alt: 'Trò chơi chọn chiến lược Cache: Tối ưu tốc độ và độ chính xác cho từng loại dữ liệu' }
  },
  { id: 'card', name: 'Card', nameEn: 'Thẻ nội dung', letter: 'C', groups: ['design', 'code'], definition: 'Một khối chứa thông tin — gom ảnh, tiêu đề, mô tả, nút hành động vào một hộp. Card giúp phân tách các nội dung khác nhau trên trang một cách rõ ràng và dễ quét.', example: 'Product card cho sản phẩm, Blog card cho bài viết. Card là đơn vị cơ bản nhất để build các trang kiểu Dashboard hoặc Landing Page.', related: ['component', 'padding', 'radius'], demo: { kind: 'interactive', src: 'gif-card-demo.html', alt: 'Mô phỏng các loại card: Basic, Horizontal, Featured, Stats' } },
  { id: 'cli', name: 'CLI', nameEn: 'Command Line Interface / Giao diện dòng lệnh', letter: 'C', groups: ['infra', 'workflow'], definition: 'CLI là "trạm điều khiển" bằng chữ của máy tính. Thay vì click chuột vào biểu tượng, bạn giao tiếp với máy tính qua các dòng lệnh ngắn. Với Vibecoder, CLI là nơi bạn cho phép AI (như Claude Code) trực tiếp "nhúng tay" vào hệ thống để tạo file, cài đặt công cụ hoặc đưa website lên mạng.', example: 'Bạn gõ "npm run dev" để khởi động dự án và xem kết quả ngay trên trình duyệt. AI thường sẽ tự viết và chạy các lệnh này cho bạn, việc của bạn chỉ là nhấn "Enter" để đồng ý.', related: ['terminal', 'npm', 'workflow', 'git'], demo: { kind: 'interactive', src: 'gif-cli-demo.html', alt: 'Mô phỏng 4 khía cạnh của CLI: Command Loop, Context, Automation và Performance' }, practice: { kind: 'interactive', src: 'gif-cli-practice.html', alt: 'Thực hành Terminal Quest: Gõ lệnh để khởi tạo và chạy dự án thực tế' } },
  { id: 'checkbox', name: 'Checkbox', nameEn: 'Ô đánh dấu', letter: 'C', groups: ['design', 'code'], definition: 'Thành phần giao diện cho phép người dùng chọn một hoặc nhiều tùy chọn từ một danh sách. Khác với Radio Button (chỉ chọn 1), Checkbox hỗ trợ đa lựa chọn và có 3 trạng thái chính: rỗng, chọn, và nửa-chọn (indeterminate) - thường dùng cho logic cha-con.', example: 'Prompt: "Thêm một danh sách checkbox để người dùng chọn các kênh marketing: \'Facebook\', \'Google Ads\', \'TikTok\', mặc định là chưa chọn cái nào, nếu chọn hết thì checkbox \'Tất cả\' ở trên cùng cũng tự sáng."', related: ['radio', 'form', 'boolean', 'state'], demo: { kind: 'interactive', src: 'gif-checkbox-demo.html', alt: 'Mô phỏng 4 khía cạnh của checkbox: trạng thái, nhãn, danh sách và form' }, practice: { kind: 'interactive', src: 'gif-checkbox-practice.html', alt: 'Thực hành logic checkbox: Trạng thái và Danh sách' } },
  {
    id: 'clone',
    name: 'Clone',
    nameEn: 'Clone GitHub / Nhân bản project',
    letter: 'C',
    groups: ['workflow'],
    definition: 'Hành động tải toàn bộ một kho code (repository) từ server (như GitHub) về máy tính cá nhân của bạn. Clone không chỉ copy file mà còn copy cả lịch sử commit, giúp bạn có một bản sao hoàn chỉnh để làm việc.',
    example: 'Bạn vừa được mời vào dự án mới. Thay vì download file zip, bạn mở terminal và gõ "git clone [url]". Sau 1 phút, toàn bộ project đã nằm sẵn trên máy để bạn bắt đầu vibecode.',
    related: ['git', 'repository', 'commit', 'pull', 'push'],
    demo: {
      kind: 'interactive',
      src: 'gif-clone-demo.html',
      alt: 'Mô phỏng quy trình Clone: từ GitHub về máy cá nhân với đầy đủ file và lịch sử'
    },
    practice: {
      kind: 'interactive',
      src: 'gif-clone-practice.html',
      alt: 'Thực hành Clone: trải nghiệm quy trình copy URL, gõ lệnh terminal và kiểm tra file hệ thống'
    }
  },
  { id: 'commit', name: 'Commit', nameEn: 'Lưu checkpoint code', letter: 'C', groups: ['workflow', 'code'], definition: 'Hành động lưu lại một điểm trong lịch sử code. Giống như Save game — bạn có thể quay lại đây bất cứ lúc nào nếu AI làm vỡ project.', example: 'Sau khi hero section chạy ổn: "git commit -m \'hero section done\'". Dù AI có làm hỏng phần sau, bạn vẫn rollback về được.', related: ['git', 'repository'], demo: { kind: 'interactive', src: 'gif-commit-demo.html', alt: 'Mô phỏng quy trình commit và lịch sử git', caption: 'Commit giúp đóng băng trạng thái code và lưu vào lịch sử.' } },
  {
    id: 'conflict',
    name: 'Conflict',
    nameEn: 'Merge Conflict / Xung đột code',
    letter: 'C',
    groups: ['workflow'],
    definition: 'Conflict xảy ra khi hai người cùng sửa một dòng code hoặc cùng một file theo cách mà Git không thể tự gộp lại được. Đây là cơ chế bảo vệ của Git, buộc bạn phải kiểm tra lại để chắc chắn không ai xóa nhầm code của ai.',
    example: 'Bạn và đồng nghiệp cùng sửa tiêu đề trang chủ. Bạn sửa thành "A", đồng nghiệp sửa thành "B". Khi gộp code, Git sẽ dừng lại và hiện các dấu <<<<<<< và >>>>>>> để bạn chọn giữ "A", "B" hay gộp cả hai.',
    related: ['git', 'merge', 'branch', 'pull', 'commit'],
    demo: {
      kind: 'interactive',
      src: 'gif-conflict-demo.html',
      alt: 'Mô phỏng 4 khía cạnh của Conflict: Bản chất, Nhận diện, Nguyên nhân và Luồng xử lý'
    },
    practice: {
      kind: 'interactive',
      src: 'gif-conflict-practice.html',
      alt: 'Thực hành giải quyết conflict thực tế trong code'
    }
  },
  { id: 'component', name: 'Component', nameEn: 'Khối giao diện tái dùng', letter: 'C', groups: ['code', 'design'], definition: 'Một khối giao diện độc lập, có thể dùng lại nhiều lần. Button, card sản phẩm, navbar, form — đều là component. Thiết kế một lần, dùng ở khắp nơi trong web.', example: '"Tôi có 12 trang web nhưng muốn cùng 1 footer." Đây là lúc dùng Footer component — sửa một chỗ, cập nhật khắp nơi.', related: ['props', 'state'], demo: { kind: 'interactive', src: 'gif-component-demo.html', alt: 'Mô phỏng 4 loại component phổ biến và code minh họa' } },
  { id: 'contrast', name: 'Contrast', nameEn: 'Độ tương phản', letter: 'C', groups: ['design', 'code'], definition: 'Sự khác biệt về độ sáng (luminance) giữa chữ và nền. Độ tương phản cao giúp nội dung dễ đọc, đặc biệt quan trọng cho khả năng tiếp cận (accessibility). Chuẩn WCAG quy định các mức ratio như 4.5:1 cho chữ thường và 3:1 cho chữ lớn.', example: 'Prompt: "Kiểm tra độ tương phản của nút CTA này, nếu chưa đạt chuẩn AA (4.5:1) thì hãy chỉnh màu nền đậm hơn hoặc chữ sáng hơn."', related: ['accessibility', 'ui', 'color-palette', 'fontweight'], demo: { kind: 'interactive', src: 'gif-contrast-demo.html', alt: 'Mô phỏng các mức độ tương phản và chuẩn WCAG' } },
  { id: 'context', name: 'Context', nameEn: 'Ngữ cảnh / Bối cảnh', letter: 'C', groups: ['ai'], definition: 'Toàn bộ thông tin nền tảng mà AI cần biết để đưa ra câu trả lời đúng. Context bao gồm role, project, tech, goal, constraint và format. Thiếu context là nguyên nhân chính khiến AI "đoán mò" và trả về kết quả generic.', example: 'Prompt: "Tôi là marketer SaaS, đang làm landing page cho app F&B bằng React + Tailwind. Mục tiêu là tăng tỷ lệ đăng ký. Hãy viết Hero headline." Trong đó, các thông tin bổ sung chính là context.', related: ['prompt', 'llm'], demo: { kind: 'interactive', src: 'gif-context-demo.html', alt: 'Mô phỏng 4 khía cạnh của Context: Definition, Comparison, Types và Process' } },

  { id: 'css', name: 'CSS', nameEn: 'Cascading Style Sheets', letter: 'C', groups: ['design', 'code'], definition: 'Ngôn ngữ kiểm soát giao diện — màu sắc, kích thước, khoảng cách, font, layout. Nếu HTML là khung xương thì CSS là da thịt và quần áo.', example: 'Prompt: "Đổi màu nền hero section sang màu kem #f5f0e8, chữ heading to hơn, thêm padding trên dưới." → AI sẽ chỉnh CSS.', related: ['tailwind', 'flexbox'], demo: { kind: 'interactive', src: 'gif-css-demo.html', alt: 'Mô phỏng 4 khía cạnh của CSS: Chọn đối tượng, Trang trí thuộc tính, Cấu trúc hình hộp và Sắp xếp bố cục' }, practice: { kind: 'interactive', src: 'gif-css-practice.html', alt: 'Thực hành tùy chỉnh Box Model trong CSS' } },
  { id: 'deploy', name: 'Deploy', nameEn: 'Triển khai / Đưa lên server', letter: 'D', groups: ['infra', 'workflow'], definition: 'Quá trình đưa code từ môi trường bạn đang vibecode (như Cursor/Claude Code) lên server thực tế để mọi người truy cập. Quy trình này thường diễn ra tự động qua GitHub và Vercel: mỗi khi bạn "push" code mới, hệ thống sẽ tự động Build, Test và cập nhật bản Live. Nếu bản mới bị lỗi, bạn có thể dễ dàng Rollback về bản cũ trong tích tắc.', example: 'Sau khi bảo AI sửa xong giao diện, bạn gõ lệnh push. Vercel tự động nhận diện và chạy pipeline deploy. 5 phút sau, bạn thấy thay đổi xuất hiện trên link web chính thức của dự án.', related: ['build', 'vercel', 'git'], demo: { kind: 'interactive', src: 'gif-deploy-demo.html', alt: 'Mô phỏng quy trình deploy từ khi push code đến khi thành công hoặc rollback' } },
  { id: 'database', name: 'Database', nameEn: 'Cơ sở dữ liệu', letter: 'D', groups: ['data'], definition: 'Nơi lưu trữ dữ liệu có cấu trúc. Giống như file Excel khổng lồ nhưng nhanh hơn, an toàn hơn. Supabase, PostgreSQL là ví dụ phổ biến.', example: '"Mỗi khi khách submit form, thông tin được lưu vào Supabase database" — một bảng, mỗi hàng là một submission.', demo: { kind: 'interactive', src: 'gif-database-demo.html', alt: 'Mô phỏng 4 tầng Database: Table, Relations, SQL, Architecture' } },
  { id: 'drawer', name: 'Drawer', nameEn: 'Ngăn kéo / Side Menu', letter: 'D', groups: ['design', 'code'], definition: 'Một thành phần UI dạng bảng điều khiển thường nằm ở các cạnh của màn hình (trái, phải, dưới). Nó cho phép truy cập nhanh vào các tùy chọn điều hướng hoặc chức năng bổ sung mà không làm gián đoạn bối cảnh hiện tại.', example: 'Prompt: "Thêm một navigation drawer bên trái chứa các menu chính, mặc định ẩn đi và chỉ hiện ra khi bấm vào icon hamburger trên mobile."', related: ['sidebar', 'navbar', 'navigation', 'popup'], demo: { kind: 'interactive', src: 'gif-drawer-demo.html', alt: 'Mô phỏng 4 loại drawer: Side Navigation, Bottom Drawer, Temporary Overlay và Persistent Docked' } },
  { id: 'dark-mode', name: 'Dark mode / Light mode', nameEn: 'Theme Switching', letter: 'D', groups: ['design', 'code'], definition: 'Chế độ giao diện tối (Dark) và sáng (Light). Đây không chỉ là việc đổi màu nền, mà là việc thay đổi toàn bộ hệ thống bảng màu (color tokens) để tối ưu hiển thị theo môi trường ánh sáng, giúp giảm mỏi mắt và tiết kiệm pin.', example: 'Prompt: "Thiết kế web có hỗ trợ dark mode, khi người dùng đổi theme thì toàn bộ màu nền, màu chữ và viền phải thay đổi tương ứng, riêng màu thương hiệu thì giữ nguyên."', related: ['color-palette', 'design-system', 'contrast'], demo: { kind: 'interactive', src: 'gif-darkmode-demo.html', alt: 'Mô phỏng 4 kịch bản chuyển đổi theme: Toggle, Dashboard, Settings và Readability' } },
  { id: 'dependency', name: 'Dependency', nameEn: 'Thư viện phụ thuộc', letter: 'D', groups: ['code'], definition: 'Code của người khác mà project bạn dùng. Giống như nguyên liệu đầu vào — bạn không tự làm bơ, bạn mua từ ngoài. npm install là lệnh cài dependency.', example: '"module not found" error = project đang cần một dependency chưa được cài. Paste lỗi cho AI, nó sẽ chạy lệnh cài giúp.' },
  { id: 'dom', name: 'DOM', nameEn: 'Document Object Model', letter: 'D', groups: ['code', 'design'], definition: 'Cách trình duyệt "nhìn" trang web — một cây cấu trúc của tất cả elements. JavaScript tương tác với DOM để thay đổi trang mà không cần reload.', example: 'Khi bạn click nút và counter tăng lên mà trang không reload — JavaScript đang update DOM trực tiếp.' },
  { id: 'dynamic', name: 'Dynamic', nameEn: 'Nội dung động', letter: 'D', groups: ['code'], definition: 'Nội dung thay đổi theo người dùng, thời gian, hoặc dữ liệu — không cố định. Trang profile mỗi user khác nhau = dynamic. Trang giới thiệu công ty = static.', example: '"Hiển thị số lượt view theo thời gian thực" = dynamic content. Mỗi lần load là fetch data mới từ database.', related: ['static'] },
  { id: 'endpoint', name: 'Endpoint', nameEn: 'Điểm cuối API', letter: 'E', groups: ['infra'], definition: 'URL cụ thể để gọi một chức năng của API. Giống như số điện thoại của từng phòng ban — muốn đặt đồ ăn thì gọi số này, muốn hỏi hóa đơn thì gọi số kia.', example: '"POST /api/subscribe" là endpoint nhận email đăng ký. "GET /api/posts" là endpoint lấy danh sách bài viết.', related: ['api', 'request'] },
  { id: 'environment', name: 'Environment', nameEn: 'Môi trường chạy', letter: 'E', groups: ['infra'], definition: 'Ngữ cảnh code đang chạy — máy của bạn (local/dev), server test (staging), hoặc bản thật (production). Mỗi environment có config và database riêng.', example: '"localhost:3000" = local environment. "yourapp.vercel.app" = production environment. Test kỹ ở local trước khi deploy.', related: ['env', 'localhost'], demo: { kind: 'interactive', src: 'gif-environment-demo.html', alt: 'Mô phỏng 4 tầng môi trường: Local, Staging, Production và Variables' }, practice: { kind: 'interactive', src: 'gif-environment-practice.html', alt: 'Thực hành chuyển đổi app qua các môi trường khác nhau' } },
  { id: 'env', name: '.env', nameEn: 'Environment Variables', letter: 'E', groups: ['infra'], definition: 'File chứa các biến bí mật — API key, password database, token. Không bao giờ upload file này lên GitHub. Vercel cho phép set env variables trong dashboard.', example: '"NEXT_PUBLIC_SUPABASE_KEY=xxx" trong file .env — đây là API key để connect với Supabase.', related: ['environment', 'api', 'git'], demo: { kind: 'interactive', src: 'gif-env-demo.html', alt: 'Mô phỏng file .env, quy tắc đặt tên, môi trường và bảo mật rò rỉ' } },
  { id: 'frontend', name: 'Frontend', nameEn: 'Phần giao diện người dùng', letter: 'F', groups: ['design', 'code'], definition: 'Tất cả những gì người dùng nhìn thấy và tương tác — buttons, form, layout, màu sắc, animation. HTML + CSS + JavaScript là frontend.', example: '"Tôi muốn thêm một section FAQ với accordion expand/collapse" — đây là frontend task, AI dùng Cursor để viết component này.', related: ['backend', 'component'], demo: { kind: 'interactive', src: 'gif-frontend-demo.html', alt: 'Mô phỏng 4 loại frontend: Static, Dynamic, Components, Responsive' } },
  { id: 'footer', name: 'Footer', nameEn: 'Chân trang', letter: 'F', groups: ['design', 'code'], definition: 'Phần cuối trang web — thường chứa thông tin liên hệ, logo, các liên kết phụ (sitemap), newsletter và bản quyền. Footer là component mang tính hệ thống, giúp người dùng không bao giờ rơi vào "ngõ cụt" khi kéo xuống hết trang.', example: 'Footer của markAI chứa logo, link tới các bài blog, fanpage và thông tin công ty. Chỉ cần sửa component Footer, toàn bộ các trang trên web sẽ được cập nhật phần cuối đồng loạt.', related: ['component', 'navbar', 'interface'], demo: { kind: 'interactive', src: 'gif-footer-demo.html', alt: 'Mô phỏng các loại Footer phổ biến và cấu trúc từng phần' } },
  {
    id: 'fork',
    name: 'Fork',
    nameEn: 'Copy repository / Nhân bản kho code',
    letter: 'F',
    groups: ['workflow'],
    definition: 'Cách "nhân bản" một dự án của người khác về tài khoản của bạn để làm của riêng. Bản copy này hoàn toàn độc lập, giúp bạn tha hồ "vọc vạch", sửa đổi bằng AI mà không sợ làm hỏng hay ảnh hưởng gì đến dự án gốc của họ.',
    example: 'Bạn thấy một tool AI hay trên GitHub nhưng không có quyền can thiệp vào code của họ. Bạn nhấn "Fork" để đưa nó về "nhà" mình (account GitHub cá nhân), sau đó mở Cursor lên và yêu cầu AI tùy chỉnh tính năng theo ý muốn.',
    related: ['git', 'repository', 'commit', 'pull-request'],
    demo: {
      kind: 'interactive',
      src: 'gif-fork-demo.html',
      alt: 'Mô phỏng quy trình Fork: từ repo gốc sang repo cá nhân và sự phân kỳ'
    },
    practice: {
      kind: 'interactive',
      src: 'gif-fork-practice.html',
      alt: 'Thực hành Fork: trải nghiệm quy trình copy và đề xuất thay đổi qua PR'
    }
  },
  { id: 'flexbox', name: 'Flexbox', nameEn: 'Hệ thống layout 1 chiều', letter: 'F', groups: ['design', 'code'], definition: 'Cách sắp xếp các thành phần giao diện theo hàng ngang hoặc cột dọc một cách linh hoạt. Flexbox giúp bạn giải quyết các bài toán "nhức đầu" như căn giữa một khối hộp, dãn đều các nút bấm, hoặc tự động sắp xếp lại vị trí khi màn hình thu nhỏ.', example: 'Prompt: "Dùng Flexbox để xếp 3 card sản phẩm nằm ngang, dãn đều khoảng cách, và căn giữa chúng theo chiều dọc. Trên mobile thì tự động chuyển sang xếp chồng hàng dọc."', related: ['grid', 'padding', 'align', 'spacing', 'responsive'], demo: { kind: 'interactive', src: 'gif-flexbox-demo.html', alt: 'Mô phỏng 4 khía cạnh của Flexbox: Direction, Alignment, Distribution và Wrapping' }, practice: { kind: 'interactive', src: 'gif-flexbox-practice.html', alt: 'Thực hành Flexbox Builder: tự tay sắp xếp các khối hộp và xem prompt tương ứng' } },
  { id: 'framework', name: 'Framework', nameEn: 'Khung làm việc', letter: 'F', groups: ['infra', 'code'], definition: 'Bộ khung có sẵn giúp bạn không phải xây từ đầu. Next.js là framework cho web — nó đã lo routing, SEO, performance. Bạn chỉ cần tập trung vào logic và giao diện.', example: 'markAI.vn dùng Next.js framework + Tailwind CSS framework. Hai thứ này cùng nhau giúp vibecoder build web chuyên nghiệp.' },
  { id: 'function', name: 'Function', nameEn: 'Hàm / Khối code tái dùng', letter: 'F', groups: ['code'], definition: 'Một khối code làm một việc cụ thể, có thể gọi đi gọi lại. Giống như quy trình SOP — viết một lần, áp dụng nhiều lần.', example: '"Hàm formatDate() nhận ngày tháng và trả về dạng \'DD/MM/YYYY\'" — gọi function này ở bất kỳ đâu trong app.' },
  { id: 'git', name: 'Git', nameEn: 'Hệ thống quản lý phiên bản', letter: 'G', groups: ['workflow'], definition: 'Hệ thống lưu phiên bản tự động cho code. Giống như một "cỗ máy thời gian", Git cho phép bạn lưu lại trạng thái của project tại từng thời điểm và quay lại bất kỳ phiên bản nào trong quá khứ nếu có lỗi xảy ra.', example: 'git clone url (Tải code về máy) · git pull (Cập nhật code mới nhất từ AI).', related: ['commit', 'repository'], demo: { kind: 'interactive', src: 'gif-git-demo.html', alt: 'Mô phỏng hệ thống quản lý phiên bản Git', caption: 'Git giúp team làm việc song song trên nhiều branch mà không sợ đè code của nhau.' } },
  { id: 'gradient', name: 'Gradient', nameEn: 'Màu chuyển mượt', letter: 'G', groups: ['design', 'code'], definition: 'Sự chuyển đổi mượt mà giữa hai hay nhiều màu sắc. Gradient giúp tạo ra chiều sâu, sự tinh tế và cảm giác hiện đại cho giao diện mà không cần sử dụng các tệp hình ảnh nặng. Có hai loại phổ biến: Linear (chuyển theo đường thẳng) và Radial (chuyển từ tâm ra ngoài).', example: 'Prompt: "Dùng gradient từ cam #d97706 sang đỏ #dc2626 cho nút CTA chính, góc 135 độ để tạo cảm giác năng động."', related: ['color-palette', 'primary-color', 'css'], demo: { kind: 'interactive', src: 'gif-gradient-demo.html', alt: 'Mô phỏng các loại gradient: Background, Button, Text và Overlay' } },
  { id: 'grid', name: 'Grid', nameEn: 'Hệ thống layout lưới', letter: 'G', groups: ['design', 'code'], definition: 'Hệ thống các đường kẻ ngang và dọc (lưới) dùng để sắp xếp các thành phần trên trang web một cách ngăn nắp. 12 cột là "tiêu chuẩn vàng" vì nó dễ dàng chia thành 2, 3, 4, hoặc 6 phần đều nhau.', example: 'Khi bạn muốn "3 bài blog trên 1 hàng", bạn đang dùng Grid 12 cột với mỗi bài chiếm 4 cột. Prompt: "Dùng grid 12 cột, mỗi card sản phẩm chiếm 3 cột trên desktop và 6 cột trên tablet".', related: ['flexbox', 'responsive', 'breakpoint'], demo: { kind: 'interactive', src: 'gif-grid-demo.html', alt: 'Mô phỏng hệ thống Grid layout: 8, 12, 16 cột và Nested Grid' } },
  { id: 'gutter', name: 'Gutter', nameEn: 'Khoảng cách giữa các cột/hàng', letter: 'G', groups: ['design', 'code'], definition: 'Khoảng trống giữa các cột (column) hoặc các hàng (row) trong một hệ thống lưới (grid). Gutter giúp phân tách các thành phần nội dung, tạo "khoảng thở" và giúp giao diện trông chuyên nghiệp, dễ đọc hơn.', example: 'Prompt: "Tăng gutter giữa các cột lên 24px để nội dung thoáng hơn, còn gutter giữa các hàng thì để 32px để phân tách rõ các section."', related: ['grid', 'spacing', 'padding', 'margin'], demo: { kind: 'interactive', src: 'gif-gutter-demo.html', alt: 'Mô phỏng các loại gutter: Column, Row, Nested và Responsive' } },
  { id: 'github', name: 'GitHub', nameEn: 'Cloud lưu code', letter: 'G', groups: ['workflow'], definition: 'Nơi lưu code trên cloud — giống Google Drive nhưng cho code, với full lịch sử thay đổi. Vercel kết nối với GitHub để tự động deploy mỗi khi bạn push code mới.', example: 'Flow chuẩn: code trên máy → commit → push lên GitHub → Vercel tự build và deploy → có link live trong vài phút.', related: ['git', 'vercel'] },
  { id: 'hook', name: 'Hook', nameEn: 'Móc chức năng React', letter: 'H', groups: ['code'], definition: 'Hàm đặc biệt trong React để quản lý state và side effects. useEffect, useState là các hook phổ biến. AI tự viết hook cho bạn.', example: '"Khi trang load, tự động fetch danh sách sản phẩm từ database" — AI dùng useEffect hook để chạy logic này khi component mount.' },
  {
    id: 'hosting',
    name: 'Hosting',
    nameEn: 'Lưu trữ web',
    letter: 'H',
    groups: ['infra'],
    definition: 'Dịch vụ cung cấp "chỗ ở" cho web của bạn trên internet. Vercel là hosting miễn phí tốt nhất cho Next.js project. Không cần biết server — Vercel lo hết.',
    example: '"Tôi cần hosting cho web campaign" → Dùng Vercel (miễn phí, dễ setup, tự động deploy từ GitHub).',
    related: ['vercel', 'deploy'],
    demo: { kind: 'interactive', src: 'gif-hosting-demo.html', alt: 'Mô phỏng Hosting và quy trình vận hành' }
  },
  { id: 'inference', name: 'Inference', nameEn: 'AI xử lý và trả kết quả', letter: 'I', groups: ['ai'], definition: 'Quá trình AI nhận input (prompt của bạn) và tạo ra output (text, code, ảnh). Mỗi lần bạn hỏi AI và AI trả lời = một lần inference chạy trên server.', example: '"Inference cost" = chi phí mỗi lần gọi AI API. Khi dùng Claude API trong app, mỗi user message = một lần inference = một khoản phí nhỏ.' },
  {
    id: 'interface',
    name: 'Interface (UI)',
    nameEn: 'Giao diện người dùng',
    letter: 'I',
    groups: ['design'],
    definition: 'Interface (Giao diện) là điểm tiếp xúc giữa người dùng và hệ thống. Nó không chỉ là "vẻ ngoài đẹp" mà là cách bạn tương tác với sản phẩm qua việc click, chạm, gõ, nói hoặc nhìn. Một interface tốt giúp xóa nhòa ranh giới giữa ý định của người dùng và khả năng của máy móc.',
    example: 'Khi AI nói "xây interface" thường là API cho hệ thống giao tiếp. Khi designer nói "interface" là cách user giao tiếp với app. Ví dụ: "Nút Đăng ký rõ ràng > nút Tiếp mơ hồ" là cải thiện interface về tính Clarity (Rõ ràng).',
    related: ['gui', 'cli', 'ux', 'accessibility'],
    demo: {
      kind: 'interactive',
      src: 'gif-interface-demo.html',
      alt: 'Simulation of Interface concepts'
    },
    practice: {
      kind: 'interactive',
      src: 'gif-interface-practice.html',
      alt: 'Practice Interface design principles'
    }
  },
  { id: 'import', name: 'Import / Export', nameEn: 'Chia sẻ code giữa file', letter: 'I', groups: ['code'], definition: 'Cách một file dùng code từ file khác. Import = lấy vào. Export = chia sẻ ra. Khi AI tạo component, nó thường có "export default" để các trang khác import vào.', example: '"import Button from \'./Button\'" = trang này đang dùng component Button từ file Button.tsx. Nếu thiếu dòng này, component sẽ không hoạt động.' },
  { id: 'json', name: 'JSON', nameEn: 'Định dạng dữ liệu phổ biến', letter: 'J', groups: ['data', 'code'], definition: 'Định dạng text để trao đổi dữ liệu giữa hệ thống. Trông như: {"name": "Lan", "email": "lan@co.com"}. API thường trả về JSON.', example: 'Khi Airtable API trả dữ liệu, nó là JSON. Cursor/Claude sẽ parse JSON đó và hiển thị thành giao diện đẹp trên web.', related: ['api', 'request'] },
  { id: 'jsx', name: 'JSX', nameEn: 'JavaScript + HTML hợp nhất', letter: 'J', groups: ['code'], definition: 'Cú pháp viết HTML trong file JavaScript/TypeScript. React dùng JSX. Nhìn trông giống HTML nhưng có thêm logic. File .tsx là TypeScript + JSX.', example: 'Khi Cursor tạo component, nó tạo file .tsx với JSX. Chỉ cần biết đây là "HTML nâng cấp" mà AI viết cho bạn.' },
  {
    id: 'localhost',
    name: 'Local Host',
    nameEn: 'localhost — máy tính của bạn',
    letter: 'L',
    groups: ['infra'],
    definition: 'Địa chỉ IP của chính máy tính bạn đang dùng (thường là 127.0.0.1). Đây là môi trường chạy web riêng tư — chỉ bạn thấy, internet không thấy. Marketer cần hiểu local host là nơi "thử nghiệm" an toàn trước khi đưa code lên server thật (hosting).',
    example: 'Khi AI bảo "xem trên local" → nghĩa là họ đang mở localhost:3000 trên máy AI. Bạn không thể xem link này từ máy bạn trừ khi họ "deploy" lên internet.',
    related: ['port', 'deploy', 'hosting', 'environment'],
    demo: { kind: 'interactive', src: 'gif-localhost-demo.html', alt: 'Mô phỏng sự khác biệt giữa Local Host và Server Hosting' }
  },
  { id: 'loop', name: 'Loop', nameEn: 'Lặp lại tự động', letter: 'L', groups: ['code'], definition: 'Tự động lặp lại một đoạn code với từng item trong danh sách. Khi bạn có 50 sản phẩm và muốn hiển thị card cho từng cái — loop xử lý việc đó.', example: '"Hiển thị tất cả bài blog từ Supabase" → AI viết loop map qua array posts, render BlogCard cho từng bài.' },
  {
    id: 'llm',
    name: 'LLM',
    nameEn: 'Large Language Model',
    letter: 'L',
    groups: ['ai'],
    definition: 'Mô hình AI được train trên lượng text khổng lồ để hiểu và tạo ngôn ngữ. Claude, GPT-4, Gemini đều là LLM. Đây là "não" của các AI tool bạn đang dùng.',
    example: '"Cursor dùng LLM nào?" → Cursor cho phép chọn model: Claude Sonnet, GPT-4o. Model = LLM cụ thể bạn đang chat với.',
    related: ['model', 'prompt', 'context', 'context-window'],
    demo: {
      kind: 'interactive',
      src: 'gif-llm-demo.html',
      alt: 'Mô phỏng 4 khía cạnh của LLM: Tokenization, Prediction, Context Window và Temperature'
    },
    practice: {
      kind: 'interactive',
      src: 'gif-llm-practice.html',
      alt: 'Thực hành Prompt Lab: thử nghiệm temperature và quan sát tokenization'
    }
  },
  { id: 'letter-spacing', name: 'Letter Spacing', nameEn: 'Giãn cách ký tự / Tracking', letter: 'L', groups: ['design'], definition: 'Letter Spacing (hay Tracking) là khoảng cách giữa các ký tự trong một đoạn văn bản. Chỉnh letter spacing giúp chữ dễ đọc hơn hoặc tạo ra phong cách typography riêng biệt (ví dụ: chữ thưa ra cho cảm giác sang trọng).', example: 'Khi dùng font Serif cho tiêu đề, mình thường giảm nhẹ letter spacing để chữ trông chặt chẽ và chuyên nghiệp hơn. Prompt: "Giảm letter spacing của H1 xuống -0.02em."', related: ['spacing', 'typography'], demo: { kind: 'interactive', src: 'gif-letter-spacing-demo.html' } },
  { id: 'line-spacing', name: 'Line Spacing', nameEn: 'Giãn cách dòng / Leading', letter: 'L', groups: ['design'], definition: 'Line Spacing (hay Leading) là khoảng cách giữa các dòng trong một đoạn văn bản. Chỉnh line spacing phù hợp giúp khối văn bản dễ đọc, không bị dính vào nhau hoặc quá rời rạc.', example: 'Với đoạn văn bản dài, line spacing thường để mức 1.5 - 1.6 để mắt dễ theo dõi. Với tiêu đề, có thể để mức 1.1 - 1.2. Prompt: "Chỉnh line spacing của đoạn văn này lên 1.6."', related: ['spacing', 'typography'], demo: { kind: 'interactive', src: 'gif-line-spacing-demo.html', alt: 'Mô phỏng các mức line spacing từ chặt đến thoáng' } },
  { id: 'line-height', name: 'Line Height', nameEn: 'Chiều cao dòng', letter: 'L', groups: ['design', 'code'], definition: 'Line Height là khoảng cách từ đáy một dòng text đến đáy dòng tiếp theo. Nó không phải là pixel mà là hệ số nhân với font size. Chỉnh line height phù hợp giúp khối văn bản dễ đọc, không bị dính vào nhau hoặc quá rời rạc.', example: 'Với đoạn văn bản dài, line height thường để mức 1.5 - 1.6 để mắt dễ theo dõi. Với tiêu đề, có thể để mức 1.1 - 1.2. Prompt: "Chỉnh line-height của đoạn văn này lên 1.6."', related: ['letter-spacing', 'line-spacing', 'typography'], demo: { kind: 'interactive', src: 'gif-lineheight-demo.html', alt: 'Mô phỏng các mức line-height từ chật đến thoáng' } },
  { id: 'margin', name: 'Margin', nameEn: 'Khoảng cách ngoài element', letter: 'M', groups: ['design'], definition: 'Margin là khoảng trống nằm bên ngoài một element, dùng để tách nó ra khỏi các khối xung quanh. Nếu Padding là khoảng thở bên trong khung, thì Margin là khoảng cách giữa khung đó với phần còn lại của layout.', example: '"Landing page đang bị dính giữa hero, social proof và CTA." Prompt: "Tăng margin-bottom giữa các section lên 48px, riêng khối CTA cuối để 64px để tách rõ điểm hành động."', related: ['padding', 'spacing', 'flexbox', 'grid'], demo: { kind: 'interactive', src: 'gif-margin-demo.html', alt: 'Mô phỏng 4 mức margin phổ biến từ chặt đến thoáng' } },
  { id: 'model', name: 'Model', nameEn: 'Phiên bản AI', letter: 'M', groups: ['ai'], definition: 'Phiên bản cụ thể của một AI — như "Claude Sonnet 3.7" hay "GPT-4o". Mỗi model khác nhau về tốc độ, chi phí, và khả năng.', example: 'Trong Cursor: chọn model ở góc phải. Claude Sonnet 3.7 = tốt cho code phức tạp. Claude Haiku = nhanh hơn, rẻ hơn cho task đơn giản.', related: ['llm', 'prompt', 'context-window', 'api'], demo: { kind: 'interactive', src: 'gif-model-demo.html', alt: 'Mô phỏng 4 khía cạnh của Model: Black Box, Versions, Task to Model và Chat vs API' } },
  {
    id: 'mcp',
    name: 'MCP',
    nameEn: 'Model Context Protocol',
    letter: 'M',
    groups: ['ai', 'workflow'],
    definition: 'Giao thức giúp AI kết nối trực tiếp với các công cụ và dữ liệu bên ngoài (như database, file, Google Search) một cách chuẩn hóa. Hãy tưởng tượng MCP giống như một "cổng USB" vạn năng: thay vì mỗi thiết bị cần một loại dây sạc riêng, tất cả đều dùng chung một chuẩn để kết nối dễ dàng.',
    example: 'Cursor dùng MCP để đọc file Google Sheets của bạn hoặc tra cứu tài liệu trên Notion mà không cần bạn phải copy-paste từng dòng.',
    related: ['llm', 'model', 'api', 'workflow'],
    demo: {
      kind: 'interactive',
      src: 'gif-mcp-demo.html',
      alt: 'Mô phỏng MCP: Cổng kết nối vạn năng giúp AI tương tác với dữ liệu thực tế'
    },
    practice: {
      kind: 'interactive',
      src: 'gif-mcp-practice.html',
      alt: 'Thực hành kết nối MCP: Bật các server để mở rộng khả năng của AI'
    }
  },
  {
    id: 'merge',
    name: 'Merge',
    nameEn: 'Gộp code / Hợp nhất phiên bản',
    letter: 'M',
    groups: ['workflow'],
    definition: 'Hành động kết hợp các thay đổi từ một nhánh (branch) này vào một nhánh khác (thường là gộp feature branch vào main). Merge giúp hợp nhất công sức của nhiều người làm việc riêng lẻ thành một sản phẩm hoàn chỉnh duy nhất.',
    example: 'Bạn đã hoàn thiện giao diện mới trên nhánh "new-design". Bây giờ bạn thực hiện "merge" để đưa toàn bộ giao diện đó vào nhánh "main" để web chính thức cập nhật. Nếu có 2 người cùng sửa một dòng, Git sẽ báo "conflict" để bạn chọn bản tốt nhất.',
    related: ['git', 'branch', 'commit', 'pull-request', 'pull', 'push'],
    demo: { kind: 'interactive', src: 'gif-merge-demo.html', alt: 'Mô phỏng 4 khía cạnh của Merge: Gộp nhánh, Merge sạch, Merge Conflict và Cách giải quyết' },
    practice: { kind: 'interactive', src: 'gif-merge-practice.html', alt: 'Thực hành giải quyết Merge Conflict: chọn phiên bản phù hợp cho campaign' }
  },
  { id: 'navbar', name: 'Nav bar', nameEn: 'Thanh điều hướng / Navigation Bar', letter: 'N', groups: ['design', 'code'], definition: 'Thanh điều hướng nằm ở đầu (hoặc cạnh) mỗi trang — chứa logo, menu links, và nút hành động. Navbar giúp người dùng biết mình đang ở đâu và có thể đi đâu tiếp theo.', example: 'Prompt: "Thêm mục \'Pricing\' vào navbar, khi scroll xuống thì navbar nên có thêm bóng đổ và đổi màu nền."', related: ['component', 'sticky', 'link'], demo: { kind: 'interactive', src: 'gif-navbar-demo.html', alt: 'Mô phỏng các trạng thái của navbar: mặc định, scrolled, mobile và active' } },
  { id: 'npm', name: 'npm', nameEn: 'Node Package Manager', letter: 'N', groups: ['infra'], definition: 'Công cụ cài và quản lý thư viện code. Giống App Store nhưng cho code — gõ "npm install tên-thư-viện" là cài xong.', example: '"npm install" trong terminal = cài tất cả dependency của project. "npm run dev" = chạy server local. 2 lệnh này dùng hàng ngày khi vibecode.' },
  { id: 'nodejs', name: 'Node.js', nameEn: 'Môi trường chạy JavaScript', letter: 'N', groups: ['infra'], definition: 'Phần mềm cho phép chạy JavaScript ngoài trình duyệt — trên server, terminal. Next.js cần Node.js để chạy. Cài một lần, không cần hiểu sâu.', example: 'Lần đầu setup project: tải và cài Node.js từ nodejs.org → sau đó mọi lệnh npm đều dùng được.' },
  { id: 'padding', name: 'Padding', nameEn: 'Khoảng cách trong — không gian giữa nội dung và viền', letter: 'P', groups: ['design'], definition: 'Padding là khoảng trống nằm BÊN TRONG một element, tạo ra sự ngăn cách giữa nội dung (text, ảnh) và đường viền (border). Padding giúp nội dung "thở" được và dễ đọc hơn, không bị dính sát vào cạnh.', example: '"Nội dung dính sát vào viền card" → thiếu padding. Khi nói "thêm padding 16px" là yêu cầu nới rộng khoảng trống bên trong card để text trông thoáng hơn.', related: ['margin', 'spacing', 'css'], demo: { kind: 'interactive', src: 'gif-padding-demo.html', alt: 'Mô phỏng 4 mức padding từ không padding đến padding đều 4 cạnh' } },
  { id: 'props', name: 'Props', nameEn: 'Properties / Thuộc tính', letter: 'P', groups: ['code'], definition: 'Dữ liệu truyền vào component từ bên ngoài. Giống như thông số khi gọi món — cùng món Phở nhưng "không hành, thêm tái" là props khác nhau.', example: '<Button text="Đăng ký" color="accent" /> — "text" và "color" là props.' },
  { id: 'prompt', name: 'Prompt', nameEn: 'Câu lệnh cho AI', letter: 'P', groups: ['ai'], definition: 'Đoạn text bạn gửi cho AI để hướng dẫn nó làm việc. Prompt tốt = kết quả tốt. Prompt mơ hồ = AI đoán mò. Đây là kỹ năng quan trọng nhất trong vibecode.', example: 'Prompt tệ: "Làm trang web đẹp". Prompt tốt: "Tạo landing page Next.js có hero section, countdown 3 ngày, form email, màu brand #E8410A, responsive mobile."' },
  {
    id: 'port',
    name: 'Port',
    nameEn: 'Cổng kết nối',
    letter: 'P',
    groups: ['infra'],
    definition: 'Số định danh cho service đang chạy trên máy. localhost:3000 → port 3000 là Next.js. "Port already in use" = có app khác đang chiếm port đó.',
    example: '"Error: port 3000 is already in use" → Tắt terminal khác hoặc dùng port khác: "npm run dev -- --port 3001".',
    related: ['localhost', 'deploy', 'hosting', 'environment'],
    demo: { kind: 'interactive', src: 'gif-port-demo.html', alt: 'Mô phỏng 4 khía cạnh của Port: Port là gì, Port quy ước, Xung đột Port và Localhost:Port' },
    practice: { kind: 'interactive', src: 'gif-port-practice.html', alt: 'Thực hành Port Explorer: kiểm tra các port phổ biến và giả lập xung đột' }
  },
  {
    id: 'pull',
    name: 'Pull',
    nameEn: 'Tải code từ GitHub về máy',
    letter: 'P',
    groups: ['workflow'],
    definition: 'Hành động tải những thay đổi mới nhất từ repository trên server (GitHub) về máy tính cá nhân của bạn và gộp (merge) chúng vào bản code hiện tại. Đây là việc đầu tiên bạn nên làm mỗi khi bắt đầu một buổi làm việc để đảm bảo code của bạn luôn được cập nhật so với cả team.',
    example: 'Đồng nghiệp vừa thông báo "đã sửa xong lỗi header". Bạn cần gõ lệnh "git pull" để lấy bản vá đó về máy mình trước khi tiếp tục làm phần việc khác.',
    related: ['git', 'fetch', 'merge', 'push', 'repository', 'workflow'],
    demo: { kind: 'interactive', src: 'gif-pull-demo.html', alt: 'Mô phỏng 4 khía cạnh của Pull: Hướng dữ liệu, Fetch + Merge, Vòng lặp hàng ngày và Conflict' },
    practice: { kind: 'interactive', src: 'gif-pull-practice.html', alt: 'Thực hành quy trình Pull: từ fetch đến merge và xử lý conflict thực tế' }
  },
  {
    id: 'push',
    name: 'Push',
    nameEn: 'Tải code lên GitHub',
    letter: 'P',
    groups: ['workflow'],
    definition: 'Hành động tải các commit từ máy tính cá nhân lên server (GitHub). Đây là bước bắt buộc để đồng bộ hóa code của bạn với team và kích hoạt các quy trình tự động như Deploy.',
    example: 'Bạn vừa sửa xong giao diện, đã commit. Nhưng đồng nghiệp báo "vẫn chưa thấy code mới". Đó là vì bạn mới save local, cần gõ "git push" để code bay lên GitHub.',
    related: ['git', 'commit', 'pull', 'repository', 'workflow'],
    demo: { kind: 'interactive', src: 'gif-push-demo.html', alt: 'Mô phỏng 4 khía cạnh của Push: Bản chất, Commit vs Push, Push rejected và Workflow' },
    practice: { kind: 'interactive', src: 'gif-push-practice.html', alt: 'Thực hành quy trình sửa -> commit -> push và xử lý xung đột push rejected' }
  },
  { id: 'responsive', name: 'Responsive', nameEn: 'Thiết kế thích ứng', letter: 'R', groups: ['design', 'code'], definition: 'Khả năng trang web tự thay đổi layout để hiển thị tối ưu trên mọi thiết bị. Với Vibecode, bạn không cần vật lộn với CSS Media Queries phức tạp; chỉ cần ra lệnh cho AI xử lý các "điểm gãy" (breakpoints) để giao diện tự nhảy sang cấu trúc mới (ví dụ từ 4 cột sang 1 cột) một cách thông minh.', example: 'Khi thiết kế landing page, hãy bảo AI: "Làm responsive mobile-first, desktop hiện 3 cột nhưng mobile phải stack dọc 1 cột và ẩn bớt các ảnh nền nặng".', related: ['breakpoint', 'mobile-first', 'flexbox', 'grid'], demo: { kind: 'interactive', src: 'gif-responsive-demo.html', alt: 'Mô phỏng layout thay đổi theo Desktop, Tablet và Mobile' } },
  { id: 'request', name: 'Request / Response', nameEn: 'Yêu cầu / Phản hồi', letter: 'R', groups: ['infra'], definition: 'Cách client và server nói chuyện. Client gửi Request (yêu cầu), server trả Response (kết quả). Mỗi khi web load data từ API là một cặp Request-Response.', example: '"400 Bad Request" = server không hiểu yêu cầu. "404 Not Found" = không tìm thấy. "500 Server Error" = server bị lỗi.' },
  { id: 'repository', name: 'Repository', nameEn: 'Kho code', letter: 'R', groups: ['workflow'], definition: 'Thư mục project được Git quản lý, chứa toàn bộ code và lịch sử thay đổi. Mỗi project = một repository (repo). Lưu trên GitHub để có backup.', example: '"Tạo repo mới trên GitHub, clone về máy, code, commit, push." — Claude Code có thể làm hầu hết bước này.' },
  { id: 'state', name: 'State', nameEn: 'Trạng thái của component', letter: 'S', groups: ['code'], definition: 'Dữ liệu tạm thời bên trong component — thay đổi thì UI tự cập nhật. Số lượng sản phẩm trong giỏ hàng, tab đang active, filter đang chọn — đều là state.', example: '"Khi nhấn nút Thêm vào giỏ, số lượng tăng lên ngay mà không reload trang" → State đang quản lý số lượng đó.' },
  { id: 'supabase', name: 'Supabase', nameEn: 'Backend as a Service', letter: 'S', groups: ['data', 'infra'], definition: 'Nền tảng backend miễn phí — database, authentication, storage, realtime, tất cả trong một. Hầu hết vibecoder chọn Supabase vì không cần setup server.', example: '"Lưu form submissions, quản lý user đăng nhập, upload ảnh campaign" — Supabase xử lý hết 3 việc này.' },
  { id: 'spacing', name: 'Spacing', nameEn: 'Hệ thống khoảng cách', letter: 'S', groups: ['design'], definition: 'Spacing (khoảng cách/giãn cách) là thuật ngữ chỉ khoảng không gian giữa các yếu tố như chữ, dòng, đoạn văn trong soạn thảo (Word) hoặc các phần tử thiết kế đồ họa/website. Mục đích là tăng khả năng đọc hiểu và tạo bố cục cân đối. Nó bao gồm giãn dòng (line), khoảng cách đoạn (paragraph) và khoảng cách ký tự.', example: '"Trang trông lộn xộn" thường do spacing không nhất quán. Prompt: "Thống nhất spacing giữa các section thành 64px."', related: ['margin', 'padding', 'flexbox', 'grid'], demo: { kind: 'interactive', src: 'gif-spacing-demo.html', alt: 'Mô phỏng các mức spacing từ chặt đến thoáng' } },
  { id: 'stroke', name: 'Stroke', nameEn: 'Đường viền Vector', letter: 'S', groups: ['design', 'code'], definition: 'Đường viền trong thiết kế vector (SVG, Figma, icon). Khác với border (CSS), stroke có thể theo bất kỳ hình dạng nào — vòng tròn, đường cong, icon phức tạp. Có 3 thuộc tính chính: weight (độ dày), style (kiểu nét), corner (góc nối).', example: 'Feedback cho AI: "icon này nét quá mảnh, hãy tăng stroke-width lên 2px" hoặc "đổi stroke sang kiểu dashed cho các icon chưa hoàn thiện".', related: ['border', 'vector', 'css'], demo: { kind: 'interactive', src: 'gif-stroke-demo.html', alt: 'Mô phỏng các thuộc tính stroke: weight, style, corner và cap' } },
  { id: 'slider', name: 'Slider', nameEn: 'Thanh trượt chọn giá trị', letter: 'S', groups: ['design', 'code'], definition: 'Một control cho phép người dùng chọn một giá trị từ một dải (range) bằng cách di chuyển một "nút" (thumb) dọc theo một "đường chạy" (track). Slider rất hữu ích để điều chỉnh các thông số định lượng như âm lượng, độ sáng, hoặc các bộ lọc.', example: 'Prompt: "Thêm một slider để người dùng chọn độ mờ (opacity) cho ảnh, dải giá trị từ 0 đến 100, bước nhảy là 10."', related: ['input', 'control', 'ui'], demo: { kind: 'interactive', src: 'gif-slider-demo.html', alt: 'Mô phỏng các trạng thái của slider: mặc định, active, stepped và disabled' } },
  { id: 'snackbar', name: 'Snackbar', nameEn: 'Snackbar / Toast', letter: 'S', groups: ['design', 'code'], definition: 'Thành phần thông báo tạm thời, xuất hiện ở dưới màn hình sau một hành động của người dùng. Khác với Toast, Snackbar thường đi kèm nút hành động (như Undo) và tập trung vào phản hồi tức thì cho một thao tác duy nhất thay vì thông báo hàng loạt.', example: 'Prompt: "Sau khi user nhấn Lưu, hãy hiện một snackbar màu xanh báo \'Đã cập nhật profile\', kèm theo một nút Undo bên phải."', related: ['toast-notification', 'popup', 'alert'], demo: { kind: 'interactive', src: 'gif-snackbar-demo.html', alt: 'Mô phỏng 4 loại snackbar: Success, Error, Info, và Warning' } },
  { id: 'typescript', name: 'TypeScript', nameEn: 'JavaScript có kiểu dữ liệu', letter: 'T', groups: ['code'], definition: 'Phiên bản JavaScript được bổ sung kiểu dữ liệu — giúp phát hiện lỗi trước khi chạy code. File .ts và .tsx là TypeScript.', example: '"Type error" trong terminal = TypeScript phát hiện bạn đang dùng sai kiểu dữ liệu. Paste lỗi cho AI, nó tự fix.' },
  { id: 'tailwind', name: 'Tailwind CSS', nameEn: 'Framework CSS dùng class', letter: 'T', groups: ['design', 'code'], definition: 'Thư viện CSS dùng class nhỏ để style trực tiếp trong HTML. Thay vì viết CSS riêng, bạn ghép class như Lego: "flex gap-4 bg-blue-500 text-white p-3".', example: 'Prompt: "Nút CTA màu cam đỏ, chữ trắng, padding 12px 24px, hover đổi màu tối hơn." → AI tạo className với Tailwind class.' },
  { id: 'ui', name: 'UI / UX', nameEn: 'User Interface / Experience', letter: 'U', groups: ['design'], definition: 'UI = giao diện (trông như thế nào). UX = trải nghiệm (dùng cảm giác ra sao). UI đẹp mà UX tệ là trang trông ổn nhưng khó dùng.', example: '"Form điền thông tin khó quá, user bỏ giữa chừng" = UX tệ dù UI đẹp. Prompt: "Chia form thành 3 bước, mỗi bước chỉ hỏi 2-3 field."' },
  { id: 'url', name: 'URL / Route', nameEn: 'Đường dẫn trang web', letter: 'U', groups: ['infra'], definition: 'Địa chỉ của trang web. Trong Next.js, route tương ứng với folder trong thư mục app/. Tạo file app/about/page.tsx = tạo URL /about tự động.', example: '"Tôi muốn trang /campaign/summer-2026" → Tạo file app/campaign/summer-2026/page.tsx. Next.js tự generate route.' },
  { id: 'vercel', name: 'Vercel', nameEn: 'Hosting cho Next.js', letter: 'V', groups: ['infra'], definition: 'Nền tảng deploy và hosting tốt nhất cho Next.js — miễn phí cho project cá nhân. Kết nối GitHub → push code → Vercel tự deploy.', example: 'vercel.com → New Project → Import GitHub repo → Deploy. Xong. Web live trong 2 phút với link yourapp.vercel.app.' },
  { id: 'vector', name: 'Vector / Embedding', nameEn: 'Biểu diễn số của text', letter: 'V', groups: ['ai', 'data'], definition: 'Cách AI chuyển text thành số để tính toán "sự tương đồng". Cho phép AI tìm nội dung liên quan, không chỉ tìm theo từ khóa.', example: '"Tìm kiếm sản phẩm bằng mô tả thay vì tên" — đây là semantic search dùng vector embedding. Supabase pgvector hỗ trợ tính năng này.' },
  { id: 'webhook', name: 'Webhook', nameEn: 'Thông báo tự động', letter: 'W', groups: ['infra'], definition: 'Cơ chế "gọi ngược" — khi có sự kiện xảy ra ở service A, nó tự thông báo cho service B. Chat app, live dashboard, notification realtime.', example: '"Khi có đơn hàng mới trên Shopify, tự gửi thông báo Slack" → Shopify webhook gọi URL của bạn → server nhận và gửi Slack.' },
  { id: 'wireframe', name: 'Wireframe', nameEn: 'Khung bố cục', letter: 'W', groups: ['design'], definition: 'Bản phác thảo layout của trang — chỉ có khung và vị trí, không có màu sắc hay nội dung thật. Dùng để thống nhất cấu trúc với team.', example: 'Vẽ wireframe trên Figma hoặc giấy → mô tả cho AI → AI code đúng layout đó. Wireframe giúp prompt rõ hơn nhiều.' },
  { id: 'websocket', name: 'WebSocket', nameEn: 'Kết nối thời gian thực', letter: 'W', groups: ['infra'], definition: 'Kết nối hai chiều liên tục giữa browser và server. Cho phép update realtime mà không cần reload. Chat app, live dashboard, notification realtime đều dùng WebSocket.', example: '"Muốn dashboard KPI cập nhật realtime khi có data mới" → Dùng Supabase Realtime (chạy trên WebSocket).' },
  { id: 'radius', name: 'Radius', nameEn: 'Bo góc / Border Radius', letter: 'R', groups: ['design'], definition: 'Độ cong ở 4 góc của một hình khối. 0px là góc vuông sắc cạnh. Giá trị càng lớn, góc càng tròn. Radius quyết định "vibe" của giao diện: từ cứng cáp, kỹ thuật đến mềm mại, thân thiện.', example: 'Prompt: "Làm nút bấm mềm hơn với border-radius 8px, riêng card sản phẩm thì bo mạnh 16px để tạo cảm giác thân thiện."', related: ['css', 'interface', 'element', 'design-system'], demo: { kind: 'interactive', src: 'gif-radius-demo.html', alt: 'Mô phỏng các mức border-radius từ sắc cạnh đến bo tròn' } },
  { id: 'corner', name: 'Corner', nameEn: 'Góc / Corner Radius', letter: 'C', groups: ['design'], definition: 'Thuật ngữ chỉ các góc của một khối hoặc đường nét. Trong thiết kế giao diện, "Corner" thường đi đôi với "Radius" (bo góc). Việc xử lý góc quyết định độ sắc hay mềm của tổng thể sản phẩm.', example: 'Prompt: "Làm cho các góc (corners) của card này bo mạnh hơn một chút, khoảng 12px để nhìn thân thiện hơn."', related: ['radius', 'stroke', 'border', 'design-system'], demo: { kind: 'interactive', src: 'gif-corner-demo.html', alt: 'Mô phỏng các loại corner radius phổ biến' } },
  { id: 'dropdown', name: 'Dropdown', nameEn: 'Menu thả xuống', letter: 'D', groups: ['design', 'code'], definition: 'Một thành phần giao diện cho phép người dùng chọn một giá trị từ danh sách các tùy chọn được ẩn đi và chỉ hiện ra khi click. Nó giúp tiết kiệm diện tích và giữ cho giao diện gọn gàng hơn so với việc liệt kê tất cả lựa chọn cùng lúc.', example: 'Prompt: "Thêm một dropdown để chọn category, mặc định là \'Tất cả\', khi chọn xong thì filter lại danh sách bài viết."', related: ['input', 'select', 'state'], demo: { kind: 'interactive', src: 'gif-dropdown-demo.html', alt: 'Mô phỏng các trạng thái của dropdown: mặc định, mở, đã chọn và disabled' } },
  { id: 'element', name: 'Element', nameEn: 'Thành phần giao diện', letter: 'E', groups: ['design', 'code'], definition: 'Đơn vị nhỏ nhất có thể nhận dạng trong giao diện người dùng — như nút bấm, ô nhập liệu, tiêu đề, hay ảnh. Một UI phức tạp là sự kết hợp của nhiều element được sắp xếp theo cấu trúc nhất định.', example: 'Prompt: "Thêm một element Input vào form này, bên dưới element Heading và bên trên element Button để user nhập mã giảm giá."', related: ['component', 'ui', 'interface', 'radius'], demo: { kind: 'interactive', src: 'gif-element-demo.html', alt: 'Mô phỏng các loại element phổ biến: Text, Button, Input, Other' } },
  { id: 'toggle', name: 'Toggle', nameEn: 'Nút bật/tắt / Switch', letter: 'T', groups: ['design', 'code'], definition: 'Một điều khiển giao diện có hai trạng thái đối lập: Bật (On/True) hoặc Tắt (Off/False). Toggle giúp thay đổi thiết lập ngay lập tức mà không cần qua các bước xác nhận phức tạp. Nó phản ánh trực tiếp logic nhị phân (Boolean) trong lập trình.', example: 'Nút bật/tắt "Chế độ tối", "Thông báo đẩy", hoặc "Chế độ bảo trì". Khi gạt sang phải là True, gạt sang trái là False.', related: ['boolean', 'state', 'interface', 'element'], demo: { kind: 'interactive', src: 'gif-toggle-demo.html', alt: 'Mô phỏng 4 trạng thái của toggle: Off, On, Disabled và Focus' } },
  { id: 'sidebar', name: 'Sidebar', nameEn: 'Thanh bên / Navigation Rail', letter: 'S', groups: ['design', 'code'], definition: 'Thanh điều hướng hoặc chứa thông tin bổ sung nằm ở cạnh trái hoặc phải của trang web. Sidebar giúp tận dụng chiều ngang của màn hình desktop để giữ các chức năng quan trọng luôn trong tầm tay mà không chiếm dụng không gian phía trên như Navbar.', example: 'Dashboard của các tool SaaS thường có sidebar bên trái để chuyển giữa các tính năng. Prompt: "Thêm một collapsible sidebar bên trái chứa các mục: Dashboard, Reports, Settings."', related: ['navbar', 'interface', 'layout'], demo: { kind: 'interactive', src: 'gif-sidebar-demo.html', alt: 'Mô phỏng các loại sidebar: Static, Collapsible, Overlay và Right' } },
  { id: 'section', name: 'Section', nameEn: 'Phân đoạn / Khối nội dung lớn', letter: 'S', groups: ['design', 'code'], definition: 'Một khối nội dung lớn trên trang web, thường chứa nhiều component nhỏ hơn. Một trang web được xây dựng bằng cách xếp chồng các section lên nhau theo chiều dọc.', example: 'Prompt: "Thêm một Pricing Section nằm ngay dưới phần Hero, với 3 cột giá và nền màu tối."', related: ['layout', 'header', 'footer', 'component'], demo: { kind: 'interactive', src: 'gif-section-demo.html', alt: 'Mô phỏng cấu trúc cơ bản của một trang với 4 section: Hero, Features, About, CTA' } },
  { id: 'accordion', name: 'Accordion', nameEn: 'Danh sách mở rộng / Thu gọn', letter: 'A', groups: ['design', 'code'], definition: 'Một thành phần giao diện cho phép ẩn/hiện nội dung chi tiết bằng cách nhấp vào tiêu đề. Accordion giúp tối ưu hóa không gian hiển thị, đặc biệt hữu ích cho các trang FAQ, cấu hình cài đặt hoặc các khối thông tin dài cần phân loại.', example: 'Prompt: "Làm một accordion cho phần Câu hỏi thường gặp, mặc định đóng hết, khi mở cái này thì cái kia tự đóng để tiết kiệm diện tích."', related: ['component', 'interface', 'element', 'card'], demo: { kind: 'interactive', src: 'gif-accordion-demo.html', alt: 'Mô phỏng các loại accordion: Single Open, Multiple Open, With Icons và In Card' } },
  { id: 'hierarchy', name: 'Hierarchy', nameEn: 'Phân cấp thị giác', letter: 'H', groups: ['design', 'code'], definition: 'Cách sắp xếp và trình bày các yếu tố thiết kế theo thứ tự quan trọng để dẫn dắt mắt người dùng. Một hệ thống phân cấp tốt giúp người dùng nắm bắt thông tin quan trọng nhất trước khi đi sâu vào chi tiết.', example: 'Prompt: "Sắp xếp lại các phần tử trong card theo đúng hierarchy: tiêu đề to nhất và đậm nhất, sau đó đến giá tiền màu cam, cuối cùng là các thông số phụ màu xám nhạt."', related: ['typography', 'spacing', 'contrast', 'fontweight'], demo: { kind: 'interactive', src: 'gif-hierarchy-demo.html', alt: 'Mô phỏng 4 cách ứng dụng Visual Hierarchy: Article, Dashboard, Type Scale và Pricing' } },
  { id: 'header', name: 'Header', nameEn: 'Đầu trang / Hero Area', letter: 'H', groups: ['design', 'code'], definition: 'Vùng phía trên cùng của trang — thường gồm navbar (logo + menu) và đôi khi thêm hero banner + nút CTA. Header là "vùng chứa" lớn hơn navbar, xuất hiện ngay lập tức khi user truy cập và thường được giữ cố định (sticky) khi cuộn trang.', example: 'Khi marketer yêu cầu "thêm banner vào header", AI sẽ đưa khối hình ảnh/text lớn vào dưới navbar. Header chuyên nghiệp giúp định vị thương hiệu và dẫn dắt hành động (CTA) ngay từ giây đầu tiên.', related: ['navbar', 'component', 'sticky', 'interface'], demo: { kind: 'interactive', src: 'gif-header-demo.html', alt: 'Mô phỏng các trạng thái của header: Default, Scrolled, CTA Focus và Mobile Menu' } },
  { id: 'hero-section', name: 'Hero Section', nameEn: 'Vùng nội dung đầu trang', letter: 'H', groups: ['design', 'code'], definition: 'Phần nội dung lớn đầu tiên mà người dùng nhìn thấy khi truy cập một trang web. Hero section thường chứa tiêu đề (headline) mạnh mẽ, hình ảnh ấn tượng (visual) và nút hành động chính (CTA). Đây là "ấn tượng đầu tiên" quyết định người dùng có ở lại trang hay không.', example: 'Prompt: "Thiết kế một hero section với tiêu đề \'Tự động hóa Marketing\', nút CTA màu cam, và một hình minh họa 3D bên phải."', related: ['header', 'section', 'navbar', 'cta'], demo: { kind: 'interactive', src: 'gif-hero-demo.html', alt: 'Mô phỏng 4 loại layout Hero Section phổ biến' } },
  { id: 'hover', name: 'Hover', nameEn: 'Trạng thái di chuột / Hover State', letter: 'H', groups: ['design', 'code'], definition: 'Trạng thái xảy ra khi người dùng di con trỏ chuột vào một thành phần giao diện nhưng chưa nhấn (click) vào nó. Hover state giúp cung cấp phản hồi thị giác (visual feedback), báo hiệu cho người dùng biết thành phần đó có thể tương tác được.', example: 'Prompt: "Khi hover vào card sản phẩm, hãy làm nó nổi lên bằng shadow và đổi màu nút CTA sang cam đậm hơn."', related: ['transition', 'animation', 'cursor', 'state'], demo: { kind: 'interactive', src: 'gif-hover-demo.html', alt: 'Mô phỏng 4 loại hover effect: Button, Nav Link, Card và Icon' } },
  { id: 'icon-button', name: 'Icon Button', nameEn: 'Nút chỉ chứa icon', letter: 'I', groups: ['design', 'code'], definition: 'Nút chỉ chứa một biểu tượng (icon) mà không có văn bản đi kèm. Loại nút này giúp tiết kiệm diện tích giao diện, thường dùng trong các toolbar, thanh điều hướng hoặc cho các hành động đã quá quen thuộc với người dùng. Điểm quan trọng nhất là icon phải cực kỳ dễ hiểu (universal) hoặc có tooltip giải thích để tránh gây bối rối.', example: 'Nút "X" để đóng cửa sổ, nút "Lúp" để tìm kiếm, hoặc nút "Tim" để yêu thích. Khi ra lệnh cho AI, bạn cần chỉ định rõ biến thể (filled, outlined, tonal, text), kích thước và trạng thái của icon button.', related: ['button', 'icon', 'interface', 'tooltip'], demo: { kind: 'interactive', src: 'gif-icon-button-demo.html', alt: 'Mô phỏng 4 khía cạnh của Icon Button: Variants, Sizes, States và Context' } },
  { id: 'sticky', name: 'Sticky', nameEn: 'Dính / Cố định khi cuộn', letter: 'S', groups: ['design', 'code'], definition: 'Thuộc tính (position: sticky) giúp một thành phần giao diện cuộn theo trang nhưng dừng lại và "dính" vào một vị trí cụ thể trên màn hình khi đạt đến ngưỡng nhất định. Thường dùng cho navbar, sidebar, hoặc action bar.', example: 'Prompt: "Làm cho phần mục lục (table of contents) bên trái sticky để khi cuộn bài blog dài, người đọc luôn biết mình đang ở phần nào."', related: ['navbar', 'header', 'sidebar'], demo: { kind: 'interactive', src: 'gif-sticky-demo.html', alt: 'Mô phỏng các trạng thái sticky: Navbar, Sub-navigation, Sidebar và Action Bar' } },
  { id: 'carousel', name: 'Carousel', nameEn: 'Vòng lặp hình ảnh / Slider', letter: 'C', groups: ['design', 'code'], definition: 'Một thành phần giao diện cho phép trình chiếu nhiều nội dung (ảnh, thẻ, sản phẩm) trong cùng một không gian bằng cách trượt qua lại. Carousel giúp tiết kiệm diện tích và tăng tính tương tác cho trang web.', example: 'Prompt: "Làm một carousel cho phần Testimonials, tự động chuyển mỗi 5 giây, có mũi tên điều hướng và các chấm tròn (dots) ở dưới."', related: ['component', 'interface', 'slider', 'animation'], demo: { kind: 'interactive', src: 'gif-carousel-demo.html', alt: 'Mô phỏng các loại carousel: Single, Multiple, Center và Autoplay' } },
  { id: 'pagination', name: 'Pagination', nameEn: 'Phân trang', letter: 'P', groups: ['design', 'code'], definition: 'Cách chia một lượng lớn dữ liệu thành nhiều trang hoặc phần nhỏ hơn. Không chỉ là thêm "trang 1, 2, 3", pagination còn bao gồm nhiều hình thức khác nhau như Prev/Next hay Load More tùy thuộc vào luồng trải nghiệm.', example: 'Prompt: "Thêm Pagination kiểu Load More cho danh sách sản phẩm này, mỗi lần bấm sẽ tải thêm 12 sản phẩm thay vì phải nhảy sang trang mới."', related: ['component', 'interface', 'data', 'state'], demo: { kind: 'interactive', src: 'gif-pagination-demo.html', alt: 'Mô phỏng các loại pagination: Numeric, Prev/Next, First/Last và Load More' } },
  { id: 'popup', name: 'Popup', nameEn: 'Cửa sổ bật lên / Modal', letter: 'P', groups: ['design', 'code'], definition: 'Một thành phần giao diện xuất hiện đè lên nội dung hiện tại, buộc người dùng phải tương tác hoặc đóng lại trước khi tiếp tục. Thường được gọi là Modal. Popup giúp tập trung sự chú ý tuyệt đối vào một thông điệp hoặc tác vụ cụ thể.', example: '"Khi click nút Xóa, một popup hiện ra hỏi \'Bạn có chắc không?\' — đây là cách ngăn lỗi lầm tai hại bằng cách chặn người dùng hành động vội vàng."', related: ['interface', 'element', 'state'], demo: { kind: 'interactive', src: 'gif-popup-demo.html', alt: 'Mô phỏng các loại popup: Alert, Confirm, Form và Success' } },
  { id: 'design-system', name: 'Design System', nameEn: 'Hệ thống thiết kế', letter: 'D', groups: ['design', 'workflow'], definition: 'Một bộ tiêu chuẩn hóa gồm các quy tắc thiết kế, các thành phần giao diện tái sử dụng và ngôn ngữ hình ảnh nhất quán. Design System là "nguồn sự thật duy nhất" giúp designer và developer làm việc nhanh hơn, giảm sai sót và đảm bảo trải nghiệm thương hiệu đồng nhất trên mọi sản phẩm.', example: 'Prompt: "Dùng các component trong Design System để build một trang Pricing mới, đảm bảo dùng đúng spacing scale và primary tokens."', related: ['component', 'ui', 'asset', 'css'], demo: { kind: 'interactive', src: 'gif-design-system-demo.html', alt: 'Mô phỏng 4 lớp cấu thành Design System: Colors, Typography, Components và Layout' } },
  { id: 'skeleton', name: 'Skeleton screen', nameEn: 'Màn hình khung xương / Loading placeholders', letter: 'S', groups: ['design', 'code'], definition: 'Giao diện ở trạng thái "chờ" — thay vì hiện vòng xoay (spinner) hay trang trắng, hệ thống hiện các khối màu xám mô phỏng hình dáng của nội dung sắp tải. Giúp người dùng hình dung được bố cục trang và cảm thấy thời gian chờ đợi ngắn hơn.', example: 'Khi mở Facebook hay Shopee lúc mạng yếu, bạn thấy các thanh xám dài ngắn khác nhau hiện lên trước khi ảnh và text xuất hiện — đó là skeleton screen.', related: ['interface', 'state', 'ux', 'performance'], demo: { kind: 'interactive', src: 'gif-skeleton-demo.html', alt: 'Mô phỏng skeleton screen cho Article, Dashboard, Product và Table' } },
  { id: 'viewport', name: 'Viewport', nameEn: 'Khung hiển thị', letter: 'V', groups: ['design', 'code'], definition: 'Viewport là khu vực hiển thị nội dung của trang web mà người dùng nhìn thấy được trên màn hình thiết bị. Nó không phải là kích thước vật lý của màn hình, mà là kích thước "ảo" mà trình duyệt dùng để sắp xếp layout. Hiểu về viewport giúp marketer biết tại sao một thiết kế trông đẹp trên máy này nhưng lại bị vỡ trên máy khác dù cùng độ phân giải.', example: 'iPhone 15 Pro có màn hình 2556px nhưng viewport chỉ rộng 393px. Khi bạn bảo AI "chỉnh layout cho điện thoại", AI sẽ dùng viewport width (393px) để tính toán, không phải số pixel thực tế của màn hình.', related: ['responsive', 'breakpoint', 'layout'], demo: { kind: 'interactive', src: 'gif-viewport-demo.html', alt: 'Mô phỏng cách layout thay đổi theo các kích thước Viewport khác nhau' } },
  { id: 'z-index', name: 'Z-index', nameEn: 'Z-index / Thứ tự lớp', letter: 'Z', groups: ['design', 'code'], definition: 'Z-index là thuộc tính quyết định thứ tự "nông sâu" của các thành phần trên màn hình (trục Z). Element nào có z-index cao hơn sẽ nằm đè lên element có z-index thấp hơn. Hãy tưởng tượng z-index giống như các lớp giấy xếp chồng lên nhau trên mặt bàn.', example: 'Khi bạn thấy modal bị che bởi navbar, đó là lỗi z-index. Cách fix: set z-index cho modal cao hơn (ví dụ: navbar z:100, modal z:1000).', related: ['layout', 'popup', 'sticky', 'interface'], demo: { kind: 'interactive', src: 'gif-zindex-demo.html', alt: 'Mô phỏng 4 lớp z-index phổ biến: Tooltip, Dropdown, Modal và Stack tổng thể' } },
  { id: 'primary-color', name: 'Primary / Secondary Color', nameEn: 'Màu chính / Màu phụ', letter: 'P', groups: ['design', 'code'], definition: 'Màu chính (Primary) và màu phụ (Secondary) là nền tảng của hệ thống màu sắc. Primary dành cho nút hành động chính (CTA) và điểm nhấn quan trọng nhất. Secondary hỗ trợ Primary, dùng cho các nút phụ, badge hoặc thông tin cần phân cấp thấp hơn.', example: 'Prompt: "Đổi nút Mua hàng thành Primary, nút Xem thêm thành Secondary để người dùng tập trung vào việc mua."', related: ['design-system', 'interface', 'css', 'element'], demo: { kind: 'interactive', src: 'gif-primary-color-demo.html', alt: 'Mô phỏng 4 cách ứng dụng Primary / Secondary Color: Button, Card, Form và Chart' } },
  { id: 'color-palette', name: 'Color Palette', nameEn: 'Bảng màu thiết kế', letter: 'C', groups: ['design', 'code'], definition: 'Tập hợp các màu sắc được phân loại theo vai trò rõ ràng trong hệ thống thiết kế. Một bảng màu chuyên nghiệp thường có 4 nhóm: Brand (nhận diện cốt lõi), Semantic (truyền tải trạng thái), Neutral (trung tính cho nền, text, viền) và Extended (hỗ trợ illustration, biểu đồ).', example: 'Prompt: "Dùng Brand Palette cho nút submit chính, và dùng Semantic Error cho các thông báo điền sai form."', related: ['design-system', 'primary-color', 'css'], demo: { kind: 'interactive', src: 'gif-colorpalette-demo.html', alt: 'Mô phỏng 4 nhóm màu trong Color Palette và vai trò của từng nhóm' } },
  { id: 'fontweight', name: 'Font weight', nameEn: 'Độ đậm của chữ', letter: 'F', groups: ['design', 'code'], definition: 'Giống như việc bạn chọn dùng bút chì kim mảnh hay bút dạ quang đậm để viết. Font weight giúp bạn "tô đậm" những thông tin quan trọng nhất (như tiêu đề) mà không cần phải phóng to chữ quá mức, giữ cho giao diện gọn gàng mà vẫn chuyên nghiệp.', example: 'Prompt: "Làm các từ khóa quan trọng đậm lên 700 để khách hàng chú ý ngay lập tức."', related: ['typography', 'letter-spacing', 'line-spacing', 'css'], demo: { kind: 'interactive', src: 'gif-fontweight-demo.html', alt: 'Mô phỏng thang đo font-weight và cách ứng dụng trong hierarchy' } },
  { id: 'opacity', name: 'Opacity', nameEn: 'Độ trong suốt / Transparency', letter: 'O', groups: ['design', 'code'], definition: 'Độ trong suốt của một phần tử, từ 0 (vô hình) đến 1 (đậm đặc hoàn toàn). Opacity là công cụ mạnh mẽ để tạo phân cấp thị giác, trạng thái tương tác (hover, disabled) và các hiệu ứng lớp phủ (overlay) mà không cần thay đổi màu sắc gốc.', example: 'Prompt: "Giảm opacity của ảnh nền xuống 0.5 để text phía trên dễ đọc hơn, hoặc set opacity 0.4 cho nút bấm khi ở trạng thái disabled."', related: ['color-palette', 'contrast', 'hierarchy', 'interface'], demo: { kind: 'interactive', src: 'gif-opacity-demo.html', alt: 'Mô phỏng các ứng dụng của Opacity: Text, Background, Icon và Component' } },
  { id: 'flat-design', name: 'Flat Design', nameEn: 'Thiết kế phẳng', letter: 'F', groups: ['design'], definition: 'Phong cách thiết kế loại bỏ các hiệu ứng giả 3D như đổ bóng (shadow), độ dốc màu (gradient), hay các chi tiết nổi khối (skeuomorphism). Flat Design tập trung vào sự đơn giản, sử dụng màu sắc phẳng, hình khối rõ ràng và typography mạnh mẽ để truyền tải thông tin.', example: 'Sự thay đổi của iOS từ bản 6 sang bản 7 là minh chứng rõ nhất cho việc chuyển từ Skeuomorphism sang Flat Design. Prompt: "Hãy thiết kế UI theo style flat, bỏ hết shadow và gradient để giao diện trông hiện đại hơn."', related: ['skeuomorphism', 'minimalism', 'ui', 'design-system'], demo: { kind: 'interactive', src: 'gif-flat-design-demo.html', alt: 'Mô phỏng 4 ví dụ về Flat Design: Shadows, Colors, Icons và Structure' } },
  { id: 'glassmorphism', name: 'Glassmorphism', nameEn: 'Hiệu ứng kính mờ', letter: 'G', groups: ['design'], definition: 'Phong cách thiết kế sử dụng các lớp nền trong suốt kết hợp với hiệu ứng làm mờ (blur) phía sau và đường viền mờ, tạo cảm giác như đang nhìn qua một tấm kính mờ. Glassmorphism giúp tạo chiều sâu, sự phân cấp và vẻ hiện đại cho giao diện mà vẫn giữ được sự liên kết với nền.', example: 'Prompt: "Tạo một card thông báo theo phong cách glassmorphism với backdrop-filter: blur(16px), nền trắng 10% opacity và viền trắng mờ 1px để làm nổi bật thông tin trên nền gradient rực rỡ."', related: ['ui', 'opacity', 'blur', 'depth', 'design-system'], demo: { kind: 'interactive', src: 'gif-glassmorphism-demo.html', alt: 'Mô phỏng 4 ứng dụng của Glassmorphism: Card, Dark Card, Nav và Modal' } },
  { id: 'spinner', name: 'Spinner', nameEn: 'Vòng quay chờ / Loading Indicator', letter: 'S', groups: ['design', 'code'], definition: 'Một biểu tượng đồ họa (thường là vòng tròn quay) dùng để thông báo cho người dùng rằng hệ thống đang xử lý tác vụ và họ cần chờ đợi. Spinner giúp giảm sự ức chế khi người dùng không biết hệ thống có đang hoạt động hay không.', example: 'Khi nhấn nút "Thanh toán", một spinner xuất hiện trên nút để báo hiệu đang gửi thông tin thẻ, ngăn người dùng bấm nhầm lần nữa.', related: ['skeleton', 'state', 'ux', 'async'], demo: { kind: 'interactive', src: 'gif-spinner-demo.html', alt: 'Mô phỏng 4 loại spinner và cách dùng trong flow thực tế' } },
  { id: 'container', name: 'Container', nameEn: 'Khung bao / Container', letter: 'C', groups: ['design', 'code'], definition: 'Thành phần bao bọc các thành phần khác bên trong để kiểm soát chiều rộng (width) và căn lề (alignment) của nội dung trên trang. Container giúp đảm bảo nội dung không bị tràn ra mép màn hình hoặc quá dài khó đọc trên màn hình lớn.', example: 'Prompt: "Dùng một container 1200px căn giữa cho phần nội dung chính, trên mobile thì chuyển sang full width có padding 16px hai bên."', related: ['layout', 'breakpoint', 'padding', 'margin'], demo: { kind: 'interactive', src: 'gif-container-demo.html', alt: 'Mô phỏng 4 loại container: Fixed, Fluid, Responsive và Nested' } },
  { id: 'progressbar', name: 'Progress Bar', nameEn: 'Thanh tiến trình', letter: 'P', groups: ['design', 'code'], definition: 'Thành phần giao diện hiển thị trạng thái hoàn thành của một tác vụ đang diễn ra. Progress Bar giúp người dùng ước lượng được thời gian chờ đợi và cảm thấy yên tâm rằng hệ thống đang hoạt động ổn định, thay vì bị "đứng hình" không rõ lý do.', example: 'Prompt: "Thêm một thanh progress bar ở đầu trang để chỉ rõ người dùng đã điền được bao nhiêu phần trăm form đăng ký, tự động cập nhật mỗi khi xong một field."', related: ['skeleton', 'spinner', 'state', 'ux'], demo: { kind: 'interactive', src: 'gif-progressbar-demo.html', alt: 'Mô phỏng 4 loại Progress Bar: Linear, Circular, Steps và Task' } },
  { id: 'transition', name: 'Transition', nameEn: 'Chuyển động mượt / Hiệu ứng chuyển cảnh', letter: 'T', groups: ['design', 'code'], definition: 'Thay đổi mượt mà giữa hai trạng thái — không nhảy giật, có đầu có cuối. Transition giúp người dùng nhận ra sự thay đổi của giao diện một cách tự nhiên thay vì bị bất ngờ.', example: 'Hover vào button thấy màu đổi từ xám sang cam trong 0.3s thay vì đổi cái rụp. Prompt: "Thêm transition 0.3s ease cho button để khi hover màu nền đổi mượt hơn."', related: ['animation', 'state', 'duration', 'easing'], demo: { kind: 'interactive', src: 'gif-transition-demo.html', alt: 'Mô phỏng các loại transition: Fade, Slide, Scale và Color' } },
  { id: 'overflow', name: 'Overflow', nameEn: 'Tràn nội dung', letter: 'O', groups: ['design', 'code'], definition: 'Quy định gì xảy ra khi nội dung lớn hơn container — tràn, cắt, hay cuộn. Overflow là thuộc tính quan trọng để kiểm soát tính thẩm mỹ và công năng của giao diện, tránh tình trạng text hay ảnh lọt ra ngoài khung hình làm hỏng layout.', example: 'Prompt: "Card này bị tràn text ra ngoài, hãy set overflow: hidden để cắt phần thừa, hoặc dùng overflow: auto để hiện thanh cuộn khi cần."', related: ['container', 'layout', 'css', 'card'], demo: { kind: 'interactive', src: 'gif-overflow-demo.html', alt: 'Mô phỏng 4 trạng thái overflow: Visible, Hidden, Scroll và Auto' } },
  { id: 'tab-bar', name: 'Tab bar', nameEn: 'Thanh tab / Tab Bar', letter: 'T', groups: ['design', 'code'], definition: 'Thành phần điều hướng cho phép người dùng chuyển đổi giữa các vùng nội dung khác nhau trong cùng một màn hình mà không cần chuyển sang trang mới. Chỉ có một tab được kích hoạt (active) tại một thời điểm, và nội dung tương ứng sẽ được hiển thị.', example: 'Prompt: "Thêm một tab bar với 3 tab: Overview, Analytics và Settings. Khi click mỗi tab thì hiện nội dung tương ứng bên dưới."', related: ['navbar', 'interface', 'element', 'component'], demo: { kind: 'interactive', src: 'gif-tabbar-demo.html', alt: 'Mô phỏng các loại tab bar: Bottom, Top, Scrollable và Segmented' } },
  { id: 'chips', name: 'Chips', nameEn: 'Chips / Tags', letter: 'C', groups: ['design', 'code'], definition: 'Các khối nhỏ chứa text (và đôi khi là icon), dùng để biểu diễn các thuộc tính, lựa chọn hoặc hành động một cách gọn gàng. Chip giúp phân loại thông tin và tương tác nhanh mà không chiếm nhiều diện tích như button hay checkbox truyền thống.', example: 'Prompt: "Thêm các chip tag cho bài blog, mỗi chip có nút X để xóa, khi click vào chip thì lọc bài viết theo tag đó."', related: ['component', 'interface', 'element', 'card'], demo: { kind: 'interactive', src: 'gif-chips-demo.html', alt: 'Mô phỏng 4 kiểu chip phổ biến: Input, Filter, Choice và Action' } },
  { id: 'badge', name: 'Badge', nameEn: 'Huy hiệu / Badge', letter: 'B', groups: ['design', 'code'], definition: 'Một khối nhỏ chứa text, con số hoặc chỉ là một chấm màu, dùng để chỉ thị trạng thái, thông báo hoặc phân loại thông tin. Badge giúp thu hút sự chú ý vào các điểm quan trọng mà không làm vỡ bố cục tổng thể.', example: 'Prompt: "Thêm một badge màu đỏ hiện số lượng tin nhắn chưa đọc vào icon tin nhắn, và một badge \'New\' màu xanh lá cho bài viết mới."', related: ['chips', 'status', 'notification', 'ui'], demo: { kind: 'interactive', src: 'gif-badge-demo.html', alt: 'Mô phỏng 4 loại badge: Notification, Status, Count và Avatar' }, practice: { kind: 'interactive', src: 'gif-badge-practice.html', alt: 'Thực hành Badge Builder: chọn loại và màu sắc Badge phù hợp với ngữ cảnh' } },
  { id: 'divider', name: 'Divider', nameEn: 'Đường phân bản / Divider', letter: 'D', groups: ['design', 'code'], definition: 'Thành phần giao diện dùng để phân tách các khối nội dung, tạo ra cấu trúc và nhịp điệu cho trang web. Divider giúp người dùng dễ dàng quét (scan) thông tin mà không bị choáng ngợp bởi một khối nội dung liên tục.', example: 'Prompt: "Thêm một đường kẻ ngang mờ để tách biệt phần Header và Nội dung chính, hoặc dùng divider có chữ \'HOẶC\' ở giữa để phân chia các phương thức đăng nhập."', related: ['spacing', 'border', 'layout', 'margin'], demo: { kind: 'interactive', src: 'gif-divider-demo.html', alt: 'Mô phỏng 4 loại divider phổ biến: Ngang, Dọc, Có chữ và Trong danh sách' } },
  { id: 'list', name: 'List', nameEn: 'Danh sách / List View', letter: 'L', groups: ['design', 'code'], definition: 'Thành phần giao diện hiển thị nhiều item theo chiều dọc, mỗi item chia sẻ cùng cấu trúc. Có 4 biến thể chính: Single Line (1 dòng cho menu/action), Two Line (2 dòng cho email/tin nhắn), With Avatars (có ảnh đại diện cho danh sách người), và Section Headers (có tiêu đề nhóm cho cài đặt). Chọn đúng kiểu list giúp người dùng quét thông tin nhanh hơn.', example: 'Prompt: "Danh sách thành viên nhóm hiển thị avatar, tên, vai trò và badge trạng thái online/offline theo kiểu list với avatar — đừng dùng card vì tốn diện tích."', related: ['component', 'sidebar', 'navbar', 'accordion'], demo: { kind: 'interactive', src: 'gif-list-demo.html', alt: 'Mô phỏng 4 kiểu list: Single Line, Two Line, Icons & Avatars và Section Headers' } },
  { id: 'toast-notification', name: 'Toast Notification', nameEn: 'Thông báo Toast / Snackbar', letter: 'T', groups: ['design', 'code'], definition: 'Một thông báo nhỏ, tạm thời xuất hiện trên màn hình để cung cấp phản hồi về một hành động của người dùng (như "Đã lưu", "Đã gửi"). Nó thường xuất hiện ở góc màn hình và tự động biến mất sau vài giây mà không làm gián đoạn dòng công việc hiện tại.', example: 'Khi bạn nhấn "Lưu", một toast hiện ra ở góc trên bên phải báo "Đã cập nhật thành công" rồi mờ dần sau 3 giây. Prompt: "Thêm một toast notification màu xanh lá hiện lên khi form submit thành công".', related: ['notification', 'popup', 'state', 'interface'], demo: { kind: 'interactive', src: 'gif-toast-demo.html', alt: 'Mô phỏng 4 loại toast notification: Success, Error, Warning và Info' } },
  { id: 'text-fields', name: 'Text Fields', nameEn: 'Ô nhập liệu văn bản', letter: 'T', groups: ['design', 'code'], definition: 'Thành phần cơ bản nhưng cực kỳ quan trọng trong UI — nơi người dùng nhập dữ liệu văn bản. Một text field chuẩn cần thể hiện rõ ít nhất 4 trạng thái: mặc định, đang nhập (focus), đã nhập (filled) và lỗi (invalid). Xử lý tốt text field giúp giảm friction và tăng tỷ lệ chuyển đổi cho các form đăng ký.', example: 'Prompt: "Tạo một form liên hệ có 3 text field: Họ tên, Email, và Nội dung. Field Email phải có validation kiểm tra định dạng @, nếu sai hiện viền đỏ và câu báo lỗi bên dưới."', related: ['input', 'form', 'state', 'validation'], demo: { kind: 'interactive', src: 'gif-textfield-demo.html', alt: 'Mô phỏng các trạng thái và biến thể của Text Fields' } },
  { id: 'menus', name: 'Menus', nameEn: 'Menu điều hướng / Navigation Menu', letter: 'M', groups: ['design', 'code'], definition: 'Thành phần giao diện hiển thị danh sách các lựa chọn hoặc hành động. Menus giúp gom nhóm các tính năng liên quan vào một không gian nhỏ, giúp giao diện gọn gàng và điều hướng hiệu quả hơn.', example: 'Dropdown menu cho tài khoản, Context menu (chuột phải) cho file, Mega menu cho trang e-commerce lớn. Chia nhóm (grouping) và đường kẻ phân bản (divider) giúp menu dài trở nên dễ quét hơn.', related: ['navbar', 'dropdown', 'sidebar', 'component', 'divider'], demo: { kind: 'interactive', src: 'gif-menus-demo.html', alt: 'Mô phỏng 4 loại menu phổ biến: Dropdown, Context, Mega và Grouped' } },
  { id: 'shape', name: 'Shape', nameEn: 'Hình khối / Shape', letter: 'S', groups: ['design'], definition: 'Các hình khối cơ bản (Square, Circle, Triangle) dùng để xây dựng giao diện. Shape quyết định cấu trúc, trọng lượng thị giác và cảm xúc của một thiết kế.', example: 'Prompt: "Dùng shape tròn cho avatar và shape vuông cho các card sản phẩm để tạo sự tương phản giữa con người và vật thể."', related: ['radius', 'stroke', 'interface'], demo: { kind: 'interactive', src: 'gif-shape-demo.html', alt: 'Mô phỏng các loại hình khối và personality của chúng' } },
  { id: 'split-buttons', name: 'Split buttons', nameEn: 'Split buttons', letter: 'S', groups: ['design', 'code'], definition: 'Split button kết hợp một hành động chính và một menu các hành động phụ liên quan. Nó gồm hai phần: nút chính bên trái thực hiện hành động mặc định, và nút mũi tên bên phải để mở menu dropdown.', example: 'Nút "Download" chính để tải file PDF, và nút mũi tên bên cạnh để chọn tải dưới dạng CSV hoặc Excel. Dùng split button giúp tiết kiệm diện tích giao diện mà vẫn cung cấp nhiều tùy chọn.', related: ['dropdown', 'menus', 'component'], demo: { kind: 'interactive', src: 'gif-split-button-demo.html', alt: 'Mô phỏng các trạng thái và ứng dụng của Split buttons' } },
  { id: 'segmented-button', name: 'Segmented Button', nameEn: 'Nút phân đoạn', letter: 'S', groups: ['design', 'code'], definition: 'Một loại nút bấm được chia thành nhiều đoạn (segment), mỗi đoạn là một lựa chọn. Segmented Button thường dùng để chuyển đổi giữa các trạng thái, bộ lọc hoặc các view nội dung khác nhau trong cùng một không gian mà không làm thay đổi URL.', example: 'Prompt: "Tạo một segmented button gồm 3 tùy chọn: \'Ngày\', \'Tuần\', \'Tháng\' để lọc biểu đồ doanh thu. Khi người dùng click vào một đoạn, đoạn đó phải sáng lên (active) và các đoạn khác tự động tắt."', related: ['tab-bar', 'toggle', 'radio', 'component'], demo: { kind: 'interactive', src: 'gif-segmented-button-demo.html', alt: 'Mô phỏng 4 loại Segmented Button: Mutually Exclusive, Content Binding, State Lifecycle và Connected vs Separated' } },
  { id: 'navigation', name: 'Navigation', nameEn: 'Điều hướng / Navigation', letter: 'N', groups: ['design', 'code'], definition: 'Cách thức người dùng di chuyển giữa các trang hoặc các phần trong một ứng dụng. Hệ thống navigation tốt giống như một tấm bản đồ rõ ràng, giúp người dùng không bao giờ bị lạc và luôn tìm thấy thứ mình cần chỉ trong vài lần click.', example: 'Prompt: "Thiết kế hệ thống navigation cho app e-commerce gồm: Navbar ở top cho desktop, Bottom Nav cho mobile, và Sidebar cho các cài đặt nâng cao."', related: ['navbar', 'sidebar', 'breadcrumb', 'tab-bar'], demo: { kind: 'interactive', src: 'gif-navigation-demo.html', alt: 'Mô phỏng 4 kiểu navigation phổ biến: Top, Bottom, Sidebar và Breadcrumb' } },
  { id: 'ssl', name: 'SSL Certificate', nameEn: 'Chứng chỉ bảo mật SSL', letter: 'S', groups: ['infra'], definition: 'Chứng chỉ số giúp thiết lập kết nối an toàn (mã hóa) giữa trình duyệt của người dùng và máy chủ website. SSL giúp bảo vệ thông tin nhạy cảm như mật khẩu, thông tin thẻ tín dụng và xác thực danh tính của website.', example: 'Khi vào website thấy biểu tượng ổ khóa xanh và giao thức https://. Prompt: "Cài đặt chứng chỉ SSL cho trang web này và cấu hình tự động chuyển hướng từ http sang https."', related: ['secure', 'https', 'encryption'], demo: { kind: 'interactive', src: 'gif-ssl-demo.html', alt: 'Mô phỏng sự khác biệt giữa HTTP (không an toàn) và HTTPS (có SSL)' } },
  {
    id: 'gitignore',
    name: '.gitignore',
    nameEn: 'Git Ignore File',
    letter: 'G',
    groups: ['workflow'],
    definition: 'File cấu hình dùng để chỉ định cho Git biết những file hoặc thư mục nào cần được bỏ qua (không theo dõi/commit). Đây là "lá chắn" quan trọng nhất để bảo vệ các thông tin nhạy cảm (API key, mật khẩu) và ngăn việc đưa các file rác, file thư viện nặng nề lên kho code.',
    example: 'Bạn có file .env chứa mật khẩu database. Nếu không thêm ".env" vào .gitignore, khi bạn push code lên GitHub, cả thế giới sẽ thấy mật khẩu của bạn. Prompt: "Kiểm tra file .gitignore xem đã chặn các file .env và thư mục node_modules chưa để đảm bảo an toàn."',
    related: ['git', 'commit', 'repository', 'env'],
    demo: { kind: 'interactive', src: 'gif-gitignore-demo.html', alt: 'Mô phỏng 4 khía cạnh của .gitignore: Bộ lọc, Cái gì nên ignore, Trước/Sau và Pattern syntax' },
    practice: { kind: 'interactive', src: 'gif-gitignore-practice.html', alt: 'Thực hành cấu hình .gitignore: gõ pattern và quan sát kết quả filter realtime' }
  },
];

const removedGlossaryTermIds = new Set([
  'async',
  'build',
  'dependency',
  'dom',
  'dynamic',
  'endpoint',
  'function',
  'framework',
  'github',
  'hook',
  'import',
  'inference',
  'json',
  'jsx',
  'loop',
  'nodejs',
  'npm',
  'prompt',
  'props',
  'request',
  'state',
  'supabase',
  'tailwind',
  'typescript',
  'ui',
  'url',
  'vector',
  'vercel',
  'webhook',
  'websocket',
  'wireframe',
  'context-window',
]);

const removedGlossaryTextPattern = /\b(async|build|framework|github|json|jsx|loop|node\.js|npm|prompt|request|response|state|supabase|tailwind|typescript|ui\/ux|url|vector|vercel|webhook|websocket)\b/i;

export const terms: GlossaryTerm[] = rawTerms
  .filter((term) => !removedGlossaryTermIds.has(term.id))
  .map((term) => ({
    ...term,
    related: term.related?.filter((relatedId) => !removedGlossaryTermIds.has(relatedId)),
  }));

const rawQuickRefItems = [
  ['Push lên main', 'Upload code mới nhất lên GitHub nhánh chính → Vercel tự deploy.'],
  ['Cần refactor', 'Viết lại code cho gọn hơn, không thêm tính năng. AI làm được.'],
  ['Build failed', 'Code có lỗi, không deploy được. Paste log lỗi cho AI để fix.'],
  ['Cần API key', 'Mã bí mật để dùng service bên ngoài. Lấy từ dashboard, paste vào .env.'],
  ['Schema database', 'Cấu trúc bảng trong database — có những cột gì, kiểu dữ liệu gì.'],
  ['Hydration error', 'Server render khác client render. Paste lỗi cho AI, thường fix được nhanh.'],
  ['500 error', 'Server bị lỗi. Xem log trên Vercel dashboard hoặc terminal.'],
  ['CORS error', 'API không cho phép domain của bạn gọi. Cần config whitelist hoặc dùng proxy.'],
] as const;

export const quickRefItems = rawQuickRefItems.filter(
  ([label, description]) => !removedGlossaryTextPattern.test(label) && !removedGlossaryTextPattern.test(description),
);

export const ctaLessons = [
  { num: '03', title: 'Cài gì vào máy để bắt đầu vibecode?', to: '/vibecode/cai-dat-moi-truong', arrow: '→' },
  { num: '04', title: 'Làm quen VS Code & Cursor', to: '/vibecode/lam-quen-vscode-cursor', arrow: '→' },
  { num: '05', title: 'Làm quen Claude Code', to: '/vibecode/lam-quen-claude-code', arrow: '→' },
  { num: '01', title: 'Quay lại Bài 01 · Vibecode là gì?', to: '/vibecode/vibecode-la-gi', arrow: '↩' },
] as const;

export const groupLabels: Record<TermGroup | 'all', string> = { all: 'Tất cả', code: 'Code', design: 'Design', infra: 'Hạ tầng', data: 'Data', ai: 'AI', workflow: 'Workflow' };
export const glossaryTickerItems = ['✳ Glossary · 60+ từ điển chuyên ngành cho dân Marketing', '✳ Giải thích bằng ngôn ngữ Marketer', '✳ Code · Design · Infra · Data · AI · Workflow', '✳ Miễn phí 100% · mãi mãi', '✳ Vibecode · Blog · Tips', '✳ Dành riêng dân Marketing Việt Nam'];
export const termsByLetter = terms.reduce((acc, term) => ((acc[term.letter] ??= []).push(term), acc), {} as Record<string, GlossaryTerm[]>);
export const letters = Object.keys(termsByLetter).sort();
export const totalGroupCounts = (['code', 'design', 'infra', 'data', 'ai', 'workflow'] as TermGroup[]).reduce((acc, group) => ((acc[group] = terms.filter((term) => term.groups.includes(group)).length), acc), { all: terms.length } as Record<TermGroup | 'all', number>);

const deepDiveTermIds = new Set([
  'align',
  'api',
  'array',
  'auth',
  'asset',
  'accordion',
  'async',
  'backend',
  'border',
  'breadcrumb',
  'breakpoint',
  'build',
  'boolean',
  'branch',
  'card',
  'button',
  'button-group',
  'css',
  'checkbox',
  'carousel',
  'component',
  'corner',
  'dark-mode',
  'database',
  'deploy',
  'env',
  'drawer',
  'dropdown',
  'element',
  'footer',
  'frontend',
  'gradient',
  'grid',
  'gutter',
  'header',
  'hero-section',
  'hover',
  'icon-button',
  'json',
  'margin',
  'letter-spacing',
  'line-spacing',
  'line-height',
  'mcp',
  'localhost',
  'navbar',
  'padding',
  'request',
  'radius',
  'responsive',
  'sidebar',
  'section',
  'slider',
  'snackbar',
  'spacing',
  'stroke',
  'supabase',
  'toggle',
  'webhook',
  'websocket',
  'sticky',
  'pagination',
  'popup',
  'design-system',
  'skeleton',
  'viewport',
  'z-index',
  'primary-color',
  'color-palette',
  'fontweight',
  'contrast',
  'hierarchy',
  'opacity',
  'flat-design',
  'glassmorphism',
  'spinner',
  'container',
  'progressbar',
  'transition',
  'overflow',
  'tab-bar',
  'chips',
  'badge',
  'divider',
  'list',
  'toast-notification',
  'whitespace',
  'text-fields',
  'menus',
  'shape',
  'split-buttons',
  'segmented-button',
  'navigation',
  'cache',
  'cli',
  'clone',
  'git',
  'commit',
  'context',
  'ssl',
  'hosting',
  'interface',
  'model',
  'llm',
  'port',
  'fork',
  'pull',
  'push',
  'gitignore',
  'merge',
  'conflict',
  'environment',
  'flexbox'
].filter((termId) => !removedGlossaryTermIds.has(termId)));

const deepDiveNotes: Partial<Record<string, string[]>> = {
  flexbox: [
    'Flexbox luôn bắt đầu bằng một cái thùng chứa bên ngoài. Khi bạn ra lệnh "display: flex", cái thùng đó sẽ có quyền "điều khiển" toàn bộ các vật thể bên trong nó.',
    'Trục chính (Main Axis) & Trục phụ (Cross Axis): Nếu bạn chọn hướng là Hàng ngang, thì Justify sẽ điều khiển ngang. Nếu bạn chọn hướng Cột dọc, Justify lại điều khiển dọc. Luôn nhớ Justify đi theo "hướng chảy".',
    'Trước khi có Flexbox, việc căn giữa một vật thể trong một cái khung là một cực hình. Với Flexbox, chỉ cần 2 lệnh: "justify-content: center" và "align-items: center".',
    'Tính "Linh hoạt" (Flexible): Đúng như tên gọi, các vật thể trong Flexbox có thể co lại (shrink) hoặc giãn ra (grow) để lấp đầy không gian. Điều này giúp giao diện luôn đẹp dù màn hình to hay nhỏ.',
    'Dùng cho 1 chiều: Flexbox cực mạnh khi sắp xếp các thứ theo 1 hướng (ngang HOẶC dọc). Nếu bạn muốn xếp theo cả 2 hướng cùng lúc (giống như bảng Excel phức tạp), hãy nghĩ đến Grid.'
  ],
  fontweight: [
    'Trong thiết kế web, đừng chỉ nói "đậm hơn một chút". Hãy dùng số (400 là thường, 700 là đậm). Điều này giúp AI và Dev làm việc chính xác 100% mà không cần đoán ý bạn.',
    'Nếu mọi thứ đều đậm, sẽ không có gì thực sự nổi bật. Hãy dùng Bold (700) cho tiêu đề và Regular (400) cho nội dung để dẫn dắt mắt người dùng đi đúng hướng.',
    'Các mức weight thấp (100-300) nhìn rất sang trọng và nghệ thuật, nhưng lại là "kẻ thù" của người mắt kém hoặc khi xem dưới nắng gắt. Luôn ưu tiên độ đọc (Readability) trước khi chọn cái đẹp.',
    'Hiệu năng & Tốc độ: Mỗi mức Font Weight là một file font riêng biệt cần tải về. Càng dùng nhiều weight, web càng load chậm. Quy tắc "an toàn" là dùng tối đa 3 mức: 400 (Body), 600/700 (Heading) và 500 (Buttons).',
    'Thứ tự ưu tiên: Một quy tắc vàng cho Marketer: Tiêu đề (700-800) > Nút bấm (600) > Nội dung (400). Chỉ cần tuân thủ bộ ba này, giao diện của bạn sẽ tự động "vào nếp" và chuyên nghiệp ngay lập tức.'
  ],
  environment: [
    'Tư duy "An toàn là trên hết": Đừng bao giờ làm thử những tính năng mới hoặc dữ liệu "nhạy cảm" trực tiếp trên Production. Hãy luôn bắt đầu từ Local, sau đó đẩy lên Staging để kiểm tra.',
    'Bản sao hoàn hảo: Môi trường Staging càng giống Production bao nhiêu, tỷ lệ lỗi khi ra mắt thật càng thấp bấy nhiêu. Đây là nơi để bạn "diễn tập" trước buổi biểu diễn chính thức.',
    'Chìa khóa riêng biệt: Mỗi môi trường có một bộ Biến môi trường (.env) riêng. Local dùng chìa khóa giả, Production dùng chìa khóa thật. Việc tách biệt này giúp bảo vệ dữ liệu khách hàng tuyệt đối.',
    'Môi trường "Sạch": Sau mỗi lần test ở Staging, nếu có thể hãy "reset" dữ liệu về trạng thái sạch để các bài test sau không bị ảnh hưởng bởi dữ liệu rác từ lần trước.',
    'Tự động hóa (CI/CD): Trong Vibecode, việc chuyển code giữa các môi trường thường được tự động hóa. Khi bạn push code, hệ thống sẽ tự động đưa code vào đúng môi trường bạn đã cấu hình.'
  ],
  branch: [
    'Branch là "vùng an toàn" (Sandbox). Mọi lỗi lầm hay thử nghiệm bạn gây ra trên một branch đều không ảnh hưởng đến trang web đang chạy cho đến khi bạn quyết định Merge.',
    'Tư duy "Mỗi task một branch": Luông tạo branch mới cho từng nhiệm vụ nhỏ (ví dụ: `fix-logo`, `new-banner`). Điều này giúp bạn dễ dàng quản lý và nhờ AI hỗ trợ mà không bị rối.',
    'Main branch là "Thánh địa": Đây là nơi chứa code đang chạy thật trên web. Trong Vibecode, bạn nên làm việc trên các branch phụ và chỉ gộp vào main khi đã kiểm tra kỹ.',
    'Cách ly rủi ro: Nếu branch mới của bạn bị lỗi quá nặng, bạn chỉ cần xóa nó đi và tạo branch khác. Code gốc vẫn luôn an toàn.',
    'Merge là khoảnh khắc "Go-live": Khi bạn gộp branch vào main, đó là lúc những thay đổi của bạn chính thức ra mắt thế giới.'
  ],
  port: [
    'Port giống như số căn hộ trong một tòa nhà chung cư (IP address). IP đưa bạn đến đúng tòa nhà, nhưng Port mới giúp bạn gõ đúng cửa phòng của app bạn cần gặp.',
    'Có 65,535 cổng trên mỗi máy tính. Các cổng từ 0-1023 thường được dành riêng cho các dịch vụ hệ thống quan trọng (như 80 cho web, 443 cho web bảo mật).',
    'Xung đột Port (EADDRINUSE) là lỗi "đau đầu" nhất của người mới. Nó đơn giản là cửa đó đã có người ngồi rồi, bạn không thể mở thêm một app khác trên cùng cửa đó được.',
    'Quy ước Port giúp team làm việc mượt hơn. Ví dụ khi nói "Frontend chạy 3000, Backend chạy 8000" thì mọi người trong team đều ngầm hiểu và biết cách config tool của mình.',
    'Trong môi trường Localhost, mỗi app "vệ tinh" (DB, Cache, API) phải có một port riêng biệt để giao tiếp với nhau trên cùng một máy tính.'
  ],
  model: [
    'Model là tên của bộ não AI cụ thể mà bạn đang gọi, ví dụ GPT-4o, Claude 3.5 Sonnet, Gemini 1.5. Nói "dùng AI" thì quá chung, còn nói đúng tên model thì AI mới biết cần tích hợp cái gì.',
    'Các model khác nhau ở 4 thứ chính: tốc độ, giá token, context window, và khả năng suy luận. Vì vậy cùng một prompt nhưng đổi model có thể cho chất lượng, chi phí, và độ ổn định rất khác nhau.',
    'Không có model tốt nhất cho mọi việc. Task ngắn, lặp lại, cần rẻ thì chọn model nhẹ. Task code khó, phân tích dài, hay cần suy luận sâu thì chọn model mạnh hơn.',
    'Model không phải là ChatGPT hay app chat. App chỉ là giao diện; model mới là phần xử lý phía sau. Khi tích hợp vào web, AI sẽ gọi model qua API chứ không mở cửa sổ chat bằng tay.'
  ],
  llm: [
    'LLM không đọc theo từng chữ cái mà đọc theo "token". Một token có thể là một từ, một phần của từ hoặc thậm chí là một dấu cách. Hiểu về token giúp bạn tối ưu chi phí và độ chính xác khi sử dụng API.',
    'Bản chất của LLM là "cỗ máy dự đoán". Nó không thực sự suy nghĩ như con người mà dựa trên xác suất để đoán xem token nào có khả năng xuất hiện tiếp theo cao nhất dựa trên bối cảnh đã có.',
    'Context Window (Cửa sổ ngữ cảnh) là giới hạn bộ nhớ ngắn hạn của AI. Khi cuộc hội thoại quá dài vượt ngưỡng này, AI sẽ bắt đầu "quên" những thông tin ở phía trên để nhường chỗ cho thông tin mới.',
    'Khi vibecode, việc hiểu các tham số này giúp bạn điều khiển AI hiệu quả hơn: "Dùng temperature 0.2 cho task refactor này" sẽ mang lại kết quả an toàn hơn là để mặc định.'
  ],
  localhost: [
    'Local host là "bản nháp" riêng tư. Khi AI nói "trên local chạy ổn", nghĩa là code đã hoạt động trên máy AI, nhưng chưa chắc đã chạy đúng trên web thật (production).',
    'Địa chỉ 127.0.0.1 là con số kỹ thuật của localhost. Mọi máy tính trên thế giới đều gọi "chính nó" là 127.0.0.1.',
    'Sai lầm phổ biến của marketer là copy link có chữ "localhost" gửi cho sếp hoặc khách hàng. Link này chỉ tồn tại trên máy bạn, người khác bấm vào sẽ báo lỗi "không tìm thấy trang".',
    'Local host giúp tiết kiệm chi phí và thời gian. Bạn có thể sửa code và thấy kết quả ngay lập tức (Hot Reload) mà không cần tốn tiền thuê server hay chờ đợi deploy.',
    'Trong quy trình DevOps, local host là bước đệm quan trọng: Code -> Local Test -> Commit -> Deploy.'
  ],
  cache: [
    'Mục tiêu của cache là để người dùng không phải chờ đợi. Một trang web load nhanh thường là nhờ nó biết cách "tận dụng" lại những gì đã tải trước đó thay vì tải đi tải lại.',
    'Đừng lưu quá đà: Không phải cái gì cũng nên lưu. Chỉ lưu những thứ ít thay đổi (logo, ảnh, bài viết). Những thứ nhảy số liên tục (như giá cổ phiếu hay số dư tài khoản) thì tuyệt đối đừng dùng cache lâu để tránh sai lệch.',
    'Hit hay Miss?: Nếu lấy được dữ liệu trong cache thì gọi là Hit (Trúng - siêu nhanh). Nếu không thấy và phải đi hỏi Server thì gọi là Miss (Hụt - tốn thời gian hơn).',
    'Cái bẫy dữ liệu cũ (Stale Data): Đây là tình huống "dở khóc dở cười" khi bạn đã đổi giao diện lung linh nhưng khách hàng vẫn thấy bản cũ xì vì trình duyệt của họ vẫn đang "khăng khăng" lấy dữ liệu từ cache cũ.',
    'Khi web hiển thị "sai sai" sau khi vừa update, hãy nhớ đến Clear Cache. Nó giúp "dọn dẹp" bộ nhớ cũ để web lấy dữ liệu mới nhất, đảm bảo mọi người đều thấy cùng một phiên bản.'
  ],
  interface: [
    'Interface (Giao diện) không chỉ là thứ bạn nhìn thấy, mà là thứ bạn CẢM THẤY khi tương tác. Một giao diện tốt là giao diện "tàng hình" — nó giúp bạn đạt được mục tiêu mà không cần phải suy nghĩ về công cụ.',
    'Sự rõ ràng (Clarity) quan trọng hơn sự bắt mắt. Một cái nút đẹp nhưng user không biết nó làm gì là một thất bại về interface.',
    'Tính nhất quán (Consistency) giúp user giảm bớt gánh nặng nhận thức. Khi họ đã biết cách dùng một phần của app, họ sẽ biết cách dùng toàn bộ app.',
    'Trong kỷ nguyên AI, interface đang chuyển dịch từ GUI (đồ họa) sang LUI (Language User Interface) — nơi bạn giao tiếp với phần mềm bằng ngôn ngữ tự nhiên.'
  ],
  cli: [
    'Đừng để những dòng lệnh dài loằng ngoằng làm bạn sợ. AI hiện nay đã rất giỏi việc "nhớ bài" hộ bạn. Bạn chỉ cần hiểu CLI là nơi để AI thực thi các tác vụ nặng nhọc thay cho mình.',
    'Một lệnh CLI có thể làm được việc của 100 cú click chuột. Khi bạn thấy AI gõ vèo vèo trên màn hình đen, đó là lúc nó đang dùng CLI để "tăng tốc" quy trình làm việc cho bạn.',
    'Cửa sổ giao tiếp với AI: CLI giống như một "phòng chat" kỹ thuật giữa bạn, máy tính và AI. Hiểu CLI giúp bạn biết AI đang làm gì (đang cài app, đang lưu code hay đang chạy thử web) để phối hợp mượt mà hơn.',
    'Nơi bắt lỗi nhanh nhất: Khi web không chạy, CLI sẽ hiện lý do (log). Thay vì ngồi đoán, Vibecoder chỉ cần copy dòng chữ đó hỏi AI: "Lỗi này là gì?" và AI sẽ biết chính xác chỗ cần sửa.'
  ],
  fork: [
    'Fork là "server-to-server copy" (nhân bản từ mây sang mây). Khác với Clone là tải về máy, Fork chỉ là hành động "bốc" dự án từ tài khoản của người khác sang tài khoản của mình trên GitHub.',
    'Tại sao phải Fork? (1) Khi muốn đóng góp cho dự án cộng đồng, (2) Khi muốn dùng code mẫu của người khác để "xào nấu" lại cho dự án riêng, (3) Khi team muốn bạn làm việc trên một bản sao riêng để đảm bảo an toàn cho dự án chính.',
    'Pull Request (PR) là "cây cầu" nối bản fork và bản gốc. Nếu bạn sửa bản fork thấy xịn quá, bạn gửi PR mời chủ dự án gốc xem xét. Nếu họ đồng ý, họ sẽ gộp (merge) công sức của bạn vào dự án chính thức.',
    'An tâm thử sai: Fork là "lá bùa" bảo vệ. Dù bạn có lỡ tay xóa sạch code hay làm lỗi bản fork, thì dự án gốc của người khác vẫn luôn an toàn, không bị mảy may ảnh hưởng.'
  ],
  push: [
    'Push là hành động "xuất bản" code. Khi bạn chưa push, mọi thay đổi dù đã commit vẫn chỉ nằm an toàn trên ổ cứng máy bạn. Push chính là khoảnh khắc code của bạn rời khỏi máy để đến với thế giới.',
    'Sự khác biệt giữa Commit và Push là lỗi "vỡ lòng" phổ biến nhất. Commit là "Lưu bản nháp", còn Push là "Gửi bản nháp đi". Đừng bao giờ báo với team "đã xong" nếu bạn mới chỉ commit mà chưa push.',
    'Push Rejected (bị từ chối) không phải là lỗi code, mà là lỗi đồng bộ. Nó xảy ra khi remote (GitHub) có những commit mới hơn bản local của bạn. Giải pháp duy nhất: Pull bản mới về, gộp lại, rồi mới Push lên được.',
    'Trong các dự án chuyên nghiệp, việc Push lên các nhánh quan trọng (như main/production) thường bị chặn và yêu cầu phải qua Pull Request để đảm bảo an toàn cho toàn bộ hệ thống.'
  ],
  pull: [
    'Pull không phải là download đơn giản. Bản chất nó là sự kết hợp của 2 bước: Fetch (tải dữ liệu về bộ nhớ tạm) và Merge (ghép dữ liệu đó vào file bạn đang mở).',
    'Quy tắc vàng của Git: "Pull early, pull often". Càng để lâu mới pull, lượng thay đổi tích tụ càng lớn, nguy cơ gặp Conflict (xung đột code) càng cao.',
    'Conflict xảy ra khi cả bạn và đồng nghiệp cùng sửa trên một dòng code. Lúc này Git sẽ "đầu hàng" và yêu cầu bạn phải chọn thủ công xem giữ lại đoạn code nào.',
    'Trước khi Pull, hãy đảm bảo bạn đã Commit hoặc Stash (tạm cất) những code đang làm dở. Nếu không, Git có thể từ chối Pull để bảo vệ dữ liệu chưa được lưu của bạn.',
    'Trong môi trường AI-first (vibecode), việc Pull giúp AI "hiểu" được bối cảnh mới nhất của dự án mà các thành viên khác vừa đóng góp, từ đó đưa ra gợi ý chính xác hơn.'
  ],
  gitignore: [
    '.gitignore hoạt động như một "bộ lọc" ở cửa ngõ repository. Nó giúp bạn chủ động chọn lọc những gì thực sự thuộc về source code để đưa lên GitHub.',
    'Bảo mật là ưu tiên số 1 của .gitignore. Các file chứa thông tin nhạy cảm như .env (API key, password) tuyệt đối không được để lọt ra ngoài vì kẻ xấu có thể quét GitHub để tìm những file này trong vài giây.',
    'Việc ignore node_modules/ giúp repo nhẹ hơn hàng chục lần. Bạn không cần lưu thư viện code của người khác vào kho của mình, chỉ cần lưu file "danh sách" (package.json) là đủ để người khác cài lại được.',
    'Pattern syntax trong .gitignore rất linh hoạt: dùng * để đại diện cho mọi thứ (wildcard), dùng / ở cuối để chỉ định cả thư mục, và dùng ! để tạo ngoại lệ (ví dụ: ignore toàn bộ .env nhưng giữ lại .env.example).',
    'Nếu bạn lỡ commit một file nhạy cảm trước khi thêm nó vào .gitignore, việc thêm vào sau này sẽ không tự động xóa file đó khỏi lịch sử Git. Bạn sẽ cần các lệnh nâng cao hơn để "tẩy sạch" hoàn toàn dấu vết cũ.'
  ],
  clone: [
    'Clone không phải là "Download ZIP". Khi bạn download ZIP, bạn chỉ có bộ file cuối cùng. Khi bạn Clone, bạn bê nguyên cả "cỗ máy thời gian" (Git history) về máy mình.',
    'Bạn chỉ cần Clone một lần duy nhất cho mỗi dự án. Sau đó, bạn dùng lệnh Pull để cập nhật những thay đổi mới, chứ không cần clone lại từ đầu.',
    'Clone tạo ra một mối liên kết (Remote) giữa máy bạn và GitHub. Nhờ đó, bạn có thể Push những gì mình làm lên cho team xem hoặc Deploy lên web thật.',
    'Marketer cần lưu ý: Đừng clone vào trong một folder đã có Git (lồng repo). Hãy tạo một folder "projects" riêng và clone từng dự án vào đó để tránh xung đột cấu hình.',
    'Trong Vibecode, Clone là "tấm vé vào cổng". Không có bước này, AI không thể giúp bạn đọc code hiện tại hay viết thêm tính năng mới.'
  ],
  button: [
    'Trong Vibecoding, đừng chỉ nói "vẽ cái nút". Hãy nói cho AI biết mức độ ưu tiên của nó. Nút <strong>Primary</strong> (Chính) như một tiếng hét, <strong>Secondary</strong> (Phụ) như một lời mời, và <strong>Ghost</strong> (Ma) như một lời thì thầm.',
    'Quy tắc "Một mặt trời": Đừng để 2 nút Primary cạnh nhau. Giao diện giống như một bầu trời, chỉ nên có một mặt trời duy nhất để người dùng biết phải bấm vào đâu trước.',
    'Một nút bấm "sống" là nút biết đổi màu khi di chuột qua (<strong>Hover</strong>) hoặc lún xuống khi bấm (<strong>Pressed</strong>). Nếu thiếu những trạng thái này, người dùng sẽ tưởng web bị đơ.',
    'Loading - Trạng thái kiên nhẫn: Khi bấm nút để gửi dữ liệu (như Submit Form), hãy bảo AI thêm trạng thái <strong>Loading</strong> (vòng xoay). Điều này báo cho người dùng biết "Web đang xử lý, đừng bấm thêm lần nữa".',
    'Accessibility - Đừng chỉ dùng màu: Đừng mặc định "nút Đỏ là Xóa". Có những người mù màu hoặc dùng web trong môi trường chói. Hãy kết hợp màu sắc với Icon (hình cái thùng rác) và Text rõ ràng để ai cũng dùng được.'
  ],
  align: [
    'Alignment (Căn lề) là "xương sống" của thiết kế chuyên nghiệp. Một trang web trông "không ổn" thường do các phần tử bị lệch hàng, lệch cột dù chỉ 1-2 pixel.',
    'Có 2 trục chính trong CSS: Main Axis (ngang mặc định) và Cross Axis (dọc mặc định). Hiểu về justify-content và align-items giúp bạn kiểm soát hoàn toàn không gian.',
    'Quy tắc vàng: Đừng bao giờ căn lề "bằng mắt". Hãy dùng hệ thống Grid hoặc Flexbox để AI tự động tính toán khoảng cách chính xác tuyệt đối.',
  ],
  array: [
    'Array (Mảng) là cấu trúc dữ liệu quan trọng nhất để quản lý danh sách. Trong marketing, bạn sẽ gặp nó khi xử lý danh sách user, danh sách sản phẩm, hoặc các tag chiến dịch.',
    'JS Array rất linh hoạt: có thể chứa cả số, chữ, và thậm chí là các Array khác (mảng đa chiều).',
    'Lưu ý quan trọng nhất: Index luôn bắt đầu từ 0. Nếu mảng có 4 phần tử, index cuối cùng là 3, không phải 4. Đây là "cái bẫy" kinh điển cho người mới.',
  ],
  gradient: [
    'Gradient là một trong những công cụ mạnh nhất để tạo ra chiều sâu (depth) mà không làm tăng dung lượng trang web như khi dùng ảnh.',
    'Khi làm việc với AI, hãy nhớ hai loại chính: Linear (chuyển theo hướng) và Radial (chuyển từ tâm). Linear thường dùng cho nền hoặc button, Radial thường dùng để giả lập ánh sáng hoặc hiệu ứng "glow".',
    'Quy tắc vàng: Đừng dùng quá nhiều màu trong một gradient nếu không muốn giao diện bị "sến". Thường 2 màu là đủ, và nên chọn các màu gần nhau trên vòng tròn màu (analogous colors) để sự chuyển tiếp được mượt mà nhất.',
  ],
  api: [
    'Nghĩ theo kiểu marketer: API là chiếc ống nối giữa tool A và tool B, để dữ liệu tự chảy thay vì bạn copy tay.',
    'Chỉ cần nhớ 3 mảnh chính: endpoint để gọi đúng chỗ, request là dữ liệu mình gửi đi, response là thứ hệ thống trả về.',
  ],
  css: [
    'CSS là lớp "áo" khoác lên khung xương HTML. Nếu không có CSS, mọi website trông sẽ như một tệp văn bản thô sơ từ những năm 90.',
    'Tư duy "Cascading" (Xếp chồng): Các quy tắc CSS có thể ghi đè lên nhau. Quy tắc nào cụ thể hơn hoặc được viết sau cùng sẽ có hiệu lực.',
    'Box Model là khái niệm quan trọng nhất. Khi bạn thấy một nút bấm, hãy tưởng tượng nó là 4 lớp: nội dung -> khoảng đệm (padding) -> viền (border) -> khoảng cách ngoài (margin).',
    'Responsive Design không phải là làm 3 phiên bản web khác nhau, mà là dùng CSS để bảo trình duyệt tự sắp xếp lại các khối nội dung dựa trên chiều rộng màn hình.',
  ],
  context: [
    'Context là "la bàn" giúp AI không bị lạc đường. Một prompt không có context giống như việc bạn bảo thợ xây "xây cho tôi cái nhà" mà không đưa bản vẽ hay yêu cầu gì thêm.',
    'Có 6 loại context cốt lõi: Role (Bạn là ai), Project (Dự án gì), Tech (Dùng gì), Goal (Mục tiêu gì), Constraint (Giới hạn gì), và Format (Kết quả dạng gì).',
    'Marketer giỏi vibecode không phải là người viết prompt dài, mà là người biết chọn đúng loại context cần thiết cho từng yêu cầu.',
    'Khi AI trả lời sai hoặc generic, 80% trường hợp là do thiếu context. Hãy bổ sung thêm bối cảnh thay vì chỉ bảo AI "làm lại đi".',
  ],
  mcp: [
    'MCP giải quyết bài toán "Data Silos" (ốc đảo dữ liệu). Thay vì dữ liệu bị nhốt trong từng app riêng biệt, MCP tạo ra một ngôn ngữ chung để AI có thể "với tới" và sử dụng chúng một cách an toàn.',
    'Có hai thành phần chính: MCP Client (như Cursor, Claude Desktop) và MCP Server (các bộ kết nối với Notion, Slack, Database...). Client là nơi bạn chat, Server là "người vận chuyển" dữ liệu.',
    'Bảo mật là ưu tiên hàng đầu. Bạn hoàn toàn kiểm soát việc AI được phép đọc file nào, gọi tool nào. AI không thể tự ý truy cập nếu bạn không cấu hình server đó.',
    'Tương lai của AI không chỉ là Chat, mà là Action. MCP chính là bước ngoặt biến AI từ một người tư vấn (Consultant) thành một người thực hiện (Agent) có khả năng thao tác trực tiếp trên công cụ của bạn.',
    'Với marketer, MCP cực kỳ quyền lực: Bạn có thể bảo AI "Hãy đọc báo cáo doanh thu tháng trước trong Sheets, đối chiếu với các campaign trong Notion và tạo một Issue trên GitHub cho team dev fix các link lỗi". Tất cả trong 1 câu lệnh.'
  ],
  ssl: [
    'SSL (Secure Sockets Layer) là tiêu chuẩn bảo mật cho phép truyền dữ liệu mã hóa giữa trình duyệt và máy chủ. Ngày nay, nó thường được hiểu là TLS (Transport Layer Security) - phiên bản kế nhiệm an toàn hơn.',
    'HTTPS = HTTP + SSL/TLS. Chữ "S" trong HTTPS là viết tắt của Secure (An toàn).',
    'Mã hóa: SSL biến dữ liệu của bạn thành một dãy ký tự vô nghĩa trong suốt quá trình vận chuyển. Kẻ xấu có thể chặn được gói tin nhưng không thể đọc được nội dung bên trong.',
    'Xác thực: Ngoài việc mã hóa, SSL còn xác thực rằng website bạn đang truy cập thực sự thuộc về chủ sở hữu hợp pháp, giúp chống lại các trang web giả mạo (phishing).',
    'Lợi ích SEO: Google ưu tiên các trang web có HTTPS. Một trang web không có SSL sẽ bị trình duyệt cảnh báo "Không an toàn", gây mất niềm tin nơi khách hàng.',
  ],
  auth: [
    'Authentication là quá trình xác minh "Bạn là ai?" (VD: Đăng nhập bằng Email/Password).',
    'Khác với Authorization (Phân quyền): "Bạn được làm gì?".',
    'Trong Vibecode, AI sẽ giúp bạn dựng form Login và kết nối với các dịch vụ xác thực như Firebase hoặc Clerk.'
  ],
  asset: [
    'Asset không chỉ là "ảnh", nó là mọi thứ cấu thành nên phần nhìn và phần tiếng của sản phẩm.',
    'Sử dụng SVG cho icon để không bị vỡ nét (vector), sử dụng WebP cho ảnh chụp để dung lượng nhẹ.',
    'Quản lý asset khoa học (chia folder images, fonts, icons) giúp AI dễ dàng tìm đúng file để gắn vào code.'
  ],
  accordion: [
    'Accordion là giải pháp tuyệt vời để quản lý nội dung dài mà không làm người dùng bị choáng ngợp (information overload).',
    'Hai chế độ quan trọng: Single Open (chỉ mở 1 cái) giúp tập trung, và Multiple Open (mở nhiều cái) giúp so sánh dữ liệu dễ hơn.',
    'Khi prompt AI, hãy nói rõ bạn muốn Single hay Multiple Open để AI viết đúng logic xử lý state ngay từ đầu.',
  ],
  carousel: [
    'Carousel (hay Slider) là "con dao hai lưỡi": nó tiết kiệm diện tích nhưng nếu làm không tốt sẽ khiến user bị rối hoặc bỏ lỡ thông tin quan trọng.',
    'Các dạng phổ biến: Single (mỗi lần 1 cái), Multi (hiện nhiều cái cùng lúc), Center (tập trung vào item giữa) và Autoplay (tự động chạy).',
    'Quy tắc vàng: Đừng bao giờ ẩn các nút điều hướng (mũi tên/dots) vì user cần cảm giác mình vẫn đang làm chủ giao diện.',
  ],
  border: [
    'Border là đường viền của element. Thiếu style (ví dụ style="none") thì border sẽ biến mất hoàn toàn dù bạn có set width và color.',
    'Shorthand border: 1px solid black là cách viết cực nhanh cho 4 cạnh giống nhau. Nếu chỉ muốn gạch chân, hãy dùng border-bottom.',
  ],
  boolean: [
    'Boolean là nền tảng của mọi quyết định thông minh. Mọi hệ thống phức tạp đều bắt đầu từ những câu hỏi Đúng/Sai đơn giản.',
    'Trong UI/UX, Boolean thường xuất hiện dưới dạng "Hiện/Ẩn" (Toggle). Ví dụ: `showModal: true` thì hiện popup, `false` thì ẩn.',
    'Sức mạnh của logic kết hợp: Bạn có thể kết hợp nhiều Boolean (AND/OR). Ví dụ: (Đã đăng nhập AND Có mã giảm giá) = Hiện nút áp dụng.',
    'AI cực kỳ giỏi xử lý Boolean. Thay vì viết code phức tạp, hãy prompt: "Chỉ hiện section này nếu sản phẩm còn hàng" — AI sẽ tự tạo một biến Boolean `isAvailable` để điều khiển.',
    'Kiểm soát trạng thái: Hãy coi Boolean là các "công tắc" để bạn bật/tắt các tính năng khác nhau của app một cách linh hoạt.',
    'Logic AND/OR: Hãy tưởng tượng AND là "cần cả hai" (như Cửa khóa AND Có chìa mới vào được), còn OR là "chỉ cần một" (như Có vé HOẶC Có thẻ thành viên là vào được).',
  ],
  breakpoint: [
    'Breakpoint chính là "cửa ngõ" của thiết kế Responsive. Mỗi khi chiều rộng trình duyệt vượt qua một con số cụ thể (ví dụ 768px), một bộ CSS mới sẽ được kích hoạt để thay đổi layout.',
    'Với marketer, việc biết các mốc breakpoint giúp quá trình Review UI diễn ra chuyên nghiệp hơn. Thay vì nói "trên điện thoại bị lỗi", bạn có thể chỉ rõ "ở breakpoint dưới 480px, tiêu đề đang bị tràn".',
    'Trong mô phỏng, bạn sẽ thấy 4 mốc kinh điển: 768px (bắt đầu Tablet), 1024px (bắt đầu Laptop), 1440px (Desktop lớn). Mỗi mốc là một sự thay đổi về trải nghiệm người dùng.',
  ],
  breadcrumb: [
    'Breadcrumb không chỉ là trang trí. Nó là công cụ SEO mạnh mẽ giúp Google hiển thị đẹp mắt ngay trên kết quả tìm kiếm.',
    'Có 3 loại chính: Phân cấp (Hierarchy - phổ biến nhất), Lịch sử (History) và Thuộc tính (Attribute). Với website e-commerce, phân cấp là ưu tiên số 1.',
    'Quy tắc vàng: Cấp cuối cùng trong breadcrumb (trang hiện tại) không nên có link để tránh việc user click lại chính trang đó.',
  ],
  card: [
    'Card là "nguyên tử" của layout hiện đại. Thay vì viết tràn lan, hãy gom nội dung vào card để trang trông ngăn nắp và chuyên nghiệp hơn.',
  ],
  'button-group': [
    'Gom nhóm để tiết kiệm diện tích: Khi có quá nhiều nút lẻ tẻ, Button Group là "chiếc hộp" giúp thu gọn không gian mà vẫn đảm bảo người dùng tìm thấy tính năng dễ dàng.',
    'Hãy dùng Button Group cho các công cụ luôn đi cùng nhau, ví dụ như bộ ba "Đậm - Nghiêng - Gạch chân" trong soạn thảo văn bản.',
    'Phân cấp bằng Visual Weight: Trong một nhóm, bạn vẫn có thể làm một nút nổi bật hơn (Primary) để dẫn dắt người dùng đâu là hành động chính cần ưu tiên.',
    'Thiết kế "nguyên khối": Các nút trong nhóm thường dính liền nhau, chia sẻ chung đường viền và chỉ bo góc ở hai đầu. Điều này tạo cảm giác chúng là một công cụ đa năng duy nhất.',
  ],
  checkbox: [
    'Checkbox là linh hồn của các form đa lựa chọn. Khi marketer cần hỏi "Bạn quan tâm đến chủ đề nào?", Checkbox là lựa chọn số 1.',
    'Về mặt kỹ thuật, mỗi checkbox tương ứng với một giá trị Boolean (True/False). Khi gửi lên server, nó thường là một mảng chứa các giá trị đã chọn.',
  ],
  async: [
    'Async / await quan trọng vì gần như mọi thao tác gọi API, upload file, hoặc lưu dữ liệu đều không diễn ra tức thì.',
    'Nếu xử lý async không rõ ràng, UI rất dễ gặp lỗi loading sai, bấm nhiều lần, hoặc báo xong trước khi dữ liệu thực sự lưu thành công.',
  ],
  component: [
    'Component là tư duy "LEGO" trong lập trình hiện đại. Thay vì viết hàng ngàn dòng code cho mỗi trang, chúng ta chia nhỏ thành các khối độc lập.',
    'Khi bạn muốn "thay đổi style toàn trang", nếu project build bằng component, bạn chỉ cần bảo AI sửa 1 file duy nhất. Nếu không, AI phải đi dò và sửa từng trang một rất mất thời gian.',
  ],
  database: [
    'Database là nơi lưu dữ liệu thật, nên khi mô tả yêu cầu cho AI bạn thường nên nói rõ: lưu vào bảng nào, mỗi dòng đại diện cho cái gì.',
    'Ở mức marketer, chỉ cần hiểu form submit tạo record mới, dashboard đọc record ra, còn filter chỉ là cách xem lại dữ liệu đó.',
  ],
  grid: [
    'Grid là "bộ khung" vô hình bên dưới mọi website. 12 cột là quy chuẩn vì tính linh hoạt cực cao: bạn có thể chia đôi (6-6), chia ba (4-4-4), chia bốn (3-3-3-3) hoặc chia lẻ (8-4) đều rất dễ dàng.',
    'Khi bảo AI "dùng grid 12 cột", bạn đang giúp AI hiểu cấu trúc layout nhanh hơn. Nếu layout bị lệch, hãy check ngay 2 thông số: số lượng cột và gutter (khoảng cách giữa các cột).',
  ],
  gutter: [
    'Gutter là "khoảng thở" giữa các item. Đừng nhầm lẫn gutter với padding (khoảng trống bên trong item) hay margin (khoảng cách đẩy bên ngoài item).',
    'Trong hệ thống Grid hiện đại (như Tailwind hay Figma), gutter thường được gọi là "Gap". Khi layout bị dính vào nhau, thứ đầu tiên bạn nên bảo AI điều chỉnh chính là Gap/Gutter này.',
    'Tư duy Responsive: Gutter không nhất thiết phải cố định. Trên Desktop màn hình rộng, bạn có thể để gutter 32px cho thoáng, nhưng trên Mobile nên giảm xuống 16px hoặc 12px để tiết kiệm diện tích.',
  ],
  element: [
    'Element là "đơn vị cơ bản nhất" — khi bạn bảo AI thay đổi giao diện, hãy dùng tên element chính xác để AI không làm nhầm (ví dụ: Button thay vì "cái nút tròn tròn").',
    'Mô phỏng bên dưới giúp bạn nhận diện 4 nhóm element chính: Text, Button, Input và các thành phần bổ trợ (Other).',
  ],
  request: [
    'Rất nhiều lỗi kỹ thuật marketer gặp thực ra nằm ở request / response: gửi sai dữ liệu, gọi sai URL, hoặc server trả lỗi.',
    'Nếu bạn nhớ được vài mã cơ bản như 400, 401, 404, 500 thì lúc prompt AI sửa lỗi sẽ nhanh hơn nhiều.',
  ],
  spacing: [
    'Spacing không chỉ là "chừa chỗ trống". Nó quyết định nhịp điệu cách người dùng quét mắt qua trang: chặt quá thì bí, thoáng quá thì loãng.',
    'Với marketer, cách nói rất hữu ích cho AI là mô tả theo scale: "section này spacing quá chặt, tăng lên 24px" hoặc "thống nhất gap card thành 16px".',
    'Mô phỏng bên dưới giúp bạn nhìn nhanh 4 nhịp spacing phổ biến, từ tight đến extra loose, để sau này prompt UI chính xác hơn.',
  ],

  'line-height': [
    'Line-height không chỉ là con số kỹ thuật, nó là "khoảng thở" giúp mắt người đọc không bị mỏi khi lướt qua hàng ngàn con chữ.',
    'Trong CSS, line-height 1.5 nghĩa là 1.5 lần font-size. Điều này khác với Line Spacing(chỉ tính khoảng trống giữa các dòng).',
  ],
  hierarchy: [
    'Visual Hierarchy là "la bàn" dẫn dắt người dùng. Nếu mọi thứ đều nổi bật, thì không có gì nổi bật cả.',
    'Có 5 công cụ chính để tạo hierarchy: Kích thước (Size), Màu sắc (Color), Độ đậm (Weight), Khoảng cách (Spacing) và Vị trí (Position).',
    'Quy tắc vàng: Luôn xác định đâu là "Hành động mục tiêu" (Primary Action) và dành cho nó sự ưu tiên thị giác cao nhất (ví dụ: nút to nhất, màu đậm nhất).',
    'Đừng quên "Khoảng trắng" (Whitespace). Đôi khi, cách tốt nhất để làm nổi bật một thứ là để nó đứng một mình giữa một vùng trống lớn.',
  ],
  supabase: [
    'Supabase hay được chọn vì gom database, auth, storage vào một chỗ, nên rất hợp các project vibecode cần ra nhanh.',
    'Khi AI gợi ý dùng Supabase, hãy hiểu đơn giản là nó đang chọn một backend all-in-one để giảm số phần bạn phải tự cấu hình.',
  ],
  margin: [
    'Trong UI web, margin-bottom là kiểu dùng phổ biến nhất vì nó quyết định nhịp dọc giữa headline, đoạn mô tả, card, section và CTA.',
    'Khi layout trông bí và các khối như đang dán vào nhau, thứ nên kiểm tra đầu tiên thường là margin trước khi đụng tới font hay màu.',
  ],
  radius: [
    'Radius không chỉ là "bo cho đẹp". Nó mang tính tâm lý: góc vuông gợi sự chính xác, tin cậy; góc bo gợi sự thoải mái, an toàn.',
    'Quy tắc vàng: Element càng nhỏ (button, tag) thì radius nên nhỏ. Element càng lớn (card, modal) thì radius có thể lớn hơn để cân đối thị giác.',
    'Khi dùng AI, thay vì nói "bo góc một chút", hãy thử các mức cụ thể như 4px (subtle), 8px (standard), hoặc 50% (circle) để có kết quả nhất quán.',
  ],
  responsive: [
    'Với AI, Responsive không chỉ là "co giãn". Hãy ra lệnh cho AI ưu tiên nội dung: "Trên mobile hãy hiện cái gì quan trọng nhất, cái còn lại thì ẩn đi hoặc đẩy xuống cuối".',
    'Bạn không cần nhớ thông số, chỉ cần feedback chuẩn: "Ở màn hình nhỏ (dưới 768px) thì ẩn sidebar này đi". AI sẽ tự viết Media Queries chuẩn cho bạn.',
    'Tư duy Mobile-first: Luôn bảo AI thiết kế cho điện thoại trước, sau đó mới nới rộng ra cho desktop. Đây là "lối tắt" để web luôn gọn gàng và load cực nhanh.',
  ],
  frontend: [
    'Frontend là "bộ mặt" của sản phẩm. Một frontend tốt không chỉ đẹp mà còn phải nhanh (performance) và dễ dùng (UX).',
    'Khi báo lỗi cho AI, hãy phân biệt: "Nút không bấm được" thường là lỗi frontend. "Bấm nút xong hiện lỗi 500" thường là lỗi backend.',
    'Sự kết hợp giữa HTML (xương), CSS (da thịt) và JavaScript (hành động) tạo nên một frontend hoàn chỉnh.',
  ],
  backend: [
    'Backend là "phòng máy" của website — nhận yêu cầu từ frontend, xử lý logic, đọc/ghi database, rồi trả kết quả.',
    'User không bao giờ thấy code backend, nhưng mọi thứ hoạt động đều phụ thuộc vào nó. Khi AI nói "API trả 500" — bạn biết ngay: frontend ổn, backend lỗi.',
    'Trong mô phỏng, bạn sẽ thấy 4 mảnh ghép cốt lõi: API để giao tiếp, Database để lưu trữ, Auth để bảo mật, và Background Jobs để xử lý tác vụ nặng.',
  ],
  padding: [
    'Padding là "khoảng thở" bên trong card. Không có padding, text sẽ dính sát vào viền, tạo cảm giác ngạt thở và cực kỳ khó đọc.',
    'Phân biệt nhanh: Padding làm element to ra (nếu không set box-sizing), còn Margin đẩy các element khác ra xa. Trong mô phỏng, vùng cam chính là padding.',
  ],
  deploy: [
    'Với vibecoder, Deploy là bước cuối cùng để biến ý tưởng thành sản phẩm thực tế. Bạn không cần dev, chỉ cần đẩy code lên GitHub là Vercel tự động lo mọi khâu kỹ thuật.',
    'Khái niệm Rollback là "bảo hiểm" cho bạn: Nếu AI làm vỡ giao diện ở bản mới, bạn chỉ cần vào dashboard Vercel và chọn bản cũ để khôi phục lại ngay lập tức.',
    'Deploy không chỉ là upload file, nó là một dây chuyền kiểm tra. Nếu code AI viết bị lỗi nặng, quá trình Build sẽ báo fail và ngăn không cho bản lỗi đó lên tới tay người dùng.',
  ],
  navbar: [
    'Navbar là thành phần "sống" trên mọi trang. Khi feedback cho AI, hãy chú ý tới tính nhất quán: navbar trên mobile phải khớp với desktop về menu item.',
    'Kỹ thuật "Sticky" (cố định) navbar rất quan trọng cho UX. Khi user scroll sâu xuống trang, họ vẫn cần menu để nhảy sang trang khác mà không phải scroll ngược lên đầu.',
  ],
  stroke: [
    'Stroke là linh hồn của icon và illustration. Khi bạn thấy một bộ icon "không đồng nhất", 90% là do stroke-width (độ dày nét) không bằng nhau.',
    'Khác biệt lớn nhất với border: stroke có thể bo góc nối (linejoin) và đầu mút (linecap) cực kỳ linh hoạt, giúp icon trông "mượt" hơn hẳn so với việc dùng border-radius trên box.',
    'Marketer nên nhớ 2 thông số: stroke-width (độ đậm nhạt) và stroke-dasharray (tạo nét đứt cho các phần placeholder hoặc trạng thái chưa active).',
  ],
  corner: [
    'Phân biệt: Radius là con số (px), còn Corner là khái niệm về góc. Bạn có thể có một Corner với Radius bằng 0 (góc vuông) hoặc Radius lớn (bo tròn).',
    'Trong Vibecode, bạn có thể gọi tên các loại góc như "sharp", "rounded", "pill" để AI hiểu nhanh ý đồ thiết kế mà không cần nhớ số px chính xác.',
    'Hãy chú ý tính nhất quán: nếu card đã bo 12px thì các element bên trong như button nên bo ít hơn (ví dụ 4-8px) để tạo sự cân đối về thị giác.',
  ],
  slider: [
    'Slider là lựa chọn tuyệt vời khi người dùng không cần độ chính xác tuyệt đối từng con số mà quan tâm đến sự tương quan (ví dụ: to/nhỏ, sáng/tối).',
    'Khi bảo AI "thêm slider chọn opacity" — bạn nên nói rõ: min/max bao nhiêu, step bao nhiêu, và giá trị mặc định là gì. Thiếu step → trượt mượt. Có step=25 → chỉ chọn được các mốc 0, 25, 50, 75, 100.',
    'Hiểu về các thông số của slider giúp bạn mô tả control chính xác hơn, giúp AI viết code đúng ý ngay từ đầu mà không cần đoán mò.',
  ],
  snackbar: [
    'Snackbar là "phản hồi nhẹ nhàng" nhất. Nó không bắt user phải click nút để đóng như Popup, giúp trải nghiệm trơn tru hơn.',
    '4 loại Snackbar kinh điển: Success (xong việc), Error (lỗi gấp), Warning (cảnh báo), và Info (thông tin thêm). Mỗi loại cần màu sắc và icon tương ứng để user nhận diện nhanh qua thị giác.',
    'Quy tắc vàng: Đừng để Snackbar che mất nội dung quan trọng hoặc nút bấm quan trọng. Vị trí phổ biến là Bottom-Left hoặc Bottom-Center.',
    'Thời gian hiển thị lý tưởng là 3-5 giây. Nếu chứa thông tin cực kỳ quan trọng, hãy cân nhắc dùng Popup thay vì Snackbar.',
    'Snackbar vs Toast: Snackbar thường ở dưới (Bottom), có thể có Action (Undo), không chồng lấp (stack). Toast thường ở trên hoặc góc (Top/Corner), thường không có Action và có thể hiện nhiều cái cùng lúc.',
  ],
  dropdown: [
    'Dropdown không chỉ là "cái hộp bấm ra list" — nó là một input quan trọng trong form, có value thật và state thật (mở/đóng, đã chọn/chưa chọn).',
    'Khi mô tả yêu cầu cho AI, hãy nêu rõ: danh sách option, giá trị mặc định, và có cho phép chọn nhiều (multi-select) hay không.',
    'Chú ý trạng thái "Disabled": Dùng khi user chưa đủ điều kiện để chọn (ví dụ: chưa chọn Tỉnh thành thì chưa cho chọn Quận huyện).',
  ],
  drawer: [
    'Drawer là "ngôi nhà" của các điều hướng phụ hoặc bộ lọc phức tạp. Nó giúp giao diện chính luôn sạch sẽ mà vẫn đảm bảo tính năng đầy đủ khi cần.',
    'Vị trí quan trọng: Side Drawer (trái/phải) thường dùng cho Desktop/Tablet, trong khi Bottom Drawer là "vua" trên Mobile vì nó nằm ngay trong tầm với của ngón cái.',
    'Chế độ hiển thị: Temporary Drawer (đè lên nội dung) tạo sự tập trung cao độ cho tác vụ hiện tại, còn Persistent Drawer (đẩy nội dung) phù hợp cho các workspace cần truy cập menu liên tục.',
    'UX Tip: Luôn cung cấp một cách đóng drawer trực quan (nút X, click ra ngoài overlay, hoặc vuốt ngược lại) để người dùng không cảm thấy bị "kẹt".',
  ],
  footer: [
    'Footer không phải "cái cuối trang cho có". Nó là component có cấu trúc: brand area, nav columns, newsletter capture, social links, legal bar.',
    'Khi bạn bảo AI "làm footer" mà không chỉ định sections → nó tự đoán. Chỉ định rõ (ví dụ: "footer có 3 cột, newsletter bên phải") → ra đúng ngay, không cần rounds sửa.',
  ],
  toggle: [
    'Toggle không chỉ là "cái nút gạt" — nó là hiện thân của kiểu dữ liệu Boolean (True/False). Khi bạn bảo AI "thêm toggle", AI sẽ tạo ra một biến state để theo dõi trạng thái này.',
    'Khác với Checkbox (dùng cho danh sách nhiều lựa chọn), Toggle thường dùng cho các thiết lập có hiệu lực ngay lập tức. Nếu thay đổi cần nút "Lưu" mới có tác dụng, hãy cân nhắc dùng Checkbox hoặc Switch có xác nhận.',
    'Trong mô phỏng, bạn sẽ thấy trạng thái "Disabled" rất quan trọng: dùng để khóa các lựa chọn khi user chưa đủ quyền hoặc hệ thống đang trong trạng thái bảo trì (Maintenance).',
  ],
  sidebar: [
    'Khi làm dashboard, Static Sidebar là chuẩn mực vì nó giúp user chuyển đổi nhanh giữa các module. Với các tool cần diện tích làm việc lớn (như IDE hay Figma), Collapsible Sidebar là lựa chọn tối ưu.',
    'Trong mô phỏng, bạn hãy chú ý cách Content Area (vùng nội dung chính) phản ứng: nó có thể bị đẩy đi (Static/Collapsible) hoặc bị đè lên (Overlay). Hiểu điều này giúp bạn prompt AI xử lý layout chính xác hơn.',
  ],
  section: [
    'Section là cách bạn tư duy về "flow" của trang web. Đừng quăng mọi thứ vào một chỗ, hãy chia thành các phần rõ ràng: Hero (thu hút), Features (thuyết phục), About (tạo niềm tin), và CTA (chốt hạ).',
    'Với AI, việc nhắc đến "section" giúp giới hạn phạm vi công việc. Thay vì bảo "sửa lại trang này", hãy nói "sửa lại hero section" để AI làm nhanh và chính xác hơn.',
  ],
  header: [
    'Header là "vùng chứa" (container), còn Navbar là "thành phần" (component) nằm bên trong. Marketer nên phân biệt rõ để feedback chính xác: sửa menu là sửa navbar, còn thêm banner/ảnh nền là sửa header.',
    'Trạng thái "Scrolled" rất quan trọng: thường header sẽ thu nhỏ lại hoặc thêm shadow để tiết kiệm diện tích nhưng vẫn giữ được các nút điều hướng quan trọng nhất.',
  ],
  'hero-section': [
    'Hero Section là "điểm chạm" quan trọng nhất trên landing page. Nó phải trả lời được 3 câu hỏi trong 3 giây: Bạn là ai? Bạn giải quyết vấn đề gì? Tôi phải làm gì tiếp theo?',
    '4 Layout kinh điển: Left Aligned (mặc định cho SaaS), Centered (cho mobile/launch app), Split (cân bằng text/hình), và Overlay (cảm giác cinematic).',
    'Quy tắc "Above the fold": Hãy đảm bảo những thông tin quan trọng nhất nằm trong Hero Section để user thấy ngay mà không cần cuộn trang.',
  ],
  hover: [
    'Hover là "phần thưởng" cho sự khám phá của người dùng. Một giao diện không có hover state sẽ cho cảm giác "chết", không phản hồi.',
    '4 loại hover effect phổ biến nhất: Background color (đổi màu nền), Box Shadow (nổi khối), Lift (nâng lên bằng transform), và Scale (phóng to/thu nhỏ).',
    'Quy tắc vàng: Luôn đi kèm với Transition (thời gian chuyển đổi). Nếu không có transition, hover sẽ bị giật và gây cảm giác khó chịu. Thường 0.2s - 0.3s là khoảng thời gian lý tưởng.',
    'Lưu ý quan trọng: Hover chỉ tồn tại trên thiết bị có chuột (Desktop). Trên Mobile/Tablet, hiệu ứng này thường được thay thế bằng trạng thái "Active" (khi chạm vào) hoặc bỏ hoàn toàn để tránh gây hiểu lầm.',
  ],
  'icon-button': [
    'Icon Button là "vũ khí" bí mật để giữ giao diện gọn gàng, nhưng nếu dùng sai icon (icon mơ hồ), nó sẽ thành "thảm họa" UX.',
    '4 biến thể chính: Filled (nổi bật nhất cho action chính), Tonal (nhấn mạnh vừa phải), Outlined (cho action phụ), và Text (nhẹ nhàng nhất, thường dùng trong toolbar).',
    'Hierarchy bằng kích thước: Đừng để mọi icon button đều bằng nhau. Nút chính to hơn (L/XL), nút phụ nhỏ hơn (S/M) giúp dẫn dắt mắt người dùng tốt hơn.',
    'Luôn thiết kế đủ 5 trạng thái: Default, Hover, Pressed, Selected, và Disabled. Điều này giúp user biết chắc chắn họ đang tương tác với hệ thống.',
    'Mẹo nhỏ: Nếu icon không quá phổ biến, hãy luôn yêu cầu AI thêm Tooltip (hiện text khi rê chuột vào) để đảm bảo ai cũng dùng được.',
  ],
  sticky: [
    'Sticky không phải là "Fixed" (cố định vĩnh viễn ở một chỗ). Sticky chỉ bắt đầu "dính" khi người dùng cuộn đến vị trí của nó, và nó sẽ bị cuộn đi nếu phần nội dung cha (parent) của nó đã cuộn hết.',
    'Thanh điều hướng (Navbar) và Sidebar là 2 ứng dụng phổ biến nhất của Sticky. Trong UI phức tạp, Action Bar (chứa nút Save/Submit) dưới cùng màn hình cũng thường được thiết kế sticky để người dùng có thể lưu bất cứ lúc nào.',
    'Khi kiểm tra sticky, hãy đảm bảo bạn kéo thanh cuộn lên xuống nhiều lần để xem nó có hoạt động mượt mà không, đặc biệt là trên giao diện mobile nơi không gian màn hình rất hạn chế. Khi bảo AI "làm sticky", cần nói rõ: element nào, stick ở top hay bottom, offset bao nhiêu.',
  ],
  pagination: [
    'Nhiều marketer nghĩ "phân trang là có sẵn". Thực ra, dev/AI phải viết logic để cắt dữ liệu (slice), tính tổng số trang (total pages), và quản lý trang hiện tại (current page).',
    'Việc chọn đúng loại phân trang rất quan trọng với UX. Nếu bạn có một danh sách sản phẩm rất dài và muốn người dùng dễ dàng xem từng món mà không bị đứt đoạn, hãy cân nhắc "Load More".',
    'Ngược lại, nếu dữ liệu của bạn có ý nghĩa thứ tự (ví dụ bảng quản lý user, báo cáo doanh thu theo tháng) và người dùng thường cần nhảy ngay về đoạn cuối hoặc tìm kiếm chính xác, hãy dùng "Numeric" hoặc "First/Last".',
  ],
  popup: [
    'Popup (Modal) là công cụ mạnh mẽ để thu hút sự chú ý tuyệt đối, nhưng nếu lạm dụng sẽ gây ức chế (spam) và làm đứt quãng dòng chảy trải nghiệm của người dùng.',
    'Có 4 loại phổ biến: Alert (thông báo gấp), Confirm (xác nhận hành động nguy hiểm), Form (thu thập dữ liệu nhanh), và Success (phản hồi kết quả).',
    'Quy tắc vàng: Luôn cung cấp một cách dễ dàng để đóng popup (nút Close, click ra ngoài vùng tối, hoặc phím Esc) trừ khi đó là tác vụ bắt buộc pháp lý hoặc kỹ thuật phải hoàn thành.',
    'Trong Vibecode, khi bảo AI "làm popup", hãy nói rõ mục đích (xóa, mời thành viên, hay báo lỗi) để AI chọn đúng bộ nút và màu sắc tương ứng (ví dụ: Confirm xóa thì nút đỏ, Form mời thì nút thương hiệu).',
  ],
  'design-system': [
    'Design System không chỉ là "bộ UI Kit" — nó là "nguồn sự thật duy nhất" (Single Source of Truth) giúp Designer và Developer nói cùng một ngôn ngữ.',
    '4 lớp cốt lõi: Foundations (màu, chữ, spacing), Components (nút, input), Layout (grid, shell), và Patterns (luồng đăng ký, thanh toán).',
    'Với marketer, Design System giúp việc yêu cầu sửa web trở nên cực kỳ chính xác: "Đổi primary color sang mã mới" thay vì "đổi màu cam này thành màu cam khác".',
    'Lợi ích lớn nhất là tính mở rộng (Scalability): Khi có DS, việc tạo thêm 10 landing page mới sẽ nhanh hơn gấp 5 lần vì mọi "viên gạch" đã có sẵn.',
  ],
  skeleton: [
    'Skeleton Screen là giải pháp thay thế hoàn hảo cho Spinner (vòng quay loading) truyền thống. Nó mang lại cảm giác hệ thống đang phản hồi nhanh hơn thực tế (perceived performance).',
    'Quy tắc vàng: Skeleton phải khớp 100% với layout thật về kích thước và vị trí. Nếu skeleton một đằng, nội dung hiện ra một nẻo, user sẽ bị "giật mình" và khó chịu (layout shift).',
    'Trong Vibecode, khi bảo AI "làm loading", hãy thêm từ khóa "skeleton screen" để AI tạo ra các component placeholder xám mờ thay vì chỉ một cái vòng xoay đơn điệu.',
    'Mô phỏng thực hành giúp bạn thấy rõ sự khác biệt: Delay ngắn (0.3s) thì skeleton có thể gây "nháy" (flicker), nhưng delay dài (1s+) thì skeleton là cứu cánh cho trải nghiệm người dùng.',
  ],
  viewport: [
    'Cần phân biệt rõ: Screen Resolution (độ phân giải vật lý) và Viewport Size (kích thước logic). Trình duyệt quan tâm đến Viewport.',
    'Khi bạn bảo "web bị tràn trên di động", hãy cung cấp số Viewport Width (ví dụ: 375px) để dev/AI kiểm tra chính xác breakpoint nào đang lỗi.',
    'Viewport không chỉ có chiều rộng (Width) mà còn có chiều cao (Height). Với các thiết kế "Full Screen" hoặc "Hero Banner", chiều cao viewport quyết định nội dung gì sẽ hiện ra',
    'Mẹo nhỏ: Bạn có thể dùng tính năng Inspect (F12) trên Chrome, bật Toggle Device Toolbar để giả lập mọi loại Viewport phổ biến nhất hiện nay.',
  ],
  'z-index': [
    'Z-index chỉ hoạt động khi element có thuộc tính position (như relative, absolute, fixed, sticky). Nếu set z-index mà không thấy tác dụng, hãy check lại position.',
    'Quy tắc Stack: Các element nằm trong cùng một "container" sẽ so z-index với nhau. Một element z:9999 nằm trong container A có z:1 vẫn có thể bị đè bởi element z:2 ở ngoài. Đây là lỗi "Stacking Context" cực kỳ phổ biến.',
    'Chiến lược z-index: Đừng đặt số ngẫu nhiên như 999999. Hãy chia theo lớp: Page (0), Components (1-10), Sticky (100), Dropdown (500), Modal (1000), Toast (9999).',
    'Marketer cần biết z-index để feedback: "Popup này đang bị che" thay vì nói "nó bị lỗi hiển thị". Gợi ý cho AI: "Kiểm tra z-index của modal so với navbar".',
  ],
  'primary-color': [
    'Phân biệt rõ ràng giữa Primary và Secondary giúp tạo ra Visual Hierarchy (hệ thống phân cấp thị giác) cực kỳ mạnh mẽ. Nếu dùng Primary quá nhiều, trang sẽ bị quá chói mắt và người dùng không biết nên bấm vào đâu.',
    'Khi làm việc với dev hoặc AI, đừng chỉ nói "nút màu cam". Hãy dùng thuật ngữ "nút Primary" hoặc "nút Secondary" để hệ thống tự động map đúng biến màu (color token) trong Design System.',
    'Trong Data Visualization (biểu đồ), việc kết hợp Primary và Secondary giúp so sánh dữ liệu dễ dàng hơn. Ví dụ: Primary cho số liệu năm nay, Secondary cho số liệu năm ngoái.',
  ],
  'color-palette': [
    'Bảng màu (Color Palette) không chỉ là chọn màu cho đẹp. Nó là việc gán "ý nghĩa" cho mỗi màu. Khi marketer yêu cầu AI tạo web, việc gọi tên màu theo chức năng (ví dụ: "dùng màu semantic warning") sẽ tốt hơn nhiều so với việc mô tả theo cảm tính.',
    '4 nhóm màu kinh điển: Brand Color chỉ nên chiếm khoảng 10% giao diện để tập trung sự chú ý vào nút CTA. Semantic Color dùng cho trạng thái đúng/sai/cảnh báo. Grayscale Scale là "bộ xương" chiếm 80% không gian hiển thị (nền, text, divider).',
    'Với AI hiện tại, nếu bạn chỉ đưa cho nó mã hex màu chính (Primary), nó có thể tự nội suy (interpolate) ra toàn bộ Color Palette bằng cách điều chỉnh độ sáng tối (Luminance) hoặc sắc độ (Saturation).',
  ],
  'flat-design': [
    'Flat Design không chỉ là "bỏ hiệu ứng", nó là tư duy ưu tiên nội dung và hiệu năng. Giao diện phẳng thường load nhanh hơn và dễ dàng co giãn trên mọi kích cỡ màn hình.',
    'Khi làm việc với AI, nếu thấy kết quả ra quá nhiều bóng đổ hoặc gradient "sến", hãy dùng ngay từ khóa "Flat Design" để AI dọn dẹp lại giao diện.',
    'Mô phỏng thực hành giúp bạn nhận diện 3 cấp độ: Skeuomorphic (nhiều hiệu ứng), Modern Flat (có bo góc nhẹ, màu hiện đại) và Pure Flat (cực kỳ tối giản).',
  ],
  glassmorphism: [
    'Glassmorphism là "con cưng" của thiết kế hiện đại, giúp giải quyết bài toán: làm sao để giao diện vừa có chiều sâu, vừa không bị nặng nề bởi các mảng màu đặc.',
    '3 thành phần cốt lõi tạo nên glass effect: Nền bán trong suốt (Transparency), Hiệu ứng mờ phía sau (Backdrop Blur) và Đường viền mờ (Subtle Border). Thiếu 1 trong 3, hiệu ứng sẽ không ra chất "kính".',
    'Quy tắc vàng: Glassmorphism chỉ thực sự đẹp khi đặt trên một nền có màu sắc hoặc hình khối rực rỡ (như các blobs màu trong mô phỏng). Nếu đặt trên nền trắng tinh hoặc xám đặc, nó sẽ trông như một mảng màu xám bẩn.',
    'Cảnh báo hiệu năng: Backdrop-blur là một thuộc tính "ngốn" tài nguyên trình duyệt. Đừng dùng quá nhiều lớp glass chồng lên nhau hoặc dùng trên các bảng dữ liệu cực lớn vì có thể gây lag khi scroll.',
  ],
  spinner: [
    'Spinner là tín hiệu "đang bận" phổ biến nhất. Tuy nhiên, nếu spinner quay quá 3-5 giây mà không có thông tin bổ sung, user sẽ bắt đầu cảm thấy lo lắng hoặc mất kiên nhẫn.',
    '4 loại spinner cơ bản: Basic (nhiều kích thước), With Text (có ngữ cảnh), Overlay (chặn tương tác toàn trang), và Inline (nằm trong element như button/input).',
    'Quy tắc vàng: Luôn vô hiệu hóa (disable) các nút bấm khi spinner đang quay để tránh việc user gửi yêu cầu trùng lặp gây lỗi dữ liệu.',
    'Nếu tác vụ mất hơn 10 giây, hãy cân nhắc dùng Progress Bar (thanh tiến trình) thay vì Spinner để user biết chính xác họ phải chờ bao lâu nữa.',
  ],
  container: [
    'Container là "chiếc hộp" quan trọng nhất trong layout. Nó xác định ranh giới cho nội dung của bạn.',
    'Có 3 loại Container phổ biến: Fixed (cố định chiều rộng), Fluid (luôn chiếm 100% chiều rộng) và Responsive (thay đổi chiều rộng tùy theo màn hình).',
    'Quy tắc "Max-width + Margin Auto": Đây là cách kinh điển để tạo container căn giữa. Max-width giới hạn chiều rộng tối đa để text không bị quá dài trên màn hình 4K, còn Margin Auto đẩy container vào giữa.',
  ],
  progressbar: [
    'Progress Bar là cách trực quan nhất để phản hồi cho người dùng về những tác vụ mất thời gian. Nó giúp giảm bớt cảm giác sốt ruột bằng cách trả lời câu hỏi: "Tôi phải chờ bao lâu nữa?".',
    '4 loại pattern kinh điển: Linear (thanh ngang đơn giản), Circular (vòng tròn cho không gian hẹp), Steps (theo từng giai đoạn) và Task Progress (tổng hợp từ nhiều task nhỏ).',
    'Quy tắc UX: Nếu tác vụ dưới 2 giây, đừng hiện gì cả. Từ 2-10 giây dùng Spinner. Trên 10 giây hoặc có thể tính toán được % thì BẮT BUỘC dùng Progress Bar.',
    'Lỗi "99% bị đứng": Đây là trải nghiệm tệ nhất. Nếu không thể lấy số % chính xác từ server, hãy dùng hiệu ứng "Indeterminate" (thanh chạy vô tận) thay vì đoán mò con số.',
  ],
  overflow: [
    'Overflow giống như một "người gác cổng" cho container. Nó quyết định xem phần nội dung thừa ra sẽ được hiển thị như thế nào: cho phép tràn (visible), cắt bỏ (hidden), hay cho phép người dùng cuộn (scroll/auto).',
    'Khi làm việc với AI, nếu bạn thấy giao diện bị vỡ do text quá dài, hãy dùng "overflow: hidden" kết hợp với "text-overflow: ellipsis" (hiện dấu ba chấm) để giữ layout ngăn nắp.',
    'Mẹo nhỏ: Hãy ưu tiên dùng "overflow: auto" thay vì "scroll". Với "auto", thanh cuộn chỉ xuất hiện khi thực sự cần thiết, giúp giao diện trông sạch sẽ hơn khi nội dung vừa vặn.',
  ],
  'tab-bar': [
    'Tab bar là giải pháp kinh điển để giải quyết bài toán: quá nhiều thông tin trên một màn hình nhưng không muốn người dùng phải chuyển trang liên tục.',
    '4 loại tab bar phổ biến: Bottom Tab (cho mobile app), Top Tab (cho web dashboard), Scrollable Tab (khi có quá nhiều tab), và Segmented Control (cho các lựa chọn ngắn, gọn).',
    'Quy tắc vàng: Tab bar không phải là menu điều hướng toàn trang (như Navbar). Nó chỉ dùng để đổi nội dung trong MỘT vùng nhất định. Nếu bấm tab mà URL thay đổi hoàn toàn, đó thường là Navbar trá hình.',
    'Khi prompt AI, hãy chỉ định rõ loại tab bar bạn muốn. Ví dụ: "Dùng segmented control cho phần filter thời gian" hoặc "Dùng scrollable tabs cho danh sách categories dài".',
  ],
  'chips': [
    'Chip là công cụ "nén" thông tin cực tốt. Thay vì dùng một danh sách dài dằng dặc, chip gom các nhãn (labels) vào không gian hẹp, giúp giao diện trông hiện đại và chuyên nghiệp hơn.',
    '4 kiểu chip phổ biến: Input (nhập tag), Filter (lọc dữ liệu), Choice (chọn 1 hoặc nhiều), và Action (shortcut thực hiện lệnh nhanh).',
    'Khi làm việc với AI, hãy phân biệt rõ: nếu bạn muốn người dùng chọn rồi "Lưu", hãy dùng Filter/Choice chip. Nếu bạn muốn bấm vào là chạy lệnh ngay (như Download, Share), hãy dùng Action chip.',
    'Về thiết kế, chip thường có bo góc (radius) lớn hơn button một chút để tạo sự khác biệt, và thường đi kèm icon nhỏ ở bên trái để tăng tính trực quan.',
  ],
  'badge': [
    'Badge là "lớp thông tin thứ hai" chồng lên element chính. Nó không thay thế nội dung mà chỉ bổ sung ngữ cảnh (context).',
    '4 loại kinh điển: Notification (kéo sự chú ý), Status (báo trạng thái realtime), Count (báo số lượng), và Avatar Badge (gom nhóm user).',
    'Quy tắc vàng: Badge phải nhỏ hơn element chính nhưng phải đủ độ tương phản để nổi bật. Nếu dùng badge số, hãy giới hạn độ dài (ví dụ: dùng "99+" thay vì "1234") để tránh làm biến dạng hình dáng badge.',
  ],
  'divider': [
    'Divider không chỉ là một đường kẻ. Nó có thể là một khoảng trống (whitespace), một sự thay đổi màu nền, hoặc một đường kẻ có các biến thể (dotted, dashed, thick).',
    'Quy tắc vàng: Đừng lạm dụng divider. Nếu khoảng trắng đã đủ để phân tách nội dung, hãy ưu tiên dùng khoảng trắng để giao diện trông sạch sẽ và hiện đại hơn.',
    'Có 4 kiểu divider phổ biến: Ngang (Horizontal) để tách section, Dọc (Vertical) để tách cột, Có chữ (With Text) cho các form login/social, và Trong danh sách (In List) để tách các item.',
  ],
  'list': [
    'Chọn sai kiểu list làm người dùng mất thời gian scan. Single Line cho menu (người dùng chỉ cần tên). Two Line cho email/chat (cần thêm preview). Avatar List cho danh sách người (cần nhận diện nhanh).',
    'Khi prompt AI, mô tả rõ: "danh sách gì, mỗi item mấy dòng, có ảnh không, cần chia nhóm không" thay vì chỉ nói "thêm list". AI sẽ chọn đúng kiểu list ngay từ đầu.',
  ],
  'toast-notification': [
    'Toast Notification (hay Snackbar) là "phản hồi nhẹ nhàng" nhất. Nó không bắt user phải click nút để đóng như Popup, giúp trải nghiệm trơn tru hơn.',
    '4 loại Toast kinh điển: Success (xong việc), Error (lỗi gấp), Warning (cảnh báo), và Info (thông tin thêm). Mỗi loại cần màu sắc và icon tương ứng để user nhận diện nhanh qua thị giác.',
    'Quy tắc vàng: Đừng để Toast che mất nội dung quan trọng hoặc nút bấm quan trọng. Vị trí phổ biến là Top-Right (desktop) hoặc Bottom-Center (mobile).',
    'Thời gian hiển thị lý tưởng là 3-5 giây. Nếu chứa thông tin cực kỳ quan trọng, hãy cân nhắc dùng Popup thay vì Toast.',
  ],
  'dark-mode': [
    'Dark mode không phải là "đảo ngược màu" (invert). Đảo ngược màu sẽ làm ảnh và icon trông rất kinh dị. Dark mode là việc định nghĩa một bộ màu mới cho cùng một tên biến.',
    'Ví dụ: biến color-bg ở Light mode là trắng, thì ở Dark mode nó là đen xám. Code của bạn chỉ gọi color-bg, hệ thống sẽ tự chọn giá trị đúng dựa trên theme.',
    'Quy tắc tương phản: Trong dark mode, đừng dùng màu đen tuyệt đối (#000) làm nền vì nó gây hiện tượng "halo" (chữ trắng bị nhòe trên nền đen). Hãy dùng xám cực đậm để mắt dễ chịu hơn.',
    'Giữ màu thương hiệu: Các màu accent (cam, xanh, đỏ) thường được giữ nguyên hoặc chỉ điều chỉnh nhẹ độ sáng để vẫn nổi bật trên cả hai nền.',
  ],
  'whitespace': [
    'Đừng nhầm lẫn: Whitespace không nhất thiết phải là màu trắng. Nó là bất kỳ không gian trống nào (kể cả màu nền, ảnh mờ) giữa các phần tử thiết kế.',
    'Có 2 loại chính: Macro Whitespace (khoảng cách lớn giữa các section, container) và Micro Whitespace (khoảng cách nhỏ giữa các dòng, chữ, icon).',
    'Tỷ lệ vàng: Không có con số cố định, nhưng một quy tắc UX phổ biến là: nội dung càng quan trọng hoặc càng cao cấp thì càng cần nhiều whitespace quanh đó để tạo sự tôn nghiêm và tập trung.',
    'Sức mạnh của Negative Space: Trong nghệ thuật và logo (như mũi tên ẩn trong logo FedEx), negative space còn được dùng để tạo ra các hình khối ẩn ý, giúp thiết kế trở nên thông minh và đáng nhớ hơn.',
  ],
  'text-fields': [
    'Text field không chỉ là cái hộp. Nó là một thực thể có trạng thái (state). Người dùng cần biết mình đang ở đâu, đã làm đúng chưa, và nếu sai thì sai ở đâu.',
    'Validation nên diễn ra ở trạng thái "Blur" (khi người dùng chuyển sang field khác) để tránh làm phiền khi họ đang gõ, nhưng vẫn cung cấp phản hồi kịp thời.',
  ],
  'menus': [
    'Menu là "bản đồ" của giao diện. Chọn sai kiểu menu sẽ làm user bị lạc hoặc tốn nhiều click hơn cần thiết.',
    '4 kiểu menu phổ biến: Dropdown (tiết kiệm chỗ), Context (tiện lợi tại chỗ), Mega (cho website khổng lồ), và Grouped (cho sự ngăn nắp).',
    'Quy tắc vàng: Đừng để menu quá dài mà không có sự phân cấp. Dùng Divider và Group Header để giúp mắt người dùng "nghỉ ngơi" và scan thông tin nhanh hơn.',
  ],
  'shape': [
    'Shape là ngôn ngữ đầu tiên của não bộ trước khi đọc chữ. Một khối đặc (Solid) luôn thu hút sự chú ý hơn một khối viền (Stroke).',
    'Sử dụng hình khối nhất quán giúp người dùng nhận diện nhanh chức năng: ví dụ hình tròn luôn là Profile, hình tam giác luôn là Play hoặc Warning.',
    'Sự kết hợp giữa Shape và Corner Radius tạo ra "Personality" cho giao diện: Góc nhọn (Sharp) cho cảm giác kỹ thuật, Góc tròn (Rounded) cho cảm giác thân thiện.',
  ],
  'split-buttons': [
    'Split button là giải pháp hoàn hảo khi bạn có một hành động chiếm 80% nhu cầu người dùng, nhưng vẫn muốn cung cấp các lựa chọn thay thế mà không làm rối UI.',
    'Cấu trúc của nó gồm 2 phần độc lập về mặt tương tác: Main Button (hành động ngay) và Dropdown Trigger (mở menu). Đừng nhầm lẫn với một Menu Button đơn thuần (click vào đâu cũng mở menu).',
    'Quy tắc UX: Hành động chính nên là hành động được sử dụng nhiều nhất. Các hành động trong menu nên có liên quan mật thiết đến hành động chính (ví dụ: Save vs Save As, Export vs Export as PDF).',
  ],
  'segmented-button': [
    'Segmented Button là lựa chọn hoàn hảo khi bạn có từ 2 đến 5 lựa chọn cần hiển thị cùng lúc để user so sánh nhanh.',
    'Khác với Tab Bar (dùng cho nội dung lớn toàn trang), Segmented Button thường dùng trong các component nhỏ như card, modal, hoặc thanh công cụ config.',
    'Quy tắc "Mutually Exclusive": Chỉ có duy nhất một đoạn được active tại một thời điểm. Việc chọn đoạn mới sẽ tự động hủy chọn đoạn cũ.',
  ],
  'navigation': [
    'Navigation là "xương sống" của trải nghiệm người dùng. Một hệ thống navigation tệ sẽ khiến user rời bỏ app ngay cả khi nội dung của bạn rất hay.',
    '4 kiểu kinh điển: Top Nav (toàn trang), Bottom Nav (mobile), Sidebar (tiết kiệm không gian), và Breadcrumb (lộ trình).',
    'Khi thiết kế, hãy ưu tiên sự nhất quán: menu ở trang A phải nằm đúng vị trí đó ở trang B để user hình thành thói quen sử dụng.',
    'Đừng quên trạng thái "Active": người dùng luôn cần biết họ đang ở đâu (ví dụ: nút Home đang sáng lên khi ở trang chủ).',
  ],
  'commit': [
    'Commit là "nút Save" quyền năng nhất của bạn. Đừng bao giờ làm một lèo 3 tiếng rồi mới commit. Hãy chia nhỏ: làm xong header -> commit, xong footer -> commit.',
    'Mỗi commit đi kèm một mã Hash (ví dụ: `7f2a1b9`). Đây là "biển số xe" định danh duy nhất giúp bạn gọi tên chính xác phiên bản đó khi cần quay lại.',
    'Message là lời nhắn gửi tương lai: Đừng viết "fix lỗi" hay "cập nhật". Hãy viết "fix: lỗi tràn text trên mobile" hoặc "feat: thêm nút đăng ký". Sau 1 tháng nhìn lại, bạn sẽ biết mình đã làm gì.',
    'Điểm checkpoint an toàn: Commit giúp bạn tự tin "phá phách". Nếu lỡ làm hỏng mọi thứ, chỉ cần 1 lệnh rollback là project quay về trạng thái ổn định gần nhất như chưa từng có chuyện gì xảy ra.',
  ],
  env: [
    '.env = file ẩn chứa "bí mật" của project. Thay vì ghi thẳng mật khẩu vào code, code đọc từ file .env. Giống bạn lưu password trong trình quản lý mật khẩu thay vì dán vào mỗi trang web.',
    '.env bắt buộc viết CHỮ_HOA + GẠCH_DƯỚI. Sai quy tắc → code không đọc được biến. Khi AI báo "env variable not found" → kiểm tra xem tên biến trong .env có khớp chính xác chữ hoa/thường không.',
    'Cùng tên biến, khác giá trị → cùng code chạy khác nhau. DB_HOST=localhost trên máy dev, DB_HOST=prod.db.com trên server thật. Code không cần sửa — chỉ cần load file .env đúng.',
    'Push .env lên GitHub = dán mật khẩu lên bảng công cộng. Có bot tự động scan GitHub tìm API key bị lộ. Khi AI xin bạn "thêm .env vào .gitignore" → họ đang bảo vệ mật khẩu project.',
  ],
  git: [
    'Git = hệ thống lưu phiên bản tự động cho code. Thay vì "final_v2_v3_v4", mỗi lần thay đổi được lưu thành 1 checkpoint có ID, thời gian, ghi chú.',
    '4 khái niệm then chốt: Repository (nhà kho), Commit (checkpoint), Branch (nhánh), và Remote (bản trên mây).',
    '"Đã push chưa?" là câu hỏi quan trọng nhất khi Vibe Coding. Code trên máy bạn (local) chưa ai thấy. Push lên GitHub (remote) rồi thì AI mới có thể hỗ trợ deploy hoặc review tiếp.',
    'Trong Vibe Coding, bạn thực tế chỉ cần hiểu 2 lệnh: git clone (tải về lần đầu) và git pull (cập nhật mới nhất). Các lệnh phức tạp khác sẽ do AI Agent xử lý cho bạn.',
  ],
  hosting: [
    'Hosting là "mảnh đất" kỹ thuật nơi website của bạn cư trú. Nếu không có hosting, code của bạn chỉ là những tập tin nằm im trên máy tính cá nhân.',
    'Sự khác biệt giữa Local và Hosting: Local là môi trường riêng tư của bạn, Hosting là môi trường công cộng 24/7.',
    'Downtime (Thời gian chết): Là khi hosting gặp sự cố và người dùng không thể truy cập web. Với marketer, downtime đồng nghĩa với việc lãng phí ngân sách quảng cáo (ads đốt vào trang lỗi).',
  ],
  merge: [
    'Merge là "điểm hội quân". Sau khi mọi người đi đánh lẻ trên các branch riêng, merge là lúc tất cả thành quả được gom lại một chỗ.',
    'Có 2 loại merge phổ biến: Fast-forward (Git chỉ cần "kéo" mốc thời gian lên vì không có thay đổi nào chéo nhau) và Three-way merge (Git tạo ra một commit mới để gộp hai dòng lịch sử khác biệt).',
    'Quy tắc an toàn: Trước khi merge nhánh của mình vào main, hãy merge main ngược lại vào nhánh mình trước để giải quyết mọi conflict ở "sân nhà" cho an toàn.',
  ],
  conflict: [
    'Conflict không phải là lỗi hệ thống. Nó là một thông báo: "Có hai ý kiến khác nhau ở đây, con người hãy vào quyết định đi".',
    'Nhận diện Conflict nhanh qua các marker: <<<<<<< HEAD (phần của bạn), ======= (vách ngăn), >>>>>>> branch-name (phần của team).',
    'Đừng hoảng loạn khi thấy file đầy dấu <<<<<<<. Chỉ cần xóa các dấu marker này và giữ lại nội dung bạn muốn, sau đó commit là xong.',
    'Cách tốt nhất để tránh Conflict là Pull code mới nhất thường xuyên. Càng để lâu không sync với team, xác suất đụng hàng càng cao.',
    'Trong Cursor/VS Code, bạn có các nút bấm nhanh như "Accept Current Change", "Accept Incoming Change" để fix conflict trong 1 giây mà không cần xóa marker thủ công.',
  ],
  contrast: [
    'Độ tương phản không chỉ là màu sắc. Nó còn là sự khác biệt về kích thước (Size), độ dày (Weight) và khoảng cách (Spacing) để tạo ra sự phân cấp rõ rệt.',
    'Tiêu chuẩn WCAG 2.1: Đây là "luật chơi" toàn cầu. Mức AA yêu cầu tỉ lệ 4.5:1 cho chữ thường. Nếu không đạt, người khiếm thị hoặc người dùng trong môi trường chói sáng sẽ không đọc được web của bạn.',
    'Tương phản nội dung: Đừng để mọi thứ đều nổi bật. Nếu bạn dùng màu cam cho tất cả các nút, thì không có nút nào thực sự "tương phản" với phần còn lại. Hãy dùng tương phản để dẫn dắt hành động (CTA).',
    'Kiểm tra bằng công cụ: AI có thể giúp bạn tính toán ratio chính xác. Chỉ cần hỏi "Màu #E88C2E trên nền #16161b có đạt chuẩn AA không?" và AI sẽ trả lời ngay kết quả ratio.',
    'Mô phỏng 4 ô bên dưới giúp bạn hình dung các khía cạnh khác nhau: từ tính đọc hiểu (Legibility) đến việc tạo ra thứ tự ưu tiên (Hierarchy) và nhận diện trạng thái (State).',
  ],
};

export function getTermById(id: string) {
  return terms.find((term) => term.id === id);
}

export function getTermViewMode(term: GlossaryTerm): TermViewMode {
  return deepDiveTermIds.has(term.id) ? 'page' : 'modal';
}

export function getTermDeepDiveNotes(term: GlossaryTerm) {
  return deepDiveNotes[term.id] ?? [];
}
