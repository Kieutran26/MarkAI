export type PageTitle = [string, string];

export type AdminNavChildItem = {
  id: string;
  href: string;
  label: string;
};

export type AdminNavItem = {
  id: string;
  href?: string;
  label: string;
  icon: string;
  group: string;
  count?: number;
  children?: AdminNavChildItem[];
};

export const navItems: AdminNavItem[] = [
  { id: 'overview', href: '/', label: 'Dashboard', icon: 'O', group: 'overview' },
  { id: 'activity', href: '/activity', label: 'Hoạt động', icon: '*', group: 'overview' },
  {
    id: 'lessons',
    href: '/lessons',
    label: 'Bài học Vibecode',
    icon: '#',
    group: 'content',
    count: 3,
    children: [
      { id: 'lessons-structure', href: '/lessons/structure', label: 'Quản lý bài học và module' },
      { id: 'lessons-editor', href: '/lessons/editor', label: 'Soạn nội dung chi tiết' },
      { id: 'lessons-json-preview', href: '/lessons/json-preview', label: 'Xem trước JSON course' },
    ],
  },
  { id: 'blog', href: '/blog', label: 'Blog', icon: 'B', group: 'content', count: 6 },
  {
    id: 'tips',
    href: '/tips',
    label: 'Tips và Mẹo',
    icon: 'T',
    group: 'content',
    count: 12,
    children: [
      { id: 'tips-list', href: '/tips', label: 'Tất cả tips' },
      { id: 'tips-suggestions', href: '/tips/suggestions', label: 'Đề xuất từ người dùng' },
    ],
  },
  { id: 'prompts', href: '/prompts', label: 'Thư viện Prompt', icon: 'P', group: 'content', count: 150 },
  { id: 'modules', href: '/modules', label: 'Module Picker', icon: 'M', group: 'platform', count: 8 },
  { id: 'ticker', href: '/ticker', label: 'Thanh chữ chạy', icon: '-', group: 'platform' },
  { id: 'nav-manage', href: '/nav-manage', label: 'Điều hướng', icon: '=', group: 'platform' },
  { id: 'settings', href: '/settings', label: 'Cài đặt trang', icon: 'S', group: 'settings' },
  { id: 'deploy', href: '/deploy', label: 'Deploy và Tích hợp', icon: '^', group: 'settings' },
];

export const navGroups = [
  { key: 'overview', label: 'Tổng quan' },
  { key: 'content', label: 'Nội dung' },
  { key: 'platform', label: 'Nền tảng' },
  { key: 'settings', label: 'Cài đặt' },
];

export const pageTitlesByPath: Record<string, PageTitle> = {
  '/': ['Dashboard', 'Tổng quan'],
  '/activity': ['Hoạt động', 'Lịch sử'],
  '/lessons': ['Bài học Vibecode', 'Quản lý bài học và module'],
  '/lessons/structure': ['Bài học Vibecode', 'Quản lý bài học và module'],
  '/lessons/editor': ['Bài học Vibecode', 'Soạn nội dung chi tiết'],
  '/lessons/json-preview': ['Bài học Vibecode', 'Xem trước JSON course'],
  '/blog': ['Blog', 'Tất cả bài viết'],
  '/tips': ['Tips và Mẹo', 'Tất cả tips'],
  '/tips/suggestions': ['Đề xuất Tip', 'Đề xuất từ người dùng'],
  '/prompts': ['Thư viện Prompt', '150+ prompts'],
  '/modules': ['Module Picker', '8 modules'],
  '/ticker': ['Thanh chữ chạy', 'Dark scrolling bar'],
  '/nav-manage': ['Điều hướng', 'Quản lý menu'],
  '/settings': ['Cài đặt trang', 'Tùy chỉnh nội dung'],
  '/deploy': ['Deploy và Tích hợp', 'Vercel · PostHog · Supabase'],
};

export function getPageTitle(pathname: string): PageTitle {
  return pageTitlesByPath[pathname] || ['markAI Admin', ''];
}
