"use client";

import { motion, MotionConfig } from "framer-motion";

// 每次換頁時內容區淡入上移；系統開啟「減少動態效果」時自動關閉
export default function Template({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="flex flex-1 min-w-0 lg:h-full"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
