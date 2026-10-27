"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
export const EASTER_EGG_EVENT = "yunyu:easter-egg";
const mono = "font-[family-name:var(--font-geist-mono)]";

// 彩蛋「藍圖模式」：輸入 ↑↑↓↓←→←→BA，或連點頭像五下開啟；全站疊上格線、游標旁顯示座標。
// 再觸發一次或按 Esc 關閉
export default function EasterEgg() {
  const [on, setOn] = useState(false);
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    let progress = 0;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOn(false);
        return;
      }
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
      if (progress === KONAMI.length) {
        progress = 0;
        setOn((value) => !value);
      }
    };
    const toggle = () => setOn((value) => !value);
    window.addEventListener("keydown", onKey);
    window.addEventListener(EASTER_EGG_EVENT, toggle);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(EASTER_EGG_EVENT, toggle);
    };
  }, []);

  useEffect(() => {
    if (!on) return;
    let frame;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setCursor({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, [on]);

  return (
    <AnimatePresence>
      {on && (
        <motion.div
          key="blueprint"
          aria-hidden={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none fixed inset-0 z-[60]"
        >
          {/* 格線 */}
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(13,148,136,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.18)_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* 十字準線與座標 */}
          {cursor && (
            <>
              <div className="absolute inset-x-0 h-px bg-teal-500/40" style={{ top: cursor.y }} />
              <div className="absolute inset-y-0 w-px bg-teal-500/40" style={{ left: cursor.x }} />
              <span
                className={`${mono} absolute rounded bg-[#0b1517] px-1.5 py-0.5 text-[10px] text-teal-200`}
                style={{ top: cursor.y + 10, left: cursor.x + 10 }}
              >
                x:{Math.round(cursor.x)} y:{Math.round(cursor.y)}
              </span>
            </>
          )}

          {/* 終端機訊息 */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center px-4">
            <motion.div
              role="status"
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              className={`${mono} max-w-sm rounded-lg bg-[#0b1517] px-4 py-3 text-xs leading-relaxed text-teal-200 shadow-lg ring-1 ring-teal-400/30`}
            >
              <p>&gt; blueprint mode: on</p>
              <p>&gt; 你找到彩蛋了，謝謝你這麼仔細地逛 🍃</p>
              <p className="text-slate-400">&gt; 按 Esc 或再觸發一次即可關閉</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
