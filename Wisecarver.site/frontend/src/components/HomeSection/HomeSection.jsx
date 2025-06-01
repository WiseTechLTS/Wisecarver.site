/**
 * HomeSection.jsx
 * Hero section for the Wisecarver Solutions webpage, introducing LiFi IT.
 * Uses Tailwind CSS for styling and includes a call-to-action.
 */
import React from 'react';

const HomeSection = () => (
  <section
    id="home"
    className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white min-h-screen flex items-center fade-in"
  >
    <div className="container mx-auto px-4 py-4 md:px-6 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">LiFi IT</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0">
            Revolutionizing data security with high-speed, secure data transmission using light-based communication.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-800 text-lg md:text-xl px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Discover Our Affiliate Technology
          </a>
        </div>
        <img src="/gifs/stringbulbs.gif" alt="Glowing LiFi LED" className="w-full rounded-full" />
      </div>
    </div>
  </section>
);

export default HomeSection;
