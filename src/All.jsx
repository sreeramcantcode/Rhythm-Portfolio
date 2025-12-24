import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all";
import Footer from "./Footer";
import Work from "./Work";



gsap.registerPlugin(ScrollTrigger)

function All(){

    const fade = useRef();
    useGSAP(()=>{
       
    })

    return(
        <>
         <div className="min-h-[200vh] text-white bg-black">
            
            <div ref={fade} className="pt-30 inset-0  relative top-60 flex justify-center">
            <h1 className="text-[100px] scale-y-105 lamb px-4  absolute top-9">All Works</h1>
            </div>

            <div className="min-w-[80vw] relative pt-50 top-70 min-h-screen">
                <div></div>
            </div>
          </div>
         <Work />

     
      <Footer />

        </>
    )

}
export default All