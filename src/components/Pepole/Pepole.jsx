 

export default function Pepole() {
  return (
    <div>
        <div className="bg-blue-600 text-white py-16 px-4 relative overflow-hidden text-center">
      {/* Background shapes */}
      <div className="absolute top-8 left-8 w-10 h-10 bg-pink-300 rounded-full opacity-70"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 bg-gray-400 rounded-full opacity-70"></div>
      <div className="absolute top-10 right-20 w-6 h-6 bg-green-400 transform rotate-45"></div>
      <div className="absolute bottom-16 left-16 w-8 h-8 bg-orange-400 rotate-45"></div>

      {/* Text */}
      <h2 className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto">
        140,000+ people like you use Buffer to build their brand on social media every month
      </h2>

      {/* Button */}
      <a
        href="#get-started"
        className="inline-block mt-8 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition"
      >
        Get started now
      </a>
    </div>
    </div>
  )
}


