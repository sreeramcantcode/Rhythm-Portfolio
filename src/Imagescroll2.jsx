import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import image1 from "./img2.jpg"
import image2 from "./assets/ff2.webp"
import image3 from "./assets/saint2.webp"
import image4 from "./assets/koeniggseg.jpg"
import { useNavigate } from "react-router-dom"

gsap.registerPlugin(useGSAP)

const images = [image1, image2, image3, image4]

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
          duration:20,
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
              className=" rounded-xl lg:w-xl w-72 h-96 object-cover "
            />
          </div>
        ))}
      </div>
        <div className="h-90 flex justify-center items-center">
      <button onClick={()=> navigate("/All")} className=" rounded-lg lg:h-20 lg:text-4xl text-lg hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white lg:w-sm w-40 p-3 text-center hover:scale-105">Explore Projects</button>
      </div>
    </div>
  )
}

