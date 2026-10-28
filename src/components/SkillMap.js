"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import DecodeText from "@/components/DecodeText";

const mono = "font-[family-name:var(--font-geist-mono)]";

// 分支走線的垂直位置：列的上內距 8px ＋ 節點高度 52px 的一半
const TRACE_Y = 34;

// 展開時序（秒）：分隔線亮起、面板往下展開 → 掃描線 → 主幹長出 → 各分支依序展開 → 技術逐一出現
const EXPAND = 0.6;
const TRUNK_AT = EXPAND + 0.15;
const rowAt = (index) => EXPAND + 0.45 + index * 0.14;

// 依證據類型顯示：站內專案、外部連結，或沒有連結的經歷
const Evidence = ({ item }) => {
  if (item.href?.startsWith("/")) {
    return (
      <Link href={item.href} className="group inline-flex items-center gap-0.5 text-teal-300 hover:text-teal-100">
        {item.label}
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    );
  }
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-0.5 text-teal-300 hover:text-teal-100">
        {item.label}
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    );
  }
  return <span className="text-slate-400">{item.label}</span>;
};

// 技能樹：核心沿主幹分出各個方向，每個方向接上它用到的技術。
// 平常收合成一條標題列，按「展開技能樹」才往下展開並播放解析動畫，可再收合；每次展開送一筆 GA4 事件。
// 展開後滑過分支會點亮該分支，點選才展開說明與相關專案；滑過技術時，所有用到它的分支一起亮起
export default function SkillMap({ areas, groups }) {
  const [activeId, setActiveId] = useState(areas[0].id);
  const [hoverId, setHoverId] = useState(null);
  const [hoverSkill, setHoverSkill] = useState(null);
  const [rowTops, setRowTops] = useState({});
  const [introDone, setIntroDone] = useState(false);
  const [open, setOpen] = useState(false);
  const treeRef = useRef(null);
  const rowEls = useRef({});
  const reduceMotion = useReducedMotion();
  const booted = open;
  const show = open ? "on" : "off";
  const skillCount = new Set(groups.flatMap((group) => group.items)).size;

  const toggle = () => {
    if (!open) window.gtag?.("event", "skill_tree_open");
    setOpen(!open);
  };

  const engineering = new Set(groups.filter((group) => group.emphasis).flatMap((group) => group.items));
  const focusId = hoverId ?? activeId;
  const lit = (area) => (hoverSkill ? area.skills.includes(hoverSkill) : area.id === focusId);
  const lastId = areas[areas.length - 1].id;
  const doneAt = rowAt(areas.length) + 0.3;

  // 展開動畫播完後，之後的亮暗切換都不再延遲；收合時重設，下次展開會重播
  useEffect(() => {
    if (!open) {
      setIntroDone(false);
      return;
    }
    const timer = setTimeout(() => setIntroDone(true), reduceMotion ? 0 : (doneAt + 0.3) * 1000);
    return () => clearTimeout(timer);
  }, [open, reduceMotion, doneAt]);

  // 主幹長度與光點位置依各分支的實際位置計算
  useLayoutEffect(() => {
    const measure = () => {
      const next = {};
      areas.forEach((area) => {
        const el = rowEls.current[area.id];
        if (el) next[area.id] = el.offsetTop;
      });
      setRowTops(next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(treeRef.current);
    return () => observer.disconnect();
  }, [areas]);

  return (
    <motion.div
      initial="off"
      animate={show}
      variants={{
        off: { boxShadow: "0 0 0px rgba(45,212,191,0)" },
        on: { boxShadow: ["0 0 0px rgba(45,212,191,0)", "0 0 40px rgba(45,212,191,0.35)", "0 0 0px rgba(45,212,191,0)"], transition: { duration: 1.2 } },
      }}
      className="relative overflow-hidden rounded-2xl bg-[#0b1517] p-5 sm:p-7 ring-1 ring-teal-400/20"
    >
      {/* 背景格線 */}
      <motion.div
        aria-hidden
        variants={{ off: { opacity: 0 }, on: { opacity: 0.12, transition: { duration: 0.8 } } }}
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(94,234,212,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(94,234,212,0.5)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      {/* 進場時由上往下掃過一次的掃描線 */}
      <motion.div
        aria-hidden
        variants={{
          off: { top: "0%", opacity: 0 },
          on: { top: "100%", opacity: [0, 1, 1, 0], transition: { delay: EXPAND * 0.5, duration: 1.1, ease: "easeInOut" } },
        }}
        className="pointer-events-none absolute inset-x-0 h-12 -translate-y-full bg-[linear-gradient(180deg,transparent,rgba(94,234,212,0.18))] border-b border-teal-300/60"
      />

      {/* 核心與開合按鈕 */}
      <div className="relative flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-300 shadow-[0_0_10px_#5eead4]" />
        </span>
        <DecodeText
          text="YUNYU.HU / SKILL TREE"
          trigger={booted ? 1 : 0}
          delay={150}
          duration={700}
          className={`${mono} text-xs tracking-[0.2em] text-teal-200`}
        />
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="skill-tree-body"
          className={`${mono} relative ml-auto inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] tracking-wider transition-colors ${
            open
              ? "border-white/15 text-slate-300 hover:border-white/30"
              : "border-teal-300/70 bg-teal-400/10 text-teal-100 shadow-[0_0_14px_rgba(45,212,191,0.35)] hover:bg-teal-400/20"
          }`}
        >
          {!open && <span aria-hidden className="absolute inset-0 rounded-full ring-1 ring-teal-300/60 motion-safe:animate-ping" />}
          {open ? "收合" : "展開技能樹"}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* 收合時：一行摘要，點了也能打開 */}
      {!open && (
        <button type="button" onClick={toggle} className={`${mono} relative mt-2 block text-left text-[11px] text-slate-400 hover:text-teal-200`}>
          &gt; {areas.length} 個方向・{skillCount} 項技術，點擊展開技能樹<span className="motion-safe:animate-pulse">▍</span>
        </button>
      )}

      {/* 分隔線：展開時由中間往兩側亮起，之後留下一條淡淡的線 */}
      <motion.div
        aria-hidden
        variants={{
          off: { scaleX: 0, opacity: 0 },
          on: { scaleX: 1, opacity: [0, 1, 0.35], transition: { duration: 0.7, ease: "easeOut" } },
        }}
        className="relative mt-3 h-px origin-center bg-[linear-gradient(90deg,transparent,#5eead4,transparent)] shadow-[0_0_12px_#2dd4bf]"
      />

      <motion.div
        id="skill-tree-body"
        variants={{
          off: { height: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
          on: { height: "auto", transition: { duration: EXPAND, ease: [0.22, 1, 0.36, 1] } },
        }}
        className="relative overflow-hidden"
      >
      {/* 圖例 */}
      <motion.div
        variants={{ off: { opacity: 0 }, on: { opacity: 1, transition: { delay: doneAt } } }}
        className={`${mono} flex flex-wrap justify-end gap-3 pt-3 text-[10px] text-slate-400`}
      >
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm border border-teal-400/60 bg-teal-400/20" />
          程式・系統・資料
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm border border-white/25" />
          研究與設計方法
        </span>
      </motion.div>
      <div ref={treeRef} className="relative pl-6 pt-1" onMouseLeave={() => setHoverId(null)}>
        {/* 主幹與沿主幹移動的訊號光點 */}
        <motion.span
          aria-hidden
          variants={{ off: { scaleY: 0 }, on: { scaleY: 1, transition: { delay: TRUNK_AT, duration: 0.6, ease: "easeOut" } } }}
          className="absolute left-[5px] top-0 w-px origin-top bg-teal-400/30"
          style={{ height: (rowTops[lastId] ?? 0) + TRACE_Y }}
        />
        {booted && rowTops[focusId] !== undefined && !hoverSkill && (
          <motion.span
            aria-hidden
            className="absolute left-[1.5px] h-2 w-2 rounded-full bg-teal-200 shadow-[0_0_12px_#5eead4]"
            initial={{ top: 0, opacity: 0 }}
            animate={{ top: rowTops[focusId] + TRACE_Y - 4, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 28, delay: introDone ? 0 : doneAt }}
          />
        )}

        {areas.map((area, index) => {
          const on = lit(area);
          const open = area.id === activeId;
          const at = rowAt(index);
          return (
            <div
              key={area.id}
              ref={(el) => (rowEls.current[area.id] = el)}
              className="relative py-2"
              onMouseEnter={() => setHoverId(area.id)}
            >
              {/* 主幹到節點的分支 */}
              <motion.span
                aria-hidden
                variants={{ off: { scaleX: 0 }, on: { scaleX: 1, transition: { delay: at, duration: 0.25 } } }}
                className={`absolute -left-[19px] h-px w-[19px] origin-left transition-colors duration-300 ${
                  on
                    ? "bg-[linear-gradient(90deg,#14b8a6,#ccfbf1,#14b8a6)] bg-[length:200%_100%] shadow-[0_0_8px_#2dd4bf] motion-safe:animate-[signal-flow_1.2s_linear_infinite]"
                    : "bg-teal-400/30"
                }`}
                style={{ top: TRACE_Y }}
              />

              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-0">
                <motion.button
                  type="button"
                  variants={{ off: { opacity: 0, x: -8 }, on: { opacity: 1, x: 0, transition: { delay: at + 0.1, duration: 0.3 } } }}
                  onClick={() => setActiveId(area.id)}
                  onFocus={() => setHoverId(area.id)}
                  onBlur={() => setHoverId(null)}
                  aria-expanded={open}
                  className={`md:w-64 min-h-[52px] shrink-0 flex flex-col justify-center rounded-lg border px-3 text-left outline-none transition-[border-color,background-color,box-shadow] duration-300 ${
                    on
                      ? "border-teal-300/80 bg-teal-400/15 shadow-[0_0_18px_rgba(45,212,191,0.25)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  <DecodeText
                    text={`${String(index + 1).padStart(2, "0")} / ${area.en}`}
                    trigger={booted ? 1 : 0}
                    delay={(at + 0.1) * 1000}
                    duration={500}
                    className={`${mono} block truncate text-[10px] tracking-wider text-teal-300/70`}
                  />
                  <span className="block text-sm font-semibold text-white mt-0.5">{area.title}</span>
                </motion.button>

                {/* 節點到技術的走線（桌機） */}
                <motion.span
                  aria-hidden
                  variants={{ off: { scaleX: 0 }, on: { scaleX: 1, transition: { delay: at + 0.25, duration: 0.2 } } }}
                  className={`hidden md:block mt-[26px] h-px w-6 shrink-0 origin-left transition-colors duration-300 ${
                    on ? "bg-teal-300 shadow-[0_0_6px_#2dd4bf]" : "bg-teal-400/25"
                  }`}
                />

                <div className="flex flex-wrap gap-1.5 md:pt-[15px]">
                  {area.skills.map((skill, i) => {
                    const hot = hoverSkill === skill;
                    const tone = hot
                      ? "border-teal-200 bg-teal-300/30 text-white shadow-[0_0_14px_rgba(94,234,212,0.6)]"
                      : engineering.has(skill)
                        ? `border-teal-400/40 bg-teal-400/10 text-teal-100 ${on ? "shadow-[0_0_8px_rgba(45,212,191,0.25)]" : ""}`
                        : "border-white/15 bg-white/[0.02] text-slate-300";
                    return (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={booted ? { opacity: on || hot ? 1 : 0.6, scale: 1 } : { opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.25, delay: introDone ? 0 : at + 0.35 + i * 0.03 }}
                        onMouseEnter={() => setHoverSkill(skill)}
                        onMouseLeave={() => setHoverSkill(null)}
                        onClick={() => setHoverSkill((current) => (current === skill ? null : skill))}
                        className={`${mono} cursor-default select-none rounded-md border px-2 py-0.5 text-[11px] transition-[border-color,background-color,box-shadow,color] duration-300 ${tone}`}
                      >
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              {/* 點選後展開：說明與相關專案 */}
              <AnimatePresence initial={false}>
                {open && booted && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: introDone ? 0 : doneAt }}
                    className="overflow-hidden md:pl-[17.5rem]"
                  >
                    <p className="text-sm text-slate-300 pt-2">{area.summary}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-sm">
                      {area.evidence.map((item) => (
                        <Evidence key={item.label} item={item} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      </motion.div>
    </motion.div>
  );
}
