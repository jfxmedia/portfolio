/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      dropShadow: {
        'lg': '0px 5px 5px rgba(0, 0, 0, 0.10)',
        'xl': '-5px 5px 10px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        'colorDark': '#1f1f1f',
      }
    }
  },
  plugins: [],
}

