module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-icon": "#1E90FF",
      },
      animation: {
        typing: "typing 3.5s steps(30) 1s forwards", // Define the typing animation
        blinkCaret: "blinkCaret 0.75s step-end infinite", // Define caret blink
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
