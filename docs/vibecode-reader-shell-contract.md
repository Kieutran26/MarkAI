# Vibecode Reader Shell Contract

Muc tieu: cho phep AI khac chi viet `content` cua trang chi tiet bai hoc, khong duoc chạm vao giao dien shell.

## Trang dung shell nay

- Global site shell: [src/App.tsx](/D:/MarkAI-1/src/App.tsx)
- Global header: [src/components/Nav.tsx](/D:/MarkAI-1/src/components/Nav.tsx)
- Global footer: [src/components/Footer.tsx](/D:/MarkAI-1/src/components/Footer.tsx)
- Reader detail shell: [src/components/reader/ReaderShell.tsx](/D:/MarkAI-1/src/components/reader/ReaderShell.tsx)
- Public detail page route: [src/pages/SubLessonPage.tsx](/D:/MarkAI-1/src/pages/SubLessonPage.tsx)

## Phan shell co dinh

Khong de AI content sua:

- Global nav
- Ticker / app chrome
- Topbar cua bai
- Sidebar danh sach module trong bai
- Table of contents
- Footer chuyen tiep sang phan truoc / phan tiep theo
- Global footer

## Phan duoc thay

Chi thay `content` ben trong article reader.

Slot content hien tai duoc render boi:

- [src/components/reader/content/ContentBody.tsx](/D:/MarkAI-1/src/components/reader/content/ContentBody.tsx)

## Format content on dinh cho database

Moi module trong `public.lesson_modules` nen co 1 row tuong ung trong `public.lesson_blocks` voi:

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

Fallback van duoc ho tro:

```json
{
  "html": "<h2>...</h2><p>...</p>"
}
```

## Rule thao tac ve sau

Neu ban gui cho toi:

- JSON theo format `structured` tren
- hoac 1 doan HTML cho 1 module

thi minh chi can thay `content_json` cua module/block do, shell giao dien se giu nguyen.

## Script migrate

Script migrate hardcode hien co:

- [scripts/migrate-vibecode-reader-content.ts](/D:/MarkAI-1/scripts/migrate-vibecode-reader-content.ts)

Script nay:

- uu tien lay bai 1 tu `src/lib/subLessons.ts`
- lay bai 2-10 tu `src/lib/lessons.ts`
- convert sang `content_json.blocks`
- insert vao `lesson_modules` + `lesson_blocks`
