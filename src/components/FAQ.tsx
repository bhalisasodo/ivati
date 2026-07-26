"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does the name IVATI mean?",
      a: "IVATI means 'water' in South African township vernacular. The brand was established to honor South African heritage while setting a new standard for pure drinking water.",
    },
    {
      q: "How is IVATI water purified?",
      a: "Our water passes through an advanced multi-stage purification system, including sediment micro-filtration, activated carbon polishing, reverse osmosis (RO), and high-intensity UV sterilization.",
    },
    {
      q: "What sizes are available for order?",
      a: "IVATI is currently available in 500ml individual bottles (Cases of 24), 1.5L hydration packs (Packs of 12), and 5L home/office reserve jugs. We also supply custom-branded bottles for events.",
    },
    {
      q: "How can I become an official IVATI distributor?",
      a: "We welcome partnerships with local entrepreneurs, retail stores, event caterers, and distribution businesses across South Africa. Submit an application through the 'Become a Distributor' form or contact our partner desk via WhatsApp.",
    },
    {
      q: "Does IVATI offer custom labeling for corporate events or weddings?",
      a: "Yes, we produce custom-branded IVATI bottles for private functions, corporate launches, weddings, and institutional events with dedicated design and priority delivery.",
    },
  ];

  return (
    <section className="py-28 px-6 lg:px-12 max-w-4xl mx-auto border-t border-[#E2E8F0] select-none">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs font-mono tracking-[0.25em] text-[#0077FF] uppercase font-semibold">
          07 / FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#071A2D] tracking-tight">
          Clear answers. Simple transparency.
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden transition-colors"
            >
              <button
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-[#071A2D] text-base hover:text-[#0077FF] transition-colors focus:outline-none"
              >
                <span>{faq.q}</span>
                <span className="text-xl font-mono text-[#0077FF]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-sm text-[#64748B] font-normal leading-relaxed border-t border-[#E2E8F0]/60 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  );
}
