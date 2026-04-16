"use client";

import { FadeIn } from "@/components/FadeIn";

export function Objective() {
  return (
    <section id="objective" className="relative py-24 md:py-32 overflow-hidden grain" style={{ background: "var(--bitexen-section)" }}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,214,242,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">Objective</span>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-6 font-light leading-relaxed max-w-4xl" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
            To formally announce the launch of Bitexen in South Africa, positioning it as a borderless financial platform that enables users to trade in real-world assets while breaking down traditional barriers to entry. The objective is to communicate how Bitexen democratises access to investment opportunities by making previously inaccessible assets available to a broader audience through tokenisation.
          </p>
        </FadeIn>

        <FadeIn delay={250}>
          <p className="mt-4 font-light leading-relaxed max-w-4xl" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
            Central to this is highlighting the platform&apos;s unique value proposition: offering exclusive benefits to token holders, particularly through fan tokens, which create new forms of engagement, ownership, and participation. Ultimately, the launch aims to establish Bitexen as a platform that redefines accessibility in finance, putting what was once out of reach firmly within the grasp of everyday investors.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
