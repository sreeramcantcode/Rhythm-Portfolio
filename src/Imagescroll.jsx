import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import image1 from "./img1.jpg"
import image2 from "./assets/Lb6.jpg"
import image3 from "./assets/merc2.jpg"
import image4 from "./assets/saint1.jpg"
import image5 from "./assets/Lb4.jpg"
import image6 from "./assets/merc1.webp"
import image7 from "./assets/bth3.webp"
import image8 from "./assets/ff5.webp"
import image9 from "./assets/saint1.jpg"



gsap.registerPlugin(useGSAP)

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
  
]

export default function Imagescroll() {

 
  const trackRef = useRef(null)

  useGSAP(
    () => {
      const track = trackRef.current
      const width = track.scrollWidth / 2

      gsap.to(track, {
        x: -width,
        duration: 20,
        ease: "linear",
        repeat: -1,
      })
    },
    { scope: trackRef }
  )

  return (
    <div className="w-full overflow-hidden bg-black py-16 mt-8">
      <div ref={trackRef} className="flex w-max gap-4">
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <img
              src={img}
              className=" lg:w-xl lg:h-96 w-50 h-50  object-cover rounded-xl"
            />
        
        
          </div>
        ))}
      </div>
    
    </div>
  )
}
