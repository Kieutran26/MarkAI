# Glossary Component Hint Guide (Vibecode Style)

Dưới đây là cấu trúc và mã nguồn tiêu chuẩn để thêm thành phần "Hint" (chỉ dẫn) vào các nút bấm trong module thực hành của Vibecode. Thành phần này được thiết kế theo phong cách Brutalist, có hiệu ứng nhịp thở và không làm ảnh hưởng đến bố cục layout.

## 1. Cấu trúc HTML
Đặt thẻ `div.btn-hint` vào bên trong nút bấm cần chỉ dẫn (Nút bấm này phải có `position: relative`).

```html
<div class="menu-btn" onclick="openDrawer()">
  <!-- Các icon hoặc nội dung của nút -->
  <span></span><span></span><span></span>
  
  <!-- Thành phần Hint -->
  <div class="btn-hint">Click me!</div>
</div>
```

## 2. Mã nguồn CSS (Styles & Animation)
Thành phần này sử dụng các biến CSS (`--ac`, `--mn`, v.v.) từ hệ thống thiết kế Vibecode.

```css
/* Container cha phải có relative */
.menu-btn {
  position: relative;
  /* ... các style khác ... */
}

/* Style cho Badge Hint */
.btn-hint {
  position: absolute;
  top: 50%;
  right: calc(100% + 8px); /* Nằm bên trái nút, cách 8px */
  transform: translateY(-50%);
  
  background: var(--ac); /* Màu cam accent */
  color: #fff;
  font-family: var(--mn); /* Font JetBrains Mono */
  font-size: 8px;
  padding: 2px 6px;
  border-radius: 2px;
  white-space: nowrap;
  pointer-events: none; /* Không ngăn cản việc click vào nút cha */
  
  animation: pulseLeft 2s infinite; /* Hiệu ứng nhịp thở */
  z-index: 999; /* Luôn nằm trên cùng */
}

/* Mũi tên chỉ vào nút (Tooltip arrow) */
.btn-hint::after {
  content: '';
  position: absolute;
  right: -4px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid var(--ac);
}

/* Hiệu ứng nhịp thở hướng sang trái */
@keyframes pulseLeft {
  0% { transform: translateY(-50%) scale(1); }
  50% { transform: translateY(-50%) scale(1.1); }
  100% { transform: translateY(-50%) scale(1); }
}
```

## 3. Logic ẩn Hint (JavaScript)
Để tối ưu trải nghiệm, Hint nên biến mất ngay sau khi người dùng thực hiện hành động.

```javascript
function openDrawer() {
  // Logic mở component...
  
  // Tìm và ẩn hint
  const hint = document.querySelector('.btn-hint');
  if (hint) {
    hint.style.display = 'none';
  }
}
```

## 4. Lưu ý quan trọng
- **Xử lý tràn viền (Clipping)**: Nếu nút bấm nằm sát lề của một container có `overflow: hidden`, Badge Hint sẽ bị mất một phần. Hãy thiết lập `overflow: visible` cho container đó nếu cần Badge tràn ra ngoài (ví dụ: tràn sang cột điều khiển bên cạnh).
- **Vị trí linh hoạt**: 
  - Để đổi sang bên phải: Thay `right: 100%` thành `left: 100%` và đổi hướng mũi tên trong `::after`.
  - Để nằm đè lên trên: Thay bằng `bottom: 100%; left: 50%; transform: translateX(-50%);`.
