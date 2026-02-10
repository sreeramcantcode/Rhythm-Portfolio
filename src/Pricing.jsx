import Footer from "./Footer";
import Work from "./Work";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import price1 from "./assets/pricing1.webp"
import price2 from "./assets/pricing.webp"
import { useRef } from "react";

function Pricing(){

    const price = useRef()
    const text = useRef()

    useGSAP(()=>{

       
        gsap.from(text.current , {
            opacity:0,
            xPercent:-5,
            duration:1
        }),

         gsap.from(price.current , {
        opacity:0,
        duration:1,
        y:20,
        filter:"blur(20px)",
        
        
      })
    })

    return(
        <>
        <div className="bg-black min-h-screen lg:p-24 pt-25 pb-20 ">

            <div ref={text} className="flex justify-center text-white lg:text-9xl text-7xl u lg:pt-5 pt-5">

            <h1>Pricing</h1>
            </div>

            <div ref={price} className="lg:flex grid grid-cols-1 justify-center pt-5  ">
                
                <div className="w-full max-w-lg ">
                    <img src={price1} alt="" className="w-full h-auto object-contain"/>
                    
                </div>

               <div className="w-full max-w-lg ">
                    <img src={price2} alt="" className="w-full h-auto object-contain"/>
                    
                </div>

                <div>

                </div>

            </div>

        </div>
        <Work text="Let's Connect"></Work>
        <Footer></Footer>
        </>
    )
}
export default Pricing