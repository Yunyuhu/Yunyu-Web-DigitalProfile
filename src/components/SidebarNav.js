"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { UserCircle, Sparkles, LayoutDashboard, BookOpenCheck } from "lucide-react";

const NAV_ITEMS = [
  { href: "/about", label: "關於我", en: "About Me", icon: UserCircle },
  { href: "/interests", label: "興趣", en: "Interests", icon: Sparkles },
  { href: "/projects", label: "專案", en: "Projects (UX & Dev)", icon: LayoutDashboard },
  { href: "/research", label: "研究與活動", en: "Research ＆ Activities", icon: BookOpenCheck },
];

// 各尺寸都是同一份直式選單（圖示、中文、英文）；目前頁面以滑動的底色標示
export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex flex-col gap-2 lg:gap-4 short:gap-2">
      {NAV_ITEMS.map(({ href, label, en, icon: Icon }) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className="group relative w-full rounded-xl bg-[#f7f7f7] hover:bg-[#edf6f7] shadow-sm transition-colors"
          >
            {active && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 rounded-xl bg-[#e3f1f2] ring-1 ring-teal-200"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative flex items-center h-[52px] lg:h-[60px] short:h-[48px] px-4">
              <Icon
                className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110 ${active ? "text-teal-700" : "text-gray-600"}`}
              />
              <span className="flex flex-col leading-tight">
                <span className="font-semibold text-sm">{label}</span>
                <span className="text-xs text-gray-500">{en}</span>
              </span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
