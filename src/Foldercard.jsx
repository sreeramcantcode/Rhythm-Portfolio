import { useState } from "react";
import uni from "./assets/Uni.png"
import saint from "./assets/saint.png"
import frame from "./assets/frameflash.png"
import k from "./assets/k9.png"
import mer from "./assets/mercedes.png"


import lb from "./assets/lb.png"
import sil from "./assets/Silent.png"
import bth from "./assets/bth.png"

function Foldercard(){
    
    const [isOpen, setIsOpen] = useState(false);

    const libraryItems = [
  {
    name: "Uniliver",
    img: uni
  },
  {
    name: "K9 School",
    img: k
  },
  {
    name: "SaintFlaire",
    img: saint
  },
  {
    name: "FrameFlash",
    img: frame
  },

  {
    name: "Mercedes",
    img: mer
  },

  {
    name: "Mercedes",
    img: mer
  },
  {
    name: "Silent Artery",
    img: sil
  },

  {
    name: "Liberty Walk",
    img: lb
  },

  {
    name: "Mercedes",
    img: mer
  },

  

  {
    name: "Beat the Heat",
    img: bth
  },
];


    return(
        <>
        <div className="min-h-fit pt-30 bg-black">

            <button
        onClick={() => setIsOpen(true)}
        className="px-20 py-10  bg-red-600 text-white rounded-md cursor-pointer text-3xl hover:bg-red-900 "
      >
        View more
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          <div className="bg-[#111] w-[650px] h-[450px] rounded-lg relative p-6">
            
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-xl hover:text-red-400"
            >
              ✕
            </button>

        
            <h2 className="text-white text-xl mb-6">
              Works
            </h2>

          
            <div className="grid grid-cols-5 gap-6 ">
  {libraryItems.map((item) => (
    <div
      key={item.name}
      className="flex flex-col items-center text-gray-300 cursor-pointer hover:text-white"
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-20 h-20 object-contain mb-3"
      />
      <span className="text-sm">{item.name}</span>
    </div>
  ))}
</div>


          </div>
        </div>
      )}


        </div>
        </>
    )
 }

 export default Foldercard
