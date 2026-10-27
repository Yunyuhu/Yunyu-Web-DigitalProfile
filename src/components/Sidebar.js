"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Menu, X } from "lucide-react";
import AvatarImg from "@/../public/Avatar.jpg";
import SidebarNav from "@/components/SidebarNav";
import { EASTER_EGG_EVENT } from "@/components/EasterEgg";

// 滑過頭像時輪流冒出的小語，最後兩句順便提示彩蛋
const FUN_FACTS = [
  "每頁標題旁會閃的 ✦ 可以點喔 👀",
  "連點我五下試試看 👆",
  "可頌拯救世界 🥐",
  "INFJ，對奇妙浪漫的事特別有感 ✨",
  "愛踩點好吃地圖，偏愛鹹食和酒精 🍷",
  "最近在研究人與 AI 怎麼讀懂彼此 🤖",
  "拿過 TAICHI 2024 Best Demo 🏆",
];

// 頭像、名字、簡介在各尺寸都上下排列；1024px 以下頁面選單收在右上角的 ☰ 按鈕裡
export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // 換頁後自動收起選單
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const [factIndex, setFactIndex] = useState(-1);
  const [showFact, setShowFact] = useState(false);
  const nextFact = () => {
    setFactIndex((i) => (i + 1) % FUN_FACTS.length);
    setShowFact(true);
  };

  // 兩秒內連點頭像五下，觸發彩蛋
  const avatarClicks = useRef([]);
  const countAvatarClick = () => {
    const now = Date.now();
    avatarClicks.current = [...avatarClicks.current.filter((t) => now - t < 2000), now];
    if (avatarClicks.current.length >= 5) {
      avatarClicks.current = [];
      window.dispatchEvent(new Event(EASTER_EGG_EVENT));
    }
  };

  return (
    <div className="w-full lg:w-[320px] lg:min-w-[320px] lg:h-full rounded-2xl bg-white flex
    justify-start items-center flex-col p-5 sm:p-6 lg:p-[30px] lg:pt-[80px]">

      <div className="relative flex flex-col items-center w-full lg:w-auto">
        <Link
          href="/"
          className="relative shrink-0"
          onClick={countAvatarClick}
          onMouseEnter={nextFact}
          onMouseLeave={() => setShowFact(false)}
        >
          <AnimatePresence>
            {showFact && factIndex >= 0 && (
              <motion.span
                key={factIndex}
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6 }}
                className="pointer-events-none absolute z-20 left-1/2 bottom-full mb-3 -translate-x-1/2 w-max max-w-[220px] rounded-xl bg-[#0b1517] px-3 py-2 text-xs text-teal-100 shadow-lg ring-1 ring-teal-400/30"
              >
                {FUN_FACTS[factIndex]}
              </motion.span>
            )}
          </AnimatePresence>
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden shadow-md transition hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-105 cursor-pointer">
            <Image
              src={AvatarImg}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="mt-2 font-bold">胡芸毓 Yunyu Hu</h1>
          <p className="max-w-[380px] text-center text-xs text-gray-700 mt-2">
          從資管出發，進一步於數位內容碩士深耕人機互動的溝通意圖研究。熱衷科技如何回應社會的複雜議題，並致力於打造更具共感力的數位體驗。
          </p>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? "收起選單" : "開啟選單"}
          className="lg:hidden absolute right-0 top-0 w-10 h-10 rounded-full flex items-center justify-center bg-[#f7f7f7] hover:bg-[#edf6f7] shadow-sm transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
        </button>
      </div>

      {/* 社群連結 */}
      <div className="flex gap-4 mt-4 lg:my-5 justify-center">
        <a href="mailto:unayunyuhu@gmail.com" aria-label="Email">
          <div className="bg-white shadow-md hover:shadow-[0_0_10px_rgba(100,100,100,0.3)] hover:-translate-y-0.5 w-[40px] h-[40px] rounded-full flex items-center justify-center transition">
            <Mail className="w-5 h-5 text-gray-600" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/芸毓-胡-27a576213/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <div className="bg-white shadow-md hover:shadow-[0_0_10px_rgba(0,119,181,0.3)] hover:-translate-y-0.5 w-[40px] h-[40px] rounded-full flex items-center justify-center transition">
            <Linkedin className="w-5 h-5 text-gray-600" />
          </div>
        </a>
        <a href="https://www.instagram.com/yun._.yy_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <div className="bg-white shadow-md hover:shadow-[0_0_10px_rgba(225,48,108,0.3)] hover:-translate-y-0.5 w-[40px] h-[40px] rounded-full flex items-center justify-center transition">
            <Instagram className="w-5 h-5 text-gray-600" />
          </div>
        </a>
      </div>

      {/* 頁面切換：窄螢幕以高度展開／收合，桌機一律展開 */}
      <div
        id="site-nav"
        className={`grid w-full transition-[grid-template-rows] duration-300 ease-out lg:grid-rows-[1fr] ${menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className={`overflow-hidden lg:overflow-visible transition-[visibility] duration-300 ${menuOpen ? "visible" : "invisible lg:visible"}`}>
          <div className="pt-4 lg:pt-0">
            <SidebarNav />
          </div>
        </div>
      </div>

    </div>
  );
}
