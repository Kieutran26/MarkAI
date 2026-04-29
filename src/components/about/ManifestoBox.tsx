export default function ManifestoBox() {
  const items = [
    {
      num: '01',
      text: (
        <>
          <strong>Học xong dùng được ngay.</strong> Không có bài học nào kết thúc bằng "hiểu khái niệm" — tất cả đều kết thúc bằng sản phẩm thật.
        </>
      )
    },
    {
      num: '02',
      text: (
        <>
          <strong>Không hàn lâm.</strong> Không có thuật ngữ kỹ thuật nào xuất hiện mà không được giải thích bằng tiếng Việt dễ hiểu.
        </>
      )
    },
    {
      num: '03',
      text: (
        <>
          <strong>Kiến thức AI không nên có giá.</strong> Người làm Marketing xứng đáng có cùng quyền tiếp cận AI như dân tech.
        </>
      )
    },
    {
      num: '04',
      text: (
        <>
          <strong>Cập nhật liên tục.</strong> AI thay đổi từng tháng — nội dung markAI cũng vậy. Không có bài học nào bị để mốc.
        </>
      )
    }
  ];

  return (
    <div className="manifesto-box">
      <div className="manifesto-header">✳ Triết lý của markAI</div>
      {items.map((item) => (
        <div key={item.num} className="manifesto-item">
          <span className="manifesto-num">{item.num}</span>
          <div className="manifesto-text font-sans text-[14px] font-light text-ink2 leading-[1.65]">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}
