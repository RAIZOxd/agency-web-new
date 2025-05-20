'use client';
import React from 'react';
import SlidingBanner from '@/components/elements/SlidingBanner';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Brand Consistency",
      excerpt: "Discover why maintaining brand consistency across all touchpoints is crucial for business success.",
      date: "May 15, 2023",
      category: "Branding",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Web Design Trends for 2023",
      excerpt: "Explore the latest web design trends that are shaping the digital landscape this year.",
      date: "April 28, 2023",
      category: "Web Design",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "How to Create an Effective UX Strategy",
      excerpt: "Learn the key components of a successful UX strategy and how to implement them in your projects.",
      date: "April 10, 2023",
      category: "UX Design",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Psychology of Color in Marketing",
      excerpt: "Understand how different colors affect consumer behavior and how to use this in your marketing.",
      date: "March 22, 2023",
      category: "Marketing",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Responsive Design Best Practices",
      excerpt: "Master the art of creating websites that look great on any device with these best practices.",
      date: "March 5, 2023",
      category: "Web Design",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Building a Strong Brand Identity",
      excerpt: "A step-by-step guide to developing a brand identity that resonates with your target audience.",
      date: "February 18, 2023",
      category: "Branding",
      readTime: "9 min read"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#EBECF0] py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold leading-tight md:leading-[120px] text-[#2C313F] clash-display-font mb-8">
            OUR BLOG
          </h1>
          <p className="text-xl md:text-2xl text-[#2C313F] opacity-80 std-font max-w-3xl mb-12">
            Insights, thoughts and trends from our creative team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 aspect-video bg-[#5AC4FF] rounded-lg"></div>
            <div className="w-full md:w-1/2">
              <span className="text-[#5AC4FF] font-medium">Featured Post</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C313F] clash-display-font mt-2 mb-4">
                The Future of Digital Design: AI and Human Creativity
              </h2>
              <div className="flex items-center text-[#2C313F] opacity-70 mb-6">
                <span>June 5, 2023</span>
                <span className="mx-2">•</span>
                <span>Design Thinking</span>
                <span className="mx-2">•</span>
                <span>10 min read</span>
              </div>
              <p className="text-lg text-[#2C313F] opacity-80 mb-6">
                Explore how artificial intelligence is transforming the design industry and how designers can 
                leverage AI tools while maintaining the human touch that makes great design resonate.
              </p>
              <button className="flex items-center bg-[#2C313F] text-white pr-2 pl-4 py-2 rounded-full hover:bg-gray-700 std-font">
                READ MORE
                <span className="ml-2 bg-[#5AC4FF] text-[18px] text-[#2C313F] px-4 py-2 rounded-full">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#EBECF0]">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C313F] clash-display-font mb-12">
            LATEST ARTICLES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-[#5AC4FF]"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-[#5AC4FF]">{post.category}</span>
                    <span className="text-sm text-[#2C313F] opacity-70">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C313F] mb-3">{post.title}</h3>
                  <p className="text-[#2C313F] opacity-70 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#2C313F] opacity-70">{post.date}</span>
                    <button className="text-[#2C313F] hover:text-[#5AC4FF]">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C313F] clash-display-font mb-6">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <p className="text-lg text-[#2C313F] opacity-80 mb-8">
            Stay updated with our latest insights, trends, and design tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow p-3 border border-[#2C313F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AC4FF]"
            />
            <button className="bg-[#2C313F] text-white px-6 py-3 rounded-lg hover:bg-gray-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <SlidingBanner />
    </main>
  );
}