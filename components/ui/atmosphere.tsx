"use client";

import React from "react";
import { motion } from "framer-motion";

export function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden>
      <div className="site-backdrop__base" />
      <div className="site-backdrop__mesh" />
      <div className="site-backdrop__beams" />
      <div className="site-backdrop__vignette" />
      <div className="site-backdrop__noise" />
    </div>
  );
}

export function Atmosphere({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "dense" | "dark";
}) {
  const dense = variant === "dense";

  return (
    <div className={`atmosphere ${className}`} aria-hidden>
      <div className="atmosphere__aurora" />
      <div className="atmosphere__grid" />
      <div className="atmosphere__dots" />
      <div className="atmosphere__rings" />
      <div className="atmosphere__noise" />

      <motion.div
        className={`atmosphere__orb atmosphere__orb--ink ${dense ? "w-[42rem] h-[42rem]" : "w-[32rem] h-[32rem]"}`}
        style={{ top: "-18%", right: "-6%" }}
        animate={{ x: [0, 28, -10, 0], y: [0, 18, -14, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`atmosphere__orb atmosphere__orb--slate ${dense ? "w-[34rem] h-[34rem]" : "w-[26rem] h-[26rem]"}`}
        style={{ bottom: "-12%", left: "-10%" }}
        animate={{ x: [0, -22, 16, 0], y: [0, -20, 12, 0], scale: [1, 1.06, 0.94, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="atmosphere__orb atmosphere__orb--mist w-[22rem] h-[22rem]"
        style={{ top: "38%", left: "42%" }}
        animate={{ x: [0, 14, -18, 0], y: [0, -16, 10, 0], opacity: [0.45, 0.7, 0.4, 0.45] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      {dense && (
        <motion.div
          className="atmosphere__orb atmosphere__orb--warm w-[18rem] h-[18rem]"
          style={{ top: "12%", left: "18%" }}
          animate={{ x: [0, 12, -8, 0], y: [0, 10, -12, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      )}

      <div className="atmosphere__horizon" />
      <div className="atmosphere__sheen" />
    </div>
  );
}

export function SignalGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 72C28 72 28 28 48 28C68 28 68 92 88 92C108 92 108 40 128 40C148 40 148 80 168 80C188 80 188 20 208 20C228 20 228 64 248 64C260 64 268 52 272 44"
        stroke="url(#signalStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[28, 40, 52, 64, 76, 88].map((y, i) => (
        <rect
          key={y}
          x={40 + i * 34}
          y={y}
          width="8"
          height={100 - y}
          rx="4"
          fill={i % 2 === 0 ? "#111111" : "#4b5563"}
          opacity={0.2 + i * 0.08}
          className="wave-bar"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
      <defs>
        <linearGradient id="signalStroke" x1="0" y1="0" x2="280" y2="0">
          <stop stopColor="#111111" stopOpacity="0.12" />
          <stop offset="0.5" stopColor="#111111" stopOpacity="0.55" />
          <stop offset="1" stopColor="#111111" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}
