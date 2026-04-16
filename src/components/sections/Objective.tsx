"use client";

import { FadeIn } from "@/components/FadeIn";

export function Objective() {
  return (
    <section id="objective" className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--bitexen-section)" }}>
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(circle at 100% 0%, rgba(6,214,242,0.04) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-0 w-px h-full pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(6,214,242,0.08), transparent 30%, transparent 70%, rgba(6,214,242,0.08))" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: "var(--bitexen-cyan)" }} />
            <span className="section-label">Objective</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="font-light leading-[1.8] tracking-wide" style={{ fontSize: "var(--type-p1)", color: "rgba(241,245,249,0.85)" }}>
            To formally announce the launch of Bitexen in South Africa, positioning it as a borderless financial platform that enables users to trade in real-world assets while breaking down traditional barriers to entry. The objective is to communicate how Bitexen democratises access to investment opportunities by making previously inaccessible assets available to a broader audience through tokenisation.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="my-8 w-full h-px" style={{ background: "linear-gradient(90deg, rgba(6,214,242,0.15), rgba(139,92,246,0.1), transparent)" }} />
        </FadeIn>

        <FadeIn delay={300}>
          <p className="font-light leading-[1.8] tracking-wide" style={{ fontSize: "var(--type-p1)", color: "rgba(241,245,249,0.85)" }}>
            Central to this is highlighting the platform&apos;s unique value proposition: offering exclusive benefits to token holders, particularly through fan tokens, which create new forms of engagement, ownership, and participation. Ultimately, the launch aims to establish Bitexen as a platform that redefines accessibility in finance, putting what was once out of reach firmly within the grasp of everyday investors.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
