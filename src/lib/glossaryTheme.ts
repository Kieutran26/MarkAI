/**
 * Utility to transform visual demo & practice HTML to match markAI's brutalist/minimalist light theme.
 * Brand colors:
 * - Background: #FFFFFF (blends with container) or #F6F5F1 (page background)
 * - Cards: #FFFFFF with #E6E4DE borders
 * - Inner stages / canvas: #FFF5ED (soft orange) with #F5D3BA borders
 * - Text: #141414 (solid black ink), secondary #55534F
 * - Accent: #E8772E (markAI orange), hover #FFF5ED
 */

const GLOSSARY_LIGHT_THEME_CSS = `
<style id="markai-theme-injected">
:root {
  /* Backgrounds */
  --bg: #FFFFFF !important;
  --bg-main: #FFFFFF !important;
  --bg2: #FFF5ED !important;
  --bg3: #E6E4DE !important;
  --bgc: #FFFFFF !important;
  --card-bg: #FFFFFF !important;
  --bg-card: #FFFFFF !important;
  --card: #FFFFFF !important;
  --bgi: #FFF5ED !important;
  --card-alt: #F7F6F2 !important;
  --bg-el: #F1EFEA !important;
  --panel-bg: #FFFFFF !important;
  --sim-bg: #FFF5ED !important;

  /* Borders */
  --bd: #E6E4DE !important;
  --border: #E6E4DE !important;
  --border-hi: #141414 !important;
  --border-accent: #E8772E !important;

  /* Typography: Solid black for maximum legibility */
  --tx: #141414 !important;
  --text: #141414 !important;
  --fg: #141414 !important;
  --txm: #141414 !important;
  --text-muted: #141414 !important;
  --muted: #55534F !important;
  --fg-muted: #55534F !important;
  --txd: #55534F !important;
  --fg-dim: #55534F !important;

  /* Brand Accents */
  --ac: #E8772E !important;
  --accent: #E8772E !important;
  --amber: #E8772E !important;
  --amber-dim: rgba(232, 119, 46, 0.1) !important;
  --amber-glow: rgba(232, 119, 46, 0.25) !important;
  --acl: #D96B24 !important;
  --accent-light: #FF9A4D !important;
  --accent-dim: rgba(232, 119, 46, 0.12) !important;
  --accent-glow: rgba(232, 119, 46, 0.15) !important;
  --abg: rgba(232, 119, 46, 0.08) !important;
  --abg2: rgba(232, 119, 46, 0.16) !important;

  /* Status Colors */
  --rd: #EF4444 !important;
  --red: #EF4444 !important;
  --err: #EF4444 !important;
  --error: #EF4444 !important;
  --error-bg: rgba(239, 68, 68, 0.08) !important;
  --rdb: rgba(239, 68, 68, 0.08) !important;
  --rdb2: rgba(239, 68, 68, 0.16) !important;

  --gn: #16A34A !important;
  --ok: #16A34A !important;
  --success: #16A34A !important;
  --success-bg: rgba(22, 163, 74, 0.1) !important;
  --gnb: rgba(22, 163, 74, 0.1) !important;

  --warn: #D97706 !important;
  --info: #2563EB !important;
  --c1: #4F7FD1 !important;
  --c2: #16A34A !important;
  --c3: #E8772E !important;
}

/* Light Graph Grid Background */
html, body {
  background-color: #FFFFFF !important;
  background-image: 
    linear-gradient(rgba(20, 20, 20, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(20, 20, 20, 0.035) 1px, transparent 1px) !important;
  background-size: 20px 20px !important;
  color: #141414 !important;
  font-family: 'Space Grotesk', 'Be Vietnam Pro', -apple-system, sans-serif !important;
}

/* Remove default dark wrapper padding/borders inside iframe */
.pra, .page-wrapper {
  background: transparent !important;
  border: none !important;
  max-width: 100% !important;
  padding: 8px !important;
}

/* Base Cards and Containers */
.c, .card, .demo-card, .demo-container > div:not(.st):not(.stage):not(.preview-box), .g > div:not(.st):not(.stage) {
  background-color: #FFFFFF !important;
  border: 1px solid #E6E4DE !important;
  border-radius: 12px !important;
  color: #141414 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03) !important;
}

/* Card Accent Bar */
.c::before, .card::before {
  background: #E8772E !important;
  border-radius: 12px 12px 0 0 !important;
}

/* =========================================================================
   PREVIEW & SIMULATION CANVASES: SOFT ORANGE (#FFF5ED / #FDEEE3)
   ========================================================================= */
.pp,
.sim-area,
.preview-stage,
.preview-area,
.preview-device,
.stage-area,
.mockup,
.sim-box,
.display-area,
.viewport-box,
.demo-stage,
.canvas,
.canvas-wrap,
.live-preview {
  background-color: #FFF5ED !important;
  border: 1.5px solid #F5D3BA !important;
  border-radius: 12px !important;
  color: #141414 !important;
}

/* Light orange grid pattern on preview canvas */
.pp::before,
.sim-area::before {
  background-image: 
    linear-gradient(rgba(232, 119, 46, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(232, 119, 46, 0.08) 1px, transparent 1px) !important;
  background-size: 20px 20px !important;
  opacity: 1 !important;
}

/* Viewport label & dimension references */
.vp-ref,
.pp-margin,
.auto-margin {
  color: #9A5B2D !important;
  font-weight: 700 !important;
}

/* Container inside container practice */
.pp-con {
  border: 2px dashed #E8772E !important;
  background: #FFFFFF !important;
  box-shadow: 0 4px 14px rgba(232, 119, 46, 0.12) !important;
}

.sc-nav {
  background: #F7F6F2 !important;
  border-bottom: 1px solid #E6E4DE !important;
  color: #141414 !important;
  font-weight: 600 !important;
}

.sc-card {
  background: #FFFFFF !important;
  border: 1px solid #E6E4DE !important;
  border-radius: 6px !important;
}

.sc-btn {
  background: #E8772E !important;
}

/* Measurement line & labels */
.pp-dim-lbl {
  background: #FFF5ED !important;
  color: #E8772E !important;
  border: 1px solid #F5D3BA !important;
  border-radius: 4px !important;
}

.pp-dim-line {
  background: #E8772E !important;
  opacity: 0.7 !important;
}

.pp-dim-arr {
  color: #E8772E !important;
  opacity: 0.9 !important;
}

/* =========================================================================
   CODE SNIPPETS & CODE BOXES: SOFT ORANGE & CLEAR SYNTAX
   ========================================================================= */
.code-box {
  background: #FFF5ED !important;
  border: 1.5px solid #F5D3BA !important;
  border-radius: 8px !important;
  color: #141414 !important;
  font-weight: 600 !important;
  padding: 10px 14px !important;
  margin-bottom: 12px !important;
  line-height: 1.6 !important;
}
.code-box * {
  font-weight: 600 !important;
}

/* =========================================================================
   INTERNAL MOCKUPS & COMPARISON CARDS (BOOLEAN, STICKY, MOCK-UI, ETC.)
   ========================================================================= */
.comp-card {
  background: #FFFFFF !important;
  border: 1.5px solid #F5D3BA !important;
  border-radius: 8px !important;
  color: #141414 !important;
  box-shadow: 0 4px 12px rgba(232, 119, 46, 0.08) !important;
}
.user-age {
  color: #55534F !important;
  border-bottom: 1px solid #F5D3BA !important;
  font-weight: 600 !important;
}
.comp-expr {
  color: #141414 !important;
  font-weight: 700 !important;
}

/* Mock UI Window in Boolean / Flow control */
.ui-mock,
.mock-box,
.mock-sidebar,
.mock-footer,
.mock-subnav,
.tabbar,
.segmented,
.score-box,
.status-area,
.brand-ui {
  background: #FFFFFF !important;
  border: 1px solid #E6E4DE !important;
  border-radius: 8px !important;
  color: #141414 !important;
}
.ui-header,
.mock-subnav,
.mock-footer {
  background: #F7F6F2 !important;
  border-bottom: 1px solid #E6E4DE !important;
  color: #141414 !important;
}
.ui-body {
  background: #FFFFFF !important;
}
.ui-line {
  background: #E6E4DE !important;
}
.ui-placeholder {
  border: 1.5px dashed #F5D3BA !important;
  color: #8A8883 !important;
  background: #FFF5ED !important;
}

/* Switch & Knob in Boolean / Toggles */
.switch-box {
  background: #E6E4DE !important;
  border: 1px solid #DAD8D2 !important;
}
.switch-knob {
  background: #FFFFFF !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
}
.switch-box.active {
  background: #E8772E !important;
  border-color: #E8772E !important;
}
.switch-box.active .switch-knob {
  background: #FFFFFF !important;
}

/* Checklist and interactive login buttons */
.check-item {
  color: #141414 !important;
}
.check-box {
  background: #FFFFFF !important;
  border-color: #DAD8D2 !important;
}
.check-item.active {
  color: #141414 !important;
  font-weight: 600 !important;
}
.check-item.active .check-box {
  border-color: #E8772E !important;
  background: #FFF5ED !important;
  color: #E8772E !important;
}

.login-btn {
  background: #E6E4DE !important;
  color: #55534F !important;
  border: 1px solid #DAD8D2 !important;
}
.login-btn.active {
  background: #E8772E !important;
  color: #FFFFFF !important;
  border-color: #E8772E !important;
  box-shadow: 0 4px 12px rgba(232, 119, 46, 0.25) !important;
}

/* Prompt Box (in merge, popup, git, etc.) */
.prompt-box {
  background-color: #FFF5ED !important;
  border: 1.5px solid #F5D3BA !important;
  border-radius: 10px !important;
  color: #141414 !important;
}
.prompt-box::before {
  background: #FFF5ED !important;
  color: #E8772E !important;
  border: 1px solid #F5D3BA !important;
  border-radius: 4px !important;
}

/* Slider controls inside practices */
input[type=range] {
  background: #F5D3BA !important;
}
input[type=range]::-webkit-slider-thumb {
  background: #E8772E !important;
  border: 2px solid #FFFFFF !important;
  box-shadow: 0 1px 4px rgba(232, 119, 46, 0.4) !important;
}
input[type=range]::-moz-range-thumb {
  background: #E8772E !important;
  border: 2px solid #FFFFFF !important;
  box-shadow: 0 1px 4px rgba(232, 119, 46, 0.4) !important;
}

/* Preset buttons in practice panels */
.cp-pb,
.preset-btn {
  background: #FFFFFF !important;
  border: 1px solid #DAD8D2 !important;
  color: #141414 !important;
  font-weight: 600 !important;
}
.cp-pb:hover,
.preset-btn:hover {
  border-color: #E8772E !important;
  color: #E8772E !important;
  background: #FFF5ED !important;
}
.cp-pb.on,
.preset-btn.active,
.preset-btn.on {
  border-color: #E8772E !important;
  color: #FFFFFF !important;
  background: #E8772E !important;
}

/* Control Panel box (.cp) */
.cp {
  background: #FFFFFF !important;
  border: 1px solid #E6E4DE !important;
  border-radius: 12px !important;
}
.cp-label {
  color: #141414 !important;
  font-weight: 700 !important;
}
.cp-label b {
  color: #E8772E !important;
}

/* Feedback box (.fb) */
.fb {
  background: #FFF5ED !important;
  border-left: 3px solid #E8772E !important;
  border-radius: 0 8px 8px 0 !important;
}
.fb-txt {
  color: #141414 !important;
  font-weight: 500 !important;
}
.fb-txt em {
  color: #E8772E !important;
  font-weight: 700 !important;
}
.fb-tip {
  color: #55534F !important;
}

/* ALL Card titles, headings, and labels: Solid black #141414 for maximum prominence */
.card-title,
.ch h2,
.ch h3,
.section-title,
.section-header h2,
.section-header h3,
.pra-title,
.demo-title,
.stage-title,
.st-title,
.item-title,
.panel-title,
.box-title,
.hdr,
.heading,
.title,
h1, h2, h3, h4, h5, h6 {
  color: #141414 !important;
  font-weight: 700 !important;
  letter-spacing: 0.5px !important;
  opacity: 1 !important;
}

/* Instruction Callout & Descriptions: Solid black #141414 */
.ins,
.ins p,
.pra-goal,
.pra-desc,
.card-desc,
.desc,
.description,
.instruction,
.sub,
.subtitle,
.hint,
.card > p,
.c > p,
.pra > p,
.g p {
  color: #141414 !important;
  font-weight: 500 !important;
  opacity: 1 !important;
}

/* Instruction border and highlight */
.ins {
  border-left: 3px solid #E8772E !important;
  background: #FFF5ED !important;
  border-radius: 0 6px 6px 0 !important;
  padding: 8px 12px !important;
}

.ins strong,
.pra-goal strong,
p strong,
.desc strong {
  color: #E8772E !important;
  font-weight: 700 !important;
}

/* Number tags and badges: orange pill */
.num-box,
.section-num,
.ch .n,
.badge,
.chip {
  background: #FFF5ED !important;
  border: 1px solid rgba(232, 119, 46, 0.35) !important;
  color: #E8772E !important;
  font-weight: 700 !important;
}

/* Inner stages, preview canvas & panels */
.st, .stage, .preview-box, .canvas-area, .output-area, .pr-box, .hint, .pra-preview, .st-item {
  background-color: #FFF5ED !important;
  border: 1px solid #F5D3BA !important;
  border-radius: 8px !important;
  color: #141414 !important;
}

/* Key-value tags and badges */
.key-val, .val {
  background: #FFFFFF !important;
  border: 1px solid #E6E4DE !important;
  color: #141414 !important;
  font-weight: 600 !important;
}

/* Buttons */
.btn-primary {
  background: #E8772E !important;
  color: #FFFFFF !important;
  border: none !important;
}
.btn-primary:hover:not(:disabled) {
  background: #D96B24 !important;
}

.btn-secondary {
  background: #F1EFEA !important;
  color: #141414 !important;
  border: 1px solid #DAD8D2 !important;
}
.btn-secondary:hover:not(:disabled) {
  border-color: #E8772E !important;
  background: #FFF5ED !important;
  color: #E8772E !important;
}

.btn:not(.btn-primary):not(.btn-secondary):not(.btn-outline):not(.btn-ghost):not(.rst),
button.btn:not(.btn-primary):not(.rst) {
  background: #FFFFFF !important;
  border: 1px solid #DAD8D2 !important;
  color: #141414 !important;
  border-radius: 6px !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04) !important;
  font-weight: 600 !important;
}

.btn:hover:not(:disabled):not(.btn-primary):not(.rst) {
  border-color: #E8772E !important;
  color: #E8772E !important;
  background: #FFF5ED !important;
}

.btn.rst {
  background: #FEF2F2 !important;
  border: 1px solid #FECACA !important;
  color: #DC2626 !important;
}
.btn.rst:hover:not(:disabled) {
  background: #FEE2E2 !important;
  border-color: #DC2626 !important;
}

.btn-hint {
  background: #E8772E !important;
  color: #FFFFFF !important;
  border-radius: 4px !important;
  box-shadow: 0 2px 8px rgba(232, 119, 46, 0.35) !important;
}
.btn-hint::after {
  border-top-color: #E8772E !important;
}

/* Custom interactive controls */
.c-item {
  background: #FFFFFF !important;
  border: 1px solid #DAD8D2 !important;
  color: #141414 !important;
  border-radius: 6px !important;
}
.c-item.active {
  background: #FFF5ED !important;
  border-color: #E8772E !important;
  color: #E8772E !important;
  font-weight: 600 !important;
}

.u-icon {
  background: #E6E4DE !important;
  color: #141414 !important;
}

.pr-txt {
  color: #141414 !important;
  font-weight: 600 !important;
}

.ghost-state {
  border: 1.5px solid #E8772E !important;
  color: #E8772E !important;
  background: transparent !important;
}
</style>
`;

export function applyGlossaryTheme(html: string): string {
  if (!html) return '';

  // Inject before </head> if available
  if (html.includes('</head>')) {
    return html.replace('</head>', `${GLOSSARY_LIGHT_THEME_CSS}\n</head>`);
  }

  // Otherwise prepend
  return `${GLOSSARY_LIGHT_THEME_CSS}\n${html}`;
}
