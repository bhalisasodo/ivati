import React from "react";

interface LogoProps {
  variant?: "primary" | "symbol" | "monochrome" | "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showWordmark?: boolean;
}

export default function Logo({
  variant = "primary",
  size = "md",
  className = "",
  showWordmark = true,
}: LogoProps) {
  // Dimensions
  const sizes = {
    sm: { symbol: 24, text: "text-lg", gap: "gap-2" },
    md: { symbol: 32, text: "text-xl", gap: "gap-2.5" },
    lg: { symbol: 44, text: "text-2xl", gap: "gap-3" },
    xl: { symbol: 56, text: "text-3xl", gap: "gap-4" },
  };

  const currentSize = sizes[size];

  // Color variants
  const isLight = variant === "light";

  const strokeColor = isLight ? "#FFFFFF" : "#071A2D";
  const waveColor = isLight ? "#3CB9FF" : "#0077FF";
  const textColor = isLight ? "text-white" : "text-[#071A2D]";

  return (
    <div className={`inline-flex items-center ${currentSize.gap} ${className}`}>
      {/* Redesigned Minimalist Water Droplet Symbol */}
      <svg
        width={currentSize.symbol}
        height={currentSize.symbol * 1.25}
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {/* Outer Minimalist Water Droplet Path */}
        <path
          d="M20 3.5C20 3.5 35 24 35 34C35 42.2843 28.2843 49 20 49C11.7157 49 5 42.2843 5 34C5 24 20 3.5 20 3.5Z"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Single Flowing Wave Line (Suggesting Water Ripple + SA Landscape Curve) */}
        <path
          d="M9.5 35.5C14.5 31.5 20 38.5 25.5 34.5C28.5 32.3 31 33.5 33 34"
          stroke={waveColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Sleek Minimalist Wordmark "IVATI" */}
      {showWordmark && variant !== "symbol" && (
        <span
          className={`font-sans font-bold tracking-[0.18em] uppercase ${currentSize.text} ${textColor}`}
        >
          IVATI
        </span>
      )}
    </div>
  );
}
