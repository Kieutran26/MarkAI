'use client';

import { useState } from 'react';
import TopicSelector from './TopicSelector';
import SuccessState from '../../components/SuccessState';

export default function ContactForm() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!selectedTopic || !name.trim() || !email.trim() || !message.trim()) {
      alert('Vui lòng điền đủ các trường bắt buộc (*).');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SuccessState
        icon="✳"
        title="Tin nhắn đã gửi!"
        description="Mình đã nhận được và sẽ phản hồi trong 1-3 ngày làm việc.\n\nCảm ơn bạn đã liên hệ — mọi tin nhắn đều được mình đọc trực tiếp."
      />
    );
  }

  return (
    <div className="form-box" id="contact-form">
      <div className="form-header">
        <span className="form-header-title">✳ Gửi tin nhắn</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)' }}>Phản hồi 1-3 ngày</span>
      </div>
      <div className="form-body">
        <div className="form-field">
          <label className="form-label">Chủ đề liên hệ <span className="req">*</span></label>
          <TopicSelector selected={selectedTopic} onChange={setSelectedTopic} />
        </div>

        <div className="form-field">
          <label className="form-label">Tên bạn <span className="req">*</span></label>
          <input
            type="text"
            className="form-input"
            placeholder="Tên hoặc nickname..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Email <span className="req">*</span></label>
          <input
            type="email"
            className="form-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="form-hint">✳ Cần để mình phản hồi lại — không dùng cho mục đích khác.</span>
        </div>

        <div className="form-field">
          <label className="form-label">Tin nhắn <span className="req">*</span></label>
          <textarea
            className="form-textarea"
            placeholder="Viết gì cũng được — không có template, không có form cứng nhắc..."
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Bạn đang làm ở lĩnh vực nào?</label>
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Không cần điền nếu không muốn</option>
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

        <button type="button" className="btn-primary" onClick={handleSubmit}>
          Gửi tin nhắn →
        </button>
      </div>
    </div>
  );
}
