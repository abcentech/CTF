/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ctf-crimson': '#BB1654',
        'ctf-purple': '#672A85',
        'ctf-pink': '#E60975',
        primary: '#BB1654', // Using crimson as primary as per user "Text colors: #BB1654"
        'primary-light': '#D61A63',
        accent: '#672A85',
        'accent-light': '#7E36A1',
        bg: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Roboto Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
