

import { ScrollTrigger } from "gsap/all";
import Footer from "./Footer";
import Work from "./Work";
import Imagescroll from "./Imagescroll";

import k9 from "./assets/k9p.jpg"
import u from "./assets/uniliver.jpg"
import sf from "./assets/SF.jpg"
import sl from "./assets/silentart.jpg"
import lambo from "./assets/lambo.jpg"
import merc from "./assets/merc.jpg"



function All(){

    
    return(
        <>
         <div className="min-h-screen text-white pt-25 bg-black relative">
          <div className="pt-10">
               <Work text="All Works"  ></Work>
               </div>
               <div className="px-25">
               <div className="max-w-7xl grid grid-cols-2 gap-x-29 ml-12   gap-y-9 justify-items-end mt-12 pb-25"> 
                <div className="w-2xl h-100 relative group cursor-pointer">
                <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  UNILIVER</h1>
                  <img
                  src={u}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  />
</div>
              <div className="w-2xl h-100 relative group cursor-pointer">
                <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  K9 SCHOOL</h1>
                  <img
                  src={k9}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  />
</div>
                <div className="w-2xl h-100 p-1 relative group cursor-pointer">
                <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  SAINTFLAIRE</h1>
                  <img
                  src={sf}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  />
</div>
                      <div className="w-2xl h-100 p-1 relative group cursor-pointer">
                <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  SILENT ARTERY</h1>
                  <img
                  src={sl}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  />
</div>                 
                     <div className="w-2xl h-100 p-1 relative group cursor-pointer">
                <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  LAMBORGHINI</h1>
                  <img
                  src={lambo}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  />
</div>               <div className="w-2xl h-100 p-1 relative group cursor-pointer">
                <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  MERCEDES</h1>
                  <img
                  src={merc}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  />
</div>   
                 <div className="w-2xl h-100 p-1 relative group cursor-pointer">
                <h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                  UNILIVER</h1>
                  <img
                  src={merc}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  />
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