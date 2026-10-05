/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0E14',
          surface: '#151922',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#FFFFFF',
          muted: '#94A3B8',
          accent: '#10B981',
          accentGlow: 'rgba(16, 185, 129, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
