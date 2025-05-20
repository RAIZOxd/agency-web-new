'use client';
import { useState, useEffect } from 'react';
import SlidingBanner from '@/components/elements/SlidingBanner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const filters = ['All', 'Branding', 'Web Design', 'UI/UX', 'Print', 'Motion'];
  
  const projects = [
    { id: 1, title: "Brand Identity for Tech Startup", category: "Branding", color: "#5AC4FF", image: "/images/project-1.jpg", description: "Complete brand identity design for an innovative tech startup." },
    { id: 2, title: "E-commerce Website Redesign", category: "Web Design", color: "#FF5A5A", image: "/images/project-2.jpg", description: "Modern e-commerce platform with enhanced user experience." },
    { id: 3, title: "Mobile App UI Design", category: "UI/UX", color: "#5AFF8F", image: "/images/project-3.jpg", description: "Intuitive and engaging mobile application interface design." },
    { id: 4, title: "Annual Report Design", category: "Print", color: "#FFDB5A", image: "/images/project-4.jpg", description: "Visually compelling annual report for a global corporation." },
    { id: 5, title: "Product Launch Campaign", category: "Branding", color: "#C45AFF", image: "/images/project-5.jpg", description: "Integrated marketing campaign for a major product launch." },
    { id: 6, title: "Corporate Website", category: "Web Design", color: "#FF9D5A", image: "/images/project-6.jpg", description: "Professional website redesign for a financial services firm." },
    { id: 7, title: "Brand Guidelines", category: "Branding", color: "#5AC4FF", image: "/images/project-7.jpg", description: "Comprehensive brand guidelines for consistent brand application." },
    { id: 8, title: "Motion Graphics Intro", category: "Motion", color: "#5AFF8F", image: "/images/project-8.jpg", description: "Dynamic motion graphics intro for a media company." },
  ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              OUR PROJECTS
            </h1>
            <p 
              className="text-xl md:text-2xl text-[#2C313F] opacity-80 std-font max-w-3xl mb-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
              }}
            >
              Explore our portfolio of work across various industries and design disciplines.
            </p>
          </div>
        </section>

        {/* Projects Filter */}
        <section className="py-10 px-4 sm:px-6 bg-white border-b border-gray-200">
          <div className="container mx-auto">
            <div 
              className="flex flex-wrap gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s'
              }}
            >
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-lg transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-[#2C313F] text-white shadow-lg'
                      : 'bg-[#EBECF0] text-[#2C313F] hover:bg-gray-300 hover:shadow-md'
                  }`}
                  style={{
                    transitionDelay: `${0.3 + index * 0.05}s`
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition-all duration-500"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 0.8s ease ${0.4 + index * 0.1}s, transform 0.8s ease ${0.4 + index * 0.1}s`
                  }}
                >
                  <div className="relative overflow-hidden">
                    {/* Project Image */}
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Glowing Overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ 
                        background: `radial-gradient(circle at center, ${project.color} 0%, transparent 70%)`,
                        filter: 'blur(20px)'
                      }}
                    ></div>
                    
                    {/* Color Overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ backgroundColor: project.color }}
                    ></div>
                  </div>
                  
                  <div className="p-6 bg-[#EBECF0] group-hover:bg-white transition-colors duration-300">
                    <span 
                      className="text-sm font-medium transition-colors duration-300"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#2C313F] mt-1 group-hover:translate-x-1 transition-transform duration-300">{project.title}</h3>
                    <p className="text-[#2C313F] opacity-70 mt-2 mb-4 line-clamp-2">{project.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-[#2C313F] group-hover:text-[#5AC4FF] transition-colors duration-300">View Project</span>
                      <span 
                        className="bg-[#5AC4FF] text-[#2C313F] p-2 rounded-full transform transition-all duration-300 group-hover:rotate-45 group-hover:scale-110"
                        style={{
                          boxShadow: `0 0 0 rgba(90, 196, 255, 0), 0 0 0 rgba(90, 196, 255, 0)`,
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 15px ${project.color}, 0 0 30px rgba(90, 196, 255, 0.5)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 0 0 rgba(90, 196, 255, 0), 0 0 0 rgba(90, 196, 255, 0)';
                        }}
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#2C313F] text-white">
          <div className="container mx-auto text-center">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold clash-display-font mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s'
              }}
            >
              HAVE A PROJECT IN MIND?
            </h2>
            <p 
              className="text-xl opacity-80 max-w-2xl mx-auto mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s'
              }}
            >
              Let's collaborate to create something amazing together.
            </p>
            <button 
              className="flex items-center bg-white text-[#2C313F] pr-2 pl-4 py-2 rounded-full hover:bg-gray-200 std-font mx-auto transform transition-transform duration-300 hover:scale-105 active:scale-95"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s'
              }}
            >
              GET IN TOUCH
              <span className="ml-2 bg-[#5AC4FF] text-[18px] text-[#2C313F] px-4 py-2 rounded-full">
                ↗
              </span>
            </button>
          </div>
        </section>

        <SlidingBanner />
      </main>
      <Footer />
    </>
  );
}