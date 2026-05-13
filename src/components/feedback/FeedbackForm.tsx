'use client';

import { useState } from 'react';
import ModulePicker from './ModulePicker';
import RatingGroup from './RatingGroup';
import SuccessState from '../../components/SuccessState';

export default function FeedbackForm() {
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [content, setContent] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!selectedModule || !content.trim()) {
      setError('Vui lòng chọn module và điền nội dung góp ý.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/feedback/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          moduleName: selectedModule,
          rating: selectedRating,
          content,
          role,
          email,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Gửi góp ý thất bại.');
      }

      setSubmitted(true);
      setSelectedModule('');
      setSelectedRating('');
      setContent('');
      setRole('');
      setEmail('');
    } catch (submitError) {
      setError(
        submitError instanceof TypeError
          ? 'Không kết nối được API góp ý lúc này.'
          : submitError instanceof Error
            ? submitError.message
            : 'Đã có lỗi xảy ra. Vui lòng thử lại sau.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <SuccessState
        icon="✳"
        title="Cảm ơn bạn!"
        description="Góp ý của bạn đã được ghi nhận. Mình sẽ đọc và cập nhật roadmap dựa trên những phản hồi nhận được."
      />
    );
  }

  return (
    <div className="form-box">
      <div className="form-header">
        <span className="form-header-title">✳ Gửi góp ý</span>
        <span className="form-header-step">Bước 1 / 1</span>
      </div>
      <div className="form-body">
        {error ? (
          <div
            style={{
              marginBottom: '1rem',
              padding: '0.8rem 1rem',
              border: '1px solid var(--danger)',
              background: 'rgba(220, 38, 38, 0.08)',
              color: 'var(--danger)',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
            }}
          >
            {error}
          </div>
        ) : null}

        <div className="form-field">
          <label className="form-label">Module bạn muốn góp ý <span className="req">*</span></label>
          <ModulePicker selected={selectedModule} onChange={setSelectedModule} />
        </div>

        <div className="form-field">
          <label className="form-label">Bạn đánh giá module này thế nào?</label>
          <RatingGroup selected={selectedRating} onChange={setSelectedRating} />
        </div>

        <div className="form-field">
          <label className="form-label">Bạn muốn nội dung nào được thêm vào? <span className="req">*</span></label>
          <textarea
            className="form-textarea"
            placeholder="Ví dụ: Mình muốn có thêm bài về cách deploy lên custom domain, hoặc bài về MCP trong Cursor..."
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Bạn đang làm ở lĩnh vực nào?</label>
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={isSubmitting}
          >
            <option value="">Chọn lĩnh vực...</option>
            <option>Brand Marketing</option>
            <option>Performance Marketing</option>
            <option>Content Marketing</option>
            <option>Social Media</option>
            <option>SEO / Organic Growth</option>
            <option>CRM / Email Marketing</option>
            <option>PR / Communications</option>
            <option>Product Marketing</option>
            <option>Community / Partnership</option>
            <option>Data / Marketing Analytics</option>
            <option>E-commerce / Growth</option>
            <option>Marketing Manager / Lead</option>
            <option>Freelancer / Agency</option>
            <option>Khác</option>
          </select>
        </div>

        <div className="form-field">
          <label className="form-label">Email (nếu muốn nhận thông báo khi module ra)</label>
          <input
            type="email"
            className="form-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <span className="form-hint">✳ Tùy chọn — không bắt buộc. Nếu để trống, góp ý hoàn toàn ẩn danh.</span>
        </div>

        <button
          type="button"
          className="btn-primary"
          onClick={() => void handleSubmit()}
          disabled={isSubmitting}
          style={{ opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? 'Đang gửi...' : 'Gửi góp ý →'}
        </button>
      </div>
    </div>
  );
}
