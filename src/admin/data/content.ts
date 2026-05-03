export interface Tip {
  num: string
  text: string
  cat: string
  on: boolean
}

export const tipsData: Tip[] = [
  { num: '01', text: 'Dùng Cursor Tab để autocomplete nhanh hơn — không cần gõ từng ký tự', cat: 'vibecode', on: true },
  { num: '02', text: 'Prefix prompt bằng "Act as a senior frontend developer" để AI code chất hơn', cat: 'prompt', on: true },
  { num: '03', text: 'Tạo file CLAUDE.md ngay từ đầu — tiết kiệm 50% context mỗi lần chat', cat: 'workflow', on: true },
  { num: '04', text: 'Deploy Vercel bằng CLI: vercel --prod nhanh hơn dashboard', cat: 'deploy', on: true },
  { num: '05', text: 'Dùng v0.dev cho UI prototype trước, rồi mới copy vào Cursor', cat: 'vibecode', on: true },
  { num: '06', text: 'PostHog free tier: 1 triệu event/tháng — đủ cho project nhỏ', cat: 'tool', on: true },
  { num: '07', text: 'Đặt tên biến tiếng Anh ngay từ đầu — AI hiểu tốt hơn nhiều', cat: 'vibecode', on: true },
  { num: '08', text: 'Cursor Rules > .cursorrules: định nghĩa design system 1 lần, áp dụng mãi', cat: 'workflow', on: true },
  { num: '09', text: 'Lỗi Vercel build? Copy toàn bộ error log dán thẳng cho AI — đừng tóm tắt', cat: 'deploy', on: true },
  { num: '10', text: 'Mobile-first: thiết kế 375px trước, responsive lên desktop sau', cat: 'vibecode', on: false },
  { num: '11', text: 'Google Search Console: submit sitemap.xml ngay sau deploy đầu tiên', cat: 'deploy', on: true },
  { num: '12', text: 'Bolt.new nhanh hơn khi cần prototype nhanh — Cursor tốt hơn khi cần edit sâu', cat: 'tool', on: true },
]

export interface Lesson {
  num: string
  badge: string
  badgeColor: string
  duration: string
  title: string
  tags: string
  status: string
  isPublished: boolean
  isAccent?: boolean
  specialBadge?: string
  specialBadgeColor?: string
}

export const lessonsData: Lesson[] = [
  { num: '01', badge: 'BẮT ĐẦU ĐÂY', badgeColor: 'badge-accent', duration: '~20 phút', title: 'Vibecode là gì? Khó không? Giúp gì cho Marketer?', tags: 'tư duy · use case · marketer', status: 'Published', isPublished: true, isAccent: true },
  { num: '02', badge: 'SETUP', badgeColor: 'badge-dark', duration: '~30 phút', title: 'Cài gì vào máy để bắt đầu vibecode?', tags: 'Node.js · Cursor · VS Code · Git · terminal', status: 'Published', isPublished: true },
  { num: '03', badge: 'TOOLS', badgeColor: 'badge-dark', duration: '~25 phút', title: 'Công cụ & website hữu ích để vibecode ra web hoàn chỉnh', tags: 'Cursor · v0.dev · Vercel · Bolt · Tailwind', status: 'Published', isPublished: true },
  { num: '04', badge: 'NGÔN NGỮ', badgeColor: 'badge-dark', duration: '~40 phút', title: 'Từ điển chuyên ngành — kèm GIF mô phỏng', tags: 'spacing · flexbox · grid · responsive', status: 'Published', isPublished: true, specialBadge: 'GIF Demo', specialBadgeColor: 'background:#1d4ed8' },
  { num: '05', badge: 'PROMPT', badgeColor: 'badge-dark', duration: '~35 phút', title: 'Cách prompt cho AI hiểu để code đúng ý bạn', tags: 'prompt · Cursor AI · Claude Code · template', status: 'Published', isPublished: true },
  { num: '06', badge: 'WORKFLOW', badgeColor: 'badge-dark', duration: '~45 phút', title: 'Tạo Skills & Workflow — cộng đồng đang share gì nhiều nhất?', tags: 'Cursor Rules · CLAUDE.md · MCP · community', status: 'Published', isPublished: true },
  { num: '07', badge: 'DEPLOY', badgeColor: 'badge-dark', duration: '~50 phút', title: 'Deploy + gắn PostHog & Google Search Console', tags: 'Vercel · GitHub · PostHog · Google Search Console', status: 'Published', isPublished: true, specialBadge: 'ĐÍCH ĐẾN', specialBadgeColor: 'background:#16a34a' },
]

export interface BlogPost {
  title: string
  category: string
  excerpt: string
  readTime: string
  status: string
  date: string
  hasPublish?: boolean
}

export const blogData: BlogPost[] = [
  { title: 'Vibecode từ A–Z cho người chưa biết code', category: 'VIBECODE', excerpt: 'Hướng dẫn toàn diện từ zero...', readTime: '7 phút', status: 'Live', date: '20·04·2026' },
  { title: 'Deploy Vercel trong 10 phút', category: 'DEPLOY', excerpt: 'Từ localhost lên production...', readTime: '5 phút', status: 'Live', date: '18·04·2026' },
  { title: 'Cursor vs VS Code — cái nào dành cho Marketer?', category: 'TOOL REVIEW', excerpt: 'So sánh thực tế...', readTime: '6 phút', status: 'Draft', date: '—', hasPublish: true },
  { title: 'PostHog cho Marketer — setup & đọc data', category: 'ANALYTICS', excerpt: 'Cài PostHog trong 5 phút...', readTime: '8 phút', status: 'Live', date: '15·04·2026' },
  { title: 'MCP là gì? Tại sao dân Marketer cần biết?', category: 'WORKFLOW', excerpt: 'Model Context Protocol...', readTime: '4 phút', status: 'Live', date: '12·04·2026' },
  { title: 'Case study: Landing page từ ý tưởng đến deploy 4 tiếng', category: 'CASE STUDY', excerpt: 'Một marketer không biết code...', readTime: '10 phút', status: 'Live', date: '08·04·2026' },
]

export interface PromptCard {
  category: string
  title: string
  preview: string
  status: string
  statusColor: string
  usage: string
  isNew?: boolean
}

export const promptsData: PromptCard[] = [
  { category: 'Vibecode · Cursor', title: 'Tạo component Card đúng design system', preview: 'Tạo card component với border 1px solid var(--border), hover bg2, font-serif title...', status: 'Active', statusColor: 'badge-green', usage: '23 lượt dùng' },
  { category: 'Deploy · Vercel', title: 'Fix lỗi build Vercel — Next.js 15', preview: 'Khi gặp lỗi build trên Vercel với Next.js 15, thêm prompt này để AI chẩn đoán...', status: 'Active', statusColor: 'badge-green', usage: '18 lượt dùng' },
  { category: 'Workflow · MCP', title: 'Viết CLAUDE.md cho project web marketing', preview: 'Tạo file CLAUDE.md với context đầy đủ về design system, folder structure...', status: 'Active', statusColor: 'badge-green', usage: '31 lượt dùng' },
  { category: 'Analytics · PostHog', title: 'Đọc báo cáo PostHog với AI', preview: 'Upload ảnh chụp màn dashboard PostHog và dùng Claude để phân tích...', status: 'Draft', statusColor: 'badge-yellow', usage: 'Chưa publish' },
  { category: 'Vibecode · v0.dev', title: 'Prompt tạo landing page với v0.dev', preview: 'Dùng prompt này với v0.dev để tạo landing page có hero section, CTA, footer...', status: 'Active', statusColor: 'badge-green', usage: '45 lượt dùng' },
]

export interface Module {
  name: string
  prefix?: string
  meta: string
  status: string
  statusColor: string
  enabled: boolean
  disabled?: boolean
}

export const modulesData: Module[] = [
  { name: 'Vibecode ra Web', prefix: '✓', meta: '7 bài · đang học', status: 'Available', statusColor: 'badge-green', enabled: true },
  { name: 'Vibecode ra App', meta: 'React Native · Expo', status: 'Sắp ra', statusColor: 'badge-outline', enabled: true },
  { name: 'Vibecode ra Chatbot', meta: 'Claude API · Telegram Bot', status: 'Sắp ra', statusColor: 'badge-outline', enabled: true },
  { name: 'Vibecode ra Tool nội bộ', meta: 'Dashboard · Tracker', status: 'Sắp ra', statusColor: 'badge-outline', enabled: true },
  { name: 'Analytics với AI', meta: 'GA4 · Looker · Claude', status: 'Sắp ra', statusColor: 'badge-outline', enabled: true },
  { name: 'Generate Image', meta: 'Midjourney · Flux · Firefly', status: 'Sắp ra', statusColor: 'badge-outline', enabled: true },
  { name: 'Motion Video', meta: 'Kling · Runway · HeyGen', status: 'Sắp ra', statusColor: 'badge-outline', enabled: true },
  { name: 'Card Góp ý', meta: '— link form góp ý', status: 'Active', statusColor: 'badge-green', enabled: true, disabled: true },
]

export interface TickerItem {
  num: string
  text: string
  visible: boolean
}

export const tickerData: TickerItem[] = [
  { num: '01', text: '✳ Vibecode ra mắt tháng 4/2026', visible: true },
  { num: '02', text: '✳ 7 bài học lộ trình zero', visible: true },
  { num: '03', text: '✳ Miễn phí 100%', visible: true },
  { num: '04', text: '✳ Analytics sắp ra', visible: true },
  { num: '05', text: '✳ Generate Image sắp ra', visible: true },
  { num: '06', text: '✳ Motion Video sắp ra', visible: true },
  { num: '07', text: '✳ Blog · Tips · Prompt Library', visible: true },
  { num: '08', text: '✳ Dành riêng dân Marketing', visible: true },
]

export interface NavLink {
  num: string
  label: string
  url: string
  status: string
  statusColor: string
  enabled: boolean
  disabled?: boolean
}

export const navData: NavLink[] = [
  { num: '01', label: 'Vibecode', url: '#vibecode', status: 'Active', statusColor: 'badge-green', enabled: true },
  { num: '02', label: 'Blog', url: '#blog', status: 'Active', statusColor: 'badge-green', enabled: true },
  { num: '03', label: 'Tips', url: '#tips', status: 'Active', statusColor: 'badge-green', enabled: true },
  { num: '04', label: 'Prompts', url: '#prompts', status: 'Active', statusColor: 'badge-green', enabled: true },
  { num: '05', label: 'Analytics', url: '—', status: 'Disabled', statusColor: 'badge-outline', enabled: false, disabled: true },
  { num: '06', label: 'Image', url: '—', status: 'Disabled', statusColor: 'badge-outline', enabled: false, disabled: true },
  { num: '07', label: 'Video', url: '—', status: 'Disabled', statusColor: 'badge-outline', enabled: false, disabled: true },
]

export interface Activity {
  dot: string
  text: string
  time: string
}

export const activityData: Activity[] = [
  { dot: 'accent', text: 'Đã deploy lên <strong>Vercel</strong> — build thành công', time: '2h trước' },
  { dot: 'green', text: 'Publish bài blog <strong>"Vibecode từ A–Z"</strong>', time: '5h trước' },
  { dot: '', text: 'Thêm <strong>12 prompts</strong> mới vào thư viện (draft)', time: '1 ngày' },
  { dot: 'yellow', text: 'Cập nhật nội dung bài <strong>Bài 05 — Prompt</strong>', time: '2 ngày' },
  { dot: 'green', text: 'Thêm <strong>Tip #12</strong> vào Tips & Mẹo section', time: '3 ngày' },
  { dot: 'accent', text: 'Cập nhật <strong>Ticker</strong> — thêm dòng mới', time: '4 ngày' },
  { dot: '', text: 'Tạo draft blog <strong>"Cursor vs VS Code"</strong>', time: '5 ngày' },
  { dot: 'green', text: 'Hoàn thành lộ trình <strong>Bài 07 — Deploy</strong>', time: '1 tuần' },
]

export const miniTickerItems = [
  '◈ Admin Dashboard markAI.vn',
  '· Vibecode Web: <b>7/7 bài</b> đã publish',
  '· Blog: <b>6 bài viết</b> live',
  '· Prompt Library: <b>150 prompts</b>',
  '· Tips: <b>12 tips</b> đang hiển thị',
  '· Deploy: <b>Vercel</b> · last 2h ago',
  '· Analytics: <b>PostHog</b> connected',
]
