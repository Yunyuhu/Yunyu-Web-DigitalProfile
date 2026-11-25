"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { projectSlugFromPath, trackProjectClick } from "@/lib/tracking";

// 在專案詳細頁按 ← → 切換上一個／下一個專案，並預先載入這兩頁；在輸入框裡或按著組合鍵時不觸發
export default function ProjectKeyNav({ prevHref, nextHref }) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(prevHref);
    router.prefetch(nextHref);
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.target.closest?.("input, textarea, select, [contenteditable]")) return;
      const href = { ArrowLeft: prevHref, ArrowRight: nextHref }[e.key];
      if (!href) return;
      trackProjectClick(projectSlugFromPath(href), "keyboard");
      router.push(href);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, prevHref, nextHref]);

  return null;
}
