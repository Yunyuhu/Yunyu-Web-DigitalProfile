import Painting1 from "@/image/research/TAICHIdemo.jpg"
import Painting2 from "@/image/research/LeagueOfVRfinal.jpg"
import Painting3 from "@/image/research/AIpower.jpg"
import Painting4 from "@/image/research/TANET.jpg"
import Painting5 from "@/image/research/OpenHCI.jpg"
export default function Research() {

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">
      
      {/* <img src={Painting1.src} className="w-full h-full object-cover rounded-2xl" /> */}
      
      {/* <Image src={Painting1} /> */}

      

      <div className="flex flex-col w-full">
        <h1 className="max-h-full w-full max-w-5xl text-2xl font-bold">
          研究與活動 / Research and Activities
        </h1>
        <h3 className="text-sm text-gray-600 mt-2">
          探索科技與設計交會的邊界，在不同場域和切角中實踐。
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
              { backgroundImage: `url(${Painting1.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center' }
            }
          
          >
          </div>
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