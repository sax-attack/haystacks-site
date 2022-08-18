/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        rubik: ["Rubik", "sans-serif"],
      },
    },
    colors: {
      accent: '#49FF80',
      background: {
        gray: '#606060',
        accent: '#202326',
        card: '#FFFFFF08',
        burgerMenu: '#161616',
        solutions: '#161616',
      },
      border: {
        light: '#FFFFFF',
        gray: '#FFFFFF33',
      },
      typography: {
        light: '#FFFFFF',
        light900: '#BDBDBD',
        main: '#000000',
        main900: '#2e2e2e',
      },
    },
  },
  plugins: [],
};
