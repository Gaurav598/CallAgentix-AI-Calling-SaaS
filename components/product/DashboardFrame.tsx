"use client";

import React from "react";
import Image from "next/image";
import {
  BarChart3,
  Bot,
  GitBranch,
  Headset,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  Settings,
} from "lucide-react";

const NAV = [
  { label: "Dashboard", icon: LayoutDashboard, active: false },
  { label: "Agents", icon: Bot, active: false },
  { label: "Flows", icon: GitBranch, active: false },
  { label: "Customer Support", icon: Headset, active: false },
  { label: "Sales", icon: Megaphone, active: false },
  { label: "WhatsApp", icon: MessageCircle, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export function DashboardFrame({
  activeNav = "Dashboard",
  title,
  description,
  children,
  className = "",
}: {
  activeNav?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#d7e0ec] bg-[#f7f9fb]/95 shadow-[0_1px_0_rgba(255,255,255,0.85)_inset,0_24px_60px_-28px_rgba(15,23,42,0.4)] overflow-hidden backdrop-blur-sm ${className}`}
    >
      <div className="flex min-h-[380px]">
        <aside className="hidden sm:flex w-[200px] shrink-0 flex-col border-r border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 px-3.5 py-3.5 border-b border-[#e2e8f0]">
            <Image
              src="/brand/callagentix-mark.svg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-md object-cover"
            />
            <div className="min-w-0">
              <div className="text-[13px] font-semibold text-slate-900 leading-tight">CallAgentix</div>
              <div className="text-[10px] text-slate-500 leading-tight">Voice control plane</div>
            </div>
          </div>
          <div className="px-3 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Workspace
          </div>
          <nav className="px-2 pb-3 space-y-0.5">
            {NAV.map((item) => {
              const Icon = item.icon;
              const active = item.label === activeNav;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-[12px] font-medium ${
                    active
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-500"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </aside>

        <div className="flex-1 min-w-0 flex flex-col">
          <div className="px-4 sm:px-5 pt-4 pb-3 border-b border-[#e2e8f0] bg-white/70">
            <h3 className="text-[15px] font-semibold text-slate-900">{title}</h3>
            {description ? (
              <p className="text-[12px] text-slate-500 mt-0.5">{description}</p>
            ) : null}
          </div>
          <div className="p-4 sm:p-5 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function StatusBadge({
  children,
  tone = "outline",
}: {
  children: React.ReactNode;
  tone?: "outline" | "success" | "accent" | "warning";
}) {
  const tones = {
    outline: "bg-white text-slate-700 border-slate-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accent: "bg-sky-50 text-sky-700 border-sky-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
