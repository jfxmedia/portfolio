/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        'lg': '-5px 5px 5px rgba(0, 0, 0, 0.10)',
        'xl': '-5px 5px 10px rgba(0, 0, 0, 0.10)',
      },
      boxShadow: {
        'lg': '0px 5px 20px rgba(0, 0, 0, 0.15)',
        'xl': '-5px 5px 10px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        'colorDark': '#2f2f2f',
      },
      keyframes: {
        bounceLimited: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },
      animation: {
        bounceLimited: 'bounceLimited 1s ease-in-out 3',
      },
    }
  },
  plugins: [],
}

