import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-11 rounded-md">
      <div className="container  px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/*<div>
            <h5 className="uppercase mb-6 font-bold">Solutions</h5>
           <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Marketing</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Analytics</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Commerce</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Data</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Cloud</a></li>
            </ul>
          </div>*/}
          <div>
           
          </div>
          <div>
            <h5 className="uppercase mb-6 font-bold">Center</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Jobs</a></li>
              
            </ul>
          </div>
          <div>
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul>
              
              <li className="mb-2"><a href="#" className="hover:underline">Privacy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Policies</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Conditions</a></li>
            </ul>
          </div>
          {/*<div className="lg:col-span-2">
            <h5 className="uppercase mb-6 font-bold">Subscribe to our newsletter</h5>
           <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter email..."
                className="p-2 mb-2 md:mb-0 md:mr-2 rounded bg-gray-800 border border-gray-700 text-white"
              />
              <button className="p-2 rounded bg-blue-600 hover:bg-blue-700">Subscribe</button>
            </form>
          </div>*/}
        </div>
        <div className=" border-t border-gray-800 pt-6 text-center md:flex md:justify-between">
          <p>&copy; 2024 Your Al-Hikma. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
            <a href="#" className="hover:text-gray-400">WhatsApp</a>
            <a href="#" className="hover:text-gray-400">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;