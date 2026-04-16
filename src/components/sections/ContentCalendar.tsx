"use client";

import { FadeIn } from "@/components/FadeIn";

const months = [
  {
    month: "Month 1",
    start: "April 15",
    theme: "Freedom Day (April 27)",
    content: "Media release: SA as a gateway for next-generation financial infrastructure. Bitexen brings established track record in RWA tokenisation.",
    events: "Media meet & greet with key local media and Bitexen leadership team (target 4 meetings by April 24)",
    linkedin: "Mark: Re-share earned media coverage about Bitexen SA launch with insight on trading timeline",
  },
  {
    month: "Month 2",
    start: "May 15",
    theme: "Workers' Day, Africa Month",
    content: "Thought leadership: Banking on the unbanked — low-cost transactions for the African diaspora.",
    events: "Bitexen RSA official launch",
    linkedin: "Mark: Coverage on low-cost transactions and remittance fees across the African diaspora",
  },
  {
    month: "Month 3",
    start: "June 15",
    theme: "Youth Month, Youth Day (June 16)",
    content: "Media release: Here's the opportunity to own a wine farm — Arra combines fine wine, premium land and blockchain technology.",
    events: "Wine farm launch and trading goes live. Wine media drops.",
    linkedin: "Mark: Coverage on upcoming wine farm asset launch",
  },
  {
    month: "Wrap-Up",
    start: "July 15",
    theme: "Initial period ends",
    content: "Media release: Padel isn't just a phase — how to turn your hobby into long-term investment.",
    events: "Padel event (TBC)",
    linkedin: "Matthew: Coverage and excitement around the padel collaboration",
  },
];

export function ContentCalendar() {
  return (
    <section id="calendar" className="relative py-24 md:py-32 overflow-hidden grain">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">Content Strategy</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            Three-Month <span className="text-gradient-cyan">Integrated Calendar</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {months.map((m, i) => (
            <FadeIn key={m.month} delay={100 + i * 100}>
              <div className="card-glow p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-bold text-sm tracking-wider uppercase" style={{ color: "var(--bitexen-cyan)" }}>
                    {m.month}
                  </span>
                  <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full" style={{ background: "rgba(6,214,242,0.08)", color: "var(--bitexen-text-secondary)", border: "1px solid rgba(6,214,242,0.12)" }}>
                    from {m.start}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-gold)" }}>Thematic</span>
                    <p className="text-xs font-light mt-0.5" style={{ color: "var(--bitexen-text-secondary)" }}>{m.theme}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-cyan)" }}>Content</span>
                    <p className="text-xs font-light mt-0.5" style={{ color: "var(--bitexen-text-secondary)" }}>{m.content}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-purple)" }}>Events</span>
                    <p className="text-xs font-light mt-0.5" style={{ color: "var(--bitexen-text-secondary)" }}>{m.events}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-text-secondary)" }}>LinkedIn</span>
                    <p className="text-xs font-light mt-0.5" style={{ color: "var(--bitexen-text-secondary)" }}>{m.linkedin}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Engagement strategy */}
        <FadeIn delay={500}>
          <div className="card-glow p-8 mt-12">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-4" style={{ color: "var(--bitexen-cyan)" }}>
              Engagement Opportunities
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--bitexen-gold)" }}>Media Engagement</h4>
                <p className="text-xs font-light" style={{ color: "var(--bitexen-text-secondary)" }}>Meet and greets with key local media. Showcasing expertise of local leadership to instill trust.</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--bitexen-gold)" }}>Wine Media Drops</h4>
                <p className="text-xs font-light" style={{ color: "var(--bitexen-text-secondary)" }}>Creating enticing media drops to influencers and media across business, trading and wine categories.</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--bitexen-gold)" }}>Padel Event</h4>
                <p className="text-xs font-light" style={{ color: "var(--bitexen-text-secondary)" }}>Pairing padel influencers with financial influencers in a tournament followed by a Bitexen team presentation.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
