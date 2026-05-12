import { useEffect, useState } from 'react'
import Badge from '@/app/components/Badge'

type PromptSuggestion = {
  id: string
  title: string
  prompt: string
  category: string
  tool: string
  nickname: string | null
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
}

export default function PromptSuggestionsPage() {
  const [suggestions, setSuggestions] = useState<PromptSuggestion[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchSuggestions() {
      try {
        const res = await fetch('/api/admin/prompt-suggestions')
        if (res.ok) {
          const data = await res.json()
          setSuggestions(data)
        }
      } catch (error) {
        console.error('Failed to fetch suggestions', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchSuggestions()
  }, [])

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="page" id="page-prompt-suggestions">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Đề xuất Prompt</strong> · {suggestions.length} đề xuất
          </span>
        </div>
      </div>

      <div className="table-wrap">
        {isLoading ? (
          <div className="p-12 text-center font-mono text-sm text-muted">Đang tải dữ liệu...</div>
        ) : suggestions.length === 0 ? (
          <div className="p-12 text-center font-mono text-sm text-muted">Chưa có đề xuất nào.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th style={{ width: '150px' }}>Ngày gửi</th>
                <th style={{ width: '120px' }}>Người gửi</th>
                <th style={{ width: '100px' }}>Tool/Cat</th>
                <th>Tiêu đề & Nội dung</th>
                <th style={{ width: '100px' }}>Trạng thái</th>
                <th style={{ width: '120px' }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {suggestions.map((item) => (
                <tr key={item.id}>
                  <td className="td-mono" style={{ fontSize: '11px' }}>{formatDate(item.created_at)}</td>
                  <td className="font-medium">{item.nickname || <em className="opacity-50">Ẩn danh</em>}</td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <Badge variant="outline" style={{ textTransform: 'uppercase', fontSize: '8px' }}>
                        {item.tool}
                      </Badge>
                      <Badge variant="outline" style={{ textTransform: 'uppercase', fontSize: '8px', opacity: 0.7 }}>
                        {item.category}
                      </Badge>
                    </div>
                  </td>
                  <td className="td-serif" style={{ fontSize: '.88rem', maxWidth: '400px', whiteSpace: 'normal', lineHeight: '1.5' }}>
                    <div style={{ fontWeight: 600, marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.prompt}
                    </div>
                  </td>
                  <td>
                    <Badge variant={item.status === 'pending' ? 'outline' : item.status === 'approved' ? 'green' : 'danger'}>
                      {item.status.toUpperCase()}
                    </Badge>
                  </td>
                  <td>
                    <div className="row-actions">
                      <button className="row-btn primary">Duyệt</button>
                      <button className="row-btn danger">Xóa</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
