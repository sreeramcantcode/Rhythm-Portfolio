import {gsap} from "gsap"
import { useEffect , useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import Work from "./Work"
import Footer from "./Footer"

gsap.registerPlugin(ScrollTrigger)

function End(){

  const boxref = useRef(null)

  useEffect(()=>{
    gsap.fromTo(boxref.current , {

      x:0,
      y:100,
      opacity:0
    
      
      
    },
  {
    x:0,
    y:0,
    opacity:1,
    duration:1,
    ease:"power1.inOut",

    scrollTrigger:{
      trigger:boxref.current,
      start:"top bottom",
      end:"top center",
      scrub:true


    }
  })
  })


    return(

        
        <>

        <div  className="text-[100px]  min-h-screen text-white bg-black ">
        <div ref={boxref} className="flex gap-5 u justify-center transform scale-y-110">
            <h1>Vision</h1>
            <h1>Halts .</h1>
             <h1>Creation</h1>
            <h1>Begins</h1>
        </div>
        <div className=" relative top-10 h-160 text-2xl">
          <h1>Images Gallery</h1>
        </div>
        </div>

        <Work />
      <Footer />

        
        </>
    )

  }


export default End