import fs from 'node:fs';
import path from 'node:path';

const TARGET_DIR = 'docs/visual-demos';

// Tạo thư mục đích nếu chưa tồn tại
if (!fs.existsSync(TARGET_DIR)) {
  console.log(`Creating directory: ${TARGET_DIR}`);
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Đọc toàn bộ file ở thư mục gốc
const files = fs.readdirSync('.');

let count = 0;
files.forEach(file => {
  // Tìm các file bắt đầu bằng 'gif' (không phân biệt hoa thường) và kết thúc bằng '.html'
  if (/^gif.*\.html$/i.test(file)) {
    const oldPath = path.join('.', file);
    const newPath = path.join(TARGET_DIR, file);

    try {
      fs.renameSync(oldPath, newPath);
      console.log(`[MOVED] ${file} -> ${TARGET_DIR}`);
      count++;
    } catch (err) {
      console.error(`[ERROR] Could not move ${file}: ${err.message}`);
    }
  }
});

console.log(`\nDone! Moved ${count} files to ${TARGET_DIR}.`);
