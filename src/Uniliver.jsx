import Work from "./Work"    
import image1 from "./img1.jpg"
import image2 from "./img2.jpg"
import image3 from "./img3.jpg"
import image7 from "./assets/uimg3.jpg"
import image4 from "./assets/uimg4.jpg"
import image5 from "./assets/uimg5.jpg"
import image6 from "./assets/uimg6.jpg"
import image8 from "./assets/uimg7.jpg"
import image9 from "./assets/uimg8.jpg"
import i from "./assets/Uni.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"

import FolderPopup from "./FolderPopup"


import Footer from "./Footer"


function Uniliver(){
    const [open, setOpen] = useState(false)

    const pageAImages = [image1, image2 , image3, image4 , image6 , image7 , image8 , image9]

    const maintext = useRef()
    const maintext2 = useRef()
    const logo = useRef()
     const mainimg = useRef()
      const mainimg1 = useRef()
    

    useGSAP(()=>{

        gsap.from(logo.current , {
            opacity:0,
            x:20,
            duration:1
        }),


      gsap.from([maintext.current , maintext2.current] , {
         
         x:50,
         opacity:0,
         duration:1,
         filter:"blur(20px)",
         
        
        
      }),

      gsap.from(mainimg.current , {
        opacity:0,
        duration:1,
        y:20,
        filter:"blur(20px)",
        
        
      })

       gsap.from(mainimg1.current , {
        opacity:0,
        duration:1,
        y:20,
        filter:"blur(20px)",
        
        
      })

    })

    return(
        <>
        <div className="min-h-screen bg-black ">

             

            

            <div className="w-50  flex ml-3 pt-25  justify-center">
                          <div className=" w-10 z-20 relative top-2 bg-black h-2">
                    
                            </div>
                            </div>
                    
                            <div className=" flex gap-3  ">
                            
                            <div ref={logo} className="border-r border-white w-30 lg:h-30 h-24  relative    ">
                                <img src={i} alt="" className="translate lg:scale-120" /> </div>
                                
                                <div className="text-white lg:text-xl text-[12px] items-center flex px-5">
                                <ul className="space-y-4">
                                    <li  ref={maintext}>Role : <span className="opacity-60">Graphic Designer (Freelance)</span></li>
                                    <li ref={maintext2} >Project : <span className="opacity-60">Annual Branch Conference
                                        </span></li>
                                </ul>
                            </div>
                            </div>

                            {/*TAB*/}

             <div ref={mainimg} className="hidden md:flex lg:hidden  justify-start w-screen gap-6  ">

                    
                <div  className="grid grid-cols-2 gap-2 relative mb-20 w-3xl lg:px-18 md:p-4 mt-7">
 <div className=" flex-col flex gap-2 ">
                        <img src={image2} alt="" />
                        <div className="">
                        <img src={image6} alt="" />
                    </div>
                    </div>
                     <div className="flex flex-col gap-2">
                    <div className="">
                        <img src={image3} alt="" />
                    </div>

                    <div className="">
                        <img src={image4} alt="" />
                    </div>

                    <div className="">
                        <img src={image1} alt="" />
                    </div>
                    </div>


                    

                    
                     
                     
                    

                   
                    
                    
                    </div>

                   <div className="text-white lg:w-2xl md:w-80 text-center relative text-md p-4 mt-7  ">
                        <h3>
                        Selected by Hindustan Unilever to design the official logo, T-shirt, and cap for Team Northeast at the Eastern India branch conference. The designs reflected the team’s identity and were well received for their visual consistency, becoming key elements of the event’s branding.
                        </h3>
                      <div className="flex justify-center pb-60 pt-15">
       <button
  onClick={() => setOpen(true)}
  className=" rounded-lg h-20 text-4xl hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-sm text-center hover:scale-105  "
>
  View More
</button>
</div>        
                       

                    </div>
                    

               
                     

                </div>

             {/*TAB*/}

                            
                            {/* Mobile*/}
                            <div className="md:hidden lg:hidden w-screen p-4   ">

                    
                <div ref={mainimg1}  className="pt-6 grid-cols-2 gap-2 grid">

                    <div className=" flex-col flex gap-2">
                        <img src={image2} alt="" />
                        <div className="">
                        <img src={image6} alt="" />
                    </div>
                    </div>

                    <div className="flex flex-col gap-2">
                    <div className="">
                        <img src={image3} alt="" />
                    </div>

                    <div className="">
                        <img src={image4} alt="" />
                    </div>

                    <div className="">
                        <img src={image1} alt="" />
                    </div>
                    </div>

                    

                </div>
                <h3 className="text-white text-[11px] leading-relaxed opacity-70 p-2 pt-7 text-center md:w-lg md:text-2xl md:p-5   ">
                        Selected by Hindustan Unilever to design the official logo, T-shirt, and cap for Team Northeast at the Eastern India branch conference. The designs reflected the team’s identity and were well received for their visual consistency, becoming key elements of the event’s branding.
                        </h3>

               {/*mobile*/}
          <div className="lg:hidden flex justify-center mt-10  -ml-3 ">


          <button
  onClick={() => setOpen(true)}
  className=" lg:hidden md:hidden rounded-lg lg:h-20 lg:text-4xl text-lg mb-15  hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white lg:w-sm w-30 p-2 hover:scale-105"
>
  View More
</button></div>

 {/*mobile*/}



                     
                </div>

                {/* Mobile*/}



                             {/*PC*/}

                 <div ref={mainimg} className="hidden lg:flex justify-start w-screen gap-6  ">

                    
                <div  className="grid grid-cols-2 relative mb-20  w-3xl px-18  mt-7">

                    <div className="w-80">
                        <img src={image2} alt="" />
                    </div>

                    
                     
                     
                    

                     <div className="w-96 px-3  ml-3">
                        <img src={image5} alt=""  />
                    </div>
                     
                     <div className="w-96 absolute right-3 top-1/4 p-3 py-11 ">
                        <img src={image4} alt="" className="ml-6 mt-2" />
                    </div>
                    
                    </div>

                   <div className="text-white w-2xl text-center relative text-md p-4 mt-7  ">
                        <h3>
                        Selected by Hindustan Unilever to design the official logo, T-shirt, and cap for Team Northeast at the Eastern India branch conference. The designs reflected the team’s identity and were well received for their visual consistency, becoming key elements of the event’s branding.
                        </h3>
                      <div className="flex justify-center pb-60 pt-15">
       <button
  onClick={() => setOpen(true)}
  className=" rounded-lg h-20 text-4xl hover:bg-red-900 button hover:text-black duration-200 bg-white font-semibold text-black cursor-pointer border-white w-sm text-center hover:scale-105  "
>
  View More
</button>
</div>        
                       

                    </div>
                    

               
                     

                </div>
                 {/*mobile*/}

        

               
            {open && (
  <FolderPopup
    images={pageAImages}
    onClose={() => setOpen(false)}
  />
)}


             <Work text="Let's Connect"></Work>
             <Footer></Footer>

        </div>
        </>
    )
}

export default Uniliver