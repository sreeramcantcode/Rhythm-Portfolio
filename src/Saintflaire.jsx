import { useRef} from "react"

import saint1 from "./assets/saint.png"
import saint3 from "./assets/saint2.jpg"
import saint2 from "./assets/saint1.jpg"
import saintstreet from "./assets/Street.png"

import stpdf from "./assets/Saintflaire Catalogue.pdf"
import stpdf1 from "./assets/saintstreet.pdf"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import Work from "./Work"

import Footer from "./Footer"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function Saintflaire(){
    

    

     const maintext = useRef()
        const maintext2 = useRef()
        const logosaint = useRef()
        const mainimg = useRef()
        const saint = useRef()

    useGSAP(()=>{

         gsap.from(saint.current , {
            
            xPercent:"300",
            duration:3,
            scrollTrigger:{
                trigger:saint.current,
                start:"top 80%"
            }
            
            
        }),

        gsap.from(logosaint.current , {
            opacity:0,
            x:20,
            duration:1
        }),


      gsap.from([maintext.current , maintext2.current] , {
         
         x:50,
         opacity:0,
         duration:1,
         filter:"blur(20px)",
         
        
        
      }),

      gsap.from(mainimg.current , {
        opacity:0,
        duration:1,
        y:20,
        filter:"blur(20px)",
        
        
      })

    })


    
        
   

    return(
        <>
        <div className="min-h-screen bg-black">
       
       <div className="w-50  flex ml-3 pt-25  justify-center">

       <div className=" w-10 z-20 relative top-2  bg-black h-2"></div>
       
       </div>
      <div className=" flex gap-3  relative  ">
      <div ref={logosaint} className="border-r border-white w-35 h-23 relative">
        <img src={saint1} alt="" className="translate scale-120 w-25 translate-x-6" /> </div>
        <div className="text-white text-xl  items-center flex px-10 ">
            <ul className="space-y-4">
                <li  ref={maintext} >Role : <span className="opacity-60">Founder & Sole Graphic Designer</span></li>
                <li ref={maintext2} >Project : <span className="opacity-60">Complete Brand & Apparel Design</span></li>
            </ul>
            </div>
            
            
            </div>
            
           
        
        <div ref={mainimg} className="flex justify-end gap-3 px-4 pt-9 mr-7 pb-30 ">

            <div className="w-md relative">
                <img src={saint3} alt="" />
                
            </div>
            <div className="w-5xl relative">

                

                <div className="text-white absolute bottom-1/4 pb-2 text-left">
                <h3 className="" >Founder and creative director of Saintflaire, an independent clothing brand developed from concept to execution. Led the complete design direction, including brand identity, logo development, garment graphics, and digital visuals. All creative outputs — from packaging to social content and product imagery — were designed in-house to establish a consistent and distinctive brand language. <br />
                    <span  onClick={()=> window.open(stpdf , "_blank")} className="italic text-red-500 cursor-pointer"> Visit Catalogue</span>
                </h3>
                
            </div> 
            

           
                <img src={saint2} alt="" />

                 <div className="flex items-center text-white absolute bottom-0">
                

                
            </div>

            <div ref={saint} onClick={()=> window.open(stpdf1 , "_blank")} className=" cursor-pointer bg-linear-to-l from-black to-red-500/50 w-55 flex justify-center  items-center h-20 absolute  right-0 bottom-2  rounded-lg ">
                    <img className="pt-3 " src={saintstreet} alt="" />
                </div>


                
            </div>


            


            
        </div>
        <Work text="Let's Connect"></Work>
        <Footer></Footer>


        </div>
        </>
    )
 }

 export default Saintflaire
