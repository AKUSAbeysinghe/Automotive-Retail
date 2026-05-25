import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'DEALERSHIPS', href: '/Dealership' },
    { name: 'PARTS', href: '/AutoParts' },
    { name: 'ACCESSORIES', href: '/Accessories' },
    { name: 'CONTACT', href: '/Contact' },
  ];

  return (
    <nav className="bg-[#121416] text-[#E4E4E7] px-6 py-4 font-sans border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3 select-none">
          <div className="bg-gradient-to-br from-[#FF833E] to-[#FA541C] text-[#121416] font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
            M
          </div>
          <span className="text-white font-extrabold tracking-wider text-xl uppercase font-mono">
            Motorhaus
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 tracking-wide">
            BOOK TEST DRIVE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-800 space-y-3 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#9CA3AF] hover:text-white text-sm font-semibold tracking-wide py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold text-sm px-6 py-3 rounded-lg shadow-lg mt-2">
            BOOK TEST DRIVE
          </button>
        </div>
      )}
    </nav>
  );
}