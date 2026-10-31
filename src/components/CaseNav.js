"use client";

import { useEffect, useRef, useState } from "react";

// 本頁目錄：捲動時標出目前讀到的段落、讀過的段落轉深，底部的線顯示整篇讀了多少；點選可跳到該段。
// 大螢幕由頁面容器自己捲動，目錄才能停在上方；-top-12 抵掉容器的上內距（sm:py-12），讓目錄貼齊卡片頂端。
// 小螢幕是整頁捲動，目錄維持一般排列。
export default function CaseNav({ sections }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const listRef = useRef(null);
  const ids = sections.map((section) => section.id).join(",");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const els = ids.split(",").map((id) => document.getElementById(id)).filter(Boolean);
      if (els.length === 0) return;
      // 段落頂端越過畫面上方約三分之一，就算讀到這一段
      const line = window.innerHeight * 0.35;
      let current = 0;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= line) current = i;
      });
      const start = els[0].getBoundingClientRect().top;
      const end = els[els.length - 1].getBoundingClientRect().bottom;
      setActive(current);
      setProgress(Math.min(1, Math.max(0, (line - start) / (end - start))));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    // 容器的 scroll 事件不會冒泡，在捕獲階段收
    window.addEventListener("scroll", schedule, { capture: true, passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule, { capture: true });
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  // 目錄寬度不夠時，把目前的段落捲進可視範圍
  useEffect(() => {
    const list = listRef.current;
    const item = list?.children[active];
    if (!item) return;
    const left = item.offsetLeft;
    if (left < list.scrollLeft || left + item.offsetWidth > list.scrollLeft + list.clientWidth) {
      list.scrollTo({ left: left - 16, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav
      aria-label="本頁內容"
      className="relative z-20 -mx-4 mt-6 border-b border-gray-100 bg-white/95 backdrop-blur sm:-mx-6 lg:sticky lg:-top-12"
    >
      <div className="flex items-center gap-3 px-4 sm:px-6">
        <ol ref={listRef} className="relative flex flex-1 gap-1 overflow-x-auto py-2 text-xs [scrollbar-width:none]">
          {sections.map((section, i) => (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                aria-current={i === active ? "location" : undefined}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 transition-colors ${
                  i === active
                    ? "bg-teal-50 font-semibold text-teal-800"
                    : i < active
                      ? "text-gray-700 hover:text-teal-800"
                      : "text-gray-400 hover:text-teal-800"
                }`}
              >
                <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <span
        aria-hidden
        className="absolute -bottom-px left-0 h-0.5 bg-teal-500 transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </nav>
  );
}
