type TechnicalTerm = {
  slug: string;
  term: string;
  aliases: string[];
  definition: string;
  lessonSlug?: string;
};

export const technicalTerms: TechnicalTerm[] = [
  { slug: 'fix-bug', term: 'fix bug', aliases: ['fix bug'], definition: 'Sửa lỗi trong sản phẩm hoặc code để mọi thứ chạy đúng như mong muốn.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'border-radius', term: 'border radius', aliases: ['border radius', 'radius border'], definition: 'Độ bo góc của khung, nút, card hoặc bất kỳ thành phần giao diện nào.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'estimate', term: 'estimate', aliases: ['estimate'], definition: 'Ước lượng thời gian hoặc công sức cần để làm một tính năng.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'brief', term: 'brief', aliases: ['brief'], definition: 'Bản mô tả ngắn gọn yêu cầu, mục tiêu và phạm vi công việc để người khác thực hiện.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'deploy', term: 'deploy', aliases: ['deploy'], definition: 'Đưa website hoặc ứng dụng từ máy làm việc lên môi trường online để người khác truy cập được.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'landing-page', term: 'landing page', aliases: ['landing page'], definition: 'Trang đích tập trung vào một mục tiêu cụ thể như đăng ký, mua hàng hoặc để lại thông tin.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'responsive', term: 'responsive', aliases: ['responsive'], definition: 'Giao diện tự thích ứng tốt với nhiều kích thước màn hình như điện thoại, tablet và desktop.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'sprint', term: 'sprint', aliases: ['sprint'], definition: 'Một chu kỳ làm việc ngắn của team sản phẩm hoặc kỹ thuật, thường kéo dài 1 đến 2 tuần.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'cta', term: 'CTA', aliases: ['CTA', 'call to action'], definition: 'Lời kêu gọi hành động, ví dụ như nút “Đăng ký”, “Mua ngay” hoặc “Xem thêm”.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'prototype', term: 'prototype', aliases: ['prototype'], definition: 'Bản thử nghiệm nhanh để kiểm tra ý tưởng trước khi làm sản phẩm hoàn chỉnh.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'dashboard', term: 'dashboard', aliases: ['dashboard'], definition: 'Màn hình tổng hợp dữ liệu, chỉ số hoặc báo cáo để theo dõi tình hình.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'chatbot', term: 'chatbot', aliases: ['chatbot'], definition: 'Công cụ chat tự động giúp trả lời câu hỏi hoặc hỗ trợ người dùng.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'quiz', term: 'quiz', aliases: ['quiz'], definition: 'Biểu mẫu câu hỏi ngắn dùng để phân loại, khảo sát hoặc dẫn dắt người dùng.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'iterate', term: 'iterate', aliases: ['iterate'], definition: 'Làm đi làm lại theo từng vòng nhỏ để cải thiện sản phẩm dần dần.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'setup', term: 'setup', aliases: ['setup'], definition: 'Cài đặt hoặc chuẩn bị cấu hình ban đầu để bắt đầu dùng một công cụ hay hệ thống.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'dev', term: 'dev', aliases: ['dev', 'developer'], definition: 'Người làm kỹ thuật hoặc lập trình, phụ trách xây dựng và chỉnh sửa sản phẩm số.', lessonSlug: 'tu-ngu-chuyen-nganh' },
  { slug: 'api', term: 'API', aliases: ['API'], definition: 'Cầu nối để hai hệ thống hoặc hai phần mềm trao đổi dữ liệu với nhau.', lessonSlug: 'tu-ngu-chuyen-nganh' },
];

const htmlCache = new Map<string, string>();
const textCache = new Map<string, string>();
const aliasMap = new Map<string, TechnicalTerm>();
const aliasPattern = technicalTerms
  .flatMap((item) => item.aliases)
  .sort((left, right) => right.length - left.length)
  .map(escapeRegExp)
  .join('|');

for (const item of technicalTerms) {
  for (const alias of item.aliases) {
    aliasMap.set(normalizeKey(alias), item);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeKey(value: string) {
  return value.toLocaleLowerCase('vi-VN');
}

function createTechnicalTermMarkup(matchedText: string) {
  const entry = aliasMap.get(normalizeKey(matchedText));
  if (!entry) return escapeHtml(matchedText);

  return `
    <span class="tech-term" tabindex="0" data-term="${escapeHtml(entry.term)}">
      <span class="tech-term__label">${escapeHtml(matchedText)}</span>
      <span class="tech-term__tooltip" role="tooltip">
        <strong>${escapeHtml(entry.term)}</strong>
        <span>${escapeHtml(entry.definition)}</span>
      </span>
    </span>
  `.trim();
}

function annotateTextNode(text: string) {
  if (!aliasPattern) return text;

  const regex = new RegExp(`(?<![\\p{L}\\p{N}])(${aliasPattern})(?![\\p{L}\\p{N}])`, 'giu');
  let cursor = 0;
  let result = '';

  for (const match of text.matchAll(regex)) {
    const matchedText = match[0];
    const offset = match.index ?? 0;
    result += escapeHtml(text.slice(cursor, offset));
    result += createTechnicalTermMarkup(matchedText);
    cursor = offset + matchedText.length;
  }

  if (cursor === 0) {
    return escapeHtml(text);
  }

  result += escapeHtml(text.slice(cursor));
  return result;
}

export function annotateTechnicalText(text: string) {
  if (textCache.has(text)) return textCache.get(text) || text;
  const annotated = annotateTextNode(text);
  textCache.set(text, annotated);
  return annotated;
}

export function annotateTechnicalHtml(html: string) {
  if (!html || htmlCache.has(html)) return htmlCache.get(html) || html;
  if (typeof document === 'undefined') return html;

  const container = document.createElement('div');
  container.innerHTML = html;

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    const current = walker.currentNode as Text;
    const parent = current.parentElement;
    if (!parent) continue;
    if (parent.closest('.tech-term')) continue;
    if (['SCRIPT', 'STYLE'].includes(parent.tagName)) continue;
    if (!current.nodeValue?.trim()) continue;
    nodes.push(current);
  }

  for (const node of nodes) {
    const parent = node.parentNode;
    const text = node.nodeValue || '';
    const annotated = annotateTextNode(text);
    if (!parent || annotated === escapeHtml(text)) continue;

    const fragmentContainer = document.createElement('span');
    fragmentContainer.innerHTML = annotated;
    const fragment = document.createDocumentFragment();
    while (fragmentContainer.firstChild) {
      fragment.appendChild(fragmentContainer.firstChild);
    }
    parent.replaceChild(fragment, node);
  }

  const annotatedHtml = container.innerHTML;
  htmlCache.set(html, annotatedHtml);
  return annotatedHtml;
}
