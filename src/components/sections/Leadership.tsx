"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const communicationOpportunities = [
  {
    title: "Opinion Pieces",
    desc: "Opinion pieces that focus the democratisation of assets for South African audiences.",
    number: "01",
  },
  {
    title: "LinkedIn Posts",
    desc: "LinkedIn posts from the local leadership team unpacking how Bitexen is creating access to unique investment opportunities using their financial platform.",
    number: "02",
  },
  {
    title: "Showcasing Local Expertise",
    desc: "Showcasing the expertise of the staff such as Mark and Matthew locally, to instill trust in local consumers.",
    number: "03",
  },
];

const mediaLogos = [
  { src: "/images/logo-itweb.png", alt: "ITWeb" },
  { src: "/images/logo-moneyweb.png", alt: "Moneyweb" },
  { src: "/images/logo-bizcommunity.png", alt: "Bizcommunity" },
  { src: "/images/logo-iol.png", alt: "IOL" },
  { src: "/images/logo-hypertext.png", alt: "Hypertext" },
  { src: "/images/logo-morey.png", alt: "Morey Marketing" },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle side accent */}
      <div className="absolute top-0 right-0 w-px h-full pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(6,214,242,0.06), transparent 80%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--bitexen-cyan)" }} />
            <span className="section-label">Local Leadership Voices</span>
          </div>
          <h2 className="font-display font-black uppercase tracking-wider" style={{ fontSize: "var(--type-h2)", color: "#FFFFFF" }}>
            Communication <span className="text-gradient-cyan">Opportunities</span>
          </h2>
        </FadeIn>

        {/* Headshots */}
        <FadeIn delay={80}>
          <div className="flex items-center gap-8 mt-10">
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden" style={{ border: "2px solid rgba(6,214,242,0.2)" }}>
                <Image
                  src="/images/headshot-mark.png"
                  alt="Mark"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-semibold" style={{ color: "var(--bitexen-text-secondary)" }}>Mark</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden" style={{ border: "2px solid rgba(6,214,242,0.2)" }}>
                <Image
                  src="/images/headshot-matthew.png"
                  alt="Matthew"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-semibold" style={{ color: "var(--bitexen-text-secondary)" }}>Matthew</span>
            </div>
          </div>
        </FadeIn>

        {/* Communication opportunities */}
        <div className="mt-10 space-y-4">
          {communicationOpportunities.map((item, i) => (
            <FadeIn key={item.title} delay={150 + i * 120}>
              <div className="group relative card-glow p-6 md:p-8 flex gap-6 items-start">
                <span className="font-display font-black text-3xl md:text-4xl leading-none flex-shrink-0" style={{ color: "rgba(6,214,242,0.12)" }}>
                  {item.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-2" style={{ color: "var(--bitexen-cyan)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--bitexen-text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Media logos */}
        <FadeIn delay={500}>
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "var(--bitexen-cyan)" }} />
              <span className="section-label">Media</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {mediaLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="card-glow flex items-center justify-center p-4 h-16 md:h-20 transition-all duration-300 hover:bg-[rgba(6,214,242,0.03)]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="max-h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
