import {gsap} from "gsap"
import { useEffect , useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import Work from "./Work"
import Footer from "./Footer"
import Imagescroll from "./Imagescroll"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)

function End(){

  const boxref = useRef(null)

  useGSAP(()=>{
    gsap.from(boxref.current , {

      xPercent:-200,
      duration:2,
      scrollTrigger:{
        trigger: boxref.current,
        
        start:"top 100%",
        end :"top 40%",
        scrub:true
        
      }

    })

  })


    return(

        
        <>

        <div  className="text-[150px] text-center h-[160vh] text-white bg-black ">
        <div className="flex gap-5 h-60 py-2 relative translate-y-7 u justify-center transform  text-center">
          
            <div ref={boxref} className="inset-0 bg-white absolute ">
              
            </div>

            <h1 className="z-20 text-black">Imagine . Create</h1>
          </div>
            <Imagescroll></Imagescroll>
        </div>
       

        <Work />
      <Footer />

        
        </>
    )

  }


export default End