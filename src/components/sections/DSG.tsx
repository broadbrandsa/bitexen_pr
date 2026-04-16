"use client";

import { FadeIn } from "@/components/FadeIn";

const capabilities = [
  {
    title: "RWA Tokenisation Partner",
    desc: "DSG is actively seeking a Real World Asset tokenisation partner. Bitexen's blockchain infrastructure makes this a natural fit. Together, we could bring tokenised real-world assets to SA — property, commodities, equities — through a trusted platform.",
    icon: "🔗",
  },
  {
    title: "eInsurer: Exchange Insurance",
    desc: "DSG has developed eInsurer, built with Hollard and iToo. This provides insurance coverage for digital asset exchanges — a critical trust layer. Bitexen could launch with an insurance-backed proposition no competitor offers.",
    icon: "🛡️",
  },
  {
    title: "Digital Mobile: MVNO + Tokenisation",
    desc: "DSG enables MVNOs through Digital Mobile. The intersection of mobile and crypto creates compelling opportunities: tokenised airtime, mobile-first wallet onboarding, and fan token distribution via mobile channels.",
    icon: "📱",
  },
  {
    title: "CXG: Customer Experience",
    desc: "DSG owns CXG, one of SA's most awarded digital CX businesses. CXG could provide local inbound customer support — multilingual, culturally attuned, and built for crypto-first users.",
    icon: "💬",
  },
];

export function DSG() {
  return (
    <section id="dsg" className="relative py-24 md:py-32 overflow-hidden grain" style={{ background: "var(--bitexen-section)" }}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,214,242,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">Beyond the Agency</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            The DSG <span className="text-gradient-cyan">Ecosystem</span>
          </h2>
          <p className="mt-4 font-light max-w-3xl leading-relaxed" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
            Broadbrand is part of the Digital Solutions Group (DSG). The Group brings strategic capabilities that go far beyond media and creative.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {capabilities.map((c, i) => (
            <FadeIn key={c.title} delay={100 + i * 100}>
              <div className="card-glow p-6 h-full">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="font-display font-bold text-sm tracking-wider uppercase mt-4 mb-3" style={{ color: "var(--bitexen-cyan)" }}>
                  {c.title}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>
                  {c.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
