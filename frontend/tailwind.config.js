/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          grey: {
            50: '#f8fafc',
            100: '#f2f2f7',
            200: '#e5e5ea',
            300: '#d1d1d6',
            400: '#a2a2a6',
            500: '#8e8e93',
            600: '#636366',
            700: '#48484a',
            800: '#2c2c2e',
            850: '#1c1c1e',
            900: '#121214',
            950: '#0a0a0c',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            400: '#4ade80',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            glow: '#00f5a0',
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            glow: '#ff8a00',
          }
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
