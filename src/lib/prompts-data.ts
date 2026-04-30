import { Prompt, CATEGORY_LABELS } from './prompts-types';

export const promptsData: Record<string, Prompt> = {
  '042': {
    id: '042',
    num: 'PROMPT · 042',
    category: 'vibecode',
    categoryLabel: CATEGORY_LABELS.vibecode,
    tools: ['Claude', 'Cursor AI', 'ChatGPT'],
    hot: true,
    isNew: false,
    title: 'Build component Next.js từ mô tả bằng tiếng Việt',
    desc: 'Prompt chuẩn để yêu cầu Cursor AI hoặc Claude build component theo đúng tech stack và design rules của dự án bạn. Dùng tốt nhất trong Cursor Composer mode.',
    prompt: `Act as a senior Next.js developer.
I'm building [tên dự án] — a [mô tả ngắn về dự án].

Tech stack: Next.js 15 · TypeScript · Tailwind v4 · Supabase

Task: Build the [tên component] component.
Requirements:
- [yêu cầu 1]
- [yêu cầu 2]
- [yêu cầu 3]

Design rules (QUAN TRỌNG):
- NO border-radius on any element
- NO box-shadow anywhere
- Font: DM Mono for UI/labels, Instrument Serif for headings
- Accent color: #B6F500 — use only for hover, active, em tags
- All colors use CSS variables: --bg, --ink, --accent, --border

Output: Complete TypeScript component with Tailwind classes.`,
    vars: [
      { name: '[tên dự án]', desc: 'Tên project của bạn, ví dụ: markAI.vn' },
      { name: '[mô tả ngắn]', desc: 'Mô tả 1 câu về dự án, ví dụ: a learning platform for Vietnamese marketers' },
      { name: '[tên component]', desc: 'Component cần build, ví dụ: TipCard, HeroSection, FilterBar' },
      { name: '[yêu cầu 1-3]', desc: 'Liệt kê các requirements cụ thể của component' },
    ],
    insight: '✳ <strong>Tip dùng hiệu quả nhất:</strong> Thêm file design system hoặc CLAUDE.md vào context trước khi dùng prompt này — AI sẽ generate đúng style ngay lần đầu.',
    meta: 'VIBECODE · Claude · Cursor · 28·04·2026',
    date: '28·04·2026',
  },
  '089': {
    id: '089',
    num: 'PROMPT · 089',
    category: 'research',
    categoryLabel: CATEGORY_LABELS.research,
    tools: ['Claude', 'Gemini'],
    hot: false,
    isNew: true,
    title: 'Phân tích competitor — SWOT nhanh từ website',
    desc: 'Paste URL của competitor vào và nhận bản SWOT analysis + key insights trong vài giây. Dùng tốt nhất với Claude Projects khi attach thêm thông tin về sản phẩm của bạn.',
    prompt: `Analyze this competitor website and provide a structured analysis.

Competitor URL: [website URL]
My product: [mô tả ngắn sản phẩm của bạn]
My target market: [thị trường mục tiêu]

Please provide:
1. SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats)
2. 3 Key Insights — things they do well that I should learn from
3. 3 Gaps — things they're missing that I can capitalize on
4. Positioning statement they seem to be going for

Keep it concise — bullet points, no fluff.`,
    vars: [
      { name: '[website URL]', desc: 'URL của competitor, ví dụ: https://competitor.com' },
      { name: '[sản phẩm của bạn]', desc: 'Mô tả ngắn về sản phẩm/dịch vụ bạn đang cạnh tranh' },
      { name: '[thị trường mục tiêu]', desc: 'Ví dụ: dân Marketing Việt Nam, SME dưới 50 nhân viên' },
    ],
    insight: '✳ <strong>Để kết quả tốt hơn:</strong> Dùng Claude với tính năng web browsing bật hoặc paste nội dung homepage competitor trực tiếp vào chat thay vì chỉ dùng URL.',
    meta: 'RESEARCH · Claude · Gemini · 26·04·2026',
    date: '26·04·2026',
  },
  '017': {
    id: '017',
    num: 'PROMPT · 017',
    category: 'content',
    categoryLabel: CATEGORY_LABELS.content,
    tools: ['Claude', 'ChatGPT'],
    hot: true,
    isNew: false,
    title: 'Viết bài blog Marketing dài 1500 từ có SEO',
    desc: 'Prompt đầy đủ để viết bài blog Marketing chuẩn SEO với structure rõ ràng. Đã test với Claude và ChatGPT — output thường cần edit 20-30% để có giọng văn cá nhân hơn.',
    prompt: `Viết bài blog về [chủ đề] cho website [tên website/brand].

Target reader: [mô tả buyer persona — ai họ, họ đang gặp vấn đề gì]
Keyword chính: [keyword SEO chính]
Keyword phụ: [2-3 keyword phụ nếu có]
Tone: [professional/conversational/inspirational]
Độ dài: 1500-1800 từ

Cấu trúc bài:
- Headline hấp dẫn (có keyword)
- Intro 150 từ (hook + preview nội dung)
- 4-5 H2 sections với nội dung thực chiến
- Mỗi section có ví dụ cụ thể hoặc data nếu có
- Conclusion + CTA rõ ràng

Lưu ý: Viết bằng tiếng Việt tự nhiên, tránh văn phong dịch máy.`,
    vars: [
      { name: '[chủ đề]', desc: 'Chủ đề bài viết, ví dụ: cách dùng AI để viết content nhanh hơn' },
      { name: '[tên website/brand]', desc: 'Tên brand để AI biết tone phù hợp' },
      { name: '[buyer persona]', desc: 'Ví dụ: Marketing Manager tại SME Việt Nam, 28-35 tuổi' },
      { name: '[keyword SEO]', desc: 'Keyword muốn rank, ví dụ: AI content marketing' },
    ],
    insight: '✳ <strong>Sau khi có draft:</strong> Hỏi thêm "Thêm 3 ví dụ thực tế từ doanh nghiệp Việt Nam vào section 2" để bài cụ thể và relate hơn với đọc giả.',
    meta: 'CONTENT · Claude · ChatGPT · 26·04·2026',
    date: '26·04·2026',
  },
  '044': {
    id: '044',
    num: 'PROMPT · 044',
    category: 'vibecode',
    categoryLabel: CATEGORY_LABELS.vibecode,
    tools: ['Claude Code'],
    hot: false,
    isNew: true,
    title: 'Viết CLAUDE.md cho dự án Next.js mới',
    desc: 'Dùng prompt này để tạo file CLAUDE.md đầy đủ cho dự án. CLAUDE.md giúp AI nhớ context dự án qua mọi session — không cần giải thích lại mỗi lần.',
    prompt: `Generate a comprehensive CLAUDE.md file for my project.

Project name: [tên dự án]
Description: [mô tả ngắn dự án — 1-2 câu]
Tech stack: [framework · database · deploy · language · styling]
Target users: [ai sẽ dùng sản phẩm này]

Design rules to include:
[liệt kê các design rules quan trọng của bạn]

Things AI should NOT do:
[liệt kê những điều AI hay làm sai trong dự án này]

Current focus: [đang build tính năng gì, phase nào]

Format: Markdown, Vietnamese language, under 150 lines.`,
    vars: [
      { name: '[tên dự án]', desc: 'Tên project, ví dụ: markAI.vn' },
      { name: '[tech stack]', desc: 'Ví dụ: Next.js 15 · Supabase · Vercel · TypeScript · Tailwind v4' },
      { name: '[design rules]', desc: 'Các rules bắt buộc trong project của bạn' },
      { name: '[current focus]', desc: 'Đang build trang nào, feature gì để AI có context ngay' },
    ],
    insight: '✳ <strong>Update thường xuyên:</strong> Mỗi khi chuyển sang feature mới, update mục "Current Focus" trong CLAUDE.md — chỉ mất 1 phút nhưng AI sẽ code đúng hướng ngay.',
    meta: 'VIBECODE · Claude Code · 22·04·2026',
    date: '22·04·2026',
  },
  '043': {
    id: '043',
    num: 'PROMPT · 043',
    category: 'vibecode',
    categoryLabel: CATEGORY_LABELS.vibecode,
    tools: ['Cursor AI'],
    hot: false,
    isNew: false,
    title: 'Debug lỗi Next.js — giải thích root cause',
    desc: 'Prompt giúp debug lỗi Next.js một cách có hệ thống, không chỉ fix symptoms mà còn giải thích root cause để tránh lặp lại.',
    prompt: `I'm getting this error in my Next.js project:

[error message / error code]

Please help me:
1. Identify the root cause of this error
2. Explain why this error occurs
3. Provide a fix with code
4. Suggest how to prevent this error in the future

Tech stack: Next.js 15 · TypeScript · Tailwind v4`,
    vars: [
      { name: '[error message]', desc: 'Copy paste error message hoặc error code từ terminal/console' },
    ],
    insight: '✳ <strong>Khi debug:</strong> Luôn include full error stack trace — đôi khi root cause nằm ở dòng khác trong stack.',
    meta: 'VIBECODE · Cursor · 25·04·2026',
    date: '25·04·2026',
  },
  '045': {
    id: '045',
    num: 'PROMPT · 045',
    category: 'vibecode',
    categoryLabel: CATEGORY_LABELS.vibecode,
    tools: ['v0.dev / Bolt'],
    hot: false,
    isNew: false,
    title: 'Tạo landing page từ mô tả sản phẩm',
    desc: 'Dùng với v0.dev hoặc Bolt.new để generate landing page nhanh từ mô tả sản phẩm.',
    prompt: `Build a landing page for [tên sản phẩm].

Target audience: [mô tả người dùng mục tiêu]
Main goal: [hành động chính bạn muốn user làm - đăng ký, mua hàng, etc.]
Product description: [mô tả ngắn về sản phẩm]

Key features to highlight:
- [feature 1]
- [feature 2]
- [feature 3]

Design direction: Minimal, professional, trust-building
CTA text: [ví dụ: Bắt đầu miễn phí, Đăng ký ngay]`,
    vars: [
      { name: '[tên sản phẩm]', desc: 'Tên sản phẩm hoặc tên công ty' },
      { name: '[target audience]', desc: 'Ai là người dùng mục tiêu' },
      { name: '[hành động chính]', desc: 'Đăng ký, Mua hàng, Demo, etc.' },
    ],
    insight: '✳ <strong>Để kết quả tốt hơn:</strong> Sau khi có draft, hỏi thêm "Thêm testimonials từ [tên ngành]" để tăng trust.',
    meta: 'VIBECODE · v0.dev · 20·04·2026',
    date: '20·04·2026',
  },
  '046': {
    id: '046',
    num: 'PROMPT · 046',
    category: 'vibecode',
    categoryLabel: CATEGORY_LABELS.vibecode,
    tools: ['Claude', 'Cursor AI'],
    hot: false,
    isNew: false,
    title: 'Review code — tìm lỗi và đề xuất cải thiện',
    desc: 'Prompt tổng hợp để review code một cách toàn diện, tìm bugs, performance issues và suggest improvements.',
    prompt: `Review this code as a senior developer:

[paste code here]

Please analyze and provide:
1. **Bugs/Issues** — any code that could cause bugs or unexpected behavior
2. **Performance** — any inefficiencies or anti-patterns
3. **Security** — potential security vulnerabilities
4. **Best Practices** — suggestions to improve code quality
5. **Priority** — rank issues by severity (critical/high/medium/low)

Focus on [specific concern if any].`,
    vars: [
      { name: '[paste code]', desc: 'Code bạn muốn review' },
      { name: '[specific concern]', desc: 'Ví dụ: chỉ tập trung vào security, hoặc performance' },
    ],
    insight: '✳ <strong>Tip:</strong> Khi review, luôn hỏi thêm "Which issues should I fix first?" để ưu tiên đúng.',
    meta: 'VIBECODE · Claude · 18·04·2026',
    date: '18·04·2026',
  },
  '047': {
    id: '047',
    num: 'PROMPT · 047',
    category: 'vibecode',
    categoryLabel: CATEGORY_LABELS.vibecode,
    tools: ['Cursor AI'],
    hot: false,
    isNew: false,
    title: 'Viết Cursor Rules cho design system cụ thể',
    desc: 'Tạo .cursorrules file để encode design system của bạn — giúp AI luôn generate code đúng style.',
    prompt: `Generate a .cursorrules file for my project with the following design system:

Design Rules:
[liệt kê các design rules của bạn]

Example patterns:
[ví dụ về cách code thường trông như thế nào]

Tech stack: [Next.js · TypeScript · Tailwind v4]

Please output a complete .cursorrules file that covers:
- Typography (font families, sizes)
- Colors (CSS variables)
- Spacing and layout
- Component patterns
- Common do's and don'ts`,
    vars: [
      { name: '[design rules]', desc: 'Các rules từ design system' },
      { name: '[example patterns]', desc: 'Ví dụ về code pattern thường dùng' },
    ],
    insight: '✳ <strong>Cập nhật thường xuyên:</strong> Mỗi khi phát hiện AI hay generate sai style, thêm vào .cursorrules ngay.',
    meta: 'VIBECODE · Cursor · 15·04·2026',
    date: '15·04·2026',
  },
  '018': {
    id: '018',
    num: 'PROMPT · 018',
    category: 'content',
    categoryLabel: CATEGORY_LABELS.content,
    tools: ['Claude'],
    hot: false,
    isNew: false,
    title: 'Viết 10 caption Instagram cho campaign',
    desc: 'Tạo 10 caption variations cho Instagram, tối ưu cho engagement và phù hợp với brand voice.',
    prompt: `Generate 10 Instagram captions for a campaign about [campaign theme].

Product/Service: [mô tả sản phẩm]
Target audience: [ai là audience]
Campaign goal: [awareness / engagement / sales]
Brand voice: [professional / casual / fun / inspirational]

Each caption should:
- Be 100-200 characters
- Include 3-5 relevant hashtags
- Have a clear hook in the first line
- Include a call-to-action

Vary the angles: educational, emotional, promotional, story-based.`,
    vars: [
      { name: '[campaign theme]', desc: 'Chủ đề campaign' },
      { name: '[sản phẩm]', desc: 'Sản phẩm hoặc dịch vụ đang quảng bá' },
      { name: '[audience]', desc: 'Đối tượng mục tiêu' },
    ],
    insight: '✳ <strong>Test A/B:</strong> Chạy 2-3 captions khác nhau, đo xem caption nào có engagement cao hơn.',
    meta: 'CONTENT · Claude · 24·04·2026',
    date: '24·04·2026',
  },
  '019': {
    id: '019',
    num: 'PROMPT · 019',
    category: 'content',
    categoryLabel: CATEGORY_LABELS.content,
    tools: ['Claude'],
    hot: false,
    isNew: true,
    title: 'Tạo email sequence 5 bước cho nurturing lead',
    desc: 'Thiết kế email nurture sequence để đưa lead từ awareness đến decision.',
    prompt: `Create a 5-email nurture sequence for [product/service].

Target: [mô tả ideal customer]
Goal: [đưa họ đến hành động gì]

Email sequence outline:
1. Email 1 (Day 0) - Welcome/Introduction
2. Email 2 (Day 3) - Problem awareness
3. Email 3 (Day 7) - Solution presentation
4. Email 4 (Day 14) - Social proof/Case study
5. Email 5 (Day 21) - Final CTA/Offer

For each email provide:
- Subject line (3 options)
- Preview text
- Email body (150-200 words)
- CTA button text`,
    vars: [
      { name: '[product/service]', desc: 'Sản phẩm hoặc dịch vụ' },
      { name: '[ideal customer]', desc: 'Mô tả khách hàng lý tưởng' },
      { name: '[hành động]', desc: 'Hành động cuối cùng muốn họ làm' },
    ],
    insight: '✳ <strong>Tối ưu:</strong> Sau 2-3 tuần, phân tích open rate và click rate để điều chỉnh timing và content.',
    meta: 'CONTENT · Claude · 21·04·2026',
    date: '21·04·2026',
  },
  '103': {
    id: '103',
    num: 'PROMPT · 103',
    category: 'data',
    categoryLabel: CATEGORY_LABELS.data,
    tools: ['Claude'],
    hot: false,
    isNew: false,
    title: 'Đọc GA4 report — tóm tắt insight quan trọng',
    desc: 'Paste GA4 report data và nhận bản tóm tắt các insights quan trọng, không cần đọc hết 50 pages.',
    prompt: `Analyze this GA4 report data and summarize the key insights:

[data from GA4 - paste traffic sources, top pages, user behavior, conversions]

Please provide:
1. Top 3 insights about user behavior
2. Top 3 concerns/issues to address
3. Top 3 opportunities to explore
4. Recommended actions for next week

Focus on actionable insights, not vanity metrics.`,
    vars: [
      { name: '[GA4 data]', desc: 'Copy paste data từ GA4 dashboard' },
    ],
    insight: '✳ <strong>Tip:</strong> Chạy prompt này mỗi tuần với weekly report — chỉ mất 2 phút thay vì 30 phút đọc report.',
    meta: 'DATA · Claude · 20·04·2026',
    date: '20·04·2026',
  },
  '056': {
    id: '056',
    num: 'PROMPT · 056',
    category: 'content',
    categoryLabel: CATEGORY_LABELS.content,
    tools: ['Claude', 'ChatGPT'],
    hot: false,
    isNew: false,
    title: 'Tạo brief sáng tạo cho campaign social media',
    desc: 'Viết creative brief đầy đủ để guide team hoặc agency triển khai campaign.',
    prompt: `Create a creative brief for a social media campaign:

Product/Service: [tên sản phẩm]
Campaign Name: [tên campaign]
Duration: [start date - end date]
Budget: [budget range]

Target Audience:
- Demographics: [age, location, income]
- Psychographics: [values, interests, pain points]
- Behavioral: [online habits, purchase behavior]

Campaign Objectives:
- Primary: [mục tiêu chính - awareness/consideration/conversion]
- Secondary: [mục tiêu phụ]

Key Messages:
- [message 1]
- [message 2]
- [message 3]

Tone & Style: [mô tả tone của brand]

Deliverables needed: [posts/videos/stories/ads]`,
    vars: [
      { name: '[tên sản phẩm]', desc: 'Tên sản phẩm hoặc dịch vụ' },
      { name: '[campaign name]', desc: 'Tên chiến dịch' },
    ],
    insight: '✳ <strong>Before sending:</strong> Review brief với stakeholders trước khi share với team để tránh rework.',
    meta: 'CONTENT · Claude · 18·04·2026',
    date: '18·04·2026',
  },
  '078': {
    id: '078',
    num: 'PROMPT · 078',
    category: 'deploy',
    categoryLabel: CATEGORY_LABELS.deploy,
    tools: ['Claude', 'Cursor AI'],
    hot: false,
    isNew: false,
    title: 'Deploy checklist — review trước khi push lên production',
    desc: 'Checklist để review trước khi deploy — tránh những lỗi stupid gây downtime.',
    prompt: `I'm about to deploy my Next.js app to production. Help me create a pre-deployment checklist.

Tech stack: Next.js 15 · TypeScript · Tailwind v4 · [deployment platform]

Please create a checklist covering:
1. Code quality (lint, type check)
2. Performance (bundle size, image optimization)
3. Security (env vars, API keys)
4. SEO (meta tags, OG images, sitemap)
5. Analytics (tracking codes)
6. Error monitoring (Sentry, etc.)
7. Backup procedures
8. Rollback plan

Format as a markdown checklist.`,
    vars: [
      { name: '[deployment platform]', desc: 'Vercel, Netlify, AWS, etc.' },
    ],
    insight: '✳ <strong>Tự động hóa:</strong> Thêm các checks này vào CI/CD pipeline để không bao giờ quên.',
    meta: 'DEPLOY · Claude · 15·04·2026',
    date: '15·04·2026',
  },
  '031': {
    id: '031',
    num: 'PROMPT · 031',
    category: 'research',
    categoryLabel: CATEGORY_LABELS.research,
    tools: ['Claude'],
    hot: false,
    isNew: false,
    title: 'Xây dựng buyer persona từ data khách hàng có sẵn',
    desc: 'Tạo buyer persona chi tiết từ data khách hàng thực tế, không cần guess.',
    prompt: `Build buyer personas from our customer data:

[Customer data - can include:
- Customer list with demographics
- Purchase history
- Support tickets
- Survey responses
- Interview notes]

Please create 2-3 distinct buyer personas with:
1. **Demographics** - age, location, job title, income
2. **Goals** - what they're trying to achieve
3. **Pain points** - challenges and frustrations
4. **Behavior** - how they research and buy
5. **Messaging** - what resonates with them
6. **Objections** - common pushback and how to handle

Label each persona with a name and photo placeholder description.`,
    vars: [
      { name: '[customer data]', desc: 'Data khách hàng thực tế (anonymized nếu cần)' },
    ],
    insight: '✳ <strong>Update regularly:</strong> Persona nên được update mỗi quarter khi có data mới.',
    meta: 'RESEARCH · Claude · 12·04·2026',
    date: '12·04·2026',
  },
};

export const featuredPrompts = ['042', '017', '089'];
export const vibecodePrompts = ['042', '043', '044', '045', '046', '047'];
export const contentPrompts = ['017', '018', '019'];
export const allPromptsList = ['042', '089', '017', '044', '103', '056', '078', '031'];

export const promptIds = Object.keys(promptsData);
