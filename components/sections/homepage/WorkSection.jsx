"use client";

import Carousel from "@/components/elements/Carousel";
import "swiper/css";
import "swiper/css/navigation";

export default function WorkSection() {
  return (
    <section className="bg-[#E1E3E9] py-20 px-6 md:px-16">
      <div className="w-[1366px] mx-auto text-[#2C313F]">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-[20px] leading-[32px] font-bold uppercase jakarta-font">
              Take a look at
            </h2>
            <h2 className="text-[20px] leading-[32px] font-bold uppercase jakarta-font">
              Some of our work
            </h2>
          </div>
          <div>
            <p className="text-[33px] font-normal leading-[50px] w-[692px] std-font ">
              Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin
              tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique
              non venenatis sed. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <button className="mt-20 flex justify-between items-center bg-[#2C313F] text-white p-3 py-2 rounded-full hover:bg-gray-700 std-font w-[195px] uppercase">
          All Projects
          <span className="ml-2 bg-[#5AC4FF] text-[18px] text-[#2C313F] px-4 py-2 rounded-full">
            ↗
          </span>
        </button>

        <Carousel />
      </div>
    </section>
  );
}
