import Painting1 from "@/image/interests/food.jpg"
import Painting2 from "@/image/interests/punking.jpg"
import Painting3 from "@/image/interests/spider.jpg"
import Painting4 from "@/image/interests/sunset.jpg"
import Painting5 from "@/image/interests/eye.jpg"

export default function Interests() {

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">
      
      <div className="flex flex-col w-full">
        <h1 className="max-h-full w-full max-w-5xl text-2xl font-bold">
          興趣 / Interests
        </h1>
        <h3 className="text-sm text-gray-600 mt-2">
          INFJ，熱愛踩點各種好吃地圖（偏愛鹹食和酒精），可頌拯救世界！樂於和人群相處，但更會對一些奇妙且浪漫的小事感興趣。
        </h3>
        <div className="w-full h-px bg-gray-200 mt-4" />
      </div>

      <div className="max-h-full overflow-y-auto px-6 py-8 space-y-6 text-gray-800 w-full max-w-5xl" >
        
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 h-[33vh] sm:h-[33vh]">
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
      </div>
    </div>
  );
}
