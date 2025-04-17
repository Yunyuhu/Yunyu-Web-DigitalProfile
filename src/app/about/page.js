import React from "react";

export default function About() {
  const skills = [
    "Figma", "Adobe XD", "Unity", "React", "React Native",
    "Python", "JavaScript", "PHP", "C", "Java",
    "MySQL", "Firebase", "AWS"
  ];

  const interests = [
    "Human-AI Communication", "HCI", "Empathetic Interaction Design",
    "AI for Social Good", "Digital Mental Health", "UX Research", "Interactive Narrative"
  ];

  return (
    <div className="w-full h-full bg-white flex justify-center items-center rounded-2xl overflow-hidden">
      <div className="max-h-full overflow-y-auto px-6 py-8 space-y-6 text-gray-800 w-full max-w-5xl">

        {/* Bio & Education */}
        <div className="space-y-4">
          <div className="bg-[#fcfcfc] rounded-xl p-4 shadow-sm">
            <h2 className="font-semibold mb-2">簡介 / Bio</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Yunyu is a master's student in Digital Content and Technologies at National Chengchi University. With a background in Information Management and a strong interest in empathetic AI design, she has participated in various cross-disciplinary projects ranging from gender-based issue summarization bots to immersive VR interfaces for social sensing. Through hands-on collaboration with research labs and design communities, Yunyu aspires to create digital services that not only solve problems but also understand people.
            </p>
          </div>

          <div className="bg-[#fcfcfc] rounded-xl p-4 shadow-sm">
            <h2 className="font-semibold mb-2">學歷 / Education</h2>
            <div className="mb-4 p-3 rounded-lg border border-gray-200 bg-white">
              <p className="text-sm text-gray-800 font-medium">國立政治大學 數位內容學分學程碩士（2023–Now）</p>
              <p className="text-sm text-gray-500">M.S. Student, Graduate Program in Digital Content and Technologies, NCCU</p>
            </div>
            <div className="p-3 rounded-lg border border-gray-200 bg-white">
              <p className="text-sm text-gray-800 font-medium">輔仁大學 資訊管理學系學士（2019–2023），GPA 3.8</p>
              <p className="text-sm text-gray-800 font-medium">輔仁大學 電子商務學分學程</p>
              <p className="text-sm text-gray-500">B.S. in Information Management & E-Commerce Program, Fu Jen Catholic University</p>
            </div>
          </div>
          
        </div>

        {/* Skills & Interests Tabs */}
        <div className="flex flex-wrap gap-4">
          <div className="bg-[#fcfcfc] rounded-xl p-4 shadow-sm flex-1 min-w-[240px]">
            <h2 className="font-semibold mb-2">技能專長 / Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-[#e1eafe] text-gray-700 px-3 py-1 text-xs rounded-full border border-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#fcfcfc] rounded-xl p-4 shadow-sm flex-1 min-w-[240px]">
            <h2 className="font-semibold mb-2">興趣與研究主題 / Interests</h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-[#e3f1f2] text-gray-700 px-3 py-1 text-xs rounded-full border border-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Work, Community, Awards in one row */}
        <div className="flex flex-wrap gap-4">
          <div className="bg-[#fcfcfc] rounded-xl p-4 shadow-sm flex-1 min-w-[300px]">
            <h2 className="font-semibold mb-2">工作與研究經歷 / Work & Research Experience</h2>
            <ul className="text-sm space-y-2 text-gray-600">
              <li>2024 – 校園性別事件彙整 AI Bot（企劃與開發）</li>
              <li>2023 – 政大 MR 實驗室研究助理</li>
              <li>2022–2023 – 醫療敏捷服務設計專題（市場調研與使用者研究）</li>
              <li>2021–2023 – DeepLink 專題（產學合作、競賽獲獎）</li>
            </ul>
          </div>

          <div className="bg-[#fcfcfc] rounded-xl p-4 shadow-sm flex-1 min-w-[300px]">
            <h2 className="font-semibold mb-2">社群與活動參與 / Community & Events</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>FreeSEED R2_UX 設計思考與人工智慧 TA</li>
              <li>OpenHCI 24th 技術助教</li>
              <li>協辦 25 場線上分享會，主辦 5 場活動</li>
            </ul>
          </div>

          <div className="bg-[#fcfcfc] rounded-xl p-4 shadow-sm flex-1 min-w-[300px]">
            <h2 className="font-semibold mb-2">獲獎與展出 / Awards & Exhibitions</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>2024 TAICHI 最佳 Demo 展出 – FlexiTouch</li>
              <li>2024 AI Junior Award 入選</li>
              <li>2023 台灣大專院校創意設計競賽 – Tears of Ancestors 展出</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
