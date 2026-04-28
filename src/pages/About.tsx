import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="max-w-[800px] mx-auto px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge badge-accent mb-6 inline-block font-mono tracking-widest uppercase">VỀ DỰ ÁN</span>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-8">
          Học AI không phải để trở thành dev, mà để làm <em className="text-accent italic">"siêu"</em> Marketer.
        </h1>
        
        <div className="prose prose-lg max-w-none font-sans text-ink2 leading-relaxed space-y-6">
          <p>
            <strong>markAI.vn</strong> ra đời với một sứ mệnh duy nhất: Thu hẹp khoảng cách công nghệ cho dân làm Marketing tại Việt Nam. 
          </p>
          <p>
            Chúng tôi tin rằng trong kỷ nguyên AI, rào cản về kỹ thuật (coding, technical setup) không còn là vấn đề nếu bạn biết cách tận dụng các công cụ đúng đắn. Dự án này không dạy bạn cách viết code thuần thục, mà dạy bạn cách <strong>"vibe"</strong> với code bằng AI để tự tạo ra sản phẩm hoàn chỉnh.
          </p>
          
          <div className="bg-bg2 p-8 border border-border my-12">
            <h3 className="font-serif text-[1.5rem] mb-4 text-ink">Tại sao lại là Vibecode?</h3>
            <p className="text-[15px]">
              Vibecode là thuật ngữ chúng tôi dùng để chỉ phương pháp làm web/app bằng AI mà không cần viết tay từng dòng code. Bạn chỉ cần hiểu logic, biết cách đặt câu hỏi (prompt) và điều phối công cụ để AI thực hiện phần việc nặng nhọc nhất.
            </p>
          </div>

          <h3 className="font-serif text-[1.8rem] text-ink pt-8">Giá trị cốt lõi</h3>
          <ul className="list-none p-0 space-y-4">
            <li className="flex gap-4">
              <span className="text-accent font-mono">01.</span>
              <span><strong>Thực chiến:</strong> Không lý thuyết suông. Mỗi bài học đều hướng tới việc tạo ra một sản phẩm cụ thể.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-mono">02.</span>
              <span><strong>Miễn phí:</strong> Kiến thức là sức mạnh, và chúng tôi muốn chia sẻ sức mạnh đó cho cộng đồng.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-mono">03.</span>
              <span><strong>Cập nhật:</strong> AI thay đổi từng ngày, markAI cũng vậy.</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
