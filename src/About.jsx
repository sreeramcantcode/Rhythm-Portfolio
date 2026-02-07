import { useGSAP } from "@gsap/react"
import im from "./assets/rhythm.webp"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import Footer from "./Footer";
import Work from "./Work";

gsap.registerPlugin(ScrollTrigger)
function About (){
   const img = useRef()
   
    const resume = "/Rhythmresume.pdf";

    const designer = useRef()
    const para1 = useRef()
    const para2 = useRef()
    const para3 = useRef()
    const para4 = useRef()
   const para5 = useRef()
   const para6 = useRef()
   const para7 = useRef()
   
    const textref = useRef(null)
  
   
   useGSAP(()=>{

      

    
      gsap.from([img.current] , {
         
         y:10,
         duration:2,
         stagger:0.5,
         
      })
      
      
      gsap.from([designer.current] , {
         
         y:20,
         opacity:0,
         filter:"blur(20px)",
         duration:1,
         stagger:0.5,
         delay:0.5

      })
      

       gsap.from([textref.current] , {
         
         xPercent:"-5",
         opacity:0,
         filter:"blur(20px)",
         duration:1,
         stagger:0.5,
         
      }) , 

      gsap.from([para1.current , para2.current , para3.current , para4.current , para5.current , para6.current , para7.current] , {
         
         xPercent:"-5",
         opacity:0,
         filter:"blur(20px)",
         duration:1,
         delay:1,
         stagger:0.5,
         
      })



     
      
    
   
   })

    return(
        <>
        <div className="min-h-screen w-full bg-black text-white px-4 lg:px-0 lg:pb-40 flex justify-center pt-24 pb-20">
  <div className="w-full max-w-7xl bg-linear-to-r from-black to-red-500/30 rounded-2xl overflow-hidden">

    
    <div className="flex flex-col lg:flex-row relative">

     
      <div className="w-full lg:w-[40%]">
        <img
          ref={img}
          src={im}
          alt="Rhythm Nandi"
          className="w-full h-auto object-cover"
        />
      </div>

      
      <div className="w-full lg:w-[60%] grid-cols-1 grid px-6 lg:px-16 py-10 relative">

        <h1
          ref={textref}
          className="text-4xl lg:block hidden lg:text-6xl u mb-6"
        >
          Hi, I’m Rhythm Nandi
        </h1>

         <h1
          ref={textref}
          className="text-4xl lg:text-6xl u mb-6 lg:hidden no-nowrap-mobile"
        >
          Hi, <br /><span className="whitespace-nowrap no-nowrap-mobile ">I’m Rhythm Nandi</span>
        </h1>

        <p
          ref={designer}
          className="text-sm lg:text-md max-w-xl mb-6 opacity-90"
        >
          A 22-year-old designer focused on crafting visual experiences that
          actually mean something. I work at the intersection of strategy and
          aesthetics, turning ideas into design systems that leave a lasting
          impression.
        </p>

        {/* BULLETS */}
        <ul className="list-disc pl-5 space-y-2 text-sm lg:text-md mb-6">
          <li ref={para1}>
            Worked with established brands like Hindustan Unilever Limited and K9 School
          </li>
          <li ref={para2}>
            Strong focus on concept-driven design
          </li>
          <li ref={para3}>
            Designs with story, structure, and purpose
          </li>
          <li ref={para4}>
            Constantly pushing boundaries to create work that performs
          </li>
        </ul>

        
        <ul className="space-y-2 text-sm lg:text-md opacity-90 mb-8">
          <li ref={para5}>★ 5th year Fine Arts Qualified</li>
          <li ref={para6}>★ Professionally trained under BRDS Guwahati</li>
          <li ref={para7}>★ 4+ years of experience</li>
        </ul>
         
         <div className="lg:block hidden">
        <button
          onClick={() => window.open(resume, "_blank")}
          className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-900 hover:text-black transition hover:scale-105 mb-10 lg:mb-0 cursor-pointer"
        >
          View Resume
        </button>
        </div>


        <div className="flex lg:hidden justify-center pt-3">
        <button
          onClick={() => window.open(resume, "_blank")}
          className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-900 hover:text-black transition hover:scale-105 mb-10 lg:mb-0 cursor-pointer"
        >
          View Resume
        </button>
        </div>
      </div>
    </div>
  </div>
</div>
    
         
         
      
        <Work text="Let's Connect" />
        <Footer />

        
        </>
    )
}
export default About