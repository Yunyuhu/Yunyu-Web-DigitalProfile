import ThesisImg from "@/image/projects/thesis-defense.jpg";
import NhiImg from "@/image/projects/nhi.png";
import FlexiImg from "@/image/projects/flexitouch.png";
import FlexiDemoImg from "@/image/projects/flexitouch-demo.jpg";
import MizutoStatesImg from "@/image/projects/mizuto-states.jpg";
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
// stack     使用的技術與方法（不放主題形容詞）
// links     { type, href, label? }，顯示在專案頁的「相關資源」，type 決定按鈕文字與圖示，見 projects/[slug]/page.js 的 LINK_TYPES
// featured  精選專案，排在最前面
// slug      專案頁網址 /projects/{slug}
// subtitle  英文正式名稱等副標，只顯示在專案頁（選填）
//
// caseStudy 是專案頁的內容，固定回答四個問題再補上成果，每章的標題寫成結論、內文最多一句，重點交給圖表；
// 沒有資料的章節不填。內容只寫本人提供、或本人的論文、簡報、測試紀錄裡查得到的事實，未發表的研究結果不放：
// questionLabel、question  頁首的核心問題（questionLabel 預設「核心問題」）
// highlights     [{ value, label }] 頁首的亮點，例如獎項（選填）
// facts          [{ label, value }] 角色、團隊、期間等
// contributions  [我負責的工作]（選填，只寫確定是本人做的）
// why       為什麼做：意義、重要性與必要性，盡量用二手資料
// scope     範圍與對象：場域、人群與範圍
// insight   調研與洞察：調研結果、痛點與洞察
// solution  解決方法：技術與流程
// outcome   成果：獎項、發表與後續
// 每章 { headline, body, visuals: [視覺] }，視覺的 type 與欄位見 components/CaseVisuals.js：
// stats、list、bars（互動長條圖）、mapping（痛點與做法的互動對應）、scope、methods、flow、spectrum、relations、matrix、scale、table、cards、tags、image

export const projects = [
  {
    featured: true,
    year: "2026",
    slug: "coordination-intent-thesis",
    title: "探索協調意圖對人機協作的影響",
    subtitle: "Exploring the Effects of Coordination Intent on Human–AI Collaboration",
    context: "碩士論文｜國立政治大學",
    tagline: "探索人類與 AI 在即時協作中各自表達意圖的作用，並以協作過程數據解析人機協調如何發生",
    caseStudy: {
      questionLabel: "研究問題",
      question: "當 AI 成為隊友，人與 AI 要怎麼在即時協作中動態協調？",
      highlights: [
        { value: "TAICHI'25", label: "台灣人機互動研討會發表" },
        { value: "2025 首爾", label: "SNU–UTokyo–NCCU 三校聯合論文發表會" }
      ],
      facts: [
        { label: "我的角色", value: "研究設計、實驗系統與分析工具開發、實驗執行、資料分析與訪談編碼" },
        { label: "指導教授", value: "陳宜秀、蔡炎龍" },
        { label: "寫給誰", value: "設計 AI 代理人與人機協作介面的研究者和設計師" }
      ],
      contributions: [
        "提出研究問題，設計 2×2 組間實驗",
        "開發即時協作的實驗系統與規則式 AI 隊友",
        "執行前導實驗 15 人、正式實驗 60 人",
        "開發 Streamlit 分析工具，處理行為日誌與問卷",
        "訪談與編碼，解釋協調背後的期待"
      ],
      why: {
        headline: "AI 從工具變成隊友，但人與 AI 之間缺少交換意圖的管道",
        body: "既有研究多在討論控制權怎麼分配。不論由人主導或讓 AI 自動執行，雙方都很難即時知道對方接下來要做什麼。",
        visuals: [
          {
            type: "spectrum",
            left: {
              title: "人類主導",
              detail: "人做決策，AI 提供資訊與建議。任務節奏快、資訊量大時，容易監控疲勞、反應延遲。",
              cite: "Parasuraman et al., 2000；Endsley & Kaber, 1999"
            },
            right: {
              title: "AI 自動執行",
              detail: "AI 自主決策與執行。人長期不參與，出錯時難以即時接管；看不懂 AI 的意圖，也難以信任。",
              cite: "Endsley & Kaber, 1999；Lee & See, 2004"
            },
            gap: {
              label: "研究的切入點",
              title: "兩端都缺少雙方交換意圖的管道",
              detail: "AI 難以說明接下來要做什麼，人也很少能向 AI 傳達自己的意圖。Shneiderman（2020）也指出，人類控制與自動化並非此消彼長的單一維度。"
            }
          },
          {
            type: "tags",
            title: "同樣需要人機即時協調的情境",
            items: ["人與多台無人機協作", "自駕車與人類駕駛並行上路", "AI 代理人替人執行工作"]
          }
        ]
      },
      scope: {
        headline: "聚焦即時的共同任務，比較「誰能表達意圖」",
        visuals: [
          {
            type: "scope",
            items: [
              { label: "場域", value: "人與 AI 在同一個畫面即時合作的任務", chips: ["共享畫面", "即時分工與交接"] },
              { label: "對象", value: "日常使用電腦與 AI 的一般使用者", chips: ["前導實驗 15 人", "正式實驗 60 人"] },
              { label: "意圖訊號", value: "兩種非語言訊號", chips: ["我來：這個目標由我負責", "換你：請對方接手"] },
              { label: "比較", value: "人與 AI 各自能不能發訊號，形成四種條件" }
            ]
          },
          {
            type: "matrix",
            cols: ["AI 能發訊號", "AI 不能發訊號"],
            rows: ["人能發訊號", "人不能發訊號"],
            cells: [
              [{ title: "雙向訊號", detail: "15 人" }, { title: "人類主導", detail: "15 人" }],
              [{ title: "代理人主導", detail: "15 人" }, { title: "無訊號", detail: "15 人" }]
            ]
          }
        ]
      },
      insight: {
        headline: "協調有其必要，但不一定要雙方對等",
        body: "對等的訊號不一定是答案。更可能的形式是一方提出、另一方確認或給予肯定的回應，這是下一步要研究的方向。",
        visuals: [
          {
            type: "relations",
            items: [
              { kind: "one-way", title: "一方主導", detail: "一方決定，另一方配合" },
              { kind: "mutual", title: "雙方對等", detail: "人與 AI 都能主動表達意圖", tag: "本研究檢驗" },
              { kind: "confirm", title: "提出＋確認", detail: "一方提出，另一方確認或給予肯定的回應", tag: "下一步", accent: true }
            ]
          }
        ]
      },
      solution: {
        headline: "自建實驗系統與分析工具，記錄每一次協調的過程",
        visuals: [
          {
            type: "flow",
            steps: [
              { title: "設計意圖訊號", detail: "借鏡航空交接操縱權時說的 You have control／I have control，設計「我來」與「換你」。", tools: ["非語言訊號", "動畫與音效"] },
              { title: "開發實驗系統", detail: "即時協作任務與規則式 AI 隊友，每個訊號、移動與擊中都逐筆寫入事件日誌。", tools: ["pygame", "FastAPI"] },
              { title: "校準與分組", detail: "以前導實驗校準 AI 的能力，再依背景平衡分成四組。", tools: ["前導實驗", "加權最小化分組"] },
              { title: "過程資料分析", detail: "清理事件日誌、建構訊號後的即時反應等行為指標，再整併問卷做統計檢定。", tools: ["Streamlit", "Python", "Welch t 檢定", "變異數分析"] },
              { title: "訪談解釋", detail: "用訪談理解同一個動作背後不同的判斷，補上數據看不到的期待。", tools: ["半結構式訪談", "編碼"] }
            ]
          }
        ]
      },
      outcome: {
        headline: "研究架構已在國內外研討會發表",
        visuals: [
          {
            type: "list",
            items: [
              { value: "TAICHI'25", label: "台灣人機互動研討會，發表研究架構" },
              { value: "2025 首爾", label: "代表政大在 SNU–UTokyo–NCCU 三校聯合論文發表會發表" }
            ]
          }
        ]
      }
    },
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
    caseStudy: {
      question: "穿戴裝置能不能像布一樣柔軟，又能感應拉伸與按壓？",
      highlights: [
        { value: "Best Demo", label: "TAICHI 2024" },
        { value: "最佳技術獎", label: "League of VR Final 2024" }
      ],
      facts: [
        { label: "我的角色", value: "專案管理、企劃與開發；Demo 論文第二作者" },
        { label: "團隊", value: "4 人（政大數位內容）" },
        { label: "期間", value: "2024" }
      ],
      why: {
        headline: "穿戴裝置太硬、太笨重，既有的柔性感測各有限制",
        body: "裝置太笨重、太硬或接線複雜，會讓人覺得不便、有侵入感，甚至干擾原本在做的事。",
        visuals: [
          {
            type: "table",
            head: ["既有做法", "限制"],
            rows: [
              ["導電布料矩陣定位", "布料一拉伸，辨識效果明顯下降"],
              ["導電紗刺繡", "布料變硬"],
              ["內建光學感測（Sugiura et al., 2012）", "影響觸感"],
              ["導電泡棉 FoamSense（Nakamaru et al., 2017）", "受限於體積與形狀"]
            ],
            caption: "我們要的是能同時偵測拉伸與按壓、又保有布料柔軟觸感的材料。"
          }
        ]
      },
      scope: {
        headline: "先做出能同時偵測拉伸與按壓的布料，用在 VR 互動",
        visuals: [
          {
            type: "scope",
            items: [
              { label: "場域", value: "VR 遊戲", chips: ["Meta Quest 2", "Unity"] },
              { label: "對象", value: "穿戴裝置與 VR 的使用者" },
              { label: "偵測範圍", value: "拉伸與按壓", chips: ["扭轉與壓縮留待未來"] },
              { label: "回饋", value: "視覺加觸覺", chips: ["SG90 觸覺腕帶"] }
            ]
          }
        ]
      },
      insight: {
        headline: "石墨比銅粉更適合偵測拉伸，但單層印刷會斷路",
        body: "我們用三用電表量測不同材料與比例印在布上的導電度與電阻變化。",
        visuals: [
          {
            type: "cards",
            items: [
              { title: "銅粉", detail: "電阻變化較不明顯。" },
              { title: "石墨粉（採用）", detail: "電阻變化較明顯，適合偵測布料拉伸。", accent: true }
            ]
          },
          {
            type: "scale",
            items: [
              { label: "太稀", rule: "導電差，電阻變化難偵測" },
              { label: "適中", rule: "維持導電、不龜裂", accent: true },
              { label: "太稠", rule: "龜裂，拉伸時斷路並起皺" }
            ],
            caption: "即使比例最佳，布料織紋的凹凸讓單層印刷附著不完整，拉伸時仍會斷路。"
          }
        ]
      },
      solution: {
        headline: "雙層印刷做出穩定的導電布，再接上 Arduino 與觸覺腕帶",
        visuals: [
          {
            type: "image",
            src: FlexiDemoImg,
            alt: "FlexiTouch 本體、體驗者戴著 VR 頭盔拉伸 FlexiTouch，以及 VR 遊戲畫面",
            caption: "左：FlexiTouch 本體；中：體驗者拉伸操作；右：VR 遊戲畫面（出自 TAICHI 2024 Demo 論文）。"
          },
          {
            type: "flow",
            steps: [
              { title: "調配導電墨水", detail: "石墨粉混合網版印刷漿與水，找出不龜裂又能導電的比例。", tools: ["石墨粉", "三用電表"] },
              { title: "雙層印刷", detail: "先印一層，再用刺繡框把布撐到拉伸狀態印第二層，填滿織紋的凹處。", tools: ["網版印刷", "刺繡框"] },
              { title: "接上 Arduino", detail: "繡上杜邦端子。兩端接 GND 與 5V，中間讀取電阻變化偵測拉伸；多個導電區接不同腳位偵測按壓。", tools: ["Arduino", "analogRead"] },
              { title: "觸覺回饋", detail: "伺服馬達拉緊或放鬆手腕綁帶。", tools: ["SG90"] },
              { title: "VR 遊戲", detail: "按壓左右兩側施放火、冰攻擊；左右拉伸啟動護盾，同時腕帶收緊。", tools: ["Unity", "Meta Quest 2"] }
            ]
          }
        ]
      },
      outcome: {
        headline: "TAICHI 2024 Best Demo，並獲 League of VR 最佳技術獎",
        body: "下一步希望在同一塊布上切分多個區段，偵測扭轉與壓縮。",
        visuals: [
          {
            type: "list",
            items: [
              { value: "Best Demo", label: "TAICHI 2024 台灣人機互動研討會" },
              { value: "最佳技術獎", label: "League of VR Final 2024" }
            ]
          }
        ]
      }
    },
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
    caseStudy: {
      question: "牆面出現裂縫或壁癌，嚴不嚴重？該找誰？",
      highlights: [
        { value: "InnoFest@ICI 2024", label: "受邀展出" },
        { value: "2025 AI Award", label: "參賽" }
      ],
      facts: [
        { label: "我的角色", value: "資訊開發組＋PM" },
        { label: "團隊", value: "4 人（DesignLens）" },
        { label: "指導教授", value: "陳宜秀、蔡炎龍" },
        { label: "期間", value: "2024–2025" }
      ],
      why: {
        headline: "一半以上的房屋超過 30 年，北部七成是要共同決策的集合住宅",
        body: "修繕評估需要專業，又要和同棟所有權人協商，多數人只能等出問題才找人修。",
        visuals: [
          {
            type: "stats",
            items: [
              { value: "51.1%", label: "房屋屋齡 30 年以上", source: "內政部不動產資訊平台，2023 年第 3 季" },
              { value: "70%+", label: "北部住宅為多人共同持有的集合住宅", source: "104 年住宅狀況抽樣調查（1 萬 7,705 宅）" }
            ]
          },
          { type: "tags", title: "常被低估的牆面問題", items: ["發霉", "裂縫", "鏽蝕", "空鼓", "壁癌"] }
        ]
      },
      scope: {
        headline: "鎖定北部集合住宅的住戶，先辨識三種常見牆損",
        visuals: [
          {
            type: "scope",
            items: [
              { label: "場域", value: "北部的公寓與大樓", chips: ["集合住宅"] },
              { label: "對象", value: "在乎居住安全、但缺乏專業知識的住戶" },
              { label: "辨識範圍", value: "三種常見牆損", chips: ["壁癌", "裂縫", "鏽蝕"] },
              { label: "利害關係人", value: "同棟住戶與維修師傅" }
            ]
          },
          {
            type: "cards",
            items: [
              { title: "使用者", detail: "「我很在乎！但什麼叫嚴重？」" },
              { title: "同棟住戶", detail: "「有必要嗎？我不願意。」" },
              { title: "維修師傅", detail: "「你要聯絡，我才知道。」" }
            ]
          }
        ]
      },
      insight: {
        headline: "在乎居住安全，卻缺知識，也不知道該找誰",
        visuals: [
          {
            type: "methods",
            items: [
              { value: "3", unit: "份", label: "二手資料", detail: "政府統計與外牆安全研究" },
              { value: "50+", unit: "份", label: "問卷", detail: "北部民眾的居住安全認知與習慣" },
              { label: "深度訪談", detail: "常關注牆面問題、對相關 App 有興趣的北部住民" }
            ]
          },
          {
            type: "bars",
            title: "問卷結果（北部民眾，50 份以上）",
            max: 100,
            items: [
              { label: "不熟悉居住建物的狀況", value: 70, display: "70% 以上" },
              { label: "沒有牆面與房屋安全意識", value: 60, display: "60% 以上" },
              { label: "曾向專業維修技師求助", value: 35, display: "35%", highlight: true, detail: "多數人沒有找過專業協助" },
              { label: "對 AI 快速檢測有興趣", value: 60, display: "60% 以上", highlight: true, detail: "線上快速檢測有需求" }
            ],
            source: "訪談也發現：只知道「找人維修」這條路，找師傅耗時、溝通繁瑣，還要和同棟所有權人協商。"
          }
        ]
      },
      solution: {
        headline: "拍一張照，就知道是什麼問題、多嚴重、該找誰",
        visuals: [
          {
            type: "mapping",
            leftTitle: "痛點",
            rightTitle: "功能",
            left: ["不知道怎麼判斷牆損", "擔心費用、嚴重程度與處置方式", "找師傅耗時、溝通繁瑣", "等出問題才修，缺乏長期習慣"],
            right: [
              { title: "即拍即檢：一張照片辨識多種牆損與範圍", links: [0] },
              { title: "AI 解釋：生成式 AI 回答費用、嚴重度與處置", links: [1] },
              { title: "處理管道：串接 Google Maps 提供聯繫方式", links: [2] },
              { title: "個人紀錄：定期提醒，每季、每年匯總建議", links: [3] }
            ]
          },
          {
            type: "flow",
            steps: [
              { title: "資料蒐集", detail: "使用 Roboflow Universe 的公開資料集，針對壁癌、裂縫、鏽蝕三類。", tools: ["Roboflow"] },
              { title: "前處理", detail: "統一圖片尺寸，產生每張圖對應的 mask。", tools: ["OpenCV"] },
              { title: "影像分割", detail: "判斷一張圖中的多個牆損特徵與範圍。", tools: ["U-Net"] },
              { title: "生成式 AI", detail: "把辨識結果轉成對話，以分階段的引導式 prompt 問答，並降低幻覺。", tools: ["ChatGPT API", "Prompt", "RAG"] },
              { title: "部署與測試", detail: "測試資訊正確性、批次回答良率，以及未知牆損、無法辨識圖像等例外情境。", tools: ["Next.js", "Python", "Node.js", "Firebase", "GCP Cloud Run"] }
            ]
          }
        ]
      },
      outcome: {
        headline: "受邀在 InnoFest@ICI 2024 展出，並參加 2025 AI Award",
        body: "下一步規劃內部測試與專家意見，完善建議內容並連結地區服務。",
        visuals: [
          {
            type: "cards",
            items: [
              { title: "減緩居住安危", detail: "提升自行簡單修復的正確率，減緩牆面受損速度。" },
              { title: "減少溝通成本", detail: "連結相關資源，提升處理意願和效率。" },
              { title: "增強居住意識", detail: "建立正確的房屋安全認知與防範意識。" }
            ]
          }
        ]
      }
    },
    stack: ["電腦視覺", "U-Net", "生成式 AI API"],
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
    caseStudy: {
      question: "1,499 萬人註冊的健保 App，為什麼多數人很少打開？",
      facts: [
        { label: "我的角色", value: "使用者研究、資訊架構與介面設計，主持易用性測試" },
        { label: "團隊", value: "4 人（政大「進階使用者經驗設計」第六組）" },
        { label: "期間", value: "2025 年 4–6 月" }
      ],
      contributions: [
        "問卷、深度訪談與 card sorting 的使用者研究",
        "依重要與緊急程度重建資訊架構與命名",
        "介面設計與改版 mockup",
        "主測一場易用性測試、線上支援另一場"
      ],
      why: {
        headline: "1,499 萬人註冊，每月卻只有 98 萬人在用",
        body: "陳妍庭（2024）調查 397 位使用者，最需要優化的是功能完整、介面友善與信任度。",
        visuals: [
          {
            type: "bars",
            title: "健保快易通的使用情況",
            max: 1499,
            items: [
              { label: "註冊人數", value: 1499, display: "1,499 萬" },
              { label: "每月活躍使用者", value: 98, display: "98 萬", highlight: true, detail: "約為註冊人數的 6.5%" }
            ],
            source: "滑過長條看比例。"
          }
        ]
      },
      scope: {
        headline: "鎖定三種使用者，與三條最關鍵的任務",
        visuals: [
          {
            type: "scope",
            items: [
              { label: "場域", value: "健保快易通 App（健保署官方 App）", chips: ["健康存摺", "醫療查詢", "行動櫃檯"] },
              { label: "範圍", value: "三條核心流程、9 項任務", chips: ["自己看診後查紀錄", "查家人的檢查報告與用藥", "保費繳納與投保資訊"] }
            ]
          },
          {
            type: "cards",
            items: [
              { title: "管理自己的一般使用者", detail: "偶爾查健檢數據或疫苗紀錄，覺得醫療數據不完整、缺乏視覺化。" },
              { title: "管理自己的頻繁使用者", detail: "慢性病患者，要追蹤數值；看診時間短，常忘記醫囑。" },
              { title: "管理家人的頻繁使用者", detail: "幫長輩管理健康資訊、預約就診、提醒吃藥。" }
            ]
          }
        ]
      },
      insight: {
        headline: "使用者不是不在乎，而是需要的資訊藏得太深",
        body: "Card sorting 中，大家都說健保資訊重要，排序時卻放在後面；都說需要幫家人查，實際上卻無能為力。",
        visuals: [
          {
            type: "methods",
            items: [
              { value: "72", unit: "份", label: "問卷", detail: "使用習慣、需求與痛點" },
              { value: "7", unit: "位", label: "深度訪談", detail: "醫護、照顧家人者與慢性病患者" },
              { value: "5", unit: "位", label: "Card sorting", detail: "分類與重要性排序，含二次驗證" },
              { value: "5", unit: "位", label: "易用性測試", detail: "3 條流程、9 項任務與 SUS" }
            ]
          },
          {
            type: "bars",
            title: "問卷結果（72 份）",
            max: 100,
            items: [
              { label: "在 2020–2021 年下載", value: 70.7, display: "70.7%", detail: "多數人在疫情期間下載" },
              { label: "約一季才用一次或更少", value: 70, display: "70% 以上", highlight: true, detail: "下載後很少再打開" }
            ],
            source: "滑過長條看說明。"
          }
        ]
      },
      solution: {
        headline: "依重要與緊急程度重排資訊，常用紀錄一次點擊就到",
        visuals: [
          {
            type: "mapping",
            leftTitle: "痛點",
            rightTitle: "設計",
            left: [
              "名稱和內容對不上，「健康存摺」聯想不到檢查報告",
              "最常用的就醫與用藥紀錄，藏在三層以下",
              "看診時講不清楚自己的狀況",
              "幫家人查資料時，不知道正在看誰",
              "異常最想先看，但紅色會引發焦慮",
              "迷路後找不到上一頁"
            ],
            right: [
              { title: "重新命名：健康存摺改為醫療紀錄，分就醫、用藥、檢查報告", links: [0] },
              { title: "資訊三層分級，就醫與用藥提到導覽列", links: [1] },
              { title: "首頁改成可自訂的健康總覽", links: [1, 2] },
              { title: "身分切換放在畫面最上方", links: [3] },
              { title: "異常改用淺黃底標示", links: [4] },
              { title: "麵包屑、相關資料導流與分頁", links: [5] }
            ]
          },
          {
            type: "flow",
            steps: [
              { title: "問卷與訪談", detail: "收斂出三種使用者角色與「預防」「治療」兩層期待。", tools: ["問卷 72 份", "訪談 7 位"] },
              { title: "Card sorting", detail: "找出使用者心中的分類邏輯與重要性，並二次驗證前期受訪者。", tools: ["5 位", "四關排序"] },
              { title: "資訊架構", detail: "依重要與緊急程度分三層，重新命名核心分類。", tools: ["三層分級", "重新命名"] },
              { title: "Wireframe", detail: "針對三條核心流程訂出最小雛形範圍。", tools: ["三條核心流程"] },
              { title: "易用性測試", detail: "記錄完成率、時間與錯誤，後測填 SUS 並做視覺排序。", tools: ["放聲思考", "SUS", "FigJam"] },
              { title: "Mockup", detail: "依測試結果收斂 8 項優化，完成改版。", tools: ["8 項優化"] }
            ]
          }
        ]
      },
      outcome: {
        headline: "測試後收斂 8 項優化，並評估 AI 能介入哪些設計環節",
        visuals: [
          {
            type: "tags",
            title: "8 項優化",
            items: ["可自訂的健康儀表板", "醫師和你的一站索引", "麵包屑與相關資料導流", "不恐慌的重要標示", "分頁單頁瀏覽", "身分切換放最上方", "繳納與福利整合一頁", "健康總覽當首頁"]
          },
          {
            type: "table",
            head: ["設計環節", "AI 工具", "評估"],
            rows: [
              ["人物誌", "FounderPal", "情境不在地、情緒單薄"],
              ["Use case", "ChatGPT", "和人工整理差異不大，能加快分析"],
              ["資訊架構", "QoQo AI", "內容不詳細，也不支援中文"],
              ["Wireframe", "Stitch、Visily、Relume", "產出快，但扁平、細節少"],
              ["測試與訪談", "Maze、Genway AI", "能潤飾題目與摘要，但察覺不到語氣"]
            ],
            caption: "AI 適合整理靜態資訊；任務設計、結果分析與測試中的追問，仍需要研究者的判斷。"
          }
        ]
      }
    },
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
    caseStudy: {
      question: "疫情讓交流搬到線上，怎麼讓每一場知識分享累積成講者的數位履歷？",
      highlights: [
        { value: "第一名", label: "2022 大專院校資訊應用服務創新競賽 IPv4" },
        { value: "30 場", label: "2023 年線上分享會" }
      ],
      facts: [
        { label: "我的角色", value: "開發、營運公關與活動企劃" },
        { label: "團隊", value: "輔仁大學資管系畢業專題（產學合作）" },
        { label: "期間", value: "2021–2023" }
      ],
      contributions: ["平台開發", "2023 年負責平台的營運公關與活動企劃"],
      why: {
        headline: "疫情讓交流搬到線上，也凸顯了資訊不對稱",
        body: "線下交流變少，DeepLink 想讓人透過線上研討會直接向他人學習、和感興趣的人建立聯繫。"
      },
      scope: {
        headline: "連結想分享的講者與想學習的學生，聚焦科技與管理",
        visuals: [
          {
            type: "cards",
            items: [
              { title: "講者", detail: "不需大量後製剪輯，把每一場分享累積成可展示的數位資產。" },
              { title: "參加者", detail: "透過線上研討會直接向他人學習，和感興趣的人建立聯繫。" }
            ]
          },
          { type: "tags", title: "分享主題", items: ["網站開發", "職場經驗", "圓桌論壇", "程式設計", "專案管理", "金融科技"] }
        ]
      },
      solution: {
        headline: "一站式整合活動發想、直播與成果紀錄",
        body: "支援同步與非同步互動，把分享成果轉為講者可展示的數位履歷。Webinar 依目的分成三種形式：",
        visuals: [
          {
            type: "cards",
            items: [
              { title: "演講", detail: "著重分享知識，主題由主講人自訂。" },
              { title: "討論", detail: "針對特定議題或案例，讓參加者自由發言、鍛鍊思辨力。" },
              { title: "實作教學", detail: "參加者跟著主講人實作，在短時間內熟悉觀念與語法。" }
            ]
          }
        ]
      },
      outcome: {
        headline: "競賽第一名，畢業後由系上接手營運",
        visuals: [
          {
            type: "bars",
            title: "2023 年線上分享會（共 30 場）",
            max: 25,
            items: [
              { label: "協辦", value: 25, display: "25 場" },
              { label: "主辦", value: 5, display: "5 場" }
            ]
          },
          {
            type: "tags",
            title: "獲獎與補助",
            items: ["2022 大專院校資訊應用服務創新競賽 IPv4 第一名", "全國大專院校智慧創新暨跨域整合創作競賽最佳注目獎", "專題優秀組別獎", "強棒培育奪標計畫補助 3 萬元"]
          }
        ]
      }
    },
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
    caseStudy: {
      question: "能不能把抽象的記憶，變成可以走進去、迷路、再重新找到路的空間？",
      facts: [
        { label: "期間", value: "2026 年春季，清華大學美術學院交換期間" },
        { label: "形式", value: "Unity 3D 互動場景結合實體裝置" }
      ],
      why: {
        headline: "把抽象的記憶結構，轉化為可以行走的空間經驗"
      },
      solution: {
        headline: "以迷宮理論建構空間，再把虛擬場景接上實體裝置",
        visuals: [
          {
            type: "flow",
            steps: [
              { title: "空間邏輯", detail: "以迷宮理論作為空間建構的邏輯，把記憶的結構轉成可以行走、迷失與重新尋路的路徑。", tools: ["迷宮理論", "空間敘事"] },
              { title: "3D 場景", detail: "在 Unity 開發可互動的 3D 場景。", tools: ["Unity"] },
              { title: "虛實整合", detail: "結合實體裝置與虛擬場景，讓觀眾在展場中互動。", tools: ["實體裝置"] }
            ]
          }
        ]
      },
      outcome: {
        headline: "以虛實整合的形式在展場展出"
      }
    },
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
    caseStudy: {
      question: "怎麼把水母柔軟的外型與觸手的動態，轉譯成機器人的機構？",
      facts: [
        { label: "期間", value: "2026 年春季，清華大學美術學院交換期間" },
        { label: "形式", value: "角色機器人原型" }
      ],
      why: {
        headline: "練習把生物的型態與動態，轉譯為機構與互動設計"
      },
      solution: {
        headline: "從 3D 建模、機構到致動器控制，做出水母角色原型",
        visuals: [
          {
            type: "flow",
            steps: [
              { title: "3D 建模", detail: "水母頭、齒輪與其他元件以 3D 建模；水母頭經過尺寸修訂，再做出新版。", tools: ["3D 建模", "STL"] },
              { title: "機構設計", detail: "以柔性外型與觸手結構為重點，讓觸手能呈現動態。", tools: ["柔性結構", "齒輪"] },
              { title: "致動與控制", detail: "完成致動器接線與控制邏輯。", tools: ["致動器", "控制程式"] }
            ]
          }
        ]
      }
    },
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
    caseStudy: {
      question: "桌上型機器人能不能靠口部與舌頭的動作，表現出生命感？",
      facts: [
        { label: "期間", value: "2026 年春季，清華大學美術學院交換期間" },
        { label: "形式", value: "桌上型角色機器人原型" }
      ],
      why: {
        headline: "透過角色化的外型與動作機構，探索桌上型機器人的表現方式"
      },
      solution: {
        headline: "以 Arduino 驅動口部與舌頭的動作機構",
        visuals: [
          {
            type: "flow",
            steps: [
              { title: "角色外型", detail: "以蜥蜴為角色，設計桌上型的外型。", tools: ["角色設計"] },
              { title: "動作機構", detail: "設計口部與舌頭的動作機構。", tools: ["機構設計"] },
              { title: "接線與控制", detail: "完成致動器接線，以 Arduino 控制程式驅動動作。", tools: ["Arduino", "致動器"] }
            ]
          }
        ]
      }
    },
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
    caseStudy: {
      question: "提醒喝水這件事，能不能溫柔一點、不打擾人？",
      facts: [
        { label: "期間", value: "2025" },
        { label: "形式", value: "智慧水壺概念設計、Figma 互動原型與 AI 生成概念影片" }
      ],
      why: {
        headline: "提醒喝水，要懂得使用者的專注與分心",
        body: "概念影片的主張是：它理解你專注時的安靜、分心時的停頓，在適當的時機用一道柔和的光示意。"
      },
      solution: {
        headline: "用燈光與表情溝通的擬人化水壺",
        visuals: [
          {
            type: "image",
            src: MizutoStatesImg,
            alt: "Mizuto 水壺的四種狀態：待機表情、藍色、黃色 Drink 提示與氣溫顯示",
            caption: "概念影片（以 DeeVid AI 生成）中的四種狀態：待機表情、藍色、黃色「Drink」與氣溫顯示。"
          },
          {
            type: "table",
            head: ["燈號", "意思"],
            rows: [
              ["藍光", "提醒裝水"],
              ["黃光", "提醒喝水"]
            ],
            caption: "Figma 原型的流程圖包含「使用者是否喝水」「飲水量不足」「長時間停頓後」「使用者裝水」等判斷節點。"
          }
        ]
      },
      outcome: {
        headline: "完成 Figma 互動原型，並規劃延伸到個人健康管理",
        body: "下一步規劃以 AI 感測分辨純水與飲料。"
      }
    },
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
    caseStudy: {
      question: "北捷的實體滿意度很高，為什麼官方 App 卻很少人用？",
      highlights: [{ value: "2025 捷運盃黑客松", label: "「設計創新・AI 賦能」App 競賽提案" }],
      facts: [
        { label: "我的角色", value: "專案管理、架構設計" },
        { label: "團隊", value: "5 人（政大數位內容碩士、傳播碩士學位學程）" },
        { label: "期間", value: "2025" }
      ],
      why: {
        headline: "整體滿意度 97.7%，只有 25.4% 的旅客用過官方 App",
        body: "旅客的搭乘目的以上下班（30%）居首，其次是休閒遊憩（17.4%）與親友聚會（17.2%）。",
        visuals: [
          {
            type: "bars",
            title: "旅客對「台北捷運 GO」App 的認識",
            max: 100,
            items: [
              { label: "用過", value: 25.4, display: "25.4%" },
              { label: "聽過但沒下載", value: 16.6, display: "16.6%" },
              { label: "完全不知道", value: 58, display: "58%", highlight: true }
            ],
            source: "資料來源：113 年臺北捷運旅客滿意度調查"
          }
        ]
      },
      scope: {
        headline: "鎖定日常通勤者與休閒探索者兩種乘客",
        visuals: [
          {
            type: "cards",
            items: [
              { title: "日常通勤者", detail: "固定路線、集中在早晚尖峰（07:00–09:00、17:00–19:00），重視準時與即時資訊。" },
              { title: "休閒探索者", detail: "假日或非通勤時段搭乘，參加城市活動，用過 Accupass、Klook 等活動服務。" }
            ]
          }
        ]
      },
      insight: {
        headline: "兩種乘客都要在多個 App 之間切換，才拼得出完整資訊",
        body: "受訪者放棄官方 App 的主因是「App 太多、功能分散、更新不即時」。",
        visuals: [
          {
            type: "methods",
            items: [
              { value: "131", unit: "份", label: "問卷" },
              { value: "8", unit: "位", label: "深度訪談" }
            ]
          },
          {
            type: "cards",
            items: [
              { title: "通勤者最在意", detail: "秒級班距、車廂擁擠與轉乘出口；遇到延誤或擁擠，容易引發遲到焦慮。" },
              { title: "探索者需要", detail: "從 IG 貼文、旅遊部落格找靈感，需要「靈感 → 交通 → 人潮」的整合資訊。" }
            ]
          }
        ]
      },
      solution: {
        headline: "以 LOOK → PLAN → GO → WOW 四個階段，打造單一入口的 AI 旅伴",
        visuals: [
          {
            type: "flow",
            steps: [
              { title: "LOOK 感知與探索", detail: "以 GPS 與藍牙定位，掌握附近站點、車廂擁擠狀況與站外資訊。", tools: ["GPS", "藍牙定位"] },
              { title: "PLAN 規劃與預測", detail: "整合個人搭乘紀錄與活動偏好，提供路線建議與轉乘提示。", tools: ["搭乘紀錄", "推薦"] },
              { title: "GO 即時陪伴", detail: "搭乘途中由 AI 推送順路的活動、優惠與景點。", tools: ["情境感知", "推播"] },
              { title: "WOW 體驗延伸", detail: "以活動推播延伸數位互動，讓捷運成為串連城市故事的導覽者。", tools: ["活動推播"] }
            ]
          },
          {
            type: "cards",
            items: [
              { title: "資料可得", detail: "班距、車廂擁擠度、出口動線、氣象與異常公告，多數可透過北捷既有資料與開放 API 取得。" },
              { title: "漸進導入", detail: "卡片式模組先以規則式邏輯上線，資料累積後再導入機器學習。" },
              { title: "擴充既有 App", detail: "作為「台北捷運 GO」的功能模組，避免額外開發與導流成本。" }
            ]
          }
        ]
      }
    },
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
    caseStudy: {
      question: "怎麼讓民眾在一段對話裡，一步步認識動物園的認養流程？",
      facts: [
        { label: "期間", value: "2025" },
        { label: "形式", value: "ChatGPT GPTs 對話機器人" }
      ],
      why: {
        headline: "認養資訊分散在官網、申請單與操作指南等多份文件"
      },
      solution: {
        headline: "以動物角色當嚮導，把 6 份認養文件變成一段對話",
        visuals: [
          {
            type: "flow",
            steps: [
              { title: "角色設計", detail: "設計動物型 Agent 的語言風格與個性。", tools: ["角色設計"] },
              { title: "互動步驟", detail: "規劃引導步驟，讓使用者逐步了解認養流程，並傳遞保育價值。", tools: ["對話設計"] },
              { title: "知識庫", detail: "把臺北市立動物園的認養文件整理成知識庫，讓 Bot 能回答認養相關問題。", tools: ["ChatGPT GPTs", "知識庫"] }
            ]
          },
          {
            type: "tags",
            title: "知識庫的 6 份文件",
            items: ["個人認養線上申請操作指南 2025", "臺北市動物認養申請單", "企業認養說明", "官網認養頁面（兩份）", "認養卡底圖"]
          }
        ]
      },
      outcome: {
        headline: "已發布為 ChatGPT GPTs，可以直接試用"
      }
    },
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
    caseStudy: {
      question: "怎麼讓年輕人願意買二手衣，還會主動分享出去？",
      highlights: [{ value: "OpenHCI'24", label: "技術 TA，指導第六組" }],
      facts: [
        { label: "我的角色", value: "OpenHCI'24 技術 TA" },
        { label: "團隊", value: "OpenHCI'24 第六組學員" },
        { label: "期間", value: "2024 年 7 月" }
      ],
      contributions: ["從訪談與行為觀察階段開始協助學員團隊", "協助整合 Unity AR、LED 燈光與感測器"],
      why: {
        headline: "二手衣能實踐永續，產業卻面臨三個困境",
        visuals: [
          {
            type: "cards",
            items: [
              { title: "品質下降", detail: "快時尚讓二手衣品質下降，整理與人力成本高，價格誘因不足。" },
              { title: "外銷減少", detail: "中國從需求方轉為供給方，非洲研議禁止進口，疫情期間運費大漲。" },
              { title: "焚化成本增加", detail: "舊衣纖維屬於高熱值廢棄物，混紡材質也影響垃圾處理效率。" }
            ]
          }
        ]
      },
      scope: {
        headline: "鎖定在社群上被動接收資訊的年輕人",
        visuals: [
          {
            type: "scope",
            items: [
              { label: "對象", value: "22 歲大學生 Sophie", chips: ["喜歡逛街買衣服", "手機不離身", "容易受他人影響"] },
              { label: "需求", value: "在社群上被動接收二手衣資訊，並以得到回饋作為永續行為的誘因" },
              { label: "場域", value: "二手衣店的試衣情境" }
            ]
          }
        ]
      },
      insight: {
        headline: "買二手衣的阻力，是管道難找、款式難挑、狀況存疑",
        visuals: [
          {
            type: "methods",
            items: [
              { value: "9", unit: "家", label: "電訪二手衣店", detail: "了解二手衣的處理流程" },
              { value: "9", unit: "位", label: "受訪者", detail: "購買二手衣的誘因與阻力" }
            ]
          },
          {
            type: "mapping",
            leftTitle: "誘因與阻力",
            rightTitle: "設計方向",
            left: ["誘因：好看、有風格", "阻力：購買管道難以獲得", "阻力：難找到喜歡的款式", "阻力：使用狀況存疑"],
            right: [
              { title: "以濾鏡生成有氛圍感的配件", links: [0] },
              { title: "用酷體驗促使使用者主動散播資訊", links: [1] },
              { title: "推薦舊衣搭配二手衣", links: [2] },
              { title: "增加介紹二手衣的切入點", links: [3] }
            ]
          }
        ]
      },
      solution: {
        headline: "試穿二手衣時，依風格給出專屬的光、聲音與氣味",
        body: "使用者在二手衣店試穿後與 AR 裝置互動、拍照上傳社群，讓永續資訊透過社群擴散。",
        visuals: [
          {
            type: "table",
            head: ["風格", "燈光", "聲音", "氣味"],
            rows: [
              ["簡約風", "藍綠", "咖啡廳輕音樂", "—"],
              ["復古風", "黃咖", "草東沒有派對", "—"],
              ["OL 風", "白色", "馬路白噪音", "咖啡味"],
              ["嘻哈風", "紫紅隨機", "嘻哈音樂、城市背景音", "酒味"]
            ]
          },
          {
            type: "scope",
            items: [
              { label: "視覺", value: "Unity AR、可調色 LED、人體辨識" },
              { label: "聽覺", value: "音訊輸出" },
              { label: "嗅覺", value: "水霧感測器" },
              { label: "感測", value: "人體超音波感測、RFID" },
              { label: "物件", value: "相片留存" }
            ]
          }
        ]
      }
    },
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
    caseStudy: {
      question: "借一間討論室，為什麼要在系統裡來回找？",
      facts: [
        { label: "我的角色", value: "市場調研、使用者研究和介面設計" },
        { label: "團隊", value: "4 人（政大「人機互動設計」第 8 組）" },
        { label: "期間", value: "2024 年秋季" }
      ],
      why: {
        headline: "原本的借用系統版面雜亂、資訊不足，操作也常卡住",
        visuals: [
          {
            type: "cards",
            items: [
              { title: "介面", detail: "版面雜亂，設計元素干擾閱讀。" },
              { title: "功能", detail: "空間資訊不足。" },
              { title: "操作", detail: "無法順利回到上一頁。" }
            ]
          }
        ]
      },
      scope: {
        headline: "鎖定住宿舍、常需要小組討論空間的研究生",
        visuals: [
          {
            type: "scope",
            items: [
              { label: "對象", value: "23 歲碩士生，住在學校宿舍", chips: ["用過借用系統但頻率低", "經常需要小組討論空間"] },
              { label: "期待", value: "快速找到符合需求的空間", chips: ["知道每間的設備", "了解各空間的借用規定"] }
            ]
          }
        ]
      },
      insight: {
        headline: "借用前、借用中、借用後，各有要先弄清楚的事",
        visuals: [
          {
            type: "table",
            head: ["階段", "使用者要做的事"],
            rows: [
              ["借用前", "知道哪些空間可以借、了解每間的設備"],
              ["借用中", "事先輸入共同使用者的學號，依條件選擇空間"],
              ["借用後", "了解報到規定，完成預約或取消"]
            ]
          }
        ]
      },
      solution: {
        headline: "用篩選與逐步引導，把借用拆成四個步驟",
        visuals: [
          {
            type: "flow",
            steps: [
              { title: "共同使用者", detail: "先輸入共同使用者的學號。", tools: ["學號驗證"] },
              { title: "空間列表", detail: "依條件篩選，並預覽空間。", tools: ["篩選", "進階篩選", "預覽"] },
              { title: "空間詳情", detail: "查看空間資訊，切換日期與空間，選擇空檔。", tools: ["即時使用狀態"] },
              { title: "確認", detail: "確認借用資訊與借用規定。", tools: ["規則呈現"] }
            ]
          },
          {
            type: "tags",
            title: "設計原則",
            items: ["便利：清楚的篩選與逐步引導", "彈性：可調整的篩選選單", "友善：柔和色調、圓角按鈕", "穩定：清楚的回饋與穩定的版面", "透明：即時的空間使用狀態", "簡潔：清楚的圖示與文字"]
          }
        ]
      },
      outcome: {
        headline: "測試者肯定篩選方式與規則呈現，覺得流程更順",
        visuals: [
          {
            type: "list",
            items: [
              { value: "肯定", label: "篩選討論室的方式、系統規則的呈現與介面視覺；最在意的「流程順暢」被照顧到" },
              { value: "待改進", label: "時間範圍的設定與資訊的完整度" }
            ]
          }
        ]
      }
    },
    stack: ["使用者訪談", "任務觀察", "資訊架構", "流程優化"],
    image: VenueImg,
    links: [{ type: "slides", href: "https://canva.link/jali9hgnuhqxftq" }]
  },
  {
    year: "2023",
    slug: "iharbor",
    title: "iHarbo：AI 長照藥物管理 App",
    context: "AI Junior Award 2024 決選",
    tagline: "彌平多病共患照護中的資訊落差，協助家庭照顧者管理長輩用藥與不適紀錄",
    caseStudy: {
      question: "多病共患的長輩，照顧者怎麼記得住所有的藥物與症狀？",
      highlights: [{ value: "AI Junior Award 2024", label: "進入決選" }],
      facts: [
        { label: "我的角色", value: "市場調研、使用者研究和設計、專案管理、開發" },
        { label: "團隊", value: "3 人（火花設計工作室），指導老師王聖銘、黃揚名" },
        { label: "期間", value: "2023–2024" }
      ],
      why: {
        headline: "長輩多病共患，藥物交互作用與重複用藥的風險跟著增加",
        visuals: [
          {
            type: "bars",
            title: "老人罹患慢性病的比例",
            max: 100,
            items: [
              { label: "至少 1 項慢性病", value: 84.7, display: "84.7%" },
              { label: "患有 2 項慢性病", value: 63.8, display: "63.8%" },
              { label: "患有 3 項慢性病", value: 42.8, display: "42.8%", highlight: true }
            ],
            source: "資料來源：衛生福利部國民健康署 2017 年國民健康訪問調查"
          }
        ]
      },
      scope: {
        headline: "鎖定 35–60 歲、要照顧長輩的三明治族群",
        visuals: [
          {
            type: "cards",
            items: [
              { title: "年輕照顧者", detail: "習慣網路科技，想多找資訊，卻不知道要聚焦什麼。" },
              { title: "中年照顧者", detail: "不擅長網路科技，傾向相信人，但時間一久會忘記要問什麼。" }
            ]
          },
          { type: "tags", title: "照護關係中的利害關係人", items: ["被照顧者", "家庭照顧者", "醫師", "照服員"] }
        ]
      },
      insight: {
        headline: "照顧者的共同痛點：細節記不住、藥物與症狀太多、經驗不足",
        body: "我們針對三類對象設計訪談：",
        visuals: [
          {
            type: "methods",
            items: [
              { label: "家庭照顧者", detail: "日常照顧、資訊需求與產品回饋" },
              { label: "照服員", detail: "工作流程、家屬互動與工具需求" },
              { label: "長輩", detail: "疾病歷程、不適時如何表達" }
            ]
          }
        ]
      },
      solution: {
        headline: "用 AI 摘要用藥與不適紀錄，讓照顧者看診時說得清楚",
        visuals: [
          {
            type: "mapping",
            leftTitle: "痛點",
            rightTitle: "功能",
            left: ["時間一久，容易忘記細節", "多病共患，藥物和症狀繁多", "經驗和知識不足，看診時說不清楚"],
            right: [
              { title: "AI 摘要短期新藥的不適反應與長期慢性病症狀", links: [0, 2] },
              { title: "拍藥單辨識文字，降低輸入門檻", links: [1] },
              { title: "依服藥時段與領藥、複診時間整理提醒", links: [1] },
              { title: "看診時向醫師陳述症狀反應，提供聚焦的判斷資訊", links: [2] }
            ]
          },
          {
            type: "flow",
            steps: [
              { title: "資料集", detail: "使用政府資料開放平臺的藥品仿單或外盒資料（27,194 筆）與未註銷藥品許可證（26,312 筆）。", tools: ["政府開放資料"] },
              { title: "藥單辨識", detail: "把藥單圖像轉成文字，標註 10 種特徵，例如醫事機構、服用方式與複診時間。", tools: ["Google Cloud Vision"] },
              { title: "摘要生成", detail: "以 12 種照護特徵建立測試資料，例如慢性病、過敏史與血壓，生成用藥與不適摘要。", tools: ["OpenAI API"] },
              { title: "系統架構", detail: "前端以 Fetch API 串接後端，雲端函式處理請求，Webhooks 定期同步資料集。", tools: ["Cloud Function", "Webhooks"] },
              { title: "測試", detail: "批次檢驗資訊正確性與例外處理，並請照服員與曾任家庭照顧者協助測試、收集修改意見。", tools: ["照服員", "家庭照顧者"] }
            ]
          }
        ]
      },
      outcome: {
        headline: "進入 AI Junior Award 2024 決選"
      }
    },
    stack: ["服務設計", "App 設計", "AI 摘要", "藥單文字辨識"],
    image: IHarborImg,
    links: [{ type: "video", href: "https://www.youtube.com/watch?v=1JmtzLllJCA" }]
  },
  {
    year: "2023",
    slug: "tears-of-ancestors",
    title: "Tears of Ancestors：敘事型 2D 遊戲",
    context: "台灣大專院校創意遊戲設計競賽 2023 決選",
    tagline: "結合塔防與探索、以環境議題為背景的 2D 遊戲",
    caseStudy: {
      question: "2D 遊戲多半只有一種玩法，能不能同時玩塔防與探索？",
      highlights: [{ value: "2023 決選", label: "台灣大專院校創意遊戲設計競賽" }],
      facts: [
        { label: "我的角色", value: "專案管理、企劃、開發" },
        { label: "團隊", value: "3 人，指導教授紀明德（政大）" },
        { label: "期間", value: "2023 年 12 月" }
      ],
      why: {
        headline: "多數 2D 遊戲只有一種玩法",
        body: "我們想讓玩家在不同玩法之間切換，也在遊玩之餘反思環境議題。"
      },
      solution: {
        headline: "地上與地下雙線組合，在塔防與探索之間切換",
        visuals: [
          {
            type: "cards",
            items: [
              { title: "雙線玩法", detail: "結合塔防與探索，形成地上和地下的雙線組合，玩家可以在兩種遊戲核心之間切換。" },
              { title: "環境議題", detail: "故事以環境議題包裝，讓玩家反思大自然反撲與相關的歷史事件。" }
            ]
          }
        ]
      },
      outcome: {
        headline: "進入 2023 台灣大專院校創意遊戲設計競賽決選"
      }
    },
    stack: ["遊戲企劃", "2D 遊戲開發", "專案管理"],
    image: TearsImg,
    links: [{ type: "video", href: "https://www.youtube.com/watch?v=utajysQgYvw" }]
  }
];
