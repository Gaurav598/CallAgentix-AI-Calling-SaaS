"use client";

import React from "react";
import { motion } from "framer-motion";
import { Atmosphere } from "@/components/ui/atmosphere";

const NODES = [
  { id: "org", label: "Organization", x: 8, y: 42 },
  { id: "agent", label: "Agent + Version", x: 28, y: 22 },
  { id: "campaign", label: "Campaign / Inbound", x: 50, y: 42 },
  { id: "exotel", label: "Exotel", x: 72, y: 22 },
  { id: "llm", label: "Voice LLM", x: 72, y: 62 },
  { id: "tools", label: "Tools · Leads · QA", x: 92, y: 42 },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative py-16 md:py-24 overflow-hidden border-t border-slate-200/70">
      <Atmosphere />
      <div className="site-shell relative z-10">
        <div className="max-w-2xl mb-10">
          <p className="section-label mb-3">Proposed architecture</p>
          <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mb-4 max-w-[14ch]">
            Control plane. Voice runtime. One loop.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium max-w-xl">
            A concept diagram for agent configuration, telephony, voice AI, and outcome review.
            These backend services are not included in this website repository.
          </p>
        </div>

        <div className="panel rounded-[28px] p-5 sm:p-8 overflow-hidden">
          <div className="relative h-[280px] sm:h-[340px]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              <motion.path
                d="M12 46 C 20 46, 22 28, 30 28"
                fill="none"
                stroke="#163a78"
                strokeOpacity="0.25"
                strokeWidth="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />
              <motion.path
                d="M34 28 C 42 28, 44 46, 52 46"
                fill="none"
                stroke="#1f8a9a"
                strokeOpacity="0.3"
                strokeWidth="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.15 }}
              />
              <motion.path
                d="M56 46 C 64 46, 66 28, 74 28"
                fill="none"
                stroke="#163a78"
                strokeOpacity="0.25"
                strokeWidth="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
              <motion.path
                d="M56 46 C 64 46, 66 66, 74 66"
                fill="none"
                stroke="#1f8a9a"
                strokeOpacity="0.25"
                strokeWidth="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.35 }}
              />
              <motion.path
                d="M78 28 C 86 28, 88 46, 94 46"
                fill="none"
                stroke="#163a78"
                strokeOpacity="0.25"
                strokeWidth="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.45 }}
              />
              <motion.path
                d="M78 66 C 86 66, 88 46, 94 46"
                fill="none"
                stroke="#1f8a9a"
                strokeOpacity="0.25"
                strokeWidth="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </svg>

            {NODES.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div className="rounded-2xl border border-slate-200 bg-white/95 px-3 py-2.5 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.45)] min-w-[118px] text-center">
                  <div className="mx-auto mb-1.5 h-1.5 w-1.5 rounded-full bg-[#1f8a9a]" />
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-900 whitespace-nowrap">
                    {node.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { title: "Control plane", body: "Agents, campaigns, support, analytics, settings" },
              { title: "Runtime plane", body: "Exotel streaming + realtime voice LLM audio" },
              { title: "Outcomes", body: "Transcripts, recordings, leads, callbacks, handoffs" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <div className="text-sm font-semibold text-slate-900 mb-1">{item.title}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
