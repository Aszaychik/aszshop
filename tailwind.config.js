/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        navColor: "#14213d",
        primary: "#edf2f4",
        secondary: "#d90429",
        secondary2: "#ef233c",
      },
    },
  },
  plugins: [],
};
