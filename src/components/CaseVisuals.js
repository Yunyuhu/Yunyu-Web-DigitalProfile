import Image from "next/image";
import CaseBars from "@/components/CaseBars";
import CaseMapping from "@/components/CaseMapping";

// 案例研究各章節的視覺，依 visual.type 選一種。欄位說明見 data/projects.js
const columns = (count) => (count >= 4 ? "grid-cols-2 sm:grid-cols-4" : count === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2");

const Chips = ({ items, tone = "gray" }) => (
  <ul className="mt-2 flex flex-wrap gap-1.5">
    {items.map((item) => (
      <li
        key={item}
        className={`rounded-full px-2 py-0.5 text-[11px] ${tone === "teal" ? "border border-teal-200 bg-teal-50 text-teal-900" : "bg-gray-100 text-gray-700"}`}
      >
        {item}
      </li>
    ))}
  </ul>
);

// 大數字，排成一條以細線分隔的數字帶（不用卡片），每個數字可以附自己的資料來源
const Stats = ({ items }) => (
  <dl className={`grid gap-y-5 border-y border-gray-200 py-5 ${columns(items.length)} sm:divide-x sm:divide-gray-200`}>
    {items.map((stat) => (
      <div key={stat.label} className="sm:px-5 sm:first:pl-0">
        <dt className="text-2xl font-semibold tabular-nums text-gray-900 sm:text-3xl">{stat.value}</dt>
        <dd className="mt-1 text-sm leading-snug text-gray-700">{stat.label}</dd>
        {stat.source && <dd className="mt-1.5 text-[11px] leading-snug text-gray-400">{stat.source}</dd>}
      </div>
    ))}
  </dl>
);

// 成果清單：獎項、發表等，一列一項
const List = ({ items }) => (
  <ul className="divide-y divide-gray-200 border-y border-gray-200">
    {items.map((item) => (
      <li key={item.label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
        <span className="font-semibold text-teal-800">{item.value}</span>
        <span className="text-sm leading-relaxed text-gray-700">{item.label}</span>
      </li>
    ))}
  </ul>
);

// 範圍：場域、對象、範圍等，左標籤、右內容，以細線分隔
const Scope = ({ items }) => (
  <dl className="divide-y divide-gray-200 border-y border-gray-200">
    {items.map((item) => (
      <div key={item.label} className="grid gap-1 py-3 sm:grid-cols-[7rem_1fr] sm:gap-4">
        <dt className="pt-0.5 text-xs font-medium text-teal-700">{item.label}</dt>
        <dd>
          <p className="font-semibold leading-snug text-gray-900">{item.value}</p>
          {item.chips && <Chips items={item.chips} />}
        </dd>
      </div>
    ))}
  </dl>
);

// 調研方法：依序排成一條數字帶，每個方法的規模用大數字；沒有確切數字的方法只寫名稱
const Methods = ({ items }) => (
  <ol className={`grid gap-y-5 border-y border-gray-200 py-5 ${columns(items.length)} sm:divide-x sm:divide-gray-200`}>
    {items.map((item) => (
      <li key={item.label} className="sm:px-5 sm:first:pl-0">
        {item.value && (
          <p className="text-2xl font-semibold tabular-nums text-gray-900">
            {item.value}
            {item.unit && <span className="ml-1 text-xs font-normal text-gray-500">{item.unit}</span>}
          </p>
        )}
        <p className="mt-1 text-sm font-semibold text-gray-800">{item.label}</p>
        {item.detail && <p className="mt-1 text-xs leading-snug text-gray-500">{item.detail}</p>}
      </li>
    ))}
  </ol>
);

// 流程：每一步寫做了什麼、用了什麼
const Flow = ({ steps }) => (
  <ol className="divide-y divide-gray-200 border-y border-gray-200">
    {steps.map((step, i) => (
      <li key={step.title} className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr] sm:gap-4">
        <div className="flex items-start gap-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-600 text-xs font-semibold tabular-nums text-white">
            {i + 1}
          </span>
          <p className="pt-0.5 font-semibold leading-snug text-gray-900">{step.title}</p>
        </div>
        <div>
          <p className="text-sm leading-relaxed text-gray-700">{step.detail}</p>
          {step.tools && <Chips items={step.tools} tone="teal" />}
        </div>
      </li>
    ))}
  </ol>
);

// 控制權光譜：兩端是既有的主流模式與文獻指出的限制，下方是研究切入的缺口
const Spectrum = ({ left, right, gap }) => (
  <div>
    <div className="relative mx-1.5 h-1.5 rounded-full bg-gray-200">
      <span className="absolute -left-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-gray-500 ring-4 ring-white" />
      <span className="absolute -right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-gray-500 ring-4 ring-white" />
    </div>
    <div className="mt-4 grid gap-5 sm:grid-cols-2 sm:gap-10">
      {[left, right].map((end, i) => (
        <div key={end.title} className={i === 1 ? "sm:text-right" : ""}>
          <p className="font-semibold text-gray-900">{end.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">{end.detail}</p>
          <p className="mt-1.5 text-[11px] text-gray-400">{end.cite}</p>
        </div>
      ))}
    </div>
    <div className="mt-6 border-l-2 border-teal-500 pl-4">
      <p className="text-xs font-medium text-teal-700">{gap.label}</p>
      <p className="mt-1 font-semibold text-gray-900">{gap.title}</p>
      <p className="mt-1 text-sm leading-relaxed text-gray-600">{gap.detail}</p>
    </div>
  </div>
);

// 協調關係示意：人與 AI 之間的箭頭
const RelationArrows = ({ kind, accent }) => {
  const color = accent ? "#0d9488" : "#6b7280";
  const id = `arrow-${kind}-${accent ? "a" : "g"}`;
  return (
    <svg viewBox="0 0 80 40" className="h-10 w-20" aria-hidden>
      <defs>
        <marker id={id} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 z" fill={color} />
        </marker>
      </defs>
      {kind === "one-way" && <line x1="6" y1="20" x2="72" y2="20" stroke={color} strokeWidth="2" markerEnd={`url(#${id})`} />}
      {kind !== "one-way" && <line x1="6" y1="13" x2="72" y2="13" stroke={color} strokeWidth="2" markerEnd={`url(#${id})`} />}
      {kind === "mutual" && <line x1="74" y1="27" x2="8" y2="27" stroke={color} strokeWidth="2" markerEnd={`url(#${id})`} />}
      {kind === "confirm" && (
        <line x1="74" y1="27" x2="8" y2="27" stroke={color} strokeWidth="2" strokeDasharray="4 3" markerEnd={`url(#${id})`} />
      )}
    </svg>
  );
};

const Relations = ({ items }) => (
  <div className={`grid gap-3 ${columns(items.length)}`}>
    {items.map((item) => (
      <div key={item.title} className={`rounded-xl border p-4 ${item.accent ? "border-teal-600 bg-teal-50" : "border-gray-200"}`}>
        <div className="flex items-center justify-center gap-1 py-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">人</span>
          <RelationArrows kind={item.kind} accent={item.accent} />
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">AI</span>
        </div>
        <p className="mt-2 flex flex-wrap items-center gap-2 font-semibold text-gray-900">
          {item.title}
          {item.tag && (
            <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${item.accent ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-600"}`}>
              {item.tag}
            </span>
          )}
        </p>
        <p className="mt-1 text-sm leading-snug text-gray-600">{item.detail}</p>
      </div>
    ))}
  </div>
);

// 2×2 矩陣：上方是欄的條件，左側是列的條件
const Matrix = ({ rows, cols, cells }) => (
  <div className="grid grid-cols-[4.5rem_1fr_1fr] gap-2 sm:grid-cols-[6.5rem_1fr_1fr]">
    <span />
    {cols.map((col) => (
      <p key={col} className="pb-1 text-center text-xs font-medium text-gray-500">
        {col}
      </p>
    ))}
    {rows.map((row, r) => [
      <p key={row} className="self-center text-xs font-medium leading-snug text-gray-500">
        {row}
      </p>,
      ...cells[r].map((cell) => (
        <div key={cell.title} className="rounded-xl border border-gray-200 px-3 py-4 text-center">
          <p className="font-semibold text-gray-900">{cell.title}</p>
          <p className="mt-0.5 text-xs text-gray-500">{cell.detail}</p>
        </div>
      )),
    ])}
  </div>
);

// 比例光譜：例如墨水太稀、適中、太稠
const Scale = ({ items, caption }) => (
  <div>
    <div className="grid gap-[2px] overflow-hidden rounded-xl text-center" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
      {items.map((item) => (
        <div key={item.label} className={`px-2 py-4 ${item.accent ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-800"}`}>
          <p className="text-sm font-semibold">{item.label}</p>
          <p className={`mt-1 text-xs leading-snug ${item.accent ? "text-teal-50" : "text-gray-600"}`}>{item.rule}</p>
        </div>
      ))}
    </div>
    {caption && <p className="mt-2 text-xs leading-relaxed text-gray-500">{caption}</p>}
  </div>
);

const Table = ({ head, rows, caption }) => (
  <div className="overflow-x-auto border-y border-gray-200">
    <table className="w-full text-left text-sm">
      <thead className="border-b border-gray-200">
        <tr className="text-xs text-gray-500">
          {head.map((cell) => (
            <th key={cell} className="py-2.5 pr-4 font-medium">
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {rows.map((row) => (
          <tr key={row[0]} className="align-top">
            {row.map((cell, j) => (
              <td key={j} className={`py-3 pr-4 leading-relaxed ${j === 0 ? "font-medium text-gray-900" : "text-gray-600"}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    {caption && <p className="border-t border-gray-200 py-3 text-xs leading-relaxed text-gray-600">{caption}</p>}
  </div>
);

const Cards = ({ items }) => (
  <div className={`grid gap-5 ${items.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
    {items.map((item) => (
      <div key={item.title} className={`border-t-2 pt-3 ${item.accent ? "border-teal-600" : "border-gray-200"}`}>
        <p className="font-semibold text-gray-900">{item.title}</p>
        <p className="mt-1 text-sm leading-snug text-gray-600">{item.detail}</p>
      </div>
    ))}
  </div>
);

const Tags = ({ title, items }) => (
  <div>
    {title && <p className="mb-2 text-sm font-semibold text-gray-800">{title}</p>}
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-900">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Figure = ({ src, alt, caption }) => (
  <figure>
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
      <Image src={src} alt={alt} sizes="(min-width: 1024px) 860px, 100vw" className="h-auto w-full" />
    </div>
    {caption && <figcaption className="mt-2 text-xs leading-relaxed text-gray-500">{caption}</figcaption>}
  </figure>
);

export default function CaseVisual({ visual: v }) {
  switch (v.type) {
    case "stats":
      return <Stats items={v.items} />;
    case "bars":
      return <CaseBars title={v.title} items={v.items} max={v.max} source={v.source} />;
    case "mapping":
      return <CaseMapping leftTitle={v.leftTitle} rightTitle={v.rightTitle} left={v.left} right={v.right} />;
    case "scope":
      return <Scope items={v.items} />;
    case "methods":
      return <Methods items={v.items} />;
    case "flow":
      return <Flow steps={v.steps} />;
    case "spectrum":
      return <Spectrum left={v.left} right={v.right} gap={v.gap} />;
    case "list":
      return <List items={v.items} />;
    case "relations":
      return <Relations items={v.items} />;
    case "matrix":
      return <Matrix rows={v.rows} cols={v.cols} cells={v.cells} />;
    case "scale":
      return <Scale items={v.items} caption={v.caption} />;
    case "table":
      return <Table head={v.head} rows={v.rows} caption={v.caption} />;
    case "cards":
      return <Cards items={v.items} />;
    case "tags":
      return <Tags title={v.title} items={v.items} />;
    case "image":
      return <Figure src={v.src} alt={v.alt} caption={v.caption} />;
    default:
      return null;
  }
}
