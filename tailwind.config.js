module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#227B98',
      tumbleweed: '#DCAA85',
      berry: '#7A467F',
      metalgrey: '#edeff5',
    },
    fontFamily: {
      fontSans: ['Helvetica'],
    },
    extends: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
