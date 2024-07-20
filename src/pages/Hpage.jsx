import React from 'react'
import Home from '../Components/Home'
import ParentingStages from '../Components/ParentingStages'
import ParentingPrinciples from '../Components/ParentingPrinciples'
import Blog from '../Components/Blog'
import About from '../Components/AboutUs'
export default function Hpage() {
  return (
    <div>
      <Home/>
      <ParentingPrinciples/>
        <ParentingStages/>
        <Blog/>
        <About/>
    </div>
  )
}
