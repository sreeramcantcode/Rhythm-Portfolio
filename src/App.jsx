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

       
        <Route path="/about" element={<About />} />

      </Routes>

     
      

    </BrowserRouter>
  )
}

export default App
