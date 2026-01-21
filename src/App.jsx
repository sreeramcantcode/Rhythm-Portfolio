import { BrowserRouter, Routes, Route } from "react-router-dom"


import Sample from "./navbar"
import Work from "./Work"     
import Footer from "./Footer" 


import Home from "./Home"
import Second from "./Second"
import End from "./End"
import Imagescroll from "./Imagescroll"


import About from "./About"
import All from "./All"   
import Top from "./top"   

import Uniliver from "./Uniliver"
import Knine from "./Knine"



import Saintflaire from "./Saintflaire"
import SL from "./SL"
import LB from "./LB"
import Bth from "./Bth"
import Frameflash from "./Frameflash"
import Mercedes from "./Mercedes"

import Koenigseg from "./Koenigseg"
import Lamborghini from "./Lamborghini"
import Comic from "./Comic"
import Sketches from "./Sketches"


function App() {
  return (
    <BrowserRouter>
      
      <Top></Top>
     
      <Sample />

    
      <Routes>

       
        <Route
          path="/"
          element={
            <>
              <Home />
              <Second />
              <End />
              
              
            </>
          }
        />

        
        <Route path="/all" element={<All />} />
        <Route path="/uniliver" element={<Uniliver></Uniliver>} />
        <Route path="/k9" element={<Knine/>} />
       <Route path="/saint" element={<Saintflaire></Saintflaire>} />
        
        <Route path="/about" element={<About />} />
        <Route path="/silent" element={<SL></SL>} />
        <Route path="/lb" element={<LB></LB>} />
        <Route path="/bth" element={<Bth></Bth>} />
         <Route path="/frameflash" element={<Frameflash></Frameflash>} />
         <Route path="/mercedes" element={<Mercedes></Mercedes>} />
  
        <Route path="/koeniggseg" element={<Koenigseg></Koenigseg>} />
         <Route path="/lambo" element={<Lamborghini></Lamborghini>} />
         <Route path="/comic" element={<Comic></Comic>} />
         <Route path="/sketches" element={<Sketches></Sketches>} />
        

      </Routes>

     
      

    </BrowserRouter>
  )
}

export default App
