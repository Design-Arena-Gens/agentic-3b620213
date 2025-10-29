import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#f9f9f9',
        charcoal: '#333333',
        purple: '#673ab7',
        gold: '#FFD700',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
