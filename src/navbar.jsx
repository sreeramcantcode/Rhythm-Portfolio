import img from "./assets/saint.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)

import { Link } from "react-router-dom";

function Sample (){

   const { contextSafe } = useGSAP();

  const handle = contextSafe((e) => {
    e.preventDefault(); 

    gsap.to(window, {
      duration: 1,
      scrollTo: "#footer",
      ease: "power2.out",
    });
  });
   
    return (
        <>

           <div className="backdrop-blur-2xl fixed z-30 container mx-autox">
          <div className="bg-black py-3 h-20 w-screen text-white relative  border-b border-green-400 opacity-72">
            
            <div className=" flex max-w-8xl  text-md justify-end gap-16 mx-auto p-4 px-14 items-center">
              <Link to="/" className=" hover:text-red-400 hover:scale-130 duration-300">Home</Link>
               <Link to="/All" className=" hover:text-red-400 hover:scale-130 duration-300" >Works</Link>
              <Link to="/About" className=" hover:text-red-400 hover:scale-130 duration-300" >About</Link>
               <Link to="#" onClick={handle} className=" hover:text-red-400 hover:scale-130 duration-300">Contact</Link>
            </div>
           
            <a href="#">
              <img src={img} className=" w-22 absolute top-0 hover:scale-130 duration-300 " alt="" />
              </a>

          </div>
          </div>
          
        </>
    )
}

export default Sample