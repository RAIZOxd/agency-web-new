import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function WorkSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-gray-900">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-lg font-semibold uppercase">Take a look at</h2>
            <h2 className="text-lg font-semibold uppercase">Some of our work</h2>
          </div>
          <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full">
            All Projects <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra.
              Commodo etiam vestibulum quam tristique non venenatis sed. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full"
          >
            <SwiperSlide>
              <div className="relative">
                <Image 
                  src="/bag-mockup.jpg"
                  width={600}
                  height={400}
                  alt="Branding & Website"
                  className="rounded-xl"
                />
                <p className="absolute bottom-2 left-4 text-sm text-white">© 2022. X3 Branding & Website</p>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="relative">
                <Image 
                  src="/laptop-mockup.jpg"
                  width={600}
                  height={400}
                  alt="Creative Vision"
                  className="rounded-xl"
                />
                <p className="absolute bottom-2 left-4 text-sm text-white">© 2022. Creative Vision</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}