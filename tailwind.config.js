/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        tomato : 'hsl(4, 100%, 67%)',
        darkSlate: 'hsl(234, 29%, 20%)',
        cusGray: 'hsl(231, 7%, 60%)',
        charcoalGray: 'hsl(235, 18%, 26%)'
      },
    },
  },
  plugins: [],
}
