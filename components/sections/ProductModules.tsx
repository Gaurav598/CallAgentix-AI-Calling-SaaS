"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Headphones, Languages, Megaphone, Wrench } from "lucide-react";
import { DashboardFrame, StatusBadge } from "@/components/product/DashboardFrame";
import { Atmosphere } from "@/components/ui/atmosphere";

const AGENT_SECTIONS = [
  "General", "Company", "Products", "Knowledge", "Personality", "Voice",
  "Languages", "Sales", "Support", "Safety", "Call behavior", "Tools", "Test agent",
];

const WIZARD_STEPS = ["Details", "Agent", "Phone", "Contacts", "Objective", "Rules", "Review"];

export function ProductModules() {
  return (
    <section id="product-modules" className="relative py-16 md:py-24 border-t border-slate-200/70 overflow-hidden">
      <Atmosphere />
      <div className="site-shell relative z-10 space-y-14">
        <div className="max-w-2xl">
          <p className="section-label mb-3">Product</p>
          <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mb-4 max-w-[16ch]">
            The same control plane your team will live in.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium max-w-xl">
            Illustrative screens for agents, campaigns, inbound support, transcripts, and outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#050505] text-white flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="headline text-2xl mb-1">Train & publish agents</h3>
                  <p className="text-sm text-neutral-700 mt-1 font-medium">
                    Sectioned builder for company knowledge, products, languages, sales/support behavior, safety, and tools.
                    Preview of a versioned agent configuration for a future calling service.
                  </p>
                </div>
            </div>
            <DashboardFrame activeNav="Agents" title="Ava" description="Edoply Homes outbound sales agent (EN/HI)">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {AGENT_SECTIONS.map((section, i) => (
                  <span
                    key={section}
                    className={`rounded-md px-2 py-1 text-[10px] font-medium border ${
                      i === 3
                        ? "bg-[#050505] text-white border-[#050505]"
                        : "bg-white text-neutral-700 border-neutral-200"
                    }`}
                  >
                    {section}
                  </span>
                ))}
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-2">
                <div className="text-[11px] font-semibold text-slate-900">Knowledge</div>
                <div className="text-[11px] text-slate-500">FAQs · policies · PDF / TXT / MD / CSV uploads</div>
                <div className="rounded-md bg-slate-50 border border-slate-100 px-2.5 py-2 text-[11px] text-slate-700">
                  Q: Which Whitefield 3BHK units are available this weekend?
                  <br />
                  A: Skyline Residences has two units open for Saturday site visits.
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <StatusBadge tone="success">PUBLISHED</StatusBadge>
                  <span className="text-[10px] text-slate-400">Languages: EN + HI</span>
                </div>
              </div>
            </DashboardFrame>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <div className="mb-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#050505] text-white flex items-center justify-center shrink-0">
                  <Megaphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="headline text-2xl mb-1">Outbound sales campaigns</h3>
                  <p className="text-sm text-neutral-700 mt-1 font-medium">
                    Illustrative seven-step wizard for agent, phone, contacts, objective, and calling rules.
                  </p>
                </div>
            </div>
            <DashboardFrame activeNav="Sales" title="Create campaign" description="Edoply Weekend Visit Drive">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {WIZARD_STEPS.map((step, i) => (
                  <span
                    key={step}
                    className={`rounded-md px-2.5 py-1 text-[10px] font-medium ${
                      i <= 3
                        ? "bg-[#050505] text-white"
                        : i === 4
                          ? "bg-neutral-300 text-neutral-900"
                          : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    {step}
                  </span>
                ))}
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-2 text-[12px]">
                <Row label="Agent" value="Ava · Sales call" />
                <Row label="Phone" value="Illustrative support line" />
                <Row label="Contacts" value="2,480 imported · CSV" />
                <Row label="Timezone" value="Asia/Kolkata · 10:00–19:00" />
                <Row label="Objective" value="Book weekend site visits" />
              </div>
            </DashboardFrame>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#050505] text-white flex items-center justify-center shrink-0">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="headline text-2xl mb-1">Inbound customer support</h3>
                  <p className="text-sm text-neutral-700 mt-1 font-medium">
                    Example support workspace showing how callers, transcripts, and outcomes could be reviewed.
                  </p>
                </div>
            </div>
            <DashboardFrame
              activeNav="Customer Support"
              title="Customer Support"
              description="Inbound support calls handled by your trained support agent"
            >
              <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
                <div className="grid grid-cols-5 gap-2 px-3 py-2 border-b border-slate-100 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  <span className="col-span-2">Customer</span>
                  <span>Status</span>
                  <span>Duration</span>
                  <span>Outcome</span>
                </div>
                {[
                  { name: "Priya Nair", status: "COMPLETED", dur: "4m 12s", outcome: "RESOLVED" },
                  { name: "Alex Johnson", status: "AI_ACTIVE", dur: "1m 04s", outcome: "—" },
                  { name: "Arjun Mehta", status: "HUMAN_HANDOFF", dur: "6m 40s", outcome: "HANDOFF" },
                ].map((row) => (
                  <div key={row.name} className="grid grid-cols-5 gap-2 px-3 py-2.5 border-b border-slate-50 last:border-0 text-[11px]">
                    <span className="col-span-2 font-medium text-slate-900">{row.name}</span>
                    <span><StatusBadge>{row.status}</StatusBadge></span>
                    <span className="text-slate-500 tabular-nums self-center">{row.dur}</span>
                    <span className="text-slate-600 self-center">{row.outcome}</span>
                  </div>
                ))}
              </div>
            </DashboardFrame>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <div className="mb-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#050505] text-white flex items-center justify-center shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="headline text-2xl mb-1">Call detail · transcript & outcome</h3>
                  <p className="text-sm text-neutral-700 mt-1 font-medium">
                    Timeline, transcript, recording, and structured outcome — interest, next action, callback, handoff.
                  </p>
                </div>
            </div>
            <DashboardFrame activeNav="Sales" title="Riya Sharma" description="OUTBOUND · just now">
              <div className="flex flex-wrap gap-1.5 mb-3">
                <StatusBadge>COMPLETED</StatusBadge>
                <StatusBadge tone="accent">APPOINTMENT_BOOKED</StatusBadge>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  ["Agent", "Ava"],
                  ["Campaign", "Weekend Visit Drive"],
                  ["Duration", "3m 48s"],
                  ["Language", "EN → HI"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-slate-200 bg-white p-2.5">
                    <div className="text-[10px] text-slate-400">{k}</div>
                    <div className="text-[12px] font-medium text-slate-900">{v}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-1.5 mb-2 text-[10px] font-medium">
                {["Timeline", "Transcript", "Recording", "Outcome"].map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-md px-2.5 py-1 ${
                      i === 1 ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <Turn speaker="CUSTOMER · EN" text="Hi — I saw Skyline Residences in Whitefield. Any 3BHK left?" />
                <Turn speaker="AGENT · EN" text="Yes, two units. I can book a site visit Saturday 11 AM — shall I confirm?" />
                <Turn speaker="CUSTOMER · HI" text="Haan, Saturday theek hai." />
              </div>
            </DashboardFrame>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Feature
            icon={Languages}
            title="Built for India first"
            body="Illustrative EN/HI and regional language scenarios, calling windows, and telephony integration points."
          />
          <Feature
            icon={Wrench}
            title="Tools that close the loop"
            body="Proposed lead, callback, appointment, handoff, and do-not-call actions for a future backend."
          />
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3 text-slate-600">
      <span>{label}</span>
      <span className="font-medium text-slate-900 text-right">{value}</span>
    </div>
  );
}

function Turn({ speaker, text }: { speaker: string; text: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white px-3 py-2">
      <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400 mb-1">{speaker}</div>
      <div className="text-[12px] text-slate-800 leading-relaxed">{text}</div>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-slate-800" />
        </div>
        <div>
          <h3 className="headline text-xl mb-1">{title}</h3>
          <p className="text-sm text-neutral-700 leading-relaxed font-medium">{body}</p>
        </div>
      </div>
    </div>
  );
}
