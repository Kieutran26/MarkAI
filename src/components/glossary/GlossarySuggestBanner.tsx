import React, { useState } from 'react';

export default function GlossarySuggestBanner() {
  const [sug, setSug] = useState('');
  const [sentTerm, setSentTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sug.trim()) {
      setSentTerm(sug.trim());
      setSug('');
    }
  };

  return (
    <section data-screen-label="Suggest" className="px-4 pb-20 pt-8">
      <div className="mx-auto max-w-[1280px] rounded-[28px] bg-[#E8772E] p-[clamp(44px,7vw,88px)_clamp(24px,5vw,72px)] text-[#141414] grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
        <h2 className="m-0 font-sans text-[clamp(36px,5.5vw,72px)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#141414]">
          Biết thêm từ nào?
          <br />
          <span className="font-light italic text-white">Góp ý để bổ sung.</span>
        </h2>

        <div>
          {!sentTerm ? (
            <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full bg-white p-[6px_6px_6px_20px] shadow-sm">
              <input
                type="text"
                value={sug}
                onChange={(e) => setSug(e.target.value)}
                placeholder="Thuật ngữ bạn muốn thêm…"
                className="min-w-0 flex-1 border-none bg-transparent font-sans text-[15px] text-[#141414] outline-none placeholder:text-[#8A8883]"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-full bg-[#141414] px-[22px] py-[13px] font-sans text-[14px] font-medium text-white whitespace-nowrap transition-colors hover:bg-black"
              >
                Gửi góp ý →
              </button>
            </form>
          ) : (
            <div className="rounded-full bg-[#141414] px-6 py-[18px] font-sans text-[15px] text-white">
              ✓ Cảm ơn! markAI sẽ bổ sung “{sentTerm}” sớm.
            </div>
          )}

          <p className="mt-4 font-sans text-[14px] leading-[1.6] text-[#141414]/90">
            Mỗi tuần markAI cập nhật thêm thuật ngữ mới từ góp ý của cộng đồng.
          </p>
        </div>
      </div>
    </section>
  );
}
