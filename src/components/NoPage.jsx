import React, { useState } from "react";
import { Link } from "react-router-dom";

function NoPage() {

  return (
    <div className="bg-white flex items-center justify-center min-h-screen p-4">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="text-center flex flex-col justify-center">
        <img width={'400px'} src="" alt="404" className=" text-7xl md:text-[120px] font-bold text-gray-800 float" />
        <p className="text-black mt-4 text-lg md:text-xl">
          Look like you're lost 
        </p>
        <p className="text-black mt-2 text-sm md:text-base">
          The page you're looking for doesn't exist or was moved.
        </p>
        <div className="flex flex-col items-center">
          <Link to="/" className="mt-6 w-fit  inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-xl transition-all duration-300">Back Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NoPage