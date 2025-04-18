import Image from "next/image";
import AvatarImg from "@/../public/Avatar.jpg";

export default function Research() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">

      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">
            研究與活動 / Research ＆ Activities
        </h1>
        <h3 className="text-sm text-gray-600 mt-2">
          我精彩的繪圖作品，我擅長用水彩勾勒出細膩的線條，並且用色調和來表現出不同的情感。
          <div className="w-full h-px bg-gray-200 mt-4" />
        </h3>
      </div>
      
    </div>
  );
}
