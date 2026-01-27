import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import image1 from "./img2.jpg"
import image2 from "./assets/ff2.webp"
import image3 from "./assets/saint2.webp"
import image4 from "./assets/koeniggseg.jpg"
import image5 from "./assets/p5.jpg"
import image7 from "./assets/merc5.webp"
import image6 from "./assets/p6.jpg"
import image8 from "./assets/merc4.webp"
import image9 from "./assets/koeniggseg.jpg"
import { useNavigate } from "react-router-dom"

gsap.registerPlugin(useGSAP)

const images = [image1, image2, image3, image4 , image5,image6,image7,image8,image9]

export default function Imagescroll2() {
    const navigate = useNavigate()
  const trackRef = useRef(null)

  useGSAP(
    () => {
      requestAnimationFrame(() => {
    const track = trackRef.current
    const width = track.scrollWidth / 2

     
      gsap.fromTo(
        track,
        { x: -width },
        {
          x: 0,
          duration:35,
          ease: "linear",
          repeat: -1,
        }
      )
    })
  },{ scope: trackRef }
  )

  return (
    <div className="w-full overflow-hidden bg-black relative bottom-3 mt-4">
      <div ref={trackRef} className="flex w-max gap-4">
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <img
              src={img}
              className=" rounded-xl lg:w-xl lg:h-96 w-50 h-50 object-cover "
            />
          </div>
        ))}
      </div>
      
        <div className="lg:h-90 hidden pb-30  lg:pt-0 lg:flex justify-center items-center">
      <button onClick={()=> navigate("/All")}className=" rounded-lg  h-20 text-3xl hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-70 text-center hover:scale-105  ">Explore Projects</button>
      </div>

      <div className="lg:h-90 lg:hidden  mb-20  mt-12 pt-10 lg:pt-0 flex justify-center items-center">
      <button onClick={()=> navigate("/All")}className=" lg:hidden md:hidden rounded-lg text-sm  hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-black w-40  p-2 hover:scale-105">Explore Projects</button>
      </div>

    </div>
  )
}

