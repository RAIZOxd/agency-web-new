'use client';
import React, { useState } from 'react';
import SlidingBanner from '@/components/elements/SlidingBanner';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Branding', 'Web Design', 'UI/UX', 'Print', 'Motion'];
  
  const projects = [
    { id: 1, title: "Brand Identity for Tech Startup", category: "Branding", color: "#5AC4FF" },
    { id: 2, title: "E-commerce Website Redesign", category: "Web Design", color: "#FF5A5A" },
    { id: 3, title: "Mobile App UI Design", category: "UI/UX", color: "#5AFF8F" },
    { id: 4, title: "Annual Report Design", category: "Print", color: "#FFDB5A" },
    { id: 5, title: "Product Launch Campaign", category: "Branding", color: "#C45AFF" },
    { id: 6, title: "Corporate Website", category: "Web Design", color: "#FF9D5A" },
    { id: 7, title: "Brand Guidelines", category: "Branding", color: "#5AC4FF" },
    { id: 8, title: "Motion Graphics Intro", category: "Motion", color: "#5AFF8F" },
  ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#EBECF0] py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold leading-tight md:leading-[120px] text-[#2C313F] clash-display-font mb-8">
            OUR PROJECTS
          </h1>
          <p className="text-xl md:text-2xl text-[#2C313F] opacity-80 std-font max-w-3xl mb-12">
            Explore our portfolio of work across various industries and design disciplines.
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-10 px-4 sm:px-6 bg-white border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-lg transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#2C313F] text-white'
                    : 'bg-[#EBECF0] text-[#2C313F] hover:bg-gray-300'
                }`}
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
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="overflow-hidden rounded-lg cursor-pointer group"
              >
                <div 
                  className="aspect-square transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: project.color }}
                ></div>
                <div className="p-6 bg-[#EBECF0]">
                  <span className="text-sm text-[#2C313F] opacity-70">{project.category}</span>
                  <h3 className="text-xl font-bold text-[#2C313F] mt-1">{project.title}</h3>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-[#2C313F]">View Project</span>
                    <span className="bg-[#5AC4FF] text-[#2C313F] p-2 rounded-full">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold clash-display-font mb-6">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto mb-8">
            Let's collaborate to create something amazing together.
          </p>
          <button className="flex items-center bg-white text-[#2C313F] pr-2 pl-4 py-2 rounded-full hover:bg-gray-200 std-font mx-auto">
            GET IN TOUCH
            <span className="ml-2 bg-[#5AC4FF] text-[18px] text-[#2C313F] px-4 py-2 rounded-full">
              ↗
            </span>
          </button>
        </div>
      </section>

      <SlidingBanner />
    </main>
  );
}