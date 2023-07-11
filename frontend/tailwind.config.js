/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/*"
  ],
  theme: {
    extend: {},
    // animation: {
    //   'spin-slow': 'spin 3s linear infinite',
    // },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
  },
  plugins: [],
}

