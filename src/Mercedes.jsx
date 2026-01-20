
import img from "./assets/mercedes.png"
import img1 from "./assets/merc1.jpg"
import img2 from "./assets/merc2.jpg"
import img3 from "./assets/merc3.jpg"
import img4 from "./assets/merc4.jpg"
import img5 from "./assets/merc5.jpg"
import img6 from "./assets/merc6.jpg"
import img7 from "./assets/merc7.jpg"
import img8 from "./assets/merc8.jpg"
import img9 from "./assets/merc9.jpg"
import img10 from "./assets/merc10.jpg"

import Work from "./Work"
import Footer from "./Footer"
import FolderPopup from "./FolderPopup"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef , useState } from "react"

function Mercedes (){

    const [open, setOpen] = useState(false)
          
              const pageAImages = [img1,img2,img3,img4,img5,img6,img7 ,img9,img10 ]

    const mainimg = useRef()
    const maintext = useRef()
    const maintext2 = useRef()
    const logo = useRef()

    useGSAP(()=>{
         gsap.from(logo.current , {
            opacity:0,
            duration:2
        }),


        gsap.from([maintext.current , maintext2.current] , {
         
         xPercent:"-20",
         opacity:0,
         filter:"blur(20px)",
         duration:1,
         
        
        
      }),

      

      gsap.from(mainimg.current , {
        opacity:0,
        duration:1,
        y:20,
        filter:"blur(20px)",
        
      })
    })

    return(
        <>
        <div className="bg-black min-h-screen  ">
            <div className="w-50  flex ml-3  justify-center">
                  <div className=" w-10 z-20 relative top-2 bg-black h-2 mt-20">
            
                    </div>
                    </div>
            
                    <div className=" flex gap-3  ">
                    
                    <div ref={logo}  className="border-r z-10 border-white w-30 relative    ">
                        <img src={img} alt="" className="absolute inset-0 w-30" /> </div>
                        
                        <div className="text-white text-xl  items-center flex px-5 pt-5 ">
                        <ul className="space-y-4">
                            <li ref={maintext}>Role : <span className="opacity-60"> Automotive Design Researcher & Visual Artist</span></li>
                            <li ref={maintext2}>Project : <span className="opacity-60">Academic Magazine-style Automotive feature</span></li>
                        </ul>
                    </div>
                    </div>
                    
                    
                    

                    <div ref={mainimg} className="flex justify-evenly relative gap-3 pt-2 mb-40">
                        <div className="w-30 flex flex-col gap-3 pt-5 ml-5">
                            <div>
                                <img src={img2} alt="" />
                            </div>

                            <div>
                                <img src={img8} alt="" />
                            </div>

                            <div>
                                <img src={img1} alt="" />
                            </div>
                        </div>

                        <div className="pt-5 w-sm">
                            <img src={img3} alt="" />
                        </div>
                          
                          <div className="text-white text-center p-10 text-xl h-fit mr-4 absolute top-1/5">
                            <h3 className="w-96">
                                Developed a magazine-style editorial layout centered on the Mercedes 190E Evo II, highlighting its heritage and engineering legacy. Created original illustrations, custom graphics, and layout compositions to present the car in a collector-style feature format.
                                
                            </h3>
                           
                             <div className="flex justify-center pb-60 pt-15">
       <button
  onClick={() => setOpen(true)}
  className=" rounded-lg h-21 text-4xl hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-sm text-center hover:scale-105"
>
  Explore More
</button>
</div>

       
        {open && (
  <FolderPopup
    images={pageAImages}
    onClose={() => setOpen(false)}></FolderPopup>
  
)}
                        </div>
                        

                        <div className="flex justify-end w-5xl gap-3  mr-5">
                            <div className=" w-sm pt-3">
                            <img src={img4} alt="" />
                        </div>
                        <div className="w-30 flex flex-col gap-3">
                            <div>
                                <img src={img5} alt="" />
                            </div>

                            <div>
                                <img src={img6} alt="" />
                            </div>

                            <div>
                                <img src={img7} alt="" />
                            </div>
                        </div>

                        
                    </div>
                    </div>

                    <Work text="Let's Connect"></Work>
                    <Footer></Footer>

                    
        </div>
        </>
    )
}
export default Mercedes