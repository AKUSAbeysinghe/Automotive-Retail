import React from 'react';

export default function Press() {
  const pressReleases = [
    {
      id: 1,
      title: "Motorhaus Expands Dealership Network with Three New Locations",
      date: "July 10, 2026",
      category: "Expansion",
      excerpt: "Motorhaus is proud to announce the opening of three new state-of-the-art dealerships in key markets, bringing premium automotive experiences closer to our customers.",
      image: "https://picsum.photos/id/1071/800/500",
      link: "#",
    },
    {
      id: 2,
      title: "Motorhaus Launches Revolutionary EV Service Program",
      date: "June 28, 2026",
      category: "Innovation",
      excerpt: "Our new comprehensive electric vehicle maintenance and upgrade program sets a new industry standard for after-sales service.",
      image: "https://picsum.photos/id/1075/800/500",
      link: "#",
    },
    {
      id: 3,
      title: "Record-Breaking Sales in Q2 2026",
      date: "June 15, 2026",
      category: "Financial",
      excerpt: "Motorhaus achieves highest quarterly sales in company history, with a 47% increase in premium vehicle deliveries.",
      image: "https://picsum.photos/id/106/800/500",
      link: "#",
    },
    {
      id: 4,
      title: "Motorhaus Wins 'Best Customer Experience' Award 2026",
      date: "May 22, 2026",
      category: "Awards",
      excerpt: "Recognized by the National Automotive Association for outstanding service and customer satisfaction.",
      image: "https://picsum.photos/id/201/800/500",
      link: "#",
    },
  ];

  return (
    <div className="bg-[#121416] text-[#E4E4E7] min-h-screen font-sans">
      {/* Navbar is assumed to be imported above this component */}

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1A1D21] to-[#121416] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF833E]/10 text-[#FF833E] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            MEDIA CENTER
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            MOTORHAUS <span className="text-[#FF833E]">PRESS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Latest news, announcements, and stories from the world of Motorhaus
          </p>
        </div>
      </div>

      {/* Press Releases */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Latest Releases</h2>
          
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-[#1F2328] hover:bg-[#2A2F36] rounded-lg text-sm transition-colors">
              All
            </button>
            <button className="px-5 py-2 bg-[#1F2328] hover:bg-[#2A2F36] rounded-lg text-sm transition-colors">
              Expansion
            </button>
            <button className="px-5 py-2 bg-[#1F2328] hover:bg-[#2A2F36] rounded-lg text-sm transition-colors">
              Innovation
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pressReleases.map((release) => (
            <div
              key={release.id}
              className="group bg-[#1A1D21] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#FF833E]/30 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={release.image}
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF833E] text-[#121416] text-xs font-bold px-3 py-1 rounded-md">
                    {release.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="text-[#FF833E] text-sm font-mono tracking-widest mb-3">
                  {release.date}
                </div>
                
                <h3 className="text-2xl font-semibold leading-tight mb-4 group-hover:text-[#FF833E] transition-colors">
                  {release.title}
                </h3>
                
                <p className="text-gray-400 line-clamp-3 mb-6">
                  {release.excerpt}
                </p>

                <a
                  href={release.link}
                  className="inline-flex items-center gap-2 text-[#FF833E] hover:text-orange-400 font-semibold group-hover:gap-3 transition-all"
                >
                  READ FULL STORY
                  <span className="text-xl leading-none">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-16">
          <button className="bg-gradient-to-r from-[#FF833E] to-[#FA541C] text-[#121416] font-bold px-10 py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all">
            LOAD MORE STORIES
          </button>
        </div>
      </div>

      {/* Media Contact Section */}
      <div className="bg-[#1A1D21] py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Press & Media Inquiries</h3>
          <p className="text-gray-400 mb-10 text-lg">
            For press inquiries, interview requests, or media partnerships
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="text-left">
              <p className="text-sm text-gray-500">MEDIA CONTACT</p>
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-[#FF833E]">Head of Communications</p>
            </div>
            <div className="h-12 w-px bg-gray-700 hidden md:block" />
            <a href="mailto:press@motorhaus.com" className="text-2xl font-mono hover:text-[#FF833E] transition-colors">
              press@motorhaus.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}