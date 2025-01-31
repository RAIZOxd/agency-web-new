'use client';
import SlidingBanner from "@/components/elements/SlidingBanner";
import Image from "next/image";
function BannerSection() {
  return (
    <div>
        
        <div className="relative justify-center items-center h-[550px] w-full bg-blue-100">
          <Image
            src="Cover_1.svg"
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            className="absolute"
            quality={100}
          />
        </div>

        <SlidingBanner/>

    </div>
  )
}

export default BannerSection