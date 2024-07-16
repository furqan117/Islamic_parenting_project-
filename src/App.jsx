import { useState } from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import ParentingPrinciples from './pages/ParentingPrinciples'
function App() {
  

  return (
   <div className=" bg-white">
    
      <Header/>
    <Home/> 
    <ParentingPrinciples/>  
   </div>
     
  )
}

export default App
