import camKetImage from '../../../cam kết.png';

export default function WhyFreeSection() {
  return (
    <div className="why-section">
      <div className="why-inner">
        <div>
          <p className="why-label"><span>✳</span> 02 · tại sao miễn phí</p>
          <h2 className="why-h2">
            Không phải chiến lược.<br /><em>Là quan điểm.</em>
          </h2>
          <p className="why-desc">
            markAI không miễn phí vì cần traffic. Miễn phí vì đây là quan điểm: kiến thức AI không nên là thứ người có tiền mới tiếp cận được.
          </p>
        </div>
        <div>
          <img
            src={camKetImage}
            alt="Cam kết của markAI"
            className="block w-full"
          />
        </div>
      </div>
    </div>
  );
}
