/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'particle',
    'particles',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#fafaf7',
        panel: '#f3f1ed',
        text: '#2b2a28',
        muted: '#6a6a6a',
        accent: '#7a99c1',
        border: 'rgba(0,0,0,0.08)',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}

