export type DictionaryCategoryKey = 'code' | 'design' | 'infra' | 'data' | 'ai' | 'workflow';

export interface DictionaryCategoryInfo {
  name: string;
  dot: string;
}

export const DICTIONARY_CATEGORIES: Record<DictionaryCategoryKey, DictionaryCategoryInfo> = {
  code: { name: 'Code', dot: '#141414' },
  design: { name: 'Design', dot: '#E8772E' },
  infra: { name: 'Hạ tầng', dot: '#4F7FD1' },
  data: { name: 'Data', dot: '#C9A227' },
  ai: { name: 'AI', dot: '#B26AD6' },
  workflow: { name: 'Workflow', dot: '#5E9E57' }
};

export interface DictionaryTermItem {
  term: string;
  category: DictionaryCategoryKey;
  categoryName: string;
  dot: string;
  def: string;
  letter: string;
}

export const RAW_DICTIONARY_TERMS: Array<[string, DictionaryCategoryKey, string]> = [
  [
    "API",
    "code",
    "Cổng để hai phần mềm nói chuyện với nhau. Ví dụ: web của bạn gọi API của Google Sheets để lấy dữ liệu."
  ],
  [
    "Array",
    "code",
    "Danh sách nhiều giá trị xếp theo thứ tự, như danh sách sản phẩm hay danh sách khách hàng."
  ],
  [
    "Asset",
    "design",
    "Tài nguyên dùng trong web: ảnh, icon, font, video, logo."
  ],
  [
    "Auth",
    "code",
    "Xác thực người dùng — đăng nhập, đăng ký, quên mật khẩu."
  ],
  [
    "Backend",
    "code",
    "Phần chạy phía máy chủ mà người dùng không thấy: lưu dữ liệu, xử lý đơn hàng, gửi email."
  ],
  [
    "Badge",
    "design",
    "Một khối nhỏ chứa text, con số hoặc chỉ là một chấm màu, dùng để chỉ thị trạng thái, thông báo hoặc phân loại thông tin."
  ],
  [
    "Boolean",
    "code",
    "Giá trị chỉ có hai trạng thái: đúng hoặc sai, bật hoặc tắt."
  ],
  [
    "Border",
    "design",
    "Đường viền bao quanh một phần tử. Có độ dày, kiểu và màu."
  ],
  [
    "Branch",
    "workflow",
    "Nhánh làm việc riêng để thử thay đổi mà không ảnh hưởng bản chính."
  ],
  [
    "Breadcrumb",
    "design",
    "Dòng điều hướng cho biết bạn đang ở đâu: Trang chủ › Blog › Bài viết."
  ],
  [
    "Breakpoint",
    "design",
    "Mốc chiều rộng màn hình mà giao diện đổi bố cục, ví dụ từ desktop sang mobile."
  ],
  [
    "Button",
    "design",
    "Nút bấm để người dùng thực hiện hành động: mua, đăng ký, gửi."
  ],
  [
    "Cache",
    "infra",
    "Lưu tạm dữ liệu vào một nơi \"gần\" bạn nhất để lần sau truy cập nhanh hơn."
  ],
  [
    "Card",
    "design",
    "Một khối chứa thông tin — gom ảnh, tiêu đề, mô tả, nút hành động vào một hộp."
  ],
  [
    "Checkbox",
    "design",
    "Thành phần giao diện cho phép người dùng chọn một hoặc nhiều tùy chọn từ một danh sách."
  ],
  [
    "Clone",
    "workflow",
    "Hành động tải toàn bộ một kho code (repository) từ server (như GitHub) về máy tính cá nhân của bạn."
  ],
  [
    "Conflict",
    "workflow",
    "Conflict xảy ra khi hai người cùng sửa một dòng code hoặc cùng một file theo cách mà Git không thể tự gộp lại được."
  ],
  [
    "Carousel",
    "design",
    "Dải nội dung trượt ngang, thường dùng cho banner hoặc sản phẩm nổi bật."
  ],
  [
    "CLI",
    "infra",
    "CLI là \"trạm điều khiển\" bằng chữ của máy tính."
  ],
  [
    "Commit",
    "workflow",
    "Hành động lưu lại một điểm trong lịch sử code."
  ],
  [
    "Component",
    "code",
    "Một khối giao diện độc lập, có thể dùng lại nhiều lần."
  ],
  [
    "Container",
    "design",
    "Khung bao nội dung, giới hạn chiều rộng để trang không bị dàn quá rộng."
  ],
  [
    "Contrast",
    "design",
    "Độ tương phản giữa chữ và nền. Tương phản thấp làm chữ khó đọc."
  ],
  [
    "CSS",
    "code",
    "Ngôn ngữ quy định giao diện: màu, font, khoảng cách, bố cục."
  ],
  [
    "Dark mode",
    "design",
    "Giao diện nền tối, chữ sáng. Ngược lại là light mode."
  ],
  [
    "Database",
    "data",
    "Nơi lưu trữ dữ liệu có cấu trúc: người dùng, đơn hàng, bài viết."
  ],
  [
    "Deploy",
    "infra",
    "Đưa web từ máy của bạn lên internet để ai cũng truy cập được."
  ],
  [
    "Design System",
    "design",
    "Bộ quy chuẩn màu, font, component để mọi màn hình đồng nhất."
  ],
  [
    "Domain",
    "infra",
    "Tên miền của website, ví dụ markai.vn."
  ],
  [
    "Dropdown",
    "design",
    "Menu xổ xuống khi bấm, chứa danh sách lựa chọn."
  ],
  [
    "Environment variable",
    "infra",
    "Biến môi trường — nơi cất khoá bí mật như API key, không để lộ trong code."
  ],
  [
    "Flexbox",
    "code",
    "Cách xếp các phần tử theo hàng hoặc cột trong CSS, tự căn đều khoảng cách."
  ],
  [
    "Font weight",
    "design",
    "Độ đậm của chữ, từ mảnh (300) đến đậm (700)."
  ],
  [
    "Footer",
    "design",
    "Phần chân trang: liên hệ, liên kết phụ, bản quyền."
  ],
  [
    "Fork",
    "workflow",
    "Sao chép một dự án của người khác về tài khoản của bạn để chỉnh sửa."
  ],
  [
    "Frontend",
    "code",
    "Phần người dùng nhìn thấy và tương tác trên trình duyệt."
  ],
  [
    "Git",
    "workflow",
    "Công cụ lưu lịch sử thay đổi của code, cho phép quay lại bản cũ."
  ],
  [
    "Grid",
    "design",
    "Lưới cột dùng để căn chỉnh bố cục cho thẳng hàng."
  ],
  [
    "Header",
    "design",
    "Phần đầu trang: logo, menu, nút hành động chính."
  ],
  [
    "Hero Section",
    "design",
    "Khối đầu tiên của trang, nơi truyền tải thông điệp chính và CTA."
  ],
  [
    "Hosting",
    "infra",
    "Dịch vụ cho thuê máy chủ để web chạy 24/7."
  ],
  [
    "Hover",
    "design",
    "Trạng thái khi rê chuột lên một phần tử, thường đổi màu hoặc hiện thêm thông tin."
  ],
  [
    "Icon Button",
    "design",
    "Nút chỉ có biểu tượng, không có chữ — như nút đóng ×."
  ],
  [
    "Letter Spacing",
    "design",
    "Khoảng cách giữa các chữ cái."
  ],
  [
    "Line Height",
    "design",
    "Khoảng cách giữa các dòng chữ. Quá hẹp khó đọc, quá rộng rời rạc."
  ],
  [
    "LLM",
    "ai",
    "Mô hình ngôn ngữ lớn — “bộ não” của ChatGPT, Claude, Gemini."
  ],
  [
    "Localhost",
    "infra",
    "Web đang chạy trên chính máy của bạn, chưa ai khác xem được."
  ],
  [
    "Margin",
    "design",
    "Khoảng trống bên ngoài một phần tử, đẩy nó cách xa phần tử khác."
  ],
  [
    "MCP",
    "ai",
    "Chuẩn kết nối giúp AI dùng được công cụ và dữ liệu bên ngoài như Figma, Notion, database."
  ],
  [
    "Merge",
    "workflow",
    "Gộp thay đổi từ một nhánh vào nhánh chính."
  ],
  [
    "Model",
    "ai",
    "Phiên bản AI cụ thể bạn đang dùng, mỗi model mạnh ở việc khác nhau."
  ],
  [
    "Navbar",
    "design",
    "Thanh điều hướng chứa các liên kết chính của website."
  ],
  [
    "Opacity",
    "design",
    "Độ trong suốt của phần tử, từ 0 (ẩn) đến 1 (rõ hoàn toàn)."
  ],
  [
    "Overflow",
    "code",
    "Nội dung tràn ra ngoài khung chứa. Có thể ẩn, cuộn hoặc hiện hết."
  ],
  [
    "Padding",
    "design",
    "Khoảng trống bên trong một phần tử, giữa viền và nội dung."
  ],
  [
    "Pagination",
    "design",
    "Phân trang: 1, 2, 3… khi danh sách quá dài."
  ],
  [
    "Placeholder",
    "design",
    "Chữ gợi ý mờ trong ô nhập, biến mất khi bắt đầu gõ."
  ],
  [
    "Popup",
    "design",
    "Cửa sổ bật lên trên nội dung, thường dùng để thu email hoặc xác nhận."
  ],
  [
    "Port",
    "infra",
    "Cổng mà ứng dụng chạy trên máy, như localhost:3000."
  ],
  [
    "Primary Color",
    "design",
    "Màu chính của thương hiệu, dùng cho nút và điểm nhấn quan trọng."
  ],
  [
    "Prompt",
    "ai",
    "Câu lệnh bạn viết cho AI. Prompt càng rõ, kết quả càng đúng ý."
  ],
  [
    "Pull",
    "workflow",
    "Kéo bản code mới nhất từ GitHub về máy."
  ],
  [
    "Push",
    "workflow",
    "Đẩy code từ máy lên GitHub."
  ],
  [
    "Radius",
    "design",
    "Độ bo tròn góc của phần tử."
  ],
  [
    "Responsive",
    "design",
    "Giao diện tự co giãn đẹp trên mọi màn hình: điện thoại, tablet, desktop."
  ],
  [
    "Section",
    "design",
    "Một khối nội dung trên trang, như phần giới thiệu hay bảng giá."
  ],
  [
    "Sidebar",
    "design",
    "Cột bên cạnh chứa menu hoặc thông tin phụ."
  ],
  [
    "Skeleton screen",
    "design",
    "Khung xám giả lập nội dung trong lúc đang tải."
  ],
  [
    "SSL Certificate",
    "infra",
    "Chứng chỉ bảo mật giúp web có ổ khoá và https://."
  ],
  [
    "Token",
    "ai",
    "Đơn vị chữ mà AI đọc và tính phí — khoảng ¾ một từ tiếng Anh."
  ],
  [
    "Toast Notification",
    "design",
    "Thông báo nhỏ hiện ở góc màn hình rồi tự biến mất."
  ],
  [
    "Toggle",
    "design",
    "Công tắc bật/tắt một tuỳ chọn."
  ],
  [
    "Tooltip",
    "design",
    "Chú thích nhỏ hiện ra khi rê chuột lên phần tử."
  ],
  [
    "Vercel",
    "infra",
    "Nền tảng deploy web phổ biến, miễn phí cho dự án cá nhân."
  ],
  [
    "Viewport",
    "design",
    "Vùng hiển thị của trình duyệt trên màn hình người xem."
  ],
  [
    "Z-index",
    "code",
    "Thứ tự xếp lớp: phần tử có z-index cao hơn nằm đè lên trên."
  ]
];

export const DICTIONARY_TERMS: DictionaryTermItem[] = RAW_DICTIONARY_TERMS.map(([term, catKey, def]) => {
  const catInfo = DICTIONARY_CATEGORIES[catKey];
  const letter = term[0].toUpperCase();
  return {
    term,
    category: catKey,
    categoryName: catInfo ? catInfo.name : catKey,
    dot: catInfo ? catInfo.dot : '#141414',
    def,
    letter
  };
});
