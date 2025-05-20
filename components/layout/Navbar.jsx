"use client";
import { useState } from "react";
import {
  FaBlog,
  FaFolderOpen,
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaRocket,
} from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#EBECF0] py-3 sm:py-4 border-t border-[#2C313F]">
      <div className="container mx-auto flex flex-wrap justify-between items-center border-b border-[#2C313F] pb-2 px-4 md:px-8 lg:px-6">
        {/* Left Section */}
        <p className="text-[16px] sm:text-[18px] md:text-[24px] leading-[20px] sm:leading-[24px] md:leading-[30px] font-[450] text-[#2C313F] tracking-[-0.02em] std-font">
          &copy; 2022.
        </p>

        {/* Center Section */}
        <div className="flex flex-col items-center">
          <p
            className="text-xs sm:text-sm md:text-[20px] font-medium tracking-widest text-[#2C313F] std-font"
            style={{
              height: "auto",
              paddingTop: "5px",
              sm: "paddingTop: 10px",
              lineHeight: "1.5",
              letterSpacing: "0.12em",
              textAlign: "center",
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            FIFTY
          </p>

          <p className="text-[30px] sm:text-[40px] md:text-[60px] font-bold leading-[35px] sm:leading-[50px] md:leading-[70px] clash-display-font text-[#2C313F]">
            15
          </p>
        </div>

       {/* Right Section - Hamburger Menu */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-1.5 sm:space-y-2 focus:outline-none transition-transform duration-300 ease-in-out"
            aria-label="Toggle menu"
          >
            <div className={`w-8 sm:w-10 md:w-16 h-0.5 bg-[#2C313F] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-8 sm:w-10 md:w-16 h-0.5 bg-[#2C313F] transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-4 w-48 sm:w-56 md:w-72 bg-[#EBECF0] shadow-2xl rounded-2xl py-4 sm:py-6 px-4 sm:px-6 flex flex-col gap-4 sm:gap-6 lg:gap-16 transform transition-all duration-500 ease-in-out z-50 ${
              isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
            }`}
          >
            <a href="#" className="flex items-center gap-2 md:gap-3 text-[#2C313F] font-semibold text-sm sm:text-base md:text-lg hover:text-[#5AC4FF] transition-all duration-300">
              <FaHome className="text-base sm:text-lg" /> Home
            </a>
            <a href="#" className="flex items-center gap-2 md:gap-3 text-[#2C313F] font-semibold text-sm sm:text-base md:text-lg hover:text-[#5AC4FF] transition-all duration-300">
              <FaInfoCircle className="text-base sm:text-lg" /> About Us
            </a>
            <a href="#" className="flex items-center gap-2 md:gap-3 text-[#2C313F] font-semibold text-sm sm:text-base md:text-lg hover:text-[#5AC4FF] transition-all duration-300">
              <FaPhone className="text-base sm:text-lg" /> Contact Us
            </a>
            <a href="#" className="flex items-center gap-2 md:gap-3 text-[#2C313F] font-semibold text-sm sm:text-base md:text-lg hover:text-[#5AC4FF] transition-all duration-300">
              <FaFolderOpen className="text-base sm:text-lg" /> Category
            </a>
            <a href="#" className="flex items-center gap-2 md:gap-3 text-[#2C313F] font-semibold text-sm sm:text-base md:text-lg hover:text-[#5AC4FF] transition-all duration-300">
              <FaRocket className="text-base sm:text-lg" /> Projects
            </a>
            <a href="#" className="flex items-center gap-2 md:gap-3 text-[#2C313F] font-semibold text-sm sm:text-base md:text-lg hover:text-[#5AC4FF] transition-all duration-300">
              <FaBlog className="text-base sm:text-lg" /> Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
