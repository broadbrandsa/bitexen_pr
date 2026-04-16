"use client";

import { FadeIn } from "@/components/FadeIn";

export function Objective() {
  return (
    <section id="objective" className="relative py-24 md:py-32 overflow-hidden grain" style={{ background: "var(--bitexen-section)" }}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,214,242,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">The Objective</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            Democratising Access to
            <br />
            <span className="text-gradient-cyan">Investment Opportunities</span>
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-6 font-light leading-relaxed max-w-3xl" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
            To formally announce the launch of Bitexen in South Africa, positioning it as a borderless financial platform that enables users to trade in real-world assets while breaking down traditional barriers to entry.
          </p>
        </FadeIn>

        <FadeIn delay={250}>
          <p className="mt-4 font-light leading-relaxed max-w-3xl" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
            The objective is to communicate how Bitexen democratises access to investment opportunities by making previously inaccessible assets available to a broader audience through tokenisation.
          </p>
        </FadeIn>

        <FadeIn delay={350}>
          <div className="card-glow p-8 mt-10" style={{ borderColor: "rgba(245,158,11,0.2)" }}>
            <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-4" style={{ color: "var(--bitexen-gold)" }}>
              Unique Value Proposition
            </h3>
            <p className="font-light leading-relaxed" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
              Central to this is highlighting the platform&apos;s unique value proposition: offering exclusive benefits to token holders, particularly through fan tokens, which create new forms of engagement, ownership, and participation. Ultimately, the launch aims to establish Bitexen as a platform that redefines accessibility in finance — putting what was once out of reach firmly within the grasp of everyday investors.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
