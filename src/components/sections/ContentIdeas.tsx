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
    <section id="content" className="relative py-24 md:py-32 overflow-hidden grain" style={{ background: "var(--bitexen-section)" }}>
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">Content Ideas</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            Once Bitexen Has Been <span className="text-gradient-cyan">Introduced</span>
          </h2>
        </FadeIn>

        {/* Content ideas list */}
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {contentIdeas.map((idea, i) => (
            <FadeIn key={idea} delay={100 + i * 100}>
              <div className="card-glow p-6 h-full flex items-start gap-4">
                <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--bitexen-cyan)" }} />
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text)" }}>
                  {idea}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Engagement opportunities */}
        <FadeIn delay={400}>
          <span className="section-label mt-16 block">Engagement Opportunities</span>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {engagementOpportunities.map((e, i) => (
            <FadeIn key={e.title} delay={450 + i * 100}>
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
      </div>
    </section>
  );
}
