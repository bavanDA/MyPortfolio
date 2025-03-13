module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-icon": "#1E90FF",
        seashell: "#FFF5EE",
        white: "#F9F6EE",
      },
      animation: {
        typing: "typing 3.5s steps(30) 1s forwards", // Define the typing animation
        blinkCaret: "blinkCaret 0.75s step-end infinite", // Define caret blink
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blinkCaret: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "#000" },
        },
      },
    },
  },
  plugins: [],
};
