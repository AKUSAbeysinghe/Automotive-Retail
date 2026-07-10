


// import React from 'react';
// import {
//   Settings,      // Engine Parts
//   CircleDot,     // Brake Parts
//   Wrench,        // Suspension
//   Compass,       // Steering
//   Zap,           // Electrical
//   ThermometerSun,// Cooling System
//   Fuel,          // Fuel System
//   Wind,          // Exhaust
//   Car,           // Body Parts
//   Lightbulb,     // Lighting
//   Filter,        // Filters
//   Shield,        // Transmission
// } from 'lucide-react';

// import BannerAutoParts from "../../assets/AutoParts/BannerAutoParts.jpg";

// export default function AutoPartsPage({
//   mainCategories = [],
//   additionalCategories = [],
//   brands = []
// }) {

//   // Default / Fallback Data
//   const defaultCategories = [
//     { id: 1, title: 'Engine Parts',       skus: '2,450 SKUs', price: '$29', icon: Settings },
//     { id: 2, title: 'Brake Parts',        skus: '1,890 SKUs', price: '$19', icon: CircleDot },
//     { id: 3, title: 'Suspension Parts',   skus: '1,320 SKUs', price: '$49', icon: Wrench },
//     { id: 4, title: 'Steering Parts',     skus: '980 SKUs',   price: '$39', icon: Compass },
//     { id: 5, title: 'Transmission Parts', skus: '740 SKUs',   price: '$89', icon: Shield },
//     { id: 6, title: 'Electrical Parts',   skus: '2,150 SKUs', price: '$12', icon: Zap },
//     { id: 7, title: 'Cooling System',     skus: '890 SKUs',   price: '$25', icon: ThermometerSun },
//     { id: 8, title: 'Fuel System',        skus: '1,670 SKUs', price: '$22', icon: Fuel },
//     { id: 9, title: 'Exhaust System',     skus: '1,120 SKUs', price: '$45', icon: Wind },
//     { id: 10, title: 'Body Parts',        skus: '3,450 SKUs', price: '$15', icon: Car },
//     { id: 11, title: 'Lighting Parts',    skus: '2,780 SKUs', price: '$18', icon: Lightbulb },
//     { id: 12, title: 'Filters',           skus: '1,450 SKUs', price: '$8',  icon: Filter },
//   ];

//   const defaultBrands = [
//     'AUTOZONE', 'BOSCH', 'NAPA', 'MOBIL 1', 'DENSO',
//     'BREMBO', 'K&N', 'ACDELCO', 'NGK', 'GATES'
//   ];

//   // Use props if passed, otherwise use defaults
//   const displayCategories = mainCategories.length > 0 ? mainCategories : defaultCategories;
//   const displayBrands = brands.length > 0 ? brands : defaultBrands;

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
//               AUTO PARTS
//             </span>

//             <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[1.05]">
//               Quality Parts.{' '}
//               <span className="text-orange-500">Right Price.</span>
//             </h1>

//             <p className="text-neutral-400 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
//               Genuine and aftermarket parts from trusted brands. Fast delivery and in-store pickup available.
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

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {displayCategories.map((category, index) => {
//               const IconComponent = category.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:border-orange-500/50 hover:bg-neutral-900 group cursor-pointer"
//                 >
//                   <div className="flex items-start justify-between mb-8">
//                     <div className="bg-orange-500 text-black p-4 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
//                       <IconComponent className="w-7 h-7 stroke-[2.75]" />
//                     </div>

//                     <span className="text-orange-500 font-bold uppercase tracking-wider text-sm pt-1">
//                       From {category.price}
//                     </span>
//                   </div>

//                   <div className="mt-auto">
//                     <h3 className="text-2xl font-black tracking-tight uppercase text-neutral-100 group-hover:text-white transition-colors">
//                       {category.title}
//                     </h3>
//                     <p className="text-neutral-500 text-sm mt-2">
//                       {category.skus}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ====================== BRANDS ====================== */}
//       <section className="bg-neutral-950 pb-16 text-white">
//         <div className="max-w-6xl mx-auto px-6 sm:px-8">
//           <div className="border-t border-neutral-900 pt-16 text-center">
//             <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-500 mb-10">
//               TRUSTED BRANDS
//             </h4>

//             <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16">
//               {displayBrands.map((brand, idx) => (
//                 <span
//                   key={idx}
//                   className="text-neutral-500 hover:text-neutral-300 font-black tracking-tight uppercase text-2xl md:text-3xl transition-colors duration-200 cursor-default"
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













import React, { useEffect, useState } from 'react';
import {
  Settings, CircleDot, Wrench, Compass, Shield, Zap,
  ThermometerSun, Fuel, Wind, Car, Lightbulb, Filter
} from 'lucide-react';

import BannerAutoParts from "../../assets/AutoParts/BannerAutoParts.jpg";

export default function AutoPartsPage() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Icon mapping based on category name
  const getIcon = (title) => {
    const iconMap = {
      'Engine Parts': Settings,
      'Brake Parts': CircleDot,
      'Suspension Parts': Wrench,
      'Steering Parts': Compass,
      'Transmission Parts': Shield,
      'Electrical Parts': Zap,
      'Cooling System': ThermometerSun,
      'Fuel System': Fuel,
      'Exhaust System': Wind,
      'Body Parts': Car,
      'Lighting Parts': Lightbulb,
      'Filters': Filter,
    };
    return iconMap[title] || Settings;
  };

  const fetchAutoParts = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost/ART_CRAFT_DB/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        // Filter only Auto Parts (category_id = 3)
        const parts = data.data.filter(item => Number(item.category_id) === 3);

        // Group by sub_category_name and create category cards
        const grouped = parts.reduce((acc, item) => {
          const subName = item.sub_category_name || "Other Parts";
          if (!acc[subName]) {
            acc[subName] = {
              title: subName,
              skus: `${Math.floor(Math.random() * 3000) + 500} SKUs`, // You can replace with real count later
              price: `$${Math.floor(Math.random() * 100) + 8}`,
              icon: getIcon(subName),
              count: parts.filter(p => p.sub_category_name === subName).length
            };
          }
          return acc;
        }, {});

        setCategories(Object.values(grouped));

        // You can fetch brands separately if you have a brands API
        setBrands([
          'AUTOZONE', 'BOSCH', 'NAPA', 'MOBIL 1', 'DENSO',
          'BREMBO', 'K&N', 'ACDELCO', 'NGK', 'GATES'
        ]);
      } else {
        setError("Failed to load auto parts");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAutoParts();
  }, []);

  return (
    <>
      {/* ====================== HERO ====================== */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url(${BannerAutoParts})` }}
        />

        <div className="relative z-10 px-6 sm:px-12 md:px-24 pt-16 pb-12 md:pb-20">
          <div className="max-w-5xl space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-orange-500 block">
              AUTO PARTS
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[1.05]">
              Quality Parts.{' '}
              <span className="text-orange-500">Right Price.</span>
            </h1>

            <p className="text-neutral-400 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
              Genuine and aftermarket parts from trusted brands. Fast delivery &amp; in-store pickup.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== SHOP BY CATEGORY ====================== */}
      <section className="bg-neutral-950 py-12 md:py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mb-10 text-neutral-100">
            Shop By Category
          </h2>

          {isLoading ? (
            <p className="text-center py-20 text-gray-400">Loading parts...</p>
          ) : error ? (
            <p className="text-center py-12 text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:border-orange-500/50 hover:bg-neutral-900 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-8">
                      <div className="bg-orange-500 text-black p-4 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                        <IconComponent className="w-7 h-7 stroke-[2.75]" />
                      </div>

                      <span className="text-orange-500 font-bold uppercase tracking-wider text-sm pt-1">
                        From {category.price}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-2xl font-black tracking-tight uppercase text-neutral-100 group-hover:text-white transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-2">
                        {category.skus}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ====================== BRANDS ====================== */}
      <section className="bg-neutral-950 pb-16 text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="border-t border-neutral-900 pt-16 text-center">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-500 mb-10">
              TRUSTED BRANDS
            </h4>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16">
              {brands.map((brand, idx) => (
                <span
                  key={idx}
                  className="text-neutral-500 hover:text-neutral-300 font-black tracking-tight uppercase text-2xl md:text-3xl transition-colors duration-200 cursor-default"
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