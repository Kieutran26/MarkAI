import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import { closePool, pool } from '../server/db'
import type { ContentBlock } from '../src/lib/subLessons'

type ModuleInput = {
  slug: string
  moduleCode: string
  title: string
  summary: string
  content: ContentBlock[]
}

const COURSE_SLUG = 'vibecode-web'
const LESSON_SORT_ORDER = 4
const LESSON_SLUG = 'dung-giao-dien-web-nhanh-voi-ai'
const MARKDOWN_FILE = 'Bài 4 Dựng giao diện web nhanh với AI 363257c9727480f8b5c3c0cb089547b8.md'

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function inlineMarkdownToHtml(value: string) {
  return value
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
}

function cleanLine(line: string) {
  return line.trim().replace(/\s+$/g, '')
}

function stripMarkdown(value: string) {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`>#|-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function isModuleHeading(line: string) {
  return /^-\s+\*\*.+\*\*\s*$/.test(line)
}

function parseModuleHeading(line: string) {
  return line
    .replace(/^-\s+\*\*/, '')
    .replace(/\*\*\s*$/, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .trim()
}

function parseMarkdownTable(lines: string[], startIndex: number) {
  const tableLines: string[] = []
  let index = startIndex

  while (index < lines.length && cleanLine(lines[index]).startsWith('|')) {
    tableLines.push(cleanLine(lines[index]))
    index += 1
  }

  if (tableLines.length < 2) return { block: null, nextIndex: startIndex }

  const rows = tableLines.map((line) =>
    line
      .replace(/^\||\|$/g, '')
      .split('|')
      .map((cell) => inlineMarkdownToHtml(cell.trim())),
  )
  const header = rows[0]
  const body = rows.slice(2)
  const html = [
    '<table>',
    '<thead><tr>',
    ...header.map((cell) => `<th>${cell}</th>`),
    '</tr></thead>',
    '<tbody>',
    ...body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`),
    '</tbody>',
    '</table>',
  ].join('')

  return { block: { type: 'html', html } satisfies ContentBlock, nextIndex: index }
}

function flushParagraph(blocks: ContentBlock[], paragraph: string[]) {
  if (!paragraph.length) return
  const text = paragraph.join(' ').replace(/\s+/g, ' ').trim()
  if (text) blocks.push({ type: 'p', text: inlineMarkdownToHtml(text) })
  paragraph.length = 0
}

function markdownLinesToBlocks(lines: string[]) {
  const blocks: ContentBlock[] = []
  const paragraph: string[] = []
  let listItems: string[] = []
  let blockquote: string[] = []
  let codeFence: string[] | null = null
  let codeLanguage = ''

  const flushList = () => {
    if (!listItems.length) return
    blocks.push({ type: 'html', html: `<ol>${listItems.map((item) => `<li>${inlineMarkdownToHtml(item)}</li>`).join('')}</ol>` })
    listItems = []
  }

  const flushQuote = () => {
    if (!blockquote.length) return
    blocks.push({
      type: 'insight',
      label: 'Lưu ý',
      text: inlineMarkdownToHtml(blockquote.join(' ').replace(/\s+/g, ' ').trim()),
    })
    blockquote = []
  }

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index]
    const line = cleanLine(rawLine)

    if (codeFence) {
      if (line.startsWith('```')) {
        blocks.push({
          type: 'html',
          html: `<pre><code class="language-${codeLanguage}">${codeFence.join('\n')}</code></pre>`,
        })
        codeFence = null
        codeLanguage = ''
      } else {
        codeFence.push(rawLine.replace(/^    /, ''))
      }
      continue
    }

    if (line === '<html-block>') {
      flushParagraph(blocks, paragraph)
      flushList()
      flushQuote()
      const htmlLines: string[] = []
      index += 1
      while (index < lines.length && cleanLine(lines[index]) !== '</html-block>') {
        htmlLines.push(lines[index])
        index += 1
      }
      blocks.push({
        type: 'html',
        html: htmlLines.join('\n')
      })
      continue
    }

    if (!line) {
      flushParagraph(blocks, paragraph)
      flushList()
      flushQuote()
      continue
    }

    if (line.startsWith('```')) {
      flushParagraph(blocks, paragraph)
      flushList()
      flushQuote()
      codeLanguage = line.replace(/^```/, '').trim()
      codeFence = []
      continue
    }

    if (line.startsWith('|')) {
      flushParagraph(blocks, paragraph)
      flushList()
      flushQuote()
      const parsed = parseMarkdownTable(lines, index)
      if (parsed.block) blocks.push(parsed.block)
      index = parsed.nextIndex - 1
      continue
    }

    if (/^#{2,4}\s+/.test(line)) {
      flushParagraph(blocks, paragraph)
      flushList()
      flushQuote()
      const level = line.match(/^#+/)?.[0].length ?? 3
      const text = inlineMarkdownToHtml(line.replace(/^#{2,4}\s+/, '').trim())
      blocks.push({ type: level >= 4 ? 'h4' : 'h3', text } as ContentBlock)
      continue
    }

    if (line.startsWith('>')) {
      flushParagraph(blocks, paragraph)
      flushList()
      const text = line.replace(/^>\s?/, '').trim()
      if (text) blockquote.push(text)
      continue
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/)
    if (ordered) {
      flushParagraph(blocks, paragraph)
      flushQuote()
      listItems.push(ordered[1])
      continue
    }

    if (/^-\s+/.test(line)) {
      flushParagraph(blocks, paragraph)
      flushQuote()
      listItems.push(line.replace(/^-\s+/, ''))
      continue
    }

    paragraph.push(line)
  }

  flushParagraph(blocks, paragraph)
  flushList()
  flushQuote()

  return blocks
}

function lesson4Infographic(moduleCode: string): Extract<ContentBlock, { type: 'infographic' }> | null {
  const graphics: Record<string, Extract<ContentBlock, { type: 'infographic' }>> = {
    '4.1': {
      type: 'infographic',
      label: 'Workflow đúng khi dựng UI bằng AI',
      steps: [
        { label: '01', title: 'Dựng giao diện trước', desc: 'Chốt layout, visual direction, màu, font, spacing và cảm giác tổng thể trước khi code logic.' },
        { label: '02', title: 'Hoàn thiện visual', desc: 'Sửa hero, card, CTA, responsive và trạng thái rỗng cho đến khi nhìn đủ ổn để demo.' },
        { label: '03', title: 'Gắn tính năng sau', desc: 'Khi khung UI đã ổn định, mới thêm form, database, auth, API hoặc logic phức tạp.' },
      ],
      aside: {
        label: 'Đừng làm ngược',
        title: 'Code tính năng trước dễ làm UI vá víu',
        desc: 'Mỗi lần sửa giao diện có thể kéo theo lỗi layout, state hoặc flow đang chạy.',
      },
    },
    '4.2': {
      type: 'infographic',
      label: 'Tìm reference trước khi prompt',
      steps: [
        { label: '01', title: 'Chọn web gần mục tiêu', desc: 'Tìm một trang có mood, cấu trúc hoặc ngành giống thứ bạn muốn build.' },
        { label: '02', title: 'Ghi lại pattern', desc: 'Nhìn nav, hero, card, bảng giá, form, spacing, màu và cách trang dẫn mắt người xem.' },
        { label: '03', title: 'Dùng làm brief', desc: 'Đưa reference đó vào AI để giảm đoán mò và tăng khả năng ra UI đúng ý.' },
      ],
      aside: {
        label: 'Không bắt đầu trắng',
        title: 'Reference giúp AI hiểu gu thiết kế nhanh hơn',
        desc: 'Bạn không cần tự nghĩ từ đầu; chọn cái gần đúng rồi chỉnh theo nhu cầu của mình.',
      },
    },
    '4.3': {
      type: 'infographic',
      label: 'DESIGN.md biến visual thành context',
      steps: [
        { label: '01', title: 'Web mẫu', desc: 'Bạn chọn một website có style muốn học theo.' },
        { label: '02', title: 'DESIGN.md', desc: 'Tool extract màu, font, spacing, component rules thành một file markdown.' },
        { label: '03', title: 'AI code theo spec', desc: 'AI đọc file này để tạo UI nhất quán hơn thay vì tự bịa style.' },
      ],
      aside: {
        label: 'Context cụ thể',
        title: 'DESIGN.md mạnh hơn câu mô tả chung chung',
        desc: 'AI có token thiết kế cụ thể: mã màu, font, border, spacing và component behavior.',
      },
    },
    '4.4': {
      type: 'infographic',
      label: '3 đường lấy DESIGN.md',
      steps: [
        { label: '01', title: 'Extension Chrome', desc: 'Dùng khi muốn extract trực tiếp từ bất kỳ website nào đang mở.' },
        { label: '02', title: 'Kho DESIGN.md có sẵn', desc: 'Dùng khi cần nhanh: lấy style từ các web nổi tiếng đã được cộng đồng curate.' },
        { label: '03', title: 'Nhập URL để generate', desc: 'Dùng khi không muốn cài extension nhưng vẫn cần tạo DESIGN.md từ một URL cụ thể.' },
      ],
      aside: {
        label: 'Chọn nhanh',
        title: 'Không cần dùng cả ba cách',
        desc: 'Chọn cách ít ma sát nhất trong tình huống hiện tại, rồi đưa file đó vào AI IDE hoặc tool tạo web.',
      },
    },
    '4.5': {
      type: 'infographic',
      label: 'Quăng DESIGN.md vào tool AI',
      steps: [
        { label: '01', title: 'Paste DESIGN.md', desc: 'Đưa toàn bộ design system vào đầu prompt để AI có style guide rõ ràng.' },
        { label: '02', title: 'Mô tả app cần build', desc: 'Nói rõ loại web, section cần có, dữ liệu mẫu, CTA và trạng thái responsive.' },
        { label: '03', title: 'Lặp để sửa UI', desc: 'Xem output, yêu cầu sửa màu, spacing, section, copy hoặc behavior cho đến khi dùng được.' },
      ],
      aside: {
        label: 'Tool chỉ là phương tiện',
        title: 'Brief tốt mới quyết định output',
        desc: 'Google AI Studio, Base44, Lovable hay v0 đều tốt hơn khi nhận context thiết kế đủ rõ.',
      },
    },
    '4.6': {
      type: 'infographic',
      label: 'Từ UI generator về AI IDE',
      steps: [
        { label: '01', title: 'Tải code về máy', desc: 'Lấy project từ tool AI hoặc GitHub về một folder local rõ ràng.' },
        { label: '02', title: 'Chạy và kiểm tra', desc: 'Cài dependency, build, chạy dev server để nhìn UI thật trong browser.' },
        { label: '03', title: 'Hoàn thiện trong AI IDE', desc: 'Dùng Cursor, Claude Code hoặc Codex để polish UI, thêm tính năng và chuẩn bị deploy.' },
      ],
      aside: {
        label: 'Giữ DESIGN.md',
        title: 'File design vẫn dùng tiếp sau khi tải code',
        desc: 'Đặt ở root project để AI giữ style nhất quán khi thêm component hoặc sửa layout mới.',
      },
    },
  }

  return graphics[moduleCode] ?? null
}

function enhanceLesson4Content(moduleCode: string, content: ContentBlock[]) {
  const infographic = lesson4Infographic(moduleCode)
  if (!infographic) return content

  const insertAfter = content.findIndex((block) => block.type === 'p')
  if (insertAfter < 0) return [infographic, ...content]

  return [
    ...content.slice(0, insertAfter + 1),
    infographic,
    ...content.slice(insertAfter + 1),
  ]
}

function parseMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const title = lines.find((line) => line.startsWith('# '))?.replace(/^#\s+/, '').trim() ?? 'Bài 4'
  const modules: ModuleInput[] = []
  let currentTitle = ''
  let currentLines: string[] = []

  const pushCurrent = () => {
    if (!currentTitle) return
    const moduleNumber = modules.length + 1
    const moduleCode = `4.${moduleNumber}`
    const content = enhanceLesson4Content(moduleCode, markdownLinesToBlocks(currentLines))
    const firstParagraph = content.find((block): block is Extract<ContentBlock, { type: 'p' }> => block.type === 'p')
    const summary = stripMarkdown(firstParagraph?.text ?? currentTitle).slice(0, 220)
    modules.push({
      slug: `bai-4-${moduleNumber}-${slugify(currentTitle)}`.slice(0, 80).replace(/-+$/g, ''),
      moduleCode,
      title: currentTitle,
      summary,
      content,
    })
  }

  for (const line of lines) {
    if (line.startsWith('# ')) continue
    const lineWithoutIndent = line.replace(/\s+$/g, '')
    if (isModuleHeading(lineWithoutIndent)) {
      pushCurrent()
      currentTitle = parseModuleHeading(lineWithoutIndent)
      currentLines = []
      continue
    }
    if (currentTitle) currentLines.push(line.replace(/^    /, ''))
  }

  pushCurrent()

  return { title, modules }
}

async function upsertLesson(modules: ModuleInput[], title: string) {
  await pool.query('begin')
  try {
    const courseResult = await pool.query<{ id: string }>('select id from public.courses where slug = $1 limit 1', [COURSE_SLUG])
    const courseId = courseResult.rows[0]?.id
    if (!courseId) throw new Error(`Khong tim thay course ${COURSE_SLUG}`)

    const existingLesson = await pool.query<{ id: string; slug: string; status: 'draft' | 'published' | 'archived' }>(
      `select id, slug, status from public.lessons where course_id = $1 and sort_order = $2 limit 1`,
      [courseId, LESSON_SORT_ORDER],
    )
    const oldLesson = existingLesson.rows[0]
    if (!oldLesson) throw new Error(`Khong tim thay bai ${LESSON_SORT_ORDER} trong course ${COURSE_SLUG}`)

    const lessonResult = await pool.query<{ id: string }>(
      `update public.lessons
        set slug = $2,
            title = $3,
            summary = $4,
            status = $5,
            preview_updated_at = timezone('utc', now()),
            estimated_minutes = $6
        where id = $1
        returning id`,
      [
        oldLesson.id,
        LESSON_SLUG,
        title,
        modules[0]?.summary ?? 'Dựng giao diện web nhanh với AI bằng DESIGN.md và các tool tạo UI.',
        oldLesson.status,
        Math.max(20, modules.length * 5),
      ],
    )
    const lessonId = lessonResult.rows[0].id

    await pool.query('delete from public.lesson_blocks where lesson_id = $1', [lessonId])
    await pool.query('delete from public.lesson_modules where lesson_id = $1', [lessonId])

    for (const [index, module] of modules.entries()) {
      const moduleResult = await pool.query<{ id: string }>(
        `insert into public.lesson_modules (lesson_id, slug, module_code, title, summary, status, sort_order, estimated_minutes)
          values ($1, $2, $3, $4, $5, $6, $7, $8)
          returning id`,
        [lessonId, module.slug, module.moduleCode, module.title, module.summary, oldLesson.status, index + 1, 5],
      )

      await pool.query(
        `insert into public.lesson_blocks (lesson_id, module_id, block_type, title, content_json, sort_order, is_required)
          values ($1, $2, 'text', $3, $4::jsonb, 1, true)`,
        [
          lessonId,
          moduleResult.rows[0].id,
          module.title,
          JSON.stringify({
            format: 'structured',
            blocks: module.content,
            source: MARKDOWN_FILE,
            version: 1,
          }),
        ],
      )
    }

    await pool.query('commit')
    return { lessonId, oldSlug: oldLesson.slug }
  } catch (error) {
    await pool.query('rollback')
    throw error
  }
}

async function verifyLesson() {
  const result = await pool.query<{
    lesson_slug: string
    lesson_title: string
    module_code: string
    module_slug: string
    module_title: string
    block_count: string
    infographic_count: string
  }>(
    `select
        l.slug as lesson_slug,
        l.title as lesson_title,
        m.module_code,
        m.slug as module_slug,
        m.title as module_title,
        count(b.id)::text as block_count,
        coalesce(sum(
          (
            select count(*)
            from jsonb_array_elements(coalesce(b.content_json->'blocks', '[]'::jsonb)) item
            where item->>'type' = 'infographic'
          )
        ), 0)::text as infographic_count
      from public.courses c
      join public.lessons l on l.course_id = c.id
      join public.lesson_modules m on m.lesson_id = l.id
      left join public.lesson_blocks b on b.module_id = m.id
      where c.slug = $1 and l.sort_order = $2
      group by l.slug, l.title, m.module_code, m.slug, m.title, m.sort_order
      order by m.sort_order asc`,
    [COURSE_SLUG, LESSON_SORT_ORDER],
  )

  if (!result.rows.length) throw new Error('Khong tim thay du lieu bai 4 de verify.')
  console.log(`${result.rows[0].lesson_title} :: ${result.rows[0].lesson_slug}`)
  result.rows.forEach((row) => {
    console.log(`${row.module_code} ${row.module_slug} :: ${row.module_title} :: ${row.block_count} db blocks :: ${row.infographic_count} infographics`)
  })
}

async function main() {
  const markdownPath = path.resolve(process.cwd(), MARKDOWN_FILE)
  const markdown = fs.readFileSync(markdownPath, 'utf8')
  const parsed = parseMarkdown(markdown)

  if (process.argv.includes('--verify')) {
    await verifyLesson()
    return
  }

  if (process.argv.includes('--dry-run')) {
    console.log(parsed.title)
    parsed.modules.forEach((module) => {
      console.log(`${module.moduleCode} ${module.slug} :: ${module.title} :: ${module.content.length} blocks`)
    })
    return
  }

  const result = await upsertLesson(parsed.modules, parsed.title)
  console.log(`Uploaded ${parsed.modules.length} modules to lesson ${LESSON_SORT_ORDER}.`)
  console.log(`Old slug: ${result.oldSlug}`)
  console.log(`New slug: ${LESSON_SLUG}`)

  // --- AUTO SYNC TO LOCAL FALLBACK FILES ---
  try {
    const fallbackSubLessons = parsed.modules.map((m, idx) => {
      const prev = parsed.modules[idx - 1]
      const next = parsed.modules[idx + 1]
      return {
        id: m.moduleCode,
        slug: m.slug,
        lessonSlug: LESSON_SLUG,
        lessonId: LESSON_SORT_ORDER,
        lessonTitle: parsed.title,
        lessonTitleEm: 'với AI',
        prevSlug: prev ? prev.slug : null,
        nextSlug: next ? next.slug : null,
        prevTitle: prev ? prev.title : null,
        nextTitle: next ? next.title : null,
        eyebrow: m.moduleCode === '4.1' ? 'Quy trình' : m.moduleCode === '4.2' ? 'Tìm tham khảo' : m.moduleCode === '4.3' ? 'Design System' : m.moduleCode === '4.4' ? 'Công cụ' : m.moduleCode === '4.5' ? 'Tạo giao diện' : 'Hoàn thiện',
        title: m.title,
        titleEm: '',
        desc: m.summary,
        duration: '~5 phút',
        totalSubs: parsed.modules.length,
        currentIndex: idx + 1,
        content: m.content
      }
    })

    const subLessonsPath = path.resolve(process.cwd(), 'src/lib/subLessons.ts')
    let subLessonsContent = fs.readFileSync(subLessonsPath, 'utf8')
    const slMarkerStart = '// ========== BÀI 04 ==========';
    const slStartIdx = subLessonsContent.indexOf(slMarkerStart);
    if (slStartIdx !== -1) {
      const slEndIdx = subLessonsContent.indexOf('];\nexport function getSubLessonBySlug');
      subLessonsContent = subLessonsContent.substring(0, slStartIdx) + subLessonsContent.substring(slEndIdx);
    }
    const slNewBlock = `  ${slMarkerStart}\n` + fallbackSubLessons.map(sl => JSON.stringify(sl, null, 2).replace(/\n/g, '\n  ')).join(',\n  ') + ',\n';
    subLessonsContent = subLessonsContent.replace('];\nexport function getSubLessonBySlug', slNewBlock + '];\nexport function getSubLessonBySlug');
    fs.writeFileSync(subLessonsPath, subLessonsContent, 'utf8')
    console.log('Successfully synced and updated offline fallback src/lib/subLessons.ts!')

    const lessonSubLessons = parsed.modules.map((m) => ({
      id: m.moduleCode,
      title: m.title,
      eyebrow: m.moduleCode === '4.1' ? 'Quy trình' : m.moduleCode === '4.2' ? 'Tìm tham khảo' : m.moduleCode === '4.3' ? 'Design System' : m.moduleCode === '4.4' ? 'Công cụ' : m.moduleCode === '4.5' ? 'Tạo giao diện' : 'Hoàn thiện',
      desc: m.summary,
      contentType: 'text' as const
    }))
    
    const lessonData = {
      id: 4,
      slug: 'dung-giao-dien-web-nhanh-voi-ai',
      badge: 'UI AI',
      badgeType: 'dark' as const,
      duration: '~30 phút',
      subLessonCount: parsed.modules.length,
      title: parsed.title,
      titleEm: 'với AI',
      desc: 'Dựng giao diện trước, lấy DESIGN.md làm context, dùng Google AI Studio, Stitch, Base44, Lovable, Figma Make, Claude Design, v0.dev và Replit để tạo UI nhanh.',
      tags: ['DESIGN.md', 'UI', 'AI Studio', 'Base44', 'Lovable'],
      difficulty: 'Giao diện · thực hành',
      prevLesson: { id: 3, title: 'Cài đặt môi trường' },
      nextLesson: { id: 5, title: 'Làm quen Claude Code' },
      subLessons: lessonSubLessons
    }

    const lessonsPath = path.resolve(process.cwd(), 'src/lib/lessons.ts')
    let lessonsContent = fs.readFileSync(lessonsPath, 'utf8')
    const lMarkerStart = '// ========== BÀI 04 ==========';
    const lMarkerEnd = '  // ========== BÀI 05 ==========';
    const lStartIdx = lessonsContent.indexOf(lMarkerStart);
    const lEndIdx = lessonsContent.indexOf(lMarkerEnd);
    if (lStartIdx !== -1 && lEndIdx !== -1) {
      const lNewBlock = `${lMarkerStart}\n  ` + JSON.stringify(lessonData, null, 2).replace(/\n/g, '\n  ') + ',\n\n';
      lessonsContent = lessonsContent.substring(0, lStartIdx) + lNewBlock + lessonsContent.substring(lEndIdx);
      fs.writeFileSync(lessonsPath, lessonsContent, 'utf8')
      console.log('Successfully synced and updated offline fallback src/lib/lessons.ts!')
    }
  } catch (syncError) {
    console.error('Failed to sync changes to offline fallback files:', syncError)
  }
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
  .finally(() => closePool())
