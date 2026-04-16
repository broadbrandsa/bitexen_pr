"use client";

import { FadeIn } from "@/components/FadeIn";

export function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden grain" style={{ background: "var(--bitexen-section)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(6,214,242,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-5 mb-8">
            <span className="font-display text-xl font-bold tracking-widest" style={{ color: "var(--bitexen-cyan)" }}>BITEXEN</span>
            <div className="w-px h-6" style={{ background: "rgba(255,255,255,0.15)" }} />
            <span className="text-sm font-semibold tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>BROADBRAND</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="mailto:hello@broadbrand.co.za"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #06D6F2, #3B82F6)",
                color: "#070B14",
              }}
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
