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
      font-weight: 800;
      color: #000000 !important;
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
<html-block>
<section class="compare-table-section" aria-label="So sánh nhanh các công cụ">
  <style>
    .compare-table-section {
      margin: 2.5rem 0;
    }
    .compare-title {
      font-family: var(--sans);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--ink);
      margin: 0 0 1.5rem 0;
      letter-spacing: -0.02em;
    }
    .compare-table-wrapper {
      overflow-x: auto;
      margin-bottom: 2rem;
    }
    .compare-table {
      width: 100%;
      border-collapse: collapse;
    }
    .compare-table th {
      font-family: var(--mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-align: left;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--border);
    }
    .compare-table td {
      padding: 1.25rem 1rem;
      border-bottom: 1px solid var(--border);
      vertical-align: middle;
      font-family: var(--sans);
      font-size: 14.5px;
      line-height: 1.6;
      color: var(--ink);
    }
    .compare-table tr:last-child td {
      border-bottom: none;
    }
    .col-tool {
      font-weight: 700;
      width: 22%;
    }
    .col-strength {
      color: var(--ink2);
      width: 53%;
    }
    .col-free {
      width: 25%;
    }
    .free-status {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      color: var(--success);
    }
    .check-icon {
      flex-shrink: 0;
    }
    .compare-note {
      background: var(--bg2);
      border-left: 2px solid var(--accent);
      padding: 1.2rem 1.5rem;
      margin-top: 1.5rem;
    }
    .compare-note p {
      margin: 0;
      font-family: var(--mono);
      font-size: 12.5px;
      line-height: 1.7;
      color: var(--ink2);
    }
    
    @media (max-width: 768px) {
      .compare-table thead {
        display: none;
      }
      .compare-table tr {
        display: block;
        padding: 1rem 0;
        border-bottom: 1px solid var(--border);
      }
      .compare-table td {
        display: block;
        padding: 0.25rem 0;
        width: 100% !important;
        border-bottom: none;
      }
      .col-tool {
        font-size: 16px;
        margin-bottom: 0.25rem;
      }
      .col-free {
        margin-top: 0.25rem;
      }
    }
  </style>

  <h3 class="compare-title">So sánh nhanh trước khi đi vào từng tool</h3>

  <div class="compare-table-wrapper">
    <table class="compare-table">
      <thead>
        <tr>
          <th>Tool</th>
          <th>Mạnh ở</th>
          <th>Free?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="col-tool">Google AI Studio</td>
          <td class="col-strength">Prompt → code nhanh, model mạnh nhất, không giới hạn</td>
          <td class="col-free">
            <div class="free-status">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="var(--success)" stroke="var(--success)"></rect>
                <path d="M9 12l2 2 4-4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>Hoàn toàn</span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="col-tool">Stitch</td>
          <td class="col-strength">Upload ảnh tham khảo → AI nhái theo. Hoặc ghi Prompt, giao diện khá đẹp</td>
          <td class="col-free">
            <div class="free-status">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="var(--success)" stroke="var(--success)"></rect>
                <path d="M9 12l2 2 4-4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>(beta)</span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="col-tool">Base44</td>
          <td class="col-strength">Giao diện đẹp, mình ưu tiên dùng này nhất</td>
          <td class="col-free">
            <div class="free-status">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="var(--success)" stroke="var(--success)"></rect>
                <path d="M9 12l2 2 4-4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>Giới hạn</span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="col-tool">Lovable</td>
          <td class="col-strength">Giao diện đẹp, mình cũng ưu tiên này nhưng loveable rất dễ hết credit</td>
          <td class="col-free">
            <div class="free-status">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="var(--success)" stroke="var(--success)"></rect>
                <path d="M9 12l2 2 4-4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>Giới hạn</span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="col-tool">Figma Make</td>
          <td class="col-strength">Tạo cũng rất đẹp, bạn nào có giao diện từ file Figma thì Figma Make tạo thẳng web thì thiết kế đó luôn</td>
          <td class="col-free">
            <div class="free-status">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="var(--success)" stroke="var(--success)"></rect>
                <path d="M9 12l2 2 4-4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>Giới hạn</span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="col-tool">Claude Design</td>
          <td class="col-strength">Rất đẹp và rất mạnh, nhưng mình ko ưu tiên dùng vì…đắt</td>
          <td class="col-free">
            <div class="free-status">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="var(--success)" stroke="var(--success)"></rect>
                <path d="M9 12l2 2 4-4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>đắt, phải có tài khoản Claude Pro trở lên mới có</span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="col-tool">Replit</td>
          <td class="col-strength">Khá đẹp, là web toàn diện như Loveable hay Base44</td>
          <td class="col-free">
            <div class="free-status">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="var(--success)" stroke="var(--success)"></rect>
                <path d="M9 12l2 2 4-4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>Giới hạn</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="compare-note">
    <p>* <strong>Lưu ý:</strong> Hướng dẫn chi tiết từng tool – cách dùng từng bước, tip, lỗi hay gặp – mình sẽ làm trong các bài blog riêng, mỗi tool một bài.</p>
  </div>
</section>
</html-block>
<html-block>
<section class="problem-solution-section" aria-label="Vấn đề và giải pháp thiết kế">
  <style>
    .problem-solution-section {
      margin: 2.5rem 0;
    }
    .sec-title {
      font-family: var(--sans);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--ink);
      margin: 0 0 0.5rem 0;
      letter-spacing: -0.02em;
    }
    .sec-subtitle {
      font-family: var(--sans);
      font-size: 14.5px;
      color: var(--ink2);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    .outcomes-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
      margin-bottom: 1.5rem;
    }
    .outcome-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .card-badge {
      display: inline-block;
      align-self: flex-start;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 3px 8px;
      border: 1px solid var(--border);
      margin-bottom: 1rem;
    }
    .badge-generic {
      background: color-mix(in srgb, var(--accent) 8%, var(--bg2));
      color: var(--accent);
      border-color: color-mix(in srgb, var(--accent) 30%, var(--border));
    }
    .badge-mismatch {
      background: color-mix(in srgb, #ef4444 8%, var(--bg2));
      color: #ef4444;
      border-color: color-mix(in srgb, #ef4444 30%, var(--border));
    }
    .card-title {
      font-family: var(--sans);
      font-size: 15px;
      font-weight: 700;
      color: var(--ink);
      margin: 0 0 0.75rem 0;
      line-height: 1.3;
    }
    .card-desc {
      font-family: var(--sans);
      font-size: 13.5px;
      color: var(--ink2);
      line-height: 1.5;
      margin: 0;
    }
    .insight-callout {
      border: 1px solid var(--border);
      background: var(--bg);
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      position: relative;
      transition: all 0.2s ease;
    }
    .insight-title {
      font-family: var(--display);
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent);
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .insight-text {
      font-family: var(--sans);
      font-size: 14.5px;
      line-height: 1.6;
      color: var(--ink);
      margin: 0;
    }
    .solution-hero {
      background: var(--ink);
      color: var(--bg);
      border: 1px solid var(--border);
      padding: 1.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      position: relative;
      overflow: hidden;
      box-shadow: 4px 4px 0px var(--accent);
    }
    .solution-content {
      flex: 1;
    }
    .solution-label {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: block;
    }
    .solution-title {
      font-family: var(--sans);
      font-size: 20px;
      font-weight: 700;
      margin: 0 0 0.75rem 0;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }
    .solution-desc {
      font-family: var(--sans);
      font-size: 13.5px;
      color: color-mix(in srgb, var(--bg) 80%, transparent);
      line-height: 1.55;
      margin: 0;
    }
    .solution-visual {
      font-family: var(--mono);
      font-size: 12px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 0.75rem 1.25rem;
      border-radius: 4px;
      color: var(--accent);
      font-weight: 700;
      letter-spacing: 0.05em;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;
    }
    
    @media (max-width: 640px) {
      .outcomes-grid {
        grid-template-columns: 1fr;
        gap: 0.85rem;
      }
      .solution-hero {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.25rem;
        padding: 1.5rem;
      }
      .solution-visual {
        align-self: stretch;
        justify-content: center;
      }
    }
  </style>

  <h3 class="sec-title">Vấn đề thật: AI code UI đúng ý khó hơn tưởng tượng</h3>
  <p class="sec-subtitle">Khi bạn nhờ AI trong Cursor hay Claude Code viết giao diện từ đầu, thường ra một trong hai kết quả:</p>

  <div class="outcomes-grid">
    <div class="outcome-card">
      <span class="card-badge badge-generic">Kết quả 1</span>
      <h4 class="card-title">UI generic, thiếu bản sắc</h4>
      <p class="card-desc">Giao diện trông na ná mọi app AI khác — màu xanh hoặc gradient mặc định, font hệ thống, layout cứng nhắc và thiếu tinh tế.</p>
    </div>
    <div class="outcome-card">
      <span class="card-badge badge-mismatch">Kết quả 2</span>
      <h4 class="card-title">Lệch pha so với hình dung</h4>
      <p class="card-desc">Giao diện không giống thứ bạn mong muốn. Vì bạn mô tả bằng chữ (prompt), AI sẽ tự hiểu và thiết kế theo cách của riêng nó.</p>
    </div>
  </div>

  <div class="insight-callout">
    <div class="insight-title">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span>Bản chất cốt lõi</span>
    </div>
    <p class="insight-text">Vấn đề không phải do AI dở. Bản chất là <strong>AI cần context cụ thể về design</strong> (mã màu chính xác, font chữ, quy chuẩn spacing, quy tắc component) thay vì chỉ nhận những câu lệnh mô tả chung chung.</p>
  </div>

  <div class="solution-hero">
    <div class="solution-content">
      <span class="solution-label">Chìa khóa giải quyết</span>
      <h4 class="solution-title">Đó là lý do DESIGN.md ra đời</h4>
      <p class="solution-desc">DESIGN.md đóng vai trò như một bản đặc tả thiết kế giúp đồng bộ hóa ngôn ngữ visual giữa bạn và AI, hướng dẫn AI code chính xác style mong muốn.</p>
    </div>
    <div class="solution-visual">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
      <span>DESIGN.md</span>
    </div>
  </div>
</section>
</html-block>
    
- **Bước 1 — Tìm web có giao diện mình thích**
    
    Chưa có ý tưởng giao diện? Đừng bắt đầu từ tờ giấy trắng. Tìm một web trông đúng thứ mình muốn làm — rồi nhái theo.
    
<html-block>
<section class="reference-showcase" aria-label="Nguồn tìm tham khảo thiết kế">
  <style>
    .reference-showcase {
      margin: 3rem 0;
      padding: 1.5rem;
      background: var(--bg);
      border: 2px solid var(--border);
      box-shadow: 6px 6px 0px var(--border);
    }
    .ref-title {
      font-family: var(--sans);
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--ink);
      margin-top: 0;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .ref-title::after {
      content: "";
      flex-grow: 1;
      height: 2px;
      background: var(--border);
      margin-left: 0.5rem;
    }
    .ref-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1.25rem;
    }
    .ref-card {
      background: var(--bg2);
      border: 2px solid var(--border);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.15s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.15s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      min-height: 220px;
      box-shadow: 4px 4px 0px var(--border);
    }
    .ref-card:hover {
      transform: translate(-4px, -4px);
      box-shadow: 8px 8px 0px var(--accent);
      border-color: var(--accent);
    }
    .ref-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .ref-icon-wrapper {
      width: 36px;
      height: 36px;
      background: var(--bg);
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ink);
      transition: border-color 0.15s, color 0.15s, background-color 0.15s;
    }
    .ref-card:hover .ref-icon-wrapper {
      border-color: var(--accent);
      color: var(--accent);
      background: color-mix(in srgb, var(--accent) 8%, var(--bg));
    }
    .ref-badge {
      font-family: var(--mono);
      font-size: 9px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 3px 8px;
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--ink2);
    }
    .ref-card:hover .ref-badge {
      border-color: var(--accent);
      color: var(--accent);
    }
    .ref-name {
      font-family: var(--sans);
      font-size: 16px;
      font-weight: 800;
      color: var(--ink);
      margin: 0 0 0.5rem 0;
    }
    .ref-name a {
      color: inherit;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
    .ref-name a:hover {
      color: var(--accent);
    }
    .ref-desc {
      font-family: var(--sans);
      font-size: 13px;
      color: var(--ink2);
      line-height: 1.5;
      margin: 0 0 1rem 0;
      flex-grow: 1;
    }
    .ref-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px dashed var(--border);
      padding-top: 0.75rem;
      margin-top: auto;
    }
    .ref-link-text {
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--muted);
      letter-spacing: 0.05em;
    }
    .ref-card:hover .ref-link-text {
      color: var(--accent);
    }
    .ref-arrow {
      font-family: var(--mono);
      font-size: 14px;
      color: var(--muted);
      transition: transform 0.15s ease, color 0.15s ease;
    }
    .ref-card:hover .ref-arrow {
      color: var(--accent);
      transform: translateX(4px);
    }
    
    @media (max-width: 480px) {
      .ref-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .ref-card {
        min-height: auto;
        padding: 1rem;
      }
    }
  </style>

  <h4 class="ref-title">Nguồn tìm tham khảo</h4>
  <div class="ref-grid">
    <!-- Card 1: Mobbin -->
    <article class="ref-card">
      <div>
        <div class="ref-card-header">
          <div class="ref-icon-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          <span class="ref-badge">Thực tế · App/Web</span>
        </div>
        <h5 class="ref-name">
          <a href="https://mobbin.com/" target="_blank" rel="noreferrer">Mobbin.com</a>
        </h5>
        <p class="ref-desc">Thư viện screenshot UI/UX thực tế từ hàng nghìn app và web. Cực tốt để tìm kiếm theo pattern hoặc industry.</p>
      </div>
      <div class="ref-card-footer">
        <span class="ref-link-text">Truy cập</span>
        <span class="ref-arrow">→</span>
      </div>
    </article>

    <!-- Card 2: Dribbble -->
    <article class="ref-card">
      <div>
        <div class="ref-card-header">
          <div class="ref-icon-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72"></path>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
          <span class="ref-badge">Visual Concept</span>
        </div>
        <h5 class="ref-name">
          <a href="https://dribbble.com/" target="_blank" rel="noreferrer">Dribbble.com</a>
        </h5>
        <p class="ref-desc">Nơi chia sẻ các concept UI phong phú từ các designer trên toàn thế giới, cực kỳ nhiều phong cách nghệ thuật đa dạng.</p>
      </div>
      <div class="ref-card-footer">
        <span class="ref-link-text">Truy cập</span>
        <span class="ref-arrow">→</span>
      </div>
    </article>

    <!-- Card 3: Pinterest -->
    <article class="ref-card">
      <div>
        <div class="ref-card-header">
          <div class="ref-icon-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a10 10 0 0 0-3.3 19.4c-.1-.9-.2-2.3 0-3.3l1.3-5.5s-.3-.7-.3-1.7c0-1.6.9-2.8 2-2.8 1 0 1.5.8 1.5 1.7 0 1-.6 2.5-.9 3.9-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.9-2.3 3.9-5.6 0-3-2.1-5-5.1-5-3.5 0-5.6 2.6-5.6 5.4 0 1 .4 2.2.9 2.8.1.1.1.2 0 .6l-.3 1.2c-.1.3-.3.4-.6.3-2.1-1-3.4-4-3.4-6.5C3 7.8 7.3 3 12.5 3c4.2 0 7.4 3 7.4 7 0 4.2-2.6 7.5-6.3 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1.1-1.1 2.5-1.6 3.4A10 10 0 1 0 12 2z"></path>
            </svg>
          </div>
          <span class="ref-badge">Ý tưởng · Mood</span>
        </div>
        <h5 class="ref-name">
          <a href="https://pinterest.com/" target="_blank" rel="noreferrer">Pinterest.com</a>
        </h5>
        <p class="ref-desc">Tìm kiếm với từ khóa kiểu "minimal web design", "SaaS landing page", "dark dashboard UI" để ra moodboard nhanh.</p>
      </div>
      <div class="ref-card-footer">
        <span class="ref-link-text">Truy cập</span>
        <span class="ref-arrow">→</span>
      </div>
    </article>

    <!-- Card 4: Behance -->
    <article class="ref-card">
      <div>
        <div class="ref-card-header">
          <div class="ref-icon-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 12H3V8h9v4z"></path>
              <path d="M12 16H3v-2h9v2z"></path>
              <path d="M18 10h4v2h-4v-2z"></path>
              <path d="M21 7h-2.5C17 7 16 8.5 16 10s1 3 2.5 3H21"></path>
            </svg>
          </div>
          <span class="ref-badge">Case Studies</span>
        </div>
        <h5 class="ref-name">
          <a href="https://behance.net/" target="_blank" rel="noreferrer">Behance.net</a>
        </h5>
        <p class="ref-desc">Các portfolio thiết kế chuyên sâu từ các studio lớn, thường đi kèm phân tích breakdown quá trình thiết kế chi tiết.</p>
      </div>
      <div class="ref-card-footer">
        <span class="ref-link-text">Truy cập</span>
        <span class="ref-arrow">→</span>
      </div>
    </article>

    <!-- Card 5: Dark.design -->
    <article class="ref-card">
      <div>
        <div class="ref-card-header">
          <div class="ref-icon-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </div>
          <span class="ref-badge">Dark Mode UI</span>
        </div>
        <h5 class="ref-name">
          <a href="https://dark.design/" target="_blank" rel="noreferrer">Dark.design</a>
        </h5>
        <p class="ref-desc">Nếu bạn muốn thiết kế giao diện tối (Dark Mode), đây là thư viện tổng hợp các web có dark UI xuất sắc nhất.</p>
      </div>
      <div class="ref-card-footer">
        <span class="ref-link-text">Truy cập</span>
        <span class="ref-arrow">→</span>
      </div>
    </article>
  </div>
</section>
</html-block>
- **Bước 2 — Lấy [DESIGN.md](http://design.md/) từ web đó**
    
    `DESIGN.md` là một file văn bản (markdown) chứa **toàn bộ design system của một website** — màu sắc, font, spacing, cách component trông như thế nào — được viết dưới dạng mà AI coding agent đọc hiểu được.
    
    Ví dụ một đoạn trong `DESIGN.md` của Linear (tool quản lý task nổi tiếng):
    
<html-block>
<section class="design-spec-showcase" aria-label="Ví dụ DESIGN.md và UI kết quả">
  <style>
    .design-spec-showcase {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 1.5rem;
      margin: 2.5rem 0;
    }
    .spec-code-panel {
      background: var(--bg);
      border: 2px solid var(--border);
      box-shadow: 4px 4px 0px var(--border);
      display: flex;
      flex-direction: column;
    }
    .editor-header {
      background: var(--bg2);
      border-bottom: 2px solid var(--border);
      padding: 0.5rem 0.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .editor-controls {
      display: flex;
      gap: 5px;
    }
    .editor-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid var(--border);
    }
    .editor-dot.red { background: #ff5f56; }
    .editor-dot.yellow { background: #ffbd2e; }
    .editor-dot.green { background: #27c93f; }

    .editor-tabs {
      display: flex;
      margin-left: 1rem;
    }
    .editor-tab {
      background: var(--bg);
      border: 2px solid var(--border);
      border-bottom: none;
      padding: 3px 12px;
      font-family: var(--mono);
      font-size: 11px;
      color: var(--ink);
      display: flex;
      align-items: center;
      gap: 6px;
      position: relative;
      top: 9px;
    }
    .editor-content {
      background: var(--bg) !important;
      border-left: none !important;
      padding: 1.25rem !important;
      margin: 0 !important;
      overflow-x: auto;
      font-family: var(--mono);
      font-size: 13px;
      line-height: 1.6;
      color: var(--ink);
    }
    .code-h { color: #0f172a; font-weight: 700; }
    .code-prop { color: #334155; }
    .code-val { color: #b91c1c; font-weight: 500; }

    .spec-preview-panel {
      display: flex;
      flex-direction: column;
    }
    .preview-window {
      background: #0f0f0f;
      border: 2px solid var(--border);
      box-shadow: 4px 4px 0px var(--border);
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 320px;
    }
    .preview-header {
      background: var(--bg2);
      border-bottom: 2px solid var(--border);
      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .preview-address {
      flex-grow: 1;
      background: var(--bg);
      border: 1px solid var(--border);
      font-family: var(--mono);
      font-size: 10px;
      padding: 2px 8px;
      color: var(--ink2);
    }
    .preview-body {
      padding: 1.25rem;
      background: #0F0F0F;
      color: #FFFFFF;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-family: 'Inter', system-ui, sans-serif;
    }
    .mock-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #2A2A2A;
      padding-bottom: 0.5rem;
    }
    .mock-logo {
      font-weight: 700;
      font-size: 13px;
      color: #FFFFFF;
      letter-spacing: -0.02em;
    }
    .mock-nav-items {
      display: flex;
      gap: 12px;
    }
    .mock-nav-item {
      font-family: var(--mono);
      font-size: 10px;
      text-transform: uppercase;
      color: #8A8A8A;
      letter-spacing: 0.05em;
    }
    .mock-nav-item.active {
      color: #FFFFFF;
    }
    .mock-card {
      background: #1A1A1A;
      border: 1px solid #2A2A2A;
      border-radius: 0px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .mock-card-title {
      font-size: 14px;
      font-weight: 600;
      color: #FFFFFF;
      margin: 0;
    }
    .mock-card-desc {
      font-size: 11px;
      color: #8A8A8A;
      line-height: 1.5;
      margin: 0;
    }
    .mock-btn {
      background: #5B6AE8;
      color: #FFFFFF;
      border: none;
      border-radius: 0px;
      padding: 6px 12px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      align-self: flex-start;
      transition: background-color 0.15s;
      box-shadow: none;
    }
    .mock-btn:hover {
      background: #6c7bf5;
    }

    @media (max-width: 768px) {
      .design-spec-showcase {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  </style>

  <div class="spec-code-panel">
    <div class="editor-header">
      <div class="editor-controls">
        <span class="editor-dot red"></span>
        <span class="editor-dot yellow"></span>
        <span class="editor-dot green"></span>
      </div>
      <div class="editor-tabs">
        <div class="editor-tab">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          DESIGN.md
        </div>
      </div>
    </div>
    <pre class="editor-content"><code><span class="code-h">## Colors</span>
- Background: <span class="code-val">#0F0F0F</span>
- Surface: <span class="code-val">#1A1A1A</span>
- Border: <span class="code-val">#2A2A2A</span>
- Text primary: <span class="code-val">#FFFFFF</span>
- Text muted: <span class="code-val">#8A8A8A</span>
- Accent: <span class="code-val">#5B6AE8</span>

<span class="code-h">## Typography</span>
- Font family: <span class="code-val">Inter</span>
- Heading: <span class="code-val">600 weight, tight tracking</span>
- Body: <span class="code-val">400 weight, 1.6 line-height</span>

<span class="code-h">## Components</span>
- Cards: <span class="code-val">no border-radius, 1px border, #2A2A2A</span>
- Buttons: <span class="code-val">flat, no shadow, hover shifts background 10% lighter</span>
- Nav items: <span class="code-val">uppercase, DM Mono, 12px</span></code></pre>
  </div>

  <div class="spec-preview-panel">
    <div class="preview-window">
      <div class="preview-header">
        <div class="editor-controls">
          <span class="editor-dot" style="background: #ccc; border: 1px solid var(--border);"></span>
          <span class="editor-dot" style="background: #ccc; border: 1px solid var(--border);"></span>
          <span class="editor-dot" style="background: #ccc; border: 1px solid var(--border);"></span>
        </div>
        <div class="preview-address">linear.app/demo-preview</div>
      </div>
      <div class="preview-body">
        <nav class="mock-nav">
          <span class="mock-logo">L I N E A R</span>
          <div class="mock-nav-items">
            <span class="mock-nav-item active">Issues</span>
            <span class="mock-nav-item">Cycles</span>
            <span class="mock-nav-item">Views</span>
          </div>
        </nav>
        <div class="mock-card">
          <h5 class="mock-card-title">LIN-104 Update workspace styling</h5>
          <p class="mock-card-desc">Redesign the spec preview blocks to use modern brutalist borders and active state highlights.</p>
          <button class="mock-btn" type="button">Mark Complete</button>
        </div>
      </div>
    </div>
  </div>
</section>
</html-block>
    
    Khi bạn đưa file này vào bất kì một AI IDE nào như Claude Code, Antigravity, Cursor và nói *"Dùng DESIGN.md này để code giao diện"* — AI có đủ thông tin để ra UI trông giống hệt trang gốc, thay vì tự bịa style.
    
- **Cách lấy DESIGN.md**
    
<html-block>
<section class="design-acquisition-section" aria-label="Cách lấy DESIGN.md và so sánh">
  <style>
  .design-acquisition-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
    font-family: var(--sans);
  }
  
  /* Cards Grid */
  .acquisition-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
  
  .acquisition-card {
    background: var(--bg2);
    border: 1px solid var(--border);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.2s ease;
  }
  
  .acquisition-card:hover {
    border-color: var(--accent);
    background: var(--bg3);
  }
  
  .acq-badge {
    display: inline-block;
    align-self: flex-start;
    font-family: var(--mono);
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 2px 8px;
    border: 1px solid var(--border);
    margin-bottom: 1rem;
    background: color-mix(in srgb, var(--accent) 8%, var(--bg2));
    color: var(--accent);
  }
  
  .acq-icon {
    color: var(--accent);
    margin-bottom: 0.75rem;
    display: inline-flex;
    align-items: center;
  }
  
  .acq-title {
    font-family: var(--sans);
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
    margin: 0 0 0.5rem 0;
    line-height: 1.3;
  }
  
  .acq-desc {
    font-family: var(--sans);
    font-size: 13px;
    color: var(--ink2);
    line-height: 1.55;
    margin-bottom: 1rem;
  }
  
  .acq-link-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--bg);
    color: var(--ink);
    border: 1px solid var(--border);
    padding: 6px 12px;
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 0.75rem;
    align-self: flex-start;
    transition: all 0.15s;
  }
  .acq-link-btn:hover {
    background: var(--ink);
    color: var(--bg);
    border-color: var(--ink);
  }
  
  .acq-steps {
    margin: 0;
    padding: 0 0 0 1.1rem;
    font-family: var(--sans);
    font-size: 13px;
    color: var(--ink2);
    line-height: 1.5;
  }
  .acq-steps li {
    margin-bottom: 0.4rem;
  }
  .acq-steps li:last-child {
    margin-bottom: 0;
  }
  
  .acq-note {
    margin-top: auto;
    font-family: var(--mono);
    font-size: 11.5px;
    background: var(--bg);
    border-left: 2px solid var(--accent);
    padding: 8px 12px;
    color: var(--ink2);
    line-height: 1.4;
  }

  .acq-links-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 0.75rem;
  }
  .acq-sub-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    font-weight: 600;
    color: var(--ink);
    text-decoration: underline;
  }
  .acq-sub-link:hover {
    color: var(--accent);
  }

  /* Comparison native styles matching the web */
  .native-compare-wrapper {
    margin-top: 1.5rem;
  }
  .native-compare-title {
    font-family: var(--sans);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    color: var(--ink);
  }
  .native-compare-table {
    border: 1px solid var(--border);
    width: 100%;
    background: var(--bg);
    border-collapse: collapse;
  }
  .native-compare-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid var(--border);
  }
  .native-compare-row:last-child {
    border-bottom: none;
  }
  .native-compare-row.header {
    background: var(--bg2);
    border-bottom: 2px solid var(--border);
  }
  .native-compare-cell {
    padding: 1rem 1.5rem;
    border-right: 1px solid var(--border);
    font-family: var(--sans);
    font-size: 13.5px;
    line-height: 1.6;
    color: var(--ink2);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .native-compare-cell:last-child {
    border-right: none;
  }
  .native-compare-row.header .native-compare-cell {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }
  .cell-cross {
    color: var(--muted);
    text-decoration: line-through;
    opacity: 0.7;
  }
  .cell-check {
    color: var(--ink);
    font-weight: 400;
  }
  .cell-check strong {
    color: var(--accent);
    font-weight: 700;
  }
  
  @media (max-width: 768px) {
    .acquisition-grid {
      grid-template-columns: 1fr;
    }
    .native-compare-row {
      grid-template-columns: 1fr;
    }
    .native-compare-cell {
      border-right: none;
      border-bottom: 1px solid var(--border);
    }
    .native-compare-cell:last-child {
      border-bottom: none;
    }
    .native-compare-row.header {
      display: none;
    }
  }
  </style>
  
  <div class="acquisition-grid">
    <!-- CÁCH 1 -->
    <div class="acquisition-card">
      <span class="acq-badge">Cách 01</span>
      <div class="acq-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <h4 class="acq-title">Extension Chrome</h4>
      <p class="acq-desc">Lấy DESIGN.md trực tiếp từ bất kỳ website nào đang mở trên Chrome.</p>
      
      <a href="https://chromewebstore.google.com/detail/designmd-style-extractor/ogpdnchdjiibhobphelbbkemnnemkfma" target="_blank" rel="noreferrer" class="acq-link-btn">
        <span>Cài Extension</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </a>
      
      <ol class="acq-steps">
        <li>Bật Extension tại trang web bạn chọn để sinh file <code>DESIGN.md</code> ngay.</li>
        <li>Copy specs lưu vào file <code>DESIGN.md</code> ở thư mục gốc project.</li>
      </ol>
    </div>
    
    <!-- CÁCH 2 -->
    <div class="acquisition-card">
      <span class="acq-badge">Cách 02</span>
      <div class="acq-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      <h4 class="acq-title">Kho DESIGN.md có sẵn</h4>
      <p class="acq-desc">Lấy style specs đã được curator cộng đồng chuẩn hóa từ các thương hiệu lớn.</p>
      
      <div class="acq-links-list">
        <a href="https://getdesign.md/" target="_blank" rel="noreferrer" class="acq-sub-link">
          <span>getdesign.md</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
        <a href="https://designmd.co/" target="_blank" rel="noreferrer" class="acq-sub-link">
          <span>designmd.co</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
      
      <div class="acq-note">
        <strong>Lưu ý:</strong> Specs do cộng đồng trích xuất từ visual thực tế của Linear, Stripe, Notion... dùng làm điểm bắt đầu lý tưởng.
      </div>
    </div>
    
    <!-- CÁCH 3 -->
    <div class="acquisition-card">
      <span class="acq-badge">Cách 03</span>
      <div class="acq-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
      </div>
      <h4 class="acq-title">Crawl từ URL bất kỳ</h4>
      <p class="acq-desc">Nhập địa chỉ URL để AI tự động phân tích CSS & visual và tạo DESIGN.md.</p>
      
      <a href="https://designmd.me/" target="_blank" rel="noreferrer" class="acq-link-btn">
        <span>designmd.me</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </a>
      
      <p class="acq-desc" style="margin-bottom: 0;">Dán link trang web bạn thích vào ô nhập, đợi vài giây để nhận file specs tương ứng.</p>
    </div>
  </div>

  <div class="native-compare-wrapper">
    <h3 class="native-compare-title">Tại sao DESIGN.md mạnh hơn mô tả thông thường?</h3>
    
    <div class="native-compare-table">
      <div class="native-compare-row header">
        <div class="native-compare-cell">Cách mô tả cũ (Mơ hồ)</div>
        <div class="native-compare-cell">Dùng DESIGN.md (Chuẩn xác)</div>
      </div>
      
      <div class="native-compare-row">
        <div class="native-compare-cell">
          <span class="cell-cross">❌ "Làm giao diện tối, trông minimal"</span>
        </div>
        <div class="native-compare-cell">
          <span class="cell-check">✅ AI có <strong>hex code</strong> chính xác, <strong>font name</strong>, <strong>spacing value</strong></span>
        </div>
      </div>
      
      <div class="native-compare-row">
        <div class="native-compare-cell">
          <span class="cell-cross">❌ AI đoán style → thường bị sai lệch</span>
        </div>
        <div class="native-compare-cell">
          <span class="cell-check">✅ AI đọc đặc tả specs → triển khai ra đúng</span>
        </div>
      </div>
      
      <div class="native-compare-row">
        <div class="native-compare-cell">
          <span class="cell-cross">❌ Mỗi component mới lại phải mô tả lại style</span>
        </div>
        <div class="native-compare-cell">
          <span class="cell-check">✅ File <code>DESIGN.md</code> dùng chung cho toàn bộ project</span>
        </div>
      </div>
      
      <div class="native-compare-row">
        <div class="native-compare-cell">
          <span class="cell-cross">❌ Khó duy trì sự nhất quán (consistency)</span>
        </div>
        <div class="native-compare-cell">
          <span class="cell-check">✅ Mọi component lớn nhỏ đều theo cùng một nguồn</span>
        </div>
      </div>
    </div>
  </div>
</section>
</html-block>
- **Bước 3 — Quăng [DESIGN.md](http://design.md/) vào tool AI, code luôn**
    
    Đây là bước quan trọng nhất. Thay vì dùng các AI IDE viết từng dòng code, bạn quăng DESIGN.md thẳng vào các tool AI để nó **code giao diện và tính năng cùng một lúc**.
    
    Đây là cách mình hay làm:

<html-block>
<section class="ai-tools-list-section" aria-label="Các công cụ AI dựng giao diện">
  <style>
  .ai-tools-list-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
    font-family: var(--sans);
  }
  
  .tool-item-card {
    background: var(--bg2);
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.2s ease;
  }
  
  .tool-item-card:hover {
    border-color: var(--accent);
    background: var(--bg3);
  }
  
  .tool-item-header {
    border-bottom: 1px solid var(--border);
    padding: 1.25rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .tool-item-title-grp {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .tool-item-title {
    font-family: var(--sans);
    font-size: 20px;
    font-weight: 900;
    margin: 0;
    color: #000000 !important;
  }
  
  .tool-item-badge {
    font-family: var(--mono);
    font-size: 9px;
    font-weight: 700;
    padding: 2px 8px;
    border: 1px solid var(--border);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  
  .tool-item-badge.free {
    background: color-mix(in srgb, #16a34a 8%, var(--bg2));
    color: #16a34a;
    border-color: color-mix(in srgb, #16a34a 20%, var(--border));
  }
  
  .tool-item-badge.paid {
    background: color-mix(in srgb, var(--accent) 8%, var(--bg2));
    color: var(--accent);
    border-color: color-mix(in srgb, var(--accent) 20%, var(--border));
  }
  
  .tool-item-badge.recommended {
    background: var(--ink);
    color: var(--bg);
    border-color: var(--ink);
  }
  
  .tool-item-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  .tool-item-intro {
    font-family: var(--sans);
    font-size: 14px;
    line-height: 1.6;
    color: var(--ink2);
    margin: 0;
  }
  
  /* Steps styling */
  .tool-item-steps {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  .tool-item-step {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
  }
  
  .tool-item-step-num {
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 700;
    color: var(--accent);
    margin-top: 2px;
    flex-shrink: 0;
  }
  
  .tool-item-step-content {
    font-family: var(--sans);
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--ink2);
  }
  
  /* Prompt spec styling */
  .tool-prompt-box {
    background: var(--bg);
    border: 1px dashed var(--border);
    padding: 1.25rem;
    font-family: var(--mono);
    font-size: 12.5px;
    line-height: 1.6;
    color: var(--ink2);
    position: relative;
  }
  
  .tool-prompt-label {
    position: absolute;
    top: -10px;
    right: 1rem;
    background: var(--bg2);
    border: 1px solid var(--border);
    color: var(--muted);
    font-size: 9px;
    font-weight: 700;
    padding: 1px 6px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .tool-prompt-text {
    font-style: italic;
    color: var(--ink);
  }
  
  /* Callouts matching index.css */
  .tool-item-callout {
    border: 1px solid var(--border);
    background: var(--bg);
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .tool-item-callout.tip {
    border-left: 3px solid #16a34a;
  }
  .tool-item-callout.warning {
    border-left: 3px solid var(--accent);
  }
  
  .callout-lbl {
    font-family: var(--mono);
    font-weight: 700;
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  
  .tool-item-callout.tip .callout-lbl {
    color: #16a34a;
  }
  .tool-item-callout.warning .callout-lbl {
    color: var(--accent);
  }
  
  .callout-body {
    font-family: var(--sans);
    font-size: 13px;
    line-height: 1.5;
    color: var(--ink2);
    margin: 0;
  }

  .tool-item-footer {
    font-size: 12px;
    color: var(--muted);
    border-top: 1px solid var(--border);
    padding-top: 1rem;
    font-style: italic;
  }

  /* Redesigned other tools card */
  .other-tools-card {
    background: var(--bg2);
    border: 1px dashed var(--border);
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: relative;
    margin-top: 1rem;
  }
  
  .other-tools-title {
    font-family: var(--sans);
    font-size: 22px;
    font-weight: 900;
    color: #000000 !important;
    margin: 0;
    text-transform: none !important;
    letter-spacing: normal !important;
  }
  
  .other-tools-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.25rem 0;
  }
  
  .other-tools-tag {
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 600;
    color: var(--ink);
    background: var(--bg);
    border: 1px solid var(--border);
    padding: 3px 10px;
    transition: all 0.2s ease;
  }
  
  .other-tools-tag:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, var(--bg));
  }
  
  .other-tools-desc {
    font-family: var(--sans);
    font-size: 13.5px;
    line-height: 1.6;
    color: var(--ink2);
    margin: 0;
  }
  
  .other-tools-footer {
    font-family: var(--sans);
    font-size: 12.5px;
    color: var(--muted);
    border-top: 1px dashed var(--border);
    padding-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .tool-item-header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  </style>

  <!-- GOOGLE AI STUDIO -->
  <div class="tool-item-card">
    <div class="tool-item-header">
      <div class="tool-item-title-grp">
        <h4 class="tool-item-title" style="font-size:20px;font-weight:900;color:#000000;margin:0;text-transform:none;letter-spacing:normal;">Google AI Studio</h4>
      </div>
      <span class="tool-item-badge free">Miễn phí · Ưu tiên dùng</span>
    </div>
    <div class="tool-item-body">
      <p class="tool-item-intro">Sử dụng model Gemini Pro / Flash cho tốc độ xử lý cực nhanh, context window siêu lớn phù hợp cho specs dài.</p>
      
      <ul class="tool-item-steps">
        <li class="tool-item-step">
          <span class="tool-item-step-num">01.</span>
          <div class="tool-item-step-content">Truy cập <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" style="font-weight:600; text-decoration:underline;">aistudio.google.com</a> → tạo chat mới với Gemini 2.5 Pro hoặc Flash.</div>
        </li>
        <li class="tool-item-step">
          <span class="tool-item-step-num">02.</span>
          <div class="tool-item-step-content">Copy toàn bộ nội dung file <code>DESIGN.md</code> → paste vào ô chat ở đầu prompt.</div>
        </li>
        <li class="tool-item-step">
          <span class="tool-item-step-num">03.</span>
          <div class="tool-item-step-content">Mô tả chi tiết cấu trúc website bạn muốn tạo:</div>
        </li>
      </ul>

      <div class="tool-prompt-box">
        <span class="tool-prompt-label">Prompt mẫu</span>
        <span class="tool-prompt-text">"Đây là DESIGN.md của web tôi muốn làm theo: [paste nội dung]. Dùng design system này để tạo một landing page hoàn chỉnh cho nền tảng học AI cho marketer Việt Nam. Gồm: nav sticky, hero section có headline + subtitle + 2 CTA, section features 3 cột, footer."</span>
      </div>

      <ul class="tool-item-steps">
        <li class="tool-item-step">
          <span class="tool-item-step-num">04.</span>
          <div class="tool-item-step-content">Google AI Studio có kết nối với Github, bạn chỉ cần liên kết để lưu code và clone về máy.</div>
        </li>
        <li class="tool-item-step">
          <span class="tool-item-step-num">05.</span>
          <div class="tool-item-step-content">Dùng AI IDE để tiếp tục tinh chỉnh: <em>"Thêm section pricing 3 tier. Đổi hero background sang tối."</em></div>
        </li>
      </ul>
    </div>
  </div>

  <!-- LOVABLE -->
  <div class="tool-item-card">
    <div class="tool-item-header">
      <div class="tool-item-title-grp">
        <h4 class="tool-item-title" style="font-size:20px;font-weight:900;color:#000000;margin:0;text-transform:none;letter-spacing:normal;">Lovable.dev</h4>
      </div>
      <span class="tool-item-badge paid">Có phí · Hỗ trợ Database & Auth</span>
    </div>
    <div class="tool-item-body">
      <p class="tool-item-intro">Phù hợp khi ứng dụng của bạn cần tính năng đăng nhập và lưu trữ dữ liệu với Supabase ngay từ đầu.</p>
      
      <ul class="tool-item-steps">
        <li class="tool-item-step">
          <span class="tool-item-step-num">01.</span>
          <div class="tool-item-step-content">Vào <a href="https://lovable.dev/" target="_blank" rel="noreferrer" style="font-weight:600; text-decoration:underline;">lovable.dev</a> → tạo project mới.</div>
        </li>
        <li class="tool-item-step">
          <span class="tool-item-step-num">02.</span>
          <div class="tool-item-step-content">Tại ô prompt đầu tiên, paste DESIGN.md vào rồi mô tả ý tưởng ứng dụng.</div>
        </li>
        <li class="tool-item-step">
          <span class="tool-item-step-num">03.</span>
          <div class="tool-item-step-content">Lovable tự build toàn bộ — giao diện theo đúng specs, tích hợp sẵn backend Supabase.</div>
        </li>
        <li class="tool-item-step">
          <span class="tool-item-step-num">04.</span>
          <div class="tool-item-step-content">Khi xong → bấm **Connect GitHub** để Lovable tự động push mã nguồn lên repository.</div>
        </li>
      </ul>

      <div class="tool-item-callout tip">
        <span class="callout-lbl">💡 Mẹo nhỏ</span>
        <p class="callout-body">Tận dụng lượng credit miễn phí ban đầu để tinh chỉnh UI và các tương tác trước khi nâng cấp gói trả phí.</p>
      </div>
    </div>
  </div>

  <!-- BASE44 -->
  <div class="tool-item-card">
    <div class="tool-item-header">
      <div class="tool-item-title-grp">
        <h4 class="tool-item-title" style="font-size:20px;font-weight:900;color:#000000;margin:0;text-transform:none;letter-spacing:normal;">Base44.com</h4>
      </div>
      <span class="tool-item-badge recommended">Khuyên dùng · Nhanh nhất</span>
    </div>
    <div class="tool-item-body">
      <p class="tool-item-intro">Công cụ sinh giao diện tức thì, tối giản hóa quy trình và cho ra sản phẩm chạy trực tuyến ngay lập tức.</p>
      
      <ul class="tool-item-steps">
        <li class="tool-item-step">
          <span class="tool-item-step-num">01.</span>
          <div class="tool-item-step-content">Truy cập <a href="https://base44.com/" target="_blank" rel="noreferrer" style="font-weight:600; text-decoration:underline;">base44.com</a> → tạo app mới.</div>
        </li>
        <li class="tool-item-step">
          <span class="tool-item-step-num">02.</span>
          <div class="tool-item-step-content">Paste DESIGN.md vào rồi nhập mô tả cấu trúc website.</div>
        </li>
        <li class="tool-item-step">
          <span class="tool-item-step-num">03.</span>
          <div class="tool-item-step-content">App được khởi tạo ngay lập tức, sẵn sàng để chia sẻ hoặc xem trước trực tuyến.</div>
        </li>
      </ul>

      <div class="tool-item-callout warning">
        <span class="callout-lbl">⚠️ Nhược điểm & Giải pháp</span>
        <div class="callout-body">
          Base44 chỉ cho phép kết nối GitHub với tài khoản trả phí. Mẹo nhỏ là dùng <strong>Codex + Plugin Base44</strong>:
          <ol style="margin-top: 6px; padding-left: 1.1rem; list-style-type: decimal;">
            <li>Tạo một folder rỗng hoàn chỉnh trên máy tính của bạn.</li>
            <li>Kết nối tài khoản của bạn thông qua Codex và gửi prompt:</li>
          </ol>
          <div class="tool-prompt-box" style="margin-top: 8px;">
            <span class="tool-prompt-label">Prompt Codex</span>
            <code>@Base44 Hãy đăng nhập vào tài khoản [gmailcuaban] và tải toàn bộ code của project về folder hiện tại cho tôi.</code>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CÁC TOOL KHÁC -->
  <div class="other-tools-card">
    <h4 class="other-tools-title" style="font-size:22px;font-weight:900;color:#000000;margin:0;text-transform:none;letter-spacing:normal;">Các công cụ AI khác</h4>
    
    <div class="other-tools-tags">
      <span class="other-tools-tag">v0.dev</span>
      <span class="other-tools-tag">Replit</span>
      <span class="other-tools-tag">Claude Design</span>
      <span class="other-tools-tag">Figma Make</span>
    </div>
    
    <p class="other-tools-desc">
      Quy trình áp dụng hoàn toàn tương tự: <strong>quăng file DESIGN.md vào context → mô tả cấu trúc website mong muốn → để AI tự động dựng code.</strong> Chúng đều hoạt động tốt nhất khi nhận diện được specifications thiết kế rõ ràng.
    </p>
    
    <div class="other-tools-footer">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="flex-shrink: 0; color: var(--accent);">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span>Hướng dẫn chi tiết từng công cụ, tip, lỗi thường gặp sẽ được cập nhật liên tục trong các bài viết riêng trên <strong>markAI</strong>.</span>
    </div>
  </div>
</section>
</html-block>
    
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