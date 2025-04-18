import Painting1 from "@/image/interests/food.jpg"
import Painting2 from "@/image/interests/punking.jpg"
import Painting3 from "@/image/interests/spider.jpg"
import Painting4 from "@/image/interests/sunset.jpg"
import Painting5 from "@/image/interests/eye.jpg"

export default function Interests() {

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">
      
      {/* <img src={Painting1.src} className="w-full h-full object-cover rounded-2xl" /> */}
      
      {/* <Image src={Painting1} /> */}

      

      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">
          興趣 / Interests
        </h1>
        <h3 className="text-sm text-gray-600 mt-2">
          INFJ，熱愛踩點各種好吃地圖（偏愛鹹食和酒精），可頌拯救世界！樂於和人群相處，但更會對一些奇妙且浪漫的小事感興趣。
        </h3>
        <div className="w-full h-px bg-gray-200 mt-4" />
      </div>

      <div className="flex flex-col w-full gap-4 mt-3" >
        
        <div className="grid grid-cols-1 sm:grid-cols-2 ${dog} w-full gap-4 h-[33vh]">

          <div className={`bg-gray-200 sm:col-span-1 rounded-2xl relative overflow-hidden`} 

              style={
                { backgroundImage: `url(${Painting2.src})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center' }
              }
          >
          </div>


          <div className="bg-gray-200 rounded-2xl"
          
            style={
              { backgroundImage: `url(${Painting4.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center' }
            }

          >
          </div>
          
        </div>

        <div className="grid grid-cols-3 w-full gap-4 h-[33vh]">
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
      </div>
    </div>
  );
}
