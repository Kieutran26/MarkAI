'use client';

import { type FormEvent, useState } from 'react';

interface SubmitPromptSectionProps {
  onSubmit?: (data: { name: string; prompt: string; category: string; tool: string; nickname: string }) => void;
}

export default function SubmitPromptSection({ onSubmit }: SubmitPromptSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    prompt: '',
    category: '',
    tool: '',
    nickname: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.prompt || !formData.category || !formData.tool) {
      setError('Vui lòng điền đầy đủ các trường bắt buộc.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/prompts/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.name,
          prompt: formData.prompt,
          category: formData.category,
          tool: formData.tool,
          nickname: formData.nickname,
        }),
      });

      if (!response.ok) {
        throw new Error('Gửi prompt thất bại.');
      }

      setSubmitted(true);
      setFormData({ name: '', prompt: '', category: '', tool: '', nickname: '' });
      
      // Auto reset success message after 5s
      setTimeout(() => setSubmitted(false), 5000);
      
      onSubmit?.(formData);
    } catch (err) {
      setError('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="submit-section" id="submit">
      <div className="submit-inner">
        <div>
          <p className="submit-label"><span>✳</span> 06 · cộng đồng</p>
          <h2 className="submit-h2">
            Bạn có prompt hay?<br />
            <em>Share để mọi người dùng.</em>
          </h2>
          <p className="submit-desc">
            Prompt tốt nhất luôn đến từ người đang dùng thực tế. Nếu bạn có prompt nào hiệu quả, submit vào đây — mình review và publish trong 3 ngày.
          </p>
          <div className="submit-insight">
            <strong>✳ Credit đầy đủ:</strong> Tên bạn sẽ được ghi dưới mỗi prompt được publish — dù chỉ là nickname.
          </div>
        </div>

        <div className="submit-form">
          <div className="submit-form-header">
            <div className="submit-form-title">✳ Submit prompt mới</div>
          </div>
          <div className="submit-form-body">
            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--success)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Gửi thành công!</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
                  Cảm ơn bạn đã đóng góp. Prompt của bạn sẽ được review sớm.
                </div>
              </div>
            ) : (
              <>
                {error && (
                  <div style={{ padding: '0.8rem', background: 'rgba(220, 38, 38, 0.1)', border: '1px solid var(--danger)', color: 'var(--danger)', fontSize: '12px', fontFamily: 'var(--mono)' }}>
                    {error}
                  </div>
                )}
                <div className="form-field">
                  <label className="form-label">Tên prompt</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Mô tả ngắn — người dùng sẽ thấy tên này..."
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    disabled={submitting}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Nội dung prompt</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Paste prompt của bạn vào đây — có thể dùng [biến] để đánh dấu chỗ thay thế..."
                    rows={5}
                    value={formData.prompt}
                    onChange={(e) => handleChange('prompt', e.target.value)}
                    disabled={submitting}
                  />
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Danh mục</label>
                    <select
                      className="form-select"
                      value={formData.category}
                      onChange={(e) => handleChange('category', e.target.value)}
                      disabled={submitting}
                    >
                      <option value="">Chọn danh mục...</option>
                      <option>Vibecode</option>
                      <option>Content</option>
                      <option>Research</option>
                      <option>Data</option>
                      <option>Deploy</option>
                      <option>Design</option>
                      <option>Workflow</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label">AI Tool</label>
                    <select
                      className="form-select"
                      value={formData.tool}
                      onChange={(e) => handleChange('tool', e.target.value)}
                      disabled={submitting}
                    >
                      <option value="">Dùng với tool nào?</option>
                      <option>Claude</option>
                      <option>Cursor AI</option>
                      <option>ChatGPT</option>
                      <option>Gemini</option>
                      <option>v0.dev / Bolt</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label">Tên / Nickname (tùy chọn)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Để trống nếu muốn ẩn danh"
                    value={formData.nickname}
                    onChange={(e) => handleChange('nickname', e.target.value)}
                    disabled={submitting}
                  />
                </div>
                <button 
                  className="btn-accent" 
                  style={{ width: '100%', justifyContent: 'center', opacity: submitting ? 0.7 : 1 }} 
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  {submitting ? 'Đang gửi...' : 'Submit prompt →'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
