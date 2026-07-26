import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071A2D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "IVATI — Pure Water. Made for South Africa.",
  description:
    "IVATI is a modern South African water company delivering ultra-pure, crystal-clear drinking water crafted with elegance, simplicity, and community pride.",
  keywords: [
    "IVATI",
    "IVATI Water",
    "South African Water Brand",
    "Pure Water",
    "Luxury Bottled Water",
    "VOSS South Africa",
    "eKasi Water",
    "Distributor Water South Africa",
  ],
  authors: [{ name: "IVATI Beverages" }],
  openGraph: {
    title: "IVATI — Pure Water. Made for South Africa.",
    description:
      "IVATI is a modern South African water brand representing purity, community, modern Africa, and timeless quality.",
    url: "https://ivati.co.za",
    siteName: "IVATI",
    images: [
      {
        url: "https://ivati.co.za/ivati_bottle_trio.jpg",
        width: 1200,
        height: 630,
        alt: "IVATI Pure Water Luxury Collection",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVATI — Pure Water. Made for South Africa.",
    description:
      "IVATI is a modern South African water brand representing purity, community, and luxury through restraint.",
    images: ["https://ivati.co.za/ivati_bottle_trio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Brand & Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IVATI",
    alternateName: "IVATI Water",
    url: "https://ivati.co.za",
    logo: "https://ivati.co.za/ivati_luxury_bottle.jpg",
    description:
      "IVATI delivers ultra-pure drinking water to South African communities, embodying purity, trust, and luxury design.",
    telephone: "+27782692166",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
      addressRegion: "Gauteng",
    },
  };

  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#071A2D] font-sans selection:bg-[#3CB9FF]/20 selection:text-[#071A2D]">
        {children}
      </body>
    </html>
  );
}
