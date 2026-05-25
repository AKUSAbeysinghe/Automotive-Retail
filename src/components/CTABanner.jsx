import React from 'react';

export default function CtaBanner() {
  return (
    <section className="bg-[#121416] py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Card Container with Orange Gradient Background */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FF6B2B] via-[#FF5411] to-[#E03E00] px-8 py-16 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl">
          
          {/* Faded Background Graphic Blend */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none select-none"
            style={{ 
              // Replace with your sports car background silhouette asset
              backgroundImage: `url('/path-to-your-car-silhouette.jpg')` 
            }}
          />
          {/* Subtle neon glow circle replication */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-72 h-72 rounded-full border border-yellow-300/30 pointer-events-none hidden md:block" />

          {/* Text Content Block */}
          <div className="relative z-10 max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#121416] font-mono uppercase leading-none">
              READY FOR THE KEYS?
            </h2>
            <p className="text-[#121416]/80 text-base md:text-lg lg:text-xl font-medium max-w-xl leading-relaxed">
              Book a test drive at one of our locations or chat with an advisor today.
            </p>
          </div>

          {/* CTA Action Button */}
          <div className="relative z-10 w-full lg:w-auto">
            <button className="group flex items-center justify-center space-x-3 w-full sm:w-auto bg-[#121416] text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-xl shadow-xl hover:bg-[#1C2024] active:scale-98 transition-all duration-200">
              <span>GET IN TOUCH</span>
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
          </div>

        </div>

      </div>
    </section>
  );
}