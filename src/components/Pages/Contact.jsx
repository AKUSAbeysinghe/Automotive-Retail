// import React from 'react';
// import ContactInfo from "../Pages/ContactInfo.jsx";

// export default function InstallBayFeature() {
//   return (
//     <section className="bg-neutral-950 p-6 sm:p-12 md:p-16 text-white min-h-[500px] flex items-center">
//       <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        
//         {/* Left Side: Image Container */}
//         <div className="relative aspect-[4/3] sm:aspect-video md:aspect-[4/3] w-full rounded-2xl overflow-hidden group">
//           <img 
//             src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop" 
//             alt="Car interior with ambient led lighting" 
//             className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten transition-all duration-500 group-hover:scale-102 group-hover:opacity-90"
//           />
//           {/* Subtle color highlight mask mimicking the original ambient light styling */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-500/10 pointer-events-none" />
//         </div>

//         {/* Right Side: Content Block */}
//         <div className="space-y-4 md:space-y-6">
//           {/* Subheading Badge */}
//           <span className="text-xs font-bold tracking-[0.3em] uppercase text-orange-500 block">
//             Install Bay
//           </span>

//           {/* Feature Main Title */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[1.05] text-neutral-100">
//             Pro Installation in 90 minutes or less.
//           </h2>

//           {/* Main Description */}
//           <p className="text-neutral-400 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
//             Our in-house technicians fit every accessory we sell — 
//             clean wiring, factory-grade finish, lifetime workmanship warranty.
//           </p>
//         </div>

//       </div>
//       <ContactInfo/>
//     </section>
    
//   );
// }




import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactImage from "../../assets/Mains/Porsche.jpg";

// ======================
// Install Bay Feature
// ======================
export function InstallBayFeature() {
  return (
    <section className="bg-neutral-950 p-6 sm:p-12 md:p-16 text-white">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* Left Side: Image */}
        <div className="relative aspect-[4/3] sm:aspect-video md:aspect-[4/3] w-full rounded-2xl overflow-hidden group">
          <img 
            src={ContactImage} 
            alt="Car interior with ambient led lighting" 
            className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-500/10 pointer-events-none" />
        </div>

        {/* Right Side: Content */}
        <div className="space-y-4 md:space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-orange-500 block">
            Install Bay
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[1.05] text-neutral-100">
            Pro Installation in 90 minutes or less.
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
            Our in-house technicians fit every accessory we sell — 
            clean wiring, factory-grade finish, lifetime workmanship warranty.
          </p>
        </div>

      </div>
    </section>
  );
}

// ======================
// Contact Info
// ======================
export function ContactInfo() {
  const contactDetails = [
    {
      title: 'Visit',
      icon: MapPin,
      content: (
        <>
          1200 Motorway Ave
          <br />
          Los Angeles, CA 90015
        </>
      ),
      link: 'https://maps.google.com',
    },
    {
      title: 'Call',
      icon: Phone,
      content: '+1 (800) 555-0199',
      link: 'tel:+18005550199',
    },
    {
      title: 'Email',
      icon: Mail,
      content: 'hello@motorhaus.com',
      link: 'mailto:hello@motorhaus.com',
    },
    {
      title: 'Hours',
      icon: Clock,
      content: (
        <>
          Mon–Sat · 9am–8pm
          <br />
          Sun · 10am–6pm
        </>
      ),
      link: null,
    },
  ];

  return (
    <section className="bg-neutral-950 p-6 sm:p-12 md:p-16 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4">
          {contactDetails.map((item, index) => {
            const IconComponent = item.icon;
            const WrapperComponent = item.link ? 'a' : 'div';

            return (
              <WrapperComponent
                key={index}
                href={item.link || undefined}
                target={item.link && item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-5 flex items-start gap-5 w-full transition-all duration-300 min-h-[96px] ${
                  item.link 
                    ? 'hover:border-orange-500/30 hover:bg-neutral-900 group cursor-pointer' 
                    : 'cursor-default'
                }`}
              >
                {/* Icon */}
                <div className="bg-orange-500 text-black p-3 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <IconComponent className="w-5 h-5 stroke-[2.5]" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center pt-0.5">
                  <h3 className="text-lg font-black tracking-tight uppercase text-neutral-100 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-neutral-400 text-sm sm:text-base mt-1 font-normal leading-relaxed tracking-wide">
                    {item.content}
                  </div>
                </div>
              </WrapperComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ======================
// Main Combined Component (Default Export)
// ======================
export default function InstallBayWithContact() {
  return (
    <>
      <InstallBayFeature />
      <ContactInfo />
    </>
  );
}