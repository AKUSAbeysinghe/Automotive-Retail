// import React from 'react';
// import FeatureDealPic from "../assets/Dealship/FeatureDealship.jpg";
// import FeatureAutoPartPic from "../assets/AutoParts/FeatureAutoParts.jpg";
// import FeatureAccessoriesPic from "../assets/Accessories/FeatureAccessories.jpg";

// export default function DivisionsSection() {
//   const divisions = [
//     {
//       title: 'DEALERSHIPS',
//       description: 'New & certified Toyota, Ford, Honda and more.',
//       image: FeatureDealPic, // Replace with actual image path
//       icon: (
//         <svg className="w-5 h-5 text-[#121416]" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M19 10.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5a1 1 0 01.3-.7l7-6a1 1 0 011.4 0l7 6a1 1 0 01.3.7zM12 4.7L5 10.7V19h14v-8.3L12 4.7z" />
//           <path d="M7 12h3v5H7v-5zm7 0h3v5h-3v-5z" />
//         </svg>
//       ),
//     },
//     {
//       title: 'AUTO PARTS',
//       description: 'OEM & aftermarket from AutoZone, NAPA & top brands.',
//       image: FeatureAutoPartPic, // Replace with actual image path
//       icon: (
//         <svg className="w-5 h-5 text-[#121416]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>
//       ),
//     },
//     {
//       title: 'ACCESSORIES',
//       description: 'Premium audio, interiors, lighting & performance mods.',
//       image: FeatureAccessoriesPic, // Replace with actual image path
//       icon: (
//         <svg className="w-5 h-5 text-[#121416]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <section className="bg-[#121416] text-white py-20 px-6 md:px-16 lg:px-24">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end mb-16">
//           <div>
//             <span className="text-[#FF833E] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
//               THREE DIVISIONS
//             </span>
//             <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase font-mono leading-none">
//               ONE DESTINATION.
//             </h2>
//           </div>
//           <div>
//             <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-xl font-light leading-relaxed">
//               Whether you're buying a daily driver, replacing brake pads, or 
//               wiring a new subwoofer — we've got the inventory and the expertise.
//             </p>
//           </div>
//         </div>

//         {/* Feature Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {divisions.map((item, index) => (
//             <div 
//               key={index} 
//               className="group relative h-[480px] rounded-3xl overflow-hidden bg-gray-900 border border-gray-800/40 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-gray-700"
//             >
//               {/* Asset Background */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               />
              
//               {/* High-Contrast Gradient Underlay to ensure text scannability */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

//               {/* Card Content Wrapper */}
//               <div className="absolute inset-0 p-8 flex flex-col justify-end items-start space-y-4">
                
//                 {/* Brand Accent Icon Box */}
//                 <div className="bg-[#FF833E] p-3 rounded-xl shadow-md select-none">
//                   {item.icon}
//                 </div>

//                 {/* Info */}
//                 <div>
//                   <h3 className="text-2xl font-black tracking-wide font-mono text-white uppercase mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm font-light leading-snug max-w-[260px]">
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Inline Interaction Anchor */}
//                 <div className="pt-2 flex items-center space-x-2 text-[#FF833E] text-xs font-bold tracking-widest uppercase">
//                   <span>EXPLORE</span>
//                   <svg 
//                     className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" 
//                     fill="none" 
//                     viewBox="0 0 24 24" 
//                     stroke="currentColor" 
//                     strokeWidth={3}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }




import React from 'react';
import { useNavigate } from 'react-router-dom';

import FeatureDealPic from "../assets/Dealship/FeatureDealship.jpg";
import FeatureAutoPartPic from "../assets/AutoParts/FeatureAutoParts.jpg";
import FeatureAccessoriesPic from "../assets/Accessories/FeatureAccessories.jpg";

export default function DivisionsSection() {
  const navigate = useNavigate();

  const divisions = [
    {
      title: 'DEALERSHIPS',
      description: 'New & certified Toyota, Ford, Honda and more.',
      image: FeatureDealPic,
      icon: (
        <svg className="w-5 h-5 text-[#121416]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 10.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5a1 1 0 01.3-.7l7-6a1 1 0 011.4 0l7 6a1 1 0 01.3.7zM12 4.7L5 10.7V19h14v-8.3L12 4.7z" />
          <path d="M7 12h3v5H7v-5zm7 0h3v5h-3v-5z" />
        </svg>
      ),
      path: '/Dealership', // ← Add route here
    },
    {
      title: 'AUTO PARTS',
      description: 'OEM & aftermarket from AutoZone, NAPA & top brands.',
      image: FeatureAutoPartPic,
      icon: (
        <svg className="w-5 h-5 text-[#121416]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      path: '/AutoParts', // ← Add route here
    },
    {
      title: 'ACCESSORIES',
      description: 'Premium audio, interiors, lighting & performance mods.',
      image: FeatureAccessoriesPic,
      icon: (
        <svg className="w-5 h-5 text-[#121416]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      path: '/accessories', // ← Add route here
    },
  ];

  return (
    <section className="bg-[#121416] text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end mb-16">
          <div>
            <span className="text-[#FF833E] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              THREE DIVISIONS
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase font-mono leading-none">
              ONE DESTINATION.
            </h2>
          </div>
          <div>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-xl font-light leading-relaxed">
              Whether you're buying a daily driver, replacing brake pads, or 
              wiring a new subwoofer — we've got the inventory and the expertise.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[480px] rounded-3xl overflow-hidden bg-gray-900 border border-gray-800/40 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-gray-700 cursor-pointer"
              onClick={() => navigate(item.path)}
            >
              {/* Asset Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* High-Contrast Gradient Underlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Card Content Wrapper */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start space-y-4">
                
                {/* Brand Accent Icon Box */}
                <div className="bg-[#FF833E] p-3 rounded-xl shadow-md select-none">
                  {item.icon}
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-2xl font-black tracking-wide font-mono text-white uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-light leading-snug max-w-[260px]">
                    {item.description}
                  </p>
                </div>

                {/* Inline Interaction Anchor */}
                <div className="pt-2 flex items-center space-x-2 text-[#FF833E] text-xs font-bold tracking-widest uppercase">
                  <span>EXPLORE</span>
                  <svg 
                    className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}