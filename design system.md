━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM BẮT BUỘC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CSS Variables (dán đúng chính xác vào :root):
  --bg:      #f7f5f0   ← warm white, KHÔNG phải #ffffff
  --bg2:     #ede9e0   ← cream, dùng cho section phụ / card hover
  --bg3:     #e4dfd5   ← cream đậm, dùng cho hover state thứ 3
  --ink:     #0d0d0d   ← đen chính
  --ink2:    #444444   ← đen phụ, body text
  --muted:   #888888   ← xám, label / meta / placeholder
  --border:  #d4cfc5   ← đường kẻ
  --accent:  #E8410A   ← cam đỏ, màu nhấn DUY NHẤT
  --accent2: #C93508   ← accent tối hơn, dùng cho hover
  --serif:   'Instrument Serif', serif
  --mono:    'DM Mono', monospace
  --sans:    'DM Sans', sans-serif

Google Fonts (bắt buộc):
  DM Mono: weight 300,400,500 + italic 400
  Instrument Serif: weight 400, style normal + italic
  DM Sans: opsz 9..40, weight 300,400,500 + italic 300

FONT RULES — không được lệch:
  Heading/Display  → font-family: var(--serif)
  Button/Nav/Label/Badge/Tag/Meta/Mono text → font-family: var(--mono)
  Body/Description/Card text → font-family: var(--sans)

LAYOUT RULES — tuyệt đối:
  KHÔNG border-radius trên button, card, badge, input (ngoại lệ: 3 dots Mac terminal)
  KHÔNG box-shadow bất kỳ đâu
  KHÔNG gradient background
  KHÔNG font nào ngoài 3 font đã định nghĩa
  Divider giữa section: border-bottom: 1px solid var(--border)
  Card/grid layout: border: 1px solid var(--border), không shadow
  Hover state: CHỈ đổi background-color (bg → bg2 hoặc ink → accent)
  Transition: 0.15s cho tất cả hover

ACCENT #E8410A chỉ dùng cho:
  · CTA button hover state
  · Section number (01), (02)... trong section-label
  · <em> tag trong heading → color + italic
  · Badge "MỚI", "HOT", "BẮT ĐẦU ĐÂY"
  · Border-left của insight block (2px solid)
  · Active nav link
  · Logo suffix "AI" trong markAI
  · Spinner/cursor trong terminal visual

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CẤU TRÚC TRANG (theo đúng thứ tự)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[NAV]
  Sticky top, height 52px, border-bottom
  Logo trái: "markAI" — font-mono 15px 500, chữ "AI" màu accent
  Nav links (border-left mỗi link, hover bg2):
    Vibecode (active → màu accent) · Blog · Tips · Prompts
    Analytics · Image · Video (muted, opacity 0.4, không click được — sắp ra)
  Nav right: "✦ Miễn phí 100%" — font-mono, màu accent, ✦ xoay animation

[TICKER — dark bar]
  background: var(--ink), height 32px
  Nội dung chạy: 8 items × 2 (để loop), font-mono 10px uppercase màu #555
  Nội dung: ✳ Vibecode ra mắt tháng 4/2026 · ✳ 7 bài học lộ trình zero · ✳ Miễn phí 100% · ✳ Analytics sắp ra · ✳ Generate Image sắp ra · ✳ Motion Video sắp ra · ✳ Blog · Tips · Prompt Library · ✳ Dành riêng dân Marketing
  CSS animation 36s linear infinite translateX(0 → -50%)

[HERO — 2 cột]
  Cột trái:
    eyebrow: "✳ AI cho dân Marketing · hoàn toàn miễn phí · 2026" (mono 11px uppercase muted)
    H1 (Instrument Serif, clamp 2.8→4.8rem): "Học AI không cần biết [strikethrough italic muted: lập trình.]"
    desc (sans 15px): "Lộ trình từ zero: Vibecode web, Analytics, Generate Image, Motion Video. Thực chiến · tiếng Việt · không hàn lâm · dùng được ngay."
    CTA primary: "Bắt đầu Vibecode →" + Ghost: "Đọc blog mới nhất"
    note (mono 11px muted): "✳ miễn phí · không cần email · không tracking"
  Cột phải — Mac Terminal Mockup:
    Outer box: background var(--ink), border 1px #2a2a2a
    Top bar: bg #1a1a1a, 3 dots (⬤#FF5F57 ⬤#FFBD2E ⬤#28CA41, border-radius:50%), URL "markai.vn/vibecode"
    Body: font-mono 13px, dark background
    Nội dung terminal: prompt ký tự → minh hoạ câu prompt AI coding thực tế → output (màu #28CA41)
    Cursor nhấp nháy (animation blink 0.8s)
    Insight block dưới: border-left 2px accent, font-mono 12px

[STATS BAR]
  4 stat: flex, border-right giữa mỗi stat
  Số: font-serif 2.4rem | Label: font-mono 11px muted
  Stats: "7 bài học vibecode" · "4 hướng dẫn AI sắp ra" · "100% miễn phí mãi mãi" · "0 yêu cầu kiến thức code"

[VIBECODE — SECTION ID="vibecode"]

  Path Header (dark full-width section):
    background var(--ink), padding 4rem 2rem
    Badge: "VIBECODE WEB ⚡" (mono 10px uppercase, bg accent)
    H2 (serif clamp 2→3.5rem): "Từ [em: zero] đến có web trong 1 buổi sáng."
    desc (sans 15px #888): "Lộ trình 7 bước — từ tư duy đến deploy thực tế."

  7 Bước Lộ Trình (list, mỗi bước là 1 row clickable):
    Grid 2 cột: [80px số] + [nội dung]
    Border-bottom giữa các bước, hover bg2
    Số bên trái: "BÀI" (mono 10px muted) + số lớn (serif 1.8rem), border-right
    Nội dung: badges + title (serif 1.2rem) + desc (sans 13px) + tags + mũi tên phải
    Mũi tên hover: translateX(5px) + màu accent

    BÀI 01 — Badge "BẮT ĐẦU ĐÂY" (accent) + "~20 phút" (outline)
      "Vibecode là gì? Khó không? Giúp gì cho Marketer?"
      Tags: tư duy · use case · marketer

    BÀI 02 — Badge "SETUP" (dark) + "~30 phút"
      "Cài gì vào máy để bắt đầu vibecode?"
      Tags: Node.js · Cursor · VS Code · Git · terminal

    BÀI 03 — Badge "TOOLS" (dark) + "~25 phút"
      "Công cụ & website hữu ích để vibecode ra web hoàn chỉnh"
      Tags: Cursor · v0.dev · Vercel · Bolt · Tailwind

    BÀI 04 — Badge "NGÔN NGỮ" (dark) + "~40 phút" + "GIF demo" (accent)
      "Từ ngữ chuyên ngành trong code & design — kèm GIF mô phỏng"
      Tags: spacing · flexbox · grid · radius · responsive · component

    BÀI 05 — Badge "PROMPT" (dark) + "~35 phút"
      "Cách prompt cho AI hiểu để code đúng ý bạn"
      Tags: prompt · Cursor AI · Claude Code · template

    BÀI 06 — Badge "WORKFLOW" (dark) + "~45 phút"
      "Tạo Skills & Workflow — cộng đồng đang share gì nhiều nhất?"
      Tags: Cursor Rules · CLAUDE.md · MCP · workflow · community

    BÀI 07 — Badge "DEPLOY" (dark) + "~50 phút" + "ĐÍCH ĐẾN" (green #16a34a)
      "Deploy + gắn PostHog & Google Search Console"
      Tags: Vercel · GitHub · PostHog · Google Search Console · domain

  Module Picker (bg2 section):
    Section label + heading: "Web chỉ là bắt đầu. [em: Còn nhiều hơn nữa.]"
    Grid 8 card:
      [✓ Available] Vibecode ra Web — 7 bài · đang học
      [Sắp ra badge] Vibecode ra App — React Native · Expo
      [Sắp ra] Vibecode ra Chatbot — Claude API · Telegram Bot
      [Sắp ra] Vibecode ra Tool nội bộ — Dashboard · Tracker
      [Sắp ra] Analytics với AI — GA4 · Looker · Claude
      [Sắp ra] Generate Image — Midjourney · Flux · Firefly
      [Sắp ra] Motion Video — Kling · Runway · HeyGen
      [Card góp ý] "Bạn muốn module gì tiếp theo? Góp ý →"
    Card không available: opacity 0.6, không clickable
    Badge "Sắp ra": position absolute top-right, border outline, font-mono 9px muted

[PROMPT LIBRARY TEASER — dark full-width section]
  background var(--ink), 2 cột
  Cột trái (text):
    section-label màu #555 với span accent
    H2 (serif, màu var(--bg)): "Prompt sẵn dùng — [em accent: lấy về xài liền.]"
    desc (sans #666)
    2 CTA: "Xem Prompt Library →" (btn accent bg) + "Submit prompt của bạn" (ghost on dark)
  Cột phải (code box):
    bg #0a0a0a, border #2a2a2a, padding 1.5rem
    Hiển thị prompt template thực tế, syntax highlight: #E8410A cho key, #98c379 cho value
    Footer: "✓ Dùng với..." màu #28CA41

[BLOG]
  Section label + H2 "Đọc · Hiểu · [em: Áp dụng.]"
  Header row: H2 trái + "Xem tất cả bài viết →" phải (mono 12px muted, hover ink)
  Grid 6 card (3 cột):
    badge-dark category + title serif + excerpt 2 dòng (line-clamp-2) + meta mono 10px muted
    Arrow → absolute bottom-right, hover translateX + accent
  Categories: VIBECODE · WORKFLOW · DEPLOY · TOOL REVIEW · CASE STUDY · ANALYTICS

[TIPS & MẸO]
  Section label + H2 "Tips nhỏ, [em: impact lớn.]"
  Header: H2 trái + "Xem tất cả tips →" phải
  Grid 4 tip-card (flex wrap):
    "TIP · 01" (mono 10px muted) + text (serif 1rem) + meta (mono 10px muted)

[TẠI SAO MIỄN PHÍ — bg2 section]
  H2: "Không phải freemium. [em: Miễn phí thật.]"
  4 card grid:
    ✳ Dành riêng cho dân Marketing
    ✳ Học xong dùng được ngay
    ✳ Cập nhật mỗi tuần
    ✳ Không quảng cáo · Không tracking

[CTA — bg2]
  H2 "Thôi nào, [em: bắt đầu bài 01 đi.]"
  desc + 2 buttons + note "✳ hoàn toàn miễn phí · không cần email · không cần đăng ký"

[FOOTER]
  Grid 4 cột, border-top
  Cột 1: Logo + tagline
  Cột 2: Vibecode (7 links bài học)
  Cột 3: Khám phá (Blog, Tips, Prompts, + 3 mục sắp ra mờ)
  Cột 4: markAI (Về, Góp ý, Báo lỗi, Liên hệ)
  Footer-bottom: border-top, 2 dòng mono 11px muted

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YÊU CẦU KỸ THUẬT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
· HTML đơn file, không framework ngoài
· Vanilla JS: chỉ ticker loop (innerHTML += innerHTML)
· Mobile responsive: breakpoint 768px (hero 1 cột, nav ẩn link thừa)
· breakpoint 480px: padding 1.2rem
· Ticker: duplicate innerHTML để loop liền mạch
· Không emoji trong section label và badge (chỉ dùng ✳ và →)
· Tất cả href="#" tạm thời — không broken link
════════════════════════════════════════════════════════
DESIGN SYSTEM — markAI.vn
Tài liệu tham chiếu đầy đủ (lưu lâu dài)
════════════════════════════════════════════════════════
1. TRIẾT LÝ
Tên style: Friendly Brutalist Minimalism
Tagline: Nội dung là trung tâm. Thiết kế phục vụ, không trang trí.
3 nguyên tắc cốt lõi:
Chức năng trước — mỗi element phải có lý do tồn tại
Thân thiện không ngây thơ — dễ đọc, dễ hiểu, nhưng có cá tính
Nhất quán tuyệt đối — cùng loại element = cùng style, không ngoại lệ
2. COLORS
code
CSS
:root {
  /* ── Backgrounds ── */
  --bg:      #f7f5f0;   /* Warm white — nền trang chính */
  --bg2:     #ede9e0;   /* Cream — section phụ, card hover, dark section sub-bg */
  --bg3:     #e4dfd5;   /* Cream đậm — hover state, empty card bg */

  /* ── Text ── */
  --ink:     #0d0d0d;   /* Đen chính — heading, btn primary bg */
  --ink2:    #444444;   /* Đen phụ — body, description, card text */
  --muted:   #888888;   /* Xám — label, meta, placeholder, disabled */

  /* ── UI ── */
  --border:  #d4cfc5;   /* Tất cả đường kẻ và grid line */
  --accent:  #E8410A;   /* Cam đỏ — màu nhấn DUY NHẤT */
  --accent2: #C93508;   /* Hover của accent */
}
Khi nào dùng --accent:
Dùng ✓	Không dùng ✗
Button primary hover	Button default bg
Section number (01)(02)	Background toàn section
<em> trong heading	Text body thông thường
Badge "MỚI" "HOT" "BẮT ĐẦU"	Border thông thường
Border-left insight block	Error state (dùng #dc2626)
Active nav link	Success state (dùng #16a34a)
Logo "AI" trong markAI	Muted label
Terminal cursor / prompt	Hover text thông thường
Dark sections (dùng trong Ticker, Path Header, Prompt Teaser):
code
Code
background: var(--ink)    → #0d0d0d
text chính: var(--bg)     → #f7f5f0
text phụ:   #888
text muted: #555
border:     #2a2a2a
sub-bg:     #1a1a1a
code-bg:    #0a0a0a
3. TYPOGRAPHY
code
CSS
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
Font Stack & Usage
Role	Font	Size	Weight	Notes
Display / H1	Instrument Serif	clamp(2.8rem, 5.5vw, 4.8rem)	400	letter-spacing: -0.025em, line-height: 1.05
Section H2	Instrument Serif	clamp(1.6rem, 3.5vw, 2.4rem)	400	line-height: 1.12
Path Header H2	Instrument Serif	clamp(2rem, 4.5vw, 3.5rem)	400	letter-spacing: -0.02em
Card / Step title	Instrument Serif	1.0–1.2rem	400	line-height: 1.3–1.4
Stat number	Instrument Serif	2.4rem	400	line-height: 1
Logo	DM Mono	15px	500	letter-spacing: -0.02em
Nav link	DM Mono	12px	400	letter-spacing: 0.02em
Button	DM Mono	12px	400	letter-spacing: 0.02em
Section label	DM Mono	11px	400	UPPERCASE, letter-spacing: 0.08em
Badge / Tag	DM Mono	10px	400	letter-spacing: 0.04–0.06em
Meta / date	DM Mono	10–11px	400	color: var(--muted)
Insight block	DM Mono	12px	400	
Ticker	DM Mono	10px	400	UPPERCASE, letter-spacing: 0.06em
Body text	DM Sans	15px	300–400	line-height: 1.7
Card desc	DM Sans	13px	300	line-height: 1.6, color: var(--ink2)
Section sub	DM Sans	14px	300	line-height: 1.7, max-width: 560px
Typography patterns
code
Html
<!-- Section label (luôn đi kèm section heading) -->
<p class="section-label"><span>✳</span> mô tả ngắn của section</p>

<!-- Section heading với accent italic -->
<h2 class="section-heading">Tiêu đề chính <em>từ nhấn.</em></h2>

<!-- H1 với strikethrough -->
<h1>Học AI không cần biết <span class="strike">lập trình.</span></h1>

<!-- Insight / quote block -->
<div class="insight">✳ <strong>Key insight:</strong> mô tả ngắn gọn.</div>
code
CSS
/* Patterns CSS */
.section-label        { font-family:var(--mono); font-size:11px; color:var(--muted); letter-spacing:.08em; text-transform:uppercase; margin-bottom:1rem; }
.section-label span   { color:var(--accent); margin-right:.4rem; }
.section-heading      { font-family:var(--serif); font-size:clamp(1.6rem,3.5vw,2.4rem); line-height:1.12; }
.section-heading em   { color:var(--accent); font-style:italic; }
h1 .strike            { text-decoration:line-through; color:var(--muted); font-style:italic; }
.insight              { font-family:var(--mono); font-size:12px; border-left:2px solid var(--accent); padding-left:.9rem; line-height:1.65; color:var(--ink2); }
4. SPACING & LAYOUT
code
Code
Spacing scale (base 8px):
  xs:   0.5rem  =  8px
  sm:   1rem    = 16px
  md:   2rem    = 32px
  lg:   4rem    = 64px
  xl:   5rem    = 80px

Section padding:      padding: 4rem 2rem  (desktop)
                      padding: 2.5rem 1.2rem  (mobile < 480px)
Hero padding:         padding: 5rem 2rem 4rem
Content max-width:    max-width: 1200px, margin: 0 auto
Nav height:           52px
Ticker height:        32px

Grid (border-grid, không dùng shadow):
  Outer:  border: 1px solid var(--border)
  Items:  border-right: 1px solid var(--border)
          border-bottom: 1px solid var(--border)

Section divider:      border-bottom: 1px solid var(--border)
5. COMPONENTS
Nav
code
CSS
nav {
  position: sticky; top: 0; z-index: 100;
  height: 52px; background: var(--bg);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 2rem;
}
.nav-logo { font-family:var(--mono); font-size:15px; font-weight:500; letter-spacing:-.02em; }
.nav-logo em { color:var(--accent); font-style:normal; }

/* Links — border-left mỗi link tạo divider tự nhiên */
.nav-links a {
  font-family:var(--mono); font-size:12px; color:var(--muted);
  padding:0 1rem; height:52px; display:flex; align-items:center;
  border-left:1px solid var(--border);
  transition: color .15s, background .15s;
}
.nav-links a:hover  { color:var(--ink); background:var(--bg2); }
.nav-links a.active { color:var(--accent); }
.nav-links a.disabled { color:var(--muted); opacity:.4; pointer-events:none; }
Ticker (dark)
code
CSS
.ticker { height:32px; background:var(--ink); overflow:hidden; }
.ticker-track { display:flex; white-space:nowrap; animation:tick 36s linear infinite; }
.ticker-item { font-family:var(--mono); font-size:10px; color:#555; padding:0 2rem; letter-spacing:.06em; text-transform:uppercase; }
.ticker-item b { color:var(--accent); }
@keyframes tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }
/* JS: track.innerHTML += track.innerHTML; để loop liền mạch */
Buttons
code
CSS
/* Primary: đen → hover accent */
.btn-primary {
  font-family:var(--mono); font-size:12px; letter-spacing:.02em;
  background:var(--ink); color:var(--bg);
  border:none; padding:11px 22px; cursor:pointer;
  text-decoration:none; display:inline-flex; align-items:center; gap:6px;
  transition:background .15s;
  /* KHÔNG border-radius */
}
.btn-primary:hover { background:var(--accent); }

/* Ghost: transparent → hover border đậm hơn */
.btn-ghost {
  font-family:var(--mono); font-size:12px; letter-spacing:.02em;
  background:transparent; color:var(--ink);
  border:1px solid var(--border); padding:10px 22px; cursor:pointer;
  text-decoration:none; display:inline-flex; align-items:center; gap:6px;
  transition:border-color .15s;
}
.btn-ghost:hover { border-color:var(--ink); }

/* Accent (CTA quan trọng trên dark bg) */
.btn-accent {
  background:var(--accent); color:white;
  /* kế thừa btn-primary */
}
.btn-accent:hover { background:var(--accent2); }

/* Ghost trên dark background */
.btn-ghost-inv {
  background:transparent; color:#888;
  border:1px solid #2a2a2a; /* dark border */
}
.btn-ghost-inv:hover { color:white; border-color:#555; }
Badges
code
CSS
.badge { font-family:var(--mono); font-size:10px; padding:2px 8px; letter-spacing:.04em; /* NO border-radius */ }
.badge-dark    { background:var(--ink); color:var(--bg); }
.badge-accent  { background:var(--accent); color:white; }
.badge-outline { border:1px solid var(--border); color:var(--muted); background:transparent; }
.badge-green   { background:#16a34a; color:white; }
/* Badge "Sắp ra" trên module card: position absolute, top-right */
.badge-soon { position:absolute; top:1rem; right:1rem; border:1px solid var(--border); color:var(--muted); font-size:9px; }
Tags (topic tags, step tags)
code
CSS
.step-tag {
  font-family:var(--mono); font-size:10px;
  background:var(--bg2); border:1px solid var(--border); color:var(--muted);
  padding:2px 9px;
  /* NO border-radius */
}
Path Step (lộ trình row)
code
CSS
.path-step {
  display:grid; grid-template-columns:80px 1fr;
  border-bottom:1px solid var(--border);
  text-decoration:none; color:inherit;
  transition:background .15s; cursor:pointer;
}
.path-step:hover { background:var(--bg2); }

.path-step-num {
  border-right:1px solid var(--border);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  padding:2rem 0; gap:4px;
}
.step-num-text { font-family:var(--mono); font-size:10px; color:var(--muted); letter-spacing:.06em; }
.step-num-big  { font-family:var(--serif); font-size:1.8rem; color:var(--ink); }
.path-step.active .step-num-big { color:var(--accent); }

.path-step-body { padding:2rem 2rem 2rem 2.5rem; }

.step-arrow {
  font-family:var(--mono); font-size:14px; color:var(--muted);
  margin-left:auto; align-self:center; padding-right:2rem; flex-shrink:0;
  transition:transform .15s, color .15s;
}
.path-step:hover .step-arrow { transform:translateX(5px); color:var(--accent); }
Card (blog, why, module)
code
CSS
/* Blog card */
.blog-card {
  padding:2rem; border-right:1px solid var(--border); border-bottom:1px solid var(--border);
  text-decoration:none; color:inherit; display:block;
  transition:background .15s; position:relative;
}
.blog-card:hover { background:var(--bg2); }
.blog-arrow { position:absolute; bottom:2rem; right:2rem; font-family:var(--mono); font-size:13px; color:var(--muted); transition:transform .15s, color .15s; }
.blog-card:hover .blog-arrow { transform:translateX(4px); color:var(--accent); }

/* Module card */
.module-card { padding:2rem; border-right:1px solid var(--border); border-bottom:1px solid var(--border); position:relative; opacity:.6; }
.module-card.available { opacity:1; transition:background .15s; }
.module-card.available:hover { background:var(--bg2); }
Stats bar
code
CSS
.stats { display:flex; flex-wrap:wrap; border-bottom:1px solid var(--border); }
.stat  { flex:1; min-width:120px; padding:1.8rem 2rem; border-right:1px solid var(--border); }
.stat:last-child { border-right:none; }
.stat-num   { font-family:var(--serif); font-size:2.4rem; line-height:1; margin-bottom:.3rem; }
.stat-label { font-family:var(--mono); font-size:11px; color:var(--muted); letter-spacing:.04em; }
Mac Terminal Mockup
code
CSS
.hero-terminal { background:var(--ink); border:1px solid #2a2a2a; }
.term-bar { background:#1a1a1a; border-bottom:1px solid #2a2a2a; height:32px; display:flex; align-items:center; padding:0 12px; gap:6px; }
.term-dot { width:10px; height:10px; border-radius:50%; } /* 3 dots: ngoại lệ border-radius duy nhất */
.term-dot.r { background:#FF5F57; }
.term-dot.y { background:#FFBD2E; }
.term-dot.g { background:#28CA41; }
.term-cursor { display:inline-block; width:8px; height:14px; background:var(--accent); animation:blink .8s step-end infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
/* Syntax colors trong terminal: keyword #E8410A · string #98c379 · comment #555 · success #28CA41 */
Spinner animation (nav logo icon)
code
CSS
.nav-free::before { content:'✦'; animation:spin 4s linear infinite; }
@keyframes spin { to { transform:rotate(360deg); } }
6. SECTION PATTERNS
Pattern A — Light section (mặc định)
code
Html
<div class="section-full">
  <div class="section-inner">
    <p class="section-label"><span>✳</span> section id · mô tả ngắn</p>
    <h2 class="section-heading">Tiêu đề <em>nhấn.</em></h2>
    <p class="section-sub">Mô tả 1–2 câu...</p>
    <!-- content -->
  </div>
</div>
Pattern B — Dark section (Ticker, Path Header, Prompt Teaser)
code
Html
<div style="background:var(--ink); border-bottom:1px solid #1a1a1a">
  <div style="max-width:1200px; margin:0 auto; padding:4rem 2rem">
    <!-- Tất cả text trên đây: màu var(--bg) hoặc #888 cho phụ -->
  </div>
</div>
Pattern C — Cream section (Why Free, Module Picker, CTA)
code
Html
<div class="section-full" style="background:var(--bg2)">
  <div class="section-inner">
    <!-- content trên nền cream -->
  </div>
</div>
7. CONTENT GUIDELINES (tone of voice)
Viết thế này ✓	Không viết thế này ✗
"Học AI không cần biết lập trình."	"Nền tảng học tập AI tiên tiến hàng đầu"
"Thôi nào, bắt đầu bài 01 đi."	"Bắt đầu hành trình học AI ngay hôm nay!"
"Miễn phí thật. Không phải freemium."	"Hoàn toàn miễn phí cho mọi người dùng"
"7 bài · lộ trình từ zero"	"Chương trình học đầy đủ và toàn diện"
"✳ không cần email · không tracking"	dùng bullet • hoặc -
Dùng · ngăn cách thay dấu phẩy	Câu dài hơn 20 chữ trong headline
Section number (01) hoặc ✳	Header không có context number
Strikethrough từ cũ: lập trình.	Bold quá nhiều
8. RESPONSIVE
code
CSS
@media (max-width: 768px) {
  .hero { grid-template-columns: 1fr; gap: 2rem; }
  .hero-visual { display: none; }                    /* ẩn terminal trên mobile */
  .prompt-teaser-inner { grid-template-columns: 1fr; }
  .path-step { grid-template-columns: 56px 1fr; }    /* thu nhỏ số bên trái */
  nav .nav-links li:nth-child(n+4) { display: none; }/* ẩn link thừa */
}

@media (max-width: 480px) {
  nav, .section-inner, .path-header, .hero { padding-left: 1.2rem; padding-right: 1.2rem; }
  footer { grid-template-columns: 1fr; padding: 2rem 1.2rem; }
  .stats { flex-direction: column; }
  .stat  { border-right: none; border-bottom: 1px solid var(--border); }
}
9. QUYẾT ĐỊNH DESIGN — TUYỆT ĐỐI KHÔNG VI PHẠM
code
Code
✗ border-radius trên button, card, badge, input, modal, toolbar
   → Ngoại lệ DUY NHẤT: 3 dots Mac terminal (border-radius: 50%)
✗ box-shadow bất kỳ đâu
✗ gradient background (trừ shimmer loader nếu cần)
✗ font nào ngoài Instrument Serif / DM Mono / DM Sans
✗ màu hardcode hex trong component — luôn dùng CSS variable
✗ font-weight 600, 700, 800 — chỉ dùng 300, 400, 500
✗ animation phức tạp — chỉ ticker + blink + spin
✗ emoji trong section label, badge, nav (chỉ dùng ✳ và →)

✓ border: 1px solid var(--border) — không bao giờ dùng shadow thay thế
✓ hover = đổi background-color HOẶC border-color, không transform phức tạp
✓ transition: 0.15s ease cho tất cả hover
✓ font-mono cho TẤT CẢ UI text (button, nav, label, badge, tag, meta)
✓ cursor: pointer trên tất cả clickable elements
✓ Separator dùng ✳ không phải • hay -
✓ Khoảng cách dùng · không phải dấu phẩy trong meta/label
10. PROMPT NGẮN — TẠO TỪNG COMPONENT LẺ
Tạo thêm bài học (path step):
code
Code
Thêm 1 path-step vào lộ trình markAI.vn.
Design system: Udemi Style #E8410A, DM Mono + Instrument Serif, NO border-radius.
Grid: 80px số | nội dung. Hover → bg2, mũi tên translateX + accent.
Bài số: [X] | Badge: [DARK TEXT] | Thời gian: [~X phút]
Tiêu đề: [...]
Mô tả: [1-2 câu]
Tags: [tag1 · tag2 · tag3]
Tạo thêm blog card:
code
Code
Thêm blog card theo markAI style.
badge-dark category | title font-serif | excerpt 2 dòng line-clamp | meta mono muted
Hover: bg2 | Arrow → absolute bottom-right, hover translateX + accent
Category: [VIBECODE/WORKFLOW/DEPLOY/TOOL REVIEW/CASE STUDY/ANALYTICS]
Title: [...]
Excerpt: [1-2 câu]
Thời gian đọc: [X phút] | Ngày: [DD·MM·YYYY]
Tạo thêm module card:
code
Code
Thêm module card vào grid markAI.vn.
Style: border-right + border-bottom var(--border). Không available → opacity 0.6.
Badge "Sắp ra": position absolute top-right, font-mono 9px, border outline muted.
Icon: [emoji] | Tên: [...] | Meta: [tool1 · tool2]
Available: [yes/no]
Tạo thêm tip card:
code
Code
Thêm tip card cho markAI.vn tips section.
"TIP · XX" mono 10px muted | text font-serif 1rem | meta mono 10px muted
Tip số: [XX]
Nội dung tip: [1-2 câu ngắn, thực dụng]
Category: [vibecode/deploy/workflow/etc]
11. CHECKLIST TRƯỚC KHI SUBMIT
code
Code
Typography:
[ ] Heading = font-serif, body = font-sans, UI/label/badge = font-mono
[ ] Không font-weight > 500 ở bất kỳ đâu
[ ] Section-label luôn có section-heading ngay dưới

Colors:
[ ] Tất cả màu dùng CSS variable (không hardcode hex trong component)
[ ] --accent xuất hiện đúng context: hover, active, em, accent badge
[ ] Dark section: bg var(--ink), text var(--bg), sub-text #888

Components:
[ ] Không border-radius nào (trừ 3 dots terminal)
[ ] Không box-shadow nào
[ ] Tất cả hover đổi background chứ không dùng transform/scale

Layout:
[ ] max-width: 1200px với margin: 0 auto cho content
[ ] Divider = border-bottom var(--border)
[ ] Grid = border outer + border-right/bottom inner

Content:
[ ] Ticker: innerHTML duplicated để loop
[ ] href="#" tạm cho tất cả link chưa có trang
[ ] Nav: mục sắp ra = opacity .4 + pointer-events:none
[ ] Footer: mục sắp ra = muted + opacity .5 + không clickable

Responsive:
[ ] 768px: hero 1 cột, ẩn terminal, ẩn nav link thừa
[ ] 480px: padding về 1.2rem, stats stack dọc, footer 1 cột