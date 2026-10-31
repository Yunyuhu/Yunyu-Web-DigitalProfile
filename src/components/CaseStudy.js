import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import CaseNav from "@/components/CaseNav";
import CaseVisual from "@/components/CaseVisuals";

// 精選專案的案例研究，固定回答四個問題，再補上成果：
// 為什麼做（意義與必要性）→ 範圍與對象 → 調研與洞察 → 解決方法（技術與流程）→ 成果。
// 每章的標題就是該章的結論，內文最多一句，重點交給圖表；沒有資料的章節不顯示。欄位說明見 data/projects.js
const CHAPTERS = [
  { key: "why", label: "為什麼做", hint: "意義與必要性" },
  { key: "scope", label: "範圍與對象", hint: "場域、人群與範圍" },
  { key: "insight", label: "調研與洞察", hint: "結果、痛點與洞察" },
  { key: "solution", label: "解決方法", hint: "技術與流程" },
  { key: "outcome", label: "成果", hint: "獎項與後續" },
];

export default function CaseStudy({ caseStudy: cs, stack }) {
  const chapters = CHAPTERS.filter((chapter) => cs[chapter.key]).map((chapter) => ({ ...chapter, ...cs[chapter.key] }));

  return (
    <>
      {/* 頁首：核心問題、亮點，以及我的角色與負責的工作 */}
      <FadeIn className="mt-6">
        <div className="rounded-2xl bg-gray-50 p-5 sm:p-7">
          <p className="text-xs font-medium text-teal-700">{cs.questionLabel ?? "核心問題"}</p>
          <p className="mt-1.5 text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">{cs.question}</p>
          {cs.highlights && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {cs.highlights.map((item) => (
                <li key={item.value} className="rounded-full bg-white px-3 py-1 text-xs text-gray-600 ring-1 ring-gray-200">
                  <span className="mr-1.5 font-semibold text-teal-800">{item.value}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          )}
          <div className={`mt-6 grid gap-6 border-t border-gray-200 pt-5 ${cs.contributions ? "sm:grid-cols-2" : ""}`}>
            <dl className="space-y-3">
              {cs.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] text-gray-500">{fact.label}</dt>
                  <dd className="mt-0.5 text-sm leading-snug text-gray-800">{fact.value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-[11px] text-gray-500">技術與方法</dt>
                <dd className="mt-0.5 text-sm leading-snug text-gray-800">{stack.join("、")}</dd>
              </div>
            </dl>
            {cs.contributions && (
              <div>
                <p className="text-[11px] text-gray-500">我負責的工作</p>
                <ul className="mt-1.5 space-y-2">
                  {cs.contributions.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-snug text-gray-800">
                      <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </FadeIn>

      <CaseNav sections={chapters.map(({ key, label }) => ({ id: key, label }))} />

      {chapters.map((chapter, i) => (
        <FadeIn key={chapter.key} className="mt-14">
          <section id={chapter.key} aria-labelledby={`${chapter.key}-title`} className="scroll-mt-16">
            <p className="flex flex-wrap items-baseline gap-x-2 text-xs">
              <span className="font-medium tabular-nums text-teal-700">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-medium text-teal-700">{chapter.label}</span>
              <span className="text-gray-400">{chapter.hint}</span>
            </p>
            <h2 id={`${chapter.key}-title`} className="mt-2 text-xl font-semibold leading-snug text-gray-900 sm:text-[22px]">
              {chapter.headline}
            </h2>
            {chapter.body && <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-gray-600">{chapter.body}</p>}
            {chapter.visuals?.map((visual, j) => (
              <div key={j} className="mt-6">
                <CaseVisual visual={visual} />
              </div>
            ))}
          </section>
        </FadeIn>
      ))}
    </>
  );
}
