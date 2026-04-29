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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
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
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#" className="btn-accent">Submit prompt →</a>
            <a href="#" className="btn-ghost-inv">Xem guidelines</a>
          </div>
        </div>

        <div className="submit-form">
          <div className="submit-form-header">
            <div className="submit-form-title">✳ Submit prompt mới</div>
          </div>
          <div className="submit-form-body">
            <div className="form-field">
              <label className="form-label">Tên prompt</label>
              <input
                type="text"
                className="form-input"
                placeholder="Mô tả ngắn — người dùng sẽ thấy tên này..."
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
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
              />
            </div>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Danh mục</label>
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => handleChange('category', e.target.value)}
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
              />
            </div>
            <button className="btn-accent" style={{ width: '100%', justifyContent: 'center' }} onClick={handleSubmit}>
              Submit prompt →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
