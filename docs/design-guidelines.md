# Design Guidelines

Design system cho `markAI.vn` và các bề mặt liên quan.

Mục tiêu không phải “đẹp chung chung”. Mục tiêu là:

- nhìn có chủ đích
- đọc nhanh
- nhận ra brand ngay
- triển khai nhanh mà không vỡ style

## 1. Design direction

Visual language của repo là:

- editorial brutalism
- terminal-inspired details
- serif headline + mono UI + sans body
- nền sáng, line rõ, cấu trúc phẳng
- accent ấm để nhấn CTA và trạng thái active

Tránh:

- glassmorphism
- gradient loang nhiều màu
- bo góc mềm kiểu SaaS generic
- shadow dày thay cho structure
- lạm dụng accent cho mọi text

## 2. Core tokens

Nguồn token:

- `src/admin/theme-tokens.css`

### Neutral palette

```css
--bg: #f7f5f0;
--bg2: #ede9e0;
--bg3: #e4dfd5;
--ink: #0d0d0d;
--ink2: #444444;
--muted: #888888;
--border: #d4cfc5;
```

### Brand palette

```css
--accent: #E88C2E;
--accent2: #E88C2E;
--accent-contrast: #0d0d0d;
```

### Support tokens

```css
--success: #16a34a;
--danger: #dc2626;
--info: #1d4ed8;
--surface-0: #0a0a0a;
--surface-1: #111111;
--surface-2: #1a1a1a;
--surface-3: #2a2a2a;
```

### Layout tokens

```css
--page-gutter: 60px;
--page-gutter-mobile: 20px;
```

## 3. Typography

Typography stack:

- Serif display: `Instrument Serif`
- Mono UI: `DM Mono`
- Sans body: `DM Sans`

### Usage rules

- `Instrument Serif`: H1, H2, page title, hero statements, key numbers
- `DM Mono`: nav, badge, labels, eyebrow, metadata, controls, code-like UI
- `DM Sans`: paragraph, body copy, supporting explanation

### Tone of type

- Headline phải ngắn, nhịp rõ, có khoảng thở
- Mono dùng để tạo interface feel, không dùng cho đoạn dài
- Body text nên nhẹ, thoáng, line-height rộng
- `em` trong headline thường dùng với `accent`

## 4. Color behavior

### Accent dùng cho

- CTA chính
- active nav / selected state
- inline emphasis ngắn
- badges quan trọng
- border-left callout
- progress / completion state

### Accent không dùng cho

- body paragraph dài
- mọi link mặc định nếu không cần tạo điểm nhấn
- disabled state
- background diện rộng không có lý do

### Text contrast

- nền `accent` + chữ trắng cho active state ở nav, badge, button
- nền sáng + chữ `ink` là mặc định
- disabled dùng `muted` + opacity, không dùng accent nhạt

## 5. Layout principles

Repo này ưu tiên line và spacing hơn shadow.

### Global behavior

- dùng `page-gutter` để canh lề ngang toàn site
- block full-width nhưng nội dung có nhịp lề rõ
- section thường ngăn bằng `border-bottom`
- card/list item thường phân tách bằng `border`

### Desktop

- gutter chuẩn: `60px`
- hero và editorial layout thường chia 2 cột
- sidebar và aside thường dùng sticky + border

### Mobile

- gutter chuẩn: `20px`
- collapse về 1 cột sớm
- ưu tiên readability hơn đối xứng
- nếu phải bỏ bớt chrome, bỏ phần phụ trước, giữ content chính

## 6. Component rules

### Nav

- chiều cao chuẩn: `52px`
- active item: nền `accent`, chữ trắng
- inactive item: chữ `muted`, hover nền `bg2`
- item active khi hover vẫn giữ nguyên active state, không bị xám đi
- vùng utility ở mép phải có thể break khỏi gutter nếu cần tạo edge-lock effect

### Buttons

- primary: nền `ink`, hover sang `accent`
- accent: nền `accent`, chữ trắng
- ghost: nền trong, border rõ, hover đổi border sang `accent`

Không dùng:

- pill radius
- glow
- heavy shadow

### Badges

Biến thể đang dùng:

- `.badge-dark`
- `.badge-accent`
- `.badge-outline`
- `.badge-green`

Rule:

- badge là mono, uppercase feel, nhỏ, gọn
- badge chỉ để encode trạng thái hoặc phân loại ngắn
- không biến badge thành đoạn copy dài

### Hero sections

Hero chuẩn của repo thường có:

- eyebrow mono
- headline serif
- 1 từ hoặc 1 cụm nhấn bằng `accent`
- body sans mảnh
- CTA block rõ
- panel phụ: stats, terminal preview, lesson snapshot, prompt sample

### Content blocks

- article, tip detail, prompt preview dùng border và spacing để chia cấp
- callout dùng `border-left: 2px solid var(--accent)`
- preview/code block dùng nền tối `surface-*`

## 7. Motion

Motion nên ít nhưng có dụng ý.

Cho phép:

- hover translate nhẹ
- border-color transition
- arrow shift nhỏ
- spinner/terminal cursor/subtle loop

Tránh:

- parallax
- scale lớn
- bounce
- animation làm trễ đọc nội dung

## 8. Content tone

markAI không nói như corporate SaaS.

Giọng nên:

- trực diện
- ngắn
- thực chiến
- ít hype
- có cảm giác “dùng được ngay”

UI copy nên tránh:

- “revolutionary”
- “cutting-edge”
- “AI-powered solutions”
- CTA mơ hồ kiểu “Learn more”

Ưu tiên:

- “Xem lộ trình”
- “Copy xài ngay”
- “Bắt đầu miễn phí”
- “Đọc bài”

## 9. Do / Don't

### Do

- dùng token trước khi hardcode màu
- dùng border để tạo structure
- giữ section titles ngắn
- tái dùng hero, badge, stats, list row pattern
- kiểm tra active, hover, disabled cùng lúc

### Don't

- thêm màu mới nếu chưa cần
- thêm radius/shadow chỉ để “trông hiện đại hơn”
- nhét quá nhiều accent vào cùng một viewport
- trộn nhiều pattern card trong cùng một section
- viết heading dài như đoạn mô tả

## 10. Implementation map

Khi cần chỉnh UI, xem theo thứ tự:

1. `src/admin/theme-tokens.css`
2. `src/index.css`
3. component ở `src/components/`
4. page ở `src/pages/`

## 11. Definition of done

Một UI change chỉ được xem là xong khi:

- đúng token
- active/hover/disabled rõ ràng
- mobile không vỡ nhịp
- text contrast ổn
- không tạo style lạc quẻ với phần còn lại
- build pass
