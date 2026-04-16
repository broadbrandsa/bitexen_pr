"use client";

import { FadeIn } from "@/components/FadeIn";

const competitors = [
  {
    name: "Luno",
    tag: "The Incumbent",
    position: "Dominant. ~64% of SA crypto users started on Luno. Estimated 6M+ onboarded users.",
    message: "Simplicity and accessibility.",
    approach: "Heavy above-the-line spend (billboards, TV, radio). Education-first content strategy.",
    weakness: "Perceived as entry-level. Limited innovation in fan engagement, community, or Web3.",
  },
  {
    name: "VALR",
    tag: "The Challenger",
    position: "Africa's largest exchange by trade volume. Growing fast among sophisticated traders.",
    message: "Serious trading infrastructure.",
    approach: "3-year kit sponsorship with DHL Stormers. Fan engagement campaigns and crypto reward programmes.",
    weakness: "Still building mainstream brand awareness. Rugby-focused limits reach into younger demographics.",
  },
  {
    name: "Binance",
    tag: "The Global Giant",
    position: "Global brand, strong presence. Sponsored the Africa Cup of Nations.",
    message: "Education and community.",
    approach: "Primarily digital: paid ads, content marketing, influencer partnerships.",
    weakness: "Regulatory uncertainty. Feels global, not local.",
  },
  {
    name: "AltCoinTrader",
    tag: "The Local Player",
    position: "Niche local exchange. Lower marketing spend.",
    message: "Local and trustworthy.",
    approach: "Limited marketing presence.",
    weakness: "Limited scale, limited innovation.",
  },
];

export function Competitors() {
  return (
    <section id="competitors" className="relative py-24 md:py-32 overflow-hidden grain" style={{ background: "var(--bitexen-section)" }}>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">SA Crypto Market</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            Competitor <span className="text-gradient-cyan">Landscape</span>
          </h2>
          <p className="mt-4 font-light max-w-3xl" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
            Before launching Bitexen in South Africa, it&apos;s critical to understand who already owns the conversation and where the gaps are.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {competitors.map((c, i) => (
            <FadeIn key={c.name} delay={100 + i * 100}>
              <div className="card-glow p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-display font-bold text-base tracking-wider uppercase" style={{ color: "#FFFFFF" }}>
                    {c.name}
                  </h3>
                  <span
                    className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(6,214,242,0.1)", color: "var(--bitexen-cyan)", border: "1px solid rgba(6,214,242,0.2)" }}
                  >
                    {c.tag}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-text-secondary)" }}>Position</span>
                    <p className="text-sm font-light mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>{c.position}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-text-secondary)" }}>Core Message</span>
                    <p className="text-sm font-light mt-1 italic" style={{ color: "rgba(255,255,255,0.7)" }}>{c.message}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-text-secondary)" }}>Weakness</span>
                    <p className="text-sm font-light mt-1" style={{ color: "var(--bitexen-gold)" }}>{c.weakness}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Gap callout */}
        <FadeIn delay={500}>
          <div className="card-glow p-8 mt-12 text-center" style={{ borderColor: "rgba(245,158,11,0.3)" }}>
            <h3 className="font-display font-black uppercase tracking-wider text-gradient-gold" style={{ fontSize: "var(--type-h3)" }}>
              The Gap for Bitexen
            </h3>
            <p className="mt-4 font-light leading-relaxed max-w-3xl mx-auto" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
              No exchange in South Africa has combined sports fan engagement, fan tokens, and cultural community building into a cohesive go-to-market. Luno owns simplicity. VALR owns rugby. Binance owns education.{" "}
              <strong style={{ color: "var(--bitexen-gold)" }}>Nobody owns football. Nobody owns fan tokens. Nobody owns the culture.</strong>
            </p>
            <p className="mt-4 font-display font-bold text-lg tracking-wider uppercase" style={{ color: "var(--bitexen-cyan)" }}>
              That&apos;s Bitexen&apos;s lane.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
