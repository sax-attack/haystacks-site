/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
    colors: {
      danger: '#E4003A',
      accent: '#49FF80',
      transparent: '#00000000',
      background: {
        gray: '#606060',
        gray200: '#60606033',
        accent: '#202326',
        card: '#FFFFFF08',
        burgerMenu: '#161616',
        solutions: '#161616',
        input: 'red',
      },
      border: {
        light: '#FFFFFF',
        gray: '#FFFFFF33',
        "light-gray": "rgba(255, 255, 255, 0.8)"
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
