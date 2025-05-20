'use client';
import { useEffect, useState } from 'react';
import SlidingBanner from '@/components/elements/SlidingBanner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function CategoryPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { name: "Branding", count: 12, color: "#5AC4FF", image: "/images/category-branding.jpg" },
    { name: "Web Design", count: 18, color: "#FF5A5A", image: "/images/category-webdesign.jpg" },
    { name: "UI/UX", count: 15, color: "#5AFF8F", image: "/images/category-uiux.jpg" },
    { name: "Print", count: 9, color: "#FFDB5A", image: "/images/category-print.jpg" },
    { name: "Motion", count: 7, color: "#C45AFF", image: "/images/category-motion.jpg" },
    { name: "Packaging", count: 11, color: "#FF9D5A", image: "/images/category-packaging.jpg" },
  ];

  const featuredProjects = [
    { 
      id: 1, 
      title: "Brand Identity for Tech Startup", 
      categories: "Branding, Web Design",
      image: "/images/project-tech.jpg"
    },
    { 
      id: 2, 
      title: "E-commerce Website Redesign", 
      categories: "Web Design, UI/UX",
      image: "/images/project-ecommerce.jpg"
    }
  ];

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
              CATEGORIES
            </h1>
            <p 
              className="text-xl md:text-2xl text-[#2C313F] opacity-80 std-font max-w-3xl mb-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
              }}
            >
              Explore our work by category and discover our expertise across different design disciplines.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-lg cursor-pointer group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 0.8s ease ${0.2 + index * 0.1}s, transform 0.8s ease ${0.2 + index * 0.1}s`
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-80 z-0"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  
                  {/* Image Background */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    />
                  </div>
                  
                  {/* Glowing Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"
                    style={{ 
                      background: `radial-gradient(circle at center, ${category.color} 0%, transparent 70%)`,
                      filter: 'blur(15px)'
                    }}
                  ></div>
                  
                  <div className="aspect-[4/3] p-8 flex flex-col justify-between relative z-20 transition-transform duration-300 group-hover:scale-105">
                    <h2 className="text-3xl md:text-4xl font-bold text-white clash-display-font drop-shadow-md">
                      {category.name}
                    </h2>
                    <div className="flex justify-between items-end">
                      <span className="text-xl text-white opacity-90 drop-shadow-md">
                        {category.count} Projects
                      </span>
                      <span className="bg-white text-[#2C313F] p-3 rounded-full transform transition-transform duration-300 group-hover:rotate-45">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
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
              FEATURED PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 0.8s ease ${0.4 + index * 0.2}s, transform 0.8s ease ${0.4 + index * 0.2}s`
                  }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#2C313F] mb-2">{project.title}</h3>
                    <p className="text-[#2C313F] opacity-70 mb-4">{project.categories}</p>
                    <button className="flex items-center text-[#2C313F] hover:text-[#5AC4FF] transition-colors duration-300 group">
                      View Project
                      <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
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