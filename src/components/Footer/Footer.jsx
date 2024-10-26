import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaCircle } from 'react-icons/fa';


export default function Footer() {
  return (
   
     <footer className="bg-gray-900 text-white py-4 border-t border-gray-700">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <img
            src="https://via.placeholder.com/40" // Replace with the actual Buffer logo URL
            alt="Buffer Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-semibold">Buffer</span>
        </div>
        
        {/* Center Section: Social Media Icons */}
        <div className="flex space-x-6 mb-4 lg:mb-0">
          <FaInstagram className="text-gray-400 hover:text-white transition duration-200 cursor-pointer" />
          <FaFacebookF className="text-gray-400 hover:text-white transition duration-200 cursor-pointer" />
          <FaXTwitter className="text-gray-400 hover:text-white transition duration-200 cursor-pointer" />
          <FaLinkedinIn className="text-gray-400 hover:text-white transition duration-200 cursor-pointer" />
          <FaCircle className="text-gray-400 hover:text-white transition duration-200 cursor-pointer" /> {/* Placeholder icon */}
        </div>
        
        {/* Right Section: Copyright and Links */}
        <div className="text-gray-400 text-sm flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
          <span>Copyright ©2024 Buffer</span>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
   
  )
}




