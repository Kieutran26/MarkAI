import Breadcrumb from '../components/Breadcrumb';
import InsightBlock from '../components/InsightBlock';
import ChannelsList from '../components/contact/ChannelsList';
import ContactForm from '../components/contact/ContactForm';
import AboutAuthor from '../components/contact/AboutAuthor';
import FAQSection from '../components/contact/FAQSection';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* BREADCRUMB */}
      <Breadcrumb items={[
        { label: 'markAI.vn', href: '/' },
        { label: 'Liên hệ tác giả' }
      ]} />

      {/* HERO + FORM */}
      <div className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">✳ Liên hệ tác giả · markAI.vn</p>
            <h1 className="hero-h1">
              Nói chuyện<br /><em>trực tiếp.</em>
            </h1>
            <p className="hero-desc">
              markAI được build và maintain bởi một người. Không có team support, không có chatbot — tin nhắn của bạn sẽ đến thẳng người tạo ra dự án này.
            </p>
            <InsightBlock className="mb-[1.5rem]">
              <strong>✳ Thời gian phản hồi:</strong> Thường trong 1-3 ngày. Nếu bạn báo lỗi khẩn, dùng trang "Báo lỗi" để được xử lý nhanh hơn.
            </InsightBlock>

            <ChannelsList />

            <p className="hero-note">✳ Không phù hợp để liên hệ: sales, partnership đề nghị thanh toán, hoặc "mình muốn mua quảng cáo". markAI không có kênh monetize.</p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* ABOUT AUTHOR */}
      <AboutAuthor />

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}
