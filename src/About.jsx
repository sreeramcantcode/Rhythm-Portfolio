import { useGSAP } from "@gsap/react"
import im from "./assets/Chipmunk.png"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import Footer from "./Footer";
import Work from "./Work";

gsap.registerPlugin(ScrollTrigger)
function About (){
   const img = useRef()
    const quote = useRef()
    const grave = useRef()
    const designer = useRef()
    const para = useRef()
   
   useGSAP(()=>{

      gsap.from([quote.current , designer.current , para.current ] , {
         x:-20,
         opacity:0,
         duration:2,
         stagger:0.5
      })

      gsap.to(grave.current , {
         
         x:20,
         opacity:1,
         duration:3,
         scrollTrigger:{
          trigger:grave.current,
          start: "top 60%"

         }
      })
      
    
   
   })

    return(
        <>
        <div className="min-h-[140vh] bg-black text-white relative pt-20 flex justify-center ">
            
         <div ref={quote}  className="min-w-[140vh] pt-10 mt-10 relative top-10 flex h-fit px-20  bg-linear-to-b from-black to bg-zinc-900">
            <img ref={img} className="w-[400px] object-contain relative bottom-15 " src= {im} alt=""/>
            <h1 className="text-6xl ml-15 relative lamb">Hi , I'm Rhythm Nandi</h1>

         </div>
         
         
         <div ref={designer} className="absolute top-60 ml-20 ">
            <p className="px-20 relative py-5 text-xl left-10 top-10">Passionate Young Graphic Designer</p>
            
         </div>
         <div className="absolute w-90 text-left">
            <p ref={para} className="relative text-xl top-60 left-25 py-12 italic whitespace-nowrap">I’m a graphic designer who turns ideas into clear,
until they’re missing.
   <p>visually striking designs. I focus on balance, typography, and details that 
      <p>make 
        brands feel intentional—not accidental.</p></p>
</p>
         
   

        <div ref={grave} className="relative w-90 scale-160 top-90 left-60 text-center -translate-y-1/2 text-3xl word font-bold opacity-0 text-white/30 select-none">
  " The Graveyard is full of People  who thought they  <span className="whitespace-nowrap"> had time</span>  "
</div>


         </div>
         
        
        </div>
        <Work />
        <Footer />

        
        </>
    )
}
export default About