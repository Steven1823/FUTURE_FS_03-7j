import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Core Brand Colors
        spotify: {
          green: "#1ED760", // Primary brand color
          black: "#121212", // Base background
          white: "#FFFFFF", // Text and UI elements
          gray: "#B3B3B3", // Secondary text
        },

        // Mood-Based Colors
        mood: {
          // Energetic - High energy, workout, party
          energetic: {
            primary: "#FF4081", // Vibrant pink
            secondary: "#FF9B3D", // Warm orange
            accent: "#FFDF3D", // Bright yellow
            bg: "#2D1428", // Deep background
            text: "#FFFFFF", // Text color
          },
          // Chill - Relaxed, calm, ambient
          chill: {
            primary: "#0DCCFF", // Soft blue
            secondary: "#1ED760", // Spotify green
            accent: "#4EEAFF", // Light cyan
            bg: "#0A2A3B", // Deep blue background
            text: "#FFFFFF", // Text color
          },
          // Focus - Concentration, work, study
          focus: {
            primary: "#9C42F5", // Purple
            secondary: "#0DCCFF", // Blue
            accent: "#B388FF", // Light purple
            bg: "#1A1033", // Deep purple background
            text: "#FFFFFF", // Text color
          },
          // Nostalgic - Throwbacks, classics
          nostalgic: {
            primary: "#FF6437", // Warm orange
            secondary: "#9C42F5", // Purple
            accent: "#FFB196", // Light peach
            bg: "#2B1A14", // Warm dark background
            text: "#FFFFFF", // Text color
          },
          // Melancholy - Emotional, reflective
          melancholy: {
            primary: "#5E81AC", // Muted blue
            secondary: "#81A1C1", // Light blue
            accent: "#A3BE8C", // Sage green
            bg: "#2E3440", // Dark slate
            text: "#ECEFF4", // Off-white text
          },
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      gradients: {
        // Energetic gradients
        "energetic-primary": "linear-gradient(135deg, #FF4081 0%, #FF9B3D 100%)",
        "energetic-surface": "linear-gradient(135deg, #2D1428 0%, #3D1A2A 100%)",

        // Chill gradients
        "chill-primary": "linear-gradient(135deg, #0DCCFF 0%, #1ED760 100%)",
        "chill-surface": "linear-gradient(135deg, #0A2A3B 0%, #0E3344 100%)",

        // Focus gradients
        "focus-primary": "linear-gradient(135deg, #9C42F5 0%, #0DCCFF 100%)",
        "focus-surface": "linear-gradient(135deg, #1A1033 0%, #251A42 100%)",

        // Nostalgic gradients
        "nostalgic-primary": "linear-gradient(135deg, #FF6437 0%, #9C42F5 100%)",
        "nostalgic-surface": "linear-gradient(135deg, #2B1A14 0%, #3A2A24 100%)",

        // Melancholy gradients
        "melancholy-primary": "linear-gradient(135deg, #5E81AC 0%, #81A1C1 100%)",
        "melancholy-surface": "linear-gradient(135deg, #2E3440 0%, #3B4252 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-wave": {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-wave": "pulse-wave 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
