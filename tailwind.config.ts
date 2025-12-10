import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',       // Tu carpeta app
    './components/**/*.{js,ts,jsx,tsx,mdx}', // IMPORTANTE: minúscula para coincidir con tu foto
    './data/**/*.{js,ts,jsx,tsx,mdx}',       // Tienes archivos aquí también
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;