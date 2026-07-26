"use client";

import React from "react";
import { Sparkles, ShieldCheck, Heart, Users, Droplets, Award, Zap } from "lucide-react";

export default function BrandStory() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Ultra-Purified Perfection",
      subtitle: "7-Stage Micro-Filtration",
      desc: "Our water undergoes rigorous 7-stage reverse osmosis and UV sterilization, removing 99.9% of impurities while retaining essential natural minerals.",
      badge: "PURITY GUARANTEED",
    },
    {
      icon: Heart,
      title: "Fresh From eKasi!",
      subtitle: "Township Pride & Innovation",
      desc: "Born in local communities, IVATI celebrates South African resilience and entrepreneurship. Premium quality shouldn't come with high corporate markups.",
      badge: "COMMUNITY FIRST",
    },
    {
      icon: Droplets,
      title: "pH 7.4 Balanced Refreshment",
      subtitle: "Optimal Cellular Hydration",
      desc: "Perfectly balanced pH profile ensures smooth, crisp taste with zero aftertaste, optimizing hydration for athletes, workers, and families.",
      badge: "OPTIMAL pH",
    },
    {
      icon: Users,
      title: "Bulk Supply & Wholesale",
      subtitle: "Events, Taxis & Spazas",
      desc: "Dedicated wholesale distribution for taxi associations, weddings, funerals, spaza shops, gyms, and corporate events across eKasi.",
      badge: "FAST DELIVERY",
    },
  ];

  return (
    <section id="why-ivati" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 select-none">
      
      {/* Value Statement Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0047ab]/20 border border-[#00b4ff]/40 text-[#00b4ff] text-xs font-mono font-bold uppercase tracking-widest shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The IVATI Difference</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
          PREMIUM HYDRATION <br />
          <span className="text-[#00b4ff]">WITHOUT COMPROMISE</span>
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
          IVATI Beverages was created to bridge the gap between world-class water purification technology and local community accessibility. We believe everyone deserves clean, ice-cold, ultra-pure water.
        </p>
      </div>

      {/* 4 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {pillars.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-gradient-to-b from-[#061a33]/90 to-[#040d1b] border border-[#00b4ff]/30 hover:border-[#00b4ff] hover:shadow-[0_0_35px_rgba(0,180,255,0.25)] transition-all duration-300 flex flex-col justify-between space-y-6 group relative overflow-hidden"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#061a33] border border-[#00b4ff]/40 text-[#00b4ff] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#061a33] border border-[#00b4ff]/30 text-[10px] font-mono text-[#a3d9ff] font-bold">
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#00b4ff] transition-colors">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono text-[#a3d9ff] font-semibold block mt-1">
                    {pillar.subtitle}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#00b4ff]/20 text-[10px] font-mono text-[#00b4ff] font-bold">
                ● IVATI STANDARDS
              </div>
            </div>
          );
        })}
      </div>

      {/* Community Banner */}
      <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#061a33] via-[#0047ab]/40 to-[#061a33] border border-[#00b4ff]/40 shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono text-[#00b4ff] font-bold uppercase tracking-widest block">
            eKasi Distribution Network
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Need Bulk Water For Your Event or Store?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            We offer wholesale pricing and priority delivery for spaza shops, taxi ranks, weddings, funerals, community events, and fitness centers.
          </p>
        </div>

        <a
          href="https://wa.me/27782692166?text=Hi%20IVATI!%20I%20want%20to%20inquire%20about%20bulk%20water%20orders."
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-8 py-4 rounded-full bg-[#00b4ff] text-[#061a33] font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,180,255,0.5)] hover:bg-[#a3d9ff] hover:scale-105 transition-all"
        >
          Inquire Bulk Rates
        </a>

      </div>

    </section>
  );
}
