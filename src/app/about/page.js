"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

// 「查看專案」固定放在每一列的右側，各分頁同一種樣式；手機只留箭頭，避免擠壓左側文字
const ProjectLink = ({ href }) => (
  <Link
    href={href}
    aria-label="查看專案"
    className="group shrink-0 inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-teal-200 p-1.5 sm:px-3 sm:py-1 text-xs font-medium text-teal-700 transition-colors hover:bg-teal-50 hover:text-teal-900"
  >
    <span className="hidden sm:inline">查看專案</span>
    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
  </Link>
);

// 一般時間軸：年份、標題、說明、補充條列、標籤，有 href 時右側附上「查看專案」
const timelineItems = (items) => {
  if (!Array.isArray(items)) return null;
  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="border-l-4 border-teal-500 pl-4 ml-2 flex items-center justify-between gap-3 sm:gap-6"
        >
          <div className="min-w-0 flex-1">
            <p className="text-xs text-gray-500 mb-1">{item.year}</p>
            {item.title && (
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
            )}
            {item.description && (
              <p className="text-sm text-gray-700 mt-0.5">{item.description}</p>
            )}
            {item.details && (
              <ul className="list-disc pl-5 mt-1 space-y-0.5 text-sm text-gray-700">
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          {item.href && <ProjectLink href={item.href} />}
        </motion.div>
      ))}
    </div>
  );
};

// 經歷列表：職稱、單位、期間固定在同一位置，方便快速掃讀
const experienceList = (items) => (
  <div className="space-y-3">
    {items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
        className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-teal-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <p className="text-sm font-semibold text-gray-800">{item.role}</p>
          <p className="text-xs text-gray-500 shrink-0">{item.period}</p>
        </div>
        {item.org && <p className="text-sm text-gray-600 mt-0.5">{item.org}</p>}
        {item.points?.length > 0 && (
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 leading-relaxed">
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
        {(item.tags || item.href) && (
          <div className="flex items-end justify-between gap-3 mt-3">
            <div className="flex flex-wrap gap-2">
              {item.tags?.map((tag) => (
                <span key={tag} className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            {item.href && <ProjectLink href={item.href} />}
          </div>
        )}
      </motion.div>
    ))}
  </div>
);

const TABS = [
  { value: "work", label: "💼 工作與教學" },
  { value: "projects", label: "💻 專案設計與開發" },
  { value: "research", label: "🧪 研究與發表" },
  { value: "awards", label: "🏆 獲獎展出" },
  { value: "community", label: "🤝 社群參與" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("work");

  // 每項技能只出現在一個分類；語言併入實際使用的領域，不另列「程式語言」
  const skillGroups = [
    { label: "設計與研究", items: ["使用者研究", "實驗設計", "問卷與統計分析", "Figma"] },
    { label: "前端與互動", items: ["JavaScript", "React", "React Native", "Unity", "HTML/CSS"] },
    { label: "後端與資料", items: ["Python", "FastAPI", "MySQL", "Firebase", "AWS", "Streamlit", "Git"] },
    { label: "AI 與硬體", items: ["YOLO", "生成式 AI API", "Arduino"] },
  ];

  // 只放研究方向；方法類（使用者研究）已列在技能，生活興趣在「興趣」頁
  const researchInterests = [
    "Human–AI Collaboration", "Empathetic Interaction Design",
    "AI for Social Good", "Digital Mental Health", "Interactive Narrative"
  ];

  // 工作與教學合併成一條時間軸，由新到舊（進行中的排最前面）；每筆最多兩點，動詞開頭、有數字的放數字
  const experience = [
    {
      period: "2025.09–2025.12、2026.09–至今",
      role: "「人機互動設計」課程助教",
      org: "國立政治大學",
      points: [
        "兩學期共支援 35 組、139 位學生的互動設計專題，涵蓋使用者研究、資訊架構、互動原型到使用者評估。",
        "批改作業並給予回饋，協助學生檢視需求、設計方案與測試結果是否一致。",
      ],
    },
    {
      period: "2025.03–至今",
      role: "UX 設計師",
      org: "FreeSEED R2｜台灣在地 LLM 計畫",
      points: [
        "負責社群主頁改版與社群遊戲設計，依使用者研究規劃介面流程與參與機制。",
        "將互動構想做成可操作的原型，作為團隊開發討論與使用者驗證的依據。",
      ],
      tags: ["使用者研究", "UI／UX 設計", "遊戲設計", "Figma"],
    },
    {
      period: "2025.07–2025.08",
      role: "設計研發組 實習生",
      org: "財團法人台灣設計研究院 TDRI",
      points: [
        "比較 AI 工具與研究案例的技術、目標使用者與需求缺口，彙整為競品分析，並規劃 AI 協作使用情境。",
        "串接 AI API 進行評論情緒辨識與內容分類，把非結構化文字轉為可分析的資料。",
      ],
      tags: ["競品分析", "情境規劃", "AI API"],
    },
    {
      period: "2025.02–2025.06",
      role: "「設計思考與人工智慧」課程助教",
      org: "國立政治大學",
      points: [
        "支援約 50 位學生的設計思考與 AI 應用實作，協助釐清使用情境與 AI 適合介入的任務。",
        "指導原型開發與實作除錯，協助學生完成可展示、可測試的應用原型。",
      ],
    },
    {
      period: "2024",
      role: "技術助教",
      org: "OpenHCI 24th",
      points: ["指導學員團隊整合 Unity AR、LED 燈光與感測器，完成二手衣永續主題的多感官互動裝置《衣二衫 Action》。"],
      href: "/projects/secondhand-action",
    },
    {
      period: "2024.01–2024.06",
      role: "研究助理",
      org: "國立政治大學 MR 創意實驗室（周嘉年教授）",
      points: [
        "參與 AR 專案建置，整理相關文獻，並以 8th Wall（WebAR）與 Unity 測試不同的開發方式。",
        "負責程式開發，完成可操作的 AR 互動原型。",
      ],
      tags: ["AR", "Unity", "8th Wall", "原型開發"],
    },
    {
      period: "2023.09–2024.02",
      role: "研究助理",
      org: "國立政治大學 媒體心理實驗室（林日璇教授）",
      points: [
        "參與科技與幸福感相關研究，協助醫療主題新聞遊戲的使用者反應實驗，以及 VR 中的敬畏感（Awe）實驗。",
        "負責招募受試者、主持實驗與整理實驗資料。",
      ],
      tags: ["實驗執行", "受試者招募", "VR"],
    },
    {
      period: "2023.01–2023.08",
      role: "金融科技實習生（全端開發）",
      org: "北祥科技服務股份有限公司",
      points: [
        "參與銀行專案，撰寫資訊架構文件與 UI 設計規格，作為開發協作的依據。",
        "實作部分前後端功能，並提出系統優化建議。",
      ],
      tags: ["資訊架構", "UI 規格", "前後端開發"],
    },
    {
      period: "2022.02–2022.06",
      role: "「行動裝置應用」課程助教",
      org: "天主教輔仁大學",
      points: ["支援全班以 React Native 開發行動應用，負責課堂技術說明、實作指導與程式除錯。"],
    },
    {
      period: "2021",
      role: "系所工讀生（機房）",
      org: "輔仁大學 資訊管理學系",
      points: [
        "管理系上電腦教室的進出登記，掌握教室與設備的使用狀況。",
        "協助程式設計上機考試監考，維持考場秩序與考試流程順暢。",
      ],
    },
  ];

  const data = {
    research: [
      {
        year: "2026",
        title: "碩士論文",
        description: "《探索協調意圖對人機協作的影響》Exploring the Effects of Coordination Intent on Human–AI Collaboration",
        href: "/projects/coordination-intent-thesis",
      },
      {
        year: "2025.11",
        title: "2025 SNU–UTokyo–NCCU 三校聯合論文發表會（首爾）",
        description: "受國立政治大學推薦代表出席，與首爾大學、東京大學學生同場發表個人研究論文",
      },
      {
        year: "2025.08",
        title: "TAICHI'25 第十一屆台灣人機互動研討會",
        description: "發表碩士論文研究架構",
      },
      {
        year: "2024",
        title: "TAICHI'24 Demo｜Best Demo",
        description: "FlexiTouch: Simultaneous stretching and pressing of the soft material, generating both visual and haptic feedback",
        href: "/projects/flexitouch",
      },
      {
        year: "2022.03",
        title: "科技部大專學生研究計畫",
        description: "《探索使用線上自主學習平台關鍵因素之個案研究》",
      },
      {
        year: "2021.12",
        title: "TANET 台灣網際網路研討會暨 NCS 全國計算機會議",
        description: "兩篇論文獲接受，受邀至東海大學發表",
        details: ["《支付習慣影響數位振興券使用意願之研究》", "《疫情對行動支付使用情形之影響》"],
      },
    ],
    community: [
      {
        year: "2023",
        title: "DeepLink 營運公關與活動企劃",
        description: "協辦 25 場線上分享會、主辦 5 場分享會",
      },
      {
        year: "2019",
        title: "攝影社寒期攝影訓練營 總召",
        description: "籌辦 80 人、兩天一夜的攝影營隊",
      },
      { year: "2019", title: "攝影社 活動幹部" },
    ],
    // 專案內容與專案頁共用同一份資料，避免兩邊說法不一致；時間軸依結束年份由新到舊
    projects: [...projects]
      .sort((a, b) => b.year.slice(-4) - a.year.slice(-4))
      .map(({ slug, year, title, tagline, stack }) => ({
        year,
        title,
        description: tagline,
        tags: stack,
        href: `/projects/${slug}`,
      })),
    awards: [
      { year: "2024", title: "TAICHI 2024 台灣人機互動研討會", description: "Best Demo｜FlexiTouch", href: "/projects/flexitouch" },
      { year: "2024", title: "League of VR Final 2024", description: "最佳技術獎｜FlexiTouch", href: "/projects/flexitouch" },
      { year: "2024", title: "InnoFest@ICI 2024", description: "受邀展出｜WallGuard 牆面危害 AI 辨識系統", href: "/projects/wallguard" },
      { year: "2024", title: "AI Junior Award 2024", description: "決選入圍｜iHarbor AI 長照資訊共享 App", href: "/projects/iharbor" },
      { year: "2023", title: "台灣大專院校創意遊戲設計競賽", description: "決選入圍｜Tears of Ancestors", href: "/projects/tears-of-ancestors" },
      { year: "2023", title: "文化科技發展協會「文化科技創意提案」", description: "獲兩間企業推薦，入圍協會獎決選" },
      { year: "2022", title: "大專院校資訊應用服務創新競賽", description: "資訊應用組 IPv4 第一名｜DeepLink", href: "/projects/deeplink" },
      { year: "2022", title: "全國大專院校智慧創新暨跨域整合創作競賽", description: "最佳注目獎｜DeepLink", href: "/projects/deeplink" },
      { year: "2022", title: "輔仁大學資訊管理學系 畢業專題", description: "專題優秀組別獎｜DeepLink", href: "/projects/deeplink" },
    ],
  };

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-8 sm:py-12 px-4 sm:px-6 overflow-y-auto">
      <div className="flex flex-col w-full">
        <h1 className="max-h-full w-full max-w-5xl text-2xl font-bold">
          關於我 / About me
        </h1>
        <h3 className="text-sm text-gray-600 mt-2">
          從人與科技的互動中尋找靈感，這裡記錄著我一路走來的足跡。
        </h3>
        <div className="w-full h-px bg-gray-200 mt-4" />
      </div>

      <div className="max-h-full sm:px-2 py-8 space-y-8 text-gray-800 w-full max-w-5xl">
        {/* Education */}
        <section>
          <h2 className="font-semibold mb-3">學歷 / Education</h2>
          <div className="space-y-3">
            {[
              {
                school: "國立政治大學 數位內容碩士學位學程",
                period: "2023–2026",
                en: "M.S. Student, Graduate Program in Digital Content and Technologies, National Chengchi University",
              },
              {
                school: "北京清華大學 美術學院信息藝術設計系 交換生",
                period: "2026.01–2026.06",
                en: "Exchange Student, Dept. of Information Art & Design, Academy of Arts & Design, Tsinghua University",
                note: "參與未來實驗室 Future Lab",
              },
              {
                school: "輔仁大學 資訊管理學系 學士｜GPA 3.8",
                period: "2019–2023",
                en: "B.S. in Information Management, Fu Jen Catholic University",
                note: "修畢電子商務學分學程、跨域醫療服務設計思考微學程",
              },
            ].map((edu) => (
              <div key={edu.school} className="p-4 rounded-xl border border-gray-200 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <p className="text-sm text-gray-800 font-semibold">{edu.school}</p>
                  <p className="text-xs text-gray-500 shrink-0">{edu.period}</p>
                </div>
                <p className="text-sm text-gray-500 mt-0.5">{edu.en}</p>
                {edu.note && <p className="text-sm text-gray-700 mt-1">{edu.note}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <section className="md:col-span-3 bg-[#fcfcfc] rounded-xl p-4 shadow-sm">
            <h2 className="font-semibold mb-3">技能專長 / Skills</h2>
            <div className="space-y-2.5">
              {skillGroups.map((group) => (
                <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-3">
                  <p className="text-xs text-gray-500 sm:w-20 sm:shrink-0 sm:pt-1">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="bg-[#e1eafe] text-gray-700 px-3 py-1 text-xs rounded-full border border-gray-300 transition-transform hover:-translate-y-0.5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="md:col-span-2 bg-[#fcfcfc] rounded-xl p-4 shadow-sm">
            <h2 className="font-semibold mb-3">研究主題 / Research Interests</h2>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((item) => (
                <span
                  key={item}
                  className="bg-[#e3f1f2] text-gray-700 px-3 py-1 text-xs rounded-full border border-gray-300 transition-transform hover:-translate-y-0.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* TABS */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile dropdown */}
          <div className="block sm:hidden">
            <select
              id="tab-select"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full border border-gray-300 text-sm rounded-lg p-2 mb-4"
            >
              {TABS.map((tab) => (
                <option key={tab.value} value={tab.value}>{tab.label}</option>
              ))}
            </select>
          </div>

          {/* Desktop tabs */}
          <div className="hidden sm:flex">
            <TabsList className="flex flex-wrap h-auto justify-start gap-2 mb-4">
              {TABS.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="work">
            <Card><CardContent className="py-4">{experienceList(experience)}</CardContent></Card>
          </TabsContent>
          <TabsContent value="projects">
            <Card><CardContent className="py-4">{timelineItems(data.projects)}</CardContent></Card>
          </TabsContent>
          <TabsContent value="research">
            <Card><CardContent className="py-4">{timelineItems(data.research)}</CardContent></Card>
          </TabsContent>
          <TabsContent value="awards">
            <Card><CardContent className="py-4">{timelineItems(data.awards)}</CardContent></Card>
          </TabsContent>
          <TabsContent value="community">
            <Card><CardContent className="py-4">{timelineItems(data.community)}</CardContent></Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
