/**
 * HomePage.jsx
 * Main page component for the Wisecarver Solutions LiFi and Edge AI healthcare systems webpage.
 * Composes individual components and manages scroll animations using Tailwind CSS for styling.
 */
import React, { useEffect } from 'react';
import './HomePage.css'; // Import custom styles for HomePage
import HomeSection from '../../components/HomeSection/HomeSection';
import SystemOverview from '../../components/SystemOverview/SystemOverview';
import LifiTimeline from '../../components/LifiTimeline/LifiTimeline';
import Solutions from '../../components/Solutions/Solutions';
import FAQ from '../../components/FAQ/FAQ';
import MarketOutlook from '../../components/MarketOutlook/MarketOutlook';
import TechnicalFramework from '../../components/TechnicalFramework/TechnicalFramework';
import Comparison from '../../components/Comparison/Comparison';
import Companies from '../../components/Companies/Companies';
import Implications from '../../components/Implications/Implications';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  // Handle scroll animations
  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.fade-in');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      elements.forEach((element) => observer.observe(element));
    };

    handleScrollAnimations();
  }, []);

  return (
    <main className="bg-network-diagram text-gray-900">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 md:py-12">
      <HomeSection />
      <SystemOverview />
      <LifiTimeline />
      <Solutions />
      <img
        src="/gifs/HEADER_dark_10MB.gif"
        alt="LiFi Group Partner Logo"
        className="w-full h-auto rounded-lg shadow-md mb-8 md:mb-12 fade-in"
      />
      <FAQ />
      <MarketOutlook />
      <TechnicalFramework />
      <Comparison />
      <Companies />
      <Implications />
      <Contact />
      <Footer />

      </div>
    </main>
  );
};

export default HomePage;
