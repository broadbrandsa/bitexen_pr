"use client";

import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,214,242,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="hero-animate-1">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8"
            style={{
              background: "rgba(6,214,242,0.06)",
              border: "1px solid rgba(6,214,242,0.15)",
              color: "var(--bitexen-cyan)",
            }}
          >
            South Africa Launch · 2026
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display font-black uppercase leading-none tracking-wider hero-animate-2" style={{ fontSize: "var(--type-h1)", lineHeight: 0.95 }}>
          <span style={{ color: "#FFFFFF" }}>Owning the RWA</span>
          <br />
          <span className="text-gradient-cyan">Tokenisation Narrative</span>
          <br />
          <span style={{ color: "rgba(255,255,255,0.4)" }}>in South Africa</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-base md:text-lg font-light leading-relaxed hero-animate-3" style={{ color: "var(--bitexen-text-secondary)", maxWidth: "42ch", margin: "1.5rem auto 0" }}>
          A strategic proposal to launch Bitexen as a borderless financial platform,
          democratising access to real-world asset tokenisation.
        </p>

        {/* Logos */}
        <div className="flex items-center justify-center gap-5 mt-10 hero-animate-4">
          <span className="font-display text-xl font-bold tracking-widest" style={{ color: "var(--bitexen-cyan)" }}>BITEXEN</span>
          <div className="w-px h-6" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span className="text-sm font-semibold tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>BROADBRAND</span>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 hero-animate-5">
          <FadeIn>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>Scroll to explore</span>
              <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(6,214,242,0.3), transparent)" }} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
