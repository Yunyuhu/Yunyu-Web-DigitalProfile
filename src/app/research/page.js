import Image from 'next/image'

import TAICHIdemo from "@/image/research/TAICHIdemo.jpg"
import LeagueOfVRfinal from "@/image/research/LeagueOfVRfinal.jpg"
import AIpower from "@/image/research/AIpower.jpg"
import TANET from "@/image/research/TANET.jpg"
import OpenHCI from "@/image/research/OpenHCI.jpg"

const research = [
  {
    year: "2024",
    title: "League of VR Final",
    description: "展出 FlexiTouch，獲選最佳技術獎",
    image: LeagueOfVRfinal,
  },
  {
    year: "2024",
    title: "TAICHI Demo",
    description: "展出 FlexiTouch，獲選為2024年 Best Demo",
    image: TAICHIdemo,
  },
  {
    year: "2024",
    title: "OpenHCI 24th",
    description: "作為技術 TA ，帶領學員以互動科技解決永續環保中衣物再生的議題",
    image: OpenHCI,
  },
  {
    year: "2024",
    title: "AI & Robot 課堂研究",
    description: "AI 的權力與地位是否影響人類的信任感",
    image: AIpower,
  },
  {
    year: "2021",
    title: "台灣網際網路研討會TANET曁全國計算機會議NCS",
    description: "發表《支付習慣影響數位振興券使用意願之研究》和《疫情對行動支付使用情形之影響》",
    image: TANET,
  },
];
export default function Research() {
  return (
      <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-bold">研究與活動 / Research and Activities</h1>
          <h3 className="text-sm text-gray-600 mt-2">
          探索科技與設計交會的邊界，在不同場域和切角中實踐。探索科技與設計交會的邊界，在不同場域和切角中實踐。
          </h3>
          <div className="w-full h-px bg-gray-200 mt-4" />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 w-full auto-rows-[1fr]">
          {research.map((research, index) => {
            const spanClass =
              index === 0 || index === 1 ? "md:col-span-6" : "md:col-span-4" ;
  
            return (
              
                <a
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative ${spanClass} col-span-1 rounded-2xl border shadow-md hover:shadow-lg transition-all bg-white overflow-hidden min-h-[260px] md:min-h-[260px] flex flex-col`}
                >
                {/* 圖片 */}
                <div className="relative w-full h-full">
                    <Image
                    src={research.image}
                    alt={research.title}
                    fill
                    className="object-cover"
                    />
                </div>

                {/* 覆蓋層：預設顯示，hover 時淡出 */}
                <div className="absolute inset-0 bg-black/70 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 p-6 flex flex-col justify-end">
                    <h2 className="text-base font-semibold break-words mb-2">
                    {research.title}
                    </h2>
                    <p className="text-sm mb-2 leading-snug">{research.description}</p>
                    <span className="self-start text-[11px] font-medium bg-white text-black px-2 py-0.5 rounded-full mb-4">
                    {research.year}
                    </span>
                </div>
                </a>

           
              
            );
          })}
        </div>
      </div>
    );
}