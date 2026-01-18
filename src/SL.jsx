

import Work from "./Work"
import Footer from "./Footer"

import ff from "./assets/Silent.png"
import sl from "./assets/sl1.jpg"
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
                        <img src={ff} alt="" className="translate scale-120 w-25 translate-x-6" /> 
                        </div>
                        <div className="text-white text-xl  items-center flex px-10 ">
                                <ul className="space-y-4">
                                    <li ref={maintext}>Role : <span className="opacity-60">Product Designer (Club Member)</span></li>
                                    <li ref={maintext2}>Project : <span className="opacity-60">Biomedical device branding & Interface Design</span></li>
                                </ul>
                            </div>
                        </div>

                <div ref={mainimg} className="flex justify-start p-10 gap-5">
                    <div className="w-xl pt-10">
                        <img src={sl} alt="" />
                    </div>

                    <div className="text-white ">
                        <h3 className="w-60">
                            
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
