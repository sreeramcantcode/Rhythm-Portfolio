import Work from "./Work"
import Footer from "./Footer"

import sketch1 from "./assets/sketchtile.jpg"
import sketch2 from "./assets/sketchtile2.jpg"
import auto1 from "./assets/auto1.jpg"
import auto2 from "./assets/auto2.jpg"
import auto3 from "./assets/auto3.jpg"
import auto4 from "./assets/auto4.jpg"
import auto5 from "./assets/auto5.jpg"
import auto6 from "./assets/auto6.jpg"
import auto7 from "./assets/auto7.jpg"
import auto8 from "./assets/auto8.jpg"
import auto9 from "./assets/auto9.jpg"

import p1 from "./assets/p1.jpg"
import p2 from "./assets/p2.jpg"
import p3 from "./assets/p3.jpg"
import p4 from "./assets/p4.jpg"
import p5 from "./assets/p5.jpg"
import p6 from "./assets/p6.jpg"
import p7 from "./assets/p7.jpg"
import p8 from "./assets/p8.jpg"
import p9 from "./assets/p9.jpg"



import FolderPopup from "./FolderPopup"
import { useState } from "react"

function Sketches (){

     const [open, setOpen] = useState(false)
     const [open1, setOpen1] = useState(false)
              
                  const pageAImages = [auto3 ,  auto4, auto9 ,auto6 , auto7 , auto8 ,auto5 , auto1 , auto2 ,  ]
                  const pageAImages2 = [p5,p4,p6,p1,p2,p3,p7,p8,p9]

    return(
    <>
    <div className="min-h-screen bg-black pt-25">
        <div className="text-white pt-2 lg:text-5xl text-4xl  lg:ml-7 ml-3 lg:w-96 w-48 justify-center  flex u">
        <h1 className="border-l lg:px-6 px-3 h-15 py-2 ">Sketches</h1>
        </div>

        {/*mobile*/}
        <div className="max-w-7xl grid sm:grid-cols-1 md:grid-cols-1 lg:hidden
    gap-x-6 md:gap-x-29
    gap-y-6 sm:gap-y-9
    ml-0 sm:ml-12
    justify-items-center md:justify-items-center sm:justify-items-end
    mt-8 sm:mt-12
    pb-20
  "
>

                <div onClick={() => setOpen1(true)} className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">

                  <img
                  src={sketch1}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  />
</div>
              <div onClick={() => setOpen(true)} className="w-full sm:w-2xl h-64 sm:h-100 relative group cursor-pointer">
                
                  <img
                  src={sketch2}
    className="w-full h-full object-cover group-hover:opacity-20 duration-500"
    alt=""
  />
</div>
  {open && (
  <FolderPopup
    images={pageAImages}
    onClose={() => setOpen(false)}>

    </FolderPopup>
  
)}

  {open1 && (
  <FolderPopup
    images={pageAImages2}
    onClose={() => setOpen1(false)}>

    </FolderPopup>
  
)}
</div>

    <div className="hidden lg:block">
    <div className="flex justify-center gap-5 h-[85vh] p-5 border-white ">
         <div onClick={() => setOpen1(true)}    className=" w-165 h-100 p-1  relative group cursor-pointer " >
            <h1 className="inset-0 absolute text-6xl text-white z-10 top-1/2 flex justify-center opacity-0 group-hover:opacity-100 duration-1000 u">PORTRAITS</h1>
            <img src={sketch1} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" />
            </div>



         <div onClick={() => setOpen(true)} className=" w-165 h-100 p-1  relative group cursor-pointer " >
            <h1 className="inset-0 absolute text-6xl text-white z-10 top-1/2 flex justify-center opacity-0 group-hover:opacity-100 duration-1000 u">AUTOMOBILE</h1>
            <img src={sketch2} className=" object-cover cursor-pointer relative group-hover:opacity-20 duration-500 " alt="" />
            </div>
       
    {open && (
  <FolderPopup
    images={pageAImages}
    onClose={() => setOpen(false)}>

    </FolderPopup>
  
)}

  {open1 && (
  <FolderPopup
    images={pageAImages2}
    onClose={() => setOpen1(false)}>

    </FolderPopup>
  
)}
        
    </div>
    </div>

    <Work text="Let's Connect"></Work>
    <Footer></Footer>
    </div>
    </>
    
)


}

export default Sketches