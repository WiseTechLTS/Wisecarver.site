/**
 * Implications.jsx
 * Component to outline the implications of HLWNets for enterprises.
 * Uses Tailwind CSS for styling.
 */
import React from 'react';

const Implications = () => (
  <section id="implications" className="py-16 md:py-24 bg-white fade-in">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Implications for Enterprises</h2>
      <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md border-l-4 border-blue-800">
        <p className="text-base md:text-lg text-gray-600 mb-4">
          HLWNets offer sustainable, high-performance connectivity for enterprises. A sample integration plan includes:
        </p>
        <ul className="text-base md:text-lg text-gray-600 list-disc list-inside space-y-2">
          <li>Assess network needs and coverage areas (1–2 weeks).</li>
          <li>Deploy LiFi APs with PoE backhaul (4–5 weeks).</li>
          <li>Implement DNN-based handover for seamless transitions (96% accuracy, 2–3 weeks testing).</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Implications;
