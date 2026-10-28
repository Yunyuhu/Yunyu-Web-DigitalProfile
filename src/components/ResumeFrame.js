"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ImageDown, Printer } from "lucide-react";

// 履歷外框：螢幕上依可用寬度等比縮小 A4 紙張，提供中英文切換、照片開關、「列印／存成 PDF」與「下載 PNG」；
// 切換會改網址參數（?lang=en&photo=1），方便直接分享某個版本。列印時外框、按鈕都隱藏，只印紙張本身
export default function ResumeFrame({ lang, photo, fileName, children }) {
  const router = useRouter();
  const boxRef = useRef(null);
  const sheetRef = useRef(null);
  const [size, setSize] = useState({ scale: 1, height: null });
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const fit = () => {
      const sheet = sheetRef.current?.firstElementChild;
      if (!sheet || !boxRef.current) return;
      const scale = Math.min(1, boxRef.current.clientWidth / sheet.offsetWidth);
      setSize({ scale, height: sheet.offsetHeight * scale });
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  const setOptions = (next) => {
    const options = { lang, photo, ...next };
    const params = new URLSearchParams();
    if (options.lang === "en") params.set("lang", "en");
    if (options.photo) params.set("photo", "1");
    const query = params.toString();
    router.replace(query ? `/resume?${query}` : "/resume", { scroll: false });
  };

  const downloadPng = async () => {
    setBusy(true);
    try {
      const { toPng } = await import("html-to-image");
      const url = await toPng(document.getElementById("resume-sheet"), { pixelRatio: 3, backgroundColor: "#ffffff" });
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName}.png`;
      link.click();
    } finally {
      setBusy(false);
    }
  };

  const button =
    "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors disabled:opacity-60";

  return (
    <div className="flex w-full flex-col items-center gap-4 py-2 sm:py-4 print:block print:p-0">
      <div className="flex w-full max-w-[210mm] flex-wrap items-center justify-between gap-3 print:hidden">
        <Link href="/about" className="group flex flex-col">
          <span className="text-[11px] tracking-wide text-gray-400">繼續認識胡芸毓的研究與作品</span>
          <span className="inline-flex items-center gap-1 text-sm text-gray-600 group-hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            返回關於我
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          {/* 中英文切換 */}
          <div role="group" aria-label="語言" className="inline-flex rounded-full border border-gray-300 bg-white p-0.5 text-sm">
            {[
              { value: "zh", label: "中文" },
              { value: "en", label: "English" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={lang === option.value}
                onClick={() => setOptions({ lang: option.value })}
                className={`rounded-full px-3 py-1 transition-colors ${lang === option.value ? "bg-teal-700 text-white" : "text-gray-600 hover:text-gray-900"}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <label className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-gray-700">
            <input type="checkbox" checked={photo} onChange={(e) => setOptions({ photo: e.target.checked })} className="h-4 w-4 accent-teal-700" />
            放照片
          </label>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => window.print()} className={`${button} border-teal-700 bg-teal-700 text-white hover:bg-teal-800`}>
            <Printer className="h-4 w-4" />
            下載 PDF／列印
          </button>
          <button type="button" onClick={downloadPng} disabled={busy} className={`${button} border-teal-700 text-teal-800 hover:bg-teal-50`}>
            <ImageDown className="h-4 w-4" />
            {busy ? "產生中…" : "下載 PNG"}
          </button>
        </div>
      </div>

      <div ref={boxRef} className="w-full max-w-[210mm] print:max-w-none">
        <div className="resume-frame overflow-hidden rounded-sm shadow-xl print:overflow-visible print:shadow-none" style={{ height: size.height ?? undefined }}>
          <div ref={sheetRef} className="origin-top-left" style={{ transform: `scale(${size.scale})` }}>
            {children}
          </div>
        </div>
      </div>

      <p className="max-w-[210mm] text-center text-xs text-gray-500 print:hidden">
        存成 PDF：按「下載 PDF／列印」，目的地選「另存為 PDF」，紙張 A4、邊界選「無」。
      </p>
    </div>
  );
}
