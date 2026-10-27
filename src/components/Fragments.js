"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";

// 碎片收集彩蛋：關於我、興趣、專案、研究與活動四頁的標題旁各藏一顆 ✦，點了就收集；
// 收齊四顆解鎖感謝訊息與聯絡方式。進度只存在訪客自己的瀏覽器，並送一筆 GA4 事件方便看有多少人在玩
const TOTAL = 4;
const STORAGE_KEY = "yunyu-fragments";
const COLLECT_EVENT = "yunyu:fragment";
const mono = "font-[family-name:var(--font-geist-mono)]";

const readFound = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
};

const saveFound = (list) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // 無痕模式等無法寫入時，這次瀏覽仍可正常收集
  }
};

// 放在頁面標題旁的碎片
export function Fragment({ id }) {
  const [found, setFound] = useState(false);

  useEffect(() => {
    setFound(readFound().includes(id));
  }, [id]);

  const collect = () => {
    const before = readFound();
    const list = before.includes(id) ? before : [...before, id];
    saveFound(list);
    setFound(true);
    if (!before.includes(id)) window.gtag?.("event", "fragment_collect", { fragment_id: id, fragment_count: list.length });
    window.dispatchEvent(new CustomEvent(COLLECT_EVENT, { detail: { count: list.length, again: before.includes(id) } }));
  };

  return (
    <button
      type="button"
      onClick={collect}
      aria-label={found ? "已收集的碎片" : "收集藏在這裡的碎片"}
      title={found ? "已收集" : "這裡藏了一顆碎片"}
      className="relative ml-2 inline-flex h-7 w-7 items-center justify-center align-middle"
    >
      {!found && <span className="absolute inset-1 rounded-full bg-teal-300/50 motion-safe:animate-ping" />}
      <motion.span
        whileHover={{ rotate: 90, scale: 1.25 }}
        whileTap={{ scale: 0.7 }}
        className={`relative text-lg leading-none ${found ? "text-teal-700/60" : "text-teal-500 drop-shadow-[0_0_6px_rgba(45,212,191,0.8)]"}`}
      >
        ✦
      </motion.span>
    </button>
  );
}

// 收集進度提示與收齊後的解鎖卡片，放在 layout 裡全站共用
export function FragmentProgress() {
  const [notice, setNotice] = useState(null); // { count, again }

  useEffect(() => {
    const onCollect = (e) => setNotice(e.detail);
    window.addEventListener(COLLECT_EVENT, onCollect);
    return () => window.removeEventListener(COLLECT_EVENT, onCollect);
  }, []);

  useEffect(() => {
    if (!notice || notice.count >= TOTAL) return;
    const timer = setTimeout(() => setNotice(null), 4000);
    return () => clearTimeout(timer);
  }, [notice]);

  const complete = notice?.count >= TOTAL;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:justify-end sm:px-6">
      <AnimatePresence>
        {notice && (
          <motion.div
            key={complete ? "complete" : "progress"}
            role="status"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16 }}
            className="pointer-events-auto relative w-full max-w-xs rounded-xl bg-[#0b1517] p-4 text-sm text-slate-200 shadow-xl ring-1 ring-teal-400/30"
          >
            <button
              type="button"
              onClick={() => setNotice(null)}
              aria-label="關閉"
              className="absolute right-2 top-2 rounded p-1 text-slate-500 hover:text-slate-200"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className={`${mono} text-xs text-teal-300`}>
              ✦ FRAGMENT {Math.min(notice.count, TOTAL)}/{TOTAL}
            </p>
            <div className="mt-2 flex gap-1.5">
              {Array.from({ length: TOTAL }, (_, i) => (
                <span
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${i < notice.count ? "bg-teal-300 shadow-[0_0_6px_#5eead4]" : "bg-white/10"}`}
                />
              ))}
            </div>
            {complete ? (
              <>
                <p className="mt-3 font-semibold text-white">全部收集完成！</p>
                <p className="mt-1 text-slate-300">謝謝你把整個作品集都逛完了。想聊聊合作，或聽我分享人機協作的研究嗎？</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="mailto:sandyfuoo68@gmail.com"
                    className="inline-flex items-center gap-1 rounded-full bg-teal-400 px-3 py-1 text-xs font-medium text-[#0b1517] hover:bg-teal-300"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    寄信給我
                  </a>
                  <Link
                    href="/projects/coordination-intent-thesis"
                    onClick={() => setNotice(null)}
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs text-teal-200 ring-1 ring-teal-400/40 hover:bg-teal-400/10"
                  >
                    看碩士論文
                  </Link>
                </div>
              </>
            ) : (
              <p className="mt-2 text-slate-300">
                {notice.again ? "這顆已經收集過囉。" : "收集到一顆碎片！"}
                其他頁面的標題旁還藏著 {TOTAL - notice.count} 顆，去找找看。
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
