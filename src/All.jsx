import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import { ScrollTrigger } from "gsap/all";
import Footer from "./Footer";
import Work from "./Work";
import Imagescroll from "./Imagescroll";

import u from "./assets/uniliver.jpg"
import { useRef } from "react";
import k9 from "./assets/k9p.jpg"



gsap.registerPlugin(ScrollTrigger)

function All(){

    const ref = useRef()
    const ref1 = useRef()
   
    useGSAP(()=>{
        gsap.from([ref.current , ref1.current] , {
            opacity:0,
            duration:2,
            ease:"power1.in"
        })
       
    })

    return(
        <>
         <div className="min-h-[200vh] text-white  pt-25 bg-black">
            <div className="max-w-full flex flex-col justify-center items-center ">
                
            <div ref={ref} className="w-7xl max-w-full h flex border mt-8">
                
                 <img src={u} className="w-xl p-5 " alt="" />
                 <h1 className="text-[70px] u w-2xl flex justify-center p-3">Hindustan Uniliver</h1>
            </div>

             <div ref={ref1} className="w-7xl max-w-full h flex border mt-9 translate-y-7">
                
                 <img src={k9} className="w-xl p-5 " alt="" />
                 <h1 className="text-[70px] u w-2xl flex justify-center p-3">K9 School</h1>
            </div>
            </div>
           
          </div>

          
         <Work />

     
      <Footer />

        </>
    )

}
export default All