"use client";

import Image from "next/image";
import NhiImg from "@/image/projects/nhi.png";
import FlexiImg from "@/image/projects/flexitouch.png";
import WallImg from "@/image/projects/wall-ai.png";
import VenueImg from "@/image/projects/nccu-venue.png";
import IHarborImg from "@/image/projects/iharbor.png";
import TearsImg from "@/image/projects/tears-of-ancestors.png";
import DeepLinkImg from "@/image/projects/deeplink.png";

const projects = [
  {
    year: "2025",
    title: "健保快易通 Redesign",
    description: "以慢性病與一般民眾為對象，重構健保資訊介面與架構",
    image: NhiImg,
    url: "https://reurl.cc/gRG60z",
    tags: ["使用者研究", "健康資料整合", "介面設計", "主動賦能"]
  },
  {
    year: "2024",
    title: "FlexiTouch：軟性裝置互動設計",
    description: "探索柔性材質觸控互動，設計按壓與拉伸的情境體驗",
    image: FlexiImg,
    url: "https://youtu.be/zUyFzP0OjnA",
    tags: ["TAICHI Best Demo", "League of VR", "遊戲互動設計", "柔性裝置"]
  },
  {
    year: "2024",
    title: "WallGuard:牆面危害 AI 識別系統",
    description: "導入 YOLO 與風險模型，打造即時牆面危害辨識原型",
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
    title: "iHarbor 長照服務設計",
    description: "以照護者與眷屬的醫病照護關係為核心，設計共享資訊與照護透明化工具",
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
    tags: ["產學合作", "履歷設計", "獲多項獎項", "補助計畫"]
  }
];

export default function Projects() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">專案 / Projects</h1>
        <h3 className="text-sm text-gray-600 mt-2">
          以下是我近年參與的重要專案，涵蓋數位健康、互動設計與AI應用等多項領域。
        </h3>
        <div className="w-full h-px bg-gray-200 mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 w-full auto-rows-[1fr]">
        {projects.map((project, index) => {
          const spanClass =
            index === 0 || index === 1 ? "md:col-span-6" :
            index === 2 || index === 3 || index === 4 ? "md:col-span-4" :
            "md:col-span-6";

          return (
            
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative ${spanClass} col-span-1 rounded-2xl border shadow-md hover:shadow-lg transition-all bg-white overflow-hidden min-h-[260px] md:min-h-[320px] flex flex-col`}
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
                    <span key={i} className="px-2 py-0.5 text-[10px] bg-gray-200 text-gray-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                <p className="text-m text-end w-full">| 查看更多👉</p>
              </div>
            </a>
            
          );
        })}
      </div>
    </div>
  );
}