/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  daisyui: {
    themes: [],
  },
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '550px',
      md: '700px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        'dBackgroundDark': '#E2DED1',
        'dBackgroundLight': '#F1EFE9',
        'dAccentPurple': '#9255E0',
        'dAccentOrange': '#E2A86D',
        'dDark': '#2D2735',
        'dGrey': '#525255',
        'dLight': '#E8E8E8'
      },
      fontFamily: {
        'sans':  ['calibre_reg', ...defaultTheme.fontFamily.sans],
        'mono': ['sfmono_reg', ...defaultTheme.fontFamily.mono]
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}