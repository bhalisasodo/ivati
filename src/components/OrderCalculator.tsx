"use client";

import React, { useState } from "react";
import { Calculator, MessageCircle, Truck, Sparkles, Check } from "lucide-react";

export default function OrderCalculator() {
  const [productType, setProductType] = useState<"500ml" | "1.5L" | "5L" | "custom">("500ml");
  const [cases, setCases] = useState<number>(5);
  const [purpose, setPurpose] = useState<string>("Spaza / Retail");

  // Pricing calculations
  const productPrices = {
    "500ml": { name: "500ml Case (24 Bottles)", pricePerCase: 110, litersPerCase: 12 },
    "1.5L": { name: "1.5L Pack (6 Bottles)", pricePerCase: 75, litersPerCase: 9 },
    "5L": { name: "5L Jugs (Unit)", pricePerCase: 32, litersPerCase: 5 },
    custom: { name: "Custom Event Branded Water", pricePerCase: 95, litersPerCase: 12 },
  };

  const selectedProduct = productPrices[productType];
  const totalLiters = cases * selectedProduct.litersPerCase;
  
  // Calculate discount for 10+ cases
  const discountPercent = cases >= 20 ? 15 : cases >= 10 ? 10 : 0;
  const rawTotal = cases * selectedProduct.pricePerCase;
  const finalTotal = rawTotal * (1 - discountPercent / 100);

  const whatsappMessage = `Hi IVATI Beverages! I would like to place a bulk order:%0A- Product: ${selectedProduct.name}%0A- Quantity: ${cases} ${productType === '500ml' || productType === '1.5L' ? 'Cases' : 'Units'} (${totalLiters}L total)%0A- Purpose: ${purpose}%0A- Estimated Total: R${finalTotal.toFixed(2)}%0APlease confirm availability and delivery timeframe.`;

  const whatsappUrl = `https://wa.me/27782692166?text=${whatsappMessage}`;

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10 select-none">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#061a33]/95 to-[#040d1b] border border-[#00b4ff]/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,180,255,0.2)] space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0047ab]/20 border border-[#00b4ff]/40 text-[#00b4ff] text-xs font-mono font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Wholesale Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            BULK ORDER CALCULATOR
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm font-light max-w-xl mx-auto">
            Calculate your exact water volume, estimated cost, and bulk savings. Direct 1-click WhatsApp order dispatch included.
          </p>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Step 1: Product Selection */}
          <div className="space-y-3">
            <label className="block text-xs font-mono text-[#a3d9ff] uppercase font-bold tracking-wider">
              1. Select Product Size
            </label>
            <div className="space-y-2">
              {(
                [
                  { id: "500ml", label: "500ml Bottles (Case of 24)" },
                  { id: "1.5L", label: "1.5L Bottles (Pack of 6)" },
                  { id: "5L", label: "5L Dispenser Jugs" },
                  { id: "custom", label: "Custom Event Branding" },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProductType(item.id)}
                  className={`w-full p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                    productType === item.id
                      ? "bg-[#0047ab]/40 border-[#00b4ff] text-white shadow-[0_0_15px_rgba(0,180,255,0.3)]"
                      : "bg-[#061a33] border-[#00b4ff]/20 text-zinc-400 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {productType === item.id && <Check className="w-4 h-4 text-[#00b4ff]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Quantity Slider */}
          <div className="space-y-4">
            <label className="block text-xs font-mono text-[#a3d9ff] uppercase font-bold tracking-wider">
              2. Number of Cases / Units ({cases})
            </label>
            
            <input
              type="range"
              min={1}
              max={100}
              value={cases}
              onChange={(e) => setCases(parseInt(e.target.value))}
              className="w-full h-2 bg-[#061a33] rounded-lg appearance-none cursor-pointer accent-[#00b4ff]"
            />

            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>1 Case</span>
              <span>50 Cases</span>
              <span>100 Cases</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#061a33] border border-[#00b4ff]/30 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-zinc-300">
                <span>Total Water Volume:</span>
                <span className="text-[#00b4ff] font-bold">{totalLiters} Liters</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Bulk Tier Discount:</span>
                <span className="text-[#a3d9ff] font-bold">
                  {discountPercent > 0 ? `${discountPercent}% OFF` : "Standard Wholesale"}
                </span>
              </div>
            </div>
          </div>

          {/* Step 3: Purpose / Industry */}
          <div className="space-y-3">
            <label className="block text-xs font-mono text-[#a3d9ff] uppercase font-bold tracking-wider">
              3. Purpose / Sector
            </label>
            <div className="space-y-2">
              {[
                "Spaza / Retail Store",
                "Taxi Rank / Commuter Spot",
                "Wedding / Funeral / Event",
                "Gym / Sports Club",
                "Household / Office Use",
              ].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPurpose(p)}
                  className={`w-full p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                    purpose === p
                      ? "bg-[#0047ab]/40 border-[#00b4ff] text-white"
                      : "bg-[#061a33] border-[#00b4ff]/20 text-zinc-400 hover:text-white"
                  }`}
                >
                  <span>{p}</span>
                  {purpose === p && <Check className="w-3.5 h-3.5 text-[#00b4ff]" />}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Calculation Summary Footer */}
        <div className="pt-6 border-t border-[#00b4ff]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-zinc-400 block">ESTIMATED ORDER TOTAL:</span>
            <div className="text-3xl font-black text-white font-mono">
              R{finalTotal.toFixed(2)}{" "}
              {discountPercent > 0 && (
                <span className="text-xs text-[#00b4ff] font-normal line-through ml-2">
                  R{rawTotal.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-zinc-400 font-mono">Includes priority local eKasi packaging</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#0047ab] to-[#00b4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,180,255,0.4)] hover:brightness-110 hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Send Order via WhatsApp (078 269 2166)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
