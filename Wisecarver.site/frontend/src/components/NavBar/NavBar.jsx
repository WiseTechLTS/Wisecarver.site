// Navbar.jsx
import React, { useState } from "react";
import "./NavBar.css"; // CSS file for navbar-specific styling

// Navbar component provides navigation for the Wisecarver Solutions website
const Navbar = () => {
  // State to manage mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand Name */}
        <div className="navbar-logo left">
        </div>

        {/* Navigation Links */}
        <nav className={`navbar-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </a>
            </li>
            <li>
              <a href="/research" onClick={() => setIsMobileMenuOpen(false)}>
                Research
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;