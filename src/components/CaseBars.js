"use client";

import { useState } from "react";

// 案例研究的互動長條圖：一張圖只比較一組數字。highlight 的長條用重點色、其他用灰色，數值標在右側。
// 滑過或聚焦一列時，下方顯示該列的說明；沒有說明時顯示資料來源。小螢幕把標籤放在長條上方，長條才有足夠的寬度。
export default function CaseBars({ title, items, max, source }) {
  const [active, setActive] = useState(null);
  const anyHighlight = items.some((item) => item.highlight);
  const shown = active === null ? null : items[active];

  return (
    <figure>
      {title && <figcaption className="text-sm font-semibold text-gray-800">{title}</figcaption>}
      <div className="mt-3 space-y-1" onMouseLeave={() => setActive(null)}>
        {items.map((item, i) => {
          const accent = !anyHighlight || item.highlight;
          const on = active === i;
          return (
            <div
              key={item.label}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              aria-label={`${item.label}：${item.display ?? item.value}${item.detail ? `。${item.detail}` : ""}`}
              className={`grid grid-cols-[1fr_4.5rem] items-center gap-x-3 gap-y-1 rounded-lg px-2 py-2 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 sm:grid-cols-[13rem_1fr_5.5rem] ${
                on ? "bg-gray-50" : ""
              }`}
            >
              <span className="col-span-2 text-xs leading-snug text-gray-700 sm:col-span-1 sm:text-sm">{item.label}</span>
              <span className="h-4 border-l border-gray-300">
                <span
                  className={`block h-full rounded-r-[4px] transition-colors ${
                    accent ? (on ? "bg-teal-700" : "bg-teal-600") : on ? "bg-gray-400" : "bg-gray-300"
                  }`}
                  style={{ width: `${(item.value / max) * 100}%` }}
                />
              </span>
              <span className={`text-right text-sm tabular-nums ${accent ? "font-semibold text-gray-900" : "text-gray-600"}`}>
                {item.display ?? item.value}
              </span>
            </div>
          );
        })}
      </div>
      {(source || items.some((item) => item.detail)) && (
        <p aria-live="polite" className="mt-3 border-t border-gray-100 pt-3 text-xs leading-relaxed text-gray-500">
          {shown?.detail ? (
            <>
              <span className="font-medium text-gray-800">{shown.label}</span>
              ：{shown.detail}
            </>
          ) : (
            source
          )}
        </p>
      )}
    </figure>
  );
}
