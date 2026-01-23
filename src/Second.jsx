import { useGSAP } from "@gsap/react"
import k9 from "./assets/k9p.jpg"
import u from "./assets/uniliver.jpg"
import sf from "./assets/SF.jpg"
import sl from "./assets/silentart.jpg"

import { Link } from "react-router-dom"

import Uniliver from "./Uniliver"

import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect , useRef } from "react"


gsap.registerPlugin(ScrollTrigger)

function Second (){
    
  const textRef = useRef(null);
  const scrollref = useRef();
 
  

  useGSAP(()=>{

    gsap.from(scrollref.current , {
      x:"-200%",
      
      duration:2,

      scrollTrigger:{
        trigger:scrollref.current,
        start:"top 100%",
        end :"top 40%",
        scrub:true
      }
      
    }, 
    
  
      )
  })

  useEffect(()=>{
    gsap.fromTo(
      textRef.current,
      { x: -200, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        duration:1.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 100%",
          end: "top 40%",
          scrub: true,
          
        },
      }
    );

    

    

    
  }, []);


    return(
        <>
          <div className="min-h-screen bg-black text-center z-20">
          
          <div className="relative h-30 lg:h-70 overflow-hidden">

  
  <div className="absolute inset-0 flex justify-center items-center z-20">
    <h1 className="text-black word font-medium lg:text-[200px] text-[50px]">
      <span className="line-through decoration-black decoration-4">
        Words
      </span>
       <span> . </span>Action
    </h1>
  </div>

  
  <div
    ref={scrollref}
    className="absolute inset-0 bg-white z-10"
  />

</div>

          
          <h1  ref={textRef} className="text-white lg:text-[200px] text-[50px] pt-4 lg:pt-0 word">Highlights</h1>
          

          <div className="flex justify-center gap-1 mt-3">

          <div className=" w-165 lg:h-100 h-28 p-1  relative group cursor-pointer " >
            <Link to="/uniliver"> <h1 className="inset-0 absolute text-6xl text-white z-10 top-1/2 opacity-0 group-hover:opacity-100 duration-1000 u">UNILEVER</h1>
            <img src={u} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" /> </Link>
            </div>

          <div className=" w-165 lg:h-100 h-28  p-1 relative group cursor-pointer " >
           <Link to="/k9"> <h1 className="inset-0 absolute text-6xl text-white z-10 top-1/2 opacity-0 group-hover:opacity-100 duration-1000 u pointer-events-none">K9 SCHOOL</h1>
            <img src={k9} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" /></Link>
            </div>
            </div>

            <div className="flex justify-center gap-1 transform lg:translate-y-12 lg:mt-5 ">

          <div className=" w-165 lg:h-100 h-28 p-1 border    mt-10 relative group cursor-pointer " >
           <Link to="/saint"> <h1 className="inset-0 absolute text-6xl text-white z-10 top-1/2  opacity-0 group-hover:opacity-100 duration-1000 u">SAINTFLAIRE</h1>
            <img src={sf} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" /></Link>
            </div>

          <div className=" w-165 lg:h-100 h-28 p-1 mt-10 relative group cursor-pointer " >
           <Link to="/silent"> <h1 className="inset-0 absolute top-1/2 text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-1000 u">SILENT ARTERY</h1>
            <img src={sl} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" /></Link>
            </div>
            </div>

            

        
          
          </div>
          

          <div className="lg:h-50 bg-black"></div>

          
          
        </>
    )

   

}
export default Second