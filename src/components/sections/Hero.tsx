"use client";

export function Hero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden grain">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,214,242,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-5 hero-animate-1">
          <span className="font-display text-xl font-bold tracking-widest" style={{ color: "var(--bitexen-cyan)" }}>BITEXEN</span>
          <div className="w-px h-6" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span className="text-sm font-semibold tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>BROADBRAND</span>
        </div>
      </div>
    </section>
  );
}
