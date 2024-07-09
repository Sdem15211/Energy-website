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
        DEFAULT: "1rem",
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
    },
    fontSize: {
      sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
      base: "clamp(1rem, 0.34vw + 0.91rem, 1.125rem)",
      lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
      label: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
      subtitle: "clamp(1rem, 1.56vw + 1.56rem, 1.25rem)",
      title: "clamp(2.44rem, 2.38vw + 1.85rem, 2.8rem)",
      features: "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
      section: "clamp(3.81rem, 5.18vw + 2.52rem, 4rem)",
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
