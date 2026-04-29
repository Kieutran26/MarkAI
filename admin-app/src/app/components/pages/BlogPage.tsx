'use client'

import Badge from '@/app/components/Badge'
import { blogData } from '@/app/data/content'

interface BlogPageProps {
  onOpenModal: (modalId: string) => void
}

export default function BlogPage({ onOpenModal }: BlogPageProps) {
  return (
    <div className="page" id="page-blog">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Blog</strong> · Tất cả bài viết
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => onOpenModal('edit-blog')}>
            + Bài viết mới
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tiêu đề</th>
              <th>Category</th>
              <th>Excerpt</th>
              <th>Thời gian đọc</th>
              <th>Status</th>
              <th>Ngày</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((post, i) => (
              <tr key={i}>
                <td className="td-serif">{post.title}</td>
                <td><Badge variant="dark">{post.category}</Badge></td>
                <td className="td-muted" style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {post.excerpt}
                </td>
                <td className="td-mono">{post.readTime}</td>
                <td>
                  <Badge variant={post.status === 'Live' ? 'green' : 'yellow'}>{post.status}</Badge>
                </td>
                <td className="td-muted">{post.date}</td>
                <td>
                  <div className="row-actions">
                    <button className="row-btn primary" onClick={() => onOpenModal('edit-blog')}>Sửa</button>
                    {post.hasPublish && (
                      <button className="row-btn">Publish</button>
                    )}
                    <button className="row-btn danger">Xóa</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
