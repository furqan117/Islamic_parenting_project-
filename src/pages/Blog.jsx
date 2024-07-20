import React from 'react';

import blogImage from '../assets/blog.jpeg';

const Blog = () => {
  return (
    <div className='flex items-center mx-[2rem] mt-[4rem] '>
    
      <div className='mt-16 mx-12'>
        <h1 className='text-center text-4xl font-semibold mb-8'>Blog</h1>
        <div className='flex justify-center mb-8'>
          <img className=' ml-[1rem]  'src={blogImage} alt=""  />
        </div>
        <p className='text-[2rem] font-semibold '>
          Check out our latest articles on Islamic parenting. We provide insights, tips, and resources
          to help you raise children who are successful in this world and blessed in the hereafter.
        </p>
        {/* Add blog posts or links to articles here */}
      </div>
    
    </div>
  );
}

export default Blog;