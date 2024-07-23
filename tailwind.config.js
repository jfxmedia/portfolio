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
        'colorTeal': '#40738d'
      },
      keyframes: {
        bounceLimited: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
        shake : {
          '10%, 90%': {
              transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%' : {
              transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
              transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
              transform: 'translate3d(4px, 0, 0)'
          }
      }
      },
      animation: {
        bounceLimited: 'bounceLimited 1s ease-in-out 3',
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both 1',
      }
      
    },
  },
  plugins: [],
}

