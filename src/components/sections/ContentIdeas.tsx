"use client";

import { FadeIn } from "@/components/FadeIn";

const contentIdeas = [
  {
    title: "Here\u2019s the opportunity to own a wine farm",
    desc: "Arra combines fine wine, premium land and lifestyle access with blockchain technology. AVT creates a bridge between heritage and innovation.",
    tag: "Wine & RWA",
  },
  {
    title: "The power of direct foreign investment",
    desc: "As South Africa intensifies its push to attract direct foreign investment, Bitexen brings established track record in real-world asset tokenisation.",
    tag: "Investment",
  },
  {
    title: "Banking on the unbanked",
    desc: "Low-cost transactions for the African diaspora. Thought leadership on remittance fees and financial inclusion across the continent.",
    tag: "Financial Inclusion",
  },
  {
    title: "Padel isn\u2019t just a phase",
    desc: "How to turn your hobby into long-term investment. Connecting lifestyle interests with tokenised asset opportunities.",
    tag: "Lifestyle",
  },
];

const engagementOpportunities = [
  {
    title: "Media Meet & Greets",
    desc: "Media engagement with key local media and Bitexen leadership team. Targeting 4 meetings by April 24.",
    icon: "📰",
  },
  {
    title: "Wine Media Drops",
    desc: "As the wine farm goes live, creating an enticing media drop to key influencers and media from the business, trading and wine categories across earned and social media.",
    icon: "🍷",
  },
  {
    title: "Padel Event",
    desc: "Host a padel event pairing padel influencers with financial influencers in an early evening tournament followed by a presentation from the Bitexen team.",
    icon: "🏓",
  },
];

export function ContentIdeas() {
  return (
    <section id="content" className="relative py-24 md:py-32 overflow-hidden grain" style={{ background: "var(--bitexen-section)" }}>
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">Content Strategy</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            Content <span className="text-gradient-cyan">Ideas</span>
          </h2>
          <p className="mt-4 font-light max-w-3xl" style={{ fontSize: "var(--type-p1)", color: "var(--bitexen-text-secondary)" }}>
            Once Bitexen has been introduced, these are the key content pillars to drive awareness and engagement.
          </p>
        </FadeIn>

        {/* Content ideas grid */}
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {contentIdeas.map((idea, i) => (
            <FadeIn key={idea.title} delay={100 + i * 100}>
              <div className="card-glow p-6 h-full">
                <span
                  className="inline-flex text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full mb-4"
                  style={{ background: "rgba(245,158,11,0.1)", color: "var(--bitexen-gold)", border: "1px solid rgba(245,158,11,0.2)" }}
                >
                  {idea.tag}
                </span>
                <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-3" style={{ color: "#FFFFFF" }}>
                  {idea.title}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>
                  {idea.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Engagement opportunities */}
        <FadeIn delay={400}>
          <h3 className="font-display font-bold text-sm tracking-wider uppercase mt-16 mb-6" style={{ color: "var(--bitexen-cyan)" }}>
            Engagement Opportunities
          </h3>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-4">
          {engagementOpportunities.map((e, i) => (
            <FadeIn key={e.title} delay={450 + i * 100}>
              <div className="card-glow p-6 h-full">
                <span className="text-2xl">{e.icon}</span>
                <h4 className="font-display font-bold text-xs tracking-wider uppercase mt-4 mb-3" style={{ color: "var(--bitexen-cyan)" }}>
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
