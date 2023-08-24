/** @type {import('tailwindcss').Config} */
/* eslint-disable max-len */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    fontFamily: {
      script: ["Caveat"],
    },

    extend: {
      borderWidth: {
        6: "6px",
      },
      colors: {
        orangish: {
          50: "#fef9ec",
          100: "#fbeeca",
          200: "#f6dc91",
          300: "#f1c358",
          400: "#eead31",
          500: "#e68d1a",
          600: "#cb6a13",
          700: "#a94b14",
          800: "#8a3b16",
          900: "#713116",
          950: "#411707",
        },
        tan: {
          50: "#f9f7f7",
          100: "#f3eeed",
          200: "#e9e1df",
          300: "#d9cbc8",
          400: "#c9b5b1",
          500: "#ab8e88",
          600: "#93756f",
          700: "#7a605b",
          800: "#67514d",
          900: "#584744",
          950: "#2d2422",
        },
        maui: {
          50: "#f1f8f1",
          100: "#dfedde",
          200: "#bfdbbf",
          300: "#95c098",
          400: "#609966",
          500: "#46834f",
          600: "#34673c",
          700: "#295331",
          800: "#234229",
          900: "#1d3722",
          950: "#101e14",
        },
        alt: {
          50: "#f7f9ec",
          100: "#edf1d6",
          200: "#dce4b2",
          300: "#c3d284",
          400: "#aabe5d",
          500: "#8da33f",
          600: "#6e812f",
          700: "#556427",
          800: "#455024",
          900: "#3b4522",
          950: "#1e250e",
        },
        // light mode
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#609966", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#40513B", // blue-500
            emphasis: "#dfedde", // maui-100 // Island Badge
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "#EDF1D6", // white
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "#b4d1a4", // gray-200
          },
          ring: {
            DEFAULT: "#b4d1a4", // gray-200
          },
          content: {
            subtle: "#6b7280", // gray-400
            DEFAULT: "#384e2d", // gray-500
            emphasis: "#384e2d", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229", // custom
            muted: "#172554", // blue-950
            subtle: "#1e40af", // blue-800
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#60a5fa", // blue-400
            inverted: "#030712", // gray-950
          },
          background: {
            muted: "#131A2B", // custom
            subtle: "#1f2937", // gray-800
            DEFAULT: "#111827", // gray-900
            emphasis: "#d1d5db", // gray-300
          },
          border: {
            DEFAULT: "#1f2937", // gray-800
          },
          ring: {
            DEFAULT: "#1f2937", // gray-800
          },
          content: {
            subtle: "#374151", // gray-700
            DEFAULT: "#6b7280", // gray-600
            emphasis: "#e5e7eb", // gray-200
            strong: "#f9fafb", // gray-50
            inverted: "#000000", // black
          },
        },
      },
      boxShadow: {
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem"],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require("@headlessui/tailwindcss")],
};
