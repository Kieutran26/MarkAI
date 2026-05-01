import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ManifestoBox from '../components/about/ManifestoBox';
import StatsBar from '../components/about/StatsBar';
import StorySection from '../components/about/StorySection';
import WhyFreeSection from '../components/about/WhyFreeSection';
import RoadmapSection from '../components/about/RoadmapSection';
import CTASection from '../components/about/CTASection';

export default function About() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.about-reveal'));
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
    <div className="about-page">
      <div className="hero about-reveal">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">✳ Về dự án · markAI.vn · 2026</p>
            <h1 className="hero-h1">
              Tại sao markAI<br /><em>tồn tại miễn phí.</em>
            </h1>
            <p className="hero-desc">
              markAI.vn là nền tảng học AI ứng dụng dành riêng cho dân Marketing Việt Nam. Không slide, không lý thuyết suông - học xong là dùng được ngay. Và mãi mãi miễn phí.
            </p>
            <div className="hero-cta">
              <Link to="/vibecode" className="btn-primary">Bắt đầu học ngay →</Link>
              <Link to="/vibecode" className="btn-ghost">Xem lộ trình</Link>
            </div>
            <p className="hero-note">✳ không cần đăng ký · không cần email · không tracking</p>
          </div>
          <div>
            <ManifestoBox />
          </div>
        </div>
      </div>

      <div className="about-reveal">
        <StatsBar />
      </div>

      <div className="about-reveal">
        <StorySection />
      </div>

      <div className="about-reveal">
        <WhyFreeSection />
      </div>

      <div className="about-reveal">
        <RoadmapSection />
      </div>

      <div className="about-reveal">
        <CTASection />
      </div>
    </div>
  );
}
