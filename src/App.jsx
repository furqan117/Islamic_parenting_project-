import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'

import Footer from './Components/Foter'
import Hpage from './pages/Hpage'
import ParentingPrinciples from './Components/ParentingPrinciples'
import Principles from './pages/Principles'
import Stages from './pages/Stages'
import Updates from './pages/Updates'
import AboutUs from './Components/AboutUs'


function App() {
  return (
    <div className="bg-white">
      {/* Setting up Router for navigation */}
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Hpage/>} />  {/* Route for homepage */}
          <Route path='principles' element={<Principles/>} />  {/* Route for principles page */}

          <Route path='Stages' element={<Stages/>} />  {/* Route for stages page */}
          <Route path='blog' element={<Updates/>} />  {/* Route for blog/updates page */}
          <Route path='about' element={<AboutUs/>} />  {/* Route for about us page */}
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App