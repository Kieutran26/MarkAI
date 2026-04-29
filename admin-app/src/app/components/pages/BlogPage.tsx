'use client'

import { useAdminUi } from '@/app/components/AdminUiProvider'
import Badge from '@/app/components/Badge'
import { blogData } from '@/app/data/content'

export default function BlogPage() {
  const { openAdminModal } = useAdminUi()

  return (
    <div className="page" id="page-blog">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Blog</strong> · Tat ca bai viet
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => openAdminModal('edit-blog')}>
            + Bai viet moi
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tieu de</th>
              <th>Category</th>
              <th>Excerpt</th>
              <th>Thoi gian doc</th>
              <th>Status</th>
              <th>Ngay</th>
              <th>Thao tac</th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((post, index) => (
              <tr key={index}>
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
                    <button className="row-btn primary" onClick={() => openAdminModal('edit-blog')}>Sua</button>
                    {post.hasPublish && <button className="row-btn">Publish</button>}
                    <button className="row-btn danger">Xoa</button>
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
