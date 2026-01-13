
import Lb1 from "./assets/Lb1.jpg"
import Lb2 from "./assets/Lb2.jpg"
import Lb3 from "./assets/Lb3.jpg"
import lb from "./assets/lb.png"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Work from "./Work"
import Footer from "./Footer"
import Foldercard from "./Foldercard"

import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function LB (){
    
    const car = useRef()
    const maintext = useRef()
    const maintext2 = useRef()
    const img = useRef()
    const img1 = useRef()
    const img2 = useRef()

    useGSAP(()=>{

        gsap.from(img.current , {
            opacity:0,
            y:20,
            duration:1
        }),


        gsap.from([maintext.current , maintext2.current] , {
         
         y:20,
         opacity:0,
         filter:"blur(20px)",
         duration:1,
         delay:1,
         stagger:0.5
        
        
      }),

       gsap.from([img1.current , img2.current] , {
         
         y:20,
         opacity:0,
         duration:2,
         delay:2,

         scrollTrigger:{
            trigger:car.current,
            start:"top 10%"
        }
         
        
        
      }),

      gsap.from(car.current , {
        opacity:0,
        duration:1,
        y:20,
        filter:"blur(20px)",
        scrollTrigger:{
            trigger:car.current,
            start:"top 50%"
        }
      })
    })

    return(
    
    <>
    <div className="min-h-screen bg-black pt-25 ">

        <div className=" flex gap-3  ">
        
        <div ref={img} className="border-r border-white w-70">
            <img src={lb} alt="" />
        </div>

        <div className="text-white text-3xl u items-center flex px-5 ">
            <ul>
                <li  ref={maintext}>Role : Automotive  Digital Artist</li> <br />
                <li ref={maintext2} >Project : LBWK R35 GTR Graphic Artwork</li>
            </ul>
        </div>
        </div>
        <div ref={car} className="flex justify-center">
        <div className="max-w-5xl border-white">
            <img src={Lb3} alt="" />
        </div>
        </div>


        <div className="flex justify-evenly">
          <div ref={img1} className="w-60 pt-10 h-fit shadow-xl shadow-white">
            <img src={Lb1} alt="" />
          </div>

          <div className=" flex items-center justify-center w-3xl leading-relaxed ">
            <h3 className="text-white w-2xl flex text-5xl u text-center line ">
I created a high-impact digital artwork of the Liberty Walk-styled R35 GTR,
focusing on depth, aggression, and balance
within the modified gerthotic</h3>
          </div>

          <div ref={img2} className="w-60 pt-10 h-fit shadow-2xl shadow-white mb-20">
            <img src={Lb2} alt="" />
          </div>
        </div>


        <div className="flex justify-center h-fit pb-20">
        <Foldercard></Foldercard>
        
        </div>
        <div>
         <Work text="Let's Connect"></Work>
     <Footer></Footer>
     </div>
     
    
        
        

        

    </div>
    </>

)
   
    
    
}


export default LB