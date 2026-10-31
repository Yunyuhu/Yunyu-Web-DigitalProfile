"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

// 從痛點到做法的對應圖：右側每一項標出它對應的左側編號；滑過、聚焦或點選任一邊，相連的項目一起標出、其他淡出（滑鼠離開後恢復），
// 看得出每個做法是為了解決哪個問題。right[].links 是對應的左側索引。
export default function CaseMapping({ leftTitle, rightTitle, left, right }) {
  const [focus, setFocus] = useState(null);
  const linked = (side, index) => {
    if (!focus) return true;
    if (focus.side === side) return focus.index === index;
    return side === "right" ? right[index].links.includes(focus.index) : right[focus.index].links.includes(index);
  };
  // 用函式而不是元件產生每一項，避免每次重繪都重新掛載、讓鍵盤焦點跑掉
  const renderItem = (side, index, key, children) => {
    const on = linked(side, index);
    const lit = focus && on;
    return (
      <li key={key}>
        <button
          type="button"
          onMouseEnter={() => setFocus({ side, index })}
          onFocus={() => setFocus({ side, index })}
          onClick={() => setFocus({ side, index })}
          className={`flex w-full items-start gap-2.5 rounded-xl border px-3 py-2.5 text-left text-sm leading-snug transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
            lit ? (side === "left" ? "border-gray-400 bg-gray-50" : "border-teal-600 bg-teal-50") : "border-gray-200"
          } ${on ? "opacity-100" : "opacity-30"}`}
        >
          {children}
        </button>
      </li>
    );
  };

  return (
    <div onMouseLeave={() => setFocus(null)}>
      <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
        <div>
          <p className="mb-2 text-xs font-medium text-gray-500">{leftTitle}</p>
          <ol className="space-y-2">
            {left.map((text, i) =>
              renderItem(
                "left",
                i,
                text,
                <>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[11px] font-semibold tabular-nums text-gray-600">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{text}</span>
                </>
              )
            )}
          </ol>
        </div>
        <ArrowRight aria-hidden className="hidden h-5 w-5 self-center text-teal-500 sm:block" />
        <div>
          <p className="mb-2 text-xs font-medium text-teal-700">{rightTitle}</p>
          <ol className="space-y-2">
            {right.map((item, i) =>
              renderItem(
                "right",
                i,
                item.title,
                <>
                  <span className="flex-1 text-gray-900">{item.title}</span>
                  <span className="flex shrink-0 gap-1" aria-label={`對應${leftTitle} ${item.links.map((n) => n + 1).join("、")}`}>
                    {item.links.map((n) => (
                      <span key={n} className="rounded-full bg-gray-100 px-1.5 text-[11px] tabular-nums text-gray-600">
                        {n + 1}
                      </span>
                    ))}
                  </span>
                </>
              )
            )}
          </ol>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-400">滑過或點選一項，看它對應到哪一邊；右側的數字是對應的{leftTitle}編號。</p>
    </div>
  );
}
