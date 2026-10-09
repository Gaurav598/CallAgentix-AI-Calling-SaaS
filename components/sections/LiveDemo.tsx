"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play, Phone, PhoneOff } from "lucide-react";
import { StatusBadge } from "@/components/product/DashboardFrame";
import { Atmosphere } from "@/components/ui/atmosphere";
import {
  playConnectBeep,
  playRingBurst,
  unlockDemoAudio,
} from "@/lib/demo-audio";

type Phase = "ringing" | "pickup" | "talking" | "done";

const SCRIPT = [
  {
    from: "agent" as const,
    text: "Hello, this is Ava from Edoply Homes. Am I speaking with Riya Sharma?",
  },
  {
    from: "customer" as const,
    text: "Haan, yes, speaking.",
  },
  {
    from: "agent" as const,
    text: "Great — calling about Skyline Residences in Whitefield. You asked about 3BHK availability.",
  },
  {
    from: "customer" as const,
    text: "Yes, I saw it online. Are any 3BHKs still left?",
  },
  {
    from: "agent" as const,
    text: "Yes, two units on the 12th and 14th floor. Saturday 11 AM for a site visit?",
  },
  {
    from: "customer" as const,
    text: "Saturday theek hai. Can someone send the location on WhatsApp?",
  },
  {
    from: "agent" as const,
    text: "Absolutely. I’ll create your lead, book the visit, and share the pin.",
  },
  {
    from: "customer" as const,
    text: "Perfect. Please call me if the time changes.",
  },
  {
    from: "agent" as const,
    text: "Done — appointment booked, callback set for tomorrow 5 PM. Thank you, Riya!",
  },
];

const RING_MS = 2400;
const PICKUP_MS = 900;
const GAP_MS = 380;
const END_HOLD_MS = 2200;

export function LiveDemo() {
  const [playing, setPlaying] = useState(false);
  const [phase, setPhase] = useState<Phase>("ringing");
  const [visibleCount, setVisibleCount] = useState(0);
  const [lineIndex, setLineIndex] = useState(-1);
  const [elapsed, setElapsed] = useState(0);
  const [soundOn, setSoundOn] = useState(false);

  const runIdRef = useRef(0);
  const startedAtRef = useRef<number | null>(null);
  const playingRef = useRef(false);

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  useEffect(() => {
    if (!playing) return;
    const tick = window.setInterval(() => {
      if (startedAtRef.current == null) return;
      setElapsed(Date.now() - startedAtRef.current);
    }, 100);
    return () => window.clearInterval(tick);
  }, [playing]);

  useEffect(() => {
    if (!playing) return;

    const runId = ++runIdRef.current;
    let cancelled = false;

    const stillActive = () => !cancelled && runIdRef.current === runId && playingRef.current;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    const run = async () => {
      startedAtRef.current = Date.now();
      setPhase("ringing");
      setVisibleCount(0);
      setLineIndex(-1);

      const ctx = await unlockDemoAudio();
      if (!stillActive()) return;

      // Ringing
      if (ctx && soundOn) {
        playRingBurst(ctx);
        await wait(1100);
        if (!stillActive()) return;
        playRingBurst(ctx);
        await wait(Math.max(0, RING_MS - 1100));
      } else {
        await wait(RING_MS);
      }
      if (!stillActive()) return;

      // Pickup
      setPhase("pickup");
      if (ctx && soundOn) playConnectBeep(ctx);
      await wait(PICKUP_MS);
      if (!stillActive()) return;

      // Conversation
      setPhase("talking");
      for (let i = 0; i < SCRIPT.length; i++) {
        if (!stillActive()) return;
        setLineIndex(i);
        setVisibleCount(i + 1);

        await wait(2200);

        if (!stillActive()) return;
        await wait(GAP_MS);
      }

      if (!stillActive()) return;
      setPhase("done");
      await wait(END_HOLD_MS);
      if (!stillActive()) return;

      // Loop
      void run();
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [playing, soundOn]);

  const enableSound = async () => {
    const ctx = await unlockDemoAudio();
    if (ctx) {
      setSoundOn(true);
    }
    return ctx;
  };

  const togglePlay = async () => {
    if (!playing) {
      await enableSound();
      setPlaying(true);
      return;
    }
    runIdRef.current += 1;
    setPlaying(false);
  };

  const statusLabel =
    phase === "ringing"
      ? "RINGING"
      : phase === "pickup"
        ? "CONNECTED"
        : phase === "done"
          ? "APPOINTMENT_BOOKED"
          : "AI_ACTIVE";

  const clock = Math.min(Math.floor(elapsed / 1000), 99);

  return (
    <section id="demo" className="relative py-16 md:py-24 border-t border-slate-200/70">
      <Atmosphere variant="dense" />
      <div className="site-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8 md:mb-10 max-w-3xl"
        >
          <p className="section-label mb-3">Scripted call demonstration</p>
          <h2 className="headline text-3xl sm:text-4xl lg:text-[2.75rem] mb-4 leading-[1.15] tracking-[-0.02em]">
            From RINGING to APPOINTMENT BOOKED.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium">
            Play a scripted example of a sales conversation. The dialogue and dashboard states are
            illustrative; no live call, AI model, lead, or appointment is created. Optional call tones
            are generated in your browser.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          {["RINGING", "CONNECTED", "AI_ACTIVE", "APPOINTMENT_BOOKED"].map((s) => (
            <StatusBadge key={s} tone={s === "APPOINTMENT_BOOKED" ? "accent" : "outline"}>
              {s}
            </StatusBadge>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="rounded-2xl border border-slate-200 bg-[#0f172a] overflow-hidden shadow-[0_24px_60px_-24px_rgba(15,23,42,0.55)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[420px]">
              <div className="p-6 sm:p-7 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                  Edoply Weekend Visit Drive
                </p>
                <h3 className="text-white text-lg font-semibold mb-1">Ava · Sales agent</h3>
                <p className="text-xs text-slate-400 mb-5">Contact: Riya Sharma · Bengaluru</p>
                <div className="space-y-2 text-xs text-slate-300 mb-auto">
                  <div className="flex justify-between border border-white/10 rounded-lg px-3 py-2">
                    <span>Status</span>
                    <span className="text-emerald-400 font-medium">{statusLabel}</span>
                  </div>
                  <div className="flex justify-between border border-white/10 rounded-lg px-3 py-2">
                    <span>Tools</span>
                    <span className="text-white text-right">lead · appointment · callback</span>
                  </div>
                  <div className="flex justify-between border border-white/10 rounded-lg px-3 py-2">
                    <span>Languages</span>
                    <span className="text-white">EN → HI</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3 text-white/70">
                  <button onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
                    {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <div className="flex-1 h-1 rounded-full bg-white/15 overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-[width] duration-200"
                      style={{
                        width: `${Math.min(100, ((visibleCount + (phase === "done" ? 1 : 0)) / (SCRIPT.length + 1)) * 100)}%`,
                      }}
                    />
                  </div>
                  <span className="text-[10px] tabular-nums">
                    0:{String(clock).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex items-center justify-center bg-[#111827]">
                <div className="w-full max-w-[250px] rounded-[32px] bg-black border border-white/15 p-3">
                  <div className="mx-auto mb-3 h-5 w-20 rounded-full bg-zinc-900" />
                  <div className="rounded-[24px] bg-zinc-900 min-h-[310px] px-4 py-5 flex flex-col">
                    <AnimatePresence mode="wait">
                      {phase === "ringing" || phase === "pickup" ? (
                        <motion.div
                          key={phase}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex-1 flex flex-col items-center justify-center text-center"
                        >
                          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">
                            {phase === "ringing" ? "Playback: ringing" : "Playback: connecting"}
                          </p>
                          <p className="text-white text-lg font-semibold mb-1">Riya Sharma</p>
                          <p className="text-zinc-500 text-xs mb-8">Prospect · +91 98…</p>
                          <div className="flex items-center gap-8">
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-red-500/90 text-white flex items-center justify-center">
                                <PhoneOff className="w-5 h-5" />
                              </div>
                              <span className="text-[10px] text-zinc-500">Decline</span>
                            </div>
                            <motion.div
                              animate={phase === "ringing" ? { scale: [1, 1.1, 1] } : { scale: 1.06 }}
                              transition={{ duration: 0.9, repeat: Infinity }}
                              className="flex flex-col items-center gap-2"
                            >
                              <div className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_24px_rgba(16,185,129,0.45)]">
                                <Phone className="w-5 h-5" />
                              </div>
                              <span className="text-[10px] text-zinc-500">
                                {phase === "pickup" ? "Answered" : "Accept"}
                              </span>
                            </motion.div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div key="talking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col min-h-0">
                          <div className="mb-4 shrink-0">
                            <p className="text-white text-sm font-semibold">Riya Sharma</p>
                            <p className="text-[10px] text-emerald-400">
                              {phase === "done" ? "Script complete" : "Scripted example · Edoply Homes"}
                            </p>
                          </div>
                          <div className="flex-1 space-y-2.5 overflow-y-auto pr-1">
                            {SCRIPT.slice(0, visibleCount).map((line, i) => (
                              <motion.div
                                key={`${i}-${line.from}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`max-w-[95%] rounded-2xl px-3 py-2 text-[11px] leading-relaxed ${
                                  line.from === "customer"
                                    ? "ml-auto bg-white text-slate-900"
                                    : "mr-auto bg-zinc-800 text-zinc-100 border border-white/10"
                                } ${i === lineIndex ? "ring-1 ring-emerald-400/40" : ""}`}
                              >
                                {line.text}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
