"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import DecodeText from "@/components/DecodeText";
import { Fragment } from "@/components/Fragments";

// 把游標在卡片內的位置寫進 CSS 變數，給柔光效果使用
const trackSpotlight = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.trim().toLowerCase();
    const text = [
      project.title,
      project.context,
      project.tagline,
      ...project.highlights,
      ...project.stack,
    ].join(" ").toLowerCase();
    return text.includes(term);
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentItems = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-8 sm:py-12 px-4 sm:px-6 overflow-y-auto">
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">專案 / <DecodeText text="Projects" /><Fragment id="projects" /></h1>
        <h3 className="text-sm text-gray-600 mt-2">
          人機互動研究、AI 應用與軟硬體互動原型的作品，精選專案排在最前面。點選卡片可查看專案重點與相關資源。
        </h3>
        <input
          type="text"
          placeholder="搜尋專案名稱、技術或關鍵字（例如 YOLO、Unity、使用者研究）"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="mt-4 p-2 border rounded-md text-sm w-full"
        />
        <div className="w-full h-px bg-gray-200 mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 w-full">
        {currentItems.map((project, index) => (
          <motion.div
            key={project.slug}
            className="md:col-span-6 col-span-1 flex"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
          <Link
            href={`/projects/${project.slug}`}
            onMouseMove={trackSpotlight}
            className="group relative w-full rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden flex flex-col"
          >
            {/* 跟著游標移動的柔光 */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "radial-gradient(260px circle at var(--spot-x) var(--spot-y), rgba(20, 184, 166, 0.14), transparent 70%)" }}
            />
            <div className="relative w-full h-40 md:h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {project.featured && (
                <span className="absolute top-3 left-3 px-2 py-0.5 text-[11px] font-medium rounded-full bg-white/90 text-green-800">
                  精選專案
                </span>
              )}
            </div>
            <div className="flex flex-col flex-1 p-4 bg-gray-50 text-sm">
              <p className="text-[11px] text-gray-500 mb-1">
                {project.year} · {project.context}
              </p>
              <h2 className="text-base font-semibold break-words">{project.title}</h2>
              <p className="text-xs text-gray-700 mt-1 mb-3 leading-snug">{project.tagline}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((item, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] bg-gray-200 text-gray-700 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 mt-3 pt-3 border-t border-gray-200 text-xs font-medium text-green-800">
                查看專案
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
          </motion.div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-12 text-center text-sm text-gray-400 py-12">
            找不到符合「{searchTerm}」的專案。
          </div>
        )}
      </div>

      {/* 分頁控制 */}
      {totalPages > 1 && (
        <div className="flex gap-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm rounded border bg-gray-100 disabled:opacity-40"
          >
            上一頁
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 text-sm rounded border ${currentPage === i + 1 ? "bg-green-700 text-white" : "bg-gray-100"}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm rounded border bg-gray-100 disabled:opacity-40"
          >
            下一頁
          </button>
        </div>
      )}
    </div>
  );
}
