import logo from "./assets/saint.png"


function Footer(){



    return(
        <>
         <div className="min-h-70  text-gray-300 bg-linear-to-l footer  from-black to-red-950 py-10  px-5 flex overflow-hidden">
            

            <div className=" relative">
                <img className="w-96 opacity-30 transform scale-130 " src={logo} alt="" />

            </div>

            <div className="text-lg">
                 <div className=" relative top-96 w-fit right-75 h-fit flex whitespace-nowrap gap-5 ">
                    
                <h1 className="text-sm ">Privacy Policy</h1>
                 <h1 className="text-sm ">Legal</h1>
                 <h1 className="text-sm ">Cookies Policy</h1>
            </div>

              <div className="w-fit relative left-20 ">
                <h1 className="text-gray-300">Contact Me </h1>

                <div className="text-lg text-gray-300 mt-9">
                <h1>E-mail : <span className="text-white"><a href="#">rhythm@gmail.com</a></span></h1>
            </div>
            <div className="Mobile text-gray-300 text-lg mt-2">
                <h1>Mobile : <span className="text-white">+91 947902988</span></h1>
            </div>
            </div>
            </div>
             
             

            <div className="navi w-fit h-fit relative left-40 top-5 ">
                <h1 className="text-lg text-gray-300">Navigation</h1>
                <div className="text-xl mt-5">
                <ul className="relative top-5 space-y-3">
                   <li> <a href="" className="hover:text-red-500">Home</a></li>
                   <li> <a href="" className="hover:text-red-500 ">Works</a></li>
                   <li> <a href="" className="hover:text-red-500 ">About</a></li>
                   <li> <a href="" className="hover:text-red-500 ">Contact</a></li>
                    
                </ul>
                </div>
            </div>

            

            <h1 className=" text-xl w-fit h-fit relative right-40 top-96">© 2025 Rhythm Nandi. All rights reserved.</h1>

            <div className="relative top-5 text-xl">
                <h1 className="text-lg text-gray-300">Socials</h1>
                <ul className="relative top-9 space-y-3  ">
                    <li> <a href="#" className="hover:text-red-500">Linkedin</a></li>
                   <li> <a href="" className="hover:text-red-500 ">Behance</a></li>
                   <li> <a href="" className="hover:text-red-500 ">Instagram</a></li>
                   <li> <a href="" className="hover:text-red-500 ">X</a></li>
                    
                </ul>
            </div>
            
            
         </div>
         
        </>
    )

}
export default Footer 