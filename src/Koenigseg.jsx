
import koe1 from "./assets/koeniggseg1.jpg"
import koe2 from "./assets/koeniggseg.webp"
import logo from "./assets/koelogo.webp"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Work from "./Work"
import Footer from "./Footer"


function Koenigseg(){

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

            <div className=" flex gap-3 pt-25 mr-6">
                    
                     <div ref={img} className="border-r border-white lg:w-30 w-24 relative     ">
                        <img src={logo} alt="" className="absolute lg:w-25 w-20 " /> </div>
                        
                        <div className="text-white lg:text-xl text-[12px] items-center flex px-5  ">
                        <ul className="space-y-4 pb-3 pt-2">
                            <li  ref={maintext}>Role : <span className="opacity-60">Sketch Artist</span></li>
                            <li ref={maintext2} >Project : <span className="opacity-60">Personal Project</span></li>
                        </ul>
                    </div>
                    </div>

                  
                 <div ref={car} className="flex pt-10  justify-center border relative w-screen ">
                    <div className="w-6xl mr-5 pt-6">
                        <img src={koe2} alt="" className=""/>
                        <div className="text-white lg:pt-4 pt-6 lg:text-lg text-center">
                            <h3 className=" text-sm">Hand-sketched automotive artwork acknowledged by the official KoenigseggUSA page and recognized for its execution.</h3>
                        </div>
                    </div>

                    <div className="lg:w-50 w-24 right-0  border absolute lg:right-1/12 top-3 border-yellow-300 ">
                        <img src={koe1} alt="" />
                    </div>
                    </div>  

                    <div className="flex justify-center lg:pb-30 pb-14">
        
        
        </div>
        <div>
         <Work text="Let's Connect"></Work>
     <Footer></Footer>
     </div>
                    

        </div>
        </>
     )
}
export default Koenigseg
