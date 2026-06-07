import { execSync } from 'child_process';
import fs from 'fs';

try {
  let currentOnDisk = '';
  try {
    currentOnDisk = fs.readFileSync('src/lib/lessons.ts', 'utf8');
  } catch (err) {}

  if (currentOnDisk.includes("slug: 'cai-dat-moi-truong'") && currentOnDisk.includes("subLessonCount: 7") && !currentOnDisk.includes("Một b  {")) {
    console.log("lessons.ts is already updated and correct. Skipping update.");
    process.exit(0);
  }

  console.log("Restoring lessons.ts from Git...");
  execSync('git checkout -- src/lib/lessons.ts');
  
  let content = fs.readFileSync('src/lib/lessons.ts', 'utf8');
  
  // Find Lesson 3 unique slug
  const slugMarker = "slug: 'cai-dat-moi-truong'";
  const slugIdx = content.indexOf(slugMarker);
  if (slugIdx === -1) {
    throw new Error("Could not find Lesson 3 slug in lessons.ts");
  }
  
  // Find the first '{' before the slug
  let startIdx = slugIdx;
  while (startIdx > 0 && content[startIdx] !== '{') {
    startIdx--;
  }
  
  // Find Lesson 4 comment
  const nextLessonComment = '// ========== BÀI 04 ==========';
  const endCommentIdx = content.indexOf(nextLessonComment);
  if (endCommentIdx === -1) {
    throw new Error("Could not find Lesson 4 comment in lessons.ts");
  }
  
  // Find the last '}' before Lesson 4 comment
  let endIdx = endCommentIdx;
  while (endIdx > startIdx && content[endIdx] !== '}') {
    endIdx--;
  }
  
  // Include the closing brace and any trailing comma or spaces
  endIdx++;
  while (endIdx < content.length && (content[endIdx] === ',' || content[endIdx] === '\r' || content[endIdx] === '\n' || content[endIdx] === ' ')) {
    endIdx++;
  }
  
  console.log(`Found Lesson 3 block from character ${startIdx} to ${endIdx}`);
  
  const newLesson3 = `{
    id: 3,
    slug: 'cai-dat-moi-truong',
    badge: 'SETUP',
    badgeType: 'dark',
    duration: '~40 phút',
    subLessonCount: 7,
    title: 'Cài gì vào máy để bắt đầu vibecode?',
    titleEm: 'Cài gì vào máy?',
    desc: 'Cài Node.js, VS Code, Git, GitHub, Vercel, Supabase, và AI IDE theo đúng thứ tự — bắt đầu từ con số 0.',
    tags: ['Node.js', 'VS Code', 'Git', 'GitHub', 'Vercel', 'Supabase', 'AI IDE'],
    difficulty: 'Setup · 40 phút',
    prevLesson: { id: 2, title: 'Từ ngữ chuyên ngành' },
    nextLesson: { id: 4, title: 'Dựng giao diện web nhanh với AI' },
    subLessons: [
      { id: '3.1', title: 'Node.js — nền tảng để chạy code', eyebrow: 'Node.js', desc: 'Node.js là môi trường để máy bạn hiểu và chạy được JavaScript.', contentType: 'text' },
      { id: '3.2', title: 'VS Code — editor chính để viết code', eyebrow: 'VS Code', desc: 'VS Code là code editor phổ biến nhất thế giới, miễn phí, của Microsoft.', contentType: 'text' },
      { id: '3.3', title: 'Git — để lưu lịch sử và deploy', eyebrow: 'Git', desc: 'Hình dung Git như một cỗ máy thời gian cho code.', contentType: 'text' },
      { id: '3.4', title: 'GitHub — nơi lưu code trên cloud', eyebrow: 'GitHub', desc: 'GitHub là nơi bạn lưu bản sao code lên internet.', contentType: 'text' },
      { id: '3.5', title: 'Vercel — nơi deploy web lên internet', eyebrow: 'Vercel', desc: 'Vercel đưa web của bạn lên internet để ai cũng truy cập được.', contentType: 'text' },
      { id: '3.6', title: 'Supabase — database cho web app', eyebrow: 'Supabase', desc: 'Supabase là database trên cloud để lưu dữ liệu web app.', contentType: 'text' },
      { id: '3.7', title: 'AI IDE — tuỳ chọn, có phí nếu muốn dùng nhiều', eyebrow: 'AI IDE', desc: 'Tìm hiểu về các AI IDE như Cursor, Windsurf, Trae, Antigravity.', contentType: 'text' }
    ]
  },\n\n`;

  const updatedContent = content.substring(0, startIdx) + newLesson3 + content.substring(endIdx);
  fs.writeFileSync('src/lib/lessons.ts', updatedContent, 'utf8');
  console.log("Successfully updated src/lib/lessons.ts!");
} catch (e: any) {
  console.error("Error in fix-and-update-lessons script:", e.message);
  process.exit(1);
}
