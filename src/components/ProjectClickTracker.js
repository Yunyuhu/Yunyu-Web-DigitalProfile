"use client";

import { useEffect } from "react";
import { PROJECT_LIST, projectSlugFromPath, trackProjectClick } from "@/lib/tracking";

// 點擊來源：連結或它的外層標了 data-track-source 就用它（上一個／下一個、其他專案、技能樹），否則看所在頁面
const sourceOf = (link) => {
  const marked = link.closest("[data-track-source]")?.dataset.trackSource;
  if (marked) return marked;
  const path = window.location.pathname;
  if (path === "/projects") return PROJECT_LIST;
  if (path.startsWith("/projects/")) return "project_page";
  return path.split("/")[1] || "home";
};

// 全站監聽點進專案頁的連結（含按住 Cmd／Ctrl 開新分頁），記下是哪個專案、從哪裡點進去
export default function ProjectClickTracker() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.("a[href]");
      if (!link || link.origin !== window.location.origin) return;
      const slug = projectSlugFromPath(link.pathname);
      if (slug) trackProjectClick(slug, sourceOf(link));
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
