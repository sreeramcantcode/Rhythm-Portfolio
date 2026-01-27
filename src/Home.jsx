import img from "./assets/Chipmunk.png"

import saint from "./assets/saint.png"
import frame from "./assets/frameflash.png"
import k from "./assets/k9.png"
import mer from "./assets/mercedes.png"
import uni from "./assets/Uni.png"

import lb from "./assets/lb.png"
import sil from "./assets/Silent.png"
import bth from "./assets/bth.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { useEffect } from "react"
import { cacheImages } from "./imagecache"
import { ALL_IMAGES } from "./allimages"

import { Link } from "react-router-dom"


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
        <div ref={anref} className="bg-black  ">

          <div className="w-screen pt-20 relative text-white ">
            <div className="flex justify-center relative pb-7 -top-10  ">
            <div className="lg:text-[275px] text-[135px] sm:*: absolute group justify-center cursor-pointer">
              <div className="lg:flex justify-center lg:pt-3 relative  ">
            <h3 className="hindi text-[200px] lg:text-[275px] group-hover:text-red-500 group-hover:scale-130  duration-300  lg:scale-125 z-20 text-center translate-x-2 tracking-wide flex py-0 lg:tracking-wider">
                कला
            </h3></div>
            <h3 className="text group-hover:text-red-500 group-hover:scale-102  duration-300  text-center lg relative bottom-32 lg:tracking-tight lg:bottom-44 ">
              CREATE
            </h3>
            </div>
            </div>
          
            <div className=" flex justify-center lg:pt-4">
            <img src={img} className="w-2xl lg:w-[590px] z-20" alt="" />
            </div>
        
             <div className="lg:flex hidden  justify-evenly w-screen  ">
              
              
             <Link to="/frameflash"><img src={frame} className="lg:w-20 w-40  h-20 object-contain relative lg:scale-190 z-20 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
              <Link to="/saint"><img src={saint} className="w-20 h-20 object-contain relative  z-20 lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
              <Link to="/k9">  <img src={k} className="w-20  h-20 object-contain relative  z-20 lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
              <Link to="/uniliver"><img src={uni} className="w-20 h-20 transform  object-contain relative z-20 lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                
               
   
                <div className="flex justify-evenly lg:gap-24 w-screen  lg:pl-0 lg:w-xl lg:pt-0">
                <Link to="/mercedes"> <img src={mer} className="w-20 h-20 object-contain lg:scale-215 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                <Link to="/lb"><img src={lb} className="w-20 h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                <Link to="/silent"><img src={sil} className="w-20 h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                <Link to="/bth"><img src={bth} className="w-20  h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                </div>
                </div>



                <div className="lg:hidden  justify-evenly grid  grid-cols-4 w-screen  ">
              
              
               <Link to="/uniliver"><img src={uni} className="lg:w-20 w-40  h-20 object-contain relative lg:scale-190 z-20 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                <Link to="/k9"> <img src={k} className="w-20 h-20 object-contain relative  z-20 lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                <Link to="/saint"><img src={saint} className="w-20  h-20 object-contain relative  z-20 lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                 <Link to="/silent"><img src={sil} className="w-20 h-20 transform  object-contain relative z-20 lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                
               
   
                <div className="flex justify-evenly lg:gap-24 w-screen  lg:pl-0 lg:w-xl lg:pt-0">
                 <Link to="/frameflash"><img src={frame} className="w-20 h-20 object-contain lg:scale-215 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                 <Link to="/lb"><img src={lb} className="w-20 h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                <Link to="/mercedes"><img src={mer} className="w-20 h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                <Link to="/bth"><img src={bth} className="w-20  h-20 object-contain lg:scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" /></Link>
                </div>
                </div>
             </div>
           </div>

            
            
            <div className=""></div>
           

       

       
        </>
    )

}
export default Home 