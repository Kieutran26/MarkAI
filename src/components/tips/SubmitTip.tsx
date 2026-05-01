import { useState } from 'react';

export default function SubmitTip() {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [nickname, setNickname] = useState('');

  return (
    <section className="submit-section" id="submit-tip">
      <div className="submit-inner">
        <div>
          <p className="section-label"><span>✳</span> 05 · cộng đồng</p>
          <h2 className="section-heading">Bạn có tip hay?<br /><em>Share với cộng đồng.</em></h2>
          <p className="font-sans text-[14px] font-light leading-[1.7] text-ink2 max-w-[400px] mt-4">
            Tips tốt nhất thường đến từ người đang làm thực tế. Nếu bạn có mẹo hữu ích, submit vào đây để mình review và publish.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <div className="insight">✳ Tips được chọn sẽ credit tên bạn — dù chỉ là nickname.</div>
            <div className="font-mono text-[11px] text-muted">✳ Submit nhanh · có thể để nickname</div>
          </div>
        </div>
        <div className="submit-form">
          <div className="submit-form-header">
            <div className="submit-form-title">✳ Submit tip mới</div>
          </div>
          <div className="submit-form-body">
            <div className="form-field">
              <label className="form-label">Nội dung tip</label>
              <textarea
                className="form-textarea"
                placeholder="Tip của bạn — ngắn gọn, thực dụng..."
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Danh mục</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Chọn danh mục...</option>
                <option>Vibecode</option>
                <option>Workflow</option>
                <option>Deploy</option>
                <option>AI Tools</option>
                <option>Prompt</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">Tên / Nickname (tùy chọn)</label>
              <input
                type="text"
                className="form-input"
                placeholder="Để trống nếu muốn ẩn danh"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <button className="btn-primary form-submit">Submit tip →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
