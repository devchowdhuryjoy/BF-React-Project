import { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { MdExpandMore } from "react-icons/md";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-800 md:bg-transparent text-white p-4 flex justify-between items-center md:mb-[140px]">
            {/* Logo and Title on Left */}
            <div className="flex items-center gap-2 text-2xl text-black">
                <HiAcademicCap />
                <h1 className="font-bold text-black">Buffer</h1>
            </div>
            
            {/* Mobile Menu Icon */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            
            {/* Links - Visible on medium and larger screens */}
            <ul className={`md:flex gap-6 items-center ${isOpen ? "flex flex-col mt-4 bg-gray-800 w-full py-5 absolute top-16 left-0 z-10 md:bg-transparent" : "hidden"} md:static md:flex-row md:mt-0`}>
                <li><a href="#home" className="text-black hover:text-yellow-500">Tools</a></li>
                <div className='text-black'><MdExpandMore /></div>
                <li><a href="#about" className="text-black hover:text-yellow-500">Channels</a></li>
                <div className='text-black'><MdExpandMore /></div>
                <li><a href="#services" className="text-black hover:text-yellow-500">Pricing</a></li>
                <li><a href="#contact" className="text-black hover:text-yellow-500">Blog</a></li>
            </ul>

            {/* Right-aligned buttons and search bar */}
            <div className="hidden md:flex items-center gap-x-6">
                {/* Search Bar */}
                <div className="relative">
                    {/* <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 rounded-full border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    /> */}
                    {/* <FaSearch className="absolute right-3 top-2 text-gray-400" /> */}

                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                
                {/* Log In and Get Started Buttons */}
                <a href="#login" className="px-4 py-2 rounded text-blue-600 hover:bg-white hover:text-gray-800">Log in</a>
                <a href="#get-started" className="px-4 py-2 rounded-3xl border border-transparent bg-blue-600 text-white hover:bg-yellow-600">Get Started Now</a>
            </div>

            {/* Buttons for mobile view */}
            {isOpen && (
                <div className="flex flex-col items-center gap-4 mt-4 md:hidden">
                    <a href="#login" className="px-4 py-2 rounded text-blue-600 hover:bg-white hover:text-gray-800">Login</a>
                    <a href="#get-started" className="px-4 py-2 rounded-3xl border border-transparent bg-blue-600 text-white hover:bg-yellow-600">Get Started Now</a>
                </div>
            )}
        </nav>
    );
}

 