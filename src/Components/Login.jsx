import React from "react";

const Login =()=>{

    return(
        <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 mb-4"  />
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded" >
            Login
          </button>
        </div>
      </div>
    )
}
export default Login