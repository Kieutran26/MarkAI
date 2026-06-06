# Bài 4: Dựng giao diện web nhanh với AI

- **Mở đầu**
    
    Một sai lầm hay gặp khi mới vibecode: **nhảy vào code tính năng luôn mà chưa có giao diện**.
    
    Kết quả là app chạy được nhưng trông xấu, layout vỡ, mỗi lần chỉnh UI lại phá tính năng đang chạy. Mất thời gian gấp đôi.
    
    Cách làm đúng hơn: **dựng giao diện trước — hoàn thiện visual — rồi mới code tính năng vào sau**
    
    Bài này giới thiệu các tool mình thường dùng nhất:

<html-block>
<section class="tool-showcase" aria-label="Các công cụ dựng giao diện web nhanh">
  <style>
    .tool-showcase {
      margin: 2rem 0;
    }
    .tool-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.25rem;
      margin-top: 1.5rem;
    }
    .tool-card {
      background: var(--bg);
      border: 1px solid var(--border);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      min-height: 260px;
    }
    .tool-card:hover {
      transform: translate(-3px, -3px);
      box-shadow: 6px 6px 0px var(--accent);
      border-color: var(--accent);
    }
    .tool-card:hover .tool-logo-wrapper {
      border-color: var(--accent);
      transform: scale(1.05);
    }
    .tool-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.2rem;
    }
    .tool-logo-wrapper {
      width: 52px;
      height: 52px;
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
      flex-shrink: 0;
      padding: 6px;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .tool-logo {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      image-rendering: -webkit-optimize-contrast;
    }
    .tool-info {
      display: flex;
      flex-direction: column;
    }
    .tool-name {
      font-family: var(--display);
      font-size: 16px;
      font-weight: 700;
      color: var(--ink);
      line-height: 1.2;
    }
    .tool-desc {
      font-family: var(--sans);
      font-size: 13.5px;
      color: var(--ink2);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }
    .tool-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px dashed var(--border);
      padding-top: 1rem;
      margin-top: auto;
    }
    .tool-badge {
      font-family: var(--mono);
      font-size: 9px;
      padding: 3px 8px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 500;
    }
    .badge-free {
      background: color-mix(in srgb, #16a34a 8%, var(--bg));
      color: #16a34a;
      border: 1px solid color-mix(in srgb, #16a34a 24%, var(--border));
    }
    .badge-limits {
      background: color-mix(in srgb, var(--accent) 8%, var(--bg));
      color: var(--accent);
      border: 1px solid color-mix(in srgb, var(--accent) 24%, var(--border));
    }
    .badge-paid {
      background: color-mix(in srgb, #dc2626 8%, var(--bg));
      color: #dc2626;
      border: 1px solid color-mix(in srgb, #dc2626 24%, var(--border));
    }
    .tool-strength {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--muted);
      letter-spacing: 0.04em;
    }
    @media (max-width: 480px) {
      .tool-grid {
        grid-template-columns: 1fr;
        gap: 0.85rem;
      }
      .tool-card {
        min-height: auto;
        padding: 1.1rem;
      }
      .tool-logo-wrapper {
        width: 44px;
        height: 44px;
        padding: 4px;
      }
      .tool-name {
        font-size: 15px;
      }
      .tool-desc {
        font-size: 13px;
        margin-bottom: 1rem;
      }
    }
  </style>
  <div class="tool-grid">
    <!-- Card 1: Google AI Studio -->
    <article class="tool-card">
      <div>
        <div class="tool-header">
          <div class="tool-logo-wrapper">
            <img class="tool-logo" src="/aistudio.png" alt="Google AI Studio Logo" />
          </div>
          <div class="tool-info">
            <h4 class="tool-name">Google AI Studio</h4>
            <span class="tool-strength">Model mạnh nhất</span>
          </div>
        </div>
        <p class="tool-desc">Prompt → code nhanh, model mạnh nhất, không giới hạn. Thích hợp để code prototype nhanh chóng.</p>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-free">Hoàn toàn FREE</span>
      </div>
    </article>

    <!-- Card 2: Stitch -->
    <article class="tool-card">
      <div>
        <div class="tool-header">
          <div class="tool-logo-wrapper">
            <img class="tool-logo" src="/Google-Stitch-Logo.png" alt="Stitch Logo" />
          </div>
          <div class="tool-info">
            <h4 class="tool-name">Stitch</h4>
            <span class="tool-strength">Nhái giao diện nhanh</span>
          </div>
        </div>
        <p class="tool-desc">Upload ảnh tham khảo → AI nhái theo. Hoặc ghi Prompt, giao diện sinh ra rất đẹp và hiện đại.</p>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-free">FREE (Beta)</span>
      </div>
    </article>

    <!-- Card 3: Base44 -->
    <article class="tool-card">
      <div>
        <div class="tool-header">
          <div class="tool-logo-wrapper" style="background: #111;">
            <img class="tool-logo" src="/base44.png" alt="Base44 Logo" />
          </div>
          <div class="tool-info">
            <h4 class="tool-name">Base44</h4>
            <span class="tool-strength">Ưu tiên dùng nhất</span>
          </div>
        </div>
        <p class="tool-desc">Giao diện cực kỳ đẹp, hiện đại. Mình ưu tiên dùng công cụ này nhất cho các dự án vibecode.</p>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-limits">FREE giới hạn</span>
      </div>
    </article>

    <!-- Card 4: Lovable -->
    <article class="tool-card">
      <div>
        <div class="tool-header">
          <div class="tool-logo-wrapper" style="background: #000;">
            <img class="tool-logo" src="/lovable-logo.avif" alt="Lovable Logo" />
          </div>
          <div class="tool-info">
            <h4 class="tool-name">Lovable</h4>
            <span class="tool-strength">Tích hợp Database</span>
          </div>
        </div>
        <p class="tool-desc">Giao diện đẹp, tự động tạo database + login ngay từ đầu. Tuy nhiên rất dễ hết credit miễn phí.</p>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-limits">FREE giới hạn</span>
      </div>
    </article>

    <!-- Card 5: Figma Make -->
    <article class="tool-card">
      <div>
        <div class="tool-header">
          <div class="tool-logo-wrapper">
            <img class="tool-logo" src="/figma-make-logo.png" alt="Figma Make Logo" />
          </div>
          <div class="tool-info">
            <h4 class="tool-name">Figma Make</h4>
            <span class="tool-strength">Figma sang Web</span>
          </div>
        </div>
        <p class="tool-desc">Tạo web cực đẹp trực tiếp từ bản thiết kế Figma của bạn, giữ nguyên các specs và layout chuẩn.</p>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-limits">FREE giới hạn</span>
      </div>
    </article>

    <!-- Card 6: Claude Design -->
    <article class="tool-card">
      <div>
        <div class="tool-header">
          <div class="tool-logo-wrapper">
            <img class="tool-logo" src="/claude-design.png" alt="Claude Design Logo" />
          </div>
          <div class="tool-info">
            <h4 class="tool-name">Claude Design</h4>
            <span class="tool-strength">Cực kỳ thông minh</span>
          </div>
        </div>
        <p class="tool-desc">Rất đẹp và cực kỳ mạnh mẽ. Tuy nhiên chi phí sử dụng đắt, yêu cầu có tài khoản Claude Pro trở lên.</p>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-paid">Claude Pro</span>
      </div>
    </article>

    <!-- Card 7: v0.dev -->
    <article class="tool-card">
      <div>
        <div class="tool-header">
          <div class="tool-logo-wrapper" style="background: #000;">
            <img class="tool-logo" src="/v0.png" alt="v0.dev Logo" />
          </div>
          <div class="tool-info">
            <h4 class="tool-name">v0.dev</h4>
            <span class="tool-strength">Tạo UI React tốt nhất</span>
          </div>
        </div>
        <p class="tool-desc">Sinh UI components cực nhanh từ text hoặc ảnh chụp. Sử dụng thư viện Shadcn UI và Tailwind CSS.</p>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-limits">FREE giới hạn</span>
      </div>
    </article>

    <!-- Card 8: Replit -->
    <article class="tool-card">
      <div>
        <div class="tool-header">
          <div class="tool-logo-wrapper" style="background: #0f172a;">
            <img class="tool-logo" src="/replit.png" alt="Replit Logo" />
          </div>
          <div class="tool-info">
            <h4 class="tool-name">Replit</h4>
            <span class="tool-strength">Môi trường toàn diện</span>
          </div>
        </div>
        <p class="tool-desc">Tạo web app hoàn chỉnh tương tự Lovable hay Base44, hỗ trợ đầy đủ editor và hosting trực tuyến.</p>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-limits">FREE giới hạn</span>
      </div>
    </article>
  </div>
</section>
</html-block>
    ## So sánh nhanh trước khi đi vào từng tool
    
    | Tool | Mạnh ở | Free? |
    | --- | --- | --- |
    | **Google AI Studio** | Prompt → code nhanh, model mạnh nhất, không giới hạn | ✅ Hoàn toàn |
    | **Stitch** | Upload ảnh tham khảo → AI nhái theo. Hoặc ghi Prompt, giao diện khá đẹp | ✅ (beta) |
    | **Base44** | Giao diện đẹp, mình ưu tiên dùng này nhất | ✅ Giới hạn |
    | **Lovable** | Giao diện đẹp, mình cũng ưu tiên này nhưng loveable rất dễ hết credit | ✅ Giới hạn |
    | **Figma Make** | Tạo cũng rất đẹp, bạn nào có giao diện từ file Figma thì Figma Make tạo thẳng web thì thiết kế đó luôn | ✅ Giới hạn |
    | **Claude Design** | Rất đẹp và rất mạnh, nhưng mình ko ưu tiên dùng vì…đắt | ✅ đắt, phải có tài khoản Claude Pro trở lên mới có  |
    | **Replit** | Khá đẹp, là web toàn diện như Loveable hay Base44 | ✅ Giới hạn |
    
    > Hướng dẫn chi tiết từng tool — cách dùng từng bước, tip, lỗi hay gặp — mình sẽ làm trong các bài blog riêng, mỗi tool một bài.
    > 
    
    ### Vấn đề thật: AI code UI đúng ý khó hơn tưởng tượng
    
    Khi bạn nhờ AI trong Cursor viết giao diện từ đầu, thường ra một trong hai kết quả:
    
    - UI generic, trông giống mọi app AI khác — màu xanh hoặc gradient mặc định, font hệ thống, layout cứng
    - UI không giống thứ bạn hình dung trong đầu — vì bạn mô tả bằng chữ, AI hiểu theo cách của nó
    
    Vấn đề không phải AI dở. Vấn đề là **AI cần context cụ thể về design** — màu chính xác là gì, font nào, spacing ra sao, component trông thế nào — thay vì chỉ nhận mô tả mơ hồ.
    
    Đó là lý do `DESIGN.md` ra đời.
    
- **Bước 1 — Tìm web có giao diện mình thích**
    
    Chưa có ý tưởng giao diện? Đừng bắt đầu từ tờ giấy trắng. Tìm một web trông đúng thứ mình muốn làm — rồi nhái theo.
    
    **Nguồn tìm tham khảo:**
    
    - [**Mobbin.com**](https://mobbin.com/) — thư viện screenshot UI/UX thực tế của hàng nghìn app và web, tìm theo pattern hoặc industry
    - [**Dribbble.com**](https://dribbble.com/) — design concept từ designer khắp nơi, nhiều style đa dạng
    - [**Pinterest.com**](https://pinterest.com/) — tìm theo từ khóa như "minimal web design", "SaaS landing page", "dark dashboard UI"
    - [**Behance.net**](https://behance.net/) — portfolio design chuyên sâu, thường có cả breakdown quá trình thiết kế
    - [**Dark.design**](https://dark.design/) — muốn giao diện tối thì vào đây — tổng hợp dark UI đẹp nhất, lọc theo category
- **Bước 2 — Lấy [DESIGN.md](http://design.md/) từ web đó**
    
    `DESIGN.md` là một file văn bản (markdown) chứa **toàn bộ design system của một website** — màu sắc, font, spacing, cách component trông như thế nào — được viết dưới dạng mà AI coding agent đọc hiểu được.
    
    Ví dụ một đoạn trong `DESIGN.md` của Linear (tool quản lý task nổi tiếng):
    
    ```markdown
    ## Colors
    - Background: #0F0F0F
    - Surface: #1A1A1A
    - Border: #2A2A2A
    - Text primary: #FFFFFF
    - Text muted: #8A8A8A
    - Accent: #5B6AE8
    
    ## Typography
    - Font family: Inter
    - Heading: 600 weight, tight tracking
    - Body: 400 weight, 1.6 line-height
    
    ## Components
    - Cards: no border-radius, 1px border, #2A2A2A
    - Buttons: flat, no shadow, hover shifts background 10% lighter
    - Nav items: uppercase, DM Mono, 12px
    ```
    
    Khi bạn đưa file này vào bất kì một AI IDE nào như Claude Code, Antigravity, Cursor và nói *"Dùng DESIGN.md này để code giao diện"* — AI có đủ thông tin để ra UI trông giống hệt trang gốc, thay vì tự bịa style.
    
- **Cách lấy DESIGN.md**
    
    Có 3 cách, tùy tình huống:
    
    **Cách 1 — Dùng extension trên Chrome (lấy từ bất kỳ website nào)**
    
    **Extension:** [DESIGN.md Style Extractor by TypeUI](https://chromewebstore.google.com/detail/designmd-style-extractor/ogpdnchdjiibhobphelbbkemnnemkfma) — cài miễn phí trên Chrome
    
    1. Extension đọc CSS thực tế của trang → sinh ra file `DESIGN.md` ngay
    2. Copy nội dung → lưu vào file `DESIGN.md` ở thư mục gốc project
    
    **Cách 2 — Dùng website lấy [DESIGN.md](http://design.md/) của web nổi tiếng (nhanh nhất)**
    
    Không muốn cài extension? Vào thẳng các site này để lấy DESIGN.md có sẵn của các web nổi tiếng:
    
    [**getdesign.md**](https://getdesign.md/) — kho DESIGN.md của hàng chục web lớn (Linear, Vercel, Stripe, Notion, GitHub...). Chọn tên web → copy file về dùng ngay.
    
    [**designmd.co**](https://designmd.co/) — tương tự, có thêm tính năng nhập URL để generate.
    
    > Lưu ý: Đây không phải file chính thức từ các công ty đó. Đây là file được cộng đồng extract và curate từ visual thực tế của các trang web đó — dùng làm tham khảo và điểm xuất phát.
    > 
    
    **Cách 3 — Dùng website nhập URL tự generate**
    
    [**designmd.me**](https://designmd.me/) — dán URL bất kỳ → generate DESIGN.md trong vài giây.
    
    - **Tại sao DESIGN.md mạnh hơn mô tả thông thường?**
        
        
        | Cách cũ | Dùng DESIGN.md |
        | --- | --- |
        | "Làm giao diện tối, trông minimal" | AI có hex code chính xác, font name, spacing value |
        | AI đoán style → hay sai | AI đọc spec → ra đúng |
        | Mỗi component hỏi lại một lần | File DESIGN.md dùng cho toàn bộ project |
        | Khó giữ consistency | Mọi component đều theo cùng một nguồn |
- **Bước 3 — Quăng [DESIGN.md](http://design.md/) vào tool AI, code luôn**
    
    Đây là bước quan trọng nhất. Thay vì dùng các AI IDE viết từng dòng code, bạn quăng DESIGN.md thẳng vào các tool AI để nó **code giao diện và tính năng cùng một lúc**.
    
    Đây là cách mình hay làm:
    
    ### Google AI Studio (miễn phí hoàn toàn, ưu tiên dùng)
    
    1. Vào [aistudio.google.com](https://aistudio.google.com/) → tạo chat mới với Gemini 2.5 Pro hoặc Flash
    2. Copy toàn bộ nội dung DESIGN.md → paste vào đầu prompt
    3. Mô tả web muốn tạo:
    
    > *"Đây là DESIGN.md của web tôi muốn làm theo: [paste nội dung]. Dùng design system này để tạo một landing page hoàn chỉnh cho nền tảng học AI cho marketer Việt Nam. Gồm (đây là khúc bạn mong muốn layout của web trôgn như nào): nav sticky, hero section có headline + subtitle + 2 CTA, section features 3 cột, footer. "*
    > 
    1. Google AI Studio có kết nối với Github, bạn chỉ cần kết nối với Github và dùng các AI IDE git repo về là có thể code tiếp được.
    2. Chat trên AI IDE tiếp để chỉnh: *"Thêm section pricing 3 tier. Đổi hero background sang tối."*
    
    ---
    
    ### Lovable (có database + login luôn) nhưng có phí
    
    1. Vào [lovable.dev](https://lovable.dev/) → tạo project mới
    2. Trong ô prompt đầu tiên, paste DESIGN.md vào rồi mô tả app như trên.
    3. Lovable tự build toàn bộ — giao diện theo đúng DESIGN.md, có backend Supabase
    4. Chat tiếp để chỉnh thêm tính năng hoặc sửa UI cho đến hết credit luôn, mình phải tận dụng chứ =))))
    5. Khi xong → bấm **GitHub** để Lovable push code lên repo
    
    **Khi nào dùng:** App cần database thật và user login ngay từ đầu.
    
    ---
    
    ### Base44 (mình hay dùng nhất)
    
    1. Vào [base44.com](https://base44.com/) → tạo app mới
    2. paste DESIGN.md vào rồi mô tả app như trên.
    3. App ra ngay, có thể dùng được luôn
    
    **Nhược điểm:** Base44 chỉ connect được với Github từ tài khoản trả phí thôi. Mình có mẹo đó là dùng Codex + plugin Base44. Codex rất tuyệt vời khi có plugin Base44 luôn, bạn chỉ cần kết nối tài khoản đang code giao diện đó vào plugin Base44 trên Codex, rồi ghi prompt như sau:
    
    ```markdown
    @Base44 Hãy đăng nhập vào tài khoản [gmailcuaban] vào tải toàn bộ code của project về folder hiện tại cho tôi.
    ```
    
    **Lưu ý:** bạn phải tạo một folder rỗng hoàn toàn trước rồi mưới dùng Codex, mọi project đều làm việc với folder chứ ko làm việc với file riêng lẻ.
    
    ---
    
    ### Các tool khác
    
    Tương tự — bất kỳ tool AI nào cũng dùng được cùng cách: paste DESIGN.md vào context → mô tả app → để AI code.
    
    Hướng dẫn chi tiết từng tool — cách dùng từng bước, tip, lỗi hay gặp — sẽ có trong các **bài blog riêng** trên markAI.
    
- **Bước 4 — Tải code về, dùng AI IDE hoàn thiện tiếp**
    
    Sau khi giao diện đã đúng ý bạn và các tính năng cũng đã hoàn thiện 1 phần hoặc bạn hết credit =))), tải code về máy để tiếp tục làm việc với AI IDE.
    
    **Mở trong AIIDE:**
    
    ```markdown
    pnpm install
    pnpm run build
    pnpm run dev
    ```
    
    Bây giờ app đang chạy trên máy local. Bắt đầu dùng AI IDE để hoàn thiện những thứ còn dang dở:
    
    - Chỉnh lại UI chi tiết cho sát DESIGN.md hơn
    - Thêm tính năng phức tạp hơn
    - Fix lỗi, tối ưu performance
    - Chuẩn bị deploy
    
    Ở bước này, DESIGN.md vẫn còn dùng được — đặt file trong thư mục gốc project, dùng `@DESIGN.md` trong IDE chat để AI giữ đúng style khi thêm component mới.