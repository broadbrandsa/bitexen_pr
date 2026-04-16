"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden grain">
      {/* Ambient glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,214,242,0.07) 0%, transparent 60%)" }} />
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(6,214,242,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,214,242,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center hero-animate-1">
        {/* Logos side by side */}
        <div className="flex items-center gap-6 md:gap-8">
          <div className="relative h-8 md:h-10 w-auto">
            <Image
              src="/images/bitexen-logo.png"
              alt="Bitexen South Africa"
              width={180}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </div>
          <div className="w-px h-8 md:h-10" style={{ background: "rgba(6,214,242,0.2)" }} />
          <div className="relative h-6 md:h-7 w-auto">
            <Image
              src="/images/broadbrand-white.png"
              alt="Broadbrand"
              width={180}
              height={28}
              className="h-6 md:h-7 w-auto object-contain opacity-60"
              priority
            />
          </div>
        </div>

        {/* Thin accent line */}
        <div className="w-16 h-px hero-animate-2" style={{ background: "linear-gradient(90deg, transparent, var(--bitexen-cyan), transparent)" }} />
      </div>
    </section>
  );
}
