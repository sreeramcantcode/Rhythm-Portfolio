

import { ScrollTrigger } from "gsap/all";
import Footer from "./Footer";
import Work from "./Work";
import Imagescroll from "./Imagescroll";

import k9 from "./assets/k9p.jpg"
import u from "./assets/uniliver.jpg"
import sf from "./assets/SF.jpg"
import sl from "./assets/silentart.jpg"



function All(){

    
    return(
        <>
         <div className="min-h-[220vh] text-white  pt-25 bg-black">
            <h1 className="text-white text-[150px] word text-center">All Works </h1>
            <div className="max-w-full flex flex-col justify-center items-center ">
                <div className="flex justify-center gap-1 mt-3">

                    
                
                          <div className=" w-120 h-100 p-1  relative group cursor-pointer " >
                            <a href="#"><h1 className="inset-0 absolute text-6xl text-white z-10 top-1/3 text-center opacity-0 group-hover:opacity-100 duration-1000 u">UNILIVER</h1></a>
                            <img src={u} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" />
                            </div>
                
                          <div className=" w-120 h-100  p-1 relative group cursor-pointer " >
                            <h1 className="inset-0 absolute text-6xl text-center text-white z-10 top-1/3 opacity-0 group-hover:opacity-100 duration-1000 u">K9 SCHOOL</h1>
                            <img src={k9} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" />
                            </div>
                            </div>

                            <h3>Choose how we want it , cuz its not 4 tiles like in the highlights section</h3>
                
                            <div className="flex justify-center gap-1 transform translate-y-12 mt-5 ">
                
                          <div className=" w-165 h-100 p-1 mt-10 relative group cursor-pointer " >
                            <h1 className="inset-0 absolute text-6xl text-white z-10 top-1/2 text-center  opacity-0 group-hover:opacity-100 duration-1000 u">SAINTFLAIRE</h1>
                            <img src={sf} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" />
                            </div>
                
                          <div className=" w-165 h-100  p-1 mt-10 relative group cursor-pointer " >
                            <h1 className="inset-0 absolute top-1/2 text-6xl text-center text-white z-10 opacity-0 group-hover:opacity-100 duration-1000 u">SILENT ARTERY</h1>
                            <img src={sl} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" />
                            </div>
                            </div>
                
            
            </div>
           
          </div>

          
         <Work />

     
      <Footer />

        </>
    )

}
export default All