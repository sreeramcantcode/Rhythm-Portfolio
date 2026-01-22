

import Work from "./Work"
import Footer from "./Footer"
import slcert from "./assets/slcert.pdf"

import sl2 from "./assets/sl2.webp"
import sl3 from "./assets/sl3.webp"
import sl4 from "./assets/sl4.webp"
import sil from "./assets/Silent.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

function SL(){

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
        <div className="min-h-screen bg-black ">
            <div className="w-50  flex ml-3  justify-center">
                                  
                   <div className=" w-10 z-20 relative top-2 pt-30 bg-black h-2"></div>
                                         
                    </div>
                    <div className=" flex gap-3  ">
                        <div ref={logo} className="border-r border-white w-35 h-23 relative">
                        <img src={sil} alt="" className="translate scale-120 w-25 translate-x-6" /> 
                        </div>
                        <div className="text-white text-xl  items-center flex px-10 ">
                                <ul className="space-y-4">
                                    <li ref={maintext}>Role : <span className="opacity-60">Product Designer (Club Member)</span></li>
                                    <li ref={maintext2}>Project : <span className="opacity-60">Biomedical device branding & Interface Design</span></li>
                                </ul>
                            </div>
                        </div>
              
              <div className="pt-10 pb-30 flex justify-center gap-5">
                <div className="w-80">
                    <img src={sl4} alt="" />
                    <div className=" text-white text-center w-5xl pt-6">
                        <h3 className="">
                            Silent Artery is an academic ECS hardware project focused on non-invasive
pulse and oxygen monitoring. As the product designer, I crafted
the complete
visual identity- including user interface
elements, device
branding, and technical graphic layouts. The
design prioritized clarity, medical
reliability, and
user accessibility, blending functionality with
a clean aesthetic
tailored for
health-tech innovation.
                        </h3>
                        <div className="flex justify-center">
                    <div className="pt-10">
                    <button
                      onClick={()=> window.open(slcert , "_blank")}
                     className=" rounded-lg h-20 text-4xl cursor-pointer hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-sm text-center hover:scale-105  "
                   >
                      View Certificate
                   </button>
                                       </div>
                    
                  
                </div>
        
                   </div>
                   
                </div>

                <div className="w-80 ">
                    <img src={sl3} alt="" />
                     
                     
                   
                </div>

                <div className="w-80">
                    <img src={sl2} alt="" />
                    
                </div>
              </div>
                 
             
            <div>

         <Work text="Let's Connect"></Work>
     <Footer></Footer>
     </div>   
        </div>

        </>
    )
 }

 export default SL
