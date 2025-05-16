import type { Config } from "tailwindcss"

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
        // 중국 전통 컬러 - 황금색 (Gold)
        gold: {
          50: "#fff9e6",
          100: "#ffefc0",
          200: "#ffe299",
          300: "#ffd166",
          400: "#ffc033",
          500: "#ffb000",
          600: "#e69b00",
          700: "#cc8800",
          800: "#b37400",
          900: "#8a5900",
        },
        // 중국 전통 컬러 - 붉은색 (Chinese Red)
        red: {
          50: "#fff1f1",
          100: "#ffe1e1",
          200: "#ffc7c7",
          300: "#ffa2a2",
          400: "#ff7070",
          500: "#ff3b3b",
          600: "#ff1111",
          700: "#e50000",
          800: "#c50000",
          900: "#a60000",
          950: "#850000",
        },
        // 중국 전통 컬러 - 어두운색 (Dark)
        dark: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#1a1a1a",
          950: "#0f0f0f",
        },
        // 중국 전통 컬러 - 옥색 (Jade)
        jade: {
          50: "#f2f9f6",
          100: "#e6f3ed",
          200: "#c0e2d2",
          300: "#8fcbb0",
          400: "#56ad8a",
          500: "#3a9070",
          600: "#2c7359",
          700: "#255e49",
          800: "#1f4a3a",
          900: "#1a3d31",
        },
        // 중국 전통 컬러 - 자주색 (Imperial Purple)
        imperial: {
          50: "#f9f5ff",
          100: "#f2e9ff",
          200: "#e5d4ff",
          300: "#d2b0ff",
          400: "#b77eff",
          500: "#9d4eff",
          600: "#8a2be2",
          700: "#7622c7",
          800: "#621da3",
          900: "#521b85",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        batang: ["BATANG", "serif"],
      },
     
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
