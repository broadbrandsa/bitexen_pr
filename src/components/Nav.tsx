"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Objective", sectionId: "objective" },
  { label: "Leadership", sectionId: "leadership" },
  { label: "Content", sectionId: "content" },
  { label: "Calendar", sectionId: "calendar" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY < 80) setActiveSection(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: "-64px 0px 0px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b bg-[#070B14]/95 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      style={{ borderColor: scrolled ? "rgba(6,214,242,0.08)" : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logos */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/bitexen-logo.png"
            alt="Bitexen"
            width={100}
            height={24}
            className="h-5 w-auto object-contain"
          />
          <div className="w-px h-4" style={{ background: "rgba(6,214,242,0.15)" }} />
          <Image
            src="/images/broadbrand-white.png"
            alt="Broadbrand"
            width={90}
            height={18}
            className="h-3.5 w-auto object-contain opacity-50"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const active = activeSection === link.sectionId;
            return (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                className="relative px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide uppercase transition-all duration-200"
                style={{
                  color: active ? "var(--bitexen-cyan)" : "rgba(255,255,255,0.4)",
                  background: active ? "rgba(6,214,242,0.06)" : "transparent",
                  border: active ? "1px solid rgba(6,214,242,0.15)" : "1px solid transparent",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Lock button */}
        <div className="hidden lg:flex items-center">
          <button
            className="text-[10px] font-medium uppercase tracking-widest transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.2)" }}
            onClick={() => {
              try { localStorage.removeItem("bitexen_sa_v1_unlocked"); } catch {}
              window.location.reload();
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
          >
            Lock
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t bg-[#070B14]/98 backdrop-blur-xl px-6 py-4 space-y-3" style={{ borderColor: "rgba(6,214,242,0.08)" }}>
          {links.map((link) => {
            const active = activeSection === link.sectionId;
            return (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                className="block text-sm font-semibold py-2 uppercase tracking-wide rounded-lg px-3 transition-all duration-200"
                style={{
                  color: active ? "var(--bitexen-cyan)" : "rgba(255,255,255,0.5)",
                  background: active ? "rgba(6,214,242,0.06)" : "transparent",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
