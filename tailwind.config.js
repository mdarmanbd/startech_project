/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        deepBlue:'#081621',
        creamBrulee:'#ffe8a1',
        deepLightBlue:'#01132d',
        
      },
      fontSize:{
        15:'15px'
      },
      width:{
        10:'10%'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}