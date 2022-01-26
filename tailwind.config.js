const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        base: {
          blue: '#1798B5',
          lavender: '#4117B5',
          mint: '#1AB517',
          red: '#B53417',
          secondary: '#17b582',
          tan: '#b59317',
        },
        dark: {
          secondary: '#f4f7f899',
        },
        light: {
          blue: '#e0ecee',
          lavender: '#edecf3',
          mint: '#e0eee0',
          red: '#eee3e0',
          secondary: '#e0eeec',
          tan: '#eeebe0',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
