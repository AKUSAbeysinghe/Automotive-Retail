// import React from 'react';
// import AccessoriesGrid from './AccessoriesGrid';
// import AccessoriesEnd  from './Accessoriesend';

// export default function AccessoriesHero() {
//   return (
//     <section className="relative bg-neutral-955 text-white min-h-[450px] flex flex-col justify-center px-6 sm:px-12 md:px-24 overflow-hidden">
//       {/* Background Image Overlay (Car Interior/Seats) */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none"
//         style={{ 
//           backgroundImage: `url('https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop')` 
//         }}
//       />

//       {/* Content Container */}
//       <div className="relative z-10 max-w-5xl space-y-6">
        
//         {/* Category Label */}
//         <span className="text-xs font-bold tracking-[0.25em] uppercase text-orange-500 block">
//           Accessories
//         </span>

//         {/* Main Headline */}
//         <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[1.05]">
//           Make it <span className="text-orange-500">Yours.</span>
//         </h2>

//         {/* Description */}
//         <p className="text-neutral-400 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed">
//           Audio, interiors, lighting, and tech upgrades — professionally installed 
//           by our certified shop.
//         </p>
        
//       </div>
//       <AccessoriesGrid />
//       <AccessoriesEnd />
//     </section>
     
//   );
// }

//black one
// import React from 'react';

// export default function AccessoriesHero() {
//   return (
//     <section className="relative min-h-[500px] w-full bg-neutral-950 flex items-center overflow-hidden">
//       {/* Background Image Overlay with Dark Vignette */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-lighten"
//         style={{ 
//           // Replace with your actual path to the car interior image
//           backgroundImage: `url('/path-to-your-car-interior-image.jpg')` 
//         }}
//       />
//       {/* Linear and radial gradients to mimic the moody, dark studio lighting */}
//       <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.15),transparent_50%)]" />

//       {/* Content Container */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
//         <div className="max-w-2xl space-y-4">
          
//           {/* Kicker / Sub-identifier */}
//           <p className="text-xs font-bold tracking-[0.25em] uppercase text-orange-600 sm:text-sm">
//             Accessories
//           </p>
          
//           {/* Main Headline */}
//           <h1 className="text-5xl font-black tracking-tight text-white uppercase sm:text-6xl md:text-7xl font-sans">
//             Make it <span className="text-orange-500">yours.</span>
//           </h1>
          
//           {/* Description Text */}
//           <p className="pt-2 text-base font-light tracking-wide text-neutral-400 sm:text-lg md:text-xl max-w-xl leading-relaxed">
//             Audio, interiors, lighting, and tech upgrades — professionally installed by our certified shop.
//           </p>
          
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { Volume2, Armchair, Smartphone, Camera } from 'lucide-react';
import BannerAccessory from "../../assets/Accessories/BannerAccessory.jpg";


// ======================
// Accessories Hero
// ======================
export function AccessoriesHero() {
  return (
    <section className="relative min-h-[500px] w-full bg-neutral-950 flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-lighten"
        style={{
          backgroundImage: `url(${BannerAccessory})`,
        }}
      />
      
      {/* Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.15),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-orange-600 sm:text-sm">
            Accessories
          </p>

          <h1 className="text-5xl font-black tracking-tight text-white uppercase sm:text-6xl md:text-7xl">
            Make it <span className="text-orange-500">yours.</span>
          </h1>

          <p className="pt-2 text-base font-light tracking-wide text-neutral-400 sm:text-lg md:text-xl max-w-xl leading-relaxed">
            Audio, interiors, lighting, and tech upgrades — professionally installed by our certified shop.
          </p>
        </div>
      </div>
    </section>
  );
}

// ======================
// Accessories Grid (Audio + Interiors)
// ======================
export function AccessoriesGrid() {
  const services = [
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

  return (
    <section className="bg-neutral-950 py-12 md:py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300 hover:border-orange-500/40 hover:bg-neutral-900 group cursor-pointer"
              >
                <div>
                  <div className="bg-orange-500 text-black p-3 rounded-xl inline-flex items-center justify-center transition-transform group-hover:scale-105 duration-300 mb-6">
                    <IconComponent className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-neutral-100 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <div className="border-t border-neutral-800/60 my-4" />
                  <div className="flex items-center justify-between">
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

// ======================
// Smart Tech Grid
// ======================
export function SmartTechGrid() {
  const services = [
    {
      title: 'Smart Tech',
      description: 'CarPlay & Android Auto retrofits, wireless chargers, OBD diagnostics.',
      price: '$59',
      icon: Smartphone,
    },
    {
      title: 'Dash Cams',
      description: '1080p–4K front & rear, GPS, parking mode protection.',
      price: '$129',
      icon: Camera,
    },
  ];

  return (
    <section className="bg-neutral-950 py-12 md:py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300 hover:border-orange-500/40 hover:bg-neutral-900 group cursor-pointer"
              >
                <div>
                  <div className="bg-orange-500 text-black p-3 rounded-xl inline-flex items-center justify-center transition-transform group-hover:scale-105 duration-300 mb-6">
                    <IconComponent className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-neutral-100 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <div className="border-t border-neutral-800/60 my-4" />
                  <div className="flex items-center justify-between">
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

// ======================
// Main Combined Component
// ======================
export default function AccessoriesPage() {
  return (
    <>
      <AccessoriesHero />
      <AccessoriesGrid />
      <SmartTechGrid />
    </>
  );
}