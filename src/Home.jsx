import img from "./assets/Chipmunk.png"

import saint from "./assets/saint.png"
import frame from "./assets/frameflash.png"
import k from "./assets/k9.png"
import mer from "./assets/mercedes.png"
import uni from "./assets/Uni.png"
import street from "./assets/Street.png"
import lb from "./assets/lb.png"
import sil from "./assets/Silent.png"
import bth from "./assets/bth.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { useEffect } from "react"
import { cacheImages } from "./imagecache"
import { ALL_IMAGES } from "./allimages"


function Home(){

   useEffect(() => {
  if (window.innerWidth > 768) {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        cacheImages(ALL_IMAGES)
      })
    } else {
      // fallback for unsupported browsers
      setTimeout(() => {
        cacheImages(ALL_IMAGES)
      }, 200)
    }
  }
}, [])
const anref = useRef()
    useGSAP(()=>{
        gsap.from(anref.current , {
            y:30,
            duration:2
        })
    })

    return(
        <>
        <div ref={anref} className=" lg:min-h-[130vh] min-h-screen  bg-black">
            <div className="flex justify-center relative pt-15 md:pt-20 ">
               <img className="object-cover w-2xl absolute transform opacity-95 lg:opacity-100  translate-y-5 lg:top-6 z-10 im" src={img} alt="" />
               
            </div>
             
             <div className="w-full h-fit">
             <h1 className="text-white hidden mt-4 text-[200px] lose lg:flex justify-center items-center text translate-x-10  hover:text-red-500 hover:text-[210px] cursor-pointer duration-300 transform translate-y-6"><span className="pr-42 scale-110 hindi tracking-wider">कला</span> <span className="relative left-10 leading-relaxed scale-105">CREATE</span></h1>
          </div>

           {/*Mobile text*/}
         <h1 className="
  lg:hidden
  text-white
  text-center
  
  text-[100px] absolute top-1/6 left-1/7
  
  leading-tight
">
  <span className="block hindi tracking-wider">कला</span>
  <span className="block hindi">CREATE</span>
</h1>

             <div className=" lg:h-80 lg:items-end grid grid-cols-5 lg:relative absolute bottom-1/12  lg:justify-evenly lg:flex lg:gap-5">
                
                <img src={frame} className="lg:w-20 w-10 h-20 object-contain relative lg:scale-190 z-20 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={saint} className="lg:w-20 w-10 h-20 object-contain relative  z-20 lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={k} className="lg:w-20 w-10 h-20 object-contain relative  z-20 lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={mer} className="lg:w-20 w-10 h-20 transform  object-contain relative z-20 lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                
                <img src={uni} className="lg:w-20 w-10 h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />

                <div className="flex lg:gap-25  justify-evenly w-screen lg:w-fit">
                <img src={street} className="lg:w-20 w-10 h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer " alt="frame" />
                <img src={lb} className="lg:w-20 w-10 h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={sil} className="lg:w-20 w-10 h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={bth} className="lg:w-20 w-10 h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                </div>
                </div>
              
               </div>
            
            <div className=""></div>
           

             
        
       

       
        </>
    )

}
export default Home 