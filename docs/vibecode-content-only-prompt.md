# Vibecode Content-Only Prompt

Dung prompt nay khi muon mot AI khac viet hoac sua noi dung cho **1 bai con** trong trang chi tiet bai hoc Vibecode.

## Prompt

Ban dang viet **noi dung chi tiet cho 1 bai con** trong reader Vibecode.

Muc tieu:

- chi thay **phan content**
- **khong** thay doi bat ky phan nao cua shell giao dien
- output phai an toan de gan vao database ma khong lam vo UI

### Pham vi duoc phep sua

Chi duoc sua:

- noi dung body cua bai con

### Pham vi cam sua

Tuyet doi khong duoc sua, tao lai, hay mo ta lai cac phan sau:

- global header / nav
- ticker
- topbar ten bai
- sidebar ben trai
- danh sach bai con trong sidebar
- table of contents
- footer chuyen tiep ben duoi content
- global footer
- bat ky layout wrapper, class shell, token mau, spacing, typography system

Luu y quan trong:

- **sidebar la phan do admin quan ly**
- nguoi dung se tu them / sua / xoa cac muc o sidebar trong admin
- ban **khong duoc** chen noi dung shell vao output
- ban **khong duoc** sua text cua shell
- ban **khong duoc** sinh ra du lieu cho sidebar

### Ban phai tra ve 1 trong 2 format

#### Cach 1: JSON structured

Uu tien cach nay.

Chi duoc dung cac block sau:

- `p`
- `h3`
- `h4`
- `insight`
- `compare`
- `usecases`
- `grid2`
- `divider`

Schema:

```json
{
  "format": "structured",
  "version": 1,
  "blocks": [
    { "type": "h3", "text": "..." },
    { "type": "p", "text": "..." },
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

#### Cach 2: HTML

Chi dung khi that su can.

Neu dung HTML:

- chi tra ve **phan content**
- khong tra ve trang HTML day du
- khong co `html`, `head`, `body`
- khong co nav, sidebar, footer, toc
- nen dung heading semantic de TOC map duoc

TOC mapping hien tai:

- HTML se map tu `h2`, `h3`
- JSON structured se map tu `h3`, `h4`

Neu HTML khong co heading thi TOC se khong co item.

### Yeu cau ve noi dung

- viet dung giong dieu Vibecode/markAI: truc dien, ngan, de hieu, khong corporate SaaS
- phu hop cho marketer, khong lam phuc tap hoa bang ngon ngu ky thuat
- uu tien tinh doc duoc
- neu can nhan manh, dung semantic structure thay vi inline style
- khong tu y them CSS class moi
- khong tu y them script
- khong tu y them inline style

### Output rules

- chi tra ve **1 payload content**
- khong giai thich them
- khong markdown fence neu he thong dich dang can JSON/raw HTML
- khong chen ghi chu nhu "day la noi dung da sua"

## Ban prompt ngan gon de dung thuc te

```text
Hay viet/sua noi dung cho 1 bai con trong reader Vibecode. Chi thay phan content body. Khong duoc dung vao bat ky phan shell nao nhu header, topbar, sidebar, table of contents, footer chuyen tiep, global footer. Sidebar la phan admin quan ly, khong duoc sinh hay sua du lieu sidebar. Uu tien tra ve JSON structured voi cac block type: p, h3, h4, insight, compare, usecases, grid2, divider. Neu bat buoc dung HTML thi chi tra ve fragment content, khong co html/head/body, va phai dung h2/h3 de TOC map duoc.
```

## Ghi chu cho nguoi van hanh

Sau khi AI tra ve:

- neu la JSON structured: gan vao `content_json.blocks`
- neu la HTML: gan vao `content_json.html`

Shell se giu nguyen. Sidebar van lay tu admin/system, khong lien quan den content payload nay.
