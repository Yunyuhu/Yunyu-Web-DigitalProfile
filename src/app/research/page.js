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
        探索科技與設計交會的邊界，在不同場域和切角中實踐。
        </h3>
        <div className="w-full h-px bg-gray-200 mt-4" />
      </div>
      
    </div>
  );
}
