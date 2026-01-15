
import Lb1 from "./assets/ff1.png"
import Lb2 from "./assets/ff6.jpg"
import Lb3 from "./assets/ff3.jpg"
import lb from "./assets/frameflash.png"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Work from "./Work"
import Footer from "./Footer"
import Foldercard from "./Foldercard"

import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function Frameflash (){
    
    const car = useRef()
    const maintext = useRef()
    const maintext2 = useRef()
    const img = useRef()
   

    useGSAP(()=>{

        gsap.from(img.current , {
            opacity:0,
            duration:1
        }),


        gsap.from([maintext.current , maintext2.current] , {
         
         xPercent:"-20",
         opacity:0,
         filter:"blur(20px)",
         duration:1,
         
        
        
      }),

      

      gsap.from(car.current , {
        opacity:0,
        duration:1,
        y:20,
        filter:"blur(20px)",
        
      })
    })

    return(
    
    <>
    <div className="min-h-screen bg-black pt-25 ">
      
      <div className="w-50  flex ml-3  justify-center">
      <div className=" w-10 z-20 relative top-2 bg-black h-2">

        </div>
        </div>

        <div className=" flex gap-3  ">
        
        <div ref={img} className="border-r z-10 border-white w-30 relative    ">
            <img src={lb} alt="" className="absolute inset-0 w-30" /> </div>
            
            <div className="text-white text-xl  items-center flex px-5 pt-5 ">
            <ul className="space-y-4">
                <li  ref={maintext}>Role : <span className="opacity-60">Lead Graphic Designer </span></li>
                <li ref={maintext2} >Project : <span className="opacity-60">Complete Visual Identity & Content Design </span></li>
            </ul>
        </div>
        </div>

    

      

    <div className="flex justify-center pt-7">
    <div ref={car} className=" flex justify-center w-screen  relative">

      <div className="w-82 mt-10">
        <img src={Lb2} alt="" />
      </div>
      <div className="max-w-3xl">
            <img src={Lb1} alt="" className="p-4" />
            <div className="flex justify-center relative bottom-3 ">
            <h3 className="text-white text-sm opacity-70 mt-4 text-center w-xl">
I have been the sole graphic designer at Frameflash Productions, responsible for building and maintaining the studio's entire visual presence. From designing the brand's official logo</h3>
            
        </div>
        
        </div>

        <div className="w-82 mb-5 mt-10 bottom-2 relative">
        <img src={Lb3} alt="" className="" />
      </div>
         
        </div>
        
        </div>
       


        <div className="flex justify-center h-92 pb-20">
        <Foldercard></Foldercard>
        
        </div>
        <div>
         <Work text="Let's Connect"></Work>
     <Footer></Footer>
     </div>
     
    
        
        

        

    </div>
    </>

)
   
    
    
}


export default Frameflash