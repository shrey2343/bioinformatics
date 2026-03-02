/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          primary: '#0F7A5C',
          dark: '#0A5A44',
          light: '#12967A',
        },
        mint: '#A7F3D0',
        charcoal: '#1E1E1E',
        offwhite: '#F6F8F7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'biotech': '12px',
      },
    },
  },
  plugins: [],
}
