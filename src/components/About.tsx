"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="story"
      className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2E8F0] select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Column — Editorial Tag & Big Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-6"
        >
          <span className="text-xs font-mono tracking-[0.25em] text-[#0077FF] uppercase font-semibold">
            01 / THE STORY
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#071A2D] tracking-tight leading-[1.1]">
            Water as it was <br />
            intended to be.
          </h2>

          <div className="w-12 h-0.5 bg-[#0077FF]" />

          {/* Spring Source Visual Card */}
          <div className="relative rounded-3xl p-3 liquid-glass border border-white/90 shadow-lg group overflow-hidden mt-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/images/spring-source.jpg"
                alt="Pristine South African Water Source"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2D]/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-mono">
                <span className="text-[#3CB9FF] font-bold block text-[10px] uppercase tracking-wider">
                  ORIGIN SOURCE
                </span>
                <span className="font-semibold text-white/90 text-[11px]">
                  Pristine South African Aquifer
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Editorial Prose & Brand Etymology */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-8 text-[#071A2D]"
        >
          <p className="text-xl sm:text-2xl font-light text-[#071A2D] leading-relaxed tracking-tight">
            In South African township vernacular, <span className="font-semibold text-[#0077FF]">&ldquo;ivati&rdquo;</span> simply means water. It represents life, movement, and community connection.
          </p>

          <div className="space-y-6 text-base text-[#64748B] font-normal leading-relaxed">
            <p>
              IVATI was created to elevate daily hydration across South Africa. We pair advanced multi-stage purification with understated, timeless design—delivering crisp, ultra-pure water that honors its local roots while meeting global luxury standards.
            </p>
            <p>
              No artificial marketing gimmicks, no loud corporate promises. Just uncompromised purity, accessibility, and enduring trust.
            </p>
          </div>

          {/* 4 Brand Pillars Bar */}
          <div className="pt-8 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-[#071A2D]">
            <div>
              <span className="text-[#64748B] block text-[10px]">CHARACTER</span>
              <span className="font-semibold text-sm block mt-1">Fresh</span>
            </div>
            <div>
              <span className="text-[#64748B] block text-[10px]">QUALITY</span>
              <span className="font-semibold text-sm block mt-1">Pure</span>
            </div>
            <div>
              <span className="text-[#64748B] block text-[10px]">MISSION</span>
              <span className="font-semibold text-sm block mt-1">Accessible</span>
            </div>
            <div>
              <span className="text-[#64748B] block text-[10px]">PROMISE</span>
              <span className="font-semibold text-sm block mt-1">Trusted</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
