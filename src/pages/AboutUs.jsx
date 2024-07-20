import React from 'react';

import aboutUsImage from '../assets/abt.jpeg'; 

const AboutUs = () => {
  return (
    <div className=' mt-[4rem]  '>
      
      <div className='mt-16 mx-12'>
        <h1 className='text-center text-4xl font-semibold mb-8'>About Us</h1>
        <div className='flex flex-col md:flex-row items-center md:items-start mb-8'>
          <div className='md:w-1/2 mb-8 md:mb-0 md:mr-8'>
            <p className='text-lg text-[1.5rem] font-semibold '>
              Welcome to Al-Hikma, your trusted resource for Islamic parenting guidance and support. Our mission is to empower parents with the knowledge and tools they need to raise children who are not only successful in this world but also blessed in the hereafter. We believe that by instilling Islamic values and principles from an early age, we can nurture a generation of compassionate, responsible, and spiritually grounded individuals.
            </p>
            <p className='text-lg mt-4 text-[1.5rem] font-semibold  '>
              At Al-Hikma, we provide a wealth of resources, including articles, tips, and practical advice on various aspects of parenting. Our content is rooted in the teachings of the Quran and the Sunnah, and we strive to present it in a way that is relevant and accessible to today's parents. Whether you are seeking guidance on early childhood development, adolescent challenges, or fostering a strong family bond, we are here to support you every step of the way. Join us in our mission to create a nurturing and positive environment for our children, and together, let's pave the way for a brighter future for our Ummah.
            </p>
          </div>
          <div className='md:w-1/2 ml-[1rem]  '>
            <img src={aboutUsImage} alt="About Us" className='w-full rounded-lg shadow-lg' />
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default AboutUs;