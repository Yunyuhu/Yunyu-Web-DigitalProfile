"use client";

import CircularGallery from "@/components/TextAnimations/CircularGallery";
import DecodeText from "@/components/DecodeText";
import { Fragment } from "@/components/Fragments";
import KeywordPop from "@/components/KeywordPop";
import { Croissant, Drumstick, MapPinned, Sparkles, Users, Wine } from "lucide-react";

export default function Interests() {

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-8 sm:py-12 px-4 sm:px-6 overflow-y-auto">
      
      <div className="flex flex-col w-full">
        <h1 className="max-h-full w-full max-w-5xl text-2xl font-bold">
          興趣 / <DecodeText text="Interests" /><Fragment id="interests" />
        </h1>
        {/* 帶虛線的關鍵字，滑過或點一下會冒出小圖示 */}
        <h3 className="text-sm text-gray-600 mt-2 leading-relaxed">
          INFJ，熱愛踩點各種<KeywordPop icon={MapPinned}>好吃地圖</KeywordPop>（偏愛<KeywordPop icon={Drumstick}>鹹食</KeywordPop>和<KeywordPop icon={Wine}>酒精</KeywordPop>），<KeywordPop icon={Croissant}>可頌</KeywordPop>拯救世界！樂於和<KeywordPop icon={Users}>人群</KeywordPop>相處，但更會對一些奇妙且<KeywordPop icon={Sparkles}>浪漫的小事</KeywordPop>感興趣。
        </h3>
        <div className="w-full h-px bg-gray-200 mt-4" />
      </div>
      <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[700px] mt-6">
        <CircularGallery />
      </div>

    
      {/* <div className="max-h-full px-6 py-8 space-y-6 text-gray-800 w-full max-w-5xl" >
        
      <div className="grid grid-cols-1 sm:grid-cols-5 w-full gap-4 h-[33vh] sm:h-[33vh]">
          <div className={`bg-gray-200 sm:col-span-2 rounded-2xl relative overflow-hidden`} 

              style={
                { backgroundImage: `url(${Painting2.src})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center' }
              }
          >
          </div>


          <div className="bg-gray-200 sm:col-span-3 rounded-2xl"
          
            style={
              { backgroundImage: `url(${Painting4.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center' }
            }

          >
          </div>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 h-[55vh] sm:h-[33vh]">
          <div className="bg-gray-200 rounded-2xl"
          
            style={
              { backgroundImage: `url(${Painting3.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center' }
            }
          
          >
          </div>
          <div className="bg-gray-200 rounded-2xl"
          
            style={
              { backgroundImage: `url(${Painting1.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center' }
            }
          
          >
          </div>
          <div className="bg-gray-200 rounded-2xl"
          
            style={
              { backgroundImage: `url(${Painting5.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center' }
            }
          
          >
          </div>
        </div>
      </div> */}
    </div>
  );
}
