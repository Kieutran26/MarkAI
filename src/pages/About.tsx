import { Link } from 'react-router-dom';
import ManifestoBox from '../components/about/ManifestoBox';
import StatsBar from '../components/about/StatsBar';
import StorySection from '../components/about/StorySection';
import WhyFreeSection from '../components/about/WhyFreeSection';
import RoadmapSection from '../components/about/RoadmapSection';
import TeamSection from '../components/about/TeamSection';
import CTASection from '../components/about/CTASection';

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">✳ Về dự án · markAI.vn · 2026</p>
            <h1 className="hero-h1">
              Tại sao markAI<br />tồn tại <em>miễn phí.</em>
            </h1>
            <p className="hero-desc">
              markAI.vn là nền tảng học AI ứng dụng dành riêng cho dân Marketing Việt Nam. Không slide, không lý thuyết suông — học xong là dùng được ngay. Và mãi mãi miễn phí.
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

      {/* STATS */}
      <StatsBar />

      {/* STORY */}
      <StorySection />

      {/* WHY FREE */}
      <WhyFreeSection />

      {/* ROADMAP */}
      <RoadmapSection />

      {/* TEAM */}
      <TeamSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
