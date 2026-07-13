import React from 'react';

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Sales Executive",
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "5+ years",
    },
    {
      id: 2,
      title: "Service Center Manager",
      department: "After Sales",
      location: "Riyadh, KSA",
      type: "Full-time",
      experience: "7+ years",
    },
    {
      id: 3,
      title: "Automotive Technician (EV Specialist)",
      department: "Technical",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      experience: "4+ years",
    },
    {
      id: 4,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "5+ years",
    },
    {
      id: 5,
      title: "Parts Department Supervisor",
      department: "Operations",
      location: "Jeddah, KSA",
      type: "Full-time",
      experience: "6+ years",
    },
    {
      id: 6,
      title: "Customer Experience Specialist",
      department: "Customer Support",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "3+ years",
    },
  ];

  const benefits = [
    "Competitive Salary & Performance Bonus",
    "Comprehensive Health Insurance",
    "Company Car + Fuel Allowance",
    "Professional Training & Development",
    "Generous Annual Leave",
    "Fast Career Growth",
  ];

  return (
    <div className="bg-[#121416] text-[#E4E4E7] min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1A1D21] to-[#121416] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF833E]/10 text-[#FF833E] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            JOIN OUR JOURNEY
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            BUILD THE FUTURE <span className="text-[#FF833E]">WITH US</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Be part of a fast-growing premium automotive group that's redefining the driving experience across the region.
          </p>
        </div>
      </div>

      {/* Why Motorhaus */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              Why Motorhaus?
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#FF833E]">01 — Growth Opportunities</h3>
                <p className="text-gray-400">Rapidly expanding network with clear career progression paths and international exposure.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#FF833E]">02 — Premium Culture</h3>
                <p className="text-gray-400">Work with world-class brands alongside passionate professionals who love automobiles.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#FF833E]">03 — Innovation First</h3>
                <p className="text-gray-400">Stay at the forefront of luxury automotive and electric mobility technologies.</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-8">What We Offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-[#1A1D21] border border-gray-800 hover:border-[#FF833E]/30 p-6 rounded-2xl transition-all"
                >
                  <p className="font-medium text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-[#1A1D21] py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Open Positions</h2>
              <p className="text-gray-400 mt-2">Join our growing family</p>
            </div>
            <button className="text-[#FF833E] hover:text-orange-400 font-semibold flex items-center gap-2">
              VIEW ALL ROLES →
            </button>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="group bg-[#121416] border border-gray-800 hover:border-[#FF833E]/40 rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-mono tracking-widest text-[#FF833E] uppercase">{job.department}</span>
                    <span className="text-xs px-3 py-1 bg-gray-800 rounded-full">{job.type}</span>
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-[#FF833E] transition-colors">
                    {job.title}
                  </h3>
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-6 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs">LOCATION</p>
                    <p className="font-medium">{job.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">EXPERIENCE</p>
                    <p className="font-medium">{job.experience}</p>
                  </div>
                </div>

                <button className="mt-4 md:mt-0 bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold px-8 py-3.5 rounded-xl hover:brightness-110 active:scale-95 transition-all whitespace-nowrap">
                  APPLY NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Drive Your Career Forward?</h3>
          <p className="text-lg mb-8 opacity-90">
            Even if you don't see your perfect role right now, we're always looking for talented people.
          </p>
          <button 
            onClick={() => window.location.href = "mailto:careers@motorhaus.com"}
            className="bg-[#121416] text-white font-bold px-12 py-4 rounded-2xl hover:bg-black transition-all text-lg"
          >
            SEND YOUR RESUME
          </button>
          <p className="mt-4 text-sm opacity-75">careers@motorhaus.com</p>
        </div>
      </div>
    </div>
  );
}