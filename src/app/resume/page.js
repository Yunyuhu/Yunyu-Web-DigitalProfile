import Image from "next/image";
import AvatarImg from "@/../public/Avatar.jpg";
import { resumeContent } from "@/data/resume";
import ResumeFrame from "@/components/ResumeFrame";

// 網址參數：?lang=en 切換英文版，?photo=1 顯示照片
const readOptions = async (searchParams) => {
  const params = await searchParams;
  return { lang: params?.lang === "en" ? "en" : "zh", photo: params?.photo === "1" };
};

// 分頁標題也是「另存為 PDF」時的預設檔名
export async function generateMetadata({ searchParams }) {
  const { lang } = await readOptions(searchParams);
  return { title: resumeContent[lang].fileName };
}

// 經歷類型的小色標：產業、研究、教學各一色
const TYPE_STYLES = {
  industry: "bg-teal-50 text-teal-800 ring-teal-300",
  research: "bg-violet-50 text-violet-800 ring-violet-300",
  teaching: "bg-amber-50 text-amber-800 ring-amber-300",
};

// 把 **…** 標記的文字換成重點色粗體
const Rich = ({ text }) =>
  text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-teal-700">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );

// 區塊標題：左側色條＋標題＋延伸的細線
const Section = ({ title, children }) => (
  <section>
    <h2 className="mb-1.5 flex items-center gap-2">
      <span className="h-3.5 w-1 rounded-full bg-teal-600" />
      <span className="text-[13px] font-bold tracking-wide text-gray-900">{title}</span>
      <span className="h-px flex-1 bg-teal-600/25" />
    </h2>
    {children}
  </section>
);

// 條目右側的時間小標籤
const Period = ({ children }) => (
  <span className="shrink-0 whitespace-nowrap rounded bg-gray-100 px-1.5 py-px text-[9px] text-gray-600 tabular-nums">
    {children}
  </span>
);

// 年份＋標題＋補充的一行式條目（研究、獲獎、社群）
const ShortList = ({ items }) => (
  <ul className="space-y-1">
    {items.map((item) => (
      <li key={`${item.year}-${item.title}`} className="grid grid-cols-[2.5rem_1fr] gap-x-1.5">
        <span className="pt-px text-[9.5px] text-gray-500 tabular-nums">{item.year}</span>
        <span>
          <span className="font-medium text-gray-900">{item.title}</span>
          <span className="block text-[9.5px] text-gray-600">{item.note}</span>
        </span>
      </li>
    ))}
  </ul>
);

// 放在寬欄的一行式條目：標題與補充同一行，比 ShortList 省空間（研究發表）
const InlineList = ({ items, dash }) => (
  <ul className="space-y-0.5">
    {items.map((item) => (
      <li key={`${item.year}-${item.title}`} className="grid grid-cols-[2.9rem_1fr] gap-x-1.5">
        <span className="pt-px text-[9.5px] text-gray-500 tabular-nums">{item.year}</span>
        <span>
          <span className="font-medium text-gray-900">{item.title}</span>
          <span className="text-gray-600">
            {dash}
            {item.note}
          </span>
        </span>
      </li>
    ))}
  </ul>
);

// 條列：重點色小圓點
const Points = ({ items }) => (
  <ul className="mt-0.5 space-y-px">
    {items.map((point) => (
      <li key={point} className="relative pl-2.5 text-gray-700 before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1 before:rounded-full before:bg-teal-500">
        <Rich text={point} />
      </li>
    ))}
  </ul>
);

// 一頁式履歷：固定 A4 尺寸，螢幕上由 ResumeFrame 等比縮放，列印與下載都以這張紙為準；英文較長，字級略小
export default async function ResumePage({ searchParams }) {
  const { lang, photo } = await readOptions(searchParams);
  const t = resumeContent[lang];
  const sep = lang === "zh" ? "｜" : " · ";

  return (
    <ResumeFrame lang={lang} photo={photo} fileName={t.fileName}>
      <article
        id="resume-sheet"
        lang={lang === "zh" ? "zh-Hant" : "en"}
        className={`resume-sheet flex h-[297mm] w-[210mm] flex-col overflow-hidden bg-white px-[13mm] py-[10mm] text-gray-800 ${lang === "zh" ? "text-[10.5px] leading-[1.5]" : "text-[10px] leading-[1.45]"}`}
      >
        <header className="flex items-center gap-5 border-b-2 border-teal-600 pb-3">
          {photo && (
            <Image
              src={AvatarImg}
              alt=""
              priority
              sizes="96px"
              className="h-[18mm] w-[18mm] shrink-0 rounded-full object-cover ring-2 ring-teal-600/30"
            />
          )}
          <div className="min-w-0 flex-1">
            <h1 className="text-[26px] font-bold leading-tight tracking-wide text-gray-900">
              {t.name}
              <span className="ml-2 text-[17px] font-semibold text-gray-500">{t.altName}</span>
            </h1>
            <p className="mt-1 text-[12px] font-medium text-teal-700">{t.headline}</p>
          </div>
          <ul className="space-y-0.5 text-right text-[9.5px] text-gray-600">
            {t.contacts.map((contact) => (
              <li key={contact.href}>
                <a href={contact.href} className="hover:text-teal-700">
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <p className="mt-3 rounded-md bg-teal-50/70 px-3 py-2 text-gray-700">
          <Rich text={t.summary} />
        </p>

        <div className="mt-3.5 grid min-h-0 flex-1 grid-cols-[1fr_62mm] gap-x-[6mm]">
          <div className="flex flex-col gap-3.5">
            <Section title={t.labels.experience}>
              <div className="space-y-1.5">
                {t.experience.map((item) => (
                  <div key={`${item.period}-${item.org}`}>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-[11px] font-semibold text-gray-900">
                        <span className={`mr-1.5 inline-block rounded px-1 align-[1px] text-[8.5px] font-medium leading-[1.5] ring-1 ${TYPE_STYLES[item.type]}`}>
                          {t.labels.types[item.type]}
                        </span>
                        {item.role}
                        <span className="font-normal text-gray-500">
                          {sep}
                          {item.org}
                        </span>
                      </p>
                      <Period>{item.period}</Period>
                    </div>
                    <Points items={item.points} />
                  </div>
                ))}
                <p className="text-[9.5px] text-gray-600">
                  <span className="font-medium text-gray-800">{t.labels.more}</span>
                  {t.moreExperience}
                </p>
              </div>
            </Section>

            <Section title={t.labels.projects}>
              <div className="space-y-1.5">
                {t.projects.map((project) => (
                  <div key={project.title}>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-[11px] font-semibold text-gray-900">{project.title}</p>
                      <Period>{project.year}</Period>
                    </div>
                    <p className="text-gray-700">{project.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title={t.labels.research}>
              {/* 英文較長，研究發表改成一行式才放得進一頁；中文保留兩行式讓左右欄平衡 */}
              {lang === "zh" ? <ShortList items={t.research} /> : <InlineList items={t.research} dash=" — " />}
            </Section>
          </div>

          {/* 右欄淡色底，和左欄的主要經歷分開 */}
          <div className="flex flex-col gap-3 self-start rounded-lg bg-[#f1f7f7] px-[4mm] py-[3mm]">
            <Section title={t.labels.education}>
              <ul className="space-y-1.5">
                {t.education.map((edu) => (
                  <li key={edu.school}>
                    <p className="font-semibold text-gray-900">{edu.school}</p>
                    <p className="text-gray-700">{edu.degree}</p>
                    <p className="text-[9.5px] text-gray-500 tabular-nums">{edu.period}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title={t.labels.skills}>
              <ul className="space-y-1.5">
                {t.skills.map((group) => (
                  <li key={group.label}>
                    <p className="font-semibold text-teal-800">{group.label}</p>
                    <p className="text-gray-700">{group.items}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title={t.labels.awards}>
              <ShortList items={t.awards} />
            </Section>

            <Section title={t.labels.community}>
              <ShortList items={t.community} />
            </Section>
          </div>
        </div>
      </article>
    </ResumeFrame>
  );
}
