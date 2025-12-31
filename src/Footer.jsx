import logo from "./assets/saint.png"


function Footer(){



    return(
        <>
         <div id="footer" className="text-gray-300 bg-linear-to-l  from-black to-red-950 py-10  px-5 flex overflow-hidden">
            <div className="relative">
                <img className="opacity-20 w-72 scale-135" src={logo} alt="" />
                <div className="  flex justify-start opacity-70 items-end translate-x-6 gap-5 ">
                    
                <h1 className="text-sm ">Privacy Policy </h1>
                 <h1 className="text-sm ">Legal</h1>
                 <h1 className="text-sm ">Cookies Policy</h1>
              </div>
              
            
            
                </div>
                

            <div className=" flex h-fit text-lg">
                 

              <div className="w-fit relative p-8 translate-x-7 ml-5 ">
                <h1 className="text-gray-300 opacity-60">Contact Me </h1>

                <div className=" text-gray-300 mt-5 text-2xl">
                <h1>E-mail : <span  className=""><a href="#">rhythm@gmail.com</a></span></h1>
            </div>
            <div className="Mobile text-gray-300 text-lg mt-2">
                <h1>Mobile : <span className="text-white">+91 947902988</span></h1>
            </div>
            </div>
            
            </div>
             
             

            <div className="navi flex justify-evenly max-w-2xl w-full ml-9 px-6 mt-3">
                <div className="">
                <h1 className="text-lg text-gray-300 w-40 ">Navigation</h1>
                <div className="text-xl">
                <ul className="relative top-5 space-y-3">
                   <li> <a href="" className="hover:text-red-500">Home</a></li>
                   <li> <a href="" className="hover:text-red-500 ">Works</a></li>
                   <li> <a href="" className="hover:text-red-500 ">About</a></li>
                   <li> <a href="" className="hover:text-red-500 ">Contact</a></li>
                    
                </ul>
                </div>
                </div>
                
                

                 
            <div className=" text-xl">
                <h1 className="text-lg text-gray-300">Socials</h1>
                <ul className="relative space-y-3 mt-4  ">
                    <li> <a href="#" className="hover:text-red-500">Linkedin</a></li>
                   <li> <a href="" className="hover:text-red-500 ">Behance</a></li>
                   <li> <a href="" className="hover:text-red-500 ">Instagram</a></li>
                   <li> <a href="" className="hover:text-red-500 ">X</a></li>
                    
                </ul>
            </div>
            
            </div>
            

            
        
           

            
            
         </div>
         
        </>
    )

}
export default Footer 