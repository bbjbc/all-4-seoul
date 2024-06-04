/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        gmarketmedium: ['GmarketSansMedium', 'sans-serif'],
        gmarketbold: ['GmarketSansBold', 'sans-serif'],
      },
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
        fadeout: {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(-5px)',
          },
        },
        expand: {
          '0%': { maxHeight: '0' },
          '100%': { maxHeight: '500px' },
        },
        collapse: {
          '0%': { maxHeight: '500px' },
          '100%': { maxHeight: '0' },
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
        swingandscale: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
          },
          '50%': {
            transform: 'rotate(90deg) scale(1.1)',
          },
          '100%': {
            transform: 'rotate(-90deg) scale(0.9)',
          },
        },
        swing: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(90deg)',
          },
          '100%': {
            transform: 'rotate(-90deg)',
          },
        },
        popupShow: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        popupHide: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
        slideinAndBounce: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)',
          },
          '50%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        gradientandBounceandslidein: {
          '0%, 100%': {
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: '100% 50%',
          },
        },
      },
      animation: {
        slidein: 'slidein 1s forwards',
        fadein: 'fadein 0.5s ease',
        fadeout: 'fadeout 0.5s ease',
        bounce: 'bounce 1.5s infinite',
        expand: 'expand 0.3s ease-in-out',
        collapse: 'collapse 0.3s ease-in-out',
        swingandscale: 'swingandscale 1s ease-in-out forwards',
        swing: 'swing 1s ease-in-out infinite',
        popupShow: 'popupShow 0.7s ease-in-out forwards',
        popupHide: 'popupHide 0.7s ease-in-out forwards',
        slideinAndBounce: 'slidein 1s forwards, bounce 1.5s infinite',
        gradientandBounceandslidein:
          'gradientandBounceandslidein 5s ease infinite, slidein 1s forwards, bounce 1s infinite',
      },
    },
  },
  plugins: [],
};
