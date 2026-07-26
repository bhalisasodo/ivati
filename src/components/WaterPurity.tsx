"use client";

import React from "react";
import { ShieldCheck, Droplets, Sparkles, Award, Zap, Activity } from "lucide-react";

export default function WaterPurity() {
  const steps = [
    { num: "01", title: "Sediment Filtration", desc: "Filters out sand, dust, rust & coarse particles down to 5 microns." },
    { num: "02", title: "Activated Carbon Block", desc: "Removes chlorine, volatile chemicals, and municipal chemical odors." },
    { num: "03", title: "Reverse Osmosis (RO)", desc: "High-pressure membrane filtering microscopic dissolved impurities down to 0.0001 microns." },
    { num: "04", title: "pH 7.4 Mineralization", desc: "Infuses essential balanced trace minerals for optimal hydration and crisp taste." },
    { num: "05", title: "Post-Carbon Polish", desc: "Fine polishing process that guarantees ultra-smooth, refreshing mouthfeel." },
    { num: "06", title: "Ultraviolet Disinfection", desc: "High-intensity UV treatment neutralizing 99.99% of bacteria and micro-organisms." },
    { num: "07", title: "Ozonation & Bottling", desc: "Clinical touchless bottling sealed under sterile micro-filtered pressure." },
  ];

  return (
    <section id="purity" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0047ab]/20 border border-[#00b4ff]/40 text-[#00b4ff] text-xs font-mono font-bold uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Advanced Purification Technology</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          7-STAGE PURITY SYSTEM
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
          Every drop of IVATI water undergoes rigorous multi-tier purification to achieve maximum purity, safety, and refreshing taste.
        </p>
      </div>

      {/* 7-Step Interactive Flow Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3 items-stretch">
        {steps.map((step, idx) => (
          <div
            key={step.num}
            className="p-5 rounded-2xl bg-[#061a33]/90 border border-[#00b4ff]/30 hover:border-[#00b4ff] hover:shadow-[0_0_20px_rgba(0,180,255,0.2)] transition-all flex flex-col justify-between space-y-3 h-full relative overflow-hidden group"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#00b4ff] block">{step.num}</span>
              <h4 className="text-xs font-extrabold text-white font-mono uppercase group-hover:text-[#a3d9ff] transition-colors">
                {step.title}
              </h4>
            </div>
            <p className="text-[11px] text-zinc-300 font-light leading-snug">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Live Lab Specs Stats Bar */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#061a33] via-[#0047ab]/30 to-[#061a33] border border-[#00b4ff]/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
        <div>
          <span className="text-[10px] text-[#a3d9ff] block">pH PROFILE</span>
          <span className="text-2xl font-black text-white">7.4 BALANCED</span>
        </div>
        <div>
          <span className="text-[10px] text-[#a3d9ff] block">PURITY LEVEL</span>
          <span className="text-2xl font-black text-[#00b4ff]">99.99% PURE</span>
        </div>
        <div>
          <span className="text-[10px] text-[#a3d9ff] block">IMPURITIES</span>
          <span className="text-2xl font-black text-white">0 PPM</span>
        </div>
        <div>
          <span className="text-[10px] text-[#a3d9ff] block">SHELF-LIFE</span>
          <span className="text-2xl font-black text-[#00b4ff]">12 MONTHS</span>
        </div>
      </div>

    </section>
  );
}
