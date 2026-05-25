// import React from 'react';
// import {
//   CircleDot,
//   BatteryCharging,
//   Droplet,
//   Wrench,
//   Settings,
//   Zap
// } from 'lucide-react';
// import BannerAutoParts from "../../assets/AutoParts/BannerAutoParts.jpg";

// export default function AutoPartsPage() {
//   const mainCategories = [
//     { title: 'Brakes & Rotors', skus: '1,240 SKUs', price: '$39', icon: CircleDot },
//     { title: 'Batteries', skus: '180 SKUs', price: '$109', icon: BatteryCharging },
//     { title: 'Oil & Fluids', skus: '320 SKUs', price: '$24', icon: Droplet },
//     { title: 'Suspension', skus: '680 SKUs', price: '$79', icon: Wrench },
//   ];

//   const additionalCategories = [
//     { title: 'Engine Parts', skus: '2,100 SKUs', price: '$19', icon: Settings },
//     { title: 'Electrical', skus: '950 SKUs', price: '$12', icon: Zap },
//   ];

//   const brands = [
//     'AUTOZONE',
//     'NAPA',
//     'BOSCH',
//     'MOBIL 1',
//     'DENSO',
//     'BREMBO',
//     'K&N',
//     'ACDELCO'
//   ];

//   return (
//     <>
//       {/* ====================== HERO ====================== */}
//       <section className="relative bg-neutral-950 text-white overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
//           style={{ backgroundImage: `url(${BannerAutoParts})` }}
//         />

//         <div className="relative z-10 px-6 sm:px-12 md:px-24 pt-16 pb-12 md:pb-20">
//           <div className="max-w-5xl space-y-6">
//             <span className="text-xs font-bold tracking-[0.25em] uppercase text-orange-500 block">
//               Auto Parts
//             </span>

//             <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[1.05]">
//               Built to <span className="text-orange-500">Last.</span> Priced to move.
//             </h1>

//             <p className="text-neutral-400 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
//               45,000+ parts from the brands mechanics actually trust. Same-day
//               pickup at any <span className="text-neutral-300 font-medium">Motorhaus</span> location.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ====================== SHOP BY CATEGORY ====================== */}
//       <section className="bg-neutral-950 py-12 md:py-16 text-white">
//         <div className="max-w-6xl mx-auto px-6 sm:px-8">
//           <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mb-10 text-neutral-100">
//             Shop By Category
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {mainCategories.map((category, index) => {
//               const IconComponent = category.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:border-orange-500/40 hover:bg-neutral-900 group cursor-pointer"
//                 >
//                   <div className="flex items-start justify-between">
//                     <div className="bg-orange-500 text-black p-3 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
//                       <IconComponent className="w-6 h-6 stroke-[2.5]" />
//                     </div>

//                     <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
//                       From {category.price}
//                     </span>
//                   </div>

//                   <div className="mt-auto pt-6">
//                     <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-neutral-100 group-hover:text-white">
//                       {category.title}
//                     </h3>

//                     <p className="text-neutral-500 text-sm mt-1">
//                       {category.skus}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ====================== ENGINE + ELECTRICAL ====================== */}
//       <section className="bg-neutral-950 pb-12 md:pb-16 text-white">
//         <div className="max-w-6xl mx-auto px-6 sm:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {additionalCategories.map((category, index) => {
//               const IconComponent = category.icon;

//               return (
//                 <div
//                   key={index}
//                   className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:border-orange-500/40 hover:bg-neutral-900 group cursor-pointer"
//                 >
//                   <div className="flex items-start justify-between">
//                     <div className="bg-orange-500 text-black p-3 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
//                       <IconComponent className="w-6 h-6 stroke-[2.5]" />
//                     </div>

//                     <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
//                       From {category.price}
//                     </span>
//                   </div>

//                   <div className="mt-auto pt-6">
//                     {/* ONLY FIX APPLIED HERE */}
//                     <h3 className="min-h-[64px] flex items-end text-xl sm:text-2xl font-black tracking-tight uppercase text-neutral-100 group-hover:text-white">
//                       {category.title}
//                     </h3>

//                     <p className="text-neutral-500 text-sm mt-1">
//                       {category.skus}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Brands Section */}
//           <div className="border-t border-neutral-900 pt-12 mt-16 text-center">
//             <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-500 mb-8">
//               STOCKED BRANDS
//             </h4>

//             <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12">
//               {brands.map((brand, idx) => (
//                 <span
//                   key={idx}
//                   className="text-neutral-500 hover:text-neutral-300 font-black tracking-tight uppercase text-xl md:text-2xl transition-colors duration-200 cursor-default"
//                 >
//                   {brand}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }






import React from 'react';
import {
  CircleDot,
  BatteryCharging,
  Droplet,
  Wrench,
  Settings,
  Zap
} from 'lucide-react';
import BannerAutoParts from "../../assets/AutoParts/BannerAutoParts.jpg";

export default function AutoPartsPage({
  mainCategories = [],
  additionalCategories = [],
  brands = []
}) {

  // Fallback data (used if admin doesn't send any data)
  const defaultMainCategories = [
    { title: 'Brakes & Rotors', skus: '1,240 SKUs', price: '$39', icon: CircleDot },
    { title: 'Batteries', skus: '180 SKUs', price: '$109', icon: BatteryCharging },
    { title: 'Oil & Fluids', skus: '320 SKUs', price: '$24', icon: Droplet },
    { title: 'Suspension', skus: '680 SKUs', price: '$79', icon: Wrench },
  ];

  const defaultAdditionalCategories = [
    { title: 'Engine Parts', skus: '2,100 SKUs', price: '$19', icon: Settings },
    { title: 'Electrical', skus: '950 SKUs', price: '$12', icon: Zap },
  ];

  const defaultBrands = [
    'AUTOZONE', 'NAPA', 'BOSCH', 'MOBIL 1', 'DENSO',
    'BREMBO', 'K&N', 'ACDELCO'
  ];

  // Use admin data or fallback
  const displayMainCategories = mainCategories.length > 0 ? mainCategories : defaultMainCategories;
  const displayAdditionalCategories = additionalCategories.length > 0 ? additionalCategories : defaultAdditionalCategories;
  const displayBrands = brands.length > 0 ? brands : defaultBrands;

  return (
    <>
      {/* ====================== HERO (Hardcoded) ====================== */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url(${BannerAutoParts})` }}
        />

        <div className="relative z-10 px-6 sm:px-12 md:px-24 pt-16 pb-12 md:pb-20">
          <div className="max-w-5xl space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-orange-500 block">
              Auto Parts
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[1.05]">
              Built to <span className="text-orange-500">Last.</span> Priced to move.
            </h1>

            <p className="text-neutral-400 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
              45,000+ parts from the brands mechanics actually trust. Same-day
              pickup at any <span className="text-neutral-300 font-medium">Motorhaus</span> location.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== SHOP BY CATEGORY (Admin Controlled) ====================== */}
      <section className="bg-neutral-950 py-12 md:py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mb-10 text-neutral-100">
            Shop By Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayMainCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:border-orange-500/40 hover:bg-neutral-900 group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="bg-orange-500 text-black p-3 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                      <IconComponent className="w-6 h-6 stroke-[2.5]" />
                    </div>

                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
                      From {category.price}
                    </span>
                  </div>

                  <div className="mt-auto pt-6">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-neutral-100 group-hover:text-white">
                      {category.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mt-1">
                      {category.skus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================== ENGINE + ELECTRICAL + BRANDS (Admin Controlled) ====================== */}
      <section className="bg-neutral-950 pb-12 md:pb-16 text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayAdditionalCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:border-orange-500/40 hover:bg-neutral-900 group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="bg-orange-500 text-black p-3 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                      <IconComponent className="w-6 h-6 stroke-[2.5]" />
                    </div>

                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
                      From {category.price}
                    </span>
                  </div>

                  <div className="mt-auto pt-6">
                    <h3 className="min-h-[64px] flex items-end text-xl sm:text-2xl font-black tracking-tight uppercase text-neutral-100 group-hover:text-white">
                      {category.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mt-1">
                      {category.skus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Brands Section */}
          <div className="border-t border-neutral-900 pt-12 mt-16 text-center">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-500 mb-8">
              STOCKED BRANDS
            </h4>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12">
              {displayBrands.map((brand, idx) => (
                <span
                  key={idx}
                  className="text-neutral-500 hover:text-neutral-300 font-black tracking-tight uppercase text-xl md:text-2xl transition-colors duration-200 cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}