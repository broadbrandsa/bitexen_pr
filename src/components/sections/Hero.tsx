"use client";

import Image from "next/image";
import { ParallaxImage } from "@/components/ParallaxImage";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <ParallaxImage
        src="/images/mario-klassen-70YxSTWa2Zw-unsplash.jpg"
        alt=""
        priority
        speed={0.3}
        imgStyle={{ opacity: 0.35 }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(to bottom, rgba(7,11,20,0.7) 0%, rgba(7,11,20,0.5) 40%, rgba(7,11,20,0.8) 100%)",
      }} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(6,214,242,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,214,242,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center hero-animate-1">
        {/* Logos side by side */}
        <div className="flex items-center gap-6 md:gap-8">
          <div className="relative h-8 md:h-10 w-auto">
            <Image
              src="/images/bitexen-logo.png"
              alt="Bitexen South Africa"
              width={180}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </div>
          <div className="w-px h-8 md:h-10" style={{ background: "rgba(6,214,242,0.2)" }} />
          <div className="relative h-6 md:h-7 w-auto">
            <Image
              src="/images/broadbrand-white.png"
              alt="Broadbrand"
              width={180}
              height={28}
              className="h-6 md:h-7 w-auto object-contain opacity-60"
              priority
            />
          </div>
          <div className="w-px h-8 md:h-10" style={{ background: "rgba(6,214,242,0.2)" }} />
          <div className="relative h-8 md:h-10 w-auto">
            <Image
              src="/images/WhatsApp Image 2026-04-16 at 13.09.16.jpeg"
              alt="ByDesign"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black uppercase tracking-wider hero-animate-2" style={{ fontSize: "var(--type-h1)", color: "#FFFFFF", lineHeight: 0.95 }}>
          PR Strategy for <span className="text-gradient-cyan">Bitexen</span>
        </h1>

        {/* Thin accent line */}
        <div className="w-16 h-px hero-animate-3" style={{ background: "linear-gradient(90deg, transparent, var(--bitexen-cyan), transparent)" }} />
      </div>
    </section>
  );
}
