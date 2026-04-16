"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const CORRECT_CODE = "Bitexen@SA2026";
const STORAGE_KEY = "bitexen_sa_v1_unlocked";

export function LockScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [unlockSteps, setUnlockSteps] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setUnlocked(saved === "true");
    } catch {
      setUnlocked(false);
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (code === CORRECT_CODE) {
      const steps = ["Verifying...", "Identity confirmed", "Clearance granted", "Access granted"];
      let i = 0;
      const interval = setInterval(() => {
        if (i < steps.length) {
          setUnlockSteps((prev) => [...prev, steps[i]]);
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setExiting(true);
            setTimeout(() => {
              try { localStorage.setItem(STORAGE_KEY, "true"); } catch {}
              setUnlocked(true);
            }, 900);
          }, 400);
        }
      }, 350);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
        setCode("");
      }, 700);
    }
  }, [code]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleSubmit();
    },
    [handleSubmit]
  );

  if (unlocked === null) return null;
  if (unlocked) return <>{children}</>;

  return (
    <>
      <div
        className={`lock-overlay ${exiting ? "lock-exiting" : ""} ${error ? "lock-shake" : ""}`}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bitexen-bg)",
          overflow: "hidden",
        }}
      >
        {/* Background effects */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: "50vh", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(6,214,242,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "40vh", background: "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(139,92,246,0.04) 0%, transparent 70%)" }} />

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(6,214,242,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(6,214,242,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-md w-full">
          {/* Logos */}
          <div className="flex items-center gap-5">
            <Image
              src="/images/bitexen-logo.png"
              alt="Bitexen South Africa"
              width={150}
              height={36}
              className="h-8 md:h-9 w-auto object-contain"
              priority
            />
            <div className="w-px h-8" style={{ background: "rgba(6,214,242,0.2)" }} />
            <Image
              src="/images/WhatsApp Image 2026-04-16 at 13.09.16.jpeg"
              alt="ByDesign"
              width={140}
              height={36}
              className="h-7 md:h-8 w-auto object-contain"
              priority
            />
          </div>

          {/* Thin line separator */}
          <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--bitexen-cyan), transparent)" }} />

          {/* Code input */}
          <div className="w-full max-w-xs">
            <input
              ref={inputRef}
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter access code"
              autoFocus
              className="w-full px-5 py-4 rounded-2xl text-center text-sm font-semibold tracking-wider transition-all duration-200 outline-none"
              style={{
                background: error ? "rgba(239,68,68,0.08)" : "rgba(6,214,242,0.04)",
                border: error
                  ? "1px solid rgba(239,68,68,0.4)"
                  : code
                  ? "1px solid rgba(6,214,242,0.3)"
                  : "1px solid rgba(6,214,242,0.08)",
                color: error ? "rgba(239,68,68,0.9)" : "#FFFFFF",
                boxShadow: code && !error ? "0 0 40px rgba(6,214,242,0.06)" : "none",
              }}
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(6,214,242,0.15), rgba(59,130,246,0.15))",
              border: "1px solid rgba(6,214,242,0.2)",
              color: "var(--bitexen-cyan)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(6,214,242,0.25), rgba(59,130,246,0.25))";
              e.currentTarget.style.borderColor = "rgba(6,214,242,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(6,214,242,0.15), rgba(59,130,246,0.15))";
              e.currentTarget.style.borderColor = "rgba(6,214,242,0.2)";
            }}
          >
            Unlock
          </button>

          {/* Error */}
          {error && (
            <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(239,68,68,0.7)" }}>
              Incorrect code
            </p>
          )}

          {/* Unlock steps */}
          {unlockSteps.length > 0 && (
            <div className="flex flex-col gap-1.5 mt-2">
              {unlockSteps.map((step, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold tracking-wider uppercase"
                  style={{
                    color: "var(--bitexen-cyan)",
                    animation: "unlockStep 0.3s ease both",
                  }}
                >
                  {step}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ visibility: "hidden", pointerEvents: "none" }}>{children}</div>
    </>
  );
}
