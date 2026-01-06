import { Link } from "react-router-dom";

function NoPage() {

  return (
    <div className="bg-white flex items-center justify-center min-h-screen">


      <div className="text-center flex flex-col justify-center">
        <h1  className="
                    text-7xl md:text-[120px]
                    font-bold text-red-500
                    animate-[float_3s_ease-in-out_infinite]
                    " > 404 
                </h1>
        <p className="text-black mt-4 text-lg md:text-xl">
          Looks like you're lost 
        </p>
        <p className="text-black mt-2 text-sm md:text-base">
          The page you're looking for doesn't exist or was moved.
        </p>
        <div className="flex flex-col items-center">
          <Link to="/" className="mt-6 w-fit font-medium  inline-block bg-red-500 hover:text-xl hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg transition-all duration-400">Back Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NoPage