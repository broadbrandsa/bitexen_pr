"use client";

import { FadeIn } from "@/components/FadeIn";

const stats = [
  { value: "2M+", label: "Users in Turkey" },
  { value: "7.6M", label: "SA Crypto Holders" },
  { value: "22%", label: "Adult Population" },
  { value: "16", label: "Fan Token Partnerships" },
];

export function Opportunity() {
  return (
    <section id="opportunity" className="relative py-24 md:py-32 overflow-hidden grain" style={{ background: "var(--bitexen-section)" }}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,214,242,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">The Opportunity</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            Beyond &ldquo;Buy Bitcoin&rdquo;
            <br />
            <span className="text-gradient-cyan">A New Category to Own</span>
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-6 font-light leading-relaxed max-w-3xl" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
            Bitexen, Turkey&apos;s leading crypto exchange with 2M+ users, is ready to enter South Africa — one of Africa&apos;s most crypto-active markets with 7.6 million crypto holders (22% of the adult population). The objective is to communicate how Bitexen democratises access to investment opportunities by making previously inaccessible assets available through tokenisation.
          </p>
        </FadeIn>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={200 + i * 100}>
              <div className="card-glow p-6 text-center">
                <span className="font-display font-black text-gradient-cyan" style={{ fontSize: "var(--type-stat)" }}>
                  {stat.value}
                </span>
                <p className="mt-2 text-xs font-semibold tracking-wider uppercase" style={{ color: "var(--bitexen-text-secondary)" }}>
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Content ideas */}
        <FadeIn delay={400}>
          <div className="card-glow p-8 mt-12">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-4" style={{ color: "var(--bitexen-cyan)" }}>
              Launch Communication Angles
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Here's the opportunity to own a wine farm",
                "The power of direct foreign investment",
                "Banking on the unbanked — low cost transactions for the African diaspora",
                "Padel isn't just a phase — how to turn your hobby into long-term investment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--bitexen-cyan)" }} />
                  <p className="text-sm font-light" style={{ color: "var(--bitexen-text-secondary)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
