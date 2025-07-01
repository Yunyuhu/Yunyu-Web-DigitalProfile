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
import AIUXImg from "@/image/projects/NhiImg.png"
import MizutoImg from "@/image/projects/mizuto.png"



const projects = [
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
    description: "以慢性病與一般民眾為對象，重構健保資訊介面與架構",
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
    description: "探索柔性材質觸控互動，設計按壓與拉伸的情境體驗",
    image: FlexiImg,
    url: "https://youtu.be/zUyFzP0OjnA",
    tags: ["Taichi Best Demo", "League of VR", "遊戲互動設計", "柔性裝置"]
  },
  {
    year: "2024",
    title: "WallGuard:牆面危害 AI 識別系統",
    description: "因應台灣高地震頻率與建築老化問題，本專案針對民眾對於住家牆面安全意識偏低的現象，開發即時牆面危害辨識系統，並串接生成式 API 展示可延伸發展的個別情境應用。",
    image: WallImg,
    url: "https://youtu.be/pVikml-YPsw",
    tags: ["AI識別", "InnoFest 展出", "建築巡檢", "YOLO"]
  },
  {
    year: "2024",
    title: "政大場地管理系統 Redesign",
    description: "優化場地借用平台，提升分類清晰度與操作流程",
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
    description: "結合探索與打怪的雙機制，進入創意設計競賽決賽",
    image: TearsImg,
    url: "https://youtu.be/utajysQgYvw",
    tags: ["遊戲腳本", "對話設計", "遊戲開發", "決賽入選"]
  },
  {
    year: "2021–2023",
    title: "DeepLink（畢業專題＿產學合作）",
    description: "以線上 Webinar 知識分享為切口，打造數位互動履歷平台",
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
              className={`px-3 py-1 text-sm rounded border ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-100"}`}
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