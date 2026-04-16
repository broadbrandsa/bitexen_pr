"use client";

import { FadeIn } from "@/components/FadeIn";

const turkeyTokens = [
  "Antalyaspor", "Adana Demirspor", "Balikesirspor", "Caykur Rizespor",
  "Diyarbekirspor", "Erzurumspor", "Giresunspor", "Hatayspor",
  "Kayserispor", "Sakaryaspor", "Sanliurfaspor", "Sivasspor",
  "Tuzlaspor", "Vanspor", "Yeni Malatyaspor", "Tatilbudur",
];

const audiences = [
  {
    segment: "Football Fans (LSM 4-7)",
    role: "Primary Acquisition",
    why: "Mass reach, cultural alignment, crypto profile match, mobile-first",
    color: "var(--bitexen-cyan)",
  },
  {
    segment: "Aspirational Middle (LSM 6-8)",
    role: "Conversion Sweet Spot",
    why: "Banked, smartphone owners, income to invest, digitally active",
    color: "var(--bitexen-blue)",
  },
  {
    segment: "Rugby/Affluent (LSM 8-10)",
    role: "Secondary/Organic",
    why: "Higher value per user but don't lead with this; let them discover",
    color: "var(--bitexen-purple)",
  },
];

const phases = [
  { phase: "Phase 1", title: "Club Partnership & Token Launch", status: "COMPLETE", items: ["PSL club partnership secured", "Fan token developed on Bitexen platform", "Founding NFT collection created", "Exclusive 'founding fan' drop planned"] },
  { phase: "Phase 2", title: "Fan Activation", status: "ACTIVE", items: ["Token-gated experiences: meet-and-greets, pitch-side access", "Fan governance: vote on kit designs, match-day music", "Gamification: predict outcomes, earn bonus tokens", "Reward loyal fans: merchandise discounts, priority ticketing"] },
  { phase: "Phase 3", title: "Scale & Ecosystem", status: "NEXT", items: ["Expand to additional PSL clubs", "Integrate with stadium experiences (QR-based rewards)", "Build cross-club fan token trading economy", "Leverage success stories for PR and organic growth"] },
];

export function Strategy() {
  return (
    <section id="strategy" className="relative py-24 md:py-32 overflow-hidden grain">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Turkey Playbook */}
        <FadeIn>
          <span className="section-label">The Bitexen Playbook</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            Lessons from <span className="text-gradient-cyan">Turkey</span>
          </h2>
          <p className="mt-4 font-light max-w-3xl leading-relaxed" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
            Bitexen has already proven this model works. In Turkey, Bitexen built its brand through direct partnerships with football clubs — 16 fan token partnerships via ExenPay, kit sponsorships with Super Lig clubs, and fan tokens that give holders governance participation, exclusive access, and merchandise.
          </p>
        </FadeIn>

        {/* Token partnerships ticker */}
        <FadeIn delay={200}>
          <div className="mt-8 overflow-hidden rounded-2xl" style={{ background: "rgba(6,214,242,0.04)", border: "1px solid rgba(6,214,242,0.08)" }}>
            <div className="flex gap-4 py-3 px-4" style={{ animation: "ticker 30s linear infinite" }}>
              {[...turkeyTokens, ...turkeyTokens].map((t, i) => (
                <span key={i} className="text-[10px] font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1 rounded-full" style={{ background: "rgba(6,214,242,0.08)", color: "var(--bitexen-cyan)", border: "1px solid rgba(6,214,242,0.15)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Target audiences */}
        <FadeIn delay={300}>
          <h3 className="font-display font-bold text-sm tracking-wider uppercase mt-16 mb-6" style={{ color: "var(--bitexen-cyan)" }}>
            Target Audience Strategy
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <div key={a.segment} className="card-glow p-6">
                <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full" style={{ background: `${a.color}15`, color: a.color, border: `1px solid ${a.color}30` }}>
                  {a.role}
                </span>
                <h4 className="font-display font-bold text-sm tracking-wider uppercase mt-4 mb-2" style={{ color: "#FFFFFF" }}>
                  {a.segment}
                </h4>
                <p className="text-xs font-light" style={{ color: "var(--bitexen-text-secondary)" }}>{a.why}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Launch phases */}
        <FadeIn delay={400}>
          <h3 className="font-display font-bold text-sm tracking-wider uppercase mt-16 mb-6" style={{ color: "var(--bitexen-cyan)" }}>
            Football Fan Engagement Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {phases.map((p) => (
              <div key={p.phase} className="card-glow p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-display font-bold text-xs tracking-wider uppercase" style={{ color: "var(--bitexen-cyan)" }}>{p.phase}</span>
                  <span
                    className="text-[8px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                    style={{
                      background: p.status === "COMPLETE" ? "rgba(34,197,94,0.1)" : p.status === "ACTIVE" ? "rgba(6,214,242,0.1)" : "rgba(255,255,255,0.05)",
                      color: p.status === "COMPLETE" ? "#22C55E" : p.status === "ACTIVE" ? "var(--bitexen-cyan)" : "var(--bitexen-text-secondary)",
                      border: `1px solid ${p.status === "COMPLETE" ? "rgba(34,197,94,0.2)" : p.status === "ACTIVE" ? "rgba(6,214,242,0.2)" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-3" style={{ color: "#FFFFFF" }}>{p.title}</h4>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--bitexen-cyan)" }} />
                      <span className="text-xs font-light" style={{ color: "var(--bitexen-text-secondary)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
