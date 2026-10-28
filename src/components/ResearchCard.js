"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

// 研究與活動的卡片：滑鼠移動時像收藏卡一樣微微傾斜並閃過彩色反光；滑過時深色說明層淡出、露出照片
export default function ResearchCard({ item }) {
  const cardRef = useRef(null);
  const sheenRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const tilt = (e) => {
    if (reduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    cardRef.current.style.transform = `rotateY(${(x - 0.5) * 10}deg) rotateX(${(0.5 - y) * 10}deg)`;
    sheenRef.current.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
  };
  const reset = () => {
    cardRef.current.style.transform = "";
  };

  return (
    <div className="w-full [perspective:900px]">
      <div
        ref={cardRef}
        onMouseMove={tilt}
        onMouseLeave={reset}
        className="group relative h-full min-h-[260px] w-full overflow-hidden rounded-2xl border bg-white shadow-md transition-[transform,box-shadow] duration-200 ease-out hover:shadow-xl [transform-style:preserve-3d]"
      >
        {/* 照片：hover 時微微放大 */}
        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />

        {/* 覆蓋層：預設顯示，hover 時淡出 */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end bg-black/70 p-5 text-white opacity-100 transition-opacity duration-300 group-hover:opacity-0 sm:p-6">
          <h2 className="mb-2 break-words text-base font-semibold">{item.title}</h2>
          <p className="mb-2 text-sm leading-snug">{item.description}</p>
          <span className="mb-4 self-start rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-black">{item.year}</span>
        </div>

        {/* 收藏卡反光：跟著游標移動的彩色光帶 */}
        <div
          ref={sheenRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(115deg,transparent_30%,rgba(94,234,212,0.35)_44%,rgba(196,181,253,0.35)_52%,rgba(253,230,138,0.3)_60%,transparent_74%)] bg-[length:220%_220%] opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}
