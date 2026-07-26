"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyIVATI() {
  const cards = [
    {
      num: "01",
      title: "Purified Water",
      desc: "Micro-filtered through advanced multi-stage reverse osmosis and UV sterilization, removing 99.9% of impurities for effortless clarity.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Reliable Distribution",
      desc: "Direct supply chains engineered to serve retailers, hospitality partners, event caterers, and local communities without interruption.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Premium Quality",
      desc: "Neutral pH balance and zero chemical aftertaste. Bottled under sterile conditions to meet strict international standards.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Locally Proud",
      desc: "Rooted in South African identity. Celebrating local talent, community empowerment, and sustainable township commerce.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto select-none my-12 relative">
      
      {/* Background Liquid Light Refraction Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-[#0077FF]/10 via-[#3CB9FF]/15 to-[#0077FF]/10 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-xl space-y-4 mb-16 relative z-10">
        <span className="text-xs font-mono tracking-[0.25em] text-[#0077FF] uppercase font-semibold">
          02 / PHILOSOPHY
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#071A2D] tracking-tight">
          Quiet luxury. Built on core principles.
        </h2>
        <p className="text-sm text-[#64748B] font-normal leading-relaxed">
          Four liquid glass pillars defining our commitment to purity, aesthetics, and reliability across South Africa.
        </p>
      </div>

      {/* 4 Liquid Glass Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {cards.map((card, idx) => (
          <motion.div
            key={card.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl liquid-glass border border-white/90 hover:border-[#0077FF]/50 shadow-[0_15px_35px_rgba(7,26,45,0.06)] hover:shadow-[0_20px_45px_rgba(0,119,255,0.12)] transition-all duration-500 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between text-[#64748B] group-hover:text-[#0077FF] transition-colors">
                <span className="text-xs font-mono tracking-widest">{card.num}</span>
                <div className="p-3 rounded-2xl bg-white/80 border border-white/90 group-hover:bg-[#0077FF]/10 transition-colors shadow-sm">
                  {card.icon}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#071A2D] tracking-tight group-hover:text-[#0077FF] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/80 text-[10px] font-mono text-[#64748B] tracking-wider uppercase">
              IVATI BENCHMARK
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
