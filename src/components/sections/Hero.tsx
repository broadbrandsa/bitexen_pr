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
            South Africa Launch
          </span>
        </div>

        {/* Logos */}
        <div className="flex items-center justify-center gap-5 mt-2 mb-10 hero-animate-2">
          <span className="font-display text-xl font-bold tracking-widest" style={{ color: "var(--bitexen-cyan)" }}>BITEXEN</span>
          <div className="w-px h-6" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span className="text-sm font-semibold tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>BROADBRAND</span>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 hero-animate-3">
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
