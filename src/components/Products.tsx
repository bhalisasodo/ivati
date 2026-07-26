"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductsProps {
  onOpenOrderModal: (productName?: string) => void;
}

export default function Products({ onOpenOrderModal }: ProductsProps) {
  const collection = [
    {
      id: "500ml",
      name: "500ml Still Water",
      subtitle: "Personal Hydration Carafe",
      volume: "500ml",
      image: "/ivati_luxury_bottle.jpg",
      specs: ["Ultra-Filtered RO Water", "pH 7.4 Neutral", "Recyclable Glass/PET"],
      price: "R8.00 / bottle",
      caseInfo: "Case of 24 — R180",
    },
    {
      id: "1.5L",
      name: "1.5L Still Reserve",
      subtitle: "All-Day Pure Hydration",
      volume: "1500ml",
      image: "/ivati_bottle_trio.jpg",
      specs: ["Extra Hydration Volume", "Zero Sodium", "Ergonomic Sculpted Bottle"],
      price: "R18.00 / bottle",
      caseInfo: "Pack of 12 — R200",
    },
    {
      id: "5L",
      name: "5L Home & Office Jug",
      subtitle: "Architectural Dispenser",
      volume: "5000ml",
      image: "/ivati_luxury_bottle.jpg",
      specs: ["Maximum Value Reserve", "Easy Pour Spout", "Kitchen & Office Stand"],
      price: "R40.00 / jug",
      caseInfo: "Refill Supply Available",
    },
  ];

  return (
    <section id="products" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto select-none relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-[#E2E8F0] pb-8">
        <div className="space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-[#0077FF] uppercase font-semibold">
            03 / THE COLLECTION
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#071A2D] tracking-tight">
            Curated purity in three forms.
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-normal leading-relaxed">
          Encapsulated in liquid glass design. Sculpted containers holding ultra-pure South African spring & micro-filtered water.
        </p>
      </div>

      {/* Grid of Liquid Glass Product Displays */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
        {collection.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            className="group flex flex-col justify-between liquid-glass rounded-3xl p-8 border border-white/90 hover:border-[#0077FF]/40 hover:shadow-[0_25px_60px_rgba(7,26,45,0.08)] transition-all duration-500"
          >
            {/* Image Container with Liquid Refractive Frame */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white/90 border border-white/80 shadow-inner group-hover:shadow-md transition-shadow mb-8">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full liquid-glass text-[11px] font-mono font-semibold text-[#071A2D] shadow-sm border border-white/90">
                {item.volume}
              </div>
            </div>

            {/* Product Meta */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-[#0077FF] tracking-wider uppercase block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-[#071A2D] tracking-tight">
                  {item.name}
                </h3>
              </div>

              <div className="space-y-2 text-xs font-mono text-[#64748B]">
                <div className="flex justify-between border-b border-[#E2E8F0]/80 pb-2">
                  <span>PRICE PER UNIT</span>
                  <span className="font-semibold text-[#071A2D]">{item.price}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0]/80 pb-2">
                  <span>WHOLESALE CASE</span>
                  <span className="font-semibold text-[#071A2D]">{item.caseInfo}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenOrderModal(item.name)}
                className="w-full py-3.5 rounded-full bg-[#071A2D] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#0077FF] transition-colors duration-300 shadow-sm active:scale-95 cursor-pointer"
              >
                Order {item.name}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
