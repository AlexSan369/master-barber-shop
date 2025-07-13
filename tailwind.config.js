/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#E8EAE6', // Verde-cinza bem clarinho
        'text': '#3D3D3D',         // Cinza moderno
        'primary': '#2E4034',      // Verde musgo liso
        'accent': '#8A5E3C',       // Marrom rústico para botões
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Adicionamos este plugin para os cards de imagem
  ],
}