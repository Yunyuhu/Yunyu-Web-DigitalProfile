"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+/<>_";

// 解碼文字：先顯示亂碼，再由左到右還原成原文。
// trigger 大於 0 時播放，每次改變就重播一次（例如滑過時遞增）；delay、duration 以毫秒計
export default function DecodeText({ text, trigger = 1, delay = 0, duration = 600, className }) {
  const reduceMotion = useReducedMotion();
  const [output, setOutput] = useState(text);

  useEffect(() => {
    if (!trigger || reduceMotion) {
      setOutput(text);
      return;
    }
    let frame;
    let start;
    const scramble = (revealed) =>
      text
        .split("")
        .map((char, i) => (i < revealed || char === " " ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
        .join("");
    const tick = (now) => {
      start ??= now + delay;
      const progress = Math.max(0, Math.min((now - start) / duration, 1));
      setOutput(scramble(Math.floor(progress * text.length)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, trigger, delay, duration, reduceMotion]);

  return <span className={className}>{output}</span>;
}
