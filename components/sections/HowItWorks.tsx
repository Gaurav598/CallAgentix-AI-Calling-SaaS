"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileSearch, Megaphone } from "lucide-react";
import { Atmosphere } from "@/components/ui/atmosphere";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Train your agent",
      desc: "Company info, products, FAQs, documents, personality, languages, sales or support behavior, and safety rails.",
      icon: BookOpen,
    },
    {
      num: "02",
      title: "Launch calls",
      desc: "Outbound dialer campaigns with contact import and calling rules — or bind a number so AI answers inbound support.",
      icon: Megaphone,
    },
    {
      num: "03",
      title: "Review outcomes",
      desc: "Transcripts, recordings, structured outcomes, leads, and callbacks — ready for your team to act.",
      icon: FileSearch,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-16 md:py-24 border-t border-slate-200/70 overflow-hidden">
      <Atmosphere />
      <div className="site-shell relative z-10">
        <div className="max-w-2xl mb-12">
          <p className="section-label mb-3">Proposed product workflow</p>
          <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mb-4 max-w-[14ch]">
            From knowledge to a proposed call flow.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium max-w-xl">
            Explore the intended flow from agent setup to calls and review. This repository
            implements the website and demonstration, not the calling backend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="panel rounded-[24px] p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#050505] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">{step.num}</span>
                </div>
                <h3 className="headline text-2xl mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
