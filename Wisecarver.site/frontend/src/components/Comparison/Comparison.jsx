/**
 * Comparison.jsx
 * Component to compare HLWNets with past digital booms.
 * Uses Tailwind CSS for styling.
 */
import React from 'react';

const Comparison = () => {
  const comparisons = [
    {
      title: 'Dot-Com Bubble (Late 1990s)',
      description:
        'The dot-com boom fueled web services, but speculative investments led to a crash. HLWNets support high-speed web applications (up to 10 Gbps) with stable infrastructure, leveraging existing LEDs to minimize financial risk.',
    },
    {
      title: 'WiFi Proliferation (Early 2000s)',
      description:
        'WiFi’s adoption faced spectrum congestion. HLWNets offload traffic to LiFi’s 300 THz optical spectrum, improving throughput by 18.58–38.5% and complementing WiFi’s coverage for seamless connectivity.',
    },
    {
      title: 'Fiber-Optic Rollout (2010s)',
      description:
        'Fiber delivers gigabit speeds to buildings, but indoor distribution is costly. HLWNets extend fiber indoors using LEDs, with 75% energy savings, enhancing healthcare and IoT applications.',
    },
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 bg-gray-100 fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Comparison with Past Digital Booms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {comparisons.map((comp) => (
            <article key={comp.title} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-800">
              <h3 className="text-lg md:text-xl font-semibold mb-4">{comp.title}</h3>
              <p className="text-base md:text-lg text-gray-600">{comp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
