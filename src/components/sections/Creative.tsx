"use client";

import { FadeIn } from "@/components/FadeIn";

const executions = [
  { title: "Hero Film: \"The Promotion\"", desc: "A mockumentary-style 60s film following a die-hard fan through his matchday ritual — ending with him casting a vote on the club's community project via Bitexen. \"Season ticket holder since 1994. Club decision-maker since today.\"" },
  { title: "OOH / DOOH: \"Starting XI + 1\"", desc: "Stadium billboards and taxi-route screens showing a club's starting lineup with a 12th position: \"You.\" Real fan names rotate once the campaign is live." },
  { title: "Radio: \"The Call-Up\"", desc: "A radio spot styled as a manager's press conference: \"We've made a signing. 50,000 new decision-makers. The 12th Man just got promoted.\"" },
  { title: "Social: #Promoted", desc: "Fans create their own 12th Man player card — upload a selfie, enter supporter stats, generate a matchday card. Shareable across social. Tradeable as NFTs." },
  { title: "Match-Day Broadcast Takeover", desc: "Replace one slot on the on-screen team lineup graphic with \"The 12th Man: [X,000] Bitexen token holders.\" First time ever done in SA football." },
  { title: "AR + Print: \"Come Alive\"", desc: "Every printed touchpoint doubles as an AR trigger. Physical fan cards animate on scan, print ads reveal formations, stadium posters unlock exclusive token drops." },
];

const campaignPhases = [
  { phase: "Phase A: Hype", duration: "4 weeks pre-launch", desc: "Teaser OOH and social: \"Something is changing in SA football.\" Cryptic \"11 + ?\" graphics. #Promoted card generator as early access tool. Build waitlist." },
  { phase: "Phase B: Launch", duration: "Match Day", desc: "Hero film drops. Broadcast takeover. First governance vote. Stadium activations with physical fan cards and QR airdrops. Radio spots begin." },
  { phase: "Phase C: Sustain", duration: "Ongoing", desc: "Monthly governance votes. New fan card drops. Leaderboard rewards. Expand to additional PSL clubs. Content series following real fan decision-makers." },
];

export function Creative() {
  return (
    <section id="creative" className="relative py-24 md:py-32 overflow-hidden grain" style={{ background: "var(--bitexen-section)" }}>
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">Creative Concept</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            <span className="text-gradient-gold">&ldquo;The 12th Man&rdquo;</span>
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="card-glow p-8 mt-8" style={{ borderColor: "rgba(245,158,11,0.2)" }}>
            <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-3" style={{ color: "var(--bitexen-gold)" }}>The Insight</h3>
            <p className="font-light leading-relaxed" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
              In football, the &ldquo;12th man&rdquo; is the crowd — fans who change the outcome through sheer force of will. But that influence has always been metaphorical. Fan tokens make it literal. You vote. You decide. You&apos;re on the team sheet.
            </p>
            <p className="mt-4 font-display font-black text-xl md:text-2xl tracking-wider uppercase" style={{ color: "#FFFFFF" }}>
              The 12th Man just got promoted.
            </p>
          </div>
        </FadeIn>

        {/* Executions */}
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {executions.map((e, i) => (
            <FadeIn key={e.title} delay={200 + i * 80}>
              <div className="card-glow p-6 h-full">
                <h4 className="font-display font-bold text-xs tracking-wider uppercase mb-3" style={{ color: "var(--bitexen-cyan)" }}>
                  {e.title}
                </h4>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>
                  {e.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Campaign Phases */}
        <FadeIn delay={500}>
          <h3 className="font-display font-bold text-sm tracking-wider uppercase mt-16 mb-6" style={{ color: "var(--bitexen-cyan)" }}>
            Campaign Phases
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {campaignPhases.map((p) => (
              <div key={p.phase} className="card-glow p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-display font-bold text-xs tracking-wider uppercase" style={{ color: "var(--bitexen-gold)" }}>{p.phase}</h4>
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-text-secondary)" }}>{p.duration}</span>
                <p className="text-sm font-light leading-relaxed mt-3" style={{ color: "var(--bitexen-text-secondary)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Why This Wins */}
        <FadeIn delay={600}>
          <div className="card-glow p-8 mt-12">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-6" style={{ color: "var(--bitexen-cyan)" }}>
              Why This Concept Wins
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Universal but Local", desc: "\"12th Man\" is universal. The SA execution — the taxi, the rituals, the township roots — makes it unmistakably South African." },
                { title: "Participatory", desc: "Every activation drives a real action: download, create a card, cast a vote, collect a token." },
                { title: "Avoids Crypto Cliches", desc: "No rockets, no moons. It's about football. The blockchain is invisible. The fan experience is everything." },
                { title: "Measurable", desc: "Every fan card = an app download. Every vote = an engaged holder. Every trade = platform activity." },
              ].map((w) => (
                <div key={w.title} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--bitexen-cyan)" }} />
                  <div>
                    <span className="text-xs font-bold" style={{ color: "#FFFFFF" }}>{w.title}:</span>
                    <span className="text-xs font-light ml-1" style={{ color: "var(--bitexen-text-secondary)" }}>{w.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
