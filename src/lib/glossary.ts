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
};

export type TermViewMode = 'modal' | 'page';

export const terms: GlossaryTerm[] = [
  { id: 'api', name: 'API', nameEn: 'API / API Key', letter: 'A', groups: ['infra', 'code'], definition: 'Với marketer mới học AI, API thường được hiểu thực tế là API key: một mã bí mật lấy từ nền tảng AI để app của bạn được phép gọi model. Nếu lộ key, người khác có thể dùng ké quota và làm bạn mất tiền.', example: 'Mình muốn dùng model AI trong app chat nội bộ. Cần vào platform lấy API key, lưu vào file .env, rồi mới gọi AI được. API key không nên dán thẳng lên giao diện hay đưa lên GitHub.', related: ['endpoint', 'webhook', 'request'], demo: { kind: 'interactive', src: 'gif-api-demo.html', alt: 'Mô phỏng cách lấy API key từ nền tảng AI rồi copy về app' } },
  { id: 'array', name: 'Array', nameEn: 'Mảng / Danh sách', letter: 'A', groups: ['code'], definition: 'Danh sách các item được xếp theo thứ tự. Giống như một cột Excel — mỗi ô là một item. Array trong code thường trông như này: ["Hà Nội", "TP.HCM", "Đà Nẵng"].', example: 'AI trả về "danh sách categories" — đó thường là một array mà code của bạn sẽ loop qua để hiển thị từng cái.', related: ['loop', 'database'] },
  { id: 'asset', name: 'Asset', nameEn: 'Tài nguyên thiết kế', letter: 'A', groups: ['design'], definition: 'Tất cả file hình ảnh, icon, font, video dùng trong sản phẩm. Khi vibecode, AI thường hỏi "Asset đâu?" — tức là nó cần file ảnh/icon để gắn vào code.', example: 'Folder /assets/images/ chứa toàn bộ ảnh của campaign. Prompt cho AI: "dùng ảnh từ /assets/images/hero.jpg cho phần hero section".' },
  { id: 'auth', name: 'Auth', nameEn: 'Authentication / Đăng nhập', letter: 'A', groups: ['infra'], definition: 'Auth là lớp kiểm tra danh tính người dùng trước khi cho vào hệ thống. Hiểu đơn giản: web cần biết bạn là ai, đăng nhập bằng cách nào, và có được phép vào khu vực đó không. Với marketer làm tool nội bộ, auth thường đi kèm Google login, email admin, session đăng nhập, và rule như “chỉ email công ty mới được vào”.', example: 'Prompt: "Thêm đăng nhập bằng Google cho tool này, chỉ email @company.com mới vào được dashboard, nếu đã có session cũ thì cho vào nhanh hơn." Đây là cách dùng auth rất thực tế.', related: ['session', 'token'], demo: { kind: 'interactive', src: 'gif-auth-demo.html', alt: 'Mô phỏng auth theo 4 trạng thái: chưa login, đúng team, sai domain, còn session' } },
  { id: 'async', name: 'Async / Await', nameEn: 'Bất đồng bộ', letter: 'A', groups: ['code'], definition: 'Cách xử lý tác vụ mất thời gian mà không làm đơ cả trang. Giống như đặt cà phê mang đi — bạn không đứng chờ, bạn làm việc khác, cà phê xong thì nhận.', example: 'Khi form submit, trang không bị đơ mà hiện loading spinner — đó là async đang chạy ngầm để gửi data lên server.' },
  { id: 'border', name: 'Border', nameEn: 'Viền / Đường kẻ bao quanh', letter: 'B', groups: ['design', 'code'], definition: 'Đường viền bao quanh một element. Gồm 3 thuộc tính: style (kiểu đường), width (độ dày), và color (màu). Border là công cụ quan trọng để phân tách các khối nội dung và tạo điểm nhấn thị giác.', example: 'Prompt: "Thêm viền 1px màu xám nhạt cho các card sản phẩm, riêng card đang được chọn thì đổi viền sang màu cam 2px để làm nổi bật."', related: ['padding', 'radius', 'card'], demo: { kind: 'interactive', src: 'gif-border-demo.html', alt: 'Mô phỏng 4 thuộc tính border: style, width, color và sides' } },
  { id: 'breakpoint', name: 'Breakpoint', nameEn: 'Điểm ngắt layout', letter: 'B', groups: ['design', 'code'], definition: 'Điểm dừng kỹ thuật mà tại đó giao diện web tự động thay đổi cấu trúc (layout) để phù hợp với kích thước màn hình. Ví dụ: từ 4 cột trên Desktop nhảy sang 1 cột trên Mobile. Hiểu về breakpoint giúp marketer feedback chính xác vùng màn hình bị lỗi thay vì nói "màn hình nhỏ" chung chung.', example: 'Prompt: "Ở breakpoint mobile (dưới 768px), hãy ẩn bớt các cột không quan trọng và chuyển menu sang dạng hamburger để giao diện gọn hơn."', related: ['responsive', 'mobile-first', 'layout'], demo: { kind: 'interactive', src: 'gif-breakpoint-demo.html', alt: 'Mô phỏng 4 mốc breakpoint phổ biến: Mobile, Tablet, Laptop, Desktop' } },
  { id: 'backend', name: 'Backend', nameEn: 'Phần sau / Server', letter: 'B', groups: ['infra', 'code'], definition: 'Phần người dùng không thấy — nơi data được lưu, xử lý, và bảo mật. Nếu frontend là mặt tiền cửa hàng, backend là kho hàng và văn phòng phía sau.', example: '"Form đăng ký của tôi lưu data ở đâu?" → Supabase là backend.', related: ['frontend', 'database'], demo: { kind: 'interactive', src: 'gif-backend-demo.html', alt: 'Mô phỏng 4 tầng backend: API, DB, Auth, Jobs' } },
  { id: 'build', name: 'Build', nameEn: 'Đóng gói / Compile', letter: 'B', groups: ['infra'], definition: 'Quá trình biến code thô thành file tối ưu để đưa lên internet. Giống như in ấn trước khi phát hành tài liệu.', example: '"Build failed" = quá trình đóng gói bị lỗi trước khi deploy. Thường do code bị lỗi syntax hoặc thiếu package.', related: ['deploy', 'environment'] },
  { id: 'boolean', name: 'Boolean', nameEn: 'True / False', letter: 'B', groups: ['code'], definition: 'Kiểu dữ liệu chỉ có 2 giá trị: đúng hoặc sai (true/false). Dùng để kiểm soát logic — ví dụ: "isLoggedIn: true" nghĩa là người dùng đã đăng nhập.', example: 'Prompt: "Thêm tính năng toggle — khi bật thì hiện banner, khi tắt thì ẩn." AI sẽ dùng boolean showBanner: true/false.' },
  { id: 'breadcrumb', name: 'Breadcrumb', nameEn: 'Đường dẫn liên kết', letter: 'B', groups: ['design', 'code'], definition: 'Một dãy các liên kết giúp người dùng xác định vị trí hiện tại của mình trong cấu trúc website và dễ dàng quay lại các cấp cao hơn. Giúp công cụ tìm kiếm hiểu cấu trúc website và hiển thị kết quả tìm kiếm thân thiện hơn. Giảm tỷ lệ thoát khuyến khích người dùng khám phá thêm các danh mục khác', example: 'Trang "MacBook Pro 14" có breadcrumb: Home > Laptops > MacBook Pro 14. Marketer dùng breadcrumb để tăng UX và giúp Google hiểu cấu trúc trang tốt hơn (SEO).', related: ['url', 'hierarchy', 'navigation'], demo: { kind: 'interactive', src: 'gif-breadcrumb-demo.html', alt: 'Mô phỏng các loại breadcrumb: Hierarchy, Location, Multi-level và Collapsed' } },
  { id: 'cache', name: 'Cache', nameEn: 'Bộ nhớ đệm', letter: 'C', groups: ['infra'], definition: 'Lưu tạm kết quả để lần sau truy cập nhanh hơn. Giống như nhớ đường đi — lần đầu phải tra bản đồ, lần sau thuộc rồi đi liền.', example: '"Tôi sửa web rồi nhưng người dùng vẫn thấy phiên bản cũ" → Vấn đề cache. Xóa cache hoặc hard reload (Ctrl+Shift+R).' },
  { id: 'card', name: 'Card', nameEn: 'Thẻ nội dung', letter: 'C', groups: ['design', 'code'], definition: 'Một khối chứa thông tin — gom ảnh, tiêu đề, mô tả, nút hành động vào một hộp. Card giúp phân tách các nội dung khác nhau trên trang một cách rõ ràng và dễ quét.', example: 'Product card cho sản phẩm, Blog card cho bài viết. Card là đơn vị cơ bản nhất để build các trang kiểu Dashboard hoặc Landing Page.', related: ['component', 'padding', 'radius'], demo: { kind: 'interactive', src: 'gif-card-demo.html', alt: 'Mô phỏng các loại card: Basic, Horizontal, Featured, Stats' } },
  { id: 'cli', name: 'CLI', nameEn: 'Command Line Interface', letter: 'C', groups: ['infra'], definition: 'Giao diện dòng lệnh — bạn gõ lệnh chữ thay vì click. Terminal trong VS Code là CLI. Claude Code chạy trên CLI.', example: 'Gõ "npm run dev" vào terminal = CLI đang chạy lệnh khởi động server. Chỉ cần biết copy-paste đúng lệnh.', related: ['terminal', 'npm'] },
  { id: 'commit', name: 'Commit', nameEn: 'Lưu checkpoint code', letter: 'C', groups: ['workflow', 'code'], definition: 'Hành động lưu lại một điểm trong lịch sử code. Giống như Save game — bạn có thể quay lại đây bất cứ lúc nào nếu AI làm vỡ project.', example: 'Sau khi hero section chạy ổn: "git commit -m \'hero section done\'". Dù AI có làm hỏng phần sau, bạn vẫn rollback về được.', related: ['git', 'repository'] },
  { id: 'component', name: 'Component', nameEn: 'Khối giao diện tái dùng', letter: 'C', groups: ['code', 'design'], definition: 'Một khối giao diện độc lập, có thể dùng lại nhiều lần. Button, card sản phẩm, navbar, form — đều là component. Thiết kế một lần, dùng ở khắp nơi trong web.', example: '"Tôi có 12 trang web nhưng muốn cùng 1 footer." Đây là lúc dùng Footer component — sửa một chỗ, cập nhật khắp nơi.', related: ['props', 'state'], demo: { kind: 'interactive', src: 'gif-component-demo.html', alt: 'Mô phỏng 4 loại component phổ biến và code minh họa' } },
  { id: 'context-window', name: 'Context Window', nameEn: 'Bộ nhớ làm việc của AI', letter: 'C', groups: ['ai'], definition: 'Lượng text tối đa AI có thể "đọc" và xử lý trong một lần. Khi conversation quá dài, AI bắt đầu quên phần đầu.', example: '"Mình đã prompt rất nhiều nhưng AI bắt đầu sai lung tung" → Context window đầy rồi. Mở conversation mới và tóm tắt lại yêu cầu.', related: ['prompt', 'model'] },
  { id: 'css', name: 'CSS', nameEn: 'Cascading Style Sheets', letter: 'C', groups: ['design', 'code'], definition: 'Ngôn ngữ kiểm soát giao diện — màu sắc, kích thước, khoảng cách, font, layout. Nếu HTML là khung xương thì CSS là da thịt và quần áo.', example: 'Prompt: "Đổi màu nền hero section sang màu kem #f5f0e8, chữ heading to hơn, thêm padding trên dưới." → AI sẽ chỉnh CSS.', related: ['tailwind', 'flexbox'] },
  { id: 'deploy', name: 'Deploy', nameEn: 'Triển khai / Đưa lên server', letter: 'D', groups: ['infra', 'workflow'], definition: 'Quá trình đưa code từ môi trường bạn đang vibecode (như Cursor/Claude Code) lên server thực tế để mọi người truy cập. Quy trình này thường diễn ra tự động qua GitHub và Vercel: mỗi khi bạn "push" code mới, hệ thống sẽ tự động Build, Test và cập nhật bản Live. Nếu bản mới bị lỗi, bạn có thể dễ dàng Rollback về bản cũ trong tích tắc.', example: 'Sau khi bảo AI sửa xong giao diện, bạn gõ lệnh push. Vercel tự động nhận diện và chạy pipeline deploy. 5 phút sau, bạn thấy thay đổi xuất hiện trên link web chính thức của dự án.', related: ['build', 'vercel', 'git'], demo: { kind: 'interactive', src: 'gif-deploy-demo.html', alt: 'Mô phỏng quy trình deploy từ khi push code đến khi thành công hoặc rollback' } },
  { id: 'database', name: 'Database', nameEn: 'Cơ sở dữ liệu', letter: 'D', groups: ['data'], definition: 'Nơi lưu trữ dữ liệu có cấu trúc. Giống như file Excel khổng lồ nhưng nhanh hơn, an toàn hơn. Supabase, PostgreSQL là ví dụ phổ biến.', example: '"Mỗi khi khách submit form, thông tin được lưu vào Supabase database" — một bảng, mỗi hàng là một submission.', demo: { kind: 'interactive', src: 'gif-database-demo.html', alt: 'Mô phỏng 4 tầng Database: Table, Relations, SQL, Architecture' } },
  { id: 'dependency', name: 'Dependency', nameEn: 'Thư viện phụ thuộc', letter: 'D', groups: ['code'], definition: 'Code của người khác mà project bạn dùng. Giống như nguyên liệu đầu vào — bạn không tự làm bơ, bạn mua từ ngoài. npm install là lệnh cài dependency.', example: '"module not found" error = project đang cần một dependency chưa được cài. Paste lỗi cho AI, nó sẽ chạy lệnh cài giúp.' },
  { id: 'dom', name: 'DOM', nameEn: 'Document Object Model', letter: 'D', groups: ['code', 'design'], definition: 'Cách trình duyệt "nhìn" trang web — một cây cấu trúc của tất cả elements. JavaScript tương tác với DOM để thay đổi trang mà không cần reload.', example: 'Khi bạn click nút và counter tăng lên mà trang không reload — JavaScript đang update DOM trực tiếp.' },
  { id: 'dynamic', name: 'Dynamic', nameEn: 'Nội dung động', letter: 'D', groups: ['code'], definition: 'Nội dung thay đổi theo người dùng, thời gian, hoặc dữ liệu — không cố định. Trang profile mỗi user khác nhau = dynamic. Trang giới thiệu công ty = static.', example: '"Hiển thị số lượt view theo thời gian thực" = dynamic content. Mỗi lần load là fetch data mới từ database.', related: ['static'] },
  { id: 'endpoint', name: 'Endpoint', nameEn: 'Điểm cuối API', letter: 'E', groups: ['infra'], definition: 'URL cụ thể để gọi một chức năng của API. Giống như số điện thoại của từng phòng ban — muốn đặt đồ ăn thì gọi số này, muốn hỏi hóa đơn thì gọi số kia.', example: '"POST /api/subscribe" là endpoint nhận email đăng ký. "GET /api/posts" là endpoint lấy danh sách bài viết.', related: ['api', 'request'] },
  { id: 'environment', name: 'Environment', nameEn: 'Môi trường chạy', letter: 'E', groups: ['infra'], definition: 'Ngữ cảnh code đang chạy — máy của bạn (local/dev), server test (staging), hoặc bản thật (production). Mỗi environment có config và database riêng.', example: '"localhost:3000" = local environment. "yourapp.vercel.app" = production environment. Test kỹ ở local trước khi deploy.', related: ['env', 'localhost'] },
  { id: 'env', name: '.env', nameEn: 'Environment Variables', letter: 'E', groups: ['infra'], definition: 'File chứa các biến bí mật — API key, password database, token. Không bao giờ upload file này lên GitHub. Vercel cho phép set env variables trong dashboard.', example: '"NEXT_PUBLIC_SUPABASE_KEY=xxx" trong file .env — đây là API key để connect với Supabase.' },
  { id: 'frontend', name: 'Frontend', nameEn: 'Phần giao diện người dùng', letter: 'F', groups: ['design', 'code'], definition: 'Tất cả những gì người dùng nhìn thấy và tương tác — buttons, form, layout, màu sắc, animation. HTML + CSS + JavaScript là frontend.', example: '"Tôi muốn thêm một section FAQ với accordion expand/collapse" — đây là frontend task, AI dùng Cursor để viết component này.', related: ['backend', 'component'], demo: { kind: 'interactive', src: 'gif-frontend-demo.html', alt: 'Mô phỏng 4 loại frontend: Static, Dynamic, Components, Responsive' } },
  { id: 'footer', name: 'Footer', nameEn: 'Chân trang', letter: 'F', groups: ['design', 'code'], definition: 'Phần cuối trang web — thường chứa thông tin liên hệ, logo, các liên kết phụ (sitemap), newsletter và bản quyền. Footer là component mang tính hệ thống, giúp người dùng không bao giờ rơi vào "ngõ cụt" khi kéo xuống hết trang.', example: 'Footer của markAI chứa logo, link tới các bài blog, fanpage và thông tin công ty. Chỉ cần sửa component Footer, toàn bộ các trang trên web sẽ được cập nhật phần cuối đồng loạt.', related: ['component', 'navbar', 'interface'], demo: { kind: 'interactive', src: 'gif-footer-demo.html', alt: 'Mô phỏng các loại Footer phổ biến và cấu trúc từng phần' } },
  { id: 'flexbox', name: 'Flexbox', nameEn: 'Hệ thống layout 1 chiều', letter: 'F', groups: ['design', 'code'], definition: 'Cách sắp xếp elements theo hàng ngang hoặc cột dọc. Khi bạn muốn "3 cái card nằm ngang và cách nhau đều" — đó là flexbox.', example: 'Prompt: "Icon và text nằm trên cùng một hàng, icon bên trái, khoảng cách 8px." → AI dùng flexbox.', related: ['grid', 'padding'] },
  { id: 'framework', name: 'Framework', nameEn: 'Khung làm việc', letter: 'F', groups: ['infra', 'code'], definition: 'Bộ khung có sẵn giúp bạn không phải xây từ đầu. Next.js là framework cho web — nó đã lo routing, SEO, performance. Bạn chỉ cần tập trung vào logic và giao diện.', example: 'markAI.vn dùng Next.js framework + Tailwind CSS framework. Hai thứ này cùng nhau giúp vibecoder build web chuyên nghiệp.' },
  { id: 'function', name: 'Function', nameEn: 'Hàm / Khối code tái dùng', letter: 'F', groups: ['code'], definition: 'Một khối code làm một việc cụ thể, có thể gọi đi gọi lại. Giống như quy trình SOP — viết một lần, áp dụng nhiều lần.', example: '"Hàm formatDate() nhận ngày tháng và trả về dạng \'DD/MM/YYYY\'" — gọi function này ở bất kỳ đâu trong app.' },
  { id: 'git', name: 'Git', nameEn: 'Hệ thống quản lý phiên bản', letter: 'G', groups: ['workflow'], definition: 'Công cụ lưu lịch sử thay đổi của code. Giống như Track Changes trong Word nhưng mạnh hơn. Cho phép quay lại bất kỳ phiên bản nào trong quá khứ.', example: 'AI làm vỡ project → "git stash" để undo hết thay đổi chưa save, quay về trạng thái ổn. Đây là lifesaver khi vibecode gặp sự cố.', related: ['commit', 'repository'] },
  { id: 'grid', name: 'Grid', nameEn: 'Hệ thống layout lưới', letter: 'G', groups: ['design', 'code'], definition: 'Hệ thống các đường kẻ ngang và dọc (lưới) dùng để sắp xếp các thành phần trên trang web một cách ngăn nắp. 12 cột là "tiêu chuẩn vàng" vì nó dễ dàng chia thành 2, 3, 4, hoặc 6 phần đều nhau.', example: 'Khi bạn muốn "3 bài blog trên 1 hàng", bạn đang dùng Grid 12 cột với mỗi bài chiếm 4 cột. Prompt: "Dùng grid 12 cột, mỗi card sản phẩm chiếm 3 cột trên desktop và 6 cột trên tablet".', related: ['flexbox', 'responsive', 'breakpoint'], demo: { kind: 'interactive', src: 'gif-grid-demo.html', alt: 'Mô phỏng hệ thống Grid layout: 8, 12, 16 cột và Nested Grid' } },
  { id: 'github', name: 'GitHub', nameEn: 'Cloud lưu code', letter: 'G', groups: ['workflow'], definition: 'Nơi lưu code trên cloud — giống Google Drive nhưng cho code, với full lịch sử thay đổi. Vercel kết nối với GitHub để tự động deploy mỗi khi bạn push code mới.', example: 'Flow chuẩn: code trên máy → commit → push lên GitHub → Vercel tự build và deploy → có link live trong vài phút.', related: ['git', 'vercel'] },
  { id: 'hook', name: 'Hook', nameEn: 'Móc chức năng React', letter: 'H', groups: ['code'], definition: 'Hàm đặc biệt trong React để quản lý state và side effects. useEffect, useState là các hook phổ biến. AI tự viết hook cho bạn.', example: '"Khi trang load, tự động fetch danh sách sản phẩm từ database" — AI dùng useEffect hook để chạy logic này khi component mount.' },
  { id: 'hosting', name: 'Hosting', nameEn: 'Lưu trữ web', letter: 'H', groups: ['infra'], definition: 'Dịch vụ cung cấp "chỗ ở" cho web của bạn trên internet. Vercel là hosting miễn phí tốt nhất cho Next.js project. Không cần biết server — Vercel lo hết.', example: '"Tôi cần hosting cho web campaign" → Dùng Vercel (miễn phí, dễ setup, tự động deploy từ GitHub).', related: ['vercel', 'deploy'] },
  { id: 'inference', name: 'Inference', nameEn: 'AI xử lý và trả kết quả', letter: 'I', groups: ['ai'], definition: 'Quá trình AI nhận input (prompt của bạn) và tạo ra output (text, code, ảnh). Mỗi lần bạn hỏi AI và AI trả lời = một lần inference chạy trên server.', example: '"Inference cost" = chi phí mỗi lần gọi AI API. Khi dùng Claude API trong app, mỗi user message = một lần inference = một khoản phí nhỏ.' },
  { id: 'interface', name: 'Interface (UI)', nameEn: 'Giao diện người dùng', letter: 'I', groups: ['design'], definition: 'Tất cả những gì người dùng nhìn và chạm vào — không phải logic phía sau. UI tốt là UI mà người dùng không cần đọc hướng dẫn cũng dùng được.', example: '"Tôi muốn redesign UI của tool nội bộ" → Prompt: mô tả layout mới bạn muốn, AI viết component React với giao diện đó.' },
  { id: 'import', name: 'Import / Export', nameEn: 'Chia sẻ code giữa file', letter: 'I', groups: ['code'], definition: 'Cách một file dùng code từ file khác. Import = lấy vào. Export = chia sẻ ra. Khi AI tạo component, nó thường có "export default" để các trang khác import vào.', example: '"import Button from \'./Button\'" = trang này đang dùng component Button từ file Button.tsx. Nếu thiếu dòng này, component sẽ không hoạt động.' },
  { id: 'json', name: 'JSON', nameEn: 'Định dạng dữ liệu phổ biến', letter: 'J', groups: ['data', 'code'], definition: 'Định dạng text để trao đổi dữ liệu giữa hệ thống. Trông như: {"name": "Lan", "email": "lan@co.com"}. API thường trả về JSON.', example: 'Khi Airtable API trả dữ liệu, nó là JSON. Cursor/Claude sẽ parse JSON đó và hiển thị thành giao diện đẹp trên web.', related: ['api', 'request'] },
  { id: 'jsx', name: 'JSX', nameEn: 'JavaScript + HTML hợp nhất', letter: 'J', groups: ['code'], definition: 'Cú pháp viết HTML trong file JavaScript/TypeScript. React dùng JSX. Nhìn trông giống HTML nhưng có thêm logic. File .tsx là TypeScript + JSX.', example: 'Khi Cursor tạo component, nó tạo file .tsx với JSX. Chỉ cần biết đây là "HTML nâng cấp" mà AI viết cho bạn.' },
  { id: 'localhost', name: 'Localhost', nameEn: 'Server trên máy tính', letter: 'L', groups: ['infra'], definition: 'Môi trường chạy web ngay trên máy bạn — chỉ bạn thấy, internet không thấy. Địa chỉ thường là localhost:3000. Đây là nơi bạn test trước khi deploy.', example: '"npm run dev" → mở localhost:3000 trên browser → bạn thấy web của mình. Mỗi lần save file, web tự reload (hot reload).', related: ['port', 'deploy'] },
  { id: 'loop', name: 'Loop', nameEn: 'Lặp lại tự động', letter: 'L', groups: ['code'], definition: 'Tự động lặp lại một đoạn code với từng item trong danh sách. Khi bạn có 50 sản phẩm và muốn hiển thị card cho từng cái — loop xử lý việc đó.', example: '"Hiển thị tất cả bài blog từ Supabase" → AI viết loop map qua array posts, render BlogCard cho từng bài.' },
  { id: 'llm', name: 'LLM', nameEn: 'Large Language Model', letter: 'L', groups: ['ai'], definition: 'Mô hình AI được train trên lượng text khổng lồ để hiểu và tạo ngôn ngữ. Claude, GPT-4, Gemini đều là LLM. Đây là "não" của các AI tool bạn đang dùng.', example: '"Cursor dùng LLM nào?" → Cursor cho phép chọn model: Claude Sonnet, GPT-4o. Model = LLM cụ thể bạn đang chat với.', related: ['model', 'prompt'] },
  { id: 'letter-spacing', name: 'Letter Spacing', nameEn: 'Giãn cách ký tự / Tracking', letter: 'L', groups: ['design'], definition: 'Letter Spacing (hay Tracking) là khoảng cách giữa các ký tự trong một đoạn văn bản. Chỉnh letter spacing giúp chữ dễ đọc hơn hoặc tạo ra phong cách typography riêng biệt (ví dụ: chữ thưa ra cho cảm giác sang trọng).', example: 'Khi dùng font Serif cho tiêu đề, mình thường giảm nhẹ letter spacing để chữ trông chặt chẽ và chuyên nghiệp hơn. Prompt: "Giảm letter spacing của H1 xuống -0.02em."', related: ['spacing', 'typography'], demo: { kind: 'interactive', src: 'gif-letter-spacing-demo.html' } },
  { id: 'line-spacing', name: 'Line Spacing', nameEn: 'Giãn cách dòng / Leading', letter: 'L', groups: ['design'], definition: 'Line Spacing (hay Leading) là khoảng cách giữa các dòng trong một đoạn văn bản. Chỉnh line spacing phù hợp giúp khối văn bản dễ đọc, không bị dính vào nhau hoặc quá rời rạc.', example: 'Với đoạn văn bản dài, line spacing thường để mức 1.5 - 1.6 để mắt dễ theo dõi. Với tiêu đề, có thể để mức 1.1 - 1.2. Prompt: "Chỉnh line spacing của đoạn văn này lên 1.6."', related: ['spacing', 'typography'], demo: { kind: 'interactive', src: 'gif-line-spacing-demo.html', alt: 'Mô phỏng các mức line spacing từ chặt đến thoáng' } },
  { id: 'margin', name: 'Margin', nameEn: 'Khoảng cách ngoài element', letter: 'M', groups: ['design'], definition: 'Margin là khoảng trống nằm bên ngoài một element, dùng để tách nó ra khỏi các khối xung quanh. Nếu Padding là khoảng thở bên trong khung, thì Margin là khoảng cách giữa khung đó với phần còn lại của layout.', example: '"Landing page đang bị dính giữa hero, social proof và CTA." Prompt: "Tăng margin-bottom giữa các section lên 48px, riêng khối CTA cuối để 64px để tách rõ điểm hành động."', related: ['padding', 'spacing', 'flexbox', 'grid'], demo: { kind: 'interactive', src: 'gif-margin-demo.html', alt: 'Mô phỏng 4 mức margin phổ biến từ chặt đến thoáng' } },
  { id: 'model', name: 'Model', nameEn: 'Phiên bản AI', letter: 'M', groups: ['ai'], definition: 'Phiên bản cụ thể của một AI — như "Claude Sonnet 3.7" hay "GPT-4o". Mỗi model khác nhau về tốc độ, chi phí, và khả năng.', example: 'Trong Cursor: chọn model ở góc phải. Claude Sonnet 3.7 = tốt cho code phức tạp. Claude Haiku = nhanh hơn, rẻ hơn cho task đơn giản.' },
  { id: 'mcp', name: 'MCP', nameEn: 'Model Context Protocol', letter: 'M', groups: ['ai', 'workflow'], definition: 'Giao thức giúp AI kết nối trực tiếp với tool bên ngoài — Supabase, Vercel, Notion, GitHub. Thay vì copy-paste data cho AI, MCP cho phép AI tự đọc và thực hiện action.', example: '"Cursor với Supabase MCP" → AI có thể đọc schema database của bạn và tự viết query đúng cấu trúc.' },
  { id: 'navbar', name: 'Nav bar', nameEn: 'Thanh điều hướng / Navigation Bar', letter: 'N', groups: ['design', 'code'], definition: 'Thanh điều hướng nằm ở đầu (hoặc cạnh) mỗi trang — chứa logo, menu links, và nút hành động. Navbar giúp người dùng biết mình đang ở đâu và có thể đi đâu tiếp theo.', example: 'Prompt: "Thêm mục \'Pricing\' vào navbar, khi scroll xuống thì navbar nên có thêm bóng đổ và đổi màu nền."', related: ['component', 'sticky', 'link'], demo: { kind: 'interactive', src: 'gif-navbar-demo.html', alt: 'Mô phỏng các trạng thái của navbar: mặc định, scrolled, mobile và active' } },
  { id: 'npm', name: 'npm', nameEn: 'Node Package Manager', letter: 'N', groups: ['infra'], definition: 'Công cụ cài và quản lý thư viện code. Giống App Store nhưng cho code — gõ "npm install tên-thư-viện" là cài xong.', example: '"npm install" trong terminal = cài tất cả dependency của project. "npm run dev" = chạy server local. 2 lệnh này dùng hàng ngày khi vibecode.' },
  { id: 'nodejs', name: 'Node.js', nameEn: 'Môi trường chạy JavaScript', letter: 'N', groups: ['infra'], definition: 'Phần mềm cho phép chạy JavaScript ngoài trình duyệt — trên server, terminal. Next.js cần Node.js để chạy. Cài một lần, không cần hiểu sâu.', example: 'Lần đầu setup project: tải và cài Node.js từ nodejs.org → sau đó mọi lệnh npm đều dùng được.' },
  { id: 'padding', name: 'Padding', nameEn: 'Khoảng cách trong — không gian giữa nội dung và viền', letter: 'P', groups: ['design'], definition: 'Padding là khoảng trống nằm BÊN TRONG một element, tạo ra sự ngăn cách giữa nội dung (text, ảnh) và đường viền (border). Padding giúp nội dung "thở" được và dễ đọc hơn, không bị dính sát vào cạnh.', example: '"Nội dung dính sát vào viền card" → thiếu padding. Khi nói "thêm padding 16px" là yêu cầu nới rộng khoảng trống bên trong card để text trông thoáng hơn.', related: ['margin', 'spacing', 'css'], demo: { kind: 'interactive', src: 'gif-padding-demo.html', alt: 'Mô phỏng 4 mức padding từ không padding đến padding đều 4 cạnh' } },
  { id: 'props', name: 'Props', nameEn: 'Properties / Thuộc tính', letter: 'P', groups: ['code'], definition: 'Dữ liệu truyền vào component từ bên ngoài. Giống như thông số khi gọi món — cùng món Phở nhưng "không hành, thêm tái" là props khác nhau.', example: '<Button text="Đăng ký" color="accent" /> — "text" và "color" là props.' },
  { id: 'prompt', name: 'Prompt', nameEn: 'Câu lệnh cho AI', letter: 'P', groups: ['ai'], definition: 'Đoạn text bạn gửi cho AI để hướng dẫn nó làm việc. Prompt tốt = kết quả tốt. Prompt mơ hồ = AI đoán mò. Đây là kỹ năng quan trọng nhất trong vibecode.', example: 'Prompt tệ: "Làm trang web đẹp". Prompt tốt: "Tạo landing page Next.js có hero section, countdown 3 ngày, form email, màu brand #E8410A, responsive mobile."' },
  { id: 'port', name: 'Port', nameEn: 'Cổng kết nối', letter: 'P', groups: ['infra'], definition: 'Số định danh cho service đang chạy trên máy. localhost:3000 → port 3000 là Next.js. "Port already in use" = có app khác đang chiếm port đó.', example: '"Error: port 3000 is already in use" → Tắt terminal khác hoặc dùng port khác: "npm run dev -- --port 3001".' },
  { id: 'responsive', name: 'Responsive', nameEn: 'Thiết kế thích ứng', letter: 'R', groups: ['design', 'code'], definition: 'Khả năng trang web tự thay đổi layout để hiển thị tối ưu trên mọi thiết bị. Với Vibecode, bạn không cần vật lộn với CSS Media Queries phức tạp; chỉ cần ra lệnh cho AI xử lý các "điểm gãy" (breakpoints) để giao diện tự nhảy sang cấu trúc mới (ví dụ từ 4 cột sang 1 cột) một cách thông minh.', example: 'Khi thiết kế landing page, hãy bảo AI: "Làm responsive mobile-first, desktop hiện 3 cột nhưng mobile phải stack dọc 1 cột và ẩn bớt các ảnh nền nặng".', related: ['breakpoint', 'mobile-first', 'flexbox', 'grid'], demo: { kind: 'interactive', src: 'gif-responsive-demo.html', alt: 'Mô phỏng layout thay đổi theo Desktop, Tablet và Mobile' } },
  { id: 'request', name: 'Request / Response', nameEn: 'Yêu cầu / Phản hồi', letter: 'R', groups: ['infra'], definition: 'Cách client và server nói chuyện. Client gửi Request (yêu cầu), server trả Response (kết quả). Mỗi khi web load data từ API là một cặp Request-Response.', example: '"400 Bad Request" = server không hiểu yêu cầu. "404 Not Found" = không tìm thấy. "500 Server Error" = server bị lỗi.' },
  { id: 'repository', name: 'Repository', nameEn: 'Kho code', letter: 'R', groups: ['workflow'], definition: 'Thư mục project được Git quản lý, chứa toàn bộ code và lịch sử thay đổi. Mỗi project = một repository (repo). Lưu trên GitHub để có backup.', example: '"Tạo repo mới trên GitHub, clone về máy, code, commit, push." — Claude Code có thể làm hầu hết bước này.' },
  { id: 'state', name: 'State', nameEn: 'Trạng thái của component', letter: 'S', groups: ['code'], definition: 'Dữ liệu tạm thời bên trong component — thay đổi thì UI tự cập nhật. Số lượng sản phẩm trong giỏ hàng, tab đang active, filter đang chọn — đều là state.', example: '"Khi nhấn nút Thêm vào giỏ, số lượng tăng lên ngay mà không reload trang" → State đang quản lý số lượng đó.' },
  { id: 'supabase', name: 'Supabase', nameEn: 'Backend as a Service', letter: 'S', groups: ['data', 'infra'], definition: 'Nền tảng backend miễn phí — database, authentication, storage, realtime, tất cả trong một. Hầu hết vibecoder chọn Supabase vì không cần setup server.', example: '"Lưu form submissions, quản lý user đăng nhập, upload ảnh campaign" — Supabase xử lý hết 3 việc này.' },
  { id: 'spacing', name: 'Spacing', nameEn: 'Hệ thống khoảng cách', letter: 'S', groups: ['design'], definition: 'Spacing (khoảng cách/giãn cách) là thuật ngữ chỉ khoảng không gian giữa các yếu tố như chữ, dòng, đoạn văn trong soạn thảo (Word) hoặc các phần tử thiết kế đồ họa/website. Mục đích là tăng khả năng đọc hiểu và tạo bố cục cân đối. Nó bao gồm giãn dòng (line), khoảng cách đoạn (paragraph) và khoảng cách ký tự.', example: '"Trang trông lộn xộn" thường do spacing không nhất quán. Prompt: "Thống nhất spacing giữa các section thành 64px."', related: ['margin', 'padding', 'flexbox', 'grid'], demo: { kind: 'interactive', src: 'gif-spacing-demo.html', alt: 'Mô phỏng các mức spacing từ chặt đến thoáng' } },
  { id: 'stroke', name: 'Stroke', nameEn: 'Đường viền Vector', letter: 'S', groups: ['design', 'code'], definition: 'Đường viền trong thiết kế vector (SVG, Figma, icon). Khác với border (CSS), stroke có thể theo bất kỳ hình dạng nào — vòng tròn, đường cong, icon phức tạp. Có 3 thuộc tính chính: weight (độ dày), style (kiểu nét), corner (góc nối).', example: 'Feedback cho AI: "icon này nét quá mảnh, hãy tăng stroke-width lên 2px" hoặc "đổi stroke sang kiểu dashed cho các icon chưa hoàn thiện".', related: ['border', 'vector', 'css'], demo: { kind: 'interactive', src: 'gif-stroke-demo.html', alt: 'Mô phỏng các thuộc tính stroke: weight, style, corner và cap' } },
  { id: 'slider', name: 'Slider', nameEn: 'Thanh trượt chọn giá trị', letter: 'S', groups: ['design', 'code'], definition: 'Một control cho phép người dùng chọn một giá trị từ một dải (range) bằng cách di chuyển một "nút" (thumb) dọc theo một "đường chạy" (track). Slider rất hữu ích để điều chỉnh các thông số định lượng như âm lượng, độ sáng, hoặc các bộ lọc.', example: 'Prompt: "Thêm một slider để người dùng chọn độ mờ (opacity) cho ảnh, dải giá trị từ 0 đến 100, bước nhảy là 10."', related: ['input', 'control', 'ui'], demo: { kind: 'interactive', src: 'gif-slider-demo.html', alt: 'Mô phỏng các trạng thái của slider: mặc định, active, stepped và disabled' } },
  { id: 'typescript', name: 'TypeScript', nameEn: 'JavaScript có kiểu dữ liệu', letter: 'T', groups: ['code'], definition: 'Phiên bản JavaScript được bổ sung kiểu dữ liệu — giúp phát hiện lỗi trước khi chạy code. File .ts và .tsx là TypeScript.', example: '"Type error" trong terminal = TypeScript phát hiện bạn đang dùng sai kiểu dữ liệu. Paste lỗi cho AI, nó tự fix.' },
  { id: 'tailwind', name: 'Tailwind CSS', nameEn: 'Framework CSS dùng class', letter: 'T', groups: ['design', 'code'], definition: 'Thư viện CSS dùng class nhỏ để style trực tiếp trong HTML. Thay vì viết CSS riêng, bạn ghép class như Lego: "flex gap-4 bg-blue-500 text-white p-3".', example: 'Prompt: "Nút CTA màu cam đỏ, chữ trắng, padding 12px 24px, hover đổi màu tối hơn." → AI tạo className với Tailwind class.' },
  { id: 'ui', name: 'UI / UX', nameEn: 'User Interface / Experience', letter: 'U', groups: ['design'], definition: 'UI = giao diện (trông như thế nào). UX = trải nghiệm (dùng cảm giác ra sao). UI đẹp mà UX tệ là trang trông ổn nhưng khó dùng.', example: '"Form điền thông tin khó quá, user bỏ giữa chừng" = UX tệ dù UI đẹp. Prompt: "Chia form thành 3 bước, mỗi bước chỉ hỏi 2-3 field."' },
  { id: 'url', name: 'URL / Route', nameEn: 'Đường dẫn trang web', letter: 'U', groups: ['infra'], definition: 'Địa chỉ của trang web. Trong Next.js, route tương ứng với folder trong thư mục app/. Tạo file app/about/page.tsx = tạo URL /about tự động.', example: '"Tôi muốn trang /campaign/summer-2026" → Tạo file app/campaign/summer-2026/page.tsx. Next.js tự generate route.' },
  { id: 'vercel', name: 'Vercel', nameEn: 'Hosting cho Next.js', letter: 'V', groups: ['infra'], definition: 'Nền tảng deploy và hosting tốt nhất cho Next.js — miễn phí cho project cá nhân. Kết nối GitHub → push code → Vercel tự deploy.', example: 'vercel.com → New Project → Import GitHub repo → Deploy. Xong. Web live trong 2 phút với link yourapp.vercel.app.' },
  { id: 'vector', name: 'Vector / Embedding', nameEn: 'Biểu diễn số của text', letter: 'V', groups: ['ai', 'data'], definition: 'Cách AI chuyển text thành số để tính toán "sự tương đồng". Cho phép AI tìm nội dung liên quan, không chỉ tìm theo từ khóa.', example: '"Tìm kiếm sản phẩm bằng mô tả thay vì tên" — đây là semantic search dùng vector embedding. Supabase pgvector hỗ trợ tính năng này.' },
  { id: 'webhook', name: 'Webhook', nameEn: 'Thông báo tự động', letter: 'W', groups: ['infra'], definition: 'Cơ chế "gọi ngược" — khi có sự kiện xảy ra ở service A, nó tự thông báo cho service B. Chat app, live dashboard, notification realtime.', example: '"Khi có đơn hàng mới trên Shopify, tự gửi thông báo Slack" → Shopify webhook gọi URL của bạn → server nhận và gửi Slack.' },
  { id: 'wireframe', name: 'Wireframe', nameEn: 'Khung bố cục', letter: 'W', groups: ['design'], definition: 'Bản phác thảo layout của trang — chỉ có khung và vị trí, không có màu sắc hay nội dung thật. Dùng để thống nhất cấu trúc với team.', example: 'Vẽ wireframe trên Figma hoặc giấy → mô tả cho AI → AI code đúng layout đó. Wireframe giúp prompt rõ hơn nhiều.' },
  { id: 'websocket', name: 'WebSocket', nameEn: 'Kết nối thời gian thực', letter: 'W', groups: ['infra'], definition: 'Kết nối hai chiều liên tục giữa browser và server. Cho phép update realtime mà không cần reload. Chat app, live dashboard, notification realtime đều dùng WebSocket.', example: '"Muốn dashboard KPI cập nhật realtime khi có data mới" → Dùng Supabase Realtime (chạy trên WebSocket).' },
  { id: 'radius', name: 'Radius', nameEn: 'Bo góc / Border Radius', letter: 'R', groups: ['design'], definition: 'Độ cong ở 4 góc của một hình khối. 0px là góc vuông sắc cạnh. Giá trị càng lớn, góc càng tròn. Radius quyết định "vibe" của giao diện: từ cứng cáp, kỹ thuật đến mềm mại, thân thiện.', example: 'Prompt: "Làm nút bấm mềm hơn với border-radius 8px, riêng card sản phẩm thì bo mạnh 16px để tạo cảm giác thân thiện."', related: ['css', 'interface', 'element'], demo: { kind: 'interactive', src: 'gif-radius-demo.html', alt: 'Mô phỏng các mức border-radius từ sắc cạnh đến bo tròn' } },
  { id: 'corner', name: 'Corner', nameEn: 'Góc / Corner Radius', letter: 'C', groups: ['design'], definition: 'Thuật ngữ chỉ các góc của một khối hoặc đường nét. Trong thiết kế giao diện, "Corner" thường đi đôi với "Radius" (bo góc). Việc xử lý góc quyết định độ sắc hay mềm của tổng thể sản phẩm.', example: 'Prompt: "Làm cho các góc (corners) của card này bo mạnh hơn một chút, khoảng 12px để nhìn thân thiện hơn."', related: ['radius', 'stroke', 'border'], demo: { kind: 'interactive', src: 'gif-corner-demo.html', alt: 'Mô phỏng các loại corner radius phổ biến' } },
  { id: 'dropdown', name: 'Dropdown', nameEn: 'Menu thả xuống', letter: 'D', groups: ['design', 'code'], definition: 'Một thành phần giao diện cho phép người dùng chọn một giá trị từ danh sách các tùy chọn được ẩn đi và chỉ hiện ra khi click. Nó giúp tiết kiệm diện tích và giữ cho giao diện gọn gàng hơn so với việc liệt kê tất cả lựa chọn cùng lúc.', example: 'Prompt: "Thêm một dropdown để chọn category, mặc định là \'Tất cả\', khi chọn xong thì filter lại danh sách bài viết."', related: ['input', 'select', 'state'], demo: { kind: 'interactive', src: 'gif-dropdown-demo.html', alt: 'Mô phỏng các trạng thái của dropdown: mặc định, mở, đã chọn và disabled' } },
  { id: 'element', name: 'Element', nameEn: 'Thành phần giao diện', letter: 'E', groups: ['design', 'code'], definition: 'Đơn vị nhỏ nhất có thể nhận dạng trong giao diện người dùng — như nút bấm, ô nhập liệu, tiêu đề, hay ảnh. Một UI phức tạp là sự kết hợp của nhiều element được sắp xếp theo cấu trúc nhất định.', example: 'Prompt: "Thêm một element Input vào form này, bên dưới element Heading và bên trên element Button để user nhập mã giảm giá."', related: ['component', 'ui', 'interface', 'radius'], demo: { kind: 'interactive', src: 'gif-element-demo.html', alt: 'Mô phỏng các loại element phổ biến: Text, Button, Input, Other' } },
  { id: 'toggle', name: 'Toggle', nameEn: 'Nút bật/tắt / Switch', letter: 'T', groups: ['design', 'code'], definition: 'Một điều khiển giao diện có hai trạng thái đối lập: Bật (On/True) hoặc Tắt (Off/False). Toggle giúp thay đổi thiết lập ngay lập tức mà không cần qua các bước xác nhận phức tạp. Nó phản ánh trực tiếp logic nhị phân (Boolean) trong lập trình.', example: 'Nút bật/tắt "Chế độ tối", "Thông báo đẩy", hoặc "Chế độ bảo trì". Khi gạt sang phải là True, gạt sang trái là False.', related: ['boolean', 'state', 'interface', 'element'], demo: { kind: 'interactive', src: 'gif-toggle-demo.html', alt: 'Mô phỏng 4 trạng thái của toggle: Off, On, Disabled và Focus' } },
  { id: 'sidebar', name: 'Sidebar', nameEn: 'Thanh bên / Navigation Rail', letter: 'S', groups: ['design', 'code'], definition: 'Thanh điều hướng hoặc chứa thông tin bổ sung nằm ở cạnh trái hoặc phải của trang web. Sidebar giúp tận dụng chiều ngang của màn hình desktop để giữ các chức năng quan trọng luôn trong tầm tay mà không chiếm dụng không gian phía trên như Navbar.', example: 'Dashboard của các tool SaaS thường có sidebar bên trái để chuyển giữa các tính năng. Prompt: "Thêm một collapsible sidebar bên trái chứa các mục: Dashboard, Reports, Settings."', related: ['navbar', 'interface', 'layout'], demo: { kind: 'interactive', src: 'gif-sidebar-demo.html', alt: 'Mô phỏng các loại sidebar: Static, Collapsible, Overlay và Right' } },
  { id: 'accordion', name: 'Accordion', nameEn: 'Danh sách mở rộng / Thu gọn', letter: 'A', groups: ['design', 'code'], definition: 'Một thành phần giao diện cho phép ẩn/hiện nội dung chi tiết bằng cách nhấp vào tiêu đề. Accordion giúp tối ưu hóa không gian hiển thị, đặc biệt hữu ích cho các trang FAQ, cấu hình cài đặt hoặc các khối thông tin dài cần phân loại.', example: 'Prompt: "Làm một accordion cho phần Câu hỏi thường gặp, mặc định đóng hết, khi mở cái này thì cái kia tự đóng để tiết kiệm diện tích."', related: ['component', 'interface', 'element', 'card'], demo: { kind: 'interactive', src: 'gif-accordion-demo.html', alt: 'Mô phỏng các loại accordion: Single Open, Multiple Open, With Icons và In Card' } },
  { id: 'header', name: 'Header', nameEn: 'Đầu trang / Hero Area', letter: 'H', groups: ['design', 'code'], definition: 'Vùng phía trên cùng của trang — thường gồm navbar (logo + menu) và đôi khi thêm hero banner + nút CTA. Header là "vùng chứa" lớn hơn navbar, xuất hiện ngay lập tức khi user truy cập và thường được giữ cố định (sticky) khi cuộn trang.', example: 'Khi marketer yêu cầu "thêm banner vào header", dev sẽ đưa khối hình ảnh/text lớn vào dưới navbar. Header chuyên nghiệp giúp định vị thương hiệu và dẫn dắt hành động (CTA) ngay từ giây đầu tiên.', related: ['navbar', 'component', 'sticky', 'interface'], demo: { kind: 'interactive', src: 'gif-header-demo.html', alt: 'Mô phỏng các trạng thái của header: Default, Scrolled, CTA Focus và Mobile Menu' } },
];

export const quickRefItems = [
  ['Push lên main', 'Upload code mới nhất lên GitHub nhánh chính → Vercel tự deploy.'],
  ['Cần refactor', 'Viết lại code cho gọn hơn, không thêm tính năng. AI làm được.'],
  ['Build failed', 'Code có lỗi, không deploy được. Paste log lỗi cho AI để fix.'],
  ['Cần API key', 'Mã bí mật để dùng service bên ngoài. Lấy từ dashboard, paste vào .env.'],
  ['Schema database', 'Cấu trúc bảng trong database — có những cột gì, kiểu dữ liệu gì.'],
  ['Hydration error', 'Server render khác client render. Paste lỗi cho AI, thường fix được nhanh.'],
  ['500 error', 'Server bị lỗi. Xem log trên Vercel dashboard hoặc terminal.'],
  ['CORS error', 'API không cho phép domain của bạn gọi. Cần config whitelist hoặc dùng proxy.'],
] as const;

export const ctaLessons = [
  { num: '03', title: 'Cài gì vào máy để bắt đầu vibecode?', to: '/vibecode/cai-dat-moi-truong', arrow: '→' },
  { num: '04', title: 'Làm quen VS Code & Cursor', to: '/vibecode/lam-quen-vscode-cursor', arrow: '→' },
  { num: '05', title: 'Làm quen Claude Code', to: '/vibecode/lam-quen-claude-code', arrow: '→' },
  { num: '01', title: 'Quay lại Bài 01 · Vibecode là gì?', to: '/vibecode/vibecode-la-gi', arrow: '↩' },
] as const;

export const groupLabels: Record<TermGroup | 'all', string> = { all: 'Tất cả', code: 'Code', design: 'Design', infra: 'Hạ tầng', data: 'Data', ai: 'AI', workflow: 'Workflow' };
export const glossaryTickerItems = ['✳ Glossary · 60+ từ điển chuyên ngành cho dân Marketing', '✳ Giải thích bằng ngôn ngữ Marketer', '✳ Code · Design · Infra · Data · AI · Workflow', '✳ Miễn phí 100% · mãi mãi', '✳ Vibecode · Blog · Tips · Prompt Library', '✳ Dành riêng dân Marketing Việt Nam'];
export const termsByLetter = terms.reduce((acc, term) => ((acc[term.letter] ??= []).push(term), acc), {} as Record<string, GlossaryTerm[]>);
export const letters = Object.keys(termsByLetter).sort();
export const totalGroupCounts = (['code', 'design', 'infra', 'data', 'ai', 'workflow'] as TermGroup[]).reduce((acc, group) => ((acc[group] = terms.filter((term) => term.groups.includes(group)).length), acc), { all: terms.length } as Record<TermGroup | 'all', number>);

const deepDiveTermIds = new Set([
  'api',
  'auth',
  'accordion',
  'async',
  'backend',
  'border',
  'breadcrumb',
  'breakpoint',
  'build',
  'card',
  'component',
  'corner',
  'database',
  'deploy',
  'dropdown',
  'element',
  'env',
  'footer',
  'frontend',
  'grid',
  'header',
  'json',
  'margin',
  'letter-spacing',
  'line-spacing',
  'mcp',
  'navbar',
  'padding',
  'request',
  'radius',
  'responsive',
  'sidebar',
  'slider',
  'spacing',
  'stroke',
  'supabase',
  'toggle',
  'webhook',
  'websocket',
]);

const deepDiveNotes: Partial<Record<string, string[]>> = {
  api: [
    'Nghĩ theo kiểu marketer: API là chiếc ống nối giữa tool A và tool B, để dữ liệu tự chảy thay vì bạn copy tay.',
    'Chỉ cần nhớ 3 mảnh chính: endpoint để gọi đúng chỗ, request là dữ liệu mình gửi đi, response là thứ hệ thống trả về.',
  ],
  auth: [
    'Auth không chỉ là nút đăng nhập. Nó còn quyết định ai được vào, vào bằng cách nào, và sau khi vào thì được thấy phần gì.',
    'Với tool nội bộ, rule phổ biến là chỉ cho email công ty truy cập. Với sản phẩm public thì còn có session, logout, và reset mật khẩu.',
  ],
  accordion: [
    'Accordion là giải pháp tuyệt vời để quản lý nội dung dài mà không làm người dùng bị choáng ngợp (information overload).',
    'Hai chế độ quan trọng: Single Open (chỉ mở 1 cái) giúp tập trung, và Multiple Open (mở nhiều cái) giúp so sánh dữ liệu dễ hơn.',
    'Khi prompt AI, hãy nói rõ bạn muốn Single hay Multiple Open để AI viết đúng logic xử lý state ngay từ đầu.',
  ],
  border: [
    'Border là đường viền của element. Thiếu style (ví dụ style="none") thì border sẽ biến mất hoàn toàn dù bạn có set width và color.',
    'Shorthand border: 1px solid black là cách viết cực nhanh cho 4 cạnh giống nhau. Nếu chỉ muốn gạch chân, hãy dùng border-bottom.',
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
  dropdown: [
    'Dropdown không chỉ là "cái hộp bấm ra list" — nó là một input quan trọng trong form, có value thật và state thật (mở/đóng, đã chọn/chưa chọn).',
    'Khi mô tả yêu cầu cho AI, hãy nêu rõ: danh sách option, giá trị mặc định, và có cho phép chọn nhiều (multi-select) hay không.',
    'Chú ý trạng thái "Disabled": Dùng khi user chưa đủ điều kiện để chọn (ví dụ: chưa chọn Tỉnh thành thì chưa cho chọn Quận huyện).',
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
  header: [
    'Header là "vùng chứa" (container), còn Navbar là "thành phần" (component) nằm bên trong. Marketer nên phân biệt rõ để feedback chính xác: sửa menu là sửa navbar, còn thêm banner/ảnh nền là sửa header.',
    'Trạng thái "Scrolled" rất quan trọng: thường header sẽ thu nhỏ lại hoặc thêm shadow để tiết kiệm diện tích nhưng vẫn giữ được các nút điều hướng quan trọng nhất.',
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
