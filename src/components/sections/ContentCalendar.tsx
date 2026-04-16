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
    accent: "var(--bitexen-cyan)",
  },
  {
    month: "Month 2",
    start: "May 15",
    theme: "1st \u2014 Workers\u2019 Day, Africa Month",
    content: "Thought leadership: Banking on the unbanked \u2014 low-cost transactions for the African diaspora.",
    events: "Bitexen RSA launch",
    linkedin: "Mark: Re-share earned media coverage, with insight about the need for low-cost transactions and remittance fees across the African diaspora.",
    accent: "var(--bitexen-blue)",
  },
  {
    month: "Month 3",
    start: "June 15",
    theme: "Youth Month, 16th \u2014 Youth Day",
    content: "Media release: Here\u2019s the opportunity to own a wine farm \u2013 Arra combines fine wine, premium land and lifestyle access with blockchain technology, AVT creates a bridge between heritage and innovation. Interview pitches: Wine farm launch \u2014 interviews for key broadcast media.",
    events: "Wine farm launch and trading goes live. Wine Media drops (TBC).",
    linkedin: "Mark: Re-share earned media coverage with insight about the upcoming launch of the wine farm asset.",
    accent: "var(--bitexen-purple)",
  },
  {
    month: "Initial Period Ends",
    start: "July 15",
    theme: "Youth Month, 16th \u2014 Youth Day",
    content: "Media release: Padel isn\u2019t just a phase, how to turn your hobby into long term investment. Interview pitches.",
    events: "Padel event (TBC)",
    linkedin: "Matthew: Re-share earned media coverage and provide excitement around the padel collaboration.",
    accent: "var(--bitexen-gold)",
  },
];

export function ContentCalendar() {
  return (
    <section id="calendar" className="relative py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--bitexen-cyan)" }} />
            <span className="section-label">Integrated Calendar</span>
          </div>
          <h2 className="font-display font-black uppercase tracking-wider" style={{ fontSize: "var(--type-h2)", color: "#FFFFFF" }}>
            Three Month <span className="text-gradient-cyan">Content Calendar</span>
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-6">
          {months.map((m, i) => (
            <FadeIn key={m.month} delay={80 + i * 100}>
              <div className="card-glow relative overflow-hidden">
                {/* Left color accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: m.accent }} />

                <div className="p-6 md:p-8 pl-8 md:pl-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="font-display font-bold text-base tracking-wider uppercase" style={{ color: m.accent }}>
                      {m.month}
                    </span>
                    <span className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", color: "var(--bitexen-text-secondary)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      Starts {m.start}
                    </span>
                    <span className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full" style={{ background: "rgba(245,158,11,0.06)", color: "var(--bitexen-gold)", border: "1px solid rgba(245,158,11,0.12)" }}>
                      {m.theme}
                    </span>
                  </div>

                  {/* Three columns */}
                  <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--bitexen-cyan)" }} />
                        <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-cyan)" }}>Content</span>
                      </div>
                      <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>{m.content}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--bitexen-purple)" }} />
                        <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-purple)" }}>Events and Engagements</span>
                      </div>
                      <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>{m.events}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--bitexen-gold)" }} />
                        <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "var(--bitexen-gold)" }}>LinkedIn Exec Profile</span>
                      </div>
                      <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>{m.linkedin}</p>
                    </div>
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
