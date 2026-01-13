import Foldercard from "./Foldercard"
import k9 from "./assets/k9.png"
import Work from "./Work"
import Footer from "./Footer"

import k1 from "./assets/K9img1.jpg"
import k2 from "./assets/K9img2.jpg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"


function Knine(){

    const maintext = useRef()
    const maintext2 = useRef()
    const logo = useRef()
    const mainimg = useRef()
    const mainimg2 = useRef()

    useGSAP(()=>{

        gsap.from(logo.current , {
            opacity:0,
            y:20,
            duration:1
        }),


      gsap.from([maintext.current , maintext2.current] , {
         
         y:20,
         opacity:0,
         filter:"blur(20px)",
         duration:1,
         delay:1,
         stagger:0.5
        
        
      }), 

       gsap.from(mainimg.current , {
        opacity:0,
        duration:1,
        y:20,
        filter:"blur(20px)",
        scrollTrigger:{
            trigger:mainimg.current,
            start:"top 50%"
        }
      })

      gsap.from(mainimg2.current , {
        opacity:0,
        duration:1,
        x:20,
        filter:"blur(20px)",
        scrollTrigger:{
            trigger:mainimg2.current,
            start:"top 70%"
        }
      })
    })
   

    return(
        <>
        <div className="min-h-screen bg-black pt-25">

           <div className=" flex gap-3  ">
                   
                   <div ref={logo} className="border-r border-white w-70">
                       <img src={k9} alt="" />
                   </div>
           
                   <div  className="text-white text-3xl u items-center flex px-5 ">
                       <ul>
                           <li ref={maintext}>Role : Graphic designer (Internship)</li> <br />
                           <li ref={maintext2}>Project : Visual Design for Dog training & Security Program</li>
                       </ul>
                   </div>

                   
                   </div>
                   <div className="flex justify-center">
                   <div className="max-w-6xl pt-15 relative ">
                    <div ref={mainimg}>
                    <img src={k1} alt="" />
                    </div>
                     <div ref={mainimg2} className="flex border justify-evenly gap-45">
                    <div>
                        <img src={k2} className="w-md absolute bottom-0 left-0 flex " alt="" />
                    </div>

                    <div className="text-white w-xl text-2xl p-6 u  leading-relaxed  ">
                        <h3>
Over a 3-month internship, I worked closely with K9 School India to design brochures, posters, and digital creatives for their training programs and premium dog services. The visuals were crafted to appeal to both youth trainers and high-end clients, maintaining a balance of elegance and clarity while reflecting the brand's reputation for excellence in canine behavior and security training.
</h3>
                    </div>
                   </div>
                   </div>
                   </div>

              <div className="flex justify-center pb-30">
             <Foldercard></Foldercard>
             </div>
               <Work text="Let's Connect"></Work>   
               <Footer></Footer>

            </div>
        
        </>
    )
 }

 export default Knine
