"use client"

import Image from "next/image";
import AvatarImg from "@/../public/Avatar.jpg";
import HeartImg from "@/../public/heart.png";
import { useState } from "react";
import TrueFocus from '../components/TextAnimations/TrueFocus';
import Squares from '../components/TextAnimations/Squares';
  
export default function Home() {
  const [heart, setHeart] = useState(0);

  const addHeart = function(){
    
    setHeart(heart+1);

  }

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-6 p-6 rounded-2xl">

      {/* TrueFocus 動畫字句 */}
      <div className="text-center">
        <TrueFocus
          sentence="Designs with Intent"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        <p className="text-gray-600 text-sm mt-2 tracking-wide">
          相信每一次的設計都將始於理解，忠於感受。
        </p>
      </div>
      {/* 愛心區塊 */}
      <div
          className="cursor-pointer flex flex-col justify-center items-center"
          onClick={addHeart}
        >
          <Image src={HeartImg} className="w-[68px]" alt="heart" />
          <div className="text-l mt-2 font-semibold">{heart}</div>
        </div>
      </div>
  );
  
}
