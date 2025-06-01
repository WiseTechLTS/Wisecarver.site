/**
 * Companies.jsx
 * Component to list US companies in LiFi manufacturing.
 * Uses Tailwind CSS for styling and includes a table with links.
 */
import React from 'react';

const Companies = () => {
  const companies = [
    {
      name: 'VLNComm',
      location: 'Silicon Valley, CA; Charlottesville, VA',
      products: 'LumiNex ($1499.99), LumiStick II ($499.99)',
      focus: 'Eco-friendly VLC',
      url: 'https://vlncomm.com',
    },
    {
      name: 'Terra Ferma',
      location: 'USA',
      products: 'Helios, Fortis LiFi (2025)',
      focus: 'Defense communication',
      url: null,
    },
    {
      name: 'Basic6',
      location: 'Connecticut',
      products: 'IoT VLC solutions',
      focus: 'IoT integration',
      url: null,
    },
  ];

  return (
    <section id="companies" className="py-16 md:py-24 bg-white fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">US Companies in LiFi Manufacturing</h2>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-12">
          The US LiFi market is poised for growth (67.5% CAGR, 2025–2030). Key players driving adoption include:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="py-4 px-6 text-left text-lg font-semibold">Company</th>
                <th className="py-4 px-6 text-left text-lg font-semibold">Location</th>
                <th className="py-4 px-6 text-left text-lg font-semibold">Products</th>
                <th className="py-4 px-6 text-left text-lg font-semibold">Focus</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.name} className="bg-gray-50">
                  <td className="py-4 px-6 text-lg">
                    {company.url ? (
                      <a href={company.url} className="text-blue-600 hover:underline">
                        {company.name}
                      </a>
                    ) : (
                      company.name
                    )}
                  </td>
                  <td className="py-4 px-6 text-lg">{company.location}</td>
                  <td className="py-4 px-6 text-lg">{company.products}</td>
                  <td className="py-4 px-6 text-lg">{company.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-base md:text-lg text-gray-600 mt-4">
          Sources:{' '}
          <a href="https://www.mdpi.com/1424-8220/23/9/4252" className="text-blue-600 hover:underline">
            MDPI, 2023
          </a>
          ;{' '}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11014341/" className="text-blue-600 hover:underline">
            PMC, 2024
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Companies;
