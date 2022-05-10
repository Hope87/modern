module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    extend: {
      colors: {
        'bg': '#040C18',
        'footer': '#031B34',
        'blog': '#042c54',
        'text': '#81AFDD',
        'subtext': '#ff7849',
      },
      fontFamily: {
        base: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
