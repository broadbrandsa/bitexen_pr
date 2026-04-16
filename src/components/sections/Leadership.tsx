"use client";

import { FadeIn } from "@/components/FadeIn";

const communicationOpportunities = [
  {
    title: "Opinion Pieces",
    desc: "Opinion pieces that focus the democratisation of assets for South African audiences.",
    number: "01",
  },
  {
    title: "LinkedIn Posts",
    desc: "LinkedIn posts from the local leadership team unpacking how Bitexen is creating access to unique investment opportunities using their financial platform.",
    number: "02",
  },
  {
    title: "Showcasing Local Expertise",
    desc: "Showcasing the expertise of the staff such as Mark and Matthew locally, to instill trust in local consumers.",
    number: "03",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle side accent */}
      <div className="absolute top-0 right-0 w-px h-full pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(6,214,242,0.06), transparent 80%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--bitexen-cyan)" }} />
            <span className="section-label">Local Leadership Voices</span>
          </div>
          <h2 className="font-display font-black uppercase tracking-wider" style={{ fontSize: "var(--type-h2)", color: "#FFFFFF" }}>
            Communication <span className="text-gradient-cyan">Opportunities</span>
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {communicationOpportunities.map((item, i) => (
            <FadeIn key={item.title} delay={100 + i * 120}>
              <div className="group relative card-glow p-6 md:p-8 flex gap-6 items-start">
                {/* Number accent */}
                <span className="font-display font-black text-3xl md:text-4xl leading-none flex-shrink-0 transition-colors duration-300" style={{ color: "rgba(6,214,242,0.12)" }}>
                  {item.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-2" style={{ color: "var(--bitexen-cyan)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
