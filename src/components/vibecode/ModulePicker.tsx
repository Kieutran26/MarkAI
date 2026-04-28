import React from 'react';
import { Link } from 'react-router-dom';

const modules = [
  { icon: '🌐', title: 'Vibecode ra Web', meta: 'Next.js · Tailwind · Vercel · 10 bài', available: true, badge: '✓ ĐANG MỞ' },
  { icon: '📱', title: 'Vibecode ra App', meta: 'React Native · Expo', available: false },
  { icon: '🤖', title: 'Vibecode ra Chatbot', meta: 'Claude API · Telegram Bot', available: false },
  { icon: '🛠', title: 'Vibecode ra Tool nội bộ', meta: 'Dashboard · Tracker · Form', available: false },
  { icon: '📊', title: 'Analytics với AI', meta: 'GA4 · Looker · Claude', available: false },
  { icon: '🎨', title: 'Generate Image', meta: 'Midjourney · Flux · Firefly', available: false },
  { icon: '🎬', title: 'Motion Video', meta: 'Kling · Runway · HeyGen', available: false },
  { icon: '💬', title: 'Bạn muốn module gì tiếp theo?', meta: 'Góp ý →', available: true, isFeedback: true },
];

export default function ModulePicker() {
  return (
    <div className="border-b border-[var(--border)]" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-[1200px] mx-auto px-5 py-16 lg:py-20">
        <p className="section-label">
          <span>✳</span> 04 · các module học AI
        </p>
        <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
          <h2 className="section-heading">
            Web chỉ là bắt đầu. <em>Còn nhiều hơn nữa.</em>
          </h2>
          <p className="font-[family-name:var(--mono)] text-[11px] text-[var(--muted)]">
            Chọn hướng học tiếp theo →
          </p>
        </div>
        
        <div className="module-grid">
          {modules.map((module, index) => (
            <div 
              key={index}
              className={`module-card ${module.available && !module.isFeedback ? 'available' : ''} ${module.isFeedback ? 'feedback' : ''}`}
            >
              {!module.available && (
                <span className="badge-soon">Sắp ra</span>
              )}
              {module.available && !module.isFeedback && (
                <span className="module-card-badge">✓ ĐANG MỞ</span>
              )}
              <div className="text-[1.2rem] mb-4">{module.icon}</div>
              <div className="font-[family-name:var(--serif)] text-[1rem] leading-[1.3] mb-2">
                {module.title}
              </div>
              <div className="font-[family-name:var(--mono)] text-[10px] text-[var(--muted)] tracking-[0.02em]">
                {module.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
