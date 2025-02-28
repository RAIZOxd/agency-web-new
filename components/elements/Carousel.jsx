"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Slide data
const slides = [
  { id: 1, img: "/laptop-mockup.svg", title: "Creative Vision", subtitle: "Unleash Your Imagination" },
  { id: 2, img: "/bag-mockup.svg", title: "X3 Branding & Website", subtitle: "Bold Identity Design" },
  { id: 3, img: "/X3CreativeDesign_2.svg", title: "X3 Branding & Website", subtitle: "Digital Excellence" },
];

export default function CreativeCarousel() {
  return (
    <div className="relative my-24 px-10 md:px-20 lg:px-30 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl -z-10" />

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
        }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center">
            <div className="relative group w-full max-w-[700px] h-[350px] md:h-[400px] lg:h-[500px] transform -skew-x-4 transition-all duration-700 hover:skew-x-0 overflow-hidden rounded-3xl">
              {/* Image Container */}
              <div className="w-full h-full relative">
                <Image
                  src={slide.img}
                  width={700}
                  height={450}
                  alt={slide.title}
                  className="object-cover w-full h-full rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-500/30 to-black/20 rounded-3xl opacity-75 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Text Content with Padding */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 lg:p-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-xl transform translate-y-4 group-hover:-translate-y-2 transition-all duration-500">
                  {slide.title}
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-yellow-200 drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {slide.subtitle}
                </p>
                <p className="text-xs md:text-sm text-gray-300 mt-3 tracking-wide">
                  © 2024
                </p>
              </div>

              {/* Neon Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/60 transition-all duration-500 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-purple-600/30 rounded-full -translate-x-1/3 translate-y-1/3 -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-600/30 rounded-full translate-x-1/3 translate-y-1/3 -z-10 animate-pulse" />
    </div>
  );
}