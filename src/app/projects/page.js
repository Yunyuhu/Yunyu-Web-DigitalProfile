"use client";

import { useState } from "react";
import Image from "next/image";
import NhiImg from "@/image/projects/nhi.png";
import FlexiImg from "@/image/projects/flexitouch.png";
import WallImg from "@/image/projects/wall-ai.png";
import VenueImg from "@/image/projects/nccu-venue.png";
import IHarborImg from "@/image/projects/iharbor.png";
import TearsImg from "@/image/projects/tears-of-ancestors.png";
import DeepLinkImg from "@/image/projects/deeplink.png";
import Onetwothree from "@/image/projects/onetwothree.png";
import Zooly from "@/image/projects/zooly.png";
import AIUXImg from "@/image/projects/NhiImg.png";
import MizutoImg from "@/image/projects/mizuto.png";
import MetroMateImg from "@/image/projects/metromate.png";
import JellyfishImg from "@/image/projects/jellyfish-robot.jpg";
import LizardImg from "@/image/projects/lizard-robot.jpg";
import ParametricImg from "@/image/projects/parametric-3d-modeling.jpg";
import MemoryMazeImg from "@/image/projects/memory-maze.jpg";


const projects = [
  {
    year: "2026",
    title: "記憶迷宮 Memory Maze",
    description: "以迷宮理論為建構邏輯，打造可互動的 3D Unity 場景，讓抽象的記憶轉化為可行走、可迷失、可重新尋路的空間經驗，並透過虛實整合裝置呈現於展場，探索記憶具現化與空間敘事的可能。",
    image: MemoryMazeImg,
    tags: ["Unity", "3D互動場景", "裝置藝術", "虛實整合", "清華大學未來實驗室"]
  },
  {
    year: "2026",
    title: "機器人設計：水母 Jellyfish Robot",
    description: "以水母為原型的互動機器人設計，探索柔性外型與觸手結構的造型與動態表現，思考生物型態轉譯為機構設計的可能性。",
    image: JellyfishImg,
    tags: ["機器人設計", "互動裝置", "清華大學未來實驗室"]
  },
  {
    year: "2026",
    title: "機器人設計：蜥蜴 Lizard Robot",
    description: "設計具表情與動作機構的蜥蜴型機器人，結合 Arduino 控制、機械結構與角色化外型，打造具生命感的桌上型互動裝置。",
    image: LizardImg,
    tags: ["機器人設計", "機構設計", "清華大學未來實驗室"]
  },
  // {
  //   year: "2026",
  //   title: "多維參數化3D建模",
  //   description: "以參數化演算方式生成骨骼狀多維結構，並列印成一系列裝置藝術與可穿戴飾品，於展覽中呈現生成設計與手作工藝的結合。",
  //   image: ParametricImg,
  //   tags: ["參數化建模", "3D列印", "生成設計", "清華大學未來實驗室"]
  // },
  {
    year: "2025",
    title: "Mizuto：AI Robot 智慧水壺",
    description: "以日常健康為核心打造的 AI 智慧水壺，具備飲水提醒、液體辨識與燈光提示功能。結合簡約造型與擬人化互動，透過藍光提醒裝水、黃光提醒喝水，提升使用者對飲水習慣的自覺與參與感，並藉由 AI 感測分類純水與飲料，擴展健康管理應用的可能。",
    image: MizutoImg, 
    url: "https://reurl.cc/paqqjr",
    tags: ["智慧裝置", "AI Robot", "健康習慣", "互動設計", "機器人設計"]
  },
  {
    year: "2025",
    title: "捷伴AI：MetroMate",
    description: "針對通勤族設計的 AI 智慧旅伴原型，結合台北捷運使用情境，提供路線提醒、路程異動通知與客製化旅遊建議。透過使用者輸入的目的與偏好，系統能即時調整推薦站點與旅遊內容，協助通勤者在日常移動中也能發掘生活的彈性與樂趣。",
    image: MetroMateImg, 
    url: "https://reurl.cc/Om71jD", 
    tags: ["智慧旅伴", "通勤設計","交通資訊設計"]
  },
  {
    year: "2025",
    title: "AI介入設計流程的重新評估（以健保快易通專案為例）",
    description: "本次針對四大項仍藉由手動製作的內容，以AI重新生成後作設計評估。結果發現：若是屬於分類型任務（如 card sorting），AI 的表現相對較好；但在情感面或需求面文本的理解上，AI 多依據詞頻進行淺層歸納，易產生情緒保守、模糊與理想化傾向。此外，對於介面生成的部分，若屬冷門類別，AI 也較難提供有效參考。",
    image: AIUXImg,
    url: "https://reurl.cc/5K76jM",
    tags: ["AI設計介入", "設計流程反思", "健保快易通", "設計輔助工具"]
  },
  {
    year: "2025",
    title: "Zooly：臺北市立動物園動物認養 AI Bot",
    description: "角色設計涵蓋語言風格、互動步驟、角色個性與文件培訓模組，設計動物型 Agent 引導使用者了解臺北市立動物園的動物認養流程，並傳遞保育價值。",
    image: Zooly,
    url: "https://reurl.cc/lzyb7q",
    tags: ["使用者研究", "健康資料整合", "介面設計", "主動賦能"]
  },
  {
    year: "2025",
    title: "健保快易通 Redesign",
    description: "從資訊架構與流程優化角度出發，針對慢性病患者與一般民眾的使用情境，重新設計健保快易通的核心介面。聚焦於用藥紀錄、就醫查詢與保費繳納三大服務，透過使用者研究發掘實際痛點，並提出模組化資訊呈現與主動提醒機制，提升民眾自主管理健康的能力與信任度。",
    image: NhiImg,
    url: "https://reurl.cc/OY87KR",
    tags: ["使用者研究", "健康資料整合", "介面設計", "主動賦能"]
  },
  {
    year: "2024",
    title: "衣二衫Action：永續穿搭互動裝置設計｜OpenHCI'24 技術TA ",
    description: "協助學員完成以「促進二手衣永續行為」為核心的互動裝置。從訪談與行為觀察出發，最終以 Unity AR、LED 燈光與感測器等打造的多感官互動裝置，能根據穿著風格呈現專屬視覺特效、燈光、氣味與音樂",
    image: Onetwothree,
    url: "https://reurl.cc/RYe7Wg",
    tags: ["HCI", "互動設計", "永續設計", "使用者研究"]
  },
  {
    year: "2024",
    title: "FlexiTouch：軟性裝置互動設計",
    description: "以探索柔性材質的人機互動潛力為目標，設計一系列具回饋性的觸控操作原型。專案結合按壓與拉伸兩種情境，透過電阻變化控制互動回應，並以遊戲化方式提升體驗感與參與度，獲TaiChi Best Demo 肯定。",
    image: FlexiImg,
    url: "https://youtu.be/zUyFzP0OjnA",
    tags: ["Taichi Best Demo", "League of VR", "遊戲互動設計", "柔性裝置"]
  },
  {
    year: "2024",
    title: "WallGuard:牆面危害 AI 識別系統",
    description: "因應台灣高地震頻率與建築老化問題，本專案針對民眾對於住家牆面安全意識偏低的現象，開發即時牆面危害辨識系統，並串接生成式 API 展示可延伸發展的個別情境應用，如租屋查驗、保險理賠評估等。",
    image: WallImg,
    url: "https://youtu.be/pVikml-YPsw",
    tags: ["AI識別", "InnoFest 展出", "建築巡檢", "YOLO"]
  },
  {
    year: "2024",
    title: "政大場地管理系統 Redesign",
    description: "針對政大校內使用者對場地借用系統的操作困擾進行深入訪談與任務觀察，發現原有平台存在分類不清、流程冗長等問題。專案重新設計資訊架構、導覽結構與篩選機制，使申請與審核流程更為簡明清楚，提升行政效率與使用體驗。",
    image: VenueImg,
    url: "https://reurl.cc/zq1DoV",
    tags: ["UX Redesign", "資訊架構", "流程優化"]
  },
  {
    year: "2023",
    title: "iHarbor AI 長照服務設計",
    description: "聚焦於長照場域中照護者與家庭成員的協作需求，設計一套 AI 輔助的資訊共享 APP。達成自動摘要醫療資訊、提醒藥物服用副作用，減輕照護負擔並強化親屬間溝通。",
    image: IHarborImg,
    url: "https://www.youtube.com/watch?v=1JmtzLllJCA",
    tags: ["長照設計", "醫病溝通", "服務設計"]
  },
  {
    year: "2023",
    title: "Tears of Ancestors：2D 遊戲",
    description: "以族群歷史為背景的敘事型 2D 遊戲，結合探索與打怪兩種機制，玩家在穿梭記憶場景的過程中逐步理解祖先的故事與衝突背景。成功進入創意設計競賽決賽階段，並獲評審團肯定。",
    image: TearsImg,
    url: "https://youtu.be/utajysQgYvw",
    tags: ["遊戲腳本", "對話設計", "遊戲開發", "決賽入選"]
  },
  {
    year: "2021–2023",
    title: "DeepLink（畢業專題＿產學合作）",
    description: "以線上 Webinar 知識分享為切口，打造數位互動履歷平台。一站式整合活動發想、直播與成果紀錄，支援同步與非同步互動機制，協助講者累積數位影響力與履歷內容，並應用於人才媒合與個人品牌經營場景。",
    image: DeepLinkImg,
    url: "https://deeplink.tw/#/",
    tags: ["產學合作", "履歷設計", "獲多項獎項", "補助計畫","Web"]
  }
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.trim();
    return (
      project.title.includes(term) ||
      project.description.replace(/[^一-龥a-zA-Z0-9\s]/g, "").includes(term) ||
      project.tags.some((tag) => tag.includes(term))
    );
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentItems = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">專案 / Projects</h1>
        <h3 className="text-sm text-gray-600 mt-2">
          以下是我近年參與的重要專案，涵蓋數位健康、互動設計與AI應用等多項領域。
        </h3>
        <input
          type="text"
          placeholder="輸入關鍵字搜尋（區分大小寫）"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="mt-4 p-2 border rounded-md text-sm w-full"
        />
        <div className="w-full h-px bg-gray-200 mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 w-full auto-rows-[1fr]">
        {currentItems.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative md:col-span-6 col-span-1 rounded-2xl border shadow-md hover:shadow-lg transition-all bg-white overflow-hidden min-h-[260px] md:min-h-[320px] flex flex-col`}
          >
            <div className="relative w-full h-36 md:h-60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-end flex-1 p-4 bg-gray-50 text-sm">
              <h2 className="text-base font-semibold break-words mb-1">{project.title}</h2>
              <p className="text-xs text-gray-600 mb-1 leading-snug">{project.description}</p>
              <p className="text-xs text-gray-400 mb-2">{project.year}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] bg-gray-200 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
              <p className="text-m text-end w-full">| 查看更多👉</p>
            </div>
          </a>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-12 text-center text-sm text-gray-400 py-12">
            找不到符合「{searchTerm}」的專案。
          </div>
        )}
      </div>

      {/* 分頁控制 */}
      {totalPages > 1 && (
        <div className="flex gap-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm rounded border bg-gray-100 disabled:opacity-40"
          >
            上一頁
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 text-sm rounded border ${currentPage === i + 1 ? "bg-green-700 text-white" : "bg-gray-100"}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm rounded border bg-gray-100 disabled:opacity-40"
          >
            下一頁
          </button>
        </div>
      )}
    </div>
  );
}