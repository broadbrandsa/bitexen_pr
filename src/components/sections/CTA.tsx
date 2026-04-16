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
          <h2 className="font-display font-black uppercase tracking-wider" style={{ fontSize: "var(--type-h2)" }}>
            Let&apos;s <span className="text-gradient-cyan">Build This Together</span>
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-6 font-light leading-relaxed max-w-2xl mx-auto" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
            Bitexen has the platform, the fan token infrastructure, and the proven Turkish playbook. Broadbrand has the SA market knowledge, the media relationships, the creative muscle, and the technology stack to execute.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-6 font-display font-bold text-lg md:text-xl tracking-wider uppercase" style={{ color: "var(--bitexen-gold)" }}>
            The opportunity is clear. The timing is right.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
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
            <a
              href="#opportunity"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-full transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(6,214,242,0.2)",
                color: "var(--bitexen-cyan)",
              }}
            >
              Review Proposal
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <p className="mt-12 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Broadbrand / Digital Solutions Group · Confidential · 2026
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
