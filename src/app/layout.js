import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import AvatarImg from "@/../public/Avatar.jpg";
import Link from "next/link";

import { Mail, Linkedin, Instagram,UserCircle, Sparkles,BookOpenCheck,LayoutDashboard} from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "🍃胡芸毓的數位履歷💚",
  description: "這裡有一顆硬硬的肝，看起來很好用☕️",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-gray-200 p-8">

          <div className=" min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-white flex 
          justify-start items-center flex-col p-[30px] pt-[80px] ">
            
            <Link href="/">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden shadow-md transition hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-105 cursor-pointer">
                <Image
                  src={AvatarImg}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <h1 className="mt-2 font-bold">胡芸毓 Yunyu Hu</h1>
            <p className="max-w-[380px] text-center text-xs text-gray-700 mt-2">
            從資管出發，進一步於數位內容碩士深耕人機互動的溝通意圖研究。熱衷科技如何回應社會的複雜議題，並致力於打造更具共感力的數位體驗。
            </p>
            {/* <p className="max-w-[380px] text-center text-xs text-gray-700 mt-2">相信每一次的設計都將始於理解，忠於感受。</p> */}
            

            
            {/* 社群連結 */}
            <div className="flex gap-4 my-5 justify-center">
              <a href="mailto:sandyfuoo68@email.com">
                <div className="bg-white shadow-md hover:shadow-[0_0_10px_rgba(100,100,100,0.3)] w-[40px] h-[40px] rounded-full flex items-center justify-center transition">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/芸毓-胡-27a576213/" target="_blank" rel="noopener noreferrer">
                <div className="bg-white shadow-md hover:shadow-[0_0_10px_rgba(0,119,181,0.3)] w-[40px] h-[40px] rounded-full flex items-center justify-center transition">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </div>
              </a>
              <a href="https://www.instagram.com/yun._.yy_" target="_blank" rel="noopener noreferrer">
                <div className="bg-white shadow-md hover:shadow-[0_0_10px_rgba(225,48,108,0.3)] w-[40px] h-[40px] rounded-full flex items-center justify-center transition">
                  <Instagram className="w-5 h-5 text-gray-600" />
                </div>
              </a>
            </div>


            {/* 頁面切換 */}
            <div className="w-full flex flex-col gap-4">
              {/* About Me */}
              <Link href="/about">
                <div className="w-full h-[60px] bg-[#f7f7f7] hover:bg-[#edf6f7] rounded-xl shadow-sm flex items-center px-4 transition">
                  <UserCircle className="w-5 h-5 text-gray-600 mr-3" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold text-sm">關於我</span>
                    <span className="text-xs text-gray-500">About Me</span>
                  </div>
                </div>
              </Link>

              {/* Interests */}
              <Link href="/interests">
                <div className="w-full h-[60px] bg-[#f7f7f7] hover:bg-[#edf6f7] rounded-xl shadow-sm flex items-center px-4 transition">
                  <Sparkles className="w-5 h-5 text-gray-600 mr-3" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold text-sm">興趣</span>
                    <span className="text-xs text-gray-500">Interests</span>
                  </div>
                </div>
              </Link>

              {/* Projects */}
              <Link href="/projects">
                <div className="w-full h-[60px] bg-[#f7f7f7] hover:bg-[#edf6f7] rounded-xl shadow-sm flex items-center px-4 transition">
                  <LayoutDashboard className="w-5 h-5 text-gray-600 mr-3" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold text-sm">專案（UX、開發）</span>
                    <span className="text-xs text-gray-500">Projects (UX & Dev)</span>
                  </div>
                </div>
              </Link>

              {/* Research */}
              <Link href="/research">
                <div className="w-full h-[60px] bg-[#f7f7f7] hover:bg-[#edf6f7] rounded-xl shadow-sm flex items-center px-4 transition">
                  <BookOpenCheck className="w-5 h-5 text-gray-600 mr-3" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold text-sm">研究與活動</span>
                    <span className="text-xs text-gray-500">Research ＆ Activities</span>
                  </div>
                </div>
              </Link>

              {/* <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類三</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類一</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類二</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類三</div> */}
            </div>

          </div>

          {children}

        </div>

      </body>
    </html>
  );
}
