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

      gsap.from(grave.current , {
         
         x:-20,
         opacity:0,
         duration:3,
         scrollTrigger:{
          trigger:grave.current,
          start: "top 40%"

         }
      })
      
    
   
   })

    return(
        <>
        <div className="min-h-[140vh] max-w-screen bg-black text-white relative pt-25 flex justify-center">
            
         <div ref={quote}  className="w-full max-w-7xl max-h-[110vh] bg-linear-to-b from-black to bg-zinc-900">
            <img ref={img} className="w-full ml-8 max-w-[400px] object-contain absolute " src= {im} alt=""/>
            <h1 className="text-6xl flex justify-end p-16 max-w-7xl mr-10 lamb">Hi , I'm Rhythm Nandi</h1>
            <div ref={designer} className="flex justify-end max-w-4xl ml-10 text-2xl ">
            <p className="">Passionate Young Graphic Designer</p>
            
         </div>
         <div className=" justify-end max-w-6xl w-full mt-5 text-xl  transform flex text-left">
            <p ref={para} className=" max-w-xl italic text-left mr-4">I’m a graphic designer who turns ideas into clear,
until they’re missing.
   visually striking designs. I focus on balance, typography, and details that 
      make 
        brands feel intentional—not accidental.
        </p>

         </div>

         <div ref={grave} className=" max-w-7xl text-center h-80 flex word justify-end items-center">
            
            <h1 className="ml-10 max-w-3xl px-10 text-5xl transform  translate-y-12  text-white/30 ">" The Graveyard is full of People  who thought they had time "</h1>
            
         </div>
         
         
         </div>
         
         
        </div>
        <Work />
        <Footer />

        
        </>
    )
}
export default About