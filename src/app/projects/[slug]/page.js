import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  FileText,
  MousePointerClick,
  PlayCircle,
  Presentation,
} from "lucide-react";
import { projects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import ProjectKeyNav from "@/components/ProjectKeyNav";
import CaseStudy from "@/components/CaseStudy";

// 連結類型統一成固定的按鈕文字與圖示，讓訪客點之前就知道會看到什麼
const LINK_TYPES = {
  video: { label: "Demo 影片", icon: PlayCircle },
  prototype: { label: "互動原型", icon: MousePointerClick },
  slides: { label: "專案簡報", icon: Presentation },
  doc: { label: "專案報告", icon: FileText },
  live: { label: "線上試用", icon: Bot },
  archive: { label: "網站存檔", icon: Archive },
};

// 推薦其他專案：技術標籤重疊、同樣的專案背景優先，其次是精選專案；分數相同時照列表順序
const relatedProjects = (project, exclude) =>
  projects
    .filter((p) => !exclude.includes(p.slug))
    .map((p) => ({
      p,
      score:
        p.stack.filter((item) => project.stack.includes(item)).length * 2 +
        (p.context === project.context ? 3 : 0) +
        (p.featured ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ p }) => p);

// 頁尾的上一個／下一個專案卡片
const PagerCard = ({ project, direction }) => {
  const next = direction === "next";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-all hover:border-teal-300 hover:shadow-md ${next ? "sm:flex-row-reverse sm:text-right" : ""}`}
    >
      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <Image src={project.image} alt="" fill sizes="80px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="min-w-0 flex-1">
        <p className={`flex items-center gap-1 text-xs text-gray-500 ${next ? "sm:justify-end" : ""}`}>
          {next ? null : <ChevronLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />}
          {next ? "下一個專案" : "上一個專案"}
          {next ? <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /> : null}
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold text-gray-800">{project.title}</p>
      </div>
    </Link>
  );
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: `${project.title}｜胡芸毓的數位履歷` } : {};
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  // 頭尾相接，看完最後一個會接回第一個
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const related = relatedProjects(project, [project.slug, prev.slug, next.slug]);

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-8 sm:py-12 px-4 sm:px-6 overflow-y-auto">
      <div className="flex flex-col w-full max-w-4xl">
        <ProjectKeyNav prevHref={`/projects/${prev.slug}`} nextHref={`/projects/${next.slug}`} />
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 w-fit text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回專案列表
          </Link>
          <nav aria-label="切換專案" className="flex items-center gap-1 text-xs text-gray-500">
            <span className="hidden lg:inline mr-2 text-[11px] text-gray-400">可用 ← → 切換</span>
            <Link
              href={`/projects/${prev.slug}`}
              aria-label={`上一個專案：${prev.title}`}
              title={prev.title}
              className="rounded-full border border-gray-200 p-1.5 transition-colors hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </Link>
            <span className="px-1 tabular-nums">
              {index + 1} / {projects.length}
            </span>
            <Link
              href={`/projects/${next.slug}`}
              aria-label={`下一個專案：${next.title}`}
              title={next.title}
              className="rounded-full border border-gray-200 p-1.5 transition-colors hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
            >
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          {project.year} · {project.context}
          {project.featured && (
            <span className="ml-2 px-2 py-0.5 text-[11px] font-medium rounded-full bg-green-50 text-green-800">
              精選專案
            </span>
          )}
        </p>
        <h1 className="text-2xl font-bold mt-1">{project.title}</h1>
        {project.subtitle && (
          <p className="text-sm text-gray-500 italic mt-1">{project.subtitle}</p>
        )}
        <p className="text-base text-gray-800 mt-3 leading-relaxed">{project.tagline}</p>

        <FadeIn className="relative w-full aspect-video rounded-2xl overflow-hidden border bg-gray-100 mt-6" delay={0.05}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-contain"
          />
        </FadeIn>

        <CaseStudy caseStudy={project.caseStudy} stack={project.stack} />

        {project.links.length > 0 && (
          <FadeIn className="mt-12"><section>
            <h2 className="font-semibold mb-3">相關資源</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => {
                const { label, icon: Icon } = LINK_TYPES[link.type];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-green-700 text-green-800 hover:bg-green-700 hover:text-white hover:-translate-y-0.5 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label ?? label}
                  </a>
                );
              })}
            </div>
          </section></FadeIn>
        )}

        {/* 看完直接接下一個，不用回列表 */}
        <FadeIn className="mt-12">
          <nav aria-label="上一個與下一個專案" className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-gray-200 pt-8">
            <PagerCard project={prev} direction="prev" />
            <PagerCard project={next} direction="next" />
          </nav>
        </FadeIn>

        <FadeIn className="mt-10">
          <section>
            <div className="flex items-baseline justify-between gap-3 mb-3">
              <h2 className="font-semibold">其他專案</h2>
              <Link href="/projects" className="group inline-flex items-center gap-1 text-xs font-medium text-teal-700 hover:text-teal-900">
                看全部 {projects.length} 個專案
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <Image src={p.image} alt={p.title} fill sizes="(min-width: 640px) 280px, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-3">
                    <p className="text-[11px] text-gray-500">{p.year} · {p.context}</p>
                    <p className="mt-0.5 text-sm font-semibold text-gray-800">{p.title}</p>
                    <p className="mt-1 text-xs leading-snug text-gray-600 line-clamp-2">{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
