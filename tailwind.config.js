/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        graphite: {
          50: "#f6f6f7",
          100: "#e2e2e5",
          200: "#c5c5cb",
          300: "#9f9fa9",
          400: "#757582",
          500: "#5a5a66",
          600: "#44444d",
          700: "#2d2d33",
          800: "#1b1b1f",
          850: "#141417",
          900: "#0d0d10",
          950: "#060608",
        },
        silver: {
          100: "#ffffff",
          200: "#f0f2f5",
          300: "#d9dce1",
          400: "#b5bac3",
          500: "#9197a4",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "waveform": {
          "0%, 100%": { height: "20%" },
          "50%": { height: "100%" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "aurora": {
          "0%, 100%": { backgroundPosition: "50% 50%, 50% 50%" },
          "50%": { backgroundPosition: "100% 50%, 0% 50%" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "shimmer": "shimmer 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "radar-sweep": "radar-sweep 8s linear infinite",
        "waveform": "waveform 1.2s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
        "aurora": "aurora 15s ease infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
      },
      boxShadow: {
        "glow-sm": "0 0 20px -5px rgba(255, 255, 255, 0.1)",
        "glow-md": "0 0 35px -5px rgba(255, 255, 255, 0.15)",
        "glow-lg": "0 0 60px -15px rgba(255, 255, 255, 0.2)",
        "glow-cyan": "0 0 40px -10px rgba(6, 182, 212, 0.25)",
        "glow-emerald": "0 0 40px -10px rgba(16, 185, 129, 0.25)",
        "glow-violet": "0 0 40px -10px rgba(139, 92, 246, 0.25)",
        "inner-specular": "inset 0 1px 0 0 rgba(255, 255, 255, 0.12)",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
        "specular-gradient": "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.25), transparent)",
      },
    },
  },
  plugins: [],
};
