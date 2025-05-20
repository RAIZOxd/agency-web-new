"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#EBECF0] py-6 sm:py-8 md:py-10 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Top Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base sm:text-xl md:text-2xl lg:text-[30px] std-font text-[#2C313F] leading-normal sm:leading-relaxed md:leading-[50px] font-medium tracking-wide uppercase mb-2 sm:mb-4"
        >
          Design and Branding Agency
        </motion.div>

        {/* Main Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-1">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[150px] font-bold leading-tight md:leading-[140px] text-[#2C313F] clash-display-font"
          >
            WE ARE AN
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-80 text-base sm:text-lg md:text-[20px] leading-snug md:leading-[28px] mabry-pro-font font-normal text-[#2C313F] px-0 md:px-12 my-4 md:my-0"
          >
            Commodo etiam lacus vestibulum qu tristique non venenatis sed.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center bg-[#2C313F] text-white pr-2 pl-4 py-2 rounded-full hover:bg-gray-700 std-font text-sm sm:text-base md:text-lg"
          >
            LET'S TALK
            <motion.span 
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
              className="ml-2 bg-[#5AC4FF] text-[18px] text-[#2C313F] px-3 sm:px-4 py-1 sm:py-2 rounded-full"
            >
              ↗
            </motion.span>
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-between gap-2 sm:gap-4 mt-2 md:mt-0"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[150px] font-bold leading-tight md:leading-[140px] text-[#2C313F] clash-display-font">
            WINNING DIGITAL
          </h1>
        </motion.div>

        {/* Highlighted Section */}
        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col md:flex-row items-start md:items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#5AC4FF] h-auto md:h-24 px-4 sm:px-6 rounded-sm text-sm font-medium mr-0 md:mr-4 w-full md:w-[450px] mb-4 md:mb-0"
          >
            <h1 className="text-[#2C313F] px-2 sm:px-6 md:px-10 py-3 sm:py-4 jakarta-font text-base sm:text-lg md:text-[22px] font-bold leading-tight md:leading-[34px] text-left decoration-skip-ink">
              A CREATIVE DESIGN AGENCY <br className="hidden sm:block" /> FROM SAN FRANCISCO
            </h1>
          </motion.div>

          <div className="flex space-x-1 sm:space-x-2 mb-4 md:mb-0">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "6rem" }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-[#5AC4FF] w-8 sm:w-12 md:w-16"
            ></motion.div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "6rem" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-[#5AC4FF] w-6 sm:w-8 md:w-10"
            ></motion.div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "6rem" }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-[#5AC4FF] w-4 sm:w-5 md:w-6"
            ></motion.div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "6rem" }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-[#5AC4FF] w-2 sm:w-3 md:w-4"
            ></motion.div>
          </div>
          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[150px] px-0 sm:px-4 md:px-10 font-bold clash-display-font leading-tight md:leading-[140px] text-[#2C313F]"
          >
            AGENCY
          </motion.h1>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 sm:mt-12 md:mt-16 border-t border-[#2C313F] pt-4 w-full"
        >
          <div className="font-bold text-[#2C313F] jakarta-font text-lg sm:text-xl md:text-[23px] leading-tight md:leading-[33px] mb-4 md:mb-0">
            DESIGN VISUALLY.
            <br />
            CREATE EFFICIENTLY.
          </div>

          <p className="text-base sm:text-lg md:text-[20px] text-[#2C313F] w-full md:w-[539px] mabry-pro-font opacity-60">
            Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin
            tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique
            non venenatis sed.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative flex justify-center items-center h-[250px] sm:h-[400px] md:h-[550px] lg:h-[756px] w-full mt-8 sm:mt-12 md:mt-16 mb-1 bg-blue-100 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
        >
          <Image
            src="Rectangle.svg"
            alt="Header Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1430px"
            className="object-cover"
            priority
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
