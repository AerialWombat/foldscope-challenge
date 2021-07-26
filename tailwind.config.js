const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./src/**/*.jsx', './public/index.html'],
    options: {
      safelist: ['blue', 'dark-orange', 'light-orange', 'white'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      blue: '#16697A',
      'dark-orange': '#DB6400',
      'light-orange': '#FFA62B',
      white: '#F8F1F1',
    },
  },
};
