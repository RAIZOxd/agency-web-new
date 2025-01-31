// components/SlidingBanner.jsx
'use client';
export default function SlidingBanner() {
    return (
      <div className="relative overflow-hidden flex items-center justify-center bg-[#5AC4FF] h-[182px]">
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
      <div className="flex items-center justify-between text-[#2C313F] w-full px-10 py-6">
        <p className="std-font text-[100px] leading-[120px] max-md:text-4xl font-medium">Let's Talk</p>
        <div className="flex items-center"> 
          <p className="std-font text-xl max-md:text-2xl font-bold uppercase">Get in touch</p>
        </div>
      </div>
    );
  }