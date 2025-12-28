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
            y:30,
            duration:2
        })
    })

    return(
        <>
        <div ref={anref} className=" min-h-[130vh] bg-black">\
            <div className="flex justify-center relative ">
               <img className="object-contain w-96 top-5 absolute transform scale-120 z-10 im" src={img} alt="" />
               
            </div>
             
             <h1 className="text-white  w-full mt-8 text-[220px] lose flex justify-center items-center text z-0 hover:text-red-500 hover:text-[240px] cursor-pointer duration-300 transform translate-y-6">LOSE MY MIND</h1>
          

             <div className=" h-96 items-end justify-evenly mt-8 flex gap-5">
                
                <img src={frame} className="w-20 h-20 object-contain relative scale-190 z-20 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={saint} className="w-20 h-20 object-contain relative  z-20 scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={k} className="w-20 h-20 object-contain relative  z-20 scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={mer} className="w-20 h-20 transform  object-contain relative z-20 scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                
                <img src={uni} className="w-20 h-20 object-contain scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={street} className="w-20 h-20 object-contain scale-190 hover:scale-240 duration-300 cursor-pointer " alt="frame" />
                <img src={lb} className="w-20 h-20 object-contain scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={sil} className="w-20 h-20 object-contain scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                <img src={bth} className="w-20 h-20 object-contain scale-190 hover:scale-240 duration-300 cursor-pointer" alt="frame" />
                </div>
               </div>
            
            <div className=""></div>
           

             
        
       

       
        </>
    )

}
export default Home 