"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FinalCtaProps {
  onOpenDemo?: () => void;
  onOpenContact?: () => void;
}

export function FinalCta({ onOpenDemo, onOpenContact }: FinalCtaProps) {
  return (
    <section id="pricing" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel-dark relative rounded-[28px] p-8 sm:p-12 lg:p-14 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(31,138,154,0.28), transparent 35%), radial-gradient(circle at 80% 80%, rgba(22,58,120,0.35), transparent 40%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                Get started
              </p>
              <h2 className="headline text-4xl sm:text-5xl text-white tracking-tight leading-[1.02] mb-4">
                Explore the CallAgentix concept.
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
                Preview the intended sales and support workflows, then listen to the scripted call demonstration.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenDemo}
                className="group inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm px-6 py-3.5 rounded-full"
              >
                Preview request
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm px-5 py-3.5 rounded-full hover:bg-white/5 border border-white/10"
              >
                Explore contact form
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
