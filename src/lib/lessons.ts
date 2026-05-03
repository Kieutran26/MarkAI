// Types
export type SubLesson = {
  id: string;           // "1.1", "1.2"...
  title: string;
  eyebrow: string;      // "Äá»‹nh nghÄ©a", "Táº¡i sao quan trá»ng"...
  desc: string;         // 1 cÃ¢u mÃ´ táº£ ngáº¯n
  contentType: 'text' | 'compare' | 'grid' | 'usecases' | 'mixed';
  // Content blocks
  paragraphs?: string[];
  paragraphs_extra?: string[];
  insight?: string;
  compareHeaders?: [string, string];
  compareRows?: Array<[string, string]>;
  gridItems?: Array<{ label: string; title: string; desc: string }>;
  useCases?: Array<{ title: string; desc: string }>;
};

export type Lesson = {
  id: number;           // 1-10
  slug: string;         // "vibecode-la-gi", "tu-ngu-chuyen-nganh"...
  badge: string;        // "Báº®T Äáº¦U ÄÃ‚Y", "SETUP", "NGÃ”N NGá»®"...
  badgeType: 'accent' | 'dark' | 'green';
  duration: string;     // "~20 phÃºt"
  subLessonCount: number;
  title: string;
  titleEm: string;      // pháº§n in nghiÃªng accent
  desc: string;
  tags: string[];
  difficulty: string;
  badgeExtra?: string;
  badgeExtraType?: 'accent' | 'dark' | 'green';
  nextLesson: { id: number; title: string } | null;
  prevLesson: { id: number; title: string } | null;
  subLessons: SubLesson[];
};

export const getLessonSlug = (id: number): string => {
  const slugMap: Record<number, string> = {
    1: 'vibecode-la-gi',
    2: 'tu-ngu-chuyen-nganh',
    3: 'cai-dat-moi-truong',
    4: 'lam-quen-vscode-cursor',
    5: 'lam-quen-claude-code',
    6: 'cong-cu-website-huu-ich',
    7: 'cach-prompt-cho-ai',
    8: 'khi-ai-code-sai',
    9: 'tao-skills-va-workflow',
    10: 'deploy-va-tracking'
  };
  return slugMap[id] || '';
};

// Lesson Data
export const lessons: Lesson[] = [
  // ========== BÃ€I 01 ==========
  {
    id: 1,
    slug: 'vibecode-la-gi',
    badge: 'Báº®T Äáº¦U ÄÃ‚Y',
    badgeType: 'accent',
    duration: '~20 phÃºt',
    subLessonCount: 4,
    title: 'Vibecode lÃ  gÃ¬? KhÃ³ khÃ´ng? GiÃºp gÃ¬ cho Marketer?',
    titleEm: 'Marketer?',
    desc: 'Hiá»ƒu tÆ° duy vibecode tá»« gÃ³c nhÃ¬n dÃ¢n Marketing â€” khÃ´ng cáº§n biáº¿t code, khÃ´ng cáº§n ná»n táº£ng ká»¹ thuáº­t, chá»‰ cáº§n biáº¿t mÃ¬nh muá»‘n lÃ m gÃ¬.',
    tags: ['tÆ° duy', 'use case', 'marketer', 'vibecode', 'AI'],
    difficulty: 'Zero Â· khÃ´ng cáº§n ná»n táº£ng',
    prevLesson: null,
    nextLesson: { id: 2, title: 'Từ điển chuyên ngành' },
    subLessons: [
      {
        id: '1.1',
        title: 'Vibecode lÃ  gÃ¬ â€” Ä‘á»‹nh nghÄ©a khÃ´ng-tech',
        eyebrow: 'Äá»‹nh nghÄ©a',
        desc: 'Giáº£i thÃ­ch Vibecode theo ngÃ´n ngá»¯ cá»§a Marketer, khÃ´ng dÃ¹ng thuáº­t ngá»¯ láº­p trÃ¬nh.',
        contentType: 'text',
        paragraphs: [
          'Vibecode lÃ  cÃ¡ch báº¡n dÃ¹ng <strong>AI Ä‘á»ƒ viáº¿t code thay mÃ¬nh</strong>. Báº¡n mÃ´ táº£ Ä‘iá»u mÃ¬nh muá»‘n báº±ng tiáº¿ng Viá»‡t bÃ¬nh thÆ°á»ng â€” AI hiá»ƒu vÃ  táº¡o ra code. Báº¡n khÃ´ng cáº§n Ä‘á»c Ä‘Æ°á»£c code Ä‘Ã³, khÃ´ng cáº§n hiá»ƒu nÃ³ hoáº¡t Ä‘á»™ng tháº¿ nÃ o.',
          'TÃªn gá»i "vibe" xuáº¥t phÃ¡t tá»« cÃ¡ch lÃ m viá»‡c: báº¡n cháº¡y theo <strong>cáº£m giÃ¡c vÃ  Ã½ tÆ°á»Ÿng</strong>, AI lo pháº§n ká»¹ thuáº­t. Ã tÆ°á»Ÿng â†’ mÃ´ táº£ â†’ sáº£n pháº©m. ÄÆ¡n giáº£n váº­y thÃ´i.',
          'Hiá»ƒu Ä‘Æ¡n giáº£n hÆ¡n: giá»‘ng nhÆ° báº¡n thuÃª <strong>má»™t láº­p trÃ¬nh viÃªn lÃ m viá»‡c 24/7</strong>, <strong>khÃ´ng ngá»§</strong>, <strong>khÃ´ng tÃ­nh phÃ­ theo giá»</strong>, vÃ  <strong>luÃ´n sáºµn sÃ ng sá»­a láº¡i ngay láº­p tá»©c khi báº¡n Ä‘á»•i Ã½</strong>.'
        ],
        insight: 'âœ³ Äá»‹nh nghÄ©a ngáº¯n: Vibecode = báº¡n cÃ³ Ã½ tÆ°á»Ÿng, AI viáº¿t code, báº¡n ra sáº£n pháº©m. KhÃ´ng cáº§n biáº¿t code á»Ÿ giá»¯a.'
      },
      {
        id: '1.2',
        title: 'Táº¡i sao Marketer láº¡i cáº§n biáº¿t Vibecode?',
        eyebrow: 'Táº¡i sao quan trá»ng',
        desc: 'LÃ½ do thá»±c táº¿, khÃ´ng pháº£i lÃ½ thuyáº¿t â€” Marketer Ä‘Æ°á»£c gÃ¬ khi biáº¿t vibecode.',
        contentType: 'usecases',
        paragraphs: [
          'TrÆ°á»›c Ä‘Ã¢y, khi má»™t Marketer cÃ³ Ã½ tÆ°á»Ÿng cho má»™t landing page, má»™t cÃ´ng cá»¥ tÃ­nh toÃ¡n, hay má»™t dashboard bÃ¡o cÃ¡o â€” há» pháº£i <strong>chá» team ká»¹ thuáº­t</strong>. Chá» thiáº¿t káº¿. Chá» estimate. Chá» sprint. Chá» QA. CÃ³ khi vÃ i tuáº§n.',
          'Vibecode phÃ¡ vá»¡ cÃ¡i vÃ²ng chá» Ä‘Ã³. Báº¡n cÃ³ thá»ƒ tá»± táº¡o ra báº£n prototype trong <strong>vÃ i giá»</strong>, test nhanh, Ä‘iá»u chá»‰nh ngay â€” khÃ´ng phá»¥ thuá»™c vÃ o lá»‹ch cá»§a ai khÃ¡c.'
        ],
        useCases: [
          { title: 'Tá»± build landing page campaign', desc: 'Thay vÃ¬ xin dev lÃ m rá»“i chá» 2 tuáº§n, báº¡n tá»± ra trang trong 1 buá»•i sÃ¡ng vá»›i Ä‘Ãºng copy vÃ  design báº¡n muá»‘n.' },
          { title: 'Táº¡o tool ná»™i bá»™ cho team', desc: 'Báº£ng tÃ­nh media plan tá»± Ä‘á»™ng, tracker content calendar, dashboard bÃ¡o cÃ¡o tuáº§n â€” khÃ´ng cáº§n sheet Excel phá»©c táº¡p.' },
          { title: 'Prototype Ã½ tÆ°á»Ÿng trÆ°á»›c khi thuyáº¿t phá»¥c', desc: 'Thay vÃ¬ slide mÃ´ táº£ concept, báº¡n demo trá»±c tiáº¿p má»™t trang web tháº­t â€” thuyáº¿t phá»¥c hÆ¡n gáº¥p 10 láº§n.' },
          { title: 'TÃ­ch há»£p AI vÃ o workflow Marketing', desc: 'Chatbot há»i Ä‘Ã¡p sáº£n pháº©m, form thu tháº­p lead tá»± phÃ¢n loáº¡i, auto-reply theo ngá»¯ cáº£nh â€” táº¥t cáº£ tá»± build Ä‘Æ°á»£c.' }
        ]
      },
      {
        id: '1.3',
        title: 'Nhá»¯ng Ä‘iá»u marketer cÃ³ thá»ƒ lÃ m ngay khi biáº¿t AI',
        eyebrow: 'So sÃ¡nh',
        desc: 'Nhá»¯ng viá»‡c marketer cÃ³ thá»ƒ báº¯t tay lÃ m ngay vá»›i AI: build tool, Ä‘á»c insight nhanh, vÃ  scale content.',
        contentType: 'compare',
        compareHeaders: ['Há»c code truyá»n thá»‘ng', 'Vibecode'],
        compareRows: [
          ['Há»c syntax Python, JS... tá»« Ä‘áº§u', 'MÃ´ táº£ báº±ng tiáº¿ng Viá»‡t, AI tá»± viáº¿t'],
          ['6â€“12 thÃ¡ng má»›i build Ä‘Æ°á»£c thá»© gÃ¬ Ä‘Ã³', 'Tuáº§n Ä‘áº§u Ä‘Ã£ cÃ³ sáº£n pháº©m tháº­t'],
          ['Hiá»ƒu code sÃ¢u, debug tá»«ng dÃ²ng', 'Paste lá»—i cho AI, nÃ³ tá»± sá»­a'],
          ['Cáº§n ná»n táº£ng toÃ¡n, logic láº­p trÃ¬nh', 'Chá»‰ cáº§n biáº¿t mÃ¬nh muá»‘n gÃ¬'],
          ['PhÃ¹ há»£p muá»‘n lÃ m nghá» developer', 'PhÃ¹ há»£p Marketer muá»‘n tá»± chá»§ hÆ¡n']
        ],
        paragraphs: [
          'Báº¡n cÃ³ thá»ƒ tá»± build landing page A/B testing, quiz phÃ¢n loáº¡i lead, chatbot onboarding, hay form thu tháº­p dá»¯ liá»‡u tÃ¹y chá»‰nh mÃ  <strong>khÃ´ng cáº§n chá» dev</strong>.',
          'AI cÅ©ng rÃºt ngáº¯n vÃ²ng láº·p <strong>data â†’ insight â†’ action</strong> vÃ  giÃºp báº¡n sáº£n xuáº¥t nhiá»u biáº¿n thá»ƒ content hÆ¡n Ä‘á»ƒ táº­p trung vÃ o chiáº¿n lÆ°á»£c.'
        ],
        insight: 'âœ³ LÆ°u Ã½: Vibecode khÃ´ng thay tháº¿ developer giá»i. NhÆ°ng nÃ³ cho phÃ©p báº¡n â€” ngÆ°á»i khÃ´ng pháº£i developer â€” tá»± lÃ m Ä‘Æ°á»£c nhá»¯ng thá»© trÆ°á»›c Ä‘Ã¢y pháº£i cáº§n há».'
      },
      {
        id: '1.4',
        title: 'Báº¡n cáº§n biáº¿t gÃ¬',
        eyebrow: 'Chuáº©n bá»‹',
        desc: 'XoÃ¡ bá» rÃ o cáº£n tÃ¢m lÃ½, set ká»³ vá»ng Ä‘Ãºng.',
        contentType: 'compare',
        compareHeaders: ['âœ³ Báº¡n Cáº¦N cÃ³', 'âœ— Báº¡n KHÃ”NG cáº§n'],
        compareRows: [
          ['Ã tÆ°á»Ÿng rÃµ vá» thá»© mÃ¬nh muá»‘n lÃ m', 'Biáº¿t code Python, JavaScript, HTML'],
          ['Kháº£ nÄƒng mÃ´ táº£ báº±ng tiáº¿ng Viá»‡t/Anh rÃµ rÃ ng', 'Hiá»ƒu database, server, API lÃ  gÃ¬'],
          ['MÃ¡y tÃ­nh Ä‘á»§ dÃ¹ng (4GB RAM trá»Ÿ lÃªn)', 'Báº±ng IT hay chá»©ng chá»‰ láº­p trÃ¬nh'],
          ['KiÃªn nháº«n vá»›i lá»—i â€” AI Ä‘Ã´i khi sai', 'Hiá»ƒu terminal, command line tá»« trÆ°á»›c'],
          ['TÃ i khoáº£n Claude, GitHub, Vercel (Ä‘á»u free)', 'Tráº£ tiá»n cho báº¥t ká»³ tool nÃ o Ä‘á»ƒ báº¯t Ä‘áº§u']
        ],
        insight: 'âœ³ TÃ³m láº¡i: Náº¿u báº¡n biáº¿t dÃ¹ng Google Docs vÃ  gÃµ Ä‘Æ°á»£c cÃ¢u mÃ´ táº£ rÃµ rÃ ng â€” báº¡n Ä‘Ã£ Ä‘á»§ Ä‘iá»u kiá»‡n. BÃ i 02 báº¯t Ä‘áº§u tá»« Ä‘Ã¢y.'
      }
    ]
  },

  // ========== BÀI 02 ==========
  {
    id: 2,
    slug: 'tu-ngu-chuyen-nganh',
    badge: 'NGÔN NGỮ',
    badgeType: 'dark',
    duration: '~40 phút',
    subLessonCount: 5,
    title: 'AI đang “nói gì” với bạn? và bạn cần biết gì để nói chuyện với AI?',
    titleEm: 'và bạn cần biết gì để nói chuyện với AI?',
    desc: 'Hiểu những khái niệm nền tảng nhất khi làm việc với AI: model, prompt, input, output, cách kiểm soát kết quả, và vì sao marketer nên hiểu tech theo cách thực dụng.',
    tags: ['AI', 'model', 'prompt', 'input', 'output', 'tech mindset'],
    difficulty: 'Cơ bản · đọc hiểu',
    prevLesson: { id: 1, title: 'Vibecode là gì?' },
    nextLesson: { id: 3, title: 'Cài đặt môi trường' },
    subLessons: [
      { id: '2.1', title: 'AI, Model, Prompt là gì?', eyebrow: 'Khái niệm gốc', desc: 'Ba từ này xuất hiện khắp nơi. Nhưng ít ai giải thích đúng theo kiểu marketer có thể dùng ngay.', contentType: 'text', paragraphs: ['AI là một phần mềm có khả năng xử lý ngôn ngữ, hình ảnh, dữ liệu — và trả lời theo cách giống con người.', 'Model là “bộ não” cụ thể bên trong AI đó. Cùng một câu hỏi, model khác nhau cho kết quả khác nhau — vì mỗi model được huấn luyện trên dữ liệu khác nhau, theo cách khác nhau.', 'Prompt không phải “câu hỏi” theo nghĩa thông thường. Prompt là một chỉ dẫn. Bạn viết prompt càng rõ, AI hiểu càng đúng, output ra càng gần với điều bạn thực sự cần.'], insight: 'AI KHÔNG thông minh hơn prompt của bạn. Prompt tốt = kết quả tốt.' },
      { id: '2.2', title: 'Input vs Output', eyebrow: 'Cặp khái niệm nền tảng', desc: 'Đây là cặp khái niệm cơ bản nhất — và quan trọng hơn bạn nghĩ.', contentType: 'compare', compareHeaders: ['Input', 'Output'], compareRows: [['văn bản, hình ảnh, file, link, dữ liệu, prompt', 'bài viết, đoạn code, bản tóm tắt, danh sách ý tưởng, hình ảnh, to do list, plans'], ['Thứ bạn đưa vào cho AI xử lý', 'Thứ AI trả về sau khi xử lý'], ['Đầu tư tốt vào input', 'Thì output mới rõ ràng, đúng và dùng được']], paragraphs: ['Hầu hết mọi người chỉ chăm chăm nhìn vào output mà không chịu đầu tư vào input. Khi output ra sai, họ nghĩ AI dở. Thực ra, input của họ mới là vấn đề.', 'Một marketer giỏi dùng AI không phải người biết nhiều tool nhất. Là người biết cách kiểm soát input để lấy được output mình cần.'], insight: 'Input tốt thì output mới dùng được ngay.' },
      { id: '2.3', title: 'Tại sao marketer cần hiểu tech?', eyebrow: 'Mindset làm việc với AI', desc: 'AI đang thay đổi cách công việc marketing được thực thi — và nếu bạn không hiểu nó hoạt động như thế nào, bạn sẽ dùng nó sai, hoặc không dùng được hết tiềm năng của nó.', contentType: 'grid', gridItems: [{ label: '01', title: 'Viết prompt tốt hơn', desc: 'Hiểu model là gì, input/output là gì để brief cho AI đúng hơn thay vì chỉ hỏi đại.' }, { label: '02', title: 'Kiểm soát AI', desc: 'Biết vì sao cùng một prompt trên ChatGPT và Claude lại cho kết quả khác nhau.' }, { label: '03', title: 'Không bị lệ thuộc', desc: 'Hiểu giới hạn của AI để không phụ thuộc mù quáng vào output của nó.' }, { label: '04', title: 'Tăng năng suất x3–x10', desc: 'Làm việc với AI như một đồng nghiệp thực thụ, không phải như một cái máy thần kỳ bạn chỉ biết bấm nút.' }], insight: 'Khác biệt KHÔNG phải do AI. Khác biệt do cách dùng AI.' },
      { id: '2.4', title: 'Case thực tế: ChatGPT viết content sai vì prompt', eyebrow: 'Case study', desc: 'Tình huống này xảy ra với hầu hết marketer khi mới dùng AI.', contentType: 'text', paragraphs: ['Một bạn marketing cần viết caption Facebook cho sản phẩm sữa dưỡng thể mới ra của brand. Bạn gõ vào ChatGPT: “Viết caption Facebook cho sản phẩm sữa dưỡng thể mới.”', 'ChatGPT trả về một đoạn text khá ổn về mặt ngữ pháp. Nhưng nó sai hoàn toàn về tone, sai về message và sai về CTA.', 'Vấn đề không phải ChatGPT dở. Vấn đề là prompt thiếu hoàn toàn các thông tin cần thiết để AI hiểu đúng yêu cầu. Khi prompt được viết lại rõ hơn với target, tone, USP, CTA và giới hạn độ dài, output khác hoàn toàn — và có thể dùng được ngay, hoặc chỉ cần chỉnh nhẹ.'], insight: 'Prompt thiếu thông tin thì AI chỉ có thể đoán. Và đoán thì rất dễ sai.' },
      { id: '2.5', title: 'Từ điển chuyên ngành', eyebrow: 'Trang tra cứu riêng', desc: 'Vì danh sách từ ngữ khá dài — và mỗi từ đều được giải thích kèm ví dụ thực tế — mình đã tách phần này thành một trang riêng biệt để bạn dễ tra cứu lại bất cứ lúc nào.', contentType: 'text', paragraphs: ['Khi làm việc với AI và công cụ kỹ thuật, bạn sẽ liên tục gặp các từ như API, token, deploy, frontend, repository, environment variable...', 'Hiểu từ ngữ chuyên ngành không phải để bạn nói chuyện được với dev. Mục đích thực tế hơn: để bạn prompt đúng hơn, đọc hiểu được lỗi khi AI báo lỗi, và đặc biệt bạn cần biết mình cần làm gì.', 'Ví dụ: Khi có một chỗ bị lệch, bạn sẽ biết chỗ lệch đó gọi là spacing, thì khi bạn nhờ AI sửa lỗi, AI sẽ hiểu ý bạn và sửa nhanh hơn.', 'Vì danh sách từ ngữ khá dài — và mỗi từ đều được giải thích kèm ví dụ thực tế — mình đã tách phần này thành một trang riêng biệt để bạn dễ tra cứu lại bất cứ lúc nào, không cần cuộn qua toàn bộ bài học.'], insight: 'Bấm vào nút bên dưới để xem toàn bộ từ điển thuật ngữ.' }
    ]
  },
  {
    id: 3,
    slug: 'cai-dat-moi-truong',
    badge: 'SETUP',
    badgeType: 'dark',
    duration: '~30 phÃºt',
    subLessonCount: 6,
    title: 'CÃ i gÃ¬ vÃ o mÃ¡y Ä‘á»ƒ báº¯t Ä‘áº§u vibecode?',
    titleEm: 'CÃ i gÃ¬ vÃ o mÃ¡y?',
    desc: 'CÃ i Node.js, VS Code, Cursor, Git, Claude Code theo Ä‘Ãºng thá»© tá»± â€” báº¯t Ä‘áº§u tá»« con sá»‘ 0.',
    tags: ['Node.js', 'Cursor', 'VS Code', 'Git', 'terminal'],
    difficulty: 'Setup Â· 30 phÃºt',
    prevLesson: { id: 2, title: 'Tá»« ngá»¯ chuyÃªn ngÃ nh' },
    nextLesson: { id: 4, title: 'LÃ m quen VS Code & Cursor' },
    subLessons: [
      {
        id: '3.1',
        title: 'Cáº§n cÃ i gÃ¬, theo thá»© tá»± nÃ o',
        eyebrow: 'Tá»•ng quan',
        desc: 'Bá»©c tranh lá»›n trÆ°á»›c â€” biáº¿t mÃ¬nh sáº½ cÃ i gÃ¬ vÃ  táº¡i sao.',
        contentType: 'grid',
        gridItems: [
          { label: '1', title: 'Node.js', desc: 'Ná»n táº£ng cháº¡y JavaScript â€” cáº§n thiáº¿t cho má»i framework hiá»‡n Ä‘áº¡i.' },
          { label: '2', title: 'VS Code', desc: 'Code editor chuáº©n â€” nÆ¡i báº¡n Ä‘á»c vÃ  viáº¿t code.' },
          { label: '3', title: 'Cursor', desc: 'VS Code + AI â€” chÃ­nh lÃ  tool vibecode chÃ­nh.' },
          { label: '4', title: 'Git', desc: 'Há»‡ thá»‘ng version control â€” lÆ°u tiáº¿n Ä‘á»™, backup code.' },
          { label: '5', title: 'Claude Code', desc: 'AI agent cháº¡y trÃªn terminal â€” dÃ¹ng khi Cursor khÃ´ng Ä‘á»§.' }
        ],
        paragraphs: [
          'Táº¥t cáº£ Ä‘á»u miá»…n phÃ­. KhÃ´ng cáº§n mua license hay tráº£ phÃ­. Chá»‰ cáº§n tÃ i khoáº£n GitHub (cÅ©ng miá»…n phÃ­) Ä‘á»ƒ lÆ°u trá»¯ code trÃªn Ä‘Ã¡m mÃ¢y.'
        ],
        insight: 'âœ³ Thá»© tá»± cÃ i: Node.js â†’ VS Code â†’ Cursor â†’ Git â†’ Claude Code. Bá» qua báº¥t ká»³ bÆ°á»›c nÃ o, báº¡n sáº½ gáº·p lá»—i á»Ÿ bÆ°á»›c tiáº¿p theo.'
      },
      {
        id: '3.2',
        title: 'CÃ i Node.js â€” táº¡i sao cáº§n, cÃ i tháº¿ nÃ o',
        eyebrow: 'Node.js',
        desc: 'Node.js lÃ  "mÃ¡y" cháº¡y JavaScript trÃªn mÃ¡y tÃ­nh â€” khÃ´ng pháº£i trÃ¬nh duyá»‡t.',
        contentType: 'text',
        paragraphs: [
          'JavaScript vá»‘n chá»‰ cháº¡y trÃªn trÃ¬nh duyá»‡t (Chrome, Firefox). Node.js cho phÃ©p JavaScript cháº¡y trÃªn server, tá»©c lÃ  trÃªn mÃ¡y tÃ­nh cá»§a báº¡n â€” má»Ÿ ra kháº£ nÄƒng build á»©ng dá»¥ng thá»±c sá»±.',
          'Äá»ƒ cÃ i Node.js, vÃ o <strong>nodejs.org</strong>, táº£i báº£n LTS (Long Term Support) cho mÃ¡y tÃ­nh cá»§a báº¡n. TrÃ¬nh cÃ i Ä‘áº·t sáº½ tá»± Ä‘á»™ng cÃ i luÃ´n <strong>npm</strong> (Node Package Manager) â€” cÃ´ng cá»¥ quáº£n lÃ½ thÆ° viá»‡n code.',
          'Sau khi cÃ i xong, má»Ÿ Terminal (Command Prompt trÃªn Windows), gÃµ: <code>node --version</code> vÃ  <code>npm --version</code>. Náº¿u tháº¥y sá»‘ version hiá»‡n ra â†’ cÃ i thÃ nh cÃ´ng.'
        ],
        insight: 'âœ³ Náº¿u tháº¥y lá»—i "command not found", restart mÃ¡y vÃ  thá»­ láº¡i. Náº¿u váº«n khÃ´ng Ä‘Æ°á»£c, kiá»ƒm tra PATH trong system settings.'
      },
      {
        id: '3.3',
        title: 'CÃ i VS Code â€” extension nÃ o cáº§n gáº¯n ngay',
        eyebrow: 'VS Code',
        desc: 'VS Code lÃ  "sÃ¢n kháº¥u" â€” nÆ¡i báº¡n lÃ m viá»‡c vá»›i code.',
        contentType: 'text',
        paragraphs: [
          'VS Code (Visual Studio Code) lÃ  code editor miá»…n phÃ­ cá»§a Microsoft. NÃ³ nháº¹, nhanh, vÃ  cÃ³ há»‡ sinh thÃ¡i extension phong phÃº.',
          'Táº£i táº¡i <strong>code.visualstudio.com</strong>. Sau khi cÃ i, má»Ÿ VS Code, vÃ o <strong>Extensions</strong> (Ctrl+Shift+X), cÃ i nhá»¯ng extension sau:',
          '<strong>1. Tailwind CSS IntelliSense</strong> â€” gá»£i Ã½ class Tailwind khi gÃµ.<br><strong>2. ES7+ React/Redux/React-Native snippets</strong> â€” code snippet nhanh.<br><strong>3. Prettier - Code formatter</strong> â€” format code tá»± Ä‘á»™ng cho Ä‘áº¹p.<br><strong>4. Auto Rename Tag</strong> â€” Ä‘á»•i tag HTML nÃ y, tag kia tá»± Ä‘á»•i theo.'
        ],
        insight: 'âœ³ VS Code dÃ¹ng Ä‘á»ƒ Ä‘á»c code, chá»‰nh sá»­a thá»§ cÃ´ng. Tool vibecode chÃ­nh lÃ  Cursor â€” phiÃªn báº£n AI-powered cá»§a VS Code.'
      },
      {
        id: '3.4',
        title: 'CÃ i Cursor â€” láº¥y báº£n free, setting Ä‘áº§u tiÃªn',
        eyebrow: 'Cursor',
        desc: 'Cursor lÃ  VS Code cÃ³ AI tÃ­ch há»£p â€” chÃ­nh lÃ  tool vibecode chÃ­nh.',
        contentType: 'text',
        paragraphs: [
          'Cursor (cursor.com) lÃ  VS Code fork vá»›i AI models tÃ­ch há»£p. Báº£n free Ä‘á»§ dÃ¹ng cho cÃ¡ nhÃ¢n â€” giá»›i háº¡n 100 láº§n AI request má»—i thÃ¡ng.',
          'Sau khi cÃ i Cursor, má»Ÿ lÃªn. ÄÄƒng nháº­p báº±ng Google hoáº·c GitHub. VÃ o <strong>Settings â†’ Features â†’ AI</strong>, chá»n model: Claude (máº·c Ä‘á»‹nh) hoáº·c GPT-4 tuá»³ preference.',
          '<strong>Keyboard shortcut quan trá»ng trong Cursor:</strong><br>â€¢ <code>Ctrl/Cmd + L</code>: Má»Ÿ Chat panel<br>â€¢ <code>Ctrl/Cmd + K</code>: Má»Ÿ Composer (viáº¿t nhiá»u file cÃ¹ng lÃºc)<br>â€¢ <code>Tab</code>: Accept suggestion cá»§a AI'
        ],
        insight: 'âœ³ Báº£n Free Ä‘á»§ Ä‘á»ƒ há»c vÃ  lÃ m project cÃ¡ nhÃ¢n. Náº¿u cáº§n nhiá»u hÆ¡n, Cursor Pro cÃ³ $20/thÃ¡ng â€” nhÆ°ng khÃ´ng báº¯t buá»™c.'
      },
      {
        id: '3.5',
        title: 'CÃ i Git â€” káº¿t ná»‘i vá»›i GitHub láº§n Ä‘áº§u',
        eyebrow: 'Git & GitHub',
        desc: 'Git lÆ°u tiáº¿n Ä‘á»™, GitHub lÆ°u trá»¯ cloud â€” cáº£ hai Ä‘á»u miá»…n phÃ­.',
        contentType: 'text',
        paragraphs: [
          'Git lÃ  cÃ´ng cá»¥ command-line. CÃ i tá»« <strong>git-scm.com</strong> (Windows) hoáº·c Ä‘Ã£ cÃ³ sáºµn trÃªn Mac. Sau khi cÃ i, má»Ÿ Terminal, gÃµ <code>git --version</code> Ä‘á»ƒ verify.',
          'Tiáº¿p theo, káº¿t ná»‘i Git vá»›i GitHub. Táº¡o tÃ i khoáº£n táº¡i <strong>github.com</strong> (miá»…n phÃ­). Sau Ä‘Ã³, generate SSH key vÃ  thÃªm vÃ o GitHub Ä‘á»ƒ khÃ´ng pháº£i nháº­p password má»—i láº§n push.',
          '<strong>CÃ¡c lá»‡nh Git cÆ¡ báº£n:</strong><br>â€¢ <code>git init</code>: Báº¯t Ä‘áº§u theo dÃµi project<br>â€¢ <code>git add .</code>: ThÃªm thay Ä‘á»•i vÃ o staging<br>â€¢ <code>git commit -m "message"</code>: LÆ°u checkpoint<br>â€¢ <code>git push</code>: Äáº©y lÃªn GitHub'
        ],
        insight: 'âœ³ GitHub lÃ  "Google Drive cho code". LÆ°u code á»Ÿ Ä‘Ã¢y = backup + cÃ³ thá»ƒ share + káº¿t ná»‘i Vercel Ä‘á»ƒ deploy tá»± Ä‘á»™ng.'
      },
      {
        id: '3.6',
        title: 'CÃ i Claude Code â€” yÃªu cáº§u, cÃ¡ch cÃ i, cháº¡y thá»­',
        eyebrow: 'Claude Code',
        desc: 'Claude Code lÃ  AI agent cháº¡y trÃªn terminal â€” dÃ¹ng khi Cursor khÃ´ng Ä‘á»§.',
        contentType: 'text',
        paragraphs: [
          'Claude Code khÃ¡c Cursor: Cursor lÃ  code editor vá»›i AI assistant. Claude Code lÃ  AI agent tá»± Ä‘á»™ng lÃ m viá»‡c trÃªn project â€” cÃ³ thá»ƒ Ä‘á»c nhiá»u file, cháº¡y lá»‡nh, sá»­a code liÃªn tá»¥c.',
          '<strong>CÃ i Ä‘áº·t:</strong> Cáº§n cÃ³ Node.js vÃ  npm trÆ°á»›c. Sau Ä‘Ã³ cháº¡y lá»‡nh: <code>npm install -g @anthropic-ai/claude-code</code>',
          'Sau khi cÃ i, vÃ o thÆ° má»¥c project, gÃµ <code>claude</code> Ä‘á»ƒ khá»Ÿi Ä‘á»™ng. Láº§n Ä‘áº§u sáº½ yÃªu cáº§u API key â€” láº¥y tá»« console.anthropic.com.',
          '<strong>Khi nÃ o dÃ¹ng Claude Code thay Cursor:</strong><br>â€¢ Khi cáº§n lÃ m nhiá»u thá»© liÃªn tá»¥c, khÃ´ng cáº§n nhÃ¬n code<br>â€¢ Khi muá»‘n AI tá»± Ä‘Æ°a ra quyáº¿t Ä‘á»‹nh<br>â€¢ Khi project lá»›n, cáº§n phÃ¢n tÃ­ch nhiá»u file'
        ],
        insight: 'âœ³ Claude Code lÃ  tool máº¡nh hÆ¡n nhÆ°ng cáº§n thá»i gian lÃ m quen. Báº¯t Ä‘áº§u vá»›i Cursor trÆ°á»›c, sau Ä‘Ã³ thá»­ Claude Code khi Ä‘Ã£ quen workflow.'
      }
    ]
  },

  // ========== BÃ€I 04 ==========
  {
    id: 4,
    slug: 'lam-quen-vscode-cursor',
    badge: 'CÃ”NG Cá»¤',
    badgeType: 'dark',
    duration: '~35 phÃºt',
    subLessonCount: 6,
    title: 'LÃ m quen VS Code & Cursor â€” giao diá»‡n, phÃ­m táº¯t, cÃ¡ch Ä‘á»c file',
    titleEm: 'giao diá»‡n & phÃ­m táº¯t',
    desc: 'Äi sÃ¢u vÃ o VS Code vÃ  Cursor â€” hiá»ƒu giao diá»‡n, thÆ° má»¥c, terminal, vÃ  10 phÃ­m táº¯t cáº§n thiáº¿t.',
    tags: ['VS Code', 'Cursor', 'terminal', 'phÃ­m táº¯t', 'file tree'],
    difficulty: 'CÃ´ng cá»¥ Â· thá»±c hÃ nh',
    prevLesson: { id: 3, title: 'CÃ i Ä‘áº·t mÃ´i trÆ°á»ng' },
    nextLesson: { id: 5, title: 'LÃ m quen Claude Code' },
    subLessons: [
      {
        id: '4.1',
        title: 'Giao diá»‡n VS Code â€” Explorer, Terminal, Extensions',
        eyebrow: 'Giao diá»‡n VS Code',
        desc: 'CÃ¡c panel chÃ­nh: Explorer, Terminal, Extensions, Command Palette.',
        contentType: 'text',
        paragraphs: [
          'VS Code cÃ³ 5 panel chÃ­nh báº¡n cáº§n biáº¿t:',
          '<strong>1. Activity Bar</strong> (thanh bÃªn trÃ¡i): CÃ¡c icon Ä‘á»ƒ toggle panel. Explorer, Search, Source Control (Git), Extensions, Debug.',
          '<strong>2. Explorer</strong>: Hiá»ƒn thá»‹ cÃ¢y thÆ° má»¥c cá»§a project. Click vÃ o file Ä‘á»ƒ má»Ÿ trong editor.',
          '<strong>3. Editor</strong>: VÃ¹ng chÃ­nh Ä‘á»ƒ Ä‘á»c vÃ  sá»­a code. CÃ³ thá»ƒ má»Ÿ nhiá»u tabs.',
          '<strong>4. Terminal</strong>: Má»Ÿ báº±ng <code>Ctrl+`</code>. NÆ¡i cháº¡y lá»‡nh npm, git, v.v.',
          '<strong>5. Command Palette</strong>: Má»Ÿ báº±ng <code>Ctrl+Shift+P</code>. GÃµ tÃªn lá»‡nh Ä‘á»ƒ thá»±c thi â€” khÃ´ng cáº§n nhá»› shortcut.'
        ],
        insight: 'âœ³ Máº¹o: Ctrl+P (Quick Open) Ä‘á»ƒ má»Ÿ file nhanh báº±ng tÃªn, khÃ´ng cáº§n click trong Explorer.'
      },
      {
        id: '4.2',
        title: 'Cáº¥u trÃºc project Next.js â€” file nÃ o lÃ m gÃ¬',
        eyebrow: 'Äá»c cáº¥u trÃºc thÆ° má»¥c',
        desc: 'Hiá»ƒu cáº¥u trÃºc má»™t project Next.js â€” package.json, app folder, components.',
        contentType: 'grid',
        gridItems: [
          { label: 'package.json', title: 'Quáº£n lÃ½ dependencies', desc: 'Khai bÃ¡o thÆ° viá»‡n cáº§n cÃ i (React, Next.js, Tailwind...).' },
          { label: 'app/', title: 'Router & Pages', desc: 'Next.js App Router â€” má»—i folder lÃ  má»™t route/page.' },
          { label: 'components/', title: 'UI components', desc: 'CÃ¡c khá»‘i giao diá»‡n cÃ³ thá»ƒ tÃ¡i sá»­ dá»¥ng.' },
          { label: 'public/', title: 'Static assets', desc: 'HÃ¬nh áº£nh, font, file tÄ©nh copy nguyÃªn sang deploy.' }
        ],
        paragraphs: [
          '<strong>app/</strong> lÃ  folder chÃ­nh cá»§a Next.js 13+. Má»—i <code>page.tsx</code> lÃ  má»™t trang. <code>layout.tsx</code> lÃ  layout chung cho cÃ¡c trang con.',
          '<strong>components/</strong> chá»©a cÃ¡c React components. NÃªn Ä‘áº·t tÃªn theo PascalCase: <code>LessonCard.tsx</code>, <code>NavBar.tsx</code>.'
        ],
        insight: 'âœ³ Khi AI táº¡o file má»›i, nÃ³ thÆ°á»ng táº¡o Ä‘Ãºng vá»‹ trÃ­. Báº¡n chá»‰ cáº§n hiá»ƒu: "folder nÃ y chá»©a gÃ¬" lÃ  Ä‘á»§.'
      },
      {
        id: '4.3',
        title: 'Terminal tÃ­ch há»£p â€” má»Ÿ, cháº¡y lá»‡nh, khÃ´ng sá»£ mÃ n hÃ¬nh Ä‘en',
        eyebrow: 'Terminal tÃ­ch há»£p',
        desc: 'Terminal khÃ´ng Ä‘Ã¡ng sá»£ â€” Ä‘Ã¢y lÃ  nÆ¡i cháº¡y lá»‡nh, cÃ i package, start server.',
        contentType: 'text',
        paragraphs: [
          'Terminal (hay Command Line Interface - CLI) lÃ  "mÃ n hÃ¬nh Ä‘en" Ä‘Ã¡ng sá»£ vá»›i ngÆ°á»i má»›i. Thá»±c ra nÃ³ chá»‰ lÃ  nÆ¡i gÃµ lá»‡nh text thay vÃ¬ click chuá»™t.',
          '<strong>CÃ¡c lá»‡nh cÆ¡ báº£n cáº§n biáº¿t:</strong><br>â€¢ <code>cd folder-name</code>: Di chuyá»ƒn vÃ o thÆ° má»¥c<br>â€¢ <code>ls</code> (Mac) / <code>dir</code> (Windows): Liá»‡t kÃª file trong thÆ° má»¥c<br>â€¢ <code>cd ..</code>: Di chuyá»ƒn ra thÆ° má»¥c cha<br>â€¢ <code>npm install</code>: CÃ i dependencies<br>â€¢ <code>npm run dev</code>: Cháº¡y development server'
        ],
        paragraphs_extra: [
          '<strong>Äá»«ng sá»£ lá»—i trong terminal</strong>. Lá»—i lÃ  bÃ¬nh thÆ°á»ng â€” Ä‘á»c thÃ´ng bÃ¡o, paste cho AI, nhá» nÃ³ fix.'
        ],
        insight: 'âœ³ Khi terminal "cháº¡y mÃ£i khÃ´ng dá»«ng", Ä‘Ã³ lÃ  vÃ¬ server Ä‘ang hoáº¡t Ä‘á»™ng. Má»Ÿ trÃ¬nh duyá»‡t xem káº¿t quáº£. Nháº¥n Ctrl+C Ä‘á»ƒ dá»«ng.'
      },
      {
        id: '4.4',
        title: 'Cursor khÃ¡c VS Code á»Ÿ chá»— nÃ o',
        eyebrow: 'Giao diá»‡n Cursor',
        desc: 'Cursor lÃ  VS Code + AI â€” thÃªm Chat, Composer, vÃ  inline suggestions.',
        contentType: 'compare',
        compareHeaders: ['VS Code', 'Cursor'],
        compareRows: [
          ['Code editor thuáº§n', 'Code editor + AI tÃ­ch há»£p'],
          ['Cáº§n extension cho AI', 'AI cÃ³ sáºµn (Claude/GPT-4)'],
          ['Tá»± viáº¿t code hoÃ n toÃ n', 'AI viáº¿t code, báº¡n review & accept'],
          ['Miá»…n phÃ­ hoÃ n toÃ n', 'Free tier cÃ³ giá»›i háº¡n'],
          ['Tá»‘t cho developer chuyÃªn', 'Tá»‘t cho ngÆ°á»i muá»‘n AI há»— trá»£']
        ],
        insight: 'âœ³ Cursor = VS Code nhÆ°ng thÃªm "co-pilot". Náº¿u Ä‘Ã£ quen VS Code, chuyá»ƒn sang Cursor khÃ´ng máº¥t gÃ¬ â€” giao diá»‡n y há»‡t, thÃªm AI bÃªn cáº¡nh.'
      },
      {
        id: '4.5',
        title: 'Chat vs Composer trong Cursor â€” dÃ¹ng cÃ¡i nÃ o khi nÃ o',
        eyebrow: 'Chat vs Composer',
        desc: 'Hai AI panel cá»§a Cursor phá»¥c vá»¥ hai má»¥c Ä‘Ã­ch khÃ¡c nhau.',
        contentType: 'text',
        paragraphs: [
          '<strong>Chat (<code>Ctrl+L</code>)</strong>: Há»i Ä‘Ã¡p, giáº£i thÃ­ch code, debug. DÃ¹ng khi báº¡n cáº§n hiá»ƒu má»™t Ä‘oáº¡n code hoáº·c muá»‘n AI giáº£i thÃ­ch lá»—i.',
          '<strong>Composer (<code>Ctrl+K</code>)</strong>: Táº¡o hoáº·c sá»­a nhiá»u file cÃ¹ng lÃºc. DÃ¹ng khi báº¡n muá»‘n AI táº¡o tÃ­nh nÄƒng má»›i â€” nÃ³ sáº½ táº¡o/sá»­a nhiá»u file má»™t lÆ°á»£t.',
          '<strong>Inline Chat</strong>: AI nháº¯c trong code. DÃ¹ng <code>Ctrl+I</code> Ä‘á»ƒ há»i ngay táº¡i dÃ²ng Ä‘ang Ä‘á»c.',
          '<strong>Khi nÃ o dÃ¹ng:</strong><br>â€¢ Cáº§n hiá»ƒu code â†’ Chat<br>â€¢ Cáº§n táº¡o/sá»­a tÃ­nh nÄƒng â†’ Composer<br>â€¢ Cáº§n sá»­a nhanh 1-2 dÃ²ng â†’ Inline Chat'
        ],
        insight: 'âœ³ Composer lÃ  "vibecode mode" â€” báº¡n mÃ´ táº£ gÃ¬ cáº§n lÃ m, AI táº¡o code trong nhiá»u file. Chat lÃ  "há»i Ä‘Ã¡p mode" â€” há»i gÃ¬ Ä‘Ã¡p náº¥y.'
      },
      {
        id: '4.6',
        title: '10 phÃ­m táº¯t hay dÃ¹ng nháº¥t',
        eyebrow: 'PhÃ­m táº¯t',
        desc: '10 phÃ­m táº¯t Ä‘á»§ Ä‘á»ƒ sá»‘ng â€” khÃ´ng cáº§n nhá»› táº¥t cáº£.',
        contentType: 'grid',
        gridItems: [
          { label: '1', title: 'Ctrl/Cmd + `', desc: 'Má»Ÿ/táº¯t terminal' },
          { label: '2', title: 'Ctrl/Cmd + P', desc: 'Quick Open â€” má»Ÿ file nhanh' },
          { label: '3', title: 'Ctrl/Cmd + Shift + P', desc: 'Command Palette' },
          { label: '4', title: 'Ctrl/Cmd + L', desc: 'Má»Ÿ Cursor Chat' },
          { label: '5', title: 'Ctrl/Cmd + K', desc: 'Má»Ÿ Cursor Composer' },
          { label: '6', title: 'Ctrl/Cmd + S', desc: 'LÆ°u file (ráº¥t quan trá»ng!)' },
          { label: '7', title: 'Ctrl/Cmd + D', desc: 'Chá»n word tiáº¿p theo giá»‘ng váº­y' },
          { label: '8', title: 'Alt + Click', desc: 'Multi-cursor â€” sá»­a nhiá»u chá»—' }
        ],
        insight: 'âœ³ KhÃ´ng cáº§n nhá»› táº¥t cáº£. Báº¯t Ä‘áº§u vá»›i 3 cÃ¡i: Ctrl+S (lÆ°u), Ctrl+P (má»Ÿ file), Ctrl+L (chat). ThÃªm dáº§n khi quen.'
      }
    ]
  },

  // ========== BÃ€I 05 ==========
  {
    id: 5,
    slug: 'lam-quen-claude-code',
    badge: 'CLAUDE CODE',
    badgeType: 'dark',
    duration: '~30 phÃºt',
    subLessonCount: 5,
    title: 'LÃ m quen Claude Code â€” cÃ¡ch hoáº¡t Ä‘á»™ng, lá»‡nh cÆ¡ báº£n, khi nÃ o dÃ¹ng',
    titleEm: 'cÃ¡ch hoáº¡t Ä‘á»™ng & lá»‡nh',
    desc: 'Claude Code khÃ¡c Cursor á»Ÿ chá»— nÃ o, lá»‡nh nÃ o hay dÃ¹ng, vÃ  khi nÃ o káº¿t há»£p cáº£ hai.',
    tags: ['Claude Code', 'terminal', 'CLI', 'workflow'],
    difficulty: 'CLI Â· thá»±c hÃ nh',
    prevLesson: { id: 4, title: 'LÃ m quen VS Code & Cursor' },
    nextLesson: { id: 6, title: 'CÃ´ng cá»¥ & website há»¯u Ã­ch' },
    subLessons: [
      {
        id: '5.1',
        title: 'Claude Code lÃ  gÃ¬ â€” khÃ¡c Cursor á»Ÿ Ä‘iá»ƒm nÃ o',
        eyebrow: 'Claude Code lÃ  gÃ¬',
        desc: 'Claude Code lÃ  AI agent cháº¡y trÃªn terminal â€” tá»± Ä‘á»™ng hÃ³a nhiá»u bÆ°á»›c liÃªn tá»¥c.',
        contentType: 'text',
        paragraphs: [
          'Cursor lÃ  code editor vá»›i AI assistant â€” báº¡n váº«n thao tÃ¡c, AI gá»£i Ã½. Claude Code lÃ  AI agent â€” nÃ³ tá»± Ä‘á»™ng lÃ m viá»‡c liÃªn tá»¥c, Ä‘á»c file, cháº¡y lá»‡nh, sá»­a code, khÃ´ng cáº§n báº¡n tÆ°Æ¡ng tÃ¡c liÃªn tá»¥c.',
          '<strong>So sÃ¡nh:</strong><br>â€¢ Cursor: Báº¡n â†â†’ AI â†â†’ Code (há»i - Ä‘Ã¡p - sá»­a tá»«ng bÆ°á»›c)<br>â€¢ Claude Code: Báº¡n â†’ AI â†’ lÃ m nhiá»u bÆ°á»›c liÃªn tá»¥c â†’ káº¿t quáº£',
          'Claude Code phÃ¹ há»£p khi: cáº§n lÃ m nhiá»u viá»‡c liÃªn tá»¥c (táº¡o component, sá»­a nhiá»u file, cháº¡y test), cáº§n AI phÃ¢n tÃ­ch toÃ n bá»™ codebase.'
        ],
        insight: 'âœ³ DÃ¹ng Claude Code khi muá»‘n "AI tá»± lÃ m" â€” Ä‘Æ°a task, nÃ³ thá»±c hiá»‡n. DÃ¹ng Cursor khi muá»‘n "AI há»— trá»£" â€” lÃ m cÃ¹ng, kiá»ƒm soÃ¡t tá»«ng bÆ°á»›c.'
      },
      {
        id: '5.2',
        title: 'VÃ o project, gÃµ lá»‡nh Ä‘áº§u tiÃªn, nhÃ¬n AI hoáº¡t Ä‘á»™ng',
        eyebrow: 'Cháº¡y láº§n Ä‘áº§u',
        desc: 'CÃ¡ch khá»Ÿi Ä‘á»™ng Claude Code trong project â€” terminal, AI response, cÃ¡ch ra lá»‡nh.',
        contentType: 'text',
        paragraphs: [
          '<strong>BÆ°á»›c 1:</strong> Má»Ÿ terminal, <code>cd</code> vÃ o thÆ° má»¥c project cá»§a báº¡n.',
          '<strong>BÆ°á»›c 2:</strong> GÃµ <code>claude</code> vÃ  Enter. Claude Code khá»Ÿi Ä‘á»™ng, hiá»‡n thá»‹ thÃ´ng tin project.',
          '<strong>BÆ°á»›c 3:</strong> GÃµ mÃ´ táº£ task cá»§a báº¡n, vÃ­ dá»¥: "Táº¡o component Button vá»›i 3 variants: primary, secondary, ghost."',
          '<strong>BÆ°á»›c 4:</strong> AI phÃ¢n tÃ­ch, Ä‘á»c files hiá»‡n cÃ³, táº¡o code. Báº¡n review, approve hoáº·c yÃªu cáº§u chá»‰nh sá»­a.',
          'AI sáº½ há»i xÃ¡c nháº­n trÆ°á»›c khi lÃ m nhá»¯ng thay Ä‘á»•i lá»›n (táº¡o file má»›i, xÃ³a file). Nháº¥n <code>y</code> Ä‘á»ƒ Ä‘á»“ng Ã½, <code>n</code> Ä‘á»ƒ tá»« chá»‘i.'
        ],
        insight: 'âœ³ Láº§n Ä‘áº§u cháº¡y, Claude Code cÃ³ thá»ƒ há»i vÃ i cÃ¢u há»i Ä‘á»ƒ hiá»ƒu project. Tráº£ lá»i cÃ ng rÃµ, AI lÃ m cÃ ng Ä‘Ãºng Ã½.'
      },
      {
        id: '5.3',
        title: 'Lá»‡nh hay dÃ¹ng â€” plan, edit, run, review',
        eyebrow: 'Lá»‡nh hay dÃ¹ng',
        desc: 'CÃ¡c commands Ä‘áº·c biá»‡t trong Claude Code Ä‘á»ƒ kiá»ƒm soÃ¡t AI.',
        contentType: 'grid',
        gridItems: [
          { label: '/plan', title: 'LÃªn káº¿ hoáº¡ch trÆ°á»›c', desc: 'AI phÃ¢n tÃ­ch vÃ  Ä‘á» xuáº¥t cÃ¡c bÆ°á»›c cáº§n lÃ m. DÃ¹ng trÆ°á»›c task lá»›n.' },
          { label: '/review', title: 'Review code hiá»‡n cÃ³', desc: 'AI Ä‘á»c vÃ  phÃ¢n tÃ­ch code, Ä‘Æ°a ra gá»£i Ã½ cáº£i thiá»‡n.' },
          { label: '/test', title: 'Viáº¿t unit tests', desc: 'AI táº¡o tests cho code hiá»‡n cÃ³.' },
          { label: '/refactor', title: 'Refactor code', desc: 'Cáº£i thiá»‡n structure, Ä‘áº·t tÃªn, loáº¡i bá» duplication.' }
        ],
        paragraphs: [
          'NgoÃ i commands Ä‘áº·c biá»‡t, báº¡n cÃ³ thá»ƒ gÃµ tá»± nhiÃªn. Claude Code hiá»ƒu ngá»¯ cáº£nh vÃ  tá»± Ä‘Æ°a ra hÃ nh Ä‘á»™ng phÃ¹ há»£p.',
          '<strong>Máº¹o:</strong> GÃµ <code>/help</code> Ä‘á»ƒ xem táº¥t cáº£ commands cÃ³ sáºµn.'
        ],
        insight: 'âœ³ /plan ráº¥t há»¯u Ã­ch cho task lá»›n â€” xem AI Ä‘á»‹nh lÃ m gÃ¬ trÆ°á»›c khi nÃ³ lÃ m, trÃ¡nh waste effort.'
      },
      {
        id: '5.4',
        title: 'Khi nÃ o dÃ¹ng Claude Code vs Cursor',
        eyebrow: 'Khi nÃ o dÃ¹ng',
        desc: 'KhÃ´ng pháº£i cÃ¡i nÃ o tá»‘t hÆ¡n â€” má»—i cÃ¡i cho situation khÃ¡c nhau.',
        contentType: 'compare',
        compareHeaders: ['DÃ¹ng Cursor khi', 'DÃ¹ng Claude Code khi'],
        compareRows: [
          ['Cáº§n kiá»ƒm soÃ¡t tá»«ng bÆ°á»›c', 'Cáº§n AI tá»± Ä‘á»™ng lÃ m nhiá»u thá»©'],
          ['Task nhá», nhanh', 'Task lá»›n, nhiá»u bÆ°á»›c'],
          ['Muá»‘n nhÃ¬n code trÆ°á»›c khi apply', 'Cáº§n phÃ¢n tÃ­ch toÃ n bá»™ codebase'],
          ['Má»›i báº¯t Ä‘áº§u, chÆ°a quen CLI', 'ÄÃ£ quen terminal workflow'],
          ['LÃ m viá»‡c vá»›i 1-2 files', 'Sá»­a nhiá»u files cÃ¹ng lÃºc']
        ],
        insight: 'âœ³ Thá»±c táº¿: Cursor cho 80% task thÃ´ng thÆ°á»ng. Claude Code cho 20% task phá»©c táº¡p. DÃ¹ng cáº£ hai, khÃ´ng cáº§n chá»n 1.'
      },
      {
        id: '5.5',
        title: 'Claude Code + Cursor â€” workflow thá»±c táº¿',
        eyebrow: 'Káº¿t há»£p',
        desc: 'CÃ¡ch káº¿t há»£p cáº£ hai tool trong má»™t dá»± Ã¡n thá»±c táº¿.',
        contentType: 'text',
        paragraphs: [
          '<strong>Workflow Ä‘á» xuáº¥t cho Marketer vibecoder:</strong>',
          '<strong>1. Báº¯t Ä‘áº§u project má»›i:</strong> DÃ¹ng Cursor Composer Ä‘á»ƒ táº¡o project structure â€” nhanh, trá»±c quan.',
          '<strong>2. ThÃªm tÃ­nh nÄƒng nhá»:</strong> DÃ¹ng Cursor Chat hoáº·c Inline Chat â€” nhanh, gáº§n code.',
          '<strong>3. Refactor lá»›n:</strong> DÃ¹ng Claude Code vá»›i /refactor â€” phÃ¢n tÃ­ch sÃ¢u, cáº£i thiá»‡n nhiá»u files.',
          '<strong>4. Debug phá»©c táº¡p:</strong> DÃ¹ng Claude Code â€” nÃ³ Ä‘á»c nhiá»u files, trace lá»—i tá»‘t hÆ¡n.',
          '<strong>5. Review code:</strong> DÃ¹ng Claude Code /review â€” phÃ¢n tÃ­ch toÃ n diá»‡n hÆ¡n.'
        ],
        insight: 'âœ³ KhÃ´ng cÃ³ workflow "Ä‘Ãºng" duy nháº¥t. Thá»­ nhiá»u cÃ¡ch, tÃ¬m cÃ¡ch nÃ o phÃ¹ há»£p vá»›i báº¡n nháº¥t. Quan trá»ng: luÃ´n review code trÆ°á»›c khi commit.'
      }
    ]
  },

  // ========== BÃ€I 06 ==========
  {
    id: 6,
    slug: 'cong-cu-website-huu-ich',
    badge: 'TOOLS',
    badgeType: 'dark',
    duration: '~25 phÃºt',
    subLessonCount: 6,
    title: 'CÃ´ng cá»¥ & website há»¯u Ã­ch Ä‘á»ƒ vibecode ra web hoÃ n chá»‰nh',
    titleEm: 'cÃ´ng cá»¥ há»¯u Ã­ch',
    desc: 'v0.dev, Bolt.new, Vercel, Shadcn/ui, 21st.dev â€” má»—i tool phá»¥c vá»¥ má»¥c Ä‘Ã­ch khÃ¡c nhau.',
    tags: ['v0.dev', 'Bolt', 'Vercel', 'Shadcn', '21st.dev'],
    difficulty: 'Tools Â· tham kháº£o',
    prevLesson: { id: 5, title: 'LÃ m quen Claude Code' },
    nextLesson: { id: 7, title: 'CÃ¡ch prompt cho AI' },
    subLessons: [
      {
        id: '6.1',
        title: 'v0.dev â€” sinh UI tá»« mÃ´ táº£ text',
        eyebrow: 'v0.dev',
        desc: 'Vercel AI sinh UI component â€” copy/paste vÃ o Cursor.',
        contentType: 'text',
        paragraphs: [
          'v0.dev lÃ  tool cá»§a Vercel dÃ¹ng AI sinh UI components. Báº¡n mÃ´ táº£ component báº±ng text, AI sinh ra code React vá»›i Tailwind CSS.',
          '<strong>CÃ¡ch dÃ¹ng:</strong><br>1. VÃ o v0.dev, Ä‘Äƒng nháº­p (miá»…n phÃ­)<br>2. GÃµ mÃ´ táº£ component: "A pricing card with 3 tiers, highlighted middle tier"<br>3. AI sinh ra code, báº¡n copy vÃ o project',
          '<strong>Khi nÃ o dÃ¹ng:</strong> Khi cáº§n component cá»¥ thá»ƒ (pricing table, hero section, navbar) vÃ  muá»‘n cÃ³ base code Ä‘á»ƒ customize.',
          '<strong>Háº¡n cháº¿:</strong> ÄÃ´i khi code chÆ°a tá»‘i Æ°u, cáº§n AI khÃ¡c review vÃ  sá»­a.'
        ],
        insight: 'âœ³ v0.dev tá»‘t cho "láº¥y Ã½ tÆ°á»Ÿng" â€” sinh nhiá»u variants, chá»n cÃ¡i gáº§n nháº¥t, rá»“i dÃ¹ng Cursor refine.'
      },
      {
        id: '6.2',
        title: 'Bolt.new â€” táº¡o app nhanh tá»« prompt',
        eyebrow: 'Bolt.new',
        desc: 'StackBlitz AI sinh entire app â€” dÃ¹ng khi nÃ o thay Cursor.',
        contentType: 'text',
        paragraphs: [
          'Bolt.new lÃ  tool cá»§a StackBlitz dÃ¹ng AI táº¡o entire application. KhÃ¡c vá»›i Cursor (code editor), Bolt.new lÃ  "cloud IDE" â€” cháº¡y trÃªn trÃ¬nh duyá»‡t, khÃ´ng cáº§n cÃ i gÃ¬.',
          '<strong>CÃ¡ch dÃ¹ng:</strong><br>1. VÃ o bolt.new<br>2. GÃµ prompt mÃ´ táº£ app muá»‘n táº¡o<br>3. AI táº¡o app hoÃ n chá»‰nh, cÃ³ thá»ƒ preview ngay<br>4. Export code vá» mÃ¡y hoáº·c push lÃªn GitHub'
        ],
        paragraphs_extra: [
          '<strong>Khi nÃ o dÃ¹ng Bolt thay Cursor:</strong><br>â€¢ Cáº§n prototype nhanh, khÃ´ng muá»‘n setup local<br>â€¢ Muá»‘n share link cho ngÆ°á»i khÃ¡c xem ngay<br>â€¢ Cáº§n AI handle deployment luÃ´n'
        ],
        insight: 'âœ³ Bolt.new tá»‘t cho POC (proof of concept). Khi concept thÃ nh cÃ´ng, chuyá»ƒn code sang Cursor Ä‘á»ƒ develop tiáº¿p.'
      },
      {
        id: '6.3',
        title: 'Vercel â€” deploy miá»…n phÃ­, káº¿t ná»‘i GitHub, domain tá»± Ä‘á»™ng',
        eyebrow: 'Vercel',
        desc: 'Hosting platform miá»…n phÃ­ cho Next.js vÃ  Vite â€” káº¿t ná»‘i GitHub Ä‘á»ƒ deploy tá»± Ä‘á»™ng.',
        contentType: 'text',
        paragraphs: [
          'Vercel lÃ  ná»n táº£ng hosting tá»‘t nháº¥t cho Next.js vÃ  Vite apps. Miá»…n phÃ­ cho personal projects, auto-deploy khi push code lÃªn GitHub.',
          '<strong>CÃ¡ch deploy láº§n Ä‘áº§u:</strong><br>1. ÄÄƒng kÃ½ vercel.com báº±ng GitHub<br>2. Click "Import Project"<br>3. Chá»n repo tá»« GitHub<br>4. Vercel tá»± nháº­n framework (Next.js/Vite)<br>5. Click Deploy â†’ cÃ³ link ngay!'
        ],
        paragraphs_extra: [
          '<strong>TÃ­nh nÄƒng hay:</strong><br>â€¢ Auto-deploy khi push lÃªn main branch<br>â€¢ Preview URL cho má»—i PR<br>â€¢ Built-in analytics<br>â€¢ Custom domain miá»…n phÃ­'
        ],
        insight: 'âœ³ Vercel + GitHub = deploy tá»± Ä‘á»™ng. Má»—i láº§n push code, website tá»± cáº­p nháº­t. KhÃ´ng cáº§n lÃ m gÃ¬ thÃªm.'
      },
      {
        id: '6.4',
        title: 'Shadcn/ui â€” thÆ° viá»‡n component copy-paste',
        eyebrow: 'Shadcn/ui',
        desc: 'Component library copy-paste â€” khÃ´ng pháº£i npm package.',
        contentType: 'text',
        paragraphs: [
          'Shadcn/ui khÃ´ng pháº£i "thÆ° viá»‡n" theo nghÄ©a truyá»n thá»‘ng (cÃ i qua npm). ÄÃ¢y lÃ  collection components báº¡n COPY vÃ o project â€” sá»Ÿ há»¯u code hoÃ n toÃ n, cÃ³ thá»ƒ customize tÃ¹y Ã½.',
          '<strong>CÃ¡ch cÃ i:</strong><br><code>npx shadcn@latest init</code> â€” init config<br><code>npx shadcn@latest add button</code> â€” thÃªm component Button vÃ o project',
          '<strong>Components cÃ³ sáºµn:</strong> Button, Card, Dialog, Dropdown, Form, Input, Table, Tabs, Avatar, Calendar...',
          '<strong>Æ¯u Ä‘iá»ƒm:</strong> Code thuá»™c vá» báº¡n, customize thoáº£i mÃ¡i, khÃ´ng cÃ³ "version lock", accessible by default (ARIA compliant).'
        ],
        insight: 'âœ³ Shadcn/ui lÃ  "component as code" â€” báº¡n copy Ä‘á»ƒ hiá»ƒu, customize theo nhu cáº§u. KhÃ´ng pháº£i library báº¡n import vÃ  dÃ¹ng blind.'
      },
      {
        id: '6.5',
        title: '21st.dev & MagicPatterns â€” láº¥y component Ä‘áº¹p sáºµn',
        eyebrow: '21st.dev & MagicPatterns',
        desc: 'UI component marketplace â€” tÃ¬m component Ä‘áº¹p, ghÃ©p vÃ o project.',
        contentType: 'grid',
        gridItems: [
          { label: '21st.dev', title: 'Tailwind component library', desc: 'TÃ¬m component free/paid, copy code, dÃ¹ng trong Cursor.' },
          { label: 'MagicPatterns', title: 'UI pattern generator', desc: 'Sinh patterns (backgrounds, borders, grids) báº±ng AI.' },
          { label: 'ui.shadcn.com', title: 'Shadcn components gallery', desc: 'Xem trÆ°á»›c táº¥t cáº£ shadcn components.' },
          { label: 'Tailwind CSS', title: 'Official showcase', desc: 'Examples tá»« Tailwind team.' }
        ],
        paragraphs: [
          'CÃ¡c nguá»“n nÃ y cung cáº¥p "inspiration" vÃ  "starting point" â€” khÃ´ng thay tháº¿ viá»‡c hiá»ƒu code vÃ  customize cho phÃ¹ há»£p.'
        ],
        insight: 'âœ³ DÃ¹ng Ä‘á»ƒ "láº¥y Ã½ tÆ°á»Ÿng" vÃ  "báº¯t Ä‘áº§u nhanh". Äá»«ng copy blind â€” Ä‘á»c code, hiá»ƒu cÃ¡ch nÃ³ hoáº¡t Ä‘á»™ng.'
      },
      {
        id: '6.6',
        title: 'DÃ¹ng tool nÃ o cho viá»‡c gÃ¬ â€” báº£ng quyáº¿t Ä‘á»‹nh nhanh',
        eyebrow: 'So sÃ¡nh',
        desc: 'Tool nÃ o cho task nÃ o â€” summary nhanh Ä‘á»ƒ khÃ´ng phÃ¢n vÃ¢n.',
        contentType: 'compare',
        compareHeaders: ['Báº¡n cáº§n...', 'DÃ¹ng tool...'],
        compareRows: [
          ['Táº¡o component cá»¥ thá»ƒ', 'v0.dev, Shadcn/ui'],
          ['Prototype nhanh entire app', 'Bolt.new'],
          ['Host vÃ  deploy website', 'Vercel'],
          ['Code trong Cursor', 'Cursor Composer'],
          ['LÃ m nhiá»u thá»© tá»± Ä‘á»™ng', 'Claude Code'],
          ['TÃ¬m component Ä‘áº¹p sáºµn', '21st.dev, MagicPatterns']
        ],
        insight: 'âœ³ Tool khÃ´ng quan trá»ng báº±ng outcome. DÃ¹ng tool nÃ o cÅ©ng Ä‘Æ°á»£c â€” miá»…n lÃ  ra Ä‘Æ°á»£c sáº£n pháº©m báº¡n muá»‘n.'
      }
    ]
  },

  // ========== BÃ€I 07 ==========
  {
    id: 7,
    slug: 'cach-prompt-cho-ai',
    badge: 'PROMPT',
    badgeType: 'dark',
    duration: '~35 phÃºt',
    subLessonCount: 6,
    title: 'CÃ¡ch prompt cho AI hiá»ƒu Ä‘á»ƒ code Ä‘Ãºng Ã½ báº¡n',
    titleEm: 'prompt hiá»‡u quáº£',
    desc: 'Lá»—i thÆ°á»ng Ä‘áº¿n tá»« prompt, khÃ´ng pháº£i tá»« AI. Cáº¥u trÃºc prompt tá»‘t = code Ä‘Ãºng hÆ¡n.',
    tags: ['prompt', 'Cursor AI', 'Claude Code', 'template'],
    difficulty: 'Prompt Â· thá»±c hÃ nh',
    prevLesson: { id: 6, title: 'CÃ´ng cá»¥ & website há»¯u Ã­ch' },
    nextLesson: { id: 8, title: 'Khi AI code sai' },
    subLessons: [
      {
        id: '7.1',
        title: 'Lá»—i thÆ°á»ng Ä‘áº¿n tá»« prompt, khÃ´ng pháº£i tá»« AI',
        eyebrow: 'Táº¡i sao AI code sai',
        desc: '80% "AI code sai" thá»±c ra lÃ  prompt khÃ´ng rÃµ rÃ ng.',
        contentType: 'text',
        paragraphs: [
          'Khi AI sinh code khÃ´ng Ä‘Ãºng Ã½, pháº£n xáº¡ Ä‘áº§u tiÃªn thÆ°á»ng lÃ  "AI ngu". NhÆ°ng thá»±c táº¿: AI ráº¥t thÃ´ng minh, váº¥n Ä‘á» lÃ  prompt cá»§a báº¡n chÆ°a Ä‘á»§ rÃµ.',
          '<strong>CÃ¡c lá»—i prompt phá»• biáº¿n:</strong><br>â€¢ MÃ´ táº£ chung chung: "lÃ m cÃ¡i button Ä‘áº¹p" (Ä‘áº¹p lÃ  gÃ¬?)<br>â€¢ Thiáº¿u context: khÃ´ng cho biáº¿t project Ä‘ang dÃ¹ng framework gÃ¬<br>â€¢ QuÃªn rÃ ng buá»™c: khÃ´ng nÃ³i kÃ­ch thÆ°á»›c, mÃ u sáº¯c, responsive<br>â€¢ Prompt quÃ¡ dÃ i: thay vÃ¬ nhiá»u task nhá», gá»™p thÃ nh 1 prompt dÃ i'
        ],
        insight: 'âœ³ TrÆ°á»›c khi nÃ³i "AI sai", hÃ£y Ä‘á»c láº¡i prompt cá»§a báº¡n. Báº¡n Ä‘Ã£ mÃ´ táº£ Ä‘á»§ rÃµ chÆ°a? CÃ³ thiáº¿u thÃ´ng tin gÃ¬ khÃ´ng?'
      },
      {
        id: '7.2',
        title: 'Cáº¥u trÃºc prompt tá»‘t â€” Context + YÃªu cáº§u + RÃ ng buá»™c',
        eyebrow: 'Cáº¥u trÃºc prompt tá»‘t',
        desc: 'CÃ´ng thá»©c 3 pháº§n: cho AI biáº¿t bá»‘i cáº£nh, cáº§n lÃ m gÃ¬, vÃ  giá»›i háº¡n ra sao.',
        contentType: 'text',
        paragraphs: [
          '<strong>1. Context (Bá»‘i cáº£nh):</strong> Cho AI biáº¿t project cá»§a báº¡n dÃ¹ng gÃ¬.<br>VÃ­ dá»¥: "Dá»± Ã¡n Next.js 14 vá»›i Tailwind CSS. Component nÃ y náº±m trong folder app/"',
          '<strong>2. YÃªu cáº§u (Request):</strong> MÃ´ táº£ chÃ­nh xÃ¡c báº¡n muá»‘n gÃ¬.<br>VÃ­ dá»¥: "Táº¡o má»™t Button component vá»›i 3 variants: primary (bg accent), secondary (border), ghost (transparent)"',
          '<strong>3. RÃ ng buá»™c (Constraints):</strong> Giá»›i háº¡n hoáº·c yÃªu cáº§u Ä‘áº·c biá»‡t.<br>VÃ­ dá»¥: "KhÃ´ng dÃ¹ng border-radius. Font: DM Sans. Responsive trÃªn mobile."'
        ],
        insight: 'âœ³ Prompt cÃ ng rÃµ â†’ AI hiá»ƒu cÃ ng Ä‘Ãºng â†’ code cÃ ng gáº§n Ã½ báº¡n. Äá»«ng tiáº¿t kiá»‡m chá»¯ â€” mÃ´ táº£ dÆ° hÆ¡n thiáº¿u.'
      },
      {
        id: '7.3',
        title: 'CÃ¡ch mÃ´ táº£ giao diá»‡n cho AI khÃ´ng bá»‹ hiá»ƒu nháº§m',
        eyebrow: 'MÃ´ táº£ UI',
        desc: 'DÃ¹ng tá»« ngá»¯ cá»¥ thá»ƒ thay vÃ¬ mÆ¡ há»“. "Äáº¹p" khÃ´ng cÃ³ nghÄ©a vá»›i AI.',
        contentType: 'text',
        paragraphs: [
          'AI khÃ´ng cÃ³ "máº¯t tháº©m má»¹" â€” nÃ³ hiá»ƒu theo tá»«ng tá»«. Khi báº¡n nÃ³i "lÃ m button Ä‘áº¹p", AI khÃ´ng biáº¿t "Ä‘áº¹p" lÃ  gÃ¬.',
          '<strong>MÃ´ táº£ Cá»¤ THá»‚ thay vÃ¬ MÆ  Há»’:</strong><br>â€¢ Sai: "lÃ m button Ä‘áº¹p"<br>â€¢ ÄÃºng: "button vá»›i bg #B6F500, chá»¯ Ä‘en, font mono 12px, padding 12px 24px"',
          '<strong>Äoáº¡n nÃ y ráº¥t quan trá»ng vÃ¬:</strong> Náº¿u báº¡n khÃ´ng nÃ³i rÃµ, AI sáº½ tá»± quyáº¿t Ä‘á»‹nh theo "default" cá»§a nÃ³ â€” cÃ³ thá»ƒ khÃ´ng pháº£i thá»© báº¡n muá»‘n.'
        ],
        paragraphs_extra: [
          '<strong>Tip:</strong> Khi mÃ´ táº£ layout, dÃ¹ng tá»« ngá»¯ vá»‹ trÃ­: "2 columns", "left sidebar", "hero full-width", "footer cÃ¡ch bottom 0".'
        ],
        insight: 'âœ³ Treat AI nhÆ° má»™t developer má»›i â€” báº¡n cáº§n hÆ°á»›ng dáº«n tá»«ng bÆ°á»›c, khÃ´ng thá»ƒ nÃ³i "cáº­u tá»± hiá»ƒu Ã½ tÃ´i".'
      },
      {
        id: '7.4',
        title: 'DÃ¹ng prompt cÃ³ sáºµn â€” Ä‘á»«ng tá»± viáº¿t tá»« Ä‘áº§u',
        eyebrow: 'Prompt Library',
        desc: 'Cá»™ng Ä‘á»“ng Ä‘Ã£ viáº¿t ráº¥t nhiá»u prompt tá»‘t â€” há»c tá»« há» vÃ  customize.',
        contentType: 'grid',
        gridItems: [
          { label: 'Cursor Rules', title: 'Prompt files cho project', desc: 'LÆ°u trong .cursor/rules/ â€” apply cho má»i conversation.' },
          { label: 'CLAUDE.md', title: 'Project-wide instructions', desc: 'HÆ°á»›ng dáº«n AI hiá»ƒu tech stack, style, conventions cá»§a project.' },
          { label: 'PromptViet', title: 'Vietnamese prompt templates', desc: 'Template prompt tiáº¿ng Viá»‡t cho cÃ¡c task phá»• biáº¿n.' },
          { label: 'Awesome Cursor', title: 'Cursor rules collection', desc: 'GitHub repo tá»•ng há»£p rules cá»™ng Ä‘á»“ng.' }
        ],
        paragraphs: [
          'Äá»«ng tá»± viáº¿t prompt tá»« Ä‘áº§u khi Ä‘Ã£ cÃ³ prompt tá»‘t cho use case tÆ°Æ¡ng tá»±. Copy â†’ paste â†’ customize cho phÃ¹ há»£p.'
        ],
        insight: 'âœ³ PromptViet vÃ  Awesome Cursor lÃ  2 nguá»“n báº¯t Ä‘áº§u tá»‘t. TÃ¬m prompt gáº§n nháº¥t vá»›i task cá»§a báº¡n, rá»“i modify.'
      },
      {
        id: '7.5',
        title: 'Prompt theo tá»«ng tÃ¬nh huá»‘ng â€” thÃªm, sá»­a, refactor',
        eyebrow: 'Prompt theo tÃ¬nh huá»‘ng',
        desc: 'Má»—i loáº¡i task (thÃªm tÃ­nh nÄƒng, sá»­a UI, refactor) cáº§n cÃ¡ch prompt khÃ¡c nhau.',
        contentType: 'text',
        paragraphs: [
          '<strong>1. ThÃªm tÃ­nh nÄƒng má»›i:</strong><br>"ThÃªm feature X vÃ o component Y. Feature gá»“m: [mÃ´ táº£]. Design: [link hoáº·c mÃ´ táº£]. Tech: [framework]. KhÃ´ng thay Ä‘á»•i code hiá»‡n cÃ³."',
          '<strong>2. Sá»­a giao diá»‡n:</strong><br>"Sá»­a component X: [thá»© cáº§n sá»­a]. Tá»«: [current]. ThÃ nh: [desired]. Giá»¯ nguyÃªn logic, chá»‰ sá»­a UI."',
          '<strong>3. Refactor code:</strong><br>"Refactor component X: cáº£i thiá»‡n [readability/performance/maintainability]. Giá»¯ nguyÃªn functionality."',
          '<strong>4. Debug lá»—i:</strong><br>"CÃ³ lá»—i á»Ÿ [location]. Lá»—i: [mÃ´ táº£/error message]. Mong Ä‘á»£i: [behavior]. Thá»±c táº¿: [bug]."'
        ],
        insight: 'âœ³ Prompt cho debug cáº§n rÃµ: location + error message + expected vs actual. 3 thá»© Ä‘Ã³ giÃºp AI trace bug nhanh hÆ¡n.'
      },
      {
        id: '7.6',
        title: '15 prompt hay dÃ¹ng nháº¥t â€” láº¥y vá» xÃ i liá»n',
        eyebrow: 'Copy & Ä‘iá»u chá»‰nh',
        desc: 'Danh sÃ¡ch 15 prompt templates cho cÃ¡c task thÆ°á»ng gáº·p.',
        contentType: 'grid',
        gridItems: [
          { label: '1', title: 'Táº¡o component má»›i', desc: '"Create [component] with [features]. Use [styling]. No border-radius."' },
          { label: '2', title: 'ThÃªm responsive', desc: '"Add responsive breakpoints for mobile/tablet/desktop."' },
          { label: '3', title: 'Fix bug', desc: '"Fix [issue] in [file]. Error: [message]."' },
          { label: '4', title: 'Sá»­a UI', desc: '"Change [element] from [current] to [desired]."' },
          { label: '5', title: 'Táº¡o layout', desc: '"Create layout with [structure]. Use CSS Grid/Flexbox."' },
          { label: '6', title: 'Add animation', desc: '"Add [type] animation to [element]. Duration: [time]."' },
          { label: '7', title: 'Extract component', desc: '"Extract [section] into a reusable component."' },
          { label: '8', title: 'Add dark mode', desc: '"Add dark mode toggle. Colors: [light] / [dark]."' }
        ],
        insight: 'âœ³ Copy nhá»¯ng prompt nÃ y, customize cho phÃ¹ há»£p vá»›i project cá»§a báº¡n. CÃ ng dÃ¹ng nhiá»u, báº¡n cÃ ng táº¡o Ä‘Æ°á»£c "personal prompt library".'
      }
    ]
  },

  // ========== BÃ€I 08 ==========
  {
    id: 8,
    slug: 'khi-ai-code-sai',
    badge: 'DEBUG',
    badgeType: 'dark',
    duration: '~30 phÃºt',
    subLessonCount: 6,
    title: 'Khi AI code sai â€” cÃ¡ch Ä‘á»c lá»—i & prompt vÃ¡ lá»—i',
    titleEm: 'Ä‘á»c lá»—i & vÃ¡ lá»—i',
    desc: 'Lá»—i lÃ  bÃ¬nh thÆ°á»ng. Biáº¿t Ä‘á»c error message vÃ  prompt cho AI fix lÃ  ká»¹ nÄƒng quan trá»ng.',
    tags: ['debug', 'lá»—i', 'error', 'fix', 'undo'],
    difficulty: 'Debug Â· thá»±c hÃ nh',
    prevLesson: { id: 7, title: 'CÃ¡ch prompt cho AI' },
    nextLesson: { id: 9, title: 'Táº¡o Skills & Workflow' },
    subLessons: [
      {
        id: '8.1',
        title: 'Äá»«ng hoáº£ng â€” phÃ¢n biá»‡t lá»—i nhá» vs lá»—i cáº§n undo',
        eyebrow: 'Äá»«ng hoáº£ng',
        desc: 'Lá»—i nhá» sá»­a Ä‘Æ°á»£c. Lá»—i lá»›n cáº§n git reset. Biáº¿t phÃ¢n biá»‡t Ä‘á»ƒ khÃ´ng waste time.',
        contentType: 'text',
        paragraphs: [
          'Khi tháº¥y mÃ n hÃ¬nh Ä‘á» Ä‘áº§y lá»—i, bÆ°á»›c Ä‘áº§u tiÃªn: <strong>BÃŒNH TÄ¨NH</strong>. Háº§u háº¿t lá»—i Ä‘á»u sá»­a Ä‘Æ°á»£c â€” khÃ´ng cÃ³ "lá»—i khÃ´ng sá»­a Ä‘Æ°á»£c", chá»‰ cÃ³ "chÆ°a biáº¿t cÃ¡ch sá»­a".',
          '<strong>PhÃ¢n loáº¡i lá»—i:</strong><br>â€¢ <strong>Lá»—i nhá»</strong>: Typo, thiáº¿u import, sai tÃªn biáº¿n. AI tá»± fix Ä‘Æ°á»£c.<br>â€¢ <strong>Lá»—i vá»«a</strong>: Logic sai, import lá»—i, dependency conflict. Cáº§n chá»‰nh tay hoáº·c prompt AI.<br>â€¢ <strong>Lá»—i lá»›n</strong>: AI generate lung tung, code khÃ´ng cháº¡y Ä‘Æ°á»£c. Cáº§n undo.'
        ],
        paragraphs_extra: [
          '<strong>Máº¹o:</strong> Náº¿u commit trÆ°á»›c khi cÃ³ lá»—i, báº¡n luÃ´n cÃ³ thá»ƒ quay láº¡i. ÄÃ¢y lÃ  lÃ½ do cáº§n commit thÆ°á»ng xuyÃªn.'
        ],
        insight: 'âœ³ "It\'s just a bug, not a feature" â€” má»i lá»—i Ä‘á»u cÃ³ nguyÃªn nhÃ¢n vÃ  Ä‘á»u sá»­a Ä‘Æ°á»£c. Thá»Ÿ sÃ¢u, Ä‘á»c lá»—i, prompt AI.'
      },
      {
        id: '8.2',
        title: 'TÃ¬m dÃ²ng quan trá»ng trong Ä‘á»‘ng chá»¯ Ä‘á»',
        eyebrow: 'Äá»c error message',
        desc: 'Error message cÃ³ pattern â€” há»c cÃ¡ch Ä‘á»c nhanh Ä‘á»ƒ tÃ¬m nguyÃªn nhÃ¢n.',
        contentType: 'text',
        paragraphs: [
          'Error message thÆ°á»ng cÃ³ cáº¥u trÃºc: <strong>Error Type â†’ Location â†’ Message â†’ Suggestion</strong>.',
          '<strong>CÃ¡ch Ä‘á»c nhanh:</strong><br>1. Äá»c dÃ²ng Ä‘áº§u tiÃªn â€” Ä‘Ã³ lÃ  "tÃªn" lá»—i (SyntaxError, TypeError, ReferenceError...)<br>2. TÃ¬m dÃ²ng cÃ³ Ä‘Æ°á»ng dáº«n file (src/components/Button.tsx:15)<br>3. Äá»c pháº§n mÃ´ táº£ â€” giáº£i thÃ­ch lá»—i gÃ¬<br>4. Bá» qua stack trace (danh sÃ¡ch call chain) trá»« khi cáº§n debug sÃ¢u'
        ],
        paragraphs_extra: [
          '<strong>Lá»—i hay gáº·p nháº¥t:</strong><br>â€¢ <code>Cannot find module</code>: Thiáº¿u cÃ i package hoáº·c sai import path<br>â€¢ <code>is not a function</code>: Gá»i sai method hoáº·c import sai<br>â€¢ <code>Unexpected token</code>: Syntax error â€” thiáº¿u }, ), ;'
        ],
        insight: 'âœ³ Khi khÃ´ng hiá»ƒu lá»—i: copy toÃ n bá»™ error â†’ paste cho Claude/Cursor â†’ "Explain this error and how to fix."'
      },
      {
        id: '8.3',
        title: 'Module not found, port in use, build fail â€” cÃ¡ch xá»­ lÃ½',
        eyebrow: 'Lá»—i phá»• biáº¿n',
        desc: '5 lá»—i hay gáº·p nháº¥t khi vibecode â€” nguyÃªn nhÃ¢n vÃ  cÃ¡ch fix.',
        contentType: 'grid',
        gridItems: [
          { label: 'Cannot find module', title: 'Thiáº¿u import/package', desc: 'Cháº¡y npm install. Hoáº·c kiá»ƒm tra import path Ä‘Ãºng khÃ´ng.' },
          { label: 'Port 3000 is in use', title: 'Port bá»‹ chiáº¿m', desc: 'Cháº¡y lá»‡nh kill port: npx kill-port 3000 hoáº·c dÃ¹ng port khÃ¡c.' },
          { label: 'Build failed', title: 'Build lá»—i', desc: 'Äá»c error trong terminal, thÆ°á»ng lÃ  syntax error hoáº·c type error.' },
          { label: 'Hydration error', title: 'SSR mismatch', desc: 'Code client/server khÃ´ng khá»›p. ThÆ°á»ng do random values hoáº·c Date.' },
          { label: 'CORS error', title: 'Cross-origin blocked', desc: 'API khÃ´ng cho phÃ©p request tá»« origin khÃ¡c. ThÃªm proxy hoáº·c header.' }
        ],
        insight: 'âœ³ Google search error message luÃ´n lÃ  bÆ°á»›c Ä‘áº§u tiÃªn khi khÃ´ng biáº¿t lá»—i gÃ¬. Copy paste nguyÃªn dÃ²ng lá»—i + tÃªn framework.'
      },
      {
        id: '8.4',
        title: 'CÃ¡ch paste lá»—i cho AI fix â€” Ä‘Ãºng cÃ¡ch',
        eyebrow: 'Prompt vÃ¡ lá»—i',
        desc: 'Paste error cho AI fix cÅ©ng cáº§n ká»¹ thuáº­t â€” khÃ´ng pháº£i cá»© copy-paste lÃ  xong.',
        contentType: 'text',
        paragraphs: [
          '<strong>CÃ¡ch Ä‘ÃšNG paste lá»—i:</strong><br>1. Copy full error message (khÃ´ng cáº¯t ngáº¯n)<br>2. Cho biáº¿t Ä‘ang á»Ÿ file nÃ o<br>3. MÃ´ táº£ mong Ä‘á»£i vs thá»±c táº¿<br>4. Gá»£i Ã½ hÆ°á»›ng fix (náº¿u cÃ³ Ã½)'
        ],
        paragraphs_extra: [
          '<strong>Prompt máº«u:</strong><br>"CÃ³ lá»—i khi cháº¡y npm run dev. Error: [paste full error]. File: src/pages/index.tsx. Mong Ä‘á»£i: hiá»ƒn thá»‹ homepage. Thá»±c táº¿: crash. ÄÃ£ thá»­: [cÃ¡ch báº¡n Ä‘Ã£ thá»­].'
        ],
        insight: 'âœ³ AI lÃ m viá»‡c tá»‘t hÆ¡n khi cÃ³ context. Error + file + expected vs actual = Ä‘á»§ info Ä‘á»ƒ debug.'
      },
      {
        id: '8.5',
        title: 'Khi nÃ o nÃªn undo, khi nÃ o há»i cá»™ng Ä‘á»“ng',
        eyebrow: 'Khi AI bÃ³ tay',
        desc: 'Biáº¿t giá»›i háº¡n cá»§a AI â€” khi nÃ o cáº§n human help.',
        contentType: 'text',
        paragraphs: [
          '<strong>Khi nÃ o nÃªn UNDO:</strong><br>â€¢ AI generate quÃ¡ nhiá»u file khÃ´ng cáº§n thiáº¿t<br>â€¢ AI lÃ m rá»‘i code hiá»‡n cÃ³<br>â€¢ KhÃ´ng biáº¿t code Ä‘ang á»Ÿ tráº¡ng thÃ¡i nÃ o<br>â€¢ Muá»‘n quay láº¡i phiÃªn báº£n Ä‘ang cháº¡y Ä‘Æ°á»£c'
        ],
        paragraphs_extra: [
          '<strong>Khi nÃ o há»i Cá»˜NG Äá»’NG:</strong><br>â€¢ Lá»—i hiáº¿m gáº·p, khÃ´ng tÃ¬m tháº¥y trÃªn Google<br>â€¢ Cáº§n architecture advice<br>â€¢ Lá»—i liÃªn quan Ä‘áº¿n specific library version<br>â€¢ Stuck quÃ¡ 30 phÃºt khÃ´ng resolve'
        ],
        insight: 'âœ³ Undo = Ctrl+Z hoáº·c git reset. KhÃ´ng cÃ³ gÃ¬ xáº¥u khi undo. "Fresh start" Ä‘Ã´i khi nhanh hÆ¡n fix lá»—i.'
      },
      {
        id: '8.6',
        title: 'DÃ¹ng git stash vÃ  git reset khi má»i thá»© vá»¡',
        eyebrow: 'Git cá»©u project',
        desc: 'Git commands Ä‘á»ƒ rollback vá» tráº¡ng thÃ¡i Ä‘ang cháº¡y Ä‘Æ°á»£c.',
        contentType: 'text',
        paragraphs: [
          '<strong>Git Reset (quay vá» commit trÆ°á»›c):</strong><br><code>git reset --hard HEAD~1</code> â€” quay vá» 1 commit trÆ°á»›c<br><code>git reset --hard [commit-hash]</code> â€” quay vá» commit cá»¥ thá»ƒ'
        ],
        paragraphs_extra: [
          '<strong>Git Stash (táº¡m lÆ°u thay Ä‘á»•i):</strong><br><code>git stash</code> â€” lÆ°u táº¡m thay Ä‘á»•i chÆ°a commit<br><code>git stash pop</code> â€” láº¥y láº¡i thay Ä‘á»•i Ä‘Ã£ stash'
        ],
        insight: 'âœ³ Commit thÆ°á»ng xuyÃªn = cÃ³ checkpoint Ä‘á»ƒ quay vá». KhÃ´ng commit = khÃ´ng cÃ³ gÃ¬ Ä‘á»ƒ reset. Commit = Báº®T BUá»˜C.'
      }
    ]
  },

  // ========== BÃ€I 09 ==========
  {
    id: 9,
    slug: 'tao-skills-va-workflow',
    badge: 'WORKFLOW',
    badgeType: 'dark',
    duration: '~45 phÃºt',
    subLessonCount: 5,
    title: 'Táº¡o Skills & Workflow cÃ¡ nhÃ¢n â€” cá»™ng Ä‘á»“ng Ä‘ang share gÃ¬ nhiá»u nháº¥t?',
    titleEm: 'Skills & Workflow cÃ¡ nhÃ¢n',
    desc: 'Cursor Rules, CLAUDE.md, MCP â€” cÃ¡ch táº¡o "hÆ°á»›ng dáº«n sá»­ dá»¥ng" cho AI hiá»ƒu project cá»§a báº¡n.',
    tags: ['Cursor Rules', 'CLAUDE.md', 'MCP', 'workflow', 'community'],
    difficulty: 'NÃ¢ng cao Â· workflow',
    prevLesson: { id: 8, title: 'Khi AI code sai' },
    nextLesson: { id: 10, title: 'Deploy + Tracking' },
    subLessons: [
      {
        id: '9.1',
        title: 'Cursor Rules â€” lÃ  gÃ¬, viáº¿t rule Ä‘áº§u tiÃªn',
        eyebrow: 'Cursor Rules',
        desc: 'Rules lÃ  file hÆ°á»›ng dáº«n AI hoáº¡t Ä‘á»™ng Ä‘Ãºng cÃ¡ch trong project cá»§a báº¡n.',
        contentType: 'text',
        paragraphs: [
          'Cursor Rules lÃ  files trong folder <code>.cursor/rules/</code> chá»©a instructions cho AI. Khi báº¡n báº¯t Ä‘áº§u chat má»›i, AI Ä‘á»c rules trÆ°á»›c â€” hiá»ƒu context, style, constraints cá»§a project.',
          '<strong>CÃ¡ch táº¡o rule Ä‘áº§u tiÃªn:</strong><br>1. Táº¡o folder <code>.cursor/rules/</code> trong project root<br>2. Táº¡o file <code>my-project.mdc</code><br>3. Viáº¿t instructions: tech stack, coding style, conventions, dos and donts'
        ],
        paragraphs_extra: [
          '<strong>Rule template cÆ¡ báº£n:</strong><br>---<br># Project Name<br>## Tech Stack<br>Next.js 14, TypeScript, Tailwind CSS<br>## Style<br>Font: DM Sans. Colors: neutral tones. No border-radius.<br>## Conventions<br>Components go in src/components/. Name: PascalCase.'
        ],
        insight: 'âœ³ Rules giÃºp AI "nhá»›" project â€” khÃ´ng cáº§n láº·p láº¡i context má»—i conversation. CÃ ng chi tiáº¿t, AI cÃ ng Ä‘Ãºng.'
      },
      {
        id: '9.2',
        title: 'CLAUDE.md â€” file hÆ°á»›ng dáº«n AI viáº¿t Ä‘Ãºng style',
        eyebrow: 'CLAUDE.md',
        desc: 'CLAUDE.md lÃ  project-level instructions â€” dÃ¹ng cho Claude Code vÃ  cÃ¡c AI tools khÃ¡c.',
        contentType: 'text',
        paragraphs: [
          'CLAUDE.md Ä‘áº·t á»Ÿ project root, chá»©a high-level instructions vá» project: má»¥c Ä‘Ã­ch, tech stack, cÃ¡ch lÃ m viá»‡c, conventions, guidelines.',
          '<strong>Ná»™i dung nÃªn cÃ³:</strong><br>â€¢ Project overview vÃ  má»¥c tiÃªu<br>â€¢ Tech stack (framework, styling, libraries)<br>â€¢ Project structure<br>â€¢ Design system (colors, fonts, spacing)<br>â€¢ Coding conventions<br>â€¢ Common workflows'
        ],
        paragraphs_extra: [
          '<strong>Example CLAUDE.md:</strong><br># My Project\n## Overview\nLanding page builder cho Marketer\n## Tech Stack\nNext.js 14, TypeScript, Tailwind CSS v4\n## Design\n- Font: Instrument Serif (headings), DM Sans (body)\n- Colors: bg #f7f5f0, accent #B6F500\n- No border-radius, no box-shadow'
        ],
        insight: 'âœ³ CLAUDE.md lÃ  "playbook" cho AI. Äá»c trÆ°á»›c khi báº¯t Ä‘áº§u project má»›i = AI hiá»ƒu bá»‘i cáº£nh ngay.'
      },
      {
        id: '9.3',
        title: 'MCP â€” káº¿t ná»‘i AI vá»›i Supabase, Vercel, Notion',
        eyebrow: 'MCP',
        desc: 'Model Context Protocol â€” cÃ¡ch AI truy cáº­p external tools trá»±c tiáº¿p.',
        contentType: 'text',
        paragraphs: [
          'MCP (Model Context Protocol) cho phÃ©p AI "dÃ¹ng" external tools nhÆ° thá»ƒ báº¡n Ä‘ang dÃ¹ng â€” query database, deploy, Ä‘á»c docs â€” mÃ  khÃ´ng cáº§n copy-paste.',
          '<strong>CÃ¡c MCP servers phá»• biáº¿n:</strong><br>â€¢ <strong>Supabase MCP</strong>: Query PostgreSQL, manage database<br>â€¢ <strong>Vercel MCP</strong>: Deploy, check analytics, manage projects<br>â€¢ <strong>Notion MCP</strong>: Äá»c/ghi Notion pages<br>â€¢ <strong>Filesystem MCP</strong>: Äá»c/ghi files trong project'
        ],
        paragraphs_extra: [
          '<strong>Setup MCP:</strong><br>1. CÃ i Cursor MCP hoáº·c Claude Code MCP<br>2. ThÃªm server config vÃ o settings<br>3. Connect vá»›i API keys<br>4. AI tá»± Ä‘á»™ng cÃ³ quyá»n dÃ¹ng tools'
        ],
        insight: 'âœ³ MCP = "AI cÃ³ thá»ƒ dÃ¹ng apps nhÆ° báº¡n". Giáº£m drudge work: AI tá»± query data, tá»± deploy, khÃ´ng cáº§n há»i.'
      },
      {
        id: '9.4',
        title: 'Tá»« Ã½ tÆ°á»Ÿng Ä‘áº¿n code hoÃ n chá»‰nh trong 1 buá»•i',
        eyebrow: 'Workflow thá»±c táº¿',
        desc: 'Workflow 8 bÆ°á»›c tá»« concept Ä‘áº¿n deployed website.',
        contentType: 'text',
        paragraphs: [
          '<strong>Workflow 8 bÆ°á»›c:</strong><br><strong>1. Concept</strong>: Viáº¿t mÃ´ táº£ Ã½ tÆ°á»Ÿng (1-2 Ä‘oáº¡n)<br><strong>2. Spec</strong>: DÃ¹ng AI lÃªn spec chi tiáº¿t (layout, features, design)<br><strong>3. Scaffold</strong>: Táº¡o project vá»›i Cursor Composer<br><strong>4. Core features</strong>: Build tá»«ng feature vá»›i AI support<br><strong>5. Polish</strong>: ThÃªm animations, responsive, edge cases<br><strong>6. Test</strong>: Manual test trÃªn localhost<br><strong>7. Deploy</strong>: Push GitHub â†’ Vercel auto-deploy<br><strong>8. Share</strong>: Gá»­i link cho stakeholders'
        ],
        insight: 'âœ³ 1 buá»•i (4-6 tiáº¿ng) = tá»« concept Ä‘áº¿n deployed. KhÃ´ng pháº£i má»i project Ä‘á»u fit, nhÆ°ng POC thÃ¬ hoÃ n toÃ n Ä‘Æ°á»£c.'
      },
      {
        id: '9.5',
        title: 'Cursor Rules & CLAUDE.md cá»™ng Ä‘á»“ng Ä‘ang share',
        eyebrow: 'Community picks',
        desc: 'Nguá»“n tham kháº£o tá»‘t nháº¥t tá»« cá»™ng Ä‘á»“ng â€” khÃ´ng cáº§n tá»± viáº¿t tá»« Ä‘áº§u.',
        contentType: 'grid',
        gridItems: [
          { label: 'Cursor Rules', title: 'Awesome Cursor Rules', desc: 'GitHub repo tá»•ng há»£p rules cá»™ng Ä‘á»“ng. Search theo framework.' },
          { label: 'CLAUDE.md', title: 'CLAUDE.md collection', desc: 'Examples tá»« nhiá»u projects thá»±c táº¿.' },
          { label: 'Twitter', title: '#vibecode hashtag', desc: 'Marketer/developers share workflow vÃ  rules cá»§a há».' },
          { label: 'Reddit', title: 'r/vibecode, r/cursor', desc: 'Discussions vá» best practices vÃ  tips.' }
        ],
        insight: 'âœ³ Báº¯t Ä‘áº§u tá»« examples â†’ customize cho phÃ¹ há»£p â†’ refine theo thá»i gian. KhÃ´ng cáº§n perfect tá»« Ä‘áº§u.'
      }
    ]
  },

  // ========== BÃ€I 10 ==========
  {
    id: 10,
    slug: 'deploy-va-tracking',
    badge: 'DEPLOY',
    badgeType: 'dark',
    duration: '~50 phÃºt',
    subLessonCount: 5,
    title: 'Deploy + gáº¯n PostHog & Google Search Console',
    titleEm: 'Deploy + Tracking',
    desc: 'Tá»« localhost Ä‘áº¿n live website â€” Vercel, domain, PostHog analytics, Search Console SEO.',
    tags: ['Vercel', 'GitHub', 'PostHog', 'Google Search Console', 'domain'],
    difficulty: 'Deploy Â· hoÃ n thiá»‡n',
    badgeExtra: 'ÄÃCH Äáº¾N',
    badgeExtraType: 'green' as const,
    prevLesson: { id: 9, title: 'Táº¡o Skills & Workflow' },
    nextLesson: null,
    subLessons: [
      {
        id: '10.1',
        title: 'Tá»«ng bÆ°á»›c deploy láº§n Ä‘áº§u â€” tá»« terminal Ä‘áº¿n link live',
        eyebrow: 'Deploy Vercel',
        desc: 'Deploy Next.js app lÃªn Vercel â€” tá»« chÆ°a cÃ³ gÃ¬ Ä‘áº¿n cÃ³ link public.',
        contentType: 'text',
        paragraphs: [
          '<strong>Deploy láº§n Ä‘áº§u vá»›i Vercel CLI:</strong><br>1. <code>npm i -g vercel</code> â€” cÃ i Vercel CLI<br>2. <code>vercel</code> trong project folder<br>3. Login/Connect GitHub account<br>4. Chá»n project settings (framework: Next.js)<br>5. Deploy! â†’ nháº­n URL'
        ],
        paragraphs_extra: [
          '<strong>Deploy qua GitHub (recommended):</strong><br>1. Push code lÃªn GitHub repo<br>2. Import repo trong Vercel dashboard<br>3. Vercel tá»± detect framework<br>4. Click Deploy â†’ done'
        ],
        insight: 'âœ³ Vercel + GitHub = auto-deploy. Má»—i push lÃªn main = website tá»± update. KhÃ´ng cáº§n lÃ m gÃ¬ sau láº§n Ä‘áº§u.'
      },
      {
        id: '10.2',
        title: 'Káº¿t ná»‘i domain riÃªng vÃ o Vercel â€” máº¥t 5 phÃºt',
        eyebrow: 'Gáº¯n domain',
        desc: 'Mua domain vÃ  gáº¯n vÃ o Vercel â€” website cÃ³ URL chuyÃªn nghiá»‡p.',
        contentType: 'text',
        paragraphs: [
          '<strong>Mua domain:</strong> Namecheap, GoDaddy, hoáº·c Máº¯t BÃ£o (.vn). GiÃ¡ domain .com ~$10/nÄƒm.',
          '<strong>Gáº¯n vÃ o Vercel:</strong><br>1. Vercel Dashboard â†’ Project â†’ Settings â†’ Domains<br>2. Nháº­p domain (vÃ­ dá»¥: mysite.com)<br>3. Vercel cung cáº¥p DNS records<br>4. ThÃªm records vÃ o domain provider (thÆ°á»ng lÃ  A record hoáº·c CNAME)<br>5. Verify â†’ done!'
        ],
        paragraphs_extra: [
          '<strong>Äá»£i DNS propagate:</strong> CÃ³ thá»ƒ máº¥t 24-48 giá» Ä‘á»ƒ DNS thay Ä‘á»•i cÃ³ hiá»‡u lá»±c toÃ n cáº§u. ThÆ°á»ng chá»‰ 5-30 phÃºt.'
        ],
        insight: 'âœ³ Domain riÃªng = professional. Thay vÃ¬ vercel.app link, báº¡n cÃ³ mysite.com. ÄÃ¡ng Ä‘á»ƒ Ä‘áº§u tÆ° $10/nÄƒm.'
      },
      {
        id: '10.3',
        title: 'CÃ i vÃ  cáº¥u hÃ¬nh PostHog â€” theo dÃµi ngÆ°á»i dÃ¹ng lÃ m gÃ¬',
        eyebrow: 'PostHog',
        desc: 'PostHog lÃ  analytics tool cho product â€” track clicks, sessions, funnels.',
        contentType: 'text',
        paragraphs: [
          'PostHog cho biáº¿t: ngÆ°á»i dÃ¹ng lÃ m gÃ¬ trÃªn website, há» Ä‘áº¿n tá»« Ä‘Ã¢u, há» thoÃ¡t á»Ÿ Ä‘Ã¢u.',
          '<strong>CÃ i PostHog (self-hosted free hoáº·c cloud free tier):</strong><br>1. ÄÄƒng kÃ½ pos thog.com<br>2. Táº¡o project â†’ nháº­n API key<br>3. CÃ i package: <code>npm install posthog-js</code><br>4. ThÃªm vÃ o code (file layout hoáº·c _app): <code>posthog.init(\'YOUR_API_KEY\', { api_host: \'https://app.posthog.com\' })</code>'
        ],
        paragraphs_extra: [
          '<strong>Track events quan trá»ng:</strong><br>â€¢ Page views<br>â€¢ CTA clicks (Get Started, Buy Now)<br>â€¢ Form submissions<br>â€¢ Scroll depth<br>â€¢ Feature usage'
        ],
        insight: 'âœ³ Analytics giÃºp báº¡n biáº¿t: ngÆ°á»i ta cÃ³ dÃ¹ng cÃ¡i báº¡n build khÃ´ng? Há» thÃ­ch gÃ¬? Há» bá» á»Ÿ Ä‘Ã¢u? KhÃ´ng cÃ³ analytics = cáº£m tÃ­nh.'
      },
      {
        id: '10.4',
        title: 'Gáº¯n Google Search Console â€” theo dÃµi SEO tá»« ngÃ y Ä‘áº§u',
        eyebrow: 'Search Console',
        desc: 'Google Search Console cho biáº¿t: website xuáº¥t hiá»‡n trÃªn Google chÆ°a? Tá»« khÃ³a gÃ¬? Click rate bao nhiÃªu?',
        contentType: 'text',
        paragraphs: [
          'Search Console (search.google.com/search-console) lÃ  cÃ´ng cá»¥ SEO miá»…n phÃ­ cá»§a Google.',
          '<strong>Setup:</strong><br>1. ÄÄƒng nháº­p Search Console<br>2. ThÃªm property (URL prefix hoáº·c domain)<br>3. Verify ownership (nhiá»u cÃ¡ch: upload HTML file, add DNS record, Vercel automatic)<br>4. Submit sitemap (náº¿u cÃ³)'
        ],
        paragraphs_extra: [
          '<strong>Theo dÃµi:</strong><br>â€¢ Performance: impressions, clicks, CTR, position<br>â€¢ Pages: crawl errors, indexing status<br>â€¢ Enhancements: Core Web Vitals scores'
        ],
        insight: 'âœ³ Submit sitemap.xml giÃºp Google index nhanh hÆ¡n. Next.js cÃ³ built-in sitemap generation â€” tÃ¬m cÃ¡ch enable trong docs.'
      },
      {
        id: '10.5',
        title: 'Checklist trÆ°á»›c khi share link cho ngÆ°á»i khÃ¡c',
        eyebrow: 'Checklist',
        desc: '8 bÆ°á»›c Ä‘á»ƒ website sáºµn sÃ ng cÃ´ng khai â€” trÃ¡nh xáº¥u há»•.',
        contentType: 'grid',
        gridItems: [
          { label: '1', title: 'Cháº¡y dev server', desc: 'Kiá»ƒm tra khÃ´ng cÃ³ lá»—i console.' },
          { label: '2', title: 'Test trÃªn mobile', desc: 'Responsive Ä‘Ãºng chÆ°a? Font cÃ³ Ä‘á»c Ä‘Æ°á»£c khÃ´ng?' },
          { label: '3', title: 'Check 404 pages', desc: 'Broken links, missing assets?' },
          { label: '4', title: 'Verify meta tags', desc: 'Title, description, OG image cÃ³ hiá»‡n khÃ´ng?' },
          { label: '5', title: 'Test forms', desc: 'Form submit hoáº¡t Ä‘á»™ng chÆ°a? Validation Ä‘Ãºng khÃ´ng?' },
          { label: '6', title: 'Check analytics', desc: 'PostHog/Search Console tracking Ä‘Ãºng chÆ°a?' },
          { label: '7', title: 'Review content', desc: 'Copy cÃ³ lá»—i chÃ­nh táº£? HÃ¬nh áº£nh cÃ³ Ä‘Ãºng khÃ´ng?' },
          { label: '8', title: 'Share test', desc: 'Gá»­i link cho 1-2 ngÆ°á»i test trÆ°á»›c.' }
        ],
        insight: 'âœ³ Checklist nÃ y máº¥t 15-30 phÃºt. NÃ³ trÃ¡nh Ä‘Æ°á»£c "Ã´i khÃ´ng quÃªn chá»‰nh cÃ¡i Ä‘Ã³" sau khi Ä‘Ã£ share. LÃ m tá»« Ä‘áº§u = professional hÆ¡n.'
      }
    ]
  }
];

// Helper functions
export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find(lesson => lesson.slug === slug);
}

export function getLessonById(id: number): Lesson | undefined {
  return lessons.find(lesson => lesson.id === id);
}

export function getAllSlugs(): string[] {
  return lessons.map(lesson => lesson.slug);
}

export function getNextLesson(currentId: number): Lesson | undefined {
  return lessons.find(lesson => lesson.id === currentId + 1);
}

export function getPrevLesson(currentId: number): Lesson | undefined {
  return lessons.find(lesson => lesson.id === currentId - 1);
}

export function getRemainingLessons(currentId: number): Lesson[] {
  return lessons.filter(lesson => lesson.id > currentId);
}


