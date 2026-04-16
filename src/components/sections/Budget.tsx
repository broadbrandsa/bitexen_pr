"use client";

import { FadeIn } from "@/components/FadeIn";

const budgetSummary = [
  { line: "Digital Media (Working)", amount: "R1,575,000" },
  { line: "Traditional Media (Working)", amount: "R1,260,000" },
  { line: "Media Contingency", amount: "R315,000" },
  { line: "Production (Non-Working)", amount: "R1,350,000" },
];

const digitalChannels = [
  { channel: "Paid Social (Meta, TikTok, X)", pct: "18%", amount: "R567,000" },
  { channel: "Programmatic Display & Video", pct: "10%", amount: "R315,000" },
  { channel: "Google Search & YouTube", pct: "8%", amount: "R252,000" },
  { channel: "Influencer & Creator", pct: "6%", amount: "R189,000" },
  { channel: "Content & SEO", pct: "4%", amount: "R126,000" },
  { channel: "Performance / App Install", pct: "4%", amount: "R126,000" },
];

const traditionalChannels = [
  { channel: "DStv / TV (SuperSport, SABC)", pct: "15%", amount: "R472,500" },
  { channel: "OOH / DOOH", pct: "10%", amount: "R315,000" },
  { channel: "Radio (Primedia, Mediamark)", pct: "7%", amount: "R220,500" },
  { channel: "Print & Digital News", pct: "4%", amount: "R126,000" },
  { channel: "Match-Day Activations", pct: "4%", amount: "R126,000" },
];

const production = [
  { category: "Video Production", amount: "R530,000" },
  { category: "Digital Creative Assets", amount: "R380,000" },
  { category: "AR + Print", amount: "R210,000" },
  { category: "Other Production", amount: "R230,000" },
];

export function Budget() {
  return (
    <section id="budget" className="relative py-24 md:py-32 overflow-hidden grain">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">Investment Overview</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            Proposed <span className="text-gradient-cyan">Budget & Media Plan</span>
          </h2>
        </FadeIn>

        {/* Total budget */}
        <FadeIn delay={100}>
          <div className="card-glow p-8 mt-10 text-center" style={{ borderColor: "rgba(245,158,11,0.3)" }}>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--bitexen-text-secondary)" }}>Total Budget</span>
            <p className="font-display font-black text-gradient-gold mt-2" style={{ fontSize: "var(--type-stat)" }}>R4,500,000</p>
            <div className="flex items-center justify-center gap-8 mt-4">
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-text-secondary)" }}>Working Media</span>
                <p className="font-display font-bold text-lg" style={{ color: "var(--bitexen-cyan)" }}>70% — R3,150,000</p>
              </div>
              <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.1)" }} />
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-text-secondary)" }}>Production</span>
                <p className="font-display font-bold text-lg" style={{ color: "var(--bitexen-purple)" }}>30% — R1,350,000</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Budget summary table */}
        <FadeIn delay={200}>
          <div className="card-glow p-6 mt-8">
            <h3 className="font-display font-bold text-xs tracking-wider uppercase mb-4" style={{ color: "var(--bitexen-cyan)" }}>Budget Summary</h3>
            <div className="space-y-2">
              {budgetSummary.map((b) => (
                <div key={b.line} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(6,214,242,0.06)" }}>
                  <span className="text-sm font-light" style={{ color: "var(--bitexen-text-secondary)" }}>{b.line}</span>
                  <span className="font-display font-bold text-sm" style={{ color: "#FFFFFF" }}>{b.amount}</span>
                </div>
              ))}
              <div className="flex items-center justify-between py-3 mt-2" style={{ borderTop: "1px solid rgba(6,214,242,0.15)" }}>
                <span className="text-sm font-bold" style={{ color: "#FFFFFF" }}>Total</span>
                <span className="font-display font-black text-base text-gradient-gold">R4,500,000</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Channel breakdown */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <FadeIn delay={300}>
            <div className="card-glow p-6 h-full">
              <h3 className="font-display font-bold text-xs tracking-wider uppercase mb-4" style={{ color: "var(--bitexen-cyan)" }}>Digital Channels — R1,575,000</h3>
              <div className="space-y-2">
                {digitalChannels.map((c) => (
                  <div key={c.channel} className="flex items-center justify-between py-1.5" style={{ borderBottom: "1px solid rgba(6,214,242,0.04)" }}>
                    <span className="text-xs font-light" style={{ color: "var(--bitexen-text-secondary)" }}>{c.channel}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold" style={{ color: "var(--bitexen-cyan)" }}>{c.pct}</span>
                      <span className="text-xs font-bold" style={{ color: "#FFFFFF" }}>{c.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="card-glow p-6 h-full">
              <h3 className="font-display font-bold text-xs tracking-wider uppercase mb-4" style={{ color: "var(--bitexen-cyan)" }}>Traditional Channels — R1,260,000</h3>
              <div className="space-y-2">
                {traditionalChannels.map((c) => (
                  <div key={c.channel} className="flex items-center justify-between py-1.5" style={{ borderBottom: "1px solid rgba(6,214,242,0.04)" }}>
                    <span className="text-xs font-light" style={{ color: "var(--bitexen-text-secondary)" }}>{c.channel}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold" style={{ color: "var(--bitexen-cyan)" }}>{c.pct}</span>
                      <span className="text-xs font-bold" style={{ color: "#FFFFFF" }}>{c.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Production breakdown */}
        <FadeIn delay={500}>
          <div className="card-glow p-6 mt-8">
            <h3 className="font-display font-bold text-xs tracking-wider uppercase mb-4" style={{ color: "var(--bitexen-purple)" }}>Production Breakdown — R1,350,000</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {production.map((p) => (
                <div key={p.category} className="text-center p-4 rounded-xl" style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.12)" }}>
                  <p className="font-display font-bold text-base" style={{ color: "#FFFFFF" }}>{p.amount}</p>
                  <p className="text-[10px] font-bold tracking-wider uppercase mt-1" style={{ color: "var(--bitexen-text-secondary)" }}>{p.category}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
