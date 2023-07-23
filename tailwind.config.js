/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgGray: '#FAFAFA',
        mainColor: '#4935FF',
      }
    },
  },
  plugins: [require("daisyui")],
}

