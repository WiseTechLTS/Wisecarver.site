
/**
 * Solutions.jsx
 * Component to showcase LiFi system components and business models.
 * Uses Tailwind CSS for styling and includes images and a business model table.
 */
import React from 'react';

const Solutions = () => {
  const components = [
    {
      title: 'LiFi Hardware',
      description: [
        'Our LiFi systems use LiFi Group XC (100 Mbps–1 Gbps, 5m range) and researchdesignlab.com LiFi TX modules (~$133 USD, 10 Mbps). These support OOK and OFDM, achieving < 1ms latency in optimal conditions.',
        'Strategic LED placement mitigates line-of-sight issues, ensuring reliable data transmission in high-density hospital settings.',
      ],
      image: '/gifs/lifi2.png',
      alt: 'LiFi data transfer visualization',
    },
    {
      title: 'Data Transfer Speeds',
      description: [
        "Our LiFi systems deliver exceptional performance with data transfer speeds up to <span class='text-blue-600 font-bold'>1 Gbps</span>. Compared to traditional Wi-Fi, which typically offers speeds up to 100 Mbps, LiFi provides a tenfold increase in speed, making it ideal for the demands of modern healthcare.",
        "With ongoing advancements, experimental LiFi systems have achieved speeds up to <span class='text-blue-600 font-bold'>10 Gbps</span>, promising even greater capabilities in the future.",
      ],
      image: '/gifs/LiFi Frequency.webp',
      alt: 'LiFi LED',
    },
    {
      title: 'Edge AI Processing',
      description: [
        'NVIDIA Jetson Nano (472 GFLOPS) runs TensorFlow Lite models, processing vital signs with 99.8% anomaly detection accuracy. Models are trained on anonymized datasets, optimized for low power (5–10W).',
        'Local processing ensures < 10ms latency, critical for real-time diagnostics.',
      ],
      image: '/gifs/sym1XK.gif',
      alt: 'LiFi data transfer visualization',
    },
    {
      title: 'System Integration for SMBs',
      description: [
        'For small-to-medium healthcare facilities like clinics (50–150 devices), integrating LiFi and edge AI systems delivers secure, high-speed patient monitoring in 14–20 weeks (3.5–5 months). The process includes:',
        `<ul class="text-sm md:text-base list-disc list-inside mb-4 space-y-2">
            <li><strong>Needs Assessment (1 week):</strong> Evaluate clinic infrastructure and requirements.</li>
            <li><strong>Hardware Selection (1–2 weeks):</strong> Choose cost-effective LiFi Group XC transceivers for plug-and-play integration.</li>
            <li><strong>Network Design (2–3 weeks):</strong> Plan compact layouts optimized for small spaces using LiFi Group’s technology.</li>
            <li><strong>Procurement (3–4 weeks):</strong> Source LiFi Group kits to minimize costs.</li>
            <li><strong>Installation (4–5 weeks):</strong> Deploy LiFi-enabled LEDs and NVIDIA Jetson Nano for AI processing.</li>
            <li><strong>Testing (2–3 weeks):</strong> Validate < 5ms latency, 99.8% AI accuracy, and HL7-compliant EHR integration.</li>
            <li><strong>Training & Deployment (1–2 weeks):</strong> Train staff with LiFi Group’s management tools for easy operation.</li>
          </ul>`,
        'Budget and space constraints are addressed with affordable, scalable solutions, ensuring HIPAA-compliant 1 Gbps connectivity tailored for clinics.',
      ],
      image: null,
      alt: null,
    },
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-white fade-in">
      <div className="container fluid mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">LiFi System Components</h2>
        <div className="container fluid mx-auto px-4 md:px-6 mb-8 md:mb-12">
        <img
          src="../../assets/lifi2.png"
          alt="LiFi technology transmitting binary data through LED bulbs"
          className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-md mb-8 md:mb-12"
          role="img"
          aria-label="LiFi technology transmitting binary data through LED bulbs"
          loading="lazy"
        />
        </div>
        <section className="lifi-container mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {components.map((comp) => (
              <article key={comp.title} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg border-t-4 border-blue-800">
                <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">{comp.title}</h3>
                {comp.description.map((desc, index) => (
                  <p key={index} className="text-base md:text-lg mb-4" dangerouslySetInnerHTML={{ __html: desc }}></p>
                ))}
                {comp.image && (
                  <img
                    src={comp.image}
                    alt={comp.alt}
                    className="w-full h-auto rounded-lg shadow-md mb-4"
                    role="img"
                    aria-label={comp.alt}
                  />
                )}
              </article>
            ))}
            <div className="lg:col-span-2 space-y-6">
              <img
                src="/gifs/office.gif"
                alt="Line-of-sight LiFi data transfer"
                className="w-full h-auto rounded-lg shadow-md"
                role="img"
                aria-label="Line-of-sight LiFi data transfer"
              />
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">LiFi Office Deployment</h3>
              <p>
                LiFi technology is deployed in our office, demonstrating its capabilities in a real-world setting. The
                system uses LED bulbs to transmit data securely and efficiently, showcasing the potential for high-speed
                communication in healthcare environments.
              </p>
              <img
                src="/gifs/origin.gif"
                alt="LiFi office deployment"
                className="w-full h-auto rounded-lg shadow-md"
                role="img"
                aria-label="LiFi office deployment"
              />
            </div>
          </div>
        </section>
        <section id="business-model" className="py-16 md:py-24 bg-gray-50 fade-in">
          <article className="lg:col-span-3">
            <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-center">Business Model</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-blue-800 text-white">
                    <th className="py-4 px-6 text-left text-lg font-semibold">Model</th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">Description</th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">Key Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-lg font-medium">Contracts</td>
                    <td className="py-4 px-6 text-lg">
                      Leasing or managed services include installation and 24/7 maintenance, with upgrades every 18 months.
                    </td>
                    <td className="py-4 px-6 text-lg">
                      <ul className="list-disc list-inside">
                        <li>Full installation and setup</li>
                        <li>24/7 remote support</li>
                        <li>Hardware/software upgrades</li>
                        <li>Scalable for 50–500 devices</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-lg font-medium">IP Ownership</td>
                    <td className="py-4 px-6 text-lg">
                      Post-purchase, clients own hardware designs and AI algorithms, enabling customization.
                    </td>
                    <td className="py-4 px-6 text-lg">
                      <ul className="list-disc list-inside">
                        <li>Full ownership of schematics</li>
                        <li>Customizable AI models</li>
                        <li>One-time purchase</li>
                        <li>Optional maintenance contract</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-lg font-medium">Hybrid</td>
                    <td className="py-4 px-6 text-lg">
                      Combines leasing with partial IP licensing, offering flexibility for hospitals to scale and customize.
                    </td>
                    <td className="py-4 px-6 text-lg">
                      <ul className="list-disc list-inside">
                        <li>Leasing with IP access</li>
                        <li>Customizable hardware</li>
                        <li>Annual support agreement</li>
                        <li>Upgrade discounts</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Solutions;
