"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Architecture } from "@/components/sections/Architecture";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductModules } from "@/components/sections/ProductModules";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { Coverage } from "@/components/sections/Coverage";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/layout/Footer";
import { ContactSalesModal } from "@/components/interactive/ContactSalesModal";
import { SiteBackdrop } from "@/components/ui/atmosphere";

export default function Home() {
  const [isSalesOpen, setIsSalesOpen] = useState(false);

  return (
    <div className="min-h-screen text-[#050505] relative selection:bg-[#0a0a0a] selection:text-white font-sans">
      <SiteBackdrop />
      <Navbar
        onOpenAuthModal={() => setIsSalesOpen(true)}
        onOpenDemoModal={() => setIsSalesOpen(true)}
      />

      <main id="main-content">
        <section id="product">
          <Hero
            onOpenDemo={() => setIsSalesOpen(true)}
            onOpenSales={() => setIsSalesOpen(true)}
          />
        </section>

        <Architecture />
        <HowItWorks />
        <ProductModules />
        <Coverage />
        <LiveDemo />
        <FinalCta
          onOpenDemo={() => setIsSalesOpen(true)}
          onOpenContact={() => setIsSalesOpen(true)}
        />
      </main>

      <Footer />

      <ContactSalesModal
        isOpen={isSalesOpen}
        onClose={() => setIsSalesOpen(false)}
      />
    </div>
  );
}
