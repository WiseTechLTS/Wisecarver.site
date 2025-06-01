/**
 * FAQ.jsx
 * Component to display frequently asked questions about LiFi and Edge AI systems.
 * Uses Tailwind CSS for styling and collapsible details elements.
 */
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How does LiFi function in healthcare?',
      answer:
        'LiFi uses LED modulation (OOK/OFDM) for data transmission, offering 1 Gbps speeds without interference, ideal for congested hospital environments.',
    },
    {
      question: 'What are LiFi’s limitations?',
      answer:
        'Line-of-sight and infrastructure costs are challenges, addressed by our hybrid Wi-Fi/LiFi designs and optimized LED placement.',
    },
    {
      question: 'How does edge AI improve monitoring?',
      answer:
        'Edge AI processes data locally with < 10ms latency, using TensorFlow Lite for 99.8% accurate anomaly detection in vital signs.',
    },
    {
      question: 'What are contract terms?',
      answer: 'Contracts offer leasing or managed services with 24/7 support and upgrades every 18 months, customized to client scale.',
    },
    {
      question: 'What does IP ownership include?',
      answer: 'Clients gain full control over hardware schematics and AI models, enabling bespoke modifications or resale.',
    },
    {
      question: 'What does the hybrid model offer?',
      answer:
        'The hybrid model combines leasing with partial IP licensing, allowing scalability and customization with annual support and upgrade discounts.',
    },
    {
      question: 'How scalable are your systems?',
      answer: 'Systems support 100+ devices per access point, with modular designs allowing expansion across multi-floor hospitals.',
    },
    {
      question: 'What maintenance do you provide?',
      answer: 'Contracts include quarterly hardware checks, software updates, and 24/7 remote support, ensuring 99.9% uptime.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-100 fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <summary className="text-base md:text-lg font-semibold cursor-pointer">{faq.question}</summary>
              <p className="text-base md:text-lg mt-4">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
