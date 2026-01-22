import { useGSAP } from "@gsap/react"
import im from "./assets/rhythm.webp"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import Footer from "./Footer";
import Work from "./Work";
import resume from "./assets/Rhythm_Nandi_Graphic_Designer_Resume.pdf"
gsap.registerPlugin(ScrollTrigger)
function About (){
   const img = useRef()
   
    
    const designer = useRef()
    const para1 = useRef()
    const para2 = useRef()
    const para3 = useRef()
    const para4 = useRef()
   
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

      gsap.from([para1.current , para2.current , para3.current , para4.current] , {
         
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
        <div className="min-h-[140vh] max-w-screen bg-black text-white relative pt-35 flex justify-center ">
         
         <div  className="w-full max-w-7xl rounded-2xl h-[85vh] bg-linear-to-r from-black to-red-500/30 relative">

            <div className="absolute w-[415px] top-0  ">
               <img ref={img} src={im} alt="" />
            </div>
           
            <div className="flex justify-end p-16 ml-9 w-7xl lamb relative">
            <h1 ref={textref} className="text-7xl mr-12 whitespace-nowrap" >Hi , I'm Rhythm Nandi</h1>
            <div className="border border-white absolute h-[410px] opacity-40 mt-23 left-1/3 ml-3">

            </div>
            </div>
            <div className="px-5 relative bottom-5">
            <div ref={designer} className="flex justify-end w-6xl ">
               <div className="w-2xl relative">
            <p className="text-md ">A 22-year-old designer focused on crafting visual experiences that actually mean something. I work at the intersection of strategy and aesthetics, turning ideas into design systems that leave a lasting impression.</p>
            </div>

            
         </div>
         <div className="flex justify-end w-5xl ml-7 mt-10">
               <ul className="list-disc text-md" >
            
                  <li ref={para1}>Worked with established brands like Hindustan Unilever Limited and K9 School</li>
                   <li ref={para2}>Strong focus on concept-driven design, not just visuals for the sake of it</li>
                    <li ref={para3}>Designs with story, structure, and purpose</li>
                     <li ref={para4}>Constantly pushing boundaries to create work that stands out and performs</li>
                  
               </ul>

               
            </div>
            </div>
            <div className="absolute left-1/2 bottom-1/9 ">
                    <div className="">
                                            <button
                      onClick={()=> window.open(resume, "_blank")}
                     className=" rounded-lg h-20 text-4xl hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-sm text-center hover:scale-105  "
                   >
                      View Resume
                   </button>
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