'use client';
import React from 'react';
import SlidingBanner from '@/components/elements/SlidingBanner';

export default function CategoryPage() {
  const categories = [
    { name: "Branding", count: 12, color: "#5AC4FF" },
    { name: "Web Design", count: 18, color: "#FF5A5A" },
    { name: "UI/UX", count: 15, color: "#5AFF8F" },
    { name: "Print", count: 9, color: "#FFDB5A" },
    { name: "Motion", count: 7, color: "#C45AFF" },
    { name: "Packaging", count: 11, color: "#FF9D5A" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#EBECF0] py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold leading-tight md:leading-[120px] text-[#2C313F] clash-display-font mb-8">
            CATEGORIES
          </h1>
          <p className="text-xl md:text-2xl text-[#2C313F] opacity-80 std-font max-w-3xl mb-12">
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
                style={{ backgroundColor: category.color }}
              >
                <div className="aspect-[4/3] p-8 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2C313F] clash-display-font">
                    {category.name}
                  </h2>
                  <div className="flex justify-between items-end">
                    <span className="text-xl text-[#2C313F] opacity-80">
                      {category.count} Projects
                    </span>
                    <span className="bg-[#2C313F] text-white p-3 rounded-full">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C313F] clash-display-font mb-12">
            FEATURED PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div key={project} className="overflow-hidden rounded-lg bg-white">
                <div className="aspect-video bg-[#5AC4FF]"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C313F] mb-2">Project Title {project}</h3>
                  <p className="text-[#2C313F] opacity-70 mb-4">Branding, Web Design</p>
                  <button className="flex items-center text-[#2C313F] hover:underline">
                    View Project
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SlidingBanner />
    </main>
  );
}