import Breadcrumb from '../components/Breadcrumb';
import InsightBlock from '../components/InsightBlock';
import BugReportForm from '../components/bugreport/BugReportForm';
import TipsBeforeReport from '../components/bugreport/TipsBeforeReport';
import BugLog from '../components/bugreport/BugLog';

export default function Report() {
  return (
    <div className="report-page">
      {/* BREADCRUMB */}
      <Breadcrumb items={[
        { label: 'markAI.vn', href: '/' },
        { label: 'Báo lỗi' }
      ]} />

      {/* HERO + FORM */}
      <div className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">✳ Báo lỗi · giúp mình fix nhanh hơn</p>
            <h1 className="hero-h1">
              Gặp lỗi?<br /><em>Báo ngay đây.</em>
            </h1>
            <p className="hero-desc">
              Mọi bug report đều được đọc và xử lý. Càng mô tả cụ thể, mình càng fix nhanh. Thường trong vòng 24-48h với lỗi nghiêm trọng.
            </p>
            <InsightBlock className="mb-[1.5rem]">
              <strong>✳ Mô tả cụ thể nhất có thể:</strong> Lỗi xảy ra ở trang nào, bạn đang làm gì lúc đó, trình duyệt và thiết bị nào. Nếu có thể, kèm ảnh chụp màn hình.
            </InsightBlock>
            <p className="hero-note">✳ gửi nhanh · phản hồi ẩn danh</p>
          </div>
          <div>
            <BugReportForm />
          </div>
        </div>
      </div>

      {/* TIPS BEFORE REPORT */}
      <TipsBeforeReport />

      {/* BUG LOG */}
      <BugLog />
    </div>
  );
}
