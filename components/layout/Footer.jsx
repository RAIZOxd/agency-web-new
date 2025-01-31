import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20 h-[534px]">
      <div className="container mx-auto px-6 lg:px-20 flex flex-wrap align-middle items-center justify-between">
        {/* Logo, Social Icons, and Newsletter */}
        <div className="w-full md:w-1/3">
          {/* Center Section */}
        <div className="flex flex-col items-start">
          <p
            className="text-xs tracking-widest text-[#EBECF0] std-font"
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
            className="text-[60px] font-[700] leading-[70px] text-center clash-display-font text-[#EBECF0]"
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
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaTwitter /></a>
            <a href="#" className="text-blue-500 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaGithub /></a>
          </div>
          <p className="text-white mt-4">Sign up for personalized offers</p>
          <div className="mt-4 flex">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-lg focus:outline-none text-black" />
            <button className="bg-blue-500 p-2 rounded-r-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884l8.978 3.734a.5.5 0 010 .92l-8.978 3.734A1 1 0 011 13.578V6.42a1 1 0 011.003-.537zM10.51 10l8.49-3.535a1 1 0 00-1-1.73l-8.49 3.535a1 1 0 000 1.73l8.49 3.535a1 1 0 001-1.73L10.51 10z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section: Footer Links */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 md:mt-0">
          <div>
            <h3 className="text-white font-semibold">Linkes</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Projects</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Category</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Features</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Instructions</a></li>
              <li><a href="#" className="hover:underline">Catelog</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Legal & Terms</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © Copyright 2022 Fifty©. All rights reserved.
      </div>
    </footer>
  );
}
