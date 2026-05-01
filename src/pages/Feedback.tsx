import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import InsightBlock from '../components/InsightBlock';
import FeedbackForm from '../components/feedback/FeedbackForm';
import HowItWorks from '../components/feedback/HowItWorks';
import RecentFeedback from '../components/feedback/RecentFeedback';

export default function Feedback() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.feedback-reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -48px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="feedback-page">
      <Breadcrumb
        items={[
          { label: 'markAI.vn', href: '/' },
          { label: 'Góp ý module' },
        ]}
      />

      <div className="hero feedback-reveal">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">✳ Góp ý module · giúp mình làm tốt hơn</p>
            <h1 className="hero-h1">
              Bạn muốn học
              <br />
              <em>module nào tiếp?</em>
            </h1>
            <p className="hero-desc">
              markAI build theo những gì dân Marketing thực sự cần. Góp ý của bạn trực tiếp ảnh hưởng đến thứ tự ưu tiên,
              module nào nhiều người request nhất sẽ ra trước.
            </p>
            <InsightBlock className="mb-[1.5rem]">
              <strong>✳ Thật sự được đọc.</strong> Không có bot xử lý. Mình đọc từng feedback và cập nhật roadmap dựa trên
              những gì nhận được.
            </InsightBlock>
            <p className="hero-note">✳ gửi góp ý nhanh · phản hồi ẩn danh</p>
          </div>
          <div>
            <FeedbackForm />
          </div>
        </div>
      </div>

      <div className="feedback-reveal">
        <HowItWorks />
      </div>

      <div className="feedback-reveal">
        <RecentFeedback />
      </div>
    </div>
  );
}
