import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger)


function Work(props){
  const work = useRef()

  useGSAP(()=>{
    gsap.from(work.current , {
      xPercent : "-200",
      duration: 2,
      scrollTrigger:{
        trigger: work.current,
        start: "top 100%"
      }
    })
  })

  return(
    <>
      <div className="h-30 sm:h-60 md:h-70 relative max-w-screen bg-black overflow-hidden">

        <div className="absolute inset-0 flex justify-center items-center">
          <h1
            className=" whitespace-nowrap
              text-[40px] sm:text-[80px] md:text-[110px]
              text-black z-20 word
              text-center
              px-4
            "
          >
            {props.text}
          </h1>
        </div>

        <div
          ref={work}
          className="
            inset-0 absolute
            w-screen
            bg-white
            border-red-500 border-b-4
          "
        ></div>

      </div>
    </>
  )
}

export default Work
