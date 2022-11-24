/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#24E6C6",

          "secondary": "#ED408B",

          "accent": "#0F6017",

          "natural": "#318642",

          "base-100": "#FAF7F5",

          "info": "#0C3714",

          "success": "#F0E54A",

          "warning": "#E61430",

          "error": "#61131D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
