import {gsap} from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import Work from "./Work"
import Footer from "./Footer"
import Imagescroll from "./Imagescroll"
import Imagescroll2 from "./Imagescroll2"
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

        <div  className="lg:text-[180px] text-[43px] whitespace-nowrap text-center lg:pt-0 text-white bg-black ">
        <div className="flex gap-5 h-30 lg:h-70 items-center  relative translate-y-7 u justify-center  transform  text-center">
          
            <div ref={boxref} className="inset-0 bg-white absolute ">
              
            </div>

            <h1 className="z-20 text-black">Imagine . Create</h1>
          </div>
            <Imagescroll></Imagescroll>
            <div className="relative bottom-2">
            <Imagescroll2></Imagescroll2>
        </div>
       
        </div>

        

        <Work text="Let's Connect"></Work>
      <Footer />

        
        </>
    )

  }


export default End