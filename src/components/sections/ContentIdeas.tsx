"use client";

import { FadeIn } from "@/components/FadeIn";

const contentIdeas = [
  "Here\u2019s the opportunity to own a wine farm",
  "The power of direct foreign investment",
  "Banking on the unbanked \u2014 low cost transactions for the African diaspora",
  "Padel isn\u2019t just a phase, how to turn your hobby into long term investment",
];

const engagementOpportunities = [
  {
    title: "Media Engagement",
    desc: "Media meet and greets with key local media.",
  },
  {
    title: "Wine Media Drops",
    desc: "As the wine farm goes live, creating an enticing media drop to key influencers and media from the business, trading and wine categories across earned and social media.",
  },
  {
    title: "Padel Event",
    desc: "Host a padel event where we pair padel influencers with financial influencers in an early evening padel tournament followed by a presentation from the Bitexen team.",
  },
];

export function ContentIdeas() {
  return (
    <section id="content" className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--bitexen-section)" }}>
      {/* Decorative gradient bar at top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(6,214,242,0.1), rgba(139,92,246,0.08), transparent)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Content Ideas */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--bitexen-cyan)" }} />
            <span className="section-label">Content Ideas</span>
          </div>
          <h2 className="font-display font-black uppercase tracking-wider" style={{ fontSize: "var(--type-h2)", color: "#FFFFFF" }}>
            Once Bitexen Has Been <span className="text-gradient-cyan">Introduced</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px mt-12 rounded-2xl overflow-hidden" style={{ background: "rgba(6,214,242,0.08)" }}>
          {contentIdeas.map((idea, i) => (
            <FadeIn key={idea} delay={80 + i * 80}>
              <div className="p-6 md:p-8 h-full flex items-start gap-4 transition-colors duration-300 hover:bg-[rgba(6,214,242,0.03)]" style={{ background: "var(--bitexen-bg)" }}>
                <span className="font-display font-black text-lg flex-shrink-0" style={{ color: "rgba(6,214,242,0.25)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(241,245,249,0.85)" }}>
                  {idea}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Engagement Opportunities */}
        <div className="mt-20">
          <FadeIn delay={300}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "var(--bitexen-cyan)" }} />
              <span className="section-label">Engagement Opportunities</span>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {engagementOpportunities.map((e, i) => (
              <FadeIn key={e.title} delay={350 + i * 100}>
                <div className="card-glow p-6 h-full relative overflow-hidden">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, var(--bitexen-cyan), transparent)" }} />
                  <h4 className="font-display font-bold text-xs tracking-wider uppercase mb-3 mt-2" style={{ color: "var(--bitexen-cyan)" }}>
                    {e.title}
                  </h4>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>
                    {e.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
