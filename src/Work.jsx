import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger)


function Work(props){
    const work = useRef();
    useGSAP(()=>{
        gsap.from(work.current , {
          xPercent :"-200",
          duration:2,

          scrollTrigger:{
            trigger:work.current,
            start: "top 80%"
          }
        })
    })

   
   return(
        <>
         
        <div className="h-70 relative max-w-screen bg-black">

          <div className="absolute  inset-0  flex justify-center items-center">
            <h1 className="text-[140px] text-black z-20 word ">{props.text}</h1>
          </div>

          <div ref={work} className=" inset-0 absolute w-screen bg-white  border-red-500 border-b-4"></div>
        </div>
        </>
    )

}
export default Work