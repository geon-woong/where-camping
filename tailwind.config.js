const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './layouts/**/*.vue',
    './assets/**/*.{css,scss}',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './node_modules/litepie-datepicker/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Apple SD Gothic Neo',
        'Poppins',
        'Malgun Gothic',
        '맑은 고딕',
        'AppleGothic',
        'Dotum',
        '돋움',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        primary: colors.orange,
        info: colors.indigo,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red,
        'litepie-primary': colors.orange, // color system for light mode
        'litepie-secondary': colors.gray, // color system for dark mode
      },
      display: ['group-hover'],
      fontSize: {
        '3xl': [
          '32px',
          {
            letterSpacing: '-0.02em',
            lineHeight: '40px',
          },
        ],
        '4xl': [
          '48px',
          {
            letterSpacing: '-0.02em',
            lineHeight: '64px',
          },
        ],
      },
      height: {
        fit: 'fit-content',
      },
      minWidth: {
        96: '24rem',
        128: '36rem',
      },
      maxWidth: {
        '10xl': '96em',
        fit: 'fit-content',
      },
      underlineOffset: {
        1: '1px;',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled'],
      backgroundColor: ['active'],
      ring: ['active'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
