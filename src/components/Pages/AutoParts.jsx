


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
  ThermometerSun, Fuel, Wind, Car, Lightbulb, Filter,
} from 'lucide-react';

import BannerAutoParts from "../../assets/AutoParts/BannerAutoParts.jpg";

export default function AutoPartsPage() {
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

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

  const fetchAutoParts = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/Automative_DB/api/get_products.php?category_id=3");

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();
      console.log("API Response:", data);

      if (data.success && Array.isArray(data.data)) {
        const autoParts = data.data;

        if (autoParts.length === 0) {
          setError("No products found for Auto Parts category.");
          return;
        }

        const grouped = autoParts.reduce((acc, product) => {
          const subName = product.sub_category_name?.trim() || "Other Parts";

          if (!acc[subName]) {
            acc[subName] = {
              title: subName,
              count: 0,
              minPrice: Infinity,
              image: null,
            };
          }

          const group = acc[subName];
          group.count += 1;

          const price = parseFloat(product.price) || 0;
          if (price > 0 && price < group.minPrice) group.minPrice = price;

          if (!group.image && product.image_url) {
            group.image = product.image_url.startsWith('http')
              ? product.image_url
              : `http://localhost/Automative_DB/${product.image_url.replace(/^\//, '')}`;
          }

          return acc;
        }, {});

        const formatted = Object.values(grouped).map(group => ({
          ...group,
          skus: `${group.count} SKUs`,
          price: group.minPrice === Infinity ? "Rs. 29" : `Rs. ${Math.floor(group.minPrice)}`,
          icon: iconMap[group.title] || Settings,
        }));

        setSubCategories(formatted);
      } else {
        setError(data.message || "Failed to load products");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Cannot connect to backend. Make sure XAMPP/WAMP is running.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAutoParts();
  }, []);

  // WhatsApp Booking Function
  const handleBookInstallation = () => {
    const phoneNumber = "923001234567"; // ← CHANGE TO YOUR WHATSAPP NUMBER
    const message = encodeURIComponent(
      "Hello! I want to book installation / purchase for Auto Parts. Please help me."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* ====================== HERO ====================== */}
      <section className="relative bg-neutral-950 text-white min-h-[65vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${BannerAutoParts})` }}
        />
        <div className="relative z-10 px-6 md:px-12 max-w-5xl">
          <p className="uppercase tracking-[3px] text-orange-500 text-sm font-bold">GENUINE PARTS</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-3 leading-none">
            QUALITY AUTO PARTS.<br />
            <span className="text-orange-500">UNBEATABLE PRICE.</span>
          </h1>
        </div>
      </section>

      {/* ====================== SHOP BY CATEGORY ====================== */}
      <section className="bg-neutral-950 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-black tracking-tight">Shop By Category</h2>
            <button 
              onClick={fetchAutoParts}
              className="text-orange-500 hover:text-orange-400 font-medium"
            >
              ↻ Refresh
            </button>
          </div>

          {isLoading && <p className="text-center py-32 text-xl">Loading categories...</p>}

          {error && (
            <div className="text-center py-20 text-red-400">
              <p>{error}</p>
              <button onClick={fetchAutoParts} className="mt-6 px-8 py-3 bg-red-600 rounded-2xl">
                Retry
              </button>
            </div>
          )}

          {!isLoading && !error && subCategories.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subCategories.map((cat, index) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-500 transition-all duration-300"
                  >
                    <div className="h-64 relative flex items-center justify-center bg-black">
                      {cat.image ? (
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <IconComponent className="w-28 h-28 text-orange-500" strokeWidth={1.7} />
                      )}

                      <div className="absolute top-6 right-6 bg-black/80 text-orange-400 px-4 py-2 rounded-2xl text-sm font-bold">
                        From {cat.price}
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-orange-400 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-neutral-400">{cat.skus}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ====================== FINAL CTA SECTION ====================== */}
      <section className="bg-[#121416] py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-3 bg-orange-500/10 text-orange-500 px-6 py-2 rounded-full text-sm font-semibold tracking-widest">
            NEED PARTS INSTALLED?
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Get Your Car Back on the Road
          </h2>

          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
            Professional fitting • Expert advice • Original &amp; high-quality parts
          </p>

          {/* Trust Signals */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 mb-12">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4v12M3 12l2-2m0 0l-2-2" />
                </svg>
              </div>
              <p className="text-white font-semibold">Free Consultation</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 01-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 01-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 01-.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <p className="text-white font-semibold">Certified Mechanics</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-white font-semibold">1-Year Warranty</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleBookInstallation}
              className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 group"
            >
              BOOK INSTALLATION ON WHATSAPP
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-10 py-5 border border-white/30 hover:bg-white/5 text-white font-semibold text-lg rounded-2xl transition-all duration-300"
            >
              BROWSE ALL PARTS
            </button>
          </div>
        </div>
      </section>
    </>
  );
}