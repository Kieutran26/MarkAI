# Vibecode Reader Shell Full Spec

Tai lieu nay ghi lai day du yeu cau hien tai cho trang chi tiet bai hoc Vibecode, bao gom:

- pham vi trang can giu co dinh
- phan content duoc phep thay
- contract du lieu on dinh cho AI khac
- design system va code giao dien cua phan da "quet"
- rule mapping table of contents
- quy trinh update noi dung 1 bai con sau nay

## 1. Dung route nao

Trang chi tiet bai hoc hien tai la:

- route: `/vibecode/:lessonSlug/:subSlug`
- page: [src/pages/SubLessonPage.tsx](/D:/MarkAI-1/src/pages/SubLessonPage.tsx)

Day la trang "reader detail" cua tung bai con.

## 2. Muc tieu cua shell nay

Muc tieu la:

- AI khac chi viet noi dung chi tiet cho tung bai con
- khong duoc lam anh huong den giao dien tong the
- header, topbar, sidebar, TOC, footer chuyen tiep, global footer van giu nguyen
- chi thay `content` o giua trang

Noi cach khac:

- `UI shell` la co dinh
- `content payload` la thay duoc

## 3. Pham vi shell co dinh

### 3.1 Global shell

- app shell: [src/App.tsx](/D:/MarkAI-1/src/App.tsx)
- global nav: [src/components/Nav.tsx](/D:/MarkAI-1/src/components/Nav.tsx)
- global footer: [src/components/Footer.tsx](/D:/MarkAI-1/src/components/Footer.tsx)

### 3.2 Reader shell

- shell wrapper: [src/components/reader/ReaderShell.tsx](/D:/MarkAI-1/src/components/reader/ReaderShell.tsx)
- topbar: [src/components/reader/LessonTopbar.tsx](/D:/MarkAI-1/src/components/reader/LessonTopbar.tsx)
- sidebar danh sach bai con: [src/components/reader/ReaderSidebar.tsx](/D:/MarkAI-1/src/components/reader/ReaderSidebar.tsx)
- table of contents: [src/components/reader/ReaderTableOfContents.tsx](/D:/MarkAI-1/src/components/reader/ReaderTableOfContents.tsx)
- header cua content: [src/components/reader/ContentHeader.tsx](/D:/MarkAI-1/src/components/reader/ContentHeader.tsx)
- footer chuyen tiep giua cac bai con: [src/components/reader/ContentFooter.tsx](/D:/MarkAI-1/src/components/reader/ContentFooter.tsx)

### 3.3 Phan duoc thay

Chi phan nay duoc AI khac thay:

- content body: [src/components/reader/content/ContentBody.tsx](/D:/MarkAI-1/src/components/reader/content/ContentBody.tsx)

Khong thay:

- Nav
- Ticker
- Topbar reader
- Sidebar trai
- TOC ben phai
- Footer chuyen tiep ben duoi content
- Global footer

## 4. Contract render hien tai

Trang detail hien tai render theo flow:

1. `SubLessonPage` lay du lieu theo `lessonSlug` + `subSlug`
2. Neu DB co dung module slug thi uu tien DB
3. Neu DB khong co thi roi ve hardcode fallback
4. `prepareReaderContent()` scan content de tao TOC
5. `ReaderShell` render shell co dinh quanh content

## 5. Nguon du lieu hien tai

### 5.1 Hardcode

- lesson overview data tong quat: [src/lib/lessons.ts](/D:/MarkAI-1/src/lib/lessons.ts)
- reader-detail hardcode day du cho bai 1: [src/lib/subLessons.ts](/D:/MarkAI-1/src/lib/subLessons.ts)

### 5.2 Database

- fetch public lesson: [src/lib/public-lesson-api.ts](/D:/MarkAI-1/src/lib/public-lesson-api.ts)
- mapper DB -> reader: [src/lib/public-lesson-mapper.ts](/D:/MarkAI-1/src/lib/public-lesson-mapper.ts)
- normalizer content: [src/lib/reader-content.ts](/D:/MarkAI-1/src/lib/reader-content.ts)
- TOC parser: [src/lib/reader-outline.ts](/D:/MarkAI-1/src/lib/reader-outline.ts)

## 6. Format content on dinh cho database

Moi bai con nen duoc luu thanh 1 module trong `public.lesson_modules`, va it nhat 1 row trong `public.lesson_blocks`.

Khuyen nghi dung format `structured`:

```json
{
  "format": "structured",
  "version": 1,
  "source": "hardcoded-reader-shell",
  "blocks": [
    { "type": "p", "text": "..." },
    { "type": "h3", "text": "..." },
    { "type": "h4", "text": "..." },
    { "type": "insight", "label": "...", "text": "..." },
    {
      "type": "compare",
      "headers": ["...", "..."],
      "rows": [
        {
          "left": "...",
          "leftStyle": "normal",
          "right": "...",
          "rightStyle": "normal"
        }
      ]
    },
    {
      "type": "usecases",
      "items": [
        { "icon": "01", "title": "...", "desc": "..." }
      ]
    },
    {
      "type": "grid2",
      "items": [
        { "label": "...", "title": "...", "desc": "..." }
      ]
    }
  ]
}
```

Fallback van hop le:

```json
{
  "html": "<h2>...</h2><p>...</p>"
}
```

## 7. TOC mapping rules

TOC hien tai duoc tao tu content, khong hardcode bang tay.

### 7.1 Neu content la JSON structured

TOC se map tu:

- `h3`
- `h4`

### 7.2 Neu content la HTML

TOC se map tu:

- `h2`
- `h3`

### 7.3 Dieu kien de TOC hoat dong

- HTML phai co heading that
- Neu chi co `p`, `div`, `strong` ma khong co heading thi TOC se khong co item
- Anchor id duoc tao tu dong
- Active state cua TOC duoc doi theo section dang visible

Code lien quan:

- [src/lib/reader-outline.ts](/D:/MarkAI-1/src/lib/reader-outline.ts)
- [src/components/reader/ReaderTableOfContents.tsx](/D:/MarkAI-1/src/components/reader/ReaderTableOfContents.tsx)

## 8. Design system cua reader shell

Nguon token tong:

- [docs/design-guidelines.md](/D:/MarkAI-1/docs/design-guidelines.md)
- [src/admin/theme-tokens.css](/D:/MarkAI-1/src/admin/theme-tokens.css)
- style shell thuc te: [src/index.css](/D:/MarkAI-1/src/index.css)

### 8.1 Visual direction

- editorial brutalism
- serif headline + mono UI + sans body
- nen sang, line ro, structure phang
- accent am dung cho active state, CTA, border-left

### 8.2 Typography

- Serif display: `Instrument Serif`
- Mono UI: `DM Mono`
- Sans body: `DM Sans`

### 8.3 Token nen nho

```css
--bg: #f7f5f0;
--bg2: #ede9e0;
--bg3: #e4dfd5;
--ink: #0d0d0d;
--ink2: #444444;
--muted: #888888;
--border: #d4cfc5;
--accent: #E88C2E;
```

## 9. UI code da quet

Day la phan giao dien can giu co dinh.

### 9.1 ReaderShell

```tsx
export default function ReaderShell({
  topbar,
  sidebar,
  header,
  content,
  footer,
  tocItems,
  activeTocId,
  sidebarOpen = false,
  onSidebarClose,
  mobileToggle,
}: ReaderShellProps) {
  return (
    <div className="reader-page">
      {topbar}
      <div className="reader-layout">
        {sidebar}
        {sidebarOpen && onSidebarClose ? <div className="sidebar-overlay" onClick={onSidebarClose} /> : null}
        <div className="reader-content">
          {header}
          <div className="reader-article-grid">
            {content}
            <ReaderTableOfContents tocItems={tocItems} activeTocId={activeTocId} />
          </div>
          {footer}
        </div>
      </div>
      {mobileToggle}
    </div>
  );
}
```

### 9.2 TOC component

```tsx
export default function ReaderTableOfContents({ tocItems, activeTocId }: ReaderTableOfContentsProps) {
  if (!tocItems.length) return null;

  return (
    <aside className="reader-toc" aria-label="Table of contents">
      <p className="reader-toc-label">Table of contents</p>
      <div className="reader-toc-list">
        {tocItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`reader-toc-link level-${item.level} ${activeTocId === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
```

### 9.3 ContentBody render contract

```tsx
switch (block.type) {
  case 'html':
  case 'p':
  case 'h3':
  case 'h4':
  case 'insight':
  case 'divider':
  case 'compare':
  case 'usecases':
  case 'grid2':
}
```

Neu AI khac viet content thi nen chi sinh ra cac block nam trong contract tren.

## 10. CSS shell quan trong

### 10.1 Topbar

```css
.topbar {
  position: sticky;
  top: 52px;
  z-index: 150;
  height: 44px;
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: stretch;
}
```

### 10.2 Reader layout

```css
.reader-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: calc(100vh - 52px - 44px);
}

.reader-article-grid {
  display: grid;
  grid-template-columns: minmax(0, 740px) 240px;
  gap: 0 2rem;
  align-items: start;
  padding: 0 3.5rem 4rem;
}
```

### 10.3 Sidebar trai

```css
.reader-sidebar {
  position: sticky;
  top: calc(52px + 44px);
  height: calc(100vh - 52px - 44px);
  overflow-y: auto;
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

.sidebar-item.active {
  background: var(--bg2);
  border-left: 2px solid var(--accent);
  padding-left: calc(1.2rem - 2px);
}
```

### 10.4 Header cua content

```css
.content-header {
  padding: 3rem 3.5rem 2.5rem;
  border-bottom: 1px solid var(--border);
}

.ch-title {
  font-family: var(--serif);
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  line-height: 1.15;
  margin-bottom: 0.9rem;
}

.ch-desc {
  font-family: var(--sans);
  font-size: 15px;
  font-weight: 300;
  color: var(--ink2);
  line-height: 1.75;
  max-width: 580px;
}
```

### 10.5 TOC ben phai

```css
.reader-toc {
  position: sticky;
  top: calc(52px + 44px + 1.5rem);
  align-self: start;
  border-left: 1px solid var(--border);
  padding: 2.8rem 0 0 1.4rem;
}

.reader-toc-link {
  display: block;
  font-family: var(--sans);
  font-size: 13px;
  line-height: 1.45;
  color: var(--muted);
  text-decoration: none;
  border-left: 2px solid transparent;
  padding: 0.55rem 0.7rem 0.55rem 0.9rem;
  margin-left: -1.4rem;
}

.reader-toc-link:hover {
  color: var(--ink);
  border-left-color: var(--accent);
}

.reader-toc-link.active {
  background: color-mix(in srgb, var(--accent) 12%, var(--bg) 88%);
  color: var(--ink);
  border-left-color: var(--accent);
}
```

### 10.6 Footer chuyen tiep

```css
.content-footer {
  border-top: 1px solid var(--border);
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.cf-btn-next {
  background: var(--ink);
}

.cf-btn-next:hover {
  background: var(--accent);
}
```

## 11. Responsive rules

Desktop:

- sidebar trai hien
- TOC ben phai hien
- article grid 2 cot: content + toc

Mobile:

- `reader-layout` ve 1 cot
- sidebar doi sang drawer
- TOC an di
- content full width

Code lien quan o [src/index.css](/D:/MarkAI-1/src/index.css) trong cac media query `max-width: 900px`, `768px`, `480px`.

## 12. Migrate hardcode -> database

Script migrate hien tai:

- [scripts/migrate-vibecode-reader-content.ts](/D:/MarkAI-1/scripts/migrate-vibecode-reader-content.ts)

Script nay:

- tao / upsert course `vibecode-web`
- upsert 10 lesson
- bai 1 uu tien lay reader-detail hardcode tu `src/lib/subLessons.ts`
- bai 2-10 lay hardcode tu `src/lib/lessons.ts`
- convert ve `content_json.blocks`
- replace `lesson_modules` + `lesson_blocks`

Script command:

```bash
npm run migrate:vibecode-reader
```

## 13. Sau nay thay noi dung 1 bai con the nao

Neu ban gui cho toi 1 trong 2 loai sau:

### 13.1 JSON structured

Toi se thay `content_json.blocks` cua module do.

### 13.2 HTML

Toi se thay `content_json.html` cua module do.

Neu HTML co `h2/h3` thi TOC van map theo.

## 14. Recommendation cho AI viet noi dung

Nen uu tien JSON structured thay vi HTML neu:

- muon on dinh hon
- muon validate de hon
- muon TOC predictable hon
- muon sau nay doi renderer ma khong mat semantic structure

HTML chi nen dung khi:

- can paste nguyen 1 doan content co san
- can rich text free-form nhanh

## 15. Rule cuoi cung

AI khac chi duoc thay:

- `content_json` cua 1 bai con

AI khac khong duoc thay:

- component shell
- CSS shell
- nav, topbar, sidebar, toc, footer
- route structure

Neu can doi giao dien shell, do la 1 task UI rieng, khong phai task content.
