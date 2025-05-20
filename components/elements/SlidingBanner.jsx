// components/SlidingBanner.jsx
'use client';
export default function SlidingBanner() {
    return (
      <div className="relative overflow-hidden flex items-center justify-center bg-[#5AC4FF] h-[100px] sm:h-[120px] md:h-[150px] lg:h-[182px]">
        <div className="flex">
          {/* Duplicated content for seamless loop */}
          <div className="flex animate-slide-infinite min-w-full shrink-0">
            {[...Array(4)].map((_, i) => (
              <SliderSection key={i} />
            ))}
          </div>
          <div className="flex animate-slide-infinite min-w-full shrink-0">
            {[...Array(4)].map((_, i) => (
              <SliderSection key={i + 4} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  function SliderSection() {
    return (
      <div className="flex items-center justify-between text-[#2C313F] w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6">
        <p className="std-font text-3xl sm:text-5xl md:text-6xl lg:text-[100px] leading-none sm:leading-tight md:leading-tight lg:leading-[120px] font-medium">Let's Talk</p>
        <div className="flex items-center"> 
          <p className="std-font text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase">Get in touch</p>
        </div>
      </div>
    );
  }