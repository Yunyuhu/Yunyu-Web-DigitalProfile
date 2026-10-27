import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Archive,
  ArrowLeft,
  Bot,
  FileText,
  MousePointerClick,
  PlayCircle,
  Presentation,
} from "lucide-react";
import { projects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

// 連結類型統一成固定的按鈕文字與圖示，讓訪客點之前就知道會看到什麼
const LINK_TYPES = {
  video: { label: "Demo 影片", icon: PlayCircle },
  prototype: { label: "互動原型", icon: MousePointerClick },
  slides: { label: "專案簡報", icon: Presentation },
  doc: { label: "專案報告", icon: FileText },
  live: { label: "線上試用", icon: Bot },
  archive: { label: "網站存檔", icon: Archive },
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
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-8 sm:py-12 px-4 sm:px-6 overflow-y-auto">
      <div className="flex flex-col w-full max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 w-fit text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回專案列表
        </Link>

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

        <FadeIn className="mt-8"><section>
          <h2 className="font-semibold mb-3">專案重點</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed">
            {project.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section></FadeIn>

        <FadeIn className="mt-8"><section>
          <h2 className="font-semibold mb-3">技術與方法</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border border-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section></FadeIn>

        {project.links.length > 0 && (
          <FadeIn className="mt-8"><section>
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
      </div>
    </div>
  );
}
