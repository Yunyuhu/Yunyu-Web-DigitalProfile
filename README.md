# 胡芸毓的數位履歷｜Yunyu Hu Digital Profile

這是胡芸毓的個人作品集網站。內容涵蓋人機互動研究、UX 設計與軟硬體互動原型，整理學經歷、專案、研究發表與獲獎紀錄。

🔗 網站：<https://yunyu-web-digital-profile.vercel.app>

## 網站內容

| 頁面 | 路徑 | 內容 |
|---|---|---|
| 首頁 | `/` | 個人標語與動態字句 |
| 關於我 | `/about` | 學歷、技能專長、研究主題，以及工作與教學、專案、研究與發表、獲獎展出、社群參與的時間軸 |
| 興趣 | `/interests` | 生活興趣與環形相片牆 |
| 專案 | `/projects` | 專案列表，可搜尋並分頁，精選專案排在最前面 |
| 專案詳細頁 | `/projects/[slug]` | 單一專案的重點、技術與方法、相關資源（影片、簡報、原型等） |
| 研究與活動 | `/research` | 研究發表與活動紀錄 |

所有頁面都支援手機、平板與桌機。桌機版的頁面選單在左側欄；寬度小於 1024px 時，選單收進右上角的 ☰ 按鈕。

## 技術

- [Next.js 15](https://nextjs.org)（App Router）與 React 19
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev)：換頁、卡片進場與選單動畫，並尊重系統的「減少動態效果」設定
- [Radix UI Tabs](https://www.radix-ui.com)：關於我頁的分頁
- [OGL](https://github.com/oframe/ogl)：興趣頁的環形相片牆
- [lucide-react](https://lucide.dev)：圖示
- Google Analytics 4：流量分析
- 部署在 [Vercel](https://vercel.com)

## 專案結構

```text
src/
├── app/
│   ├── layout.js              # 整體版面：側欄＋內容，並載入 GA4
│   ├── template.js            # 換頁淡入動畫
│   ├── page.js                # 首頁
│   ├── about/                 # 關於我
│   ├── interests/             # 興趣
│   ├── projects/              # 專案列表
│   │   └── [slug]/page.js     # 專案詳細頁（依 projects.js 自動產生）
│   └── research/              # 研究與活動
├── components/
│   ├── Sidebar.js             # 側欄（個人資訊、社群連結、手機版折疊選單）
│   ├── SidebarNav.js          # 頁面選單
│   ├── Analytics.js           # Google Analytics 4
│   ├── FadeIn.js              # 捲動到畫面內時淡入
│   ├── TextAnimations/        # 首頁動態字句、興趣頁相片牆
│   └── ui/                    # 卡片與分頁元件
├── data/
│   └── projects.js            # 所有專案的資料（專案頁、詳細頁、關於我共用）
└── image/                     # 專案、研究與興趣頁的圖片
```

## 本機開發

需要 Node.js 22。

```bash
npm install
npm run dev
```

打開 <http://localhost:3000> 即可預覽，存檔後畫面會自動更新。

> 同一個資料夾一次只開一個 `npm run dev`。多個伺服器會共用 `.next` 快取，容易出現 `Cannot find module` 或頁面 500。遇到時先停掉所有伺服器，再執行 `rm -rf .next && npm run dev`。

## 更新內容

### 新增或修改專案

所有專案集中在 [`src/data/projects.js`](src/data/projects.js)。專案列表、詳細頁與關於我頁的專案時間軸都讀這份資料，改一處就會同步。

每個專案的欄位：

| 欄位 | 說明 |
|---|---|
| `slug` | 網址代稱，例如 `flexitouch` 會產生 `/projects/flexitouch` |
| `title`、`subtitle` | 中文標題與英文副標（副標只在詳細頁顯示） |
| `year`、`context` | 年份與專案背景（課程、競賽、合作單位等） |
| `tagline` | 一句話說明，顯示在卡片上 |
| `highlights` | 專案重點，詳細頁逐條列出 |
| `stack` | 技術與方法標籤，也會被搜尋 |
| `image` | 封面圖，放在 `src/image/projects/` 後 import |
| `links` | 相關資源，`type` 可用 `video`、`prototype`、`slides`、`doc`、`live`、`archive` |
| `featured` | 設為 `true` 會加上「精選專案」標籤 |

陣列順序就是專案列表的顯示順序。

### 其他頁面

- 關於我：[`src/app/about/page.js`](src/app/about/page.js) 裡的 `skillGroups`（技能）、`researchInterests`（研究主題）、`experience`（工作與教學，由新到舊排列）與 `data`（研究、獲獎、社群）。
- 研究與活動：[`src/app/research/page.js`](src/app/research/page.js)。

## 流量分析

網站使用 Google Analytics 4，評估 ID 寫在 [`src/components/Analytics.js`](src/components/Analytics.js)。若要換成別的 ID，可在 Vercel 設定環境變數 `NEXT_PUBLIC_GA_ID`。

- 只在正式網站載入，本機開發的瀏覽不會計入。
- 換頁會由 GA4 的「加強型評估」自動記錄，請確認資料串流中這項設定是開啟的。
- 數據在 [Google Analytics](https://analytics.google.com) 的「報表」查看：「即時」看目前訪客，「使用者屬性」看國家與城市，「網頁和畫面」看各頁瀏覽次數與平均參與時間。

## 部署

專案連結 Vercel，推送到 `main` 分支後會自動部署。
