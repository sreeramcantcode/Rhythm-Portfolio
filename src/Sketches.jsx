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
import p10 from "./assets/p10.jpg"






import FolderPopup from "./FolderPopup"
import { useState } from "react"

function Sketches (){

     const [open, setOpen] = useState(false)
     const [open1, setOpen1] = useState(false)
              
                  const pageAImages = [auto1 , auto2 , auto3 ,  auto4 , auto5 , auto6 , auto7 , auto8 , auto9 ]
                  const pageAImages2 = [p1,p2,p3,p4,p5,p6,p7,p8,p9]

    return(
    <>
    <div className="min-h-screen bg-black pt-25">
        <div className="text-white pt-2 text-5xl ml-7 w-96 justify-center  flex u">
        <h1 className="border-l px-6 h-15 py-2 ">Sketches</h1>
        </div>


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
    onClose={() => setOpen(false)}></FolderPopup>
  
)}

  {open1 && (
  <FolderPopup
    images={pageAImages2}
    onClose={() => setOpen1(false)}></FolderPopup>
  
)}
        
    </div>

    <Work text="Let's Connect"></Work>
    <Footer></Footer>
    </div>
    </>
    
)


}
export default Sketches