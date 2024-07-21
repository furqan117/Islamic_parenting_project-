import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Header'

import Login from './Components/LoginForm'
import Footer from './Components/Foter'
import Hpage from './pages/Hpage'
import ParentingPrinciples from './Components/ParentingPrinciples'
import Principles from './pages/Principles'
import Stages from './pages/Stages'
import Updates from './pages/Updates'
import AboutUs from './Components/AboutUs'
function App() {
  

  return (
   <div className=" bg-white">
    
     
      
     <Router>
       <Header/>
      <Routes>
        <Route path='/' element={<Hpage/>} />
       < Route path='principles' element={<Principles/>} />

        < Route path='Stages' element={<Stages/>} />
        < Route path='blog' element={<Updates/>} />
        < Route path='about' element={<AboutUs/>} />

      </Routes>
     </Router>
  
    <Footer/>

   </div>
     
  )
}

export default App
