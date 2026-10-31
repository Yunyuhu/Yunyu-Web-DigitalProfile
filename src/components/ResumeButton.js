"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, FileDown } from "lucide-react";

const OPTIONS = [
  { href: "/resume", label: "中文版" },
  { href: "/resume?lang=en", label: "English" },
  { href: "/resume?lang=both", label: "中英合併" },
];

// 「下載履歷」按鈕：點開選中文、英文或中英合併版，前往 /resume 頁下載 PDF／PNG；點外面或按 Esc 收起
export default function ResumeButton() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-1.5 rounded-full border border-teal-700 px-4 py-1.5 text-sm font-medium text-teal-800 transition-colors hover:bg-teal-700 hover:text-white"
      >
        <FileDown className="h-4 w-4" />
        下載履歷
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg"
          >
            {OPTIONS.map((option) => (
              <Link
                key={option.href}
                href={option.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-800"
              >
                {option.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
