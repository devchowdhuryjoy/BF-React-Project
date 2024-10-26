
import { IoMdPlayCircle } from "react-icons/io";
import ReactLogo from '../../assets/Banner.png';
import { VscCheck } from "react-icons/vsc";

export default function Banner() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center p-6 md:mb-[140px]">
        {/* Left section: Text and input form */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          {/* Watch demo video section */}
          <div className="flex items-center gap-2 text-blue-600">
            <IoMdPlayCircle className="text-3xl" />
            <div className="underline cursor-pointer">Watch demo video</div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">
            Grow your audience on social and beyond
          </h2>

          {/* Description */}
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, dicta incidunt! Reiciendis ullam quibusdam dolorum 
            suscipit cupiditate nam illo qui rem at consequuntur aliquam eveniet voluptatum, magnam ducimus dignissimos quo.
          </p>

          {/* Email input and button */}
          <div className="flex gap-3 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 border rounded-3xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800"
            />
            <a href="#get-started" className="px-4 py-2 rounded-3xl bg-blue-600 text-white hover:bg-yellow-600">
              Get Started Now
            </a>
          </div>

          {/* Features Section */}
          <div className="flex flex-wrap gap-4 text-gray-800 mt-4">
            <div className="flex items-center">
              <VscCheck className="text-blue-600" />
              <span className="ml-2 whitespace-nowrap">Try it for free</span>
            </div>
            <div className="flex items-center">
              <VscCheck className="text-blue-600" />
              <span className="ml-2 whitespace-nowrap">No Credit Card Required</span>
            </div>
            <div className="flex items-center">
              <VscCheck className="text-blue-600" />
              <span className="ml-2 whitespace-nowrap">Cancel any time</span>
            </div>
          </div>
        </div>

        {/* Right section: Banner image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          <img src={ReactLogo} className="w-full max-w-md h-auto" alt="Banner" />
        </div>
      </div>
    </>
  );
}

