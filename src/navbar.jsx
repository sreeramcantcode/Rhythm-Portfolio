import img from "./assets/homelogo.webp"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import navmenu from "./assets/navmenu.png"



gsap.registerPlugin(ScrollToPlugin)

import { Link } from "react-router-dom";



import { useEffect, useRef , useState } from "react";


gsap.registerPlugin(ScrollToPlugin)

function Sample (){
  const [open, setOpen] = useState(false);


  const { contextSafe } = useGSAP()
  
  const nav = useRef()

  useEffect(() => {
  function handleClickOutside(e) {
    if (open && nav.current && !nav.current.contains(e.target)) {
      setOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [open]);


  const handle = contextSafe((e) => {
    e.preventDefault()
    setOpen(false)

    gsap.to(window, {
      duration: 1,
      scrollTo: "#footer",
      ease: "power2.out",
    })

    
  })

  useGSAP(() => {
  if (!nav.current) return

  gsap.fromTo(
    nav.current,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
  )
}, [open])


  return (
    <>
      <div className="backdrop-blur-2xl fixed z-30 w-full">
        <div className="bg-black py-3 h-20 text-white relative border-b border-green-400 lg:opacity-72">

          {/* logo */}
          <Link to="/" >
            <img
              src={img}
              className="w-12 absolute lg:top-3 md:left-4 lg:left-4 right-2 hover:scale-110 duration-300"
              alt=""
            /></Link>
          

          {/* desktop nav */}
          <div className="hidden md:flex max-w-8xl text-md justify-end gap-16 mx-auto p-4 px-14 items-center">
            <Link to="/" className="hover:text-red-400 hover:scale-130 duration-300">Home</Link>
            <Link to="/All" className="hover:text-red-400 hover:scale-130 duration-300">Works</Link>
            <Link to="/About" className="hover:text-red-400 hover:scale-130 duration-300">About</Link>
            <Link to="/pricing" className="hover:text-red-400 hover:scale-130 duration-300">Pricing</Link>
            <Link to="#" onClick={handle} className="hover:text-red-400 hover:scale-130 duration-300">Contact</Link>
            
          </div>

          
          <div className="md:hidden flex lg:justify-end items-center h-full px-6 mr-10">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl focus:outline-none cursor-pointer"
            >
              <img src={navmenu} alt="" className="max-w-full w-8" />
            </button>
          </div>

         
          {open && (
            <div ref={nav}  className="
              md:hidden 
              absolute top-20 left-0
              bg-linear-to-l from-black to-red-950 
              h-screen w-40 flex pt-20 text-center p-5 opacity-75 flex-col gap-10
              rounded-lg
              
              space-y-4
              text-lg 
              z-40
              
            ">
              
              <Link onClick={() => setOpen(false)} to="/" className="block opacity-70 hover:text-red-400">Home</Link>
              <Link onClick={() => setOpen(false)} to="/All" className="block opacity-70 hover:text-red-400">Works</Link>
              <Link onClick={() => setOpen(false)} to="/About" className="block opacity-70 hover:text-red-400">About</Link>
              <Link to="#" onClick={handle} className="block opacity-70 hover:text-red-400">Contact</Link>
               <Link onClick={() => setOpen(false)} to="/pricing" className="block opacity-70 hover:text-red-400">Pricing</Link>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default Sample
