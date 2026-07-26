"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Siyabonga M.",
      role: "Logistics Partner",
      location: "Johannesburg",
      quote: "IVATI’s clean packaging and consistent quality have made it an instant favorite across our distribution routes. Reliable, quiet excellence.",
    },
    {
      name: "Nomvula K.",
      role: "Independent Retailer",
      location: "Soweto",
      quote: "Our customers value the crisp purity and the brand's local connection. It stands proudly alongside global brands on our shelves.",
    },
    {
      name: "Thabo S.",
      role: "Event Director",
      location: "Pretoria",
      quote: "We specified IVATI custom-branded bottles for an international summit in Gauteng. Delivery was punctual and presentation was flawless.",
    },
    {
      name: "Dr. Lindiwe D.",
      role: "Wellness Advocate",
      location: "Cape Town",
      quote: "Zero metallic aftertaste and neutral pH balance. IVATI delivers clean hydration without any pretense.",
    },
  ];

  return (
    <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2E8F0] select-none">
      
      {/* Header */}
      <div className="max-w-xl space-y-4 mb-20">
        <span className="text-xs font-mono tracking-[0.25em] text-[#0077FF] uppercase font-semibold">
          06 / RECOGNITION
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#071A2D] tracking-tight">
          Trusted by partners and purists.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((r, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <p className="text-xs text-[#071A2D] leading-relaxed font-light italic">
              &ldquo;{r.quote}&rdquo;
            </p>

            <div className="pt-4 border-t border-[#E2E8F0] space-y-0.5 font-mono">
              <h4 className="text-xs font-bold text-[#071A2D]">{r.name}</h4>
              <span className="text-[10px] text-[#0077FF] block">{r.role}</span>
              <span className="text-[10px] text-[#64748B] block">{r.location}</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
