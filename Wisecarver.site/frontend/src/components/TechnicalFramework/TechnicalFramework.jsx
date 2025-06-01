/**
 * TechnicalFramework.jsx
 * Component to describe the technical components and performance of HLWNets.
 * Uses Tailwind CSS for styling.
 */
import React from 'react';

const TechnicalFramework = () => (
  <section id="tech" className="py-16 md:py-24 bg-white fade-in">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Technical Framework</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md border-t-4 border-blue-800">
          <h3 className="text-lg md:text-2xl font-semibold mb-4">Components</h3>
          <p className="text-base md:text-lg text-gray-600">
            HLWNets combine LiFi access points (APs) using LEDs (9W, 60° semi-angle) and photodetectors with WiFi APs (2.4
            GHz, 20 MHz bandwidth). Wired backhaul options include Plastic Optic Fiber (POF, up to 15.7 Gbps) or Power over
            Ethernet (PoE, 1 Gbps), ensuring reliable connectivity.
          </p>
        </div>
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md border-t-4 border-blue-800">
          <h3 className="text-lg md:text-2xl font-semibold mb-4">Performance</h3>
          <p className="text-base md:text-lg text-gray-600">
            LiFi APs achieve data rates up to 10 Gbps with &lt; 1ms latency in optimal conditions. A DNN-based handover
            system ensures 96% accuracy, boosting throughput by 18.58–38.5% and reducing handovers by 55.21–67.15% compared
            to traditional methods.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TechnicalFramework;
