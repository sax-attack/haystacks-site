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
    backgroundImage: {
      bg: "url('./assets/Background.png')",
      sectionBg: "url('./assets/Section_Background.png')",
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
        gray500: 'rgba(255, 255, 255, 0.5)',
        'light-gray': 'rgba(255, 255, 255, 0.8)',
      },
      typography: {
        light: '#FFFFFF',
        light60: '#FFFFFF99',
        light900: '#BDBDBD',
        main: '#000000',
        main900: '#2e2e2e',
      },
    },
  },
  plugins: [],
};
