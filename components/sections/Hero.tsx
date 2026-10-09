"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Bot, Megaphone, PhoneCall, Radio, Users } from "lucide-react";
import { Atmosphere, SignalGraphic } from "@/components/ui/atmosphere";
import { DashboardFrame, StatusBadge } from "@/components/product/DashboardFrame";

interface HeroProps {
  onOpenDemo: () => void;
  onOpenSales?: () => void;
}

export function Hero({ onOpenDemo, onOpenSales }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <Atmosphere variant="dense" />

      <div className="site-shell relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-10 items-center">
          <div className="xl:col-span-5 flex flex-col items-start text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="headline text-5xl sm:text-6xl md:text-7xl mb-3"
            >
              CallAgentix
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 }}
              className="inline-flex items-center gap-2 section-label mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-500/50 animate-ping" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              AI calling product preview
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="headline text-[2.75rem] sm:text-6xl lg:text-[4.35rem] mb-6 max-w-[11ch]"
            >
              Explore voice AI.
              <br />
              Preview workflows.
              <br />
              Watch the demo.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="text-base sm:text-lg text-neutral-700 max-w-md leading-relaxed mb-8 font-medium"
            >
              Explore how AI-assisted sales and support calling could work. This website includes
              illustrative product screens and a scripted conversation you can play through visually.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <button onClick={onOpenDemo} className="btn-primary">
                Preview request
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onOpenSales} className="btn-secondary">
                Explore contact form
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-neutral-800"
            >
              <span className="inline-flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Agents · knowledge · versions</span>
              <span className="inline-flex items-center gap-1.5"><PhoneCall className="w-4 h-4" /> Campaigns + inbound</span>
              <span className="inline-flex items-center gap-1.5"><Radio className="w-4 h-4" /> Multilingual · 24/7 support</span>
            </motion.div>

            <SignalGraphic className="w-full max-w-sm mt-8 opacity-90" />
          </div>

          <div className="xl:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[28px] bg-black/5 blur-2xl" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <DashboardFrame
                  activeNav="Dashboard"
                  title="Dashboard"
                  description="Illustrative agents, campaigns, and call activity"
                >
                  <div className="grid gap-2.5 grid-cols-2 xl:grid-cols-4 mb-4">
                    {[
                      { label: "Total calls", value: "1,284", icon: PhoneCall },
                      { label: "Connected", value: "892", icon: PhoneCall },
                      { label: "Leads", value: "146", icon: Users },
                      { label: "Conversions", value: "38", icon: Megaphone },
                    ].map((kpi, i) => (
                      <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + i * 0.06 }}
                        className="rounded-xl border border-neutral-200 bg-white p-3"
                      >
                        <div className="flex items-center justify-between text-[11px] font-bold text-neutral-600 mb-1">
                          {kpi.label}
                          <kpi.icon className="h-3.5 w-3.5 text-neutral-900" />
                        </div>
                        <div className="headline text-2xl tabular-nums tracking-tight">
                          {kpi.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid gap-3 lg:grid-cols-2 mb-3">
                    <div className="rounded-xl border border-neutral-200 bg-white p-3">
                      <div className="text-[12px] font-extrabold text-neutral-950 mb-2">Recent agents</div>
                      {[
                        { name: "Ava", status: "PUBLISHED" },
                        { name: "Kabir", status: "PUBLISHED" },
                      ].map((agent) => (
                        <div key={agent.name} className="flex items-center justify-between rounded-lg border border-neutral-200 px-2.5 py-2 mb-1.5 last:mb-0 bg-neutral-50">
                          <div className="flex items-center gap-2 text-[12px] font-bold text-neutral-900">
                            <Bot className="h-3.5 w-3.5" />
                            {agent.name}
                          </div>
                          <StatusBadge tone="success">{agent.status}</StatusBadge>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-neutral-200 bg-white p-3">
                      <div className="text-[12px] font-extrabold text-neutral-950 mb-2">Active campaigns</div>
                      <div className="flex items-center justify-between rounded-lg border border-neutral-200 px-2.5 py-2 bg-neutral-50">
                        <div>
                          <div className="text-[12px] font-bold text-neutral-900">Edoply Weekend Visit Drive</div>
                          <div className="text-[10px] font-semibold text-neutral-500">Ava · Asia/Kolkata</div>
                        </div>
                        <StatusBadge tone="accent">RUNNING</StatusBadge>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-neutral-200 bg-white p-3">
                    <div className="text-[12px] font-extrabold text-neutral-950 mb-2">Recent calls</div>
                    <div className="space-y-1.5">
                      {[
                        { contact: "Riya Sharma", detail: "OUTBOUND · Ava", status: "AI_ACTIVE" },
                        { contact: "Arjun Mehta", detail: "OUTBOUND · Ava", status: "COMPLETED" },
                        { contact: "Priya Nair", detail: "INBOUND · Kabir", status: "HUMAN_HANDOFF" },
                      ].map((call, i) => (
                        <motion.div
                          key={call.contact}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.08 }}
                          className="flex items-center justify-between rounded-lg border border-neutral-200 px-2.5 py-2 bg-neutral-50"
                        >
                          <div>
                            <div className="text-[12px] font-bold text-neutral-900">{call.contact}</div>
                            <div className="text-[10px] font-semibold text-neutral-500">{call.detail}</div>
                          </div>
                          <StatusBadge>{call.status}</StatusBadge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </DashboardFrame>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
