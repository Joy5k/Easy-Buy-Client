/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui:{
    themes:[
      {
    easytheme:{
          primary: '#4361ee',         
          secondary: "#3a86ff",               
         accent: "#384971",         
         neutral: "#405173",
         "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
