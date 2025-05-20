"use client";

import Carousel from "@/components/elements/Carousel";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

export default function WorkSection() {
  return (
    <section className="bg-[#E1E3E9] py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="w-full max-w-[1366px] mx-auto text-[#2C313F]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg sm:text-xl md:text-[20px] leading-tight sm:leading-[32px] font-bold uppercase jakarta-font">
              Take a look at
            </h2>
            <h2 className="text-lg sm:text-xl md:text-[20px] leading-tight sm:leading-[32px] font-bold uppercase jakarta-font">
              Some of our work
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl sm:text-2xl md:text-[33px] font-normal leading-snug sm:leading-normal md:leading-[50px] w-full md:w-[692px] std-font">
              Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin
              tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique
              non venenatis sed. Lorem ipsum dolor sit amet consectetur.
            </p>
          </motion.div>
        </div>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex justify-between items-center bg-[#2C313F] text-white pr-2 pl-4 py-2 rounded-full hover:bg-gray-700 std-font w-[160px] sm:w-[195px] uppercase text-sm sm:text-base"
        >
          All Projects
          <motion.span 
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.3 }}
            className="ml-2 bg-[#5AC4FF] text-[16px] sm:text-[18px] text-[#2C313F] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
          >
            ↗
          </motion.span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Carousel />
        </motion.div>
      </div>
    </section>
  );
}
