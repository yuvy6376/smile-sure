'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#', label: 'HOME' },
    { href: '#', label: 'ABOUT' },
    { href: '#', label: 'SERVICES' },
    { href: '#', label: 'DENTISTS' },
    { href: '#', label: 'PRICING' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <div
            className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            SmileSure
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center space-x-6 px-8 py-3 rounded-full bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white text-sm font-medium hover:text-blue-300 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}

              {/* Dropdown */}
              <div className="relative group cursor-pointer">
                <span className="text-white text-sm font-medium hover:text-blue-300 transition-colors duration-200 flex items-center">
                  ALL PAGES
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white/95 backdrop-blur-md rounded-xl shadow-xl py-2 border border-gray-200">
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Page 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Page 2
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-800 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 mb-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Dropdown */}
            <div className="px-6 py-3">
              <div className="text-gray-700 font-medium mb-2">ALL PAGES</div>
              <div className="pl-4 space-y-2">
                <a
                  href="#"
                  className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Page 1
                </a>
                <a
                  href="#"
                  className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Page 2
                </a>
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div className="px-6 pt-4">
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
