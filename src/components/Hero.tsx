"use client";

import React, { useEffect, useRef } from "react";
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
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Refractive liquid light orbs
    const drops = Array.from({ length: 18 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 140 + 80,
      alpha: Math.random() * 0.18 + 0.05,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const render = () => {
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
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-24 px-6 lg:px-12 bg-white overflow-hidden select-none">
      {/* Background Interactive Liquid Glass Caustics Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      />

      {/* Floating Refractive Fluid Glass Blobs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#3CB9FF]/20 rounded-full blur-[120px] animate-liquid-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0077FF]/15 rounded-full blur-[100px] animate-liquid-blob pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        
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
          className="space-y-4"
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

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-12 flex flex-col items-center gap-2"
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
