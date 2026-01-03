import { useGSAP } from "@gsap/react"
import im from "./assets/rhythm.jpg"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import Footer from "./Footer";
import Work from "./Work";

gsap.registerPlugin(ScrollTrigger)
function About (){
   const img = useRef()
   
    const grave = useRef()
    const designer = useRef()
    const para = useRef()
   
    const textref = useRef(null)
    const Text = "Hi , I'm Rhythm Nandi"
   
   useGSAP(()=>{

      

      const obj = { count: 0 }

    gsap.to(obj, {
      count: Text.length,
      duration: 2,
      ease: "none",
      onUpdate: () => {
        textref.current.innerText =
          Text.slice(0, Math.floor(obj.count))
      }
    })
      
      
      
      gsap.from([designer.current , para.current ] , {
         
         opacity:0,
         duration:5,
         stagger:0.5,
         delay:2
      })

      gsap.from(grave.current , {
         
         
         opacity:0,
         duration:2,
         scrollTrigger:{
          trigger:grave.current,
          start: "top 40%"

         }
      })
      
    
   
   })

    return(
        <>
        <div className="min-h-[140vh] max-w-screen bg-black text-white relative pt-25 flex justify-center">
            
         <div  className="w-full max-w-7xl max-h-[105vh] bg-linear-to-b from-black to bg-zinc-900">
            <img ref={img} className="w-full ml-8 max-w-[450px] translate-y-9 object-contain absolute" src= {im} alt=""/>
            <div className="flex justify-end p-16 max-w-6xl ml-2 lamb">
            <h1 ref={textref} className="text-6xl text-left w-[500px] max-w-full mr-9 whitespace-nowrap" ></h1>
            </div>
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
            
            <h1 className="ml-10 max-w-3xl px-10 text-5xl transform translate-y-12  text-white/30 ">" The Graveyard is full of People  who thought they had time "</h1>
            
         </div>
         
         
         </div>
         
         
        </div>
        <Work />
        <Footer />

        
        </>
    )
}
export default About