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
            50: '#f0f4f8',
            100: '#e1e7f0',
            200: '#c5d1e0',
            300: '#a3b5cc',
            400: '#7e96b8',
            500: '#627b9c',
            600: '#4c6482',
            700: '#28446b', // Navy Border
            800: '#1d3557', // Navy Active elements
            850: '#132847', // Navy Hover state / borders
            900: '#0f2038', // Navy Section panels
            950: '#0a192f', // Deep Navy base background
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
