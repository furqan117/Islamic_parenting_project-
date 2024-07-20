import React from 'react'
import img from'../assets/pare.jpeg'

export default function Hpage() {
  return (
    <div className=' flex items-center mx-[2rem] mt-[4rem]    '>

        <div className=" ml-[3rem] space-y-4 ">
            <h1 className=' text-[2.5rem] font-semibold '>Nurturing the Next Generation with Islamic Values</h1>
            <p>Welcome to Guiding Lights, your trusted resource for nurturing the 
                next generation with the timeless wisdom and values of Islam. We are 
                dedicated to supporting parents in raising children who are not only 
                successful in this world but also blessed in the hereafter. </p>
                <button className=' bg-[#50C878] px-6 py-2 rounded-md text-white font-semibold  '>Get Started</button>
        </div>

        <div className="   ">
<img className=' ml-[1rem]  ' src={img} alt="" />
        </div>
     
 
    </div>
    
  )
}