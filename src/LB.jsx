
import Lb1 from "./assets/Lb1.jpg"
import Lb2 from "./assets/LB2.jpg"
import Lb3 from "./assets/LB3.jpg"
import Lb4 from "./assets/Lb4.jpg"
import Lb5 from "./assets/LB5.jpg"
import Lb6 from "./assets/Lb6.jpg"
import lb from "./assets/lb.png"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"
import Work from "./Work"
import Footer from "./Footer"
import FolderPopup from "./FolderPopup"

import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function LB (){

  const [open, setOpen] = useState(false)
        
            const pageAImages = [ Lb3, Lb4 , Lb5 , Lb6 , Lb1 , Lb2]
    
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
                <li  ref={maintext}>Role : <span className="opacity-60">Automotive  Digital Artist </span></li>
                <li ref={maintext2} >Project : <span className="opacity-60">LBWK R35 GTR Graphic Artwork </span></li>
            </ul>
        </div>
        </div>

    

      

    <div className="flex justify-center pt-7">
    <div ref={car} className=" flex justify-center w-screen  relative">

      <div className="w-60 ">
        <img src={Lb1} alt="" />
      </div>
      <div className="max-w-3xl">
            <img src={Lb3} alt="" className="p-4" />
            <div className="flex justify-center relative bottom-3 ">
            <h3 className="text-white text-sm opacity-70 text-center">Officially recognised by Liberty Walk An independent automotive graphic design developed as a personal project <span><br /> focused </span>on visual identity and form.</h3>
            
        </div>
        
        </div>

        <div className="w-60 mb-5 bottom-2 relative">
        <img src={Lb2} alt="" className="" />
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


    
       
        
        </div>
        <div>
         <Work text="Let's Connect"></Work>
     <Footer></Footer>
     </div>
     
    
        
        

        

    
    </>

)
   
    
    
}


export default LB