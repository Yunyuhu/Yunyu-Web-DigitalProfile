"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// 在專案詳細頁按 ← → 切換上一個／下一個專案，並預先載入這兩頁；在輸入框裡或按著組合鍵時不觸發
export default function ProjectKeyNav({ prevHref, nextHref }) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(prevHref);
    router.prefetch(nextHref);
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.target.closest?.("input, textarea, select, [contenteditable]")) return;
      if (e.key === "ArrowLeft") router.push(prevHref);
      if (e.key === "ArrowRight") router.push(nextHref);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, prevHref, nextHref]);

  return null;
}
