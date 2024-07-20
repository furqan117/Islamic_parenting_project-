import React, { useEffect } from 'react'
import edu from'../assets/learn.jpeg'
import grad from'../assets/graduation.jpg'
import event from'../assets/events.jpeg'
export default function Blog() {

  return (
    <div>
        <h1 className=' text-[3rem] text-center font-semibold font-Far pt-10'>Get update with 
          <span className='text-[#50C878]  '> latest blog</span></h1>

        <div className=" flex justify-center space-x-2 px-[4rem] mt-[5rem]    ">
            <div className=" w-[500px] h-[520px] rounded-md border-2 border-gray-300
             bg-white shadow-lg ">
              <img src={edu} alt="" />
              <div className=" space-y-1 px-4">
                <h1 className=' text-[1.5rem] font-Far '>Memorize the Quran</h1>
                <p className=' text-gray-600  '>Memorizing the Quran is a noble and rewarding journey
                   that strengthens one's connection with Allah. 
                  It involves dedication, consistency, and the intention</p>
                  <p className=' text-gray-700'>Aug 12, 2024</p>
              </div>
             </div>

            <div className=" w-[500px] h-[520px] rounded-md border-2 border-gray-300
             bg-white shadow-lg ">
                <img className=' h-[50vh]  ' src={grad} alt="" />
              <div className=" space-y-3 px-4">
                <h1 className='text-[1.5rem] font-Far'>Graduates of 2024</h1>
                <p className=' text-gray-600 '>Congratulations, Class of 2024 Today marks the culmination
                   of your hard work, dedication, and perseverance
                  next chapter of your life, remember  </p>
                  <p className=' text-gray-700 '>Aug 25, 2024</p>
              </div>
             </div>

            <div className=" w-[500px] h-[520px] rounded-md border-2 border-gray-300
             bg-white shadow-lg ">
                <img className='w-[500px] h-[330px]  ' src={event} alt="" />
              <div className=" space-y-4 px-4">
                <h1 className='text-[1.5rem] font-Far pt-2'>Celebrating Eid</h1>
                <p className='  text-gray-600 '>Eid is one of the most significant 
                  and joyous festivals in the Islamic calendar, celebrated by Muslims 
                  worldwide. There are two major Eids in Islam: Eid al-Fitr and Eid al-Adha</p>
                  <p className=' text-gray-700 '>Aug 12, 2024</p>
              </div>
             </div>
           
        </div>
    </div>
  )
}