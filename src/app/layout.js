import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Analytics from "@/components/Analytics";

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
    <html lang="zh-Hant">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* 1024px 以上側欄與內容並排；較窄時側欄在上方，頁面選單收合 */}
        <div className="w-full min-h-screen lg:h-screen lg:overflow-y-auto flex flex-col lg:flex-row gap-4 lg:gap-5 p-3 sm:p-6 lg:p-8 box-border bg-[linear-gradient(to_top,_#f2f2f2_0%,_#dee9ea_100%)]">

          <Sidebar />

          {children}

        </div>

        <Analytics />
      </body>
    </html>
  );
}
