import { lessons } from './lessons';

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string; em?: string; id?: string }
  | { type: 'h4'; text: string; id?: string }
  | { type: 'html'; html: string }
  | { type: 'insight'; label: string; text: string }
  | { type: 'infographic'; label: string; steps: { label: string; title: string; desc: string }[]; aside: { label: string; title: string; desc: string } }
  | { type: 'divider' }
  | { type: 'compare'; headers: [string, string]; rows: { left: string; leftStyle: 'cross' | 'check' | 'accent' | 'normal'; right: string; rightStyle: 'cross' | 'check' | 'accent' | 'normal' }[] }
  | {
      type: 'usecases';
      eyebrow?: string;
      items: {
        icon: string;
        title: string;
        desc: string;
        tag?: string;
        variant?: 'quote' | 'body';
      }[];
    }
  | { type: 'grid2'; items: { label: string; title: string; desc: string }[] }
  | { type: 'vibe-cards'; items: { icon: string; title: string }[] };

export type SubLessonFull = {
  id: string;
  slug: string;
  lessonSlug: string;
  lessonId: number;
  lessonTitle: string;
  lessonTitleEm: string;
  prevSlug: string | null;
  nextSlug: string | null;
  prevTitle: string | null;
  nextTitle: string | null;
  eyebrow: string;
  title: string;
  titleEm: string;
  desc: string;
  duration: string;
  totalSubs: number;
  currentIndex: number;
  content: ContentBlock[];
};

export const subLessons: SubLessonFull[] = [
  {
    id: '1.1',
    slug: 'bai-1-1',
    lessonSlug: 'vibecode-la-gi',
    lessonId: 1,
    lessonTitle: 'Vibecode lÃ  gÃ¬? KhÃ³ khÃ´ng? GiÃºp gÃ¬ cho Marketer?',
    lessonTitleEm: 'Marketer?',
    prevSlug: null,
    nextSlug: 'bai-1-2',
    prevTitle: null,
    nextTitle: 'Táº¡i sao Marketer láº¡i cáº§n biáº¿t vibecode?',
    eyebrow: 'Äá»‹nh nghÄ©a',
    title: 'Vibecode lÃ  gÃ¬',
    titleEm: '',
    desc: 'Hiá»ƒu vibecode theo cÃ¡ch dá»… nháº¥t: báº¡n cÃ³ Ã½ tÆ°á»Ÿng, báº¡n mÃ´ táº£ cho AI, AI viáº¿t code vÃ  ra sáº£n pháº©m. KhÃ´ng cáº§n há»c code trÆ°á»›c khi báº¯t Ä‘áº§u.',
    duration: '~4 phÃºt',
    totalSubs: 4,
    currentIndex: 1,
    content: [
      { type: 'h3', text: 'Giáº£i thÃ­ch Ä‘Æ¡n giáº£n nháº¥t' },
      { type: 'p', text: 'Vibecode lÃ  cÃ¡ch báº¡n dÃ¹ng <strong>AI Ä‘á»ƒ viáº¿t code thay mÃ¬nh</strong>. Báº¡n mÃ´ táº£ Ä‘iá»u mÃ¬nh muá»‘n báº±ng tiáº¿ng Viá»‡t bÃ¬nh thÆ°á»ng â€” AI hiá»ƒu vÃ  táº¡o ra code. Báº¡n khÃ´ng cáº§n Ä‘á»c Ä‘Æ°á»£c code Ä‘Ã³, khÃ´ng cáº§n hiá»ƒu nÃ³ hoáº¡t Ä‘á»™ng tháº¿ nÃ o bÃªn trong.' },
      {
        type: 'infographic',
        label: 'Vibecode â€” Quy trÃ¬nh',
        steps: [
          { label: '01', title: 'Ã tÆ°á»Ÿng', desc: 'Báº¡n cÃ³ hÆ°á»›ng Ä‘i, nhu cáº§u, hoáº·c má»™t thá»© muá»‘n lÃ m nhanh.' },
          { label: '02', title: 'MÃ´ táº£', desc: 'Báº¡n viáº¿t ra mong muá»‘n báº±ng ngÃ´n ngá»¯ bÃ¬nh thÆ°á»ng Ä‘á»ƒ AI hiá»ƒu.' },
          { label: '03', title: 'Sáº£n pháº©m', desc: 'AI biáº¿n mÃ´ táº£ thÃ nh trang web, tool, flow hoáº·c prototype tháº­t.' }
        ],
        aside: {
          label: 'KhÃ´ng cáº§n',
          title: 'KhÃ´ng cÃ³ bÆ°á»›c "há»c code" á»Ÿ giá»¯a',
          desc: 'Báº¡n cháº¡y theo Ã½ tÆ°á»Ÿng vÃ  káº¿t quáº£. AI lo pháº§n ká»¹ thuáº­t thay báº¡n.'
        }
      },
      { type: 'insight', label: 'Äá»‹nh nghÄ©a ngáº¯n', text: 'Vibecode = báº¡n cÃ³ Ã½ tÆ°á»Ÿng, AI viáº¿t code, báº¡n ra sáº£n pháº©m. KhÃ´ng cáº§n biáº¿t code á»Ÿ giá»¯a.' },
      { type: 'p', text: 'Hiá»ƒu Ä‘Æ¡n giáº£n hÆ¡n: giá»‘ng nhÆ° báº¡n thuÃª <strong>má»™t láº­p trÃ¬nh viÃªn lÃ m viá»‡c 24/7</strong>, <strong>khÃ´ng ngá»§</strong>, <strong>khÃ´ng tÃ­nh phÃ­ theo giá»</strong>, vÃ  <strong>luÃ´n sáºµn sÃ ng sá»­a láº¡i ngay láº­p tá»©c khi báº¡n Ä‘á»•i Ã½</strong>. Chá»‰ khÃ¡c lÃ  <strong>"láº­p trÃ¬nh viÃªn" Ä‘Ã³ lÃ  AI</strong>.' },
      { type: 'divider' },
      { type: 'h3', text: 'Quy trÃ¬nh thá»±c táº¿ trÃ´ng nhÆ° tháº¿ nÃ o?' },
      { type: 'p', text: 'Thay vÃ¬ ngá»“i há»c cÃº phÃ¡p Python hay JavaScript, báº¡n ngá»“i <strong>mÃ´ táº£</strong> Ä‘iá»u mÃ¬nh muá»‘n â€” giá»‘ng nhÆ° Ä‘ang giáº£i thÃ­ch cho má»™t ngÆ°á»i khÃ¡c nghe. AI nháº­n láº¥y mÃ´ táº£ Ä‘Ã³ vÃ  tá»± viáº¿t code.' },
      { type: 'usecases', eyebrow: 'Vibecode hoáº¡t Ä‘á»™ng nhÆ° tháº¿ nÃ o', items: [
        { icon: '01', tag: 'Báº¡n lÃ m', title: 'GÃµ vÃ o Cursor hoáº·c Claude Code', desc: '"Táº¡o cho tÃ´i landing page giá»›i thiá»‡u sáº£n pháº©m má»›i, cÃ³ countdown 3 ngÃ y, form Ä‘Äƒng kÃ½ email, ná»n mÃ u tráº¯ng, responsive trÃªn Ä‘iá»‡n thoáº¡i."', variant: 'quote' },
        { icon: '02', tag: 'AI lÃ m', title: 'AI Ä‘á»c mÃ´ táº£ vÃ  báº¯t Ä‘áº§u viáº¿t', desc: 'Trong vÃ i phÃºt, AI táº¡o ra toÃ n bá»™ file code â€” HTML, CSS, logic countdown, form validation. Báº¡n khÃ´ng cáº§n viáº¿t má»™t dÃ²ng nÃ o.', variant: 'body' },
        { icon: '03', tag: 'Báº¡n lÃ m', title: 'Xem káº¿t quáº£ vÃ  Ä‘iá»u chá»‰nh', desc: '"MÃ u nÃºt CTA hÆ¡i nháº¡t quÃ¡, Ä‘á»•i sang Ä‘á» Ä‘áº­m hÆ¡n. VÃ  thÃªm pháº§n testimonial 3 ngÆ°á»i vÃ o bÃªn dÆ°á»›i." â€” AI sá»­a ngay.', variant: 'quote' },
        { icon: '04', tag: 'Xong', title: 'Deploy lÃªn internet', desc: 'Khi Æ°ng Ã½, báº¡n deploy lÃªn Vercel â€” má»™t trang web tháº­t, cÃ³ link chia sáº» Ä‘Æ°á»£c. Máº¥t thÃªm khoáº£ng 5 phÃºt.', variant: 'body' }
      ]},
      { type: 'divider' },
      { type: 'h3', text: 'Táº¡i sao gá»i lÃ  "vibe"?', em: '"vibe"?' },
      { type: 'p', text: 'Tá»« "vibe" á»Ÿ Ä‘Ã¢y cÃ³ nghÄ©a lÃ  báº¡n Ä‘ang lÃ m viá»‡c theo <strong>intuition vÃ  cáº£m giÃ¡c</strong> â€” khÃ´ng theo quy trÃ¬nh ká»¹ thuáº­t cá»©ng nháº¯c. Báº¡n thá»­, nhÃ¬n káº¿t quáº£, khÃ´ng thÃ­ch thÃ¬ sá»­a, thÃ­ch thÃ¬ giá»¯ láº¡i. Láº·p Ä‘i láº·p láº¡i cho Ä‘áº¿n khi Ä‘Ãºng Ã½.' },
      { type: 'p', text: 'KhÃ¡c hoÃ n toÃ n vá»›i láº­p trÃ¬nh truyá»n thá»‘ng â€” nÆ¡i báº¡n pháº£i hiá»ƒu chÃ­nh xÃ¡c tá»«ng dÃ²ng code lÃ m gÃ¬ trÆ°á»›c khi viáº¿t ra. Vibecode cho phÃ©p báº¡n <strong>"cáº£m" trÆ°á»›c, hiá»ƒu sau</strong> â€” hoáº·c khÃ´ng cáº§n hiá»ƒu gÃ¬ cÅ©ng Ä‘Æ°á»£c.' },
      { type: 'insight', label: 'Äiá»ƒm máº¥u chá»‘t', text: 'Vibecode khÃ´ng yÃªu cáº§u báº¡n hiá»ƒu code. NÃ³ yÃªu cáº§u báº¡n biáº¿t <em>mÃ¬nh muá»‘n gÃ¬</em> â€” vÃ  Ä‘á»§ kiÃªn nháº«n Ä‘á»ƒ mÃ´ táº£ rÃµ Ä‘iá»u Ä‘Ã³ cho AI.' },
      { type: 'divider' },
      { type: 'h3', text: 'Vibecode so vá»›i cÃ¡ch lÃ m cÅ©' },
      { type: 'compare', headers: ['CÃ¡ch cÅ© â€” chá» dev', 'Vibecode â€” tá»± lÃ m'], rows: [
        { left: 'Viáº¿t brief â†’ chá» estimate â†’ chá» sprint', leftStyle: 'cross', right: 'MÃ´ táº£ â†’ AI code â†’ xem káº¿t quáº£ ngay', rightStyle: 'check' },
        { left: 'Muá»‘n sá»­a nhá» pháº£i má»Ÿ ticket má»›i', leftStyle: 'cross', right: 'Muá»‘n sá»­a â†’ gÃµ thÃªm â†’ AI sá»­a liá»n', rightStyle: 'check' },
        { left: 'Phá»¥ thuá»™c lá»‹ch cá»§a team ká»¹ thuáº­t', leftStyle: 'cross', right: 'Tá»± chá»§ hoÃ n toÃ n â€” lÃ m khi nÃ o cÅ©ng Ä‘Æ°á»£c', rightStyle: 'accent' },
        { left: 'Landing page máº¥t 2 tuáº§n', leftStyle: 'cross', right: 'Landing page máº¥t 2â€“4 giá»', rightStyle: 'check' }
      ]},
      { type: 'divider' },
      { type: 'h3', text: '3 thá»© Vibe Coding Ä‘ang phÃ¡ vá»¡' },
      {
        type: 'html',
        html: `
          <p><strong>1. RÃ o cáº£n ká»¹ thuáº­t biáº¿n máº¥t</strong></p>
          <p>TrÆ°á»›c Ä‘Ã¢y, Ä‘á»ƒ ra má»™t landing page tÃ¹y chá»‰nh, má»™t quiz phÃ¢n loáº¡i lead, hay má»™t chatbot chÄƒm sÃ³c khÃ¡ch hÃ ng â€” <strong>báº¡n cáº§n dev</strong>. Báº¡n cáº§n viáº¿t brief, chá» estimate, chá» dev lÃ m, chá» review, chá» fix bug.</p>
          <p>Giá» thÃ¬ khÃ´ng. <strong>Báº¥t ká»³ ai cÃ³ Ä‘á»§ tÆ° duy sáº£n pháº©m vÃ  biáº¿t giao tiáº¿p vá»›i AI â€” Ä‘á»u cÃ³ thá»ƒ tá»± lÃ m</strong>. RÃ o cáº£n ká»¹ thuáº­t khÃ´ng cÃ²n lÃ  lá»£i tháº¿ cáº¡nh tranh ná»¯a.</p>
          <p><strong>2. Chi phÃ­ lÃ m sáº£n pháº©m giáº£m máº¡nh</strong></p>
          <p>1 marketer biáº¿t AI giá» cÃ³ thá»ƒ lÃ m Ä‘Æ°á»£c viá»‡c cá»§a cáº£ má»™t team nhá». KhÃ´ng pháº£i vÃ¬ há» lÃ m thay má»i ngÆ°á»i â€” mÃ  vÃ¬ AI lÃ m pháº§n lá»›n cÃ´ng viá»‡c thá»±c thi, cÃ²n há» táº­p trung vÃ o pháº§n quan trá»ng nháº¥t: <strong>tÆ° duy chiáº¿n lÆ°á»£c vÃ  ra quyáº¿t Ä‘á»‹nh.</strong></p>
        `,
      },
      { type: 'insight', label: 'TÃ³m láº¡i bÃ i 1.1', text: 'Vibecode = AI viáº¿t code theo mÃ´ táº£ cá»§a báº¡n. Báº¡n khÃ´ng cáº§n há»c code. Báº¡n cáº§n biáº¿t mÃ¬nh muá»‘n gÃ¬ vÃ  mÃ´ táº£ rÃµ rÃ ng. Pháº§n cÃ²n láº¡i AI lo.' }
    ]
  },
  {
    id: '1.2',
    slug: 'bai-1-2',
    lessonSlug: 'vibecode-la-gi',
    lessonId: 1,
    lessonTitle: 'Vibecode lÃ  gÃ¬? KhÃ³ khÃ´ng? GiÃºp gÃ¬ cho Marketer?',
    lessonTitleEm: 'Marketer?',
    prevSlug: 'bai-1-1',
    nextSlug: 'bai-1-3',
    prevTitle: 'Vibecode lÃ  gÃ¬ â€” Ä‘á»‹nh nghÄ©a khÃ´ng-tech',
    nextTitle: 'Nhá»¯ng Ä‘iá»u marketer cÃ³ thá»ƒ lÃ m ngay khi biáº¿t AI',
    eyebrow: 'Táº¡i sao quan trá»ng',
    title: 'Táº¡i sao Marketer láº¡i cáº§n biáº¿t vibecode?',
    titleEm: '',
    desc: 'KhÃ´ng pháº£i vÃ¬ AI sáº½ thay báº¡n â€” mÃ  vÃ¬ ngÆ°á»i biáº¿t dÃ¹ng AI sáº½ Ä‘i nhanh hÆ¡n ngÆ°á»i khÃ´ng biáº¿t.',
    duration: '~5 phÃºt',
    totalSubs: 4,
    currentIndex: 2,
    content: [
      { type: 'p', text: 'KhÃ´ng pháº£i AI sáº½ thay tháº¿ marketer. NhÆ°ng <strong>marketer biáº¿t dÃ¹ng AI sáº½ thay tháº¿ marketer khÃ´ng biáº¿t.</strong>' },
      { type: 'divider' },
      { type: 'h3', text: 'VÃ¬ cuá»™c chÆ¡i Ä‘Ã£ Ä‘á»•i rá»“i' },
      {
        type: 'compare',
        headers: ['Before', 'After'],
        rows: [
          {
            left: 'Chá»‰ cáº§n <strong>viáº¿t content á»•n</strong>',
            leftStyle: 'normal',
            right: 'Ai cÅ©ng cÃ³ thá»ƒ dÃ¹ng AI Ä‘á»ƒ <strong>viáº¿t bÃ i</strong>',
            rightStyle: 'check',
          },
          {
            left: 'Chá»‰ cáº§n <strong>cháº¡y ads biáº¿t chÃºt</strong> lÃ  Ä‘Ã£ cÃ³ lá»£i tháº¿',
            leftStyle: 'normal',
            right: 'Ai cÅ©ng cÃ³ thá»ƒ dÃ¹ng AI Ä‘á»ƒ <strong>lÃªn idea</strong> vÃ  <strong>lÃ m chiáº¿n dá»‹ch</strong>',
            rightStyle: 'check',
          }
        ],
      },
      { type: 'insight', label: 'Káº¿t luáº­n', text: 'Náº¿u báº¡n khÃ´ng biáº¿t AI, báº¡n khÃ´ng pháº£i lÃ  â€œcháº­m hÆ¡n má»™t chÃºtâ€ Ä‘Ã¢u, mÃ  lÃ  <strong>tá»¥t láº¡i háº³n phÃ­a sau luÃ´n</strong>.' },
      { type: 'h3', text: 'VÃ¬ tá»‘c Ä‘á»™ bÃ¢y giá» quan trá»ng hÆ¡n giá»i' },
      { type: 'p', text: 'Marketing hiá»‡n táº¡i khÃ´ng pháº£i lÃ  ai hay nháº¥t tháº¯ng. MÃ  lÃ  <strong>ai nhanh hÆ¡n ngÆ°á»i Ä‘Ã³ tháº¯ng</strong>.' },
      {
        type: 'infographic',
        label: 'VÃ­ dá»¥ tá»‘c Ä‘á»™ thá»±c thi',
        steps: [
          {
            label: '01',
            title: 'Báº¡n lÃ m thá»§ cÃ´ng',
            desc: 'Máº¥t <strong>2 tiáº¿ng</strong> Ä‘á»ƒ viáº¿t <strong>1 bÃ i</strong>.',
          },
          {
            label: '02',
            title: 'NgÆ°á»i khÃ¡c dÃ¹ng AI',
            desc: 'Máº¥t <strong>20 phÃºt</strong> Ä‘á»ƒ táº¡o <strong>10 bÃ i</strong>.',
          }
        ],
        aside: {
          label: 'Káº¿t quáº£',
          title: 'Test nhiá»u hÆ¡n sáº½ tháº¯ng',
          desc: 'ChÆ°a cáº§n biáº¿t bÃ i ai hay hÆ¡n. Chá»‰ cáº§n há» test nhiá»u hÆ¡n báº¡n, há» cÃ³ nhiá»u cÆ¡ há»™i tháº¯ng hÆ¡n.',
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'VÃ¬ giá» 1 ngÆ°á»i cÃ³ thá»ƒ lÃ m viá»‡c cá»§a cáº£ team' },
      {
        type: 'infographic',
        label: 'Tá»« team nhá» sang má»™t ngÆ°á»i + AI',
        steps: [
          {
            label: '01',
            title: 'Content',
            desc: 'TrÆ°á»›c Ä‘Ã¢y cáº§n riÃªng má»™t ngÆ°á»i lo <strong>ná»™i dung</strong>.',
          },
          {
            label: '02',
            title: 'Designer',
            desc: 'Cáº§n thÃªm ngÆ°á»i phá»¥ trÃ¡ch <strong>thiáº¿t káº¿</strong> vÃ  hÃ¬nh áº£nh.',
          },
          {
            label: '03',
            title: 'Ads',
            desc: 'VÃ  cáº§n ngÆ°á»i cháº¡y <strong>quáº£ng cÃ¡o</strong> Ä‘á»ƒ tá»‘i Æ°u chiáº¿n dá»‹ch.',
          }
        ],
        aside: {
          label: 'BÃ¢y giá»',
          title: 'Má»™t mÃ¬nh báº¡n + AI',
          desc: 'CÃ³ thá»ƒ lÃ m gáº§n háº¿t quy trÃ¬nh. KhÃ´ng pháº£i vÃ¬ báº¡n giá»i hÆ¡n, mÃ  vÃ¬ báº¡n Ä‘ang dÃ¹ng Ä‘Ãºng cÃ´ng cá»¥.',
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'AI khÃ´ng thay báº¡n, nhÆ°ng ngÆ°á»i biáº¿t dÃ¹ng AI thÃ¬ cÃ³' },
      { type: 'p', text: 'Nhiá»u ngÆ°á»i sá»£ AI sáº½ láº¥y job. NhÆ°ng thá»±c táº¿ khÃ´ng pháº£i váº­y.' },
      {
        type: 'infographic',
        label: 'Ná»—i sá»£ vÃ  thá»±c táº¿',
        steps: [
          {
            label: '01',
            title: 'AI khÃ´ng tá»± thay báº¡n',
            desc: 'AI khÃ´ng tá»± nghÄ© chiáº¿n lÆ°á»£c, khÃ´ng hiá»ƒu khÃ¡ch hÃ ng sÃ¢u nhÆ° báº¡n.',
          },
          {
            label: '02',
            title: 'NgÆ°á»i biáº¿t dÃ¹ng AI sáº½ nhanh hÆ¡n',
            desc: 'Má»™t ngÆ°á»i biáº¿t dÃ¹ng AI cÃ³ thá»ƒ lÃ m nhanh hÆ¡n báº¡n <strong>5â€“10 láº§n</strong>.',
          }
        ],
        aside: {
          label: 'Äiá»ƒm quyáº¿t Ä‘á»‹nh',
          title: 'NgÆ°á»i nhanh hÆ¡n thÆ°á»ng Ä‘Æ°á»£c chá»n',
          desc: 'Trong cÃ´ng viá»‡c, tá»‘c Ä‘á»™ táº¡o ra káº¿t quáº£ thÆ°á»ng quyáº¿t Ä‘á»‹nh ai lÃ  ngÆ°á»i cÃ³ lá»£i tháº¿.',
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'VÃ¬ ai cÅ©ng Ä‘ang báº¯t Ä‘áº§u dÃ¹ng rá»“i' },
      { type: 'p', text: 'CÃ¡i nguy hiá»ƒm nháº¥t lÃ : Báº¡n nghÄ© â€œcháº¯c chÆ°a nhiá»u ngÆ°á»i dÃ¹ng Ä‘Ã¢uâ€.' },
      {
        type: 'infographic',
        label: 'TÃ­n hiá»‡u ngoÃ i thá»‹ trÆ°á»ng',
        steps: [
          {
            label: '01',
            title: 'Äá»‘i thá»§ Ä‘ang dÃ¹ng',
            desc: 'NgÆ°á»i cáº¡nh tranh trá»±c tiáº¿p vá»›i báº¡n Ä‘Ã£ báº¯t Ä‘áº§u táº­n dá»¥ng AI.',
          },
          {
            label: '02',
            title: 'Freelancer Ä‘ang dÃ¹ng',
            desc: 'Nhá»¯ng ngÆ°á»i lÃ m dá»‹ch vá»¥ má»™t mÃ¬nh cÅ©ng Ä‘Ã£ dÃ¹ng AI Ä‘á»ƒ tÄƒng tá»‘c.',
          },
          {
            label: '03',
            title: 'Agency Ä‘ang dÃ¹ng',
            desc: 'CÃ¡c team lá»›n hÆ¡n cÅ©ng Ä‘ang Ä‘Æ°a AI vÃ o quy trÃ¬nh lÃ m viá»‡c háº±ng ngÃ y.',
          }
        ],
        aside: {
          label: 'Káº¿t luáº­n',
          title: 'Báº¡n khÃ´ng Ä‘á»©ng yÃªn',
          desc: 'NÃªn náº¿u báº¡n khÃ´ng dÃ¹ng, báº¡n khÃ´ng Ä‘á»©ng yÃªn Ä‘Ã¢u â€” báº¡n Ä‘ang <strong>tá»¥t láº¡i</strong>.',
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'VÃ¬ Ä‘Ã¢y lÃ  thá»i Ä‘iá»ƒm dá»… bá»©t lÃªn nháº¥t' },
      {
        type: 'infographic',
        label: 'CÃ¡c lÃ n sÃ³ng cÆ¡ há»™i',
        steps: [
          {
            label: '01',
            title: 'Facebook Ads',
            desc: 'Ai biáº¿t Facebook Ads sá»›m thÃ¬ <strong>Ä‘i trÆ°á»›c</strong>.',
          },
          {
            label: '02',
            title: 'TikTok',
            desc: 'Ai lÃ m TikTok sá»›m thÃ¬ <strong>lÃªn nhanh</strong>.',
          },
          {
            label: '03',
            title: 'AI',
            desc: 'CÃ²n bÃ¢y giá», lÃ n sÃ³ng cÆ¡ há»™i náº±m á»Ÿ <strong>AI</strong>.',
          }
        ],
        aside: {
          label: 'Náº¿u báº¯t Ä‘áº§u sá»›m',
          title: 'Báº¡n cÃ³ lá»£i tháº¿ trÆ°á»›c',
          desc: 'Báº¡n há»c nhanh hÆ¡n ngÆ°á»i khÃ¡c, build lá»£i tháº¿ trÆ°á»›c vÃ  kiáº¿m tiá»n sá»›m hÆ¡n.',
        }
      },
      { type: 'divider' },
      { type: 'h3', text: 'Káº¿t láº¡i má»™t cÃ¢u thÃ´i:' },
      { type: 'insight', label: 'ThÃ´ng Ä‘iá»‡p chÃ­nh', text: 'Báº¡n khÃ´ng cáº§n giá»i AI ngay tá»« Ä‘áº§u<br /><br /><strong>NhÆ°ng báº¡n cáº§n báº¯t Ä‘áº§u ngay bÃ¢y giá»</strong>' }
    ]
  },
  {
    id: '1.3',
    slug: 'bai-1-3',
    lessonSlug: 'vibecode-la-gi',
    lessonId: 1,
    lessonTitle: 'Vibecode lÃ  gÃ¬? KhÃ³ khÃ´ng? GiÃºp gÃ¬ cho Marketer?',
    lessonTitleEm: 'Marketer?',
    prevSlug: 'bai-1-2',
    nextSlug: 'bai-1-4',
    prevTitle: 'Táº¡i sao Marketer láº¡i cáº§n biáº¿t vibecode?',
    nextTitle: 'Báº¡n cáº§n biáº¿t gÃ¬ â€” vÃ  nhá»¯ng thá»© KHÃ”NG cáº§n biáº¿t',
    eyebrow: 'So sÃ¡nh',
    title: 'Nhá»¯ng Ä‘iá»u marketer cÃ³ thá»ƒ lÃ m ngay khi biáº¿t AI',
    titleEm: '',
    desc: 'Biáº¿t AI khÃ´ng chá»‰ Ä‘á»ƒ hiá»ƒu xu hÆ°á»›ng. NÃ³ giÃºp marketer tá»± build, Ä‘á»c insight nhanh hÆ¡n, vÃ  sáº£n xuáº¥t nhiá»u hÆ¡n ngay trong cÃ´ng viá»‡c háº±ng ngÃ y.',
    duration: '~4 phÃºt',
    totalSubs: 4,
    currentIndex: 3,
    content: [
      { type: 'h3', text: 'Tá»± build tool mÃ  khÃ´ng cáº§n dev' },
      {
        type: 'html',
        html: `
          <section class="visual-ai-diagram" aria-label="Tá»± build tool mÃ  khÃ´ng cáº§n dev">
            <div class="visual-ai-diagram-grid">
              <div class="visual-ai-diagram-item">Landing page A/B testing</div>
              <div class="visual-ai-diagram-item">Quiz phÃ¢n loáº¡i lead</div>
              <div class="visual-ai-diagram-item">Chatbot</div>
              <div class="visual-ai-diagram-item">Form thu tháº­p dá»¯ liá»‡u tÃ¹y chá»‰nh.</div>
            </div>
            <div class="visual-ai-diagram-hub">
              <p>Táº¥t cáº£ Ä‘á»u cÃ³ thá»ƒ <strong>build báº±ng AI</strong> â€” khÃ´ng cáº§n viáº¿t 1 dÃ²ng code, khÃ´ng cáº§n chá» dev.</p>
            </div>
            <div class="visual-ai-diagram-outcome">
              <p>Äiá»u nÃ y khÃ´ng chá»‰ tiáº¿t kiá»‡m thá»i gian. NÃ³ cho phÃ©p báº¡n <strong>thá»­ nghiá»‡m nhiá»u hÆ¡n</strong> vÃ¬ chi phÃ­ thá»­ nghiá»‡m Ä‘Ã£ giáº£m xuá»‘ng gáº§n báº±ng 0.</p>
            </div>
          </section>
        `,
      },
      { type: 'divider' },
      { type: 'h3', text: 'PhÃ¢n tÃ­ch insight nhanh hÆ¡n gáº¥p bá»™i' },
      {
        type: 'html',
        html: `
          <section class="visual-insight-flow" aria-label="PhÃ¢n tÃ­ch insight nhanh hÆ¡n gáº¥p bá»™i">
            <div class="visual-insight-flow-step">
              <p>Báº¡n cÃ³ má»™t file CSV 5.000 dÃ²ng data campaign. TrÆ°á»›c Ä‘Ã¢y, báº¡n cáº§n <strong>2 tiáº¿ng</strong> Ä‘á»ƒ pivot table, viáº¿t cÃ´ng thá»©c, váº½ chart, rá»“i má»›i Ä‘á»c Ä‘Æ°á»£c káº¿t quáº£.</p>
            </div>
            <div class="visual-insight-flow-arrow" aria-hidden="true"></div>
            <div class="visual-insight-flow-step visual-insight-flow-step-accent">
              <p>Giá» báº¡n upload lÃªn AI, há»i: <em>"Segment nÃ o cÃ³ CPL tháº¥p nháº¥t vÃ  conversion rate cao nháº¥t trong 30 ngÃ y qua?"</em> â€” vÃ  cÃ³ insight trong 30 giÃ¢y.</p>
            </div>
            <div class="visual-insight-flow-outcome">
              <p><strong>Data â†’ insight â†’ action.</strong> VÃ²ng láº·p Ä‘Ã³ giá» diá»…n ra trong má»™t buá»•i sÃ¡ng thay vÃ¬ cáº£ tuáº§n.</p>
            </div>
          </section>
        `,
      },
      { type: 'divider' },
      { type: 'h3', text: 'Sáº£n xuáº¥t content theo scale lá»›n hÆ¡n' },
      {
        type: 'html',
        html: `
          <section class="visual-content-scale" aria-label="Sáº£n xuáº¥t content theo scale lá»›n hÆ¡n">
            <div class="visual-content-scale-grid">
              <div class="visual-content-scale-item">10 headline cho má»™t campaign.</div>
              <div class="visual-content-scale-item">5 version email theo tá»«ng segment.</div>
              <div class="visual-content-scale-item">20 caption cho má»™t thÃ¡ng social.</div>
              <div class="visual-content-scale-item">Script video cho 4 tuáº§n.</div>
            </div>
            <div class="visual-content-scale-focus">
              <p>KhÃ´ng pháº£i AI lÃ m thay báº¡n â€” AI lÃ m pháº§n <strong>thá»±c thi</strong> Ä‘á»ƒ báº¡n táº­p trung vÃ o pháº§n chiáº¿n lÆ°á»£c: Ä‘Ãºng message, Ä‘Ãºng ngÆ°á»i, Ä‘Ãºng thá»i Ä‘iá»ƒm.</p>
            </div>
          </section>
        `,
      }
    ]
  },
  {
    id: '1.4',
    slug: 'bai-1-4',
    lessonSlug: 'vibecode-la-gi',
    lessonId: 1,
    lessonTitle: 'Vibecode lÃ  gÃ¬? KhÃ³ khÃ´ng? GiÃºp gÃ¬ cho Marketer?',
    lessonTitleEm: 'Marketer?',
    prevSlug: 'bai-1-3',
    nextSlug: null,
    prevTitle: 'Nhá»¯ng Ä‘iá»u marketer cÃ³ thá»ƒ lÃ m ngay khi biáº¿t AI',
    nextTitle: 'BÃ i 02 Â· Tá»« ngá»¯ chuyÃªn ngÃ nh',
    eyebrow: 'Chuáº©n bá»‹',
    title: 'Báº¡n cáº§n biáº¿t gÃ¬',
    titleEm: '',
    desc: 'Danh sÃ¡ch nÃ y sáº½ giÃºp báº¡n ngá»«ng lo láº¯ng vÃ  báº¯t Ä‘áº§u.',
    duration: '~5 phÃºt',
    totalSubs: 4,
    currentIndex: 4,
    content: [
      { type: 'h3', text: 'Báº¡n cáº§n biáº¿t mÃ¬nh muá»‘n lÃ m gÃ¬' },
      { type: 'p', text: 'ÄÃ¢y lÃ  <strong>nguyÃªn liá»‡u quan trá»ng nháº¥t</strong> â€” vÃ  báº¡n Ä‘Ã£ cÃ³ rá»“i, chá»‰ lÃ  chÆ°a nháº­n ra.' },
      { type: 'p', text: 'AI khÃ´ng thiáº¿u kháº£ nÄƒng. AI thiáº¿u <strong>hÆ°á»›ng dáº«n.</strong> VÃ  ngÆ°á»i cung cáº¥p hÆ°á»›ng dáº«n Ä‘Ã³ chÃ­nh lÃ  báº¡n.' },
      { type: 'p', text: 'Báº¡n khÃ´ng cáº§n biáº¿t code hoáº¡t Ä‘á»™ng nhÆ° tháº¿ nÃ o. Báº¡n chá»‰ cáº§n biáº¿t mÃ¬nh muá»‘n gÃ¬. VÃ­ dá»¥:' },
      {
        type: 'html',
        html: `
          <section class="vibe-checklist" aria-label="VÃ­ dá»¥ Ã½ tÆ°á»Ÿng cá»¥ thá»ƒ">
            <div class="vibe-checklist-item">
              <span class="vibe-checklist-icon">âœ“</span>
              <span>"TÃ´i muá»‘n má»™t trang thu tháº­p email cá»§a khÃ¡ch hÃ ng tiá»m nÄƒng"</span>
            </div>
            <div class="vibe-checklist-item">
              <span class="vibe-checklist-icon">âœ“</span>
              <span>"TÃ´i muá»‘n má»™t quiz giÃºp khÃ¡ch hÃ ng chá»n Ä‘Ãºng sáº£n pháº©m phÃ¹ há»£p"</span>
            </div>
            <div class="vibe-checklist-item">
              <span class="vibe-checklist-icon">âœ“</span>
              <span>"TÃ´i muá»‘n má»™t dashboard theo dÃµi hiá»‡u quáº£ campaign theo tuáº§n"</span>
            </div>
            <div class="vibe-checklist-summary">
              <p>Ã tÆ°á»Ÿng <strong>cÃ ng cá»¥ thá»ƒ</strong>, AI <strong>cÃ ng lÃ m Ä‘Ãºng</strong>. ÄÃ³ lÃ  táº¥t cáº£ nhá»¯ng gÃ¬ báº¡n cáº§n á»Ÿ bÆ°á»›c nÃ y.</p>
            </div>
          </section>
        `,
      },
      { type: 'divider' },
      { type: 'h3', text: 'Kháº£ nÄƒng mÃ´ táº£ rÃµ rÃ ng báº±ng tiáº¿ng Viá»‡t hoáº·c tiáº¿ng Anh' },
      { type: 'p', text: 'Vibe Coding thá»±c cháº¥t lÃ  <strong>nghá»‡ thuáº­t giao tiáº¿p vá»›i AI.</strong>' },
      { type: 'p', text: 'Báº¡n khÃ´ng cáº§n giá»i tiáº¿ng Anh. Báº¡n khÃ´ng cáº§n dÃ¹ng thuáº­t ngá»¯ ká»¹ thuáº­t. Báº¡n chá»‰ cáº§n <strong>diá»…n Ä‘áº¡t Ä‘Æ°á»£c Ã½ mÃ¬nh muá»‘n</strong> â€” nhÆ° Ä‘ang giáº£i thÃ­ch cho má»™t ngÆ°á»i báº¡n thÃ´ng minh nghe.' },
      {
        type: 'html',
        html: `
          <section class="vibe-compare" aria-label="So sÃ¡nh cÃ¡ch diá»…n Ä‘áº¡t">
            <div class="vibe-compare-bad">
              <div class="vibe-compare-label">âœ— Thay vÃ¬</div>
              <p>"Táº¡o cho tÃ´i má»™t biá»ƒu máº«u táº¡o khÃ¡ch hÃ ng tiá»m nÄƒng"</p>
            </div>
            <div class="vibe-compare-arrow">â†’</div>
            <div class="vibe-compare-good">
              <div class="vibe-compare-label">âœ“ Báº¡n hoÃ n toÃ n cÃ³ thá»ƒ nÃ³i</div>
              <p>"LÃ m cho tÃ´i má»™t form Ä‘Äƒng kÃ½, cÃ³ Ã´ Ä‘iá»n tÃªn vÃ  email, khi báº¥m gá»­i thÃ¬ hiá»‡n thÃ´ng bÃ¡o cáº£m Æ¡n"</p>
            </div>
          </section>
        `,
      },
      { type: 'insight', label: 'LÆ°u Ã½', text: 'AI hiá»ƒu cáº£ hai. Ká»¹ nÄƒng báº¡n cáº§n rÃ¨n lÃ  mÃ´ táº£ cÃ ng chi tiáº¿t cÃ ng tá»‘t â€” mÃ u sáº¯c, bá»‘ cá»¥c, tÃ­nh nÄƒng, cáº£m giÃ¡c báº¡n muá»‘n táº¡o ra. CÃ¡i Ä‘Ã³, báº¡n hoÃ n toÃ n lÃ m Ä‘Æ°á»£c ngay hÃ´m nay.' },
      { type: 'divider' },
      { type: 'h3', text: 'MÃ¡y tÃ­nh Ä‘á»§ dÃ¹ng lÃ  Ä‘Æ°á»£c' },
      { type: 'p', text: 'Báº¡n khÃ´ng cáº§n mÃ¡y xá»‹n. Chá»‰ cáº§n:' },
      {
        type: 'vibe-cards',
        items: [
          { icon: 'laptop', title: 'Laptop bÃ¬nh thÆ°á»ng' },
          { icon: 'brain', title: 'RAM tá»« 8GB trá»Ÿ lÃªn' },
          { icon: 'wifi', title: 'CÃ³ internet á»•n Ä‘á»‹nh' }
        ]
      },
      { type: 'insight', label: 'Táº¡i sao?', text: 'VÃ¬ háº§u háº¿t AI cháº¡y trÃªn web khÃ´ng cáº§n cÃ i Ä‘áº·t náº·ng.' },
      { type: 'divider' },
      { type: 'h3', text: 'KiÃªn nháº«n vá»›i lá»—i â€” AI Ä‘Ã´i khi sai' },
      { type: 'p', text: 'ÄÃ¢y lÃ  Ä‘iá»u nhiá»u ngÆ°á»i má»›i hay bá»‹ "vá»¡ má»™ng".' },
      { type: 'p', text: '<strong>AI khÃ´ng hoÃ n háº£o. AI sáº½ sai. VÃ  Ä‘Ã³ lÃ  bÃ¬nh thÆ°á»ng.</strong>' },
      {
        type: 'html',
        html: `
          <section class="vibe-warning" aria-label="Nhá»¯ng Ä‘iá»u AI cÃ³ thá»ƒ sai">
            <div class="vibe-warning-grid">
              <div class="vibe-warning-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ÄÃ´i khi tráº£ lá»i sai</div>
              <div class="vibe-warning-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ÄÃ´i khi cáº§n sá»­a 2â€“3 láº§n má»›i ra Ä‘Ãºng</div>
              <div class="vibe-warning-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Táº¡o ra thá»© báº¡n chÆ°a muá»‘n</div>
              <div class="vibe-warning-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ÄÃ´i khi viáº¿t chÆ°a hay</div>
              <div class="vibe-warning-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ÄÃ´i khi hiá»ƒu nháº§m Ã½ báº¡n</div>
            </div>
          </section>
        `,
      },
      { type: 'p', text: 'NhÆ°ng Ä‘Ã¢y chÃ­nh lÃ  lÃºc ká»¹ nÄƒng giao tiáº¿p phÃ¡t huy tÃ¡c dá»¥ng. Thay vÃ¬ bá» cuá»™c, báº¡n chá»‰ cáº§n nÃ³i tiáº¿p: <em>"Pháº§n nÃ y chÆ°a Ä‘Ãºng, tÃ´i muá»‘n nÃ³ trÃ´ng nhÆ° tháº¿ nÃ y..."</em>' },
      {
        type: 'html',
        html: `
          <section class="vibe-loop" aria-label="VÃ²ng láº·p Vibe Coding">
            <div class="vibe-loop-step">
              <span class="vibe-loop-num">1</span>
              <span>Sá»­a láº¡i prompt</span>
            </div>
            <div class="vibe-loop-arrow">â†’</div>
            <div class="vibe-loop-step">
              <span class="vibe-loop-num">2</span>
              <span>HÆ°á»›ng dáº«n láº¡i AI</span>
            </div>
            <div class="vibe-loop-arrow">â†’</div>
            <div class="vibe-loop-step vibe-loop-step-active">
              <span class="vibe-loop-num">3</span>
              <span>Refine dáº§n</span>
            </div>
          </section>
        `,
      },
      { type: 'insight', label: 'Quan trá»ng', text: 'Vibe Coding khÃ´ng pháº£i lÃ  ra lá»‡nh má»™t láº§n vÃ  xong. NÃ³ lÃ  má»™t cuá»™c há»™i thoáº¡i â€” <strong>báº¡n dáº«n dáº¯t, AI thá»±c thi, báº¡n pháº£n há»“i, AI cáº£i thiá»‡n</strong>. NgÆ°á»i kiÃªn nháº«n vá»›i vÃ²ng láº·p Ä‘Ã³ sáº½ lÃ m Ä‘Æ°á»£c nhá»¯ng thá»© <strong>ráº¥t áº¥n tÆ°á»£ng.</strong>' },
      { type: 'divider' },
      { type: 'h3', text: 'Má»™t vÃ i tÃ i khoáº£n cÆ¡ báº£n â€” táº¥t cáº£ Ä‘á»u miá»…n phÃ­' },
      {
        type: 'html',
        html: `
          <section class="vibe-tools" aria-label="Bá»™ cÃ´ng cá»¥ miá»…n phÃ­">
            <div class="vibe-tool-item">
              <div class="vibe-tool-badge">AI Coder</div>
              <div class="vibe-tool-title">Claude / Codex / Antigravity</div>
              <div class="vibe-tool-desc">AI giÃºp báº¡n viáº¿t code, giáº£i thÃ­ch lá»—i, vÃ  build sáº£n pháº©m báº±ng ngÃ´n ngá»¯ tá»± nhiÃªn. ÄÃ¢y lÃ  "ngÆ°á»i báº¡n thÃ´ng minh" trong bá»™ ba nÃ y.</div>
            </div>
            <div class="vibe-tool-item">
              <div class="vibe-tool-badge">Code Storage</div>
              <div class="vibe-tool-title">GitHub</div>
              <div class="vibe-tool-desc">NÆ¡i lÆ°u trá»¯ code cá»§a báº¡n trÃªn cloud. Báº¡n khÃ´ng cáº§n hiá»ƒu sÃ¢u vá» nÃ³ ngay tá»« Ä‘áº§u â€” chá»‰ cáº§n cÃ³ tÃ i khoáº£n vÃ  Ä‘á»ƒ AI hÆ°á»›ng dáº«n tá»«ng bÆ°á»›c.</div>
            </div>
            <div class="vibe-tool-item">
              <div class="vibe-tool-badge">Deploy</div>
              <div class="vibe-tool-title">Vercel / Netlify</div>
              <div class="vibe-tool-desc">NÆ¡i Ä‘Æ°a sáº£n pháº©m cá»§a báº¡n lÃªn internet. Báº¡n build xong, Vercel deploy lÃªn thÃ nh má»™t link tháº­t, chia sáº» Ä‘Æ°á»£c vá»›i báº¥t ká»³ ai. Nhanh, Ä‘Æ¡n giáº£n, vÃ  miá»…n phÃ­ cho cÃ¡ nhÃ¢n.</div>
            </div>
          </section>
        `,
      },
      { type: 'p', text: 'Ba tÃ i khoáº£n. KhÃ´ng tá»‘n má»™t Ä‘á»“ng. Äá»§ Ä‘á»ƒ báº¡n build vÃ  publish sáº£n pháº©m Ä‘áº§u tiÃªn cá»§a mÃ¬nh.' },
      { type: 'insight', label: 'Äá»«ng lo', text: 'Náº¿u báº¡n chÆ°a biáº¿t dÃ¹ng chÃºng â€” ta sáº½ Ä‘i tá»«ng bÆ°á»›c trong khÃ³a.' }
    ]
  },
  {
    id: '2.1',
    slug: 'bai-2-1',
    lessonSlug: 'tu-ngu-chuyen-nganh',
    lessonId: 2,
    lessonTitle: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    lessonTitleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    prevSlug: null,
    nextSlug: 'bai-2-2',
    prevTitle: null,
    nextTitle: 'Input vs Output',
    eyebrow: 'Khái niệm gốc',
    title: 'AI, Model, Prompt là gì?',
    titleEm: '',
    desc: 'Ba từ này xuất hiện khắp nơi. Nhưng ít ai giải thích đúng theo kiểu marketer có thể dùng ngay.',
    duration: '~7 phút',
    totalSubs: 5,
    currentIndex: 1,
    content: [
      { type: 'p', text: 'Ba từ này xuất hiện khắp nơi. Nhưng ít ai giải thích đúng theo kiểu marketer có thể dùng ngay.' },
      { type: 'divider' },
      { type: 'h3', text: 'AI' },
      { type: 'p', text: '<strong>AI</strong> — Artificial Intelligence. Đừng nghĩ robot hay phim viễn tưởng. Trong bối cảnh bạn đang dùng hàng ngày, AI là một phần mềm <strong>có khả năng xử lý ngôn ngữ, hình ảnh, dữ liệu — và trả lời theo cách giống con người.</strong>' },
      { type: 'divider' },
      { type: 'h3', text: 'Model' },
      { type: 'p', text: '<strong>Model</strong> — Là "bộ não" cụ thể bên trong AI đó.' },
      { type: 'html', html: '<section class="model-map" aria-label="Sơ đồ model AI"><div class="model-map-core"><div class="model-map-core-label">AI</div><div class="model-map-core-title">Mỗi tool AI có một model bên trong</div><div class="model-map-core-desc">Model là bộ não quyết định cách nó hiểu và trả lời.</div></div><div class="model-map-branches"><article class="model-map-node"><div class="model-map-node-brand">ChatGPT</div><div class="model-map-node-model">GPT-4o</div></article><article class="model-map-node"><div class="model-map-node-brand">Claude</div><div class="model-map-node-model">Sonnet 4.6 <span>hoặc</span> Opus 4.7</div></article><article class="model-map-node"><div class="model-map-node-brand">Gemini</div><div class="model-map-node-model">Gemini 3.1 Pro <span>hoặc</span> 3.1 Flash</div></article></div></section>' },
      { type: 'p', text: 'Cùng một câu hỏi, model khác nhau cho kết quả khác nhau — vì mỗi model được huấn luyện trên dữ liệu khác nhau, theo cách khác nhau.' },
      { type: 'divider' },
      { type: 'h3', text: 'Prompt' },
      { type: 'p', text: '<strong>Prompt</strong> — Là thứ bạn gõ vào để ra lệnh cho AI. Không phải "câu hỏi" theo nghĩa thông thường. <strong>Prompt là một chỉ dẫn.</strong> Bạn viết prompt càng rõ, AI hiểu càng đúng, output ra càng gần với điều bạn thực sự cần.' },
      { type: 'html', html: '<section class="vibe-compare" aria-label="Prompt tệ và prompt tốt"><div class="vibe-compare-bad"><div class="vibe-compare-label">Prompt tệ</div><p>“Viết content bán hàng”</p></div><div class="vibe-compare-arrow">→</div><div class="vibe-compare-good"><div class="vibe-compare-label">Prompt tốt</div><p>“Viết bài quảng cáo Facebook bán mỹ phẩm, target nữ 25-35 tuổi, giọng văn trẻ trung, có CTA rõ ràng”</p></div></section>' },
      { type: 'insight', label: 'Điểm chốt', text: 'AI KHÔNG thông minh hơn prompt của bạn. Prompt tốt = kết quả tốt.' }
    ]
  },
  {
    id: '2.2',
    slug: 'bai-2-2',
    lessonSlug: 'tu-ngu-chuyen-nganh',
    lessonId: 2,
    lessonTitle: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    lessonTitleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    prevSlug: 'bai-2-1',
    nextSlug: 'bai-2-3',
    prevTitle: 'AI, Model, Prompt là gì?',
    nextTitle: 'Tại sao marketer cần hiểu tech?',
    eyebrow: 'Input và Output',
    title: 'Input vs Output',
    titleEm: '',
    desc: 'Đây là cặp khái niệm cơ bản nhất — và quan trọng hơn bạn nghĩ.',
    duration: '~6 phút',
    totalSubs: 5,
    currentIndex: 2,
    content: [
      { type: 'p', text: 'Đây là cặp khái niệm cơ bản nhất — và quan trọng hơn bạn nghĩ.' },
      { type: 'divider' },
      { type: 'h3', text: 'Input là gì?' },
      { type: 'p', text: '<strong>Input</strong> là thứ bạn đưa vào cho AI:' },
      { type: 'html', html: '<section class="input-map" aria-label="Sơ đồ input cho AI"><div class="input-map-items"><span>Văn bản</span><span>Hình ảnh</span><span>File</span><span>Link</span><span>Dữ liệu</span></div><div class="input-map-note"><strong>Prompt</strong> cũng là một dạng input.</div></section>' },
      { type: 'h3', text: 'Output là gì?' },
      { type: 'p', text: '<strong>Output</strong> là thứ AI trả về:' },
      { type: 'html', html: '<section class="output-map" aria-label="Sơ đồ output từ AI"><div class="output-map-items"><span>Bài viết</span><span>Đoạn code</span><span>Bản tóm tắt</span><span>Danh sách ý tưởng</span><span>Hình ảnh</span><span>To do list</span><span>Plans</span></div></section>' },
      { type: 'divider' },
      { type: 'p', text: '<strong>Vấn đề:</strong> Hầu hết mọi người chỉ chăm chăm nhìn vào output mà không chịu đầu tư vào input. Khi output ra sai, họ nghĩ AI dở. Thực ra, input của họ mới là vấn đề.' },
      { type: 'p', text: 'Một marketer giỏi dùng AI không phải người biết nhiều tool nhất. Là người biết cách kiểm soát input để lấy được output mình cần.' },
      { type: 'html', html: '<section class="vibe-compare" aria-label="Input kém và input tốt"><div class="vibe-compare-bad"><div class="vibe-compare-label">Input kém</div><p>“Viết content”</p><p>→ Output: chung chung, nhạt, không dùng được</p></div><div class="vibe-compare-arrow">→</div><div class="vibe-compare-good"><div class="vibe-compare-label">Input tốt</div><p>“Viết 3 mẫu quảng cáo Facebook bán khoá học AI cho marketer, giọng văn đơn giản, tập trung vào pain point “không biết dùng AI”</p><p>→ Output: rõ ràng, có target, dùng được ngay</p></div></section>' },
      { type: 'insight', label: 'Điểm chốt', text: 'Input tốt thì output mới rõ ràng, có target và dùng được ngay.' }
    ]
  },
  {
    id: '2.3',
    slug: 'bai-2-3',
    lessonSlug: 'tu-ngu-chuyen-nganh',
    lessonId: 2,
    lessonTitle: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    lessonTitleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    prevSlug: 'bai-2-2',
    nextSlug: 'bai-2-4',
    prevTitle: 'Input vs Output',
    nextTitle: 'Case thực tế: ChatGPT viết content sai vì prompt',
    eyebrow: 'Tech mindset',
    title: 'Tại sao marketer cần hiểu tech?',
    titleEm: '',
    desc: 'Không phải để thành dân kỹ thuật. Mà vì: AI đang thay đổi cách công việc marketing được thực thi.',
    duration: '~7 phút',
    totalSubs: 5,
    currentIndex: 3,
    content: [
      { type: 'p', text: 'AI đang thay đổi cách công việc marketing được thực thi — và nếu bạn không hiểu nó hoạt động như thế nào, bạn sẽ dùng nó sai, hoặc không dùng được hết tiềm năng của nó.' },
      { type: 'compare', headers: ['Nếu bạn không hiểu', 'Nếu bạn hiểu'], rows: [
        { left: 'Bạn không biết hỏi gì', leftStyle: 'cross', right: 'Bạn sẽ viết prompt tốt hơn', rightStyle: 'check' },
        { left: 'Bạn không sửa được output', leftStyle: 'cross', right: 'Bạn kiểm soát AI tốt hơn', rightStyle: 'check' },
        { left: 'Bạn phụ thuộc vào AI', leftStyle: 'cross', right: 'Bạn tăng năng suất x3–x10', rightStyle: 'accent' }
      ]},
      {
        type: 'infographic',
        label: 'Hiểu tech để làm gì',
        steps: [
          {
            label: '01',
            title: 'Hiểu model',
            desc: 'Biết vì sao <strong>cùng một prompt</strong> trên ChatGPT và Claude lại cho <strong>kết quả khác nhau</strong>.',
          },
          {
            label: '02',
            title: 'Hiểu input/output',
            desc: 'Biết cách <strong>cấu trúc brief cho AI</strong> thay vì chỉ hỏi đại rồi chờ may mắn.',
          },
          {
            label: '03',
            title: 'Hiểu giới hạn AI',
            desc: 'Không <strong>phụ thuộc mù quáng vào output</strong>, biết lúc nào nên tin, sửa, hoặc làm lại.',
          },
        ],
        aside: {
          label: 'Kết quả',
          title: 'Biết đủ để không lệ thuộc',
          desc: 'Bạn làm việc với AI như một <strong>đồng nghiệp thực thụ</strong>, không phải như một cái máy thần kỳ chỉ biết bấm nút.',
        },
      },
      { type: 'insight', label: 'Điểm chốt', text: 'Khác biệt KHÔNG phải do AI. Khác biệt do cách dùng AI.' }
    ]
  },
  {
    id: '2.4',
    slug: 'bai-2-4',
    lessonSlug: 'tu-ngu-chuyen-nganh',
    lessonId: 2,
    lessonTitle: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    lessonTitleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    prevSlug: 'bai-2-3',
    nextSlug: 'bai-2-5',
    prevTitle: 'Tại sao marketer cần hiểu tech?',
    nextTitle: 'Các từ ngữ chuyên ngành',
    eyebrow: 'Case study',
    title: 'Case thực tế: ChatGPT viết content sai vì prompt',
    titleEm: '',
    desc: 'Tình huống này xảy ra với hầu hết marketer khi mới dùng AI.',
    duration: '~8 phút',
    totalSubs: 5,
    currentIndex: 4,
    content: [
      { type: 'p', text: 'Tình huống này xảy ra với hầu hết marketer khi mới dùng AI.' },
      { type: 'p', text: 'Một bạn marketing cần viết caption Facebook cho sản phẩm sữa dưỡng thể mới ra của brand. Bạn gõ vào ChatGPT:' },
      { type: 'html', html: '<section class="prompt-case-flow" aria-label="Case prompt sai và prompt đúng"><article class="prompt-case-card prompt-case-card-bad"><div class="prompt-case-label">Prompt thiếu</div><div class="prompt-case-quote">“Viết caption Facebook cho sản phẩm sữa dưỡng thể mới.”</div><div class="prompt-case-text"><p><strong>Tone:</strong> AI tự đoán</p><p><strong>USP:</strong> không có</p><p><strong>CTA:</strong> không có</p></div></article><div class="prompt-case-arrow" aria-hidden="true">→</div><article class="prompt-case-card prompt-case-card-good"><div class="prompt-case-label">Prompt đủ</div><div class="prompt-case-quote">“Viết 3 caption Facebook cho sản phẩm sữa dưỡng thể [tên sản phẩm].”</div><div class="prompt-case-text"><p><strong>Target:</strong> nữ 22–35 tuổi</p><p><strong>Tone:</strong> gần gũi, không hoa mỹ</p><p><strong>USP:</strong> rẻ hơn Vaseline 30%</p><p><strong>CTA:</strong> dẫn link Shopee</p><p><strong>Giới hạn:</strong> dưới 100 chữ</p></div></article><div class="prompt-case-result"><div class="prompt-case-result-title">AI hiểu sai khi thiếu context</div><div class="prompt-case-result-grid"><div><strong>Tone sai</strong><p>Viết như brand cao cấp thay vì bình dân.</p></div><div><strong>Message sai</strong><p>Nhấn vào thành phần tự nhiên thay vì USP giá rẻ hơn 30%.</p></div><div><strong>CTA sai</strong><p>Kêu gọi khám phá thay vì đẩy link mua trực tiếp.</p></div></div><div class="prompt-case-result-note">Vấn đề không phải ChatGPT dở. Vấn đề là prompt thiếu thông tin cần thiết để AI hiểu đúng yêu cầu.</div></div></section>' },
      { type: 'p', text: 'Output từ prompt thứ hai khác hoàn toàn, và có thể dùng được ngay hoặc chỉ cần chỉnh nhẹ.' }
    ]
  },
  {
    id: '2.5',
    slug: 'bai-2-5',
    lessonSlug: 'tu-ngu-chuyen-nganh',
    lessonId: 2,
    lessonTitle: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    lessonTitleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    prevSlug: 'bai-2-4',
    nextSlug: null,
    prevTitle: 'Case thực tế: ChatGPT viết content sai vì prompt',
    nextTitle: 'Bài 03 · Cài đặt môi trường',
    eyebrow: 'Từ điển thuật ngữ',
    title: 'Các từ ngữ chuyên ngành',
    titleEm: '',
    desc: 'Vì danh sách từ ngữ khá dài — và mỗi từ đều được giải thích kèm ví dụ thực tế — mình đã tách phần này thành một trang riêng biệt để bạn dễ tra cứu lại bất cứ lúc nào.',
    duration: '~6 phút',
    totalSubs: 5,
    currentIndex: 5,
    content: [
      { type: 'p', text: 'Khi làm việc với AI và công cụ kỹ thuật, bạn sẽ liên tục gặp các từ như API, token, deploy, frontend, repository, environment variable... Nếu không biết những từ này nghĩa là gì, bạn sẽ rơi vào một trong hai trạng thái: hoặc bỏ qua hoàn toàn, để AI tự xử lý, hoặc phải dừng lại tra Google mỗi lần gặp — làm gián đoạn luồng làm việc.' },
      { type: 'p', text: 'Hiểu từ ngữ chuyên ngành không phải để bạn nói chuyện được với dev. Mục đích thực tế hơn: để bạn prompt đúng hơn, đọc hiểu được lỗi khi AI báo lỗi, và đặc biệt bạn cần biết mình cần làm gì.' },
      { type: 'html', html: '<section class="mini-example-flow" aria-label="Ví dụ về spacing"><div class="mini-example-step">Có một chỗ bị lệch</div><div class="mini-example-arrow" aria-hidden="true"></div><div class="mini-example-step">Bạn biết chỗ lệch đó gọi là spacing</div><div class="mini-example-arrow" aria-hidden="true"></div><div class="mini-example-step">Bạn nhờ AI sửa lỗi</div><div class="mini-example-arrow" aria-hidden="true"></div><div class="mini-example-step mini-example-step-accent">AI sẽ hiểu ý bạn và sửa nhanh hơn.</div></section>' },
      { type: 'p', text: 'Vì danh sách từ ngữ khá dài — và mỗi từ đều được giải thích kèm ví dụ thực tế — mình đã tách phần này thành một trang riêng biệt để bạn dễ tra cứu lại bất cứ lúc nào, không cần cuộn qua toàn bộ bài học.' },
      { type: 'html', html: '<div style="border:1px solid var(--border); padding:1.1rem; margin:1.4rem 0; background:var(--bg2)"><p style="margin:0 0 .8rem 0; font-family:var(--sans); font-size:14px; line-height:1.7; color:var(--ink2)">Bấm vào nút bên dưới để xem toàn bộ từ điển thuật ngữ.</p><a class="glossary-cta-link" href="/vibecode/tu-ngu-chuyen-nganh/tu-dien-thuat-ngu" style="display:inline-flex; align-items:center; gap:6px; padding:11px 18px; text-decoration:none; font-family:var(--mono); font-size:12px; letter-spacing:.02em">Xem toàn bộ từ điển thuật ngữ →</a></div>' }
    ]
  }

];
export function getSubLessonBySlug(lessonSlug: string, subSlug: string): SubLessonFull | undefined {
  return subLessons.find(sl => sl.lessonSlug === lessonSlug && sl.slug === subSlug);
}

export function getSubLessonsByLesson(lessonSlug: string): SubLessonFull[] {
  return subLessons.filter(sl => sl.lessonSlug === lessonSlug);
}

export function getAllSubLessonSlugs(): { lessonSlug: string; subSlug: string }[] {
  return subLessons.map(sl => ({ lessonSlug: sl.lessonSlug, subSlug: sl.slug }));
}


