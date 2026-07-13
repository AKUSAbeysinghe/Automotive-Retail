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


import React, { useEffect, useState } from 'react';
import { Volume2, Armchair, Smartphone, Camera, Shield, Zap, Sun, Award } from 'lucide-react';
import BannerAccessory from "../../assets/Accessories/BannerAccessory.jpg";

export default function AccessoriesPage() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Icon mapping for Accessories subcategories
  const iconMap = {
    'Interior Accessories': Armchair,
    'Exterior Accessories': Sun,
    'Car Electronics': Volume2,
    'Car Lighting': Zap,
    'Seat Covers': Armchair,
    'Floor Mats': Armchair,
    'Car Care Accessories': Award,
    'Safety Accessories': Shield,
    'Mobile Accessories': Smartphone,
    'Performance Accessories': Zap,
  };

  const fetchAccessories = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/Automative_DB/api/get_products.php?category_id=2");

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      console.log("Accessories API Response:", data);

      if (data.success && Array.isArray(data.data)) {
        const accessories = data.data;

        if (accessories.length === 0) {
          setError("No accessories found yet.");
          return;
        }

        const grouped = accessories.reduce((acc, product) => {
          const subName = product.sub_category_name?.trim() || "Other Accessories";

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
          skus: `${group.count} Products`,
          price: group.minPrice === Infinity ? "Rs. 49" : `Rs. ${Math.floor(group.minPrice)}`,
          icon: iconMap[group.title] || Volume2,
        }));

        setCategories(formatted);
      } else {
        setError("Failed to load accessories");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server. Make sure backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAccessories();
  }, []);

  // WhatsApp Function
  const handleBookInstallation = () => {
    const phoneNumber = "923001234567"; // ← CHANGE THIS TO YOUR WHATSAPP NUMBER
    const message = encodeURIComponent(
      "Hello! I want to book an installation for accessories. Please assist me."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* ====================== HERO ====================== */}
      <section className="relative min-h-[500px] w-full bg-neutral-950 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-lighten"
          style={{ backgroundImage: `url(${BannerAccessory})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.15),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-orange-600 sm:text-sm">
              ACCESSORIES
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
              Make it <span className="text-orange-500">yours.</span>
            </h1>
            <p className="pt-2 text-base sm:text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed">
              Premium interiors, electronics, lighting &amp; performance upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== SHOP BY CATEGORY ====================== */}
      <section className="bg-neutral-950 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-black tracking-tight">Shop Accessories</h2>
            <button 
              onClick={fetchAccessories}
              className="text-orange-500 hover:text-white transition-colors flex items-center gap-2"
            >
              ↻ Refresh
            </button>
          </div>

          {isLoading && <p className="text-center py-32 text-xl">Loading accessories...</p>}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-400 mb-6">{error}</p>
              <button 
                onClick={fetchAccessories}
                className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-2xl"
              >
                Try Again
              </button>
            </div>
          )}

          {!isLoading && !error && categories.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, index) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-500 transition-all duration-300 flex flex-col"
                  >
                    <div className="h-64 bg-neutral-950 relative flex items-center justify-center overflow-hidden">
                      {cat.image ? (
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <div className="text-orange-500">
                          <IconComponent className="w-24 h-24" strokeWidth={1.8} />
                        </div>
                      )}

                      <div className="absolute top-6 right-6 bg-black/80 px-4 py-1.5 rounded-2xl text-sm font-bold text-orange-400">
                        From {cat.price}
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-orange-400 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-neutral-400 mt-auto">{cat.skus}</p>
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
            READY TO UPGRADE?
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Transform your vehicle today.
          </h2>

          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
            Professional installation • Expert advice • Premium brands • 
            Warranty on all accessories
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
              <p className="text-white font-semibold">Certified Technicians</p>
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
              BROWSE ALL ACCESSORIES
            </button>
          </div>
        </div>
      </section>
    </>
  );
}