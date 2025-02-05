import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2C313F] text-[#EBECF0] py-20 h-[560px]">
      <div className="container mx-auto px-6 lg:px-10 flex flex-wrap align-middle items-center justify-between">
        {/* Logo, Social Icons, and Newsletter */}
        <div className="w-[210px] md:w-1/3">
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
            >
              FIFTY
            </p>

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
            >
              15
            </p>
          </div>
          <div className="flex w-[210px] space-x-5 mt-4 mb-10">
            <a
              href="#"
              className="text-white hover:text-[#2C313F] text-xl  hover:bg-[#5AC4FF]  border border-[#FFFFFF] border-opacity-10 p-2 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#2C313F] text-xl  hover:bg-[#5AC4FF]  border border-[#FFFFFF] border-opacity-10 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#2C313F] text-xl  hover:bg-[#5AC4FF]  border border-[#FFFFFF] border-opacity-10 p-2 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#2C313F] text-xl  hover:bg-[#5AC4FF]  border border-[#FFFFFF] border-opacity-10 p-2 rounded-full"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-white mt-4 text-xl font-semibold gilroy-font">
            Sign up for personalized offers
          </p>
          <div className="mt-4 flex rounded-full focus:outline-none bg-white py-1 w-[356px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full focus:outline-none gilroy-font text-black w-[300px]"
            />
            <button className="bg-[#5AC4FF] hover:bg-[#77cefd] p-3 rounded-full">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-10 p-10 mt-4">
          <div>
            <h3 className="text-white font-semibold pb-6 gilroy-font text-xl">
              Linkes
            </h3>
            <ul className="mt-2 space-y-6 std-font font-[450px] text-xl opacity-60">
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Category
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold pb-6 gilroy-font text-xl">
              Features
            </h3>
            <ul className="mt-2 space-y-6 std-font font-[450px] text-xl opacity-60">
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Instructions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Catelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold pb-6 gilroy-font text-xl">
              Company
            </h3>
            <ul className="mt-2 space-y-6 std-font font-[450px] text-xl opacity-60">
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold pb-6 gilroy-font text-xl">
              Legal & Terms
            </h3>
            <ul className="mt-2 space-y-6 std-font font-[450px] text-xl opacity-60">
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white opacity-100">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-[1435px] mx-auto mt-16">
        <div className="gilroy-font text-center text-[#6A7176] text-base font-medium mt-10 border-t border-white border-opacity-20 py-6">
          © Copyright 2022 Fifty©. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
