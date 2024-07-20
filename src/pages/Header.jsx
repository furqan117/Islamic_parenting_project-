import React from 'react'
import{Link} from'react-router-dom'
import Footer from '../Components/Foter'

export default function Header() {
  return (
    <div className=' flex justify-between mx-[3rem] items-center mt-[1rem]  '>
        <h1 className=' text-[2rem]  '>Al-Hikma</h1>
        <div className=" flex items-center space-x-5">
         {/* <Link to="/">Home</Link>
         <Link to="/principles">ParentingPrinciples</Link>
         <Link to="/Stages">Parenting Stages</Link>
         <Link to="/blog">Blog</Link>
         <Link to="/about">About Us</Link> */}
         <li className=' list-none text-[1.1rem] font-semibold  '>Home</li>
         <li className=' list-none text-[1.1rem] font-semibold  '>ParentingPrinciples</li>
         <li className=' list-none text-[1.1rem] font-semibold  '>Parenting Stages</li>
         <li className=' list-none text-[1.1rem] font-semibold  '>Blog</li>
         <li className=' list-none text-[1.1rem] font-semibold  '>About Us</li>

        </div>
        <div className=" space-x-2">
            <button className='border-2  border-[#50C878] py-2 px-5 text-black font-semibold rounded-md'>Login</button>
            <button className=' bg-[#50C878]  py-2 px-5 border-2 border-[#50C878] text-white font-semibold rounded-md'>Signup</button>
        </div>
        <Footer/>
    </div>
  )
}
