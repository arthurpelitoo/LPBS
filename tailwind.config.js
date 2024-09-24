/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pacifico: ['Pacifico', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors:{
        primary: '#FA96C0',  //rosio
        secondary: '#FBE7A1', //amarelo claro
        highlight: '#E63E67' //morango
      },
      textColor:{
        primaryText: '#402B18' //marrom escuro
      },
      borderRadius:{
        'extra-large': '2rem' //borda bem arredondada
      },
      animation:{
        'sumi-e-apareci': 'bg-secondary 0.5s ease'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

