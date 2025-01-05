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
      screens: {
        mobile: '320px',
        tablet: '640px', // Exemplo: Breakpoint para tablet a partir de 640px
        laptop:'1024px',
        desktop: '1280px',
      },
      colors:{
        primary: '#FBE7A1',  //amalero
        primaryText: '#402B18', //marrom escuro
        primaryIcon: '#402B18',
        secondary: '#F5E8D3', //amalero claro
        terciary: '#E68497', //rosa
        highlight: '#E63E67' //morango
      },
      borderRadius:{
        'extra-large': '2rem' //borda bem arredondada
      },
      animation:{
        'sumi-e-apareci': 'bg-secondary 0.5s ease'
      },
      backgroundImage:{
        'guardanapo-texture': "url('/src/assets/guardanapo/guardanapo.png')"
      },

    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: '#FBE7A1',
          secondary: '#F5E8D3',
          terciary: '#E68497',
          highlight: '#E63E67',
          neutral: '#402B18',
          'base-100': '#ffffff', // Cor de fundo padrão
          'base-content': '#402B18', // Cor de texto padrão
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
}

