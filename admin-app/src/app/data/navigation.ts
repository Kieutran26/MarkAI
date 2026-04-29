export const navItems = [
  { id: 'overview', label: 'Dashboard', icon: '◈', group: 'overview' },
  { id: 'activity', label: 'Hoạt động', icon: '◎', group: 'overview' },
  { id: 'lessons', label: 'Bài học Vibecode', icon: '▤', group: 'content', count: 7 },
  { id: 'blog', label: 'Blog', icon: '◷', group: 'content', count: 6 },
  { id: 'tips', label: 'Tips & Mẹo', icon: '✳', group: 'content', count: 12 },
  { id: 'prompts', label: 'Prompt Library', icon: '⌘', group: 'content', count: 150 },
  { id: 'modules', label: 'Module Picker', icon: '⊞', group: 'platform', count: 8 },
  { id: 'ticker', label: 'Ticker', icon: '↔', group: 'platform' },
  { id: 'nav-manage', label: 'Navigation', icon: '≡', group: 'platform' },
  { id: 'settings', label: 'Cài đặt trang', icon: '◇', group: 'settings' },
  { id: 'deploy', label: 'Deploy & Tích hợp', icon: '↑', group: 'settings' },
]

export const navGroups = [
  { key: 'overview', label: 'Tổng quan' },
  { key: 'content', label: 'Nội dung' },
  { key: 'platform', label: 'Platform' },
  { key: 'settings', label: 'Cài đặt' },
]

export const pageTitles: Record<string, [string, string]> = {
  'overview': ['Dashboard', 'Tổng quan'],
  'activity': ['Hoạt động', 'Lịch sử'],
  'lessons': ['Bài học Vibecode', 'Lộ trình 7 bước'],
  'blog': ['Blog', 'Tất cả bài viết'],
  'tips': ['Tips & Mẹo', '12 tips'],
  'prompts': ['Prompt Library', '150+ prompts'],
  'modules': ['Module Picker', '8 modules'],
  'ticker': ['Ticker', 'Dark scrolling bar'],
  'nav-manage': ['Navigation', 'Quản lý menu'],
  'settings': ['Cài đặt trang', 'Tuỳ chỉnh nội dung'],
  'deploy': ['Deploy & Tích hợp', 'Vercel · PostHog · Supabase'],
}
