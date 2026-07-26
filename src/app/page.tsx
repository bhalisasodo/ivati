"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyIVATI from "@/components/WhyIVATI";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Distributor from "@/components/Distributor";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import DistributorModal from "@/components/DistributorModal";

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isDistributorModalOpen, setIsDistributorModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(
    undefined
  );

  const handleOpenOrderModal = (productName?: string) => {
    setSelectedProduct(productName);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#071A2D] selection:bg-[#3CB9FF]/20 selection:text-[#071A2D]">
      {/* Sticky Luxury Navbar */}
      <Navbar
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero
          onOpenOrderModal={() => handleOpenOrderModal()}
          onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
        />
        <About />
        <WhyIVATI />
        <Products onOpenOrderModal={(p) => handleOpenOrderModal(p)} />
        <Process />
        <Distributor
          onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
        />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedProduct={selectedProduct}
      />
      <DistributorModal
        isOpen={isDistributorModalOpen}
        onClose={() => setIsDistributorModalOpen(false)}
      />
    </div>
  );
}
