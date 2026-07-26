"use client";

import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#071A2D] text-white py-16 px-6 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 border-b border-white/10 pb-12">
          {/* Logo & Manifesto */}
          <div className="space-y-4 max-w-sm">
            <Logo variant="light" size="lg" />
            <p className="text-xs text-[#E2E8F0]/70 font-light leading-relaxed">
              Purity, community, and modern South African craftsmanship. Quiet luxury in every drop.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-xs font-mono">
            <div className="space-y-3">
              <span className="text-[#3CB9FF] uppercase tracking-wider block font-semibold">EXPLORE</span>
              <ul className="space-y-2 text-[#E2E8F0]/80">
                <li><a href="#story" className="hover:text-[#3CB9FF] transition-colors">Story</a></li>
                <li><a href="#why" className="hover:text-[#3CB9FF] transition-colors">Philosophy</a></li>
                <li><a href="#products" className="hover:text-[#3CB9FF] transition-colors">Collection</a></li>
                <li><a href="#process" className="hover:text-[#3CB9FF] transition-colors">Process</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[#3CB9FF] uppercase tracking-wider block font-semibold">PARTNERS</span>
              <ul className="space-y-2 text-[#E2E8F0]/80">
                <li><a href="#distributor" className="hover:text-[#3CB9FF] transition-colors">Distributors</a></li>
                <li><a href="#contact" className="hover:text-[#3CB9FF] transition-colors">Wholesale Desk</a></li>
                <li><a href="#contact" className="hover:text-[#3CB9FF] transition-colors">Custom Events</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[#3CB9FF] uppercase tracking-wider block font-semibold">CONNECT</span>
              <ul className="space-y-2 text-[#E2E8F0]/80">
                <li><a href="https://wa.me/27782692166" target="_blank" rel="noopener noreferrer" className="hover:text-[#3CB9FF] transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-[#3CB9FF] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#3CB9FF] transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E2E8F0]/60">
          <p>© {new Date().getFullYear()} IVATI Beverages (Pty) Ltd. All rights reserved.</p>
          <p className="text-[10px] tracking-wider uppercase">
            Crafted for South Africa • Ultra-Purified Water
          </p>
        </div>

      </div>
    </footer>
  );
}
