// 一頁式履歷（/resume）的內容，分中文（zh）與英文（en）兩版，結構相同。
// 從網站各頁整理、濃縮成 A4 一頁放得下的版本；網站內容更新時，記得同步這裡（尤其是經歷、專案與獲獎）。
// 寫法：摘要與經歷中用 **…** 包起來的部分會以重點色粗體顯示；經歷的 type 決定小色標（產業／研究／教學）

const contacts = [
  { label: "unayunyuhu@gmail.com", href: "mailto:unayunyuhu@gmail.com" },
  { label: "linkedin.com/in/芸毓-胡-27a576213", href: "https://www.linkedin.com/in/芸毓-胡-27a576213/" },
  { label: "yunyu-web-digital-profile.vercel.app", href: "https://yunyu-web-digital-profile.vercel.app" },
];

export const resumeContent = {
  zh: {
    fileName: "胡芸毓_履歷",
    name: "胡芸毓",
    altName: "Yunyu Hu",
    headline: "人機互動研究｜UX 設計｜AI 與全端原型開發",
    contacts,
    summary:
      "資管背景、政大數位內容碩士，以人機協作為研究主軸，精熟使用者研究、實驗設計、系統開發與數據分析。碩論自建 **pygame＋FastAPI 實驗系統**蒐集事件層級的行為日誌，並以 **Streamlit 分析儀表板**完成資料清理整併、行為指標建構與統計檢定，成果發表於 TAICHI'25 與 SNU–UTokyo–NCCU 聯合發表會；作品曾獲 **TAICHI 2024 Best Demo**。",
    labels: {
      experience: "經歷",
      projects: "精選專案",
      research: "研究發表",
      education: "學歷",
      skills: "技能",
      awards: "獲獎",
      community: "社群參與",
      more: "其他：",
      types: { industry: "產業", research: "研究", teaching: "教學" },
    },
    experience: [
      {
        type: "teaching",
        period: "2025.09–2025.12、2026.09–至今",
        role: "「人機互動設計」課程助教",
        org: "國立政治大學",
        points: ["兩學期支援 **35 組、139 位**學生的互動設計專題，指導使用者研究、互動原型與易用性測試。"],
      },
      {
        type: "industry",
        period: "2025.07–2025.08",
        role: "設計研發組 實習生",
        org: "財團法人台灣設計研究院 TDRI",
        points: [
          "串接 AI API 完成**評論情緒分析與文本分類**，產出可直接分析的結構化標註資料。",
          "比較 AI 工具與研究案例，彙整競品分析並規劃 AI 協作使用情境。",
        ],
      },
      {
        type: "industry",
        period: "2025.03–2025.07",
        role: "UX 設計師",
        org: "FreeSEED R2｜台灣在地 LLM 計畫",
        points: ["負責社群首頁改版與社群遊戲設計，交付**互動原型**，供團隊討論介面、互動需求與開發方案。"],
      },
      {
        type: "teaching",
        period: "2025.02–2025.06",
        role: "「設計思考與人工智慧」課程助教",
        org: "國立政治大學",
        points: ["支援約 **50 位**學生的 AI 應用實作，指導原型開發與實作除錯。"],
      },
      {
        type: "research",
        period: "2024.01–2024.06",
        role: "研究助理",
        org: "政大 MR 創意實驗室（周嘉年教授）",
        points: ["以 8th Wall（WebAR）與 Unity 開發 **AR 互動原型**，並整理相關文獻。"],
      },
      {
        type: "research",
        period: "2023.09–2024.02",
        role: "研究助理",
        org: "政大 媒體心理實驗室（林日璇教授）",
        points: ["支援醫療新聞遊戲與 VR 敬畏感實驗，完成受試者招募、實驗執行及資料整理。"],
      },
      {
        type: "industry",
        period: "2023.01–2023.08",
        role: "金融科技實習生（全端開發）",
        org: "北祥科技服務股份有限公司",
        points: [
          "參與**銀行專案**，撰寫資訊架構文件與 UI 設計規格，作為開發協作的依據。",
          "實作部分前後端功能，並提出系統優化建議。",
        ],
      },
    ],
    // 篇幅有限，較早或較短的經歷併成一行
    moreExperience: "OpenHCI 24th 技術助教（2024）・輔仁大學「行動裝置應用」課程助教（2022）・輔大資管系機房工讀（2021）",
    projects: [
      {
        year: "2026",
        title: "碩士論文｜探索協調意圖對人機協作的影響",
        detail:
          "人與 AI 協作時，開放雙向溝通就能協調得更好嗎？以 2×2 組間實驗（60 名參與者）比較人類與 AI 能否表達協調意圖；自建系統蒐集事件層級日誌，整併問卷資料、建構訊號時機與反應等行為指標並進行統計檢定。發現人類能表達意圖時信任較高，但雙向溝通不等於雙向協調，據此提出確認回應、交接狀態提示等設計建議。",
      },
      {
        year: "2024",
        title: "FlexiTouch｜柔性材質互動控制器",
        detail:
          "以柔性材質電阻變化偵測按壓與拉伸，整合感測器與微控制器轉為遊戲視覺與觸覺回饋。TAICHI 2024 Best Demo、League of VR 最佳技術獎。",
      },
      {
        year: "2024",
        title: "WallGuard｜牆面危害 AI 辨識系統",
        detail: "實作 YOLO 即時辨識牆壁狀態，串接生成式 AI API 產出白話風險報告。InnoFest@ICI 2024 受邀展出。",
      },
      {
        year: "2025",
        title: "健保快易通 App Redesign 與 AI 設計流程評估",
        detail: "以使用者研究提出資訊架構改版與主動提醒方案；並實測生成式 AI 輔助設計，發現它適合 card sorting 等分類任務，但難以深入歸納使用者的情感與需求。",
      },
    ],
    education: [
      { school: "國立政治大學", degree: "數位內容碩士學位學程｜GPA 4.29/4.3", period: "2023–2026" },
      { school: "北京清華大學 美術學院", degree: "信息藝術設計系 交換研修（未來實驗室）｜GPA 4.0/4.0", period: "2026.01–06" },
      { school: "輔仁大學", degree: "資訊管理學系 學士｜GPA 3.8", period: "2019–2023" },
    ],
    research: [
      { year: "2025.11", title: "SNU–UTokyo–NCCU 三校聯合論文發表會", note: "代表政大於首爾發表" },
      { year: "2025.08", title: "TAICHI'25 台灣人機互動研討會", note: "碩論研究架構" },
      { year: "2022", title: "科技部大專學生研究計畫", note: "線上自主學習平台關鍵因素" },
      { year: "2021", title: "TANET／NCS 研討會", note: "兩篇論文獲接受發表" },
    ],
    skills: [
      { label: "程式與系統", items: "Python、JavaScript、React、React Native、FastAPI、Unity、Arduino、MySQL、Firebase、AWS、Git" },
      { label: "資料與 AI", items: "事件日誌設計、資料清理與整併、行為指標建構、統計檢定、Streamlit 儀表板、YOLO 物件偵測、生成式 AI API、情緒分析與文本分類" },
      { label: "研究與設計", items: "實驗設計、問卷設計、使用者研究、服務設計、資訊架構、Figma" },
    ],
    awards: [
      { year: "2024", title: "TAICHI Best Demo", note: "FlexiTouch" },
      { year: "2024", title: "League of VR Final 最佳技術獎", note: "FlexiTouch" },
      { year: "2024", title: "AI Junior Award 決選入圍", note: "iHarbor" },
      { year: "2023", title: "台灣大專院校創意遊戲設計競賽 決選入圍", note: "Tears of Ancestors" },
      { year: "2022", title: "資訊應用服務創新競賽 IPv4 組第一名", note: "DeepLink" },
    ],
  },

  en: {
    fileName: "Yunyu_Hu_Resume",
    name: "Yunyu Hu",
    altName: "胡芸毓",
    headline: "HCI Research | UX Design | AI & Full-stack Prototyping",
    contacts,
    summary:
      "Information management graduate and M.S. student in Digital Content at NCCU, focused on human–AI collaboration and skilled in user research, experiment design, system development and data analysis. For my thesis I built a **pygame + FastAPI experiment system** that captures event-level behavioral logs, and a **Streamlit analysis dashboard** for data cleaning and merging, behavioral feature engineering and statistical testing. Winner of **TAICHI 2024 Best Demo**.",
    labels: {
      experience: "Experience",
      projects: "Selected Projects",
      research: "Research",
      education: "Education",
      skills: "Skills",
      awards: "Awards",
      community: "Community",
      more: "Also: ",
      types: { industry: "Industry", research: "Research", teaching: "Teaching" },
    },
    experience: [
      {
        type: "teaching",
        period: "Sep–Dec 2025, Sep 2026–Present",
        role: "HCI Design Teaching Assistant",
        org: "National Chengchi University",
        points: ["Supported **35 teams (139 students)** over two semesters in user research, prototyping and usability testing."],
      },
      {
        type: "industry",
        period: "Jul–Aug 2025",
        role: "Design R&D Intern",
        org: "Taiwan Design Research Institute (TDRI)",
        points: ["Integrated AI APIs for **review sentiment analysis and text classification**, producing structured labeled data, and benchmarked AI tools to map collaboration scenarios."],
      },
      {
        type: "industry",
        period: "Mar–Jul 2025",
        role: "UX Designer",
        org: "FreeSEED R2 (Taiwan local LLM project)",
        points: ["Led the community homepage redesign and community games, delivering **interactive prototypes** for team discussion of interface, interaction needs and implementation."],
      },
      {
        type: "teaching",
        period: "Feb–Jun 2025",
        role: "Design Thinking & AI Teaching Assistant",
        org: "National Chengchi University",
        points: ["Supported about **50 students** building AI applications, guiding prototyping and debugging."],
      },
      {
        type: "research",
        period: "Jan–Jun 2024",
        role: "Research Assistant",
        org: "MR Creative Lab, NCCU",
        points: ["Built **AR interactive prototypes** with 8th Wall (WebAR) and Unity and reviewed related literature."],
      },
      {
        type: "research",
        period: "Sep 2023–Feb 2024",
        role: "Research Assistant",
        org: "Media Psychology Lab, NCCU",
        points: ["Supported a medical news game study and a VR awe study, handling participant recruitment, sessions and data organization."],
      },
      {
        type: "industry",
        period: "Jan–Aug 2023",
        role: "Fintech Intern (Full-stack)",
        org: "Pershing Technology Services Corporation (PTSC)",
        points: ["Wrote IA documents and UI specs for a **banking project**, implemented front-end and back-end features and proposed improvements."],
      },
    ],
    moreExperience:
      "Technical TA, OpenHCI 24th (2024) · TA, Mobile App Development, FJU (2022) · Computer Lab Assistant, FJU (2021)",
    projects: [
      {
        year: "2026",
        title: "Master's Thesis | Coordination Intent in Human–AI Collaboration",
        detail:
          "Does two-way communication help humans and AI coordinate? A 2×2 study with 60 participants compared whether each side could signal intent; I captured event-level logs with a custom system, merged them with survey data, engineered behavioral features such as signal timing and responses, and ran statistical tests. Signaling raised trust, but two-way communication did not guarantee coordination, leading to design guidelines such as confirmation and handover cues.",
      },
      {
        year: "2024",
        title: "FlexiTouch | Soft-Material Interactive Controller",
        detail: "Soft-material controller sensing press and stretch to drive in-game visual and haptic feedback. TAICHI 2024 Best Demo; League of VR Best Technical Award.",
      },
      {
        year: "2024",
        title: "WallGuard | AI Wall-Hazard Detection",
        detail: "Real-time YOLO detection of wall damage with plain-language risk reports written by generative AI. Exhibited at InnoFest@ICI 2024.",
      },
      {
        year: "2025",
        title: "NHI App Redesign & AI Design-Process Study",
        detail: "Proposed an IA redesign and proactive reminders from user research; tested generative AI in design work and found it suits card sorting but struggles with nuanced user needs.",
      },
    ],
    education: [
      { school: "National Chengchi University", degree: "M.S., Digital Content and Technologies | GPA 4.29/4.3", period: "2023–2026" },
      { school: "Tsinghua University, Beijing", degree: "Exchange Study, Information Art & Design (Future Lab) | GPA 4.0/4.0", period: "Jan–Jun 2026" },
      { school: "Fu Jen Catholic University", degree: "B.S. in Information Management | GPA 3.8", period: "2019–2023" },
    ],
    research: [
      { year: "2025", title: "SNU–UTokyo–NCCU Joint Symposium", note: "Presented for NCCU in Seoul" },
      { year: "2025", title: "TAICHI'25 (Taiwan HCI Conference)", note: "Thesis research framework" },
      { year: "2021", title: "TANET / NCS Conference", note: "Two papers accepted and presented" },
    ],
    skills: [
      { label: "Programming & Systems", items: "Python, JavaScript, React, React Native, FastAPI, Unity, Arduino, MySQL, Firebase, AWS, Git" },
      { label: "Data & AI", items: "Event logging, data cleaning & merging, behavioral feature engineering, statistical testing, Streamlit dashboards, YOLO detection, generative AI APIs, sentiment & text classification" },
      { label: "Research & Design", items: "Experiment design, survey design, user research, service design, information architecture, Figma" },
    ],
    awards: [
      { year: "2024", title: "TAICHI Best Demo", note: "FlexiTouch" },
      { year: "2024", title: "League of VR, Best Technical Award", note: "FlexiTouch" },
      { year: "2024", title: "AI Junior Award Finalist", note: "iHarbor" },
      { year: "2023", title: "Collegiate Game Design Finalist", note: "Tears of Ancestors" },
      { year: "2022", title: "Info. Application Innovation, 1st Place", note: "DeepLink (IPv4 track)" },
    ],
  },
};
