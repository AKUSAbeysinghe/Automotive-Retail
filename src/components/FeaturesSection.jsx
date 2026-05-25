import React from 'react';

export default function FeaturesRow() {
  const features = [
    {
      title: 'CERTIFIED WARRANTY',
      description: 'Every vehicle and part backed by our 12-month guarantee.',
      // Shield check icon
      icon: (
        <svg className="w-5 h-5 text-[#FF833E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'SAME-DAY SERVICE',
      description: 'Most parts in stock and installable the same day you order.',
      // Speedometer/gauge icon
      icon: (
        <svg className="w-5 h-5 text-[#FF833E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'EXPERT ADVISORS',
      description: 'ASE-certified technicians on call to help you decide.',
      // Headphones icon
      icon: (
        <svg className="w-5 h-5 text-[#FF833E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V9a6 6 0 00-12 0v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#121416] text-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start space-y-4">
              
              {/* Icon Container with subtle tinted border */}
              <div className="p-3.5 rounded-xl border border-[#FF833E]/20 bg-[#FF833E]/5 flex items-center justify-center select-none">
                {feature.icon}
              </div>

              {/* Text Group */}
              <div className="space-y-2">
                <h3 className="text-xl font-black tracking-wide font-mono text-white uppercase">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-[320px]">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}