'use client';
import { useState } from "react";
import { FaBlog, FaFolderOpen, FaHome, FaInfoCircle, FaPhone, FaRocket } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-[#EBECF0] py-4 border-t border-[#2C313F]">
      <div className="container mx-auto flex justify-between items-center border-b border-[#2C313F] pb-2 w-[1474px]">
        {/* Left Section */}
        <p className="text-[24px] leading-[30px] font-[450] text-[#2C313F] tracking-[-0.02em] std-font">
          &copy; 2022.
        </p>

        {/* Center Section */}
        <div className="flex flex-col items-center">
          <p
            className="text-xs tracking-widest text-[#2C313F] std-font"
            style={{
              width: "64px",
              height: "30px",
              paddingTop: "10px",
              left: "767px",
              gap: "0px",
              opacity: "0px",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "30px",
              letterSpacing: "0.12em",
              textAlign: "right",
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >FIFTY</p>



          <p
            className="text-[60px] font-[700] leading-[70px] text-center clash-display-font text-[#2C313F]"
            style={{
              width: "68px",
              height: "70px",
              top: "4px",
              left: "766px",
              gap: "0px",
              opacity: "0px",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >15</p>
        </div>

        {/* Right Section - Hamburger Menu */}
        <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col space-y-2 focus:outline-none transition-transform duration-300 ease-in-out"
      >
        <div className={`w-16 h-0.5 bg-[#2C313F] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-16 h-0.5 bg-[#2C313F] transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      <div
        className={`absolute right-0 mt-6 w-72 bg-white shadow-2xl rounded-2xl py-6 px-6 flex flex-col gap-5 transform transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
        }`}
      >
        <a href="#" className="flex items-center gap-3 text-[#2C313F] font-semibold text-lg hover:text-[#4A5568] transition-all duration-300">
          <FaHome /> Home
        </a>
        <a href="#" className="flex items-center gap-3 text-[#2C313F] font-semibold text-lg hover:text-[#4A5568] transition-all duration-300">
          <FaInfoCircle /> About Us
        </a>
        <a href="#" className="flex items-center gap-3 text-[#2C313F] font-semibold text-lg hover:text-[#4A5568] transition-all duration-300">
          <FaPhone /> Contact Us
        </a>
        <a href="#" className="flex items-center gap-3 text-[#2C313F] font-semibold text-lg hover:text-[#4A5568] transition-all duration-300">
          <FaFolderOpen /> Category
        </a>
        <a href="#" className="flex items-center gap-3 text-[#2C313F] font-semibold text-lg hover:text-[#4A5568] transition-all duration-300">
          <FaRocket /> Projects
        </a>
        <a href="#" className="flex items-center gap-3 text-[#2C313F] font-semibold text-lg hover:text-[#4A5568] transition-all duration-300">
          <FaBlog /> Blog
        </a>
      </div>
    </div>
      </div>
    </footer>
  );
};

export default Navbar;

