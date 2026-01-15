import Work from "./Work"    
import image1 from "./img1.jpg"
import image2 from "./img2.jpg"
import image3 from "./img3.jpg"
import image4 from "./assets/uimg4.jpg"
import image5 from "./assets/uimg6.jpg"
import i from "./assets/Uni.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Foldercard from "./Foldercard"

import Footer from "./Footer"


function Uniliver(){

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

            <div className="w-50  flex ml-3 pt-25  justify-center">
                          <div className=" w-10 z-20 relative top-2 bg-black h-2">
                    
                            </div>
                            </div>
                    
                            <div className=" flex gap-3  ">
                            
                            <div ref={logo} className="border-r z-10 border-white w-30 h-30 relative    ">
                                <img src={i} alt="" className="translate scale-120" /> </div>
                                
                                <div className="text-white text-xl  items-center flex px-5">
                                <ul className="space-y-4">
                                    <li  ref={maintext}>Role : <span className="opacity-60">Graphic Designer (Freelance)</span></li>
                                    <li ref={maintext2} >Project : <span className="opacity-60">Annual Branch Conference
                                        </span></li>
                                </ul>
                            </div>
                            </div>
                 <div ref={mainimg} className="flex justify-start w-screen gap-6  ">

                    
                <div  className="grid grid-cols-2 relative mb-20  w-3xl px-18  mt-7">

                    <div className="w-80">
                        <img src={image2} alt="" />
                    </div>

                    <div className="w-92">
                        <img src={image3} alt="" className="ml-3" />
                    </div>
                     
                     
                    

                     <div className="w-80">
                        <img src={image5} alt=""  />
                    </div>
                     <div className="w-96 px-3">
                        <img src={image1} className="mb-6" alt="" />
                    </div>
                     <div className="w-96 absolute right-4 top-1/4 p-3 ">
                        <img src={image4} alt="" className="ml-6 mt-2" />
                    </div>
                    
                    </div>

                   <div className="text-white w-2xl flex items-start relative text-2xl p-4 mt-7  ">
                        <h3>
                            

                           Selected by Hindustan Unilever to design the official logo, T-shirt, and cap for Team Northeast at the Eastern India branch conference. The designs reflected the team’s identity and were well received for their visual consistency, becoming key elements of the event’s branding.
                        </h3>

                        <div className="absolute inset-0 top-1/5  left-1/4 ">
            <Foldercard></Foldercard>
            </div>

                    </div>

               
                     

                </div>
                     

             <Work text="Let's Connect"></Work>
             <Footer></Footer>

        </div>
        </>
    )
}

export default Uniliver