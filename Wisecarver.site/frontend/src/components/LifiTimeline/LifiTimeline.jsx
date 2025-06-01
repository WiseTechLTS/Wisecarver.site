/**
 * LifiTimeline.jsx
 * Component to display the timeline of LiFi innovation milestones.
 * Uses Tailwind CSS for styling and includes a link to LiFi Group’s history.
 */
import React from 'react';

const LifiTimeline = () => {
  const timelineItems = [
    {
      year: '2011: LiFi Coined',
      description:
        'The term "LiFi" was introduced by Professor Harald Haas during a TEDGlobal talk, marking the conceptual birth of light fidelity technology.',
    },
    {
      year: '2013: First LiFi Product',
      description:
        'LiFi Group launched the world’s first LiFi product, demonstrating practical applications of light-based data transmission.',
    },
    {
      year: '2017: LiFi-XC Launch',
      description:
        'The LiFi-XC system was introduced, offering plug-and-play functionality and high-speed connectivity, now a cornerstone of our hospital deployments.',
    },
    {
      year: '2023: 1 Gbps Achieved',
      description:
        'LiFi Group achieved 1 Gbps speeds in real-world environments, enabling Wisecarver Solutions to deliver unparalleled performance in healthcare settings.',
    },
  ];

  return (
    <section id="lifi-timeline" className="py-16 md:py-24 bg-white fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">LiFi Innovation Timeline</h2>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-12">
          Wisecarver Solutions partners with LiFi Group, (Pending) a pioneer in LiFi technology. Below is a timeline of
          LiFi Group’s milestones, showcasing the evolution of light-based communication that powers our healthcare
          solutions. Learn more at
          <a
            href="https://www.lifigroup.com/our-history/"
            className="underline text-blue-600 hover:text-blue-800"
          >
            {' '}
            LiFi Group’s history page
          </a>
          .
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {timelineItems.map((item) => (
            <article key={item.year} className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-blue-800">
              <h3 className="text-lg md:text-xl font-semibold mb-4">{item.year}</h3>
              <p className="text-base md:text-lg">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifiTimeline;
