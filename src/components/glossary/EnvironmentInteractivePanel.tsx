import React, { useEffect, useState } from 'react';

export default function EnvironmentInteractivePanel() {
  const [tick, setTick] = useState(0);
  const [envIndex, setEnvIndex] = useState(0);
  const [switchCount, setSwitchCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev + 1) % 120);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const ENV = [
    {
      k: 'Local',
      name: 'Máy cá nhân',
      badge: 'DEV',
      c: '#E8772E',
      soft: '#FDEEE3',
      bd: '#F5D3BA',
      cta: 'Nâng cấp lên Staging',
      cfg: [
        ['DATABASE', 'localhost:3306'],
        ['DEBUG_MODE', 'Enabled'],
        ['API_ENDPOINT', '/dev-api'],
      ],
      msg: 'Ứng dụng đang chạy ở máy cá nhân. Mọi thứ đang ở chế độ phát triển.',
      log: ['● App started on Localhost', '○ Waiting for deployment…'],
    },
    {
      k: 'Staging',
      name: 'Thử nghiệm',
      badge: 'TEST',
      c: '#4F7FD1',
      soft: '#EEF3FC',
      bd: '#CBDAF3',
      cta: 'Deploy lên Production',
      cfg: [
        ['DATABASE', 'staging-db.markai.vn'],
        ['DEBUG_MODE', 'Limited'],
        ['API_ENDPOINT', '/staging-api'],
      ],
      msg: 'Ứng dụng đã lên server nháp. Testers đang kiểm tra trước khi ra mắt.',
      log: ['● Deployed to Staging', '● Running test suite…', '○ Waiting for approval…'],
    },
    {
      k: 'Production',
      name: 'Sống thật',
      badge: 'LIVE',
      c: '#5E9E57',
      soft: '#F1F7EF',
      bd: '#CFE3CB',
      cta: 'Quay về Local',
      cfg: [
        ['DATABASE', 'prod-db.markai.vn'],
        ['DEBUG_MODE', 'Disabled'],
        ['API_ENDPOINT', '/api'],
      ],
      msg: 'Ứng dụng đang phục vụ khách hàng thật. Mọi thay đổi cần được kiểm chứng kỹ.',
      log: ['● Deployed to Production', '● Serving real users', '● Uptime 100%'],
    },
  ];

  const go = (i: number) => {
    setEnvIndex(i);
    setSwitchCount((s) => s + 1);
  };

  const advance = () => go((envIndex + 1) % 3);

  const cur = ENV[envIndex];
  const vIdx = Math.floor(tick / 40);
  const V = [
    { db: 'localhost', key: 'sk_test_…', debug: 'true' },
    { db: 'test-db.markai.vn', key: 'sk_test_…', debug: 'true' },
    { db: 'db.markai.vn', key: 'sk_live_…', debug: 'false' },
  ];

  const lines = [
    [60, 0],
    [72, 12],
    [48, 12],
    [80, 24],
    [36, 0],
  ];
  const shown = Math.floor((tick % 40) / 6);
  const codeLines = lines.map(([w, ind], i) => ({
    w: i < shown ? `${w}%` : '0%',
    ind: `${ind}%`,
    c: i === 3 ? '#E8772E' : '#141414',
  }));

  const checks = [0, 1, 2].map((i) => {
    const on = tick % 40 > 8 + i * 9;
    return {
      i: on ? '✓' : '',
      bg: on ? '#5E9E57' : 'transparent',
      bd: on ? '#5E9E57' : '#CFCDC6',
      w: ['70%', '55%', '80%'][i],
    };
  });

  const traffic = Array.from({ length: 14 }, (_, i) => ({
    h: `${30 + Math.round(55 * Math.abs(Math.sin((i + tick * 0.6) * 0.7)))}%`,
    c: i === 13 ? '#5E9E57' : '#CFE3CB',
  }));

  const pulse = tick % 10 < 5 ? '6px' : '0px';

  const envTabs = ['local', 'staging', 'production'].map((x, i) => ({
    k: x,
    bg: i === vIdx ? '#141414' : 'transparent',
    fg: i === vIdx ? '#fff' : '#8A8883',
  }));

  const anim = switchCount % 2 === 0 ? 'swA' : 'swB';

  return (
    <div className="flex flex-col gap-14">
      {/* (01) Minh hoạ Environment */}
      <div>
        <div className="mb-4 flex items-baseline justify-between font-mono">
          <span className="text-[12px] text-[#8A8883]">(01) Minh hoạ</span>
          <span className="text-[11px] text-[#A8A6A0]">Environment</span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-3">
          {/* Card 01: Local */}
          <div className="flex flex-col gap-4 rounded-[20px] border border-[#E6E4DE] bg-white p-5">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[11px] text-[#E8772E]">01</span>
              <span className="font-sans text-[15px] font-semibold tracking-[-0.01em] text-[#141414]">
                Máy cá nhân (Local)
              </span>
            </div>
            <div className="flex h-[170px] flex-col items-center justify-center gap-3.5 rounded-[14px] bg-[#F6F5F1] p-5">
              <div className="flex w-[78%] flex-col gap-[7px]">
                {codeLines.map((l, idx) => (
                  <span
                    key={idx}
                    className="block h-[6px] rounded-[3px] transition-all duration-[350ms]"
                    style={{ width: l.w, marginLeft: l.ind, backgroundColor: l.c }}
                  />
                ))}
              </div>
              <span className="font-mono text-[12px] text-[#3A3935]">Đang code…</span>
            </div>
            <p className="m-0 font-sans text-[14px] leading-[1.6] text-[#55534F]">
              Môi trường <b className="text-[#141414]">Local</b> là chiếc máy tính cá nhân của lập trình viên. Đây là nơi duy nhất bạn có thể làm sai, làm thử thoải mái mà không ai biết.
            </p>
          </div>

          {/* Card 02: Staging */}
          <div className="flex flex-col gap-4 rounded-[20px] border border-[#E6E4DE] bg-white p-5">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[11px] text-[#E8772E]">02</span>
              <span className="font-sans text-[15px] font-semibold tracking-[-0.01em] text-[#141414]">
                Thử nghiệm (Staging)
              </span>
            </div>
            <div className="flex h-[170px] flex-col items-center justify-center gap-3.5 rounded-[14px] bg-[#F6F5F1] p-5">
              <div className="flex w-[80%] flex-col gap-2">
                {checks.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] text-white transition-all duration-300"
                      style={{ backgroundColor: c.bg, border: `1px solid ${c.bd}` }}
                    >
                      {c.i}
                    </span>
                    <span
                      className="block h-[6px] rounded-[3px] bg-[#DAD8D2]"
                      style={{ width: c.w }}
                    />
                  </div>
                ))}
              </div>
              <span className="font-mono text-[12px] text-[#3A3935]">Đang kiểm thử</span>
            </div>
            <p className="m-0 font-sans text-[14px] leading-[1.6] text-[#55534F]">
              <b className="text-[#141414]">Staging</b> là một server "nháp" giống hệt server thật. Đội ngũ testers sẽ vào đây để kiểm tra lần cuối xem code có lỗi gì trước khi ra mắt khách hàng.
            </p>
          </div>

          {/* Card 03: Production */}
          <div className="flex flex-col gap-4 rounded-[20px] border border-[#E6E4DE] bg-white p-5">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[11px] text-[#E8772E]">03</span>
              <span className="font-sans text-[15px] font-semibold tracking-[-0.01em] text-[#141414]">
                Sống thật (Production)
              </span>
            </div>
            <div className="flex h-[170px] flex-col items-center justify-center gap-3.5 rounded-[14px] bg-[#F6F5F1] p-5">
              <div className="flex h-16 w-[80%] items-end gap-1">
                {traffic.map((t, idx) => (
                  <span
                    key={idx}
                    className="flex-1 rounded-t-[3px] transition-all duration-[450ms]"
                    style={{ height: t.h, backgroundColor: t.c }}
                  />
                ))}
              </div>
              <span className="flex items-center gap-2 font-mono text-[12px] text-[#3A3935]">
                <span
                  className="h-2 w-2 rounded-full bg-[#5E9E57] transition-all duration-500"
                  style={{ boxShadow: `0 0 0 ${pulse} rgba(94,158,87,.25)` }}
                />
                Live &amp; Phục vụ user
              </span>
            </div>
            <p className="m-0 font-sans text-[14px] leading-[1.6] text-[#55534F]">
              <b className="text-[#141414]">Production</b> là "mặt tiền" của ứng dụng. Đây là nơi khách hàng thật truy cập. Mọi thứ ở đây phải cực kỳ ổn định và đã được kiểm chứng kỹ càng.
            </p>
          </div>

          {/* Card 04: Biến môi trường */}
          <div className="flex flex-col gap-4 rounded-[20px] border border-[#E6E4DE] bg-white p-5">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[11px] text-[#E8772E]">04</span>
              <span className="font-sans text-[15px] font-semibold tracking-[-0.01em] text-[#141414]">
                Biến môi trường
              </span>
            </div>
            <div className="flex h-[170px] flex-col items-center justify-center gap-3.5 rounded-[14px] bg-[#F6F5F1] p-5">
              <div className="flex w-full flex-col gap-2.5">
                <div className="flex justify-center gap-1">
                  {envTabs.map((e, idx) => (
                    <span
                      key={idx}
                      className="rounded-full px-2 py-[3px] font-mono text-[10px] transition-all duration-300"
                      style={{ backgroundColor: e.bg, color: e.fg }}
                    >
                      {e.k}
                    </span>
                  ))}
                </div>
                <div className="rounded-[10px] bg-[#141414] p-3 font-mono text-[11px] leading-[1.8] text-[#8A8883]">
                  <div>
                    <span className="text-[#EDEBE6]">DB_URL</span> ={' '}
                    <span className="text-[#E8772E]">"{V[vIdx].db}"</span>
                  </div>
                  <div>
                    <span className="text-[#EDEBE6]">API_KEY</span> ={' '}
                    <span className="text-[#E8772E]">"{V[vIdx].key}"</span>
                  </div>
                  <div>
                    <span className="text-[#EDEBE6]">DEBUG</span> ={' '}
                    <span className="text-[#8FBF88]">{V[vIdx].debug}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="m-0 font-sans text-[14px] leading-[1.6] text-[#55534F]">
              Mỗi môi trường dùng một bộ <b className="text-[#141414]">Config</b> riêng. Ví dụ: Local dùng dữ liệu giả, Production dùng dữ liệu thật. Code sẽ tự động "nhận diện" để chạy đúng.
            </p>
          </div>
        </div>
      </div>

      {/* (02) Thực hành Environment */}
      <div>
        <div className="mb-4 flex items-baseline justify-between font-mono">
          <span className="text-[12px] text-[#8A8883]">(02) Thực hành</span>
          <span className="text-[11px] text-[#A8A6A0]">Environment</span>
        </div>

        <div className="rounded-[24px] border border-[#E6E4DE] bg-white p-[clamp(20px,3vw,32px)]">
          <div className="flex items-center gap-2.5">
            <span className="rounded-full bg-[#FDEEE3] px-2.5 py-[3px] font-mono text-[11px] font-medium text-[#C85F1C]">
              Practice
            </span>
            <span className="font-sans text-[20px] font-semibold tracking-[-0.02em] text-[#141414]">
              Environment Switcher
            </span>
          </div>
          <p className="mt-2 font-sans text-[14px] text-[#6B6B6B]">
            Thử đưa ứng dụng đi qua các môi trường khác nhau để thấy sự thay đổi của cấu hình hệ thống.
          </p>

          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
            <div>
              {/* Switcher Tabs */}
              <div className="flex gap-[2px] rounded-full bg-[#F6F5F1] p-1">
                {ENV.map((x, i) => (
                  <button
                    key={x.k}
                    type="button"
                    onClick={() => go(i)}
                    className="flex-1 cursor-pointer rounded-full py-2 text-center font-mono text-[12px] transition-all duration-300 border-none"
                    style={{
                      backgroundColor: i === envIndex ? '#fff' : 'transparent',
                      color: i === envIndex ? '#141414' : '#8A8883',
                      fontWeight: i === envIndex ? 500 : 400,
                    }}
                  >
                    {x.k}
                  </button>
                ))}
              </div>

              {/* Status Banner */}
              <div
                className="mt-4 flex items-center justify-between rounded-[16px] border p-[16px_18px] transition-all duration-400"
                style={{
                  backgroundColor: cur.soft,
                  borderColor: cur.bd,
                }}
              >
                <span className="font-sans text-[15px] font-semibold text-[#141414]">
                  {cur.name}
                </span>
                <span
                  className="rounded-full px-2.5 py-[3px] font-mono text-[11px] font-medium text-white transition-all duration-400"
                  style={{ backgroundColor: cur.c }}
                >
                  {cur.badge}
                </span>
              </div>

              {/* Terminal Config Table */}
              <div className="mt-3 rounded-[14px] bg-[#141414] p-[16px_18px] font-mono text-[12px] leading-[1.9] text-[#8A8883]">
                {cur.cfg.map(([k2, v]) => (
                  <div key={k2} className="flex justify-between gap-3">
                    <span>{k2}</span>
                    <span
                      className={`font-medium ${anim === 'swA' ? 'animate-[swA_0.4s_ease_both]' : 'animate-[swB_0.4s_ease_both]'}`}
                      style={{
                        color:
                          cur.c === '#5E9E57'
                            ? '#8FBF88'
                            : cur.c === '#4F7FD1'
                            ? '#9DB8EA'
                            : '#E8772E',
                      }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Advance CTA */}
              <button
                type="button"
                onClick={advance}
                className="mt-3.5 w-full cursor-pointer rounded-full bg-[#141414] py-3.5 text-center font-sans text-[14px] font-medium text-white transition-colors hover:bg-[#E8772E] border-none"
              >
                {cur.cta}
              </button>
            </div>

            {/* System Log Box */}
            <div className="flex flex-col gap-3 rounded-[16px] bg-[#F6F5F1] p-5">
              <span className="font-mono text-[11px] text-[#8A8883]">Nhật ký hệ thống</span>
              <p
                className={`m-0 font-sans text-[14px] leading-[1.6] text-[#141414] ${anim === 'swA' ? 'animate-[swA_0.4s_ease_both]' : 'animate-[swB_0.4s_ease_both]'}`}
              >
                {cur.msg}
              </p>
              <div className="flex flex-col gap-1.5 border-l-2 border-[#E8772E] pl-3">
                {cur.log.map((l, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[12px]"
                    style={{ color: l[0] === '●' ? '#141414' : '#A8A6A0' }}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
