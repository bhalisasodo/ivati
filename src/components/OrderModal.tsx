"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: string;
}

export default function OrderModal({
  isOpen,
  onClose,
  selectedProduct,
}: OrderModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(selectedProduct || "500ml Still Water");
  const [quantity, setQuantity] = useState("5 Cases");
  const [address, setAddress] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi IVATI Beverages!%0AOrder Request:%0A- Name: ${name}%0A- Phone: ${phone}%0A- Product: ${product}%0A- Quantity: ${quantity}%0A- Address: ${address || 'N/A'}`;
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
            <h3 className="text-xl font-bold text-[#071A2D]">Order IVATI Water</h3>
            <p className="text-xs text-[#64748B]">
              Direct inquiry dispatched to IVATI logistics desk.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono text-[#071A2D]">
            <div>
              <label className="block text-[#64748B] mb-1 font-semibold uppercase">Your Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Dlamini"
                className="w-full p-3.5 rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:border-[#0077FF]"
              />
            </div>

            <div>
              <label className="block text-[#64748B] mb-1 font-semibold uppercase">Contact Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+27 78 123 4567"
                className="w-full p-3.5 rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:border-[#0077FF]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[#64748B] mb-1 font-semibold uppercase">Product</label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:border-[#0077FF]"
                >
                  <option value="500ml Still Water">500ml Still Water</option>
                  <option value="1.5L Still Reserve">1.5L Still Reserve</option>
                  <option value="5L Home & Office Jug">5L Home & Office Jug</option>
                  <option value="Custom Event Branded Water">Custom Event Water</option>
                </select>
              </div>

              <div>
                <label className="block text-[#64748B] mb-1 font-semibold uppercase">Quantity</label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="5 Cases"
                  className="w-full p-3.5 rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:border-[#0077FF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#64748B] mb-1 font-semibold uppercase">Delivery Address / Suburb</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g. Soweto, Johannesburg"
                className="w-full p-3.5 rounded-xl bg-white/80 border border-white/90 focus:outline-none focus:border-[#0077FF]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#071A2D] text-white font-semibold tracking-wider uppercase hover:bg-[#0077FF] transition-colors shadow-md cursor-pointer"
            >
              Submit Order via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
