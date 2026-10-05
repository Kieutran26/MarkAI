const { spawn } = require('child_process');
const WebSocket = require('ws');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const proc = spawn(edgePath, [
  '--headless',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  '--no-first-run',
  '--window-size=1280,900',
  'http://localhost:3000/tu-dien-thuat-ngu'
]);

async function run() {
  await new Promise(r => setTimeout(r, 3500));
  try {
    const listRes = await fetch('http://127.0.0.1:9222/json');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.url.includes('localhost:3000'));
    if (!pageTab || !pageTab.webSocketDebuggerUrl) {
      console.log('No page tab found');
      proc.kill();
      return;
    }

    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
    ws.on('open', () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            // Scroll right into Letter D's terms:
            const letterD = document.getElementById('L-D');
            const targetScroll = letterD.offsetTop - 76 + 50;
            window.scrollTo(0, targetScroll);

            const h = document.querySelector('header');
            const hb = h ? h.getBoundingClientRect().bottom : 0;
            const hdrD = letterD ? letterD.querySelector('div') : null;
            const dRect = hdrD ? hdrD.getBoundingClientRect() : null;

            return JSON.stringify({
              targetScroll,
              actualScrollY: window.scrollY,
              headerBottom: hb,
              letterD_HeaderTop: dRect ? dRect.top : 0,
              gapFromHeaderBottom: dRect ? (dRect.top - hb) : 0,
              computedTop: hdrD ? window.getComputedStyle(hdrD).top : ''
            });
          })()`
        }
      }));
    });

    ws.on('message', (data) => {
      const res = JSON.parse(data);
      if (res.id === 1) {
        console.log('STICKING AT MID-SECTION:', res.result?.result?.value);
        ws.close();
        proc.kill();
      }
    });
  } catch (e) {
    console.error(e);
    proc.kill();
  }
}

run();
