"use client";

export default function AboutUsSection() {
    return (
      <section className="bg-[#EBECF0] pt-2 pb-10 sm:pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="w-full max-w-[1366px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Side */}
          <div>
            <hr className="w-20 sm:w-24 md:w-28 border-[#2C313F] mb-4 sm:mb-6" />
            <h2 className="font-bold text-[#2C313F] text-base sm:text-lg md:text-[20px] leading-6 sm:leading-7 md:leading-8 jakarta-font">WE'RE A CREATIVE AND <br className="hidden sm:block"/>TALENTED TEAM OF DESIGNERS</h2>
            <div className="flex space-x-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl sm:text-4xl md:text-5xl text-[#171717]">★</span>
              ))}
            </div>
          </div>
  
          {/* Right Side */}
          <div>
            <p className="text-[#2C313F] leading-snug sm:leading-relaxed md:leading-[45px] text-lg sm:text-2xl md:text-[29px] font-normal std-font w-full">
              Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed. Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-16 lg:space-x-32">
              <div>
                <p className="text-6xl sm:text-8xl md:text-[100px] lg:text-[140px] leading-none sm:leading-tight md:leading-[140px] font-medium text-[#2C313F] std-font">100+</p>
                <p className="text-[#2C313F] text-left sm:text-center jakarta-font text-base sm:text-lg md:text-xl font-bold mt-1">100+ CREATIVE & FUTURISTIC</p>
              </div>
              <div>
                <p className="text-6xl sm:text-8xl md:text-[100px] lg:text-[140px] leading-none sm:leading-tight md:leading-[140px] font-medium text-[#2C313F] std-font">15yr</p>
                <p className="text-[#2C313F] text-left sm:text-center jakarta-font text-base sm:text-lg font-bold mt-1">HAVE WORKING 15 YEARS+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  