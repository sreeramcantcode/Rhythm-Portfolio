import Foldercard from "./Foldercard"
import k9 from "./assets/k9.png"
import Work from "./Work"
import Footer from "./Footer"

import k1 from "./assets/K9img1.jpg"
import k2 from "./assets/K9img2.jpg"
import k3 from "./assets/K9img3.jpg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"


function Knine(){

    const maintext = useRef()
    const maintext2 = useRef()
    const logo = useRef()
    const mainimg = useRef()
    

    useGSAP(()=>{

        gsap.from(logo.current , {
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
        <div className="min-h-screen bg-black pt-25">

         <div className="w-50  flex ml-3  justify-center">
              <div className=" w-10 z-20 relative top-2 bg-black h-2">
        
                </div>
                </div>
        
                <div className=" flex gap-3  ">
                
                <div ref={logo} className="border-r z-10 border-white w-30 relative    ">
                    <img src={k9} alt="" className="absolute inset-0 w-30" /> </div>
                    
                    <div className="text-white text-xl  items-center flex px-5 pt-5 ">
                    <ul className="space-y-4">
                        <li  ref={maintext}>Role : <span className="opacity-60">Graphic Designer (Internship)</span></li>
                        <li ref={maintext2} >Project : <span className="opacity-60">Visual Design for Dog Training & Security Programs </span></li>
                    </ul>
                </div>
                </div>

            <div ref={mainimg} className=" pt-12  max-w-screen  flex justify-center border-white">
                <div className="justify-evenly gap-5  flex max-w-7xl">
                <div className="w-xl">
                    <img src={k2} alt="" />
                </div>

                <div className="w-4xl">
                    <img src={k1} alt="" />
                    <div className="text-white text-center text-sm opacity-70 pt-4">

                        <h3>Currently working as a graphic designer with K9 School.
Contributing to brand visuals, campaigns, and digital design for over six months.</h3>

                </div>
                </div>

                

                <div className="w-xl">
                    <img src={k3} alt="" />
                </div>
            </div>
            </div>

                   

              <div className="flex justify-center pb-30">
             <Foldercard></Foldercard>
             </div>
               <Work text="Let's Connect"></Work>   
               <Footer></Footer>

            </div>
        
        </>
    )
 }

 export default Knine
