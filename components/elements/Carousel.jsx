"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Slide data
const slides = [
  { id: 1, img: "/laptop-mockup.svg", title: "Creative Vision" },
  { id: 2, img: "/bag-mockup.svg", title: "X3 Branding & Website" },
  { id: 3, img: "/X3CreativeDesign_2.png", title: "X3 Branding & Website" },
];

export default function Carousel() {
  return (
    <div className="items-center my-20 px-6">
      <Swiper
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        slidesPerView={2}
        spaceBetween={30} // Increased spacing for better layout
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center">
            <div className="relative group w-[600px] h-[400px]">
              <Image
                src={slide.img}
                width={600}
                height={400}
                alt={slide.title}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <p className="absolute bottom-2 space-x-10 text-sm text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                © 2022. {slide.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}