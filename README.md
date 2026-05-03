# markAI.vn

Brutalist marketing site cho hệ sinh thái học AI ứng dụng của markAI.

Repo này hiện tập trung vào 2 lớp:

- `src/`: public website cho người học, gồm Home, Vibecode, Blog, Tips, Prompts, lesson pages, glossary page độc lập
- `src/admin/`: admin surface và theme token dùng chung

## Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- CSS token-based theming qua `src/admin/theme-tokens.css`

## Chạy local

Yêu cầu:

- Node.js 20+

Cài và chạy:

```bash
npm install
npm run dev
```

App mặc định chạy tại:

```bash
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

`npm run lint` hiện chạy TypeScript check bằng `tsc --noEmit`.

## Cấu trúc chính

```text
.
├─ src/
│  ├─ components/     # UI cho public site
│  ├─ lib/            # data helpers, static content
│  ├─ pages/          # route-level pages
│  ├─ App.tsx         # router
│  └─ index.css       # global styling cho public site
├─ src/admin/
│  ├─ components/
│  ├─ data/
│  ├─ globals.css
│  └─ theme-tokens.css
└─ docs/
   └─ design-guidelines.md
```

## Routing hiện tại

- `/`
- `/tu-dien-thuat-ngu`
- `/vibecode`
- `/vibecode/preview/:previewToken`
- `/vibecode/:lessonSlug`
- `/vibecode/:lessonSlug/:subSlug`
- `/blog`
- `/blog/:slug`
- `/tips`
- `/tips/:slug`
- `/prompts`
- `/about`
- `/feedback`
- `/report`
- `/contact`
- `/admin/*`

## Ghi chú route glossary

- Trang từ điển chuyên ngành là route độc lập tại `/tu-dien-thuat-ngu`
- URL cũ `/vibecode/tu-ngu-chuyen-nganh/tu-dien-thuat-ngu` hiện redirect sang route mới để giữ backward compatibility

## Design system

Nguồn design system nằm ở:

- `docs/design-guidelines.md`

Theme tokens gốc nằm ở:

- `src/admin/theme-tokens.css`

Public site import token tại:

- `src/index.css`

## Chỗ nên sửa khi build UI

- Đổi màu, spacing, semantic token: `src/admin/theme-tokens.css`
- Đổi pattern layout global, badge, nav, hero, article chrome: `src/index.css`
- Đổi route/header/footer: `src/components/`
- Đổi nội dung page: `src/pages/`

## Nguyên tắc implementation

- Ưu tiên sửa trực tiếp file đang dùng thay vì tạo bản enhanced/new
- Giữ layout sắc nét, nhiều đường kẻ, ít bo góc
- Accent chỉ dùng để dẫn hướng, highlight, CTA, active state
- Ưu tiên tính đọc được trên mobile trước khi polish animation
- Khi thêm section mới, tái dùng token, badge, button, hero pattern hiện có

## Build status

`npm run build` đang build pass.

Có thể còn warning về:

- CSS minify property parsing
- large chunk size từ Vite

Đây là warning hiện hữu của repo, không chặn build.
