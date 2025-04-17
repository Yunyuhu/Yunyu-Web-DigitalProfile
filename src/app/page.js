"use client"

import Image from "next/image";
import AvatarImg from "@/../public/Avatar.jpg";
import HeartImg from "@/../public/heart.png"
import { useState } from "react";


export default function Home() {

  const [heart, setHeart] = useState(0);

  const addHeart = function(){
    
    setHeart(heart+1);

  }

  return (
    <div className="flex w-full h-full bg-red justify-center items-center rounded-2xl">
      
      <div className="cursor-pointer flex flex-col justify-center items-center"
        onClick={addHeart}
      >
        <Image src={HeartImg} className="w-[68px]" alt="heart" />
        <div className=" text-2xl "> { heart } </div>
      </div>
      
    </div>
  );
}
