// // // import React, { useState } from 'react';
// // // import DealershipFetures from "../Pages/DelerFeatures.jsx";
// // // import DealBannerPic from "../../assets/Dealship/BannerDeal.jpg";

// // // export default function DealershipPageHero() {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   // const navLinks = [
// // //   //   { name: 'HOME', href: '#' },
// // //   //   { name: 'DEALERSHIPS', href: '#', active: true },
// // //   //   { name: 'PARTS', href: '#' },
// // //   //   { name: 'ACCESSORIES', href: '#' },
// // //   //   { name: 'CONTACT', href: '#' },
// // //   // ];

// // //   const brands = [
// // //     'TOYOTA', 'FORD', 'HONDA', 'BMW', 
// // //     'MAZDA', 'HYUNDAI', 'KIA', 'NISSAN'
// // //   ];

// // //   return (
// // //     <div className="bg-[#0B0D0F] min-h-screen text-white flex flex-col font-sans">
      
// // //       {/* 1. Global Navigation Bar */}
// // //       {/* <nav className="relative z-30 bg-[#121416] text-[#E4E4E7] px-6 py-4 border-b border-gray-800/60"> */}
// // //         <div className="max-w-7xl mx-auto flex items-center justify-between">
          
// // //           {/* Logo */}
// // //           {/* <div className="flex items-center space-x-3 select-none">
// // //             <div className="bg-gradient-to-br from-[#FF833E] to-[#FA541C] text-[#121416] font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
// // //               M
// // //             </div>
// // //             <span className="text-white font-extrabold tracking-wider text-xl uppercase font-mono">
// // //               Motorhaus
// // //             </span>
// // //           </div> */}

// // //           {/* Desktop Nav Items */}
// // //           {/* <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
// // //             {navLinks.map((link) => (
// // //               <a
// // //                 key={link.name}
// // //                 href={link.href}
// // //                 className={`transition-colors duration-200 ${
// // //                   link.active ? 'text-[#FF833E]' : 'text-[#9CA3AF] hover:text-white'
// // //                 }`}
// // //               >
// // //                 {link.name}
// // //               </a>
// // //             ))}
// // //           </div> */}

// // //           {/* Desktop Call to Action */}
// // //           {/* <div className="hidden md:block">
// // //             <button className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 tracking-wide">
// // //               BOOK TEST DRIVE
// // //             </button>
// // //           </div> */}

// // //           {/* Mobile Menu Button */}
// // //           <div className="md:hidden flex items-center">
// // //             <button
// // //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //               className="text-gray-400 hover:text-white focus:outline-none"
// // //             >
// // //               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                 {isMenuOpen ? (
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                 ) : (
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// // //                 )}
// // //               </svg>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Mobile Dropdown Menu */}
// // //         {isMenuOpen && (
// // //           <div className="md:hidden mt-4 pt-4 border-t border-gray-800 space-y-3 flex flex-col">
// // //             {navLinks.map((link) => (
// // //               <a
// // //                 key={link.name}
// // //                 href={link.href}
// // //                 className={`text-sm font-semibold tracking-wide py-2 ${
// // //                   link.active ? 'text-[#FF833E]' : 'text-[#9CA3AF]'
// // //                 }`}
// // //                 onClick={() => setIsMenuOpen(false)}
// // //               >
// // //                 {link.name}
// // //               </a>
// // //             ))}
// // //             <button className="w-full bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold text-sm px-6 py-3 rounded-lg shadow-lg mt-2">
// // //               BOOK TEST DRIVE
// // //             </button>
// // //           </div>
// // //         )}
// // //       {/* </nav> */}

// // //       {/* 2. Hero Content Section & Showroom Background */}
// // //       <section className="relative flex-1 flex flex-col justify-between overflow-hidden pt-20 md:pt-28">
        
// // //         {/* Showroom Image Underlay Layer */}
// // //         <div 
// // //           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none select-none"
// // //           style={{ 
// // //             // Replace with your actual dealership showroom image path
// // //             backgroundImage: `url(${DealBannerPic})` 
// // //           }}
// // //         />
// // //         {/* Deep bottom fade gradient matching the images */}
// // //         <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent pointer-events-none" />

// // //         {/* Main Header Text Core Container */}
// // //         <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24 flex flex-col items-start space-y-4 mb-auto">
// // //           <span className="text-[#FF833E] text-xs md:text-sm font-bold tracking-[0.25em] uppercase block">
// // //             DEALERSHIPS
// // //           </span>

// // //           <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase font-mono select-none">
// // //             THE RIGHT CAR.{' '}
// // //             <span className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] bg-clip-text text-transparent block sm:inline">
// // //               THE RIGHT DEAL.
// // //             </span>
// // //           </h1>

// // //           <p className="text-gray-400 text-sm md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light pt-2">
// // //             Shop our authorized inventory of new and certified pre-owned vehicles 
// // //             from the brands you trust.
// // //           </p>
// // //         </div>

// // //         {/* 3. Bottom Pinned Brand Horizontal Ribbon */}
// // //         <div className="relative z-10 w-full bg-[#121416]/70 border-t border-b border-gray-800/40 backdrop-blur-sm mt-16">
// // //           <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 overflow-x-auto scrollbar-none">
// // //             <div className="flex items-center justify-between min-w-[768px] lg:min-w-0 md:px-8 gap-6">
// // //               {brands.map((brand) => (
// // //                 <span 
// // //                   key={brand} 
// // //                   className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base font-black tracking-[0.18em] font-mono select-none cursor-default"
// // //                 >
// // //                   {brand}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //       </section>
// // //       {/* <DealershipFetures/> */}
// // //     </div>
// // //   );
// // // } 


// // import React, { useEffect, useState } from 'react';
// // import DealBannerPic from "../../assets/Dealship/BannerDeal.jpg";

// // const Dealership = () => {
// //   const [allVehicles, setAllVehicles] = useState([]);
// //   const [filteredVehicles, setFilteredVehicles] = useState([]);
// //   const [activeFilter, setActiveFilter] = useState("all");
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const WHATSAPP_NUMBER = '94771234567';

// //   // Subcategory IDs
// //   const SUBCATEGORY_IDS = {
// //     ALL: "all",
// //     CARS: 1,
// //     SUVS: 2,
// //     VANS: 3,
// //     PICKUP_TRUCKS: 4,
// //     MOTORCYCLES: 5,
// //     ELECTRIC_VEHICLES: 6,
// //     COMMERCIAL_VEHICLES: 7,
// //   };

// //   const brands = [
// //     'TOYOTA', 'FORD', 'HONDA', 'BMW', 
// //     'MAZDA', 'HYUNDAI', 'KIA', 'NISSAN'
// //   ];

// //   const fetchVehicles = async () => {
// //     setIsLoading(true);
// //     setError("");

// //     try {
// //       const res = await fetch("http://localhost/ART_CRAFT_DB/api/get_products.php");
// //       const data = await res.json();

// //       if (data.success && Array.isArray(data.data)) {
// //         const vehicleItems = data.data.filter(item => Number(item.category_id) === 1);
// //         setAllVehicles(vehicleItems);
// //         setFilteredVehicles(vehicleItems);
// //       } else {
// //         setError("Failed to load vehicles");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError("Cannot connect to server.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchVehicles();
// //   }, []);

// //   useEffect(() => {
// //     if (activeFilter === "all") {
// //       setFilteredVehicles(allVehicles);
// //     } else {
// //       const filtered = allVehicles.filter(
// //         item => Number(item.sub_category_id) === activeFilter
// //       );
// //       setFilteredVehicles(filtered);
// //     }
// //   }, [activeFilter, allVehicles]);

// //   const formatPrice = (price) => {
// //     return new Intl.NumberFormat("en-LK").format(price);
// //   };

// //   const handleWhatsAppClick = (product) => {
// //     const message = `Hi! I'm interested in:\n\n*${product.name}*\nPrice: Rs. ${formatPrice(product.price)}\n\nPlease send more details.`;
// //     const encoded = encodeURIComponent(message);
// //     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
// //   };

// //   return (
// //     <div className="bg-[#0B0D0F] min-h-screen text-white font-sans">
      
// //       {/* ==================== NAVIGATION ==================== */}
// //       <nav className="relative z-30 bg-[#121416] text-[#E4E4E7] px-6 py-4 border-b border-gray-800/60">
// //         <div className="max-w-7xl mx-auto flex items-center justify-between">
// //           {/* Logo */}
// //           <div className="flex items-center space-x-3 select-none">
// //             <div className="bg-gradient-to-br from-[#FF833E] to-[#FA541C] text-[#121416] font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
// //               M
// //             </div>
// //             <span className="text-white font-extrabold tracking-wider text-xl uppercase font-mono">
// //               Motorhaus
// //             </span>
// //           </div>

// //           {/* Desktop Nav */}
// //           <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
// //             <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">HOME</a>
// //             <a href="#" className="text-[#FF833E]">DEALERSHIPS</a>
// //             <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">PARTS</a>
// //             <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">ACCESSORIES</a>
// //             <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">CONTACT</a>
// //           </div>

// //           {/* Desktop CTA */}
// //           <div className="hidden md:block">
// //             <button className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 tracking-wide">
// //               BOOK TEST DRIVE
// //             </button>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             className="md:hidden text-gray-400 hover:text-white"
// //           >
// //             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //               {isMenuOpen ? (
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //               ) : (
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //               )}
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isMenuOpen && (
// //           <div className="md:hidden mt-4 pt-4 border-t border-gray-800 space-y-3 px-6">
// //             <a href="#" className="block py-2 text-[#9CA3AF]">HOME</a>
// //             <a href="#" className="block py-2 text-[#FF833E]">DEALERSHIPS</a>
// //             <a href="#" className="block py-2 text-[#9CA3AF]">PARTS</a>
// //             <a href="#" className="block py-2 text-[#9CA3AF]">ACCESSORIES</a>
// //             <a href="#" className="block py-2 text-[#9CA3AF]">CONTACT</a>
// //             <button className="w-full bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold py-3 rounded-lg mt-4">
// //               BOOK TEST DRIVE
// //             </button>
// //           </div>
// //         )}
// //       </nav>

// //       {/* ==================== HERO SECTION ==================== */}
// //       <section className="relative flex flex-col justify-between overflow-hidden pt-20 md:pt-28 min-h-[85vh]">
// //         <div 
// //           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
// //           style={{ backgroundImage: `url(${DealBannerPic})` }}
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent" />

// //         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-start space-y-4">
// //           <span className="text-[#FF833E] text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
// //             DEALERSHIPS
// //           </span>

// //           <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase font-mono">
// //             THE RIGHT CAR.{' '}
// //             <span className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] bg-clip-text text-transparent block sm:inline">
// //               THE RIGHT DEAL.
// //             </span>
// //           </h1>

// //           <p className="text-gray-400 text-sm md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light pt-2">
// //             Shop our authorized inventory of new and certified pre-owned vehicles 
// //             from the brands you trust.
// //           </p>
// //         </div>

// //         {/* Brand Ribbon */}
// //         <div className="relative z-10 w-full bg-[#121416]/70 border-t border-b border-gray-800/40 backdrop-blur-sm mt-auto">
// //           <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 overflow-x-auto scrollbar-none">
// //             <div className="flex items-center justify-between min-w-[768px] lg:min-w-0 md:px-8 gap-6">
// //               {brands.map((brand) => (
// //                 <span 
// //                   key={brand} 
// //                   className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base font-black tracking-[0.18em] font-mono select-none cursor-default"
// //                 >
// //                   {brand}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================== FILTERS & VEHICLE GRID ==================== */}
// //       <div className="max-w-7xl mx-auto px-6 py-16">
// //         {/* Filters */}
// //         <div className="flex flex-wrap gap-3 mb-12">
// //           {[
// //             { label: "All Vehicles", value: "all" },
// //             { label: "Cars", value: SUBCATEGORY_IDS.CARS },
// //             { label: "SUVs", value: SUBCATEGORY_IDS.SUVS },
// //             { label: "Vans", value: SUBCATEGORY_IDS.VANS },
// //             { label: "Pickup Trucks", value: SUBCATEGORY_IDS.PICKUP_TRUCKS },
// //             { label: "Motorcycles", value: SUBCATEGORY_IDS.MOTORCYCLES },
// //             { label: "Electric Vehicles", value: SUBCATEGORY_IDS.ELECTRIC_VEHICLES },
// //             { label: "Commercial Vehicles", value: SUBCATEGORY_IDS.COMMERCIAL_VEHICLES },
// //           ].map((filter) => (
// //             <button
// //               key={filter.value}
// //               onClick={() => setActiveFilter(filter.value)}
// //               className={`px-6 py-3 text-sm font-medium rounded-full transition-all border ${
// //                 activeFilter === filter.value
// //                   ? "bg-[#FF833E] text-black border-[#FF833E]"
// //                   : "bg-transparent border-gray-700 hover:border-gray-500 text-gray-300"
// //               }`}
// //             >
// //               {filter.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Products Grid */}
// //         {isLoading ? (
// //           <p className="text-center py-20 text-gray-400">Loading vehicles...</p>
// //         ) : error ? (
// //           <p className="text-center py-12 text-red-500">{error}</p>
// //         ) : filteredVehicles.length === 0 ? (
// //           <p className="text-center py-20 text-gray-400">No vehicles found in this category.</p>
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {filteredVehicles.map((vehicle) => (
// //               <div
// //                 key={vehicle.id}
// //                 className="bg-[#121416] border border-gray-800 rounded-2xl overflow-hidden group hover:border-[#FF833E]/30 transition-all duration-300"
// //               >
// //                 <div className="relative h-64 bg-zinc-900 overflow-hidden">
// //                   <img
// //                     src={
// //                       vehicle.image_url
// //                         ? `http://localhost/ART_CRAFT_DB/${vehicle.image_url}`
// //                         : "https://via.placeholder.com/600x400?text=Vehicle"
// //                     }
// //                     alt={vehicle.name}
// //                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// //                     onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Vehicle"; }}
// //                   />
// //                   {vehicle.popular === "1" && (
// //                     <div className="absolute top-4 right-4 bg-[#FF833E] text-black text-xs font-bold px-4 py-1 rounded-full">
// //                       POPULAR
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div className="p-6">
// //                   <div className="flex justify-between items-start mb-4">
// //                     <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
// //                       {vehicle.sub_category_name || "Vehicle"}
// //                     </p>
// //                     <span className="text-2xl font-semibold text-white">
// //                       Rs. {formatPrice(vehicle.price)}
// //                     </span>
// //                   </div>

// //                   <h2 className="text-xl font-semibold mb-3 line-clamp-2">{vehicle.name}</h2>

// //                   {vehicle.description && (
// //                     <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
// //                       {vehicle.description}
// //                     </p>
// //                   )}

// //                   <div className="flex items-center justify-between text-sm mb-6">
// //                     <span className="text-emerald-500 font-medium">
// //                       In Stock: {vehicle.stock}
// //                     </span>
// //                   </div>

// //                   <button
// //                     onClick={() => handleWhatsAppClick(vehicle)}
// //                     className="w-full bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-black font-semibold py-4 rounded-xl hover:brightness-110 transition-all"
// //                   >
// //                     INQUIRE VIA WHATSAPP
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* ==================== BOTTOM SECTION ==================== */}
// //       <section className="bg-[#121416] py-20 border-t border-gray-800">
// //         <div className="max-w-4xl mx-auto text-center px-6">
// //           <p className="text-[#FF833E] text-xs font-bold tracking-[0.2em] uppercase mb-4">
// //             QUALITY &amp; TRUST
// //           </p>
// //           <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
// //             DRIVEN BY EXCELLENCE
// //           </h2>
// //           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
// //             From sleek sedans to powerful SUVs and electric vehicles — every car is carefully selected for performance, reliability, and value.
// //           </p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Dealership;




// import React, { useEffect, useState } from 'react';
// import DealBannerPic from "../../assets/Dealship/BannerDeal.jpg";

// const Dealership = () => {
//   const [allVehicles, setAllVehicles] = useState([]);
//   const [filteredVehicles, setFilteredVehicles] = useState([]);
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const WHATSAPP_NUMBER = '94771234567';

//   // Subcategory IDs
//   const SUBCATEGORY_IDS = {
//     ALL: "all",
//     CARS: 1,
//     SUVS: 2,
//     VANS: 3,
//     PICKUP_TRUCKS: 4,
//     MOTORCYCLES: 5,
//     ELECTRIC_VEHICLES: 6,
//     COMMERCIAL_VEHICLES: 7,
//   };

//   const brands = [
//     'TOYOTA', 'FORD', 'HONDA', 'BMW',
//     'MAZDA', 'HYUNDAI', 'KIA', 'NISSAN'
//   ];

//   const fetchVehicles = async () => {
//     setIsLoading(true);
//     setError("");
//     try {
//       const res = await fetch("http://localhost/ART_CRAFT_DB/api/get_products.php");
//       const data = await res.json();
//       if (data.success && Array.isArray(data.data)) {
//         const vehicleItems = data.data.filter(item => Number(item.category_id) === 1);
//         setAllVehicles(vehicleItems);
//         setFilteredVehicles(vehicleItems);
//       } else {
//         setError("Failed to load vehicles");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Cannot connect to server.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVehicles();
//   }, []);

//   useEffect(() => {
//     if (activeFilter === "all") {
//       setFilteredVehicles(allVehicles);
//     } else {
//       const filtered = allVehicles.filter(
//         item => Number(item.sub_category_id) === activeFilter
//       );
//       setFilteredVehicles(filtered);
//     }
//   }, [activeFilter, allVehicles]);

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("en-LK").format(price);
//   };

//   const handleWhatsAppClick = (product) => {
//     const message = `Hi! I'm interested in:\n\n*${product.name}*\nPrice: Rs. ${formatPrice(product.price)}\n\nPlease send more details.`;
//     const encoded = encodeURIComponent(message);
//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
//   };

//   // Filter Icon Helper
//   const getFilterIcon = (value) => {
//     switch (value) {
//       case "all": return "🚗";
//       case SUBCATEGORY_IDS.CARS: return "🏎️";
//       case SUBCATEGORY_IDS.SUVS: return "🚙";
//       case SUBCATEGORY_IDS.VANS: return "🚌";
//       case SUBCATEGORY_IDS.PICKUP_TRUCKS: return "🛻";
//       case SUBCATEGORY_IDS.MOTORCYCLES: return "🏍️";
//       case SUBCATEGORY_IDS.ELECTRIC_VEHICLES: return "⚡";
//       case SUBCATEGORY_IDS.COMMERCIAL_VEHICLES: return "🚚";
//       default: return "•";
//     }
//   };

//   return (
//     <div className="bg-[#0B0D0F] min-h-screen text-white font-sans">
     
//       {/* ==================== NAVIGATION ==================== */}
//       <nav className="relative z-30 bg-[#121416] text-[#E4E4E7] px-6 py-4 border-b border-gray-800/60">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-3 select-none">
//             <div className="bg-gradient-to-br from-[#FF833E] to-[#FA541C] text-[#121416] font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
//               M
//             </div>
//             <span className="text-white font-extrabold tracking-wider text-xl uppercase font-mono">
//               Motorhaus
//             </span>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
//             <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">HOME</a>
//             <a href="#" className="text-[#FF833E]">DEALERSHIPS</a>
//             <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">PARTS</a>
//             <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">ACCESSORIES</a>
//             <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">CONTACT</a>
//           </div>

//           {/* Desktop CTA */}
//           <div className="hidden md:block">
//             <button className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 tracking-wide">
//               BOOK TEST DRIVE
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-gray-400 hover:text-white"
//           >
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pt-4 border-t border-gray-800 space-y-3 px-6">
//             <a href="#" className="block py-2 text-[#9CA3AF]">HOME</a>
//             <a href="#" className="block py-2 text-[#FF833E]">DEALERSHIPS</a>
//             <a href="#" className="block py-2 text-[#9CA3AF]">PARTS</a>
//             <a href="#" className="block py-2 text-[#9CA3AF]">ACCESSORIES</a>
//             <a href="#" className="block py-2 text-[#9CA3AF]">CONTACT</a>
//             <button className="w-full bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold py-3 rounded-lg mt-4">
//               BOOK TEST DRIVE
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* ==================== HERO SECTION ==================== */}
//       <section className="relative flex flex-col justify-between overflow-hidden pt-20 md:pt-28 min-h-[85vh]">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
//           style={{ backgroundImage: `url(${DealBannerPic})` }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent" />
        
//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-start space-y-4">
//           <span className="text-[#FF833E] text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
//             DEALERSHIPS
//           </span>
//           <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase font-mono">
//             THE RIGHT CAR.{' '}
//             <span className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] bg-clip-text text-transparent block sm:inline">
//               THE RIGHT DEAL.
//             </span>
//           </h1>
//           <p className="text-gray-400 text-sm md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light pt-2">
//             Shop our authorized inventory of new and certified pre-owned vehicles
//             from the brands you trust.
//           </p>
//         </div>

//         {/* Brand Ribbon */}
//         <div className="relative z-10 w-full bg-[#121416]/70 border-t border-b border-gray-800/40 backdrop-blur-sm mt-auto">
//           <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 overflow-x-auto scrollbar-none">
//             <div className="flex items-center justify-between min-w-[768px] lg:min-w-0 md:px-8 gap-6">
//               {brands.map((brand) => (
//                 <span
//                   key={brand}
//                   className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base font-black tracking-[0.18em] font-mono select-none cursor-default"
//                 >
//                   {brand}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== FILTERS & VEHICLE GRID ==================== */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         {/* ===== Updated Modern Filters ===== */}
//         <div className="mb-12">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
//             <h3 className="text-lg font-semibold text-white whitespace-nowrap flex items-center gap-2">
//               <span className="text-[#FF833E]">FILTER</span> 
//               BY CATEGORY
//             </h3>
            
//             <div className="flex-1 flex flex-nowrap overflow-x-auto pb-2 scrollbar-hide gap-3 snap-x snap-mandatory">
//               {[
//                 { label: "All Vehicles", value: "all" },
//                 { label: "Cars", value: SUBCATEGORY_IDS.CARS },
//                 { label: "SUVs", value: SUBCATEGORY_IDS.SUVS },
//                 { label: "Vans", value: SUBCATEGORY_IDS.VANS },
//                 { label: "Pickup Trucks", value: SUBCATEGORY_IDS.PICKUP_TRUCKS },
//                 { label: "Motorcycles", value: SUBCATEGORY_IDS.MOTORCYCLES },
//                 { label: "Electric Vehicles", value: SUBCATEGORY_IDS.ELECTRIC_VEHICLES },
//                 { label: "Commercial Vehicles", value: SUBCATEGORY_IDS.COMMERCIAL_VEHICLES },
//               ].map((filter) => (
//                 <button
//                   key={filter.value}
//                   onClick={() => setActiveFilter(filter.value)}
//                   className={`group px-7 py-3.5 text-sm font-semibold rounded-2xl transition-all duration-300 whitespace-nowrap snap-start border flex items-center gap-2
//                     ${
//                       activeFilter === filter.value
//                         ? "bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-black border-transparent shadow-lg shadow-[#FF833E]/30 scale-105"
//                         : "bg-[#1A1D21] border-gray-700 hover:border-[#FF833E]/40 text-gray-300 hover:text-white hover:bg-[#212529]"
//                     }`}
//                 >
//                   <span className={`transition-transform duration-300 ${activeFilter === filter.value ? 'scale-110' : 'group-hover:scale-110'}`}>
//                     {getFilterIcon(filter.value)}
//                   </span>
//                   {filter.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Products Grid */}
//         {isLoading ? (
//           <p className="text-center py-20 text-gray-400">Loading vehicles...</p>
//         ) : error ? (
//           <p className="text-center py-12 text-red-500">{error}</p>
//         ) : filteredVehicles.length === 0 ? (
//           <p className="text-center py-20 text-gray-400">No vehicles found in this category.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredVehicles.map((vehicle) => (
//               <div
//                 key={vehicle.id}
//                 className="bg-[#121416] border border-gray-800 rounded-2xl overflow-hidden group hover:border-[#FF833E]/30 transition-all duration-300"
//               >
//                 <div className="relative h-64 bg-zinc-900 overflow-hidden">
//                   <img
//                     src={
//                       vehicle.image_url
//                         ? `http://localhost/ART_CRAFT_DB/${vehicle.image_url}`
//                         : "https://via.placeholder.com/600x400?text=Vehicle"
//                     }
//                     alt={vehicle.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Vehicle"; }}
//                   />
//                   {vehicle.popular === "1" && (
//                     <div className="absolute top-4 right-4 bg-[#FF833E] text-black text-xs font-bold px-4 py-1 rounded-full">
//                       POPULAR
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
//                       {vehicle.sub_category_name || "Vehicle"}
//                     </p>
//                     <span className="text-2xl font-semibold text-white">
//                       Rs. {formatPrice(vehicle.price)}
//                     </span>
//                   </div>
//                   <h2 className="text-xl font-semibold mb-3 line-clamp-2">{vehicle.name}</h2>
//                   {vehicle.description && (
//                     <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
//                       {vehicle.description}
//                     </p>
//                   )}
//                   <div className="flex items-center justify-between text-sm mb-6">
//                     <span className="text-emerald-500 font-medium">
//                       In Stock: {vehicle.stock}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => handleWhatsAppClick(vehicle)}
//                     className="w-full bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-black font-semibold py-4 rounded-xl hover:brightness-110 transition-all"
//                   >
//                     INQUIRE VIA WHATSAPP
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* ==================== BOTTOM SECTION ==================== */}
//       <section className="bg-[#121416] py-20 border-t border-gray-800">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <p className="text-[#FF833E] text-xs font-bold tracking-[0.2em] uppercase mb-4">
//             QUALITY &amp; TRUST
//           </p>
//           <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
//             DRIVEN BY EXCELLENCE
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             From sleek sedans to powerful SUVs and electric vehicles — every car is carefully selected for performance, reliability, and value.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Dealership;


import React, { useEffect, useState } from 'react';
import DealBannerPic from "../../assets/Dealship/BannerDeal.jpg";

const Dealership = () => {
  const [allVehicles, setAllVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const WHATSAPP_NUMBER = '94771234567';

  const SUBCATEGORY_IDS = {
    ALL: "all",
    CARS: 1,
    SUVS: 2,
    VANS: 3,
    PICKUP_TRUCKS: 4,
    MOTORCYCLES: 5,
    ELECTRIC_VEHICLES: 6,
    COMMERCIAL_VEHICLES: 7,
  };

  const brands = [
    'TOYOTA', 'FORD', 'HONDA', 'BMW',
    'MAZDA', 'HYUNDAI', 'KIA', 'NISSAN'
  ];

  const fetchVehicles = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost/ART_CRAFT_DB/api/get_products.php");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        const vehicleItems = data.data.filter(item => Number(item.category_id) === 1);
        setAllVehicles(vehicleItems);
        setFilteredVehicles(vehicleItems);
      } else {
        setError("Failed to load vehicles");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredVehicles(allVehicles);
    } else {
      const filtered = allVehicles.filter(
        item => Number(item.sub_category_id) === activeFilter
      );
      setFilteredVehicles(filtered);
    }
  }, [activeFilter, allVehicles]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  const handleWhatsAppClick = (product) => {
    const message = `Hi! I'm interested in:\n\n*${product.name}*\nPrice: Rs. ${formatPrice(product.price)}\n\nPlease send more details.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-[#0B0D0F] min-h-screen text-white font-sans">
      
      {/* NAVIGATION */}
      <nav className="relative z-30 bg-[#121416] text-[#E4E4E7] px-6 py-4 border-b border-gray-800/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 select-none">
            <div className="bg-gradient-to-br from-[#FF833E] to-[#FA541C] text-[#121416] font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
              M
            </div>
            <span className="text-white font-extrabold tracking-wider text-xl uppercase font-mono">
              Motorhaus
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">HOME</a>
            <a href="#" className="text-[#FF833E]">DEALERSHIPS</a>
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">PARTS</a>
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">ACCESSORIES</a>
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">CONTACT</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 tracking-wide">
              BOOK TEST DRIVE
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-800 space-y-3 px-6">
            <a href="#" className="block py-2 text-[#9CA3AF]">HOME</a>
            <a href="#" className="block py-2 text-[#FF833E]">DEALERSHIPS</a>
            <a href="#" className="block py-2 text-[#9CA3AF]">PARTS</a>
            <a href="#" className="block py-2 text-[#9CA3AF]">ACCESSORIES</a>
            <a href="#" className="block py-2 text-[#9CA3AF]">CONTACT</a>
            <button className="w-full bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold py-3 rounded-lg mt-4">
              BOOK TEST DRIVE
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-between overflow-hidden pt-20 md:pt-28 min-h-[85vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
          style={{ backgroundImage: `url(${DealBannerPic})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-start space-y-4">
          <span className="text-[#FF833E] text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
            DEALERSHIPS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase font-mono">
            THE RIGHT CAR.{' '}
            <span className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] bg-clip-text text-transparent block sm:inline">
              THE RIGHT DEAL.
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light pt-2">
            Shop our authorized inventory of new and certified pre-owned vehicles from the brands you trust.
          </p>
        </div>

        <div className="relative z-10 w-full bg-[#121416]/70 border-t border-b border-gray-800/40 backdrop-blur-sm mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 overflow-x-auto scrollbar-none">
            <div className="flex items-center justify-between min-w-[768px] lg:min-w-0 md:px-8 gap-6">
              {brands.map((brand) => (
                <span key={brand} className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base font-black tracking-[0.18em] font-mono">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FILTERS ==================== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="border-b border-gray-800 mb-10">
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium">
            {[
              { label: "All Vehicles", value: "all" },
              { label: "Cars", value: SUBCATEGORY_IDS.CARS },
              { label: "SUVs", value: SUBCATEGORY_IDS.SUVS },
              { label: "Vans", value: SUBCATEGORY_IDS.VANS },
              { label: "Pickup Trucks", value: SUBCATEGORY_IDS.PICKUP_TRUCKS },
              { label: "Motorcycles", value: SUBCATEGORY_IDS.MOTORCYCLES },
              { label: "Electric Vehicles", value: SUBCATEGORY_IDS.ELECTRIC_VEHICLES },
              { label: "Commercial Vehicles", value: SUBCATEGORY_IDS.COMMERCIAL_VEHICLES },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`pb-4 relative transition-all duration-300 hover:text-white
                  ${activeFilter === filter.value 
                    ? 'text-white' 
                    : 'text-gray-400'
                  }`}
              >
                {filter.label}
                {activeFilter === filter.value && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF833E] to-[#FA541C] rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <p className="text-center py-20 text-gray-400">Loading vehicles...</p>
        ) : error ? (
          <p className="text-center py-12 text-red-500">{error}</p>
        ) : filteredVehicles.length === 0 ? (
          <p className="text-center py-20 text-gray-400">No vehicles found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-[#121416] border border-gray-800 rounded-2xl overflow-hidden group hover:border-[#FF833E]/30 transition-all duration-300"
              >
                <div className="relative h-64 bg-zinc-900 overflow-hidden">
                  <img
                    src={
                      vehicle.image_url
                        ? `http://localhost/ART_CRAFT_DB/${vehicle.image_url}`
                        : "https://via.placeholder.com/600x400?text=Vehicle"
                    }
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Vehicle"; }}
                  />
                  {vehicle.popular === "1" && (
                    <div className="absolute top-4 right-4 bg-[#FF833E] text-black text-xs font-bold px-4 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                      {vehicle.sub_category_name || "Vehicle"}
                    </p>
                    <span className="text-2xl font-semibold text-white">
                      Rs. {formatPrice(vehicle.price)}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">{vehicle.name}</h2>
                  {vehicle.description && (
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {vehicle.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-sm mb-6">
                    <span className="text-emerald-500 font-medium">
                      In Stock: {vehicle.stock}
                    </span>
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(vehicle)}
                    className="w-full bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-black font-semibold py-4 rounded-xl hover:brightness-110 transition-all"
                  >
                    INQUIRE VIA WHATSAPP
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BOTTOM SECTION */}
      <section className="bg-[#121416] py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-[#FF833E] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            QUALITY &amp; TRUST
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            DRIVEN BY EXCELLENCE
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From sleek sedans to powerful SUVs and electric vehicles — every car is carefully selected for performance, reliability, and value.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dealership;