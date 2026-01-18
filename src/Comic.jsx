

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef} from "react"
import lb from "./assets/frameflash.png"
import comic from "./assets/comic.jpg"
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

                    <div className="pb-30">
                    <div ref={comicimg} className="p-7 top-1/2 flex justify-start relative group w-fit  ">
                    <div className=" cursor-pointer" onClick={()=> window.open(comicpdf , "_blank")}>
                    <div  className="absolute items-center w-xl inset-0 flex justify-center  u ">
                        <h3 className="text-white text-6xl opacity-0 group-hover:opacity-100 duration-700">Read Comic</h3>
                        </div>
                        <img src={comic} className="w-xl border group-hover:opacity-20 duration-500" alt="" />
                        </div>
                        <div className="text-white text-xl p-4 w-70">
                          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero dolorum maxime tempore deleniti molestias nulla fuga nam suscipit voluptatum. Libero enim nihil tempore maiores obcaecati minus accusantium rem quam.</h3>
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