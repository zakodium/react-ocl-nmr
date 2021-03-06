'use strict';

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './test-app/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
