"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const whatsappUrl = `https://wa.me/27782692166?text=${encodeURIComponent(
    "Hi IVATI Beverages! I would like to make an inquiry."
  )}`;

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2E8F0] select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column — Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.25em] text-[#0077FF] uppercase font-semibold">
              08 / GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#071A2D] tracking-tight">
              Connect with IVATI.
            </h2>
            <p className="text-sm text-[#64748B] font-normal leading-relaxed">
              We respond promptly to general inquiries, wholesale orders, and distributor partnerships across South Africa.
            </p>
          </div>

          <div className="space-y-6 text-sm font-mono text-[#071A2D]">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <span className="text-[10px] text-[#64748B] uppercase tracking-wider block">WHATSAPP & PHONE</span>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#0077FF] hover:underline block">
                +27 78 269 2166
              </a>
              <span className="text-xs text-[#64748B] block">Mon–Fri: 08:00 – 17:00 SAST</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <span className="text-[10px] text-[#64748B] uppercase tracking-wider block">EMAIL</span>
              <a href="mailto:orders@ivati.co.za" className="text-base font-bold text-[#071A2D] hover:text-[#0077FF] transition-colors block">
                orders@ivati.co.za
              </a>
              <span className="text-xs text-[#64748B] block">General & Distributor Support</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <span className="text-[10px] text-[#64748B] uppercase tracking-wider block">REGIONAL HEADQUARTERS</span>
              <span className="text-sm font-semibold text-[#071A2D] block">Gauteng, South Africa</span>
              <span className="text-xs text-[#64748B] block">Serving Nationwide Retailers & Events</span>
            </div>
          </div>
        </div>

        {/* Right Column — Minimal Direct Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-6">
            <h3 className="text-xl font-bold text-[#071A2D] tracking-tight">
              Send a Direct Message
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsappUrl, "_blank");
              }}
              className="space-y-4 text-xs font-mono"
            >
              <div>
                <label className="block text-[#64748B] mb-2 uppercase tracking-wider font-semibold">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lerato Mokoena"
                  className="w-full p-4 rounded-xl bg-white border border-[#E2E8F0] text-[#071A2D] focus:outline-none focus:border-[#0077FF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#64748B] mb-2 uppercase tracking-wider font-semibold">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+27 78 123 4567"
                    className="w-full p-4 rounded-xl bg-white border border-[#E2E8F0] text-[#071A2D] focus:outline-none focus:border-[#0077FF]"
                  />
                </div>
                <div>
                  <label className="block text-[#64748B] mb-2 uppercase tracking-wider font-semibold">Inquiry Type</label>
                  <select className="w-full p-4 rounded-xl bg-white border border-[#E2E8F0] text-[#071A2D] focus:outline-none focus:border-[#0077FF]">
                    <option>General Order</option>
                    <option>Become a Distributor</option>
                    <option>Event Custom Bottling</option>
                    <option>Hospitality Wholesale</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#64748B] mb-2 uppercase tracking-wider font-semibold">Message / Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements or quantity..."
                  className="w-full p-4 rounded-xl bg-white border border-[#E2E8F0] text-[#071A2D] focus:outline-none focus:border-[#0077FF]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#071A2D] text-white font-semibold uppercase tracking-wider hover:bg-[#0077FF] transition-colors duration-300 shadow-sm cursor-pointer"
              >
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
