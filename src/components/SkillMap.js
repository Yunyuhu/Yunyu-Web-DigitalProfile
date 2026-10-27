"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const DESKTOP = "(min-width: 768px)";

// 依證據類型顯示：站內專案、外部連結，或沒有連結的經歷
const Evidence = ({ item }) => {
  if (item.href?.startsWith("/")) {
    return (
      <Link href={item.href} className="group inline-flex items-center gap-0.5 text-teal-700 hover:text-teal-900">
        {item.label}
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    );
  }
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-0.5 text-teal-700 hover:text-teal-900">
        {item.label}
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    );
  }
  return <span className="text-gray-600">{item.label}</span>;
};

// 專長地圖：左側是方向，右側是技術。滑過（手機點選）任一邊，另一邊對應的項目會亮起並畫出連線；
// 還沒互動前，桌機版會自動輪流展示每個方向
export default function SkillMap({ areas, groups }) {
  const [active, setActive] = useState(null); // { kind: "area" | "skill", id }
  const [lines, setLines] = useState([]);
  const [touched, setTouched] = useState(false);
  const wrapRef = useRef(null);
  const areaEls = useRef({});
  const skillEls = useRef({});
  const inView = useInView(wrapRef, { amount: 0.35 });
  const reduceMotion = useReducedMotion();

  const linked = (area, skill) =>
    active?.kind === "area" ? active.id === area.id && area.skills.includes(skill) : active?.id === skill && area.skills.includes(skill);
  const areaOn = (area) =>
    active?.kind === "area" ? active.id === area.id : Boolean(active) && area.skills.includes(active.id);
  const skillOn = (skill) => areas.some((area) => linked(area, skill));

  const interact = (next) => {
    setTouched(true);
    setActive(next);
  };

  useEffect(() => {
    if (touched || reduceMotion || !inView || !window.matchMedia(DESKTOP).matches) return;
    let index = 0;
    setActive({ kind: "area", id: areas[0].id });
    const timer = setInterval(() => {
      index = (index + 1) % areas.length;
      setActive({ kind: "area", id: areas[index].id });
    }, 2600);
    return () => clearInterval(timer);
  }, [touched, reduceMotion, inView, areas]);

  // 連線座標依實際版面計算，視窗或內容尺寸改變時重算
  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const draw = () => {
      if (!active || !window.matchMedia(DESKTOP).matches) {
        setLines([]);
        return;
      }
      const box = wrap.getBoundingClientRect();
      const next = [];
      areas.forEach((area) => {
        area.skills.forEach((skill) => {
          const a = areaEls.current[area.id];
          const s = skillEls.current[skill];
          if (!linked(area, skill) || !a || !s) return;
          const ar = a.getBoundingClientRect();
          const sr = s.getBoundingClientRect();
          next.push({
            id: `${area.id}-${skill}`,
            x1: ar.right - box.left,
            y1: ar.top + ar.height / 2 - box.top,
            x2: sr.left - box.left,
            y2: sr.top + sr.height / 2 - box.top,
          });
        });
      });
      setLines(next);
    };
    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(wrap);
    return () => observer.disconnect();
    // linked 只依賴 active 與 areas
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, areas]);

  return (
    <div
      ref={wrapRef}
      onMouseLeave={() => touched && setActive(null)}
      className="relative grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-6 md:gap-12"
    >
      <svg aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden md:block w-full h-full overflow-visible">
        {lines.map((line) => {
          const mid = (line.x1 + line.x2) / 2;
          const d = `M ${line.x1} ${line.y1} C ${mid} ${line.y1}, ${mid} ${line.y2}, ${line.x2} ${line.y2}`;
          return (
            <g key={line.id}>
              <motion.path
                d={d}
                fill="none"
                stroke="#99f6e4"
                strokeWidth={1.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
              <path
                d={d}
                fill="none"
                stroke="#0d9488"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="1 11"
                className="motion-safe:animate-[skill-flow_0.9s_linear_infinite]"
              />
              <circle cx={line.x2} cy={line.y2} r={3} fill="#0d9488" />
            </g>
          );
        })}
      </svg>

      {/* 方向 */}
      <div className="relative z-10 flex flex-col gap-3">
        {areas.map((area) => {
          const on = areaOn(area);
          return (
            <div
              key={area.id}
              ref={(el) => (areaEls.current[area.id] = el)}
              tabIndex={0}
              onMouseEnter={() => interact({ kind: "area", id: area.id })}
              onFocus={() => interact({ kind: "area", id: area.id })}
              onClick={() => interact({ kind: "area", id: area.id })}
              className={`rounded-xl border bg-white p-4 outline-none transition-all duration-300 ${
                on ? "border-teal-400 shadow-md shadow-teal-100 md:translate-x-1" : "border-gray-200"
              } ${active && !on ? "opacity-60" : ""}`}
            >
              <p className="text-sm font-semibold text-gray-800">{area.title}</p>
              <p className="text-xs text-gray-500">{area.en}</p>
              <p className="text-sm text-gray-600 mt-2">{area.summary}</p>
              {/* 手機沒有連線，直接列出用到的技術 */}
              <p className="md:hidden flex flex-wrap text-xs text-teal-800 mt-2">
                {area.skills.map((skill, i) => (
                  <span key={skill} className="whitespace-nowrap">
                    {skill}
                    {i < area.skills.length - 1 && "・"}
                  </span>
                ))}
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-sm">
                {area.evidence.map((item) => (
                  <Evidence key={item.label} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 技術 */}
      <div className="relative z-10 flex flex-col gap-5 md:self-center">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-medium text-gray-500 mb-2">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const on = skillOn(skill);
                return (
                  <span
                    key={skill}
                    ref={(el) => (skillEls.current[skill] = el)}
                    tabIndex={0}
                    onMouseEnter={() => interact({ kind: "skill", id: skill })}
                    onFocus={() => interact({ kind: "skill", id: skill })}
                    onClick={() => interact({ kind: "skill", id: skill })}
                    className={`cursor-default select-none rounded-full border px-3 py-1 text-xs outline-none transition-all duration-300 ${
                      on
                        ? "bg-teal-600 border-teal-600 text-white scale-105"
                        : group.emphasis
                          ? "bg-[#e3f1f2] border-teal-100 text-gray-800"
                          : "bg-white border-gray-300 text-gray-700"
                    } ${active && !on ? "opacity-35" : ""}`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
