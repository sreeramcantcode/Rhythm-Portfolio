import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger)


function Work(){
    const work = useRef();
    useGSAP(()=>{
        gsap.from(work.current , {
          x :"-200%",
          duration:2,

          scrollTrigger:{
            trigger:work.current,
            start: "top 80%"
          }
        })
    })

   
   return(
        <>
         <div className="h-60 bg-black">
        <div  ref={work} className="bg-white z-40">
          <div   className="h-60 border-4 border-b-red-400 ">
            </div>
            
            </div>
        <h1 className=" text-black px-3 relative bottom-45 flex justify-center text font-medium text-[100px] m-0  ">Let's Connect</h1>
         
           
            </div>
            
         
        </>
    )

}
export default Work