"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// 關鍵字小驚喜：帶虛線底線的字，滑過（手機點一下）時冒出對應的小圖示往上飄
export default function KeywordPop({ icon: Icon, children }) {
  const [pops, setPops] = useState([]);

  const pop = () => {
    const id = Date.now() + Math.random();
    setPops((list) => [...list.slice(-2), id]);
    setTimeout(() => setPops((list) => list.filter((p) => p !== id)), 900);
  };

  return (
    <span
      onMouseEnter={pop}
      onClick={pop}
      className="relative cursor-pointer border-b border-dashed border-teal-400 font-medium text-teal-700"
    >
      {children}
      <AnimatePresence>
        {pops.map((id) => (
          <motion.span
            key={id}
            aria-hidden
            initial={{ opacity: 0, y: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0], y: -34, scale: 1.15, rotate: [0, -8, 6] }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-0 -ml-2.5"
          >
            <Icon className="h-5 w-5 text-teal-600" />
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
}
