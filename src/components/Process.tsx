"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Source",
      subtitle: "Natural Pure Water Base",
      desc: "Carefully selected pristine South African water sources tested for baseline purity and natural mineral composition.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Purify",
      subtitle: "Multi-Stage Micro-Filtration",
      desc: "Passed through 7-stage reverse osmosis, activated carbon, and UV sterilization to ensure zero impurities.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Bottle",
      subtitle: "Sterile Modern Bottling",
      desc: "Encapsulated in clean, recyclable PET and glass containers under strict clinical hygienic conditions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <line x1="6" y1="8" x2="18" y2="8" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Deliver",
      subtitle: "Community & Partner Logistics",
      desc: "Dispatched through reliable local logistics to spaza stores, retail partners, events, and homes across South Africa.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2E8F0] select-none">
      
      {/* Header */}
      <div className="max-w-xl space-y-4 mb-20">
        <span className="text-xs font-mono tracking-[0.25em] text-[#0077FF] uppercase font-semibold">
          04 / OUR PROCESS
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#071A2D] tracking-tight">
          Precision at every stage.
        </h2>
        <p className="text-sm text-[#64748B] font-normal leading-relaxed">
          From natural source to cold delivery, every step is engineered for uncompromised quality.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        
        {/* Subtle Horizontal Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 inset-x-0 h-0.5 bg-[#E2E8F0] -translate-y-12 z-0" />

        {steps.map((s, idx) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative z-10 p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0077FF] shadow-sm transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between text-[#64748B] group-hover:text-[#0077FF] transition-colors">
                <span className="text-xs font-mono font-bold tracking-widest">{s.step}</span>
                <div className="p-2 rounded-xl bg-[#F8FAFC] group-hover:bg-[#0077FF]/10 transition-colors">
                  {s.icon}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#071A2D] tracking-tight group-hover:text-[#0077FF] transition-colors">
                  {s.title}
                </h3>
                <span className="text-xs font-mono text-[#0077FF] block">
                  {s.subtitle}
                </span>
              </div>

              <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                {s.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] text-[10px] font-mono text-[#64748B] tracking-wider uppercase">
              STAGE {s.step} COMPLETE
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
