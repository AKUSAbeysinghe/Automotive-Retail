// import React from 'react';

// export default function FeaturedInventory() {
//   const vehicles = [
//     {
//       id: 1,
//       name: 'TOYOTA CAMRY XSE',
//       price: '$34,990',
//       isNew: true,
//       image: '/path-to-showroom-camry.jpg', // Replace with your image
//       year: '2025',
//       fuel: '32 city',
//       power: '206 hp',
//     },
//     {
//       id: 2,
//       name: 'FORD F-150 LARIAT',
//       price: '$58,750',
//       isNew: true,
//       image: '/path-to-showroom-f150.jpg', // Replace with your image
//       year: '2025',
//       fuel: '22 city',
//       power: '400 hp',
//     },
//   ];

//   return (
//     <section className="bg-[#121416] text-white py-16 px-6 md:px-16 lg:px-24">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-800/60 pb-6 mb-10 gap-2">
//           <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase font-mono">
//             FEATURED INVENTORY
//           </h2>
//           <span className="text-gray-500 text-xs md:text-sm tracking-wide font-medium">
//             6 vehicles available
//           </span>
//         </div>

//         {/* Reusable Inventory Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {vehicles.map((vehicle) => (
//             <div 
//               key={vehicle.id} 
//               className="group bg-[#1C1E22] rounded-3xl overflow-hidden border border-gray-800/50 shadow-xl transition-all duration-300 hover:border-gray-700 hover:shadow-2xl flex flex-col"
//             >
              
//               {/* Image Container Panel */}
//               <div className="relative h-[280px] sm:h-[340px] w-full overflow-hidden bg-gray-900">
//                 <div 
//                   className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-102"
//                   style={{ backgroundImage: `url(${vehicle.image})` }}
//                 />
                
//                 {/* Image Dimming Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E22] via-transparent to-black/20" />

//                 {/* Status Indicator Tag */}
//                 {vehicle.isNew && (
//                   <span className="absolute top-4 left-4 bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] text-xs font-black tracking-widest px-3 py-1.5 rounded-md shadow-md select-none">
//                     NEW
//                   </span>
//                 )}
//               </div>

//               {/* Card Meta Content Block */}
//               <div className="p-6 md:p-8 flex flex-col flex-1 space-y-6">
                
//                 {/* Title & Core Pricing */}
//                 <div className="space-y-1">
//                   <h3 className="text-xl md:text-2xl font-black tracking-wide font-mono text-white uppercase">
//                     {vehicle.name}
//                   </h3>
//                   <p className="text-[#FF833E] font-black text-lg md:text-xl font-mono">
//                     {vehicle.price}
//                   </p>
//                 </div>

//                 {/* Technical Specs Dashboard Component */}
//                 <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-gray-800/60 text-gray-400 text-xs md:text-sm font-medium">
                  
//                   {/* Production Year */}
//                   <div className="flex items-center space-x-2">
//                     <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                     <span className="truncate">{vehicle.year}</span>
//                   </div>

//                   {/* Fuel Economy Metrics */}
//                   <div className="flex items-center space-x-2">
//                     <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                     </svg>
//                     <span className="truncate">{vehicle.fuel}</span>
//                   </div>

//                   {/* Performance Power Metrics */}
//                   <div className="flex items-center space-x-2">
//                     <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     </svg>
//                     <span className="truncate">{vehicle.power}</span>
//                   </div>

//                 </div>

//                 {/* Sub-Card Primary Action Call to Action */}
//                 <button className="w-full bg-[#25282D] hover:bg-[#2F333A] text-white font-bold text-xs md:text-sm tracking-widest uppercase py-4 rounded-xl shadow-md active:scale-[0.99] transition-all duration-200">
//                   SCHEDULE TEST DRIVE
//                 </button>

//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost/automotive_retail/api";
const IMAGE_BASE = "http://localhost/automotive_retail/";

export default function FeaturedInventory() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await fetch(
        `${API_BASE}/get_vehicles.php`
      );

      const data = await response.json();

      if (data.success) {
        setVehicles(data.data || []);
      }
    } catch (error) {
      console.log("Vehicle fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="bg-[#121416] text-white py-20 text-center">
        <h2 className="text-2xl font-bold">
          Loading vehicles...
        </h2>
      </section>
    );
  }

  return (
    <section className="bg-[#121416] text-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-800 pb-6 mb-10">

          <h2 className="text-3xl md:text-5xl font-black uppercase font-mono">
            FEATURED INVENTORY
          </h2>

          <span className="text-gray-500 text-sm">
            {vehicles.length} vehicle
            {vehicles.length !== 1 ? "s" : ""} available
          </span>

        </div>

        {vehicles.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl text-gray-400">
              No vehicles available
            </h3>
          </div>
        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {vehicles.map((vehicle) => (

              <div
                key={vehicle.id}
                className="group bg-[#1C1E22] rounded-3xl overflow-hidden border border-gray-800 shadow-xl hover:border-gray-700 transition-all duration-300"
              >

                {/* Image */}

                <div className="relative h-[300px] overflow-hidden">

                  <img
                    src={
                      vehicle.image_url
                        ? `${IMAGE_BASE}${vehicle.image_url}`
                        : "/placeholder-car.jpg"
                    }
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E22] via-transparent to-black/30"/>

                  {vehicle.is_new == 1 && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-black text-xs font-black px-3 py-2 rounded-lg">
                        NEW
                      </span>
                    </div>
                  )}

                </div>

                {/* Content */}

                <div className="p-6 flex flex-col gap-6">

                  <div>
                    <h3 className="text-2xl font-black uppercase">
                      {vehicle.name}
                    </h3>

                    <p className="text-orange-500 text-xl font-bold">
                      {vehicle.price}
                    </p>
                  </div>

                  {/* Specs */}

                  <div className="grid grid-cols-3 gap-4 border-y border-gray-700 py-5">

                    <div className="text-center">
                      <p className="text-gray-500 text-xs">
                        YEAR
                      </p>

                      <p className="font-bold">
                        {vehicle.year || "-"}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-500 text-xs">
                        FUEL
                      </p>

                      <p className="font-bold">
                        {vehicle.fuel || "-"}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-500 text-xs">
                        POWER
                      </p>

                      <p className="font-bold">
                        {vehicle.power || "-"}
                      </p>
                    </div>

                  </div>

                  <button
                    className="
                    w-full
                    bg-[#25282D]
                    hover:bg-[#333]
                    py-4
                    rounded-xl
                    font-bold
                    tracking-widest
                    transition
                    "
                  >
                    SCHEDULE TEST DRIVE
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}
      </div>
    </section>
  );
}