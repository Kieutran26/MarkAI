import { Tip } from './types';

const DETAIL_PREVIEW_MIN_LENGTH = 180;

const stripHtml = (content: string): string => {
  return content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
};

export const tips: Tip[] = [
  {
    id: 60,
    slug: 'claude-md-context-du-an',
    title: 'CLAUDE.md — cách để AI nhớ toàn bộ context dự án của bạn',
    category: 'vibecode',
    categoryLabel: 'VIBECODE',
    type: 'long',
    date: '27·04·2026',
    readTime: '2 phút đọc',
    isHot: true,
    detailContent: {
      heroTitle: 'CLAUDE.md — cách để AI <em>nhớ toàn bộ</em> context dự án của bạn',
      tools: 'Cursor · Claude Code',
      difficulty: 'Cơ bản',
      applyTime: '~5 phút',
      tags: ['CLAUDE.md', 'Cursor', 'Claude Code', 'context', 'vibecode', 'workflow', 'setup'],
      sections: [
        { type: 'paragraph', content: 'Một trong những vấn đề lớn nhất khi vibecode là mỗi lần mở chat mới với AI, bạn lại phải giải thích lại toàn bộ: đây là project gì, dùng tech stack nào, convention của mình ra sao, ai là end user... Mất thời gian, dễ bỏ sót, và AI thường code không đúng ý ngay từ đầu.' },
        { type: 'paragraph', content: 'Giải pháp: tạo file <code>CLAUDE.md</code> ở root của project. Đây là file "bộ nhớ" mà Claude (và Cursor AI) sẽ tự động đọc mỗi khi bạn bắt đầu session mới.' },
        { type: 'insight', content: '<strong>✳ Key insight:</strong> CLAUDE.md không phải instruction — nó là context. Viết như đang giới thiệu project với một dev mới vào team, không phải ra lệnh cho AI.' },
        { type: 'h3', content: 'CLAUDE.md nên chứa <em>những gì?</em>' },
        { type: 'paragraph', content: 'Không có template cứng nhắc, nhưng một CLAUDE.md hiệu quả thường có 5 phần sau:' },
        {
          type: 'step-list',
          steps: [
            { num: '01', title: 'Project overview', desc: 'Project này là gì, dùng để làm gì, target user là ai. 3–5 câu ngắn là đủ.' },
            { num: '02', title: 'Tech stack', desc: 'Framework, database, deploy platform, language, styling. Ví dụ: Next.js 15 · Supabase · Vercel · TypeScript · Tailwind v4.' },
            { num: '03', title: 'Code conventions', desc: 'Naming convention, folder structure, component style. Nếu có design system — tóm tắt màu sắc, font, rules quan trọng nhất.' },
            { num: '04', title: 'Những gì KHÔNG làm', desc: 'Đây là phần quan trọng nhất. Ví dụ: "Không dùng border-radius", "Không thêm package mới khi chưa hỏi", "Không xóa comment".' },
            { num: '05', title: 'Current status / context', desc: 'Đang build trang nào, đang fix bug gì, phase hiện tại là gì. Update thường xuyên khi project thay đổi hướng.' },
          ]
        },
        { type: 'divider' },
        { type: 'h3', content: 'Ví dụ thực tế — CLAUDE.md <em>của markAI.vn</em>' },
        {
          type: 'code',
          language: 'CLAUDE.md',
          code: `# markAI.vn — Project Context

## Project
Nền tảng học AI ứng dụng cho dân Marketing Việt Nam.
Miễn phí 100%. Triết lý: học xong dùng được ngay.

## Tech Stack
- Framework: Next.js 15
- Database: Supabase
- Deploy: Vercel
- Language: TypeScript
- Styling: Tailwind v4

## Design Rules (QUAN TRỌNG)
- KHÔNG border-radius (trừ 3 dots terminal)
- KHÔNG box-shadow bất kỳ đâu
- Font: Instrument Serif (heading) · DM Mono (UI) · DM Sans (body)
- Accent: #E8410A — chỉ dùng cho hover/badge/em/active

## Current Focus
Đang build trang /tips và /tips/[slug].`
        },
        { type: 'insight', content: '<strong>✳ Lưu ý:</strong> Giữ CLAUDE.md dưới 200 dòng. Quá dài thì AI sẽ "quên" phần cuối. Chỉ ghi những gì quan trọng và thường bị AI làm sai.' },
        { type: 'divider' },
        { type: 'h3', content: 'CLAUDE.md vs Cursor Rules — <em>dùng cái nào?</em>' },
        {
          type: 'compare-table',
          headers: ['Tiêu chí', 'CLAUDE.md', 'Cursor Rules (.cursorrules)'],
          rows: [
            ['Mục đích', 'Context về project', 'Rules về cách AI respond'],
            ['Nội dung', 'Tech stack, goals, current status', 'Tone, format, coding style cụ thể'],
            ['Dùng khi', 'Giới thiệu project với AI', 'Muốn AI luôn code theo style nhất định'],
            ['Tool hỗ trợ', 'Claude Code, Cursor', 'Cursor (chỉ)'],
            ['Kết luận', 'Dùng cả hai — không xung đột', 'Dùng cả hai — không xung đột'],
          ]
        },
        {
          type: 'pull-quote',
          content: '"Mình tốn 30 phút viết CLAUDE.md một lần — nhưng tiết kiệm ít nhất 5 phút <em>mỗi session</em> không cần giải thích lại. Sau 1 tháng là lời rõ."',
          source: '✳ markAI · kinh nghiệm thực tế khi build dự án này'
        },
        { type: 'divider' },
        { type: 'h3', content: 'Áp dụng ngay — <em>3 bước trong 5 phút</em>' },
        { type: 'paragraph', content: 'Không cần đợi project hoàn chỉnh. Tạo CLAUDE.md ngay hôm nay với nội dung tối thiểu rồi bổ sung dần:' },
        {
          type: 'step-list',
          steps: [
            { num: '01', title: 'Tạo file <code>CLAUDE.md</code> ở root project', desc: 'Ngang hàng với <code>package.json</code> và <code>.gitignore</code> — không đặt trong subfolder.' },
            { num: '02', title: 'Viết 5 mục cơ bản', desc: 'Project là gì · Tech stack · Convention quan trọng nhất · Những gì KHÔNG làm · Đang focus vào gì. Dùng Markdown, viết tiếng Việt được.' },
            { num: '03', title: 'Commit vào Git', desc: 'CLAUDE.md nên được version control — khi project thay đổi hướng thì update file này trước khi bắt đầu session mới.' },
          ]
        },
      ],
      relatedTips: [55, 38, 29, 17],
    },
  },
  {
    id: 59,
    slug: 'dung-xoa-het-khi-ai-code-sai',
    title: 'Đừng xóa hết khi AI code sai — hỏi lý do trước đã',
    category: 'workflow',
    categoryLabel: 'WORKFLOW',
    type: 'short',
    date: '25·04·2026',
    readTime: '1 phút đọc',
    popupContent: {
      content: 'Bản năng đầu tiên khi AI code sai là xóa đi làm lại từ đầu. Nhưng đó là cách tốn thời gian nhất. Thay vào đó: <strong>chụp màn hình lỗi</strong> (hoặc copy error message), paste vào chat, và hỏi đúng một câu: <em>"Tại sao lỗi này xảy ra và tôi cần sửa gì?"</em> AI sẽ giải thích root cause rõ hơn nhiều so với việc bạn tự đoán.',
      insight: '✳ <strong>Bonus:</strong> Sau khi AI giải thích lý do, hỏi thêm "Làm sao tránh lỗi này lần sau?" — bạn sẽ học được nhiều hơn là chỉ fix xong rồi thôi.',
    },
  },
  {
    id: 58,
    slug: 'vercel-deploy-nextjs',
    title: 'Vercel deploy Next.js: không cần config gì, kéo repo vào là chạy',
    category: 'deploy',
    categoryLabel: 'DEPLOY',
    type: 'short',
    date: '23·04·2026',
    readTime: '1 phút đọc',
    isNew: true,
    popupContent: {
      content: 'Vercel được build để chạy Next.js từ trong ra ngoài — họ là công ty tạo ra Next.js. Khi bạn import repo Next.js vào Vercel, nó tự detect framework, tự cấu hình build command, và tự set output directory. Bạn chỉ cần nhấn Deploy.',
      code: `# Vercel tự detect và config sẵn:
# ✓ Framework  → Next.js
# ✓ Build       → next build
# ✓ Output      → .next
# ✓ Node ver.   → auto

# Bạn chỉ cần: import repo → Deploy`,
      insight: '✳ Nếu có biến môi trường (.env), thêm vào Vercel Dashboard → Settings → Environment Variables <strong>trước</strong> khi deploy lần đầu.',
    },
  },
  {
    id: 57,
    slug: 'v0-dev-vs-bolt',
    title: 'v0.dev vs Bolt: dùng cái nào khi nào?',
    category: 'ai-tools',
    categoryLabel: 'AI TOOLS',
    type: 'short',
    date: '21·04·2026',
    readTime: '1 phút đọc',
    popupContent: {
      content: '<strong>v0.dev</strong> (của Vercel) xuất code React + Tailwind rất sạch, gần với production-ready. Dùng khi bạn cần component đẹp để paste vào dự án thật.<br><br><strong>Bolt</strong> (của StackBlitz) generate cả app có backend + frontend, chạy được ngay trong browser. Dùng khi bạn cần prototype nhanh để test idea — không cần code sạch.',
      insight: '✳ Rule đơn giản: <strong>v0 = lấy code để dùng thật</strong> · <strong>Bolt = xem demo nhanh</strong>. Không cần chọn 1 cái — dùng cả 2 đúng mục đích.',
    },
  },
  {
    id: 56,
    slug: 'prompt-act-as-senior-dev',
    title: 'Prompt "Act as a senior dev" — tại sao nó cho output tốt hơn?',
    category: 'prompt',
    categoryLabel: 'PROMPT',
    type: 'long',
    date: '18·04·2026',
    readTime: '2 phút đọc',
    detailContent: {
      heroTitle: 'Prompt "Act as a senior dev" — <em>tại sao nó cho</em> output tốt hơn?',
      tools: 'Cursor · Claude Code',
      difficulty: 'Cơ bản',
      applyTime: '~3 phút',
      tags: ['prompt', 'Claude Code', 'vibecode', 'workflow'],
      sections: [],
      relatedTips: [17, 53, 42],
    },
  },
  {
    id: 55,
    slug: 'cursor-rules-tieng-viet',
    title: 'Cursor Rules bằng tiếng Việt — AI vẫn hiểu và follow đúng',
    category: 'vibecode',
    categoryLabel: 'VIBECODE',
    type: 'short',
    date: '16·04·2026',
    readTime: '1 phút đọc',
    popupContent: {
      content: 'Nhiều người nghĩ phải viết Cursor Rules bằng tiếng Anh thì AI mới hiểu. Không đúng. Claude (model đằng sau Cursor AI) hiểu tiếng Việt rất tốt — viết rules bằng tiếng Việt không làm giảm chất lượng output. Bạn viết nhanh hơn, dễ chỉnh hơn, và đồng nghiệp người Việt đọc được luôn.',
      insight: '✳ Chỉ nên giữ tiếng Anh cho: tên kỹ thuật (component, props, API route), tên file, và code snippet ví dụ trong rules.',
    },
  },
  {
    id: 54,
    slug: 'module-not-found-fix',
    title: '"module not found" — nguyên nhân số 1 và cách fix trong 10 giây',
    category: 'vibecode',
    categoryLabel: 'VIBECODE',
    type: 'short',
    date: '14·04·2026',
    readTime: '1 phút đọc',
    popupContent: {
      content: 'Khi thấy lỗi <code>Cannot find module \'...\' or its corresponding type declarations</code>, đừng lên Stack Overflow. 90% trường hợp là do AI vừa thêm package mới vào <code>package.json</code> nhưng bạn chưa chạy install.',
      code: `# Fix trong 10 giây — chạy 1 trong:
npm install
yarn
pnpm install`,
      insight: '✳ Thói quen tốt: sau khi AI thêm package mới, chạy <code>npm install</code> ngay — đừng đợi đến khi gặp lỗi.',
    },
  },
  {
    id: 53,
    slug: 'cach-dat-cau-hoi-cho-ai',
    title: 'Cách đặt câu hỏi cho AI để không bị câu trả lời chung chung',
    category: 'prompt',
    categoryLabel: 'PROMPT',
    type: 'short',
    date: '11·04·2026',
    readTime: '1 phút đọc',
    popupContent: {
      content: 'AI trả lời chung chung khi câu hỏi của bạn cũng chung chung. Thêm 2 yếu tố này: <strong>(1) Context cụ thể</strong> — bạn đang làm gì, dùng tool gì, bước nào kẹt. <strong>(2) Output mong muốn</strong> — code, giải thích, danh sách bước, hay so sánh?<br><br>Thay vì: <em>"Làm sao tối ưu website?"</em> → Hỏi: <em>"Tôi đang dùng Next.js 15 trên Vercel, LCP đang là 4.2s, cần danh sách 5 việc cần làm ngay để xuống dưới 2.5s."</em>',
      insight: '✳ Công thức: <strong>[Tôi đang dùng X] + [Muốn Y] + [Hiện tại Z đang xảy ra]</strong> → kết quả tốt hơn 80%.',
    },
  },
  {
    id: 48,
    slug: 'posthog-free-tier',
    title: 'PostHog free tier là đủ để track 1 landing page',
    category: 'deploy',
    categoryLabel: 'DEPLOY',
    type: 'short',
    date: '02·04·2026',
    readTime: '1 phút đọc',
    popupContent: {
      content: 'PostHog free tier cho 1 triệu events/tháng miễn phí — với 1 landing page thông thường gần như không bao giờ hết quota. Bạn có được: pageview, click tracking, session recording, heatmap, và basic funnel. Không cần credit card để đăng ký.',
      insight: '✳ Cài PostHog vào Next.js mất khoảng 5 phút — xem Bài 10 trong lộ trình Vibecode để có hướng dẫn từng bước.',
    },
  },
  {
    id: 42,
    slug: 'ten-bien-tieng-viet',
    title: 'Đặt tên biến bằng tiếng Việt trong code cũng không sao',
    category: 'workflow',
    categoryLabel: 'WORKFLOW',
    type: 'short',
    date: '21·03·2026',
    readTime: '1 phút đọc',
    popupContent: {
      content: 'Không có rule nào bắt buộc tên biến phải là tiếng Anh. Nếu bạn làm dự án cá nhân hoặc với team người Việt, dùng tên biến tiếng Việt hoàn toàn hợp lệ. JavaScript, TypeScript, Python đều support Unicode. AI cũng hiểu và làm việc với code tiếng Việt bình thường.',
      insight: '✳ Chỉ nên tránh tiếng Việt khi: dự án có contributor nước ngoài, hoặc bạn plan open-source về sau.',
    },
  },
  {
    id: 38,
    slug: 'cursor-composer-mode',
    title: 'Dùng Cursor "Composer" mode khi muốn sửa nhiều file cùng lúc',
    category: 'vibecode',
    categoryLabel: 'VIBECODE',
    type: 'short',
    date: '14·03·2026',
    readTime: '1 phút đọc',
    popupContent: {
      content: 'Cursor có 2 chế độ chính: <strong>Chat</strong> (Cmd+L) chỉ trả lời text — bạn phải tự apply vào code. <strong>Composer</strong> (Cmd+I) trực tiếp chỉnh sửa file và có thể sửa nhiều file trong cùng 1 lần. Khi cần thêm feature mới, thay đổi logic liên quan nhiều component, hoặc refactor — luôn dùng Composer.',
      insight: '✳ Trong Composer, kéo thả nhiều file vào để AI có context của tất cả file trước khi sửa — output sẽ nhất quán hơn nhiều.',
    },
  },
];

export const getTipBySlug = (slug: string): Tip | undefined => {
  return tips.find(tip => tip.slug === slug);
};

export const hasDetailContent = (tip: Tip): boolean => {
  return Boolean(tip.detailContent);
};

export const shouldShowFullTipLink = (tip: Tip): boolean => {
  if (tip.detailContent) {
    return true;
  }

  if (!tip.popupContent) {
    return false;
  }

  const plainContentLength = stripHtml(tip.popupContent.content).length;
  return plainContentLength >= DETAIL_PREVIEW_MIN_LENGTH || Boolean(tip.popupContent.code) || Boolean(tip.popupContent.insight);
};

export const getTipDetailContent = (tip: Tip) => {
  if (tip.detailContent) {
    return tip.detailContent;
  }

  if (!shouldShowFullTipLink(tip) || !tip.popupContent) {
    return undefined;
  }

  const relatedTips = tips
    .filter((candidate) => candidate.id !== tip.id && candidate.category === tip.category)
    .sort((a, b) => b.id - a.id)
    .slice(0, 3)
    .map((candidate) => candidate.id);

  const sections = [
    { type: 'paragraph' as const, content: tip.popupContent.content },
    ...(tip.popupContent.code ? [{ type: 'code' as const, language: 'txt', code: tip.popupContent.code }] : []),
    ...(tip.popupContent.insight ? [{ type: 'insight' as const, content: tip.popupContent.insight }] : []),
  ];

  return {
    heroTitle: tip.title,
    tools: 'Cursor · Claude Code',
    difficulty: 'Cơ bản',
    applyTime: '~3 phút',
    tags: [tip.categoryLabel, tip.type === 'short' ? 'tip nhanh' : 'tip dài'],
    sections,
    relatedTips,
  };
};

export const getTipById = (id: number): Tip | undefined => {
  return tips.find(tip => tip.id === id);
};

export const getShortTips = (): Tip[] => {
  return tips.filter(tip => tip.type === 'short').sort((a, b) => b.id - a.id);
};

export const getLongTips = (): Tip[] => {
  return tips.filter(tip => tip.type === 'long');
};

export const getDetailTips = (): Tip[] => {
  return tips.filter(shouldShowFullTipLink).sort((a, b) => b.id - a.id);
};

export const getRelatedTips = (ids: number[]): Tip[] => {
  return ids.map(id => getTipById(id)).filter((tip): tip is Tip => tip !== undefined);
};

export const getFeaturedTips = (): Tip[] => {
  return tips.filter(tip => [60, 54, 48, 42, 38].includes(tip.id));
};

export const getHotTips = (): Tip[] => {
  return tips.filter(tip => tip.isHot).slice(0, 6);
};

export const getAllTipsForList = (): Tip[] => {
  return [...tips].sort((a, b) => b.id - a.id);
};
