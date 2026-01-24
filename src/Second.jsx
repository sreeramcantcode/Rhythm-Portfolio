import { useGSAP } from "@gsap/react"
import k9 from "./assets/k9p.jpg"
import u from "./assets/uniliver.jpg"
import sf from "./assets/SF.jpg"
import sl from "./assets/silentart.jpg"

import { Link } from "react-router-dom"

import Uniliver from "./Uniliver"

import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect , useRef } from "react"


gsap.registerPlugin(ScrollTrigger)

function Second (){
    
  const textRef = useRef(null);
  const scrollref = useRef();
 
  

  useGSAP(()=>{

    gsap.from(scrollref.current , {
      x:"-200%",
      
      duration:2,

      scrollTrigger:{
        trigger:scrollref.current,
        start:"top 100%",
        end :"top 40%",
        scrub:true
      }
      
    }, 
    
  
      )
  })

  useEffect(()=>{
    gsap.fromTo(
      textRef.current,
      { x: -200, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        duration:1.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 100%",
          end: "top 40%",
          scrub: true,
          
        },
      }
    );

    

    

    
  }, []);


    return(
        <>
          <div className=" bg-black text-center z-20 pt-5 lg:pt-20">
          
          <div className="relative h-30 lg:h-70 overflow-hidden  ">

  
  <div className="absolute inset-0 flex justify-center items-center z-20  ">
    <h1 className="text-black word font-medium lg:text-[200px] text-[43px] whitespace-nowrap ">
      <span className="line-through decoration-black decoration-4">
        Words
      </span>
       <span> . </span>Action
    </h1>
  </div>

  
  <div
    ref={scrollref}
    className="absolute inset-0 bg-white z-10 "
  />

</div>

          
          <h1  ref={textRef} className="text-white lg:text-[200px] text-[50px] pt-4 lg:pt-0 word">Highlights</h1>

           <div className="max-w-7xl grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:max-w-screen md:justify-items-center  lg:justify-items-center
              gap-x-6 lg:gap-x-0 md:gap-x-29
              lg:px-13
              gap-y-6 lg:gap-y-4 sm:gap-y-9
              ml-0 sm:ml-12
              justify-items-center sm:justify-items-end
              mt-8 sm:mt-12
              pb-20
            "
          >
          
                          <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
                          <Link to="/uniliver"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                            UNILEVER</h1>
                            <img
                            src={u}
              className="w-full h-full object-cover group-hover:opacity-20 duration-500"
              alt=""
            /></Link>
          </div>
                        <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
                          <Link to="/k9"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                            K9 SCHOOL</h1>
                            <img
                            src={k9}
              className="w-full h-full object-cover group-hover:opacity-20 duration-500"
              alt=""
            /></Link>
          </div>
                          <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
                          <Link to="/saint"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                            SAINTFLAIRE</h1>
                            <img
                            src={sf}
              className="w-full h-full object-cover group-hover:opacity-20 duration-500"
              alt=""
            /> </Link> 
          </div>
                                <div className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
                       <Link to="/silent"><h1 className="absolute inset-0 flex items-center justify-center text-6xl text-white z-10 opacity-0 group-hover:opacity-100 duration-700 u">
                            SILENT ARTERY</h1>
                            <img
                            src={sl}
              className="w-full h-full object-cover group-hover:opacity-20 duration-500"
              alt=""
            /></Link>
          </div>     

          </div>
          
       
          

      </div>

            
          
         

        
          
          


          
          
        </>
    )

   

}
export default Second