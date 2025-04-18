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
      { year: "進行中", description: "碩論 -《人機互動與 AI 溝通意圖研究》" },
      { year: "2024", description: "TAICHI DEMO - FlexiTouch" },
      { year: "2022", description: "科技部大專生研究計畫 - 自主學習平台研究" },
      {
        year: "2021",
        description: "TANET & NCS 學術研討會發表",
        details: [
          "｜《支付習慣影響數位振興券使用意願之研究》",
          "｜《疫情對行動支付使用情形之影響》",
        ],
      },
    ],
    community: [
      { year: "2024", description: "OpenHCI 24th 技術TA" },
      {
        year: "2023",
        description: "DeepLink 公關與活動企劃",
        details: ["｜ 協辦25場、主辦5場分享會"],
      },
      {
        year: "2019",
        description: "攝影社寒期攝影訓練活動 _ 總召",
        details: ["｜ 舉辦80人兩天一夜營隊"],
      },
      { year: "2019", description: "攝影社 _ 活動幹部" },
    ],
    projects: [
      {
        year: "2025",
        title: "健保快易通 Redesign",
        description: "重構健保資訊介面與架構",
        tags: ["UX", "健康", "介面設計"],
      },
      {
        year: "2024",
        title: "FlexiTouch",
        description: "軟性裝置互動設計",
        tags: ["Best Demo", "柔性材質", "觸控"],
      },
    ],
    awards: [
      {
        year: "2024",
        title: "TAICHI Demo",
        description: "展出 FlexiTouch，獲選為 Best Demo",
      },
      {
        year: "2024",
        title: "League of VR",
        description: "獲選最佳技術獎",
      },
    ],
  };

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
              <option value="projects">💻 專案設計</option>
              <option value="research">🧪 研究與發表</option>
              <option value="awards">🏆 獲獎展出</option>
              <option value="community">🤝 社群參與</option>
            </select>
          </div>

          {/* Desktop tabs */}
          <div className="hidden sm:flex">
            <TabsList className="flex flex-wrap justify-start gap-2 mb-4">
              <TabsTrigger value="work">💼 工作與教學</TabsTrigger>
              <TabsTrigger value="projects">💻 專案設計</TabsTrigger>
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
