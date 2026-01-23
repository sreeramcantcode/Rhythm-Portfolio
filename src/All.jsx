

import { ScrollTrigger } from "gsap/all";
import Footer from "./Footer";
import Work from "./Work";
import Imagescroll from "./Imagescroll";

import k9 from "./assets/k9p.jpg"
import u from "./assets/uniliver.jpg"
import sf from "./assets/SF.jpg"
import sl from "./assets/silentart.jpg"
import lambo from "./assets/lambo.jpg"
import merc from "./assets/merc.webp"
import frame from "./assets/FrameFlashtile.webp"
import koe from "./assets/koeniggsegtile.jpg"
import comic from "./assets/comic.jpg"
import bth from "./assets/bthtile.webp"
import lbwk from "./assets/lbwk.jpg"
import sketch from "./assets/sketch.webp"
import { Link } from "react-router-dom";


function All(){

    
    return(
        <>
         <div className="min-h-screen text-white pt-25 bg-black relative">
          <div className="pt-10">
               <Work text="All Works"  ></Work>
               </div>
               <div className="px-4 sm:px-10 md:px-25">
              <div className="max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2
    gap-x-6 md:gap-x-29
    gap-y-6 sm:gap-y-9
    ml-0 sm:ml-12
    justify-items-center sm:justify-items-end
    mt-8 sm:mt-12
    pb-20
  "
>

                <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
                <Link to="/uniliver"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  UNILEVER</h1>
                  <img
                  src={u}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /></Link>
</div>
              <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
                <Link to="/k9"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  K9 SCHOOL</h1>
                  <img
                  src={k9}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /></Link>
</div>
                <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
                <Link to="/saint"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  SAINTFLAIRE</h1>
                  <img
                  src={sf}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /> </Link> 
</div>
                      <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
             <Link to="/silent"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  SILENT ARTERY</h1>
                  <img
                  src={sl}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /></Link>
</div>      <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
              <Link to="/frameflash"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  FRAMEFLASH</h1>
                  <img
                  src={frame}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /></Link>  
</div>               
                     <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
                <Link to="/bth"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  BEAT THE HEAT</h1>
                  <img
                  src={bth}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /></Link>
</div>              
                 <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
               <Link to="/mercedes"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  MERCEDES</h1>
                  <img
                  src={merc}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /> </Link> 
</div>

<div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
              <Link to="/lb"> <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  LIBERTY WALK</h1>
                  <img
                  src={lbwk}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /> </Link> 
</div>
   
   <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
                <Link to="/koeniggseg"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  KOENIGSEGG</h1>
                  <img
                  src={koe}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /> </Link>
</div>

     <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
              <Link to="/lambo"> <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  LAMBORGHINI</h1>
                  <img
                  src={lambo}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /> </Link> 
</div>


<div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
              <Link to="/sketches"> <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  SKETCHES</h1>
                  <img
                  src={sketch}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /> </Link> 
</div>

         <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
             <Link to="/comic"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  COMIC</h1>
                  <img
                  src={comic}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  /></Link> 
</div>


          
          
 


               </div>

           
        
          </div>
</div>
          
         <Work text="Let's Connect"></Work>

     
      <Footer />

        </>
    )

}
export default All