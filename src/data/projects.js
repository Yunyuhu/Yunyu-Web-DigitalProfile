import ThesisImg from "@/image/projects/thesis-defense.jpg";
import NhiImg from "@/image/projects/nhi.png";
import FlexiImg from "@/image/projects/flexitouch.png";
import WallImg from "@/image/projects/wall-ai.png";
import VenueImg from "@/image/projects/nccu-venue.png";
import IHarborImg from "@/image/projects/iharbor.png";
import TearsImg from "@/image/projects/tears-of-ancestors.png";
import DeepLinkImg from "@/image/projects/deeplink.png";
import Onetwothree from "@/image/projects/onetwothree.png";
import Zooly from "@/image/projects/zooly.png";
import MizutoImg from "@/image/projects/mizuto.png";
import MetroMateImg from "@/image/projects/metromate.png";
import JellyfishImg from "@/image/projects/jellyfish-robot.jpg";
import LizardImg from "@/image/projects/lizard-robot.jpg";
// import ParametricImg from "@/image/projects/parametric-3d-modeling.jpg";
import MemoryMazeImg from "@/image/projects/memory-maze.jpg";

// 每個專案的欄位：
// context   場域、專案類型或獲獎，顯示在年份旁
// tagline   一句話說明這是什麼、為誰而做
// highlights 2–3 點「問題 → 做法 → 成果」，只寫能佐證的內容
// stack     使用的技術與方法（不放主題形容詞）
// links     { type, href, label? }，顯示在專案頁的「相關資源」，type 決定按鈕文字與圖示，見 projects/[slug]/page.js 的 LINK_TYPES
// featured  精選專案，排在最前面
// slug      專案頁網址 /projects/{slug}
// subtitle  英文正式名稱等副標，只顯示在專案頁（選填）
export const projects = [
  {
    featured: true,
    year: "2026",
    slug: "coordination-intent-thesis",
    title: "探索協調意圖對人機協作的影響",
    subtitle: "Exploring the Effects of Coordination Intent on Human–AI Collaboration",
    context: "碩士論文｜國立政治大學",
    tagline: "探索人類與 AI 在即時協作中各自表達意圖的作用，並以協作過程數據解析人機協調如何發生",
    highlights: [
      "針對過去研究尚未釐清的兩個問題（雙向溝通是否優於單向溝通、人類與 AI 表達意圖的作用是否不同），以 2×2 組間實驗分別操弄人類與 AI 能否表達協調意圖，60 名參與者與 AI 完成 6 回合即時協作任務。",
      "不只比較問卷與任務結果，也分析協作過程中的逐筆事件數據，包括訊號發送時機、訊號後的移動反應，以及最後訊號與擊中結果的對應，呈現從意圖表達、即時行動到任務結果的完整歷程。",
      "自行開發實驗系統（Python／pygame、FastAPI）與實驗、回合、事件三層紀錄，並自建 Streamlit 分析工具串接問卷與系統資料，完成資料清理、行為反應判定與統計檢定，再以訪談解釋量化結果。",
      "發現人類能表達意圖時信任與協作評價較高，但開放雙向溝通不等於達成雙向協調；據此提出確認回應、交接狀態提示等人機協調設計建議，研究於 TAICHI'25 與 2025 SNU–UTokyo–NCCU 聯合發表會發表。"
    ],
    stack: ["人機協作研究", "過程數據分析", "實驗設計", "Python", "pygame", "FastAPI", "Streamlit"],
    image: ThesisImg,
    links: []
  },
  {
    featured: true,
    year: "2024",
    slug: "flexitouch",
    title: "FlexiTouch：柔性材質互動控制器",
    context: "TAICHI 2024 Best Demo・League of VR 2024 最佳技術獎",
    tagline: "同時支援按壓與拉伸的柔性控制器，把觸覺操作轉成遊戲回饋",
    highlights: [
      "以柔性材質的電阻變化偵測按壓與拉伸兩種輸入，整合感測器與微控制器，即時轉譯為遊戲內的視覺與觸覺回饋。",
      "圍繞控制器設計完整的遊戲互動情境，以遊戲化提升操作的投入感。",
      "獲 TAICHI 2024 Best Demo 與 League of VR Final 2024 最佳技術獎。"
    ],
    stack: ["柔性感測", "微控制器", "觸覺回饋", "遊戲互動設計"],
    image: FlexiImg,
    links: [{ type: "video", href: "https://www.youtube.com/watch?v=zUyFzP0OjnA" }]
  },
  {
    featured: true,
    year: "2024",
    slug: "wallguard",
    title: "WallGuard：牆面危害 AI 辨識系統",
    context: "InnoFest@ICI 2024 展出",
    tagline: "以電腦視覺即時辨識牆面損傷，並生成民眾看得懂的風險報告",
    highlights: [
      "針對台灣地震頻繁、建物老化，而民眾對住家牆面安全意識偏低的問題，開發即時牆面危害辨識原型。",
      "實作 YOLO 即時物件辨識牆壁狀態，將辨識結果串接生成式 AI API，產出情境化的說明報告。",
      "規劃租屋查驗、保險理賠評估等延伸應用情境。"
    ],
    stack: ["YOLO", "電腦視覺", "生成式 AI API"],
    image: WallImg,
    links: [{ type: "video", href: "https://www.youtube.com/watch?v=pVikml-YPsw" }]
  },
  {
    featured: true,
    year: "2025",
    slug: "nhi-app-redesign",
    title: "健保快易通 App Redesign 與 AI 設計流程評估",
    context: "獨立研究型改版提案",
    tagline: "讓台灣民眾重新介入自己的健康醫療，重塑醫病關係與對健康資訊的掌握",
    highlights: [
      "以台灣民眾為對象，透過使用者研究找出大家在理解健康狀態、檢查結果、看病與用藥資訊時的落差，重新設計 App 的資訊架構與核心流程。",
      "提出模組化資訊呈現與主動提醒機制，讓民眾從被動接收醫療資訊，轉為能理解並掌握自己的健康，進而重塑醫病之間的溝通關係。",
      "延伸研究以生成式 AI 重做四項原為手動的設計產出，發現 AI 適合 card sorting 等分類任務，但對情感與需求文本多依詞頻淺層歸納，冷門類別的介面生成參考價值也有限。"
    ],
    stack: ["使用者研究", "服務設計", "資訊架構", "介面設計", "生成式 AI 評估"],
    image: NhiImg,
    links: [
      { type: "slides", label: "改版提案", href: "https://www.canva.com/design/DAGoj23Inms/opMh4yaUT55qOyaHiFsoJQ/view" },
      { type: "slides", label: "AI 評估報告", href: "https://www.canva.com/design/DAGr6ZQoMfs/uuEe7GYpH1FFyfUHFQN6ug/view" }
    ]
  },
  {
    featured: true,
    year: "2021–2023",
    slug: "deeplink",
    title: "DeepLink：Webinar 數位互動履歷平台",
    context: "產學合作畢業專題",
    tagline: "以線上 Webinar 知識分享為核心，協助講者累積數位影響力與履歷",
    highlights: [
      "一站式整合活動發想、直播與成果紀錄，支援同步與非同步互動，把分享成果轉為可展示的數位履歷。",
      "畢業後由系上接手作為服務平台營運；2023 年負責營運公關與活動企劃，協辦 25 場、主辦 5 場分享會。",
      "獲 2022 大專院校資訊應用服務創新競賽 IPv4 組第一名、全國大專院校智慧創新暨跨域整合創作競賽最佳注目獎。"
    ],
    stack: ["Web 平台", "產品規劃", "活動營運"],
    image: DeepLinkImg,
    links: [{ type: "archive", href: "https://web.archive.org/web/20250327225514/https://deeplink.tw/" }]
  },
  {
    year: "2026",
    slug: "memory-maze",
    title: "記憶迷宮 Memory Maze",
    context: "北京清華大學 未來實驗室",
    tagline: "把記憶轉化為可行走、可迷失、可重新尋路的 3D 互動空間",
    highlights: [
      "以迷宮理論作為空間建構邏輯，在 Unity 開發可互動的 3D 場景，讓抽象的記憶結構成為具體的空間經驗。",
      "結合實體裝置與虛擬場景，以虛實整合形式於展場展出。"
    ],
    stack: ["Unity", "3D 互動場景", "空間敘事", "虛實整合裝置"],
    image: MemoryMazeImg,
    links: []
  },
  {
    year: "2026",
    slug: "jellyfish-robot",
    title: "水母機器人 Jellyfish Robot",
    context: "北京清華大學 未來實驗室",
    tagline: "以水母為原型、強調柔性外型與觸手動態的互動機器人",
    highlights: [
      "以柔性外型與觸手結構為設計重點，探索如何把生物的型態與動態轉譯為機構設計。",
      "涵蓋機構設計、致動器接線與控制邏輯。"
    ],
    stack: ["機器人設計", "柔性結構", "致動器控制"],
    image: JellyfishImg,
    links: []
  },
  {
    year: "2026",
    slug: "lizard-robot",
    title: "蜥蜴機器人 Lizard Robot",
    context: "北京清華大學 未來實驗室",
    tagline: "具口部與舌頭動作機構的桌上型角色機器人",
    highlights: [
      "以 Arduino 驅動口部與舌頭動作機構，結合機械結構與角色化外型，打造具生命感的桌上型互動裝置。",
      "涵蓋機構設計、致動器接線與控制程式。"
    ],
    stack: ["Arduino", "機構設計", "致動器控制", "角色設計"],
    image: LizardImg,
    links: []
  },
  // {
  //   year: "2026",
  //   title: "多維參數化3D建模",
  //   context: "北京清華大學 未來實驗室",
  //   tagline: "以參數化演算生成骨骼狀多維結構，並列印成裝置藝術與可穿戴飾品",
  //   highlights: [],
  //   stack: ["參數化建模", "3D列印", "生成設計"],
  //   image: ParametricImg,
  //   links: []
  // },
  {
    year: "2025",
    slug: "mizuto",
    title: "Mizuto：AI 智慧水壺",
    context: "智慧裝置設計",
    tagline: "以擬人化燈光互動提醒飲水的 AI 智慧水壺",
    highlights: [
      "以燈號建立直覺的互動語言，藍光提醒裝水、黃光提醒喝水，搭配擬人化角色設計，提升使用者對飲水習慣的覺察。",
      "規劃以 AI 感測分辨純水與飲料，延伸至個人健康管理。"
    ],
    stack: ["智慧裝置", "機器人角色設計", "互動設計", "Figma"],
    image: MizutoImg,
    links: [{ type: "prototype", href: "https://www.figma.com/proto/FpQHpQ6RnKrC1FWE5KMDYD/Mizuto?node-id=237-2" }]
  },
  {
    year: "2025",
    slug: "metromate",
    title: "捷伴 AI：MetroMate",
    context: "AI 服務概念原型",
    tagline: "結合台北捷運情境、陪通勤族發掘沿線生活的 AI 旅伴",
    highlights: [
      "從通勤族 persona 與旅程地圖出發，定義路線提醒、路程異動通知與客製化旅遊建議三項核心功能。",
      "依使用者輸入的目的與偏好即時調整推薦站點與內容，並設計對應的對話流程。"
    ],
    stack: ["Persona", "旅程地圖", "對話設計", "AI 服務設計"],
    image: MetroMateImg,
    links: [{ type: "doc", label: "設計提案", href: "https://drive.google.com/file/d/1B3eXDW1BeS81RyG1pmBcMpuEwltKXz0p/view" }]
  },
  {
    year: "2025",
    slug: "zooly",
    title: "Zooly：動物認養 AI Bot",
    context: "對話式 AI Agent 設計",
    tagline: "以動物角色引導民眾認識臺北市立動物園認養流程的 AI Bot",
    highlights: [
      "設計動物型 Agent 的語言風格、個性與互動步驟，引導使用者逐步了解動物認養流程。",
      "建置知識文件模組，讓 Bot 能回答認養相關問題並傳遞保育價值。"
    ],
    stack: ["ChatGPT GPTs", "對話設計", "角色設計", "知識庫建置"],
    image: Zooly,
    links: [{ type: "live", href: "https://chatgpt.com/g/g-68072a68d8f88191b212901315bb76c4-zooly-taipei-zoo" }]
  },
  {
    year: "2024",
    slug: "secondhand-action",
    title: "衣二衫 Action：永續穿搭互動裝置",
    context: "OpenHCI'24 技術 TA",
    tagline: "依穿搭風格給出專屬聲光回饋，鼓勵二手衣循環的多感官互動裝置",
    highlights: [
      "擔任技術 TA，從訪談與行為觀察階段起協助學員團隊，將「促進二手衣永續行為」轉化為可體驗的互動裝置。",
      "協助整合 Unity AR、LED 燈光與感測器，依穿著風格呈現專屬的視覺特效、燈光、氣味與音樂。"
    ],
    stack: ["Unity AR", "LED", "感測器", "技術指導"],
    image: Onetwothree,
    links: [{ type: "doc", href: "https://drive.google.com/file/d/1i8xX6HHhmRq6J1xN4MkAMdh-reUNMLGO/view" }]
  },
  {
    year: "2024",
    slug: "nccu-venue-redesign",
    title: "政大場地管理系統 Redesign",
    context: "校園系統 UX 改版提案",
    tagline: "簡化校內場地借用與審核流程的資訊架構改版",
    highlights: [
      "透過使用者訪談與任務觀察，找出原平台分類不清、申請流程冗長等問題。",
      "重新設計資訊架構、導覽結構與篩選機制，讓申請與審核流程更簡明。"
    ],
    stack: ["使用者訪談", "任務觀察", "資訊架構", "流程優化"],
    image: VenueImg,
    links: [{ type: "slides", href: "https://www.canva.com/design/DAGZmzkzDcI/InvboYhJsaX7k1mwEG9WNA/view" }]
  },
  {
    year: "2023",
    slug: "iharbor",
    title: "iHarbor：AI 長照資訊共享 App",
    context: "AI Junior Award 2024 決選",
    tagline: "協助照護者與家人共享照護資訊的 AI 輔助 App",
    highlights: [
      "聚焦長照場域中照護者與家庭成員的資訊落差，設計可共享照護資訊的協作 App。",
      "以 AI 自動摘要醫療資訊並提醒藥物副作用，減輕照護負擔並強化親屬間溝通。"
    ],
    stack: ["服務設計", "App 設計", "AI 摘要"],
    image: IHarborImg,
    links: [{ type: "video", href: "https://www.youtube.com/watch?v=1JmtzLllJCA" }]
  },
  {
    year: "2023",
    slug: "tears-of-ancestors",
    title: "Tears of Ancestors：敘事型 2D 遊戲",
    context: "台灣大專院校創意遊戲設計競賽 2023 決選",
    tagline: "以族群歷史為背景，在記憶場景中理解祖先故事的 2D 遊戲",
    highlights: [
      "結合探索與戰鬥兩種機制，讓玩家穿梭記憶場景，逐步理解祖先的故事與衝突背景。",
      "負責遊戲腳本與對話設計，以敘事節奏引導玩家推進劇情。"
    ],
    stack: ["遊戲腳本", "對話設計", "互動敘事", "2D 遊戲"],
    image: TearsImg,
    links: [{ type: "video", href: "https://www.youtube.com/watch?v=utajysQgYvw" }]
  }
];
