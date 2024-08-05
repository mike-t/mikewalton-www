/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Mikes Palette & Theme changes
      colors: {
        'blue': '##5fb8ff', 
        'purple': '#bf7beb',  
        'pink': '#e84576', 
        'orange': '#D25837', 
        'green': '#00c9ad', 
        'yellow': '#eab656', 
        'gray-dark': '#181618', 
        'gray': '#553f5b', 
        'gray-light': '#b4a7b7', 
        'white':'#fff6ff', 
        'black':'#19131a', 
      },
      fontFamily: {
        sans: ['var(--font-source-sans-3)'],
        serif: ['var(--font-roboto-slab)'],
        mono: ['var(--source_code_pro)'],
      },
    },
    fontFamily: {
      special: ['var(--bangers)'],
    }
  },
  plugins: [],
};