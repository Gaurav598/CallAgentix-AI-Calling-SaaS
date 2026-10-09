"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export function Logo({ className = "", showText = true, size = "md", dark = false }: LogoProps) {
  const markSizes = {
    sm: "h-7 w-7",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const pixelSizes = {
    sm: 28,
    md: 32,
    lg: 40,
  };

  const textColor = dark ? "text-white" : "text-[#050505]";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <Image
        src="/brand/callagentix-mark.svg"
        alt="CallAgentix"
        width={pixelSizes[size]}
        height={pixelSizes[size]}
        className={`${markSizes[size]} rounded-[9px] object-cover`}
      />
      {showText && (
        <span className={`font-bold tracking-[-0.04em] ${textColor} ${textSizes[size]} font-display`}>
          CallAgentix
        </span>
      )}
    </div>
  );
}
