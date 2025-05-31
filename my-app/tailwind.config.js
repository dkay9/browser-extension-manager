/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: 'hsl(200, 60%, 99%)',
          100: 'hsl(0, 0%, 93%)',
          200: 'hsl(217, 61%, 90%)',
          300: 'hsl(0, 0%, 78%)',
          600: 'hsl(226, 11%, 37%)',
          700: 'hsl(225, 23%, 24%)',
          800: 'hsl(226, 25%, 17%)',
          900: 'hsl(227, 75%, 14%)',
        }
      }
    }
  },
  plugins: [],
}