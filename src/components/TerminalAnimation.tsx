import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const steps = [
  {
    type: 'input',
    text: 'Marketer: Làm sao để tạo landing page nhanh ta? 😩',
    delay: 1000,
  },
  {
    type: 'response',
    text: 'AI: Thử Vibecode đi, chỉ cần mô tả ý tưởng! ✨',
    delay: 1500,
  },
  {
    type: 'prompt',
    text: 'Tạo landing page cho chiến dịch mỹ phẩm, phong cách tối giản, tone hồng pastel.',
    delay: 2000,
  },
  {
    type: 'success',
    text: '✓ Code generated. ✓ Analytics connected. ✓ Ready to launch! 🚀',
    delay: 1500,
  },
  {
    type: 'final',
    text: 'Marketer: Thảo nào bảo không cần code, AI làm hết rồi! 😎',
    delay: 2000,
  },
];

export default function TerminalAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentStep < steps.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setVisibleSteps((prev) => [...prev, currentStep]);
        setIsTyping(false);
        setCurrentStep((prev) => prev + 1);
      }, steps[currentStep].delay);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setVisibleSteps([]);
        setCurrentStep(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentStep]);

  return (
    <div className="hero-terminal">
      <div className="term-bar">
        <div className="term-dot r"></div>
        <div className="term-dot y"></div>
        <div className="term-dot g"></div>
        <div className="ml-2 font-mono text-[11px] text-[var(--text-dim)]">markai.vn/evolution</div>
      </div>
      <div className="p-6 min-h-[300px] font-mono text-[13px] leading-relaxed overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleSteps.map((stepIdx) => {
            const step = steps[stepIdx];
            return (
              <motion.div
                key={stepIdx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-4"
              >
                {step.type === 'input' && (
                  <div className="text-ink2">
                    <span className="text-accent">❯</span> {step.text}
                  </div>
                )}
                {step.type === 'response' && (
                  <div className="text-ink italic pl-4 border-l border-border">
                    {step.text}
                  </div>
                )}
                {step.type === 'prompt' && (
                  <div className="text-accent">
                    <span className="text-ink2">❯</span> prompt <span className="text-ink">"{step.text}"</span>
                  </div>
                )}
                {step.type === 'success' && (
                  <div className="text-success font-medium">
                    {step.text}
                  </div>
                )}
                {step.type === 'final' && (
                  <div className="text-ink font-bold">
                    <span className="text-accent underline">Result:</span> {step.text}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <span className="text-ink2">❯</span>
            <span className="term-cursor w-2 h-4 bg-accent inline-block"></span>
          </motion.div>
        )}
      </div>
      <div className="p-4 border-t border-border bg-white/50">
        <div className="insight !border-l-2 !border-accent !text-ink2 !font-mono !text-[12px]">
          ✳ <strong>Growth:</strong> Từ chỗ loay hoay, bạn sẽ làm chủ AI để tối ưu 80% thời gian triển khai.
        </div>
      </div>
    </div>
  );
}
