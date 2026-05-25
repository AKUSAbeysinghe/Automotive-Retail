import React from 'react';

export default function StatsSection() {
  const stats = [
    { value: '120+', label: 'BRANDS' },
    { value: '45K', label: 'PARTS IN STOCK' },
    { value: '98%', label: 'CUSTOMER RATING' },
    { value: '24/7', label: 'SUPPORT' },
  ];

  return (
    <section className="bg-[#0F1113] border-t border-b border-gray-800/60 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Responsive Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-gray-800/80">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center text-center p-6 md:p-8 
                ${index % 2 === 1 ? 'sm:border-l sm:border-gray-800/80' : ''} 
                ${index >= 2 ? 'sm:border-t sm:border-gray-800/80 lg:border-t-0' : ''}`}
            >
              {/* Highlight Metric Value */}
              <span className="text-5xl md:text-6xl font-black tracking-tight text-[#FF833E] font-mono mb-3 select-none">
                {stat.value}
              </span>
              
              {/* Sub-label Description */}
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-400 uppercase font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}