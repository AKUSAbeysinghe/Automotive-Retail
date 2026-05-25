// import React from 'react';
// import { Volume2, Armchair } from 'lucide-react';

// export default function AccessoriesGrid() {
//   const services = [
//     {
//       title: 'Premium Audio',
//       description: 'JBL, Pioneer, Alpine head units, subs, amps & speaker upgrades.',
//       price: '$149',
//       icon: Volume2,
//     },
//     {
//       title: 'Custom Interiors',
//       description: 'Leather seat covers, dash kits, floor liners, ambient lighting.',
//       price: '$89',
//       icon: Armchair,
//     },
//   ];

//   return (
//     <section className="bg-neutral-950 p-6 sm:p-12 md:p-16 text-white">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/30 hover:bg-neutral-900 group cursor-pointer min-h-[260px]"
//               >
//                 {/* Top Section: Icon & Heading Layout */}
//                 <div>
//                   {/* Orange Icon Container */}
//                   <div className="bg-orange-500 text-black p-3 rounded-xl inline-flex items-center justify-center transition-transform group-hover:scale-105 duration-300 mb-6">
//                     <IconComponent className="w-6 h-6 stroke-[2.5]" />
//                   </div>
                  
//                   {/* Feature Title */}
//                   <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-neutral-100 group-hover:text-white transition-colors">
//                     {service.title}
//                   </h3>
                  
//                   {/* Feature Description */}
//                   <p className="text-neutral-400 text-sm sm:text-base mt-2 font-normal leading-relaxed max-w-md">
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Bottom Section: Pricing Meta */}
//                 <div className="mt-8">
//                   {/* Fine Separator Line */}
//                   <div className="border-t border-neutral-800/60 my-4" />
                  
//                   {/* Price & Install Status Wrapper */}
//                   <div className="flex items-center justify-between w-full">
//                     <span className="text-orange-500 font-bold uppercase tracking-wider text-base sm:text-lg">
//                       From {service.price}
//                     </span>
//                     <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">
//                       Install Included
//                     </span>
//                   </div>
//                 </div>

//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }







import React from 'react';
import { Volume2, Armchair } from 'lucide-react';

export default function AccessoriesGrid({ services = [] }) {

  // Default / Fallback data (shown if admin sends nothing)
  const defaultServices = [
    {
      title: 'Premium Audio',
      description: 'JBL, Pioneer, Alpine head units, subs, amps & speaker upgrades.',
      price: '$149',
      icon: Volume2,
    },
    {
      title: 'Custom Interiors',
      description: 'Leather seat covers, dash kits, floor liners, ambient lighting.',
      price: '$89',
      icon: Armchair,
    },
  ];

  // Use admin data or fallback
  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section className="bg-neutral-950 p-6 sm:p-12 md:p-16 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/30 hover:bg-neutral-900 group cursor-pointer min-h-[260px]"
              >
                {/* Top Section: Icon & Heading Layout */}
                <div>
                  {/* Orange Icon Container */}
                  <div className="bg-orange-500 text-black p-3 rounded-xl inline-flex items-center justify-center transition-transform group-hover:scale-105 duration-300 mb-6">
                    <IconComponent className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  
                  {/* Feature Title */}
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-neutral-100 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="text-neutral-400 text-sm sm:text-base mt-2 font-normal leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Section: Pricing Meta */}
                <div className="mt-8">
                  {/* Fine Separator Line */}
                  <div className="border-t border-neutral-800/60 my-4" />
                  
                  {/* Price & Install Status Wrapper */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-base sm:text-lg">
                      From {service.price}
                    </span>
                    <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">
                      Install Included
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}