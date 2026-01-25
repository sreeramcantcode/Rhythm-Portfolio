import { Link } from "react-router-dom"
import logo from "./assets/saint.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

function Footer(){

const { contextSafe } = useGSAP()

const handle = contextSafe((e) => {
    e.preventDefault()
    gsap.to(window, {
        duration: 1,
        scrollTo: "#footer",
        ease: "power2.out",
    })
})

return(
<>
<div
    id="footer"
    className="
    text-gray-300 bg-linear-to-l from-black to-red-950
     px-5
    flex flex-col lg:flex-row
    gap-10 lg:gap-0
    overflow-hidden
    "
>
    <div className="relative lg:pb-10">
        <img
            className="opacity-20 w-50 sm:w-56 lg:w-72 lg:scale-135"
            src={logo}
            alt=""
        />

        <div className="
            flex flex-wrap sm:flex-nowrap
            justify-start items-end
            opacity-70
            translate-x-0 sm:translate-x-6
            gap-3 sm:gap-5
            mt-4 sm:mt-0
        ">
            <h1 className="text-xs sm:text-sm">Privacy Policy</h1>
            <h1 className="text-xs sm:text-sm">Legal</h1>
            <h1 className="text-xs sm:text-sm">Cookies Policy</h1>
        </div>
    </div>

    <div className="flex h-fit text-base sm:text-lg">
        <div className="w-fit relative p-4 sm:p-8 translate-x-0 sm:translate-x-7 ml-0 sm:ml-5">
            <h1 className="text-gray-300 opacity-60">Contact Me</h1>

            <div className="text-gray-300 mt-4 sm:mt-5 text-lg sm:text-2xl break-all">
                <h1>
                    E-mail :
                    <span>
                        <a href="mailto:rhymexmedia@gmail.com" target="_blank">
                            rhymexmedia@gmail.com
                        </a>
                    </span>
                </h1>
            </div>

            <div className="text-gray-300 text-sm sm:text-lg mt-2">
                <h1>
                    Mobile :
                    <span className="text-white"> +91 6002180752</span>
                </h1>
            </div>
        </div>
    </div>

    <div className="
        navi flex sm:flex-row
        justify-evenly
        max-w-2xl w-full
        ml-0 lg:ml-9
        px-2 sm:px-6
        mt-6 lg:mt-3
        gap-10 sm:gap-16
    ">
        <div className="lg:pt-4 pb-20">
            <h1 className="text-base sm:text-lg text-gray-300 w-40">
                Navigation
            </h1>

            <div className="text-lg sm:text-xl ">
                <ul className="relative top-3 sm:top-5 space-y-2 sm:space-y-3">
                    <li><Link to="/" className="hover:text-red-500">Home</Link></li>
                    <li><Link to="/All" className="hover:text-red-500">Works</Link></li>
                    <li><Link to="/About" className="hover:text-red-500">About</Link></li>
                    <li><Link to="/" onClick={handle} className="hover:text-red-500 ">Contact</Link></li>
                </ul>
            </div>
        </div>

        <div className="text-lg sm:text-xl lg:pt-4">
            <h1 className="text-base sm:text-lg text-gray-300">Socials</h1>
            <ul className="relative space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                <li><a href="#" className="hover:text-red-500">Linkedin</a></li>
                <li><a href="https://www.behance.net/rhythmnandi1" target="_blank" className="hover:text-red-500">Behance</a></li>
                <li><a href="https://www.instagram.com/sreeram_xo?igsh=czAwcWIzd3diaWd2" target="_blank" className="hover:text-red-500">Instagram</a></li>
            </ul>
        </div>
    </div>
</div>
</>
)
}

export default Footer
