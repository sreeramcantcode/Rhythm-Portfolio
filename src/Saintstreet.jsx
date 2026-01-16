
import saintpdf from "./assets/SaintFlairecatalogue.pdf"


function Saintstreet(){
    return(
        <>
         <div className="min-h-screen bg-black">
            <iframe 
  src={saintpdf}
  width="100%" 
  height="600px"> </iframe>

         </div>
        </>
    )
}
export default Saintstreet