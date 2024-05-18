/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        merriweather: ["merriweather", "sans-serif"]
      },
      screens: {
        'xs' : '320px',
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '50%': {
            width: '100%',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      animation: {
        typing:
          'typing 2s steps(21) infinite alternate forwards, blink 0.7s infinite',
      },
    },
  },
  plugins: [],
}
