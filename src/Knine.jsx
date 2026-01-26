import FolderPopup from "./FolderPopup"
import k9 from "./assets/k9.png"
import Work from "./Work"
import Footer from "./Footer"

import k1 from "./assets/K9img1.webp"
import k2 from "./assets/K9img2.webp"
import k3 from "./assets/K9img3.webp"
import k4 from "./assets/K9img4.webp"
import k5 from "./assets/K9img5.webp"
import k6 from "./assets/K9img6.jpg"
import k7 from "./assets/k9img7.jpg"
import k8 from "./assets/k9img8.jpg"
import kimg9 from "./assets/k9img9.jpg"


import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"


function Knine(){

     const [open, setOpen] = useState(false)
      
          const pageAImages = [k1, k2 , k3 , k4, k5 , k6 , k7 , k8 , kimg9]

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
                
                <div ref={logo} className="border-r border-white w-30 relative    ">
                    <img src={k9} alt="" className="w-30" /> </div>
                    
                    <div className="text-white lg:text-xl text-[12px] items-center flex px-5 pt-5 ">
                    <ul className="space-y-4">
                        <li  ref={maintext}>Role : <span className="opacity-60">Graphic Designer (Internship)</span></li>
                        <li ref={maintext2} >Project : <span className="opacity-60">Visual Design for Dog Training & Security Programs </span></li>
                    </ul>
                </div>
                </div>

            <div ref={mainimg} className=" pt-12  max-w-screen  flex justify-center border-white">
                <div className="justify-evenly gap-5  flex max-w-7xl">
                    
                    <div className="w-xl lg:block hidden">
                    <img src={k2} alt="" />
                </div>

                <div className="w-4xl lg:block hidden">
                    <img src={k1} alt="" />
                    <div className="text-white text-center text-md opacity-70 pt-4">

                        <h3>Currently working as a graphic designer with K9 School.
Contributing to brand visuals, campaigns, and digital design for over six months.</h3>

                </div>
                
                </div>

                 {/*mobile*/}
                 <div className="lg:hidden flex flex-col w-screen">
                             <img src={k1} alt="" className="" />
                             <div className="w-48 md:w-70 flex lg:hidden lg:mt-10 p-2 lg:p-0">
                         <img src={k2} alt="" className=""/>
                             <div className="flex justify-center relative  ">
                             <h3  className="text-white text-[13px] leading-relaxed opacity-70 text-left p-2 w-40 md:w-lg md:text-2xl md:p-5 ">Currently working as a graphic designer with K9 School.
Contributing to brand visuals, campaigns, and digital design for over six months.</h3>
                         
                         </div>
                       </div>
                         
                         
                         </div>

               

                 {/*mobile*/}

                

                <div className="w-xl hidden lg:block">
                    <img src={k3} alt="" />
                </div>
            </div>
            </div>

                   
{/*mobile*/}
          <div className="lg:hidden flex justify-center w-screen  mt-5 ">


          <button
  onClick={() => setOpen(true)}
  className=" lg:hidden md:hidden rounded-lg text-sm px-3 mb-20 hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-black w-30  p-2 hover:scale-105"
>
  View More
</button></div>

 {/*mobile*/}
       
        {/*PC/TAB*/}
    <div className="hidden lg:flex md:flex md:justify-center md:w-5xl lg:w-screen lg:justify-center lg:pb-60 pb-20 lg:pt-15">
       <button
  onClick={() => setOpen(true)}
 className=" rounded-lg h-20 text-4xl hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-sm text-center hover:scale-105  "
>
    View More
</button>
</div>
{/*PC/TAB*/}

       
        {open && (
  <FolderPopup
    images={pageAImages}
    onClose={() => setOpen(false)}></FolderPopup>
  
)}
        
        </div>
               <Work text="Let's Connect"></Work>   
               <Footer></Footer>

            
        
        </>
    )
 }

 export default Knine
