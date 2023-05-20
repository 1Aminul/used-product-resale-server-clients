/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          primary: "#3ABFF8",
                   
          secondary: "#828DF8",
                   
          accent: "#F471B5",
                   
          neutral: "#262626",
         
                   
          "base-100": "#ffffff",
                   
          info: "#0CA6E9",
                   
          success: "#2BD4BD",
                   
          warning: "#F4C152",
                   
          error: "#E61E27",
        },
      },
    ],
  },

}
