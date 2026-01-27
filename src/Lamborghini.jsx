import lambo1 from "./assets/lambo1.webp"
import lambo2 from "./assets/lambo21.jpg"
import logo from "./assets/lambologo.webp"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Work from "./Work"
import Footer from "./Footer"


function Lamborghini(){

    const car = useRef()
    const car1 = useRef()
    const maintext = useRef()
    const maintext2 = useRef()
    const img = useRef()
    const ss = useRef()
   

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

      gsap.from([ss.current] , {
         
         xPercent:"-20",
         opacity:0,
         filter:"blur(20px)",
         duration:3,
         
        
        
      })

      

      gsap.from([car.current , car1.current] , {
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
                        <img src={logo} alt="" className=" lg:w-30 w-30 pt-4" /> </div>
                        
                        <div className="text-white lg:text-xl text-[12px] md:text-
                        xl items-center flex px-5 pt-5  ">
                        <ul className="space-y-4 pb-3">
                            <li  ref={maintext}>Role : <span className="opacity-60">Sketch Artist</span></li>
                            <li ref={maintext2} >Project : <span className="opacity-60">Personal Project</span></li>
                        </ul>
                    </div>
                    </div>

                    <div ref={car1} className="flex flex-col gap-1 lg:hidden relative  md:mb-10 md:pt-10 p-2">
                                
                              <div className="relative">
                            <div  className="lg:w-96 w-48 absolute top-0  p-2  ">
                        <img src={lambo2} alt="" />
                    </div>
                        <img src={lambo1} alt="" className=""/>
                        
                        </div>
                              

                            <div className="text-white pt-4 text-center mb-10 ">

                            <h3 className="lg:text-lg text-[10px] p-2 md:text-lg">A hand-sketched Lamborghini artwork acknowledged by the Lamborghini Mumbai. The work received recognition for its execution and visual quality.</h3>
                        </div>   
                     </div>
                     

                  
                 <div ref={car} className="lg:flex hidden pb-25 lg:pt-0 pt-10  justify-center border w-screen ">
                    <div className="w-3xl  ">
                        <div className="relative">
                            <div ref={ss} className="lg:w-96 w-24 absolute  top-0 p-3  ">
                        <img src={lambo2} className="rounded-lg border-gray-500 border " alt="" />
                    </div>
                        <img src={lambo1} alt="" className=""/>
                        
                        </div>
                     
                        <div className="text-white pt-4 text-center ">
                            <h3 className="lg:text-lg text-[10px] p-2 md:text-lg">A hand-sketched Lamborghini artwork acknowledged by the Lamborghini Mumbai. The work received recognition for its execution and visual quality.</h3>
                        </div>
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
