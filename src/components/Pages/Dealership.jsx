import React, { useState } from 'react';
import DealershipFetures from "../Pages/DelerFeatures.jsx";
import DealBannerPic from "../../assets/Dealship/BannerDeal.jpg";

export default function DealershipPageHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navLinks = [
  //   { name: 'HOME', href: '#' },
  //   { name: 'DEALERSHIPS', href: '#', active: true },
  //   { name: 'PARTS', href: '#' },
  //   { name: 'ACCESSORIES', href: '#' },
  //   { name: 'CONTACT', href: '#' },
  // ];

  const brands = [
    'TOYOTA', 'FORD', 'HONDA', 'BMW', 
    'MAZDA', 'HYUNDAI', 'KIA', 'NISSAN'
  ];

  return (
    <div className="bg-[#0B0D0F] min-h-screen text-white flex flex-col font-sans">
      
      {/* 1. Global Navigation Bar */}
      {/* <nav className="relative z-30 bg-[#121416] text-[#E4E4E7] px-6 py-4 border-b border-gray-800/60"> */}
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          {/* <div className="flex items-center space-x-3 select-none">
            <div className="bg-gradient-to-br from-[#FF833E] to-[#FA541C] text-[#121416] font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
              M
            </div>
            <span className="text-white font-extrabold tracking-wider text-xl uppercase font-mono">
              Motorhaus
            </span>
          </div> */}

          {/* Desktop Nav Items */}
          {/* <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 ${
                  link.active ? 'text-[#FF833E]' : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div> */}

          {/* Desktop Call to Action */}
          {/* <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 tracking-wide">
              BOOK TEST DRIVE
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-800 space-y-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide py-2 ${
                  link.active ? 'text-[#FF833E]' : 'text-[#9CA3AF]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold text-sm px-6 py-3 rounded-lg shadow-lg mt-2">
              BOOK TEST DRIVE
            </button>
          </div>
        )}
      {/* </nav> */}

      {/* 2. Hero Content Section & Showroom Background */}
      <section className="relative flex-1 flex flex-col justify-between overflow-hidden pt-20 md:pt-28">
        
        {/* Showroom Image Underlay Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none select-none"
          style={{ 
            // Replace with your actual dealership showroom image path
            backgroundImage: `url(${DealBannerPic})` 
          }}
        />
        {/* Deep bottom fade gradient matching the images */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent pointer-events-none" />

        {/* Main Header Text Core Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24 flex flex-col items-start space-y-4 mb-auto">
          <span className="text-[#FF833E] text-xs md:text-sm font-bold tracking-[0.25em] uppercase block">
            DEALERSHIPS
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase font-mono select-none">
            THE RIGHT CAR.{' '}
            <span className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] bg-clip-text text-transparent block sm:inline">
              THE RIGHT DEAL.
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light pt-2">
            Shop our authorized inventory of new and certified pre-owned vehicles 
            from the brands you trust.
          </p>
        </div>

        {/* 3. Bottom Pinned Brand Horizontal Ribbon */}
        <div className="relative z-10 w-full bg-[#121416]/70 border-t border-b border-gray-800/40 backdrop-blur-sm mt-16">
          <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 overflow-x-auto scrollbar-none">
            <div className="flex items-center justify-between min-w-[768px] lg:min-w-0 md:px-8 gap-6">
              {brands.map((brand) => (
                <span 
                  key={brand} 
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base font-black tracking-[0.18em] font-mono select-none cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>
      <DealershipFetures/>
    </div>
  );
} 