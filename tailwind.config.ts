import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',       // Tu carpeta app
    './pages/**/*.{js,ts,jsx,tsx,mdx}',     // Por si acaso
    './components/**/*.{js,ts,jsx,tsx,mdx}', // IMPORTANTE: 'components' en minúscula
    './data/**/*.{js,ts,jsx,tsx,mdx}',       // Vi que tienes una carpeta 'data'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;