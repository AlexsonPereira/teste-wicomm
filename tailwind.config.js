/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "shadow-img" : "box-shadow: 22px 19px 5px 1px rgba(245,245,245,1)"
      },
      backgroundImage: {
        "gradient": "linear-gradient(180deg, #161616 0%, rgba(22, 22, 22, 0) 100%)",
        "gradient2": "linear-gradient(0deg, #161616 0%, rgba(22, 22, 22, 0) 100%)",
      },
    },
  },
  plugins: [],
}
