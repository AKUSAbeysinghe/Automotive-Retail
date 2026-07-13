import React from 'react';

export default function Footer() {
  const shopLinks = [
    { name: 'Dealerships', href: '/Dealership' },
    { name: 'Auto Parts', href: '/AutoParts' },
    { name: 'Accessories', href: '/Accessories' },
  ];

  const companyLinks = [
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ];

  return (
    <footer className="bg-[#121416] text-gray-400 text-sm py-16 px-6 md:px-16 lg:px-24 border-t border-gray-800/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 pb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 select-none">
              <div className="bg-gradient-to-br from-[#FF833E] to-[#FA541C] text-[#121416] font-black text-lg w-9 h-9 flex items-center justify-center rounded-lg shadow-md">
                M
              </div>
              <span className="text-white font-extrabold tracking-wider text-lg uppercase font-mono">
                MOTORHAUS
              </span>
            </div>
            <p className="leading-relaxed text-gray-400 font-light max-w-[240px]">
              Your complete automotive destination — cars, parts, and accessories under one roof.
            </p>
          </div>

          {/* Column 2: Shop Links */}
          <div className="space-y-4">
            <h4 className="text-white font-black tracking-wider text-base uppercase font-mono">
              SHOP
            </h4>
            <ul className="space-y-3 font-light">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#FF833E] transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="space-y-4">
            <h4 className="text-white font-black tracking-wider text-base uppercase font-mono">
              COMPANY
            </h4>
            <ul className="space-y-3 font-light">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#FF833E] transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Visit / Physical Address Info */}
          <div className="space-y-4">
            <h4 className="text-white font-black tracking-wider text-base uppercase font-mono">
              VISIT
            </h4>
            <div className="space-y-2 font-light leading-relaxed">
              <p className="text-gray-300">1200 Motorway Ave</p>
              <p className="text-gray-300">Los Angeles, CA 90015</p>
              <p className="text-gray-500 text-xs pt-1">
                Mon–Sat · <span className="text-gray-400">9am–8pm</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="border-t border-gray-800/80 pt-8 text-center">
          <p className="text-xs tracking-widest text-gray-500 uppercase font-medium">
            &copy; 2026 MOTORHAUS. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}