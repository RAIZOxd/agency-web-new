'use client';
import { useEffect, useState } from 'react';
import SlidingBanner from '@/components/elements/SlidingBanner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#EBECF0] py-16 md:py-24 px-4 sm:px-6">
          <div className="container mx-auto">
            <h1 
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold leading-tight md:leading-[120px] text-[#2C313F] clash-display-font mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease'
              }}
            >
              CONTACT US
            </h1>
            <p 
              className="text-xl md:text-2xl text-[#2C313F] opacity-80 std-font max-w-3xl mb-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
              }}
            >
              Have a project in mind? Let's talk about how we can help bring your ideas to life.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div 
                className="w-full md:w-1/2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                  transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s'
                }}
              >
                <h2 className="text-3xl font-bold text-[#2C313F] clash-display-font mb-8">
                  GET IN TOUCH
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg text-[#2C313F] mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 border border-[#2C313F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AC4FF] transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg text-[#2C313F] mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 border border-[#2C313F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AC4FF] transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg text-[#2C313F] mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full p-3 border border-[#2C313F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AC4FF] transition-all duration-300"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="flex items-center bg-[#2C313F] text-white pr-2 pl-4 py-2 rounded-full hover:bg-gray-700 std-font transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    SEND MESSAGE
                    <span className="ml-2 bg-[#5AC4FF] text-[18px] text-[#2C313F] px-4 py-2 rounded-full">
                      ↗
                    </span>
                  </button>
                </form>
              </div>
              <div 
                className="w-full md:w-1/2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                  transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s'
                }}
              >
                <h2 className="text-3xl font-bold text-[#2C313F] clash-display-font mb-8">
                  CONTACT INFO
                </h2>
                <div className="space-y-6">
                  <div className="transform transition-transform duration-300 hover:translate-x-2">
                    <h3 className="text-xl font-bold text-[#2C313F] mb-2">Address</h3>
                    <p className="text-lg text-[#2C313F] opacity-70">123 Design Street, San Francisco, CA 94103</p>
                  </div>
                  <div className="transform transition-transform duration-300 hover:translate-x-2">
                    <h3 className="text-xl font-bold text-[#2C313F] mb-2">Email</h3>
                    <p className="text-lg text-[#2C313F] opacity-70">hello@fiftyagency.com</p>
                  </div>
                  <div className="transform transition-transform duration-300 hover:translate-x-2">
                    <h3 className="text-xl font-bold text-[#2C313F] mb-2">Phone</h3>
                    <p className="text-lg text-[#2C313F] opacity-70">+1 (415) 555-0123</p>
                  </div>
                  <div className="pt-6">
                    <div className="w-full h-[300px] bg-[#5AC4FF] rounded-lg overflow-hidden">
                      <img 
                        src="/images/contact-map.jpg" 
                        alt="Office location map" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SlidingBanner />
      </main>
      <Footer />
    </>
  );
}