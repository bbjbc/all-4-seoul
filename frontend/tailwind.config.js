/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        fadein: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-5px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        bounce: {
          '0%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        slidein: 'slidein 1s forwards',
        fadein: 'fadein 0.5s ease',
        bounce: 'bounce 1.5s infinite',
      },
    },
  },
  plugins: [],
};
