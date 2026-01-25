

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
                        <div ref={logo} className="border-r border-white lg:w-35 w-24 h-23 relative">
                        <img src={sil} alt="" className=" w-25 lg:translate-x-6" /> 
                        </div>
                        <div className="text-white lg:text-xl text-[11px] items-center flex lg:px-10 ">
                                <ul className="space-y-4">
                                    <li ref={maintext}>Role : <span className="opacity-60">Product Designer (Club Member)</span></li>
                                    <li ref={maintext2}>Project : <span className="opacity-60">Biomedical device branding & Interface Design</span></li>
                                </ul>
                            </div>
                        </div>
              
              <div className="pt-10 p-4  pb-30 flex justify-center lg:gap-5">
                <div className="lg:w-80 w-30">
                    <img src={sl4} alt="" />
                    <div className=" text-white lg:text-center lg:w-5xl w-screen lg:relative flex flex-col items-center justify-center text-[12px] lg:pt-6 pt-3">
                        <div className="flex justify-center pt-5 lg">
                        <h3 className="lg:w-5xl w-72 text-center ">
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
                        </h3></div>

                   <div className="lg:hidden flex justify-center pt-7  w-80  ">


          <button
onClick={()=> window.open(slcert , "_blank")}
  className=" lg:hidden md:hidden rounded-lg lg:h-20 lg:text-4xl text-lg  hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white lg:w-sm p-2 hover:scale-105"
>
  View Certificate
</button></div>



                       <div className="hidden lg:flex md:flex md:justify-center md:w-5xl lg:w-screen lg:justify-center  lg:pt-15">
       <button
onClick={()=> window.open(slcert , "_blank")}
 className=" rounded-lg h-20 text-4xl hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-sm text-center hover:scale-105  "
>
    View Certificate
</button>
</div>
        
                   </div>
                   
                   
                </div>
                
                

                <div className="lg:w-80 ">
                    <img src={sl3} alt="" />
                     
                     
                   
                </div>

                <div className="lg:w-80">
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
