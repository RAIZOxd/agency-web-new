'use client';
import SlidingBanner from "@/components/elements/SlidingBanner";
import Image from "next/image";
function BannerSection() {
  return (
    <div>
        
        <div className="relative flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] w-full bg-blue-100">
          <Image
            src="Cover_1.svg"
            alt="Cover Image"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
            className="absolute object-cover"
            quality={100}
          />
          {/* <div className="absolute z-10 text-white text-center px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
              Creative Solutions
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg max-w-md mx-auto drop-shadow-md">
              Transforming ideas into digital experiences
            </p>
          </div> */}
        </div>

        <SlidingBanner/>

    </div>
  )
}

export default BannerSection