import img from "./assets/Chipmunk.png"

import saint from "./assets/saint.png"
import frame from "./assets/frameflash.png"
import k from "./assets/k9.png"
import mer from "./assets/mercedes.png"
import uni from "./assets/Uni.png"
import street from "./assets/Street.png"
import lb from "./assets/lb.png"
import sil from "./assets/Silent.png"
import bth from "./assets/bth.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"


function Home(){

    const anref = useRef()
    useGSAP(()=>{
        gsap.from(anref.current , {
            y:40,
            duration:3
        })
    })

    return(
        <>
        <div ref={anref} className=" min-h-[130vh] bg-black">\
            <div className="flex justify-center ">
               <img className="object-contain w-96 top-5 absolute transform scale-120 z-10 im" src={img} alt="" />
               
            </div>
             
             <h1 className="text-white h-90 mt-15 text-[220px] lose flex justify-center items-center text z-0 hover:text-red-500 hover:text-[240px] cursor-pointer duration-300 whitespace-nowrap">LOSE MY MIND</h1>

             <div className=" py-30 h-70 flex justify-center mt-35 gap-20 ">
                <img src={frame} className="w-20 h-20 object-contain relative scale-170 z-20 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={saint} className="w-20 h-20 object-contain relative  z-20 scale-170 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={k} className="w-20 h-20 object-contain relative  z-20 scale-170 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={mer} className="w-20 h-20 transform  object-contain relative z-20 scale-210 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                
                <img src={uni} className="w-20 h-20 object-contain scale-170 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={street} className="w-20 h-20 object-contain scale-170 hover:scale-240 duration-300 cursor-pointer " alt="frame" />
                <img src={lb} className="w-20 h-20 object-contain scale-170 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={sil} className="w-20 h-20 object-contain scale-170 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={bth} className="w-20 h-20 object-contain scale-170 hover:scale-205 duration-300 cursor-pointer" alt="frame" />
            
               </div>
            </div>
            <div className=""></div>
           

             
        
       

       
        </>
    )

}
export default Home 