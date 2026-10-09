"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "silver";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-white text-black hover:bg-zinc-200 shadow-[0_0_24px_rgba(255,255,255,0.22)] hover:shadow-[0_0_32px_rgba(255,255,255,0.35)] border border-white/60",
      secondary:
        "bg-zinc-900/90 text-zinc-100 hover:bg-zinc-800 border border-white/10 hover:border-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.5)]",
      outline:
        "bg-transparent text-zinc-300 hover:text-white border border-white/15 hover:border-white/40 hover:bg-white/[0.04]",
      ghost:
        "bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.06]",
      silver:
        "bg-gradient-to-b from-zinc-100 to-zinc-300 text-black font-semibold border border-white hover:from-white hover:to-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.18)]",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs rounded-md gap-1.5",
      md: "h-10 px-4 py-2 text-sm rounded-lg gap-2",
      lg: "h-12 px-6 text-sm font-semibold rounded-lg gap-2.5",
      icon: "h-10 w-10 rounded-lg justify-center",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4 text-current mr-1.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
