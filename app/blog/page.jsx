'use client';
import SlidingBanner from '@/components/elements/SlidingBanner';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useEffect, useState } from 'react';

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Brand Consistency",
      excerpt: "Discover why maintaining brand consistency across all touchpoints is crucial for business success.",
      date: "May 15, 2023",
      category: "Branding",
      readTime: "5 min read",
      image: "/images/blog-1.jpg",
      color: "#5AC4FF"
    },
    {
      id: 2,
      title: "Web Design Trends for 2023",
      excerpt: "Explore the latest web design trends that are shaping the digital landscape this year.",
      date: "April 28, 2023",
      category: "Web Design",
      readTime: "7 min read",
      image: "/images/blog-2.jpg",
      color: "#FF5A5A"
    },
    {
      id: 3,
      title: "How to Create an Effective UX Strategy",
      excerpt: "Learn the key components of a successful UX strategy and how to implement them in your projects.",
      date: "April 10, 2023",
      category: "UX Design",
      readTime: "6 min read",
      image: "/images/blog-3.jpg",
      color: "#5AFF8F"
    },
    {
      id: 4,
      title: "The Psychology of Color in Marketing",
      excerpt: "Understand how different colors affect consumer behavior and how to use this in your marketing.",
      date: "March 22, 2023",
      category: "Marketing",
      readTime: "8 min read",
      image: "/images/blog-4.jpg",
      color: "#FFDB5A"
    },
    {
      id: 5,
      title: "Responsive Design Best Practices",
      excerpt: "Master the art of creating websites that look great on any device with these best practices.",
      date: "March 5, 2023",
      category: "Web Design",
      readTime: "5 min read",
      image: "/images/blog-5.jpg",
      color: "#C45AFF"
    },
    {
      id: 6,
      title: "Building a Strong Brand Identity",
      excerpt: "A step-by-step guide to developing a brand identity that resonates with your target audience.",
      date: "February 18, 2023",
      category: "Branding",
      readTime: "9 min read",
      image: "/images/blog-6.jpg",
      color: "#FF9D5A"
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
              OUR BLOG
            </h1>
            <p 
              className="text-xl md:text-2xl text-[#2C313F] opacity-80 std-font max-w-3xl mb-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
              }}
            >
              Insights, thoughts and trends from our creative team.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto">
            <div 
              className="flex flex-col md:flex-row gap-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s'
              }}
            >
              <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden group">
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src="/images/blog-featured.jpg" 
                    alt="The Future of Digital Design" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ 
                      background: 'radial-gradient(circle at center, #5AC4FF 0%, transparent 70%)',
                      filter: 'blur(20px)'
                    }}
                  ></div>
                </div>
              </div>
              <div 
                className="w-full md:w-1/2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                  transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s'
                }}
              >
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
                <button className="flex items-center bg-[#2C313F] text-white pr-2 pl-4 py-2 rounded-full hover:bg-gray-700 std-font transition-transform duration-300 hover:scale-105 active:scale-95">
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
            <h2 
              className="text-3xl sm:text-4xl font-bold text-[#2C313F] clash-display-font mb-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
              }}
            >
              LATEST ARTICLES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 0.8s ease ${0.5 + index * 0.1}s, transform 0.8s ease ${0.5 + index * 0.1}s`
                  }}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ 
                        background: `radial-gradient(circle at center, ${post.color} 0%, transparent 70%)`,
                        filter: 'blur(15px)'
                      }}
                    ></div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                  </div>
                  <div className="p-6 relative">
                    <div 
                      className="absolute -top-3 left-6 px-3 py-1 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: post.color,
                        color: '#FFFFFF',
                        boxShadow: `0 3px 10px ${post.color}50`
                      }}
                    >
                      {post.category}
                    </div>
                    <div className="flex justify-end items-center mb-3">
                      <span className="text-sm text-[#2C313F] opacity-70">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2C313F] mb-3 group-hover:text-[#5AC4FF] transition-colors duration-300">{post.title}</h3>
                    <p className="text-[#2C313F] opacity-70 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#2C313F] opacity-70">{post.date}</span>
                      <button 
                        className="text-[#2C313F] group-hover:text-[#5AC4FF] flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
                      >
                        Read More 
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
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
          <div 
            className="container mx-auto max-w-3xl text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s'
            }}
          >
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
                className="flex-grow p-3 border border-[#2C313F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AC4FF] transition-all duration-300"
              />
              <button className="bg-[#2C313F] text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <SlidingBanner />
      </main>
      <Footer />
    </>
  );
}