import lambo1 from "./assets/lambo1.png"
import lambo2 from "./assets/lambo2.jpg"
import logo from "./assets/lambologo.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Work from "./Work"
import Footer from "./Footer"


function Lamborghini(){

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
         <div className="min-h-screen bg-black">

            <div className=" flex gap-3 pt-25  ">
                    
                    <div ref={img} className="border-r z-10 border-white w-30 relative     ">
                        <img src={logo} alt="" className="absolute inset-0 w-30 pt-4" /> </div>
                        
                        <div className="text-white text-xl  items-center flex px-5 pt-5 ">
                        <ul className="space-y-4 pb-3">
                            <li  ref={maintext}>Role : <span className="opacity-60">Sketch Artist</span></li>
                            <li ref={maintext2} >Project : <span className="opacity-60">Personal Project</span></li>
                        </ul>
                    </div>
                    </div>

                  
                 <div ref={car} className="flex pb-25  justify-center border relative w-screen ">
                    <div className="w-3xl  ">
                        <img src={lambo1} alt="" className=""/>
                        <div className="text-white pt-4 text-center">
                            <h3>A hand-sketched Lamborghini artwork acknowledged by the Lamborghini Mumbai. The work received recognition for its execution and visual quality.</h3>
                        </div>
                    </div>

                    <div className="w-45 border absolute right-1/6 top-0 border-yellow-300">
                        <img src={lambo2} alt="" />
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
export default Lamborghini
