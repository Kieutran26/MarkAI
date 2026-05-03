# Prompt bộ mô phỏng + thực hành cho từ điển thuật ngữ

## 1. Prompt chi tiết cho thuật ngữ `spacing`

```text
Bạn hãy tạo cho tôi một bộ trình bày hoàn chỉnh cho thuật ngữ "spacing" trong từ điển chuyên ngành dành cho marketer học vibecode.

Mục tiêu:
- Giải thích spacing bằng trực quan, không nặng lý thuyết.
- Người mới nhìn vào phải hiểu ngay: spacing là khoảng cách giữa các khối nội dung, và chỉ cần đổi spacing thì cảm giác giao diện thay đổi rõ rệt.
- Phần mô phỏng và phần thực hành phải tách vai trò rõ ràng:
  1. Mô phỏng: cho xem 4 mức spacing preset.
  2. Thực hành: cho user tự chỉnh spacing realtime để cảm nhận khác biệt.

Đầu ra cần tạo:
1. Một file HTML mô phỏng riêng cho spacing, dùng để nhúng vào detail page glossary bằng iframe/srcDoc.
2. Một khối thực hành thực tế riêng nằm dưới phần gif/mô phỏng, không nhét chung vào iframe.

Yêu cầu nội dung cho phần mô phỏng:
- Tiêu đề chính: "4 Kiểu Spacing".
- Có 4 tab/preset:
  - Tight
  - Comfortable
  - Loose
  - Extra Loose
- Mỗi preset phải làm thay đổi cùng một bố cục mẫu, chỉ đổi spacing chứ không đổi concept chính.
- Cần mô phỏng bằng các thanh ngang + một khối vuông đại diện cho content block, để người học thấy khoảng cách giữa các hàng thay đổi.
- Có label giá trị spacing rõ ràng, ví dụ: `4 — 8px`, `8 — 16px`, `24 — 32px`, `40 — 56px`.
- Có autoplay và reset cho phần preset.
- Chuyển preset phải có animation nhẹ, đủ thấy sự thay đổi nhưng không màu mè.
- Toàn bộ mô phỏng phải fit chiều cao content thật, không để iframe dư khoảng trống lớn hoặc bị scroll vô lý.

Yêu cầu nội dung cho phần thực hành:
- Không dùng lại iframe/gif.
- Tạo một panel riêng ngay dưới mô phỏng.
- Panel này phải mô phỏng một content stack đang "khá khít".
- User có thể tự chỉnh spacing realtime bằng input phù hợp.
- Với term spacing, input phù hợp là slider + number input cho từng khoảng cách giữa các block.
- Khi user đổi giá trị, preview ở bên phải phải cập nhật ngay.
- Preview nên là 1 chuỗi 4-5 content blocks kiểu:
  - Hero
  - Social proof
  - Offer
  - CTA
  - Footnote
- Mỗi block phải có text ngắn để người xem thấy spacing tác động đến khả năng đọc.
- Có một summary nhỏ như `Tổng gap: XXpx`.
- Có một note hướng dẫn ngắn kiểu: thử tăng từ 8px lên 16px, 24px, 32px để cảm nhận layout bớt bí.

Design system bắt buộc:
- Phong cách brutalist/terminal-meets-editor, đồng bộ với glossary hiện tại.
- Nền tối gần đen, có grid mờ để tạo cảm giác interface design tool.
- Accent cam cháy / orange-rust làm màu nhấn chính.
- Typography:
  - Heading: serif hoặc grotesk mạnh, to, đậm, rõ nhịp.
  - Label kỹ thuật / thông số / tab số thứ tự: font mono.
  - Body text: sans dễ đọc.
- Border phải rõ, góc bo ít hoặc vừa phải, không mềm kiểu SaaS generic.
- Không dùng shadow mềm quá nhiều; chỉ dùng nhẹ để tăng chiều sâu.
- Motion tiết chế:
  - tab switch animate nhẹ
  - bar width thay đổi mượt
  - label spacing update mượt
- Mobile phải đọc được, không vỡ layout.
- Không dùng màu tím mặc định kiểu AI-generated UI.

Yêu cầu tích hợp vào glossary page:
- Mô phỏng preset của spacing là một file HTML riêng, nhúng vào detail page.
- Phần thực hành thực tế của spacing nằm ngoài iframe, render bằng component riêng ở ngay bên dưới phần mô phỏng.
- Tránh để nội dung mô phỏng và thực hành dẫm vai trò lên nhau:
  - iframe/preset = xem nhanh các mức spacing chuẩn
  - practice panel = tự nhập số và quan sát realtime

Yêu cầu kỹ thuật:
- Giữ code dễ bảo trì.
- Nếu dùng iframe cho mô phỏng, height phải tự co theo content thật.
- Không để hidden panel bên trong iframe làm sai scrollHeight.
- Tách riêng phần thực hành ra khỏi iframe nếu iframe làm height không ổn định.
- Không tạo mock hời hợt; preview phải thật sự đổi theo input user.

Tiêu chí hoàn thành:
- Người mới học nhìn 10 giây là hiểu spacing khác nhau tạo cảm giác UI khác nhau.
- Người học có thể tự kéo số và thấy layout đổi ngay.
- UI nhìn cùng một hệ thiết kế với trang glossary hiện tại.
```

## 2. Prompt khung chung cho tất cả các thuật ngữ khác

```text
Bạn hãy xây dựng một bộ trình bày cho một thuật ngữ trong từ điển chuyên ngành dành cho marketer học vibecode.

Thông tin đầu vào:
- Thuật ngữ: [TERM_NAME]
- Nhóm thuật ngữ: [design / code / infra / data / ai / workflow]
- Mục tiêu người học cần hiểu sau khi xem:
  - [GOAL_1]
  - [GOAL_2]
  - [GOAL_3]
- Mức độ:
  - mới hoàn toàn, không có nền tảng kỹ thuật
- Bối cảnh:
  - người học là marketer
  - cần hiểu để prompt đúng hơn, đọc lỗi tốt hơn, làm việc với AI/dev nhanh hơn

Đầu ra cần tạo:
1. Một phần mô phỏng trực quan cho thuật ngữ này.
2. Một phần thực hành thực tế ngay dưới mô phỏng.
3. Cả hai phần phải cùng một design system với glossary page hiện tại.

Nguyên tắc thiết kế chung:
- Không giải thích kiểu sách giáo khoa.
- Ưu tiên "nhìn là hiểu".
- Mô phỏng phải cho thấy bản chất vận hành của thuật ngữ.
- Phần thực hành phải cho user chủ động thao tác hoặc đưa ra input, để hiểu sâu hơn bằng trải nghiệm.
- Bài thực hành không bắt buộc lúc nào cũng là điền số; hãy chọn kiểu interaction đúng với bản chất của từng thuật ngữ.

Design system bắt buộc dùng chung cho mọi thuật ngữ:
- Visual direction: brutalist + editor/tool aesthetic + learning interface.
- Background:
  - nền tối hoặc nền trung tính có texture/grid/pattern rất nhẹ
  - không dùng nền phẳng vô hồn
- Color:
  - accent chính: cam / rust / amber đậm
  - màu phụ: xám than, kem nhạt, muted slate
  - tránh tím AI-default
- Typography:
  - heading lớn, cá tính, dứt khoát
  - thông số, badge, label kỹ thuật: mono
  - body text: sans rõ, đọc nhanh
- Borders:
  - có khung rõ
  - ít bo góc
  - cảm giác “tool thật”, không quá mềm mại
- Motion:
  - chỉ dùng motion có ý nghĩa
  - state change, data flow, active selection, hover emphasis
  - không dùng micro-animation vô ích
- Mobile:
  - phải đọc và dùng được trên mobile
  - ưu tiên khả năng hiểu hơn hiệu ứng

Khung đầu ra bắt buộc cho mỗi thuật ngữ:

A. Phần mô phỏng
- Đây là nơi "cho xem bản chất".
- Chọn hình thức mô phỏng theo đúng thuật ngữ.
- Ví dụ:
  - spacing: 4 preset khoảng cách
  - api: dữ liệu chảy từ form sang hệ khác
  - request/response: một yêu cầu đi, một phản hồi về
  - auth: trạng thái trước login / sau login / bị chặn
  - deploy: local -> build -> live
  - database: records đi vào bảng rồi được đọc ra dashboard
  - git/commit: các checkpoint thay đổi
  - responsive: cùng layout trên desktop/tablet/mobile
- Mô phỏng phải có active states rõ, labels rõ, và 1 insight chính mà người xem rút ra được ngay.

B. Phần thực hành thực tế
- Đây là nơi "cho user chạm vào khái niệm".
- Chọn interaction đúng theo từng loại thuật ngữ. Không mặc định dùng number input cho tất cả.
- Một số dạng interaction được phép chọn:
  1. Slider / number input
     - dùng cho spacing, opacity, size scale, timing, threshold, padding, margin, gap
  2. Toggle / switch state
     - dùng cho auth, loading state, feature flag, public/private, on/off automation
  3. Chọn bước trong flow
     - dùng cho deploy, request/response, webhook, CI/CD, form submission
  4. Kéo thả / reorder
     - dùng cho layout hierarchy, content priority, funnel steps, workflow ordering
  5. Điền field / cấu hình nhỏ
     - dùng cho env, API endpoint, prompt template, filter/query logic
  6. Chọn đúng/sai hoặc ghép cặp
     - dùng cho thuật ngữ nền tảng như frontend/backend, database/cache, margin/padding
  7. Multi-state preview
     - dùng cho responsive, auth, loading, empty state, success/error state
- Phần thực hành phải cập nhật realtime hoặc phản hồi rõ sau thao tác.
- Mỗi bài thực hành phải có:
  - mục tiêu ngắn
  - 1 interaction chính
  - preview hoặc feedback rõ
  - 1 hint nhỏ để user biết nên thử gì

C. Yêu cầu nội dung copy
- Copy ngắn, trực diện, không giảng dài.
- Viết bằng ngôn ngữ marketer, không jargon dư thừa.
- Mỗi block text phải trả lời 1 việc:
  - đây là gì
  - đổi cái gì thì chuyện gì xảy ra
  - tại sao điều này quan trọng khi làm việc với AI/dev

D. Yêu cầu tích hợp kỹ thuật
- Nếu phần mô phỏng là HTML nhúng iframe:
  - height phải fit theo content thật
  - không để scroll dư
  - không để hidden content làm sai chiều cao
- Nếu interaction phức tạp:
  - có thể tách phần thực hành ra khỏi iframe
  - render bằng component riêng dưới mô phỏng
- Ưu tiên cấu trúc dễ bảo trì:
  - mô phỏng riêng
  - thực hành riêng
  - data của term vẫn nằm trong glossary

E. Cách chọn kiểu thực hành theo loại thuật ngữ
- Nếu thuật ngữ là về khoảng cách / kích thước / scale:
  - dùng slider / number input
- Nếu thuật ngữ là về luồng dữ liệu:
  - dùng step-flow hoặc click từng bước
- Nếu thuật ngữ là về trạng thái hệ thống:
  - dùng toggle hoặc multi-state preview
- Nếu thuật ngữ là về cấu trúc/quan hệ:
  - dùng sơ đồ hoặc matching interaction
- Nếu thuật ngữ là về logic prompt / config:
  - dùng input + output preview
- Nếu thuật ngữ là về workflow:
  - dùng timeline, stage picker, hoặc before/after

F. Tiêu chí hoàn thành
- User không cần biết code vẫn hiểu bản chất thuật ngữ.
- Mô phỏng giúp hiểu nhanh.
- Thực hành giúp nhớ lâu hơn.
- Thiết kế nhìn đồng bộ với glossary hiện tại.
- Interaction của mỗi thuật ngữ phải đúng bản chất của thuật ngữ đó, không gượng ép.
```

## 3. Cách dùng nhanh

- Khi làm một thuật ngữ cụ thể, dùng prompt mục `2`, rồi thay:
  - `[TERM_NAME]`
  - `[design / code / infra / data / ai / workflow]`
  - `[GOAL_1..3]`
- Nếu thuật ngữ là `spacing`, ưu tiên dùng luôn prompt mục `1`.
- Nếu thuật ngữ khác nhưng có tính chất tương tự `spacing` như `padding`, `margin`, `responsive`, có thể reuse cấu trúc prompt của mục `1` rồi thay content cho phù hợp.
