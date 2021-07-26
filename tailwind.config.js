const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
