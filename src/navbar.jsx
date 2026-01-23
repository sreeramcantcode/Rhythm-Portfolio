import img from "./assets/saint.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)

import { Link } from "react-router-dom";




import { useState } from "react"

gsap.registerPlugin(ScrollToPlugin)

function Sample (){

  const { contextSafe } = useGSAP()
  const [open, setOpen] = useState(false)

  const handle = contextSafe((e) => {
    e.preventDefault()
    setOpen(false)

    gsap.to(window, {
      duration: 1,
      scrollTo: "#footer",
      ease: "power2.out",
    })
  })

  return (
    <>
      <div className="backdrop-blur-2xl fixed z-30 w-full">
        <div className="bg-black py-3 h-20 text-white relative border-b border-green-400 opacity-72">

          {/* logo */}
          <a href="#">
            <img
              src={img}
              className="w-20 absolute top-0 left-4 hover:scale-110 duration-300"
              alt=""
            />
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex max-w-8xl text-md justify-end gap-16 mx-auto p-4 px-14 items-center">
            <Link to="/" className="hover:text-red-400 hover:scale-130 duration-300">Home</Link>
            <Link to="/All" className="hover:text-red-400 hover:scale-130 duration-300">Works</Link>
            <Link to="/About" className="hover:text-red-400 hover:scale-130 duration-300">About</Link>
            <Link to="#" onClick={handle} className="hover:text-red-400 hover:scale-130 duration-300">Contact</Link>
          </div>

          
          <div className="md:hidden flex justify-end items-center h-full px-6 mr-10">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl focus:outline-none cursor-pointer"
            >
              ☰
            </button>
          </div>

         
          {open && (
            <div className="
              md:hidden
              absolute top-20 right-4
              bg-black border border-green-400
              rounded-lg
              px-6 py-4
              space-y-4
              text-md
              z-40
            ">
              <Link onClick={() => setOpen(false)} to="/" className="block hover:text-red-400">Home</Link>
              <Link onClick={() => setOpen(false)} to="/All" className="block hover:text-red-400">Works</Link>
              <Link onClick={() => setOpen(false)} to="/About" className="block hover:text-red-400">About</Link>
              <Link to="#" onClick={handle} className="block hover:text-red-400">Contact</Link>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default Sample
