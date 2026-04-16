"use client";

import { FadeIn } from "@/components/FadeIn";

const communicationOpportunities = [
  {
    title: "Opinion Pieces",
    desc: "Opinion pieces that focus the democratisation of assets for South African audiences.",
  },
  {
    title: "LinkedIn Posts",
    desc: "LinkedIn posts from the local leadership team unpacking how Bitexen is creating access to unique investment opportunities using their financial platform.",
  },
  {
    title: "Showcasing Local Expertise",
    desc: "Showcasing the expertise of the staff such as Mark and Matthew locally, to instill trust in local consumers.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 md:py-32 overflow-hidden grain">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">Local Leadership Voices</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            Communication
            <br />
            <span className="text-gradient-cyan">Opportunities</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {communicationOpportunities.map((item, i) => (
            <FadeIn key={item.title} delay={100 + i * 100}>
              <div className="card-glow p-6 h-full">
                <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-3" style={{ color: "var(--bitexen-cyan)" }}>
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
