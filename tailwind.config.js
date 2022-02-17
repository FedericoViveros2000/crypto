const { colors } = require('tailwindcss/colors')

module.exports = {
  
  content: [
    "./src/App.vue",
    "./public/*.html",
    "./src/components/*.vue",
    "./src/views/*.vue"
  ],

  theme: {
    
      fontFamily: {
        'poppins' : ['Poppins']
      },

      fontWeight: {
        normal: '400',
        semibold: '500',
        bold: '700'
      },

      colors: {  
        'hover': '#f3f4f6',
        'red': '#d23240',
        'green': '#098551',
        'gray': '#d1d5db',  
        'white': '#fff',
        'primary':'#0052ff'
      }

  },
  plugins: [],
}
