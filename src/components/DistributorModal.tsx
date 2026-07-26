"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

interface DistributorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DistributorModal({
  isOpen,
  onClose,
}: DistributorModalProps) {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("Spaza / Independent Retailer");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi IVATI Beverages!%0ADistributor Partnership Application:%0A- Name: ${name}%0A- Business/Company: ${businessName}%0A- Phone: ${phone}%0A- Region/City: ${region}%0A- Business Type: ${type}`;
    window.open(`https://wa.me/27782692166?text=${msg}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A2D]/40 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg liquid-glass rounded-3xl p-8 border border-white/90 shadow-[0_25px_60px_rgba(7,26,45,0.2)] space-y-6"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
            <Logo variant="primary" size="sm" />
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#64748B] hover:text-[#071A2D] hover:bg-white/80 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#071A2D]">Become an IVATI Distributor</h3>
            <p className="text-xs text-[#64748B]">
              Apply for official wholesale distribution rates and partner support.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono text-[#071A2D]">
            <div>
              <label className="block text-[#64748B] mb-1 font-semibold uppercase">Contact Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Thabo Nkosi"
                className="w-full p-3.5 rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:border-[#0077FF]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[#64748B] mb-1 font-semibold uppercase">Business Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Nkosi Enterprise"
                  className="w-full p-3.5 rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:border-[#0077FF]"
                />
              </div>

              <div>
                <label className="block text-[#64748B] mb-1 font-semibold uppercase">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+27 78 123 4567"
                  className="w-full p-3.5 rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:border-[#0077FF]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[#64748B] mb-1 font-semibold uppercase">Province / Region</label>
                <input
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  placeholder="Gauteng / KZN / Cape"
                  className="w-full p-3.5 rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:border-[#0077FF]"
                />
              </div>

              <div>
                <label className="block text-[#64748B] mb-1 font-semibold uppercase">Business Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:border-[#0077FF]"
                >
                  <option value="Spaza / Independent Retailer">Spaza / Retailer</option>
                  <option value="Taxi Rank Distributor">Taxi Rank Distributor</option>
                  <option value="Wholesale Distributor">Wholesale Distributor</option>
                  <option value="Event Caterer / Hospitality">Event / Hospitality</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#0077FF] text-white font-semibold tracking-wider uppercase hover:bg-[#071A2D] transition-colors shadow-md cursor-pointer"
            >
              Submit Distributor Application
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
