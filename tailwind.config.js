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
        primary: '#FBE7A1',  //amarelo claro
        secondary: '#E0CF90', //amarelo um pouco escuro
        highlight: '#FF6F61' //rosa leve
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

