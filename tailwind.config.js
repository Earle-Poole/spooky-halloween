module.exports = {
  content: ['./src/**/*.{html,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.2s linear infinite',
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '10%': {
            transform: 'translate(0, 2px)',
          },
          '20%': {
            transform: 'translate(2px, 2px)',
          },
          '30%': {
            transform: 'translate(-2px, -2px)',
          },
          '40%': {
            transform: 'translate(0, 2px)',
          },
          '50%': {
            transform: 'translate(2px, -2px)',
          },
          '60%': {
            transform: 'translate(-2px, 2px)',
          },
          '70%': {
            transform: 'translate(-2px, 0)',
          },
          '80%': {
            transform: 'translate(0, -2px)',
          },
          '90%': {
            transform: 'translate(2px, 0)',
          },
          '100%': {
            transform: 'translate(2px, -2px)',
          },
        },
      },
    },
  },
  plugins: [],
}
