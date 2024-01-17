/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black-transparent": "rgba(32, 32, 32, 0.73)",
      },
    },
  },
  plugins: [],
};
