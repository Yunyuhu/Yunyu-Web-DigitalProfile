import Painting1 from "@/image/1.png"
import Painting2 from "@/image/2.png"
import Painting3 from "@/image/3.png"
import Painting4 from "@/image/4.png"

export default function CatePainting() {

  let dog = "bg-red-200";

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">
      
      {/* <img src={Painting1.src} className="w-full h-full object-cover rounded-2xl" /> */}
      
      {/* <Image src={Painting1} /> */}

      

      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">
          繪畫作品
        </h1>
        <h3 >
          我精彩的繪圖作品，我擅長用水彩勾勒出細膩的線條，並且用色調和來表現出不同的情感。
        </h3>
      </div>

      <div className="flex flex-col w-full gap-4 mt-3" >
        
        <div className="grid grid-cols-1 sm:grid-cols-3 ${dog} w-full gap-4 h-[33vh]">

          <div className={`bg-gray-200 sm:col-span-2 rounded-2xl relative overflow-hidden`} 

              style={
                { backgroundImage: `url(${Painting1.src})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center' }
              }
          >
            
            <div className="w-[40px] h-[40px] rounded-full bg-red-500 absolute 
              left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              狗狗
            </div>

            <div className="w-full h-[100px] backdrop-blur-lg 
              absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
              狗狗ＸＸ
            </div>

          </div>


          <div className="bg-gray-200 rounded-2xl"
          
            style={
              { backgroundImage: `url(${Painting2.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center' }
            }

          >
            內容二
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
            內容四
          </div>
          <div className="bg-gray-200 rounded-2xl"
          
            style={
              { backgroundImage: `url(${Painting4.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center' }
            }
          
          >
            內容五
          </div>
          <div className="bg-gray-200 rounded-2xl"
          
            style={
              { backgroundImage: `url(${Painting3.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center' }
            }
          
          >
            內容六
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 ${dog} w-full gap-4 h-[33vh]">
          <div className="bg-gray-200 rounded-2xl"
            
            style={
              { backgroundImage: `url(${Painting2.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center' }
            }

          >
            內容二
          </div>
          <div className={`bg-gray-200 sm:col-span-2 rounded-2xl relative overflow-hidden`} 

              style={
                { backgroundImage: `url(${Painting1.src})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center' }
              }
          >
            
            <div className="w-[40px] h-[40px] rounded-full bg-red-500 absolute 
              left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              狗狗
            </div>

            <div className="w-full h-[100px] backdrop-blur-lg 
              absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
              狗狗ＸＸ
            </div>

          </div>
          
        </div>

      </div>

      
    </div>
  );
}
