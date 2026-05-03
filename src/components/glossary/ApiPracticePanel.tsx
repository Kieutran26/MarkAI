import { useState } from 'react';

type PracticeStep = 'idle' | 'saved' | 'chatting' | 'done';

const apiKey = 'sk-proj-openai-demo-9X2K-L4P8-Q7M1';
const envLine = `OPENAI_API_KEY=${apiKey}`;

export default function ApiPracticePanel() {
  const [savedInEnv, setSavedInEnv] = useState(false);
  const [step, setStep] = useState<PracticeStep>('idle');
  const [isRunning, setIsRunning] = useState(false);

  const runDemo = () => {
    if (isRunning) return;

    setIsRunning(true);
    setSavedInEnv(true);
    setStep('saved');

    window.setTimeout(() => setStep('chatting'), 850);
    window.setTimeout(() => {
      setStep('done');
      setIsRunning(false);
    }, 1700);
  };

  const resetDemo = () => {
    setSavedInEnv(false);
    setStep('idle');
    setIsRunning(false);
  };

  return (
    <section className="mt-6 border border-[#2a2a33] bg-[#0f0f12]">
      <div className="flex items-center justify-between border-b border-[#2a2a33] bg-[#e88c2e] px-4 py-2">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-[#0f0f12]">Thực hành</span>
        <span className="font-mono text-[10px] font-bold text-[#0f0f12]">Lưu key vào .env</span>
      </div>

      <div className="grid gap-0 lg:grid-cols-[340px_minmax(0,1fr)]">
        <div className="border-b border-[#2a2a33] px-4 py-5 lg:border-b-0 lg:border-r">
          <h3 className="font-serif text-[1.9rem] leading-[0.95] text-[#e8e4dc]">Lưu API key vào `.env` rồi thử chat</h3>
          <p className="mt-3 font-sans text-[14px] leading-[1.75] text-[#a0a0ab]">
            Cách marketer hay gặp nhất là: lấy API key từ platform AI, cất vào file `.env`, rồi app mới chat được với AI.
          </p>

          <div className="mt-5 border border-[#2a2a33] bg-[#17171c] px-4 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#6e6e7a]">API key vừa copy</p>
            <div className="mt-3 break-all border border-dashed border-[rgba(232,140,46,0.25)] bg-[rgba(232,140,46,0.06)] px-3 py-3 font-mono text-[12px] leading-[1.7] text-[#f0e7da]">
              {apiKey}
            </div>
            <p className="mt-3 font-sans text-[13px] leading-[1.7] text-[#a0a0ab]">
              Đây là mã bí mật. Thường sẽ ghi trong file `.env`, không dán vào code public hay gửi linh tinh vì có thể bị dùng ké và mất tiền.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={runDemo}
              disabled={isRunning}
              className="border border-[#e88c2e] bg-[#e88c2e] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.05em] text-[#0f0f12] transition-opacity disabled:opacity-60"
            >
              {isRunning ? 'Đang thử chat...' : 'Lưu và thử chat'}
            </button>
            <button
              type="button"
              onClick={resetDemo}
              className="border border-[#2a2a33] bg-transparent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.05em] text-[#a0a0ab]"
            >
              Đặt lại
            </button>
          </div>

          <div className="mt-5 border-l-2 border-l-[#e88c2e] bg-[#1e1e25] px-4 py-3 font-mono text-[11px] leading-[1.7] text-[#a0a0ab]">
            Gợi ý: nhớ pattern này là đủ dùng thực tế: lấy key từ platform, lưu `.env`, restart app nếu cần, rồi mới chat hoặc gọi model.
          </div>
        </div>

        <div className="px-4 py-5">
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <article className="overflow-hidden border border-[#2a2a33] bg-[#17171c]">
              <div className="flex items-center gap-2 border-b border-[#2a2a33] bg-[#121217] px-4 py-3">
                <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f56]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#ffbd2e]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-[11px] text-[#8a8a93]">.env</span>
              </div>

              <div className="grid grid-cols-[42px_minmax(0,1fr)]">
                <div className="border-r border-[#2a2a33] bg-[#141419] px-2 py-4 font-mono text-[11px] leading-[2] text-[#5f5f68]">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
                <div className="px-4 py-4 font-mono text-[12px] leading-[2] text-[#d8d3c8]">
                  <div># secret keys</div>
                  <div className={savedInEnv ? 'text-[#f0e7da]' : 'text-[#5f5f68]'}>
                    {savedInEnv ? envLine : 'OPENAI_API_KEY='}
                  </div>
                  <div className="text-[#5f5f68]">APP_NAME=markAI-chat</div>
                </div>
              </div>
            </article>

            <article className="border border-[#2a2a33] bg-[#17171c] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#e88c2e]">Kết quả</p>
                  <h4 className="mt-2 font-serif text-[1.2rem] leading-none text-[#e8e4dc]">Khung chat AI</h4>
                </div>
                <span className="border border-[rgba(232,140,46,0.25)] bg-[rgba(232,140,46,0.06)] px-3 py-1 font-mono text-[11px] text-accent">
                  {step === 'idle' ? 'Chưa chạy' : step === 'saved' ? 'Đã lưu key' : step === 'chatting' ? 'Đang chat' : 'Chat OK'}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="ml-auto max-w-[88%] border border-[#2a2a33] bg-[#121217] px-3 py-3 font-sans text-[13px] leading-[1.65] text-[#e8e4dc]">
                  Viết caption Facebook ngắn cho workshop AI dành cho marketer.
                </div>

                <div className={`max-w-[92%] border px-3 py-3 font-sans text-[13px] leading-[1.7] transition-all ${step === 'done' ? 'border-[#e88c2e] bg-[rgba(232,140,46,0.08)] text-[#f0e7da]' : 'border-[#2a2a33] bg-[#121217] text-[#7d7d88]'}`}>
                  {step === 'idle' && 'Lưu API key vào .env rồi app mới gọi AI được.'}
                  {step === 'saved' && 'API key đã được lưu. App đã có quyền gọi model.'}
                  {step === 'chatting' && 'Đang gửi câu hỏi lên AI...'}
                  {step === 'done' && 'Caption gợi ý: Workshop AI cho marketer: bớt làm tay, tăng tốc ý tưởng, ra nội dung nhanh hơn mỗi ngày.'}
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                {[
                  ['1. Copy API key từ platform', true],
                  ['2. Lưu key trong .env', savedInEnv],
                  ['3. App gọi AI để chat', step === 'chatting' || step === 'done'],
                  ['4. AI trả câu trả lời', step === 'done'],
                ].map(([label, active]) => (
                  <div key={label} className={`flex items-center justify-between border px-3 py-2 font-mono text-[11px] ${active ? 'border-[#e88c2e] bg-[rgba(232,140,46,0.08)] text-[#f0e7da]' : 'border-[#2a2a33] text-[#7d7d88]'}`}>
                    <span>{label}</span>
                    <span>{active ? 'OK' : '...'}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
