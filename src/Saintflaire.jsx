import { useRef} from "react"

import saint1 from "./assets/saint.png"
import saint3 from "./assets/saint2.webp"
import saint2 from "./assets/saint1.webp"
import saintstreet from "./assets/Street.png"

import stpdf from "./assets/Saintflaire Catalogue.pdf"
import stpdf1 from "./assets/saintstreet.pdf"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import Work from "./Work"

import Footer from "./Footer"
import { ScrollTrigger } from "gsap/all"

import { useEffect } from "react"
import { cacheImages } from "./imagecache"


gsap.registerPlugin(ScrollTrigger)

function Saintflaire(){

    useEffect(() => {
  const imgs = Array.from(document.images).map(img => img.src)
  cacheImages(imgs)
}, [])

    

    

     const maintext = useRef()
        const maintext2 = useRef()
        const logosaint = useRef()
        const mainimg = useRef()
        const saint = useRef()
         const saint1ani = useRef()
         const mainimgmob = useRef()

    useGSAP(()=>{

         gsap.from(saint.current , {
            
            xPercent:"300",
            duration:3,
            scrollTrigger:{
                trigger:saint.current,
                start:"top 105%"
            }
            
            
        }),

        gsap.fromTo(saint1ani.current , {
            
            xPercent:-200,
            duration:3,
            scrollTrigger:{
                trigger:saint1ani.current,
                start:"top 80%"
            } 
            
            
            
        },
    {
                xPercent:-15,
                duration:3
            })

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

      gsap.from(mainimgmob.current , {
        opacity:0,
        duration:1,
        y:20,
        filter:"blur(20px)",
        
        
      })

    })


    
        
   

    return(
        <>
        <div className=" bg-black">
       
       <div className="w-50  flex ml-3 pt-25  justify-center">

       <div className=" w-10 z-20 relative top-2  bg-black h-2"></div>
       
       </div>
      <div className=" flex gap-3  relative  ">
      <div ref={logosaint} className="border-r border-white lg:w-35 h-23  relative">
        <img src={saint1} alt="" className=" lg:scale-120 w-25 lg:translate-x-6" /> </div>
        <div className="text-white lg:text-xl text-[12px]    items-center flex lg:px-5 ">
            <ul className="space-y-4 ">
                <li  ref={maintext} >Role : <span className="opacity-60">Founder & Sole Graphic Designer</span></li>
                <li ref={maintext2} >Project : <span className="opacity-60">Complete Brand & Apparel Design</span></li>
            </ul>
            </div>
            
            
            </div>
            
           <div ref={mainimgmob} className="flex flex-col gap-1 lg:hidden">
          <img className="w-screen pt-7 " src={saint2} alt="" />
          <div className="lg:hidden flex ">
          <img src={saint3} className=" w-40 md:w-80 " alt="" />
           <p className="text-white w-screen text-left px-2 md:w-70 md:text-xl  text-[11px] py-2 " >Founder and creative director of Saintflaire, an independent clothing brand developed from concept to execution. Led the complete design direction, including brand identity, logo development, garment graphics, and digital visuals. All creative outputs — from packaging to social content and product imagery — were designed in-house to establish a consistent and distinctive brand language. <br />
                    <span  onClick={()=> window.open(stpdf , "_blank")} className="italic text-red-500 cursor-pointer "> <br /> Visit Catalogue</span>
                </p>
                </div>
          </div>


        <div ref={mainimg} className="flex justify-end gap-3 px-4 pt-9 mr-7 lg:pb-30 pb-10 ">

            <div className="lg:w-md relative ">

            
               
                <img src={saint3} className="hidden lg:block lg:relative" alt="" />
                
                
                
            </div>
            <div className="w-5xl relative">

                

                <div className=" hidden lg:block text-white lg:absolute bottom-1/4 pb-2 text-left">
                <h3 className="" >Founder and creative director of Saintflaire, an independent clothing brand developed from concept to execution. Led the complete design direction, including brand identity, logo development, garment graphics, and digital visuals. All creative outputs — from packaging to social content and product imagery — were designed in-house to establish a consistent and distinctive brand language. <br />
                    <span  onClick={()=> window.open(stpdf , "_blank")} className="italic text-red-500 cursor-pointer"> Visit Catalogue</span>
                </h3>
                
            </div> 
            

           
                <img
  className="hidden lg:block lg:relative"
  src={saint2}
  alt=""
/>


                 

            <div ref={saint} onClick={()=> window.open(stpdf1 , "_blank")} className=" cursor-pointer bg-linear-to-l from-black to-red-500/50 lg:w-55 w-30 hidden lg:flex justify-center  items-center lg:h-20 h-15 absolute  right-0 bottom-2  rounded-lg ">
                    <img className="pt-5" src={saintstreet} alt="" />
                </div>

             <div ref={saint1ani} onClick={()=> window.open(stpdf1 , "_blank")} className="lg:hidden cursor-pointer bg-linear-to-l from-red-500/50 to-black md:w-60 md:mb-10 lg:w-55 w-30 flex justify-center items-center lg:h-20 h-10 rounded-lg ">
                    <img className="pt-2" src={saintstreet} alt="" />
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
