import React from 'react'

import{Link} from'react-router-dom'

export default function Header() {
  return (
    <div className=' flex justify-between mx-[3rem] items-center mt-[1rem]  '>
        <h1 className=' text-[2rem] font-Far  '>Al- <span className=' text-[#50C878] '>Hikmah</span></h1>
        <div className=" flex items-center space-x-5">
         <Link className='list-none text-[1.1rem] font-semibold hover:bg-[#50C878]
          py-2 px-2 rounded-md hover:text-white  ' to="/">Home</Link>
         <Link className='list-none text-[1.1rem] font-semibold hover:bg-[#50C878]
          py-2 px-2 rounded-md hover:text-white  '  to="/principles">ParentingPrinciples</Link>
         <Link className='list-none text-[1.1rem] font-semibold hover:bg-[#50C878]
          py-2 px-2 rounded-md hover:text-white  ' to="/Stages">Parenting Stages</Link>
         <Link className='list-none text-[1.1rem] font-semibold hover:bg-[#50C878]
          py-2 px-2 rounded-md hover:text-white  ' to="/blog">Blog</Link>
         <Link className='list-none text-[1.1rem] font-semibold hover:bg-[#50C878]
          py-2 px-2 rounded-md hover:text-white  ' to="/about">About Us</Link>
         

        </div>
        <div className=" space-x-2">
            <button className='border-2  border-[#50C878] py-2 px-5 text-black font-semibold rounded-md'>Login</button>
            <button className=' bg-[#50C878]  py-2 px-5 border-2 border-[#50C878] text-white font-semibold rounded-md'>Signup</button>
        </div>
    </div>
  )
}
