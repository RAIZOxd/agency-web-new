"use client";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay to ensure the component is mounted before animations start
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const socialIcons = [
    { icon: <FaTwitter />, delay: "100ms" },
    { icon: <FaFacebookF />, delay: "200ms" },
    { icon: <FaInstagram />, delay: "300ms" },
    { icon: <FaGithub />, delay: "400ms" }
  ];

  const footerColumns = [
    { title: "Links", links: ["Home", "Projects", "Blog", "Category"], delay: "400ms" },
    { title: "Features", links: ["About Us", "Instructions", "Catalog", "Contact Us"], delay: "500ms" },
    { title: "Company", links: ["Privacy", "Terms", "Security"], delay: "600ms" },
    { title: "Legal & Terms", links: ["Privacy", "Terms", "Security"], delay: "700ms" }
  ];

  return (
    <footer className="bg-[#2C313F] text-[#EBECF0] py-10 sm:py-12 md:py-16 lg:py-20 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[560px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row flex-wrap align-middle items-start justify-between">
        {/* Logo, Social Icons, and Newsletter */}
        <div 
          className="w-full md:w-1/3 mb-8 md:mb-0 transition-all duration-700"
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)'
          }}
        >
          {/* Center Section */}
          <div className="flex flex-col items-start">
            <p
              className="text-xs tracking-widest text-[#EBECF0] std-font transition-all duration-500"
              style={{
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "30px",
                letterSpacing: "0.12em",
                textAlign: "right",
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-1rem)',
                transitionDelay: "200ms"
              }}
            >
              FIFTY
            </p>

            <p
              className="text-[40px] sm:text-[50px] md:text-[60px] font-[700] leading-[1.2] text-center clash-display-font text-[#EBECF0] transition-all duration-500"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transitionDelay: "300ms"
              }}
            >
              15
            </p>
          </div>
          <div className="flex space-x-4 sm:space-x-5 mt-4 mb-6 sm:mb-8 md:mb-10">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                className="text-white text-lg sm:text-xl border border-[#FFFFFF] border-opacity-10 p-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-[#5AC4FF] hover:text-[#2C313F]"
                href="#"
                style={{ 
                  opacity: isVisible ? 1 : 0, 
                  transform: isVisible ? 'translateY(0)' : 'translateY(1rem)',
                  transitionDelay: item.delay
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p 
            className="text-white mt-4 text-lg sm:text-xl font-semibold gilroy-font transition-all duration-500"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(0.5rem)',
              transitionDelay: "800ms"
            }}
          >
            Sign up for personalized offers
          </p>
          <div 
            className="mt-4 flex rounded-full focus:outline-none bg-white py-1 w-full max-w-[356px] transition-all duration-600"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(1rem)',
              transitionDelay: "900ms"
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full focus:outline-none gilroy-font text-black w-full"
            />
            <button className="bg-[#5AC4FF] hover:bg-[#77cefd] p-2 sm:p-3 rounded-full flex-shrink-0 transition-transform hover:scale-110 active:scale-95">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform hover:rotate-12"
              >
                <path
                  d="M17.6983 10.3373L12.1333 16.0423C11.725 16.4623 11.0833 16.5556 10.57 16.2756L3.84998 12.6006C2.85831 12.0639 2.97501 10.6173 4.02501 10.2323L23.0533 3.2906C24.0917 2.91726 25.1067 3.9206 24.7333 4.95893L17.955 23.9289C17.5817 24.9673 16.1817 25.1073 15.61 24.1739L13.0783 20.0323"
                  stroke="#2C313F"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section: Footer Links */}
        <div 
          className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 p-0 sm:p-4 md:p-6 lg:p-10 mt-4 transition-all duration-700"
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            transitionDelay: "300ms"
          }}
        >
          {/* Footer columns with staggered animations */}
          {footerColumns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="transition-all duration-500"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(1rem)',
                transitionDelay: column.delay
              }}
            >
              <h3 className="text-white font-semibold pb-4 sm:pb-6 gilroy-font text-lg sm:text-xl">
                {column.title}
              </h3>
              <ul className="mt-2 space-y-4 sm:space-y-6 std-font font-[450px] text-base sm:text-lg md:text-xl opacity-60">
                {column.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="transition-all duration-300 hover:translate-x-1 hover:opacity-100"
                    style={{ 
                      opacity: isVisible ? 0.6 : 0, 
                      transform: isVisible ? 'translateX(0)' : 'translateX(-0.5rem)',
                      transitionDelay: `${parseInt(column.delay) + (linkIndex * 50)}ms`
                    }}
                  >
                    <a href="#" className="hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div 
        className="w-full max-w-[1435px] mx-auto mt-8 sm:mt-12 md:mt-16 transition-opacity duration-1000"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transitionDelay: "1000ms"
        }}
      >
        <div className="gilroy-font text-center text-[#6A7176] text-sm sm:text-base font-medium mt-6 sm:mt-10 border-t border-white border-opacity-20 py-4 sm:py-6 px-4">
          © Copyright 2022 Fifty©. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
