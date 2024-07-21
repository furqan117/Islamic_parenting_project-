import React from 'react'
import img from'../assets/pare.jpeg'
import Hpage from '../pages/Hpage'
import Header from './Header'
export default function Home() {
  return (
    <div className=' flex items-center mx-[2rem] mt-[4rem]    '>
        <div className=" ml-[3rem] space-y-4 ">
            <h1 className=' text-[2.5rem] font-semibold font-Far '>Nurturing the  
                <span className=' text-[#50C878] '> Next Generation</span> with Islamic Values</h1>
            <p className=' font-Far text-gray-600'>Welcome to Guiding Lights, your trusted resource for nurturing the 
                next generation with the timeless wisdom and values of Islam. We are 
                dedicated to supporting parents in raising children who are not only 
                successful in this world but also blessed in the hereafter. </p>
                <button className=' bg-[#50C878] px-6 py-2 rounded-md
                 text-white font-semibold hover:text-black hover:bg-white 
                 hover:border-2 hover:border-[#50C878]    '>Get Started</button>
        </div>

        <div className="   ">
<img className=' ml-[6rem]  ' src={img} alt="" />
        </div>
      
    </div>
  )
}
