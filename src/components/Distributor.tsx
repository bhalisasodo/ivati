"use client";

import React from "react";
import { motion } from "framer-motion";

interface DistributorProps {
  onOpenDistributorModal: () => void;
}

export default function Distributor({ onOpenDistributorModal }: DistributorProps) {
  return (
    <section id="distributor" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto select-none">
      <div className="relative p-10 sm:p-16 rounded-3xl liquid-glass-dark text-white overflow-hidden shadow-2xl space-y-8 border border-[#3CB9FF]/30">
        
        {/* Ambient Liquid Light Refraction Overlay */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0077FF]/40 via-[#3CB9FF]/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <span className="text-xs font-mono tracking-[0.25em] text-[#3CB9FF] uppercase font-semibold">
            05 / PARTNERSHIP OPPORTUNITY
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-balance">
            Grow with IVATI. <br />
            <span className="text-[#3CB9FF] italic font-normal">
              Become an official distributor.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#E2E8F0]/90 font-light leading-relaxed max-w-2xl">
            We partner with ambitious local entrepreneurs, spaza shops, retail chains, hospitality groups, and logistics providers across South Africa. Enjoy wholesale margins, dedicated account managers, and priority liquid distribution.
          </p>

          {/* 3 Partner Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs font-mono text-[#E2E8F0]">
            <div className="space-y-1">
              <span className="text-[#3CB9FF] block text-[10px]">01 // MARGINS</span>
              <span className="font-semibold text-sm text-white block">Competitive Wholesale Pricing</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#3CB9FF] block text-[10px]">02 // LOGISTICS</span>
              <span className="font-semibold text-sm text-white block">Priority Regional Delivery</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#3CB9FF] block text-[10px]">03 // BRANDING</span>
              <span className="font-semibold text-sm text-white block">Co-Branding & Event Support</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenDistributorModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0077FF] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#3CB9FF] hover:text-[#071A2D] transition-all duration-300 shadow-[0_0_25px_rgba(0,119,255,0.4)] active:scale-95 cursor-pointer"
            >
              Apply as a Distributor
            </button>
            <a
              href="https://wa.me/27782692166?text=Hi%20IVATI!%20I'd%20like%20to%20apply%20to%20become%20an%20official%20distributor."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/30 text-white text-xs font-semibold tracking-wider uppercase hover:bg-white/10 transition-colors text-center"
            >
              WhatsApp Partner Desk
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
