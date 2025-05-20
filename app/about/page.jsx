'use client';
import SlidingBanner from '@/components/elements/SlidingBanner';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useEffect, useState } from 'react';

export default function AboutPage() {
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
              ABOUT US
            </h1>
            <div className="flex flex-col md:flex-row gap-10">
              <div 
                className="w-full md:w-1/2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                  transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
                }}
              >
                <p className="text-xl md:text-2xl text-[#2C313F] opacity-80 std-font mb-6">
                  We are a creative design agency based in San Francisco, specializing in branding, 
                  digital design, and strategic marketing solutions that help businesses stand out.
                </p>
                <p className="text-xl md:text-2xl text-[#2C313F] opacity-80 std-font">
                  Founded in 2015, our team of designers, developers, and strategists work together 
                  to create meaningful experiences that connect brands with their audiences.
                </p>
              </div>
              <div 
                className="w-full md:w-1/2 bg-[#5AC4FF] h-[300px] md:h-[400px] rounded-lg overflow-hidden"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                  transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
                }}
              >
                <img 
                  src="/images/about-hero.jpg" 
                  alt="Creative team working together" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C313F] clash-display-font mb-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease'
              }}
            >
              OUR VALUES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Innovation", desc: "We push boundaries and explore new possibilities in design and technology." },
                { title: "Collaboration", desc: "We believe great work happens when diverse minds come together." },
                { title: "Excellence", desc: "We're committed to delivering the highest quality in everything we do." }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="p-6 border border-[#2C313F] rounded-lg hover:bg-[#5AC4FF] hover:border-transparent transition-all duration-300 group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 0.8s ease ${0.2 + index * 0.2}s, transform 0.8s ease ${0.2 + index * 0.2}s`
                  }}
                >
                  <h3 className="text-2xl font-bold text-[#2C313F] mb-4 group-hover:text-white transition-colors duration-300">{value.title}</h3>
                  <p className="text-lg text-[#2C313F] opacity-70 group-hover:text-white group-hover:opacity-90 transition-colors duration-300">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#EBECF0]">
          <div className="container mx-auto">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C313F] clash-display-font mb-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease'
              }}
            >
              OUR TEAM
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "John Doe", position: "Creative Director", image: "/images/team-1.jpg" },
                { name: "Sarah Smith", position: "Lead Designer", image: "/images/team-2.jpg" },
                { name: "Michael Chen", position: "Developer", image: "/images/team-3.jpg" },
                { name: "Emma Wilson", position: "Marketing Strategist", image: "/images/team-4.jpg" }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="text-center"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 0.8s ease ${0.2 + index * 0.15}s, transform 0.8s ease ${0.2 + index * 0.15}s`
                  }}
                >
                  <div className="w-full aspect-square bg-[#5AC4FF] rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C313F]">{member.name}</h3>
                  <p className="text-[#2C313F] opacity-70">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SlidingBanner />
      </main>
      <Footer />
    </>
  );
}