'use client';

import { useState } from 'react';
import SeverityPicker from './SeverityPicker';
import PagePicker from './PagePicker';
import SuccessState from '../../components/SuccessState';

export default function BugReportForm() {
  const [severity, setSeverity] = useState('');
  const [page, setPage] = useState('');
  const [desc, setDesc] = useState('');
  const [action, setAction] = useState('');
  const [browser, setBrowser] = useState('');
  const [device, setDevice] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!severity || !page || !desc.trim()) {
      alert('Vui lòng điền đủ các trường bắt buộc (*).');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SuccessState
        icon="✳"
        title="Bug report đã gửi!"
        description="Mình đã nhận được và sẽ xử lý sớm nhất có thể. Thường trong 24-48h với lỗi nghiêm trọng.\n\nCảm ơn bạn đã giúp cải thiện markAI."
      />
    );
  }

  return (
    <div className="form-box">
      <div className="form-header">
        <span className="form-header-title">✳ Báo lỗi</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)' }}>Fix thường trong 24-48h</span>
      </div>
      <div className="form-body">
        <div className="form-field">
          <label className="form-label">Mức độ nghiêm trọng <span className="req">*</span></label>
          <SeverityPicker selected={severity} onChange={setSeverity} />
        </div>

        <div className="form-field">
          <label className="form-label">Lỗi xảy ra ở trang nào? <span className="req">*</span></label>
          <PagePicker selected={page} onChange={setPage} />
        </div>

        <div className="form-field">
          <label className="form-label">Mô tả lỗi <span className="req">*</span></label>
          <textarea
            className="form-textarea"
            placeholder="Ví dụ: Khi click vào bài Vibecode 03, trang hiển thị trắng. Code 404 xuất hiện trên console. Thử refresh nhiều lần vẫn vậy..."
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Bạn đang làm gì khi lỗi xảy ra?</label>
          <input
            type="text"
            className="form-input"
            placeholder="Ví dụ: Đang click vào bài học 03, đang copy prompt..."
            value={action}
            onChange={(e) => setAction(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-field">
            <label className="form-label">Trình duyệt</label>
            <select
              className="form-select"
              value={browser}
              onChange={(e) => setBrowser(e.target.value)}
            >
              <option value="">Chọn...</option>
              <option>Chrome</option>
              <option>Safari</option>
              <option>Firefox</option>
              <option>Edge</option>
              <option>Khác</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Thiết bị</label>
            <select
              className="form-select"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
            >
              <option value="">Chọn...</option>
              <option>Máy tính (Mac)</option>
              <option>Máy tính (Windows)</option>
              <option>iPhone</option>
              <option>Android</option>
              <option>iPad / Tablet</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label className="form-label">Email (để nhận thông báo khi fix xong)</label>
          <input
            type="email"
            className="form-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="form-hint">✳ Tùy chọn. Nếu để trống, báo lỗi hoàn toàn ẩn danh.</span>
        </div>

        <button type="button" className="btn-primary" onClick={handleSubmit}>
          Gửi báo lỗi →
        </button>
      </div>
    </div>
  );
}
