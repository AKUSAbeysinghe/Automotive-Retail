import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfoStack() {
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
      <div className="max-w-6xl mx-auto space-y-4">
        {contactDetails.map((item, index) => {
          const IconComponent = item.icon;
          const IsLink = item.link;
          const WrapperComponent = IsLink ? 'a' : 'div';

          return (
            <WrapperComponent
              key={index}
              href={item.link || undefined}
              target={IsLink && item.link.startsWith('http') ? '_blank' : undefined}
              rel={IsLink && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-5 flex items-start gap-5 w-full transition-all duration-300 min-h-[96px] ${
                IsLink 
                  ? 'hover:border-orange-500/30 hover:bg-neutral-900 group cursor-pointer' 
                  : 'cursor-default'
              }`}
            >
              {/* Left Side: Orange Icon Square */}
              <div className="bg-orange-500 text-black p-3 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <IconComponent className="w-5 h-5 stroke-[2.5]" />
              </div>

              {/* Right Side: Text Fields */}
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
    </section>
  );
}