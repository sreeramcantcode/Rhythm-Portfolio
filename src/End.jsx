import {gsap} from "gsap"
import { useEffect , useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import Work from "./Work"
import Footer from "./Footer"
import Imagescroll from "./Imagescroll"

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
      start:"top 80%",
      end:"top center",
      scrub:true


    }
  })
  })


    return(

        
        <>

        <div  className="text-[150px] text-center h-[130vh] text-white bg-black ">
        <div ref={boxref} className="flex py-5 gap-5 translate-y-7 u justify-center transform  text-center">
            <h1>Imagine . Create</h1>
             
        </div>
            <Imagescroll></Imagescroll>
        </div>
       

        <Work />
      <Footer />

        
        </>
    )

  }


export default End