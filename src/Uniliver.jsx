import Work from "./Work"    
import image1 from "./img1.jpg"
import image2 from "./img2.jpg"
import image3 from "./img3.jpg"

import Foldercard from "./Foldercard"


function Uniliver(){
    return(
        <>
        <div className="min-h-screen bg-black">
            
            
        


            <div className="pt-25">
                <Work text="Uniliver" />
                
                <div className="pt-30 flex">
                    <div className="w-full relative border-white mb-10 flex justify-center">
                    <img src={image1} className="w-2xl" alt="" />
                    </div>

                    
                
                </div>
                <div className="min-w-screen flex justify-center">
                    <div className="w-50 border relative border-white ">
                    <img src={image2} className="w-fit" alt="" />
                    </div>
                <div className="text-white border w-2xl text-center">
                        <h1 >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, harum magnam! Commodi laboriosam pariatur tempore nulla eius cumque quam quae vero. Est, repellat possimus. Nobis dolore officiis nesciunt incidunt perferendis.</h1>
                    </div>

                <div className="w-70 border relative border-white ">
                    <img src={image3} className="w-fit inset-0" alt="" />
                    </div>
                   </div> 




            </div>
            <div className="flex justify-center ">
            <Foldercard></Foldercard>
            </div>

        </div>
        </>
    )
}

export default Uniliver