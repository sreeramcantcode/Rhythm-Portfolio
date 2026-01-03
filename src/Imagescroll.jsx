import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import image1 from "./img1.jpg"
import image2 from "./img2.jpg"
import image3 from "./img3.jpg"
import image4 from "./img4.jpg"

gsap.registerPlugin(useGSAP)

const images = [
  image1,
  image2,
  image3,
  image4
  
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
    <div className="w-full overflow-hidden bg-black py-16">
      <div ref={trackRef} className="flex w-max gap-10">
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <img
              src={img}
              className=" w-2xl h-90 object-cover rounded-xl blur-sm"
            />
        
        
          </div>
        ))}
      </div>
    </div>
  )
}
