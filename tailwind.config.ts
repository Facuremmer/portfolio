import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    // Opción 1: Estándar (todo minúscula)
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',

    // Opción 2: Posibles Mayúsculas (El error común en Windows)
    './App/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './Pages/**/*.{js,ts,jsx,tsx,mdx}',

    // Opción 3: Por si usas carpeta 'src'
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;