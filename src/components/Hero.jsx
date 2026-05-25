import React from 'react';
import BannerCar from "../assets/Mains/SidedCar.jpg";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0B0D0F] text-white min-h-[600px] flex items-center justify-start overflow-hidden font-sans px-6 md:px-16 lg:px-24 py-20">
      
      {/* Background Image Overlay with Dark Vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 select-none pointer-events-none"
        style={{ 
          backgroundImage: `url(${BannerCar})`
        }}
      />

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(250,84,28,0.12),transparent_50%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl flex flex-col items-start space-y-6">
        
        {/* Top Tag */}
        <div className="inline-flex items-center space-x-2 border border-[#FF833E]/30 bg-[#FF833E]/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF833E] animate-pulse" />
          <span className="text-[#FF833E] text-xs font-bold tracking-widest uppercase">
            EST. 1998 · AUTOMOTIVE RETAIL
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase font-mono select-none">
          DRIVE WHAT <span className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] bg-clip-text text-transparent">MOVES</span> YOU.
        </h1>

        {/* Subtitle Description */}
        <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light">
          From the showroom floor to the toolbox — Motorhaus delivers cars, 
          parts, and accessories that meet the road on your terms.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
          
          {/* Primary CTA */}
          <button className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold text-sm tracking-wider px-8 py-4 rounded-lg shadow-lg hover:brightness-110 active:scale-98 transition-all duration-200">
            <span>BROWSE INVENTORY</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Secondary CTA */}
          <button className="flex items-center justify-center border border-gray-800 bg-[#121416]/60 text-white font-bold text-sm tracking-wider px-8 py-4 rounded-lg hover:bg-gray-800/80 hover:border-gray-700 active:scale-98 transition-all duration-200 backdrop-blur-sm">
            SHOP PARTS
          </button>
        </div>
      </div>
    </section>
  );
}