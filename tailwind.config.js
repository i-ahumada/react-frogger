/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#58FA3B",
        secondary: "#87E32B",
        tertiary: "#30FD8B",
        quaternary: "#528A1A",
        quinary: "#DEFD30"
      }
    },
  },
  plugins: [],
};

