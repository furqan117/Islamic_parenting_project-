import { useState } from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import ParentingPrinciples from './pages/ParentingPrinciples'
import ParentingStages from './pages/Parenting Stages'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Footer from './Components/Foter'
function App() {
  

  return (
   <div className=" bg-white">
    
      <Header/>
    <Home/> 
    <ParentingPrinciples/> 
         <ParentingStages/>
    <Blog/>
    <AboutUs/>
    <Footer/>

   </div>
     
  )
}

export default App
