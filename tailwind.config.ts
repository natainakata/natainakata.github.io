import { text } from "stream/consumers";
import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      fontFamily: {
        sans: ["M PLUS 1p", "sans-serif"],
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      typography: (theme: PluginAPI["theme"]) => ({
        DEFAULT: {
          css: {
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "blockquote p::before": {
              content: "none",
            },
            "blockquote p::after": {
              content: "none",
            },
            "info > p": {
              backgroundColor: theme("colors.green.100"),
            }
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              color: theme("colors.gray.200"),
              "&:hover": {
                color: theme("colors.gray.200"),
              },
            },
            "h2 a": {
              color: theme("colors.gray.200"),
            },
            h1: {
              color: theme("colors.gray.200"),
            },
            h2: {
              color: theme("colors.gray.200"),
            },
            h3: {
              color: theme("colors.gray.200"),
            },
            h4: {
              color: theme("colors.gray.200"),
            },
            h5: {
              color: theme("colors.gray.200"),
            },
            h6: {
              color: theme("colors.gray.200"),
            },
            th: {
              color: theme("colors.gray.200"),
            },
            strong: {
              color: theme("colors.gray.200"),
            },
            code: {
              color: theme("colors.gray.200"),
            },
            figcaption: {
              color: theme("colors.gray.300"),
            },
            blockquote: {
              color: theme("colors.gray.200"),
            },
            "blockquote p::before": {
              content: "none",
            },
            "blockquote p::after": {
              content: "none",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "info p": {
              backgroundColor: theme("colors.green.200"),
              color: theme("colors.gray.800")
            },
            "info p a": {
              color: theme("colors.gray.800"),
              "&:hover": {
                color: theme("colors.gray.800"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-fontawesome")({
      version: 6,
    }),
  ],
  important: true,
};
export default config;
