"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenDistributorModal: () => void;
}

export default function Hero({
  onOpenOrderModal,
  onOpenDistributorModal,
}: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Liquid glass caustic light & water refraction canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const updateDimensions = () => {
      if (!canvas) return { width: 0, height: 0 };
      const w = (canvas.width = canvas.offsetWidth || window.innerWidth);
      const h = (canvas.height = canvas.offsetHeight || window.innerHeight);
      return { width: w, height: h };
    };

    let { width, height } = updateDimensions();

    const handleResize = () => {
      const dim = updateDimensions();
      width = dim.width;
      height = dim.height;
    };
    window.addEventListener("resize", handleResize);

    // Refractive liquid light orbs
    const drops = Array.from({ length: 18 }).map(() => ({
      x: Math.random() * (width || 800),
      y: Math.random() * (height || 600),
      radius: Math.random() * 140 + 80,
      alpha: Math.random() * 0.18 + 0.05,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const render = () => {
      if (!ctx || width === 0 || height === 0) return;
      ctx.clearRect(0, 0, width, height);

      drops.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < -150) d.x = width + 150;
        if (d.x > width + 150) d.x = -150;
        if (d.y < -150) d.y = height + 150;
        if (d.y > height + 150) d.y = -150;

        const grad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.radius);
        grad.addColorStop(0, `rgba(60, 185, 255, ${d.alpha})`);
        grad.addColorStop(0.4, `rgba(0, 119, 255, ${d.alpha * 0.6})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-36 pb-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden select-none"
    >
      {/* Hero Background Image with Atmospheric Gradient Masking */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="IVATI Pure Water Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 sm:opacity-40 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Subtle radial & linear gradient overlays for seamless text contrast and smooth blend into content */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
      </div>

      {/* Background Interactive Liquid Glass Caustics Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      />

      {/* Floating Refractive Fluid Glass Blobs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#3CB9FF]/20 rounded-full blur-[120px] animate-liquid-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0077FF]/15 rounded-full blur-[100px] animate-liquid-blob pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 flex flex-col items-center">
        
        {/* Liquid Glass Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full liquid-glass border border-white/80 text-[11px] font-mono tracking-[0.2em] text-[#071A2D] uppercase shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#0077FF] animate-pulse" />
          <span>ORIGIN: SOUTH AFRICA • LIQUID PURITY</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-[#071A2D] tracking-[-0.03em] leading-[1.04] text-balance">
            Pure Water. <br />
            <span className="font-normal italic text-[#071A2D]/90">
              Made for South Africa.
            </span>
          </h1>
        </motion.div>

        {/* Minimal Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#64748B] font-normal max-w-xl mx-auto leading-relaxed"
        >
          An understated expression of purity, community, and modern South African craftsmanship. Ultra-pure water encapsulated in liquid glass aesthetic.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto"
        >
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#071A2D] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#0077FF] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            Order Now
          </button>

          <button
            onClick={onOpenDistributorModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass border border-white/90 text-[#071A2D] text-xs font-semibold tracking-wider uppercase hover:border-[#071A2D] transition-all duration-300 cursor-pointer shadow-sm"
          >
            Become a Distributor
          </button>
        </motion.div>

        {/* Hero Product Bottle Showcase Display */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-8 w-full max-w-md sm:max-w-lg mx-auto"
        >
          <div className="relative rounded-3xl p-3 sm:p-4 liquid-glass border border-white/90 shadow-[0_20px_50px_rgba(7,26,45,0.12)] group hover:shadow-[0_25px_60px_rgba(0,119,255,0.18)] transition-all duration-700">
            {/* Glow backing */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3CB9FF]/20 via-[#0077FF]/20 to-[#3CB9FF]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative overflow-hidden rounded-2xl bg-slate-50/50 aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center">
              <Image
                src="/ivati_luxury_bottle.jpg"
                alt="IVATI Luxury Pure Water Bottle"
                width={800}
                height={500}
                priority
                className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Product Badge Overlay */}
              <div className="absolute bottom-3 left-3 right-3 px-4 py-2.5 rounded-xl liquid-glass border border-white/80 flex items-center justify-between text-left">
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-[#0077FF] uppercase font-bold">
                    PREMIUM BOTTLING
                  </span>
                  <span className="block text-xs font-semibold text-[#071A2D]">
                    IVATI Ultra-Pure Mineral Water
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#071A2D] text-white">
                  500ml & 750ml
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-8 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#64748B] uppercase">
            SCROLL TO EXPLORE
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#0077FF] to-transparent animate-pulse" />
        </motion.div>

      </div>
    </section>
  );
}

