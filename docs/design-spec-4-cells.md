# Amber Brutalist 4-Cell Grid Specification

Sử dụng bản đặc tả này để triển khai hoặc cập nhật các module mô phỏng (Demo) trong hệ thống Vibecode Glossary. Bản thiết kế này tập trung vào sự tối giản, tính tương tác và thẩm mỹ cao (High-fidelity).

## 1. Cấu trúc Layout (Grid)
- **Container**: Sử dụng `display: grid`.
- **Desktop**: `grid-template-columns: repeat(2, 1fr)` (2 hàng, 2 cột).
- **Mobile (< 600px)**: `grid-template-columns: 1fr` (1 cột).
- **Gap**: `14px`.
- **Max-width**: `940px`.

## 2. Thiết kế Card (.sc / .c)
- **Nền**: Màu tối (`#16161b` hoặc `#181818`).
- **Viền**: `1px solid #282830` (hoặc màu accent mờ).
- **Radius**: `3px`.
- **Interactive**: Luôn có thanh Accent Bar (`2px` cao) ở trên đỉnh card.
- **Indicator**: Một dấu chấm tròn màu Amber (`#E88C2E`) ở góc trên bên phải, có hiệu ứng `opacity` nhấp nháy (pulsating).

## 3. Tiêu đề Card (Header)
- **Bố cục**: Flexbox, `align-items: center`, `gap: 10px`.
- **Số thứ tự**: Đặt trong một box nhỏ, font `JetBrains Mono`, nền Amber mờ, viền Amber.
- **Tiêu đề**: Font `Space Grotesk`, size `14px`, weight `600`, ngay sát số thứ tự.

## 4. Phần ghi chú (Instructions)
- **Vị trí**: Nằm dưới cùng của mỗi card.
- **Style**:
    - `border-left: 2px solid #E88C2E` (hoặc màu accent của card).
    - `padding-left: 12px`.
    - `margin-top: 14px`.
    - `color: #707070` (muted text).
    - `font-size: 11.5px`.
- **Highlight**: Các từ khóa quan trọng đặt trong thẻ `<strong>` với màu Amber (`#E88C2E`).

## 5. Hệ màu & Typography
- **Màu chính (Accent)**: `#E88C2E` (Amber).
- **Màu nền**: `#0f0f12` (Deep Black).
- **Màu chữ**: `#e8e4dc` (Off-white).
- **Font chữ**:
    - Chữ chính: `Space Grotesk`.
    - Mã code/Số: `JetBrains Mono`.

## 6. Nguyên tắc Animation
- **Tính độc lập**: Mỗi ô phải có một vòng lặp `async` riêng (`while(true)`).
- **Hiệu ứng**: Ưu tiên các hiệu ứng Fade-in, Scale nhẹ, hoặc Highlight tuần tự các phần tử bên trong card.
- **Độ mượt**: Sử dụng `transition` tối thiểu `0.3s`.

---
*Khi áp dụng cho thuật ngữ mới, hãy đảm bảo nội dung mô phỏng bên trong (Simulation) phù hợp với ý nghĩa của thuật ngữ đó.*
