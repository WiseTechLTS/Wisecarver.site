/**
 * Header.jsx
 * Navigation header component for the Wisecarver Solutions webpage.
 * Uses Tailwind CSS for styling and provides a sticky navigation bar.
 */
import React from 'react';

const Header = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#system-overview', label: 'System Overview' },
    { href: '#lifi-timeline', label: 'LiFi Timeline' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#lifi-group-partner', label: 'LiFi Group Partner' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-blue-800 text-white sticky top-0 z-20 shadow-lg">
      <nav className="container mx-auto px-4 py-4 md:px-6 md:py-6 flex flex-col md:flex-row items-center justify-between">
        <a href="/" className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
          Wisecarver.site
        </a>
        <ul className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-base md:text-lg hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
