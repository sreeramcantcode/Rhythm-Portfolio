import Foldercard from "./Foldercard"
import { useRef } from "react"

import saint1 from "./assets/saint.png"
import saint3 from "./assets/saint2.jpg"
import saint2 from "./assets/saint1.jpg"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import Work from "./Work"

import Footer from "./Footer"


function Bth(){

     const maintext = useRef()
        const maintext2 = useRef()
        const logosaint = useRef()
        const mainimg = useRef()

    useGSAP(()=>{

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
                <div className=" flex gap-3  ">
                <div ref={logosaint} className="border-r border-white w-35 h-23 relative">
                  <img src={saint1} alt="" className="translate scale-120 w-25 translate-x-6" /> </div>
                  <div className="text-white text-xl  items-center flex px-10 ">
                      <ul className="space-y-4">
                          <li  ref={maintext} >Role : <span className="opacity-60">Graphic Designer (Club Member)</span></li>
                          <li ref={maintext2} >Project : <span className="opacity-60">Visual Content and Merch Designer for club events</span></li>
                      </ul>
                      </div>
                      </div>
       </div>

       </>
       
)}
export default Bth