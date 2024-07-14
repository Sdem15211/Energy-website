import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "7rem",
        "2xl": "8rem",
      },
    },
    colors: {
      primary: {
        "50": "#f6fee7",
        "100": "#eafccb",
        "200": "#d7f99d",
        "300": "#bef264",
        "400": "#a5e635",
        "500": "#89cc16",
        "600": "#6ca30d",
        "700": "#547c0f",
        "800": "#456212",
        "900": "#3c5314",
        "950": "#1f2e05",
      },
      secondary: {
        "50": "#ecfdf9",
        "100": "#d1faf0",
        "200": "#a7f3e1",
        "300": "#6ee7ca",
        "400": "#34d3ad",
        "500": "#10b991",
        "600": "#059673",
        "700": "#04785c",
        "800": "#065f4a",
        "900": "#064e3d",
        "950": "#022c22",
      },
      transparent: "transparent",
      white: "#ffff",
      black: "#000",
      neutral: {
        "50": "#F5FAF9",
        "100": "#EDF2F1",
        "200": "#D9DEDD",
        "300": "#C7CFCD",
        "400": "#AEB5B4",
        "500": "#929C9A",
        "600": "#7F8786",
        "700": "#737A79",
        "800": "#646A69",
        "900": "#4C524F",
        "950": "#1D1F1E",
      },
      beige: "#FFF7ED",
    },
    fontSize: {
      sm: "clamp(0.7rem, 0.17vw + 0.76rem, 0.875rem)",
      base: "clamp(0.875rem, 0.34vw + 0.91rem, 1.125rem)",
      lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
      label: "clamp(1rem, 1vw + 1.31rem, 1.2rem)",
      subtitle: "clamp(1rem, 1.56vw + 1.56rem, 1.25rem)",
      title: "clamp(2.44rem, 2.38vw + 1.85rem, 2.8rem)",
      features: "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
      section: "clamp(3.81rem, 5.18vw + 2.52rem, 3.875rem)",
      hero: "clamp(4.77rem, 7.48vw + 2.9rem, 6rem)",
    },
  },
  extend: {
    backgroundImage: {},
    gridTemplateColumns: {},
    fontFamily: {},
    inset: {},
    padding: {},
    height: {},
    margin: {},
    borderRadius: {},
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
