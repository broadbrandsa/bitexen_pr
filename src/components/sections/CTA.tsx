"use client";

import { FadeIn } from "@/components/FadeIn";

export function CTA() {
  return (
    <section id="cta" className="relative py-16 overflow-hidden grain" style={{ background: "var(--bitexen-section)" }}>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-5">
            <span className="font-display text-xl font-bold tracking-widest" style={{ color: "var(--bitexen-cyan)" }}>BITEXEN</span>
            <div className="w-px h-6" style={{ background: "rgba(255,255,255,0.15)" }} />
            <span className="text-sm font-semibold tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>BROADBRAND</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
