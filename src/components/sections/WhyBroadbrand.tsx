"use client";

import { FadeIn } from "@/components/FadeIn";

const pillars = [
  { title: "Digital-First", desc: "Every touchpoint, every campaign, every experience starts and ends in digital. We build natively for screens." },
  { title: "Performance", desc: "Measurable outcomes over vanity metrics. We architect campaigns around conversion, retention, and cost-per-acquisition." },
  { title: "Creative Excellence", desc: "Bold, distinctive creative that cuts through the noise. In a market saturated with generic crypto messaging, differentiation is survival." },
  { title: "Deep AI Integration", desc: "We embed AI across our workflow — from audience modelling and content generation to real-time optimisation and predictive analytics." },
];

const team = [
  { name: "Vincent Maher", role: "CEO" },
  { name: "Mike Elmira", role: "Head of Agency" },
  { name: "Shakier Groenewald", role: "Head of Sales & Client Ops, Cape Town" },
  { name: "Sabata Mofokeng", role: "Technology" },
  { name: "Nicole Proxenos", role: "Design" },
];

const martechPartners = [
  { name: "Newsroom AI", desc: "Rich media display + AI performance optimisation" },
  { name: "The Brief", desc: "Creative workflow and AI automation of digital creative" },
  { name: "Xanite", desc: "CDP and marketing automation platform" },
  { name: "Persaic", desc: "Personalisation and audience targeting" },
];

const mediaPartners = [
  { name: "Arena Holdings", desc: "News, publishing and digital media" },
  { name: "Mediamark / Kagiso Media", desc: "Radio, digital and content networks" },
  { name: "DStv Media Sales", desc: "Premium TV and streaming audiences" },
  { name: "Primedia", desc: "Radio, outdoor and digital" },
  { name: "Outdoor Partners", desc: "National OOH and DOOH networks" },
];

export function WhyBroadbrand() {
  return (
    <section id="why-broadbrand" className="relative py-24 md:py-32 overflow-hidden grain">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="section-label">Why Broadbrand</span>
          <h2 className="font-display font-black uppercase tracking-wider mt-4" style={{ fontSize: "var(--type-h2)" }}>
            A Digital Agency That
            <br />
            <span className="text-gradient-cyan">Operates Like a Software Company</span>
          </h2>
        </FadeIn>

        {/* Four pillars */}
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={100 + i * 100}>
              <div className="card-glow p-6">
                <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-3" style={{ color: "var(--bitexen-cyan)" }}>
                  {p.title}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>
                  {p.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Team */}
        <FadeIn delay={300}>
          <h3 className="font-display font-bold text-sm tracking-wider uppercase mt-16 mb-6" style={{ color: "var(--bitexen-cyan)" }}>
            The Team
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {team.map((t) => (
              <div key={t.name} className="card-glow p-4 text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(6,214,242,0.1)", border: "1px solid rgba(6,214,242,0.2)" }}>
                  <span className="font-display font-bold text-xs" style={{ color: "var(--bitexen-cyan)" }}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <p className="text-xs font-semibold" style={{ color: "#FFFFFF" }}>{t.name}</p>
                <p className="text-[10px] mt-1 font-light" style={{ color: "var(--bitexen-text-secondary)" }}>{t.role}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Partners */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <FadeIn delay={400}>
            <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-4" style={{ color: "var(--bitexen-cyan)" }}>
              Martech Partners
            </h3>
            <div className="space-y-3">
              {martechPartners.map((p) => (
                <div key={p.name} className="card-glow p-4 flex items-center gap-4">
                  <span className="text-xs font-bold whitespace-nowrap" style={{ color: "#FFFFFF", minWidth: "100px" }}>{p.name}</span>
                  <span className="text-xs font-light" style={{ color: "var(--bitexen-text-secondary)" }}>{p.desc}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-4" style={{ color: "var(--bitexen-cyan)" }}>
              Media Partners
            </h3>
            <div className="space-y-3">
              {mediaPartners.map((p) => (
                <div key={p.name} className="card-glow p-4 flex items-center gap-4">
                  <span className="text-xs font-bold whitespace-nowrap" style={{ color: "#FFFFFF", minWidth: "100px" }}>{p.name}</span>
                  <span className="text-xs font-light" style={{ color: "var(--bitexen-text-secondary)" }}>{p.desc}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
