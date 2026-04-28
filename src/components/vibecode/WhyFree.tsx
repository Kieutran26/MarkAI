import React from 'react';

const reasons = [
  {
    icon: '✳ Dành riêng',
    title: 'Cho dân Marketing Việt Nam',
    desc: 'Không học chung với dân tech. Ví dụ, use case, và ngôn ngữ — tất cả từ góc nhìn Marketing.',
  },
  {
    icon: '✳ Thực chiến',
    title: 'Học xong dùng được ngay',
    desc: 'Không slide. Không lý thuyết suông. Mỗi bài kết thúc bằng thứ gì đó bạn có thể làm được luôn.',
  },
  {
    icon: '✳ Cập nhật',
    title: 'Mỗi tuần có nội dung mới',
    desc: 'AI thay đổi nhanh. markAI cập nhật theo — tool mới, kỹ thuật mới, prompt mới liên tục.',
  },
  {
    icon: '✳ Sạch',
    title: 'Không quảng cáo · Không tracking',
    desc: 'Không retargeting. Không bán data. Không email spam. Học xong, đi làm — không bị làm phiền.',
  },
];

export default function WhyFree() {
  return (
    <div className="border-b border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-5 py-16 lg:py-20">
        <p className="section-label">
          <span>✳</span> 05 · triết lý markAI
        </p>
        <h2 className="section-heading mb-10">
          Không phải freemium. <em>Miễn phí thật.</em>
        </h2>
        
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">
                {reason.icon}
              </div>
              <div className="why-title font-[family-name:var(--serif)] text-[1.05rem] leading-[1.3] mb-2">
                {reason.title}
              </div>
              <div className="why-desc font-[family-name:var(--sans)] text-[13px] font-light text-[var(--ink2)] leading-[1.6]">
                {reason.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
