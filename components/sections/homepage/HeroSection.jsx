"use client";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="bg-[#EBECF0] py-10 px-6">
      <div className="container mx-auto max-w-[1366px]">
        {/* Top Section */}
        <div className="text-[30px] std-font text-[#2C313F] leading-[50px] font-medium tracking-wide uppercase mb-4">
          Design and Branding Agency
        </div>

        {/* Main Heading */}
        <div className="flex items-center justify-between gap-1">
          <h1 className="text-[150px] font-bold leading-[140px] text-[#2C313F] clash-display-font">
            WE ARE AN
          </h1>

          <p className="w-80  text-[20px] leading-[28px] mabry-pro-font font-normal text-[#2C313F] opacity-60 px-12">
            Commodo etiam lacus vestibulum qu tristique non venenatis sed.
          </p>

          <button className="flex items-center bg-[#2C313F] text-white pr-2 pl-4 py-2 rounded-full hover:bg-gray-700 std-font">
            LET'S TALK
            <span className="ml-2 bg-[#5AC4FF] text-[18px] text-[#2C313F] px-4 py-2 rounded-full">
              ↗
            </span>
          </button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <h1 className="text-[150px] font-bold leading-[140px] text-[#2C313F] clash-display-font">
            WINNING DIGITAL
          </h1>
        </div>

        {/* Highlighted Section */}
        <div className="mt-8 flex items-center">
          <div className="bg-[#5AC4FF] h-24 px-6 rounded-sm text-sm font-medium mr-4 w-[450px]">
            <h1 className="text-[#2C313F] px-10 py-4 jakarta-font text-[22px] font-bold leading-[34px] text-left decoration-skip-ink">
              A CREATIVE DESIGN AGENCY <br /> FROM SAN FRANCISCO
            </h1>
          </div>

          <div className="flex space-x-2">
            <div className="bg-[#5AC4FF] h-24 w-8"></div>
            <div className="bg-[#5AC4FF] h-24 w-5"></div>
            <div className="bg-[#5AC4FF] h-24 w-2"></div>
            <div className="bg-[#5AC4FF] h-24 w-1"></div>
          </div>
          <h1 className="text-[150px] px-10 font-bold clash-display-font leading-[140px] text-[#2C313F]">
            AGENCY
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-16 border-t border-[#2C313F] pt-4 w-[1430px]">
          <div className="font-bold text-[#2C313F] jakarta-font text-[23px] leading-[33px]">
            DESIGN VISUALLY.
            <br />
            CREATE EFFICIENTLY.
          </div>

          <p className="text-[20px] text-[#2C313F] w-[539px] mabry-pro-font opacity-60">
            Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin
            tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique
            non venenatis sed.
          </p>
        </div>

        <div className="relative flex justify-center items-center h-[756px] w-[1430px] mt-16 mb-1 bg-blue-100">
          <Image
            src="Rectangle.svg"
            alt="Header Image"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
