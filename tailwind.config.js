/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        navColor: "#14213d",
        primary: "#edf2f4",
        secondary: "#d90429",
      },
    },
  },
  plugins: [],
};
