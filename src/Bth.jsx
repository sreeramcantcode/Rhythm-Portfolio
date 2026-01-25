
import { useRef, useState } from "react"
import bth from "./assets/bth.png"

import bth2 from "./assets/bth2.webp"
import bth3 from "./assets/bth3.webp"
import bth4 from "./assets/bth4.webp"
import bth5 from "./assets/bth5.webp"
import FolderPopup from "./FolderPopup"


import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import Work from "./Work"

import Footer from "./Footer"


function Bth(){

   const [open, setOpen] = useState(false)
    
        const pageAImages = [bth3, bth2 , bth4]

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
                  <img src={bth} alt="" className="translate scale-120 w-25 lg:translate-x-6" /> </div>
                  <div className="text-white lg:text-xl text-[12px] items-center flex lg:px-10 px-3 ">
                      <ul className="space-y-4">
                          <li  ref={maintext} >Role : <span className="opacity-60">Graphic Designer (Club Member)</span></li>
                          <li ref={maintext2} >Project : <span className="opacity-60">Visual Content and Merch Designer for club events</span></li>
                      </ul>
                      </div>
                      </div>

            <div ref={mainimg} className="flex justify-center pt-10">
                <div  className=" flex justify-center w-screen  relative">
            
                  <div className="w-70 ">
                    <img src={bth5} alt="" />
                  </div>
                  <div className="max-w-3xl">
                        <img src={bth2} alt="" className="p-4" />
                        <div className="flex justify-center relative p-5 ">
                        <h3 className="text-white text-md opacity-70 text-center ">Worked as a graphic designer for BeatTheHeat, a creative club at VIT-AP, responsible for designing event posters, promotional banners, and custom club merchandise. Managed all supporting graphics for both physical events and digital outreach, ensuring consistent visual identity across platforms </h3>
                        
                    </div>
                    
                    </div>
            
                    <div className="w-70 mb-5  relative">
                    <img src={bth3} alt="" className="" />
                  </div>
                     
                    </div>
                    
                    </div>

            <div className="flex justify-center pb-60 pt-15">
       <button
  onClick={() => setOpen(true)}
 className=" rounded-lg h-20 text-4xl hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-sm text-center hover:scale-105  "
>
  View More
</button>
</div>

       
        {open && (
  <FolderPopup
    images={pageAImages}
    onClose={() => setOpen(false)}></FolderPopup>
  
)}
   
                  

            <div>
         <Work text="Let's Connect"></Work>
     <Footer></Footer>
     </div>
                   

       </div>
       

       </>
       
)}
export default Bth