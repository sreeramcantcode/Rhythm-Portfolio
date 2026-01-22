

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef} from "react"
import lb from "./assets/frameflash.png"
import comic from "./assets/comic2.webp"
import Work from "./Work"
import Footer from "./Footer"
import comicpdf from "./assets/portfolio_finalwork.pdf"

function Comic(){

       
    const comicimg = useRef()
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

      

      gsap.from(comicimg.current , {
        opacity:0,
        duration:1,
        y:20,
        filter:"blur(20px)",
        
      })
    })
   
   
   return(
    <>
    <div className="min-h-screen bg-black">
         <div className="w-50  flex ml-3 pt-25 justify-center ">
              <div className=" w-10 z-20 relative top-2 bg-black h-2">
        
                </div>
                </div>
        
                <div className=" flex gap-3  ">
                
                <div ref={img} className="border-r z-10 border-white w-30 relative">
                    <img src={lb} alt="" className="absolute inset-0 w-30" /> 
                    </div>
                    
                    <div className="text-white text-xl  items-center flex px-5 pt-5 ">
                    <ul className="space-y-4">
                        <li  ref={maintext}>Role : <span className="opacity-60">Lead Graphic Designer </span></li>
                        <li ref={maintext2} >Project : <span className="opacity-60">Complete Visual Identity & Content Design </span></li>
                    </ul>
                </div>
                </div>

                    <div className="pb-30 flex justify-center">
                    <div ref={comicimg} className="p-7 top-1/2  relative group  ">
                    <div className=" cursor-pointer" onClick={()=> window.open(comicpdf , "_blank")}>
                   
                        <img src={comic} className="w-8xl border duration-500" alt="" />
                        </div>

                        <div className="pt-4 flex justify-center text-sm ">
                            <h3 className="text-white text-center leading-relaxed w-7xl"> An original detective comic developed in a noir-cyberpunk setting. The narrative follows Victor, a detective drawn into a complex investigation centered on memory, identity, and concealed conspiracies. The project features hand-drawn artwork, structured narrative panels, and atmospheric visual direction to build a cohesive and immersive world.</h3>
                        </div>
                       
                    <div className="flex justify-center pt-10">
                         <button
   onClick={()=> window.open(comicpdf , "_blank")}
  className=" rounded-lg h-20 text-4xl hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-sm text-center hover:scale-105  "
>
   View Comic
</button>
                    </div>
                        
                    </div>
                    </div>

                     <Work text="Let's Connect"></Work>
        <Footer></Footer>

                    
                
    </div>
    </>
   ) 

}
export default Comic