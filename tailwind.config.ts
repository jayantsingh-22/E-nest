import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#7A1DC5",
        secondary: "#4C286A",
        tertiary: "#1A73E9",
        bookCardText: "#4C286A",
      },
      backgroundColor: {
        primary: "#7A1DC5",
        secondary: "#4C286A",
        tertiary: "#1A73E9",
        greenBadge: "#4D9C10",
        bookCard1: "#F5C6C9",
        bookCard2: "#DFECB4",
        bookCard3: "#CCEBE9",
        mentorColor1: "#E1D4E7",
        mentorColor2: "#CCEBE9",
        mentorColor3: "#DFECB4",
        mentorColor4: "#F5C6C9",
      },
      borderColor: {
        bookCardText: "#4C286A",
      },
      boxShadow: {
        light: "rgba(99, 99, 99, 0.1) 0px 1px 5px 1px",
      },
    },
  },
  plugins: [],
};

export default config;
