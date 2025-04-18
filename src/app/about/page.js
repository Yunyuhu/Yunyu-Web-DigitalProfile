"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  UserCircle,
  Sparkles,
  LayoutDashboard,
  BookOpenCheck,
} from "lucide-react";

const timelineItems = (items) => {
  if (!Array.isArray(items)) return null;
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="border-l-4 border-teal-500 pl-4 ml-2"
        >
          <p className="text-sm text-gray-500 mb-1">{item.year}</p>
          {item.title && (
            <p className="text-sm font-medium text-gray-800">{item.title}</p>
          )}
          <p className="text-sm text-gray-700">{item.description}</p>
          {item.details?.map((d, i) => (
            <p key={i} className="text-sm text-gray-800 whitespace-pre-line">
              {d}
            </p>
          ))}
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
        </motion.div>
      ))}
    </div>
  );
};

export default function About() {
  const [activeTab, setActiveTab] = useState("work");

  const skills = [
    "Figma", "Adobe XD", "Unity", "React", "React Native",
    "Python", "JavaScript", "PHP", "C", "Java",
    "MySQL", "Firebase", "AWS"
  ];

  const interests = [
    "Human-AI Communication", "HCI", "Empathetic Interaction Design",
    "AI for Social Good", "Digital Mental Health", "UX Research", "Interactive Narrative"
  ];

  const data = {
    work: [
      { year: "2025", description: "FreeSEED R2_UX Designer" },
      { year: "2025", description: "設計思考與人工智慧課程TA" },
      { year: "2024", description: "政大周嘉年教授 - MR創意實驗室 RA" },
      { year: "2023", description: "政大林日璇教授 - 媒體心理實驗室 RA" },
      { year: "2023", description: "北祥金融科技實習生" },
      { year: "2022", description: "行動裝置課程 TA" },
      { year: "2021", description: "資管系機房工讀生" },
      { year: "2019", description: "富邦產險實習生" },
    ],
    research: [
      { year: "進行中", description: "碩論 -《人機互動與 AI 溝通意圖研究》"},
      { year: "2024", description: "TAICHI DEMO -《FlexiTouch-Simultaneous stretching and pressing of the soft material, generating both visual and haptic feedback.》" },
      { year: "2022", description: "科技部大專生研究計畫 -《探索使用線上自主學習平台關鍵因素之個案研究》" },
      { year: "2021", description: "TANET & NCS 學術研討會發表：" ,
        details: [
        "｜《支付習慣影響數位振興券使用意願之研究》",
        "｜《疫情對行動支付使用情形之影響》"
      ]},
    ],
    community: [
      { year: "2024", description: "OpenHCI 24th 技術TA" },
      { year: "2023", description: "DeepLink 營運公關與活動企劃",
        details:["｜ 協辦25場、主辦5場分享會"]
       },
      { year: "2019", description: "攝影社寒期攝影訓練活動 _ 總召",
        details:["｜ 舉辦80人兩天一夜的營隊"]
      },
      { year: "2019", description: "攝影社 _ 活動幹部" },
    ],
    projects: [
      {
      year: "2025",
      title: "健保快易通 Redesign",
      description: "以慢性病與一般民眾為對象，重構健保資訊介面與架構",
      tags: ["使用者研究", "健康資料整合", "介面設計", "主動賦能"]
      },
      {
      year: "2024",
      title: "FlexiTouch：軟性裝置互動設計",
      description: "探索柔性材質觸控互動，設計按壓與拉伸的情境體驗",
      tags: ["TAICHI Best Demo", "League of VR", "遊戲互動設計", "柔性裝置"]
      },
      {
      year: "2024",
      title: "WallGuard：牆面危害 AI 識別系統",
      description: "導入 YOLO 與風險模型，打造即時牆面危害辨識原型",
      tags: ["AI識別", "InnoFest 展出", "建築巡檢", "YOLO"]
      },
      {
      year: "2024",
      title: "政大場地管理系統 Redesign",
      description: "優化場地借用平台，提升分類清晰度與操作流程",
      tags: ["UX Redesign", "資訊架構", "流程優化"]
      },
      {
      year: "2023",
      title: "iHarbor 長照服務設計",
      description: "以照護者與眷屬的醫病照護關係為核心，設計共享資訊與照護透明化工具",
      tags: ["長照設計", "醫病溝通", "服務設計"]
      },
      {
      year: "2023",
      title: "Tears of Ancestors：2D 遊戲",
      description: "結合探索與打怪的雙機制，進入創意設計競賽決賽",
      tags: ["遊戲腳本", "對話設計", "遊戲開發", "決賽入選"]
      },
      {
      year: "2021–2023",
      title: "DeepLink（畢業專題＿產學合作）",
      description: "以線上 Webinar 知識分享為切口，打造數位互動履歷平台",
      tags: ["產學合作", "履歷設計", "獲多項獎項", "補助計畫"]
      }
      ],
    awards: [
      {
        year: "2024",
        title: "TAICHI Demo",
        description: "展出 FlexiTouch，獲選為2024年 Best Demo",
      },
      {
        year: "2024",
        title: "League of VR Final",
        description: "展出 FlexiTouch，獲選最佳技術獎",
      },
      {
        year: "2024",
        title: "InnoFest@ICI",
        description: "展出建築牆面危害圖像辨識系統",
      },
      {
        year: "2024",
        title: "AI Junior Award",
        description: "展出 iHarbo，進入決選",
      },
      {
        year: "2023",
        title: "台灣大專院校創意遊戲設計競賽",
        description: "展出 Tears of Ancestors，進入決選",
      },
      {
        year: "2023",
        title: "文化科技發展協會「文化科技創意提案」",
        description: "獲兩間企業推薦，進入協會獎決選",
      },
      {
        year: "2022",
        title: "大專院校資訊應用服務創新競賽",
        description: "展出DeepLink, 資訊應用組 IPv4 第一名",
      },
      {
        year: "2022",
        title: "全國大專院校智慧創新暨跨域整合創作競賽",
        description: "展出DeepLink, 獲得最佳注目獎",
      },
      {
        year: "2022",
        title: "輔仁大學資訊管理學系＿專題評分",
        description: "展出DeepLink, 獲得專題優秀組別獎，並成為系上服務平台（持續營運中）",
      },
    ]
  }

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">
      <div className="flex flex-col w-full">
        <h1 className="max-h-full w-full max-w-5xl text-2xl font-bold">
          關於我 / About me
        </h1>
        <h3 className="text-sm text-gray-600 mt-2">
          從人與科技的互動中尋找靈感，這裡記錄著我一路走來的足跡。
        </h3>
        <div className="w-full h-px bg-gray-200 mt-4" />
      </div>

      <div className="max-h-full px-6 py-8 space-y-6 text-gray-800 w-full max-w-5xl">
         {/* Bio & Education */}
        <div className="flex flex-wrap gap-4">
          {/* <div className=" rounded-xl p-4 ">
            <h2 className="font-semibold mb-2">簡介 / Bio</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Yunyu is a master&apos;s student in Digital Content and Technologies at National Chengchi University. With a background in Information Management and a strong interest in AI design, she has participated in various cross-disciplinary projects ranging from gender-based issue summarization bots to immersive VR interfaces for social sensing. Through hands-on collaboration with research labs and design communities, Yunyu aspires to create digital services that not only solve problems but also understand people.
            </p>
          </div> */}

          <div className=" rounded-xl ">
            <h2 className="font-semibold mb-2">學歷 / Education</h2>
            <div className="mb-4 p-3 rounded-lg border border-gray-200 bg-white">
              <p className="text-sm text-gray-800 font-medium">國立政治大學 數位內容學分學程碩士（2023–Now）</p>
              <p className="text-sm text-gray-500">M.S. Student, Graduate Program in Digital Content and Technologies, NCCU</p>
            </div>
            <div className="p-3 rounded-lg border border-gray-200 bg-white">
              <p className="text-sm text-gray-800 font-medium">輔仁大學 資訊管理學系學士（2019–2023），GPA 3.8</p>
              <p className="text-sm text-gray-800 font-medium">輔仁大學 電子商務學分學程</p>
              <p className="text-sm text-gray-500">B.S. in Information Management & E-Commerce Program, Fu Jen Catholic University</p>
            </div>
          </div>
          
        </div>
        {/* Skills & Interests */}
        <div className="flex flex-wrap gap-4">
          <div className="bg-[#fcfcfc] rounded-xl p-4 shadow-sm flex-1 min-w-[240px]">
            <h2 className="font-semibold mb-2">技能專長 / Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-[#e1eafe] text-gray-700 px-3 py-1 text-xs rounded-full border border-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#fcfcfc] rounded-xl p-4 shadow-sm flex-1 min-w-[240px]">
            <h2 className="font-semibold mb-2">興趣與研究主題 / Interests</h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-[#e3f1f2] text-gray-700 px-3 py-1 text-xs rounded-full border border-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
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
              <option value="work">💼 工作與教學</option>
              <option value="projects">💻 專案設計與開發</option>
              <option value="research">🧪 研究與發表</option>
              <option value="awards">🏆 獲獎展出</option>
              <option value="community">🤝 社群參與</option>
            </select>
          </div>

          {/* Desktop tabs */}
          <div className="hidden sm:flex">
            <TabsList className="flex flex-wrap justify-start gap-2 mb-4">
              <TabsTrigger value="work">💼 工作與教學</TabsTrigger>
              <TabsTrigger value="projects">💻 專案設計與開發</TabsTrigger>
              <TabsTrigger value="research">🧪 研究與發表</TabsTrigger>
              <TabsTrigger value="awards">🏆 獲獎展出</TabsTrigger>
              <TabsTrigger value="community">🤝 社群參與</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="work">
            <Card><CardContent className="py-4">{timelineItems(data.work)}</CardContent></Card>
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
