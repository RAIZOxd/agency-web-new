"use client";

export default function AboutUsSection() {
    return (
      <section className="bg-[#EBECF0] py-2 px-6">
        <div className="w-[1366px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <hr className="w-28 border-[#2C313F] mb-6" />
            <h2 className="font-bold text-[#2C313F] text-[20px] leading-8">WE'RE A CREATIVE AND <br/>TALENTED TEAM OF DESIGNERS</h2>
            <div className="flex space-x-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-5xl text-[#171717]">★</span>
              ))}
            </div>
          </div>
  
          {/* Right Side */}
          <div>
            <p className="text-[#2C313F] leading-[45px] text-[29px] font-normal std-font w-[726px]">
              Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed. Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="mt-16 flex space-x-32">
              <div>
                <p className="text-[140px] leading-[140px] font-medium text-[#2C313F] std-font">100+</p>
                <p className="text-[#2C313F] text-center jakarta-font text-xl font-[700px] mt-1">100+ CREATIVE & FUTURISTIC</p>
              </div>
              <div>
                <p className="text-[140px] leading-[140px] font-medium text-[#2C313F] std-font">15yr</p>
                <p className="text-[#2C313F] text-center jakarta-font text-lg font-[700px] mt-1">HAVE WORKING 15 YEARS+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  