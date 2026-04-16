"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--bitexen-section)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(6,214,242,0.04) 0%, transparent 70%)" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(6,214,242,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(6,214,242,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-6 md:gap-8">
            <Image
              src="/images/bitexen-logo.png"
              alt="Bitexen South Africa"
              width={140}
              height={32}
              className="h-7 md:h-8 w-auto object-contain"
            />
            <div className="w-px h-8" style={{ background: "rgba(6,214,242,0.2)" }} />
            <Image
              src="/images/WhatsApp Image 2026-04-16 at 13.09.16.jpeg"
              alt="ByDesign"
              width={140}
              height={32}
              className="h-6 md:h-7 w-auto object-contain"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
