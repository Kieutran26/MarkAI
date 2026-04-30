# Vibecode MVP Schema

Schema SQL gốc nằm ở:

- `supabase/migrations/20260430_vibecode_mvp_schema.sql`

## Scope

Schema này chốt cho 4 việc:

1. admin login bằng `username/password`
2. học viên login bằng `Google`
3. admin quản course / lesson / block
4. học viên lưu progress theo lesson và block

## Bảng chính

- `users`
- `auth_identities`
- `roles`
- `user_roles`
- `courses`
- `lessons`
- `lesson_blocks`
- `lesson_progress`
- `block_progress`
- `admin_sessions`

## Content Model

`lesson_blocks.block_type` hiện hỗ trợ:

- `text`
- `video`
- `code`
- `interactive_image`

`interactive_image` dùng `content_json`.

Shape gợi ý:

```json
{
  "image_url": "https://cdn.example.com/mockups/chat-screen.png",
  "alt": "Man hinh chat mo phong",
  "hotspots": [
    {
      "id": "model-picker",
      "x_percent": 18.4,
      "y_percent": 6.2,
      "label": "1",
      "title": "Model picker",
      "description": "Cho phep doi model truoc khi gui prompt."
    },
    {
      "id": "send-button",
      "x_percent": 94.1,
      "y_percent": 95.6,
      "label": "2",
      "title": "Nut gui",
      "description": "Click vao day de gui prompt."
    }
  ]
}
```

## Preview Flow

`lessons` có:

- `status`: `draft | published | archived`
- `preview_token`
- `preview_updated_at`

MVP nên hiểu như sau:

- lesson draft vẫn preview được trong admin
- nếu muốn share link preview riêng sau này, dùng `preview_token`

## Progress Model

`lesson_progress`:

- trạng thái tổng của 1 lesson

`block_progress`:

- trạng thái từng block
- `interaction_json` dùng để lưu tương tác cho `interactive_image`

Shape gợi ý:

```json
{
  "viewed_hotspot_ids": ["model-picker", "send-button"]
}
```

## Chưa làm trong MVP

- quiz
- enrollment
- comments
- audit logs
- version history
- bảng hotspot riêng

## Assumptions

- khóa học public toàn bộ
- lesson preview chủ yếu dành cho admin trước khi publish
- interactive demo đang dùng ảnh tĩnh + hotspot, chưa dùng UI simulation động
