import { useGSAP } from "@gsap/react"
import k9 from "./assets/k9p.jpg"
import u from "./assets/uniliver.jpg"
import sf from "./assets/SF.jpg"
import sl from "./assets/silentart.jpg"

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
      { x: -100, opacity: 0 },
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
          
          <div ref={scrollref} className="bg-white z-40">
          <div   className="h-70">
            </div>
            
            </div>
          <h1 className=" text-black px-9 relative bottom-65 word font-medium text-[200px] m-0"> <span className="line-through decoration-black  decoration-4  text-black">Words</span> . Action</h1>
          <h1  ref={textRef} className="text-white text-[200px] word relative bottom-50">Highlights</h1>
          

          <div className="flex justify-center gap-1 relative bottom-30">

          <div className=" w-165 h-100 p-1  mt-10 relative group cursor-pointer " >
            <a href="#"><h1 className="inset-0 absolute text-6xl text-white z-10 top-50 opacity-0 group-hover:opacity-100 duration-1000 u">UNILIVER</h1></a>
            <img src={u} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" />
            </div>

          <div className=" w-165 h-100  p-1 mt-10 relative group cursor-pointer " >
            <h1 className="inset-0 absolute text-6xl text-white z-10  top-50 opacity-0 group-hover:opacity-100 duration-1000 u">K9</h1>
            <img src={k9} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" />
            </div>
            </div>

            <div className="flex justify-center gap-1 relative bottom-15">

          <div className=" w-165 h-100 p-1  mt-10 relative group cursor-pointer " >
            <h1 className="inset-0 absolute text-6xl text-white z-10 top-50 opacity-0 group-hover:opacity-100 duration-1000 u">SAINT-FLAIRE</h1>
            <img src={sf} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" />
            </div>

          <div className=" w-165 h-100  p-1 mt-10 relative group cursor-pointer " >
            <h1 className="inset-0 absolute text-6xl text-white z-10  top-50 opacity-0 group-hover:opacity-100 duration-1000 u">SILENT ARTERY</h1>
            <img src={sl} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" />
            </div>
            </div>

            

        
          
          </div>
          

          <div className="h-50 bg-black"></div>

          
          
        </>
    )

   

}
export default Second