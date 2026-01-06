import React from "react";

const Loading = () => {
  const text = "Onyx Marbles";

  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Brand */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-black mb-6">
        Onyx Marbles
      </h1>

      {/* Bar container */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        {/* Animated bar */}
        <div className="h-full bg-red-600 animate-loading-bar" />
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes loading-bar {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }

          .animate-loading-bar {
            animation: loading-bar 1.5s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
