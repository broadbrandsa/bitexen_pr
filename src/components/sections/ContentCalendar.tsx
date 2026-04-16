"use client";

import { FadeIn } from "@/components/FadeIn";

const months = [
  {
    month: "Month 1",
    start: "April 15",
    theme: "27 April \u2014 Freedom Day",
    content: "Media release: As South Africa intensifies its push to attract direct foreign investment, its mature and well-regulated financial system is increasingly being recognised as a strategic gateway for next-generation financial infrastructure. Bitexen brings an established track record in real-world asset tokenization, introducing infrastructure that enables the full lifecycle of digital assets. South Africa becomes an active participant in shaping the future of financial markets, leveraging its institutional strength, regulatory maturity, and growing digital asset adoption to position itself as a hub for innovation on the continent.",
    events: "Media meet & greet with key local media and Bitexen leadership team. (targeting 4 meetings by April 24)",
    linkedin: "Mark: Re-share earned media coverage about the launch of Bitexen in South Africa with insight as to when trading goes live.",
  },
  {
    month: "Month 2",
    start: "May 15",
    theme: "1st \u2014 Workers\u2019 Day, Africa Month",
    content: "Thought leadership: Banking on the unbanked \u2014 low-cost transactions for the African diaspora.",
    events: "Bitexen RSA launch",
    linkedin: "Mark: Re-share earned media coverage, with insight about the need for low-cost transactions and remittance fees across the African diaspora.",
  },
  {
    month: "Month 3",
    start: "June 15",
    theme: "Youth Month, 16th \u2014 Youth Day",
    content: "Media release: Here\u2019s the opportunity to own a wine farm \u2013 Arra combines fine wine, premium land and lifestyle access with blockchain technology, AVT creates a bridge between heritage and innovation. Interview pitches: Wine farm launch \u2014 interviews for key broadcast media.",
    events: "Wine farm launch and trading goes live. Wine Media drops (TBC).",
    linkedin: "Mark: Re-share earned media coverage with insight about the upcoming launch of the wine farm asset.",
  },
  {
    month: "Initial Period Ends",
    start: "July 15",
    theme: "Youth Month, 16th \u2014 Youth Day",
    content: "Media release: Padel isn\u2019t just a phase, how to turn your hobby into long term investment. Interview pitches.",
    events: "Padel event (TBC)",
    linkedin: "Matthew: Re-share earned media coverage and provide excitement around the padel collaboration.",
  },
];

export function ContentCalendar() {
  return (
    <section id="calendar" className="relative py-24 md:py-32 overflow-hidden grain">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">Integrated Calendar</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            Three Month <span className="text-gradient-cyan">Integrated Content Calendar</span>
          </h2>
        </FadeIn>

        <div className="space-y-4 mt-12">
          {months.map((m, i) => (
            <FadeIn key={m.month} delay={100 + i * 100}>
              <div className="card-glow p-6 md:p-8">
                {/* Header row */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="font-display font-bold text-base tracking-wider uppercase" style={{ color: "var(--bitexen-cyan)" }}>
                    {m.month}
                  </span>
                  <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full" style={{ background: "rgba(6,214,242,0.08)", color: "var(--bitexen-text-secondary)", border: "1px solid rgba(6,214,242,0.12)" }}>
                    Starts {m.start}
                  </span>
                  <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full" style={{ background: "rgba(245,158,11,0.08)", color: "var(--bitexen-gold)", border: "1px solid rgba(245,158,11,0.15)" }}>
                    {m.theme}
                  </span>
                </div>

                {/* Content grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-cyan)" }}>Content</span>
                    <p className="text-sm font-light mt-2 leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>{m.content}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-purple)" }}>Events and Engagements</span>
                    <p className="text-sm font-light mt-2 leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>{m.events}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-gold)" }}>LinkedIn Exec Profile</span>
                    <p className="text-sm font-light mt-2 leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>{m.linkedin}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
