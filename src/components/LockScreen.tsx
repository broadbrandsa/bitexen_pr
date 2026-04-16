"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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
      // Show unlock animation
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
        {/* Background glow */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "50vh",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(6,214,242,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "40vh",
            background:
              "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(139,92,246,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-md w-full">
          {/* Confidential badge */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{
              background: "rgba(6,214,242,0.08)",
              border: "1px solid rgba(6,214,242,0.2)",
              color: "var(--bitexen-cyan)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "var(--bitexen-cyan)" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: "var(--bitexen-cyan)" }}
              />
            </span>
            Confidential Proposal
          </span>

          {/* Logos */}
          <div className="flex items-center gap-4">
            <span className="font-display text-lg font-bold tracking-wider" style={{ color: "var(--bitexen-cyan)" }}>
              BITEXEN
            </span>
            <div className="w-px h-5" style={{ background: "rgba(255,255,255,0.15)" }} />
            <span className="text-sm font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>
              BROADBRAND
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-black leading-none tracking-tight"
            style={{
              fontSize: "var(--type-h1)",
              color: "#FFFFFF",
              lineHeight: 0.95,
            }}
          >
            Enter access
            <br />
            code to{" "}
            <span className="text-gradient-cyan">unlock</span>
          </h1>

          <p className="text-sm" style={{ color: "var(--bitexen-text-secondary)" }}>
            This proposal is password-protected.
          </p>

          {/* Code input */}
          <div className="w-full max-w-sm">
            <input
              ref={inputRef}
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter code..."
              autoFocus
              className="w-full px-5 py-4 rounded-2xl text-center text-base font-semibold tracking-wider transition-all duration-200 outline-none"
              style={{
                background: error ? "rgba(239,68,68,0.1)" : "rgba(6,214,242,0.06)",
                border: error
                  ? "2px solid rgba(239,68,68,0.5)"
                  : code
                  ? "2px solid rgba(6,214,242,0.4)"
                  : "2px solid rgba(6,214,242,0.12)",
                color: error ? "rgba(239,68,68,0.9)" : "#FFFFFF",
                boxShadow: code && !error ? "0 0 30px rgba(6,214,242,0.1)" : "none",
              }}
            />
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #06D6F2, #3B82F6)",
              color: "#070B14",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Unlock Proposal
          </button>

          {/* Error */}
          {error && (
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(239,68,68,0.8)" }}>
              Incorrect code — try again
            </p>
          )}

          {/* Unlock steps */}
          {unlockSteps.length > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              {unlockSteps.map((step, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold tracking-wider uppercase"
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
