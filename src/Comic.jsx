import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

import comic from "./assets/comic2.webp"
import Work from "./Work"
import Footer from "./Footer"
import comicpdf from "./assets/portfolio_finalwork.pdf"

function Comic() {
  const comicimg = useRef()
  const maintext = useRef()
  const maintext2 = useRef()
  const img = useRef()

  useGSAP(() => {
    gsap.from(img.current, {
      opacity: 0,
      duration: 1,
    })

    gsap.from([maintext.current, maintext2.current], {
      xPercent: "-20",
      opacity: 0,
      filter: "blur(20px)",
      duration: 1,
    })

    gsap.from(comicimg.current, {
      opacity: 0,
      duration: 1,
      y: 20,
      filter: "blur(20px)",
    })
  })

  return (
    <>
      <div className="min-h-screen bg-black">
      
        <div className="w-50 flex ml-3 pt-25 justify-center">
          <div className="w-10 z-20 relative top-2 bg-black h-2" />
        </div>

    
        <div className="flex gap-3">
          <div ref={img} className="border-r z-10 border-white w-10 relative">
            
          </div>

          <div className="text-white lg:text-xl text-[12px] items-center flex px-5 pt-2">
            <ul className="space-y-4">
              <li ref={maintext}>
                Role : <span className="opacity-60">Comic Artist</span>
              </li>
              <li ref={maintext2}>
                Purpose: :{" "}
                <span className="opacity-60">
                  Personal Project
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* comic section */}
        <div className="pb-6 lg:pb-30 flex justify-center">
          <div ref={comicimg} className="p-7 relative group w-full">
            {/* image */}
            <div
              className="cursor-pointer flex justify-center"
              onClick={() => window.open(comicpdf, "_blank")}
            >
              {/* desktop */}
              <img
                src={comic}
                alt=""
                className="hidden lg:block max-w-full lg:w-8xl border duration-500"
              />
              {/* mobile */}
              <img
                src={comic}
                alt=""
                className="lg:hidden w-full border duration-500"
              />
            </div>

            {/* description */}
            <div className="pt-4 flex justify-center">
              <h3 className="hidden lg:block text-white text-center leading-relaxed lg:w-7xl text-sm">
                An original detective comic developed in a noir-cyberpunk
                setting. The narrative follows Victor, a detective drawn into a
                complex investigation centered on memory, identity, and
                concealed conspiracies. The project features hand-drawn artwork,
                structured narrative panels, and atmospheric visual direction to
                build a cohesive and immersive world.
              </h3>

              <h3 className="lg:hidden text-white text-center leading-relaxed text-[12px] px-2">
                An original detective comic developed in a noir-cyberpunk
                setting. The narrative follows Victor, a detective drawn into a
                complex investigation centered on memory, identity, and
                concealed conspiracies.
              </h3>
              
            </div>
            <div className="hidden lg:flex justify-center mb-6 pt-10">
          <button
            onClick={() => window.open(comicpdf, "_blank")}
 className=" rounded-lg h-20 text-3xl hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-70 text-center hover:scale-105  "          >
            View Comic
          </button>
        </div>

            {/* mobile button */}
            <div className="flex justify-center mt-6 lg:hidden">
              <button
                onClick={() => window.open(comicpdf, "_blank")}
                className=" lg:hidden md:hidden rounded-lg md:text-2xl border  text-sm px-3  hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer  w-30  p-2 hover:scale-105"
>
              
                View Comic
              </button>
            </div>
          </div>
        </div>

        {/* desktop button */}
        

        <Work text="Let's Connect" />
        <Footer />
      </div>
    </>
  )
}

export default Comic
