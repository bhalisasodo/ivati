"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenDistributorModal: () => void;
}

export default function Navbar({
  onOpenOrderModal,
  onOpenDistributorModal,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 px-4 sm:px-8"
          : "py-6 px-4 sm:px-8"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-500 rounded-full ${
          scrolled
            ? "liquid-glass py-3 shadow-[0_10px_30px_rgba(7,26,45,0.06)] border border-white/80"
            : "bg-white/40 backdrop-blur-md border border-white/60 py-3.5 shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="group focus:outline-none">
          <Logo variant="primary" size="md" />
        </a>

        {/* Liquid Glass Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#071A2D]">
          <a
            href="#story"
            className="hover:text-[#0077FF] transition-colors duration-200"
          >
            Story
          </a>
          <a
            href="#why"
            className="hover:text-[#0077FF] transition-colors duration-200"
          >
            Philosophy
          </a>
          <a
            href="#products"
            className="hover:text-[#0077FF] transition-colors duration-200"
          >
            Collection
          </a>
          <a
            href="#process"
            className="hover:text-[#0077FF] transition-colors duration-200"
          >
            Process
          </a>
          <a
            href="#distributor"
            className="hover:text-[#0077FF] transition-colors duration-200"
          >
            Distributors
          </a>
          <a
            href="#contact"
            className="hover:text-[#0077FF] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenDistributorModal}
            className="text-xs font-semibold text-[#071A2D] hover:text-[#0077FF] transition-colors px-4 py-2 rounded-full border border-white/80 hover:bg-white/60"
          >
            Distributors
          </button>
          <button
            onClick={onOpenOrderModal}
            className="px-6 py-2.5 rounded-full bg-[#071A2D] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#0077FF] transition-all duration-300 shadow-[0_4px_14px_rgba(7,26,45,0.2)] hover:shadow-[0_6px_20px_rgba(0,119,255,0.3)] active:scale-95 cursor-pointer"
          >
            Order Now
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#071A2D] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Liquid Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 max-w-7xl mx-auto liquid-glass rounded-3xl p-6 space-y-6 shadow-xl border border-white/80"
          >
            <div className="flex flex-col space-y-4 text-sm font-semibold text-[#071A2D] uppercase tracking-wider">
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0077FF]"
              >
                Story
              </a>
              <a
                href="#why"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0077FF]"
              >
                Philosophy
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0077FF]"
              >
                Collection
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0077FF]"
              >
                Process
              </a>
              <a
                href="#distributor"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0077FF]"
              >
                Distributors
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0077FF]"
              >
                Contact
              </a>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-3.5 rounded-full bg-[#071A2D] text-white text-xs font-semibold tracking-wider text-center uppercase"
              >
                Order Now
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDistributorModal();
                }}
                className="w-full py-3.5 rounded-full border border-[#071A2D] text-[#071A2D] text-xs font-semibold text-center uppercase"
              >
                Become a Distributor
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
