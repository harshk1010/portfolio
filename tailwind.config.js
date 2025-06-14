/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        maxContent: "1160px",
        maxContentTab: "650px"
      },
      fontFamily: {
        "mont": ['Montserrat', 'sans-serif'],
        "robo": ['Roboto', 'sans-serif'],
        mono: ["Roboto Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#222222",
        richgray: {
          800: "#2B2A2A",
          700: "#2B2A2A",
          100: "#999999"
        },
        richblue: "#699BF7",

        secondary: {
          50: "#FFFFFF",

        }

      }
    },
  },
  plugins: [],
}

