/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "540px",
    },
    extend: {
      animation: {
        "slide-in-bck-left":
          "slide-in-bck-left 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "slide-in-bck-left": {
          "0%": {
            transform: "translateZ(700px) translateX(-400px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0) translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
