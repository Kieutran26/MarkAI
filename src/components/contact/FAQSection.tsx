'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Tôi có thể xin content markAI về dùng cho dự án của mình không?',
      answer: 'Được, nhưng cần ghi nguồn rõ ràng. Prompt trong library và nội dung bài học — bạn có thể dùng tự do cho học tập và làm việc cá nhân, miễn là không đăng lại dưới tên mình hoặc bán lại.'
    },
    {
      question: 'Tôi muốn contribute vào markAI — viết bài, tạo prompt, hoặc code — được không?',
      answer: 'Rất hoan nghênh! Gửi email với tiêu đề "Contributor — [loại contribution]" và mô tả bạn muốn đóng góp gì. Mình sẽ phản hồi để bàn thêm. Hiện tại nhận: guest blog post (Marketing + AI), prompt chất lượng cao, và báo bug/typo.'
    },
    {
      question: 'markAI có nhận tài trợ hoặc đặt quảng cáo không?',
      answer: 'Không. markAI không nhận tài trợ, không bán quảng cáo, không có affiliate link. Đây là cam kết dài hạn — không phải chiến lược phase đầu. Dự án chạy bằng thời gian cá nhân.'
    },
    {
      question: 'Tôi muốn học thêm ngoài những gì markAI có — bạn có thể gợi ý không?',
      answer: 'Gửi câu hỏi cụ thể qua form liên hệ và mình sẽ cố gắng gợi ý tài nguyên phù hợp. Không phải mọi câu hỏi đều mình có câu trả lời, nhưng mình sẽ trả lời thật thay vì cho câu trả lời qua loa.'
    },
    {
      question: 'markAI sẽ luôn miễn phí chứ? Không có nguy cơ đột ngột đóng cửa?',
      answer: 'Miễn phí là cam kết, không phải tạm thời. Chi phí vận hành dự án này rất thấp — domain + hosting. Không có investor yêu cầu return, không có team cần trả lương. Dự án sẽ chỉ đóng cửa nếu cá nhân mình không còn thời gian duy trì — và nếu điều đó xảy ra, mình sẽ thông báo trước.'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-inner">
        <p className="section-label"><span>✳</span> câu hỏi thường gặp</p>
        <h2 className="section-h2">
          Trước khi <em>nhắn tin,</em> kiểm tra đây.
        </h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => handleToggle(index)}>
                <span className="faq-q-text">{faq.question}</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-a">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
